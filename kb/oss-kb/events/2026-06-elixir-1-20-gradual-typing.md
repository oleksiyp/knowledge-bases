---
type: Event
title: Elixir v1.20 makes Elixir a gradually typed language
description: On 2026-06-03 Elixir v1.20 shipped type inference of all constructs and gradual checking of every program using set-theoretic types — without annotations or breaking changes.
event_kind: release
date: 2026-06-03
window: W6
impact: positive
projects: [projects/devtools-languages/elixir]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: elixir-120
    resource: https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/
    title: "elixir-lang.org: Elixir v1.20 released — now a gradually typed language"
  - id: elixir-next15
    resource: https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/
    title: "elixir-lang.org: Type inference of all constructs and the next 15 months"
---

# What happened
Elixir v1.20 (2026-06-03) completed the first milestone of its set-theoretic type system: type inference of all language constructs and gradual type checking of every Elixir program, reporting verified bugs and dead code without requiring type annotations. A `dynamic()` type that narrows as it is used keeps false positives low.[^elixir-120]

# Why it matters
It is one of the few cases of a mainstream dynamic language gaining a sound-ish type checker incrementally, in-core, with no breaking release — in contrast to bolt-on checkers (TypeScript, mypy). The work was developed with CNRS and funded by Remote, Fresha and Tidewave.[^elixir-120][^elixir-next15]

# Outcome so far
Type signatures remain unscheduled; v1.21 (Nov 2026) and v1.22 (May 2027) target performance, recursive/parametric types and ergonomics.[^elixir-next15]

# Related
- [Elixir](/projects/devtools-languages/elixir.md)
- [Gleam](/projects/devtools-languages/gleam.md)
