import { Fragment, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Link2, FileCode2, Share2, ExternalLink, Quote, CornerUpLeft, AlertCircle, ChevronDown } from "lucide-react";
import { api, type FullConcept, type Source } from "../api";
import { useBundle, useUi } from "../store";
import { domainOf, fmtDate, relTime, routes, typeColor } from "../util";
import { ConceptLink, FreshBadge, StatusBadge, TrustBadge, TypePill, ValueChip } from "../components/Badges";
import { Properties } from "../components/Properties";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LocalGraph } from "../components/GraphCanvas";
import { slugify } from "../components/slug";

interface FnState {
  label: string;
  n: string;
  rect: DOMRect;
  pinned: boolean;
}

export function ConceptView({ id }: { id: string }) {
  const { bundle, version, byId, lastChange, manifest } = useBundle();
  const ui = useUi();
  const loc = useLocation();
  const navigate = useNavigate();
  const [c, setC] = useState<FullConcept | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [fn, setFn] = useState<FnState | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [propsOpen, setPropsOpen] = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);
  const prevId = useRef<string | null>(null);

  useEffect(() => {
    let alive = true;
    setErr(null);
    api.concept(bundle, version, id).then(
      (d) => alive && setC(d),
      (e) => alive && setErr(e.status === 404 ? "not-found" : e.message),
    );
    return () => {
      alive = false;
    };
  }, [bundle, version, id]);

  useEffect(() => {
    if (c?.id === id) {
      ui.pushRecent(id);
      document.title = `${c.title} · ${manifest?.title ?? bundle}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c, id]);

  // Scroll: to the hash target, or to the top when the concept changes (not on live reloads).
  useLayoutEffect(() => {
    if (!c || c.id !== id) return;
    if (prevId.current === id) return;
    prevId.current = id;
    const hash = decodeURIComponent(loc.hash.slice(1));
    const target = hash ? document.getElementById(hash) : null;
    if (target) target.scrollIntoView({ block: "start" });
    else document.querySelector(".main")?.scrollTo({ top: 0 });
  }, [c, id, loc.hash]);

  // Enhance rendered HTML: sortable tables, heading anchors.
  useEffect(() => {
    const root = bodyRef.current;
    if (!root || !c) return;
    root.querySelectorAll<HTMLTableElement>("table").forEach((table) => {
      const ths = table.querySelectorAll<HTMLTableCellElement>("thead th");
      ths.forEach((th, col) => {
        th.classList.add("sortable");
        th.title = "Sort by this column";
        th.onclick = () => {
          const tbody = table.tBodies[0];
          if (!tbody) return;
          const dir = th.dataset.sort === "asc" ? "desc" : "asc";
          ths.forEach((x) => delete x.dataset.sort);
          th.dataset.sort = dir;
          const rows = [...tbody.rows];
          const key = (r: HTMLTableRowElement) => (r.cells[col]?.textContent ?? "").trim();
          const num = (s: string) => {
            const m = /^[~≈<>]?\s*[-−]?[$€£¥]?\s*([\d.,]+)\s*([kKmMbBtT%]?)/.exec(s);
            if (!m) return NaN;
            const mult: Record<string, number> = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9, t: 1e12, T: 1e12 };
            return parseFloat(m[1].replace(/,/g, "")) * (mult[m[2]] ?? 1);
          };
          rows.sort((a, b) => {
            const x = key(a), y = key(b);
            const nx = num(x), ny = num(y);
            const r = !isNaN(nx) && !isNaN(ny) ? nx - ny : x.localeCompare(y, undefined, { numeric: true });
            return dir === "asc" ? r : -r;
          });
          rows.forEach((r) => tbody.appendChild(r));
        };
      });
    });
    root.querySelectorAll<HTMLElement>("h1[id],h2[id],h3[id],h4[id]").forEach((h) => {
      if (h.querySelector(".anchor")) return;
      const a = document.createElement("a");
      a.className = "anchor";
      a.href = `#${h.id}`;
      a.textContent = "#";
      a.setAttribute("aria-label", "Link to this section");
      h.appendChild(a);
    });
  }, [c]);

  // Scroll spy for the outline.
  useEffect(() => {
    const root = bodyRef.current;
    if (!root || !c) return;
    const heads = [...root.querySelectorAll<HTMLElement>("h1[id],h2[id],h3[id]")];
    const scroller = document.querySelector(".main");
    const onScroll = () => {
      let cur: string | null = null;
      for (const h of heads) if (h.getBoundingClientRect().top < 120) cur = h.id;
      setActive(cur ?? heads[0]?.id ?? null);
    };
    onScroll();
    scroller?.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller?.removeEventListener("scroll", onScroll);
  }, [c]);

  // Footnote popovers (hover on desktop, tap on touch).
  useEffect(() => {
    const root = bodyRef.current;
    if (!root) return;
    let hideT: number | undefined;
    const find = (e: Event) => (e.target as HTMLElement).closest?.("sup.fnref") as HTMLElement | null;
    const show = (sup: HTMLElement, pinned: boolean) => {
      window.clearTimeout(hideT);
      setFn({ label: sup.dataset.fn!, n: sup.textContent ?? "", rect: sup.getBoundingClientRect(), pinned });
    };
    const over = (e: MouseEvent) => {
      const s = find(e);
      if (s && !window.matchMedia("(hover: none)").matches) show(s, false);
    };
    const out = (e: MouseEvent) => {
      if (find(e)) hideT = window.setTimeout(() => setFn((f) => (f && !f.pinned ? null : f)), 250);
    };
    const click = (e: MouseEvent) => {
      const s = find(e);
      if (s) {
        e.preventDefault();
        show(s, true);
      }
    };
    root.addEventListener("mouseover", over);
    root.addEventListener("mouseout", out);
    root.addEventListener("click", click);
    return () => {
      root.removeEventListener("mouseover", over);
      root.removeEventListener("mouseout", out);
      root.removeEventListener("click", click);
    };
  }, [c]);

  const citeCounts = useMemo(() => {
    const m = new Map<string, number>();
    if (!c) return m;
    const tmp = document.createElement("div");
    tmp.innerHTML = c.html;
    tmp.querySelectorAll<HTMLElement>("sup.fnref").forEach((s) => m.set(s.dataset.fn!, (m.get(s.dataset.fn!) ?? 0) + 1));
    return m;
  }, [c]);

  const backlinkGroups = useMemo(() => {
    const g = new Map<string, FullConcept["backlinks"]>();
    for (const b of c?.backlinks ?? []) {
      const t = byId.get(b.from)?.type ?? "Other";
      g.set(t, [...(g.get(t) ?? []), b]);
    }
    return [...g.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [c, byId]);

  // Keyboard: [ and ] move between siblings in the same folder.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || (e.target as HTMLElement).closest("input,textarea,[contenteditable]")) return;
      if (e.key === "[" && c?.siblings.prev) navigate(routes.concept(bundle, c.siblings.prev));
      if (e.key === "]" && c?.siblings.next) navigate(routes.concept(bundle, c.siblings.next));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [c, bundle, navigate]);

  if (err === "not-found")
    return (
      <div className="doc empty-state">
        <AlertCircle size={28} />
        <h1>Not yet written</h1>
        <p>
          There is no concept at <code>/{id}.md</code>. In OKF a link to a missing concept is not an error: it can mark knowledge that
          hasn't been captured yet.
        </p>
        <button className="btn" onClick={() => ui.setPaletteOpen(true, id.split("/").pop()!.replace(/-/g, " "))}>Search for similar concepts</button>
      </div>
    );
  if (err) return <div className="doc empty-state"><AlertCircle size={28} /><p>Failed to load: {err}</p></div>;
  if (!c || c.id !== id) return <DocSkeleton />;

  const sourceById = new Map(c.sources.filter((s) => s.id).map((s) => [s.id!, s]));
  const fnSource = fn ? sourceById.get(fn.label) : undefined;
  const fnDef = fn ? c.footnoteDefs[fn.label] : undefined;
  const reading = Math.max(1, Math.round(c.words / 230));
  const changedRecently = lastChange && c.generatedAt && Date.now() - lastChange < 15000;

  // Share: native share sheet where available (phones), otherwise copy the link.
  const share = async () => {
    const url = window.location.href.split("#")[0];
    if (navigator.share && window.matchMedia("(hover: none)").matches) {
      try {
        await navigator.share({ title: c.title, text: c.description || undefined, url });
        return;
      } catch {
        /* cancelled: fall through to copy */
      }
    }
    await navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className={`concept-layout${ui.panelOpen ? "" : " no-panel"}`}>
      <article className="doc" key={c.id}>
        <Breadcrumbs dir={c.dir} />
        {c.status === "deprecated" && <div className="banner warn">This concept is <strong>deprecated</strong>. It is kept for links and history and is no longer current.</div>}
        {c.status === "draft" && <div className="banner info">This concept is a <strong>draft</strong>: not yet reviewed, possibly incomplete.</div>}
        {c.isStale && <div className="banner warn">This content passed its <code>stale_after</code> date ({fmtDate(c.staleAfter)}). Treat facts as possibly outdated.</div>}

        <header className="doc-head">
          <div className="badges">
            <TypePill type={c.type} />
            <TrustBadge trust={c.trust} verified={c.verified} />
            <FreshBadge c={c} />
            <StatusBadge status={c.status} />
            {changedRecently && <span className="badge live">Updated just now</span>}
          </div>
          <h1 className="doc-title">{c.title}</h1>
          {c.description && <p className="doc-desc">{c.description}</p>}
          <div className="doc-meta">
            {c.generated?.at && (
              <span title={c.generated.at}>
                Updated {relTime(c.generated.at, { past: true })}
                {c.generated.by && <> by <code>{c.generated.by}</code></>}
              </span>
            )}
            {c.date && <span>Date {fmtDate(c.date)}</span>}
            <span>{reading} min read</span>
            <span>{c.sources.length} sources</span>
            <span className="doc-actions">
              <button className="icon-btn sm share-btn" onClick={share} title="Share or copy a link to this page">
                {copied ? <Check size={15} /> : <Link2 size={15} />}
                {copied ? "Link copied" : "Share"}
              </button>
              <a className="icon-btn sm" href={api.rawUrl(bundle, c.id)} target="_blank" rel="noreferrer" title="View raw markdown">
                <FileCode2 size={15} />
              </a>
              <Link className="icon-btn sm" to={routes.graph(bundle, c.id)} title="Show in graph">
                <Share2 size={15} />
              </Link>
              {c.resource && (
                <a className="icon-btn sm" href={c.resource} target="_blank" rel="noopener noreferrer" title={`Open resource: ${c.resource}`}>
                  <ExternalLink size={15} />
                </a>
              )}
            </span>
          </div>
          {c.tags.length > 0 && (
            <div className="tags">
              {c.tags.map((t) => (
                <Link key={t} to={routes.explore(bundle, { tags: t })} className="tag">#{t}</Link>
              ))}
            </div>
          )}
        </header>

        {Object.keys(c.fm).some((k) => !["type", "title", "description", "resource", "tags", "sources", "usage_window", "generated", "verified", "status", "stale_after", "timestamp"].includes(k)) && (
          <section className={`props-wrap${propsOpen ? " open" : ""}`}>
            <button className="props-toggle" onClick={() => setPropsOpen(!propsOpen)}>
              <ChevronDown size={14} className={propsOpen ? "" : "rot-neg"} /> Properties
            </button>
            {propsOpen && <Properties fm={c.fm} dir={c.dir} />}
          </section>
        )}

        <div className="prose" ref={bodyRef} dangerouslySetInnerHTML={{ __html: c.html }} />

        {(c.sources.length > 0 || Object.keys(c.footnoteDefs).length > 0) && (
          <section className="sources" id="sources">
            <h2 className="section-h"><Quote size={16} /> Sources</h2>
            <ol className="source-list">
              {c.sources.map((s, i) => (
                <SourceCard key={s.id ?? i} s={s} cited={s.id ? citeCounts.get(s.id) ?? 0 : 0} />
              ))}
              {Object.entries(c.footnoteDefs)
                .filter(([label]) => !sourceById.has(label))
                .map(([label, html]) => (
                  <li key={label} className="source-card" id={`src-${slugify(label)}`}>
                    <div className="src-title">[^{label}]</div>
                    <div className="src-fn" dangerouslySetInnerHTML={{ __html: html }} />
                  </li>
                ))}
            </ol>
          </section>
        )}

        {c.backlinks.length > 0 && (
          <section className="backlinks" id="backlinks">
            <h2 className="section-h"><CornerUpLeft size={16} /> Referenced by {c.backlinks.length}</h2>
            {backlinkGroups.map(([type, list]) => (
              <div key={type} className="bl-group">
                <div className="bl-type" style={{ color: typeColor(type) }}>{type} · {list.length}</div>
                {list.map((b) => (
                  <Link key={b.from + b.via} to={routes.concept(bundle, b.from)} className="bl-item" data-cid={b.from}>
                    <span className="bl-title">{byId.get(b.from)?.title ?? b.from}</span>
                    {b.via !== "body" && <span className="bl-via">via {b.via.replace("frontmatter:", "")}</span>}
                    {b.snippet && <span className="bl-snippet">{b.snippet}</span>}
                  </Link>
                ))}
              </div>
            ))}
          </section>
        )}

        <nav className="sibling-nav">
          {c.siblings.prev ? (
            <Link to={routes.concept(bundle, c.siblings.prev)} className="sib prev">
              <ArrowLeft size={16} />
              <span><small>Previous in folder</small>{byId.get(c.siblings.prev)?.title}</span>
            </Link>
          ) : <span />}
          {c.siblings.next && (
            <Link to={routes.concept(bundle, c.siblings.next)} className="sib next">
              <span><small>Next in folder</small>{byId.get(c.siblings.next)?.title}</span>
              <ArrowRight size={16} />
            </Link>
          )}
        </nav>
        <div className="doc-foot muted">
          <code>{c.path}</code> · {c.siblings.index + 1} of {c.siblings.total} in folder · <kbd>[</kbd> <kbd>]</kbd> to move
        </div>
      </article>

      {ui.panelOpen && (
        <aside className="ctx-panel">
          {c.outline.length > 1 && (
            <div className="ctx-section">
              <div className="ctx-title">On this page</div>
              <ul className="outline">
                {c.outline.filter((h) => h.level <= 3).map((h) => (
                  <li key={h.slug} className={`lvl${h.level}${active === h.slug ? " active" : ""}`}>
                    <a href={`#${h.slug}`} onClick={(e) => { e.preventDefault(); document.getElementById(h.slug)?.scrollIntoView({ behavior: "smooth", block: "start" }); history.replaceState(null, "", `#${h.slug}`); }}>{h.text}</a>
                  </li>
                ))}
                {c.sources.length > 0 && <li className="lvl1"><a href="#sources" onClick={(e) => { e.preventDefault(); document.getElementById("sources")?.scrollIntoView({ behavior: "smooth" }); }}>Sources</a></li>}
                {c.backlinks.length > 0 && <li className="lvl1"><a href="#backlinks" onClick={(e) => { e.preventDefault(); document.getElementById("backlinks")?.scrollIntoView({ behavior: "smooth" }); }}>Referenced by</a></li>}
              </ul>
            </div>
          )}
          <div className="ctx-section">
            <div className="ctx-title">Connections</div>
            <LocalGraph id={c.id} height={210} />
            <div className="ctx-stats">
              <span><strong>{c.backlinks.length}</strong> in</span>
              <span><strong>{c.outLinks.filter((l) => l.exists).length + c.fmRefs.length}</strong> out</span>
              <span><strong>{c.externalLinks}</strong> external</span>
            </div>
            {c.outLinks.some((l) => !l.exists) && (
              <div className="ctx-note">
                {c.outLinks.filter((l) => !l.exists).length} link(s) to concepts not yet written
              </div>
            )}
          </div>
          <div className="ctx-section">
            <div className="ctx-title">Trust & provenance</div>
            <dl className="mini-dl">
              <dt>Trust tier</dt><dd><TrustBadge trust={c.trust} verified={c.verified} /></dd>
              {c.verified.map((v, i) => (<Fragment key={i}><dt>Verified</dt><dd><code>{v.by}</code>{v.at && <> · {relTime(v.at)}</>}</dd></Fragment>))}
              {c.generated?.by && (<><dt>Generated by</dt><dd><code>{c.generated.by}</code></dd></>)}
              {c.staleAfter && (<><dt>Stale after</dt><dd>{fmtDate(c.staleAfter)} <span className="muted">({relTime(c.staleAfter)})</span></dd></>)}
              <dt>Sources</dt><dd>{c.sources.length} · {new Set(c.sources.map((s) => domainOf(s.resource))).size} domains</dd>
            </dl>
          </div>
          {c.issues.length > 0 && (
            <div className="ctx-section">
              <div className="ctx-title">Issues</div>
              {c.issues.map((i, k) => (
                <div key={k} className={`issue ${i.severity}`}>{i.message}</div>
              ))}
            </div>
          )}
        </aside>
      )}

      {fn && (
        <div
          className="fn-pop"
          style={{ top: Math.min(fn.rect.bottom + 8, window.innerHeight - 220), left: Math.min(Math.max(12, fn.rect.left - 40), window.innerWidth - 372) }}
          onMouseEnter={() => setFn((f) => (f ? { ...f, pinned: true } : f))}
          onMouseLeave={() => setFn(null)}
        >
          <div className="fn-num">Source {fn.n}</div>
          {fnSource ? (
            <SourceBody s={fnSource} />
          ) : fnDef ? (
            <div className="src-fn" dangerouslySetInnerHTML={{ __html: fnDef }} />
          ) : (
            <div className="muted">No source with id <code>{fn.label}</code>.</div>
          )}
          <button className="fn-close" onClick={() => setFn(null)} aria-label="Close">×</button>
        </div>
      )}
    </div>
  );
}

