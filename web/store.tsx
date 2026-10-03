import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { api, type LightConcept, type Manifest } from "./api";
import { rankTypeColors } from "./util";

interface BundleCtx {
  bundle: string;
  manifest: Manifest | null;
  byId: Map<string, LightConcept>;
  version: number;
  error: string | null;
  lastChange: number | null;
}

interface UiCtx {
  theme: "light" | "dark" | "system";
  setTheme: (t: "light" | "dark" | "system") => void;
  paletteOpen: boolean;
  setPaletteOpen: (o: boolean, initial?: string) => void;
  paletteInitial: string;
  sidebarOpen: boolean;
  setSidebarOpen: (o: boolean) => void;
  panelOpen: boolean;
  setPanelOpen: (o: boolean) => void;
  recent: string[];
  pushRecent: (id: string) => void;
  helpOpen: boolean;
  setHelpOpen: (o: boolean) => void;
}

const BCtx = createContext<BundleCtx | null>(null);
const UCtx = createContext<UiCtx | null>(null);

function stored<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : (JSON.parse(v) as T);
  } catch {
    return fallback;
  }
}
function store(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage may be unavailable */
  }
}

export function UiProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<"light" | "dark" | "system">(() => {
    try {
      return (localStorage.getItem("okf-theme") as "light" | "dark" | null) ?? "system";
    } catch {
      return "system";
    }
  });
  const [paletteOpen, setPaletteOpenState] = useState(false);
  const [paletteInitial, setPaletteInitial] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(() => (typeof window !== "undefined" ? window.innerWidth > 900 : true));
  const [panelOpen, setPanelOpenState] = useState<boolean>(() => stored("okf-panel", true));
  const [recent, setRecent] = useState<string[]>(() => stored("okf-recent", []));
  const [helpOpen, setHelpOpen] = useState(false);

  const setTheme = useCallback((t: "light" | "dark" | "system") => {
    setThemeState(t);
    try {
      if (t === "system") {
        localStorage.removeItem("okf-theme");
        delete document.documentElement.dataset.theme;
      } else {
        localStorage.setItem("okf-theme", t);
        document.documentElement.dataset.theme = t;
      }
    } catch {
      /* ignore */
    }
  }, []);
  const setPaletteOpen = useCallback((o: boolean, initial = "") => {
    setPaletteInitial(initial);
    setPaletteOpenState(o);
  }, []);
  const setPanelOpen = useCallback((o: boolean) => {
    setPanelOpenState(o);
    store("okf-panel", o);
  }, []);
  const pushRecent = useCallback((id: string) => {
    setRecent((r) => {
      const next = [id, ...r.filter((x) => x !== id)].slice(0, 12);
      store("okf-recent", next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, paletteOpen, setPaletteOpen, paletteInitial, sidebarOpen, setSidebarOpen, panelOpen, setPanelOpen, recent, pushRecent, helpOpen, setHelpOpen }),
    [theme, setTheme, paletteOpen, setPaletteOpen, paletteInitial, sidebarOpen, panelOpen, setPanelOpen, recent, pushRecent, helpOpen],
  );
  return <UCtx.Provider value={value}>{children}</UCtx.Provider>;
}

export function BundleProvider({ bundle, children }: { bundle: string; children: ReactNode }) {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastChange, setLastChange] = useState<number | null>(null);
  const loading = useRef(false);

  const load = useCallback(
    async (isChange: boolean) => {
      if (loading.current) return;
      loading.current = true;
      try {
        const m = await api.manifest(bundle);
        rankTypeColors(m.stats.types);
        setManifest(m);
        setError(null);
        if (isChange) setLastChange(Date.now());
      } catch (e) {
        setError((e as Error).message);
      } finally {
        loading.current = false;
      }
    },
    [bundle],
  );

  useEffect(() => {
    setManifest(null);
    load(false);
    const es = new EventSource("/api/events");
    es.addEventListener("changed", (ev) => {
      const d = JSON.parse((ev as MessageEvent).data) as { bundle: string };
      if (d.bundle === bundle) load(true);
    });
    return () => es.close();
  }, [bundle, load]);

  const byId = useMemo(() => new Map((manifest?.concepts ?? []).map((c) => [c.id, c])), [manifest]);
  const value = useMemo(
    () => ({ bundle, manifest, byId, version: manifest?.version ?? 0, error, lastChange }),
    [bundle, manifest, byId, error, lastChange],
  );
  return <BCtx.Provider value={value}>{children}</BCtx.Provider>;
}

export function useBundle(): BundleCtx {
  const c = useContext(BCtx);
  if (!c) throw new Error("useBundle outside BundleProvider");
  return c;
}

export function useUi(): UiCtx {
  const c = useContext(UCtx);
  if (!c) throw new Error("useUi outside UiProvider");
  return c;
}
