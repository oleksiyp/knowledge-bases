---
type: Language
title: Triton (OpenAI's Python-embedded GPU kernel language)
description: "A Python-embedded DSL and MLIR-based compiler for block- or tile-level GPU kernels, released by OpenAI in 2021. 2018–2026 verdict: one of the period's clearest language successes. It became the code-generation target of torch.compile, the default way to write custom ML kernels, and the first credible portable layer across Nvidia and AMD. Its tile model was then copied by Helion, TileLang and Nvidia's own cuTile."
tags: [gpu, python, dsl, mlir, pytorch, openai, kernels, ai]
paradigms: [data-parallel, embedded-dsl, tile-based]
typing: gradual
memory_model: manual
first_released: 2021
steward: OpenAI / triton-lang open-source community
governance: community
trajectory: growing
ideas: [ideas/runtime-performance/ml-compilers-and-mlir, ideas/platforms-and-portability/gpu-programming-languages]
runtimes: [runtimes/mlir, runtimes/llvm, runtimes/ptx-and-gpu-runtimes]
adoption_signals:
  torch_compile_backend: { value: "default GPU codegen (TorchInductor)", as_of: 2023-03 }
era_momentum: { E1: n/a, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: triton-openai
    resource: https://openai.com/index/triton/
    title: "OpenAI: Introducing Triton — open-source GPU programming for neural networks (2021-07-28)"
  - id: silicon-triton
    resource: https://siliconangle.com/2021/07/28/openai-debuts-new-ai-programming-language-creating-neural-networks/
    title: "SiliconANGLE: OpenAI debuts new AI programming language for creating neural networks"
  - id: pt2-release
    resource: https://github.com/pytorch/pytorch/releases/tag/v2.0.0
    title: "GitHub: PyTorch 2.0 release notes"
  - id: vllm-amd
    resource: https://pytorch.org/blog/enabling-vllm-v1-on-amd-gpus-with-triton/
    title: "PyTorch blog: Enabling vLLM V1 on AMD GPUs with Triton"
  - id: vllm-triton
    resource: https://vllm.ai/blog/2026-03-04-vllm-triton-backend-deep-dive
    title: "vLLM blog: Triton attention backend deep dive (2026-03-04)"
  - id: triton-cpu
    resource: https://github.com/triton-lang/triton-cpu
    title: "GitHub: triton-lang/triton-cpu — experimental CPU backend"
  - id: helion
    resource: https://pytorch.org/blog/helion/
    title: "PyTorch blog: Helion — a high-level DSL for performant and portable ML kernels"
  - id: triton-mtia
    resource: https://arxiv.org/pdf/2608.00325
    title: "arXiv: Triton for MTIA — bridging programming-model gaps for custom AI accelerators"
  - id: cuda-tile
    resource: https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-tile-examined-ai-giant-releases-programming-style-for-rubin-feynman-and-beyond-tensor-native-execution-model-lays-the-foundation-for-blackwell-and-beyond
    title: "Tom's Hardware: Nvidia's CUDA Tile examined"
---

# Summary

**Growing. Triton is the most consequential new kernel language of the period.** Philippe Tillet
started it as a Harvard PhD project. OpenAI released Triton 1.0 on 2021-07-28 as a way for
"researchers with no CUDA experience" to write GPU kernels that perform close to expert ones.[^triton-openai][^silicon-triton]
Its programs operate on **blocks (tiles)** rather than threads, and the compiler handles shared
memory, coalescing and tensor-core use. PyTorch 2.0 (March 2023) made it the GPU code generator
behind `torch.compile`.[^pt2-release] It gained an upstream AMD backend, an experimental CPU
backend and use on Meta's MTIA accelerators.[^vllm-amd][^triton-cpu][^triton-mtia] By 2026 vLLM
ran a single Triton attention backend on Nvidia and AMD.[^vllm-triton] Its success showed in imitation:
PyTorch's Helion compiles to Triton, and Nvidia's cuTile (CUDA 13.1) adopted the same tile model.[^helion][^cuda-tile]

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019 | Tillet, Kung and Cox publish the Triton paper (MAPL 2019) | + |
| E2 | 2021-07-28 | OpenAI releases Triton 1.0[^triton-openai] | + |
| E3 | 2023-03 | PyTorch 2.0: TorchInductor generates Triton for GPUs[^pt2-release] | + |
| E3 | 2023–2024 | AMD upstreams its backend; compiler moves onto MLIR; triton-lang org[^vllm-amd] | + |
| E4 | 2025 | vLLM V1 runs on AMD via Triton kernels[^vllm-amd] | + |
| E4 | 2025-10 | Helion (compiles to Triton) public beta at PyTorch Conference[^helion] | + |
| E4 | 2025-12 | Nvidia's cuTile adopts a tile-level Python model[^cuda-tile] | mixed |

# Ideas it bet on

| Idea | Outcome for Triton |
|---|---|
| [ML compilers and MLIR](/ideas/runtime-performance/ml-compilers-and-mlir.md) | Succeeded: became torch.compile's backend |
| [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md) | Succeeded: the de facto Python kernel DSL, portable to AMD |

# What succeeded

- **The right abstraction level.** Tile programs are high enough to hide warp details and low enough
  to reach near-expert performance on GEMM and attention.
- **Embedding in PyTorch.** As Inductor's target, every `torch.compile` user runs Triton without
  knowing it, which no standalone GPU language achieved.[^pt2-release]
- **Portability through a compiler** rather than a standard, with AMD, Intel, CPU and MTIA backends
  at different maturity levels.[^vllm-amd][^triton-cpu][^triton-mtia]

# What failed or stalled

- **Peak performance on the newest Nvidia features** (e.g. Hopper/Blackwell-specific pipelines)
  often arrived later than in CUTLASS or cuDNN, and FlashAttention-3-class kernels were written in
  CUDA first.
- **Backends of uneven quality.** Intel's backend was developed largely out of tree, and CPU
  support remained experimental.[^triton-cpu]
- **Competition from its own followers.** Helion, TileLang and cuTile each claim more productivity
  or more vendor-specific performance, which risks fragmenting the layer Triton created.[^helion][^cuda-tile]

# By era

## E1
Research prototype (2019 paper). CUDA C++ and vendor libraries dominated.

## E2
1.0 release at OpenAI. Early adopters wrote fused kernels for transformers.

## E3
PyTorch 2.0 adoption made it infrastructure. AMD support and the MLIR rewrite followed.

## E4
Multi-vendor kernel layer for inference engines (vLLM). Higher-level DSLs build on it, and
Nvidia answered with cuTile.

# Lessons

- An embedded DSL inside the dominant framework spreads faster than a standalone language.
- Choosing the right abstraction (tiles) matters more than syntax. Competitors copied the model,
  not the syntax.

# Related

- [CUDA](/languages/cuda.md), [Mojo](/languages/mojo.md), [Python](/languages/python.md)
- [MLIR](/runtimes/mlir.md), [PTX and GPU runtimes](/runtimes/ptx-and-gpu-runtimes.md)
- [Triton 1.0 released](/events/2021-07-triton-1-0-released.md), [PyTorch 2.0](/events/2023-03-pytorch-2-torch-compile.md)

[^triton-openai]: OpenAI, Introducing Triton — https://openai.com/index/triton/
[^silicon-triton]: SiliconANGLE on Triton — https://siliconangle.com/2021/07/28/openai-debuts-new-ai-programming-language-creating-neural-networks/
[^pt2-release]: PyTorch 2.0 release — https://github.com/pytorch/pytorch/releases/tag/v2.0.0
[^vllm-amd]: vLLM V1 on AMD with Triton — https://pytorch.org/blog/enabling-vllm-v1-on-amd-gpus-with-triton/
[^vllm-triton]: vLLM Triton backend deep dive — https://vllm.ai/blog/2026-03-04-vllm-triton-backend-deep-dive
[^triton-cpu]: triton-cpu — https://github.com/triton-lang/triton-cpu
[^helion]: PyTorch, Helion — https://pytorch.org/blog/helion/
[^triton-mtia]: Triton for MTIA — https://arxiv.org/pdf/2608.00325
[^cuda-tile]: Tom's Hardware on CUDA Tile — https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-tile-examined-ai-giant-releases-programming-style-for-rubin-feynman-and-beyond-tensor-native-execution-model-lays-the-foundation-for-blackwell-and-beyond
