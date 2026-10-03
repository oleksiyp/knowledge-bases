---
type: Idea
title: Interaction nets and automatic parallelism
description: "Run ordinary functional programs on a graph-rewriting model (Lafont's interaction nets) whose local, confluent rewrites can execute in parallel with no programmer annotations, as in HVM and Bend. 2018–2026 verdict: a striking demo (closures and recursion on GPUs with near-linear scaling) that failed on absolute performance. By 2026 its main carrier, Bend, had dropped the HVM runtime for a conventional compiler. Explicit data-parallel models (CUDA, Triton, JAX, Futhark) kept winning."
area: runtime-performance
tags: [interaction-nets, automatic-parallelism, optimal-reduction, gpu, hvm, bend, hype-cycle]
outcome: failed
maturity_2026: experimental
origin_year: 1990
mainstream_year: null
languages: [languages/bend-hvm, languages/futhark-and-array-languages, languages/haskell]
runtimes: []
related_ideas: [ideas/platforms-and-portability/gpu-programming-languages, ideas/runtime-performance/ml-compilers-and-mlir, ideas/ai-and-languages/languages-designed-for-llms]
era_momentum: { E1: flat, E2: up, E3: up, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: lafont-1990
    resource: https://dl.acm.org/doi/10.1145/96709.96718
    title: "Yves Lafont: Interaction Nets (POPL 1990)"
  - id: hvm-gh
    resource: https://github.com/HigherOrderCO/HVM
    title: "GitHub: HigherOrderCO/HVM (HVM2 README and paper)"
  - id: bend-gh
    resource: https://github.com/HigherOrderCO/Bend
    title: "GitHub: HigherOrderCO/Bend (Bend 2 README)"
  - id: hn-bend
    resource: https://news.ycombinator.com/item?id=40390287
    title: "Hacker News: Bend — a high-level language that runs on GPUs (via HVM2), 2024-05-17"
  - id: speedfox-bend
    resource: https://blog.speedfox.co.uk/
    title: "Speedfox blog: Breaking Bend — Benchmarking the HVM (2024-09-03)"
  - id: hoc-gist
    resource: https://gist.github.com/VictorTaelin/77fd5a2a8a4a07e1da6157ebca3c7cf1
    title: "Victor Taelin: Higher Order Company — Historical Overview (gist)"
  - id: taelin-hvm3
    resource: https://x.com/VictorTaelin/status/1856862695028339065
    title: "Taelin (X): HVM3 compiler up to 2400 MIPS single-core (2024-11)"
  - id: taelin-hvm4
    resource: https://x.com/VictorTaelin/status/1985320306001477783
    title: "Taelin (X): HVM4 compiles Interaction Calculus to machine code; HVM2 always interpreted"
  - id: taelin-postseed
    resource: https://x.com/VictorTaelin/status/1885328571410853951
    title: "Taelin (X): HOC post-seed for SupGen / ARC-AGI (2025)"
  - id: akita-bend2
    resource: https://akitaonrails.com/en/2026/09/19/new-ai-language-just-released-bend-2/
    title: "AkitaOnRails: Bend 2 review (2026-09-19)"
  - id: julia-discourse-bend
    resource: https://discourse.julialang.org/t/bend-a-new-gpu-native-language/114440
    title: "Julia Discourse: Bend — a new GPU-native language (2024)"
  - id: futhark
    resource: https://futhark-lang.org/
    title: "Futhark: a data-parallel functional language"
---

# Summary
**Failed (for now).** Interaction nets promised the holy grail of parallel programming: write ordinary recursive, higher-order code and have the runtime extract all the parallelism, because every rewrite is local and order-independent.[^lafont-1990] HVM2 and the Bend language (Higher Order Company, launched 2024-05-17) were the first to run this model at scale on GPUs, with closures and unrestricted recursion. Near-linear speedup to thousands of threads was real.[^hvm-gh][^hn-bend] But the *baseline* was very slow. Single-threaded Bend took 42+ minutes on a sum that PyPy ran in 4.5 s; numbers were 24-bit; there were no arrays with O(1) indexing and no FFI. Independent benchmarks found Go faster than Bend even when Bend used every core.[^hn-bend][^speedfox-bend] HOC built compiled backends (HVM3, HVM4), shifted toward AI program synthesis, and in September 2026 shipped Bend 2: a *new language* compiled to C, CUDA and Metal, where "Bend 1 programs and HVM do not carry over."[^taelin-hvm3][^taelin-hvm4][^taelin-postseed][^bend-gh] Explicit data-parallel approaches — CUDA, Triton, JAX/XLA, and research languages like Futhark — remained how real parallel workloads are written.[^futhark]

# The idea
- **Interaction nets** (Lafont, 1990): programs are graphs of agents connected by ports; computation is local rewriting of pairs of agents. Rewrites are strongly confluent, so they can run in any order, in parallel, without locks.[^lafont-1990]
- **Optimal reduction** (Lamping, 1990; later refinements) uses interaction nets to share work across lambda-calculus reductions, in theory avoiding duplicated computation.
- **HVM's pitch**: compile a functional language (Bend, Kind) to interaction combinators and run them on a massively parallel evaluator on CPUs or GPUs.[^hvm-gh]
- **Problem it targeted**: GPU programming needs experts (CUDA, explicit data layouts), and most high-level languages cannot use thousands of cores.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022 | HVM1 (Rust, lazy): about 30% of GHC speed; parallelism buggy [^hoc-gist] | mixed |
| E3 | 2024-05-17 | HVM2 and Bend launch: GPU execution, near-ideal scaling; 1,041 HN points [^hn-bend] | + |
| E3 | 2024-05 | Wide skepticism (HN, Julia community) about single-core speed and benchmark fairness [^hn-bend][^julia-discourse-bend] | − |
| E3 | 2024-09-03 | "Breaking Bend": 11x11 determinant — Bend multi-core 20 min vs Go multi-threaded 4 s [^speedfox-bend] | − |
| E4 | 2024-11 | HVM3 compiler: up to 42x faster than Bend single-thread [^taelin-hvm3] | mixed |
| E4 | 2025 | HOC raises a post-seed for SupGen program synthesis and ARC-AGI [^taelin-postseed] | mixed |
| E4 | 2025-11 | HVM4 compiles Interaction Calculus to machine code [^taelin-hvm4] | mixed |
| E4 | 2026-09-17 | Bend 2 released; drops HVM-based execution for C/CUDA/Metal codegen [^bend-gh][^akita-bend2] | − (for the idea) |

# Where it succeeded
- **Proof of concept.** HVM2 showed that closures, recursion and general higher-order code can run correctly on a GPU with scaling close to the core count — previously thought impractical.[^hoc-gist][^hn-bend]
- **Interest.** Bend's launch (20k+ stars) showed demand for "parallelism without expertise."[^hoc-gist]
- **Ideas survive.** HVM4's compilation of interaction-calculus functions, and its use as a fast proof checker and program-synthesis engine (SupGen), keep the model alive as research.[^taelin-hvm4]

# Where it failed or stalled
- **Absolute performance.** Interpretation overhead, graph allocation and linked-list data made each core far slower than compiled code, so parallel speedups did not reach competitive throughput.[^hn-bend][^speedfox-bend]
- **Data structures.** Real parallel workloads are array-heavy, and the model had no cheap O(1) arrays.[^speedfox-bend]
- **Its own champion moved on.** Bend 2 is compiled conventionally, and HVM programs do not carry over.[^bend-gh]
- **Optimal reduction** produced no practical speedups outside contrived examples (no production evidence found).

# Why
1. **Parallelism does not help if the baseline is too slow.** A 100x single-core penalty needs 100+ cores just to break even, and memory bandwidth and allocation become the bottleneck. Critics measured against strong baselines (C++, Go, PyPy) within days.[^hn-bend][^speedfox-bend]
2. **Explicit data parallelism matches hardware.** GPUs reward regular, array-shaped, coalesced memory access. Interaction-net graphs are irregular and pointer-heavy. Array languages (Futhark, JAX, Triton) start from the hardware.[^futhark]
3. **Startup economics.** A small company had to show revenue paths (program synthesis, AI-safety positioning) before the runtime was mature, which split its focus.[^taelin-postseed]
4. **Marketing ahead of engineering.** "Runs on GPUs, no parallel code needed" set expectations the immature code generator could not meet. Taelin himself called the codegen "embarrassingly bad."[^hn-bend]

# Lessons
- Automatic parallelism has to compete with good sequential compilers first. Publish single-core numbers next to scaling curves.
- Programming models that fit the hardware (SIMD/SIMT, arrays) keep beating more elegant models that fight it.
- A viral launch buys attention, not credibility; the follow-up benchmarks decide the narrative.

# Related
- [Bend and HVM](/languages/bend-hvm.md), [Futhark and array languages](/languages/futhark-and-array-languages.md), [Haskell](/languages/haskell.md)
- [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md), [ML compilers and MLIR](/ideas/runtime-performance/ml-compilers-and-mlir.md), [Languages designed for LLMs](/ideas/ai-and-languages/languages-designed-for-llms.md)
- Event: [Bend launches on HVM2](/events/2024-05-bend-launch-hvm2.md)

[^lafont-1990]: Yves Lafont, Interaction Nets (POPL 1990) — https://dl.acm.org/doi/10.1145/96709.96718
[^hvm-gh]: HigherOrderCO/HVM — https://github.com/HigherOrderCO/HVM
[^bend-gh]: HigherOrderCO/Bend — https://github.com/HigherOrderCO/Bend
[^hn-bend]: Hacker News: Bend (via HVM2) — https://news.ycombinator.com/item?id=40390287
[^speedfox-bend]: Breaking Bend: Benchmarking the HVM — https://blog.speedfox.co.uk/
[^hoc-gist]: Victor Taelin: HOC historical overview — https://gist.github.com/VictorTaelin/77fd5a2a8a4a07e1da6157ebca3c7cf1
[^taelin-hvm3]: Taelin on X, HVM3 — https://x.com/VictorTaelin/status/1856862695028339065
[^taelin-hvm4]: Taelin on X, HVM4 — https://x.com/VictorTaelin/status/1985320306001477783
[^taelin-postseed]: Taelin on X, HOC post-seed — https://x.com/VictorTaelin/status/1885328571410853951
[^akita-bend2]: AkitaOnRails: Bend 2 — https://akitaonrails.com/en/2026/09/19/new-ai-language-just-released-bend-2/
[^julia-discourse-bend]: Julia Discourse: Bend — a new GPU-native language — https://discourse.julialang.org/t/bend-a-new-gpu-native-language/114440
[^futhark]: Futhark — https://futhark-lang.org/
