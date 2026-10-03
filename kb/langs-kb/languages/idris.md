---
type: Language
title: Idris
description: "Research language for general-purpose programming with dependent types. Idris 2 (self-hosted, based on Quantitative Type Theory, 2020–) is respected and influential, but it stayed a small academic project with slow releases: 0.7.0 in late 2023, then 0.8.0 in October 2025, nearly two years later."
tags: [dependent-types, quantitative-type-theory, linear-types, research-language, functional]
paradigms: [functional, dependently-typed]
typing: static
memory_model: gc
first_released: 2009
steward: Edwin Brady (University of St Andrews) and community contributors
governance: bdfl
trajectory: niche
ideas: [ideas/types/dependent-types-and-proof-assistants, ideas/types/linear-and-affine-types]
runtimes: []
adoption_signals:
  github_stars_idris2: { value: 3081, as_of: 2026-10-03 }
era_momentum: { E1: up, E2: flat, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: idris2-qtt
    resource: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ECOOP.2021.9
    title: "Edwin Brady: Idris 2 — Quantitative Type Theory in Practice (ECOOP 2021)"
  - id: idris-080
    resource: https://idris-lang.org/idris-2-version-080-released.html
    title: "idris-lang.org: Idris 2 version 0.8.0 Released"
  - id: idris-080-gh
    resource: https://github.com/idris-lang/Idris2/releases/tag/v0.8.0
    title: "GitHub: Idris2 v0.8.0 — 2025 Hallowe'en Release"
  - id: idris-gh
    resource: https://github.com/idris-lang/Idris2
    title: "GitHub: idris-lang/Idris2 (stars via GitHub API, 2026-10-03)"
---

# Summary
Idris has been the main attempt at making dependent types practical for *ordinary programming* rather than for proofs. Idris 2 is a rewrite in Idris itself, compiling through Chez Scheme. It is built on Quantitative Type Theory (QTT), which puts multiplicities (0, 1, unrestricted) on variables. That lets one type system express erased compile-time data, linear resource protocols and full dependent types.[^idris2-qtt] The design was influential, but adoption did not follow. Releases slowed: 0.8.0, the "2025 Hallowe'en Release" (31 October 2025), came nearly two years after 0.7.0.[^idris-080][^idris-080-gh] There is still no 1.0, and the Idris 2 repository has about 3,100 GitHub stars.[^idris-gh] Meanwhile [Lean](/languages/lean.md) took both the "dependently typed language you can also program in" role and most of the funding and AI attention. Verdict: **niche** — an important research vehicle and teaching tool, not a production language.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020 | Idris 2 self-hosted on Chez Scheme; first public versions [^idris2-qtt] | + |
| E2 | 2021-07 | "Idris 2: Quantitative Type Theory in Practice" at ECOOP 2021 [^idris2-qtt] | + |
| E3 | 2023 (late) | Idris 2 0.7.0 [^idris-080] | mixed |
| E4 | 2025-10-31 | Idris 2 0.8.0 after a near two-year gap: totality checker improvements, RefC precise reference counting, Typst literate files [^idris-080][^idris-080-gh] | mixed |

# Ideas it bet on
| Idea | Outcome for Idris |
|---|---|
| [Dependent types for everyday programs](/ideas/types/dependent-types-and-proof-assistants.md) | stalled: admired, rarely adopted |
| [QTT: linearity and erasure in one system](/ideas/types/linear-and-affine-types.md) | succeeded as research; influenced thinking on linear types and erasure |
| Type-driven development in the editor (holes, case splitting) | succeeded as an idea; now common in Lean, Agda and Haskell tooling |
| Multiple backends (Chez, Racket, JavaScript, RefC) | mixed: flexible, but each backend is thinly maintained |

# What succeeded
- QTT gives a clean, unified answer to "which arguments exist at runtime?" and "which resources must be used exactly once?"[^idris2-qtt]
- Self-hosting and fast compiles via Chez made Idris 2 much more usable than Idris 1.[^idris2-qtt]
- The 0.8.0 RefC backend's precise reference counting lets unique values be reused in place, in line with the [Perceus-style RC](/ideas/types/perceus-and-reference-counting-fp.md) trend.[^idris-080]

# What failed or stalled
- **Momentum.** About two years between 0.7 and 0.8, and no 1.0 or stability promise.[^idris-080]
- **No institution behind it.** Unlike Lean (the FRO, Microsoft Research, Amazon), Idris depends on one academic lead plus volunteers. Its library ecosystem and tooling stayed thin.
- **AI bypassed it.** AI theorem proving standardized on Lean, which widened the gap.

# By era
## E1
The Idris 2 rewrite brought QTT and self-hosting; there was strong interest among functional programmers.[^idris2-qtt]
## E2
The ECOOP paper and an active contributor base, but few industrial users.[^idris2-qtt]
## E3
Slower releases (0.7.0). Attention in dependent types moved to Lean 4.[^idris-080]
## E4
0.8.0 (October 2025) showed the project is alive but small.[^idris-080-gh]

# Lessons
- Good type theory is not enough. Dependently typed languages that won (Lean) did it with a funded team and a flagship library.
- QTT's real legacy may be conceptual: it shows linearity and erasure are the same mechanism.

# Related
- [Lean](/languages/lean.md), [Haskell](/languages/haskell.md)
- [Dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md), [Linear and affine types](/ideas/types/linear-and-affine-types.md)

[^idris2-qtt]: Edwin Brady, Idris 2: Quantitative Type Theory in Practice (ECOOP 2021) — https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ECOOP.2021.9
[^idris-080]: Idris 2 version 0.8.0 Released — https://idris-lang.org/idris-2-version-080-released.html
[^idris-080-gh]: Idris2 v0.8.0 release notes — https://github.com/idris-lang/Idris2/releases/tag/v0.8.0
[^idris-gh]: idris-lang/Idris2 on GitHub — https://github.com/idris-lang/Idris2
