---
type: OSS Project
title: KServe
description: "Kubernetes model-serving platform (ex-Kubeflow) accepted into CNCF at Incubating level in Sep 2025, increasingly fronting vLLM/llm-d — growing."
resource: https://github.com/kserve/kserve
tags: [ai-inference, kubernetes, model-serving, apache-2.0, cncf]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2019-)"]
governance: foundation
steward: CNCF
backing_orgs: []
metrics:
  github_stars: { value: 6062, as_of: 2026-10-03 }
  latest_release: { value: v0.21.0, as_of: 2026-09-25 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kserve-gh
    resource: https://github.com/kserve/kserve
    title: KServe GitHub repository (stars, releases via GitHub API)
  - id: cncf-kserve
    resource: https://www.cncf.io/projects/kserve/
    title: "CNCF: KServe (accepted 2025-09-29, Incubating)"
    author: org:cncf
---

# Summary
KServe joined CNCF on 2025-09-29 directly at the Incubating level[^cncf-kserve], giving Kubernetes-native model serving a neutral home separate from Kubeflow. Releases continued (v0.15.0 on 2025-03-31 through v0.21.0 on 2026-09-25)[^kserve-gh]. Verdict: growing; modest star count (6k) belies enterprise usage via Red Hat OpenShift AI and others (not quantified here).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-31 | v0.15.0[^kserve-gh] | OSS | + |
| W24 | 2025-09-29 | Accepted to CNCF as Incubating[^cncf-kserve] | Governance | + |
| W3 | 2026-09-25 | v0.21.0[^kserve-gh] | OSS | + |

# OSS successes
- CNCF incubation; integration with vLLM-based stacks[^cncf-kserve].
# OSS failures / risks
- Overlap with llm-d and NVIDIA Dynamo for LLM-specific serving.
# Business successes
- n/a
# Business failures / risks
- n/a

# By window
## W3
- v0.21.0[^kserve-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- Post-CNCF releases; no notable events found.
## W24
- CNCF acceptance (2025-09-29)[^cncf-kserve].

# Lessons
- Moving from an umbrella project (Kubeflow) to its own foundation slot increases visibility and contributor diversity.

# Related
- [llm-d](/projects/ai-inference/llm-d.md), [Kubeflow](/projects/ai-inference/kubeflow.md), [vLLM](/projects/ai-inference/vllm.md)

[^kserve-gh]: KServe GitHub — https://github.com/kserve/kserve
[^cncf-kserve]: CNCF KServe — https://www.cncf.io/projects/kserve/
