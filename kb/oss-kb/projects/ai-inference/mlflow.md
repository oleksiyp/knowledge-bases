---
type: OSS Project
title: MLflow
description: "Databricks-originated, Linux Foundation-hosted ML lifecycle platform that reinvented itself for GenAI with MLflow 3 (June 2025) — stable-to-growing."
resource: https://github.com/mlflow/mlflow
tags: [ai-inference, mlops, apache-2.0]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2018-)"]
governance: company-led-open-core
steward: Databricks (project hosted at Linux Foundation)
backing_orgs: []
metrics:
  github_stars: { value: 28239, as_of: 2026-10-03 }
  latest_release: { value: v3.16.1, as_of: 2026-09-17 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mlflow-gh
    resource: https://github.com/mlflow/mlflow
    title: MLflow GitHub repository (stars, releases via GitHub API)
---

# Summary
MLflow 3.0.0 shipped on 2025-06-11, repositioning the project around GenAI tracing, evaluation and prompt/agent management; by September 2026 it was on v3.16.1 with 28k stars[^mlflow-gh]. It monetises indirectly through Databricks' managed MLflow. Verdict: stable; successfully pivoted from classic MLOps to LLMOps rather than being displaced (details of adoption not independently verified).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-11 | MLflow 3.0.0 (GenAI-focused)[^mlflow-gh] | OSS | + |
| W3 | 2026-09-17 | v3.16.1[^mlflow-gh] | OSS | flat |

# OSS successes
- Rapid 3.x cadence (16 minor releases in ~15 months)[^mlflow-gh].
# OSS failures / risks
- Crowded LLM-observability market (Langfuse, Arize Phoenix etc.).
# Business successes
- Supports Databricks platform (indirect; not quantified).
# Business failures / risks
- n/a

# By window
## W3
- v3.15–3.16[^mlflow-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- MLflow 3.0 (2025-06-11)[^mlflow-gh].

# Lessons
- Mature MLOps projects survive the LLM shift by re-scoping to tracing/evaluation.

# Related
- [Kubeflow](/projects/ai-inference/kubeflow.md), [KServe](/projects/ai-inference/kserve.md)

[^mlflow-gh]: MLflow GitHub — https://github.com/mlflow/mlflow
