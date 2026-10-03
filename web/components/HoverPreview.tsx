import { useEffect, useRef, useState } from "react";
import { api, type Preview } from "../api";
import { useBundle } from "../store";
import { FreshBadge, TrustBadge, TypePill } from "./Badges";
import { relTime } from "../util";

interface State {
  id: string;
  rect: DOMRect;
  data?: Preview;
  missing?: boolean;
}

/** Wikipedia-style page previews for every element with data-cid, wherever it is rendered. */
export function HoverPreview() {
  const { bundle, version, byId } = useBundle();
  const [st, setSt] = useState<State | null>(null);
  const showTimer = useRef<number | undefined>(undefined);
  const hideTimer = useRef<number | undefined>(undefined);
  const overCard = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const onOver = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("[data-cid]") as HTMLElement | null;
      if (!a || a.closest(".preview-card") || a.dataset.nopreview !== undefined) return;
      const id = a.dataset.cid!;
      window.clearTimeout(hideTimer.current);
      window.clearTimeout(showTimer.current);
      showTimer.current = window.setTimeout(() => {
        const rect = a.getBoundingClientRect();
        if (!byId.has(id)) {
          setSt({ id, rect, missing: true });
          return;
        }
        setSt({ id, rect });
        api.preview(bundle, version, id).then((data) => setSt((s) => (s && s.id === id ? { ...s, data } : s)), () => {});
      }, 380);
    };
    const onOut = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("[data-cid]");
      if (!a) return;
      window.clearTimeout(showTimer.current);
      hideTimer.current = window.setTimeout(() => {
        if (!overCard.current) setSt(null);
      }, 220);
    };
    const onScroll = () => setSt(null);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [bundle, version, byId]);

  useEffect(() => {
    const onDown = () => setSt(null);
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  if (!st) return null;
  const W = 380;
  const below = st.rect.bottom + 260 < window.innerHeight;
  const left = Math.min(Math.max(12, st.rect.left), window.innerWidth - W - 12);
  const style: React.CSSProperties = below ? { top: st.rect.bottom + 8, left, width: W } : { bottom: window.innerHeight - st.rect.top + 8, left, width: W };
  const light = byId.get(st.id);
  return (
    <div
      className="preview-card"
      style={style}
      onMouseEnter={() => {
        overCard.current = true;
        window.clearTimeout(hideTimer.current);
      }}
      onMouseLeave={() => {
        overCard.current = false;
        setSt(null);
      }}
    >
      {st.missing ? (
        <div className="pv-missing">
          <strong>Not yet written</strong>
          <p>
            <code>/{st.id}.md</code> does not exist in this bundle. In OKF a broken link can mark knowledge that hasn't been captured yet.
          </p>
        </div>
      ) : (
        <>
          <div className="pv-head">
            {light && <TypePill type={light.type} small link={false} />}
            {light && <TrustBadge trust={light.trust} compact />}
            {light && <FreshBadge c={light} compact />}
            <span className="muted pv-path">{st.id}</span>
          </div>
          <div className="pv-title">{light?.title ?? st.id}</div>
          {light?.description && <div className="pv-desc">{light.description}</div>}
          {st.data ? (
            <div className="pv-excerpt">{st.data.excerpt}…</div>
          ) : (
            <div className="pv-excerpt skeleton-lines">
              <span />
              <span />
            </div>
          )}
          {light && (
            <div className="pv-foot muted">
              {light.inDeg} backlinks · {light.outDeg} links{light.generatedAt ? ` · updated ${relTime(light.generatedAt, { past: true })}` : ""}
            </div>
          )}
        </>
      )}
    </div>
  );
}
