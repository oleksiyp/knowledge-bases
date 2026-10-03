---
type: System
title: Apache Polaris
description: "Iceberg REST catalog co-created by Snowflake and Dremio. Announced June 2024, donated to the ASF in Aug 2024 and a top-level project in Feb 2026. It is the most credible vendor-neutral lakehouse catalog."
resource: https://polaris.apache.org
tags: [catalog, iceberg, apache, snowflake, governance]
kind: oss
first_release: 2024
org: "Apache Software Foundation (from Snowflake and Dremio)"
license: Apache-2.0
outcome: growing
ideas: [ideas/analytics-lakehouse/catalog-wars, ideas/analytics-lakehouse/open-table-formats]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: polaris-announce
    resource: https://www.hpcwire.com/bigdatawire/2024/06/03/snowflake-embraces-open-data-with-polaris-catalog/
    title: "BigDATAwire: Snowflake Embraces Open Data with Polaris Catalog (2024-06-03)"
  - id: polaris-tlp
    resource: https://polaris.apache.org/blog/2026/02/19/apache-polaris-graduates-to-top-level-project/
    title: "Apache Polaris graduates to Top-Level Project (Feb 2026)"
  - id: reg-sap-dremio
    resource: https://www.theregister.com/software/2026/05/05/sap-dives-deeper-into-iceberg-with-dremio-acquisition/5226560
    title: "The Register: SAP to acquire Dremio (2026-05-05)"
---

# Summary

Snowflake announced Polaris Catalog at Snowflake Summit on 2024-06-03 as a "vendor-neutral, open catalog implementation for Apache Iceberg" based on the Iceberg REST protocol. It promised to open-source it within 90 days and listed interoperability with Spark, Flink, Trino, Dremio, DuckDB and others[^polaris-announce]. Co-developed with Dremio, it entered the ASF incubator in August 2024 and graduated to an Apache TLP in February 2026, with PMC members from Dremio, Snowflake, Google, Microsoft, Confluent and LanceDB[^polaris-tlp]. In May 2026 SAP agreed to buy Dremio and said it would build on Polaris[^reg-sap-dremio]. Snowflake's managed version is branded "Open Catalog".

# Timeline

| Year | Event |
|---|---|
| 2024 | Announced June 3[^polaris-announce]; ASF incubator (Aug) |
| 2026 | Apache TLP (Feb)[^polaris-tlp]; SAP buys co-creator Dremio[^reg-sap-dremio] |

# What worked

- It achieved genuine multi-vendor governance quickly, a rarity for a vendor-originated project.
- It made the Iceberg REST catalog a concrete, deployable standard.

# What didn't

- Polaris covers tables and credential vending, not the full governance surface (policies, lineage) that commercial catalogs sell.
- Adoption outside Snowflake and Dremio users is hard to measure (no public numbers found).

# Related

- [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md) · [Unity Catalog](/systems/unity-catalog.md) · [Snowflake](/systems/snowflake.md) · [Apache Iceberg](/systems/apache-iceberg.md)
