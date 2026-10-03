// Local dev/preview server: serves the knowledge bases from knowledge-bases.json (or --bundle
// arguments) through a JSON API with live reload. The published site is the static build
// (scripts/build-static.ts), which pre-renders the same payloads.
//   node server/index.ts                       # knowledge-bases.json
//   node server/index.ts --bundle name=/path   # ad-hoc bundles
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { type Request, type Response } from "express";
import compression from "compression";
import { loadBundle, type Bundle } from "./bundle.ts";
import {
  bundlesPayload, conceptPayload, dirPayload, graphPayload, healthPayload, manifestPayload,
  previewPayload, readKbConfig, searchPayload, type KbConfig,
} from "./payloads.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const webDist = path.join(repoRoot, "dist/web");

function parseArgs(argv: string[]) {
  const kbs: KbConfig[] = [];
  let port = Number(process.env.OKF_PORT ?? 4747);
  let host = process.env.OKF_HOST ?? "127.0.0.1";
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--bundle" || a === "-b") kbs.push(splitSpec(argv[++i]));
    else if (a === "--port" || a === "-p") port = Number(argv[++i]);
    else if (a === "--host") host = argv[++i];
    else if (!a.startsWith("-")) kbs.push(splitSpec(a));
  }
  if (kbs.length === 0) {
    const cfg = path.join(repoRoot, "knowledge-bases.json");
    if (fs.existsSync(cfg)) kbs.push(...readKbConfig(cfg));
  }
  return { kbs, port, host };
}
function splitSpec(spec: string): KbConfig {
  const eq = spec.indexOf("=");
  const p = path.resolve((eq === -1 ? spec : spec.slice(eq + 1)).replace(/^~/, process.env.HOME ?? "~"));
  return { name: eq === -1 ? path.basename(p) : spec.slice(0, eq), path: p };
}

const cfg = parseArgs(process.argv.slice(2));
if (cfg.kbs.length === 0) {
  console.error("No knowledge bases: add them to knowledge-bases.json or pass --bundle name=/path");
  process.exit(1);
}

// ---- bundle state + live reload -------------------------------------------
const state = new Map<string, Bundle>();
const clients = new Set<Response>();

function load(kb: KbConfig) {
  const prev = state.get(kb.name);
  const t0 = Date.now();
  try {
    const b = loadBundle(kb.name, kb.path, (prev?.version ?? 0) + 1, kb);
    state.set(kb.name, b);
    console.log(`[okf] loaded ${kb.name}: ${b.concepts.size} concepts in ${Date.now() - t0}ms (v${b.version})`);
    for (const res of clients) res.write(`event: changed\ndata: ${JSON.stringify({ bundle: kb.name, version: b.version })}\n\n`);
  } catch (e) {
    console.error(`[okf] failed to load ${kb.name}:`, e);
  }
}

for (const kb of cfg.kbs) {
  if (!fs.existsSync(kb.path)) {
    console.error(`[okf] bundle path does not exist: ${kb.path}`);
    process.exit(1);
  }
  load(kb);
  let timer: NodeJS.Timeout | undefined;
  fs.watch(kb.path, { recursive: true }, (_ev, file) => {
    const f = String(file ?? "");
    if (!f.endsWith(".md") || f.split("/").some((s) => s.startsWith("."))) return;
    clearTimeout(timer);
    timer = setTimeout(() => load(kb), 400);
  });
}

// ---- API ------------------------------------------------------------------
const app = express();
app.disable("x-powered-by");
app.use(compression());

function bundleOr404(req: Request, res: Response): Bundle | undefined {
  const b = state.get(String(req.params.b));
  if (!b) res.status(404).json({ error: "bundle not found" });
  return b;
}
const restPath = (req: Request) => {
  const p = (req.params as Record<string, unknown>).rest;
  return (Array.isArray(p) ? p.join("/") : String(p ?? "")).replace(/\/$/, "");
};

app.get("/api/bundles", (_req, res) => res.json(bundlesPayload([...state.values()])));
app.get("/api/b/:b/manifest", (req, res) => {
  const b = bundleOr404(req, res);
  if (b) res.json(manifestPayload(b));
});
app.get("/api/b/:b/concept/*rest", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const c = b.concepts.get(restPath(req));
  if (!c) return res.status(404).json({ error: "concept not found" });
  res.json(conceptPayload(b, c));
});
app.get("/api/b/:b/preview/*rest", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const c = b.concepts.get(restPath(req));
  if (!c) return res.status(404).json({ error: "not found" });
  res.json(previewPayload(b, c));
});
app.get("/api/b/:b/dir{/*rest}", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const d = dirPayload(b, restPath(req));
  if (!d) return res.status(404).json({ error: "directory not found" });
  res.json(d);
});
app.get("/api/b/:b/search", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const q = String(req.query.q ?? "").trim();
  res.json(q ? searchPayload(b, q, Math.min(100, Number(req.query.limit ?? 30))) : []);
});
app.get("/api/b/:b/graph", (req, res) => {
  const b = bundleOr404(req, res);
  if (b) res.json(graphPayload(b));
});
app.get("/api/b/:b/health", (req, res) => {
  const b = bundleOr404(req, res);
  if (b) res.json(healthPayload(b));
});
app.get("/api/b/:b/raw/*rest", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const c = b.concepts.get(restPath(req));
  if (!c) return res.status(404).send("not found");
  res.type("text/plain; charset=utf-8").send(fs.readFileSync(path.join(b.root, c.path), "utf8"));
});
app.get("/api/events", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" });
  res.write("retry: 3000\n\n");
  clients.add(res);
  const ping = setInterval(() => res.write(": ping\n\n"), 25000);
  req.on("close", () => {
    clearInterval(ping);
    clients.delete(res);
  });
});
app.use("/api", (_req, res) => res.status(404).json({ error: "not found" }));

// ---- web app ----------------------------------------------------------------
if (fs.existsSync(path.join(webDist, "index.html"))) {
  app.use(express.static(webDist, { index: false }));
  app.get("/{*rest}", (_req, res) => res.sendFile(path.join(webDist, "index.html")));
} else {
  app.get("/", (_req, res) => res.send("Web app not built. Run `npm run build`, or `npm run dev` for development."));
}

app.listen(cfg.port, cfg.host, () => console.log(`[okf] listening on http://${cfg.host}:${cfg.port}`));
