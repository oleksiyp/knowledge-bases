import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { normalizeBasePath } from "./shared/paths.ts";

export default defineConfig({
  root: "web",
  base: normalizeBasePath(process.env.BASE_PATH),
  plugins: [react()],
  build: { outDir: "../dist/web", emptyOutDir: true, chunkSizeWarningLimit: 900 },
  server: {
    port: 5173,
    proxy: { "/api": { target: "http://127.0.0.1:4747", changeOrigin: false } },
  },
});
