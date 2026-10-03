---
type: Idea
title: TC39 proposal outcomes — what got into JavaScript and what didn't (2018–2026)
description: The yearly-train, multi-implementer TC39 process reliably shipped small library and syntax additions (ES2019–ES2026) and finally delivered Temporal (Stage 4, March 2026). Ambitious proposals stalled or died. Records & Tuples was withdrawn in 2025, the pipeline operator has been stuck at Stage 2 since 2021, type annotations at Stage 1 since 2022, and decorators at Stage 3 with no browser willing to ship first.
area: tooling-and-ecosystem
tags: [tc39, ecmascript, temporal, decorators, records-and-tuples, pipeline-operator, signals, structs, standards-process]
outcome: mixed
maturity_2026: mainstream
origin_year: 2015
mainstream_year: 2016
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore, runtimes/nodejs]
related_ideas: [ideas/types/types-as-comments-and-type-stripping, ideas/concurrency/signals-and-fine-grained-reactivity, ideas/runtime-performance/value-types, ideas/metaprogramming/compile-time-reflection, ideas/tooling-and-ecosystem/language-editions-and-evolution]
era_momentum: { E1: up, E2: flat, E3: flat, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tc39-process
    resource: https://tc39.es/process-document/
    title: "TC39: The TC39 Process (stages 0–4, incl. 2.7)"
    author: org:tc39
  - id: socket-temporal
    resource: https://socket.dev/blog/tc39-advances-temporal-to-stage-4
    title: "Socket: TC39 advances Temporal to Stage 4 alongside several ECMAScript proposals (2026-03-16)"
  - id: igalia-temporal
    resource: https://www.igalia.com/2026/03/13/Temporal-Reaches-Stage-4.html
    title: "Igalia: Temporal Reaches Stage 4 (2026-03-13)"
    author: org:igalia
  - id: rt-withdrawn
    resource: https://github.com/tc39/proposal-record-tuple/issues/394
    title: "tc39/proposal-record-tuple issue #394: Proposal is withdrawn (April 2025)"
    author: org:tc39
  - id: igalia-feb-2025
    resource: https://blogs.igalia.com/compilers/2025/03/27/summary-of-the-february-2025-tc39-plenary/
    title: "Igalia: Summary of the February 2025 TC39 plenary (decorators: no browser wants to ship first)"
    author: org:igalia
  - id: pipeline
    resource: https://github.com/tc39/proposal-pipeline-operator
    title: "tc39/proposal-pipeline-operator (Hack pipes, Stage 2 since 2021)"
    author: org:tc39
  - id: tc39-ta
    resource: https://github.com/tc39/proposal-type-annotations
    title: "tc39/proposal-type-annotations (Stage 1)"
    author: org:tc39
  - id: structs
    resource: https://github.com/tc39/proposal-structs
    title: "tc39/proposal-structs: Structs, Shared Structs, Mutex/Condition (Stage 2)"
    author: org:tc39
  - id: es2025
    resource: https://socket.dev/blog/ecmascript-2025-finalized
    title: "Socket: ECMAScript 2025 finalized with Iterator Helpers, Set methods, RegExp.escape and more"
  - id: erm-stage4
    resource: https://blogs.igalia.com/compilers/2025/07/03/summary-of-the-may-2025-tc39-plenary/
    title: "Igalia: Summary of the May 2025 TC39 plenary (Explicit Resource Management to Stage 4)"
    author: org:igalia
  - id: ts5-decorators
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/
    title: "TypeScript blog: Announcing TypeScript 5.0 (standard decorators, 2023-03)"
    author: org:microsoft
  - id: signals
    resource: https://github.com/tc39/proposal-signals
    title: "tc39/proposal-signals (Stage 1, April 2024)"
    author: org:tc39
  - id: infoq-sojs
    resource: https://www.infoq.com/news/2026/03/state-of-js-survey-2025
    title: "InfoQ: State of JavaScript 2025 survey (Temporal most anticipated proposal)"
---

# Summary
**Mixed: excellent at incremental change, poor at big change.** Since ES2016, TC39 has published a new edition every year. Each Stage 4 feature needs two shipping implementations, so what lands is real and interoperable.[^tc39-process] ES2025, for example, added iterator helpers, Set methods, JSON modules, import attributes and `RegExp.escape`.[^es2025] Explicit resource management (`using`) reached Stage 4 in May 2025.[^erm-stage4] The decade's flagship, **Temporal**, finally reached **Stage 4 in March 2026** after about nine years. Bloomberg funded it and Igalia implemented it; it shipped first in Firefox 139 (May 2025), then Chrome 144 (Jan 2026).[^igalia-temporal][^socket-temporal] Ambitious language changes fared much worse:
- **Records & Tuples**, deeply immutable primitives with value equality, was **withdrawn** on 2025-04-14.[^rt-withdrawn]
- **Pipeline operator** has been at Stage 2 since 2021, still disputed between Hack and F# styles.[^pipeline]
- **Type annotations** have been at Stage 1 since 2022.[^tc39-ta]
- **Decorators** reached Stage 3 in 2022 and shipped in TypeScript 5.0, but as of 2025 "none of the three major browsers want to be the first one to ship".[^igalia-feb-2025][^ts5-decorators]
- **Signals** (Stage 1, 2024) and **Structs/Shared Structs** (Stage 2) are still unproven.[^signals][^structs]

# The idea
Evolve a language that cannot break the web through a consensus committee of engine vendors, companies and invited experts. Proposals move through stages 0–4, with Stage 2.7 added in 2024 for "spec complete, awaiting tests". There is a yearly snapshot, and implementation in shipping engines is the final gate.[^tc39-process]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019–2020 | ES2019/ES2020 ship optional chaining, nullish coalescing, BigInt, `globalThis` | + |
| E2 | 2021-08 | Hack-style pipeline reaches Stage 2, then stalls [^pipeline] | − |
| E2 | 2022-03 | Decorators to Stage 3; type annotations to Stage 1 ([event](/events/2022-03-tc39-type-annotations-proposal.md)) [^tc39-ta] | + |
| E3 | 2023-03 | TypeScript 5.0 implements standard decorators [^ts5-decorators] | + |
| E3 | 2024-04 | Signals proposal reaches Stage 1 ([event](/events/2024-04-tc39-signals-proposal.md)) [^signals] | + |
| E4 | 2024-12 | Structs/Shared Structs at Stage 2 [^structs] | + |
| E4 | 2025-02 | Decorators: implementations in progress, but no browser will ship first [^igalia-feb-2025] | − |
| E4 | 2025-04-14 | Records & Tuples withdrawn ([event](/events/2025-04-records-and-tuples-withdrawn.md)) [^rt-withdrawn] | − |
| E4 | 2025-05-28 | Explicit Resource Management reaches Stage 4 [^erm-stage4] | + |
| E4 | 2025-06-25 | ES2025 approved [^es2025] | + |
| E4 | 2026-03 | Temporal reaches Stage 4 ([event](/events/2026-03-temporal-reaches-stage-4.md)) [^igalia-temporal][^socket-temporal] | + |

# Where it succeeded
- **Steady incremental additions** with real interoperability: every Stage 4 feature has shipping engines behind it.[^tc39-process][^es2025]
- **Temporal** shows the process *can* deliver a very large API when someone funds the implementation work (Bloomberg → Igalia) and two engines commit. It was the most anticipated proposal in State of JS 2025.[^igalia-temporal][^infoq-sojs]
- **Ecosystem-led features got standardised.** `using`/disposables, iterator helpers and import attributes came from userland or TypeScript practice.[^erm-stage4][^es2025]

# Where it failed or stalled
- **New primitives and value semantics.** Records & Tuples died because engines would not take on new primitive types with structural `===` equality. A slimmer "composites" follow-up is being explored.[^rt-withdrawn]
- **Syntax with contested aesthetics.** The pipeline operator is caught in a deadlock between Hack and F# styles.[^pipeline]
- **Features with first-mover cost.** Decorators are fully specified and used daily via TypeScript and Babel, yet unshipped natively because engines see performance and complexity risk and little benefit to going first.[^igalia-feb-2025]
- **Grammar-heavy proposals.** Type annotations are blocked by the scale of TypeScript's grammar and engine parse-cost concerns.[^tc39-ta]

# Why
1. **Engine vendors have a de facto veto and a cost focus.** Anything that slows the fast path (new primitives, decorators) or bloats the parser meets resistance. Library APIs are cheap by comparison.[^rt-withdrawn][^igalia-feb-2025]
2. **Transpilers remove urgency.** If TypeScript or Babel already provide decorators or pipelines, engines gain little from shipping natively, and users feel little pain.[^ts5-decorators]
3. **Funded champions matter.** Temporal and explicit resource management had sustained corporate champions (Bloomberg, Igalia, Microsoft). Volunteer-driven proposals stall.[^igalia-temporal]
4. **"Don't break the web" makes mistakes permanent**, so the committee prefers to wait. That produced a decade-long stall on several big ideas.

# Lessons
- Standard libraries evolve faster than core semantics. If you need a big semantic change, ship it in a superset first (TypeScript) and expect the standard to take years.
- Explicitly funding implementation work is the most reliable accelerator in a multi-vendor standards process.

# Related
- [JavaScript](/languages/javascript.md), [TypeScript](/languages/typescript.md), [V8](/runtimes/v8.md), [SpiderMonkey](/runtimes/spidermonkey.md), [JavaScriptCore](/runtimes/javascriptcore.md)
- [Types as comments](/ideas/types/types-as-comments-and-type-stripping.md), [Signals and fine-grained reactivity](/ideas/concurrency/signals-and-fine-grained-reactivity.md), [Value types](/ideas/runtime-performance/value-types.md), [Language editions and evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)

[^tc39-process]: TC39: The TC39 Process — https://tc39.es/process-document/
[^socket-temporal]: Socket: TC39 advances Temporal to Stage 4 — https://socket.dev/blog/tc39-advances-temporal-to-stage-4
[^igalia-temporal]: Igalia: Temporal Reaches Stage 4 — https://www.igalia.com/2026/03/13/Temporal-Reaches-Stage-4.html
[^rt-withdrawn]: tc39/proposal-record-tuple issue #394: Proposal is withdrawn — https://github.com/tc39/proposal-record-tuple/issues/394
[^igalia-feb-2025]: Igalia: Summary of the February 2025 TC39 plenary — https://blogs.igalia.com/compilers/2025/03/27/summary-of-the-february-2025-tc39-plenary/
[^pipeline]: tc39/proposal-pipeline-operator — https://github.com/tc39/proposal-pipeline-operator
[^tc39-ta]: tc39/proposal-type-annotations — https://github.com/tc39/proposal-type-annotations
[^structs]: tc39/proposal-structs — https://github.com/tc39/proposal-structs
[^es2025]: Socket: ECMAScript 2025 finalized — https://socket.dev/blog/ecmascript-2025-finalized
[^erm-stage4]: Igalia: Summary of the May 2025 TC39 plenary — https://blogs.igalia.com/compilers/2025/07/03/summary-of-the-may-2025-tc39-plenary/
[^ts5-decorators]: TypeScript blog: Announcing TypeScript 5.0 — https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/
[^signals]: tc39/proposal-signals — https://github.com/tc39/proposal-signals
[^infoq-sojs]: InfoQ: State of JavaScript 2025 survey — https://www.infoq.com/news/2026/03/state-of-js-survey-2025
