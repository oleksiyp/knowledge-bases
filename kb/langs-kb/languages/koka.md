---
type: Language
title: Koka
description: Microsoft Research's small research language built around row-typed algebraic effects and Perceus reference counting. Its ideas spread widely (Perceus went into Lean 4 and Roc; effect typing influenced Effekt, Flix and OCaml discussions), but the language itself stayed a research vehicle with no notable production programs.
tags: [research, effects, reference-counting, microsoft-research, perceus]
paradigms: [functional]
typing: static
memory_model: rc
first_released: 2012
steward: Microsoft Research (Daan Leijen)
governance: single-vendor
trajectory: niche
ideas: [ideas/types/algebraic-effects-and-handlers, ideas/types/perceus-and-reference-counting-fp]
runtimes: []
adoption_signals:
  github_stars: { value: 4086, as_of: 2026-10-03 }
era_momentum: { E1: flat, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: koka-gh
    resource: https://github.com/koka-lang/koka
    title: "koka-lang/koka GitHub repository (stars via GitHub API 2026-10-03; tags to v3.2.9)"
  - id: koka-book
    resource: https://koka-lang.github.io/koka/doc/book.html
    title: "The Koka Programming Language (book, release notes)"
  - id: lwn-koka
    resource: https://lwn.net/Articles/1033050/
    title: "LWN: The Koka programming language (2025-08-19)"
  - id: perceus
    resource: https://www.microsoft.com/en-us/research/publication/perceus-garbage-free-reference-counting-with-reuse-2/
    title: "Reinking, Xie, de Moura, Leijen: Perceus — Garbage Free Reference Counting with Reuse (PLDI 2021)"
  - id: msr-koka-pubs
    resource: https://www.microsoft.com/en-us/research/project/koka/publications/
    title: "Microsoft Research: Koka publications"
---

# Summary
Koka is the purest showcase of two ideas: **row-polymorphic effect types with handlers**, and **compile-time precise reference counting (Perceus) with "functional but in-place" reuse**.[^perceus][^koka-book] The 2021 Perceus paper won a PLDI Distinguished Paper award, and its technique is used in Lean 4 and Roc (see [Perceus and RC-based FP](/ideas/types/perceus-and-reference-counting-fp.md)).[^perceus] Koka v3.0 shipped in January 2024, followed by roughly monthly point releases up to v3.2.9 in September 2026.[^koka-book][^koka-gh] In August 2025 LWN reported "no large, notable programs written in it". It noted the lack of a cycle collector, built-in concurrency and a library ecosystem, and judged that Koka "will never top the popularity charts".[^lwn-koka] **Verdict: niche research language with outsized influence.**

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019–2020 | Koka v2 redesign: C backend, evidence-passing handlers [^msr-koka-pubs] | + |
| E2 | 2021-06 | Perceus paper (PLDI 2021, Distinguished Paper) [^perceus] | + |
| E3 | 2024-01-13 | Koka v3.0: LSP/VS Code, implicit parameters [^koka-book] | + |
| E4 | 2025-07-17 | Koka v3.2.0 [^koka-book] | flat |
| E4 | 2025-08-19 | LWN profile: elegant, but no notable production users [^lwn-koka] | mixed |
| E4 | 2026-09 | v3.2.9; implicits and static overloading research [^koka-gh] | flat |

# Ideas it bet on
| Idea | Outcome for Koka |
|---|---|
| [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md) | Showed typed effects can be practical; influenced others |
| [Perceus and RC-based FP](/ideas/types/perceus-and-reference-counting-fp.md) | Succeeded as a technique (adopted by Lean 4 and Roc) |
| Tail recursion modulo cons | Shipped; rarely implemented elsewhere [^lwn-koka] |

# What succeeded
- It turned decades of effect-handler theory into an efficient implementation that compiles to C, with performance competitive with OCaml and Haskell in the Perceus benchmarks.[^perceus]
- It works as a research testbed: Perceus, FBIP, evidence-passing handlers and FIP calculi were all prototyped here.[^msr-koka-pubs]

# What failed or stalled
- **No users.** It has no package ecosystem, no concurrency story, and its syntax is idiosyncratic.[^lwn-koka]
- **Pure RC without a cycle collector** limits the programs it can express.[^lwn-koka]
- **Bus factor.** Development depends heavily on one researcher at Microsoft Research.[^koka-gh]

# By era
## E1
The v2 rewrite produced the C backend and evidence-passing compilation of handlers.[^msr-koka-pubs]
## E2
The Perceus and FBIP papers made Koka the reference for RC-based functional languages.[^perceus]
## E3
The v3.0 tooling release.[^koka-book]
## E4
Point releases, LWN coverage, and a research shift toward implicits and overloading.[^lwn-koka][^koka-gh]

# Lessons
- A research language can succeed as an idea exporter without ever being adopted itself.
- Typed effects need a large, credible ecosystem to win users over. Koka's ideas spread through languages that had other reasons to be used (Lean, Roc, OCaml).

# Related
- [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md), [Perceus and RC-based FP](/ideas/types/perceus-and-reference-counting-fp.md)
- [Lean](/languages/lean.md), [Roc](/languages/roc.md), [Flix](/languages/flix.md), [Unison](/languages/unison.md)

[^koka-gh]: koka-lang/koka — https://github.com/koka-lang/koka
[^koka-book]: The Koka Programming Language — https://koka-lang.github.io/koka/doc/book.html
[^lwn-koka]: LWN: The Koka programming language — https://lwn.net/Articles/1033050/
[^perceus]: Perceus (PLDI 2021) — https://www.microsoft.com/en-us/research/publication/perceus-garbage-free-reference-counting-with-reuse-2/
[^msr-koka-pubs]: Koka publications — https://www.microsoft.com/en-us/research/project/koka/publications/
