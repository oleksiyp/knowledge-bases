---
type: OSS Project
title: llm-d
description: "Kubernetes-native distributed inference stack on vLLM launched by Red Hat with Google, IBM, NVIDIA and CoreWeave (May 2025), CNCF Sandbox since Mar 2026 — growing."
resource: https://github.com/llm-d/llm-d
tags: [ai-inference, distributed-inference, kubernetes, apache-2.0, cncf]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2025-)"]
governance: foundation
steward: CNCF (Sandbox); Red Hat-led
backing_orgs: []
metrics:
  github_stars: { value: 4711, as_of: 2026-10-03 }
  latest_release: { value: v0.10.0, as_of: 2026-09-29 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: llmd-gh
    resource: https://github.com/llm-d/llm-d
    title: llm-d GitHub repository (stars, releases via GitHub API)
  - id: rh-llmd
    resource: https://www.redhat.com/en/about/press-releases/red-hat-launches-llm-d-community-powering-distributed-gen-ai-inference-scale
    title: "Red Hat launches llm-d community (2025-05-20)"
    author: org:red-hat
  - id: cncf-llmd
    resource: https://www.cncf.io/projects/llm-d/
    title: "CNCF: llm-d (accepted 2026-03-12, Sandbox)"
    author: org:cncf
  - id: llmd-blog
    resource: https://llm-d.ai/blog
    title: llm-d blog (releases, routing, KV-cache work)
---

# Summary
llm-d is the multi-vendor "inference control plane" built around vLLM: launched 2025-05-20 at Red Hat Summit with CoreWeave, Google Cloud, IBM Research and NVIDIA as founding contributors[^rh-llmd], accepted to CNCF Sandbox on 2026-03-12[^cncf-llmd], and shipping roughly every 6–8 weeks (v0.2.0 2025-07-29 → v0.10.0 2026-09-29)[^llmd-gh]. Recent work covers token-aware routing (2–3x throughput claims), P2P KV-cache sharing, router HA and RL time-slicing[^llmd-blog]. Verdict: growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-20 | Launched by Red Hat + CoreWeave, Google, IBM, NVIDIA[^rh-llmd] | OSS | + |
| W24 | 2025-07-29 | v0.2.0[^llmd-gh] | OSS | + |
| W9 | 2026-03-12 | CNCF Sandbox[^cncf-llmd] | Governance | + |
| W6 | 2026-06-24 | v0.8 "inference control plane" (Flow Control, Batch Gateway)[^llmd-blog] | OSS | + |
| W3 | 2026-09-29 | v0.10.0[^llmd-gh] | OSS | + |

# OSS successes
- Multi-vendor founding coalition; neutral CNCF home[^rh-llmd][^cncf-llmd]; 48 new contributors between v0.6 and v0.8[^llmd-blog].
# OSS failures / risks
- Overlaps with NVIDIA Dynamo and KServe; still pre-1.0.
# Business successes
- Feeds Red Hat AI commercial offerings (not quantified).
# Business failures / risks
- n/a

# By window
## W3
- v0.9 (Aug), v0.10 (Sep); RL time-slicing[^llmd-blog][^llmd-gh].
## W6
- v0.8 control plane (2026-06-24)[^llmd-blog].
## W9
- CNCF Sandbox (2026-03-12)[^cncf-llmd].
## W12
- Continued releases; no notable events found.
## W24
- Launch (2025-05-20)[^rh-llmd].

# Lessons
- Enterprise vendors are standardising the layer above engines in neutral foundations from day one.

# Related
- [vLLM](/projects/ai-inference/vllm.md), [NVIDIA Dynamo](/projects/ai-inference/nvidia-dynamo.md), [KServe](/projects/ai-inference/kserve.md)

[^llmd-gh]: llm-d GitHub — https://github.com/llm-d/llm-d
[^rh-llmd]: Red Hat press release — https://www.redhat.com/en/about/press-releases/red-hat-launches-llm-d-community-powering-distributed-gen-ai-inference-scale
[^cncf-llmd]: CNCF llm-d — https://www.cncf.io/projects/llm-d/
[^llmd-blog]: llm-d blog — https://llm-d.ai/blog
