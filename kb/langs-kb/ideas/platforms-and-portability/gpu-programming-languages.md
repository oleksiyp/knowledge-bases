---
type: Idea
title: GPU programming languages and the CUDA moat
description: "How developers program GPUs: vendor C++ dialects (CUDA, HIP), open standards (OpenCL, SYCL/oneAPI, Vulkan/WGSL), Python DSLs (Triton, cuTile) and new languages (Mojo), plus translation layers (ZLUDA). 2018–2026 verdict: CUDA's moat held. Open standards stalled, AMD's HIP and ROCm improved slowly, and the real shift was upward to Python tile DSLs, which Nvidia then co-opted with CUDA Python and CUDA Tile."
area: platforms-and-portability
tags: [gpu, cuda, rocm, hip, sycl, oneapi, opencl, triton, mojo, zluda, webgpu, nvidia, amd, intel]
outcome: mixed
maturity_2026: mainstream
origin_year: 2007
mainstream_year: 2012
languages: [languages/cuda, languages/triton, languages/mojo, languages/cpp, languages/python, languages/julia, languages/futhark-and-array-languages]
runtimes: [runtimes/ptx-and-gpu-runtimes, runtimes/llvm, runtimes/mlir]
related_ideas: [ideas/runtime-performance/ml-compilers-and-mlir, ideas/types/python-superset-languages, ideas/platforms-and-portability/webassembly-in-the-browser]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cuda-python
    resource: https://thenewstack.io/nvidia-finally-adds-native-python-support-to-cuda/
    title: "The New Stack: NVIDIA Finally Adds Native Python Support to CUDA"
  - id: cuda-tile
    resource: https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-tile-examined-ai-giant-releases-programming-style-for-rubin-feynman-and-beyond-tensor-native-execution-model-lays-the-foundation-for-blackwell-and-beyond
    title: "Tom's Hardware: Nvidia's CUDA Tile examined"
  - id: zluda-takedown
    resource: https://www.theregister.com/software/2024/08/09/amd-lawyers-claw-back-cuda-compatibility-layer-zluda/1009658
    title: "The Register: AMD lawyers claw back CUDA compatibility layer ZLUDA"
  - id: zluda-q4
    resource: https://vosen.github.io/ZLUDA/blog/zluda-update-q4-2025/
    title: "ZLUDA blog: ZLUDA update Q4 2025"
  - id: rocm7
    resource: https://www.xda-developers.com/amd-rocm-7-release/
    title: "XDA: AMD wants to beat Nvidia at its own game with open-source software (ROCm 7)"
  - id: uxl
    resource: https://www.phoronix.com/review/oneapi-uxl-foundation
    title: "Phoronix: Intel oneAPI initiative evolves into the Unified Acceleration (UXL) Foundation"
  - id: uxl-khronos
    resource: https://www.phoronix.com/news/UXL-Foundation-Khronos-Collab
    title: "Phoronix: oneAPI-focused UXL Foundation now collaborating with Khronos"
  - id: triton-openai
    resource: https://openai.com/index/triton/
    title: "OpenAI: Introducing Triton"
  - id: modular-amd
    resource: https://www.modular.com/blog/modular-x-amd-unleashing-ai-performance-on-amd-gpus
    title: "Modular: Modular + AMD — unleashing AI performance on AMD GPUs"
  - id: modular-256
    resource: https://www.modular.com/blog/modular-25-6-unifying-the-latest-gpus-from-nvidia-amd-and-apple
    title: "Modular: Modular 25.6 — unifying the latest GPUs from NVIDIA, AMD, and Apple"
  - id: webgpu-chrome
    resource: https://developer.chrome.com/blog/webgpu-release
    title: "Chrome for Developers: Chrome ships WebGPU"
  - id: webgpu-all
    resource: https://www.webgpu.com/news/webgpu-hits-critical-mass-all-major-browsers/
    title: "WebGPU.com: WebGPU hits critical mass — all major browsers now ship it"
  - id: msft-cuda-amd
    resource: https://winbuzzer.com/2025/11/11/microsoft-apparently-wants-to-break-nvidias-moat-making-cuda-available-to-amd-ai-chips-xcxwbn/
    title: "WinBuzzer: Microsoft apparently wants to break Nvidia's moat"
