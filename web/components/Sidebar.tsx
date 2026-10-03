import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronRight, Folder, FolderOpen, Home, Compass, CalendarRange, Share2, HeartPulse, X } from "lucide-react";
import { useBundle, useUi } from "../store";
import { routes, typeColor } from "../util";

function decodePath(pathname: string, prefix: string): string | null {
  if (!pathname.startsWith(prefix)) return null;
  return pathname.slice(prefix.length).split("/").map(decodeURIComponent).join("/");
}

export function Sidebar() {
  const { bundle, manifest, byId } = useBundle();
  const ui = useUi();
  const loc = useLocation();
  const base = routes.home(bundle);
  const currentConcept = decodePath(loc.pathname, `${base}/c/`);
  const currentDir = decodePath(loc.pathname, `${base}/d/`) ?? (currentConcept ? byId.get(currentConcept)?.dir ?? null : null);
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState("");

  const dirs = useMemo(() => new Map((manifest?.dirs ?? []).map((d) => [d.path, d])), [manifest]);
  const counts = useMemo(() => {
    const m = new Map<string, number>();
    const count = (p: string): number => {
      if (m.has(p)) return m.get(p)!;
      const d = dirs.get(p);
      const n = d ? d.concepts.length + d.subdirs.reduce((s, x) => s + count(x), 0) : 0;
      m.set(p, n);
      return n;
    };
    for (const p of dirs.keys()) count(p);
    return m;
  }, [dirs]);

  // Auto-expand the ancestors of the current location.
  useEffect(() => {
    if (currentDir === null) return;
    setOpen((o) => {
      const n = new Set(o);
      const parts = currentDir.split("/");
      for (let i = 1; i <= parts.length; i++) n.add(parts.slice(0, i).join("/"));
      return n;
    });
  }, [currentDir]);

  useEffect(() => {
    if (!currentConcept) return;
    const el = document.querySelector(`.tree [data-tree-id="${CSS.escape(currentConcept)}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [currentConcept, open]);

  const f = filter.trim().toLowerCase();
  const matches = (id: string) => {
    const c = byId.get(id);
    return !f || (c && (c.title.toLowerCase().includes(f) || id.toLowerCase().includes(f)));
  };
  const dirMatches = (p: string): boolean => {
    const d = dirs.get(p);
    if (!d) return false;
    if (!f) return true;
    return d.concepts.some(matches) || d.subdirs.some(dirMatches) || p.toLowerCase().includes(f);
  };

  const toggle = (p: string) =>
    setOpen((o) => {
      const n = new Set(o);
      if (n.has(p)) n.delete(p);
      else n.add(p);
      return n;
    });

  const closeOnMobile = () => {
    if (window.innerWidth <= 900) ui.setSidebarOpen(false);
  };

  const renderDir = (p: string, depth: number): React.ReactNode => {
    const d = dirs.get(p);
    if (!d || !dirMatches(p)) return null;
    const isOpen = open.has(p) || !!f;
    const name = p.split("/").pop()!;
    return (
      <div key={p}>
        <div className={`tree-row dir${currentDir === p && !currentConcept ? " active" : ""}`} style={{ paddingLeft: 8 + depth * 14 }}>
          <button className="tree-toggle" onClick={() => toggle(p)} aria-label={isOpen ? "Collapse" : "Expand"}>
            <ChevronRight size={14} className={isOpen ? "rot" : ""} />
          </button>
          <Link to={routes.dir(bundle, p)} className="tree-label" onClick={() => { setOpen((o) => new Set(o).add(p)); closeOnMobile(); }}>
            {isOpen ? <FolderOpen size={15} /> : <Folder size={15} />}
            <span className="truncate">{name}</span>
          </Link>
          <span className="tree-count">{counts.get(p)}</span>
        </div>
        {isOpen && (
          <div>
            {d.subdirs.map((s) => renderDir(s, depth + 1))}
            {d.concepts.filter(matches).map((id) => {
              const c = byId.get(id);
              return (
                <Link
                  key={id}
                  to={routes.concept(bundle, id)}
                  data-tree-id={id}
                  className={`tree-row leaf${currentConcept === id ? " active" : ""}`}
                  style={{ paddingLeft: 30 + depth * 14 }}
                  onClick={closeOnMobile}
                  title={c?.description}
                >
                  <span className="leaf-dot" style={{ background: typeColor(c?.type ?? "") }} />
                  <span className="truncate">{c?.title ?? id}</span>
                  {c?.isStale && <span className="leaf-flag" title="Stale">●</span>}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const root = dirs.get("");
  const types = Object.entries(manifest?.stats.types ?? {}).sort((a, b) => b[1] - a[1]);

  return (
    <aside className={`sidebar${ui.sidebarOpen ? " open" : ""}`}>
      <div className="sidebar-head mobile-only">
        <span className="brand-name">{bundle}</span>
        <button className="icon-btn" onClick={() => ui.setSidebarOpen(false)} aria-label="Close menu">
          <X size={18} />
        </button>
      </div>
      <nav className="side-nav">
        <NavLink end to={base} onClick={closeOnMobile}><Home size={16} />Home</NavLink>
        <NavLink to={routes.explore(bundle)} onClick={closeOnMobile}><Compass size={16} />Explore</NavLink>
        <NavLink to={routes.timeline(bundle)} onClick={closeOnMobile}><CalendarRange size={16} />Timeline</NavLink>
        <NavLink to={routes.graph(bundle)} onClick={closeOnMobile}><Share2 size={16} />Graph</NavLink>
        <NavLink to={routes.health(bundle)} onClick={closeOnMobile}>
          <HeartPulse size={16} />Health
          {manifest && manifest.stats.issues.error + manifest.stats.issues.warning > 0 && (
            <span className={`nav-count ${manifest.stats.issues.error ? "err" : "warn"}`}>{manifest.stats.issues.error + manifest.stats.issues.warning}</span>
          )}
        </NavLink>
      </nav>

      <div className="side-section">
        <div className="side-title">
          Files <span className="muted">{manifest?.concepts.length ?? ""}</span>
        </div>
        <input className="tree-filter" placeholder="Filter files…" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <div className="tree">
          {root?.subdirs.map((s) => renderDir(s, 0))}
          {root?.concepts.filter(matches).map((id) => {
            const c = byId.get(id);
            return (
              <Link key={id} to={routes.concept(bundle, id)} data-tree-id={id} className={`tree-row leaf${currentConcept === id ? " active" : ""}`} style={{ paddingLeft: 16 }} onClick={closeOnMobile}>
                <span className="leaf-dot" style={{ background: typeColor(c?.type ?? "") }} />
                <span className="truncate">{c?.title ?? id}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="side-section">
        <div className="side-title">Types</div>
        {types.map(([t, n]) => (
          <Link key={t} to={routes.explore(bundle, { type: t })} className="type-row" onClick={closeOnMobile}>
            <span className="leaf-dot" style={{ background: typeColor(t) }} />
            <span className="truncate">{t}</span>
            <span className="tree-count">{n}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
