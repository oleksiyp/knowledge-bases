import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse, CheckCircle2, AlertOctagon, AlertTriangle, Info } from "lucide-react";
import { api, type Health as HealthData } from "../api";
import { useBundle } from "../store";
import { humanizeKey, routes } from "../util";

const KIND_HELP: Record<string, string> = {
  yaml: "Frontmatter that does not parse as YAML (spec §11.1).",
  frontmatter: "Concept files without a frontmatter block (spec §11.1).",
  type: "Frontmatter without a non-empty `type` (spec §11.2).",
  "broken-link": "Links to concepts that do not exist. Allowed by the spec (§6.1): they may mark knowledge not yet written.",
  footnote: "Footnotes with neither a matching sources[].id nor a definition.",
  "footnote-unkeyed": "Footnotes with a definition but not keyed to sources[].id (§5.1 recommends keyed attribution).",
  stale: "Concepts past their stale_after instant (§5.5).",
  deprecated: "Concepts with status: deprecated (§5.4).",
  "index-frontmatter": "index.md files outside the root carrying frontmatter (§8).",
};

export function Health() {
  const { bundle, version, byId, manifest } = useBundle();
  const [h, setH] = useState<HealthData | null>(null);
  const [kind, setKind] = useState<string | null>(null);

  useEffect(() => {
    document.title = `Health · ${bundle}`;
    api.health(bundle, version).then(setH);
  }, [bundle, version]);

  const list = useMemo(() => (h?.issues ?? []).filter((i) => !kind || i.kind === kind), [h, kind]);
  if (!h || !manifest) return <div className="doc skeleton"><div className="sk sk-title" /><div className="sk sk-block" /></div>;

  const err = h.issues.filter((i) => i.severity === "error").length;
  const warn = h.issues.filter((i) => i.severity === "warning").length;
  const trust = { u: 0, m: 0, h: 0 };
  for (const c of manifest.concepts) trust[c.trust === "human-reviewed" ? "h" : c.trust === "machine-confirmed" ? "m" : "u"]++;
  const Icon = (s: string) => (s === "error" ? <AlertOctagon size={14} /> : s === "warning" ? <AlertTriangle size={14} /> : <Info size={14} />);

  return (
    <div className="health-view">
      <header className="tl-head"><h1><HeartPulse size={20} /> Bundle health</h1></header>
      <div className="stat-grid">
        <div className={`stat-card ${h.conformant ? "ok" : "bad"}`}>
          <div className="stat-label">{h.conformant ? <CheckCircle2 size={14} /> : <AlertOctagon size={14} />} OKF v0.2 conformance</div>
          <div className={`stat-value ${h.conformant ? "pos" : "neg"}`}>{h.conformant ? "Conformant" : "Not conformant"}</div>
          <div className="stat-sub">{err} errors · {warn} warnings</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Human-reviewed</div>
          <div className="stat-value">{Math.round((trust.h / manifest.concepts.length) * 100)}%</div>
          <div className="stat-sub">{trust.m} machine-confirmed · {trust.u} unverified</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Orphans</div>
          <div className="stat-value">{h.orphans.length}</div>
          <div className="stat-sub">concepts nothing links to</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Stale</div>
          <div className="stat-value">{h.byKind.stale ?? 0}</div>
          <div className="stat-sub">past stale_after</div>
        </div>
      </div>

      <div className="kind-chips">
        <button className={`legend-item${!kind ? "" : " off"}`} onClick={() => setKind(null)}>All <span className="muted">{h.issues.length}</span></button>
        {Object.entries(h.byKind).sort((a, b) => b[1] - a[1]).map(([k, n]) => (
          <button key={k} className={`legend-item${kind === k ? "" : kind ? " off" : ""}`} onClick={() => setKind(kind === k ? null : k)} title={KIND_HELP[k]}>
            {humanizeKey(k)} <span className="muted">{n}</span>
          </button>
        ))}
      </div>
      {kind && KIND_HELP[kind] && <p className="muted kind-help">{KIND_HELP[kind]}</p>}

      {list.length === 0 ? (
        <div className="empty-state small"><CheckCircle2 size={22} /> No issues{kind ? " of this kind" : ""}.</div>
      ) : (
        <div className="table-wrap results-table">
          <table>
            <thead><tr><th>Severity</th><th>Concept</th><th>Issue</th></tr></thead>
            <tbody>
              {list.slice(0, 800).map((i, k) => (
                <tr key={k}>
                  <td><span className={`sev ${i.severity}`}>{Icon(i.severity)} {i.severity}</span></td>
                  <td>{i.concept ? <Link to={routes.concept(bundle, i.concept)} data-cid={i.concept}>{byId.get(i.concept)?.title ?? i.concept}</Link> : "—"}</td>
                  <td>{i.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {h.orphans.length > 0 && !kind && (
        <section>
          <h2 className="section-h">Orphans ({h.orphans.length})</h2>
          <div className="orphans">
            {h.orphans.slice(0, 200).map((id) => <Link key={id} to={routes.concept(bundle, id)} data-cid={id} className="tag">{byId.get(id)?.title ?? id}</Link>)}
          </div>
        </section>
      )}
    </div>
  );
}
