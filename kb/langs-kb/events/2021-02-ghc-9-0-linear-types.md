---
type: Event
title: GHC 9.0.1 ships LinearTypes
description: GHC 9.0.1 (2021-02-04) shipped the first implementation of Linear Haskell (-XLinearTypes). It was the first time linear types appeared in a production compiler for a mainstream functional language, but the extension was still marked Experimental five years later.
event_kind: release
date: 2021-02-04
era: E2
impact: mixed
languages: [languages/haskell]
runtimes: [runtimes/ghc-runtime]
ideas: [ideas/types/linear-and-affine-types]
tags: [haskell, ghc, linear-types]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ghc-901
    resource: https://www.haskell.org/ghc/blog/20210204-ghc-9.0.1-released.html
    title: "GHC blog: GHC 9.0.1 is now available (2021-02-04)"
  - id: ghc-linear-doc
    resource: https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/linear_types.html
    title: "GHC User's Guide: Linear types (development docs, 2026)"
  - id: linear-haskell-paper
    resource: https://arxiv.org/pdf/1710.09756
    title: "Bernardy et al.: Linear Haskell — Practical Linearity in a Higher-Order Polymorphic Language (POPL 2018)"
  - id: linear-base
    resource: https://github.com/tweag/linear-base
    title: "tweag/linear-base: Standard library for linear types in Haskell"
  - id: lazy-linearity
    resource: https://arxiv.org/pdf/2511.10361
    title: "arXiv: Lazy Linearity for a Core Functional Language (2025)"
---

# What happened
GHC 9.0.1 was released on 2021-02-04. Among other changes, it included "a first cut" of the LinearTypes extension. It adds linear arrows (`a %1 -> b`) and linear record fields, following the Linear Haskell design (POPL 2018) by Tweag and collaborators.[^ghc-901][^linear-haskell-paper] Tweag published `linear-base` as the matching standard library.[^linear-base]

# Why it matters
It tested the claim that linear types could be added to an existing lazy, higher-order, polymorphic language without splitting the ecosystem. Linear arrows are opt-in, and ordinary code stays as it was. Adoption stayed small. In 2026 the GHC User's Guide still calls the extension Experimental and says to expect "bugs, warts, and bad error messages". Multiplicity polymorphism is incomplete, and GHC's Core intermediate language does not check linearity, so optimisations can break it.[^ghc-linear-doc][^lazy-linearity] Meanwhile Rust's affine ownership, and later Swift's `~Copyable`, took linear-style resource control into wide use. Haskell got linear types first but did not become where the idea paid off.

# Related
- [Linear and affine types](/ideas/types/linear-and-affine-types.md)
- [Haskell](/languages/haskell.md), [GHC runtime](/runtimes/ghc-runtime.md)

[^ghc-901]: GHC 9.0.1 is now available — https://www.haskell.org/ghc/blog/20210204-ghc-9.0.1-released.html
[^ghc-linear-doc]: GHC User's Guide: Linear types — https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/linear_types.html
[^linear-haskell-paper]: Linear Haskell (POPL 2018) — https://arxiv.org/pdf/1710.09756
[^linear-base]: tweag/linear-base — https://github.com/tweag/linear-base
[^lazy-linearity]: Lazy Linearity for a Core Functional Language — https://arxiv.org/pdf/2511.10361
