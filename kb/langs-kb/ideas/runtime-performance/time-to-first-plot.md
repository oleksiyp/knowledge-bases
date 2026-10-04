---
type: Idea
title: Time to first plot and Julia compilation latency
description: Julia 1.9 native-code caches and 1.10 loading improvements substantially reduced first-use latency;
  precompilation, cache coverage and startup remain separate costs.
area: runtime-performance
tags:
- runtime-performance
outcome: succeeding
maturity_2026: adopted
languages:
- languages/julia
runtimes:
- runtimes/julia-runtime
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: julia19
  title: Julia 1.9 Highlights, 9 May 2023
  resource: https://julialang.org/blog/2023/04/julia-1.9-highlights/
- id: julia110
  title: Julia 1.10 Highlights, 27 December 2023
  resource: https://julialang.org/blog/2023/12/julia-1.10-highlights/
- id: precompile
  title: 'PrecompileTools documentation: workload-driven compilation'
  resource: https://julialang.github.io/PrecompileTools.jl/stable/
---

# Summary
**Verdict: substantial measured improvement, not the elimination of latency.** Julia 1.9 cached native code, addressing work that earlier caches repeated in each session. Julia 1.10 then targeted package loading. The distinction matters: faster first execution does not necessarily make importing a large package instantaneous.[^julia19][^julia110]

# The idea
Measure at least three costs: installing/precompiling a package, loading it into a process, and executing a workload for the first time. A cache can move work from the third category into the first. That is useful for repeated sessions, but a fresh CI worker or deployment still pays the preparation cost.[^julia19][^precompile]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1–E2 | before 1.9 | Cached inference does not preserve all native code | limitation [^julia19] |
| E3 | 2023-05-09 | Julia 1.9 ships native-code caching | + [^julia19] |
| E3 | 2023-12-27 | Julia 1.10 highlights package-load improvements | + [^julia110] |
| E4 | ongoing practice | Packages provide representative precompile workloads | conditional benefit [^precompile] |

# Where it succeeded
The Julia 1.9 report's GLMakie example reduced first-execution time from 64.62 seconds in Julia 1.7 to 1.66 seconds in 1.9. Loading still took 9.47 seconds. This was a specific published benchmark, not a universal prediction for plotting packages.[^julia19]

Julia 1.10 addressed loading separately through reduced invalidations, type-system improvements and precompilable package extensions. It also coordinated concurrent precompilation through locking, avoiding duplicated work across processes.[^julia110]

# Where it failed or stalled
Julia 1.9's caches increased storage and precompilation cost; its report gives a 10–50% increase in precompilation time. The gain is an amortization tradeoff.[^julia19]

PrecompileTools requires useful workload coverage. Code paths absent from those workloads can still compile on first use, and invalidations can undo cached assumptions. Its documentation provides tools and patterns to detect and repair such issues.[^precompile]

# Why
**Synthesis:** preserving expensive work across sessions was more effective than expecting every user to maintain a custom application image. But the right metric depends on the product: a persistent scientific session, a classroom notebook, and a short-lived command-line tool experience different parts of the cost.

# Lessons
- Publish cold-install, cold-process and warm-execution measurements separately.
- Benchmark representative workloads, including imports.
- Treat latency improvements as independent evidence from language adoption.

# Related
- [Multiple dispatch](/ideas/metaprogramming/multiple-dispatch.md)
- [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md)
- [Julia runtime](/runtimes/julia-runtime.md)

[^julia19]: Julia 1.9 Highlights, 9 May 2023 — https://julialang.org/blog/2023/04/julia-1.9-highlights/
[^julia110]: Julia 1.10 Highlights, 27 December 2023 — https://julialang.org/blog/2023/12/julia-1.10-highlights/
[^precompile]: PrecompileTools documentation: workload-driven compilation — https://julialang.github.io/PrecompileTools.jl/stable/
