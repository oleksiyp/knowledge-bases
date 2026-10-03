// Must match server/render.ts slugify so footnote anchors line up.
export function slugify(s: string): string {
  return (
    s
      .toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 80) || "section"
  );
}
