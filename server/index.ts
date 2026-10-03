// okf-viewer server: loads OKF bundles, watches them for changes and serves a JSON API
// plus the built web app. Run: node server/index.ts --bundle name=/path/to/bundle
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { type Request, type Response, type NextFunction } from "express";
import compression from "compression";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { loadBundle, conceptFacetValues, type Bundle, type Concept } from "./bundle.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const webDist = path.resolve(here, "../dist/web");

// ---- configuration ---------------------------------------------------------
function parseArgs(argv: string[]) {
  const bundles: [string, string][] = [];
  let port = Number(process.env.OKF_PORT ?? 4747);
  let host = process.env.OKF_HOST ?? "127.0.0.1";
  for (const spec of (process.env.OKF_BUNDLES ?? "").split(",").filter(Boolean)) bundles.push(splitSpec(spec));
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--bundle" || a === "-b") bundles.push(splitSpec(argv[++i]));
    else if (a === "--port" || a === "-p") port = Number(argv[++i]);
    else if (a === "--host") host = argv[++i];
    else if (!a.startsWith("-")) bundles.push(splitSpec(a));
  }
  return { bundles, port, host };
}
function splitSpec(spec: string): [string, string] {
  const eq = spec.indexOf("=");
  const p = path.resolve((eq === -1 ? spec : spec.slice(eq + 1)).replace(/^~/, process.env.HOME ?? "~"));
  const name = eq === -1 ? path.basename(p) : spec.slice(0, eq);
  return [name, p];
}

const cfg = parseArgs(process.argv.slice(2));
if (cfg.bundles.length === 0) {
  console.error("usage: node server/index.ts --bundle name=/path/to/okf/bundle [--bundle ...] [--port 4747]");
  process.exit(1);
}

// ---- bundle state + live reload -------------------------------------------
const state = new Map<string, Bundle>();
const clients = new Set<Response>();

function load(name: string, root: string) {
  const prev = state.get(name);
  const t0 = Date.now();
  try {
    const b = loadBundle(name, root, (prev?.version ?? 0) + 1);
    state.set(name, b);
    console.log(`[okf] loaded ${name}: ${b.concepts.size} concepts in ${Date.now() - t0}ms (v${b.version})`);
    for (const res of clients) res.write(`event: changed\ndata: ${JSON.stringify({ bundle: name, version: b.version })}\n\n`);
  } catch (e) {
    console.error(`[okf] failed to load ${name}:`, e);
  }
}

for (const [name, root] of cfg.bundles) {
  if (!fs.existsSync(root)) {
    console.error(`[okf] bundle path does not exist: ${root}`);
    process.exit(1);
  }
  load(name, root);
  let timer: NodeJS.Timeout | undefined;
  fs.watch(root, { recursive: true }, (_ev, file) => {
    if (file && (String(file).includes("/.") || String(file).startsWith(".") || !String(file).endsWith(".md"))) return;
    clearTimeout(timer);
    timer = setTimeout(() => load(name, root), 400);
  });
}

// ---- optional Cloudflare Access JWT verification (defense in depth) -------
const team = process.env.CF_ACCESS_TEAM_DOMAIN; // e.g. myteam.cloudflareaccess.com
const aud = process.env.CF_ACCESS_AUD;
const allowedEmails = (process.env.CF_ACCESS_ALLOWED_EMAILS ?? "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
const jwks = team ? createRemoteJWKSet(new URL(`https://${team}/cdn-cgi/access/certs`)) : undefined;

async function accessGuard(req: Request, res: Response, next: NextFunction) {
  if (!jwks) return next();
  const cookie = /(?:^|;\s*)CF_Authorization=([^;]+)/.exec(req.header("cookie") ?? "")?.[1];
  const token = req.header("cf-access-jwt-assertion") ?? cookie;
  if (!token) return res.status(403).send("Forbidden: missing Cloudflare Access token");
  try {
    const { payload } = await jwtVerify(token, jwks, { issuer: `https://${team}`, audience: aud });
    const email = String(payload.email ?? "").toLowerCase();
    if (allowedEmails.length && !allowedEmails.includes(email)) return res.status(403).send("Forbidden");
    next();
  } catch {
    res.status(403).send("Forbidden: invalid Cloudflare Access token");
  }
}

// ---- API ------------------------------------------------------------------
const app = express();
app.disable("x-powered-by");
app.use(compression());
app.use(accessGuard);
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer");
  next();
});

