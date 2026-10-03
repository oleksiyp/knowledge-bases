import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, CornerDownLeft, Clock, Compass, CalendarRange, Share2, HeartPulse, Home, SunMoon, PanelRight, Keyboard, FileText } from "lucide-react";
import { api, type LightConcept, type SearchHit } from "../api";
import { useBundle, useUi } from "../store";
import { routes, typeColor } from "../util";

interface Item {
  key: string;
  kind: "concept" | "command";
  id?: string;
  title: string;
  sub?: string;
  snippet?: string;
  terms?: string[];
  icon?: React.ReactNode;
  type?: string;
  group: string;
  run: (newTab: boolean) => void;
}

interface Parsed {
  text: string;
  types: string[];
  tags: string[];
  dirs: string[];
}

function parseQuery(q: string): Parsed {
  const out: Parsed = { text: "", types: [], tags: [], dirs: [] };
  const rest: string[] = [];
  for (const tok of q.split(/\s+/).filter(Boolean)) {
    const m = /^(type|tag|in):(.+)$/i.exec(tok);
    if (m) (m[1].toLowerCase() === "type" ? out.types : m[1].toLowerCase() === "tag" ? out.tags : out.dirs).push(m[2].toLowerCase());
    else if (tok.startsWith("#") && tok.length > 1) out.tags.push(tok.slice(1).toLowerCase());
    else rest.push(tok);
  }
  out.text = rest.join(" ");
  return out;
}

