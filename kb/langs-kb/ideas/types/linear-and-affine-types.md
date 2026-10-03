---
type: Idea
title: Linear and affine types
description: Types that limit how often a value may be used. Affine means at most once (Rust moves, Swift ~Copyable); linear means exactly once (Linear Haskell, Austral, Idris 2 QTT). Affine types went mainstream through Rust and then Swift. True linear types stayed in research and niche languages, with OxCaml's uniqueness and locality modes as the most serious industrial attempt in 2025–26.
area: types
tags: [linear-types, affine-types, ownership, uniqueness, qtt, resource-safety]
outcome: mixed
maturity_2026: adopted
origin_year: 1987
mainstream_year: 2015
languages: [languages/rust, languages/swift, languages/haskell, languages/idris, languages/ocaml, languages/mojo, languages/vale]
runtimes: [runtimes/ghc-runtime, runtimes/ocaml-5-runtime]
related_ideas: [ideas/memory-safety/ownership-and-borrowing, ideas/types/dependent-types-and-proof-assistants, ideas/concurrency/data-race-safety-in-types, ideas/types/perceus-and-reference-counting-fp]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: linear-haskell
    resource: https://arxiv.org/pdf/1710.09756
    title: "Bernardy et al.: Linear Haskell — Practical Linearity in a Higher-Order Polymorphic Language (POPL 2018)"
  - id: ghc-901
    resource: https://www.haskell.org/ghc/blog/20210204-ghc-9.0.1-released.html
    title: "GHC blog: GHC 9.0.1 is now available"
  - id: ghc-linear-doc
    resource: https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/linear_types.html
    title: "GHC User's Guide: Linear types (2026)"
  - id: lazy-linearity
    resource: https://arxiv.org/pdf/2511.10361
    title: "arXiv: Lazy Linearity for a Core Functional Language (2025)"
  - id: idris2-qtt
    resource: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ECOOP.2021.9
    title: "Brady: Idris 2 — Quantitative Type Theory in Practice (ECOOP 2021)"
  - id: granule
    resource: https://dl.acm.org/doi/pdf/10.1145/3341714
    title: "Orchard, Liepelt, Eades: Quantitative Program Reasoning with Graded Modal Types (ICFP 2019)"
  - id: austral-intro
    resource: https://borretti.me/article/introducing-austral
    title: "Fernando Borretti: Introducing Austral — A Systems Language with Linear Types and Capabilities"
  - id: austral-gh
    resource: https://github.com/austral/austral
    title: "austral/austral GitHub repository"
  - id: se0390
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0390-noncopyable-structs-and-enums.md
    title: "Swift Evolution SE-0390: Noncopyable structs and enums (Swift 5.9)"
  - id: se0427
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0427-noncopyable-generics.md
    title: "Swift Evolution SE-0427: Noncopyable Generics (Swift 6.0)"
  - id: oxcaml-modes
    resource: https://oxcaml.org/documentation/modes/intro/
    title: "OxCaml documentation: Modes (locality, uniqueness, affinity)"
  - id: js-oxcaml
    resource: https://blog.janestreet.com/introducing-oxcaml/
    title: "Jane Street Blog: Introducing OxCaml (2025-06)"
  - id: vale-home
    resource: https://verdagon.dev/home
    title: "Evan Ovadia (Vale lead): home page — Vale archived; Mojo linear types work 2024–25"
  - id: affect
    resource: https://iris-project.org/pdfs/2025-popl-affect.pdf
    title: "Affect: An Affine Type and Effect System (POPL 2025)"
---

# Summary
**Verdict: mixed. Affine types succeeded and true linear types did not.** The *affine* half of the idea, "a value may be used at most once, then it is moved", is now mainstream. Rust is built on it, and Swift adopted it with `~Copyable` (Swift 5.9, 2023) and noncopyable generics (Swift 6.0, Sept 2024).[^se0390][^se0427] Mojo added explicitly destroyed (linear) types in 2024–25.[^vale-home] The *linear* half, "must be used exactly once", is still niche. GHC shipped LinearTypes (based on the POPL 2018 Linear Haskell design[^linear-haskell]) in 2021, yet the extension is still "Experimental" in 2026, with incomplete multiplicity polymorphism and no checking in Core.[^ghc-901][^ghc-linear-doc][^lazy-linearity] Idris 2's Quantitative Type Theory (QTT), Granule's graded modal types and Austral's linear systems language are respected research but have few users.[^idris2-qtt][^granule][^austral-intro] The most significant new development was Jane Street's **OxCaml** (2025). It adds uniqueness, affinity and locality *modes* to a GC'd language, aiming to get Rust-like control without Rust's lifetime annotations.[^oxcaml-modes][^js-oxcaml]

