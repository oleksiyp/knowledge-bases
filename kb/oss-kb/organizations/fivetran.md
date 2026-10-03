---
type: Organization
title: Fivetran
description: Managed ELT vendor that became the modern data stack's consolidator — buying Tobiko Data (SQLMesh), merging with dbt Labs (closed 2026-06-01, ~$600M combined ARR) and taking stewardship of Great Expectations.
resource: https://www.fivetran.com
tags: [data-integration, consolidator, commercial-open-source]
org_kind: coss-startup
hq: "Oakland, California, USA"
funding: { total_usd: "$730M through Series D (company, Sept 2021)", last_round: "Series D $565M (a16z lead), 2021; then all-stock merger with dbt Labs closed 2026-06-01", last_round_date: 2021-09, valuation_usd: "5.6B (2021); merged-company valuation undisclosed" }
business_verdict: growing
projects: [projects/data-engineering/dbt-core, projects/data-engineering/sqlmesh, projects/data-engineering/great-expectations]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fivetran-tobiko
    resource: https://www.fivetran.com/blog/fivetran-acquires-tobiko-data-to-power-enterprise-grade-transformations
    title: "Fivetran acquires Tobiko Data (2025-09-03)"
  - id: fivetran-lf
    resource: https://www.fivetran.com/press/fivetran-contributes-sqlmesh-to-the-linux-foundation-to-advance-open-data-infrastructure
    title: "Fivetran contributes SQLMesh to the Linux Foundation (2026-03-25)"
  - id: merger-close
    resource: https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran + dbt Labs complete merger (2026-06-01)"
  - id: techtarget
    resource: https://www.techtarget.com/searchdatamanagement/news/366643590/Fivetran-DBT-Labs-complete-merger-to-form-data-layer-for-AI
    title: "TechTarget: Fivetran, dbt Labs complete merger"
  - id: fivetran-press
    resource: https://www.fivetran.com/press
    title: "Fivetran newsroom (GX stewardship 2026-05-13; dbt Summit 2026-09-16)"
  - id: fivetran-d
    resource: https://www.fivetran.com/press/fivetran-to-acquire-hvr-announces-565-million-in-series-d-funding
    title: "Fivetran: to acquire HVR; announces $565M Series D (2021-09)"
    author: org:fivetran
  - id: tc-census
    resource: https://techcrunch.com/2025/05/01/fivetran-acquires-census-to-become-end-to-end-data-movement-platform/
    title: "TechCrunch: Fivetran acquires Census to become end-to-end data movement platform (2025-05-01)"
    author: org:techcrunch
  - id: fivetran-merger-pr
    resource: https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran press: Fivetran + dbt Labs complete merger (2026-06-01)"
    author: org:fivetran
  - id: gx-update
    resource: https://greatexpectations.io/blog/an-update-from-great-expectations/
    title: "Great Expectations: community update — FICO acquires GX Cloud; Fivetran stewards GX Core (2026-05-06)"
    author: org:great-expectations
  - id: dbt-wiki
    resource: https://en.wikipedia.org/wiki/Data_build_tool
    title: "Wikipedia: Data build tool"
---

# Summary
Fivetran turned from an ingestion vendor into the consolidator of open-source data tooling. It acquired Tobiko Data (SQLMesh, SQLGlot) on 2025-09-03[^fivetran-tobiko]; announced an all-stock merger with dbt Labs on 2025-10-13 (combined ~$600M ARR) that closed on 2026-06-01 with George Fraser as CEO and Tristan Handy as president[^dbt-wiki][^merger-close][^techtarget]; donated SQLMesh to the Linux Foundation (2026-03-25)[^fivetran-lf]; and became steward of the Great Expectations OSS community and GX Core after FICO bought the commercial GX Cloud (announced 2026-05-06; Fivetran announcement 2026-05-13)[^gx-update][^fivetran-press]. Earlier it acquired reverse-ETL vendor Census (announced 2025-05-01, terms undisclosed; Census was last valued at $630M in 2022)[^tc-census]. Its last priced round was a $565M Series D at $5.6B in Sept 2021 ($730M raised to date)[^fivetran-d]. (Pass 2: Census date confirmed; previously unverified.) Verdict: **growing**.

# Business timeline
| Date | Event |
|---|---|
| 2025-05-01 | Acquires Census (terms undisclosed)[^tc-census] |
| 2025-09-03 | Acquires Tobiko Data[^fivetran-tobiko] |
| 2025-10-13 | Merger agreement with dbt Labs[^dbt-wiki] |
| 2026-03-25 | SQLMesh to Linux Foundation[^fivetran-lf] |
| 2026-05-06/13 | FICO buys GX Cloud; Fivetran becomes steward of GX Core[^gx-update][^fivetran-press] |
| 2026-06-01 | Merger with dbt Labs closes (100,000+ data teams); dbt Core v2 open-sourced[^merger-close][^fivetran-merger-pr] |
| 2026-09-16 | dbt Summit 2026 announcements[^fivetran-press] |

# Monetization model
Consumption-based managed connectors (MAR pricing) plus dbt Cloud/Fusion subscriptions; OSS (dbt Core, SQLMesh, GX Core) as funnel and standard.

# Successes
- Built an end-to-end ingestion + transformation + quality platform with 80k–100k data teams[^techtarget][^merger-close].
- Resolved the dbt Fusion license controversy by open-sourcing the runtime under Apache-2.0[^merger-close].

# Failures / risks
- Owns both dbt and SQLMesh — competing communities may see reduced choice.
- Integration risk of a large all-stock merger; merged-company valuation and ownership split undisclosed.

# Related
- [dbt Labs](/organizations/dbt-labs.md), [dbt Core](/projects/data-engineering/dbt-core.md), [SQLMesh](/projects/data-engineering/sqlmesh.md), [Great Expectations](/projects/data-engineering/great-expectations.md), [Airbyte](/projects/data-engineering/airbyte.md)
- [dbt Labs–Fivetran merger](/events/2025-10-dbt-labs-fivetran-merger.md), [Tobiko acquisition](/events/2025-09-fivetran-acquires-tobiko-data.md), [SQLMesh to LF](/events/2026-03-sqlmesh-linux-foundation.md)

[^fivetran-tobiko]: Fivetran blog, 2025-09-03.
[^fivetran-lf]: Fivetran press release, 2026-03-25.
[^merger-close]: dbt Labs blog, 2026-06-01.
[^techtarget]: TechTarget.
[^fivetran-press]: Fivetran newsroom.
[^dbt-wiki]: Wikipedia, Data build tool.
[^fivetran-d]: Fivetran press, 2021-09.
[^tc-census]: TechCrunch, 2025-05-01.
[^fivetran-merger-pr]: Fivetran press, 2026-06-01.
[^gx-update]: Great Expectations blog, 2026-05-06.

Related event: [FICO acquires GX Cloud](/events/2026-05-fico-acquires-gx-cloud.md)
