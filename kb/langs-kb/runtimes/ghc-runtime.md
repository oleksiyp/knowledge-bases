---
type: Runtime
title: GHC and its runtime system
description: The Glasgow Haskell Compiler and its RTS (green threads, STM, generational GC). In 2018–2026 it added a low-latency non-moving GC, WebAssembly and JavaScript backends, native delimited continuations and an LTS policy. The Wasm backend became genuinely usable (Template Haskell, ghci, JSFFI), while the JS backend stayed a technology preview.
tags: [haskell, ghc, rts, green-threads, stm, gc, wasm, javascript-backend]
runtime_kind: compiler-backend
languages: [languages/haskell]
ideas: [ideas/types/linear-and-affine-types, ideas/types/algebraic-effects-and-handlers, ideas/runtime-performance/low-pause-gc, ideas/platforms-and-portability/webassembly-in-the-browser]
trajectory: stable
era_momentum: { E1: up, E2: flat, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: nonmoving-merge
    resource: https://well-typed.com/blog/2019/10/nonmoving-gc-merge/
    title: "Well-Typed: Low-latency garbage collector merged for GHC 8.10"
  - id: ghc-8101
    resource: https://www.haskell.org/ghc/blog/20200324-ghc-8.10.1-released.html
    title: "GHC blog: GHC 8.10.1 released (2020-03-24)"
  - id: alligator
    resource: https://github.com/well-typed/ismm-2020-nonmoving-gc
    title: "Well-Typed: Alligator Collector — A Latency-Optimized GC for Functional Languages (ISMM 2020)"
  - id: ghc-901
    resource: https://www.haskell.org/ghc/blog/20210204-ghc-9.0.1-released.html
    title: "GHC blog: GHC 9.0.1 is now available"
  - id: wasm-merged
    resource: https://www.tweag.io/blog/2022-11-22-wasm-backend-merged-in-ghc/
    title: "Tweag: WebAssembly backend merged into GHC"
  - id: js-merged
    resource: https://engineering.iog.io/2022-12-13-ghc-js-backend-merged/
    title: "IOG Engineering: JavaScript backend merged into GHC"
  - id: js-preview
    resource: https://mmhaskell.com/blog/2023/3/13/ghc-961-includes-javascript-backend
    title: "Monday Morning Haskell: GHC 9.6.1 includes JavaScript backend"
  - id: delcont
    resource: https://ghc-proposals.readthedocs.io/en/latest/proposals/0313-delimited-continuation-primops.html
    title: "GHC proposal #313: Delimited continuation primops"
  - id: wasm-th
    resource: https://www.tweag.io/blog/2024-11-21-wasm-th-ghci/
    title: "Tweag: GHC's wasm backend now supports Template Haskell and ghci (2024-11-21)"
  - id: wasm-browser-ghci
    resource: https://www.tweag.io/blog/2025-04-17-wasm-ghci-browser/
    title: "Tweag: Frontend live-coding via ghci (2025-04-17)"
  - id: ghc-lts
    resource: https://www.haskell.org/ghc/blog/20250702-ghc-release-schedules.html
    title: "GHC blog: GHC LTS Releases"
  - id: ghc-914
    resource: https://www.haskell.org/ghc/blog/20251219-ghc-9.14.1-released.html
    title: "GHC blog: GHC 9.14.1 is now available"
  - id: ghc-10-alpha
    resource: https://www.haskell.org/ghc/blog/20260918-ghc-10.0.1-alpha1-released.html
    title: "GHC blog: GHC 10.0.1-alpha1 is now available"
  - id: ghc-js-size
    resource: https://discourse.haskell.org/t/ghc-js-backend-improve-compiled-size/12098
    title: "Haskell Discourse: GHC JS Backend — Improve compiled size"
---

# Summary
GHC is effectively the only Haskell implementation. Its runtime system (RTS) has long been strong at lightweight concurrency: M:N green threads, software transactional memory and an event-driven I/O manager. In 2018–2026 the work went in four directions. (1) **Latency:** a non-moving old-generation collector (GHC 8.10, 2020), funded by Standard Chartered.[^nonmoving-merge][^ghc-8101][^alligator] (2) **New targets:** WebAssembly and JavaScript backends were merged in late 2022 and shipped in 9.6 (2023).[^wasm-merged][^js-merged] (3) **Effects:** native delimited-continuation primops in 9.6 for effect libraries.[^delcont] (4) **Stability:** a formal LTS policy, with 9.14 as the first LTS, then GHC 10 (alpha, Sept 2026).[^ghc-lts][^ghc-914][^ghc-10-alpha] **Verdict: stable, steadily improving engineering on a shrinking base.** The Wasm backend was the clear success. The JS backend stayed a tech preview that most users must build themselves.[^js-preview]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-10 | Non-moving low-latency GC merged for 8.10 (Well-Typed / Standard Chartered) [^nonmoving-merge] | + |
| E1 | 2020-03-24 | GHC 8.10.1 ships `--nonmoving-gc` [^ghc-8101] | + |
| E2 | 2021-02-04 | GHC 9.0.1: LinearTypes in the type checker [^ghc-901] | mixed |
| E3 | 2022-11/12 | Wasm backend (Tweag) and JS backend (IOG) merged [^wasm-merged][^js-merged] | + |
| E3 | 2023-03 | GHC 9.6: both backends as tech previews; delimited-continuation primops [^js-preview][^delcont] | + |
| E4 | 2024-11-21 | Wasm backend gets Template Haskell and ghci [^wasm-th] | + |
| E4 | 2025-04 | ghci in the browser via Wasm [^wasm-browser-ghci] | + |
| E4 | 2025-12-19 | GHC 9.14.1, first LTS release [^ghc-914] | + |
| E4 | 2026-09-18 | GHC 10.0.1-alpha1: AArch64 SIMD, bytecode libraries, fully static linking [^ghc-10-alpha] | + |

# Ideas it bet on
| Idea | Outcome for GHC |
|---|---|
| [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md) | Mixed. The non-moving GC exists but is opt-in, with known fragmentation trade-offs [^alligator] |
| [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md) | Succeeding. The Wasm backend reached TH, ghci and JSFFI [^wasm-th] |
| [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md) | RTS-level continuations available; few libraries use them |
| [Linear and affine types](/ideas/types/linear-and-affine-types.md) | Front-end only; Core does not check linearity |

# What succeeded
- **The Wasm backend** went from merge (2022) to Template Haskell and ghci support (2024) to browser live-coding (2025). It is now the most promising route for Haskell on the front end.[^wasm-merged][^wasm-th][^wasm-browser-ghci]
- **The LTS policy** answered long-standing corporate complaints about upgrade churn.[^ghc-lts]
- **Funded engineering.** IOG (JS backend), Tweag (Wasm, linear types), Well-Typed and Standard Chartered (GC) showed that industry-sponsored compiler work can keep a community compiler moving.[^js-merged][^nonmoving-merge]

# What failed or stalled
- **The JS backend** is still a technology preview. It is not in release bindists, does not support Template Haskell, and produces large output, so GHCJS users saw a long gap.[^js-preview][^ghc-js-size]
- **The non-moving GC** never became the default, so most deployments still face the copying collector's pause times.[^alligator]
- **Compile times and memory use** remain chronic complaints. GHC 10's work on specialisation and bytecode libraries targets them only partly.[^ghc-10-alpha]

# By era
## E1
Non-moving GC; GHC 8.x stability.[^nonmoving-merge]
## E2
GHC 9.0 (linear types) and 9.2 (GHC2021).[^ghc-901]
## E3
New backends and delimited continuations in 9.6.[^wasm-merged][^delcont]
## E4
Wasm maturity, 9.12 and the 9.14 LTS, GHC 10 alpha.[^wasm-th][^ghc-914][^ghc-10-alpha]

# Lessons
- Compiling to Wasm is a cheaper way into the browser for a GC'd language than maintaining a separate JS backend.
- Runtime features without a safe high-level API (delimited continuations) take years to reach users.

# Related
- [Haskell](/languages/haskell.md), [OCaml 5 runtime](/runtimes/ocaml-5-runtime.md), [BEAM](/runtimes/beam.md)
- [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md)

[^nonmoving-merge]: Low-latency GC merged for GHC 8.10 — https://well-typed.com/blog/2019/10/nonmoving-gc-merge/
[^ghc-8101]: GHC 8.10.1 released — https://www.haskell.org/ghc/blog/20200324-ghc-8.10.1-released.html
[^alligator]: Alligator Collector (ISMM 2020) — https://github.com/well-typed/ismm-2020-nonmoving-gc
[^ghc-901]: GHC 9.0.1 — https://www.haskell.org/ghc/blog/20210204-ghc-9.0.1-released.html
[^wasm-merged]: WebAssembly backend merged into GHC — https://www.tweag.io/blog/2022-11-22-wasm-backend-merged-in-ghc/
[^js-merged]: JavaScript backend merged into GHC — https://engineering.iog.io/2022-12-13-ghc-js-backend-merged/
[^js-preview]: GHC 9.6.1 includes JavaScript backend — https://mmhaskell.com/blog/2023/3/13/ghc-961-includes-javascript-backend
[^delcont]: GHC proposal #313 — https://ghc-proposals.readthedocs.io/en/latest/proposals/0313-delimited-continuation-primops.html
[^wasm-th]: Wasm backend supports TH and ghci — https://www.tweag.io/blog/2024-11-21-wasm-th-ghci/
[^wasm-browser-ghci]: Frontend live-coding via ghci — https://www.tweag.io/blog/2025-04-17-wasm-ghci-browser/
[^ghc-lts]: GHC LTS Releases — https://www.haskell.org/ghc/blog/20250702-ghc-release-schedules.html
[^ghc-914]: GHC 9.14.1 — https://www.haskell.org/ghc/blog/20251219-ghc-9.14.1-released.html
[^ghc-10-alpha]: GHC 10.0.1-alpha1 — https://www.haskell.org/ghc/blog/20260918-ghc-10.0.1-alpha1-released.html
[^ghc-js-size]: GHC JS Backend: Improve compiled size — https://discourse.haskell.org/t/ghc-js-backend-improve-compiled-size/12098
