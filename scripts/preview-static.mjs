// Serves dist/web the way Cloudflare Pages does: exact file, then <path>.html, then <path>/index.html,
// then 404.html with status 404. Usage: node scripts/preview-static.mjs [port]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const root = path.resolve("dist/web");
const port = Number(process.argv[2] ?? 4848);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".md": "text/markdown; charset=utf-8", ".svg": "image/svg+xml" };
http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const cands = [path.join(root, p), path.join(root, p + ".html"), path.join(root, p, "index.html")];
  const file = cands.find((f) => f.startsWith(root) && fs.existsSync(f) && fs.statSync(f).isFile());
  const target = file ?? path.join(root, "404.html");
  res.writeHead(file ? 200 : 404, { "Content-Type": types[path.extname(target)] ?? "application/octet-stream" });
  fs.createReadStream(target).pipe(res);
}).listen(port, "127.0.0.1", () => console.log(`static preview on http://127.0.0.1:${port}`));
