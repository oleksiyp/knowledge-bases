---
type: Language
title: Futhark and the array languages (APL, BQN, Uiua, Dex)
description: "Functional data-parallel languages that compile array programs to GPUs (Futhark, Dex), plus the APL family (Dyalog APL, J, BQN, Uiua). 2018–2026 verdict: niche and intellectually influential. Their core idea, whole-array operations compiled for parallel hardware, won through NumPy, JAX and Triton rather than through these languages, which stayed academic or hobbyist."
tags: [array-programming, gpu, functional, apl, data-parallel, research, futhark, bqn, uiua]
paradigms: [functional, array, data-parallel]
typing: static
memory_model: gc
first_released: 2014
steward: DIKU, University of Copenhagen (Futhark); Dyalog Ltd (APL); individual designers (BQN, Uiua)
governance: community
trajectory: niche
ideas: [ideas/platforms-and-portability/gpu-programming-languages, ideas/runtime-performance/ml-compilers-and-mlir]
runtimes: [runtimes/ptx-and-gpu-runtimes]
adoption_signals: {}
era_momentum: { E1: flat, E2: flat, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: futhark-home
    resource: https://futhark-lang.org/
    title: "Futhark: Why Futhark?"
  - id: futhark-hip
    resource: https://futhark-lang.org/blog/2023-08-30-futhark-0.25.3-released.html
    title: "Futhark blog: Futhark 0.25.3 released (HIP backend)"
  - id: futhark-cmp
    resource: https://futhark-lang.org/blog/2024-07-17-opencl-cuda-hip.html
    title: "Futhark blog: Comparing the performance of OpenCL, CUDA, and HIP (2024-07-17)"
  - id: futhark-dex
    resource: https://futhark-lang.org/blog/2020-12-28-futhark-and-dex.html
    title: "Futhark blog: A comparison of Futhark and Dex"
  - id: dex-infoworld
    resource: https://www.infoworld.com/article/3448551/google-dex-language-simplifies-array-math-for-machine-learning.html
    title: "InfoWorld: Google Dex language simplifies array math for machine learning"
  - id: bqn-history
    resource: https://mlochbaum.github.io/BQN/commentary/history.html
    title: "BQN: BQN's development history"
  - id: uiua-aplwiki
    resource: https://aplwiki.com/wiki/Uiua
    title: "APL Wiki: Uiua"
  - id: array-cmp
    resource: https://github.com/codereport/array-language-comparisons
    title: "GitHub: codereport/array-language-comparisons"
  - id: futhark-intel
    resource: https://github.com/diku-dk/futhark/discussions/2141
    title: "GitHub diku-dk/futhark discussion #2141: Futhark on Intel GPU"
---

# Summary

**Niche, influential through ideas.** **Futhark** (DIKU, Copenhagen) is a pure functional
language whose compiler turns nested `map`/`reduce`/`scan` programs into efficient GPU code. It
targets CUDA, OpenCL, multicore and, from 2023, AMD's HIP. Its maintainers also publish careful
backend comparisons.[^futhark-home][^futhark-hip][^futhark-cmp] Google Research's **Dex**
(2019) explored typed, differentiable array programming and remained a research prototype.[^dex-infoworld][^futhark-dex]
The **APL family** had a small renaissance among enthusiasts: Marshall Lochbaum released **BQN**
(2020) as a "fixed APL",[^bqn-history] and **Uiua** (2023) added a stack-based variant.[^uiua-aplwiki]
None became mainstream. Their central idea, expressing computation as whole-array transformations
so a compiler can parallelise it, became the default way ML code is written, but through
**NumPy, JAX, PyTorch and Triton** in Python.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019 | Google Research announces Dex[^dex-infoworld] | + |
| E1 | 2020 | BQN released as an APL redesign[^bqn-history] | + |
| E2 | 2020-12 | Futhark team publishes Futhark-vs-Dex comparison[^futhark-dex] | + |
| E3 | 2023 | Uiua appears; array-language podcasts and comparisons grow a community[^uiua-aplwiki][^array-cmp] | + |
| E3 | 2023-08-30 | Futhark 0.25.3 adds a HIP backend for AMD GPUs[^futhark-hip] | + |
| E3 | 2024-07 | Futhark benchmarks OpenCL vs CUDA vs HIP on the same programs[^futhark-cmp] | + |
| E4 | 2025 | Futhark WebGPU backend work; Intel GPU support discussed[^futhark-intel] | flat |

# Ideas it bet on

| Idea | Outcome |
|---|---|
| [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md) | Technically succeeded (portable GPU codegen), but adoption stayed niche |
| [ML compilers and MLIR](/ideas/runtime-performance/ml-compilers-and-mlir.md) | The idea won elsewhere: JAX/XLA and Triton |

# What succeeded

- **Portable GPU code from a high-level language.** Futhark generates competitive code for
  Nvidia and AMD from one source, the portability that CUDA alternatives promised.[^futhark-hip][^futhark-cmp]
- **Research influence.** Futhark's flattening of nested parallelism and Dex's typed index sets
  informed later work on array compilers and autodiff.[^futhark-dex]
- **A revived community.** BQN and Uiua drew new programmers to array thinking through puzzles,
  podcasts and Advent of Code.[^array-cmp]

# What failed or stalled

- **No ecosystem pull.** Futhark is meant to be called from host languages, but Python's ML stack
  gave the same benefits without a second language.
- **Dex** never left research-prototype status.[^dex-infoworld]
- **APL-family notation** (glyphs, tacit style) remained a barrier, and these languages are among
  the "low-resource" ones that LLMs handle worst.

# By era

## E1
Futhark matured with OpenCL/CUDA backends, and Google Research announced Dex.

## E2
BQN emerged. The array-language community grew around the ArrayCast podcast and comparison projects.

## E3
Futhark added HIP. Uiua appeared. JAX and Triton absorbed the practical market.

## E4
Steady academic development. No breakout.

# Lessons

- A good idea in a minority language often succeeds as a library or DSL in a majority language
  (NumPy, JAX, Triton) instead.
- Separate host languages for GPU code struggle against embedded DSLs.

# Related

- [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md)
- [Triton](/languages/triton.md), [CUDA](/languages/cuda.md), [Julia](/languages/julia.md)

[^futhark-home]: Why Futhark? — https://futhark-lang.org/
[^futhark-hip]: Futhark 0.25.3 released — https://futhark-lang.org/blog/2023-08-30-futhark-0.25.3-released.html
[^futhark-cmp]: Comparing OpenCL, CUDA, and HIP — https://futhark-lang.org/blog/2024-07-17-opencl-cuda-hip.html
[^futhark-dex]: A comparison of Futhark and Dex — https://futhark-lang.org/blog/2020-12-28-futhark-and-dex.html
[^dex-infoworld]: InfoWorld on Google Dex — https://www.infoworld.com/article/3448551/google-dex-language-simplifies-array-math-for-machine-learning.html
[^bqn-history]: BQN's development history — https://mlochbaum.github.io/BQN/commentary/history.html
[^uiua-aplwiki]: APL Wiki, Uiua — https://aplwiki.com/wiki/Uiua
[^array-cmp]: array-language-comparisons — https://github.com/codereport/array-language-comparisons
[^futhark-intel]: Futhark on Intel GPU discussion — https://github.com/diku-dk/futhark/discussions/2141
