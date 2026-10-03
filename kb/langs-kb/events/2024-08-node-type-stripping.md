---
type: Event
title: Node.js ships TypeScript type stripping
description: Node.js 22.6.0 added --experimental-strip-types, which runs .ts files by erasing type annotations; it was on by default from 23.6 and marked stable in 25.2/24.12, so the incumbent absorbed Deno's and Bun's headline feature.
event_kind: release
date: 2024-08-06
era: E3
impact: positive
languages: [languages/typescript, languages/javascript]
runtimes: [runtimes/nodejs, runtimes/deno, runtimes/bun]
ideas: [ideas/types/types-as-comments-and-type-stripping, ideas/platforms-and-portability/js-runtime-competition]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: node-2260
    resource: https://nodejs.org/en/blog/release/v22.6.0
    title: "Node.js blog: Node.js 22.6.0 (Current) (2024-08-06)"
    author: org:nodejs
  - id: infoworld-node-ts
    resource: https://www.infoworld.com/article/3484820/node-js-unveils-experimental-typescript-support.html
    title: "InfoWorld: Node.js unveils experimental TypeScript support (Aug 2024)"
  - id: node-ts-docs
    resource: https://nodejs.org/docs/latest-v24.x/api/typescript.html
    title: "Node.js v24 docs: Modules: TypeScript (type stripping stability)"
    author: org:nodejs
  - id: ippolito-summer
    resource: https://satanacchio.hashnode.dev/the-summer-i-shipped-type-stripping
    title: "Marco Ippolito: How a Summer in Abruzzo Helped Bring Type Stripping to Node.js"
---

# What happened
Node.js 22.6.0 was released on 2024-08-06 with `--experimental-strip-types`. The flag runs `.ts` files by erasing inline type annotations, with no type checking and no code generation.[^node-2260][^infoworld-node-ts] Enums, namespaces and other TypeScript syntax with runtime behaviour were unsupported. Imports needed explicit file extensions and `import type`. TypeScript inside `node_modules` was refused.[^node-2260] The feature was led by Marco Ippolito and built on SWC via the "amaro" package.[^ippolito-summer] It was enabled by default in 23.6 and backported unflagged to 22.18. The docs mark it stable as of 25.2 and 24.12 (late 2025).[^node-ts-docs]

# Why it matters
Running TypeScript directly was a founding differentiator for Deno (2018–20) and Bun (2023). By adopting it, Node neutralised that advantage without competing on raw speed. The incumbent copied the challenger. The design, erasure only with type-checking left to `tsc`, is the "types as comments" idea delivered by a runtime instead of the TC39 standard, which stalled at Stage 1. TypeScript responded with `--erasableSyntaxOnly` in 5.8, which nudges the language toward its strippable subset.

# Related
- [Types as comments and type stripping](/ideas/types/types-as-comments-and-type-stripping.md), [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)
- [Node.js](/runtimes/nodejs.md), [TypeScript](/languages/typescript.md)
- [TC39 type annotations proposal](/events/2022-03-tc39-type-annotations-proposal.md)

[^node-2260]: Node.js blog: Node.js 22.6.0 — https://nodejs.org/en/blog/release/v22.6.0
[^infoworld-node-ts]: InfoWorld: Node.js unveils experimental TypeScript support — https://www.infoworld.com/article/3484820/node-js-unveils-experimental-typescript-support.html
[^node-ts-docs]: Node.js v24 docs: Modules: TypeScript — https://nodejs.org/docs/latest-v24.x/api/typescript.html
[^ippolito-summer]: Marco Ippolito: How a Summer in Abruzzo Helped Bring Type Stripping to Node.js — https://satanacchio.hashnode.dev/the-summer-i-shipped-type-stripping
