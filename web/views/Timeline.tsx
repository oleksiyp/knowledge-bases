import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CalendarRange, Search } from "lucide-react";
import type { LightConcept } from "../api";
import { useBundle } from "../store";
import { humanizeKey, routes, sentiment, typeColor } from "../util";
import { TypePill } from "../components/Badges";

const SENT_COLOR: Record<string, string> = { pos: "var(--pos)", neg: "var(--neg)", mid: "var(--mid)" };

function colorFor(key: string, value: string | undefined): string {
  if (!value) return "var(--muted)";
  if (key === "type") return typeColor(value);
  const s = sentiment(value);
  return SENT_COLOR[s] ?? typeColor(value);
}

export function Timeline() {
  const { bundle, manifest } = useBundle();
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState("");
  const colorBy = params.get("color") ?? "auto";
  const hidden = new Set(params.getAll("hide"));
  const order = params.get("order") ?? "desc";

  useEffect(() => {
    document.title = `Timeline · ${manifest?.title ?? bundle}`;
  }, [bundle, manifest?.title]);

  const dated = useMemo(() => (manifest?.concepts ?? []).filter((c) => c.date), [manifest]);

  const colorKeys = useMemo(() => {
    if (!manifest) return [];
    return manifest.facets
      .filter((f) => !["tags", "folder", "freshness", "status", "trust"].includes(f.key))
      .map((f) => ({ key: f.key, cov: dated.filter((c) => c.facets[f.key]?.length).length, n: new Set(dated.flatMap((c) => c.facets[f.key] ?? [])).size }))
      .filter((x) => x.cov >= dated.length * 0.6 && x.n >= 2 && x.n <= 16)
      .sort((a, b) => b.cov - a.cov || a.n - b.n);
  }, [manifest, dated]);
  const ck = colorBy === "auto" ? colorKeys.find((x) => x.key === "impact")?.key ?? colorKeys.find((x) => x.key !== "type")?.key ?? "type" : colorBy;

  const legend = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of dated) for (const v of c.facets[ck] ?? ["(none)"]) m.set(v, (m.get(v) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [dated, ck]);

  const items = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    return dated
      .filter((c) => !(c.facets[ck] ?? ["(none)"]).every((v) => hidden.has(v)))
      .filter((c) => words.every((w) => `${c.title} ${c.description}`.toLowerCase().includes(w)))
      .sort((a, b) => (order === "asc" ? a.date!.localeCompare(b.date!) : b.date!.localeCompare(a.date!)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dated, ck, params, q, order]);

  const months = useMemo(() => {
    const m = new Map<string, LightConcept[]>();
    for (const c of items) {
      const k = c.date!.slice(0, 7);
      m.set(k, [...(m.get(k) ?? []), c]);
    }
    return [...m.entries()];
  }, [items]);

  const histo = useMemo(() => {
    if (dated.length === 0) return [];
    const ds = dated.map((c) => c.date!.slice(0, 7)).sort();
    const [y0, m0] = ds[0].split("-").map(Number);
    const [y1, m1] = ds[ds.length - 1].split("-").map(Number);
    const out: { key: string; parts: { v: string; n: number }[]; total: number }[] = [];
    for (let y = y0, m = m0; y < y1 || (y === y1 && m <= m1); m === 12 ? (y++, (m = 1)) : m++) {
      const key = `${y}-${String(m).padStart(2, "0")}`;
      const inMonth = items.filter((c) => c.date!.startsWith(key));
      const parts = new Map<string, number>();
      for (const c of inMonth) {
        const v = (c.facets[ck] ?? ["(none)"])[0];
        parts.set(v, (parts.get(v) ?? 0) + 1);
      }
      out.push({ key, parts: [...parts.entries()].map(([v, n]) => ({ v, n })), total: inMonth.length });
      if (out.length > 600) break;
    }
    return out;
  }, [dated, items, ck]);
  const maxN = Math.max(1, ...histo.map((h) => h.total));

  const setParam = (fn: (p: URLSearchParams) => void) => {
    const p = new URLSearchParams(params);
    fn(p);
    setParams(p, { replace: true });
  };

  if (!manifest) return null;
  if (dated.length === 0)
    return (
      <div className="doc empty-state">
        <CalendarRange size={28} />
        <h1>No dated concepts</h1>
        <p>The timeline shows concepts whose frontmatter has a <code>date</code> (or <code>event_date</code>, <code>published</code>, <code>as_of</code>) field.</p>
      </div>
    );

  const monthLabel = (k: string) => new Date(`${k}-01T00:00:00Z`).toLocaleDateString(undefined, { month: "long", year: "numeric", timeZone: "UTC" });

  return (
    <div className="timeline-view">
      <header className="tl-head">
        <h1><CalendarRange size={20} /> Timeline</h1>
        <span className="muted">{items.length} of {dated.length} dated concepts</span>
        <div className="tl-controls">
          <div className="search-inline small">
            <Search size={14} className="muted" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter…" />
          </div>
          <label className="select">
            Color by
            <select value={colorBy} onChange={(e) => setParam((p) => { p.set("color", e.target.value); p.delete("hide"); })}>
              <option value="auto">Auto ({humanizeKey(ck)})</option>
              {colorKeys.map((x) => <option key={x.key} value={x.key}>{humanizeKey(x.key)}</option>)}
            </select>
          </label>
          <div className="seg">
            <button className={order === "desc" ? "on" : ""} onClick={() => setParam((p) => p.delete("order"))}>Newest</button>
            <button className={order === "asc" ? "on" : ""} onClick={() => setParam((p) => p.set("order", "asc"))}>Oldest</button>
          </div>
        </div>
      </header>

      <div className="histo" role="img" aria-label="Concepts per month">
        {histo.map((h) => (
          <button
            key={h.key}
            className="histo-col"
            title={`${monthLabel(h.key)}: ${h.total}`}
            onClick={() => document.getElementById(`m-${h.key}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            <span className="histo-bar" style={{ height: `${(h.total / maxN) * 100}%` }}>
              {h.parts.map((p) => <span key={p.v} style={{ flex: p.n, background: colorFor(ck, p.v) }} />)}
            </span>
            {h.key.endsWith("-01") || histo.length < 14 ? <span className="histo-label">{h.key.endsWith("-01") ? h.key.slice(0, 4) : h.key.slice(5)}</span> : null}
          </button>
        ))}
      </div>

      <div className="legend">
        {legend.map(([v, n]) => (
          <button key={v} className={`legend-item${hidden.has(v) ? " off" : ""}`} onClick={() => setParam((p) => { const cur = p.getAll("hide"); p.delete("hide"); (cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]).forEach((x) => p.append("hide", x)); })}>
            <i style={{ background: colorFor(ck, v) }} />{v} <span className="muted">{n}</span>
          </button>
        ))}
      </div>

      <div className="tl-body">
        {months.map(([k, list]) => (
          <section key={k} id={`m-${k}`} className="tl-month">
            <h2 className="tl-month-h"><span>{monthLabel(k)}</span><span className="muted">{list.length}</span></h2>
            <ol className="tl-list">
              {list.map((c) => {
                const v = (c.facets[ck] ?? [])[0];
                return (
                  <li key={c.id} className="tl-item">
                    <span className="tl-day">{c.date!.slice(8, 10) || "—"}</span>
                    <span className="tl-dot" style={{ background: colorFor(ck, v) }} />
                    <div className="tl-content">
                      <Link to={routes.concept(bundle, c.id)} data-cid={c.id} className="tl-title">{c.title}</Link>
                      {c.description && <div className="tl-desc">{c.description}</div>}
                      <div className="tl-meta">
                        <TypePill type={c.type} small />
                        {Object.entries(c.facets)
                          .filter(([fk]) => colorKeys.some((x) => x.key === fk) && fk !== "type")
                          .slice(0, 3)
                          .map(([fk, vals]) => vals.slice(0, 2).map((x) => <span key={fk + x} className={`chip s-${sentiment(x)}`} title={humanizeKey(fk)}>{x}</span>))}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
