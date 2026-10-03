---
type: Event
title: Flow refocuses on Facebook's internal needs
description: Facebook's Flow team announced that it would prioritise Facebook's own codebase over open-source users and evolve beyond "JavaScript with types", effectively conceding the public typed-JS market to TypeScript.
event_kind: announcement
date: 2021-05-25
era: E2
impact: negative
languages: [languages/javascript, languages/typescript]
runtimes: []
ideas: [ideas/types/typescript-structural-typing-wins, ideas/types/types-as-comments-and-type-stripping]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: flow-clarity
    resource: https://medium.com/flow-type/clarity-on-flows-direction-and-open-source-engagement-e721a4eb4d8b
    title: "Flow blog: Clarity on Flow's Direction and Open Source Engagement (Vladan Djeric, 2021-05-25)"
    author: org:meta
  - id: infoq-flow
    resource: https://www.infoq.com/news/2021/09/flow-facebook-not-js-with-types
    title: "InfoQ: Flow no longer aims to be 'JavaScript with types' (Sept 2021)"
  - id: yelp-flow
    resource: https://engineeringblog.yelp.com/2026/08/migrating-a-large-flow-monorepo-to-typescript.html
    title: "Yelp Engineering: Migrating a Large Flow Monorepo to TypeScript (Aug 2026)"
---

# What happened
On 2021-05-25 the Flow team published "Clarity on Flow's Direction and Open Source Engagement".[^flow-clarity] The post said Flow was built by a small team inside Facebook, and that its main customers and priority were Facebook engineers. Flow would put type safety and performance on very large codebases first. It would also restrict some valid JavaScript patterns and add syntax beyond plain type annotations.[^flow-clarity][^infoq-flow] Later in 2021 InfoQ summarised it: Flow no longer aimed to be "JavaScript with types".[^infoq-flow]

# Why it matters
Flow and TypeScript launched within two years of each other (2014 vs 2012). Flow had arguably stronger inference and soundness ambitions. This post marked the formal end of the competition. Outside users were told that breaking changes and Meta-specific direction came first. Library typings, editor tooling and community investment had already moved to TypeScript, and migrations followed for years. Yelp, for example, was still documenting a large Flow-to-TypeScript monorepo migration in August 2026.[^yelp-flow] Flow's view of types as a separate checker over JavaScript survives indirectly in the TC39 "types as comments" debate. There the Flow team argued against standardising TypeScript-shaped syntax.

# Related
- [Why TypeScript's structural typing won](/ideas/types/typescript-structural-typing-wins.md)
- [Types as comments and type stripping](/ideas/types/types-as-comments-and-type-stripping.md)
- [TypeScript](/languages/typescript.md), [JavaScript](/languages/javascript.md)

[^flow-clarity]: Flow blog: Clarity on Flow's Direction and Open Source Engagement — https://medium.com/flow-type/clarity-on-flows-direction-and-open-source-engagement-e721a4eb4d8b
[^infoq-flow]: InfoQ: Flow no longer aims to be 'JavaScript with types' — https://www.infoq.com/news/2021/09/flow-facebook-not-js-with-types
[^yelp-flow]: Yelp Engineering: Migrating a Large Flow Monorepo to TypeScript — https://engineeringblog.yelp.com/2026/08/migrating-a-large-flow-monorepo-to-typescript.html
