---
type: System
title: Apache Iceberg
description: "Netflix-born open table format that won the format war. By 2025 it was read and written natively by Snowflake, Databricks, BigQuery, AWS (S3 Tables) and nearly every engine, with the V3 spec agreed across rival vendors."
resource: https://iceberg.apache.org
tags: [table-format, lakehouse, apache, open-standard]
kind: oss
first_release: 2018
org: "Apache Software Foundation (created at Netflix)"
license: Apache-2.0
outcome: thriving
ideas: [ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/lakehouse, ideas/analytics-lakehouse/catalog-wars]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: iceberg-wiki
    resource: https://en.wikipedia.org/wiki/Apache_Iceberg
    title: "Wikipedia: Apache Iceberg"
  - id: cnbc-tabular
    resource: https://www.cnbc.com/2024/06/04/databricks-is-buying-data-optimization-startup-tabular.html
    title: "CNBC: Databricks acquires Tabular (2024-06-04)"
  - id: s3-tables
    resource: https://siliconangle.com/2024/12/03/aws-expands-amazon-s3-features-support-apache-iceberg-metadata-management/
    title: "SiliconANGLE: AWS S3 Tables (2024-12-03)"
  - id: iceberg-110
    resource: https://opensource.googleblog.com/2025/09/apache-iceberg-110-maturing-the-v3-spec-the-rest-api-and-google-contributions.html
    title: "Google Open Source Blog: Iceberg 1.10 — maturing the V3 spec (Sept 2025)"
  - id: snow-v3
    resource: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-04-iceberg-v3-support-preview
    title: "Snowflake: Iceberg v3 support preview (2026-03-04)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Iceberg was created at Netflix by Ryan Blue and Dan Weeks to fix Hive tables' correctness and performance problems on S3. It was donated to the ASF in November 2018 and became a top-level project in May 2020[^iceberg-wiki]. Its design (a strict spec, hidden partitioning, snapshot isolation through a manifest tree, engine neutrality) made it the format rival vendors could all adopt. In 2024 Snowflake made Iceberg tables GA, Databricks bought Tabular, the company of Iceberg's creators[^cnbc-tabular], and AWS built Iceberg into S3 (S3 Tables)[^s3-tables]. Pavlo called it "the standard"[^pavlo-2024]. Iceberg 1.10 (Sept 2025) made the V3 features GA: deletion vectors, row lineage, VARIANT, geo types and nanosecond timestamps[^iceberg-110]. Snowflake previewed V3 in March 2026[^snow-v3].

# Timeline

| Year | Event |
|---|---|
| 2018 | Donated to the ASF incubator[^iceberg-wiki] |
| 2020 | Apache TLP[^iceberg-wiki] |
| 2024 | Snowflake GA, Polaris; Databricks buys Tabular[^cnbc-tabular]; S3 Tables[^s3-tables] |
| 2025 | 1.10: V3 GA[^iceberg-110] |
| 2026 | V3 previews across vendors[^snow-v3] |

# What worked

- Vendor neutrality and a precise spec made it the industry's interchange layer.
- The REST catalog API gave engines a shared protocol (see [catalog wars](/ideas/analytics-lakehouse/catalog-wars.md)).

# What didn't

- File-based metadata is operationally heavy (compaction, snapshot expiry, small files), and much of the managed-service value comes from hiding it.
- High-frequency small commits (streaming) remain awkward, a criticism DuckLake exploits.

# Related

- [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md)
- [Tabular](/systems/tabular.md) · [Delta Lake](/systems/delta-lake.md) · [Apache Hudi](/systems/apache-hudi.md) · [Apache Polaris](/systems/apache-polaris.md) · [DuckLake](/systems/ducklake.md)
