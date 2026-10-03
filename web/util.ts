// Presentation helpers: stable colors per type, value sentiment, dates, routes.
const enc = (p: string) => p.split("/").map(encodeURIComponent).join("/");

export const routes = {
  home: (b: string) => `/b/${encodeURIComponent(b)}`,
  concept: (b: string, id: string) => `/b/${encodeURIComponent(b)}/c/${enc(id)}`,
  dir: (b: string, d: string) => (d ? `/b/${encodeURIComponent(b)}/d/${enc(d)}` : `/b/${encodeURIComponent(b)}`),
  explore: (b: string, params?: Record<string, string | string[]>) => {
    const q = new URLSearchParams();
    for (const [k, v] of Object.entries(params ?? {})) for (const x of Array.isArray(v) ? v : [v]) q.append(k, x);
    const s = q.toString();
    return `/b/${encodeURIComponent(b)}/explore${s ? "?" + s : ""}`;
  },
  timeline: (b: string) => `/b/${encodeURIComponent(b)}/timeline`,
  graph: (b: string, focus?: string) => `/b/${encodeURIComponent(b)}/graph${focus ? "?focus=" + encodeURIComponent(focus) : ""}`,
  health: (b: string) => `/b/${encodeURIComponent(b)}/health`,
};

// Ordered for maximum contrast between neighbours: the most common types get the most distinct hues.
const PALETTE = [
  "#3b82f6", "#0d9488", "#8b5cf6", "#e08a00", "#db2777", "#16a34a", "#0891b2", "#dc2626",
  "#4f46e5", "#c2410c", "#65a30d", "#a21caf", "#0f766e", "#b45309", "#1d4ed8", "#be123c",
];
const fixed: Record<string, string> = {};
/** Assign palette slots by type frequency so the main types never share a colour. */
export function rankTypeColors(types: Record<string, number>) {
  Object.entries(types)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach(([t], i) => {
      if (i < PALETTE.length) fixed[t] = PALETTE[i];
    });
}
/** Colour for a type: ranked slot when known, otherwise a stable hash. */
export function typeColor(type: string): string {
  if (fixed[type]) return fixed[type];
  let h = 2166136261;
  for (let i = 0; i < type.length; i++) h = Math.imul(h ^ type.charCodeAt(i), 16777619);
  return (fixed[type] = PALETTE[Math.abs(h) % PALETTE.length]);
}

const POS = new Set(["thriving", "growing", "positive", "up", "fresh", "stable", "human-reviewed", "machine-confirmed", "dominant", "strong", "yes", "true", "pass", "healthy", "success"]);
const NEG = new Set(["dead", "crisis", "declining", "failed", "negative", "down", "stale", "deprecated", "struggling", "no", "false", "fail", "error", "critical"]);
const MID = new Set(["contested", "mixed", "flat", "draft", "acquired", "emerging", "moderate", "unverified", "warning", "n/a"]);
export type Sentiment = "pos" | "neg" | "mid" | "none";
export function sentiment(value: string): Sentiment {
  const v = value.toLowerCase().split(/[\s(,;]/)[0];
  if (v === "stable" || v === "acquired") return "mid";
  if (POS.has(v)) return "pos";
  if (NEG.has(v)) return "neg";
  if (MID.has(v)) return "mid";
  return "none";
}

export function relTime(iso?: string | number, opts: { past?: boolean } = {}): string {
  if (iso === undefined || iso === null || iso === "") return "";
  const t = typeof iso === "number" ? iso : Date.parse(String(iso));
  if (Number.isNaN(t)) return String(iso);
  let s = (Date.now() - t) / 1000;
  // Agent-written timestamps can sit slightly in the future (clock skew); read them as "just now".
  if (opts.past && s < 0 && s > -86400 * 2) s = 30;
  const fut = s < 0;
  const a = Math.abs(s);
  const fmt = (n: number, u: string) => `${Math.round(n)} ${u}${Math.round(n) === 1 ? "" : "s"}`;
  const str = a < 60 ? "just now" : a < 3600 ? fmt(a / 60, "minute") : a < 86400 ? fmt(a / 3600, "hour") : a < 86400 * 45 ? fmt(a / 86400, "day") : a < 86400 * 400 ? fmt(a / (86400 * 30.4), "month") : fmt(a / (86400 * 365), "year");
  if (str === "just now") return str;
  return fut ? `in ${str}` : `${str} ago`;
}

export function fmtDate(iso?: string): string {
  if (!iso) return "";
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return iso;
  const d = new Date(t);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

export function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function humanizeKey(k: string): string {
  const s = k.replace(/[._]+/g, " ").trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);
export const modKey = isMac ? "⌘" : "Ctrl";

export function trustLabel(t: string): string {
  return t === "human-reviewed" ? "Human-reviewed" : t === "machine-confirmed" ? "Machine-confirmed" : "Unverified";
}
