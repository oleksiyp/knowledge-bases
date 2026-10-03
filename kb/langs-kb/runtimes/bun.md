---
type: Runtime
title: Bun
description: All-in-one JavaScript/TypeScript runtime, package manager, bundler and test runner built on JavaScriptCore (Zig, then Rust); it won the "fast Node alternative" race on speed plus near-total npm compatibility, reached 21% runtime usage by 2025, and became Anthropic infrastructure in December 2025.
tags: [javascript, typescript, javascriptcore, zig, rust, all-in-one-toolchain, anthropic]
runtime_kind: js-runtime
languages: [languages/javascript, languages/typescript]
ideas:
  - ideas/platforms-and-portability/js-runtime-competition
  - ideas/tooling-and-ecosystem/integrated-toolchains
  - ideas/tooling-and-ecosystem/native-rewrites-of-tooling
  - ideas/types/types-as-comments-and-type-stripping
  - ideas/ai-and-languages/ai-assisted-code-migration
runtimes: [runtimes/javascriptcore]
first_released: 2022
steward: Anthropic (via acquisition of Oven Inc., Dec 2025)
governance: single-vendor
trajectory: growing
adoption_signals:
  state_of_js_runtime_usage_pct: { value: 21, as_of: 2025 }
  monthly_downloads: { value: 7200000, as_of: 2025-10 }
  github_stars: { value: 96106, as_of: 2026-10-03 }
