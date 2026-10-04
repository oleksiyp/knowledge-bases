// Checks the built deployment contract, including project-path hosting and deep links.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { normalizeBasePath, withBasePath } from "../shared/paths.ts";

const root = path.resolve("dist/web");
const base = normalizeBasePath(process.env.BASE_PATH);
const site = (process.env.SITE_URL ?? "").replace(/\/$/, "");
const read = (p: string) => fs.readFileSync(path.join(root, p), "utf8");
const json = (p: string) => JSON.parse(read(p));
const config = JSON.parse(fs.readFileSync("knowledge-bases.json", "utf8"));
const bundles = json("data/bundles.json");
assert.deepEqual(bundles.map((b: { name: string }) => b.name), config.map((b: { name: string }) => b.name));
assert(!bundles.some((b: { name: string }) => b.name === "octopus-organization-kb"));
assert(fs.existsSync(path.join(root, ".nojekyll")));

function checkPage(route: string) {
  const html = read(route ? `${route}/index.html` : "index.html");
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const url = match[1];
    if (!url.startsWith("/")) continue;
    assert(url.startsWith(base), `Unprefixed asset: ${url}`);
    const local = decodeURIComponent(url.slice(base.length));
    assert(fs.existsSync(path.join(root, local)), `Missing asset: ${url}`);
  }
  if (route && site) assert(html.includes(`href="${site}/${route}"`), `Wrong canonical: ${route}`);
}
function checkLinks(html: string) {
  for (const match of html.matchAll(/href="(\/[^" ]*)"/g)) {
    const href = match[1];
    if (href.startsWith("//")) continue;
    assert(href.startsWith(withBasePath(base, "b/")), `Unprefixed rendered link: ${href}`);
  }
}
checkPage("");
let concepts = 0;
for (const b of bundles) {
  const data = `data/b/${b.name}`;
  const route = `b/${b.name}`;
  const manifest = json(`${data}/manifest.json`);
  assert(json(`${data}/search.json`).index);
  assert(json(`${data}/graph.json`).nodes);
  assert(json(`${data}/health.json`).issues);
  for (const suffix of ["", "/explore", "/timeline", "/graph", "/health"]) checkPage(route + suffix);
  for (const c of manifest.concepts) {
    const payload = json(`${data}/c/${c.id}.json`);
    assert.equal(payload.id, c.id);
    checkLinks(payload.html);
    assert.equal(json(`${data}/p/${c.id}.json`).id, c.id);
    read(`raw/b/${b.name}/${c.id}.md`);
    checkPage(`${route}/c/${c.id.split("/").map(encodeURIComponent).join("/")}`);
    concepts++;
  }
  for (const d of manifest.dirs) {
    const payload = json(`${data}/d/${d.path || "_root"}.json`);
    checkLinks(payload.indexHtml ?? "");
    checkLinks(payload.logHtml ?? "");
    if (d.path) checkPage(`${route}/d/${d.path}`);
  }
}
console.log(`Static deployment checks passed: ${bundles.length} bundles, ${concepts} concepts, base ${base}`);
