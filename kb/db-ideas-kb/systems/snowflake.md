---
type: System
title: Snowflake
description: "Cloud data warehouse that set the separated storage/compute template and had the record 2020 software IPO. It has since turned toward Iceberg and openness (Polaris, Iceberg v3) as the lakehouse eroded its proprietary-storage moat. Growth slowed to ~25–30% but it is still a multi-billion business."
resource: https://www.snowflake.com
tags: [data-warehouse, cloud, olap, iceberg, public-company]
kind: cloud-service
first_release: 2014
org: "Snowflake Inc. (NYSE: SNOW)"
outcome: stable
ideas: [ideas/analytics-lakehouse/cloud-data-warehouses, ideas/analytics-lakehouse/lakehouse, ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/catalog-wars, ideas/analytics-lakehouse/semantic-layers]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: snow-ipo
    resource: https://www.cnn.com/2020/09/16/investing/snowflake-ipo/
    title: "CNN: Snowflake shares more than double; biggest software IPO ever (2020-09-16)"
  - id: snow-fy25
    resource: https://www.businesswire.com/news/home/20250226670487/en/Snowflake-Reports-Financial-Results-for-the-Fourth-Quarter-and-Full-Year-of-Fiscal-2025
    title: "Snowflake FY2025 results (2025-02-26)"
  - id: snow-wiki
    resource: https://en.wikipedia.org/wiki/Snowflake_Inc.
    title: "Wikipedia: Snowflake Inc."
  - id: polaris-announce
    resource: https://www.hpcwire.com/bigdatawire/2024/06/03/snowflake-embraces-open-data-with-polaris-catalog/
    title: "BigDATAwire: Snowflake Embraces Open Data with Polaris Catalog (2024-06-03)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: snow-osi
    resource: https://www.snowflake.com/en/blog/open-semantic-interchange-ai-standard/
    title: "Snowflake: Open Semantic Interchange (2025-09-23)"
  - id: snow-v3
    resource: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-04-iceberg-v3-support-preview
    title: "Snowflake: Iceberg v3 support preview (2026-03-04)"
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Snowflake made the multi-cluster, shared-data cloud warehouse mainstream: storage in object storage, independent "virtual warehouses" for compute, per-second consumption billing and cross-account data sharing. Its September 2020 IPO raised $3.4B and closed at roughly a $70B valuation[^snow-ipo]. Product revenue reached $3.46B in FY2025 (+30%, NRR 126%)[^snow-fy25] and total revenue about $4.72B in FY2026[^snow-wiki]. From 2022 it repositioned around open formats: Iceberg tables (GA June 2024), the Polaris catalog (announced June 2024)[^polaris-announce], Iceberg v3 (preview March 2026)[^snow-v3], and the Open Semantic Interchange (Sept 2025)[^snow-osi]. It also bought into Postgres with Crunchy Data (~$250M, 2025)[^pavlo-2025].

# Timeline

| Year | Event |
|---|---|
| 2020 | Record software IPO (Sept 16)[^snow-ipo] |
| 2021 | Public TPC-DS benchmark dispute with Databricks[^pavlo-2021] |
| 2022 | Unistore/hybrid tables and Iceberg preview announced |
| 2024 | Slootman retires and Sridhar Ramaswamy becomes CEO (Feb)[^snow-fy25]; Iceberg GA and Polaris (June)[^polaris-announce]; Arctic LLM; lost the bidding for Tabular to Databricks[^pavlo-2024] |
| 2025 | Acquires Crunchy Data[^pavlo-2025]; OSI launched[^snow-osi] |
| 2026 | Iceberg v3 preview[^snow-v3]; FY26 revenue ~$4.72B[^snow-wiki] |

# What worked

- Simplicity for SQL analysts and near-zero administration. This won the 2015–2021 warehouse migration wave.
- Data sharing and the marketplace created network effects among accounts.
- It adopted Iceberg early enough to stay relevant as customers asked for open formats.

# What didn't

- The proprietary storage moat eroded, and Iceberg makes it easier for customers to point other engines at the same data.
- Growth fell from hypergrowth to about 30%, and expansions outside the warehouse (Unistore, LLM training with Arctic) had uneven results.
- It lost Tabular, reportedly after negotiating at around $600M, when Databricks paid a reported $2B[^pavlo-2024].

# Related

- [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md) · [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md) · [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md)
- [Databricks](/systems/databricks.md) · [Apache Polaris](/systems/apache-polaris.md) · [Snowflake IPO](/events/2020-09-snowflake-ipo.md)
