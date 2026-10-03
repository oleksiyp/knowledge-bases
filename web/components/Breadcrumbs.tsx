import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useBundle } from "../store";
import { routes } from "../util";

export function Breadcrumbs({ dir, tail }: { dir: string; tail?: string }) {
  const { bundle } = useBundle();
  const parts = dir ? dir.split("/") : [];
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link to={routes.home(bundle)}>{bundle}</Link>
      {parts.map((p, i) => (
        <span key={i} className="crumb">
          <ChevronRight size={13} />
          <Link to={routes.dir(bundle, parts.slice(0, i + 1).join("/"))}>{p}</Link>
        </span>
      ))}
      {tail && (
        <span className="crumb">
          <ChevronRight size={13} />
          <span>{tail}</span>
        </span>
      )}
    </nav>
  );
}
