---
type: System
title: Tabular
description: "Startup founded by Iceberg's creators (Ryan Blue, Dan Weeks, Jason Reid) to sell a managed Iceberg catalog and storage service. Databricks bought it in June 2024 for a reported ~$2B after a bidding contest with Snowflake, the deal that settled the format war."
resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-tabular-company-founded-original-creators
tags: [iceberg, catalog, acquisition, lakehouse]
kind: product
first_release: 2021
org: "Tabular Technologies (acquired by Databricks, 2024)"
outcome: acquired
ideas: [ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/catalog-wars]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dbx-tabular
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-tabular-company-founded-original-creators
    title: "Databricks press release: agrees to acquire Tabular (2024-06-04)"
  - id: cnbc-tabular
    resource: https://www.cnbc.com/2024/06/04/databricks-is-buying-data-optimization-startup-tabular.html
    title: "CNBC: Databricks acquires Tabular (2024-06-04)"
  - id: tc-tabular-2b
    resource: https://techcrunch.com/2024/08/14/databricks-reportedly-paid-2-billion-in-tabular-acquisition
    title: "TechCrunch: Databricks reportedly paid $2 billion (2024-08-14)"
  - id: tt-tabular
    resource: https://www.techtarget.com/searchdatamanagement/news/366588032/Databricks-1B-plus-Tabular-acquisition-adds-Iceberg-support
    title: "TechTarget: Databricks $1B-plus Tabular acquisition"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Tabular sold a managed Iceberg catalog and table service for teams that wanted Iceberg without running maintenance (compaction, snapshot expiry) themselves. Its value was strategic, not revenue. Its founders led the Iceberg project. On 2024-06-04, during Snowflake's annual Summit, Databricks announced it would acquire Tabular[^dbx-tabular][^cnbc-tabular]. Snowflake and Confluent were also bidding[^cnbc-tabular]. The price was initially reported as $1B+[^tt-tabular] and later reported at about $2B[^tc-tabular-2b]. Pavlo notes Snowflake had allegedly been negotiating a roughly $600M deal before Databricks "crashed the party"[^pavlo-2024]. The Tabular service was wound down and its team moved to Databricks.

# Timeline

| Year | Event |
|---|---|
| 2021 | Founded by Iceberg's creators |
| 2024 | Acquired by Databricks (announced June 4)[^dbx-tabular]; price reported ~$2B (Aug)[^tc-tabular-2b] |

# What worked

- It was a very large return for a company with a small business, because it controlled the standard's maintainers.

# What didn't

- As a standalone business it never had the chance to prove itself. Its catalog product was absorbed, and Iceberg governance concerns moved to whether Databricks would dominate the project (Iceberg's PMC remains multi-vendor).

# Related

- [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md) · [Apache Iceberg](/systems/apache-iceberg.md) · [Databricks](/systems/databricks.md)
- [Databricks acquires Tabular](/events/2024-06-databricks-acquires-tabular.md)
