---
type: Organization
title: Astronomer
description: Main commercial steward of Apache Airflow; raised a $93M Series D (May 2025), then weathered a viral CEO scandal (July 2025) with co-founder Pete DeJoy as CEO and a rebuilt executive team in 2026.
resource: https://www.astronomer.io
tags: [commercial-open-source, orchestration, airflow]
org_kind: coss-startup
hq: New York, USA
funding: { total_usd: "not disclosed by company", last_round: "Series D $93M (Bain Capital Ventures lead)", last_round_date: 2025-05-01, valuation_usd: "not disclosed" }
business_verdict: stable
projects: [projects/data-engineering/apache-airflow]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: astro-seriesd
    resource: https://www.astronomer.io/press-releases/astronomer-secures-93-million-series-d-funding/
    title: "Astronomer secures $93M Series D (2025-05-01)"
  - id: cnbc-byron
    resource: https://www.cnbc.com/2025/07/19/astronomer-ceo-andy-byron-resigns-after-viral-coldplay-kiss-cam-controversy.html
    title: "CNBC: Astronomer CEO resigns (2025-07-19)"
  - id: cnbc-dejoy
    resource: https://www.cnbc.com/2025/07/21/astronomer-interim-ceo-says-spotlight-has-been-unusual-and-surreal.html
    title: "CNBC: Astronomer interim CEO statement (2025-07-21)"
  - id: astro-cfo
    resource: https://www.astronomer.io/press-releases/astronomer-announces-chris-lynch-as-chief-financial-officer/
    title: "Astronomer announces Chris Lynch as CFO (Feb 2026)"
  - id: astro-pres
    resource: https://finance.yahoo.com/sectors/technology/articles/astronomer-announces-matt-simontacchi-president-130000811.html
    title: "Astronomer announces Matt Simontacchi as President of Field Operations (Apr 2026)"
  - id: astro-report
    resource: https://www.astronomer.io/press-releases/astronomer-releases-state-of-apache-airflow-2026-report/
    title: "State of Apache Airflow 2026 report"
---

# Summary
Astronomer drives much of Apache Airflow's development and sells the Astro managed service. It raised $93M Series D led by Bain Capital Ventures with Salesforce Ventures, Insight, Meritech and Venrock on 2025-05-01[^astro-seriesd]. On 2025-07-19 CEO Andy Byron resigned after a Coldplay concert kiss-cam video went viral; co-founder/CPO Pete DeJoy became interim and then permanent CEO[^cnbc-byron][^cnbc-dejoy][^astro-cfo]. In 2026 it hired CFO Chris Lynch (Feb) and President of Field Operations Matt Simontacchi from Red Hat (Apr), and published the State of Airflow 2026 report (5,800+ respondents)[^astro-cfo][^astro-pres][^astro-report]. Verdict: **stable**.

# Business timeline
| Date | Event |
|---|---|
| 2025-04-22 | Airflow 3.0 GA (Astronomer-led engineering)[^astro-seriesd] |
| 2025-05-01 | $93M Series D[^astro-seriesd] |
| 2025-07-19 | CEO Andy Byron resigns[^cnbc-byron] |
| 2025-07-21 | Pete DeJoy interim CEO statement[^cnbc-dejoy] |
| 2026-01 | State of Airflow 2026[^astro-report] |
| 2026-02 | Chris Lynch CFO, reporting to CEO Pete DeJoy[^astro-cfo] |
| 2026-04 | Matt Simontacchi President of Field Ops[^astro-pres] |

# Monetization model
Astro managed Airflow (cloud/hybrid), enterprise support, observability add-ons.

# Successes
- Large round in 2025; continued Airflow 3.x delivery[^astro-seriesd].

# Failures / risks
- Global reputational shock from the CEO scandal[^cnbc-byron]; leadership churn.

# Related
- [Apache Airflow](/projects/data-engineering/apache-airflow.md), [Astronomer CEO resigns](/events/2025-07-astronomer-ceo-resigns.md)

[^astro-seriesd]: Astronomer press release.
[^cnbc-byron]: CNBC, 2025-07-19.
[^cnbc-dejoy]: CNBC, 2025-07-21.
[^astro-cfo]: Astronomer press release.
[^astro-pres]: Yahoo Finance / press release.
[^astro-report]: Astronomer press release.
