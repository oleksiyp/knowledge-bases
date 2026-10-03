// Loads an OKF bundle (spec v0.2) from disk into an in-memory model:
// concepts, directory indexes, logs, link graph, facets and health issues.
import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import MiniSearch from "minisearch";
import { renderMarkdown, type RenderResult } from "./render.ts";
import { SEARCH_OPTIONS } from "../shared/search.ts";

export type TrustTier = "unverified" | "machine-confirmed" | "human-reviewed";

export interface Source {
  id?: string;
  resource: string;
  title?: string;
  author?: string;
  usage_count?: number;
  last_modified?: string;
  usage_window?: unknown;
}

export interface Verification {
  by: string;
  at?: string;
}

export interface Issue {
  severity: "error" | "warning" | "info";
  kind: string;
  message: string;
  concept?: string;
}

export interface Backlink {
  from: string;
  via: string; // "body" or "frontmatter:<key>"
  snippet?: string;
}

export interface Concept {
  id: string;
  path: string; // bundle-relative file path
  dir: string; // bundle-relative directory ("" for root)
  type: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  trust: TrustTier;
  verified: Verification[];
  generated?: { by?: string; at?: string };
  staleAfter?: string;
  isStale: boolean;
  resource?: string;
  sources: Source[];
  fm: Record<string, unknown>;
  date?: string; // primary date used by the timeline
  mtime: number;
  render: RenderResult;
  fmRefs: { key: string; target: string }[];
  text: string;
}

export interface DirInfo {
  path: string; // "" for root, "projects/ai-models" etc.
  name: string;
  title: string;
  indexHtml?: string;
  logHtml?: string;
  concepts: string[];
  subdirs: string[];
  okfVersion?: string;
}

export interface Facet {
  key: string;
  label: string;
  multi: boolean;
  values: { value: string; count: number }[];
}

export interface Bundle {
  name: string;
  root: string;
  title: string;
  description?: string;
  loadedAt: number;
  version: number;
  concepts: Map<string, Concept>;
  dirs: Map<string, DirInfo>;
  backlinks: Map<string, Backlink[]>;
  facets: Facet[];
  issues: Issue[];
  search: MiniSearch;
}

const RESERVED = new Set(["index.md", "log.md"]);
const CORE_KEYS = new Set([
  "type", "title", "description", "resource", "tags", "sources", "usage_window",
  "generated", "verified", "status", "stale_after", "timestamp",
]);
const DATE_RE = /^\d{4}-\d{2}-\d{2}([T ][\d:.]+(Z|[+-]\d{2}:?\d{2})?)?$/;
const DATEISH_RE = /^\d{4}-\d{2}(-\d{2})?/;

function splitFrontmatter(text: string): { fm: string | null; body: string } {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) return { fm: null, body: text };
  const m = /\r?\n---[ \t]*(\r?\n|$)/.exec(text.slice(3));
  if (!m) return { fm: null, body: text };
  const end = 3 + m.index;
  return { fm: text.slice(text.indexOf("\n") + 1, end), body: text.slice(end + m[0].length) };
}

