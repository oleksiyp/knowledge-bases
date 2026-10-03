import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Folder, Compass, History, Layers, ShieldCheck, Clock, HeartPulse, ArrowRight } from "lucide-react";
import { api, type DirDetail, type LightConcept } from "../api";
import { useBundle } from "../store";
import { relTime, routes, typeColor } from "../util";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FreshBadge, TrustBadge, TypePill } from "../components/Badges";

export function ConceptCard({ c }: { c: LightConcept }) {
  const { bundle } = useBundle();
  return (
    <Link to={routes.concept(bundle, c.id)} className="card concept-card" data-cid={c.id} data-nopreview>
      <div className="cc-top">
        <TypePill type={c.type} small link={false} />
        <span className="cc-badges">
          <TrustBadge trust={c.trust} compact />
          <FreshBadge c={c} compact />
        </span>
      </div>
      <div className="cc-title">{c.title}</div>
      {c.description && <div className="cc-desc">{c.description}</div>}
      <div className="cc-foot muted">
        {c.date ?? (c.generatedAt ? relTime(c.generatedAt, { past: true }) : "")}
        {c.inDeg > 0 && <span> · {c.inDeg} backlinks</span>}
      </div>
    </Link>
  );
}

function Bar({ parts }: { parts: { label: string; value: number; cls: string }[] }) {
  const total = parts.reduce((s, p) => s + p.value, 0) || 1;
  return (
    <div className="stack-bar-wrap">
      <div className="stack-bar">
        {parts.filter((p) => p.value > 0).map((p) => (
          <span key={p.label} className={p.cls} style={{ width: `${(p.value / total) * 100}%` }} title={`${p.label}: ${p.value}`} />
        ))}
      </div>
      <div className="stack-legend">
        {parts.map((p) => (
          <span key={p.label}><i className={p.cls} />{p.label} <strong>{p.value}</strong></span>
        ))}
      </div>
    </div>
  );
}

