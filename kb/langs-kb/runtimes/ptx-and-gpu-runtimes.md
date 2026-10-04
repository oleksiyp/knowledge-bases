---
type: Runtime
title: PTX and GPU runtimes
description: GPU execution depends on compiler IRs, drivers and runtime libraries together. PTX provides NVIDIA-generation
  portability; HIP offers source portability with separate performance and compatibility work.
runtime_kind: compiler-backend
tags:
- compilers
- infrastructure
trajectory: growing
languages:
- languages/cuda
- languages/triton
- languages/mojo
ideas:
- ideas/platforms-and-portability/gpu-programming-languages
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: ptx
  title: 'NVIDIA: PTX ISA reference'
  resource: https://docs.nvidia.com/cuda/parallel-thread-execution/index.html
- id: cuda-guide
  title: CUDA 13.0 C++ Programming Guide
  resource: https://docs.nvidia.com/cuda/archive/13.0.0/cuda-c-programming-guide/index.html
- id: hip
  title: 'AMD: What is HIP?'
  resource: https://rocm.docs.amd.com/projects/HIP/en/latest/what_is_hip.html
- id: cuda13
  title: NVIDIA CUDA Toolkit 13.0 release notes
  resource: https://docs.nvidia.com/cuda/archive/13.0.0/cuda-toolkit-release-notes/index.html
---

# Summary
**Verdict: indispensable infrastructure with limited portability boundaries.** PTX is a virtual instruction set, not the CUDA runtime itself. Applications also need host APIs, compatible drivers, device code and libraries. A common source language does not make those execution stacks interchangeable.[^ptx][^cuda-guide]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1–E3 | continued evolution | PTX preserves a virtual target across NVIDIA generations | + [^ptx] |
| E2–E4 | HIP development | C++ runtime and kernel interfaces target AMD and NVIDIA | source portability [^hip] |
| E4 | 2025, CUDA 13.0 | Offline compilation for Maxwell, Pascal and Volta removed | compatibility cost [^cuda13] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Virtual ISA between language and device | Useful across supported GPU generations [^ptx] |
| Runtime-managed launches, memory and synchronization | Common programming contract for host code [^cuda-guide] |
| Cross-vendor source compatibility | Useful, but not binary or performance equivalence [^hip] |

# What succeeded
PTX gives compiler developers a documented intermediate target that the NVIDIA toolchain translates to hardware instructions. It helps separate language implementation from each device's native instruction encoding.[^ptx]

HIP offers C++ kernel and runtime interfaces for more than one vendor, reducing some source-porting effort. Its value is strongest when a program can stay within supported common APIs; vendor libraries and extensions still need individual treatment.[^hip]

# What failed or stalled
CUDA 13.0 removed offline compilation and library support for pre-Turing architectures. NVIDIA documents older toolkits as the path for continuing to build for them. This is a bounded support transition, not proof that every existing binary instantly stopped running.[^cuda13]

PTX compatibility depends on toolchain and driver capabilities. A driver must understand the PTX version it is asked to compile. Shipping a virtual ISA does not eliminate version management.[^cuda-guide]

# By era
- **E1:** virtual device code and host runtime APIs are established foundations.[^ptx][^cuda-guide]
- **E2–E3:** alternative source interfaces broaden targeting options.[^hip]
- **E4:** hardware support retirement makes the compatibility boundary explicit.[^cuda13]

# Lessons
**Synthesis:** distinguish four claims: source portability, binary compatibility, API availability and comparable performance. They require separate evidence. Benchmark the full execution path, including transfers, compilation and launch overhead, rather than only a kernel's arithmetic throughput.

# Related
- [CUDA](/languages/cuda.md)
- [Triton](/languages/triton.md)
- [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md)
- [MLIR](/runtimes/mlir.md)

[^ptx]: NVIDIA: PTX ISA reference — https://docs.nvidia.com/cuda/parallel-thread-execution/index.html
[^cuda-guide]: CUDA 13.0 C++ Programming Guide — https://docs.nvidia.com/cuda/archive/13.0.0/cuda-c-programming-guide/index.html
[^hip]: AMD: What is HIP? — https://rocm.docs.amd.com/projects/HIP/en/latest/what_is_hip.html
[^cuda13]: NVIDIA CUDA Toolkit 13.0 release notes — https://docs.nvidia.com/cuda/archive/13.0.0/cuda-toolkit-release-notes/index.html
