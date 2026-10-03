// API payloads, shared by the dev server (server/index.ts) and the static site
// builder (scripts/build-static.ts) so both expose exactly the same data.
import fs from "node:fs";
import path from "node:path";
import { conceptFacetValues, type Bundle, type Concept } from "./bundle.ts";
import { snippet } from "../shared/search.ts";

export interface KbConfig {
  name: string;
  path: string;
  title?: string;
  description?: string;
}

/** Read knowledge-bases.json (repo root) into absolute-path entries. */
export function readKbConfig(file: string): KbConfig[] {
  const base = path.dirname(file);
  const list = JSON.parse(fs.readFileSync(file, "utf8")) as KbConfig[];
  return list.map((k) => ({ ...k, path: path.resolve(base, k.path) }));
}

const latest = (c: Concept) => c.verified.map((v) => v.at).filter(Boolean).sort().pop();

export function lightConcept(b: Bundle, c: Concept) {
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

export function bundlesPayload(bundles: Bundle[]) {
  return bundles.map((b) => ({ name: b.name, title: b.title, description: b.description, concepts: b.concepts.size, version: b.version }));
}

export function manifestPayload(b: Bundle) {
  const types: Record<string, number> = {};
  for (const c of b.concepts.values()) types[c.type] = (types[c.type] ?? 0) + 1;
  return {
    name: b.name,
    title: b.title,
    description: b.description,
    version: b.version,
    loadedAt: b.loadedAt,
    okfVersion: b.dirs.get("")?.okfVersion,
    concepts: [...b.concepts.values()].map((c) => lightConcept(b, c)),
    dirs: [...b.dirs.values()].map((d) => ({ path: d.path, title: d.title, subdirs: d.subdirs, concepts: d.concepts, hasIndex: !!d.indexHtml, hasLog: !!d.logHtml })),
    facets: b.facets,
    stats: {
      types,
      issues: { error: b.issues.filter((i) => i.severity === "error").length, warning: b.issues.filter((i) => i.severity === "warning").length },
    },
  };
}

export function conceptPayload(b: Bundle, c: Concept) {
  const dir = b.dirs.get(c.dir)!;
  const idx = dir.concepts.indexOf(c.id);
  const links = c.render.links.filter((l) => l.kind === "concept");
  const out = [...new Map(links.map((l) => [l.target, { id: l.target, exists: l.exists }])).values()];
  return {
    ...lightConcept(b, c),
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
  };
}

export function excerpt(c: Concept): string {
  return c.text.replace(/\s+/g, " ").slice(0, 420);
}

export function previewPayload(b: Bundle, c: Concept) {
  return { ...lightConcept(b, c), excerpt: excerpt(c) };
}

export function dirPayload(b: Bundle, dirPath: string) {
  const d = b.dirs.get(dirPath);
  if (!d) return undefined;
  const count = (p: string): number => {
    const x = b.dirs.get(p)!;
    return x.concepts.length + x.subdirs.reduce((n, s) => n + count(s), 0);
  };
  return {
    path: d.path,
    title: d.title,
    indexHtml: d.indexHtml,
    logHtml: d.logHtml,
    okfVersion: d.okfVersion,
    subdirs: d.subdirs.map((s) => ({ path: s, title: b.dirs.get(s)!.title, count: count(s) })),
    concepts: d.concepts,
    total: count(d.path),
  };
}

export function graphPayload(b: Bundle) {
  const links: { source: string; target: string; kind: string }[] = [];
  const seen = new Set<string>();
  for (const c of b.concepts.values()) {
    for (const l of c.render.links) {
      if (l.kind !== "concept" || !l.exists || l.target === c.id) continue;
      const k = `${c.id}>${l.target}`;
      if (!seen.has(k)) {
        seen.add(k);
        links.push({ source: c.id, target: l.target, kind: "body" });
      }
    }
    for (const r of c.fmRefs) {
      const k = `${c.id}>${r.target}`;
      if (!seen.has(k)) {
        seen.add(k);
        links.push({ source: c.id, target: r.target, kind: r.key });
      }
    }
  }
  return { nodes: [...b.concepts.keys()].map((id) => ({ id })), links };
}

export function healthPayload(b: Bundle) {
  const byKind: Record<string, number> = {};
  for (const i of b.issues) byKind[i.kind] = (byKind[i.kind] ?? 0) + 1;
  const orphans = [...b.concepts.values()].filter((c) => !b.backlinks.get(c.id)?.length).map((c) => c.id);
  return { issues: b.issues, byKind, orphans, conformant: !b.issues.some((i) => i.severity === "error") };
}

export function searchPayload(b: Bundle, q: string, limit: number) {
  let results = b.search.search(q);
  if (results.length === 0) results = b.search.search(q, { combineWith: "OR" });
  return results.slice(0, limit).map((r) => {
    const c = b.concepts.get(r.id as string)!;
    return { id: c.id, score: r.score, terms: r.terms, snippet: snippet(c.text, r.terms) };
  });
}
