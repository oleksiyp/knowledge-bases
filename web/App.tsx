import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { Menu, Search, Sun, Moon, Monitor, PanelRight, Compass, CalendarRange, Share2, BookOpen, Radio, X } from "lucide-react";
import { api } from "./api";
import { BundleProvider, UiProvider, useBundle, useUi } from "./store";
import { modKey, routes } from "./util";
import { Sidebar } from "./components/Sidebar";
import { CommandPalette } from "./components/CommandPalette";
import { HoverPreview } from "./components/HoverPreview";
import { ConceptView } from "./views/ConceptView";
import { DirView } from "./views/DirView";
import { Explore } from "./views/Explore";
import { Timeline } from "./views/Timeline";
import { GraphView } from "./views/GraphView";
import { Health } from "./views/Health";

export function App() {
  return (
    <BrowserRouter>
      <UiProvider>
        <Routes>
          <Route path="/" element={<BundlePicker />} />
          <Route path="/b/:bundle/*" element={<BundleRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UiProvider>
    </BrowserRouter>
  );
}

function BundlePicker() {
  const [bundles, setBundles] = useState<{ name: string; title: string; concepts: number }[] | null>(null);
  useEffect(() => {
    api.bundles().then(setBundles, () => setBundles([]));
  }, []);
  if (!bundles) return <div className="center-screen"><span className="spinner" /></div>;
  if (bundles.length === 1) return <Navigate to={routes.home(bundles[0].name)} replace />;
  return (
    <div className="center-screen">
      <div className="picker">
        <h1>OKF Viewer</h1>
        <p className="muted">Choose a knowledge bundle</p>
        {bundles.map((b) => (
          <Link key={b.name} to={routes.home(b.name)} className="card folder-card">
            <BookOpen size={18} /> <span className="fc-name">{b.title}</span> <span className="fc-count">{b.concepts}</span>
          </Link>
        ))}
        {bundles.length === 0 && <p>No bundles configured. Start the server with <code>--bundle name=/path</code>.</p>}
      </div>
    </div>
  );
}

function BundleRoute() {
  const { bundle } = useParams();
  return (
    <BundleProvider bundle={bundle!}>
      <Shell />
    </BundleProvider>
  );
}

function decodeRest(s: string) {
  return s.split("/").map(decodeURIComponent).join("/").replace(/\/$/, "");
}

function Shell() {
  const { bundle, manifest, error, lastChange } = useBundle();
  const ui = useUi();
  const loc = useLocation();
  const navigate = useNavigate();
  const base = routes.home(bundle);
  const rest = loc.pathname.startsWith(base) ? loc.pathname.slice(base.length).replace(/^\//, "") : "";
  const [toast, setToast] = useState(false);
  const gPending = useRef(0);

  // Route rendered-HTML links through the SPA router.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest?.("a") as HTMLAnchorElement | null;
      if (!a || a.target || !a.getAttribute("href")) return;
      const href = a.getAttribute("href")!;
      if (href.startsWith("/b/")) {
        e.preventDefault();
        navigate(href);
      } else if (href.startsWith("#") && href.length > 1) {
        const el = document.getElementById(decodeURIComponent(href.slice(1)));
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", href);
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  // Global keyboard shortcuts.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement).closest?.("input,textarea,select,[contenteditable]");
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ui.setPaletteOpen(!ui.paletteOpen);
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey || ui.paletteOpen) return;
      if (e.key === "/") {
        e.preventDefault();
        ui.setPaletteOpen(true);
      } else if (e.key === "?") {
        ui.setHelpOpen(!ui.helpOpen);
      } else if (e.key === "Escape") {
        ui.setHelpOpen(false);
      } else if (e.key === ".") {
        ui.setPanelOpen(!ui.panelOpen);
      } else if (e.key === "\\") {
        ui.setSidebarOpen(!ui.sidebarOpen);
      } else if (e.key === "g") {
        gPending.current = Date.now();
      } else if (Date.now() - gPending.current < 900) {
        const map: Record<string, string> = { h: routes.home(bundle), e: routes.explore(bundle), t: routes.timeline(bundle), g: routes.graph(bundle), x: routes.health(bundle) };
        if (map[e.key]) navigate(map[e.key]);
        gPending.current = 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ui, bundle, navigate]);

  useEffect(() => {
    if (!lastChange) return;
    setToast(true);
    const t = setTimeout(() => setToast(false), 2600);
    return () => clearTimeout(t);
  }, [lastChange]);

  let view: React.ReactNode;
  if (rest.startsWith("c/")) view = <ConceptView id={decodeRest(rest.slice(2))} />;
  else if (rest.startsWith("d/")) view = <DirView dir={decodeRest(rest.slice(2))} />;
  else if (rest === "explore") view = <Explore />;
  else if (rest === "timeline") view = <Timeline />;
  else if (rest === "graph") view = <GraphView />;
  else if (rest === "health") view = <Health />;
  else view = <DirView dir="" />;
  const wide = rest === "explore" || rest === "timeline" || rest === "graph" || rest === "health";

  return (
    <div className={`app${ui.sidebarOpen ? " with-sidebar" : ""}`}>
      <TopBar isConcept={rest.startsWith("c/")} />
      <div className="body">
        <Sidebar />
        {ui.sidebarOpen && <div className="scrim mobile-only" onClick={() => ui.setSidebarOpen(false)} />}
        <main className={`main${wide ? " wide" : ""}`}>
          {error && !manifest ? (
            <div className="doc empty-state">
              <h1>Can't load “{bundle}”</h1>
              <p className="muted">{error}</p>
              <Link to="/" className="btn">All bundles</Link>
            </div>
          ) : (
            view
          )}
        </main>
      </div>
      {ui.paletteOpen && manifest && <CommandPalette />}
      {manifest && <HoverPreview />}
      {ui.helpOpen && <HelpDialog onClose={() => ui.setHelpOpen(false)} />}
      <div className={`toast${toast ? " show" : ""}`}><Radio size={14} /> Bundle updated on disk. View refreshed.</div>
    </div>
  );
}

function TopBar({ isConcept }: { isConcept: boolean }) {
  const { bundle, manifest, lastChange } = useBundle();
  const ui = useUi();
  const [bundles, setBundles] = useState<{ name: string }[]>([]);
  useEffect(() => {
    api.bundles().then(setBundles, () => {});
  }, []);
  const ThemeIcon = ui.theme === "dark" ? Moon : ui.theme === "light" ? Sun : Monitor;
  const nextTheme = ui.theme === "system" ? "dark" : ui.theme === "dark" ? "light" : "system";
  const live = lastChange && Date.now() - lastChange < 60000;
  return (
    <header className="topbar">
      <button className="icon-btn" onClick={() => ui.setSidebarOpen(!ui.sidebarOpen)} aria-label="Toggle sidebar" title="Toggle sidebar (\)">
        <Menu size={18} />
      </button>
      <Link to={routes.home(bundle)} className="brand">
        <span className="logo">OKF</span>
        <span className="brand-name">{manifest?.title ?? bundle}</span>
      </Link>
      {bundles.length > 1 && (
        <select className="bundle-switch" value={bundle} onChange={(e) => (window.location.href = routes.home(e.target.value))} aria-label="Switch bundle">
          {bundles.map((b) => <option key={b.name} value={b.name}>{b.name}</option>)}
        </select>
      )}
      <button className="search-trigger" onClick={() => ui.setPaletteOpen(true)}>
        <Search size={15} />
        <span className="st-text">Search {manifest ? `${manifest.concepts.length} concepts` : ""}…</span>
        <kbd>{modKey}K</kbd>
      </button>
      <nav className="view-tabs">
        <NavLink to={routes.explore(bundle)} title="Explore (g e)"><Compass size={16} /><span>Explore</span></NavLink>
        <NavLink to={routes.timeline(bundle)} title="Timeline (g t)"><CalendarRange size={16} /><span>Timeline</span></NavLink>
        <NavLink to={routes.graph(bundle)} title="Graph (g g)"><Share2 size={16} /><span>Graph</span></NavLink>
      </nav>
      <span className={`live-dot${live ? " on" : ""}`} title={live ? "Updated from disk moments ago" : "Watching for changes"} />
      <button className="icon-btn" onClick={() => ui.setTheme(nextTheme)} title={`Theme: ${ui.theme}`} aria-label="Toggle theme">
        <ThemeIcon size={17} />
      </button>
      {isConcept && (
        <button className={`icon-btn${ui.panelOpen ? " on" : ""}`} onClick={() => ui.setPanelOpen(!ui.panelOpen)} title="Toggle context panel (.)" aria-label="Toggle context panel">
          <PanelRight size={17} />
        </button>
      )}
    </header>
  );
}

function HelpDialog({ onClose }: { onClose: () => void }) {
  const rows: [string, string][] = [
    [`${modKey} K  or  /`, "Search & commands"],
    ["g h · g e · g t · g g · g x", "Home · Explore · Timeline · Graph · Health"],
    ["[  ]", "Previous / next concept in folder"],
    [".", "Toggle context panel"],
    ["\\", "Toggle sidebar"],
    ["Hover a link", "Preview the concept"],
    ["Hover a footnote", "See the source"],
    ["?", "This help"],
  ];
  return (
    <div className="overlay" onMouseDown={onClose}>
      <div className="dialog" onMouseDown={(e) => e.stopPropagation()}>
        <div className="dialog-head">
          <strong>Keyboard shortcuts</strong>
          <button className="icon-btn" onClick={onClose} aria-label="Close"><X size={16} /></button>
        </div>
        <dl className="keys">
          {rows.map(([k, v]) => (
            <div key={k}><dt><kbd>{k}</kbd></dt><dd>{v}</dd></div>
          ))}
        </dl>
        <p className="muted small">Search syntax: <code>type:event</code> <code>#tag</code> <code>in:folder</code>, or start with <code>&gt;</code> for commands.</p>
      </div>
    </div>
  );
}
