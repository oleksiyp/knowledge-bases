import { Link } from "react-router-dom";
import { ShieldCheck, ShieldQuestion, UserCheck, Clock, AlertTriangle, FileWarning, Archive } from "lucide-react";
import type { LightConcept, TrustTier } from "../api";
import { fmtDate, relTime, routes, sentiment, trustLabel, typeColor } from "../util";
import { useBundle } from "../store";

export function TypePill({ type, small, link = true }: { type: string; small?: boolean; link?: boolean }) {
  const { bundle } = useBundle();
  const color = typeColor(type);
  const body = (
    <span className={`type-pill${small ? " small" : ""}`} style={{ "--c": color } as React.CSSProperties}>
      <span className="dot" />
      {type}
    </span>
  );
  return link ? (
    <Link to={routes.explore(bundle, { type })} className="plain" title={`Explore all ${type} concepts`} onClick={(e) => e.stopPropagation()}>
      {body}
    </Link>
  ) : (
    body
  );
}

export function TrustBadge({ trust, verified, compact }: { trust: TrustTier; verified?: { by: string; at?: string }[]; compact?: boolean }) {
  const Icon = trust === "human-reviewed" ? UserCheck : trust === "machine-confirmed" ? ShieldCheck : ShieldQuestion;
  const title =
    trust === "unverified"
      ? "No `verified` entries: nobody has confirmed this content against its sources yet."
      : `Verified by ${(verified ?? []).map((v) => `${v.by}${v.at ? ` (${fmtDate(v.at)})` : ""}`).join(", ")}`;
  return (
    <span className={`badge trust-${trust}`} title={title}>
      <Icon size={13} />
      {!compact && trustLabel(trust)}
    </span>
  );
}

export function FreshBadge({ c, compact }: { c: Pick<LightConcept, "isStale" | "staleAfter">; compact?: boolean }) {
  if (!c.staleAfter) return null;
  if (c.isStale)
    return (
      <span className="badge stale" title={`stale_after ${c.staleAfter}: content may be out of date`}>
        <AlertTriangle size={13} />
        {!compact && `Stale since ${fmtDate(c.staleAfter)}`}
      </span>
    );
  return (
    <span className="badge fresh" title={`Fresh until ${c.staleAfter}`}>
      <Clock size={13} />
      {!compact && `Fresh · expires ${relTime(c.staleAfter)}`}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  if (status === "stable") return null;
  const Icon = status === "deprecated" ? Archive : FileWarning;
  return (
    <span className={`badge status-${status}`}>
      <Icon size={13} />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export function ValueChip({ value, onClick, href }: { value: string; onClick?: () => void; href?: string }) {
  const cls = `chip s-${sentiment(value)}`;
  if (href)
    return (
      <Link to={href} className={`${cls} clickable`} onClick={(e) => e.stopPropagation()}>
        {value}
      </Link>
    );
  return (
    <span className={cls + (onClick ? " clickable" : "")} onClick={onClick}>
      {value}
    </span>
  );
}

/** Link to a concept that carries data-cid so the global hover preview picks it up. */
export function ConceptLink({ id, children, className }: { id: string; children?: React.ReactNode; className?: string }) {
  const { bundle, byId } = useBundle();
  const c = byId.get(id);
  return (
    <Link to={routes.concept(bundle, id)} data-cid={id} className={`cl${c ? "" : " broken"}${className ? " " + className : ""}`}>
      {children ?? c?.title ?? id}
    </Link>
  );
}
