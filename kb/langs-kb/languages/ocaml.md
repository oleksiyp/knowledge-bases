---
type: Language
title: OCaml
description: Pragmatic ML-family language. Its 2018–2026 story is a successful runtime overhaul, OCaml 5 with multicore and effect handlers (2022), followed by a steady stream of releases (5.1–5.5), Jane Street's OxCaml (2025) and modest usage growth. A slow, regression-hit migration off 4.14 tempered the result.
tags: [functional, ml-family, multicore, effect-handlers, jane-street, tarides]
paradigms: [functional, imperative, modular]
typing: static
memory_model: gc
first_released: 1996
steward: OCaml core team (Inria, Tarides, Jane Street, OCaml Software Foundation)
governance: community
trajectory: growing
ideas: [ideas/types/algebraic-effects-and-handlers, ideas/concurrency/multicore-ocaml-and-effects-based-concurrency, ideas/types/linear-and-affine-types, ideas/concurrency/data-race-safety-in-types]
runtimes: [runtimes/ocaml-5-runtime]
adoption_signals:
  so_survey_usage_pct: { value: 1.2, as_of: 2025 }
  so_survey_usage_pct_prev: { value: 0.8, as_of: 2024 }
  tiobe_rank: { value: 38, as_of: 2026-09 }
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
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
  - id: tarides-ocaml5
    resource: https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
    title: "Tarides: OCaml 5 with Multicore Support is Here!"
  - id: release-cycle
    resource: https://ocaml.org/tools/compiler-release-cycle
    title: "OCaml.org: The Compiler Release Cycle"
  - id: goblint-regress
    resource: https://github.com/ocaml/ocaml/issues/13733
    title: "ocaml/ocaml #13733: Goblint performance regression 4.14 vs 5.3"
  - id: ocaml-520
    resource: https://ocaml.org/changelog/2024-05-13-ocaml-520
    title: "OCaml Changelog: Release of OCaml 5.2.0"
  - id: ocaml-530
    resource: https://ocaml.org/changelog/2025-01-08-ocaml-530
    title: "OCaml Changelog: Release of OCaml 5.3.0"
  - id: ocaml-540
    resource: https://ocaml.org/changelog/2025-10-09-ocaml-540
    title: "OCaml Changelog: Release of OCaml 5.4.0"
  - id: ocaml-550
    resource: https://ocaml.org/changelog/2026-06-19-ocaml-550
    title: "OCaml Changelog: Release of OCaml 5.5.0"
  - id: eio-1
    resource: https://tarides.com/blog/2024-03-20-eio-1-0-release-introducing-a-new-effects-based-i-o-library-for-ocaml/
    title: "Tarides: Eio 1.0 Release"
  - id: js-oxcaml
    resource: https://blog.janestreet.com/introducing-oxcaml/
    title: "Jane Street Blog: Introducing OxCaml"
  - id: icfp25-js-docker
    resource: https://anil.recoil.org/notes/icfp25-ocaml5-js-docker
    title: "Anil Madhavapeddy: Jane Street and Docker on moving to OCaml 5 (ICFP/SPLASH 2025)"
  - id: dune-pkg
    resource: https://ocaml.org/news/platform-2025-08
    title: "OCaml Platform Newsletter: May to August 2025 (Dune package management)"
  - id: tarides-succeed
    resource: https://tarides.com/blog/2023-07-07-making-ocaml-5-succeed-for-developers-and-organisations/
    title: "Tarides: Making OCaml 5 Succeed for Developers and Organisations"
---

# Summary
OCaml is the success story of the ML family in this period. It did the hard thing Python only started in 2023: it replaced a single-core runtime with a parallel one, and it also added native effect handlers, in OCaml 5.0 (2022-12-16).[^tarides-ocaml5] Releases then came regularly: 5.2 (compaction and TSan, May 2024), 5.3 (effect syntax, Jan 2025), 5.4 (labelled tuples and immutable arrays, Oct 2025) and 5.5 (module-dependent functions and a relocatable compiler, Jun 2026).[^ocaml-520][^ocaml-530][^ocaml-540][^ocaml-550] Its main industrial patron, Jane Street, moved production to the OCaml 5 runtime and open-sourced its OxCaml branch in 2025.[^icfp25-js-docker][^js-oxcaml] Stack Overflow usage rose from 0.8% (2024) to 1.2% (2025), and TIOBE ranked it 38th in September 2026, which is small but moving up.[^so-2024][^so-2025][^tiobe] **Verdict: growing.** The multicore and effects bet paid off. The cost was a long LTS period on 4.14 and performance regressions that kept some large users (Goblint, Frama-C, Infer) on the old runtime for years.[^release-cycle][^goblint-regress]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E3 | 2022-12-16 | OCaml 5.0: domains + effect handlers [^tarides-ocaml5] | + |
| E3 | 2023 | Regressions keep users on the 4.14 LTS; Tarides pushes OCaml 5 adoption [^tarides-succeed][^release-cycle] | mixed |
| E3 | 2024-03 | Eio 1.0 effects-based direct-style I/O [^eio-1] | + |
| E3 | 2024-05-13 | OCaml 5.2: parallel compaction restored, ThreadSanitizer [^ocaml-520] | + |
| E4 | 2025-01-08 | OCaml 5.3: `effect` syntax for deep handlers [^ocaml-530] | + |
| E4 | 2025 | Dune package management builds most of opam-repository [^dune-pkg] | + |
| E4 | 2025-06-14 | Jane Street open-sources OxCaml [^js-oxcaml] | + |
| E4 | 2025-10 | ICFP: Jane Street prod on OCaml 5 runtime; Docker moving to Eio [^icfp25-js-docker] | + |
| E4 | 2025-10-09 | OCaml 5.4: labelled tuples, immutable arrays (upstreamed from Jane Street) [^ocaml-540] | + |
| E4 | 2026-06-19 | OCaml 5.5: module-dependent functions, relocatable compiler [^ocaml-550] | + |

