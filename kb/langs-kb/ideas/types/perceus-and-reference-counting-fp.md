---
type: Idea
title: Perceus and reference-counted functional programming ("functional but in place")
description: Compiler-inserted, precise reference counting for pure functional languages. Uniquely owned data is reused and updated in place, so immutable code runs like imperative code. It came out of Lean 4 ("Counting Immutable Beans", 2019) and Koka's Perceus (PLDI 2021). By 2026 it was the memory model of Lean 4, Koka and Roc, which shows it working well but only in a small group of languages.
area: types
tags: [reference-counting, memory-management, fbip, reuse-analysis, koka, lean, roc]
outcome: succeeding
maturity_2026: niche
origin_year: 2019
mainstream_year: null
languages: [languages/koka, languages/lean, languages/roc, languages/swift]
runtimes: []
related_ideas: [ideas/types/linear-and-affine-types, ideas/types/algebraic-effects-and-handlers, ideas/memory-safety/ownership-and-borrowing, ideas/runtime-performance/low-pause-gc]
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: beans
    resource: https://arxiv.org/pdf/1908.05647
    title: "Ullrich & de Moura: Counting Immutable Beans — Reference Counting Optimized for Purely Functional Programming (IFL 2019)"
  - id: lean4-sys
    resource: https://lean-lang.org/papers/lean4.pdf
    title: "de Moura & Ullrich: The Lean 4 Theorem Prover and Programming Language (CADE 2021)"
  - id: lean-rc-doc
    resource: https://lean-lang.org/doc/reference/latest/Run-Time-Code/Reference-Counting/
    title: "Lean Language Reference: Reference Counting"
  - id: perceus
    resource: https://www.microsoft.com/en-us/research/publication/perceus-garbage-free-reference-counting-with-reuse-2/
    title: "Reinking, Xie, de Moura, Leijen: Perceus — Garbage Free Reference Counting with Reuse (PLDI 2021, Distinguished Paper)"
  - id: perceus-pldi
    resource: https://pldi21.sigplan.org/details/pldi-2021-papers/7/Perceus-Garbage-Free-Reference-Counting-with-Reuse
    title: "PLDI 2021: Perceus paper page"
  - id: fp2
    resource: https://dl.acm.org/doi/10.1145/3607840
    title: "Lorenzen, Leijen, Swierstra: FP² — Fully in-Place Functional Programming (ICFP 2023)"
  - id: roc-reuse
    resource: https://studenttheses.uu.nl/bitstream/handle/20.500.12932/44634/Reference_Counting_with_Reuse_in_Roc.pdf?sequence=1
    title: "Utrecht University thesis: Reference Counting with Reuse in Roc"
  - id: roc-zig
    resource: https://rtfeldman.com/rust-to-zig
    title: "Richard Feldman: How Our Rust-to-Zig Rewrite is Going"
  - id: lwn-koka
    resource: https://lwn.net/Articles/1033050/
    title: "LWN: The Koka programming language (2025)"
  - id: swift-ownership
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0390-noncopyable-structs-and-enums.md
    title: "Swift Evolution SE-0390: Noncopyable structs and enums"
---

# Summary
**Verdict: succeeding as a technique within a small set of languages.** Pure functional languages usually rely on a tracing GC and pay for immutability with copying. Lean 4's designers showed that *precise* reference counting lets the runtime detect when a value is uniquely referenced and mutate it in place ("Counting Immutable Beans", IFL 2019). Arrays and hash maps in pure Lean code then run at imperative speed when unshared.[^beans][^lean4-sys] Koka's **Perceus** (PLDI 2021, Distinguished Paper; with Leonardo de Moura as co-author) made it *garbage-free*: objects are freed as soon as they are dead. It added reuse and drop specialisation and named the style "functional but in-place" (FBIP).[^perceus][^perceus-pldi] FP² (ICFP 2023) then gave a calculus for *fully* in-place functions that are guaranteed not to allocate.[^fp2] Lean 4, Koka and Roc use this model.[^lean-rc-doc][^roc-reuse] The limits are the lack of cycle collection and small adoption, since Lean is the only one of the three with a large user base, and that base is mathematicians.[^lwn-koka]

