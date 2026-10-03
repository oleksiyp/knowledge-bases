import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { LayoutGrid, Table2, X, Search, Columns3, ChevronDown, ArrowDownUp, SlidersHorizontal } from "lucide-react";
import type { Facet, LightConcept } from "../api";
import { useBundle } from "../store";
import { humanizeKey, relTime, routes, sentiment } from "../util";
import { TypePill, TrustBadge, FreshBadge } from "../components/Badges";
import { ConceptCard } from "./DirView";

const RESERVED = new Set(["q", "sort", "view", "cols"]);
const SORTS: Record<string, { label: string; fn: (a: LightConcept, b: LightConcept) => number }> = {
  relevance: { label: "Most referenced", fn: (a, b) => b.inDeg - a.inDeg || a.title.localeCompare(b.title) },
  title: { label: "Title A–Z", fn: (a, b) => a.title.localeCompare(b.title) },
  updated: { label: "Recently updated", fn: (a, b) => (Date.parse(b.generatedAt ?? "") || b.mtime) - (Date.parse(a.generatedAt ?? "") || a.mtime) },
  date: { label: "Date (newest)", fn: (a, b) => (b.date ?? "").localeCompare(a.date ?? "") },
  type: { label: "Type", fn: (a, b) => a.type.localeCompare(b.type) || a.title.localeCompare(b.title) },
};

function matchText(c: LightConcept, q: string) {
  if (!q) return true;
  const hay = `${c.title} ${c.description} ${c.id} ${c.tags.join(" ")}`.toLowerCase();
  return q.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
}

