---
type: Organization
title: Onehouse
description: Commercial steward of Apache Hudi and creator of XTable; after a $35M Series B (June 2024) it broadened into multi-engine services (Open Engines, Quanton, Lakegres, AI Gateway) as Iceberg won the format war.
resource: https://www.onehouse.ai
tags: [commercial-open-source, lakehouse, hudi]
org_kind: coss-startup
hq: Sunnyvale, California, USA (unverified)
funding: { total_usd: "68M", last_round: "Series B $35M (Craft Ventures)", last_round_date: 2024-06-26, valuation_usd: "unverified" }
business_verdict: struggling
projects: [projects/data-engineering/apache-hudi, projects/data-engineering/apache-xtable]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-onehouse
    resource: https://www.theregister.com/2024/06/26/onehouse_35_million_hudi/
    title: "The Register: OneHouse takes $35M to fight for Hudi in table format wars"
  - id: onehouse-blog
    resource: https://www.onehouse.ai/blog
    title: Onehouse blog
---

# Summary
Onehouse raised $35M Series B led by Craft Ventures in June 2024 (total $68M)[^reg-onehouse]. No later round was found. Its product line shifted from managed Hudi to engine-agnostic services: Open Engines (managed Trino/Ray, 2025-04-17), OneFlow ingestion (Aug 2025), notebooks (Dec 2025), Azure support and Quanton K8s operator (Mar 2026), LakeBase renamed Lakegres (2026-07-02), and an AI Gateway (2026-09-30)[^onehouse-blog]. "Struggling" reflects strategic churn and no new funding, not verified financial distress.

# Business timeline
| Date | Event |
|---|---|
| 2024-06-26 | $35M Series B[^reg-onehouse] |
| 2025-04-17 | Open Engines[^onehouse-blog] |
| 2025-08-01 | OneFlow ingestion[^onehouse-blog] |
| 2026-03-24 | Quanton K8s operator[^onehouse-blog] |
| 2026-07-02 | Lakegres rebrand[^onehouse-blog] |
| 2026-09-30 | AI Gateway[^onehouse-blog] |

# Monetization model
Managed lakehouse platform and engine acceleration (Quanton) on customers' clouds.

# Successes
- Broadened beyond Hudi, multi-cloud expansion[^onehouse-blog].

# Failures / risks
- Hudi lost the format war; frequent repositioning; no new funding found since 2024[^reg-onehouse].

# Related
- [Apache Hudi](/projects/data-engineering/apache-hudi.md), [Apache XTable](/projects/data-engineering/apache-xtable.md)

[^reg-onehouse]: The Register.
[^onehouse-blog]: Onehouse blog.