# The idea
- **Precise RC inserted by the compiler.** Increments and decrements are placed based on ownership and borrowing inference, not by the programmer as in Swift ARC or C++ `shared_ptr`.[^beans]
- **Reuse analysis.** When a pattern match consumes the last reference to a cell, its memory is reused for the newly constructed value of the same size, so `map` over a unique list rewrites it in place.[^perceus]
- **FBIP/FIP.** You write pure code and get mutation-level performance when you hold the only reference.[^fp2]
- **Contrast with Swift ARC.** Swift also reference-counts, but over a mutable object model with class identity, so it pays atomic RC costs and needs `~Copyable` and ownership modifiers for performance control.[^swift-ownership]
- **Contrast with tracing GC.** RC gives predictable latency and deterministic freeing, but it cannot reclaim cycles. Pure strict languages largely avoid cycles by construction.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-09 | "Counting Immutable Beans" (IFL 2019) for Lean 4 [^beans] | + |
| E2 | 2021-06 | Perceus at PLDI 2021, Distinguished Paper [^perceus-pldi] | + |
| E2 | 2021-07 | Lean 4 system description (CADE 2021): RC + FBIP for arrays [^lean4-sys] | + |
| E3 | 2023-08 | FP²: fully in-place functional programming (ICFP 2023) [^fp2] | + |
| E3 | 2023 | Roc implements Perceus-style RC with drop-guided reuse [^roc-reuse] | + |
| E4 | 2025-02 → 2026 | Roc's compiler rewrite (Rust→Zig) keeps the RC model [^roc-zig] | flat |
| E4 | 2025-08 | LWN on Koka: no cycle collector, no notable production programs [^lwn-koka] | − |

# Where it succeeded
- **Lean 4.** The whole compiler and Mathlib's tactic framework run on it, which makes it the largest real-world validation. Lean's compiler output is reported as competitive with ocamlopt and GHC.[^lean4-sys]
- **Research impact.** It produced a series of papers (Perceus, borrowing inference, FP², TRMC) and ideas that other runtimes study.[^fp2]
- **Roc's performance pitch** of a functional language with no GC pauses rests on this technique.[^roc-reuse]

# Where it failed or stalled
- **It did not spread to established FP languages.** Haskell, OCaml, Scala and F# keep tracing GCs. Retrofitting precise RC would break laziness assumptions (Haskell) and existing mutable-cycle-friendly code (OCaml).
- **Cycles are not handled.** Koka has no cycle collector, which limits graph-heavy programs.[^lwn-koka]
- **Its carrier languages are small or unreleased.** Koka is a research language and Roc had no numbered release as of 2026.[^lwn-koka][^roc-zig]

# Why
1. **The fit is narrow.** The technique needs strict evaluation, immutability, and few or no cycles, which describes a new pure strict language. Existing languages fail at least one of these.
2. **There was a clear champion.** Leonardo de Moura connected Lean and Koka. Lean's success as a proof assistant, not as a general-purpose language, carried the idea into heavy use.
3. **Tracing GCs got better at the same time** (ZGC, generational ZGC, OCaml 5's GC), which reduced the latency argument for switching.

# Lessons
- Memory management strategy is a design-time choice. Pure strict languages can pick RC and get in-place mutation in return, but established GC'd languages can't switch later.
- Uniqueness inferred at runtime (Perceus) and uniqueness declared in types (linear and affine types, OxCaml modes) are converging. Expect hybrids.

# Related
- [Koka](/languages/koka.md), [Lean](/languages/lean.md), [Roc](/languages/roc.md), [Swift](/languages/swift.md)
- [Linear and affine types](/ideas/types/linear-and-affine-types.md), [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md)

[^beans]: Counting Immutable Beans — https://arxiv.org/pdf/1908.05647
[^lean4-sys]: The Lean 4 Theorem Prover and Programming Language — https://lean-lang.org/papers/lean4.pdf
[^lean-rc-doc]: Lean reference: Reference Counting — https://lean-lang.org/doc/reference/latest/Run-Time-Code/Reference-Counting/
[^perceus]: Perceus — https://www.microsoft.com/en-us/research/publication/perceus-garbage-free-reference-counting-with-reuse-2/
[^perceus-pldi]: PLDI 2021 Perceus — https://pldi21.sigplan.org/details/pldi-2021-papers/7/Perceus-Garbage-Free-Reference-Counting-with-Reuse
[^fp2]: FP² (ICFP 2023) — https://dl.acm.org/doi/10.1145/3607840
[^roc-reuse]: Reference Counting with Reuse in Roc — https://studenttheses.uu.nl/bitstream/handle/20.500.12932/44634/Reference_Counting_with_Reuse_in_Roc.pdf?sequence=1
[^roc-zig]: How Our Rust-to-Zig Rewrite is Going — https://rtfeldman.com/rust-to-zig
[^lwn-koka]: LWN: Koka — https://lwn.net/Articles/1033050/
[^swift-ownership]: SE-0390 — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0390-noncopyable-structs-and-enums.md
