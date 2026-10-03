---
type: Idea
title: "Catalog wars: who controls the lakehouse metadata (Unity, Polaris, Glue, REST catalog, DuckLake)"
description: "Once Iceberg won the format layer, vendors fought over the catalog, which controls table discovery, commits and access policy. The Iceberg REST catalog API became the interop standard. Control of governance stays with each platform (Unity in Databricks, Horizon/Polaris in Snowflake, Glue/S3 Tables in AWS), so there was no single winner."
tags: [lakehouse, catalog, governance, iceberg, polaris, unity-catalog]
area: analytics-lakehouse
verdict: mixed
hype_peak: 2024
adoption_2026: common
origins: "Hive Metastore (2010s) as the de facto lake catalog; AWS Glue Data Catalog (2017); Iceberg REST catalog spec (2022–2023)"
key_systems: [systems/unity-catalog, systems/apache-polaris, systems/ducklake, systems/apache-iceberg, systems/databricks, systems/snowflake]
related_ideas: [ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/lakehouse]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: polaris-announce
    resource: https://www.hpcwire.com/bigdatawire/2024/06/03/snowflake-embraces-open-data-with-polaris-catalog/
    title: "BigDATAwire: Snowflake Embraces Open Data with Polaris Catalog (2024-06-03)"
  - id: uc-oss
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-open-sources-unity-catalog-creating-industrys-only-open
    title: "Databricks press release: Databricks open sources Unity Catalog (2024-06-12)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: polaris-tlp
    resource: https://polaris.apache.org/blog/2026/02/19/apache-polaris-graduates-to-top-level-project/
    title: "Apache Polaris graduates to Top-Level Project (Feb 2026)"
  - id: reg-sap-dremio
    resource: https://www.theregister.com/software/2026/05/05/sap-dives-deeper-into-iceberg-with-dremio-acquisition/5226560
    title: "The Register: SAP dives deeper into Iceberg with Dremio acquisition (2026-05-05)"
  - id: uc-gh
    resource: https://github.com/unitycatalog/unitycatalog
    title: "Unity Catalog OSS GitHub repository"
  - id: s3-tables
    resource: https://siliconangle.com/2024/12/03/aws-expands-amazon-s3-features-support-apache-iceberg-metadata-management/
    title: "SiliconANGLE: AWS S3 Tables (2024-12-03)"
  - id: ducklake-01
    resource: https://ducklake.select/2025/05/27/ducklake-01/
    title: "DuckLake: SQL as a Lakehouse Format (2025-05-27)"
  - id: ducklake-10
    resource: https://duckdb.org/2026/04/13/ducklake-10
    title: "DuckLake v1.0 (2026-04-13)"
  - id: reg-ducklake
    resource: https://www.theregister.com/2025/05/28/duckdb_flips_lakehouse_model_with/
    title: "The Register: DuckDB flips lakehouse model with bring-your-own compute (2025-05-28)"
  - id: starburst-blog
    resource: https://www.starburst.io/blog/
    title: "Starburst blog (server-side scan planning partnership with Databricks, Sept 2026)"
---

# Summary

**Verdict: mixed.** The catalog wars produced one clear success: the **Iceberg REST catalog API** is now the protocol through which engines find and commit Iceberg tables, and Polaris, Unity Catalog, AWS Glue/S3 Tables, Google BigLake and others all implement it. The bigger promise, a vendor-neutral catalog that customers own and every platform defers to, has not arrived. Each platform's governance (row and column policies, lineage, AI asset registration) still lives in its own catalog. The open-source versions trail the commercial products, and Unity Catalog OSS is still pre-1.0 in 2026[^uc-gh]. DuckLake's "put the catalog in a SQL database" design is an interesting dissent, but it is still small.

# The idea

