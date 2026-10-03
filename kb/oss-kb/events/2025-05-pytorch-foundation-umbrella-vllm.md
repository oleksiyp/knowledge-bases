---
type: Event
title: "PyTorch Foundation becomes an umbrella foundation; vLLM joins"
description: "In May 2025 the PyTorch Foundation expanded to host projects beyond PyTorch, with UC Berkeley contributing vLLM as its first new foundation-hosted project."
event_kind: foundation-move
date: 2025-05-06
window: W24
impact: positive
projects: [projects/ai-inference/vllm, projects/ai-inference/pytorch]
organizations: [organizations/pytorch-foundation, organizations/inferact]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ptf-umbrella
    resource: https://pytorch.org/blog/pt-foundation-expands/
    title: "PyTorch Foundation Expands to an Umbrella Foundation (2025-05)"
  - id: ptf-vllm
    resource: https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
    title: "PyTorch Foundation Welcomes vLLM as a Hosted Project (2025-05-06)"
  - id: vllm-gh
    resource: https://github.com/vllm-project/vllm
    title: "vLLM GitHub repository"
---

# What happened
The PyTorch Foundation announced its expansion into an umbrella foundation with "foundation-hosted" platform and vertical projects that transfer assets to the Linux Foundation[^ptf-umbrella]. On 2025-05-06 it welcomed vLLM — then 46.5k+ stars and 1,000+ contributors — contributed by UC Berkeley[^ptf-vllm].

# Why it matters
It gave the most-used open LLM serving engine vendor-neutral governance just before inference became the hottest infra market, letting AMD, Google, Intel, AWS, Huawei and IBM all invest in one codebase via hardware plugins[^ptf-vllm].

# Outcome so far
vLLM reached 93k stars by Oct 2026[^vllm-gh]; DeepSpeed and Ray followed into the foundation; vLLM founders raised a $150M seed for Inferact (Jan 2026) without the project leaving neutral governance.

# Related
- [vLLM](/projects/ai-inference/vllm.md), [PyTorch](/projects/ai-inference/pytorch.md), [PyTorch Foundation](/organizations/pytorch-foundation.md), [Ray joins](/events/2025-10-ray-joins-pytorch-foundation.md)

[^ptf-umbrella]: PyTorch Foundation Expands to an Umbrella Foundation (2025-05) — https://pytorch.org/blog/pt-foundation-expands/
[^ptf-vllm]: PyTorch Foundation Welcomes vLLM as a Hosted Project (2025-05-06) — https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
[^vllm-gh]: vLLM GitHub repository — https://github.com/vllm-project/vllm
