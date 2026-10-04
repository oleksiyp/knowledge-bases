/** Public URL prefix, shared by the static renderer and Vite configuration. */
export function normalizeBasePath(value = "/"): string {
  const segments = value.split("/").filter(Boolean);
  return segments.length ? `/${segments.join("/")}/` : "/";
}

export function withBasePath(base: string, route: string): string {
  return normalizeBasePath(base) + route.replace(/^\/+/, "");
}
