---
type: Language
title: JavaScript
description: "The web's only native language and still the most-used language in developer surveys; 2018–2026 brought steady yearly ECMAScript editions, a painful ESM transition and Temporal at last, while the energy moved to TypeScript as the authoring layer on top of it."
tags: [web, scripting, ecmascript, tc39, browsers, nodejs]
paradigms: [multi-paradigm, prototype-based, functional, event-driven]
typing: dynamic
memory_model: gc
first_released: 1995
steward: Ecma International TC39 (engines by Google, Apple, Mozilla; trademark held by Oracle)
governance: committee-standard
trajectory: stable
ideas:
  - ideas/tooling-and-ecosystem/tc39-proposal-outcomes
  - ideas/tooling-and-ecosystem/esm-migration
  - ideas/types/types-as-comments-and-type-stripping
  - ideas/types/typescript-structural-typing-wins
  - ideas/runtime-performance/js-engine-tiering
  - ideas/concurrency/signals-and-fine-grained-reactivity
  - ideas/platforms-and-portability/js-runtime-competition
  - ideas/platforms-and-portability/edge-isolates
  - ideas/concurrency/async-await-and-function-coloring
runtimes: [runtimes/v8, runtimes/javascriptcore, runtimes/spidermonkey, runtimes/nodejs, runtimes/deno, runtimes/bun, runtimes/hermes, runtimes/quickjs, runtimes/workerd-isolates]
adoption_signals:
  tiobe_rank: { value: 6, as_of: 2026-09 }
  so_survey_used_pct: { value: 66.0, as_of: 2025, note: "all respondents; 68.9% of professionals" }
  octoverse_rank: { value: 3, as_of: 2025, note: "by contributors, behind TypeScript and Python" }