# The idea
Linear logic (Girard, 1987) treats hypotheses as resources. In types this becomes:
- **Linear**: a value is consumed exactly once. This guarantees a file is closed, a session protocol is completed, or a buffer is freed, with no leaks and no double use.
- **Affine**: at most once (drop allowed). This is what Rust moves and Swift `~Copyable` give you, with automatic destructors handling the "zero uses" case.
- **Uniqueness**: a dual view (Clean, OxCaml). It guarantees there is only one reference *now*, so in-place mutation is safe. It is closely related to Perceus-style reuse.
- **Quantitative or graded**: usage counts as part of the type (Idris 2 QTT, Granule's ℕ∪{ω} grades).[^idris2-qtt][^granule]

The problems it solves: safe manual memory management without a GC, resource protocols, safe in-place updates in pure code, and (combined with regions) data-race freedom.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-08 | Granule (ICFP 2019): graded modal types [^granule] | + |
| E2 | 2021-02-04 | GHC 9.0.1 ships LinearTypes (experimental) [^ghc-901] | mixed |
| E2 | 2021-07 | Idris 2 QTT paper (ECOOP 2021); Idris 2 replaces Idris 1 [^idris2-qtt] | + |
| E3 | 2022–2023 | Austral: linear types + capabilities, borrow checker under 600 LOC [^austral-intro] | + |
| E3 | 2023-09 | Swift 5.9 ships `~Copyable` structs/enums (SE-0390) [^se0390] | + |
| E3 | 2024-09 | Swift 6.0: noncopyable generics (SE-0427) [^se0427] | + |
| E4 | 2024–2025 | Mojo gains linear ("explicitly destroyed") types; Vale archived [^vale-home] | mixed |
| E4 | 2025-01 | "Affect" affine type-and-effect system (POPL 2025) [^affect] | + |
| E4 | 2025-06-14 | OxCaml released with uniqueness, affinity, locality modes [^js-oxcaml] | + |
| E4 | 2026 | GHC docs still label LinearTypes Experimental [^ghc-linear-doc] | − |

# Where it succeeded
- **Rust**, as an affine plus borrowing system (see [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md)), is the proof that substructural types can be mainstream when tied to a compelling payoff: memory safety without GC.
- **Swift** retrofitted affine types into an ARC language for performance-critical and systems code, and extended them to generics within one release cycle.[^se0390][^se0427]
- **Idris 2** uses QTT to erase compile-time-only arguments (multiplicity 0), a practical benefit even for users who never write linear code.[^idris2-qtt]

# Where it failed or stalled
- **Linear Haskell.** It shipped early, but after five years it is still experimental, error messages are poor, and the optimiser ignores linearity. The ecosystem (`linear-base`) stays small.[^ghc-linear-doc][^lazy-linearity]
- **Systems languages built only on linearity.** Vale is archived. Austral is a one-person project.[^vale-home][^austral-gh]
- **Strict linearity is unpopular.** Most languages chose affine plus destructors because "must use exactly once" is painful with exceptions, early returns and closures.

# Why
1. **The payoff decides adoption.** Rust tied affinity to memory safety without a GC, which is a big, measurable win. In a GC'd lazy language like Haskell, linearity mainly offers in-place update and resource protocols, which most users don't need enough to pay the ergonomic cost.
2. **Retrofitting is hard.** Linearity interacts badly with laziness, polymorphism and existing libraries, and every library needs linear variants. Swift managed by making `Copyable` an implicit default you opt out of, so existing code is unaffected.[^se0427]
3. **Affine beats linear on ergonomics.** Automatic destructors cover the "zero uses" case without forcing callers to consume values explicitly.
4. **Modes may be the new path.** OxCaml's mode axes (local/global, unique/aliased) default to today's behaviour and are inferred. The industrial bet is that this keeps the cost low enough for a large existing codebase.[^oxcaml-modes]

# Lessons
- Substructural types win when they buy something users can measure (no GC, no data races), and when they are invisible by default.
- Experimental extensions in community compilers can stall for years without a funded champion.

# Related
- [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md)
- [Perceus and RC-based FP](/ideas/types/perceus-and-reference-counting-fp.md), [Dependent types](/ideas/types/dependent-types-and-proof-assistants.md)
- [Haskell](/languages/haskell.md), [Idris](/languages/idris.md), [OCaml](/languages/ocaml.md), [Rust](/languages/rust.md), [Swift](/languages/swift.md)
- [GHC 9.0 LinearTypes](/events/2021-02-ghc-9-0-linear-types.md), [OxCaml](/events/2025-06-oxcaml-open-sourced.md)

[^linear-haskell]: Linear Haskell (POPL 2018) — https://arxiv.org/pdf/1710.09756
[^ghc-901]: GHC 9.0.1 — https://www.haskell.org/ghc/blog/20210204-ghc-9.0.1-released.html
[^ghc-linear-doc]: GHC User's Guide: Linear types — https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/linear_types.html
[^lazy-linearity]: Lazy Linearity for a Core Functional Language — https://arxiv.org/pdf/2511.10361
[^idris2-qtt]: Idris 2: QTT in Practice — https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ECOOP.2021.9
[^granule]: Quantitative Program Reasoning with Graded Modal Types — https://dl.acm.org/doi/pdf/10.1145/3341714
[^austral-intro]: Introducing Austral — https://borretti.me/article/introducing-austral
[^austral-gh]: austral/austral — https://github.com/austral/austral
[^se0390]: SE-0390 — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0390-noncopyable-structs-and-enums.md
[^se0427]: SE-0427 — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0427-noncopyable-generics.md
[^oxcaml-modes]: OxCaml Modes — https://oxcaml.org/documentation/modes/intro/
[^js-oxcaml]: Introducing OxCaml — https://blog.janestreet.com/introducing-oxcaml/
[^vale-home]: Evan Ovadia home page — https://verdagon.dev/home
[^affect]: Affect (POPL 2025) — https://iris-project.org/pdfs/2025-popl-affect.pdf
