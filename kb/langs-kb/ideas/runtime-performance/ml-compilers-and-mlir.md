---
type: Idea
title: ML compilers and MLIR (compiling tensor programs for many accelerators)
description: "Compile machine-learning programs (graphs, then traced Python, then tile-level kernels) to many accelerators through reusable IR infrastructure: XLA, TVM, MLIR, Triton, torch.compile, Mojo, CUDA Tile. 2018–2026 verdict: succeeding but consolidating. MLIR became the shared substrate and Triton plus torch.compile won the PyTorch world, while the 'one portable compiler for all hardware' startups (TVM/OctoAI) and language bets (Swift for TensorFlow) failed or were absorbed."
area: runtime-performance
tags: [mlir, xla, tvm, triton, torch-compile, pytorch, jax, openxla, mojo, cuda-tile, compilers, gpu]
outcome: succeeding
maturity_2026: mainstream
origin_year: 2017
mainstream_year: 2023
languages: [languages/python, languages/triton, languages/mojo, languages/cuda, languages/swift, languages/julia]
runtimes: [runtimes/mlir, runtimes/llvm, runtimes/ptx-and-gpu-runtimes]
related_ideas: [ideas/platforms-and-portability/gpu-programming-languages, ideas/types/python-superset-languages, ideas/runtime-performance/jit-for-dynamic-languages]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: mlir-tf
    resource: https://blog.tensorflow.org/2019/04/mlir-new-intermediate-representation.html
    title: "TensorFlow blog: MLIR — a new intermediate representation and compiler framework (2019-04)"
  - id: mlir-wiki
    resource: https://en.wikipedia.org/wiki/MLIR_(software)
    title: "Wikipedia: MLIR (software)"
  - id: s4tf
    resource: https://github.com/tensorflow/swift
    title: "GitHub: Swift for TensorFlow (Archived)"
  - id: s4tf-tsai
    resource: https://mjtsai.com/blog/2021/02/16/swift-for-tensorflow-canceled/
    title: "Michael Tsai: Swift for TensorFlow Canceled (2021-02-16)"
  - id: triton-openai
    resource: https://openai.com/index/triton/
    title: "OpenAI: Introducing Triton — open-source GPU programming for neural networks"
  - id: openxla
    resource: https://opensource.googleblog.com/2023/03/openxla-is-ready-to-accelerate-and-simplify-ml-development.html
    title: "Google Open Source blog: OpenXLA is available now"
  - id: openxla-launch
    resource: https://www.hpcwire.com/bigdatawire/2022/10/11/google-announces-open-source-ml-compiler-project-openxla/
    title: "BigDATAwire: Google Announces Open Source ML Compiler Project, OpenXLA (2022-10-11)"
  - id: pt2
    resource: https://pytorch.org/get-started/pytorch-2-x/
    title: "PyTorch: PyTorch 2.x (torch.compile)"
  - id: pt2-release
    resource: https://github.com/pytorch/pytorch/releases/tag/v2.0.0
    title: "GitHub: PyTorch 2.0 release notes"
  - id: octoai
    resource: https://www.forbes.com/sites/janakirammsv/2024/09/30/nvidia-acquires-octoai-to-dominate-enterprise-generative-ai-solutions/
    title: "Forbes: Nvidia Acquires OctoAI To Dominate Enterprise Generative AI Solutions"
  - id: octoai-sunset
    resource: https://chatforest.com/reviews/octoai-nvidia-acquisition-inference-api-sunset/
    title: "ChatForest: OctoAI — the Apache TVM startup NVIDIA acquired and shut down in 5 weeks"
  - id: helion
    resource: https://pytorch.org/blog/helion/
    title: "PyTorch blog: Helion — a high-level DSL for performant and portable ML kernels"
  - id: cuda-tile
    resource: https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-tile-examined-ai-giant-releases-programming-style-for-rubin-feynman-and-beyond-tensor-native-execution-model-lays-the-foundation-for-blackwell-and-beyond
    title: "Tom's Hardware: Nvidia's CUDA Tile examined"
  - id: mojo-1
    resource: https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here
    title: "Modular: Modular 26.5 — Mojo 1.0 is here!"
  - id: vllm-triton
    resource: https://pytorch.org/blog/enabling-vllm-v1-on-amd-gpus-with-triton/
    title: "PyTorch blog: Enabling vLLM V1 on AMD GPUs with Triton"
