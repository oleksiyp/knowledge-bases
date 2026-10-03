---
type: OSS Project
title: NVIDIA TensorRT-LLM
description: "NVIDIA's open-source (Apache-2.0) LLM inference library for its GPUs; reached v1.0 in Sep 2025 and now serves as a backend under Dynamo — stable, vendor-controlled."
resource: https://github.com/NVIDIA/TensorRT-LLM
tags: [ai-inference, nvidia, apache-2.0, single-vendor]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: single-vendor
steward: NVIDIA
backing_orgs: []
metrics:
  github_stars: { value: 14760, as_of: 2026-10-03 }
  latest_release: { value: v1.3.0rc29, as_of: 2026-09-29 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: trtllm-gh
    resource: https://github.com/NVIDIA/TensorRT-LLM
    title: TensorRT-LLM GitHub repository (stars, releases via GitHub API)
  - id: dynamo-gh
    resource: https://github.com/ai-dynamo/dynamo
    title: NVIDIA Dynamo GitHub repository
---

# Summary
TensorRT-LLM is NVIDIA's performance-reference engine. It hit v1.0.0 on 2025-09-24 and has been iterating on 1.3 release candidates (v1.3.0rc29 on 2026-09-29)[^trtllm-gh]. Its 14.8k stars are a fraction of vLLM's 93k, reflecting that most users consume it indirectly (via Dynamo, which supports TensorRT-LLM, vLLM and SGLang backends)[^dynamo-gh]. Verdict: stable, important for peak NVIDIA performance, but not the community default.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-24 | v1.0.0 released[^trtllm-gh] | OSS | + |
| W3 | 2026-09-29 | v1.3.0rc29 — long RC train[^trtllm-gh] | OSS | flat |

# OSS successes
- Open development on GitHub with Apache-2.0; first-class Blackwell optimisations[^trtllm-gh].
# OSS failures / risks
- NVIDIA-only; community adoption trails vendor-neutral engines.
# Business successes
- Supports NVIDIA's hardware moat (indirect).
# Business failures / risks
- n/a (no standalone business).

# By window
## W3
- 1.3 RC series continues[^trtllm-gh].
## W6
- No notable events found.
## W9
- Integrated as a Dynamo backend at Dynamo 1.0 (2026-03-13)[^dynamo-gh].
## W12
- No notable events found.
## W24
- v1.0.0 (2025-09-24)[^trtllm-gh].

# Lessons
- Vendor engines survive as performance backends behind neutral orchestration layers rather than as user-facing defaults.

# Related
- [NVIDIA Dynamo](/projects/ai-inference/nvidia-dynamo.md), [vLLM](/projects/ai-inference/vllm.md)

[^trtllm-gh]: TensorRT-LLM GitHub — https://github.com/NVIDIA/TensorRT-LLM
[^dynamo-gh]: Dynamo GitHub — https://github.com/ai-dynamo/dynamo
