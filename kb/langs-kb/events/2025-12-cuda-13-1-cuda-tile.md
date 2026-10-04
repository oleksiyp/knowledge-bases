---
type: Event
title: CUDA 13.1 introduces CUDA Tile
description: NVIDIA introduced CUDA Tile with CUDA 13.1, offering a tile-oriented programming model and cuTile tooling
  above the traditional thread-oriented interface..
event_kind: release
date: '2025-12-04'
date_precision: day
era: E4
impact: positive
tags:
- release
languages: []
runtimes: []
ideas:
- ideas/platforms-and-portability/gpu-programming-languages
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: CUDA 13.1 introduces CUDA Tile
  resource: https://developer.nvidia.com/blog/focus-on-your-algorithm-nvidia-cuda-tile-handles-the-hardware/
---

# What happened
NVIDIA introduced CUDA Tile with CUDA 13.1, offering a tile-oriented programming model and cuTile tooling above the traditional thread-oriented interface.[^announcement]

# Why it matters
**Interpretation:** higher-level kernel abstractions can coexist with a vendor’s established execution platform. A new programming layer does not itself make kernels portable across vendors.

# Related
- [GPU programming](/ideas/platforms-and-portability/gpu-programming-languages.md)

[^announcement]: CUDA 13.1 introduces CUDA Tile — https://developer.nvidia.com/blog/focus-on-your-algorithm-nvidia-cuda-tile-handles-the-hardware/
