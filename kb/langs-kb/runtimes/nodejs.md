---
type: Runtime
title: Node.js
description: The incumbent server-side JavaScript runtime (V8 + libuv) under the OpenJS Foundation; 2018–2026 it survived the Deno and Bun challenges by absorbing their best ideas (ESM, web-standard APIs, a permission model, built-in TypeScript type stripping, require(esm)) and still holds ~90% of JS backend usage.
tags: [javascript, server-side, v8, openjs-foundation, esm, typescript]
runtime_kind: js-runtime
languages: [languages/javascript, languages/typescript]
ideas:
  - ideas/platforms-and-portability/js-runtime-competition
  - ideas/tooling-and-ecosystem/esm-migration
  - ideas/types/types-as-comments-and-type-stripping
  - ideas/runtime-performance/js-engine-tiering
  - ideas/runtime-performance/startup-snapshotting
  - ideas/tooling-and-ecosystem/package-registry-supply-chain
runtimes: [runtimes/v8]
first_released: 2009
steward: OpenJS Foundation (Node.js TSC)
governance: foundation
trajectory: stable
adoption_signals:
  state_of_js_runtime_usage_pct: { value: 90, as_of: 2025 }
  so_survey_web_tech_used_pct: { value: 48.7, as_of: 2025 }
  github_stars: { value: 122239, as_of: 2026-10-03 }
