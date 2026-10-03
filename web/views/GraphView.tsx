import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Share2, Search, X, ArrowRight } from "lucide-react";
import { useBundle } from "../store";
import { routes, typeColor } from "../util";
import { GraphCanvas, useGraphData, type GLink, type GNode } from "../components/GraphCanvas";
import { TypePill, TrustBadge } from "../components/Badges";

export function GraphView() {
  const { bundle, byId, manifest } = useBundle();
  const g = useGraphData();
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState("");
  const [hiddenTypes, setHiddenTypes] = useState<Set<string>>(new Set());
  const [isolated, setIsolated] = useState(false);
  const focus = params.get("focus") ?? undefined;
  const [h, setH] = useState(() => Math.max(420, window.innerHeight - 120));

  useEffect(() => {
    document.title = `Graph · ${manifest?.title ?? bundle}`;
    const onR = () => setH(Math.max(420, window.innerHeight - 120));
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, [bundle, manifest?.title]);

  const { nodes, links, degree } = useMemo(() => {
    if (!g) return { nodes: [] as GNode[], links: [] as GLink[], degree: new Map<string, number>() };
    const degree = new Map<string, number>();
    for (const l of g.links) {
      degree.set(l.source, (degree.get(l.source) ?? 0) + 1);
      degree.set(l.target, (degree.get(l.target) ?? 0) + 1);
    }
    const keep = (id: string) => {
      const c = byId.get(id);
      if (!c || hiddenTypes.has(c.type)) return false;
      return isolated || (degree.get(id) ?? 0) > 0;
    };
    const nodes = g.nodes.filter((n) => keep(n.id)).map((n) => ({ id: n.id, title: byId.get(n.id)!.title, type: byId.get(n.id)!.type, deg: degree.get(n.id) ?? 0 }));
    const ids = new Set(nodes.map((n) => n.id));
    const links = g.links.filter((l) => ids.has(l.source) && ids.has(l.target));
    return { nodes, links, degree };
  }, [g, byId, hiddenTypes, isolated]);

  const highlight = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return undefined;
    return new Set(nodes.filter((n) => words.every((w) => n.title.toLowerCase().includes(w) || n.id.includes(w))).map((n) => n.id));
  }, [q, nodes]);

  const sel = focus ? byId.get(focus) : undefined;
  const neigh = useMemo(() => {
    if (!g || !focus) return { inn: [] as string[], out: [] as string[] };
    return {
      out: [...new Set(g.links.filter((l) => l.source === focus).map((l) => l.target))],
      inn: [...new Set(g.links.filter((l) => l.target === focus).map((l) => l.source))],
    };
  }, [g, focus]);

  const setFocus = (id: string | null) => {
    const p = new URLSearchParams(params);
    if (id) p.set("focus", id);
    else p.delete("focus");
    setParams(p, { replace: true });
  };

  const types = Object.entries(manifest?.stats.types ?? {}).sort((a, b) => b[1] - a[1]);

  return (
    <div className="graph-view">
      <div className="graph-toolbar">
        <h1><Share2 size={18} /> Graph</h1>
        <span className="muted">{nodes.length} nodes · {links.length} links</span>
        <div className="search-inline small">
          <Search size={14} className="muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Highlight…" />
          {highlight && <span className="muted">{highlight.size}</span>}
        </div>
        <label className="check"><input type="checkbox" checked={isolated} onChange={(e) => setIsolated(e.target.checked)} /> Show unlinked</label>
      </div>
      <div className="graph-legend">
        {types.map(([t, n]) => (
          <button key={t} className={`legend-item${hiddenTypes.has(t) ? " off" : ""}`} onClick={() => setHiddenTypes((s) => { const x = new Set(s); if (x.has(t)) x.delete(t); else x.add(t); return x; })}>
            <i style={{ background: typeColor(t) }} />{t} <span className="muted">{n}</span>
          </button>
        ))}
      </div>
      <div className="graph-stage">
        {g ? (
          <GraphCanvas nodes={nodes} links={links} focus={focus} highlight={highlight} height={h} onSelect={setFocus} />
        ) : (
          <div className="graph-canvas sk" style={{ height: h }} />
        )}
        {sel && (
          <div className="graph-card">
            <button className="fn-close" onClick={() => setFocus(null)} aria-label="Close"><X size={14} /></button>
            <div className="badges"><TypePill type={sel.type} small /><TrustBadge trust={sel.trust} compact /></div>
            <div className="gc-title">{sel.title}</div>
            {sel.description && <div className="gc-desc">{sel.description}</div>}
            <Link className="btn" to={routes.concept(bundle, sel.id)}>Open <ArrowRight size={14} /></Link>
            <div className="gc-lists">
              <div>
                <div className="ctx-title">Links to · {neigh.out.length}</div>
                {neigh.out.slice(0, 12).map((id) => <button key={id} className="gc-item" onClick={() => setFocus(id)}><span className="leaf-dot" style={{ background: typeColor(byId.get(id)?.type ?? "") }} />{byId.get(id)?.title ?? id}</button>)}
              </div>
              <div>
                <div className="ctx-title">Linked from · {neigh.inn.length}</div>
                {neigh.inn.slice(0, 12).map((id) => <button key={id} className="gc-item" onClick={() => setFocus(id)}><span className="leaf-dot" style={{ background: typeColor(byId.get(id)?.type ?? "") }} />{byId.get(id)?.title ?? id}</button>)}
              </div>
            </div>
            <div className="muted gc-deg">degree {degree.get(sel.id) ?? 0}</div>
          </div>
        )}
      </div>
    </div>
  );
}