---

# Summary

**Succeeding and consolidating.** In 2018 every framework and chip vendor had its own graph
compiler: XLA, TVM, Glow, nGraph, TensorRT. By 2026 the field had settled on a few layers:

- **MLIR** (2019) became the reusable compiler infrastructure under XLA/OpenXLA, IREE, Triton,
  Mojo, CIRCT and most AI-chip toolchains.[^mlir-tf][^mlir-wiki]
- **Triton** (OpenAI, 2021) became the way to write custom GPU kernels in Python.[^triton-openai]
- **PyTorch 2.0's torch.compile** (2023) made compilation the default way to speed up the dominant
  framework by generating Triton code.[^pt2][^pt2-release]

Nvidia then answered with its own tile-level IR and Python DSL in CUDA 13.1 (December 2025).[^cuda-tile]
The failures share a pattern. Bets that required a new host language (Swift for TensorFlow,
archived February 2021) or a hardware-neutral business (OctoAI/TVM, bought by Nvidia and shut down
within weeks in 2024) did not survive.[^s4tf][^octoai][^octoai-sunset]

# The idea

Deep-learning programs are dataflow graphs of tensor operators. Running them fast on GPUs, TPUs and
custom chips needs operator fusion, layout and tiling decisions, and per-target code generation.
Hand-written kernel libraries (cuDNN, cuBLAS) do not scale to new operators and new chips. ML
compilers lower framework programs through several IRs to hardware code. **MLIR** generalised this
into "dialects" that can be mixed and lowered step by step, so each project did not need its own IR
stack.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-04 | Google announces MLIR; contributed to LLVM later in 2019[^mlir-tf][^mlir-wiki] | + |
| E2 | 2021-02 | Swift for TensorFlow archived[^s4tf][^s4tf-tsai] | − |
| E2 | 2021-07-28 | OpenAI releases Triton 1.0[^triton-openai] | + |
| E3 | 2022-10 | OpenXLA launched with AMD, Arm, Meta, Nvidia, Intel and others; StableHLO as portable op set[^openxla-launch][^openxla] | + |
| E3 | 2023-03 | PyTorch 2.0: torch.compile via TorchDynamo + TorchInductor (Triton); 43% faster training across 163 models on A100[^pt2-release] | + |
| E3 | 2023-05 | Modular announces Mojo, built on MLIR | + |
| E3 | 2024-09 | Nvidia acquires OctoAI (Apache TVM founders); services wound down 2024-10-31[^octoai][^octoai-sunset] | − |
| E4 | 2025-10 | PyTorch's Helion DSL (compiles to Triton) public beta[^helion] | + |
| E4 | 2025-12 | CUDA 13.1 introduces CUDA Tile IR and cuTile Python[^cuda-tile] | + |
| E4 | 2026-08 | Mojo 1.0 released; compiler open-sourced[^mojo-1] | + |

# Where it succeeded

- **MLIR as shared infrastructure.** XLA, IREE, Triton, Mojo, Flang (HLFIR) and ClangIR are all
  built on it. See [MLIR](/runtimes/mlir.md).
- **Triton and torch.compile.** Kernel authors write blocked programs in Python, and the
  compiler handles shared memory and tensor cores. Triton runs on Nvidia and AMD, and vLLM built
  a portable attention backend on it.[^vllm-triton]
- **JAX/XLA at Google.** TPU workloads, including Google's own large-model training, run through
  XLA, and OpenXLA opened it to other vendors.[^openxla]
- **Higher-level kernel DSLs.** Helion, TileLang, cuTile and Mojo all move toward tile-level
  abstractions, which shows the Triton model won.[^helion][^cuda-tile]

# Where it failed or stalled

- **New host languages.** Swift for TensorFlow tried to make Swift the ML language through
  compiler-integrated autodiff, and was archived in 2021. Python's ecosystem was too strong.[^s4tf-tsai]
  Mojo's answer was to be a Python superset, and it still took until 2026 to reach 1.0.
