---
type: Event
title: PyTorch 2.0 introduces torch.compile
description: PyTorch 2.0 introduced torch.compile, integrating graph capture and compilation with existing Python
  model code.
event_kind: release
date: '2023-03-15'
date_precision: day
era: E3
impact: positive
tags:
- release
languages:
- languages/triton
runtimes: []
ideas:
- ideas/runtime-performance/ml-compilers-and-mlir
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: PyTorch 2.0 introduces torch.compile
  resource: https://github.com/pytorch/pytorch/releases/tag/v2.0.0
---

# What happened
PyTorch 2.0 introduced torch.compile, integrating graph capture and compilation with existing Python model code. Eager execution remained available.[^announcement]

# Why it matters
**Interpretation:** optional compilation reduces migration costs by preserving an established programming interface. Graph breaks, compilation overhead and backend coverage remain relevant limits.

# Related
- [Triton](/languages/triton.md)
- [ML compilers](/ideas/runtime-performance/ml-compilers-and-mlir.md)

[^announcement]: PyTorch 2.0 introduces torch.compile — https://github.com/pytorch/pytorch/releases/tag/v2.0.0