era_momentum: { E1: flat, E2: flat, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: so2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow: 2025 Developer Survey — Technology (most popular languages)"
    author: org:stack-overflow
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index for September 2026 (JavaScript #6, 2.76%)"
    author: org:tiobe
  - id: octoverse2025
    resource: https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
    title: "GitHub Blog: Octoverse 2025 — AI leads TypeScript to #1"
    author: org:github
  - id: es2025
    resource: https://socket.dev/blog/ecmascript-2025-finalized
    title: "Socket: ECMAScript 2025 finalized with Iterator Helpers, Set methods, RegExp.escape"
  - id: temporal-stage4
    resource: https://www.igalia.com/2026/03/13/Temporal-Reaches-Stage-4.html
    title: "Igalia: Temporal Reaches Stage 4 (2026-03-13)"
    author: org:igalia
  - id: temporal-socket
    resource: https://socket.dev/blog/tc39-advances-temporal-to-stage-4
    title: "Socket: TC39 advances Temporal to Stage 4 (Chrome 144, Firefox 139, Node 26)"
  - id: rt-withdrawn
    resource: https://github.com/tc39/proposal-record-tuple/issues/394
    title: "tc39/proposal-record-tuple #394: Proposal is withdrawn (plenary 2025-04-14)"
    author: org:tc39
  - id: require-esm
    resource: https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
    title: "Joyee Cheung: require(esm) in Node.js — from experiment to stability"
  - id: node-22-12
    resource: https://nodejs.org/en/blog/release/v22.12.0
    title: "Node.js 22.12.0 (LTS) release notes — require(esm) unflagged"
    author: org:nodejs
  - id: stateofjs2025
    resource: https://www.devclass.com/development/2026/02/10/javascript-survey-reveals-gripes-against-date-handling-webpack-and-nextjs-and-that-typescript-has-won/4090262
    title: "DevClass: State of JS 2025 — gripes about dates, Webpack, Next.js; 'TypeScript has won'"
  - id: deno-tm
    resource: https://deno.com/blog/deno-v-oracle4
    title: "Deno blog: JavaScript trademark update (June 2025)"
    author: org:deno-land
  - id: npm-shai
    resource: https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
    title: "CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem (2025-09-23)"
    author: org:cisa
---

# Summary
JavaScript is the most stable "winner" in this knowledge base: it was the most-used language in the Stack Overflow survey for every year 2011–2025 (66.0% of all respondents, 68.9% of professionals in 2025) and sat at #6 in TIOBE in September 2026.[^so2025][^tiobe] As a *language*, though, JavaScript's 2018–2026 story is incrementalism. TC39 shipped one edition a year (ES2025 added iterator helpers, Set methods, import attributes and `RegExp.escape`), and the biggest addition since ES2015, Temporal, reached Stage 4 in March 2026 after nine years.[^es2025][^temporal-stage4] The bigger changes happened around JavaScript rather than in it. TypeScript became the default way to write it: GitHub's #1 language by contributors in August 2025, and 40% of State of JS 2025 respondents write *only* TypeScript.[^octoverse2025][^stateofjs2025] Runtimes multiplied (Node, Deno, Bun, Workers), and the CommonJS-to-ESM migration took about seven years to become tolerable. Verdict: dominant and stable. The interesting failures are proposals that never landed and an ecosystem whose package supply chain became the attack surface.[^rt-withdrawn][^npm-shai]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-11 | Node 13.2 ships ES modules unflagged ([event](/events/2019-11-node-esm-unflagged.md)) | + |
| E1 | 2020-05 | Deno 1.0: "Node done right", ESM-only, TypeScript built in ([event](/events/2020-05-deno-1-0.md)) | + |
| E2 | 2022-03 | Type annotations ("types as comments") proposal reaches Stage 1, then stalls ([event](/events/2022-03-tc39-type-annotations-proposal.md)) | mixed |
| E3 | 2023-09 | Bun 1.0 ships ([event](/events/2023-09-bun-1-0.md)) | + |
| E3 | 2024-04 | TC39 Signals proposal reaches Stage 1 ([event](/events/2024-04-tc39-signals-proposal.md)) | mixed |
| E3 | 2024-08 | Node 22.6 adds `--experimental-strip-types` ([event](/events/2024-08-node-type-stripping.md)) | + |
| E4 | 2024-12 | `require(esm)` unflagged in Node 22.12 (later backported to 20.19) ([event](/events/2024-12-node-require-esm-unflagged.md))[^node-22-12] | + |
| E4 | 2025-01 | WinterTC (Ecma TC55) formed for server-runtime API interop ([event](/events/2025-01-wintertc-ecma-tc55.md)) | + |
| E4 | 2025-04-14 | Records & Tuples withdrawn at Stage 2 ([event](/events/2025-04-records-and-tuples-withdrawn.md))[^rt-withdrawn] | − |
| E4 | 2025-06-25 | ES2025 approved by the Ecma General Assembly[^es2025] | + |
| E4 | 2025-09 | Shai-Hulud worm in npm; CISA alert[^npm-shai] | − |
| E4 | 2026-03 | Temporal reaches Stage 4, targeting ES2026 ([event](/events/2026-03-temporal-reaches-stage-4.md))[^temporal-stage4] | + |

# Ideas it bet on
| Idea | Outcome for JavaScript |
|---|---|
| [TC39 staged proposals](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md) | Mixed: small features land reliably; big ones (decorators, Temporal) take 5–9 years; new primitives (Records & Tuples) die |
| [ES modules](/ideas/tooling-and-ecosystem/esm-migration.md) | Succeeding, but slowly: about seven years from unflagged ESM to `require(esm)` interop |
| [Types as comments](/ideas/types/types-as-comments-and-type-stripping.md) | Stalled in TC39; delivered *outside* the language by runtime type stripping |
| [Engine tiering](/ideas/runtime-performance/js-engine-tiering.md) | Succeeded: Sparkplug and Maglev in V8, and similar tiers in JSC and SpiderMonkey |
| [Signals](/ideas/concurrency/signals-and-fine-grained-reactivity.md) | Won in frameworks; the language-level proposal is unproven |
| [async/await](/ideas/concurrency/async-await-and-function-coloring.md) | Succeeded (ES2017): the template other languages copied |

# What succeeded
- **Annual, small editions.** The ES2016+ cadence kept browsers converged: optional chaining and nullish coalescing (ES2020), top-level await (ES2022), iterator helpers and Set methods (ES2025).[^es2025]
- **Temporal.** It shipped in Firefox 139 (May 2025), Chrome 144 (Jan 2026) and Node 26 before reaching Stage 4. This shows the "two implementations first" rule working, even if slowly.[^temporal-socket]
- **Ubiquity.** JavaScript remained the top-used language in every Stack Overflow survey.[^so2025]
- **ESM interop finally fixed.** `require(esm)` became unflagged on all LTS lines, which removed the main reason libraries kept dual CJS/ESM builds.[^require-esm]

# What failed or stalled
- **New primitives.** Records & Tuples was withdrawn in April 2025 because engines would not accept new value types with deep equality.[^rt-withdrawn]
- **Types in the language.** The type-annotations proposal has not advanced past Stage 1 since 2022 (see [idea](/ideas/types/types-as-comments-and-type-stripping.md)).
- **Date handling** stayed the top developer complaint in State of JS 2025, despite Temporal.[^stateofjs2025]
- **Supply chain.** npm worms in 2025–26 made the package ecosystem, not the language, the main risk.[^npm-shai]
- **Name ownership.** The "JavaScript" trademark is still Oracle's; Deno's cancellation petition is unresolved.[^deno-tm]

# By era
## E1
ES2019–ES2020 landed optional chaining, `??` and `BigInt`. Node unflagged ESM, starting the long [ESM migration](/ideas/tooling-and-ecosystem/esm-migration.md). Deno 1.0 launched in May 2020.
## E2
ES2021–2022 added top-level await and class fields. Flow's retreat to Meta-internal priorities in May 2021 left TypeScript as the only mainstream typed dialect ([event](/events/2021-05-flow-refocuses-on-meta.md)). The types-as-comments proposal appeared and stalled.
## E3
Decorators reached Stage 3 and shipped in TypeScript 5.0. Bun 1.0 started the [runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md). The Signals proposal opened. Node gained type stripping.
## E4
`require(esm)` unflagged. Records & Tuples withdrawn. ES2025 approved. Temporal reached Stage 4. The runtime companies were consolidated: Bun went to Anthropic, Deno had layoffs.[^require-esm][^rt-withdrawn][^es2025][^temporal-stage4]

# Lessons
- Once the language is universal, change it carefully. Additive library features ship; changes that require new engine representations (value types, types) get rejected or stall.
- Tooling layers (TypeScript, bundlers, runtimes) absorb innovation that the standard cannot.
- Ecosystem migrations (ESM) cost more than language features and need interop bridges, not mandates.

# Related
- [TypeScript](/languages/typescript.md), [CoffeeScript](/languages/coffeescript.md), [Compile-to-JS languages](/languages/civet-and-compile-to-js.md)
- [V8](/runtimes/v8.md), [Node.js](/runtimes/nodejs.md), [Deno](/runtimes/deno.md), [Bun](/runtimes/bun.md)
- [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md), [ESM migration](/ideas/tooling-and-ecosystem/esm-migration.md)

[^so2025]: Stack Overflow: 2025 Developer Survey — Technology — https://survey.stackoverflow.co/2025/technology
[^tiobe]: TIOBE Index for September 2026 — https://www.tiobe.com/tiobe-index/
[^octoverse2025]: GitHub Blog: Octoverse 2025 — https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
[^es2025]: Socket: ECMAScript 2025 finalized — https://socket.dev/blog/ecmascript-2025-finalized
[^temporal-stage4]: Igalia: Temporal Reaches Stage 4 — https://www.igalia.com/2026/03/13/Temporal-Reaches-Stage-4.html
[^temporal-socket]: Socket: TC39 advances Temporal to Stage 4 — https://socket.dev/blog/tc39-advances-temporal-to-stage-4
[^rt-withdrawn]: tc39/proposal-record-tuple #394: Proposal is withdrawn — https://github.com/tc39/proposal-record-tuple/issues/394
[^require-esm]: Joyee Cheung: require(esm) in Node.js — https://joyeecheung.github.io/blog/2025/12/30/require-esm-in-node-js-from-experiment-to-stability/
[^node-22-12]: Node.js 22.12.0 release notes — https://nodejs.org/en/blog/release/v22.12.0
[^stateofjs2025]: DevClass: State of JS 2025 — https://www.devclass.com/development/2026/02/10/javascript-survey-reveals-gripes-against-date-handling-webpack-and-nextjs-and-that-typescript-has-won/4090262
[^deno-tm]: Deno blog: JavaScript trademark update — https://deno.com/blog/deno-v-oracle4
[^npm-shai]: CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem — https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
