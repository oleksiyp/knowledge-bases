---
type: Language
title: Elixir
description: A dynamic functional language on the BEAM. Over 2018–2026 it was a durable niche success. Phoenix LiveView, Nx/Livebook and a research-grade gradual set-theoretic type system shipped without breaking changes (1.17 in 2024 to 1.20 in 2026), and Elixir stayed among the most admired languages. Usage share remained around 2–3%.
tags: [elixir, beam, functional, phoenix, liveview, gradual-typing, set-theoretic-types, nx]
paradigms: [functional, concurrent, actor]
typing: gradual
memory_model: gc
first_released: 2012
steward: José Valim / Dashbit with the Elixir core team (sponsored type-system work)
governance: bdfl
trajectory: growing
ideas: [ideas/types/set-theoretic-types, ideas/concurrency/actor-model, ideas/types/gradual-typing-for-dynamic-languages, ideas/tooling-and-ecosystem/hot-reload-and-live-programming]
runtimes: [runtimes/beam]
adoption_signals:
  so_survey_admired_pct: { value: 66, as_of: 2025 }
  so_survey_usage_pct: { value: 2.7, as_of: 2025 }
  github_stars: { value: 26673, as_of: 2026-10-03 }
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: elixir-117
    resource: https://elixir-lang.org/blog/2024/06/12/elixir-v1-17-0-released/
    title: "Elixir blog: Elixir v1.17 released: set-theoretic data types, calendar durations, and Erlang/OTP 27 support"
  - id: elixir-118
    resource: https://elixir-lang.org/blog/2024/12/19/elixir-v1-18-0-released/
    title: "Elixir blog: Elixir v1.18 released: type checking of function calls, Language Server listeners, built-in JSON"
  - id: elixir-119
    resource: https://elixir-lang.org/blog/2025/10/16/elixir-v1-19-0-released/
    title: "Elixir blog: Elixir v1.19 released: enhanced type checking and up to 4x faster compilation for large projects"
  - id: elixir-120
    resource: https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/
    title: "Elixir blog: Elixir v1.20 released: now a gradually typed language"
  - id: elixir-next15
    resource: https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/
    title: "Elixir blog: Type inference of all constructs and the next 15 months"
  - id: design-principles
    resource: https://arxiv.org/abs/2306.06391
    title: "Castagna, Duboc, Valim: The Design Principles of the Elixir Type System (Programming 2024)"
  - id: liveview-10
    resource: https://www.phoenixframework.org/blog/phoenix-liveview-1.0-released
    title: "Phoenix blog: Phoenix LiveView 1.0.0 is here!"
  - id: nx-announce
    resource: https://dashbit.co/blog/nx-numerical-elixir-is-now-publicly-available
    title: "Dashbit: Nx (Numerical Elixir) is now publicly available"
  - id: livebook-announce
    resource: https://news.livebook.dev/announcing-livebook-42B3uU
    title: "Livebook blog: Announcing Livebook"
  - id: lsp-team
    resource: https://www.mitchellhanberg.com/ive-joined-the-official-elixir-lsp-team/
    title: "Mitchell Hanberg: I've Joined the Official Elixir LSP Team (Aug 2024)"
  - id: expert-lsp
    resource: https://expert-lsp.org/
    title: "Expert: the official Elixir language server"
  - id: discord-rust-elixir
    resource: https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users
    title: "Discord: Using Rust to Scale Elixir for 11 Million Concurrent Users"
  - id: so-2025-tech
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: so-2024-tech
    resource: https://survey.stackoverflow.co/2024/technology
    title: "Stack Overflow Developer Survey 2024: Technology"
  - id: autocodebench
    resource: https://arxiv.org/abs/2508.09101
    title: "Tencent Hunyuan: AutoCodeBench: Large Language Models are Automatic Code Benchmark Generators (2025)"
  - id: dashbit-ai
    resource: https://dashbit.co/blog/why-elixir-best-language-for-ai
    title: "Dashbit: Why Elixir is the best language for AI"
---

