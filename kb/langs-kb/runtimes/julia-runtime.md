---
type: Runtime
title: Julia runtime (LLVM-based JIT)
description: "Julia's runtime compiles each method for its concrete argument types through LLVM. It gives C-class peak speed for dynamic code but suffered notorious first-call latency. 2018–2026 was a sustained latency campaign: parallel precompilation, native code caching (1.9), 2x faster package loading (1.10), trimmed static binaries (1.12) and faster precompilation (1.13). It largely worked, but the costs moved to precompile time and binary size."
tags: [julia, jit, llvm, method-specialization, precompilation, pkgimages, gc, threads, juliac, trim]
runtime_kind: jit
languages: [languages/julia]
ideas: [ideas/runtime-performance/time-to-first-plot, ideas/metaprogramming/multiple-dispatch, ideas/runtime-performance/aot-native-images, ideas/runtime-performance/startup-snapshotting]
trajectory: growing
steward: JuliaLang core contributors (JuliaHub, MIT and community)
governance: community
era_momentum: { E1: up, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: julia13-threads
    resource: https://julialang.org/blog/2019/07/multithreading/
    title: "JuliaLang blog: Announcing composable multi-threaded parallelism in Julia (July 2019)"
    author: org:julialang
  - id: julia19
    resource: https://julialang.org/blog/2023/04/julia-1.9-highlights/
    title: "JuliaLang blog: Julia 1.9 Highlights (package images)"
    author: org:julialang
  - id: julia110
    resource: https://julialang.org/blog/2023/12/julia-1.10-highlights/
    title: "JuliaLang blog: Julia 1.10 Highlights (parallel GC, 2x faster loading)"
    author: org:julialang
  - id: julia111-blog
    resource: https://julialang.org/blog/2024/10/julia-1.11-highlights/
    title: "JuliaLang blog: Julia 1.11 Highlights (Memory type)"
    author: org:julialang
  - id: lwn-julia112
    resource: https://lwn.net/Articles/1044280/
    title: "LWN: Julia 1.12 brings progress on standalone binaries and more"
  - id: julia113
    resource: https://discourse.julialang.org/t/julia-v1-13-0-has-been-released/139326
    title: "Julia Discourse: Julia v1.13.0 has been released (2026-09-10)"
    author: org:julialang
  - id: precompiletools
    resource: https://github.com/JuliaLang/PrecompileTools.jl
    title: "GitHub: PrecompileTools.jl"
    author: org:julialang
  - id: packagecompiler
    resource: https://julialang.github.io/PackageCompiler.jl/dev/examples/plots.html
    title: "PackageCompiler.jl: Creating a sysimage for fast plotting"
    author: org:julialang
---

# Summary
Julia's runtime is a **"just-ahead-of-time" method compiler**. The first time a function is called with a new combination of concrete argument types, it is type-inferred and compiled through LLVM, and that native code is reused afterwards. This is what makes multiple dispatch fast. It also caused Julia's biggest usability problem, "time to first plot" (TTFP): loading Plots and drawing one chart once took tens of seconds.[^packagecompiler]

From 2018 to 2026 the runtime team worked steadily on that problem:
- **Julia 1.3 (2019):** composable task-based threading.[^julia13-threads]
- **Julia 1.9 (May 2023):** native code caching in package images. TTFX fell from 11.66s to 0.08s for CSV and from 64.62s to 1.66s for GLMakie, at the cost of 10–50% more precompile time.[^julia19]
- **Julia 1.10 (Dec 2023):** parallel GC marking and 2.4x faster loading of about 650 packages (48s → 19s).[^julia110]
- **Julia 1.11 (Oct 2024):** `Memory`, a lower-level array backing type.[^julia111-blog]
- **Julia 1.12 (Oct 2025):** experimental `--trim` producing a 1.7 MB hello-world binary, plus an interactive thread by default.[^lwn-julia112]
- **Julia 1.13 (Sept 2026):** faster precompilation.[^julia113]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-07/11 | Composable multithreading (partr), shipped in 1.3 [^julia13-threads] | + |
| E2 | 2021-03 | 1.6 LTS: parallel precompilation, large latency cuts | + |
| E3 | 2023-05-09 | 1.9: package images (native code caching) [^julia19] | + |
| E3 | 2023-12 | 1.10: parallel GC mark, 2.4x faster loading, LLVM 15 [^julia110] | + |
| E4 | 2024-10 | 1.11: `Memory` type, Array reimplemented in Julia [^julia111-blog] | + |
| E4 | 2025-10 | 1.12: `--trim` and JuliaC (experimental), struct redefinition [^lwn-julia112] | + |
| E4 | 2026-09-10 | 1.13: faster precompilation [^julia113] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [Time to first plot](/ideas/runtime-performance/time-to-first-plot.md) | largely solved for loading; precompile cost remains |
| [Multiple dispatch](/ideas/metaprogramming/multiple-dispatch.md) | the runtime's core reason to exist |
| [AOT native images](/ideas/runtime-performance/aot-native-images.md) | `--trim` experimental; forbids dynamic dispatch |
| [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md) | sysimages and pkgimages are snapshot-like caches |

# What succeeded
- **Caching native code per package.** This is the decisive TTFP fix. It made the cost one-time per install instead of per session.[^julia19]
- **Tooling for authors.** PrecompileTools lets package authors pre-bake common call signatures, which spread the fix across the ecosystem.[^precompiletools]
- **Parallel GC and threading.** Moved Julia beyond single-threaded scientific scripts.[^julia110]

# What failed or stalled
- **Precompile time and invalidations.** Caching more native code made installs and updates slower. Invalidations (new methods that make cached code stale) are an ongoing tax that comes from the language's openness.[^julia19]
- **Small, static deployables.** Until 1.12, the only route was PackageCompiler sysimages of hundreds of MB. `--trim` is still experimental and restricted.[^lwn-julia112]

# By era
## E1
Threading.
## E2
1.6 LTS latency work.
## E3
pkgimages and parallel GC.
## E4
`Memory`, `--trim`, faster precompilation.

# Lessons
- A specialising JIT for an open, multiple-dispatch language needs a persistent code cache. Without one, startup cost dominates the user's experience.
- Moving cost from run time to install time is a good trade only if installs are rare. CI-heavy users feel the other side.

# Related
- [Julia](/languages/julia.md) · [Time to first plot](/ideas/runtime-performance/time-to-first-plot.md) · [LLVM](/runtimes/llvm.md)

[^julia13-threads]: JuliaLang blog: Announcing composable multi-threaded parallelism — https://julialang.org/blog/2019/07/multithreading/
[^julia19]: JuliaLang blog: Julia 1.9 Highlights — https://julialang.org/blog/2023/04/julia-1.9-highlights/
[^julia110]: JuliaLang blog: Julia 1.10 Highlights — https://julialang.org/blog/2023/12/julia-1.10-highlights/
[^julia111-blog]: JuliaLang blog: Julia 1.11 Highlights — https://julialang.org/blog/2024/10/julia-1.11-highlights/
[^lwn-julia112]: LWN: Julia 1.12 — https://lwn.net/Articles/1044280/
[^julia113]: Julia Discourse: Julia v1.13.0 — https://discourse.julialang.org/t/julia-v1-13-0-has-been-released/139326
[^precompiletools]: GitHub: PrecompileTools.jl — https://github.com/JuliaLang/PrecompileTools.jl
[^packagecompiler]: PackageCompiler.jl: Creating a sysimage for fast plotting — https://julialang.github.io/PackageCompiler.jl/dev/examples/plots.html
