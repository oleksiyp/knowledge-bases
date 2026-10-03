---
type: Language
title: TypeScript
description: "Microsoft's structurally typed, erasable superset of JavaScript. It was the decisive language success of 2018–2026: it beat Flow and the compile-to-JS rivals, became GitHub's #1 language by contributors in August 2025, and shipped a Go-native compiler (TypeScript 7.0) in July 2026."
tags: [web, javascript, gradual-typing, structural-typing, microsoft, compiler-rewrite, go]
paradigms: [multi-paradigm, object-oriented, functional]
typing: gradual
memory_model: gc
first_released: 2012
steward: Microsoft (TypeScript team)
governance: single-vendor
trajectory: rising
ideas:
  - ideas/types/typescript-structural-typing-wins
  - ideas/types/types-as-comments-and-type-stripping
  - ideas/types/gradual-typing-for-dynamic-languages
  - ideas/tooling-and-ecosystem/native-rewrites-of-tooling
  - ideas/tooling-and-ecosystem/tc39-proposal-outcomes
  - ideas/tooling-and-ecosystem/esm-migration
  - ideas/tooling-and-ecosystem/language-server-protocol
  - ideas/ai-and-languages/llm-impact-on-language-adoption
runtimes: [runtimes/nodejs, runtimes/deno, runtimes/bun, runtimes/v8]
adoption_signals:
  octoverse_rank: { value: 1, as_of: 2025-08, note: "2.63M contributors, +66% YoY" }
  so_survey_used_pct: { value: 43.6, as_of: 2025, note: "all respondents; 48.8% of professionals" }
  tiobe_rank: { value: 39, as_of: 2026-09, note: "TIOBE's search-based method undercounts TS relative to JS" }
  npm_weekly_downloads: { value: 354808929, as_of: 2026-10-01, note: "typescript package, week 2026-09-25..10-01" }
  state_of_js_ts_only_pct: { value: 40, as_of: 2025 }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: octoverse2025
    resource: https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
    title: "GitHub Blog: Octoverse 2025 — AI leads TypeScript to #1"
    author: org:github
  - id: so2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow: 2025 Developer Survey — Technology"
    author: org:stack-overflow
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index for September 2026 (TypeScript #39)"
    author: org:tiobe
  - id: npm-ts
    resource: https://api.npmjs.org/downloads/point/last-week/typescript
    title: "npm API: typescript weekly downloads (week ending 2026-10-01)"
  - id: stateofjs2025
    resource: https://www.devclass.com/development/2026/02/10/javascript-survey-reveals-gripes-against-date-handling-webpack-and-nextjs-and-that-typescript-has-won/4090262
    title: "DevClass: State of JS 2025 — 'TypeScript has won'"
  - id: stateofjs-usage
    resource: https://2025.stateofjs.com/en-US/usage/
    title: "State of JavaScript 2025: Usage (40% TypeScript-only)"
  - id: ts-releases
    resource: https://github.com/microsoft/TypeScript/releases
    title: "microsoft/TypeScript GitHub releases (dates via GitHub API, 2026-10-03)"
    author: org:microsoft
  - id: ts50
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/
    title: "TypeScript blog: Announcing TypeScript 5.0 (standard decorators)"
    author: org:microsoft
  - id: ts58-erasable
    resource: https://www.sitepoint.com/typescript-58-erasable-syntax-running-ts-directly-in-nodejs/
    title: "SitePoint: TypeScript 5.8 erasable syntax — running TS directly in Node.js"
  - id: ts-native
    resource: https://devblogs.microsoft.com/typescript/typescript-native-port/
    title: "TypeScript blog: A 10x Faster TypeScript (2025-03-11)"
    author: org:microsoft
  - id: ts6
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/
    title: "TypeScript blog: Announcing TypeScript 6.0 (2026-03-23)"
    author: org:microsoft
  - id: ts7
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
    title: "TypeScript blog: Announcing TypeScript 7.0 (2026-07-08)"
    author: org:microsoft
  - id: flow-direction
    resource: https://flow.org/blog/2021/05/25/Clarity-on-Flows-Direction-and-Open-Source-Engagement/
    title: "Flow blog: Clarity on Flow's Direction and Open Source Engagement (2021-05-25)"
    author: org:meta
---

# Summary
TypeScript is the clearest language success of the period. In 2018 it was one of several typed-JavaScript options alongside Flow, Closure Compiler, Reason/BuckleScript, Elm and PureScript. By 2025 it was the default. In August 2025 it became GitHub's #1 language by monthly contributors (2.63M, +66% year over year), ahead of Python and JavaScript.[^octoverse2025] 40% of State of JS 2025 respondents write only TypeScript (34% in 2024), and the `typescript` npm package was downloaded about 355M times a week in late September 2026.[^stateofjs-usage][^npm-ts] It won because it is structurally typed, unsound where needed, and *erasable*: it adds no runtime and no new semantics, so any JS library and any JS developer can adopt it gradually. Flow chose soundness and Meta's internal needs instead, and lost the community in 2021.[^flow-direction] The 2025–26 milestone was engineering, not language design: a near line-by-line port of the compiler to Go. TypeScript 6.0 (2026-03-23) was the last JS-based release; TypeScript 7.0 (2026-07-08) builds roughly 8–12x faster but shipped without a stable compiler API.[^ts-native][^ts6][^ts7] Weak spots: TIOBE still ranks it only #39, an artefact of its search-based method, and its type system's complexity and unsoundness draw steady criticism.[^tiobe]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-08-20 | TypeScript 4.0 (variadic tuple types)[^ts-releases] | + |
| E2 | 2020-11-19 | TS 4.1: template literal types make the type system a de facto programming language[^ts-releases] | + |
| E2 | 2021-05-25 | Flow refocuses on Meta-internal needs ([event](/events/2021-05-flow-refocuses-on-meta.md))[^flow-direction] | + (for TS) |
| E2 | 2022-03 | TS team co-champions the TC39 type-annotations proposal ([event](/events/2022-03-tc39-type-annotations-proposal.md)) | mixed |
| E3 | 2023-03-16 | TS 5.0: standard TC39 decorators replace `experimentalDecorators`[^ts50][^ts-releases] | + |
| E3 | 2024-08 | Node 22.6 runs `.ts` by stripping types ([event](/events/2024-08-node-type-stripping.md)) | + |
| E4 | 2025-02-28 | TS 5.8 adds `--erasableSyntaxOnly` to align with runtime type stripping[^ts58-erasable][^ts-releases] | + |
| E4 | 2025-03-11 | Go-native port (Project Corsa) announced[^ts-native] | + |
| E4 | 2025-08 | #1 language on GitHub by contributors[^octoverse2025] | + |
| E4 | 2026-03-23 | TS 6.0: last JS-based compiler, `strict` on by default[^ts6] | + |
| E4 | 2026-07-08 | TS 7.0, the Go compiler, goes GA ([event](/events/2026-07-typescript-7-native-go.md))[^ts7] | + |

# Ideas it bet on
| Idea | Outcome for TypeScript |
|---|---|
| [Structural, unsound-by-design typing](/ideas/types/typescript-structural-typing-wins.md) | Succeeded: the deciding factor against Flow, Closure and others |
| [Type erasure, "types as comments"](/ideas/types/types-as-comments-and-type-stripping.md) | Succeeded via runtimes (Node, Deno, Bun); the TC39 version stalled |
| [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md) | Succeeded: became the model for Python, Ruby and PHP efforts |
| [Native rewrite of the toolchain](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md) | Succeeded (Go port, 8–12x); API gap in 7.0 |
| [Editor-first tooling / LSP](/ideas/tooling-and-ecosystem/language-server-protocol.md) | Succeeded: tsserver was a model for LSP |
| Non-erasable features (enums, namespaces, parameter properties) | Failed: now discouraged by `--erasableSyntaxOnly` |

# What succeeded
- **Adoption at scale.** GitHub #1, ~355M weekly npm downloads, and framework scaffolds that default to TS.[^octoverse2025][^npm-ts]
- **The AI effect.** GitHub attributes part of the 2025 surge to AI-assisted coding, which benefits from types as machine-checkable feedback (see [LLM impact](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)).[^octoverse2025]
- **The Go port.** VS Code type-checking fell from 125.7s to 10.6s. Microsoft chose to port rather than redesign, and used 6.0 as the deprecation bridge.[^ts7][^ts6]
- **Standards alignment.** It moved from its own decorators and module conventions to the TC39 ones (5.0 decorators, `verbatimModuleSyntax`, erasable-only).[^ts50][^ts58-erasable]

# What failed or stalled
- **Type annotations in JavaScript itself**, co-championed by the TS team, stalled at Stage 1 (see [idea](/ideas/types/types-as-comments-and-type-stripping.md)).
- **Early TS-only runtime features** (enums, namespaces) became liabilities once runtimes began stripping types instead of compiling them.[^ts58-erasable]
- **7.0 shipped without a stable programmatic API.** Tools that embed the compiler (Vue, Svelte, Astro checkers) had to stay on 6.0 until 7.1.[^ts7]
- **Survey visibility.** Still #39 in TIOBE and 43.6% usage in the 2025 Stack Overflow survey. It is popular where code is written, less so in job and search metrics.[^tiobe][^so2025]

# By era
## E1
TS 3.x–4.0 matured the type system. Most major frameworks (Angular from the start; Vue 3 rewritten in TS) and DefinitelyTyped made it the safe default.
## E2
Flow's community retreat (2021) and template literal types (4.1). The types-as-comments proposal was filed. TS became the norm for new React projects.
## E3
Standard decorators (5.0). Deno, Bun and then Node ran `.ts` directly, reducing TS to "JS plus erasable annotations".
## E4
`--erasableSyntaxOnly`, the Go port, GitHub #1 in August 2025, and 6.0 → 7.0 in 2026. TS is the default language for AI-generated web code.[^octoverse2025][^ts7]

# Lessons
- Meet developers where their code already is: a superset with zero runtime cost beats a better but separate language.
- Unsoundness can be a feature when the alternative is incompatibility with untyped libraries.
- A steward with deep pockets can afford a full compiler port without forking the language.

# Related
- [JavaScript](/languages/javascript.md), [Compile-to-JS languages](/languages/civet-and-compile-to-js.md), [ReScript/Reason](/languages/rescript-reason.md), [Elm](/languages/elm.md), [PureScript](/languages/purescript.md)
- [Why TypeScript won](/ideas/types/typescript-structural-typing-wins.md), [Types as comments](/ideas/types/types-as-comments-and-type-stripping.md)
- [Node.js](/runtimes/nodejs.md), [Deno](/runtimes/deno.md), [Bun](/runtimes/bun.md)

[^octoverse2025]: GitHub Blog: Octoverse 2025 — https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
[^so2025]: Stack Overflow: 2025 Developer Survey — https://survey.stackoverflow.co/2025/technology
[^tiobe]: TIOBE Index for September 2026 — https://www.tiobe.com/tiobe-index/
[^npm-ts]: npm API: typescript weekly downloads — https://api.npmjs.org/downloads/point/last-week/typescript
[^stateofjs2025]: DevClass: State of JS 2025 — https://www.devclass.com/development/2026/02/10/javascript-survey-reveals-gripes-against-date-handling-webpack-and-nextjs-and-that-typescript-has-won/4090262
[^stateofjs-usage]: State of JavaScript 2025: Usage — https://2025.stateofjs.com/en-US/usage/
[^ts-releases]: microsoft/TypeScript GitHub releases — https://github.com/microsoft/TypeScript/releases
[^ts50]: TypeScript blog: Announcing TypeScript 5.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/
[^ts58-erasable]: SitePoint: TypeScript 5.8 erasable syntax — https://www.sitepoint.com/typescript-58-erasable-syntax-running-ts-directly-in-nodejs/
[^ts-native]: TypeScript blog: A 10x Faster TypeScript — https://devblogs.microsoft.com/typescript/typescript-native-port/
[^ts6]: TypeScript blog: Announcing TypeScript 6.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/
[^ts7]: TypeScript blog: Announcing TypeScript 7.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
[^flow-direction]: Flow blog: Clarity on Flow's Direction and Open Source Engagement — https://flow.org/blog/2021/05/25/Clarity-on-Flows-Direction-and-Open-Source-Engagement/
