---
type: Idea
title: JavaScript runtime competition (Node vs Deno vs Bun) and WinterTC
description: Deno (2020) and Bun (2023) challenged Node.js with security, native TypeScript, speed and all-in-one tooling. Node absorbed nearly every idea and still held 90% usage in 2025. Deno reversed its "no npm" thesis and laid off staff, and Bun found a home inside Anthropic. Standardisation moved to Ecma TC55 (WinterTC).
area: platforms-and-portability
tags: [nodejs, deno, bun, workerd, wintercg, wintertc, runtimes, npm-compatibility]
outcome: mixed
maturity_2026: mainstream
origin_year: 2018
mainstream_year: 2023
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/nodejs, runtimes/deno, runtimes/bun, runtimes/workerd-isolates, runtimes/v8, runtimes/javascriptcore]
related_ideas: [ideas/types/types-as-comments-and-type-stripping, ideas/tooling-and-ecosystem/esm-migration, ideas/platforms-and-portability/edge-isolates, ideas/tooling-and-ecosystem/integrated-toolchains, ideas/tooling-and-ecosystem/native-rewrites-of-tooling, ideas/tooling-and-ecosystem/package-registry-supply-chain]
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: dahl-regrets
    resource: https://www.youtube.com/watch?v=M3BM9TB-8yA
    title: "Ryan Dahl, JSConf EU 2018: 10 Things I Regret About Node.js"
  - id: deno-1
    resource: https://deno.com/blog/v1
    title: "Deno blog: Deno 1.0 (2020-05-13)"
    author: org:deno-land
  - id: deno-2
    resource: https://thenewstack.io/deno-2-arrives-with-long-term-support-node-js-compatibility/
    title: "The New Stack: Deno 2 arrives with long-term support, npm compatibility (2024-10)"
  - id: bun-1
    resource: https://bun.com/blog/bun-v1.0
    title: "Bun blog: Bun 1.0 (2023-09-08)"
    author: org:oven
  - id: bun-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun blog: Bun is joining Anthropic (2025-12-02)"
    author: org:oven
  - id: infoq-sojs
    resource: https://www.infoq.com/news/2026/03/state-of-js-survey-2025
    title: "InfoQ: State of JavaScript 2025 survey (Node 90%, Bun 21%, Deno 11%) (2026-03-20)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stack-overflow
  - id: node-ts-docs
    resource: https://nodejs.org/api/typescript.html
    title: "Node.js docs: Modules — TypeScript (type stripping)"
    author: org:nodejs
  - id: node-schedule
    resource: https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule
    title: "Node.js blog: Evolving the Node.js release schedule (annual majors from Node 27)"
    author: org:nodejs
  - id: node-permissions
    resource: https://nodejs.org/api/permissions.html
    title: "Node.js docs: Permissions (permission model)"
    author: org:nodejs
  - id: wintertc
    resource: https://www.w3.org/community/wintercg/2025/01/10/goodbye-wintercg-welcome-wintertc/
    title: "W3C WinterCG: Goodbye WinterCG, welcome WinterTC (2025-01-10)"
    author: org:w3c
  - id: bushell
    resource: https://dbushell.com/2026/03/20/denos-decline-and-layoffs/
    title: "David Bushell: Deno's decline and layoffs (2026-03-20)"
  - id: reg-bun-rust
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI (2026-05-14)"
---

# Summary
**Mixed: the challengers won the argument and the incumbent kept the market.** In 2018 Ryan Dahl's talk "10 Things I Regret About Node.js" set out the case for a new runtime.[^dahl-regrets] Deno 1.0 followed in May 2020 with security by default, TypeScript out of the box, URL imports and web-standard APIs.[^deno-1] Bun 1.0 (Sept 2023) added raw speed, a JavaScriptCore engine, and a bundled package manager and test runner.[^bun-1] Node.js then adopted most of these ideas: `fetch` and web streams, a built-in test runner and watch mode, a permission model, and native TypeScript via type stripping (stable 2025).[^node-permissions][^node-ts-docs] **State of JS 2025: Node 90%, Bun 21% (+4 points), Deno 11%.**[^infoq-sojs] The commercial outcomes split. Deno reversed its "no npm" founding thesis with Deno 2 (Oct 2024) and laid off staff in March 2026.[^deno-2][^bushell] Bun was acquired by Anthropic with zero revenue (Dec 2025) because Claude Code ships as a Bun executable.[^bun-anthropic] Standardisation of the shared server API surface moved from W3C WinterCG to Ecma TC55 (WinterTC) in Jan 2025.[^wintertc]

# The idea
Break Node's monopoly with a better-designed runtime: secure by default, TypeScript-native, web-API-first (`fetch`, `Request`, streams), a single binary with built-in tooling, and far faster startup and installs. Behind it was the bet that developers would switch runtimes for better developer experience the way they switched frameworks.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-06 | Dahl's "10 Things I Regret About Node.js"; Deno prototype [^dahl-regrets] | + |
| E1 | 2020-05-13 | Deno 1.0 ([event](/events/2020-05-deno-1-0.md)) [^deno-1] | + |
| E2 | 2022-05 | WinterCG formed for web-interoperable runtimes [^wintertc] | + |
| E2 | 2022-09 | Cloudflare open-sources workerd ([event](/events/2022-09-workerd-open-sourced.md)) | + |
| E3 | 2023-09-08 | Bun 1.0 ([event](/events/2023-09-bun-1-0.md)) [^bun-1] | + |
| E3 | 2024-08 | Node 22.6 type stripping ([event](/events/2024-08-node-type-stripping.md)) [^node-ts-docs] | + (Node) |
| E4 | 2024-10 | Deno 2: full npm/`package.json` compatibility, a reversal of its original design [^deno-2] | mixed |
| E4 | 2025-01-10 | WinterCG becomes Ecma TC55 / WinterTC ([event](/events/2025-01-wintertc-ecma-tc55.md)) [^wintertc] | + |
| E4 | 2025-12-02 | Anthropic acquires Bun ([event](/events/2025-12-anthropic-acquires-bun.md)) [^bun-anthropic] | mixed |
| E4 | 2026-03 | Deno layoffs ([event](/events/2026-03-deno-layoffs.md)) [^bushell] | − |
| E4 | 2026-03-20 | State of JS 2025: Node 90 / Bun 21 / Deno 11 [^infoq-sojs] | mixed |
| E4 | 2026-05-14 | Bun merges an AI-generated Zig→Rust rewrite [^reg-bun-rust] | mixed |
| E4 | 2026 | Node announces one major per year from Node 27 [^node-schedule] | + (Node) |