function SourceBody({ s }: { s: Source }) {
  const isUrl = /^https?:\/\//.test(s.resource);
  const isBundle = s.resource.startsWith("/") || /\.md$/.test(s.resource);
  return (
    <div className="src-body">
      <div className="src-title">
        {isUrl && <img className="favicon" alt="" src={`https://www.google.com/s2/favicons?domain=${domainOf(s.resource)}&sz=32`} loading="lazy" />}
        {s.title ?? s.resource}
      </div>
      <div className="src-meta">
        {isUrl ? (
          <a href={s.resource} target="_blank" rel="noopener noreferrer" className="ext">{domainOf(s.resource)}</a>
        ) : isBundle ? (
          <ConceptLink id={s.resource.replace(/^\//, "").replace(/\.md$/, "")} />
        ) : (
          <span className="muted">{s.resource}</span>
        )}
        {s.author && <ValueChip value={s.author} />}
        {s.last_modified && <span className="muted">modified {fmtDate(s.last_modified)}</span>}
        {s.usage_count !== undefined && <span className="muted">{s.usage_count.toLocaleString()} uses</span>}
      </div>
    </div>
  );
}

function SourceCard({ s, cited }: { s: Source; cited: number }) {
  return (
    <li className="source-card" id={s.id ? `src-${slugify(s.id)}` : undefined}>
      <SourceBody s={s} />
      <div className="src-foot">
        {s.id && <code className="src-id">{s.id}</code>}
        <span className={cited ? "muted" : "warn-text"}>{cited ? `cited ${cited}×` : "not cited in body"}</span>
      </div>
    </li>
  );
}

export function DocSkeleton() {
  return (
    <div className="doc skeleton">
      <div className="sk sk-crumb" />
      <div className="sk sk-pill" />
      <div className="sk sk-title" />
      <div className="sk sk-line" />
      <div className="sk sk-line short" />
      <div className="sk sk-block" />
    </div>
  );
}
