---
type: Event
title: Triton 1.0 opens a higher-level GPU kernel path
description: OpenAI released Triton 1.0, an open-source language and compiler for GPU kernels.
event_kind: release
date: '2021-07-28'
date_precision: day
era: E2
impact: positive
tags:
- release
languages:
- languages/triton
runtimes: []
ideas: []
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: Triton 1.0 opens a higher-level GPU kernel path
  resource: https://openai.com/index/triton/
---

# What happened
OpenAI released Triton 1.0, an open-source language and compiler for GPU kernels. Its block-oriented model lets programmers express computations while delegating important hardware mapping decisions to the compiler.[^announcement]

# Why it matters
**Interpretation:** this is an alternative kernel-authoring layer, not a replacement for the entire CUDA platform. Hardware support and competitive performance remain separate questions.

# Related
- [Triton](/languages/triton.md)

[^announcement]: Triton 1.0 opens a higher-level GPU kernel path — https://openai.com/index/triton/