/** Score a title against a query: prefix > word-start > substring > subsequence. */
function score(title: string, id: string, q: string): number {
  if (!q) return 1;
  const t = title.toLowerCase();
  const query = q.toLowerCase();
  if (t === query) return 100;
  if (t.startsWith(query)) return 80;
  const words = query.split(/\s+/);
  if (words.every((w) => t.includes(w))) {
    const wordStart = words.every((w) => new RegExp(`(^|[^\\p{L}\\p{N}])${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "u").test(t));
    return wordStart ? 60 : 40;
  }
  if (id.toLowerCase().includes(query.replace(/\s+/g, "-"))) return 30;
  return 0;
}

function Highlight({ text, terms }: { text: string; terms?: string[] }) {
  if (!terms || terms.length === 0) return <>{text}</>;
  const re = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return (
    <>
      {text.split(re).map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>))}
    </>
  );
}

export function CommandPalette() {
  const { bundle, manifest, byId } = useBundle();
  const ui = useUi();
  const navigate = useNavigate();
  const [q, setQ] = useState(ui.paletteInitial);
  const [sel, setSel] = useState(0);
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
    api.warmSearch(bundle);
  }, [bundle]);

  const close = () => ui.setPaletteOpen(false);
  const open = (path: string, newTab: boolean) => {
    if (newTab) window.open(path, "_blank");
    else navigate(path);
    close();
  };

  const parsed = useMemo(() => parseQuery(q.startsWith(">") ? "" : q), [q]);
  const filterFn = (c: LightConcept) =>
    (parsed.types.length === 0 || parsed.types.some((t) => c.type.toLowerCase().includes(t))) &&
    (parsed.tags.length === 0 || parsed.tags.every((t) => c.tags.some((x) => x.toLowerCase() === t))) &&
    (parsed.dirs.length === 0 || parsed.dirs.some((d) => c.dir.toLowerCase().includes(d)));

  useEffect(() => {
    const text = parsed.text.trim();
    if (q.startsWith(">") || text.length < 2) {
      setHits([]);
      setLoading(false);
      return;
    }
    const ctl = new AbortController();
    setLoading(true);
    const t = window.setTimeout(() => {
      api
        .search(bundle, text, ctl.signal)
        .then((h) => setHits(h))
        .catch(() => {})
        .finally(() => setLoading(false));
    }, 90);
    return () => {
      window.clearTimeout(t);
      ctl.abort();
    };
  }, [bundle, parsed.text, q]);

  const commands: Item[] = useMemo(
    () => [
      { key: "home", kind: "command", title: "Go to bundle home", icon: <Home size={16} />, group: "Commands", run: (n: boolean) => open(routes.home(bundle), n) },
      { key: "explore", kind: "command", title: "Explore & filter all concepts", icon: <Compass size={16} />, group: "Commands", run: (n: boolean) => open(routes.explore(bundle), n) },
      { key: "timeline", kind: "command", title: "Open timeline", icon: <CalendarRange size={16} />, group: "Commands", run: (n: boolean) => open(routes.timeline(bundle), n) },
      { key: "graph", kind: "command", title: "Open link graph", icon: <Share2 size={16} />, group: "Commands", run: (n: boolean) => open(routes.graph(bundle), n) },
      { key: "health", kind: "command", title: "Bundle health & conformance", icon: <HeartPulse size={16} />, group: "Commands", run: (n: boolean) => open(routes.health(bundle), n) },
      {
        key: "theme", kind: "command", title: "Toggle dark / light theme", icon: <SunMoon size={16} />, group: "Commands",
        run: () => {
          const dark = document.documentElement.dataset.theme === "dark" || (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
          ui.setTheme(dark ? "light" : "dark");
          close();
        },
      },
      { key: "panel", kind: "command", title: "Toggle context panel", icon: <PanelRight size={16} />, group: "Commands", run: () => { ui.setPanelOpen(!ui.panelOpen); close(); } },
      { key: "keys", kind: "command", title: "Keyboard shortcuts", icon: <Keyboard size={16} />, group: "Commands", run: () => { close(); ui.setHelpOpen(true); } },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bundle, ui.panelOpen],
  );

  const items: Item[] = useMemo(() => {
    if (!manifest) return [];
    const conceptItem = (c: LightConcept, group: string, extra?: Partial<Item>): Item => ({
      key: `${group}:${c.id}`,
      kind: "concept",
      id: c.id,
      title: c.title,
      sub: c.id,
      type: c.type,
      group,
      run: (n: boolean) => open(routes.concept(bundle, c.id), n),
      ...extra,
    });
    if (q.startsWith(">")) {
      const cq = q.slice(1).trim().toLowerCase();
      return commands.filter((c) => !cq || c.title.toLowerCase().includes(cq));
    }
    const text = parsed.text.trim();
    const hasFilter = parsed.types.length + parsed.tags.length + parsed.dirs.length > 0;
    if (!text && !hasFilter) {
      const recents = ui.recent.map((id) => byId.get(id)).filter(Boolean).slice(0, 6) as LightConcept[];
      return [...recents.map((c) => conceptItem(c, "Recent", { icon: <Clock size={16} /> })), ...commands];
    }
    const titleMatches = manifest.concepts
      .filter(filterFn)
      .map((c) => ({ c, s: score(c.title, c.id, text) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s || b.c.inDeg - a.c.inDeg)
      .slice(0, text ? 8 : 40)
      .map((x) => conceptItem(x.c, text ? "Titles" : "Matching filters"));
    const seen = new Set(titleMatches.map((i) => i.id));
    const textMatches = hits
      .filter((h) => !seen.has(h.id))
      .map((h) => byId.get(h.id) && filterFn(byId.get(h.id)!) && conceptItem(byId.get(h.id)!, "Full text", { snippet: h.snippet, terms: h.terms, key: `ft:${h.id}` }))
      .filter(Boolean) as Item[];
    return [...titleMatches, ...textMatches];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest, q, hits, parsed, commands, ui.recent, byId]);

  useEffect(() => setSel(0), [q]);
  useEffect(() => {
    listRef.current?.querySelector(`[data-idx="${sel}"]`)?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || (e.key === "n" && e.ctrlKey)) {
      e.preventDefault();
      setSel((s) => Math.min(items.length - 1, s + 1));
    } else if (e.key === "ArrowUp" || (e.key === "p" && e.ctrlKey)) {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      items[sel]?.run(e.metaKey || e.ctrlKey);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  let lastGroup = "";
  return (
    <div className="overlay" onMouseDown={close}>
      <div className="palette" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-label="Search">
        <div className="palette-input">
          <Search size={18} className="muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder="Search concepts…   type:event  #tag  in:folder   > commands"
            spellCheck={false}
            autoComplete="off"
          />
          {loading && <span className="spinner" />}
          <kbd>esc</kbd>
        </div>
        <div className="palette-list" ref={listRef}>
          {items.length === 0 && (
            <div className="palette-empty">
              {parsed.text.length < 2 && !q.startsWith(">") ? "Keep typing…" : "No matches. Try fewer words, or a filter like type:trend."}
            </div>
          )}
          {items.map((it, i) => {
            const header = it.group !== lastGroup ? <div className="palette-group">{it.group}</div> : null;
            lastGroup = it.group;
            return (
              <div key={it.key}>
                {header}
                <div
                  data-idx={i}
                  className={`palette-item${i === sel ? " sel" : ""}`}
                  onMouseMove={() => setSel(i)}
                  onClick={(e) => it.run(e.metaKey || e.ctrlKey)}
                >
                  <span className="pi-icon" style={it.type ? { color: typeColor(it.type) } : undefined}>
                    {it.icon ?? <FileText size={16} />}
                  </span>
                  <span className="pi-main">
                    <span className="pi-title">
                      <Highlight text={it.title} terms={it.terms ?? (parsed.text ? parsed.text.split(/\s+/) : undefined)} />
                    </span>
                    {it.snippet ? (
                      <span className="pi-snippet">
                        <Highlight text={it.snippet} terms={it.terms} />
                      </span>
                    ) : it.sub ? (
                      <span className="pi-sub">{it.sub}</span>
                    ) : null}
                  </span>
                  {it.type && <span className="pi-type" style={{ color: typeColor(it.type) }}>{it.type}</span>}
                  {i === sel && <CornerDownLeft size={14} className="muted" />}
                </div>
              </div>
            );
          })}
        </div>
        <div className="palette-foot muted">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>⌘</kbd><kbd>↵</kbd> new tab</span>
          <span><kbd>&gt;</kbd> commands</span>
        </div>
      </div>
    </div>
  );
}
