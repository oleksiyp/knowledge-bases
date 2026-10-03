---
type: OSS Project
title: Kubeflow
description: "CNCF Kubernetes ML platform restructured into independent sub-projects (Pipelines, Trainer, Katib, Model Registry/Hub, SDK); the umbrella repo no longer holds code — stable but fragmented."
resource: https://github.com/kubeflow/kubeflow
tags: [ai-inference, mlops, kubernetes, apache-2.0, cncf]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2017-)"]
governance: foundation
steward: CNCF
backing_orgs: []
metrics:
  umbrella_repo_stars: { value: 15896, as_of: 2026-10-03 }
  pipelines_stars: { value: 4232, as_of: 2026-10-03 }
  trainer_latest_release: { value: v2.3.0, as_of: 2026-08-07 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kf-gh
    resource: https://github.com/kubeflow/kubeflow
    title: kubeflow/kubeflow repository ('redirect' release note, 2026-04-29)
  - id: kf-trainer
    resource: https://github.com/kubeflow/trainer
    title: Kubeflow Trainer repository (releases via GitHub API)
---

# Summary
Kubeflow's last umbrella release was v1.10.0 (2025-03-25); on 2026-04-29 the `kubeflow/kubeflow` repo published a "redirect" note stating it no longer contains code and listing the independent sub-projects, each on its own release cycle (SDK, Notebooks, Spark Operator, Trainer, Katib, Hub/Model Registry, Pipelines)[^kf-gh]. Sub-projects remain active (Trainer v2.3.0 on 2026-08-07)[^kf-trainer]. Verdict: stable; LLM-serving moved to KServe/llm-d rather than Kubeflow proper.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-25 | Last umbrella release v1.10.0[^kf-gh] | OSS | flat |
| W6 | 2026-04-29 | Umbrella repo converted to redirect; per-project releases[^kf-gh] | OSS/governance | mixed |
| W3 | 2026-08-07 | Kubeflow Trainer v2.3.0[^kf-trainer] | OSS | + |

# OSS successes
- Sub-projects (Pipelines, Trainer) continue independent releases[^kf-trainer].
# OSS failures / risks
- Fragmentation; low umbrella-level momentum (5 commits in W3 on umbrella repo).
# Business successes
- n/a
# Business failures / risks
- n/a

# By window
## W3
- Trainer v2.3.0[^kf-trainer].
## W6
- Restructure note (2026-04-29)[^kf-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- v1.10.0 (2025-03-25)[^kf-gh].

# Lessons
- Monolithic "ML platform" distributions give way to composable sub-projects in the LLM era.

# Related
- [KServe](/projects/ai-inference/kserve.md), [llm-d](/projects/ai-inference/llm-d.md), [MLflow](/projects/ai-inference/mlflow.md)

[^kf-gh]: kubeflow/kubeflow — https://github.com/kubeflow/kubeflow
[^kf-trainer]: Kubeflow Trainer — https://github.com/kubeflow/trainer
