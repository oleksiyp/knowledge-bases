---
type: Event
title: Microsoft proposes "types as comments" for JavaScript at TC39
description: Microsoft, Bloomberg and Igalia proposed erasable type-annotation syntax for ECMAScript; it reached Stage 1 in March 2022 and then stalled, while runtimes shipped type stripping outside the standard.
event_kind: announcement
date: 2022-03-09
era: E2
impact: mixed
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/nodejs, runtimes/deno, runtimes/bun]
ideas: [ideas/types/types-as-comments-and-type-stripping, ideas/tooling-and-ecosystem/tc39-proposal-outcomes]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ts-type-syntax
    resource: https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/
    title: "TypeScript blog: A Proposal For Type Syntax in JavaScript (2022-03-09)"
    author: org:microsoft
  - id: tc39-ta
    resource: https://github.com/tc39/proposal-type-annotations/
    title: "tc39/proposal-type-annotations (Stage 1)"
    author: org:tc39
  - id: ta-dead
    resource: https://github.com/tc39/proposal-type-annotations/issues/178
    title: "tc39/proposal-type-annotations issue #178: This proposal is probably dead? (opened 2023-06-01)"
  - id: ts58
    resource: https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/
    title: "TypeScript blog: Announcing TypeScript 5.8 (--erasableSyntaxOnly)"
    author: org:microsoft
---

# What happened
On 2022-03-09 Daniel Rosenwasser announced a proposal for TypeScript-like type syntax in JavaScript that engines would ignore, treating types "as comments". It was co-championed by Rob Palmer (Bloomberg) and Romulo Cintra (Igalia).[^ts-type-syntax] The proposal covered annotations, interfaces, type aliases, `as` and `!`. It excluded constructs with runtime meaning: enums, namespaces and parameter properties. It ruled out any type checking in engines.[^ts-type-syntax] TC39 granted Stage 1 at its March 2022 plenary.[^tc39-ta]

# Why it matters
The proposal has not advanced since. Committee notes quoted in a 2023 issue show the objections. Members asked whether the goal was standardising TypeScript or a general type syntax. One called it possibly the largest amount of new syntax ever proposed for ECMAScript. The Flow team warned it could look anti-competitive.[^ta-dead] The underlying idea still won, just outside the standard. Node.js (2024), Deno and Bun execute TypeScript by stripping types. TypeScript 5.8 added `--erasableSyntaxOnly` to keep code within the strippable subset.[^ts58] This is a clear case of "runtime vendors standardise de facto while TC39 stalls".

# Related
- [Types as comments and type stripping](/ideas/types/types-as-comments-and-type-stripping.md)
- [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md)
- [Node.js ships type stripping](/events/2024-08-node-type-stripping.md), [Flow refocuses on Meta](/events/2021-05-flow-refocuses-on-meta.md)

[^ts-type-syntax]: TypeScript blog: A Proposal For Type Syntax in JavaScript — https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/
[^tc39-ta]: tc39/proposal-type-annotations — https://github.com/tc39/proposal-type-annotations/
[^ta-dead]: proposal-type-annotations issue #178 — https://github.com/tc39/proposal-type-annotations/issues/178
[^ts58]: TypeScript blog: Announcing TypeScript 5.8 — https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/
