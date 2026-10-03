---
type: Language
title: Pony
description: "Actor-model, capabilities-secure compiled language whose reference capabilities proved data-race freedom at compile time; it lost its only major production user (Wallaroo moved to Rust in 2021) and survives in 2026 as a small, volunteer-run, still-pre-1.0 project whose ideas live on in research such as Microsoft's Project Verona."
tags: [actors, reference-capabilities, data-race-freedom, llvm, research, pre-1.0]
paradigms: [actor, object-oriented, concurrent]
typing: static
memory_model: gc
first_released: 2015
steward: Pony core team (volunteers)
governance: community
trajectory: niche
ideas: [ideas/concurrency/actor-model, ideas/concurrency/data-race-safety-in-types, ideas/types/linear-and-affine-types]
runtimes: [runtimes/llvm]
adoption_signals:
  github_stars: { value: 6194, as_of: 2026-10-03 }
  latest_release: { value: "0.72.1", as_of: 2026-09 }
era_momentum: { E1: flat, E2: down, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: wallaroo-rust
    resource: https://wallaroo.ai/why-wallaroo-moved-from-pony-to-rust/
    title: "Wallaroo: Why Wallaroo Moved From Pony To Rust (2021-09-30)"
  - id: corecursive
    resource: https://corecursive.com/055-unproven-with-sean-allen/
    title: "CoRecursive podcast: Unproven Technology Case Study with Sean Allen"
  - id: lwip-0920
    resource: https://www.ponylang.io/blog/2026/09/last-week-in-pony---september-20-2026/
    title: "ponylang.io: Last Week in Pony, September 20, 2026"
  - id: lwip-2026-03
    resource: https://www.ponylang.io/blog/2026/03/last-week-in-pony---march-15-2026/
    title: "ponylang.io: Last Week in Pony, March 15, 2026"
  - id: verona-pubs
    resource: https://microsoft.github.io/verona/publications.html
    title: "Microsoft Research: Project Verona publications"
  - id: verona-faq
    resource: https://microsoft.github.io/verona/faq.html
    title: "Microsoft Research: Project Verona FAQ"
  - id: gh-ponyc
    resource: https://github.com/ponylang/ponyc
    title: "GitHub: ponylang/ponyc (stars via API, 2026-10-03)"
---

# Summary
Pony is the purest 2010s attempt to make **data-race freedom a type-system property** of an actor language. Six "reference capabilities" (iso, val, ref, box, trn, tag) let the compiler prove that mutable data is never shared between actors, and each actor has its own garbage collector, so there is no stop-the-world pause. The idea was sound, but the market went elsewhere. Wallaroo Labs, the only significant production user, rewrote in Rust in 2021, citing Rust's library ecosystem, hiring pool and Tokio-based async maturity.[^wallaroo-rust][^corecursive] Since then Pony has been maintained by a few volunteers. Releases come often (0.72.1 in Sept 2026, with many breaking changes still planned), and it has never reached 1.0.[^lwip-0920] Its ideas carried on in research. Microsoft's Project Verona, where Pony's designer Sylvan Clebsch works, cites Pony's reference capabilities as a key inspiration.[^verona-faq][^verona-pubs] Verdict: **niche; influential idea, failed product**.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019 | Microsoft Research Project Verona builds on Pony-style reference capabilities [^verona-faq] | mixed |
| E2 | 2021-09-30 | Wallaroo explains its move from Pony to Rust [^wallaroo-rust] | − |
| E4 | 2024 | OOPSLA paper "Reference Capabilities for Flexible Memory Management" (Clebsch et al.) [^verona-pubs] | + |
| E4 | 2026 H1 | ponyc 0.61: embedded LLD linker on all three major platforms [^lwip-2026-03] | + |
| E4 | 2026-09 | ponyc 0.72.1: uri and http_client added to stdlib; package system redesign planned [^lwip-0920] | mixed |

# Ideas it bet on
| Idea | Outcome for Pony |
|---|---|
| [Actor model](/ideas/concurrency/actor-model.md) as the only concurrency primitive | Worked technically; the ecosystem was too small to compete with BEAM or Akka |
| [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md) (reference capabilities) | Proven sound; the mainstream adopted Rust's Send/Sync and Swift 6's Sendable instead |
| Per-actor GC (ORCA) with no global pauses | Worked; not adopted elsewhere in production |
| [Linear/unique references](/ideas/types/linear-and-affine-types.md) (`iso`) | Influenced Verona; the learning curve stayed steep |

# What succeeded
- Kept a small but real following (~6.2k GitHub stars on ponyc).[^gh-ponyc]
- Showed that compile-time data-race freedom can coexist with GC and actors without a borrow checker.
- The project survived its sponsor's exit and kept steady releases and modernised tooling (embedded linker, stdlib growth).[^lwip-2026-03][^lwip-0920]

# What failed or stalled
- **Single-customer dependency.** Wallaroo's move to Rust took away Pony's only commercial reference. Writing wrappers for TensorFlow/ONNX-class libraries would have taken "weeks… and months to get them to a robust state".[^wallaroo-rust]
- **Never reached 1.0.** In late 2026 maintainers still warned of "a boatload of breaking changes" (package system, method overloading).[^lwip-0920]
- **Cognitive load.** Six capabilities and their subtyping rules were harder to learn than Rust's ownership model. Rust had a much larger community to absorb that learning cost.

# By era
## E1
Wallaroo used Pony in production and Verona started at MSR.
## E2
Wallaroo moved to Rust and Pony lost its commercial base.
## E3
Volunteer maintenance continued at low visibility.
## E4
Frequent 0.6x–0.7x releases. Verona papers keep the capability ideas alive in research.

# Lessons
- An elegant type-level concurrency model loses to a "good enough" one that has an ecosystem. Libraries and hiring decided this, not soundness.
- A language with one industrial user is that user's dependency, not an independent ecosystem.

# Related
- [Actor model](/ideas/concurrency/actor-model.md), [Erlang](/languages/erlang.md), [Rust](/languages/rust.md), [Inko](/languages/inko.md)

[^wallaroo-rust]: Why Wallaroo Moved From Pony To Rust — https://wallaroo.ai/why-wallaroo-moved-from-pony-to-rust/
[^corecursive]: CoRecursive: Unproven Technology Case Study — https://corecursive.com/055-unproven-with-sean-allen/
[^lwip-0920]: Last Week in Pony, September 20, 2026 — https://www.ponylang.io/blog/2026/09/last-week-in-pony---september-20-2026/
[^lwip-2026-03]: Last Week in Pony, March 15, 2026 — https://www.ponylang.io/blog/2026/03/last-week-in-pony---march-15-2026/
[^verona-pubs]: Project Verona publications — https://microsoft.github.io/verona/publications.html
[^verona-faq]: Project Verona FAQ — https://microsoft.github.io/verona/faq.html
[^gh-ponyc]: GitHub ponylang/ponyc — https://github.com/ponylang/ponyc