# Summary
Elixir is a **durable niche success**. Its admiration is high, its usage is small but rising, and its stewardship is unusually disciplined. Between 2018 and 2026 it shipped no breaking language version. During that time it added numerical computing (Nx, Feb 2021; Livebook, Apr 2021), a stable server-rendered UI model (Phoenix LiveView 1.0, Dec 2024) and, most notably, a **gradual set-theoretic type system** that infers and checks types with no annotations required.[^nx-announce][^livebook-announce][^liveview-10][^elixir-120] The type system came from academic collaboration with CNRS/IRIF (Castagna, Duboc).[^design-principles] It was rolled out over five releases, from 1.17 (June 2024) to 1.20 (June 2026). From 1.20, "every program is now gradually type checked".[^elixir-117][^elixir-120]

Stack Overflow 2025 put Elixir third among most-admired languages (66%, after Rust and Gleam). Usage was 2.7% in 2025, up from 2.1% in 2024.[^so-2025-tech][^so-2024-tech] The limits are structural. Hiring pools are small, CPU-heavy work needs Rust NIFs (Discord) or XLA, and full type *signatures* are still at least a year away.[^discord-rust-elixir][^elixir-next15]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021-02-18 | Nx (Numerical Elixir) released [^nx-announce] | + |
| E2 | 2021-04 | Livebook announced [^livebook-announce] | + |
| E3 | 2023-06 | "Design Principles of the Elixir Type System" paper (arXiv) [^design-principles] | + |
| E3 | 2024-06-12 | Elixir 1.17: set-theoretic data types begin type-checking existing code [^elixir-117] | + |
| E3 | 2024-08-15 | Official Elixir LSP team formed to merge ElixirLS, Lexical and Next LS [^lsp-team] | + |
| E4 | 2024-12-03 | Phoenix LiveView 1.0, six years after its first commit [^liveview-10] | + |
| E4 | 2024-12-19 | Elixir 1.18: type checking of function calls, built-in JSON [^elixir-118] | + |
| E4 | 2025-08 | AutoCodeBench: frontier LLMs score highest on Elixir among 20 languages [^autocodebench] | + |
| E4 | 2025-10-16 | Elixir 1.19: protocol and anonymous-function type checking, up to 4x faster compiles [^elixir-119] | + |
| E4 | 2026-06-03 | Elixir 1.20: type inference of all constructs, every program gradually type-checked [^elixir-120] | + |

# Ideas it bet on
| Idea | Outcome for Elixir |
|---|---|
| [Set-theoretic types](/ideas/types/set-theoretic-types.md) (gradual, sound, inference-first) | Succeeding. It shipped incrementally with no annotations needed. |
| [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md) without a separate checker | Succeeding. It is built into the compiler, unlike the mypy or Sorbet model. |
| [Actor model](/ideas/concurrency/actor-model.md) via OTP | Succeeded. It is inherited from Erlang. |
| Server-driven UI over WebSockets (LiveView) | Succeeded. It reached 1.0 and was widely imitated (Hotwire, Livewire, Blazor Server). |
| Numerical computing on the BEAM (Nx/Axon/Bumblebee) | Mixed. The tech is real, but little ML moved off Python. |

# What succeeded
- **Type system without a schism.** Valim chose not to add a TypeScript-style annotation language. The compiler infers types from patterns and guards and reports only "verified bugs", meaning typing violations guaranteed to fail at runtime. That avoided false positives on untyped code and let all existing programs benefit at once.[^elixir-120][^design-principles] In the "If T" type-narrowing benchmark it passed 12 of 13 categories.[^elixir-120]
- **Funding model.** CNRS and Remote funded the research. Fresha and Tidewave fund ongoing development.[^elixir-120]
- **Phoenix LiveView** became a widely cited alternative to SPA frameworks.[^liveview-10]
- **Compile times.** 1.19's lazy module loading and parallel dependency compilation gave up to 4x faster builds on large projects.[^elixir-119]
- **LLM friendliness.** On AutoCodeBench, Elixir had the highest union solve rate (97.5%) of 20 languages. Dashbit argues this comes from immutability, explicit data flow and stable APIs.[^autocodebench][^dashbit-ai] This cuts against the "training-data incumbency" thesis.

