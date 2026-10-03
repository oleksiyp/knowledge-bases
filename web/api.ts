// Typed client for the okf-viewer API with a small in-memory cache keyed by bundle version.
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

export interface Manifest {
  name: string;
  title: string;
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

async function get<T>(url: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(url, { signal, credentials: "same-origin" });
  if (!res.ok) throw Object.assign(new Error(`${res.status} ${res.statusText}`), { status: res.status });
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

export const api = {
  bundles: () => get<{ name: string; title: string; concepts: number; version: number }[]>("/api/bundles"),
  manifest: (b: string) => get<Manifest>(`/api/b/${encodeURIComponent(b)}/manifest`),
  concept: (b: string, v: number, id: string) => cached<FullConcept>(`c:${b}:${v}:${id}`, `/api/b/${encodeURIComponent(b)}/concept/${enc(id)}`),
  preview: (b: string, v: number, id: string) => cached<Preview>(`p:${b}:${v}:${id}`, `/api/b/${encodeURIComponent(b)}/preview/${enc(id)}`),
  dir: (b: string, v: number, d: string) => cached<DirDetail>(`d:${b}:${v}:${d}`, `/api/b/${encodeURIComponent(b)}/dir${d ? "/" + enc(d) : ""}`),
  graph: (b: string, v: number) => cached<GraphData>(`g:${b}:${v}`, `/api/b/${encodeURIComponent(b)}/graph`),
  health: (b: string, v: number) => cached<Health>(`h:${b}:${v}`, `/api/b/${encodeURIComponent(b)}/health`),
  search: (b: string, q: string, signal?: AbortSignal) =>
    get<SearchHit[]>(`/api/b/${encodeURIComponent(b)}/search?q=${encodeURIComponent(q)}&limit=40`, signal),
  rawUrl: (b: string, id: string) => `/api/b/${encodeURIComponent(b)}/raw/${enc(id)}`,
};