function bundleOr404(req: Request, res: Response): Bundle | undefined {
  const b = state.get(String(req.params.b));
  if (!b) res.status(404).json({ error: "bundle not found" });
  return b;
}
const restPath = (req: Request) => {
  const p = (req.params as Record<string, unknown>).rest;
  return (Array.isArray(p) ? p.join("/") : String(p ?? "")).replace(/\/$/, "");
};
const latest = (c: Concept) => c.verified.map((v) => v.at).filter(Boolean).sort().pop();

function light(b: Bundle, c: Concept) {
  return {
    id: c.id,
    title: c.title,
    type: c.type,
    description: c.description,
    tags: c.tags,
    status: c.status,
    trust: c.trust,
    isStale: c.isStale,
    staleAfter: c.staleAfter,
    date: c.date,
    generatedAt: c.generated?.at,
    verifiedAt: latest(c),
    dir: c.dir,
    mtime: c.mtime,
    inDeg: b.backlinks.get(c.id)?.length ?? 0,
    outDeg: new Set(c.render.links.filter((l) => l.kind === "concept" && l.exists).map((l) => l.target)).size + c.fmRefs.length,
    facets: conceptFacetValues(c, b.facets),
  };
}

app.get("/api/bundles", (_req, res) => {
  res.json([...state.values()].map((b) => ({ name: b.name, title: b.title, concepts: b.concepts.size, version: b.version })));
});

app.get("/api/b/:b/manifest", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const types: Record<string, number> = {};
  for (const c of b.concepts.values()) types[c.type] = (types[c.type] ?? 0) + 1;
  res.json({
    name: b.name,
    title: b.title,
    version: b.version,
    loadedAt: b.loadedAt,
    okfVersion: b.dirs.get("")?.okfVersion,
    concepts: [...b.concepts.values()].map((c) => light(b, c)),
    dirs: [...b.dirs.values()].map((d) => ({ path: d.path, title: d.title, subdirs: d.subdirs, concepts: d.concepts, hasIndex: !!d.indexHtml, hasLog: !!d.logHtml })),
    facets: b.facets,
    stats: {
      types,
      issues: { error: b.issues.filter((i) => i.severity === "error").length, warning: b.issues.filter((i) => i.severity === "warning").length },
    },
  });
});

app.get("/api/b/:b/concept/*rest", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const id = restPath(req);
  const c = b.concepts.get(id);
  if (!c) return res.status(404).json({ error: "concept not found", id });
  const dir = b.dirs.get(c.dir)!;
  const idx = dir.concepts.indexOf(c.id);
  const links = c.render.links.filter((l) => l.kind === "concept");
  const out = [...new Map(links.map((l) => [l.target, { id: l.target, exists: l.exists }])).values()];
  res.json({
    ...light(b, c),
    path: c.path,
    resource: c.resource,
    generated: c.generated,
    verified: c.verified,
    sources: c.sources,
    fm: c.fm,
    html: c.render.html,
    outline: c.render.outline,
    footnoteDefs: c.render.footnoteDefs,
    footnoteRefs: c.render.footnoteRefs,
    outLinks: out,
    fmRefs: c.fmRefs,
    externalLinks: c.render.links.filter((l) => l.kind === "external").length,
    backlinks: b.backlinks.get(c.id) ?? [],
    siblings: { prev: idx > 0 ? dir.concepts[idx - 1] : undefined, next: idx < dir.concepts.length - 1 ? dir.concepts[idx + 1] : undefined, index: idx, total: dir.concepts.length },
    issues: b.issues.filter((i) => i.concept === c.id),
    words: c.text.split(/\s+/).filter(Boolean).length,
  });
});

app.get("/api/b/:b/preview/*rest", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const c = b.concepts.get(restPath(req));
  if (!c) return res.status(404).json({ error: "not found" });
  const excerpt = c.text.replace(/\s+/g, " ").slice(0, 420);
  res.json({ ...light(b, c), excerpt });
});