---

# Summary

**Mixed. CUDA's moat held, and the abstraction level moved up.** In 2018 serious GPU programming
meant CUDA C++. In 2026 it still mostly did. AMD's HIP/ROCm closed much of the gap on data-centre
parts (ROCm 7 in 2025) but stayed behind on breadth and polish.[^rocm7] Intel's oneAPI/SYCL moved
into the Linux Foundation's UXL Foundation in 2023 without displacing CUDA.[^uxl] OpenCL 3.0 (2020)
retreated by making the OpenCL 2.x features optional. The open-source CUDA-on-AMD layer ZLUDA was
funded by AMD, then taken down by AMD's lawyers in 2024, and was rebuilt as a hobby project.[^zluda-takedown][^zluda-q4]
The real change came from **Python tile DSLs**: Triton (2021), then Helion, TileLang and Mojo.
These let ML engineers write fast kernels without CUDA C++.[^triton-openai][^modular-amd] Nvidia
responded by putting Python inside CUDA (GTC 2025) and introducing **CUDA Tile / cuTile** in
CUDA 13.1 (December 2025), its biggest programming-model change since 2006.[^cuda-python][^cuda-tile]

# The idea

GPUs need data-parallel programs that map onto thousands of threads, warps or wavefronts, and
tensor cores. Three ways to express that:

- **Thread-level C++ dialects**: CUDA, HIP, SYCL, Metal. Maximum control, vendor-specific.
- **Portable standards**: OpenCL, SYCL, Vulkan compute, WebGPU/WGSL. Portability first,
  usually at a performance or tooling cost.
- **Higher-level array or tile languages**: Triton, cuTile, Futhark, Julia's CUDA.jl, Mojo. The
  compiler handles tiling, shared memory and tensor cores.

Translation layers (HIPIFY, ZLUDA, SCALE) try to run CUDA source or binaries on other vendors' GPUs.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020 | OpenCL 3.0 makes OpenCL 2.x features optional, a retreat to the 1.2 baseline | − |
| E2 | 2021-07 | Triton 1.0: Python kernels without CUDA experience[^triton-openai] | + |
| E3 | 2023-04 | Chrome 113 ships WebGPU and WGSL[^webgpu-chrome] | + |
| E3 | 2023-09 | Intel's oneAPI becomes the UXL Foundation (Linux Foundation)[^uxl] | mixed |
| E3 | 2024-08 | AMD has ZLUDA's open-sourced code taken down; developer restarts from pre-AMD code[^zluda-takedown] | − |
| E4 | 2025-03 | Nvidia announces native Python support in CUDA at GTC[^cuda-python] | + |
| E4 | 2025 | ROCm 7; Mojo/MAX runs on AMD MI300/MI325 with the same kernels[^rocm7][^modular-amd] | + |
| E4 | 2025-11 | WebGPU ships by default in Chrome, Firefox, Safari and Edge[^webgpu-all] | + |
| E4 | 2025-12-04 | CUDA 13.1: CUDA Tile IR and cuTile Python DSL[^cuda-tile] | + |
| E4 | 2025–26 | ZLUDA back to a hobby project after commercial funding ended[^zluda-q4] | − |

# Where it succeeded

- **CUDA itself.** Its compilers, libraries (cuBLAS, cuDNN, CUTLASS, NCCL), profilers and fifteen
  years of code kept it the default for AI and HPC.
- **Python tile DSLs.** Triton made kernel writing accessible and portable across Nvidia and AMD.
  Its tile model was adopted by PyTorch (Inductor, Helion) and, in effect, by Nvidia (cuTile).[^cuda-tile]
- **Mojo** showed one source compiling for Nvidia, AMD and Apple GPUs without CUDA, by targeting
  the vendors' IRs through MLIR.[^modular-256]
- **WebGPU** gave browsers a modern, portable compute API with a safe shading language, though
  mainly for graphics and on-device inference.[^webgpu-all]

# Where it failed or stalled

- **OpenCL** lost its role as the cross-vendor standard: Apple deprecated it, and Nvidia supported
  it only minimally.
