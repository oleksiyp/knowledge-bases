---
type: Organization
title: PyTorch Foundation
description: "Linux Foundation sub-foundation that became an umbrella in May 2025 and now hosts PyTorch, vLLM, DeepSpeed and Ray — the neutral home of the open AI training/inference stack."
resource: https://pytorch.org/foundation
tags: [foundation, ai-inference, linux-foundation, governance]
org_kind: foundation
hq: San Francisco, USA (Linux Foundation)
funding: { total_usd: "n/a (member-funded)", last_round: "n/a", last_round_date: 2025-05-01, valuation_usd: "n/a" }
business_verdict: thriving
projects: [projects/ai-inference/pytorch, projects/ai-inference/vllm, projects/ai-inference/deepspeed, projects/ai-inference/ray]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ptf-umbrella
    resource: https://pytorch.org/blog/pt-foundation-expands/
    title: "PyTorch Foundation Expands to an Umbrella Foundation (2025-05)"
  - id: ptf-vllm
    resource: https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
    title: PyTorch Foundation Welcomes vLLM (2025-05-06)
  - id: ptf-ray
    resource: https://www.prnewswire.com/news-releases/pytorch-foundation-welcomes-ray-to-deliver-a-unified-open-source-ai-compute-stack-302591184.html
    title: PyTorch Foundation Welcomes Ray (2025-10-22)
  - id: pt-x-ray
    resource: https://x.com/PyTorch/status/1983656568450068579
    title: "PyTorch on X: Ray joins PyTorch, vLLM, and DeepSpeed"
  - id: nscale-pr
    resource: https://www.nscale.com/press-releases/nscale-acquires-anyscale
    title: Nscale Acquires Anyscale (Nscale to join PyTorch Foundation)
---

# Summary
In May 2025 the PyTorch Foundation (then 30+ members and 120 ecosystem projects) expanded into an umbrella foundation with "foundation-hosted" platform and vertical projects that transfer assets to the Linux Foundation[^ptf-umbrella]. vLLM was the first new hosted project (2025-05-06)[^ptf-vllm], DeepSpeed followed in 2025, and Ray joined on 2025-10-22, giving the foundation a "unified open source AI compute stack" of PyTorch + vLLM + DeepSpeed + Ray[^ptf-ray][^pt-x-ray]. When Nscale agreed to buy Anyscale in July 2026 it committed to join the foundation[^nscale-pr].

# Business timeline
| Date | Event |
|---|---|
| 2025-05 | Umbrella expansion[^ptf-umbrella] |
| 2025-05-06 | vLLM hosted[^ptf-vllm] |
| 2025-10-22 | Ray hosted[^ptf-ray] |
| 2026-07-30 | Nscale to join as part of Anyscale acquisition[^nscale-pr] |

# Monetization model
Member dues, events (PyTorch Conference), training/certification[^ptf-umbrella].

# Successes
- Captured neutral-governance role for the most important inference and distributed-compute projects.

# Failures / risks
- Hosted projects now have heavily VC-funded or acquired corporate stewards (Inferact, Nscale/Anyscale); foundation must manage vendor balance.

# Related
- [PyTorch](/projects/ai-inference/pytorch.md), [vLLM](/projects/ai-inference/vllm.md), [Ray](/projects/ai-inference/ray.md), [DeepSpeed](/projects/ai-inference/deepspeed.md), [Linux Foundation](/organizations/linux-foundation.md)

[^ptf-umbrella]: PyTorch blog — https://pytorch.org/blog/pt-foundation-expands/
[^ptf-vllm]: PyTorch blog — https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
[^ptf-ray]: PR Newswire — https://www.prnewswire.com/news-releases/pytorch-foundation-welcomes-ray-to-deliver-a-unified-open-source-ai-compute-stack-302591184.html
[^pt-x-ray]: PyTorch on X — https://x.com/PyTorch/status/1983656568450068579
[^nscale-pr]: Nscale press release — https://www.nscale.com/press-releases/nscale-acquires-anyscale
