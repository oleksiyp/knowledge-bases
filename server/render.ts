// Markdown → HTML for OKF bodies. Resolves bundle links to in-app routes,
// keys footnotes to `sources`, and collects outline, links and plain text.
import path from "node:path";
import MarkdownIt from "markdown-it";
import footnote from "markdown-it-footnote";


export interface LinkRef {
  kind: "concept" | "dir" | "external" | "anchor";
  target: string;
  exists: boolean;
  snippet?: string;
}

export interface RenderResult {
  html: string;
  text: string;
  outline: { level: number; text: string; slug: string }[];
  links: LinkRef[];
  footnoteRefs: string[];
  footnoteDefs: Record<string, string>; // label → inline HTML of the definition
}

interface Ctx {
  bundle: string;
  fromDir: string;
  ids: Set<string>;
  dirs: Set<string>;
  sources: { id?: string }[];
}

const md = new MarkdownIt({ html: false, linkify: true, typographer: false });
type Token = ReturnType<typeof md.parse>[number];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const meta = (t: Token): any => t.meta ?? {};
md.use(footnote);

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80) || "section";
}

const enc = (p: string) => p.split("/").map(encodeURIComponent).join("/");
export const conceptHref = (bundle: string, id: string) => `/b/${encodeURIComponent(bundle)}/c/${enc(id)}`;
export const dirHref = (bundle: string, dir: string) => (dir ? `/b/${encodeURIComponent(bundle)}/d/${enc(dir)}` : `/b/${encodeURIComponent(bundle)}`);

function resolveHref(href: string, ctx: Ctx): { kind: LinkRef["kind"]; target: string; exists: boolean; anchor: string } {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return { kind: "external", target: href, exists: true, anchor: "" };
  if (href.startsWith("#")) return { kind: "anchor", target: href, exists: true, anchor: href };
  const hashAt = href.indexOf("#");
  const anchor = hashAt >= 0 ? href.slice(hashAt) : "";
  let p = decodeURIComponent(hashAt >= 0 ? href.slice(0, hashAt) : href);
  p = p.startsWith("/") ? path.posix.normalize(p.slice(1)) : path.posix.normalize(path.posix.join(ctx.fromDir, p));
  if (p === "." || p === "./") p = "";
  p = p.replace(/^\.\//, "");
  if (p === "index.md" || p.endsWith("/index.md")) {
    const d = p.replace(/\/?index\.md$/, "");
    return { kind: "dir", target: d, exists: ctx.dirs.has(d), anchor };
  }
  if (p === "log.md" || p.endsWith("/log.md")) {
    const d = p.replace(/\/?log\.md$/, "");
    return { kind: "dir", target: d, exists: ctx.dirs.has(d), anchor: "#log" };
  }
  if (p === "" || p.endsWith("/") || (!p.endsWith(".md") && ctx.dirs.has(p))) {
    const d = p.replace(/\/$/, "");
    return { kind: "dir", target: d, exists: ctx.dirs.has(d), anchor };
  }
  const id = p.replace(/\.md$/, "");
  return { kind: "concept", target: id, exists: ctx.ids.has(id), anchor };
}

function inlineText(t: Token): string {
  if (!t.children) return t.content;
  return t.children
    .map((c) => (c.type === "text" || c.type === "code_inline" ? c.content : c.type === "softbreak" || c.type === "hardbreak" ? " " : ""))
    .join("");
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);
}

