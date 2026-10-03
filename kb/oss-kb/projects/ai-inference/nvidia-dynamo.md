---
type: OSS Project
title: NVIDIA Dynamo
description: "NVIDIA's open-source datacenter-scale distributed inference framework (disaggregated prefill/decode, KV routing) over vLLM/SGLang/TensorRT-LLM; launched at GTC Mar 2025, 1.0 in Mar 2026 — growing."
resource: https://github.com/ai-dynamo/dynamo
tags: [ai-inference, distributed-inference, nvidia, apache-2.0]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2025-)"]
governance: single-vendor
steward: NVIDIA
backing_orgs: []
metrics:
  github_stars: { value: 8209, as_of: 2026-10-03 }
  latest_release: { value: v1.5.0, as_of: 2026-09-21 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dynamo-gh
    resource: https://github.com/ai-dynamo/dynamo
    title: Dynamo GitHub repository (stars, releases via GitHub API)
  - id: rh-llmd
    resource: https://www.redhat.com/en/about/press-releases/red-hat-launches-llm-d-community-powering-distributed-gen-ai-inference-scale
    title: Red Hat launches llm-d (NVIDIA a founding contributor)
---

# Summary
Dynamo is NVIDIA's answer to the "inference control plane" problem: v0.1.0 shipped on 2025-03-18 (GTC 2025), v1.0.0 on 2026-03-13, and v1.5.0 on 2026-09-21[^dynamo-gh]. It orchestrates engines rather than replacing them, supporting vLLM, SGLang and TensorRT-LLM backends[^dynamo-gh]. It competes conceptually with llm-d — to which NVIDIA is also a founding contributor[^rh-llmd]. Verdict: growing; vendor-led.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-18 | v0.1.0 launched at GTC[^dynamo-gh] | OSS | + |
| W24 | 2025-05-20 | NVIDIA also co-founds llm-d (overlapping control plane)[^rh-llmd] | OSS | mixed |
| W9 | 2026-03-13 | v1.0.0[^dynamo-gh] | OSS | + |
| W3 | 2026-09-21 | v1.5.0[^dynamo-gh] | OSS | + |

# OSS successes
- Rapid path to 1.0 within 12 months; engine-agnostic design[^dynamo-gh].
# OSS failures / risks
- Single-vendor governance; overlaps with community llm-d and KServe.
# Business successes
- Strengthens NVIDIA's full-stack position (indirect).
# Business failures / risks
- n/a

# By window
## W3
- v1.5.0 (2026-09-21)[^dynamo-gh].
## W6
- Continued 1.x releases[^dynamo-gh].
## W9
- v1.0.0 (2026-03-13)[^dynamo-gh].
## W12
- Pre-1.0 releases; no notable events found.
## W24
- Launch (2025-03-18)[^dynamo-gh].

# Lessons
- The value in inference moved up-stack to routing, KV-cache management and disaggregation; NVIDIA hedges by both owning (Dynamo) and co-governing (llm-d) that layer.

# Related
- [TensorRT-LLM](/projects/ai-inference/tensorrt-llm.md), [llm-d](/projects/ai-inference/llm-d.md), [vLLM](/projects/ai-inference/vllm.md), [SGLang](/projects/ai-inference/sglang.md)

[^dynamo-gh]: Dynamo GitHub — https://github.com/ai-dynamo/dynamo
[^rh-llmd]: Red Hat, 2025-05-20 — https://www.redhat.com/en/about/press-releases/red-hat-launches-llm-d-community-powering-distributed-gen-ai-inference-scale
