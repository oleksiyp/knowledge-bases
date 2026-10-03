---
type: Event
title: OCaml 5.0 ships multicore runtime and effect handlers
description: On 2022-12-16 OCaml 5.0 replaced OCaml's single-core runtime with a shared-memory parallel runtime (domains) and native effect handlers, after nearly a decade of Multicore OCaml work. It was the first industrial-strength language to ship effect handlers in its runtime.
event_kind: release
date: 2022-12-16
era: E3
impact: positive
languages: [languages/ocaml]
runtimes: [runtimes/ocaml-5-runtime]
ideas: [ideas/types/algebraic-effects-and-handlers, ideas/concurrency/multicore-ocaml-and-effects-based-concurrency]
tags: [ocaml, multicore, effect-handlers, gc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tarides-ocaml5
    resource: https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
    title: "Tarides: OCaml 5 with Multicore Support is Here!"
  - id: retrofit-effects
    resource: https://arxiv.org/pdf/2104.00250
    title: "Sivaramakrishnan et al.: Retrofitting Effect Handlers onto OCaml (PLDI 2021)"
  - id: goblint-regress
    resource: https://github.com/ocaml/ocaml/issues/13733
    title: "ocaml/ocaml issue #13733: Goblint performance regression 4.14 vs 5.3"
  - id: release-cycle
    resource: https://ocaml.org/tools/compiler-release-cycle
    title: "OCaml.org: The Compiler Release Cycle (4.14 LTS)"
  - id: icfp25-js-docker
    resource: https://anil.recoil.org/notes/icfp25-ocaml5-js-docker
    title: "Anil Madhavapeddy: Jane Street and Docker on moving to OCaml 5 at ICFP/SPLASH 2025"
---

# What happened
OCaml 5.0.0 was released on 2022-12-16. It included a completely rewritten runtime with a new concurrent garbage collector. Parallelism comes through *domains*, and concurrency comes through native *effect handlers*. Direct-style I/O libraries such as Eio were built on top.[^tarides-ocaml5] The design was published as "Retrofitting Effect Handlers onto OCaml" (PLDI 2021). A key goal was backward compatibility: existing sequential code and C stubs had to keep working.[^retrofit-effects]

# Why it matters
OCaml had been the textbook example of a language held back by a global runtime lock. 5.0 removed that limitation without forking the language. It also put effect handlers, a research idea since 2009, into the runtime of a language used in industry. The migration was slow. 5.0 dropped some platforms and gave up some performance for simplicity, so OCaml 4.14 became a long-term-support branch. Projects such as Goblint measured about a 14% slowdown on 5.3 compared with 4.14.[^release-cycle][^goblint-regress] By ICFP 2025, Jane Street reported its production servers running on the OCaml 5 runtime, and Docker Desktop was moving its networking stack to Eio.[^icfp25-js-docker]

# Related
- [OCaml](/languages/ocaml.md), [OCaml 5 runtime](/runtimes/ocaml-5-runtime.md)
- [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md)
- [Multicore OCaml and effects-based concurrency](/ideas/concurrency/multicore-ocaml-and-effects-based-concurrency.md)

[^tarides-ocaml5]: Tarides: OCaml 5 with Multicore Support is Here! — https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
[^retrofit-effects]: Retrofitting Effect Handlers onto OCaml — https://arxiv.org/pdf/2104.00250
[^goblint-regress]: Goblint performance regression 4.14 vs 5.3 — https://github.com/ocaml/ocaml/issues/13733
[^release-cycle]: OCaml compiler release cycle — https://ocaml.org/tools/compiler-release-cycle
[^icfp25-js-docker]: Jane Street and Docker on moving to OCaml 5 — https://anil.recoil.org/notes/icfp25-ocaml5-js-docker
