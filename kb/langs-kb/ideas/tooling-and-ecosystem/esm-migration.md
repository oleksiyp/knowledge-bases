---
type: Idea
title: The CommonJS → ES modules migration
description: Moving the npm ecosystem from Node's CommonJS to standard ES modules. ESM was unflagged in Node 13.2 (Nov 2019), followed by about five years of painful dual-format packages. It only turned the corner when Node made require(esm) work (unflagged Dec 2024, stable by late 2025). It is succeeding, roughly a decade after ES2015 standardised modules.
area: tooling-and-ecosystem
tags: [esm, commonjs, nodejs, npm, modules, require-esm, dual-packages, migration]
outcome: succeeding
maturity_2026: mainstream
origin_year: 2015
mainstream_year: 2019
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/nodejs, runtimes/deno, runtimes/bun]
related_ideas: [ideas/platforms-and-portability/js-runtime-competition, ideas/tooling-and-ecosystem/language-editions-and-evolution, ideas/tooling-and-ecosystem/native-rewrites-of-tooling, ideas/concurrency/async-await-and-function-coloring]
era_momentum: { E1: up, E2: down, E3: flat, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: node-esm-unflag
    resource: https://medium.com/the-node-js-collection/esm-in-node-has-been-unflagged-other-node-js-updates-of-this-week-46-2019-d805b5d4f93b
    title: "Node.js Collection: ESM in Node has been unflagged (Node 13.2, Nov 2019)"
    author: org:nodejs
  - id: sindre-gist
    resource: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
    title: "Sindre Sorhus: Pure ESM package (gist, 2021)"
  - id: node-2212
    resource: https://nodejs.org/en/blog/release/v22.12.0
    title: "Node.js 22.12.0 (LTS) release notes: require(esm) unflagged (2024-12-03)"
    author: org:nodejs
  - id: node-2019
    resource: https://nodejs.org/en/blog/release/v20.19.0
    title: "Node.js 20.19.0 (LTS) release notes: require(esm) backported unflagged (2025-03)"
    author: org:nodejs
  - id: joyee-require-esm
    resource: https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
    title: "Joyee Cheung: require(esm) in Node.js — from experiment to stability (2025-12-30)"
  - id: antfu-esm
    resource: https://antfu.me/posts/move-on-to-esm-only
    title: "Anthony Fu: Move on to ESM-only (2025-02-05; npm ESM share 7.8% in 2021 → 25.8% end-2024)"
  - id: storybook-esm
    resource: https://storybook.js.org/blog/storybook-is-going-esm-only/
    title: "Storybook blog: Storybook is going ESM-only"
  - id: jest-esm
    resource: https://jestjs.io/docs/ecmascript-modules
    title: "Jest docs: ECMAScript Modules (experimental; requires --experimental-vm-modules)"
  - id: nest-issue
    resource: https://github.com/nestjs/nest/issues/7021
    title: "nestjs/nest issue #7021: Support importing from pure ESM packages"
---

# Summary
**Succeeding, late and painfully.** ES2015 standardised `import`/`export`. Node shipped ESM without a flag in **13.2 (Nov 2019)** but kept `require()` unable to load ESM, so the module system effectively split in two.[^node-esm-unflag] In 2021 Sindre Sorhus declared his 1,000+ packages "pure ESM", which provoked a backlash and an issue on nearly every major framework (e.g. NestJS #7021).[^sindre-gist][^nest-issue] Most libraries then shipped *dual* CJS+ESM builds, with resulting "dual package hazard" bugs and complex `exports` maps. The deadlock was broken by the runtime rather than by persuasion. Node made `require(esm)` work without a flag in **22.12 (Dec 2024)**, made an exceptional backport to **20.19**, and marked it stable by late 2025.[^node-2212][^node-2019][^joyee-require-esm] Anthony Fu's tally, using wooorm's script, put ESM-shipping packages at 7.8% in 2021 and 25.8% at the end of 2024. After `require(esm)`, major projects (Storybook, Chalk and others) went ESM-only.[^antfu-esm][^storybook-esm][^joyee-require-esm]

# The idea
Replace Node's synchronous, dynamic `require()` with the language-standard, statically analysable module system shared with browsers. The benefits are tree-shaking, top-level `await`, one module format for every runtime, and an end to bundler-specific interop.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-11 | Node 13.2 unflags ESM ([event](/events/2019-11-node-esm-unflagged.md)) [^node-esm-unflag] | + |
| E2 | 2021 | Sindre Sorhus moves his packages to pure ESM; node-fetch and others follow; backlash [^sindre-gist][^nest-issue] | mixed |
| E2–E3 | 2021–2024 | Dual-package era: `exports` maps, `.mjs`/`.cjs`, TypeScript `node16`/`nodenext` resolution | − |
| E3 | 2024-09 | Of the top 5,000 npm packages, 559 are ESM-only and only 6 use top-level await [^joyee-require-esm] | + |
| E4 | 2024-12-03 | Node 22.12 unflags `require(esm)` ([event](/events/2024-12-node-require-esm-unflagged.md)) [^node-2212] | + |
| E4 | 2025-02 | "Move on to ESM-only" (Anthony Fu): ESM share 25.8% [^antfu-esm] | + |
| E4 | 2025-03 | Node 20.19 backports `require(esm)` as an exception for an LTS in maintenance [^node-2019] | + |
| E4 | 2025-06 | Jest 30 still treats ESM as experimental [^jest-esm] | − |
| E4 | late 2025 | `require(esm)` stable across supported LTS lines [^joyee-require-esm] | + |

# Where it succeeded
- **Browsers, bundlers (Vite, Rollup) and Deno/Bun** have been ESM-native for years, and modern frameworks default to ESM.[^antfu-esm]
- **`require(esm)` dissolved the asymmetry.** CommonJS apps can now consume ESM-only libraries, so library authors can drop dual builds.[^joyee-require-esm][^storybook-esm]
- **Top-level await turned out to be a non-issue for libraries.** It was the theoretical blocker for synchronous `require(esm)`, but only 6 of the top 5,000 packages used it.[^joyee-require-esm]

# Where it failed or stalled
- **About five lost years (2019–2024)** of ecosystem-wide friction: errors like "ERR_REQUIRE_ESM", dual-package hazards, and confusion over TypeScript resolution modes.[^joyee-require-esm]
- **"Pure ESM first" pushed too early.** Converting libraries before tools and frameworks could consume ESM broke users and fragmented major versions.[^sindre-gist][^nest-issue]
- **Tooling stragglers.** Jest's ESM support remained experimental through Jest 30 (2025), which pushed many projects to Vitest.[^jest-esm]

# Why
1. **The asymmetry was the root cause.** ESM could import CJS but CJS could not `require` ESM. Shipping CJS was therefore always the safe choice, which trapped the ecosystem in CJS.[^joyee-require-esm]
2. **Async loading semantics.** ESM's async-capable loading (for top-level await) made synchronous `require(esm)` look impossible until someone measured how rarely TLA was used and shipped a synchronous path for graphs without TLA.[^joyee-require-esm]
3. **Top-down migration works better than bottom-up.** Frameworks and tools adopting ESM first (Vite, Nuxt, SvelteKit) made ESM-only libraries viable. Leaf libraries going first (2021) mostly created pain.[^antfu-esm]
4. **Runtime stewardship.** One determined Node maintainer effort did more than years of advocacy. Backporting to a maintenance-mode LTS was an unusual decision that reflected how much the ecosystem depended on it.[^node-2019]

# Lessons
- Migrations need a *compatibility bridge in the old world* (here `require(esm)`), not just a better new world. Compare Python 2→3 (see [language editions](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)).
- Measure the blocking edge case before designing around it: top-level await blocked the obvious fix for years while affecting about 0.1% of packages.

# Related
- [JavaScript](/languages/javascript.md), [TypeScript](/languages/typescript.md), [Node.js](/runtimes/nodejs.md), [Deno](/runtimes/deno.md), [Bun](/runtimes/bun.md)
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md), [Language editions and evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)

[^node-esm-unflag]: Node.js Collection: ESM in Node has been unflagged — https://medium.com/the-node-js-collection/esm-in-node-has-been-unflagged-other-node-js-updates-of-this-week-46-2019-d805b5d4f93b
[^sindre-gist]: Sindre Sorhus: Pure ESM package — https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[^node-2212]: Node.js 22.12.0 (LTS) — https://nodejs.org/en/blog/release/v22.12.0
[^node-2019]: Node.js 20.19.0 (LTS) — https://nodejs.org/en/blog/release/v20.19.0
[^joyee-require-esm]: Joyee Cheung: require(esm) in Node.js — https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
[^antfu-esm]: Anthony Fu: Move on to ESM-only — https://antfu.me/posts/move-on-to-esm-only
[^storybook-esm]: Storybook blog: Storybook is going ESM-only — https://storybook.js.org/blog/storybook-is-going-esm-only/
[^jest-esm]: Jest docs: ECMAScript Modules — https://jestjs.io/docs/ecmascript-modules
[^nest-issue]: nestjs/nest issue #7021 — https://github.com/nestjs/nest/issues/7021
