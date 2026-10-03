---
type: Language
title: Haskell
description: The reference lazy, pure functional language. In 2018–2026 it kept exporting ideas (type classes, monadic effects, linear types, effect systems) while its own usage shrank. It dropped to a write-in on the 2025 Stack Overflow survey, and its foundation restructured for lack of funds in 2026.
tags: [functional, lazy, pure, research, ghc, type-classes]
paradigms: [functional, lazy, pure]
typing: static
memory_model: gc
first_released: 1990
steward: GHC developers (Well-Typed, IOG, Tweag and others) / Haskell Foundation
governance: community
trajectory: declining
ideas: [ideas/types/linear-and-affine-types, ideas/types/algebraic-effects-and-handlers, ideas/types/dependent-types-and-proof-assistants, ideas/types/sum-types-and-pattern-matching]
runtimes: [runtimes/ghc-runtime]
adoption_signals:
  so_survey_usage_pct: { value: 2.0, as_of: 2024 }
  so_survey_2025_status: { value: "write-in only (0.1%)", as_of: 2025 }
  tiobe_rank: { value: 49, as_of: 2026-09 }
era_momentum: { E1: flat, E2: flat, E3: down, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: so-2024
    resource: https://survey.stackoverflow.co/2024/technology
    title: "Stack Overflow Developer Survey 2024: Technology"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index (September 2026)"
  - id: state-hs-2025
    resource: https://bagrounds.org/articles/state-of-haskell-2025-results
    title: "Commentary on State of Haskell 2025 survey results"
  - id: hf-launch
    resource: https://www.i-programmer.info/news/98-languages/14123-haskell-foundation-launched.html
    title: "I Programmer: Haskell Foundation Launched (2020-11)"
  - id: hf-2026
    resource: https://discourse.haskell.org/t/haskell-foundation-2026-update/14136
    title: "Haskell Discourse: Haskell Foundation 2026 Update"
  - id: ghc-901
    resource: https://www.haskell.org/ghc/blog/20210204-ghc-9.0.1-released.html
    title: "GHC blog: GHC 9.0.1 is now available"
  - id: ghc-linear-doc
    resource: https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/linear_types.html
    title: "GHC User's Guide: Linear types"
  - id: ghc-js-merged
    resource: https://engineering.iog.io/2022-12-13-ghc-js-backend-merged/
    title: "IOG Engineering: JavaScript backend merged into GHC"
  - id: ghc-wasm-merged
    resource: https://www.tweag.io/blog/2022-11-22-wasm-backend-merged-in-ghc/
    title: "Tweag: WebAssembly backend merged into GHC"
  - id: delcont-proposal
    resource: https://ghc-proposals.readthedocs.io/en/latest/proposals/0313-delimited-continuation-primops.html
    title: "GHC proposal #313: Delimited continuation primops (implemented in 9.6)"
  - id: ghc-912
    resource: https://www.haskell.org/ghc/blog/20241216-ghc-9.12.1-released.html
    title: "GHC blog: GHC 9.12.1 is now available"
  - id: ghc-lts
    resource: https://www.haskell.org/ghc/blog/20250702-ghc-release-schedules.html
    title: "GHC blog: GHC LTS Releases"
  - id: ghc-914
    resource: https://www.haskell.org/ghc/blog/20251219-ghc-9.14.1-released.html
    title: "GHC blog: GHC 9.14.1 is now available"
  - id: ghc-10-alpha
    resource: https://www.haskell.org/ghc/blog/20260918-ghc-10.0.1-alpha1-released.html
    title: "GHC blog: GHC 10.0.1-alpha1 is now available (2026-09-18)"
  - id: ghc-921
    resource: https://downloads.haskell.org/~ghc/9.2.1/docs/html/users_guide/9.2.1-notes.html
    title: "GHC 9.2.1 release notes (GHC2021)"
  - id: bluefin
    resource: https://discourse.haskell.org/t/bluefin-a-new-effect-system/9395
    title: "Haskell Discourse: Bluefin, a new effect system"
  - id: hf-q1-2025
    resource: https://discourse.haskell.org/t/haskell-foundation-q1-2025-update/11835
    title: "Haskell Discourse: Haskell Foundation Q1 2025 Update"
---

# Summary
Haskell is a research and hobbyist language whose ideas spread further than it did. Between 2018 and 2026, GHC added linear types (9.0, 2021), JavaScript and WebAssembly backends (9.6, 2023), native delimited continuations for effect libraries (9.6), its first formal LTS release (9.14, 2025), and GHC 10 (alpha, Sept 2026).[^ghc-901][^ghc-js-merged][^ghc-wasm-merged][^delcont-proposal][^ghc-lts][^ghc-10-alpha] Adoption went the other way. Stack Overflow usage was 2.0% in 2024. In 2025 the survey removed Haskell from its main list, and it got 0.1% as a write-in.[^so-2024][^so-2025] TIOBE ranked it 49th in September 2026.[^tiobe] The Haskell Foundation, launched in 2020 with about $500K, cut its full-time executive director role in 2026 to put scarce money into technical work.[^hf-launch][^hf-2026] **Verdict: declining as a language and still influential as a source of ideas.** The reasons are a steep learning curve, compile-time and tooling friction, a long-running split between GHC extensions and standard Haskell, and competition from Rust, TypeScript and Scala/OCaml for the "typed FP in production" niche.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-11-04 | Haskell Foundation announced (~$500K pledged) [^hf-launch] | + |
| E2 | 2021-02-04 | GHC 9.0.1 ships LinearTypes (experimental) [^ghc-901] | mixed |
| E2 | 2021-10-29 | GHC 9.2.1: GHC2021 language edition becomes default [^ghc-921] | + |
| E3 | 2022-11/12 | Wasm and JS backends merged into GHC [^ghc-wasm-merged][^ghc-js-merged] | + |
| E3 | 2023-03-10 | GHC 9.6.1: JS/Wasm backends (tech preview), delimited-continuation primops [^delcont-proposal] | + |
| E3 | 2024-early | Bluefin effect system joins effectful/polysemy/fused-effects [^bluefin] | mixed |
| E4 | 2024-12-16 | GHC 9.12: OrPatterns, MultilineStrings, NamedDefaults [^ghc-912] | + |
| E4 | 2025 | Foundation reports fundraising struggles; applies for NSF POSE [^hf-q1-2025] | − |
| E4 | 2025 | Stack Overflow survey demotes Haskell to write-in (0.1%) [^so-2025] | − |
| E4 | 2025-07 / 2025-12-19 | GHC adopts LTS policy; 9.14.1 is first LTS [^ghc-lts][^ghc-914] | + |
| E4 | 2026-05-20 | Haskell Foundation restructures, drops full-time ED [^hf-2026] | − |
| E4 | 2026-09-18 | GHC 10.0.1-alpha1; GHC2024 becomes default edition [^ghc-10-alpha] | + |

# Ideas it bet on
| Idea | Outcome for Haskell |
|---|---|
| [Linear and affine types](/ideas/types/linear-and-affine-types.md) | Shipped in 2021 but still Experimental in 2026; little use [^ghc-linear-doc] |
| [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md) | Many competing effect libraries; RTS primops in 9.6; no standard |
| [Dependent types](/ideas/types/dependent-types-and-proof-assistants.md) | Slow "Dependent Haskell" progress; Lean and Idris took the spotlight |
| [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | Long-standing Haskell feature that mainstream languages adopted (Java, C#, Python) |
| Language editions (GHC2021/GHC2024) | Succeeded as a way to tame the extension sprawl [^ghc-10-alpha] |

# What succeeded
- **Ideas spread.** ADTs with pattern matching, type-class-like traits, monadic error handling and effect tracking became mainstream through Rust, Swift, Kotlin, Scala and TypeScript's Effect library. Haskell is still where many of them were first tried.
- **Compiler engineering kept going.** It is unusually steady for a community-funded compiler: new backends (JS and Wasm), native-code SIMD, specialisation improvements, and an LTS release policy that answers years of complaints from companies about churn.[^ghc-914][^ghc-lts]
- **Language ergonomics improved.** GHC2021 and GHC2024 editions, OverloadedRecordDot, OrPatterns and MultilineStrings removed old irritations. The 2025 community survey singled out record handling as clearly improved.[^ghc-912][^state-hs-2025]

# What failed or stalled
- **Usage fell.** The drop from 2.0% (2024) to a write-in (2025) on Stack Overflow is the clearest negative signal for any established language in this KB.[^so-2024][^so-2025]
- **Funding stalled.** The Foundation never reached the scale of Rust's or Python's foundations. Sponsorship stayed concentrated in a few companies, and CFOs were reluctant to fund ecosystem work.[^hf-2026]
- **Too many effect libraries.** mtl, polysemy, fused-effects, effectful, cleff, bluefin and heftia compete with no settled answer. Newcomers have to make an architectural choice before they can write a web service.[^bluefin]
- **Linear types did not take off** in Haskell, even though Haskell shipped them early.[^ghc-linear-doc]
- **Documentation and discoverability** are still the top pain points in the community's own survey.[^state-hs-2025]

# By era
## E1
The Haskell Foundation launched and GHC 8.x was stable. The "boring Haskell" and "simple Haskell" movements pushed back against type-level complexity.[^hf-launch]
## E2
GHC 9.0 brought linear types and 9.2 brought the GHC2021 edition.[^ghc-901][^ghc-921] Corporate users kept funding GHC work. For example, IOG (Cardano) paid for the JavaScript backend.[^ghc-js-merged]
## E3
New JS and Wasm backends and native delimited continuations arrived. Momentum slipped as Rust took the "type-safety enthusiast" audience.[^ghc-js-merged][^delcont-proposal]
## E4
GHC 9.12 and the 9.14 LTS shipped, and GHC 10 reached alpha. Survey demotion and the Foundation restructuring marked a contraction.[^ghc-914][^so-2025][^hf-2026]

# Lessons
- A language can succeed as a source of ideas and fail as a product. Haskell's ideas were adopted faster than Haskell itself.
- Stability policies (LTS, editions) came after years of churn. Companies count churn as a cost.
- Without a dominant corporate patron, small foundations struggle when money is tight.

# Related
- [GHC runtime](/runtimes/ghc-runtime.md), [OCaml](/languages/ocaml.md), [Idris](/languages/idris.md), [Lean](/languages/lean.md)
- [Haskell Foundation launch](/events/2020-11-haskell-foundation-launch.md), [GHC 9.0 LinearTypes](/events/2021-02-ghc-9-0-linear-types.md)

[^so-2024]: Stack Overflow Developer Survey 2024 — https://survey.stackoverflow.co/2024/technology
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^tiobe]: TIOBE Index — https://www.tiobe.com/tiobe-index/
[^state-hs-2025]: State of Haskell 2025 results commentary — https://bagrounds.org/articles/state-of-haskell-2025-results
[^hf-launch]: Haskell Foundation Launched — https://www.i-programmer.info/news/98-languages/14123-haskell-foundation-launched.html
[^hf-2026]: Haskell Foundation 2026 Update — https://discourse.haskell.org/t/haskell-foundation-2026-update/14136
[^ghc-901]: GHC 9.0.1 — https://www.haskell.org/ghc/blog/20210204-ghc-9.0.1-released.html
[^ghc-linear-doc]: GHC User's Guide: Linear types — https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/linear_types.html
[^ghc-js-merged]: JavaScript backend merged into GHC — https://engineering.iog.io/2022-12-13-ghc-js-backend-merged/
[^ghc-wasm-merged]: WebAssembly backend merged into GHC — https://www.tweag.io/blog/2022-11-22-wasm-backend-merged-in-ghc/
[^delcont-proposal]: GHC proposal #313 — https://ghc-proposals.readthedocs.io/en/latest/proposals/0313-delimited-continuation-primops.html
[^ghc-912]: GHC 9.12.1 — https://www.haskell.org/ghc/blog/20241216-ghc-9.12.1-released.html
[^ghc-lts]: GHC LTS Releases — https://www.haskell.org/ghc/blog/20250702-ghc-release-schedules.html
[^ghc-914]: GHC 9.14.1 — https://www.haskell.org/ghc/blog/20251219-ghc-9.14.1-released.html
[^ghc-10-alpha]: GHC 10.0.1-alpha1 — https://www.haskell.org/ghc/blog/20260918-ghc-10.0.1-alpha1-released.html
[^ghc-921]: GHC 9.2.1 release notes — https://downloads.haskell.org/~ghc/9.2.1/docs/html/users_guide/9.2.1-notes.html
[^bluefin]: Bluefin, a new effect system — https://discourse.haskell.org/t/bluefin-a-new-effect-system/9395
[^hf-q1-2025]: Haskell Foundation Q1 2025 Update — https://discourse.haskell.org/t/haskell-foundation-q1-2025-update/11835
