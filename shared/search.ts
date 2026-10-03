// MiniSearch configuration shared by the server (index build) and the browser (static site),
// so an index serialized at build time loads with identical options.
import type { Options } from "minisearch";

export const SEARCH_OPTIONS: Options = {
  fields: ["title", "description", "tags", "type", "text", "id"],
  storeFields: ["id"],
  searchOptions: {
    boost: { title: 5, description: 2, tags: 2, id: 1.5 },
    prefix: (term: string) => term.length >= 3,
    fuzzy: (term: string) => (term.length >= 6 ? 0.2 : false),
    combineWith: "AND",
  },
};

/** A ~200-char window of `text` around the first matched term. */
export function snippet(text: string, terms: string[]): string {
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