# What failed or stalled
- **Mainstream adoption.** Usage stayed under 3% despite admiration. The [LLM impact](/ideas/ai-and-languages/llm-impact-on-language-adoption.md) cuts both ways.[^so-2025-tech]
- **Tooling fragmentation until 2024.** Three competing language servers (ElixirLS, Lexical, Next LS) split effort until the 2024 merger into Expert.[^lsp-team][^expert-lsp]
- **ML ambitions.** Nx and Livebook are technically strong, but the ML ecosystem stayed in Python. Nx's success is mostly in-house inference and data work, not research (qualitative judgement).
- **Type signatures deferred.** Recursive and parametric types and typed structs are scheduled for 1.21+. There is no firm date.[^elixir-next15]

# By era
## E1
Elixir 1.8–1.11 shipped. LiveView appeared (2018–19). Phoenix established itself.
## E2
Nx and Livebook launched.[^nx-announce][^livebook-announce] Work on the type system began with CNRS.
## E3
The design-principles paper appeared.[^design-principles] 1.17 shipped the first set-theoretic checks.[^elixir-117] The LSP unification team formed.[^lsp-team]
## E4
LiveView 1.0, then 1.18, 1.19 and 1.20 completed inference of all constructs.[^liveview-10][^elixir-118][^elixir-119][^elixir-120]

# Lessons
- Retrofitting types to a dynamic language works best when inference comes first and false positives are near zero. Elixir's "verified bugs only" rule kept the community on board.
- Academic partnership plus small corporate sponsors can fund research-grade language work without a big-tech steward.
- Strong admiration does not turn into usage without a hiring market. That gap explains Elixir's whole period.

# Related
- [Erlang](/languages/erlang.md), [Gleam](/languages/gleam.md), [BEAM](/runtimes/beam.md)
- [Set-theoretic types](/ideas/types/set-theoretic-types.md), [Actor model](/ideas/concurrency/actor-model.md)
- [Event: Elixir 1.20 makes every program gradually type-checked](/events/2026-06-elixir-1-20-gradual-typing.md)
- [Event: Elixir 1.17 ships set-theoretic types](/events/2024-06-elixir-1-17-set-theoretic-types.md)

[^elixir-117]: Elixir v1.17 released — https://elixir-lang.org/blog/2024/06/12/elixir-v1-17-0-released/
[^elixir-118]: Elixir v1.18 released — https://elixir-lang.org/blog/2024/12/19/elixir-v1-18-0-released/
[^elixir-119]: Elixir v1.19 released — https://elixir-lang.org/blog/2025/10/16/elixir-v1-19-0-released/
[^elixir-120]: Elixir v1.20 released: now a gradually typed language — https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/
[^elixir-next15]: Type inference of all constructs and the next 15 months — https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/
[^design-principles]: The Design Principles of the Elixir Type System — https://arxiv.org/abs/2306.06391
[^liveview-10]: Phoenix LiveView 1.0.0 is here — https://www.phoenixframework.org/blog/phoenix-liveview-1.0-released
[^nx-announce]: Nx is now publicly available — https://dashbit.co/blog/nx-numerical-elixir-is-now-publicly-available
[^livebook-announce]: Announcing Livebook — https://news.livebook.dev/announcing-livebook-42B3uU
[^lsp-team]: I've Joined the Official Elixir LSP Team — https://www.mitchellhanberg.com/ive-joined-the-official-elixir-lsp-team/
[^expert-lsp]: Expert LSP — https://expert-lsp.org/
[^discord-rust-elixir]: Discord: Using Rust to Scale Elixir — https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users
[^so-2025-tech]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^so-2024-tech]: Stack Overflow Developer Survey 2024 — https://survey.stackoverflow.co/2024/technology
[^autocodebench]: AutoCodeBench — https://arxiv.org/abs/2508.09101
[^dashbit-ai]: Dashbit: Why Elixir is the best language for AI — https://dashbit.co/blog/why-elixir-best-language-for-ai