app.get("/api/b/:b/dir{/*rest}", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const d = b.dirs.get(restPath(req));
  if (!d) return res.status(404).json({ error: "directory not found" });
  const count = (p: string): number => {
    const x = b.dirs.get(p)!;
    return x.concepts.length + x.subdirs.reduce((n, s) => n + count(s), 0);
  };
  res.json({
    path: d.path,
    title: d.title,
    indexHtml: d.indexHtml,
    logHtml: d.logHtml,
    okfVersion: d.okfVersion,
    subdirs: d.subdirs.map((s) => ({ path: s, title: b.dirs.get(s)!.title, count: count(s) })),
    concepts: d.concepts,
    total: count(d.path),
  });
});

function snippet(text: string, terms: string[]): string {
  const flat = text.replace(/\s+/g, " ");
  const lower = flat.toLowerCase();
  let at = -1;
  for (const t of terms) {
    const i = lower.indexOf(t.toLowerCase());
    if (i !== -1 && (at === -1 || i < at)) at = i;
  }
  if (at === -1) return flat.slice(0, 180);
  const s = Math.max(0, at - 70);
  return (s > 0 ? "…" : "") + flat.slice(s, s + 200) + (s + 200 < flat.length ? "…" : "");
}

app.get("/api/b/:b/search", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const q = String(req.query.q ?? "").trim();
  const limit = Math.min(100, Number(req.query.limit ?? 30));
  if (!q) return res.json([]);
  let results = b.search.search(q);
  if (results.length === 0) results = b.search.search(q, { combineWith: "OR" });
  res.json(
    results.slice(0, limit).map((r) => {
      const c = b.concepts.get(r.id as string)!;
      return { id: c.id, score: r.score, terms: r.terms, snippet: snippet(c.text, r.terms) };
    }),
  );
});

app.get("/api/b/:b/graph", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const links: { source: string; target: string; kind: string }[] = [];
  const seen = new Set<string>();
  for (const c of b.concepts.values()) {
    for (const l of c.render.links) {
      if (l.kind !== "concept" || !l.exists || l.target === c.id) continue;
      const k = `${c.id}>${l.target}`;
      if (!seen.has(k)) { seen.add(k); links.push({ source: c.id, target: l.target, kind: "body" }); }
    }
    for (const r of c.fmRefs) {
      const k = `${c.id}>${r.target}`;
      if (!seen.has(k)) { seen.add(k); links.push({ source: c.id, target: r.target, kind: r.key }); }
    }
  }
  res.json({ nodes: [...b.concepts.keys()].map((id) => ({ id })), links });
});

app.get("/api/b/:b/health", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const byKind: Record<string, number> = {};
  for (const i of b.issues) byKind[i.kind] = (byKind[i.kind] ?? 0) + 1;
  const orphans = [...b.concepts.values()].filter((c) => !(b.backlinks.get(c.id)?.length)).map((c) => c.id);
  res.json({ issues: b.issues, byKind, orphans, conformant: !b.issues.some((i) => i.severity === "error") });
});

app.get("/api/b/:b/raw/*rest", (req, res) => {
  const b = bundleOr404(req, res);
  if (!b) return;
  const c = b.concepts.get(restPath(req));
  if (!c) return res.status(404).send("not found");
  res.type("text/plain; charset=utf-8").send(fs.readFileSync(path.join(b.root, c.path), "utf8"));
});

app.get("/api/events", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive", "X-Accel-Buffering": "no" });
  res.write("retry: 3000\n\n");
  clients.add(res);
  const ping = setInterval(() => res.write(": ping\n\n"), 25000);
  req.on("close", () => { clearInterval(ping); clients.delete(res); });
});

app.use("/api", (_req, res) => res.status(404).json({ error: "not found" }));

// ---- web app ----------------------------------------------------------------
if (fs.existsSync(webDist)) {
  app.use(express.static(webDist, { index: false, maxAge: "1h", setHeaders: (res, p) => { if (p.includes("/assets/")) res.setHeader("Cache-Control", "public, max-age=31536000, immutable"); } }));
  app.get("/{*rest}", (_req, res) => res.sendFile(path.join(webDist, "index.html")));
} else {
  app.get("/", (_req, res) => res.send("Web app not built. Run `npm run build`, or `npm run dev` for development."));
}

app.listen(cfg.port, cfg.host, () => {
  console.log(`[okf] listening on http://${cfg.host}:${cfg.port}${jwks ? " (Cloudflare Access JWT required)" : ""}`);
});
