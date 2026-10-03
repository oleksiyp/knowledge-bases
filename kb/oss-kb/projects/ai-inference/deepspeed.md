---
type: OSS Project
title: DeepSpeed
description: "Microsoft-originated distributed training/optimization library, now a PyTorch Foundation-hosted project under the deepspeedai org; steady research-driven releases — stable."
resource: https://github.com/deepspeedai/DeepSpeed
tags: [ai-inference, training, apache-2.0, foundation-hosted]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2020-)"]
governance: foundation
steward: PyTorch Foundation (Linux Foundation); originally Microsoft
backing_orgs: [organizations/pytorch-foundation]
metrics:
  github_stars: { value: 43175, as_of: 2026-10-03 }
  latest_release: { value: v0.19.7, as_of: 2026-09-16 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ds-gh
    resource: https://github.com/deepspeedai/DeepSpeed
    title: DeepSpeed GitHub repository (README news, releases via GitHub API)
  - id: pt-x-ray
    resource: https://x.com/PyTorch/status/1983656568450068579
    title: "PyTorch on X: Ray joins PyTorch, vLLM, and DeepSpeed under open governance"
---

# Summary
DeepSpeed moved from Microsoft's org to the vendor-neutral `deepspeedai` org and is listed as a PyTorch Foundation-hosted project alongside PyTorch, vLLM and Ray (exact join date not verified here)[^pt-x-ray]. Development continues at a research cadence — DeepCompile (Apr 2025), Arctic Long Sequence Training with Snowflake (Jun 2025), ZenFlow (Aug 2025), SuperOffload (Oct 2025; ASPLOS 2026 honourable mention), Muon optimizer and AMD SDMA work (May 2026)[^ds-gh]. Verdict: stable; relevance shifting from frontier pre-training (now dominated by Megatron/torchtitan/in-house stacks) to efficient fine-tuning and offload.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04 | DeepCompile[^ds-gh] | OSS | + |
| W24 | 2025-06 | Arctic Long Sequence Training (Snowflake)[^ds-gh] | OSS | + |
| W12 | 2025-10 | SuperOffload; Ray x DeepSpeed meetup[^ds-gh] | OSS | + |
| W12 | 2025-10-22 | Listed among PyTorch Foundation hosted projects at Ray announcement[^pt-x-ray] | Governance | + |
| W6 | 2026-05 | Muon optimizer; AMD SDMA for ZeRO-3[^ds-gh] | OSS | + |
| W3 | 2026-09-16 | v0.19.7[^ds-gh] | OSS | flat |

# OSS successes
- Vendor-neutral governance; multi-company contributions (Snowflake, LinkedIn, AMD)[^ds-gh].
# OSS failures / risks
- Less central to frontier training than in 2023.
# Business successes
- n/a
# Business failures / risks
- n/a

# By window
## W3
- Patch releases[^ds-gh].
## W6
- Muon, SDMA (May 2026)[^ds-gh].
## W9
- ASPLOS 2026 tutorial and award (Mar 2026)[^ds-gh].
## W12
- SuperOffload; Core API updates (Dec 2025)[^ds-gh].
## W24
- DeepCompile, ALST, ZenFlow[^ds-gh].

# Lessons
- Big-tech-originated projects that move to foundations gain multi-vendor contributors even as the originator's interest wanes.

# Related
- [PyTorch](/projects/ai-inference/pytorch.md), [PyTorch Foundation](/organizations/pytorch-foundation.md)

[^ds-gh]: DeepSpeed GitHub — https://github.com/deepspeedai/DeepSpeed
[^pt-x-ray]: PyTorch on X — https://x.com/PyTorch/status/1983656568450068579