- **SYCL/oneAPI** has a working standard and an LLVM upstreaming effort, but little adoption outside
  Intel hardware and some HPC centres.[^uxl-khronos]
- **Binary compatibility layers** depend on unstable corporate support. ZLUDA was funded, then
  disowned. Microsoft's reported effort to run CUDA on AMD (2025) was still unproven.[^zluda-takedown][^msft-cuda-amd]
- **ROCm's breadth.** It supported far fewer consumer GPUs and operating systems than CUDA for most
  of the period, which kept students and hobbyists on Nvidia.

# Why

1. **Ecosystem lock-in compounds.** Libraries, tutorials, Stack Overflow answers and now LLM
   training data are overwhelmingly CUDA. Each new model is first tuned for CUDA.
2. **Standards bodies move slower than one vendor.** Nvidia shipped new hardware features
   (tensor cores, TMA, FP8) in CUDA on launch day, while standards caught up years later.
3. **Raising the abstraction is the only real way around the moat.** Tile DSLs hide warp-level
   detail, so they can retarget other vendors. That is why Nvidia moved quickly to own that layer
   (cuTile, CUDA Python).[^cuda-python][^cuda-tile]
4. **AMD's software investment came late.** AMD argued in 2025 that CUDA "is not a moat for new
   architectures", but its software stack trailed its hardware for most of the period.[^rocm7]

# Lessons

- Portability standards fail when the dominant vendor treats them as second-class. Competing at
  a higher abstraction level works better than competing at the CUDA level.
- Corporate-funded compatibility layers are fragile, as ZLUDA's history shows.

# Related

- [CUDA](/languages/cuda.md), [Triton](/languages/triton.md), [Mojo](/languages/mojo.md), [Futhark and array languages](/languages/futhark-and-array-languages.md)
- [PTX and GPU runtimes](/runtimes/ptx-and-gpu-runtimes.md)
- [ML compilers and MLIR](/ideas/runtime-performance/ml-compilers-and-mlir.md)
- [CUDA 13.1 CUDA Tile](/events/2025-12-cuda-13-1-cuda-tile.md), [Triton 1.0](/events/2021-07-triton-1-0-released.md)

[^cuda-python]: The New Stack, native Python in CUDA — https://thenewstack.io/nvidia-finally-adds-native-python-support-to-cuda/
[^cuda-tile]: Tom's Hardware on CUDA Tile — https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-tile-examined-ai-giant-releases-programming-style-for-rubin-feynman-and-beyond-tensor-native-execution-model-lays-the-foundation-for-blackwell-and-beyond
[^zluda-takedown]: The Register on ZLUDA takedown — https://www.theregister.com/software/2024/08/09/amd-lawyers-claw-back-cuda-compatibility-layer-zluda/1009658
[^zluda-q4]: ZLUDA Q4 2025 update — https://vosen.github.io/ZLUDA/blog/zluda-update-q4-2025/
[^rocm7]: XDA on ROCm 7 — https://www.xda-developers.com/amd-rocm-7-release/
[^uxl]: Phoronix on UXL Foundation — https://www.phoronix.com/review/oneapi-uxl-foundation
[^uxl-khronos]: Phoronix, UXL and Khronos — https://www.phoronix.com/news/UXL-Foundation-Khronos-Collab
[^triton-openai]: OpenAI, Introducing Triton — https://openai.com/index/triton/
[^modular-amd]: Modular + AMD — https://www.modular.com/blog/modular-x-amd-unleashing-ai-performance-on-amd-gpus
[^modular-256]: Modular 25.6 — https://www.modular.com/blog/modular-25-6-unifying-the-latest-gpus-from-nvidia-amd-and-apple
[^webgpu-chrome]: Chrome ships WebGPU — https://developer.chrome.com/blog/webgpu-release
[^webgpu-all]: WebGPU in all major browsers — https://www.webgpu.com/news/webgpu-hits-critical-mass-all-major-browsers/
[^msft-cuda-amd]: WinBuzzer on Microsoft and CUDA on AMD — https://winbuzzer.com/2025/11/11/microsoft-apparently-wants-to-break-nvidias-moat-making-cuda-available-to-amd-ai-chips-xcxwbn/
