---
type: Idea
title: Multicore OCaml and effects-based concurrency
description: Retrofit shared-memory parallelism (domains) and direct-style concurrency (effect handlers plus fibers) onto an existing GC'd functional runtime instead of adding async/await. It shipped in OCaml 5.0 (2022) and Eio 1.0 (2024), and was running in production at Jane Street and Docker by 2025. It worked, after a slow, regression-hit migration.
area: concurrency
tags: [ocaml, multicore, effect-handlers, fibers, eio, domains]
outcome: succeeded
maturity_2026: adopted
origin_year: 2014
mainstream_year: null
languages: [languages/ocaml]
runtimes: [runtimes/ocaml-5-runtime]
related_ideas: [ideas/types/algebraic-effects-and-handlers, ideas/concurrency/gil-removal-free-threading, ideas/concurrency/async-await-and-function-coloring, ideas/concurrency/virtual-threads, ideas/concurrency/data-race-safety-in-types]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: saga
    resource: https://www.janestreet.com/tech-talks/the-saga-of-multicore-ocaml/
    title: "Jane Street tech talk: The Saga of Multicore OCaml"
  - id: retrofit-effects
    resource: https://arxiv.org/pdf/2104.00250
    title: "Sivaramakrishnan et al.: Retrofitting Effect Handlers onto OCaml (PLDI 2021)"
  - id: tarides-ocaml5
    resource: https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
    title: "Tarides: OCaml 5 with Multicore Support is Here!"
  - id: eio-1
    resource: https://tarides.com/blog/2024-03-20-eio-1-0-release-introducing-a-new-effects-based-i-o-library-for-ocaml/
    title: "Tarides: Eio 1.0 Release"
  - id: goblint-regress
    resource: https://github.com/ocaml/ocaml/issues/13733
    title: "ocaml/ocaml #13733: Goblint performance regression 4.14 vs 5.3"
  - id: icfp25-js-docker
    resource: https://anil.recoil.org/notes/icfp25-ocaml5-js-docker
    title: "Anil Madhavapeddy: Jane Street and Docker on moving to OCaml 5 (ICFP/SPLASH 2025)"
  - id: js-oxcaml
    resource: https://blog.janestreet.com/introducing-oxcaml/
    title: "Jane Street Blog: Introducing OxCaml"
---

# Summary
**Verdict: succeeded.** OCaml spent about eight years (from roughly 2014) building a parallel runtime out of tree. It then upstreamed both parallelism (domains) and concurrency (one-shot effect handlers on heap-allocated fibers) in **OCaml 5.0 (2022-12-16)** without breaking sequential code.[^saga][^tarides-ocaml5][^retrofit-effects] **Eio 1.0** (Mar 2024) delivered direct-style async I/O with an io_uring backend and no monads.[^eio-1] By ICFP 2025 Jane Street ran production on the OCaml 5 runtime, and Docker Desktop was moving its networking to Eio.[^icfp25-js-docker] The costs were throughput regressions (Goblint about 14% slower on 5.3 than 4.14), a years-long 4.14 bridge, and no static data-race protection outside Jane Street's OxCaml.[^goblint-regress][^js-oxcaml]

# The idea
Mainstream languages solved concurrency with async/await (coloured functions) or OS threads. OCaml's team instead separated **parallelism** (domains, roughly one per core) from **concurrency** (effects: a scheduler is just a handler for `Fork`/`Yield`/`Suspend`). Any library can then write blocking-looking code that a user-level scheduler multiplexes, the same goal as Java's virtual threads but exposed as a language feature.[^retrofit-effects]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021-06 | PLDI 2021 retrofit paper [^retrofit-effects] | + |
| E3 | 2022-12-16 | OCaml 5.0 ships [^tarides-ocaml5] | + |
| E3 | 2024-03 | Eio 1.0 [^eio-1] | + |
| E4 | 2025 | Goblint reports ~14% regression vs 4.14 [^goblint-regress] | − |
| E4 | 2025-06 | OxCaml adds contention/portability modes for static race freedom [^js-oxcaml] | + |
| E4 | 2025-10 | Jane Street production on OCaml 5; Docker migrating to Eio [^icfp25-js-docker] | + |

# Where it succeeded
- One runtime offers both parallelism and direct-style concurrency, with no ecosystem split over sync and async.
- It is an existence proof for [GIL removal](/ideas/concurrency/gil-removal-free-threading.md)-style retrofits in other languages.

# Where it failed or stalled
- There are three concurrency libraries (Lwt, Async, Eio) instead of one, and migration is gradual.
- No static race checking in upstream OCaml. Data races are memory-safe ("bounded") but still bugs.[^js-oxcaml]
- Performance regressions delayed adoption by large analysers.[^goblint-regress]

# Why
Funded, patient stewardship (OCaml Labs, then Tarides, plus Jane Street) and an explicit backward-compatibility goal let a small community finish a runtime rewrite that larger ecosystems still find hard.[^saga][^tarides-ocaml5]

# Lessons
- Separate parallelism from concurrency, and make the scheduler a library.
- Budget years for performance parity after a runtime rewrite.

# Related
- [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md), [Virtual threads](/ideas/concurrency/virtual-threads.md), [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md)
- [OCaml](/languages/ocaml.md), [OCaml 5 runtime](/runtimes/ocaml-5-runtime.md), [OCaml 5.0 event](/events/2022-12-ocaml-5-multicore-effects.md)

[^saga]: The Saga of Multicore OCaml — https://www.janestreet.com/tech-talks/the-saga-of-multicore-ocaml/
[^retrofit-effects]: Retrofitting Effect Handlers onto OCaml — https://arxiv.org/pdf/2104.00250
[^tarides-ocaml5]: OCaml 5 with Multicore Support is Here — https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
[^eio-1]: Eio 1.0 — https://tarides.com/blog/2024-03-20-eio-1-0-release-introducing-a-new-effects-based-i-o-library-for-ocaml/
[^goblint-regress]: Goblint regression — https://github.com/ocaml/ocaml/issues/13733
[^icfp25-js-docker]: Jane Street and Docker on OCaml 5 — https://anil.recoil.org/notes/icfp25-ocaml5-js-docker
[^js-oxcaml]: Introducing OxCaml — https://blog.janestreet.com/introducing-oxcaml/
