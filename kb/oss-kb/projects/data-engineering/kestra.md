---
type: OSS Project
title: Kestra
description: Declarative (YAML) Apache-2.0 orchestrator from Paris; breakout of the period — 28.8k stars (overtaking Prefect and Dagster), $25M Series A (March 2026) and Kestra 2.0 (Sept 2026).
resource: https://github.com/kestra-io/kestra
tags: [orchestration, apache-2.0, company-led-open-core, breakout]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Kestra Technologies
backing_orgs: [organizations/kestra]
metrics:
  github_stars: { value: 28840, as_of: 2026-10-03 }
  organizations_using: { value: 30000, as_of: 2026-03-31, note: "company claim" }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kestra-gh
    resource: https://github.com/kestra-io/kestra
    title: Kestra GitHub repository (v2.0.0 2026-09-07; v1.3.x maintained)
    last_modified: 2026-10-03T00:00:00Z
  - id: techeu-kestra
    resource: https://tech.eu/2026/03/31/kestra-raises-25m-series-a-to-build-the-enterprise-orchestration-standard/
    title: "Tech.eu: Kestra raises $25M Series A (2026-03-31)"
  - id: kestra-seriesa
    resource: https://kestra.io/blogs/kestra-series-a
    title: "Kestra: We are the Orchestration Control Plane of the AI Era — Kestra raises $25M"
---

# Summary
Kestra's YAML-first, language-agnostic orchestration found a broad audience beyond Python data teams. It raised a $25M Series A led by RTP Global (with Alven, ISAI, Axeleo; total $36M), announced 2026-03-31, citing 25x enterprise revenue growth in 18 months, 2B+ workflows executed in 2025 and 30,000+ organizations[^techeu-kestra][^kestra-seriesa]. Kestra 2.0, with a new distributed execution engine and agentic orchestration, shipped 2026-09-07[^kestra-gh][^kestra-seriesa]. With 28.8k stars it now out-stars Prefect (24.0k) and Dagster (16.2k)[^kestra-gh]. Verdict: thriving breakout.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-03-31 | $25M Series A (RTP Global)[^techeu-kestra] | Business | + |
| W3 | 2026-09-07 | Kestra 2.0.0 released[^kestra-gh] | OSS | + |
| W3 | 2026-09-29 | 2.0.4 and 1.3.41 — dual-track maintenance[^kestra-gh] | OSS | + |

# OSS successes
- Fastest star growth among orchestrators; weekly patch releases on two trains[^kestra-gh].

# OSS failures / risks
- Company-led governance; enterprise features in paid edition.

# Business successes
- Series A plus claimed 25x enterprise revenue growth[^techeu-kestra].

# Business failures / risks
- Late entrant facing Airflow's incumbency and the now-combined Prefect+Dagster.

# By window
## W3
- Kestra 2.0 GA[^kestra-gh].
## W6
- No notable events found (1.3.x releases).
## W9
- Series A[^techeu-kestra].
## W12
- No notable events found.
## W24
- Rapid adoption; 2B+ workflows executed in 2025 (company claim)[^kestra-seriesa].

# Lessons
- Declarative, language-agnostic UX can win new users even in a mature category.

# Related
- [Kestra (org)](/organizations/kestra.md), [Apache Airflow](/projects/data-engineering/apache-airflow.md), [Prefect](/projects/data-engineering/prefect.md), [Dagster](/projects/data-engineering/dagster.md)

[^kestra-gh]: Kestra GitHub releases.
[^techeu-kestra]: Tech.eu, 2026-03-31.
[^kestra-seriesa]: Kestra blog, Series A.
