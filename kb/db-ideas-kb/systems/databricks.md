---
type: System
title: Databricks
description: "Spark creators' company that coined and sold the 'lakehouse'. It owns Delta Lake, Unity Catalog and, through the Tabular deal, Iceberg's creators, and became the most valuable private data company ($190B, Aug 2026). It is the clearest business winner of the analytics era."
resource: https://www.databricks.com
tags: [lakehouse, spark, delta-lake, data-warehouse, private-company]
kind: product
first_release: 2013
org: "Databricks, Inc. (private)"
outcome: thriving
ideas: [ideas/analytics-lakehouse/lakehouse, ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/catalog-wars, ideas/analytics-lakehouse/cloud-data-warehouses]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: lakehouse-cidr
    resource: https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf
    title: "Lakehouse paper (CIDR 2021)"
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: cnbc-tabular
    resource: https://www.cnbc.com/2024/06/04/databricks-is-buying-data-optimization-startup-tabular.html
    title: "CNBC: Databricks acquires Tabular (2024-06-04)"
  - id: dbx-sql-bbg
    resource: https://www.bloomberg.com/news/articles/2025-06-11/databricks-eyes-1-billion-in-sales-for-product-competing-with-snowflake
    title: "Bloomberg: Databricks eyes $1B in sales for Databricks SQL (2025-06-11)"
  - id: dbx-cnbc
    resource: https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html
    title: "CNBC: Databricks $190B valuation (2026-08-13)"
  - id: uc-oss
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-open-sources-unity-catalog-creating-industrys-only-open
    title: "Databricks open sources Unity Catalog (2024-06-12)"
---

# Summary

Databricks turned Apache Spark into a cloud platform and then repositioned it as a warehouse replacement: the **lakehouse**, formalised in the CIDR 2021 paper[^lakehouse-cidr]. Its proprietary Photon engine claimed a 100TB TPC-DS record in Nov 2021, which started a public fight with Snowflake[^pavlo-2021]. It covered both sides of the format war by owning Delta Lake and buying Tabular (Iceberg's creators) in June 2024[^cnbc-tabular], and it open-sourced Unity Catalog the same month[^uc-oss]. Databricks SQL, its direct Snowflake competitor, was at a $600M run-rate in Dec 2024 with a $1B target[^dbx-sql-bbg]. Company run-rate reached about $7B and its valuation $190B in Aug 2026[^dbx-cnbc]. It also bought Neon (~$1B) and Mooncake in 2025 to add Postgres ("Lakebase")[^pavlo-2025].

# Timeline

| Year | Event |
|---|---|
| 2019 | Delta Lake open-sourced and moved to the Linux Foundation |
| 2021 | Lakehouse paper; Photon TPC-DS record and Snowflake dispute[^pavlo-2021] |
| 2023 | $500M Series I at $43B[^pavlo-2023]; acquires MosaicML |
| 2024 | Buys Tabular[^cnbc-tabular]; open-sources Unity Catalog[^uc-oss]; $10B Series J at $62B[^pavlo-2024] |
| 2025 | Buys Neon and Mooncake; launches Lakebase[^pavlo-2025] |
| 2026 | $190B valuation, ~$7B run-rate[^dbx-cnbc] |

# What worked

- It correctly bet that ML and BI would converge on open files in object storage.
- It acquired rather than fought: Tabular (formats), Neon (OLTP) and MosaicML (AI).
- Consumption revenue grew on both data-engineering and SQL workloads.

# What didn't

- Delta Lake did not become the industry's neutral standard, and Databricks had to buy its way into Iceberg.
- Unity Catalog OSS trails the commercial product, which weakens the "open" message.
- Benchmark marketing (TPC-DS 2021) generated controversy more than market share.

# Related

- [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md) · [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md)
- [Delta Lake](/systems/delta-lake.md) · [Unity Catalog](/systems/unity-catalog.md) · [Tabular](/systems/tabular.md) · [Photon](/systems/photon.md) · [Neon](/systems/neon.md)
