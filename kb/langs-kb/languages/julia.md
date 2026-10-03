---
type: Language
title: Julia
description: "Julia's multiple dispatch and JIT design succeeded technically and found a durable niche in scientific computing and SciML. It did not become the general 'Python replacement' early hype implied. It spent most of 2018–2026 fixing its biggest usability problem, latency ('time to first plot'), and its other weakness, small binaries. Verdict: stable niche, hovering near the TIOBE top 20."
tags: [julia, scientific-computing, multiple-dispatch, jit, llvm, sciml, latency, juliahub]
paradigms: [multi-paradigm, functional, array, multiple-dispatch]
typing: dynamic
memory_model: gc
first_released: 2012
steward: JuliaLang community (core contributors largely at JuliaHub and MIT)
governance: community
trajectory: niche
ideas: [ideas/metaprogramming/multiple-dispatch, ideas/runtime-performance/time-to-first-plot, ideas/runtime-performance/aot-native-images, ideas/platforms-and-portability/gpu-programming-languages]
runtimes: [runtimes/julia-runtime, runtimes/llvm]
adoption_signals:
  tiobe_rank: { value: 21, as_of: 2026-09 }
  tiobe_rating_pct: { value: 0.74, as_of: 2026-09 }
era_momentum: { E1: up, E2: flat, E3: up, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tiobe-2026-09
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026 (commentary on Julia nearing top 20)"
    author: org:tiobe
  - id: julia19
    resource: https://julialang.org/blog/2023/04/julia-1.9-highlights/
    title: "JuliaLang blog: Julia 1.9 Highlights (released 2023-05-09; package images)"
    author: org:julialang
  - id: julia110
    resource: https://julialang.org/blog/2023/12/julia-1.10-highlights/
    title: "JuliaLang blog: Julia 1.10 Highlights (Dec 2023)"
    author: org:julialang
  - id: julia111
    resource: https://discourse.julialang.org/t/julia-v1-11-0-has-been-released-and-v1-10-is-now-lts/121064
    title: "Julia Discourse: Julia v1.11.0 released and v1.10 is now LTS (Oct 2024)"
    author: org:julialang
  - id: lwn-julia112
    resource: https://lwn.net/Articles/1044280/
    title: "LWN: Julia 1.12 brings progress on standalone binaries and more"
  - id: julia113
    resource: https://discourse.julialang.org/t/julia-v1-13-0-has-been-released/139326
    title: "Julia Discourse: Julia v1.13.0 has been released (2026-09-10)"
    author: org:julialang
  - id: lwn-julia113
    resource: https://lwn.net/Articles/1093567/
    title: "LWN: Julia 1.13 released"
  - id: yuri
    resource: https://yuri.is/not-julia/
    title: "Yuri Vishnevsky: Why I no longer recommend Julia (May 2022)"
  - id: juliahub-13m
    resource: https://www.hpcwire.com/off-the-wire/juliahub-receives-13m-strategic-investment-from-ae-industrial-partners-horizonx/
    title: "HPCwire: JuliaHub Receives $13M Strategic Investment from AE Industrial Partners HorizonX (June 2023)"
  - id: iprog-julia112
    resource: https://www.i-programmer.info/news/98-languages/18431-julia-112-adds-trim-feature.html
    title: "I Programmer: Julia 1.12 Adds Trim Feature"
---

# Summary
Julia is the **most successful new dynamic language of the 2010s that still stayed niche**. Its central bet, multiple dispatch combined with type-specialising JIT compilation through LLVM, works. It produced unusually composable scientific libraries (DifferentialEquations.jl, the SciML ecosystem, CUDA.jl) and C-like speed for numerical code. It did not displace Python. TIOBE's September 2026 commentary says Julia "remains concentrated in relatively niche domains and has not yet managed to break through as a general-purpose programming language." Julia first entered the TIOBE top 20 in summer 2023 and was back at #21 (0.74%) in September 2026.[^tiobe-2026-09]

Most of Julia's 2018–2026 engineering went into **latency and deployment**:
- **1.9 (May 2023)** added package images. First-call times dropped by 39–137x for CSV, DataFrames and GLMakie, at the cost of 10–50% longer precompilation.[^julia19]
- **1.12 (Oct 2025)** shipped experimental `--trim` for small standalone binaries.[^lwn-julia112]
- **1.13 (Sept 2026)** focused on faster precompilation and startup.[^julia113][^lwn-julia113]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-11 | Julia 1.3: composable task-based multithreading | + |
| E2 | 2021-03 | Julia 1.6 LTS: parallel precompilation, big latency gains | + |
| E2 | 2022-05 | "Why I no longer recommend Julia": correctness and composability bugs [^yuri] | − |
| E3 | 2023-05-09 | Julia 1.9: native code caching (package images) [^julia19] | + |
| E3 | 2023-06-27 | JuliaHub raises $13M strategic investment (AE Industrial / Boeing-linked HorizonX) [^juliahub-13m] | + |
| E3 | 2023 (summer) | Julia enters the TIOBE top 20 for the first time [^tiobe-2026-09] | + |
| E3 | 2023-12 | Julia 1.10: JuliaSyntax parser, faster loading; later becomes LTS [^julia110] | + |
| E4 | 2024-10 | Julia 1.11: `Memory` type, `public` keyword; 1.10 becomes LTS [^julia111] | + |
| E4 | 2025-10 | Julia 1.12: experimental `--trim` (1.7 MB hello-world binary), struct redefinition [^lwn-julia112][^iprog-julia112] | + |
| E4 | 2026-09-10 | Julia 1.13: faster precompilation, REPL and juliaup improvements [^julia113][^lwn-julia113] | + |

# Ideas it bet on
| Idea | Outcome for Julia |
|---|---|
| [Multiple dispatch](/ideas/metaprogramming/multiple-dispatch.md) | succeeded inside Julia; not copied by mainstream languages |
| [Time to first plot](/ideas/runtime-performance/time-to-first-plot.md) | mostly fixed by 1.9–1.13 after a decade of complaints |
| [AOT / native images](/ideas/runtime-performance/aot-native-images.md) | experimental (`--trim`, JuliaC); restricted to code without dynamic dispatch |
| [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md) | CUDA.jl/AMDGPU.jl are strong niche successes |

# What succeeded
- **Composability.** Generic code plus multiple dispatch lets packages combine without coordination, for example autodiff through ODE solvers on GPUs. This is the main reason SciML chose Julia.
- **Performance model.** Type-stable Julia reaches C/Fortran speed, which solved the "two-language problem" for those who adopted it.
- **Latency engineering.** Package images and later work made the REPL-and-plot workflow tolerable.[^julia19]

# What failed or stalled
- **General adoption.** Python's AI ecosystem kept growing in exactly the years Julia was maturing, and Julia never became the default for ML.
- **Correctness of composition.** The same composability made it easy to combine packages whose assumptions conflict (for example, 1-based array indexing and aliasing). This was documented in the widely read 2022 critique.[^yuri]
- **Deployment.** Large runtimes and JIT warm-up kept Julia out of CLIs, serverless and embedded use until `--trim`. That remains experimental and bans dynamic dispatch.[^lwn-julia112]
- **Precompile cost.** Faster loading was bought with longer precompilation, a trade-off users still complain about.[^julia19]

# By era
## E1
Post-1.0 stabilisation and the threading model.
## E2
1.6 LTS. The correctness critique and its community response.
## E3
Package images, JuliaHub funding and the TIOBE top-20 moment.
## E4
`--trim` and binaries; precompilation speedups; a stable niche.

# Lessons
- A technically superior design for a niche does not beat an incumbent ecosystem once that ecosystem gets a new growth driver (AI for Python).
- JIT latency is a product problem, not only a compiler problem. It defined Julia's reputation for years.

# Related
- [Julia runtime](/runtimes/julia-runtime.md) · [Python](/languages/python.md) · [R](/languages/r.md) · [Mojo](/languages/mojo.md)
- [Julia 1.9 package images](/events/2023-05-julia-1-9-package-images.md)

[^tiobe-2026-09]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^julia19]: JuliaLang blog: Julia 1.9 Highlights — https://julialang.org/blog/2023/04/julia-1.9-highlights/
[^julia110]: JuliaLang blog: Julia 1.10 Highlights — https://julialang.org/blog/2023/12/julia-1.10-highlights/
[^julia111]: Julia Discourse: Julia v1.11.0 released — https://discourse.julialang.org/t/julia-v1-11-0-has-been-released-and-v1-10-is-now-lts/121064
[^lwn-julia112]: LWN: Julia 1.12 brings progress on standalone binaries — https://lwn.net/Articles/1044280/
[^julia113]: Julia Discourse: Julia v1.13.0 has been released — https://discourse.julialang.org/t/julia-v1-13-0-has-been-released/139326
[^lwn-julia113]: LWN: Julia 1.13 released — https://lwn.net/Articles/1093567/
[^yuri]: Yuri Vishnevsky: Why I no longer recommend Julia — https://yuri.is/not-julia/
[^juliahub-13m]: HPCwire: JuliaHub Receives $13M Strategic Investment — https://www.hpcwire.com/off-the-wire/juliahub-receives-13m-strategic-investment-from-ae-industrial-partners-horizonx/
[^iprog-julia112]: I Programmer: Julia 1.12 Adds Trim Feature — https://www.i-programmer.info/news/98-languages/18431-julia-112-adds-trim-feature.html
