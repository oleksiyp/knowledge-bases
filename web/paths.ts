import { withBasePath } from "../shared/paths";

export const basePath = import.meta.env.BASE_URL;
export const sitePath = (route: string) => withBasePath(basePath, route);

/** React Router receives paths relative to its basename. */
export function routerPath(href: string): string | undefined {
  if (!href.startsWith(basePath)) return undefined;
  return "/" + href.slice(basePath.length);
}
