---
type: Event
title: Node.js unflags require(esm)
description: Node.js 22.12.0 let CommonJS code require() synchronous ES modules without a flag, and the change was backported to 20.19; this closed the asymmetry that had made the CJS-to-ESM migration painful since 2019.
event_kind: release
date: 2024-12-03
era: E4
impact: positive
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/nodejs]
ideas: [ideas/tooling-and-ecosystem/esm-migration]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: node-2212
    resource: https://nodejs.org/en/blog/release/v22.12.0
    title: "Node.js blog: Node.js 22.12.0 (LTS) (2024-12-03)"
    author: org:nodejs
  - id: node-2019
    resource: https://nodejs.org/en/blog/release/v20.19.0
    title: "Node.js blog: Node.js 20.19.0 (LTS)"
    author: org:nodejs
  - id: joyee-require-esm
    resource: https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
    title: "Joyee Cheung: require(esm) in Node.js: from experiment to stability (2025-12-30)"
---

# What happened
Node.js 22.12.0 (LTS) shipped on 2024-12-03 with `require(esm)` enabled by default. Before that it had been behind `--experimental-require-module`. CommonJS code could now `require()` an ES module graph, with `ERR_REQUIRE_ASYNC_MODULE` thrown only if the graph uses top-level `await`. A new `"module-sync"` exports condition let packages serve one ESM build to both `require` and `import`.[^node-2212] Because of its ecosystem impact, the change was backported to the maintenance-mode 20.x line in 20.19.0.[^node-2019] Joyee Cheung, who drove the work, later described its path from experiment to stability.[^joyee-require-esm]

# Why it matters
Since Node 13.2 (2019), ESM could import CommonJS but not the reverse. Library authors had to choose between dual builds (with "dual package hazard" bugs) and ESM-only releases that broke CJS consumers. Unflagged `require(esm)` let packages ship ESM-only without stranding CommonJS users, five years after ESM was unflagged. It is the practical end of the module-system war. The lesson: a migration across an ecosystem stalls until the old world can consume the new world transparently.

# Related
- [ESM migration](/ideas/tooling-and-ecosystem/esm-migration.md)
- [Node.js](/runtimes/nodejs.md)
- [Node unflags ESM](/events/2019-11-node-esm-unflagged.md)

[^node-2212]: Node.js blog: Node.js 22.12.0 (LTS) — https://nodejs.org/en/blog/release/v22.12.0
[^node-2019]: Node.js blog: Node.js 20.19.0 (LTS) — https://nodejs.org/en/blog/release/v20.19.0
[^joyee-require-esm]: Joyee Cheung: require(esm) in Node.js: from experiment to stability — https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
