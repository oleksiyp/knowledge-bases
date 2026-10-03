// Dev runner: API server (watching the bundle) + Vite dev server with HMR.
// Usage: npm run dev -- --bundle name=/path/to/bundle
import { spawn } from "node:child_process";
const args = process.argv.slice(2);
const procs = [
  spawn("node", ["--watch-path=server", "server/index.ts", ...args], { stdio: "inherit" }),
  spawn("npx", ["vite"], { stdio: "inherit" }),
];
const stop = () => procs.forEach((p) => p.kill());
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