era_momentum: { E1: n/a, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: bun-gh
    resource: https://github.com/oven-sh/bun
    title: "Bun GitHub repository (stars via GitHub API, 2026-10-03)"
  - id: bun-v10
    resource: https://bun.com/blog/bun-v1.0
    title: "Bun blog: Bun 1.0 (2023-09-08)"
    author: org:oven
  - id: bun-v11
    resource: https://bun.com/blog/bun-v1.1
    title: "Bun blog: Bun 1.1 — Windows support (2024-04-01)"
    author: org:oven
  - id: bun-v12
    resource: https://bun.com/blog/bun-v1.2
    title: "Bun blog: Bun 1.2 — Node test suite, Bun.s3, Bun.sql, text lockfile (2025-01-22)"
    author: org:oven
  - id: bun-joins-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun blog: Bun is joining Anthropic (2025-12-02)"
    author: org:oven
  - id: devclass-acq
    resource: https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
    title: "DevClass: Bun JavaScript runtime acquired by Anthropic, tying its future to AI coding"
  - id: reg-rust
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI (2026-05-14)"
  - id: devclass-rust
    resource: https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541
    title: "DevClass: Anthropic's Bun Rust rewrite merged at speed of AI"
  - id: bun-v14
    resource: https://bun.com/blog/bun-v1.4
    title: "Bun blog: Bun v1.4 — first Rust-based release (2026-08-20)"
    author: org:oven
  - id: bun-releases
    resource: https://github.com/oven-sh/bun/releases
    title: "Bun GitHub releases (1.3 2025-10-10; 1.3.14 2026-05; 1.4.2 2026-09-05)"
  - id: infoq-sojs
    resource: https://www.infoq.com/news/2026/03/state-of-js-survey-2025
    title: "InfoQ: State of JavaScript 2025 survey (runtimes: Node 90%, Bun 21%, Deno 11%)"
---

# Summary
Bun is the only post-2018 JavaScript runtime that took meaningful share from Node.js. Jarred Sumner's bet was the opposite of Deno's: total npm/Node compatibility from day one, plus raw speed (JavaScriptCore instead of V8, a systems-language core) and one binary that replaces node, npm, a bundler, a test runner and a TypeScript transpiler. Bun 1.0 shipped on 2023-09-08, Windows support followed in 1.1 (April 2024), and 1.2 (January 2025) began running Node's own test suite on every commit.[^bun-v10][^bun-v11][^bun-v12] By 2025 21% of State of JS runtime respondents used Bun, up 4 points year on year and nearly double Deno.[^infoq-sojs] Oven Inc. raised about $26M but had no revenue; Anthropic acquired it on 2025-12-02 because Claude Code ships as a Bun single-file executable.[^bun-joins-anthropic] In May 2026 Bun merged an AI-generated rewrite from Zig to Rust (>1M lines), released as 1.4 in August 2026.[^reg-rust][^bun-v14] Verdict: **succeeding** as technology and as a distribution substrate for AI coding tools; its independence did not survive.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-07 | Public beta; Oven raises a $7M seed (Kleiner Perkins)[^bun-joins-anthropic] | + |
| E3 | 2023 | $19M Series A (Khosla Ventures)[^bun-joins-anthropic] | + |
| E3 | 2023-09-08 | Bun 1.0 ([event](/events/2023-09-bun-1-0.md))[^bun-v10] | + |
| E3 | 2024-04-01 | Bun 1.1 — Windows; 98% of own test suite passes there[^bun-v11] | + |
| E4 | 2025-01-22 | Bun 1.2 — Node test suite in CI, `Bun.s3`, `Bun.sql`, text lockfile[^bun-v12] | + |
| E4 | 2025-10-10 | Bun 1.3 — full-stack dev server, HMR[^bun-releases] | + |
| E4 | 2025-12-02 | Anthropic acquires Bun ([event](/events/2025-12-anthropic-acquires-bun.md))[^bun-joins-anthropic] | mixed |
| E4 | 2026-05-14 | AI-generated Zig→Rust rewrite merged (>1M lines added, ~600k Zig removed)[^reg-rust] | mixed |
| E4 | 2026-08-20 | Bun 1.4, first Rust-based release (+1,517 Node-compat tests, up to 35% less memory)[^bun-v14] | + |

# Ideas it bet on
| Idea | Outcome for Bun |
|---|---|
| [Drop-in Node/npm compatibility](/ideas/platforms-and-portability/js-runtime-competition.md) | Succeeded — the decisive difference from Deno |
| [All-in-one toolchain](/ideas/tooling-and-ecosystem/integrated-toolchains.md) | Succeeded — `bun install` and `bun test` adopted even by Node users |
| JavaScriptCore instead of V8 | Succeeded for startup time; small engine-diversity win |
| [Native-language core (Zig, then Rust)](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md) | Succeeded; Zig choice reversed in 2026 |
| [TypeScript/JSX transpiled in-runtime](/ideas/types/types-as-comments-and-type-stripping.md) | Succeeded; later matched by Node type stripping |
| Hosted platform as business model | Failed — never shipped as revenue[^bun-joins-anthropic] |
| [AI-written mass migration](/ideas/ai-and-languages/ai-assisted-code-migration.md) | Unproven but shipped (Rust port, 99.8% tests passing)[^devclass-rust] |

# What succeeded
- **Compatibility-first.** Bun treated Node's API surface and npm as the spec, measured by Node's own test suite (Bun 1.2: >90% pass rates for `http`, `fs`, `path`, `crypto`).[^bun-v12]
- **Speed as marketing that was real enough.** Claims such as `bun install` 30x faster than npm on Windows drove trial; the package manager and test runner were adopted piecemeal.[^bun-v11]
- **Single-file executables** made Bun the packaging layer for Claude Code, FactoryAI and OpenCode, giving it a strategic buyer.[^bun-joins-anthropic]
- **Growth**: 7.2M monthly downloads at the time of acquisition, +25% month on month; 21% runtime usage in State of JS 2025.[^bun-joins-anthropic][^infoq-sojs]

# What failed or stalled
- **No business.** Zero revenue after ~$26M raised; the exit came from strategic dependence, not a product.[^bun-joins-anthropic]
- **Independence.** The roadmap is now explicitly aligned with Claude Code and the Agent SDK.[^devclass-acq]
- **Stability reputation.** Rapid releases and a long tail of compatibility gaps kept many teams on Node for production (Node still at 90% usage); this is a widely voiced community view rather than a measured one.[^infoq-sojs]
- **Zig as flagship.** Bun was Zig's best-known production user; it left after needing a fork carrying AI-assisted changes that Zig's no-AI policy would not accept.[^devclass-rust]
- **Reviewability.** The Rust port landed as a single unreviewable mega-merge.[^reg-rust]

# By era
## E1
Not yet public (repository created April 2021).[^bun-gh]
## E2
Public beta (July 2022) with headline benchmarks against Node and Deno; seed round.
## E3
Bun 1.0 (Sept 2023) and 1.1 with Windows (April 2024); Series A. Took the "fast runtime" story from Deno.[^bun-v10][^bun-v11]
## E4
Bun 1.2 and 1.3; acquired by Anthropic (Dec 2025); Rust rewrite (May 2026) and 1.4 (Aug 2026).[^bun-v12][^bun-joins-anthropic][^reg-rust][^bun-v14]

# Lessons
- Compatibility with the incumbent ecosystem beats design purity; Bun and Deno ran the controlled experiment.
- Speed is a strong wedge only when switching costs are near zero.
- Load-bearing infrastructure for an AI product can be acquired with no revenue at all.
- AI-scale rewrites shift the bottleneck from writing code to trusting it.

# Related
- [Node.js](/runtimes/nodejs.md), [Deno](/runtimes/deno.md), [JavaScriptCore](/runtimes/javascriptcore.md)
- [Zig](/languages/zig.md), [Rust](/languages/rust.md), [TypeScript](/languages/typescript.md)
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md), [Integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md)

[^bun-gh]: Bun GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/oven-sh/bun
[^bun-v10]: Bun blog: Bun 1.0 — https://bun.com/blog/bun-v1.0
[^bun-v11]: Bun blog: Bun 1.1 — https://bun.com/blog/bun-v1.1
[^bun-v12]: Bun blog: Bun 1.2 — https://bun.com/blog/bun-v1.2
[^bun-joins-anthropic]: Bun blog: Bun is joining Anthropic — https://bun.com/blog/bun-joins-anthropic
[^devclass-acq]: DevClass: Bun acquired by Anthropic — https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
[^reg-rust]: The Register: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
[^devclass-rust]: DevClass: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541
[^bun-v14]: Bun blog: Bun v1.4 — https://bun.com/blog/bun-v1.4
[^bun-releases]: Bun GitHub releases — https://github.com/oven-sh/bun/releases
[^infoq-sojs]: InfoQ: State of JavaScript 2025 survey — https://www.infoq.com/news/2026/03/state-of-js-survey-2025