function humanize(name: string): string {
  const s = name.replace(/\.md$/, "").replace(/[-_]+/g, " ").trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function asString(v: unknown): string | undefined {
  if (v === null || v === undefined) return undefined;
  if (v instanceof Date) return v.toISOString();
  return String(v);
}

function asList<T>(v: unknown): T[] {
  if (v === null || v === undefined) return [];
  return (Array.isArray(v) ? v : [v]) as T[];
}

function trustTier(verified: Verification[]): TrustTier {
  if (verified.length === 0) return "unverified";
  if (verified.some((v) => String(v.by).startsWith("human:"))) return "human-reviewed";
  return "machine-confirmed";
}

function walk(root: string, rel = "", out: string[] = []): string[] {
  for (const ent of fs.readdirSync(path.join(root, rel), { withFileTypes: true })) {
    if (ent.name.startsWith(".") || ent.name === "node_modules") continue;
    const r = rel ? `${rel}/${ent.name}` : ent.name;
    if (ent.isDirectory()) walk(root, r, out);
    else if (ent.name.endsWith(".md")) out.push(r);
  }
  return out;
}

function dirOf(rel: string): string {
  const i = rel.lastIndexOf("/");
  return i === -1 ? "" : rel.slice(0, i);
}

/** Resolve a frontmatter string to a concept id if it names one. */
function resolveRef(value: string, fromDir: string, ids: Set<string>): string | undefined {
  if (typeof value !== "string" || value.length > 300 || /^[a-z]+:\/\//i.test(value)) return undefined;
  let v = value.trim().replace(/#.*$/, "");
  if (!v) return undefined;
  const candidates: string[] = [];
  const strip = (s: string) => s.replace(/^\/+/, "").replace(/\.md$/, "");
  if (v.startsWith("/")) candidates.push(strip(v));
  else {
    candidates.push(strip(v));
    candidates.push(strip(path.posix.normalize(path.posix.join(fromDir, v))));
  }
  return candidates.find((c) => ids.has(c));
}

function primaryDate(fm: Record<string, unknown>): string | undefined {
  for (const k of ["date", "event_date", "published", "as_of", "from"]) {
    const s = asString(fm[k]);
    if (s && DATE_RE.test(s)) return s.slice(0, 10);
  }
  return undefined;
}

export function loadBundle(name: string, root: string, version: number, meta: { title?: string; description?: string } = {}): Bundle {
  const files = walk(root).sort();
  const issues: Issue[] = [];
  const raw: { rel: string; fm: Record<string, unknown> | null; body: string; mtime: number }[] = [];
  const dirs = new Map<string, DirInfo>();

  const ensureDir = (d: string): DirInfo => {
    let info = dirs.get(d);
    if (!info) {
      info = { path: d, name: d.split("/").pop() || name, title: d ? humanize(d.split("/").pop()!) : name, concepts: [], subdirs: [] };
      dirs.set(d, info);
      if (d) {
        const parent = ensureDir(dirOf(d));
        if (!parent.subdirs.includes(d)) parent.subdirs.push(d);
      }
    }
    return info;
  };
  ensureDir("");

  for (const rel of files) {
    const abs = path.join(root, rel);
    const text = fs.readFileSync(abs, "utf8");
    const mtime = fs.statSync(abs).mtimeMs;
    const { fm, body } = splitFrontmatter(text);
    let parsed: Record<string, unknown> | null = null;
    if (fm !== null) {
      try {
        const y = parseYaml(fm);
        parsed = y && typeof y === "object" && !Array.isArray(y) ? (y as Record<string, unknown>) : {};
      } catch (e) {
        issues.push({ severity: "error", kind: "yaml", message: `YAML error: ${(e as Error).message.split("\n")[0]}`, concept: rel.replace(/\.md$/, "") });
        parsed = {};
      }
    }
    raw.push({ rel, fm: parsed, body, mtime });
    ensureDir(dirOf(rel));
  }

  const ids = new Set(raw.filter((r) => !RESERVED.has(path.posix.basename(r.rel))).map((r) => r.rel.replace(/\.md$/, "")));
  const dirSet = new Set(dirs.keys());
  const concepts = new Map<string, Concept>();
  const backlinks = new Map<string, Backlink[]>();
  const addBacklink = (to: string, b: Backlink) => {
    const list = backlinks.get(to) ?? [];
    if (!list.some((x) => x.from === b.from && x.via === b.via)) list.push(b);
    backlinks.set(to, list);
  };
  const now = Date.now();

  for (const r of raw) {
    const base = path.posix.basename(r.rel);
    const dir = dirOf(r.rel);
    if (RESERVED.has(base)) {
      const info = ensureDir(dir);
      const rendered = renderMarkdown(r.body, { bundle: name, fromDir: dir, ids, dirs: dirSet, sources: [] });
      if (base === "index.md") {
        // OKF index entries are "* [Title](url) - description": drop the separator so the
        // description can sit under the title.
        info.indexHtml = rendered.html.replace(/(<li>(?:\s*<p>)?\s*<a [^>]*>[\s\S]*?<\/a>)\s*[-–—]\s+/g, "$1 ");
        if (r.fm && r.fm.okf_version) info.okfVersion = String(r.fm.okf_version);
        if (r.fm && dir !== "") issues.push({ severity: "warning", kind: "index-frontmatter", message: `${r.rel}: index.md outside the bundle root should not carry frontmatter` });
      } else {
        info.logHtml = rendered.html;
      }
      continue;
    }
    const id = r.rel.replace(/\.md$/, "");
    const fm = r.fm ?? {};
    if (r.fm === null) issues.push({ severity: "error", kind: "frontmatter", message: "Missing YAML frontmatter", concept: id });
    const type = asString(fm.type)?.trim() || "";
    if (!type && r.fm !== null) issues.push({ severity: "error", kind: "type", message: "Frontmatter has no non-empty `type`", concept: id });

    const sources: Source[] = asList<Record<string, unknown>>(fm.sources)
      .filter((s) => s && typeof s === "object")
      .map((s) => ({
        id: asString(s.id),
        resource: asString(s.resource) ?? "",
        title: asString(s.title),
        author: asString(s.author),
        usage_count: typeof s.usage_count === "number" ? s.usage_count : undefined,
        last_modified: asString(s.last_modified),
      }));
    const verified: Verification[] = asList<Record<string, unknown>>(fm.verified)
      .filter((v) => v && typeof v === "object")
      .map((v) => ({ by: asString(v.by) ?? "unknown", at: asString(v.at) }));
    const gen = fm.generated && typeof fm.generated === "object" ? (fm.generated as Record<string, unknown>) : undefined;
    const staleAfter = asString(fm.stale_after);
    const isStale = !!staleAfter && !Number.isNaN(Date.parse(staleAfter)) && now >= Date.parse(staleAfter);

    const render = renderMarkdown(r.body, { bundle: name, fromDir: dir, ids, dirs: dirSet, sources });
    for (const l of render.links) {
      if (l.kind === "concept") {
        if (l.exists) addBacklink(l.target, { from: id, via: "body", snippet: l.snippet });
        else issues.push({ severity: "warning", kind: "broken-link", message: `Broken link to /${l.target}.md (not yet written)`, concept: id });
      }
    }
    for (const label of render.footnoteRefs) {
      if (!sources.some((s) => s.id === label) && !render.footnoteDefs[label])
        issues.push({ severity: "warning", kind: "footnote", message: `Footnote [^${label}] has no matching sources[].id or definition`, concept: id });
      else if (!sources.some((s) => s.id === label))
        issues.push({ severity: "info", kind: "footnote-unkeyed", message: `Footnote [^${label}] is not keyed to a sources[].id`, concept: id });
    }

    const fmRefs: { key: string; target: string }[] = [];
    for (const [k, v] of Object.entries(fm)) {
      if (CORE_KEYS.has(k)) continue;
      for (const item of asList<unknown>(v)) {
        if (typeof item !== "string") continue;
        const t = resolveRef(item, dir, ids);
        if (t && t !== id) {
          fmRefs.push({ key: k, target: t });
          addBacklink(t, { from: id, via: `frontmatter:${k}` });
        }
      }
    }

    const concept: Concept = {
      id,
      path: r.rel,
      dir,
      type: type || "Untyped",
      title: asString(fm.title) || humanize(base),
      description: asString(fm.description) ?? "",
      tags: asList<unknown>(fm.tags).map(String),
      status: asString(fm.status) || "stable",
      trust: trustTier(verified),
      verified,
      generated: gen ? { by: asString(gen.by), at: asString(gen.at) } : fm.timestamp ? { at: asString(fm.timestamp) } : undefined,
      staleAfter,
      isStale,
      resource: asString(fm.resource),
      sources,
      fm,
      date: primaryDate(fm),
      mtime: r.mtime,
      render,
      fmRefs,
      text: render.text,
    };
    concepts.set(id, concept);
    ensureDir(dir).concepts.push(id);
  }

  for (const d of dirs.values()) {
    d.subdirs.sort();
    d.concepts.sort((a, b) => concepts.get(a)!.title.localeCompare(concepts.get(b)!.title));
  }
  for (const c of concepts.values()) {
    if (c.isStale) issues.push({ severity: "info", kind: "stale", message: `Stale since ${c.staleAfter}`, concept: c.id });
    if (c.status === "deprecated") issues.push({ severity: "info", kind: "deprecated", message: "Deprecated concept", concept: c.id });
  }

  const search = new MiniSearch(SEARCH_OPTIONS);
  search.addAll(
    [...concepts.values()].map((c) => ({ id: c.id, title: c.title, description: c.description, tags: c.tags.join(" "), type: c.type, text: c.text })),
  );

  return {
    name,
    root,
    title: meta.title ?? name,
    description: meta.description,
    loadedAt: Date.now(),
    version,
    concepts,
    dirs,
    backlinks,
    facets: computeFacets([...concepts.values()]),
    issues,
    search,
  };
}

/** Infer browsable facets from frontmatter: low-cardinality scalar keys,
 *  short string lists, and one level of nested scalar maps. */
function computeFacets(concepts: Concept[]): Facet[] {
  const buckets = new Map<string, { multi: boolean; counts: Map<string, number>; docs: number; lenSum: number; n: number }>();
  const add = (key: string, values: string[], multi: boolean) => {
    if (values.length === 0) return;
    let b = buckets.get(key);
    if (!b) buckets.set(key, (b = { multi, counts: new Map(), docs: 0, lenSum: 0, n: 0 }));
    b.multi ||= multi;
    b.docs++;
    for (const v of new Set(values)) {
      b.counts.set(v, (b.counts.get(v) ?? 0) + 1);
      b.lenSum += v.length;
      b.n++;
    }
  };
  for (const c of concepts) {
    add("type", [c.type], false);
    add("trust", [c.trust], false);
    add("freshness", [c.isStale ? "stale" : c.staleAfter ? "fresh" : "no expiry"], false);
    add("status", [c.status], false);
    add("tags", c.tags, true);
    add("folder", [c.dir || "(root)"], false);
    for (const [k, v] of Object.entries(c.fm)) {
      if (CORE_KEYS.has(k)) continue;
      if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
        const s = String(v);
        if (!DATEISH_RE.test(s)) add(k, [s], false);
      } else if (Array.isArray(v) && v.length > 0 && v.length <= 12 && v.every((x) => typeof x === "string" && x.length < 40)) {
        add(k, v as string[], true);
      } else if (v && typeof v === "object" && !Array.isArray(v)) {
        const entries = Object.entries(v as Record<string, unknown>);
        if (entries.length > 0 && entries.length <= 10 && entries.every(([, x]) => typeof x === "string" || typeof x === "number" || typeof x === "boolean"))
          for (const [k2, x] of entries) if (!DATEISH_RE.test(String(x))) add(`${k}.${k2}`, [String(x)], false);
      }
    }
  }
  const total = concepts.length;
  const facets: Facet[] = [];
  for (const [key, b] of buckets) {
    const distinct = b.counts.size;
    const always = ["type", "trust", "freshness", "status", "tags", "folder"].includes(key);
    const avgLen = b.lenSum / Math.max(1, b.n);
    const ok = always
      ? distinct >= 1
      : b.docs >= Math.max(3, total * 0.01) && distinct >= 2 && distinct <= (b.multi ? 80 : 30) && avgLen <= 32;
    if (!ok) continue;
    const values = [...b.counts.entries()].map(([value, count]) => ({ value, count })).sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
    facets.push({ key, label: key.replace(/[._]/g, " "), multi: b.multi, values });
  }
  const order = ["type", "folder", "tags", "trust", "freshness", "status"];
  facets.sort((a, b) => {
    const ia = order.indexOf(a.key), ib = order.indexOf(b.key);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.key.localeCompare(b.key);
  });
  return facets;
}

/** Facet values of a concept, used for client-side filtering. */
export function conceptFacetValues(c: Concept, facets: Facet[]): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const f of facets) {
    let vals: string[] = [];
    switch (f.key) {
      case "type": vals = [c.type]; break;
      case "trust": vals = [c.trust]; break;
      case "freshness": vals = [c.isStale ? "stale" : c.staleAfter ? "fresh" : "no expiry"]; break;
      case "status": vals = [c.status]; break;
      case "tags": vals = c.tags; break;
      case "folder": vals = [c.dir || "(root)"]; break;
      default: {
        const [k, k2] = f.key.split(".");
        let v = c.fm[k];
        if (k2 !== undefined) v = v && typeof v === "object" ? (v as Record<string, unknown>)[k2] : undefined;
        vals = v === undefined || v === null ? [] : Array.isArray(v) ? v.map(String) : typeof v === "object" ? [] : [String(v)];
      }
    }
    if (vals.length) out[f.key] = vals;
  }
  return out;
}
