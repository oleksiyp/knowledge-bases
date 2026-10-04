import { sitePath } from "../paths";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ForceGraph from "force-graph";
import { api, type GraphData } from "../api";
import { useBundle } from "../store";
import { routes, typeColor } from "../util";

export interface GNode {
  id: string;
  title: string;
  type: string;
  deg: number;
  x?: number;
  y?: number;
}
export interface GLink {
  source: string | GNode;
  target: string | GNode;
  kind: string;
}

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export function useGraphData(): GraphData | null {
  const { bundle, version } = useBundle();
  const [g, setG] = useState<GraphData | null>(null);
  useEffect(() => {
    let alive = true;
    api.graph(bundle, version).then((d) => alive && setG(d));
    return () => {
      alive = false;
    };
  }, [bundle, version]);
  return g;
}

interface Props {
  nodes: GNode[];
  links: GLink[];
  focus?: string;
  highlight?: Set<string>;
  height: number;
  showLabels?: "all" | "focus" | "zoom";
  onSelect?: (id: string | null) => void;
  compact?: boolean;
}

export function GraphCanvas({ nodes, links, focus, highlight, height, showLabels = "zoom", onSelect, compact }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const fg = useRef<ForceGraph<GNode, GLink> | null>(null);
  const hover = useRef<string | null>(null);
  const settled = useRef(false);
  // Fit the viewport to the focus node and its neighbours (or everything), never zooming in absurdly.
  const fitTo = (f?: string) => {
    const g = fg.current;
    if (!g) return;
    const near = f ? neighborsRef.current.get(f) ?? new Set<string>() : null;
    if (f && !compact) g.zoomToFit(600, 90, (n) => n.id === f || near!.has(n.id));
    else g.zoomToFit(400, compact ? 16 : 40);
    window.setTimeout(() => {
      if (g.zoom() > 3.5) g.zoom(3.5, 300);
    }, 650);
  };
  const navigate = useNavigate();
  const { bundle } = useBundle();
  const state = useRef({ focus, highlight, showLabels });
  state.current = { focus, highlight, showLabels };

  const neighbors = useMemo(() => {
    const m = new Map<string, Set<string>>();
    for (const l of links) {
      const s = typeof l.source === "string" ? l.source : l.source.id;
      const t = typeof l.target === "string" ? l.target : l.target.id;
      if (!m.has(s)) m.set(s, new Set());
      if (!m.has(t)) m.set(t, new Set());
      m.get(s)!.add(t);
      m.get(t)!.add(s);
    }
    return m;
  }, [links]);
  const neighborsRef = useRef(neighbors);
  neighborsRef.current = neighbors;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const g = new ForceGraph<GNode, GLink>(el)
      .width(el.clientWidth)
      .height(height)
      .backgroundColor("rgba(0,0,0,0)")
      .nodeId("id")
      .nodeRelSize(compact ? 3 : 3.2)
      .nodeVal((n) => 1 + Math.sqrt(n.deg) * (compact ? 0.8 : 1.2))
      .linkWidth((l) => {
        const h = hover.current ?? state.current.focus;
        const s = typeof l.source === "string" ? l.source : l.source.id;
        const t = typeof l.target === "string" ? l.target : l.target.id;
        return h && (s === h || t === h) ? 1.6 : 0.6;
      })
      .linkColor((l) => {
        const h = hover.current ?? state.current.focus;
        const s = typeof l.source === "string" ? l.source : l.source.id;
        const t = typeof l.target === "string" ? l.target : l.target.id;
        return h && (s === h || t === h) ? cssVar("--accent") : cssVar("--graph-link");
      })
      .linkDirectionalArrowLength(compact ? 0 : 2.5)
      .linkDirectionalArrowRelPos(1)
      .cooldownTicks(compact ? 120 : 220)
      .d3VelocityDecay(0.3)
      .nodeCanvasObject((n, ctx, scale) => {
        const { focus: f, highlight: hl, showLabels: sl } = state.current;
        const h = hover.current ?? f;
        const near = h ? n.id === h || neighborsRef.current.get(h)?.has(n.id) : true;
        const dim = (hl && hl.size > 0 && !hl.has(n.id)) || (h && !near);
        const r = (compact ? 3 : 3.2) * Math.sqrt(1 + Math.sqrt(n.deg) * (compact ? 0.8 : 1.2));
        ctx.globalAlpha = dim ? 0.15 : 1;
        ctx.beginPath();
        ctx.arc(n.x!, n.y!, r, 0, 2 * Math.PI);
        ctx.fillStyle = typeColor(n.type);
        ctx.fill();
        if (n.id === f) {
          ctx.lineWidth = 2 / scale;
          ctx.strokeStyle = cssVar("--text");
          ctx.stroke();
        }
        const label = sl === "all" || n.id === h || n.id === f || (sl === "zoom" && ((scale > 2.2 && !dim) || (!!h && !!near))) || (sl === "focus" && n.id === hover.current);
        if (label) {
          const fs = Math.max(10 / scale, compact ? 2.5 : 2);
          ctx.font = `${n.id === h || n.id === f ? 600 : 400} ${fs}px Inter, system-ui, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          const text = n.title.length > 42 ? n.title.slice(0, 40) + "…" : n.title;
          ctx.lineWidth = 3 / scale;
          ctx.strokeStyle = cssVar("--bg");
          ctx.strokeText(text, n.x!, n.y! + r + 1.5);
          ctx.fillStyle = cssVar("--text");
          ctx.fillText(text, n.x!, n.y! + r + 1.5);
        }
        ctx.globalAlpha = 1;
      })
      .nodePointerAreaPaint((n, color, ctx) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(n.x!, n.y!, 7, 0, 2 * Math.PI);
        ctx.fill();
      })
      .onNodeHover((n) => {
        hover.current = n?.id ?? null;
        el.style.cursor = n ? "pointer" : "default";
      })
      .onNodeClick((n, e) => {
        if (onSelect && !compact) onSelect(n.id);
        else if (e.metaKey || e.ctrlKey) window.open(sitePath(routes.concept(bundle, n.id)), "_blank");
        else navigate(routes.concept(bundle, n.id));
      })
      .onBackgroundClick(() => onSelect?.(null));
    if (compact) {
      g.enableZoomInteraction(false).enablePanInteraction(false);
      (g.d3Force("charge") as unknown as { strength: (n: number) => void })?.strength(-60);
    } else {
      (g.d3Force("charge") as unknown as { strength: (n: number) => void })?.strength(-40);
    }
    g.onEngineStop(() => {
      if (settled.current) return;
      settled.current = true;
      fitTo(state.current.focus);
    });
    fg.current = g;
    const ro = new ResizeObserver(() => g.width(el.clientWidth));
    ro.observe(el);
    return () => {
      ro.disconnect();
      g._destructor();
      fg.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height, compact, bundle]);

  useEffect(() => {
    settled.current = false;
    fg.current?.graphData({ nodes: nodes.map((n) => ({ ...n })), links: links.map((l) => ({ ...l })) });
  }, [nodes, links]);

  // Re-fit when the focus changes after the layout has settled (clicking around the graph).
  useEffect(() => {
    if (!settled.current || compact) return;
    fitTo(focus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus, compact]);

  return <div ref={ref} className="graph-canvas" style={{ height }} />;
}

/** The 1-hop neighbourhood of a concept (2-hop when it is sparse). */
export function LocalGraph({ id, height }: { id: string; height: number }) {
  const g = useGraphData();
  const { byId } = useBundle();
  const data = useMemo(() => {
    if (!g) return null;
    const adj = new Map<string, Set<string>>();
    for (const l of g.links) {
      if (!adj.has(l.source)) adj.set(l.source, new Set());
      if (!adj.has(l.target)) adj.set(l.target, new Set());
      adj.get(l.source)!.add(l.target);
      adj.get(l.target)!.add(l.source);
    }
    const keep = new Set<string>([id, ...(adj.get(id) ?? [])]);
    if (keep.size < 8) for (const n of [...keep]) for (const m of adj.get(n) ?? []) if (keep.size < 30) keep.add(m);
    const nodes: GNode[] = [...keep].map((n) => ({ id: n, title: byId.get(n)?.title ?? n, type: byId.get(n)?.type ?? "", deg: adj.get(n)?.size ?? 0 }));
    const links: GLink[] = g.links.filter((l) => keep.has(l.source) && keep.has(l.target) && (l.source === id || l.target === id || keep.size <= 30));
    return { nodes, links };
  }, [g, id, byId]);
  if (!data) return <div className="graph-canvas sk" style={{ height }} />;
  if (data.nodes.length <= 1) return <div className="graph-empty muted" style={{ height: 60 }}>No links to or from this concept yet.</div>;
  return <GraphCanvas nodes={data.nodes} links={data.links} focus={id} height={height} compact showLabels="focus" />;
}
