---
type: System
title: Apache Hudi
description: "Uber-born table format, the first of the three, optimised for streaming upserts and incremental processing. It reached 1.0 (Dec 2024) but lost the format war to Iceberg, and its steward Onehouse diversified away from Hudi-only products."
resource: https://hudi.apache.org
tags: [table-format, lakehouse, streaming, apache]
kind: oss
first_release: 2017
org: "Apache Software Foundation (created at Uber; commercial steward Onehouse)"
license: Apache-2.0
outcome: struggling
ideas: [ideas/analytics-lakehouse/open-table-formats]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: hudi-gh
    resource: https://github.com/apache/hudi
    title: "Apache Hudi GitHub (releases: 1.0 Dec 2024, 1.1 Nov 2025, 1.2 May 2026)"
  - id: reg-onehouse
    resource: https://www.theregister.com/2024/06/26/onehouse_35_million_hudi/
    title: "The Register: Onehouse raises $35M (2024-06-26)"
  - id: onehouse-blog
    resource: https://www.onehouse.ai/blog
    title: "Onehouse blog"
---

# Summary

Hudi ("Hadoop Upserts Deletes and Incrementals") came out of Uber's need to apply CDC streams to a data lake. It introduced copy-on-write and merge-on-read tables, record-level indexes and incremental pulls before Iceberg or Delta had them. It became an Apache TLP in 2020. Onehouse, founded by Hudi's creator Vinoth Chandar, raised a $35M Series B in June 2024 (total $68M) and built XTable (format translation)[^reg-onehouse]. Hudi shipped 1.0 in December 2024, then 1.1 and 1.2[^hudi-gh]. Once Snowflake, Databricks and AWS converged on Iceberg, Hudi became a niche choice, and Onehouse broadened into managed Trino/Ray, Spark acceleration (Quanton) and a SQL product ("Lakegres")[^onehouse-blog].

# Timeline

| Year | Event |
|---|---|
| 2017–2019 | Open-sourced by Uber; Apache incubator |
| 2020 | Apache TLP |
| 2024 | Onehouse $35M Series B[^reg-onehouse]; Hudi 1.0[^hudi-gh] |
| 2025–2026 | 1.1, 1.2; Onehouse diversifies[^onehouse-blog] |

# What worked

- It pioneered streaming upserts on lakes, and its ideas were absorbed by Iceberg and Delta.
- It has real production use at Uber and other large CDC-heavy sites.

# What didn't

- It had no hyperscaler or warehouse kingmaker, and its complex configuration surface made it harder to adopt.
- Its advantage disappeared once rivals added merge-on-read and deletion vectors.

# Related

- [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md) · [Apache Iceberg](/systems/apache-iceberg.md) · [Delta Lake](/systems/delta-lake.md)
