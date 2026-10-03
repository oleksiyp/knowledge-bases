---
type: Event
title: Elixir 1.17 ships set-theoretic types in the compiler
description: Elixir v1.17, released 2024-06-12, was the first release to type-check existing code with a gradual set-theoretic type system designed with CNRS/IRIF. It started a five-release rollout that ended with full inference in 1.20.
event_kind: release
date: 2024-06-12
era: E3
impact: positive
languages: [languages/elixir]
runtimes: [runtimes/beam]
ideas: [ideas/types/set-theoretic-types, ideas/types/gradual-typing-for-dynamic-languages]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: elixir-117
    resource: https://elixir-lang.org/blog/2024/06/12/elixir-v1-17-0-released/
    title: "Elixir blog: Elixir v1.17 released: set-theoretic data types, calendar durations, and Erlang/OTP 27 support"
  - id: design-principles
    resource: https://arxiv.org/abs/2306.06391
    title: "Castagna, Duboc, Valim: The Design Principles of the Elixir Type System"
  - id: strong-arrows
    resource: https://elixir-lang.org/blog/2023/09/20/strong-arrows-gradual-typing/
    title: "Elixir blog: Strong arrows: a new approach to gradual typing"
---

# What happened
On 2024-06-12 Elixir v1.17 shipped the first stage of its new type system: set-theoretic data types and inference over patterns, used to find bugs in existing, unannotated code. It also added calendar durations and Erlang/OTP 27 support.[^elixir-117] The design came from the paper by Giuseppe Castagna, Guillaume Duboc and José Valim. It uses semantic subtyping, meaning unions, intersections and negations, plus a `dynamic()` type and "strong arrows" for sound gradual typing without runtime casts.[^design-principles][^strong-arrows]

# Why it matters
- It was the first time a widely used dynamic language put a research-grade *set-theoretic* type checker into its compiler. Earlier attempts relied on external tools such as Dialyzer.
- The rollout ("no annotations, report only certain bugs") avoided an ecosystem split. Later releases built on it: 1.18 checked function calls, 1.19 added protocols and anonymous functions, and 1.20 (June 2026) inferred all constructs.

# Related
- [Elixir](/languages/elixir.md), [Set-theoretic types](/ideas/types/set-theoretic-types.md)
- [Event: Elixir 1.20 makes every program gradually type-checked](/events/2026-06-elixir-1-20-gradual-typing.md)

[^elixir-117]: Elixir v1.17 released — https://elixir-lang.org/blog/2024/06/12/elixir-v1-17-0-released/
[^design-principles]: The Design Principles of the Elixir Type System — https://arxiv.org/abs/2306.06391
[^strong-arrows]: Strong arrows: a new approach to gradual typing — https://elixir-lang.org/blog/2023/09/20/strong-arrows-gradual-typing/
