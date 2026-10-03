import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronDown, Library } from "lucide-react";
import { api, type BundleInfo } from "../api";
import { useBundle } from "../store";
import { routes } from "../util";

/** Top-bar dropdown that shows the current knowledge base and switches between them. */
export function KbSwitcher() {
  const { bundle, manifest } = useBundle();
  const navigate = useNavigate();
  const [kbs, setKbs] = useState<BundleInfo[]>([]);
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.bundles().then(setKbs, () => {});
  }, []);

  useEffect(() => {
    if (!open) return;
    setSel(Math.max(0, kbs.findIndex((k) => k.name === bundle)));
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, [open, kbs, bundle]);

  const choose = (name: string) => {
    setOpen(false);
    if (name !== bundle) navigate(routes.home(name));
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(kbs.length - 1, s + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
    else if (e.key === "Enter") { e.preventDefault(); if (kbs[sel]) choose(kbs[sel].name); }
    else if (e.key === "Escape") setOpen(false);
  };

  const title = manifest?.title ?? kbs.find((k) => k.name === bundle)?.title ?? bundle;
  return (
    <div className="kb-switch" ref={ref} onKeyDown={onKey}>
      <button className="kb-trigger" onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open} title="Switch knowledge base">
        <span className="logo">OKF</span>
        <span className="kb-title">{title}</span>
        <ChevronDown size={15} className={`kb-chev${open ? " up" : ""}`} />
      </button>
      {open && (
        <div className="kb-menu" role="listbox" aria-label="Knowledge bases">
          <div className="kb-menu-head"><Library size={14} /> Knowledge bases</div>
          {kbs.map((k, i) => (
            <button
              key={k.name}
              role="option"
              aria-selected={k.name === bundle}
              className={`kb-item${i === sel ? " sel" : ""}`}
              onMouseMove={() => setSel(i)}
              onClick={() => choose(k.name)}
            >
              <span className="kb-item-main">
                <span className="kb-item-title">{k.title}</span>
                {k.description && <span className="kb-item-desc">{k.description}</span>}
                <span className="kb-item-meta">{k.concepts.toLocaleString()} concepts · <code>{k.name}</code></span>
              </span>
              {k.name === bundle && <Check size={16} className="kb-check" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