export function DirView({ dir }: { dir: string }) {
  const { bundle, version, manifest, byId } = useBundle();
  const [d, setD] = useState<DirDetail | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setErr(null);
    api.dir(bundle, version, dir).then((x) => alive && setD(x), (e) => alive && setErr(e.message));
    return () => {
      alive = false;
    };
  }, [bundle, version, dir]);

  useEffect(() => {
    document.title = dir ? `${dir} · ${manifest?.title ?? bundle}` : manifest?.title ?? bundle;
  }, [dir, bundle, manifest?.title]);

  const inDir = useMemo(() => (manifest?.concepts ?? []).filter((c) => c.dir === dir || c.dir.startsWith(dir ? dir + "/" : "")), [manifest, dir]);
  const typeCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of inDir) m.set(c.type, (m.get(c.type) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [inDir]);

  if (err) return <div className="doc empty-state"><p>Could not load folder: {err}</p></div>;
  if (!d || !manifest) return <div className="doc skeleton"><div className="sk sk-title" /><div className="sk sk-block" /></div>;

  const isRoot = dir === "";
  const recent = [...inDir].sort((a, b) => (Date.parse(b.generatedAt ?? "") || b.mtime) - (Date.parse(a.generatedAt ?? "") || a.mtime)).slice(0, 8);
  const trust = { u: 0, m: 0, h: 0 };
  const fresh = { f: 0, s: 0, n: 0 };
  for (const c of inDir) {
    if (c.trust === "human-reviewed") trust.h++;
    else if (c.trust === "machine-confirmed") trust.m++;
    else trust.u++;
    if (c.isStale) fresh.s++;
    else if (c.staleAfter) fresh.f++;
    else fresh.n++;
  }
  const issues = manifest.stats.issues;
  const own = d.concepts.map((id) => byId.get(id)).filter(Boolean) as LightConcept[];
  const lastUpdate = recent[0]?.generatedAt;

  return (
    <div className="dir-view">
      {!isRoot && <Breadcrumbs dir={dir.split("/").slice(0, -1).join("/")} tail={dir.split("/").pop()} />}
      <header className="dir-head">
        <div className="dir-icon"><Folder size={22} /></div>
        <div>
          <h1>{isRoot ? manifest.title : dir.split("/").pop()}</h1>
          <div className="muted dir-sub">
            {d.total} concepts{d.subdirs.length ? ` · ${d.subdirs.length} folders` : ""}
            {isRoot && manifest.okfVersion && <> · OKF v{manifest.okfVersion}</>}
            {lastUpdate && <> · last updated {relTime(lastUpdate, { past: true })}</>}
          </div>
        </div>
        <Link to={routes.explore(bundle, dir ? { folder: inDir.length ? [...new Set(inDir.map((c) => c.dir))] : [dir] } : {})} className="btn ghost">
          <Compass size={15} /> Explore {isRoot ? "all" : "folder"}
        </Link>
      </header>

      {isRoot && (
        <div className="stat-grid home-stats">
          <div className="stat-card">
            <div className="stat-label"><Layers size={14} /> Concepts</div>
            <div className="stat-value">{manifest.concepts.length}</div>
            <div className="stat-sub">{typeCounts.length} types · {manifest.dirs.length - 1} folders</div>
          </div>
          <div className="stat-card wide">
            <div className="stat-label"><ShieldCheck size={14} /> Trust</div>
            <Bar parts={[{ label: "Human-reviewed", value: trust.h, cls: "t-h" }, { label: "Machine-confirmed", value: trust.m, cls: "t-m" }, { label: "Unverified", value: trust.u, cls: "t-u" }]} />
          </div>
          <div className="stat-card wide">
            <div className="stat-label"><Clock size={14} /> Freshness</div>
            <Bar parts={[{ label: "Fresh", value: fresh.f, cls: "f-f" }, { label: "Stale", value: fresh.s, cls: "f-s" }, { label: "No expiry", value: fresh.n, cls: "f-n" }]} />
          </div>
          <Link to={routes.health(bundle)} className="stat-card link">
            <div className="stat-label"><HeartPulse size={14} /> Health</div>
            <div className={`stat-value ${issues.error ? "neg" : issues.warning ? "mid" : "pos"}`}>{issues.error ? `${issues.error} errors` : issues.warning ? `${issues.warning} warnings` : "Conformant"}</div>
            <div className="stat-sub">OKF v0.2 checks <ArrowRight size={12} /></div>
          </Link>
        </div>
      )}

      {typeCounts.length > 1 && (
        <div className="type-chips">
          {typeCounts.map(([t, n]) => (
            <Link key={t} to={routes.explore(bundle, dir ? { type: t, folder: [...new Set(inDir.filter((c) => c.type === t).map((c) => c.dir))] } : { type: t })} className="type-chip" style={{ "--c": typeColor(t) } as React.CSSProperties}>
              <span className="dot" />{t}<strong>{n}</strong>
            </Link>
          ))}
        </div>
      )}

      <div className={isRoot ? "home-grid" : ""}>
        <div className="home-main">
          {d.subdirs.length > 0 && (
            <section>
              <h2 className="section-h">Folders</h2>
              <div className="folder-grid">
                {d.subdirs.map((s) => (
                  <Link key={s.path} to={routes.dir(bundle, s.path)} className="card folder-card">
                    <Folder size={18} />
                    <span className="fc-name">{s.path.split("/").pop()}</span>
                    <span className="fc-count">{s.count}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {d.indexHtml ? (
            <section className="dir-index prose" dangerouslySetInnerHTML={{ __html: d.indexHtml }} />
          ) : own.length > 0 ? (
            <section>
              <h2 className="section-h">Concepts</h2>
              <div className="card-grid">{own.map((c) => <ConceptCard key={c.id} c={c} />)}</div>
            </section>
          ) : null}

          {d.logHtml && (
            <section id="log" className="dir-log">
              <h2 className="section-h"><History size={16} /> Update log</h2>
              <div className="prose log-prose" dangerouslySetInnerHTML={{ __html: d.logHtml }} />
            </section>
          )}
        </div>

        {isRoot && (
          <aside className="home-side">
            <section>
              <h2 className="section-h">Recently updated</h2>
              <div className="recent-list">
                {recent.map((c) => (
                  <Link key={c.id} to={routes.concept(bundle, c.id)} className="recent-item" data-cid={c.id}>
                    <span className="leaf-dot" style={{ background: typeColor(c.type) }} />
                    <span className="ri-title">{c.title}</span>
                    <span className="ri-time muted">{relTime(c.generatedAt ?? c.mtime, { past: true })}</span>
                  </Link>
                ))}
              </div>
            </section>
            <section>
              <h2 className="section-h">Most referenced</h2>
              <div className="recent-list">
                {[...manifest.concepts].sort((a, b) => b.inDeg - a.inDeg).slice(0, 8).map((c) => (
                  <Link key={c.id} to={routes.concept(bundle, c.id)} className="recent-item" data-cid={c.id}>
                    <span className="leaf-dot" style={{ background: typeColor(c.type) }} />
                    <span className="ri-title">{c.title}</span>
                    <span className="ri-time muted">{c.inDeg}</span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        )}
      </div>
    </div>
  );
}