# Ideas it bet on
| Idea | Outcome for OCaml |
|---|---|
| [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md) | Succeeded. Shipped untyped effects in the runtime (5.0) and syntax in 5.3; typed effects still future work |
| [Multicore OCaml and effects-based concurrency](/ideas/concurrency/multicore-ocaml-and-effects-based-concurrency.md) | Succeeded, after a slow migration |
| [Linear and affine types](/ideas/types/linear-and-affine-types.md) (via OxCaml modes) | Promising. In production at Jane Street, not yet upstream |
| [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md) | Experimental in OxCaml (contention and portability modes) |

# What succeeded
- **Retrofitting multicore without forking the language.** Sequential programs and C stubs kept working. That avoided a Python 2→3-style split.[^tarides-ocaml5]
- **Direct-style concurrency.** Effects let Eio offer async I/O without monads or coloured functions.[^eio-1]
- **Corporate stewardship with upstreaming.** Jane Street prototypes features in OxCaml and upstreams the stable ones (labelled tuples and immutable arrays in 5.4).[^js-oxcaml][^ocaml-540]
- **Tooling caught up.** Dune package management handles most of opam-repository, closing a long-standing gap with Cargo.[^dune-pkg]

# What failed or stalled
- **The performance cost of 5.x.** The rewritten runtime cut corners to stay simple. Goblint measured about 14% slower on 5.3 than on 4.14, and Frama-C, Pyre, EasyCrypt and Infer reported regressions.[^goblint-regress]
- **The ecosystem split between Lwt, Async and Eio.** Effects added a third concurrency model rather than replacing the other two.
- **Typed effects are missing.** OCaml 5's effects are not tracked in types, so an unhandled effect is a runtime error. Typed effects are an unsolved research question.[^ocaml-530]
- **Small usage share.** At 1.2% of Stack Overflow respondents, the hiring pool is still small. This is commonly cited as an adoption barrier (anecdotal, not survey-verified).[^so-2025]

# By era
## E1
OCaml 4.x was stable, and the Multicore OCaml prototypes were still out of tree. ReasonML and BuckleScript gave OCaml a JavaScript-facing surface (see [ReScript](/languages/rescript-reason.md)).
## E2
The multicore runtime and effects were designed for upstream, and OCaml 4.14 was declared the bridge LTS.[^release-cycle]
## E3
OCaml 5.0, 5.1 and 5.2 shipped, followed by Eio 1.0.[^tarides-ocaml5][^ocaml-520][^eio-1]
## E4
OCaml 5.3–5.5 shipped, OxCaml went public, Jane Street and Docker migrated, and Stack Overflow usage rose.[^ocaml-530][^js-oxcaml][^so-2025]

# Lessons
- A runtime rewrite works when it is backward compatible and the community accepts a long LTS bridge.
- One deep-pocketed industrial user can drive a small language forward, provided it upstreams its work.

# Related
- [OCaml 5 runtime](/runtimes/ocaml-5-runtime.md), [Haskell](/languages/haskell.md), [F#](/languages/fsharp.md), [ReScript/Reason](/languages/rescript-reason.md)
- [OCaml 5.0 release](/events/2022-12-ocaml-5-multicore-effects.md), [OxCaml](/events/2025-06-oxcaml-open-sourced.md)

[^so-2024]: Stack Overflow Developer Survey 2024 — https://survey.stackoverflow.co/2024/technology
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^tiobe]: TIOBE Index — https://www.tiobe.com/tiobe-index/
[^tarides-ocaml5]: OCaml 5 with Multicore Support is Here — https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
[^release-cycle]: OCaml compiler release cycle — https://ocaml.org/tools/compiler-release-cycle
[^goblint-regress]: Goblint regression issue — https://github.com/ocaml/ocaml/issues/13733
[^ocaml-520]: OCaml 5.2.0 — https://ocaml.org/changelog/2024-05-13-ocaml-520
[^ocaml-530]: OCaml 5.3.0 — https://ocaml.org/changelog/2025-01-08-ocaml-530
[^ocaml-540]: OCaml 5.4.0 — https://ocaml.org/changelog/2025-10-09-ocaml-540
[^ocaml-550]: OCaml 5.5.0 — https://ocaml.org/changelog/2026-06-19-ocaml-550
[^eio-1]: Eio 1.0 — https://tarides.com/blog/2024-03-20-eio-1-0-release-introducing-a-new-effects-based-i-o-library-for-ocaml/
[^js-oxcaml]: Introducing OxCaml — https://blog.janestreet.com/introducing-oxcaml/
[^icfp25-js-docker]: Jane Street and Docker on OCaml 5 — https://anil.recoil.org/notes/icfp25-ocaml5-js-docker
[^dune-pkg]: OCaml Platform Newsletter May–Aug 2025 — https://ocaml.org/news/platform-2025-08
[^tarides-succeed]: Making OCaml 5 Succeed — https://tarides.com/blog/2023-07-07-making-ocaml-5-succeed-for-developers-and-organisations/
