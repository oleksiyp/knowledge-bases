---
type: Idea
title: Algebraic effects and handlers
description: Treat side effects (I/O, state, exceptions, async, generators) as operations that a surrounding handler interprets, with resumable continuations. Between 2018 and 2026 the idea moved from research into OCaml 5's runtime, Unison 1.0, Huawei's Cangjie and the Wasm stack-switching proposal. Typed effect systems stayed niche, and mainstream languages adopted only pieces of it (virtual threads, async, effect libraries).
area: types
tags: [effects, handlers, continuations, concurrency, ocaml, koka, unison, effekt, flix]
outcome: mixed
maturity_2026: adopted
origin_year: 2009
mainstream_year: null
languages: [languages/ocaml, languages/koka, languages/unison, languages/flix, languages/haskell, languages/scala, languages/typescript]
runtimes: [runtimes/ocaml-5-runtime, runtimes/ghc-runtime, runtimes/wasmtime]
related_ideas: [ideas/concurrency/multicore-ocaml-and-effects-based-concurrency, ideas/concurrency/async-await-and-function-coloring, ideas/concurrency/virtual-threads, ideas/types/perceus-and-reference-counting-fp]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: plotkin-pretnar
    resource: https://dl.acm.org/doi/10.1007/978-3-642-00590-9_7
    title: "Plotkin & Pretnar: Handlers of Algebraic Effects (ESOP 2009)"
  - id: eff-tutorial
    resource: https://www.eff-lang.org/handlers-tutorial.pdf
    title: "Pretnar: An Introduction to Algebraic Effects and Handlers (Eff tutorial)"
  - id: abramov
    resource: https://news.ycombinator.com/item?id=20496043
    title: "Hacker News discussion: Dan Abramov, Algebraic Effects for the Rest of Us (overreacted.io, 2019)"
  - id: retrofit-effects
    resource: https://arxiv.org/pdf/2104.00250
    title: "Sivaramakrishnan et al.: Retrofitting Effect Handlers onto OCaml (PLDI 2021)"
  - id: tarides-ocaml5
    resource: https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
    title: "Tarides: OCaml 5 with Multicore Support is Here!"
  - id: ocaml-530
    resource: https://ocaml.org/changelog/2025-01-08-ocaml-530
    title: "OCaml Changelog: OCaml 5.3.0 (effect syntax)"
  - id: eio-1
    resource: https://tarides.com/blog/2024-03-20-eio-1-0-release-introducing-a-new-effects-based-i-o-library-for-ocaml/
    title: "Tarides: Eio 1.0 Release"
  - id: koka-lwn
    resource: https://lwn.net/Articles/1033050/
    title: "LWN: The Koka programming language (2025)"
  - id: unison-1
    resource: https://www.unison-lang.org/unison-1-0/
    title: "Unison: Announcing Unison 1.0 (2025-11)"
  - id: effekt-2025
    resource: https://2025.programming-conference.org/home/effekt-2025
    title: "‹Programming› 2025: Effekt — Lexical Effect Handlers in Action"
  - id: effekt-pubs
    resource: https://effekt-lang.org/publications
    title: "Effekt Language: Research Papers"
  - id: flix-effects
    resource: https://doc.flix.dev/effects-and-handlers.html
    title: "Programming Flix: Effects and Handlers"
  - id: cangjie-infoq
    resource: https://www.infoq.com/news/2026/05/cangjie-effect-handlers-adt/
    title: "InfoQ: Cangjie, a New Open-Source Compiled Language with Native Effect Handlers (2026-05)"
  - id: wasmfx
    resource: http://wasmfx.dev/
    title: "WasmFX: Effect Handlers for WebAssembly"
  - id: wasmfx-wasmtime
    resource: https://effect-handlers.org/talks/wasmfx-waw2025.pdf
    title: "Emrich & Hillerström: Continuing Stack Switching in Wasmtime (WAW 2025)"
  - id: ghc-delcont
    resource: https://ghc-proposals.readthedocs.io/en/latest/proposals/0313-delimited-continuation-primops.html
    title: "GHC proposal #313: Delimited continuation primops (GHC 9.6)"
  - id: hs-effect-libs
    resource: https://discourse.haskell.org/t/bluefin-a-new-effect-system/9395
    title: "Haskell Discourse: Bluefin, a new effect system"
  - id: heftia
    resource: https://hackage.haskell.org/package/heftia-effects
    title: "Hackage: heftia-effects (higher-order algebraic effects)"
  - id: zio2
    resource: https://degoes.net/articles/zio-2.0
    title: "John De Goes: ZIO 2.0 Released (2022-06-24)"
  - id: effect-ts-3
    resource: https://effect.website/blog/releases/effect/30
    title: "Effect (TypeScript): Effect 3.0 release (2024-04)"