export function Explore() {
  const { bundle, manifest } = useBundle();
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [facetFilter, setFacetFilter] = useState<Record<string, string>>({});
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["type"]));
  const [colsOpen, setColsOpen] = useState(false);
  const [facetsOpenMobile, setFacetsOpenMobile] = useState(false);

  useEffect(() => {
    document.title = `Explore · ${bundle}`;
  }, [bundle]);

  const filters = useMemo(() => {
    const f = new Map<string, Set<string>>();
    for (const [k, v] of params.entries()) if (!RESERVED.has(k)) f.set(k, (f.get(k) ?? new Set()).add(v));
    return f;
  }, [params]);
  const q = params.get("q") ?? "";
  const sort = params.get("sort") ?? (filters.size ? "relevance" : "updated");
  const view = params.get("view") ?? "table";

  // Expand facets that have active filters.
  useEffect(() => {
    setExpanded((e) => new Set([...e, ...filters.keys()]));
  }, [filters]);

  const passes = (c: LightConcept, except?: string) => {
    if (!matchText(c, q)) return false;
    for (const [k, vals] of filters) {
      if (k === except) continue;
      const cv = c.facets[k] ?? [];
      if (!cv.some((v) => vals.has(v))) return false;
    }
    return true;
  };

  const results = useMemo(() => {
    if (!manifest) return [];
    return manifest.concepts.filter((c) => passes(c)).sort(SORTS[sort]?.fn ?? SORTS.relevance.fn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest, filters, q, sort]);

  const facetCounts = useMemo(() => {
    const out = new Map<string, Map<string, number>>();
    if (!manifest) return out;
    for (const f of manifest.facets) {
      const m = new Map<string, number>();
      for (const c of manifest.concepts) {
        if (!passes(c, f.key)) continue;
        for (const v of c.facets[f.key] ?? []) m.set(v, (m.get(v) ?? 0) + 1);
      }
      out.set(f.key, m);
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manifest, filters, q]);

  // Pick informative columns: facets well-covered by the current result set.
  const autoCols = useMemo(() => {
    if (!manifest) return [];
    const skip = new Set(["type", "folder", "tags", "trust", "freshness", "status"]);
    return manifest.facets
      .filter((f) => !skip.has(f.key))
      .map((f) => ({ key: f.key, cov: results.filter((c) => c.facets[f.key]?.length).length }))
      .filter((x) => x.cov >= Math.max(1, results.length * 0.5))
      .sort((a, b) => b.cov - a.cov)
      .slice(0, 4)
      .map((x) => x.key);
  }, [manifest, results]);
  const cols = params.get("cols") ? params.get("cols")!.split(",").filter(Boolean) : autoCols;

  const update = (fn: (p: URLSearchParams) => void) => {
    const p = new URLSearchParams(params);
    fn(p);
    setParams(p, { replace: true });
  };
  const toggle = (key: string, value: string) =>
    update((p) => {
      const cur = p.getAll(key);
      p.delete(key);
      const next = cur.includes(value) ? cur.filter((x) => x !== value) : [...cur, value];
      next.forEach((v) => p.append(key, v));
    });
  const only = (key: string, value: string) => update((p) => { p.delete(key); p.append(key, value); });

  if (!manifest) return <div className="doc skeleton"><div className="sk sk-title" /><div className="sk sk-block" /></div>;
  const facetByKey = new Map(manifest.facets.map((f) => [f.key, f]));

  const facetPanel = (
    <div className="facets">
      <div className="facets-head">
        <span>Filters</span>
        {(filters.size > 0 || q) && <button className="link-btn" onClick={() => setParams(new URLSearchParams(view !== "table" ? { view } : {}), { replace: true })}>Clear all</button>}
      </div>
      {manifest.facets.map((f) => (
        <FacetBlock
          key={f.key}
          facet={f}
          counts={facetCounts.get(f.key) ?? new Map()}
          selected={filters.get(f.key) ?? new Set()}
          open={expanded.has(f.key)}
          onOpen={(o) => setExpanded((e) => { const n = new Set(e); if (o) n.add(f.key); else n.delete(f.key); return n; })}
          onToggle={(v) => toggle(f.key, v)}
          search={facetFilter[f.key] ?? ""}
          onSearch={(s) => setFacetFilter((x) => ({ ...x, [f.key]: s }))}
        />
      ))}
    </div>
  );

  return (
    <div className="explore">
      <aside className={`facets-col${facetsOpenMobile ? " open" : ""}`}>{facetPanel}</aside>
      <section className="results-col">
        <div className="explore-bar">
          <button className="btn ghost mobile-only" onClick={() => setFacetsOpenMobile(!facetsOpenMobile)}>
            <SlidersHorizontal size={15} /> Filters{filters.size ? ` (${filters.size})` : ""}
          </button>
          <div className="search-inline">
            <Search size={15} className="muted" />
            <input value={q} placeholder="Filter by title, description, tag…" onChange={(e) => update((p) => (e.target.value ? p.set("q", e.target.value) : p.delete("q")))} />
          </div>
          <label className="select">
            <ArrowDownUp size={14} />
            <select value={sort} onChange={(e) => update((p) => p.set("sort", e.target.value))}>
              {Object.entries(SORTS).map(([k, s]) => <option key={k} value={k}>{s.label}</option>)}
            </select>
          </label>
          <div className="seg">
            <button className={view === "table" ? "on" : ""} onClick={() => update((p) => p.delete("view"))} title="Table"><Table2 size={15} /></button>
            <button className={view === "cards" ? "on" : ""} onClick={() => update((p) => p.set("view", "cards"))} title="Cards"><LayoutGrid size={15} /></button>
          </div>
          {view === "table" && (
            <div className="cols-picker">
              <button className="btn ghost" onClick={() => setColsOpen(!colsOpen)}><Columns3 size={15} /> Columns</button>
              {colsOpen && (
                <div className="menu" onMouseLeave={() => setColsOpen(false)}>
                  {manifest.facets.filter((f) => !["type", "tags"].includes(f.key)).map((f) => (
                    <label key={f.key} className="menu-item">
                      <input
                        type="checkbox"
                        checked={cols.includes(f.key)}
                        onChange={() => update((p) => p.set("cols", (cols.includes(f.key) ? cols.filter((x) => x !== f.key) : [...cols, f.key]).join(",")))}
                      />
                      {humanizeKey(f.key)}
                    </label>
                  ))}
                  <button className="link-btn" onClick={() => update((p) => p.delete("cols"))}>Reset to automatic</button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="active-filters">
          <span className="result-count"><strong>{results.length}</strong> of {manifest.concepts.length}</span>
          {[...filters.entries()].flatMap(([k, vals]) =>
            [...vals].map((v) => (
              <button key={k + v} className={`filter-chip s-${sentiment(v)}`} onClick={() => toggle(k, v)}>
                <span className="fk">{facetByKey.get(k)?.label ?? k}:</span> {v} <X size={12} />
              </button>
            )),
          )}
        </div>

        {results.length === 0 ? (
          <div className="empty-state small">No concepts match these filters.</div>
        ) : view === "cards" ? (
          <div className="card-grid">{results.slice(0, 600).map((c) => <ConceptCard key={c.id} c={c} />)}</div>
        ) : (
          <div className="table-wrap results-table">
            <table>
              <thead>
                <tr>
                  <th className="sortable" onClick={() => update((p) => p.set("sort", "title"))}>Title</th>
                  <th className="sortable" onClick={() => update((p) => p.set("sort", "type"))}>Type</th>
                  {cols.map((k) => <th key={k}>{humanizeKey(k)}</th>)}
                  <th>Trust</th>
                  <th className="sortable" onClick={() => update((p) => p.set("sort", "updated"))}>Updated</th>
                </tr>
              </thead>
              <tbody>
                {results.slice(0, 1000).map((c) => (
                  <tr key={c.id} onClick={(e) => (e.metaKey || e.ctrlKey ? window.open(routes.concept(bundle, c.id), "_blank") : navigate(routes.concept(bundle, c.id)))}>
                    <td className="t-title">
                      <Link to={routes.concept(bundle, c.id)} data-cid={c.id} onClick={(e) => e.stopPropagation()}>{c.title}</Link>
                      <div className="t-path">{c.dir}</div>
                      {c.description && <div className="t-desc">{c.description}</div>}
                    </td>
                    <td><TypePill type={c.type} small /></td>
                    {cols.map((k) => (
                      <td key={k} className="t-facet">
                        {(c.facets[k] ?? []).slice(0, 4).map((v) => (
                          <button key={v} className={`chip s-${sentiment(v)} clickable`} onClick={(e) => { e.stopPropagation(); only(k, v); }} title={`Filter ${k} = ${v}`}>{v}</button>
                        ))}
                      </td>
                    ))}
                    <td><span className="t-badges"><TrustBadge trust={c.trust} compact /><FreshBadge c={c} compact /></span></td>
                    <td className="muted nowrap">{c.date ?? relTime(c.generatedAt ?? c.mtime, { past: true })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function FacetBlock(props: {
  facet: Facet;
  counts: Map<string, number>;
  selected: Set<string>;
  open: boolean;
  onOpen: (o: boolean) => void;
  onToggle: (v: string) => void;
  search: string;
  onSearch: (s: string) => void;
}) {
  const { facet, counts, selected, open, onOpen, onToggle, search, onSearch } = props;
  const [all, setAll] = useState(false);
  const values = facet.values
    .map((v) => ({ value: v.value, count: counts.get(v.value) ?? 0 }))
    .filter((v) => !search || v.value.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => Number(selected.has(b.value)) - Number(selected.has(a.value)) || b.count - a.count || a.value.localeCompare(b.value));
  const shown = all ? values : values.slice(0, 8);
  const active = selected.size;
  return (
    <div className={`facet${open ? " open" : ""}`}>
      <button className="facet-head" onClick={() => onOpen(!open)}>
        <ChevronDown size={14} className={open ? "" : "rot-neg"} />
        <span className="facet-label">{humanizeKey(facet.key)}</span>
        {active > 0 && <span className="facet-active">{active}</span>}
        <span className="muted facet-n">{facet.values.length}</span>
      </button>
      {open && (
        <div className="facet-body">
          {facet.values.length > 12 && <input className="facet-search" placeholder={`Search ${facet.label}…`} value={search} onChange={(e) => onSearch(e.target.value)} />}
          {shown.map((v) => (
            <label key={v.value} className={`facet-row${v.count === 0 && !selected.has(v.value) ? " zero" : ""}`}>
              <input type="checkbox" checked={selected.has(v.value)} onChange={() => onToggle(v.value)} />
              <span className={`fv s-${sentiment(v.value)}`}>{v.value}</span>
              <span className="fc">{v.count}</span>
            </label>
          ))}
          {values.length > 8 && (
            <button className="link-btn" onClick={() => setAll(!all)}>{all ? "Show less" : `Show all ${values.length}`}</button>
          )}
        </div>
      )}
    </div>
  );
}