export function renderMarkdown(src: string, ctx: Ctx): RenderResult {
  const env: Record<string, any> = {};
  let tokens = md.parse(src, env);
  const outline: RenderResult["outline"] = [];
  const links: LinkRef[] = [];
  const textParts: string[] = [];
  const slugs = new Map<string, number>();
  const footnoteRefs: string[] = [];
  const footnoteDefs: Record<string, string> = {};
  const fnList: { label?: string }[] = env.footnotes?.list ?? [];

  // Extract footnote definitions and drop the default footnote block.
  const start = tokens.findIndex((t) => t.type === "footnote_block_open");
  if (start !== -1) {
    const end = tokens.findIndex((t, i) => i > start && t.type === "footnote_block_close");
    let cur: { id: number; toks: Token[] } | null = null;
    for (let i = start + 1; i < end; i++) {
      const t = tokens[i];
      if (t.type === "footnote_open") cur = { id: meta(t).id, toks: [] };
      else if (t.type === "footnote_close" && cur) {
        const label = fnList[cur.id]?.label ?? String(cur.id + 1);
        const inner = cur.toks.filter((x) => x.type === "inline");
        footnoteDefs[label] = inner.map((x) => md.renderer.renderInline(x.children ?? [], md.options, env)).join(" ");
        cur = null;
      } else if (cur && t.type !== "footnote_anchor") cur.toks.push(t);
    }
    tokens = tokens.slice(0, start).concat(tokens.slice(end + 1));
  }

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === "heading_open") {
      const inline = tokens[i + 1];
      const text = inlineText(inline);
      let slug = slugify(text);
      const n = slugs.get(slug) ?? 0;
      slugs.set(slug, n + 1);
      if (n) slug = `${slug}-${n}`;
      t.attrSet("id", slug);
      outline.push({ level: Number(t.tag.slice(1)), text, slug });
    }
    if (t.type === "inline" && t.children) {
      const plain = inlineText(t);
      if (plain) textParts.push(plain);
      for (const c of t.children) {
        if (c.type === "footnote_ref") {
          const label = fnList[meta(c).id]?.label ?? String(meta(c).id + 1);
          c.meta = { ...meta(c), label };
          footnoteRefs.push(label);
        }
        if (c.type !== "link_open") continue;
        const href = String(c.attrGet("href") ?? "");
        const r = resolveHref(href, ctx);
        const snippet = plain.length > 280 ? plain.slice(0, 277) + "…" : plain;
        links.push({ kind: r.kind, target: r.target, exists: r.exists, snippet });
        if (r.kind === "concept") {
          c.attrSet("href", conceptHref(ctx.bundle, r.target) + r.anchor);
          c.attrSet("data-cid", r.target);
          c.attrSet("class", r.exists ? "cl" : "cl broken");
          if (!r.exists) c.attrSet("title", "Not yet written (broken link)");
        } else if (r.kind === "dir") {
          c.attrSet("href", dirHref(ctx.bundle, r.target) + r.anchor);
          c.attrSet("class", "dl");
        } else if (r.kind === "external") {
          c.attrSet("target", "_blank");
          c.attrSet("rel", "noopener noreferrer");
          c.attrSet("class", "ext");
        }
      }
    } else if (t.type === "fence" || t.type === "code_block") {
      textParts.push(t.content);
    }
  }

  const renderer = md.renderer;
  const rules = { ...renderer.rules };
  renderer.rules.table_open = () => '<div class="table-wrap"><table>';
  renderer.rules.table_close = () => "</table></div>";
  renderer.rules.footnote_ref = (toks, idx) => {
    const label: string = meta(toks[idx]).label;
    const n = (meta(toks[idx]).id as number) + 1;
    const known = ctx.sources.some((s) => s.id === label) || label in footnoteDefs;
    return `<sup class="fnref${known ? "" : " missing"}" data-fn="${escapeHtml(label)}"><a href="#src-${escapeHtml(slugify(label))}">${n}</a></sup>`;
  };
  let html: string;
  try {
    html = renderer.render(tokens, md.options, env);
  } finally {
    renderer.rules.table_open = rules.table_open;
    renderer.rules.table_close = rules.table_close;
    renderer.rules.footnote_ref = rules.footnote_ref;
  }
  return { html, text: textParts.join("\n"), outline, links, footnoteRefs: [...new Set(footnoteRefs)], footnoteDefs };
}