---

# Summary
**Verdict: mixed. It succeeded as a runtime mechanism and a research paradigm, and it is unproven as a mainstream typed-language feature.** The theory dates from Plotkin and Pretnar (2009).[^plotkin-pretnar] Over 2018–2026 effect handlers went from Eff and Koka papers into the **OCaml 5 runtime** (2022), the main concurrency substrate of a language used in industry (Jane Street, Docker, Tarides).[^tarides-ocaml5][^retrofit-effects] **Unison** reached 1.0 with "abilities" at its core (Nov 2025).[^unison-1] Huawei's **Cangjie** brought `perform`/`resume` to a language taught at more than 80 Chinese universities, though handlers are still experimental there.[^cangjie-infoq] The **Wasm stack-switching** proposal (WasmFX) uses effect handlers as its core abstraction.[^wasmfx] No top-10 language ships user-facing handlers. What reached the mainstream was narrower: one-shot continuations under the hood (Java virtual threads, OCaml fibers), async/await, and *library* effect systems (ZIO, Cats Effect, Effect-TS, Haskell's effectful/bluefin) that encode effects monadically.[^zio2][^effect-ts-3][^hs-effect-libs]

# The idea
An effect handler is a generalised exception handler. Code *performs* an operation (`ask`, `yield`, `read`, `await`), and the nearest enclosing handler decides what it means. Unlike an exception, the handler can *resume* the computation with a value.[^eff-tutorial] One mechanism covers exceptions, generators, async/await, coroutines, dependency injection, mocking and nondeterminism. Two flavours matter:
- **Untyped or runtime effects** (OCaml 5): an unhandled effect is a runtime error. Cheap to retrofit.[^retrofit-effects]
- **Typed effects** (Koka row types, Effekt capabilities, Flix and Unison abilities): a function's type lists the effects it may perform, which gives purity tracking and safe handler composition.[^koka-lwn][^effekt-2025][^flix-effects]

The problem it solves is **function colouring**: async/await splits libraries into sync and async halves, while handler-based concurrency keeps direct-style code (see [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md)). React's team cited it as the inspiration for hooks and Suspense, which spread the concept to front-end developers.[^abramov]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-07 | Dan Abramov's "Algebraic Effects for the Rest of Us" popularises the idea [^abramov] | + |
| E2 | 2021-06 | "Retrofitting Effect Handlers onto OCaml" (PLDI 2021) [^retrofit-effects] | + |
| E2 | 2022-06-24 | ZIO 2.0: monadic effect system, "third-generation" runtime [^zio2] | mixed |
| E3 | 2022-12-16 | OCaml 5.0 ships effect handlers in the runtime [^tarides-ocaml5] | + |
| E3 | 2023-03 | GHC 9.6 delimited-continuation primops for effect libraries [^ghc-delcont] | + |
| E3 | 2024-03 | Eio 1.0: direct-style effects-based I/O [^eio-1] | + |
| E3 | 2024-04 | Effect-TS 3.0 stable: ZIO-style effects in TypeScript [^effect-ts-3] | + |
| E3 | 2024-08 | Wasm stack switching (WasmFX) reaches Phase 2 [^wasmfx-wasmtime] | + |
| E4 | 2025-01-08 | OCaml 5.3 adds `effect` syntax for deep handlers [^ocaml-530] | + |
| E4 | 2025-06 | Effekt tutorial at ‹Programming› 2025; ICFP/OOPSLA papers incl. tracing JIT for handlers [^effekt-2025][^effekt-pubs] | + |
| E4 | 2025-11-25 | Unison 1.0 with abilities [^unison-1] | + |
| E4 | 2026-05 | InfoQ: Cangjie open-source with native (experimental) handlers [^cangjie-infoq] | + |

# Where it succeeded
- **As a concurrency substrate.** OCaml 5 and Eio show that effects can replace monadic async (Lwt/Async) with direct style and an io_uring backend.[^eio-1]
- **As a compilation target.** WasmFX uses handlers to compile async/await, generators and green threads from many source languages onto one Wasm primitive. A Wasmtime implementation exists, and a Phase 3 vote was planned.[^wasmfx][^wasmfx-wasmtime]
- **In new languages.** Unison, Koka, Effekt, Flix and Cangjie all treat handlers as a core feature.[^unison-1][^flix-effects][^cangjie-infoq]
- **As a library pattern.** ZIO, Cats Effect, Effect-TS and Haskell's effectful/bluefin brought effect *tracking* to Scala and TypeScript teams without language changes.[^zio2][^effect-ts-3]

