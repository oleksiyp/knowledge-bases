---
type: System
title: Unity Catalog
description: "Databricks' governance catalog for data and AI assets, open-sourced under Apache-2.0 in June 2024 (LF AI & Data) a week after Snowflake's Polaris. It is central to Databricks commercially, but the OSS version remains pre-1.0 and Databricks-led."
resource: https://www.unitycatalog.io
tags: [catalog, governance, databricks, lakehouse]
kind: oss
first_release: 2021
org: "Databricks; OSS project in LF AI & Data"
license: Apache-2.0
outcome: stable
ideas: [ideas/analytics-lakehouse/catalog-wars]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: uc-oss
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-open-sources-unity-catalog-creating-industrys-only-open
    title: "Databricks open sources Unity Catalog (2024-06-12)"
  - id: vb-uc
    resource: https://venturebeat.com/data-infrastructure/databricks-open-sources-unity-catalog-challenging-snowflake-on-interoperability-for-data-workloads
    title: "VentureBeat: Databricks open-sources Unity Catalog, challenging Snowflake"
  - id: uc-gh
    resource: https://github.com/unitycatalog/unitycatalog
    title: "Unity Catalog GitHub (0.x releases 2026)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Unity Catalog (UC) is Databricks' metastore and governance layer: three-level namespaces, fine-grained access control, lineage, and registration of tables, volumes, ML models and functions. Databricks open-sourced it on 2024-06-12 at its Data + AI Summit under Apache-2.0, with an OpenAPI spec, server and clients, and support statements from AWS, Google, Microsoft and NVIDIA. It said over 10,000 organisations used the commercial UC[^uc-oss][^vb-uc]. The timing, one week after Snowflake announced Polaris, made the move read as competitive positioning[^pavlo-2024]. In 2026 the OSS project still issues 0.x releases[^uc-gh]. Most customers use UC because they use Databricks.

# Timeline

| Year | Event |
|---|---|
| 2021 | Unity Catalog announced (proprietary) |
| 2024 | Open-sourced; LF AI & Data sandbox[^uc-oss] |
| 2025–2026 | Delta 4.0 catalog-managed tables; OSS 0.4–0.6[^uc-gh] |

# What worked

- It is the governance anchor of the Databricks platform and the main lock-in point after formats became open.
- It implements the Iceberg REST API, which lets external engines read UC-managed tables.

# What didn't

- The OSS edition has not become a neutral industry catalog, and its features trail the commercial product.

# Related

- [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md) · [Apache Polaris](/systems/apache-polaris.md) · [Databricks](/systems/databricks.md)
- [Polaris and Unity open-sourced](/events/2024-06-polaris-and-unity-catalog-open-sourced.md)
