import { useMemo } from "react";
import { useBundle } from "../store";
import { fmtDate, humanizeKey, routes } from "../util";
import { ConceptLink, ValueChip } from "./Badges";

const SKIP = new Set(["type", "title", "description", "resource", "tags", "sources", "usage_window", "generated", "verified", "status", "stale_after", "timestamp"]);
const DATE_RE = /^\d{4}-\d{2}-\d{2}([T ][\d:.]+(Z|[+-]\d{2}:?\d{2})?)?$/;

export function useRefResolver() {
  const { byId } = useBundle();
  return (v: string, fromDir: string): string | undefined => {
    if (v.length > 300 || /^[a-z]+:\/\//i.test(v)) return undefined;
    const clean = v.trim().replace(/#.*$/, "").replace(/\.md$/, "");
    const cands = clean.startsWith("/") ? [clean.slice(1)] : [clean, normalize(fromDir ? `${fromDir}/${clean}` : clean)];
    return cands.find((c) => byId.has(c));
  };
}

function normalize(p: string): string {
  const out: string[] = [];
  for (const seg of p.split("/")) {
    if (seg === "..") out.pop();
    else if (seg && seg !== ".") out.push(seg);
  }
  return out.join("/");
}

export function Properties({ fm, dir }: { fm: Record<string, unknown>; dir: string }) {
  const { bundle, manifest } = useBundle();
  const resolve = useRefResolver();
  const facetKeys = useMemo(() => new Set(manifest?.facets.map((f) => f.key) ?? []), [manifest]);
  const entries = Object.entries(fm).filter(([k, v]) => !SKIP.has(k) && v !== null && v !== undefined && v !== "");
  if (entries.length === 0) return null;

  const renderScalar = (key: string, v: unknown, i?: number): React.ReactNode => {
    if (typeof v === "boolean" || typeof v === "number") return <ValueChip key={i} value={String(v)} href={facetKeys.has(key) ? routes.explore(bundle, { [key]: String(v) }) : undefined} />;
    if (typeof v !== "string") return <code key={i}>{JSON.stringify(v)}</code>;
    const ref = resolve(v, dir);
    if (ref) return <ConceptLink key={i} id={ref} className="prop-ref" />;
    if (/^https?:\/\//.test(v))
      return (
        <a key={i} href={v} target="_blank" rel="noopener noreferrer" className="ext">
          {v.replace(/^https?:\/\/(www\.)?/, "").slice(0, 60)}
        </a>
      );
    if (DATE_RE.test(v)) return <span key={i} className="prop-date" title={v}>{fmtDate(v)}</span>;
    if (v.length <= 40) return <ValueChip key={i} value={v} href={facetKeys.has(key) ? routes.explore(bundle, { [key]: v }) : undefined} />;
    return <span key={i} className="prop-text">{v}</span>;
  };

  const renderValue = (key: string, v: unknown): React.ReactNode => {
    if (Array.isArray(v)) {
      if (v.every((x) => x === null || typeof x !== "object")) return <div className="prop-list">{v.map((x, i) => renderScalar(key, x, i))}</div>;
      return (
        <div className="prop-objs">
          {v.map((x, i) => (
            <div key={i} className="prop-obj">
              {x && typeof x === "object" ? Object.entries(x as Record<string, unknown>).map(([k2, x2]) => (
                <span key={k2} className="kv"><span className="k">{k2}</span> {renderScalar(`${key}.${k2}`, x2)}</span>
              )) : renderScalar(key, x)}
            </div>
          ))}
        </div>
      );
    }
    if (v && typeof v === "object") {
      return (
        <div className="prop-map">
          {Object.entries(v as Record<string, unknown>).map(([k2, x]) => (
            <span key={k2} className="kv">
              <span className="k">{k2}</span>
              {x && typeof x === "object" ? <code>{JSON.stringify(x)}</code> : renderScalar(`${key}.${k2}`, x)}
            </span>
          ))}
        </div>
      );
    }
    return renderScalar(key, v);
  };

  return (
    <dl className="props">
      {entries.map(([k, v]) => (
        <div className="prop" key={k}>
          <dt title={k}>{humanizeKey(k)}</dt>
          <dd>{renderValue(k, v)}</dd>
        </div>
      ))}
    </dl>
  );
}