# Where it failed or stalled
- **There are no typed effect handlers in a top-20 language.** OCaml deliberately shipped untyped effects, and typed effects for OCaml are still research.[^ocaml-530]
- **Haskell's effect libraries are fragmented.** By late 2024 only heftia combined higher-order and algebraic (continuation-capturing) effects. effectful, bluefin, polysemy and fused-effects each make different trade-offs, and there is no standard.[^heftia][^hs-effect-libs]
- **Ergonomics.** Effect-row types confuse newcomers. LWN described Koka as having no notable production programs.[^koka-lwn]
- **Mainstream languages chose narrower tools.** Java chose virtual threads, and C#, JS, Python, Rust and Swift chose async/await. They kept continuations internal rather than exposing handlers.

# Why
1. **Retrofit cost.** Typed effects change every function signature, much like checked exceptions, which Java developers came to dislike. Untyped runtime effects (OCaml) or library encodings (ZIO, Effect-TS) avoid the migration, so they shipped first.
2. **Performance only recently solved.** Efficient one-shot continuations (OCaml fibers, Koka's evidence passing, Wasm stack switching) took most of the 2010s. Until then handlers looked like a research curiosity.[^retrofit-effects][^wasmfx]
3. **Async/await got there first.** By 2018 C#, JS, Python and Rust had standardised async/await. Handlers solve function colouring more cleanly, but replacing async/await would split ecosystems again.
4. **Champions matter.** OCaml had Tarides and Jane Street, and Unison had a funded company. Koka and Effekt are academic projects. Adoption followed the money.

# Lessons
- Ship the runtime mechanism first (continuations) and the type discipline later. OCaml's order worked.
- One abstraction for exceptions, generators, async and DI is very appealing, but only to languages young enough to build around it.
- Watch Wasm: if stack switching standardises, effect handlers could become the common runtime substrate for many languages, even ones that never expose them.

# Related
- [Multicore OCaml and effects-based concurrency](/ideas/concurrency/multicore-ocaml-and-effects-based-concurrency.md)
- [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md), [Virtual threads](/ideas/concurrency/virtual-threads.md)
- [OCaml](/languages/ocaml.md), [Koka](/languages/koka.md), [Unison](/languages/unison.md), [Flix](/languages/flix.md), [Haskell](/languages/haskell.md), [Scala](/languages/scala.md)
- [OCaml 5.0 event](/events/2022-12-ocaml-5-multicore-effects.md)

[^plotkin-pretnar]: Handlers of Algebraic Effects (ESOP 2009) — https://dl.acm.org/doi/10.1007/978-3-642-00590-9_7
[^eff-tutorial]: An Introduction to Algebraic Effects and Handlers — https://www.eff-lang.org/handlers-tutorial.pdf
[^abramov]: Algebraic Effects for the Rest of Us (HN) — https://news.ycombinator.com/item?id=20496043
[^retrofit-effects]: Retrofitting Effect Handlers onto OCaml — https://arxiv.org/pdf/2104.00250
[^tarides-ocaml5]: OCaml 5 with Multicore Support is Here — https://tarides.com/blog/2022-12-19-ocaml-5-with-multicore-support-is-here/
[^ocaml-530]: OCaml 5.3.0 — https://ocaml.org/changelog/2025-01-08-ocaml-530
[^eio-1]: Eio 1.0 — https://tarides.com/blog/2024-03-20-eio-1-0-release-introducing-a-new-effects-based-i-o-library-for-ocaml/
[^koka-lwn]: LWN: Koka — https://lwn.net/Articles/1033050/
[^unison-1]: Announcing Unison 1.0 — https://www.unison-lang.org/unison-1-0/
[^effekt-2025]: Effekt 2025 tutorial — https://2025.programming-conference.org/home/effekt-2025
[^effekt-pubs]: Effekt publications — https://effekt-lang.org/publications
[^flix-effects]: Flix: Effects and Handlers — https://doc.flix.dev/effects-and-handlers.html
[^cangjie-infoq]: InfoQ: Cangjie — https://www.infoq.com/news/2026/05/cangjie-effect-handlers-adt/
[^wasmfx]: WasmFX — http://wasmfx.dev/
[^wasmfx-wasmtime]: Continuing Stack Switching in Wasmtime — https://effect-handlers.org/talks/wasmfx-waw2025.pdf
[^ghc-delcont]: GHC proposal #313 — https://ghc-proposals.readthedocs.io/en/latest/proposals/0313-delimited-continuation-primops.html
[^hs-effect-libs]: Bluefin, a new effect system — https://discourse.haskell.org/t/bluefin-a-new-effect-system/9395
[^heftia]: heftia-effects — https://hackage.haskell.org/package/heftia-effects
[^zio2]: ZIO 2.0 Released — https://degoes.net/articles/zio-2.0
[^effect-ts-3]: Effect 3.0 — https://effect.website/blog/releases/effect/30