- **Hardware-neutral compiler businesses.** TVM's company OctoAI moved to model serving, was bought
  by Nvidia and shut down. The portability layer ended up owned by the dominant vendor.[^octoai-sunset]
- **Graph-capture frameworks.** TensorFlow 1.x static graphs lost to PyTorch's eager mode.
  torch.compile succeeded because it captures graphs *from* eager Python (TorchDynamo) instead of
  asking users to write graphs.
- **Portability promises.** Despite StableHLO and Triton backends, peak performance on new Nvidia
  GPUs still arrives first through Nvidia's own stack (CUTLASS, cuTile).

# Why

1. **Meet developers in Python.** Tools that kept users in Python and in eager PyTorch won (Triton,
   torch.compile). Tools that asked them to switch language (Swift) or to write static graphs lost.
2. **Shared infrastructure beat bespoke IRs.** MLIR lowered the cost of building a new compiler,
   so hardware startups and research projects reused it instead of starting from scratch.
3. **Whoever controls the hardware controls the last mile.** Nvidia can co-design IR (PTX, Tile
   IR) with hardware and absorb third parties (OctoAI). Portability layers stay one generation
   behind.
4. **Workloads converged.** Transformers made a few kernels (attention, GEMM, normalisation)
   dominant, which favoured kernel DSLs over general graph compilers.

# Lessons

- Compilation should be an opt-in accelerator for code users already write (torch.compile), not a
  new programming model.
- Infrastructure (MLIR) outlives products. Bet on it rather than on a single compiler.
- Hardware-neutrality is hard to fund when one vendor has most of the market.

# Related

- [MLIR](/runtimes/mlir.md), [LLVM](/runtimes/llvm.md), [PTX and GPU runtimes](/runtimes/ptx-and-gpu-runtimes.md)
- [Triton](/languages/triton.md), [CUDA](/languages/cuda.md), [Mojo](/languages/mojo.md)
- [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md)
- [Python superset languages](/ideas/types/python-superset-languages.md)
- [MLIR announced](/events/2019-04-mlir-announced.md), [PyTorch 2.0](/events/2023-03-pytorch-2-torch-compile.md), [Nvidia buys OctoAI](/events/2024-09-nvidia-acquires-octoai.md)

[^mlir-tf]: TensorFlow blog, MLIR — https://blog.tensorflow.org/2019/04/mlir-new-intermediate-representation.html
[^mlir-wiki]: Wikipedia, MLIR — https://en.wikipedia.org/wiki/MLIR_(software)
[^s4tf]: Swift for TensorFlow (Archived) — https://github.com/tensorflow/swift
[^s4tf-tsai]: Swift for TensorFlow Canceled — https://mjtsai.com/blog/2021/02/16/swift-for-tensorflow-canceled/
[^triton-openai]: OpenAI, Introducing Triton — https://openai.com/index/triton/
[^openxla]: OpenXLA is available now — https://opensource.googleblog.com/2023/03/openxla-is-ready-to-accelerate-and-simplify-ml-development.html
[^openxla-launch]: OpenXLA launch — https://www.hpcwire.com/bigdatawire/2022/10/11/google-announces-open-source-ml-compiler-project-openxla/
[^pt2]: PyTorch 2.x — https://pytorch.org/get-started/pytorch-2-x/
[^pt2-release]: PyTorch 2.0 release — https://github.com/pytorch/pytorch/releases/tag/v2.0.0
[^octoai]: Forbes on OctoAI — https://www.forbes.com/sites/janakirammsv/2024/09/30/nvidia-acquires-octoai-to-dominate-enterprise-generative-ai-solutions/
[^octoai-sunset]: OctoAI sunset — https://chatforest.com/reviews/octoai-nvidia-acquisition-inference-api-sunset/
[^helion]: PyTorch, Helion — https://pytorch.org/blog/helion/
[^cuda-tile]: Tom's Hardware on CUDA Tile — https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-tile-examined-ai-giant-releases-programming-style-for-rubin-feynman-and-beyond-tensor-native-execution-model-lays-the-foundation-for-blackwell-and-beyond
[^mojo-1]: Mojo 1.0 — https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here
[^vllm-triton]: vLLM V1 on AMD with Triton — https://pytorch.org/blog/enabling-vllm-v1-on-amd-gpus-with-triton/
