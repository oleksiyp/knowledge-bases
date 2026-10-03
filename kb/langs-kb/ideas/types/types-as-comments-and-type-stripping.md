---
type: Idea
title: Types as comments and type stripping
description: Let runtimes ignore type syntax so typed JavaScript runs without a compile step. Runtimes adopted it (Deno, Bun, then Node.js type stripping, stable in 2025), but the TC39 "type annotations" proposal has sat at Stage 1 since March 2022. The idea succeeded as runtime practice and stalled as a language standard.
area: types
tags: [typescript, tc39, node, type-stripping, erasable-syntax, flow, amaro]
outcome: mixed
maturity_2026: adopted
origin_year: 2022
mainstream_year: 2025
languages: [languages/typescript, languages/javascript, languages/python]
runtimes: [runtimes/nodejs, runtimes/deno, runtimes/bun]
related_ideas: [ideas/types/typescript-structural-typing-wins, ideas/types/gradual-typing-for-dynamic-languages, ideas/tooling-and-ecosystem/tc39-proposal-outcomes, ideas/platforms-and-portability/js-runtime-competition]
era_momentum: { E1: n/a, E2: up, E3: flat, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tc39-ta
    resource: https://github.com/tc39/proposal-type-annotations
    title: "TC39: proposal-type-annotations (Stage 1; champions Rosenwasser, Cintra, Palmer)"
    author: org:tc39
  - id: ts-blog-tac
    resource: https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/
    title: "TypeScript blog: A Proposal For Type Syntax in JavaScript (2022-03-09)"
    author: org:microsoft
  - id: node-ts-docs
    resource: https://nodejs.org/api/typescript.html
    title: "Node.js docs: Modules — TypeScript (type stripping, stability history)"
    author: org:nodejs
  - id: node-ts-roadmap
    resource: https://github.com/nodejs/typescript/issues/24
    title: "nodejs/typescript: Roadmap to stable strip-types (issue #24)"
    author: org:nodejs
  - id: ts58
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/
    title: "TypeScript blog: Announcing TypeScript 5.8 (--erasableSyntaxOnly)"
    author: org:microsoft
  - id: effective-ts-2025
    resource: https://effectivetypescript.com/2025/12/19/ts-2025/
    title: "Effective TypeScript: A Small Year for tsc, a Giant Year for TypeScript (2025-12-19)"
  - id: infoworld-strip
    resource: https://www.infoworld.com/article/4116375/typescript-levels-up-with-type-stripping.html
    title: "InfoWorld: TypeScript levels up with type stripping"
  - id: flow-clarity
    resource: https://flow.org/blog/2021/05/25/Clarity-on-Flows-Direction-and-Open-Source-Engagement/
    title: "Flow blog: Clarity on Flow's Direction and Open Source Engagement (2021-05-25)"
    author: org:meta
  - id: npm-downloads
    resource: https://api.npmjs.org/downloads/point/last-week/flow-bin
    title: "npm registry downloads API: flow-bin vs typescript, week 2026-09-25..2026-10-01"
  - id: pep-484
    resource: https://peps.python.org/pep-0484/
    title: "PEP 484 — Type Hints (annotations ignored by the interpreter)"
    author: org:python
---

# Summary
**Mixed: it won in runtimes and stalled in the standard.** The practical goal, running TypeScript-annotated code with no build step, was achieved during the 2018–2026 period. Deno did it from 1.0 (2020), Bun from 1.0 (2023), and Node.js shipped `--experimental-strip-types` in 22.6 (August 2024), enabled it by default in 23.6 / 22.18, and marked it Stable in 25.2 / 24.12.[^node-ts-docs][^node-ts-roadmap] TypeScript itself adapted with `--erasableSyntaxOnly` in 5.8, which forbids enums, namespaces and parameter properties that cannot simply be erased.[^ts58][^effective-ts-2025] The *language-level* version is the TC39 "type annotations" proposal, announced by Microsoft in March 2022 as "types as comments". It is still at Stage 1, its README admits it "has not been updated regularly", and the last plenary discussions it lists are from 2023.[^tc39-ta][^ts-blog-tac] Browsers still cannot run typed JS.

# The idea
Python's PEP 484 had shown since 2014 that a language can accept type annotations that the runtime simply ignores, leaving checking to external tools.[^pep-484] The JavaScript version reserves syntax space (`x: number`, `interface`, generics) that engines treat like comments, so that TypeScript, Flow or any other checker can share one grammar. Its pitch was to "unfork JavaScript". There are two routes to the same goal:
1. **Standard route** (TC39): every engine ignores type syntax, so typed JS runs natively in browsers.[^tc39-ta]
2. **Runtime route**: server runtimes strip types on load. Node uses Amaro (built on swc) and replaces types with whitespace so line and column positions are preserved, with no type checking.[^node-ts-docs]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-05 | Deno 1.0 runs `.ts` natively (with type-checking on by default at first) ([event](/events/2020-05-deno-1-0.md)) | + |
| E2 | 2021-05-25 | Flow retreats to Meta-internal priorities, leaving TS syntax as the de facto standard [^flow-clarity] | + |
| E2 | 2022-03 | Microsoft announces "types as comments"; TC39 advances it to Stage 1 ([event](/events/2022-03-tc39-type-annotations-proposal.md)) [^ts-blog-tac][^tc39-ta] | + |
| E3 | 2023-03, 2023-09 | Last listed plenary discussions; the proposal does not advance [^tc39-ta] | − |
| E3 | 2023-09 | Bun 1.0 runs TS/TSX natively ([event](/events/2023-09-bun-1-0.md)) | + |
| E3 | 2024-08 | Node.js 22.6 adds `--experimental-strip-types` ([event](/events/2024-08-node-type-stripping.md)) [^node-ts-docs] | + |
| E4 | 2025-01 → 2025-07 | Stripping on by default in Node 23.6, backported to 22.18 [^node-ts-docs][^node-ts-roadmap] | + |
| E4 | 2025-02 | TypeScript 5.8 adds `--erasableSyntaxOnly` [^ts58] | + |
| E4 | 2025-11 → 12 | Type stripping marked Stable (Node 25.2 / 24.12) [^node-ts-docs] | + |
| E4 | 2026 | TC39 proposal still Stage 1; community issues ask why it is blocked [^tc39-ta] | − |

# Where it succeeded
- **Every major server runtime now runs `.ts`** without a separate transpile step: Node (stable), Deno and Bun.[^node-ts-docs][^infoworld-strip]
- **It reshaped TypeScript itself.** `--erasableSyntaxOnly` pushes users away from TypeScript's non-erasable features (enums, namespaces, parameter properties). In effect TS is converging on "JavaScript plus erasable types", the subset a TC39 standard would accept.[^ts58][^effective-ts-2025]
- **The Flow "fork" mostly disappeared** (about 0.53M weekly `flow-bin` downloads vs 355M for `typescript`), which removes one of the coordination problems the proposal set out to solve.[^npm-downloads]

# Where it failed or stalled
- **No browser support.** After 4.5 years at Stage 1 there is no Stage 2 grammar. Open questions include how to delimit type boundaries, generic call syntax, class modifiers, overloads and ambient declarations.[^tc39-ta]
- **No checking at runtime.** Stripping runs code that may not type-check, so `tsc` is still needed in CI. Critics see this as institutionalising "types that lie".[^effective-ts-2025]
- **Non-erasable TS features become second-class**, which created migration work for codebases that use enums or decorators-with-metadata.[^ts58]

# Why
1. **Runtimes could move unilaterally; the standard needs consensus.** Node, Deno and Bun each control their own loader. TC39 has to satisfy engine implementers, who worry about parse cost and about freezing a large and evolving grammar, and checker authors with different syntaxes.[^tc39-ta]
2. **TypeScript's grammar keeps evolving.** Freezing a "comment" grammar wide enough for TypeScript's type language is hard, and TS does not want to be limited by it.
3. **Competitive pressure among runtimes.** Native TS was one of Deno's and Bun's clearest advantages, and Node closed that gap by adopting stripping rather than a full compiler (see [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)).
4. **Whitespace replacement was a clever engineering compromise.** It needs no source maps, keeps stack traces accurate and is fast, which made it acceptable to Node's conservative maintainers.[^node-ts-docs]

# Lessons
- When a standard is blocked, de facto runtime convergence can deliver most of the user value, and it can later shape what the standard eventually accepts.
- "Erase-only" is a strong design constraint: it keeps types optional, keeps runtimes simple, and keeps the checker swappable.

# Related
- [TypeScript](/languages/typescript.md), [JavaScript](/languages/javascript.md), [Python](/languages/python.md)
- [Node.js](/runtimes/nodejs.md), [Deno](/runtimes/deno.md), [Bun](/runtimes/bun.md)
- [TypeScript's structural typing win](/ideas/types/typescript-structural-typing-wins.md), [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md), [Gradual typing for dynamic languages](/ideas/types/gradual-typing-for-dynamic-languages.md)

[^tc39-ta]: TC39: proposal-type-annotations — https://github.com/tc39/proposal-type-annotations
[^ts-blog-tac]: TypeScript blog: A Proposal For Type Syntax in JavaScript — https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/
[^node-ts-docs]: Node.js docs: Modules — TypeScript — https://nodejs.org/api/typescript.html
[^node-ts-roadmap]: nodejs/typescript: Roadmap to stable strip-types — https://github.com/nodejs/typescript/issues/24
[^ts58]: TypeScript blog: Announcing TypeScript 5.8 — https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/
[^effective-ts-2025]: Effective TypeScript: A Small Year for tsc, a Giant Year for TypeScript — https://effectivetypescript.com/2025/12/19/ts-2025/
[^infoworld-strip]: InfoWorld: TypeScript levels up with type stripping — https://www.infoworld.com/article/4116375/typescript-levels-up-with-type-stripping.html
[^flow-clarity]: Flow blog: Clarity on Flow's Direction and Open Source Engagement — https://flow.org/blog/2021/05/25/Clarity-on-Flows-Direction-and-Open-Source-Engagement/
[^npm-downloads]: npm registry downloads API (flow-bin, typescript) — https://api.npmjs.org/downloads/point/last-week/flow-bin
[^pep-484]: PEP 484 — Type Hints — https://peps.python.org/pep-0484/
