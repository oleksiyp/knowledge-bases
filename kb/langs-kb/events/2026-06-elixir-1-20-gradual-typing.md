---
type: Event
title: Elixir 1.20 makes every program gradually type-checked
description: Elixir v1.20, released 2026-06-03, completed type inference of all language constructs. Every Elixir program is now gradually type-checked for verified bugs, with no annotations required. Type signatures remain future work.
event_kind: release
date: 2026-06-03
era: E4
impact: positive
languages: [languages/elixir]
runtimes: [runtimes/beam]
ideas: [ideas/types/set-theoretic-types, ideas/types/gradual-typing-for-dynamic-languages]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: elixir-120
    resource: https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/
    title: "Elixir blog: Elixir v1.20 released: now a gradually typed language"
  - id: elixir-next15
    resource: https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/
    title: "Elixir blog: Type inference of all constructs and the next 15 months"
  - id: elixir-119
    resource: https://elixir-lang.org/blog/2025/10/16/elixir-v1-19-0-released/
    title: "Elixir blog: Elixir v1.19 released"
---

# What happened
Elixir v1.20 was released on 2026-06-03 after three release candidates (January–May 2026). The RCs added inference of all constructs, then cross-clause inference, then cross-dependency inference.[^elixir-next15] With this release "every program is now gradually type checked in search for verified bugs". The compiler narrows `dynamic()` through guards, patterns and `case`. It reports only typing violations certain to fail at runtime, plus dead code and redundant clauses. It passes 12 of 13 categories of the "If T" type-narrowing benchmark.[^elixir-120] CNRS and Remote funded the original research, and Fresha and Tidewave sponsor the ongoing work.[^elixir-120]

# Why it matters
- It completes the first milestone of the type-system plan. Elixir is now a gradually typed language without having introduced annotation syntax, a rare example of retrofitting types to a large dynamic ecosystem without a split.
- It followed 1.19 (Oct 2025), which also cut compile times up to 4x, so the extra checking did not cost build speed.[^elixir-119]
- What remains: typed structs (planned for v1.21–1.22) and type signatures with parametric and protocol polymorphism, which have "no precise date".[^elixir-next15]

# Related
- [Elixir](/languages/elixir.md), [Set-theoretic types](/ideas/types/set-theoretic-types.md)
- [Gradual typing for dynamic languages](/ideas/types/gradual-typing-for-dynamic-languages.md)
- [Event: Elixir 1.17 ships set-theoretic types](/events/2024-06-elixir-1-17-set-theoretic-types.md)

[^elixir-120]: Elixir v1.20 released — https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/
[^elixir-next15]: Type inference of all constructs and the next 15 months — https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/
[^elixir-119]: Elixir v1.19 released — https://elixir-lang.org/blog/2025/10/16/elixir-v1-19-0-released/