era_momentum: { E1: flat, E2: flat, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: node-gh
    resource: https://github.com/nodejs/node
    title: "Node.js GitHub repository (stars via GitHub API, 2026-10-03)"
  - id: node-releases
    resource: https://github.com/nodejs/node/releases
    title: "Node.js GitHub releases (v24.0.0 2025-05-06; v25.0.0 2025-10-15; v26.0.0 2026-05-05)"
  - id: node-schedule
    resource: https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule
    title: "Node.js blog: Evolving the Node.js release schedule"
    author: org:nodejs
  - id: node-2212
    resource: https://nodejs.org/en/blog/release/v22.12.0
    title: "Node.js blog: Node.js 22.12.0 (LTS) — require(esm) unflagged"
    author: org:nodejs
  - id: node-2019
    resource: https://nodejs.org/en/blog/release/v20.19.0
    title: "Node.js blog: Node.js 20.19.0 (LTS) — require(esm) backported"
    author: org:nodejs
  - id: joyee-require-esm
    resource: https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
    title: "Joyee Cheung: require(esm) in Node.js — from experiment to stability (2025-12-30)"
  - id: node-2360
    resource: https://nodejs.org/en/blog/release/v23.6.0
    title: "Node.js blog: Node.js 23.6.0 — type stripping enabled by default"
    author: org:nodejs
  - id: node-2218
    resource: https://nodejs.org/en/blog/release/v22.18.0
    title: "Node.js blog: Node.js 22.18.0 (LTS) — type stripping on by default"
    author: org:nodejs
  - id: node-ts-docs
    resource: https://nodejs.org/api/typescript.html
    title: "Node.js docs: Modules — TypeScript (type stripping stability)"
    author: org:nodejs
  - id: node-ts-roadmap
    resource: https://github.com/nodejs/typescript/issues/24
    title: "nodejs/typescript #24: Roadmap to stable strip-types"
  - id: node-22-infoq
    resource: https://www.infoq.com/news/2024/05/node-22-released/
    title: "InfoQ: Node 22 released with increased support for ESM modules and Web APIs (2024-05)"
  - id: infoq-sojs
    resource: https://www.infoq.com/news/2026/03/state-of-js-survey-2025
    title: "InfoQ: State of JavaScript 2025 survey (runtimes: Node 90%, Bun 21%, Deno 11%)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology (Node.js 48.7% of respondents)"
  - id: cisa-npm
    resource: https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
    title: "CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem (2025-09-23)"
    author: org:cisa
  - id: node-temporal
    resource: https://nodesource.com/blog/javascript-temporal-history-nodejs-26
    title: "NodeSource: The History of Date in JavaScript (Temporal in Node 26)"
---

# Summary
Node.js is the clearest "incumbent wins by absorption" story of 2018–2026. It was attacked from two sides — Deno (2020, by Node's own creator, on security and TypeScript) and Bun (2023, on speed and all-in-one tooling) — and answered each by importing the challenger's best idea rather than by redesigning itself: unflagged ES modules (2019), web-standard `fetch` and Web Streams, a permission model (stable in 22.13/23.5), built-in TypeScript type stripping (on by default since 23.6/22.18, stable in 25.2/24.12) and synchronous `require()` of ES modules (unflagged in 22.12, backported to 20.19).[^node-2212][^node-2019][^node-2360][^node-2218][^node-ts-docs] By 2025 it still had about 90% usage among State of JS runtime respondents versus 21% for Bun and 11% for Deno.[^infoq-sojs] Its weak spots are not the runtime but the npm supply chain and a volunteer-heavy maintainer base, which in 2026 drove a switch to one major release per year.[^cisa-npm][^node-schedule] Verdict: **stable, dominant, and better than it was** — the competition worked, mostly to Node's benefit.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-11 | Node 13.2 unflags ECMAScript modules ([event](/events/2019-11-node-esm-unflagged.md)) | + |
| E1 | 2020-05-13 | Deno 1.0 ships as an explicit "Node done right" critique ([event](/events/2020-05-deno-1-0.md)) | − |
| E2 | 2022-04 | Node 18 ships global `fetch` (experimental) and a built-in test runner | + |
| E3 | 2023-09-08 | Bun 1.0 claims drop-in Node compatibility and large speedups ([event](/events/2023-09-bun-1-0.md)) | − |
| E3 | 2024-04/05 | Node 22: `require(esm)` behind a flag, more Web APIs[^node-22-infoq] | + |
| E3 | 2024-07/08 | Node 22.6 adds `--experimental-strip-types` ([event](/events/2024-08-node-type-stripping.md))[^node-ts-roadmap] | + |
| E4 | 2024-12 | Node 22.12 unflags `require(esm)` ([event](/events/2024-12-node-require-esm-unflagged.md))[^node-2212] | + |
| E4 | 2025-01 | Node 23.6 enables type stripping by default; permission model stable in 22.13/23.5[^node-2360] | + |
| E4 | 2025-03 | `require(esm)` backported to Node 20.19 LTS[^node-2019] | + |
| E4 | 2025-09-23 | CISA alert on the Shai-Hulud npm worm[^cisa-npm] | − |
| E4 | 2026-05-05 | Node 26.0.0 ships, including Temporal; last release under the twice-yearly model[^node-releases][^node-temporal] | + |
| E4 | 2026-10 | Annual release model starts with Node 27 (alpha Oct 2026, release Apr 2027, every release LTS)[^node-schedule] | + |

# Ideas it bet on
| Idea | Outcome for Node.js |
|---|---|
| [ES modules](/ideas/tooling-and-ecosystem/esm-migration.md) | Slow, painful, finally resolved by `require(esm)` (2024–25) |
| [Type stripping](/ideas/types/types-as-comments-and-type-stripping.md) | Succeeded — erasable-TS-only design avoids owning a type checker |
| [Runtime competition / web-standard APIs](/ideas/platforms-and-portability/js-runtime-competition.md) | Succeeded — fetch, Web Streams, WinterTC alignment |
| Permission model | Shipped (stable 2025), little evidence of broad use (unverified) |
| [Startup snapshots](/ideas/runtime-performance/startup-snapshotting.md) | Niche (user-land snapshots, single executable apps) |
| [Supply-chain hardening](/ideas/tooling-and-ecosystem/package-registry-supply-chain.md) | Ongoing — mostly an npm registry problem |

# What succeeded
- **Absorption over reinvention.** Node never broke the ecosystem to chase Deno's design; each feature arrived opt-in, then default. Type stripping deliberately supports only erasable syntax (via the SWC-based Amaro), so Node did not have to ship or track a type checker.[^node-ts-docs][^node-ts-roadmap]
- **Ending the CJS/ESM split.** `require(esm)` let CommonJS packages consume ESM-only dependencies synchronously, removing the main reason libraries kept dual builds; the team backported it to 20.x "due to its importance and impact on the ecosystem."[^node-2019][^joyee-require-esm]
- **Neutral governance.** With Bun owned by Anthropic and Deno's company shrinking, OpenJS stewardship became a selling point (see [js-runtime-competition](/ideas/platforms-and-portability/js-runtime-competition.md)).
- **Usage held.** 90% of State of JS 2025 runtime respondents and 48.7% of Stack Overflow 2025 respondents use Node.[^infoq-sojs][^so-2025]

# What failed or stalled
- **The ESM migration took about six years** (2019 unflag → 2024/25 `require(esm)`), a period of dual packages, `ERR_REQUIRE_ESM` errors and tooling hacks. The fix came from interop, not from forcing ESM.[^joyee-require-esm]
- **Odd-numbered releases saw little adoption**, and volunteer maintainer load forced the 2026 move to annual majors.[^node-schedule]
- **Supply-chain security**: Shai-Hulud (Sept 2025) and successors hit Node users even though the runtime was not at fault.[^cisa-npm]
- **Raw performance** lagged Bun in micro-benchmarks throughout E3; Node chose compatibility over speed claims.

# By era
## E1
Node 12 LTS and 13.2's unflagged ESM; Deno 1.0 framed Node's design (no permissions, `node_modules`, CommonJS) as mistakes. Momentum flat.
## E2
Node 16/18: `fetch`, `node:test`, AbortController, Web Streams — the start of web-standard API convergence. Deno gained mindshare, Node usage held.
## E3
Bun 1.0 (Sept 2023) pressured Node on speed; Node 20–22 responded with the permission model, single-executable apps, `require(esm)` and type stripping behind flags.[^node-22-infoq][^node-ts-roadmap]
## E4
Flags came off: `require(esm)` (22.12, 20.19), type stripping (23.6/22.18 default; stable 25.2/24.12), permission model stable; Node 26 (May 2026) with Temporal; annual release schedule from Node 27.[^node-2212][^node-2019][^node-ts-docs][^node-releases][^node-schedule]

# Lessons
- An incumbent with a huge ecosystem can neutralise challengers by copying their most loved features opt-in, keeping backward compatibility.
- Migration problems (CJS→ESM) are solved by interop bridges, not by mandates.
- A runtime that does not own a type checker can still offer "native TypeScript" by stripping erasable syntax.

# Related
- [V8](/runtimes/v8.md), [Deno](/runtimes/deno.md), [Bun](/runtimes/bun.md), [workerd](/runtimes/workerd-isolates.md)
- [JavaScript](/languages/javascript.md), [TypeScript](/languages/typescript.md)
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md), [ESM migration](/ideas/tooling-and-ecosystem/esm-migration.md), [Types as comments and type stripping](/ideas/types/types-as-comments-and-type-stripping.md)
- [WinterTC forms as Ecma TC55](/events/2025-01-wintertc-ecma-tc55.md)

[^node-gh]: Node.js GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/nodejs/node
[^node-releases]: Node.js GitHub releases — https://github.com/nodejs/node/releases
[^node-schedule]: Node.js blog: Evolving the Node.js release schedule — https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule
[^node-2212]: Node.js 22.12.0 (LTS) release notes — https://nodejs.org/en/blog/release/v22.12.0
[^node-2019]: Node.js 20.19.0 (LTS) release notes — https://nodejs.org/en/blog/release/v20.19.0
[^joyee-require-esm]: Joyee Cheung: require(esm) in Node.js, from experiment to stability — https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
[^node-2360]: Node.js 23.6.0 release notes — https://nodejs.org/en/blog/release/v23.6.0
[^node-2218]: Node.js 22.18.0 (LTS) release notes — https://nodejs.org/en/blog/release/v22.18.0
[^node-ts-docs]: Node.js docs: Modules — TypeScript — https://nodejs.org/api/typescript.html
[^node-ts-roadmap]: nodejs/typescript #24: Roadmap to stable strip-types — https://github.com/nodejs/typescript/issues/24
[^node-22-infoq]: InfoQ: Node 22 released — https://www.infoq.com/news/2024/05/node-22-released/
[^infoq-sojs]: InfoQ: State of JavaScript 2025 survey — https://www.infoq.com/news/2026/03/state-of-js-survey-2025
[^so-2025]: Stack Overflow Developer Survey 2025: Technology — https://survey.stackoverflow.co/2025/technology
[^cisa-npm]: CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem — https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
[^node-temporal]: NodeSource: The History of Date in JavaScript — https://nodesource.com/blog/javascript-temporal-history-nodejs-26
