---
type: Event
title: Node.js 13.2 unflags ECMAScript modules
description: Node.js 13.2.0 made native ES modules loadable without a flag (via .mjs or "type":"module"), which began a CommonJS-to-ESM migration that took about five more years to become painless.
event_kind: release
date: 2019-11-21
era: E1
impact: mixed
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/nodejs]
ideas: [ideas/tooling-and-ecosystem/esm-migration]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: node-esm-unflag
    resource: https://medium.com/the-node-js-collection/esm-in-node-has-been-unflagged-other-node-js-updates-of-this-week-46-2019-d805b5d4f93b
    title: "Node.js Collection: ESM in Node has been unflagged (week 46/2019)"
    author: org:nodejs
  - id: node-esm-docs
    resource: https://nodejs.org/api/esm.html
    title: "Node.js docs: Modules: ECMAScript modules"
    author: org:nodejs
  - id: joyee-require-esm
    resource: https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
    title: "Joyee Cheung: require(esm) in Node.js: from experiment to stability (2025-12-30)"
---

# What happened
In November 2019 Node.js 13.2.0 removed the `--experimental-modules` flag. ES modules could now be loaded directly, either from `.mjs` files or from `.js` files under a `package.json` that sets `"type": "module"`. The implementation was still labelled experimental.[^node-esm-unflag][^node-esm-docs] Two module systems now coexisted, and the rules between them were asymmetric. `import` could load CommonJS, but `require()` could not load ESM (`ERR_REQUIRE_ESM`), because ESM loading is asynchronous.[^node-esm-docs]

# Why it matters
This was the start of the JavaScript ecosystem's long migration from CommonJS to ESM. That asymmetry pushed library authors into "dual packages" and conditional exports. Some authors went ESM-only, which broke CommonJS consumers, and the ensuing pain produced years of "ESM is a mess" complaints. The gap was only really closed when `require(esm)` was unflagged in Node 22.12 (December 2024) and backported to 20.19.[^joyee-require-esm] The lesson is that shipping a second module system without a two-way bridge turns a language upgrade into an ecosystem-wide coordination problem.

# Related
- [Node.js](/runtimes/nodejs.md), [JavaScript](/languages/javascript.md)
- [ESM migration](/ideas/tooling-and-ecosystem/esm-migration.md)
- [require(esm) unflagged](/events/2024-12-node-require-esm-unflagged.md)

[^node-esm-unflag]: Node.js Collection: ESM in Node has been unflagged — https://medium.com/the-node-js-collection/esm-in-node-has-been-unflagged-other-node-js-updates-of-this-week-46-2019-d805b5d4f93b
[^node-esm-docs]: Node.js docs: Modules: ECMAScript modules — https://nodejs.org/api/esm.html
[^joyee-require-esm]: Joyee Cheung: require(esm) in Node.js: from experiment to stability — https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
