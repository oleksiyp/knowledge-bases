---
type: Runtime
title: OCaml 5 runtime
description: OCaml's rewritten runtime (5.0, Dec 2022), with shared-memory parallelism via domains, a concurrent mostly-parallel GC, and native one-shot effect handlers implemented with fibers. It is now the production runtime at Jane Street and in Docker Desktop, after a slow migration that was hurt by performance regressions.
tags: [ocaml, runtime, multicore, gc, effect-handlers, fibers]
runtime_kind: vm
languages: [languages/ocaml]
ideas: [ideas/concurrency/multicore-ocaml-and-effects-based-concurrency, ideas/types/algebraic-effects-and-handlers, ideas/runtime-performance/low-pause-gc]
trajectory: growing
era_momentum: { E1: n/a, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tarides-ocaml5
    resource: https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
    title: "Tarides: OCaml 5 with Multicore Support is Here!"
  - id: retrofit-par
    resource: https://www.janestreet.com/tech-talks/the-saga-of-multicore-ocaml/
    title: "Jane Street tech talk: The Saga of Multicore OCaml (KC Sivaramakrishnan)"
  - id: retrofit-effects
    resource: https://arxiv.org/pdf/2104.00250
    title: "Sivaramakrishnan et al.: Retrofitting Effect Handlers onto OCaml (PLDI 2021)"
  - id: release-cycle
    resource: https://ocaml.org/tools/compiler-release-cycle
    title: "OCaml.org: The Compiler Release Cycle"
  - id: goblint-regress
    resource: https://github.com/ocaml/ocaml/issues/13733
    title: "ocaml/ocaml #13733: Goblint performance regression 4.14 vs 5.3"
  - id: ocaml-520
    resource: https://ocaml.org/changelog/2024-05-13-ocaml-520
    title: "OCaml Changelog: OCaml 5.2.0 (compaction, TSan)"
  - id: ocaml-530
    resource: https://ocaml.org/changelog/2025-01-08-ocaml-530
    title: "OCaml Changelog: OCaml 5.3.0"
  - id: ocaml-550
    resource: https://ocaml.org/changelog/2026-06-19-ocaml-550
    title: "OCaml Changelog: OCaml 5.5.0"
  - id: tsan
    resource: https://tarides.com/blog/2023-10-18-off-to-the-races-using-threadsanitizer-in-ocaml/
    title: "Tarides: Off to the Races — Using ThreadSanitizer in OCaml"
  - id: icfp25-js-docker
    resource: https://anil.recoil.org/notes/icfp25-ocaml5-js-docker
    title: "Anil Madhavapeddy: Jane Street and Docker on moving to OCaml 5 (ICFP/SPLASH 2025)"
  - id: js-oxcaml
    resource: https://blog.janestreet.com/introducing-oxcaml/
    title: "Jane Street Blog: Introducing OxCaml"
---

# Summary
The OCaml 5 runtime is a near-complete rewrite of OCaml's GC and scheduler. It has **domains** (one OS thread each, running in parallel), a per-domain minor heap with a shared, concurrently marked major heap, and **fibers**: small heap-allocated stacks that implement one-shot effect handlers without changing how the C stack works.[^tarides-ocaml5][^retrofit-effects] It shipped in OCaml 5.0 on 2022-12-16 after about eight years of out-of-tree work.[^retrofit-par] Later releases filled gaps: ThreadSanitizer support (5.1/5.2), restored parallel compaction (5.2), effect syntax (5.3), and GC improvements and Windows without winpthreads (5.5).[^tsan][^ocaml-520][^ocaml-530][^ocaml-550] **Verdict: succeeded.** Jane Street's production servers ran on it by ICFP 2025.[^icfp25-js-docker] The cost was a performance regression that kept some large users on 4.14 for years.[^goblint-regress][^release-cycle]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021-06 | "Retrofitting Effect Handlers onto OCaml" (PLDI 2021) [^retrofit-effects] | + |
| E2 | 2022-03 | OCaml 4.14 designated LTS bridge [^release-cycle] | mixed |
| E3 | 2022-12-16 | OCaml 5.0 runtime ships [^tarides-ocaml5] | + |
| E3 | 2023-10 | ThreadSanitizer support lands (5.1/5.2) [^tsan] | + |
| E3 | 2024-05-13 | 5.2: parallel compaction restored [^ocaml-520] | + |
| E4 | 2025 | Goblint measures ~14% slowdown 4.14→5.3 [^goblint-regress] | − |
| E4 | 2025-06-14 | OxCaml: modes for stack allocation and data-race freedom on top of the runtime [^js-oxcaml] | + |
| E4 | 2025-10 | Jane Street production on OCaml 5 runtime [^icfp25-js-docker] | + |
| E4 | 2026-06-19 | 5.5: GC improvements, Windows without winpthreads [^ocaml-550] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [Multicore OCaml and effects-based concurrency](/ideas/concurrency/multicore-ocaml-and-effects-based-concurrency.md) | Succeeded |
| [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md) (one-shot, untyped) | Succeeded in the runtime; typed effects still pending |
| [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md) | Mixed. Concurrent marking, but throughput regressions on some workloads |

# What succeeded
- **Backward compatibility.** Most sequential code and C bindings kept working, which avoided an ecosystem split.[^retrofit-effects]
- **Cheap fibers** make effect-based schedulers (Eio, Picos-based libraries) practical without colouring functions.[^tarides-ocaml5]
- **Tooling for the new risks.** TSan support arrived within a year to find data races.[^tsan]

# What failed or stalled
- **Throughput regressions.** Compaction was removed and only restored in 5.2. Allocation-heavy analyzers (Goblint, Frama-C, Infer) were slower.[^ocaml-520][^goblint-regress]
- **Platform coverage dropped in 5.0** (some 32-bit and POWER targets) and was restored only gradually.[^ocaml-520]
- **No static race safety.** Only OxCaml's mode extensions offer it, and they are not upstream.[^js-oxcaml]

# By era
## E1
Multicore OCaml lived out of tree, alongside ICFP papers on parallel GC.[^retrofit-par]
## E2
Upstreaming plan; 4.14 LTS.[^release-cycle]
## E3
5.0–5.2: release, then the fix-up cycle.[^tarides-ocaml5][^ocaml-520]
## E4
Production adoption (Jane Street, Docker); OxCaml layers modes on top.[^icfp25-js-docker][^js-oxcaml]

# Lessons
- Retrofitting parallelism to a GC'd runtime is doable without breaking the language, but plan for years of performance catch-up and a long LTS bridge. CPython's free-threading effort follows the same pattern (see [GIL removal](/ideas/concurrency/gil-removal-free-threading.md)).

# Related
- [OCaml](/languages/ocaml.md), [GHC runtime](/runtimes/ghc-runtime.md), [CPython](/runtimes/cpython.md)
- [OCaml 5.0 event](/events/2022-12-ocaml-5-multicore-effects.md)

[^tarides-ocaml5]: OCaml 5 with Multicore Support is Here — https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
[^retrofit-par]: The Saga of Multicore OCaml — https://www.janestreet.com/tech-talks/the-saga-of-multicore-ocaml/
[^retrofit-effects]: Retrofitting Effect Handlers onto OCaml — https://arxiv.org/pdf/2104.00250
[^release-cycle]: OCaml compiler release cycle — https://ocaml.org/tools/compiler-release-cycle
[^goblint-regress]: Goblint regression — https://github.com/ocaml/ocaml/issues/13733
[^ocaml-520]: OCaml 5.2.0 — https://ocaml.org/changelog/2024-05-13-ocaml-520
[^ocaml-530]: OCaml 5.3.0 — https://ocaml.org/changelog/2025-01-08-ocaml-530
[^ocaml-550]: OCaml 5.5.0 — https://ocaml.org/changelog/2026-06-19-ocaml-550
[^tsan]: Using ThreadSanitizer in OCaml — https://tarides.com/blog/2023-10-18-off-to-the-races-using-threadsanitizer-in-ocaml/
[^icfp25-js-docker]: Jane Street and Docker on OCaml 5 — https://anil.recoil.org/notes/icfp25-ocaml5-js-docker
[^js-oxcaml]: Introducing OxCaml — https://blog.janestreet.com/introducing-oxcaml/
