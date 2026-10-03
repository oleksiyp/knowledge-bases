// Builds the static site into dist/web: run after `vite build` (VITE_OKF_STATIC=1).
// For every knowledge base in knowledge-bases.json it pre-renders the API payloads as JSON,
// serializes the search index, copies raw markdown, and writes one HTML entry per page with
// Open Graph tags so shared links unfurl with the right title and description.
//   SITE_URL=https://okf.example.com node scripts/build-static.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadBundle, type Bundle } from "../server/bundle.ts";
import {
  bundlesPayload, conceptPayload, dirPayload, graphPayload, healthPayload, manifestPayload, previewPayload, readKbConfig,
} from "../server/payloads.ts";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(repoRoot, "dist/web");
const siteUrl = (process.env.SITE_URL ?? "").replace(/\/$/, "");
const shell = fs.readFileSync(path.join(out, "index.html"), "utf8");
let files = 0;

function write(rel: string, data: string | object) {
  const p = path.join(out, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, typeof data === "string" ? data : JSON.stringify(data));
  files++;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]!);
const encPath = (p: string) => p.split("/").map(encodeURIComponent).join("/");

/** The SPA shell with page-specific <title> and social preview tags. */
function page(route: string, title: string, description: string) {
  const desc = description.replace(/\s+/g, " ").trim().slice(0, 300);
  const url = siteUrl ? `${siteUrl}${route}` : "";
  const meta = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:site_name" content="OKF Viewer" />`,
    url && `<meta property="og:url" content="${esc(url)}" />`,
    url && `<link rel="canonical" href="${esc(url)}" />`,
    `<meta name="twitter:card" content="summary" />`,
  ].filter(Boolean).join("\n    ");
  const html = shell.replace(/<title>[\s\S]*?<\/title>/, meta);
  write(path.join(route.replace(/^\//, ""), "index.html"), html);
}

const kbs = readKbConfig(path.join(repoRoot, "knowledge-bases.json"));
const bundles: Bundle[] = [];
const version = Date.now();

for (const kb of kbs) {
  const t0 = Date.now();
  const b = loadBundle(kb.name, kb.path, version, kb);
  bundles.push(b);
  const base = `data/b/${b.name}`;
  const route = `/b/${encodeURIComponent(b.name)}`;

  write(`${base}/manifest.json`, manifestPayload(b));
  write(`${base}/graph.json`, graphPayload(b));
  write(`${base}/health.json`, healthPayload(b));
  write(`${base}/search.json`, {
    index: b.search.toJSON(),
    texts: Object.fromEntries([...b.concepts.values()].map((c) => [c.id, c.text.replace(/\s+/g, " ").slice(0, 8000)])),
  });

  page(route, b.title, b.description ?? `${b.concepts.size} concepts`);
  for (const [view, label] of [["explore", "Explore"], ["timeline", "Timeline"], ["graph", "Graph"], ["health", "Health"]])
    page(`${route}/${view}`, `${label} · ${b.title}`, b.description ?? "");

  for (const c of b.concepts.values()) {
    write(`${base}/c/${c.id}.json`, conceptPayload(b, c));
    write(`${base}/p/${c.id}.json`, previewPayload(b, c));
    write(`raw/b/${b.name}/${c.id}.md`, fs.readFileSync(path.join(b.root, c.path), "utf8"));
    page(`${route}/c/${encPath(c.id)}`, `${c.title} · ${b.title}`, c.description || `${c.type} in ${b.title}`);
  }
  for (const d of b.dirs.keys()) {
    write(`${base}/d/${d || "_root"}.json`, dirPayload(b, d)!);
    if (d) page(`${route}/d/${encPath(d)}`, `${d} · ${b.title}`, `${b.dirs.get(d)!.concepts.length} concepts in ${d}`);
  }
  console.log(`[static] ${b.name}: ${b.concepts.size} concepts in ${Date.now() - t0}ms`);
}

write("data/bundles.json", bundlesPayload(bundles));
// Unknown URLs get the app shell (with a 404 status), which renders its own not-found state.
write("404.html", shell);
write("_headers", [
  "/assets/*",
  "  Cache-Control: public, max-age=31536000, immutable",
  "/data/*",
  "  Cache-Control: public, max-age=60, must-revalidate",
  "/raw/*",
  "  Content-Type: text/markdown; charset=utf-8",
  "/*",
  "  X-Content-Type-Options: nosniff",
  "  Referrer-Policy: strict-origin-when-cross-origin",
  "",
].join("\n"));
console.log(`[static] wrote ${files} files to ${path.relative(repoRoot, out)}`);
