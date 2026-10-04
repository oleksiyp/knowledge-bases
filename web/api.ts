import { sitePath } from "./paths";

// Typed client for the knowledge-bases API with a small in-memory cache keyed by bundle version.
export type TrustTier = "unverified" | "machine-confirmed" | "human-reviewed";

export interface LightConcept {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  status: string;
  trust: TrustTier;
  isStale: boolean;
  staleAfter?: string;
  date?: string;
  generatedAt?: string;
  verifiedAt?: string;
  dir: string;
  mtime: number;
  inDeg: number;
  outDeg: number;
  facets: Record<string, string[]>;
}

export interface Facet {
  key: string;
  label: string;
  multi: boolean;
  values: { value: string; count: number }[];
}

export interface DirSummary {
  path: string;
  title: string;
  subdirs: string[];
  concepts: string[];
  hasIndex: boolean;
  hasLog: boolean;
}

export interface BundleInfo {
  name: string;
  title: string;
  description?: string;
  concepts: number;
  version: number;
}

export interface Manifest {
  name: string;
  title: string;
  description?: string;
  version: number;
  loadedAt: number;
  okfVersion?: string;
  concepts: LightConcept[];
  dirs: DirSummary[];
  facets: Facet[];
  stats: { types: Record<string, number>; issues: { error: number; warning: number } };
}

export interface Source {
  id?: string;
  resource: string;
  title?: string;
  author?: string;
  usage_count?: number;
  last_modified?: string;
}

export interface Issue {
  severity: "error" | "warning" | "info";
  kind: string;
  message: string;
  concept?: string;
}

export interface Backlink {
  from: string;
  via: string;
  snippet?: string;
}

export interface FullConcept extends LightConcept {
  path: string;
  resource?: string;
  generated?: { by?: string; at?: string };
  verified: { by: string; at?: string }[];
  sources: Source[];
  fm: Record<string, unknown>;
  html: string;
  outline: { level: number; text: string; slug: string }[];
  footnoteDefs: Record<string, string>;
  footnoteRefs: string[];
  outLinks: { id: string; exists: boolean }[];
  fmRefs: { key: string; target: string }[];
  externalLinks: number;
  backlinks: Backlink[];
  siblings: { prev?: string; next?: string; index: number; total: number };
  issues: Issue[];
  words: number;
}

export interface Preview extends LightConcept {
  excerpt: string;
}

export interface DirDetail {
  path: string;
  title: string;
  indexHtml?: string;
  logHtml?: string;
  okfVersion?: string;
  subdirs: { path: string; title: string; count: number }[];
  concepts: string[];
  total: number;
}

export interface SearchHit {
  id: string;
  score: number;
  terms: string[];
  snippet: string;
}

export interface GraphData {
  nodes: { id: string }[];
  links: { source: string; target: string; kind: string }[];
}

export interface Health {
  issues: Issue[];
  byKind: Record<string, number>;
  orphans: string[];
  conformant: boolean;
}

const enc = (p: string) => p.split("/").map(encodeURIComponent).join("/");
const cache = new Map<string, Promise<unknown>>();

/** Static build: payloads are pre-rendered JSON files under /data, search runs in the browser. */
export const STATIC = import.meta.env.VITE_OKF_STATIC === "1";
/** Live reload over SSE only exists with the dev server. */
export const LIVE = !STATIC;

async function get<T>(url: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(sitePath(url), { signal, credentials: "same-origin" });
  const isJson = (res.headers.get("content-type") ?? "").includes("json");
  if (!res.ok || !isJson) throw Object.assign(new Error(`${res.status} ${res.statusText}`), { status: res.ok ? 404 : res.status });
  return res.json() as Promise<T>;
}

function cached<T>(key: string, url: string): Promise<T> {
  let p = cache.get(key) as Promise<T> | undefined;
  if (!p) {
    p = get<T>(url);
    cache.set(key, p);
    p.catch(() => cache.delete(key));
  }
  return p;
}