# Where it succeeded
- **Ideas diffused.** Native TypeScript, web-standard APIs, built-in test runners, permissions and fast installs are now standard across all runtimes. Node is a better runtime in 2026 because the challengers existed.[^node-ts-docs][^node-permissions]
- **Bun found real usage** (21% in State of JS 2025), especially as a package manager, test runner and single-file executable distribution, including for AI coding CLIs.[^infoq-sojs][^bun-anthropic]
- **Interoperability via standards.** WinterTC gives frameworks such as Hono, Remix and SvelteKit a common target across Node, Deno, Bun and Workers.[^wintertc]

# Where it failed or stalled
- **Deno's purist design.** No npm, URL imports and no `package.json` cut it off from the ecosystem. The npm support it added in 2022 and Deno 2 in 2024 were a public reversal.[^deno-2] Its company then shrank.[^bushell]
- **Independent runtime businesses.** Neither Deno nor Bun built a self-sustaining business on the runtime itself. Bun's continuity now depends on a single AI vendor.[^bun-anthropic]
- **No displacement of Node.** About 90% usage and roughly half of all Stack Overflow respondents keep Node the default.[^infoq-sojs][^so-2025]

# Why
1. **Ecosystem compatibility is the moat.** Millions of npm packages assume Node semantics. Bun's decision to be a Node drop-in from day one is why it outgrew Deno despite arriving three years later.[^bun-1][^deno-2]
2. **Incumbents can copy features faster than challengers can copy ecosystems.** Node's volunteer-plus-foundation model shipped type stripping and similar features within 1–2 years of each challenger's headline feature.[^node-ts-docs]
3. **Runtimes are hard to monetise.** Deno's Deploy/JSR strategy and Bun's planned hosting never produced material revenue. Value instead accrued to clouds (Cloudflare) and to an AI company that needed the runtime as infrastructure.[^bun-anthropic][^bushell]
4. **Foundation neutrality matters more once rivals have owners.** With Bun Anthropic-owned and Deno shrinking, OpenJS-governed Node gained relative appeal; its release-schedule simplification is a sustainability move.[^node-schedule]

# Lessons
- Challengers that set out to *replace* an ecosystem lose to challengers that *run* it faster.
- A competition can be good for users even if no challenger wins. 2018–2026 is a clear case of "the incumbent absorbs the innovations".

# Related
- [Node.js](/runtimes/nodejs.md), [Deno](/runtimes/deno.md), [Bun](/runtimes/bun.md), [workerd](/runtimes/workerd-isolates.md), [V8](/runtimes/v8.md), [JavaScriptCore](/runtimes/javascriptcore.md)
- [Types as comments and type stripping](/ideas/types/types-as-comments-and-type-stripping.md), [ESM migration](/ideas/tooling-and-ecosystem/esm-migration.md), [Edge isolates](/ideas/platforms-and-portability/edge-isolates.md)
- [Integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md), [Native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md), [Package registry supply chain](/ideas/tooling-and-ecosystem/package-registry-supply-chain.md)

[^dahl-regrets]: Ryan Dahl: 10 Things I Regret About Node.js — https://www.youtube.com/watch?v=M3BM9TB-8yA
[^deno-1]: Deno blog: Deno 1.0 — https://deno.com/blog/v1
[^deno-2]: The New Stack: Deno 2 arrives — https://thenewstack.io/deno-2-arrives-with-long-term-support-node-js-compatibility/
[^bun-1]: Bun blog: Bun 1.0 — https://bun.com/blog/bun-v1.0
[^bun-anthropic]: Bun blog: Bun is joining Anthropic — https://bun.com/blog/bun-joins-anthropic
[^infoq-sojs]: InfoQ: State of JavaScript 2025 survey — https://www.infoq.com/news/2026/03/state-of-js-survey-2025
[^so-2025]: Stack Overflow Developer Survey 2025: Technology — https://survey.stackoverflow.co/2025/technology
[^node-ts-docs]: Node.js docs: Modules — TypeScript — https://nodejs.org/api/typescript.html
[^node-schedule]: Node.js blog: Evolving the Node.js release schedule — https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule
[^node-permissions]: Node.js docs: Permissions — https://nodejs.org/api/permissions.html
[^wintertc]: W3C WinterCG: Goodbye WinterCG, welcome WinterTC — https://www.w3.org/community/wintercg/2025/01/10/goodbye-wintercg-welcome-wintertc/
[^bushell]: David Bushell: Deno's decline and layoffs — https://dbushell.com/2026/03/20/denos-decline-and-layoffs/
[^reg-bun-rust]: The Register: Anthropic's Bun Rust rewrite merged — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
