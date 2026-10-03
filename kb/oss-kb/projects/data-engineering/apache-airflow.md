---
type: OSS Project
title: Apache Airflow
description: The incumbent orchestrator; Airflow 3 (April 2025) was its biggest release in years and 3.1–3.3 followed on schedule, while main vendor Astronomer raised $93M then endured a viral CEO scandal (July 2025) and leadership reset.
resource: https://github.com/apache/airflow
tags: [orchestration, apache-2.0, asf, foundation-hosted]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: [organizations/astronomer]
metrics:
  github_stars: { value: 47036, as_of: 2026-10-03 }
  state_of_airflow_respondents: { value: 5800, as_of: 2026-01, note: "State of Airflow 2026 survey" }
oss_verdict: thriving
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: airflow-gh
    resource: https://github.com/apache/airflow
    title: Apache Airflow GitHub repository (3.0.0 2025-04-22, 3.1.0 2025-09-25, 3.2.0 2026-04-07, 3.3.0 2026-07-06)
    last_modified: 2026-10-03T00:00:00Z
  - id: astro-seriesd
    resource: https://www.astronomer.io/press-releases/astronomer-secures-93-million-series-d-funding/
    title: "Astronomer secures $93M Series D (2025-05-01)"
  - id: cnbc-byron
    resource: https://www.cnbc.com/2025/07/19/astronomer-ceo-andy-byron-resigns-after-viral-coldplay-kiss-cam-controversy.html
    title: "CNBC: Astronomer CEO Andy Byron resigns after viral Coldplay kiss-cam controversy"
  - id: astro-report
    resource: https://www.astronomer.io/press-releases/astronomer-releases-state-of-apache-airflow-2026-report/
    title: "Astronomer releases State of Apache Airflow 2026 report"
  - id: bigdatawire-af3
    resource: https://www.hpcwire.com/bigdatawire/this-just-in/astronomer-unveils-apache-airflow-3-to-power-ai-and-real-time-data-workflows/
    title: "BigDATAwire: Astronomer unveils Apache Airflow 3"
---

# Summary
Airflow 3.0 (2025-04-22) — the first major in ~4.5 years — added DAG versioning, a React UI, the Edge Executor and a task-execution API enabling remote/multi-language tasks[^airflow-gh][^bigdatawire-af3]. Minor releases followed on a ~6-month rhythm: 3.1 (2025-09-25), 3.2 (2026-04-07), 3.3 (2026-07-06), plus a Java SDK beta (July 2026)[^airflow-gh]. It remains the most-starred orchestrator (~47k)[^airflow-gh], and the State of Airflow 2026 survey drew 5,800+ respondents across 122 countries[^astro-report]. On the business side, Astronomer raised a $93M Series D (May 2025)[^astro-seriesd], then saw CEO Andy Byron resign on 2025-07-19 after the Coldplay "kiss-cam" incident; co-founder Pete DeJoy became CEO[^cnbc-byron]. Verdict: OSS thriving; commercial steward stable after a reputational shock.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-22 | Airflow 3.0.0 released[^airflow-gh] | OSS | + |
| W24 | 2025-05-01 | Astronomer $93M Series D (Bain Capital Ventures lead)[^astro-seriesd] | Business | + |
| W24 | 2025-07-19 | Astronomer CEO resigns after viral concert video[^cnbc-byron] | Business | − |
| W24 | 2025-09-25 | Airflow 3.1.0[^airflow-gh] | OSS | + |
| W9 | 2026-01 | State of Airflow 2026 report (5,800+ respondents)[^astro-report] | OSS | + |
| W6 | 2026-04-07 | Airflow 3.2.0[^airflow-gh] | OSS | + |
| W3 | 2026-07-06 | Airflow 3.3.0; Java SDK 1.0.0-beta1 (2026-07-13)[^airflow-gh] | OSS | + |

# OSS successes
- Delivered a disruptive major version without a fork; predictable minor cadence[^airflow-gh].
- Multi-language task SDKs (Java beta) broaden reach[^airflow-gh].

# OSS failures / risks
- Airflow 2→3 migration burden; competitors (Dagster, Prefect, Kestra) market "modern" alternatives.

# Business successes
- Astronomer's $93M round affirmed orchestration as AI infrastructure[^astro-seriesd].

# Business failures / risks
- July 2025 CEO scandal created global negative publicity for Astronomer (and by association Airflow)[^cnbc-byron].

# By window
## W3
- Airflow 3.3.0; 3.3.1/3.3.2; Java SDK beta[^airflow-gh].
## W6
- Airflow 3.2.0[^airflow-gh].
## W9
- State of Airflow 2026 report[^astro-report].
## W12
- No notable events found (3.1.x patch releases).
## W24
- Airflow 3.0 and 3.1; Astronomer Series D; CEO resignation[^airflow-gh][^astro-seriesd][^cnbc-byron].

# Lessons
- ASF governance insulated the project from its main vendor's leadership crisis.
- Incumbency + a credible major release blunted the "Airflow is legacy" narrative.

# Related
- [Astronomer](/organizations/astronomer.md), [Dagster](/projects/data-engineering/dagster.md), [Prefect](/projects/data-engineering/prefect.md), [Kestra](/projects/data-engineering/kestra.md)
- [Airflow 3 release](/events/2025-04-apache-airflow-3-release.md), [Astronomer CEO resigns](/events/2025-07-astronomer-ceo-resigns.md)

[^airflow-gh]: Apache Airflow GitHub releases.
[^astro-seriesd]: Astronomer press release, 2025-05-01.
[^cnbc-byron]: CNBC, 2025-07-19.
[^astro-report]: Astronomer press release, State of Airflow 2026.
[^bigdatawire-af3]: BigDATAwire on Airflow 3.