const B = (b: string) => encodeURIComponent(b);
const url = {
  bundles: () => (STATIC ? "/data/bundles.json" : "/api/bundles"),
  manifest: (b: string) => (STATIC ? `/data/b/${B(b)}/manifest.json` : `/api/b/${B(b)}/manifest`),
  concept: (b: string, id: string) => (STATIC ? `/data/b/${B(b)}/c/${enc(id)}.json` : `/api/b/${B(b)}/concept/${enc(id)}`),
  preview: (b: string, id: string) => (STATIC ? `/data/b/${B(b)}/p/${enc(id)}.json` : `/api/b/${B(b)}/preview/${enc(id)}`),
  dir: (b: string, d: string) => (STATIC ? `/data/b/${B(b)}/d/${d ? enc(d) : "_root"}.json` : `/api/b/${B(b)}/dir${d ? "/" + enc(d) : ""}`),
  graph: (b: string) => (STATIC ? `/data/b/${B(b)}/graph.json` : `/api/b/${B(b)}/graph`),
  health: (b: string) => (STATIC ? `/data/b/${B(b)}/health.json` : `/api/b/${B(b)}/health`),
  raw: (b: string, id: string) => (STATIC ? `/raw/b/${B(b)}/${enc(id)}.md` : `/api/b/${B(b)}/raw/${enc(id)}`),
};

// ---- in-browser search for the static build -----------------------------------
interface StaticIndex {
  search: (q: string) => SearchHit[];
}
const staticIndexes = new Map<string, Promise<StaticIndex>>();
function staticIndex(b: string): Promise<StaticIndex> {
  let p = staticIndexes.get(b);
  if (!p) {
    p = (async () => {
      const [{ default: MiniSearch }, { SEARCH_OPTIONS, snippet }, data] = await Promise.all([
        import("minisearch"),
        import("../shared/search"),
        get<{ index: unknown; texts: Record<string, string> }>(`/data/b/${B(b)}/search.json`),
      ]);
      const ms = MiniSearch.loadJS(data.index as never, SEARCH_OPTIONS);
      return {
        search: (q: string) => {
          let r = ms.search(q);
          if (r.length === 0) r = ms.search(q, { combineWith: "OR" });
          return r.slice(0, 40).map((x) => ({ id: x.id as string, score: x.score, terms: x.terms, snippet: snippet(data.texts[x.id as string] ?? "", x.terms) }));
        },
      };
    })();
    staticIndexes.set(b, p);
    p.catch(() => staticIndexes.delete(b));
  }
  return p;
}

export const api = {
  bundles: () => cached<BundleInfo[]>("bundles", url.bundles()),
  manifest: (b: string) => get<Manifest>(url.manifest(b)),
  concept: (b: string, v: number, id: string) => cached<FullConcept>(`c:${b}:${v}:${id}`, url.concept(b, id)),
  preview: (b: string, v: number, id: string) => cached<Preview>(`p:${b}:${v}:${id}`, url.preview(b, id)),
  dir: (b: string, v: number, d: string) => cached<DirDetail>(`d:${b}:${v}:${d}`, url.dir(b, d)),
  graph: (b: string, v: number) => cached<GraphData>(`g:${b}:${v}`, url.graph(b)),
  health: (b: string, v: number) => cached<Health>(`h:${b}:${v}`, url.health(b)),
  search: async (b: string, q: string, signal?: AbortSignal): Promise<SearchHit[]> => {
    if (!STATIC) return get<SearchHit[]>(`/api/b/${B(b)}/search?q=${encodeURIComponent(q)}&limit=40`, signal);
    const idx = await staticIndex(b);
    if (signal?.aborted) throw new DOMException("aborted", "AbortError");
    return idx.search(q);
  },
  /** Start downloading the search index early (e.g. when the palette opens). */
  warmSearch: (b: string) => {
    if (STATIC) staticIndex(b).catch(() => {});
  },
  rawUrl: (b: string, id: string) => sitePath(url.raw(b, id)),
};
