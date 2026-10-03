---
type: Language
title: CUDA (CUDA C++ and the CUDA platform)
description: "Nvidia's GPU programming model and C++ dialect. 2018–2026 verdict: the most consequential proprietary language platform of the AI boom. Its moat held against HIP, SYCL and OpenCL, and it grew from about 2M to over 5M developers. Nvidia then moved CUDA itself up the stack with native Python (2025) and tile-level programming (CUDA Tile, December 2025)."
tags: [gpu, nvidia, hpc, ai, cpp, proprietary, parallel-programming]
paradigms: [imperative, data-parallel, spmd]
typing: static
memory_model: manual
first_released: 2007
steward: NVIDIA
governance: single-vendor
trajectory: growing
ideas: [ideas/platforms-and-portability/gpu-programming-languages, ideas/runtime-performance/ml-compilers-and-mlir, ideas/ai-and-languages/llm-impact-on-language-adoption]
runtimes: [runtimes/ptx-and-gpu-runtimes, runtimes/llvm]
adoption_signals:
  cuda_developers: { value: "5M+", as_of: 2024-06 }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cuda-5m
    resource: https://www.marketscreener.com/quote/stock/NVIDIA-CORPORATION-57355629/news/TAIPEI-NVIDIA-CEO-HUANG-WE-NOW-HAVE-5-MILLION-CUDA-DEVELOPERS-A--46882472/
    title: "MarketScreener/Reuters: Nvidia CEO Huang — we now have 5 million CUDA developers (2024-06)"
  - id: cuda-python
    resource: https://nvidianews.nvidia.com/news/gpu-accelerated-computing-reaches-next-generation-of-programmers-with-python-support-of-nvidia-cuda-6622703
    title: "NVIDIA Newsroom: GPU-accelerated computing reaches next generation of programmers with Python support of NVIDIA CUDA"
  - id: cuda-python-tns
    resource: https://thenewstack.io/nvidia-finally-adds-native-python-support-to-cuda/
    title: "The New Stack: NVIDIA Finally Adds Native Python Support to CUDA"
  - id: cuda-131
    resource: https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-tile-examined-ai-giant-releases-programming-style-for-rubin-feynman-and-beyond-tensor-native-execution-model-lays-the-foundation-for-blackwell-and-beyond
    title: "Tom's Hardware: Nvidia's CUDA Tile examined"
  - id: cutile-x
    resource: https://x.com/NVIDIAAIDev/status/1996987939599847650
    title: "NVIDIA AI Developer on X: cuTile Python in CUDA 13.1"
  - id: zluda-reg
    resource: https://www.theregister.com/software/2024/08/09/amd-lawyers-claw-back-cuda-compatibility-layer-zluda/1009658
    title: "The Register: AMD lawyers claw back CUDA compatibility layer ZLUDA"
  - id: scale-hpc
    resource: https://scale-lang.com/posts/2026-03-10-cuda-the-de-facto-standard-of-hpc
    title: "SCALE (Spectral Compute): CUDA, the de facto standard of HPC? (2026-03)"
  - id: triton-openai
    resource: https://openai.com/index/triton/
    title: "OpenAI: Introducing Triton"
---

# Summary

**Growing, and dominant.** CUDA was already the default for GPU computing in 2018. The deep-learning
and then generative-AI booms turned it into the strategic moat of the most valuable chip company.
Nvidia reported about 2M CUDA developers in 2020 and **5M in June 2024**.[^cuda-5m] Competitors
attacked it at three levels, and none displaced it:

- **Source compatibility**: AMD HIP, SYCL.
- **Binary compatibility**: ZLUDA, which AMD funded and then had taken down in 2024.[^zluda-reg]
- **Higher-level DSLs**: Triton.[^triton-openai]

Nvidia's own answer was to absorb the higher level. It added **native Python** to CUDA (GTC
2025)[^cuda-python][^cuda-python-tns] and introduced **CUDA Tile**, a tile IR with the cuTile Python
DSL, in CUDA 13.1 on 2025-12-04. Nvidia called it the largest expansion of the platform since 2006.[^cuda-131][^cutile-x]

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2020 | Tensor cores (Volta/Turing/Ampere) exposed first via CUDA libraries (cuDNN, cuBLAS, CUTLASS) | + |
| E2 | 2021-07 | Triton offers Python kernel authoring without CUDA C++[^triton-openai] | mixed |
| E3 | 2023 | Generative-AI demand makes CUDA lock-in a market-wide topic | + |
| E3 | 2024-06 | Huang: 5M CUDA developers[^cuda-5m] | + |
| E3 | 2024-08 | AMD has ZLUDA's CUDA-on-ROCm code taken down[^zluda-reg] | + |
| E4 | 2025-03 | Native Python support announced at GTC[^cuda-python] | + |
| E4 | 2025-12-04 | CUDA 13.1 ships CUDA Tile IR and cuTile Python[^cuda-131] | + |
| E4 | 2026 | Third parties (e.g. SCALE) still compile CUDA source for AMD; CUDA described as the de facto HPC standard[^scale-hpc] | + |