Iceberg and Delta tables need a catalog that maps table names to the current metadata pointer and makes commits atomic. Whoever runs the catalog controls which engines can write, which policies apply and where lineage is recorded. After the format war, the catalog became the new lock-in point. Pavlo summed up the 2024 sequence: Snowflake announced Polaris as a "vendor neutral open-catalog implementation of Apache Iceberg", and Databricks open-sourced Unity the following week[^pavlo-2024].

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018–2022 | Hive Metastore and AWS Glue serve as the de facto lake catalogs; Iceberg defines a REST catalog spec | ± |
| 2024 | Snowflake announces Polaris (June 3)[^polaris-announce]; Databricks open-sources Unity Catalog under Apache-2.0 (June 12)[^uc-oss]; Polaris enters the ASF incubator (Aug) | + |
| 2024 | AWS S3 Tables puts a managed Iceberg catalog into S3 (Dec)[^s3-tables] | + |
| 2025 | DuckLake proposes keeping all metadata in a SQL database (May)[^ducklake-01][^reg-ducklake] | ± |
| 2026 | Polaris becomes an Apache TLP (Feb)[^polaris-tlp]; DuckLake 1.0 (Apr)[^ducklake-10]; SAP buys Polaris co-creator Dremio (May)[^reg-sap-dremio]; Databricks and Starburst partner on server-side scan planning (Sept)[^starburst-blog] | + |

# What succeeded

- **A standard protocol.** The Iceberg REST catalog spec let Spark, Trino, Flink, DuckDB, StarRocks, Snowflake and others talk to the same catalog. This is real interoperability that did not exist with Hive Metastore's Thrift API.
- **Apache Polaris** graduated to an Apache TLP with PMC members from Dremio, Snowflake, Google, Microsoft, Confluent and LanceDB. It is the most credible neutral implementation[^polaris-tlp].
- **Managed catalogs inside storage.** S3 Tables made the catalog a property of the bucket, a strong default for AWS-centric shops[^s3-tables].

# What failed

- **"One catalog to rule them all."** Enterprises run several catalogs (Unity for Databricks, Horizon/Polaris for Snowflake, Glue for AWS). Federation between them is partial.
- **Open-source Unity Catalog.** Contributed to LF AI & Data, but it releases slowly (0.x in 2026) and is far less capable than the commercial version[^uc-gh]. Many treated the 2024 open-sourcing as a counter-announcement to Polaris rather than a real neutral project.
- **Governance portability.** Fine-grained access policies, tags and lineage do not move between catalogs. The REST spec covers tables, not security semantics.

# Why

1. **The catalog is where the money is.** Formats are free, but governance, discovery and AI asset management are what platforms sell. No vendor wants to hand that to a neutral project, so open catalogs ship the protocol and keep the policy engine proprietary.
2. **Timing.** Polaris and Unity OSS appeared within a week of each other in June 2024, as competing announcements[^pavlo-2024]. Their code matured after the positioning did.
3. **The hyperscalers' gravity.** For AWS customers, S3 Tables and Glue are the path of least resistance. Neutral catalogs compete with default ones.
4. **Metadata scale pain.** File-based Iceberg metadata (manifests in object storage) creates latency and small-file problems for high-frequency commits. DuckLake's argument is that a transactional SQL database is the right catalog. Iceberg itself has moved toward server-side scan planning in the REST API[^starburst-blog].

# Lessons

- Each time a layer is standardised, lock-in moves up one layer. Watch who owns policy and identity, not who owns bytes.
- Open-sourcing a strategic control point under competitive pressure produces a shell project unless the sponsor really gives up control.
- Old ideas come back. DuckLake's "metadata belongs in a database" is the Hive Metastore lesson relearned with transactions.

# Related

- [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md) · [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md)
- [Unity Catalog](/systems/unity-catalog.md) · [Apache Polaris](/systems/apache-polaris.md) · [DuckLake](/systems/ducklake.md)
- [Polaris and Unity open-sourced](/events/2024-06-polaris-and-unity-catalog-open-sourced.md) · [DuckLake launch](/events/2025-05-ducklake-launch.md)