# Ideas it bet on

| Idea | Outcome for CUDA |
|---|---|
| [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md) | Succeeded: kept the moat |
| [ML compilers and MLIR](/ideas/runtime-performance/ml-compilers-and-mlir.md) | Mixed: ceded kernel authoring to Triton, then reclaimed it with cuTile |
| [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md) | Succeeded: the largest GPU-code corpus, so assistants default to CUDA |

# What succeeded

- **Libraries plus the language.** CUDA's value is the stack: compilers, cuBLAS, cuDNN, NCCL,
  CUTLASS, Nsight, plus PTX as a stable virtual ISA that runs older binaries on new GPUs.
- **New hardware features available on launch day.** Tensor cores, FP8 and asynchronous copies
  appeared in CUDA first, so competitors' portability layers lagged by design.
- **Responding to Python.** Native Python bindings and cuTile meet ML engineers where they are,
  rather than leaving that layer to Triton or Mojo.[^cuda-python-tns][^cuda-131]

# What failed or stalled

- **Only Nvidia hardware.** Every attempt to run CUDA elsewhere was either legally fragile (ZLUDA)
  or commercial and partial.[^zluda-reg][^scale-hpc]
- **C++ ergonomics.** Raw CUDA C++ stayed hard enough that much of 2021–2025 kernel work moved to
  Triton, which pushed Nvidia to respond.[^triton-openai]
- **cuTile reach.** At launch it supported only Blackwell GPUs and Python. C++ support was
  promised for later.[^cuda-131]

# By era

## E1
CUDA 10–11 era. Deep learning on Nvidia GPUs was standard, and AMD ROCm was immature.

## E2
CUDA 11. Ampere (A100) became the AI workhorse. Triton appeared as an abstraction above CUDA.

## E3
The generative-AI boom. Demand for H100 made CUDA expertise and lock-in a strategic issue. AMD
funded, then retracted, ZLUDA.

## E4
CUDA 12 to 13: native Python, CUDA Tile and cuTile. Nvidia moved CUDA's centre of gravity toward
tile-level Python programming.

# Lessons

- A proprietary language platform can beat open standards when it ships hardware features first
  and invests heavily in libraries and tools.
- When abstraction moves up (Triton), the incumbent has to follow or lose control of that layer.

# Related

- [PTX and GPU runtimes](/runtimes/ptx-and-gpu-runtimes.md), [Triton](/languages/triton.md), [Mojo](/languages/mojo.md)
- [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md)
- [CUDA 13.1 CUDA Tile](/events/2025-12-cuda-13-1-cuda-tile.md)

[^cuda-5m]: Huang: 5 million CUDA developers — https://www.marketscreener.com/quote/stock/NVIDIA-CORPORATION-57355629/news/TAIPEI-NVIDIA-CEO-HUANG-WE-NOW-HAVE-5-MILLION-CUDA-DEVELOPERS-A--46882472/
[^cuda-python]: NVIDIA Newsroom, Python support of CUDA — https://nvidianews.nvidia.com/news/gpu-accelerated-computing-reaches-next-generation-of-programmers-with-python-support-of-nvidia-cuda-6622703
[^cuda-python-tns]: The New Stack on CUDA Python — https://thenewstack.io/nvidia-finally-adds-native-python-support-to-cuda/
[^cuda-131]: Tom's Hardware on CUDA Tile — https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-tile-examined-ai-giant-releases-programming-style-for-rubin-feynman-and-beyond-tensor-native-execution-model-lays-the-foundation-for-blackwell-and-beyond
[^cutile-x]: NVIDIA AI Developer on cuTile — https://x.com/NVIDIAAIDev/status/1996987939599847650
[^zluda-reg]: The Register on ZLUDA — https://www.theregister.com/software/2024/08/09/amd-lawyers-claw-back-cuda-compatibility-layer-zluda/1009658
[^scale-hpc]: SCALE, CUDA the de facto standard of HPC — https://scale-lang.com/posts/2026-03-10-cuda-the-de-facto-standard-of-hpc
[^triton-openai]: OpenAI, Introducing Triton — https://openai.com/index/triton/
