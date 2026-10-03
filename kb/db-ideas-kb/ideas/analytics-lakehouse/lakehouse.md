---
type: Idea
title: "The lakehouse: warehouse semantics on open files in object storage"
description: "Put ACID tables, SQL and governance directly on Parquet files in cheap object storage instead of loading data into a proprietary warehouse. Won: by 2024–2026 every major warehouse vendor, Snowflake and the hyperscalers included, had adopted the architecture. The winners were the vendors who sell compute and catalogs on top of it, not 'openness' as such."
tags: [lakehouse, object-storage, open-formats, olap, databricks, snowflake]
area: analytics-lakehouse
verdict: won
hype_peak: 2022
adoption_2026: mainstream
origins: "Hive/Hadoop data lakes (2010s); Delta Lake (Databricks, 2019), Iceberg (Netflix, 2017–2018), Hudi (Uber); the term was popularised by the Databricks CIDR 2021 paper"
key_systems: [systems/databricks, systems/delta-lake, systems/apache-iceberg, systems/snowflake, systems/microsoft-fabric, systems/bigquery, systems/ducklake]
related_ideas: [ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/catalog-wars, ideas/analytics-lakehouse/cloud-data-warehouses, ideas/cloud-architecture/object-storage-native-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: lakehouse-cidr
    resource: https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf
    title: "Armbrust, Ghodsi, Xin, Zaharia: Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics (CIDR 2021)"
  - id: delta-lf
    resource: https://techcrunch.com/2019/10/15/databricks-brings-its-delta-lake-open-source-project-to-the-linux-foundation
    title: "TechCrunch: Databricks brings its Delta Lake project to the Linux Foundation (2019-10-15)"
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: polaris-announce
    resource: https://www.hpcwire.com/bigdatawire/2024/06/03/snowflake-embraces-open-data-with-polaris-catalog/
    title: "BigDATAwire: Snowflake Embraces Open Data with Polaris Catalog (2024-06-03)"
  - id: fabric-ga
    resource: https://www.jamesserra.com/archive/2023/11/microsoft-fabric-is-now-ga/
    title: "James Serra: Microsoft Fabric is now GA (Nov 2023)"
  - id: msft-fy26q3
    resource: https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3
    title: "Microsoft FY26 Q3 earnings call (2026-04-29)"
  - id: s3-tables
    resource: https://siliconangle.com/2024/12/03/aws-expands-amazon-s3-features-support-apache-iceberg-metadata-management/
    title: "SiliconANGLE: AWS expands Amazon S3 with features to support Apache Iceberg (2024-12-03)"
  - id: bq-iceberg
    resource: https://docs.cloud.google.com/bigquery/docs/release-notes
    title: "BigQuery release notes (BigLake tables for Apache Iceberg GA, June 2025)"
  - id: dbx-sql-bbg
    resource: https://www.bloomberg.com/news/articles/2025-06-11/databricks-eyes-1-billion-in-sales-for-product-competing-with-snowflake
    title: "Bloomberg: Databricks eyes $1 billion in sales for product competing with Snowflake (2025-06-11)"
  - id: dbx-cnbc
    resource: https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html
    title: "CNBC: Databricks closes funding round at $190 billion valuation (2026-08-13)"
  - id: ducklake-01
    resource: https://ducklake.select/2025/05/27/ducklake-01/
    title: "DuckLake: SQL as a Lakehouse Format (2025-05-27)"
  - id: snow-wiki
    resource: https://en.wikipedia.org/wiki/Snowflake_Inc.
    title: "Wikipedia: Snowflake Inc. (fallback for FY2026 revenue)"
---

# Summary

**Verdict: won.** The lakehouse claim was that a data warehouse could be built directly on open columnar files (Parquet) in object storage, with a transactional table layer on top, so that BI and ML would share one copy of the data. By 2026 this is the default architecture. Databricks built a company worth $190B on it[^dbx-cnbc]. Snowflake (2024), AWS (S3 Tables, 2024), Google (BigLake Iceberg tables, GA 2025) and Microsoft (Fabric/OneLake, 2023) all moved their warehouses onto open table formats[^polaris-announce][^s3-tables][^bq-iceberg][^fabric-ga]. Being open did not stop vendors from capturing value, though. It moved lock-in up the stack, from storage to catalogs, governance and managed compute.

# The idea

First-generation data lakes (Hadoop/Hive on HDFS, then S3) were cheap and open, but they had no transactions or reliable schemas, and queries over them were slow. Warehouses (Teradata, Redshift, Snowflake) were fast and correct but proprietary, and every byte had to be loaded into them. Armbrust, Ghodsi, Xin and Zaharia's CIDR 2021 paper argued that warehouses would be replaced by "Lakehouse" platforms. These would have open direct-access formats, a metadata layer providing ACID transactions and versioning, first-class support for ML/data-science workloads, and warehouse-class performance from caching, auxiliary data structures and vectorized engines[^lakehouse-cidr]. The enabling pieces were table formats (Delta Lake, Iceberg, Hudi), fast engines (Photon, Trino, Spark 3) and S3 strong consistency (Dec 2020).

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | Databricks open-sources Delta Lake; it moves to the Linux Foundation in Oct[^delta-lf] | + |
| 2020 | Iceberg becomes an Apache TLP; S3 gains strong read-after-write consistency | + |
| 2021 | CIDR "Lakehouse" paper[^lakehouse-cidr]; Databricks claims 100TB TPC-DS record and spars publicly with Snowflake[^pavlo-2021] | + |
| 2022 | Delta Lake 2.0 open-sources the remaining features; Snowflake previews Iceberg support | + |
| 2023 | Microsoft Fabric (OneLake, Delta-Parquet everywhere) announced in May, GA in Nov[^fabric-ga] | + |
| 2024 | Snowflake Iceberg tables GA and Polaris catalog announced[^polaris-announce]; Databricks buys Tabular; AWS launches S3 Tables[^s3-tables] | + |
| 2025 | BigQuery Iceberg tables GA[^bq-iceberg]; DuckLake proposes a SQL-database catalog instead of file metadata[^ducklake-01]; Databricks SQL warehouse heading to $1B run-rate[^dbx-sql-bbg] | + |
| 2026 | Fabric reaches 35,000 paid customers[^msft-fy26q3]; Databricks valued at $190B[^dbx-cnbc] | + |

# What succeeded

- **The architecture itself.** Every big analytics vendor now stores data as Parquet plus table metadata in object storage, or can read and write it that way. The "load everything into my proprietary format" warehouse has disappeared as a design target.
- **Databricks as a warehouse vendor.** Databricks SQL, the product that most directly validates the lakehouse claim against Snowflake, had a $600M run-rate in Dec 2024 and was projected to reach $1B by Jan 2026[^dbx-sql-bbg].
- **Microsoft's repositioning.** Fabric replaced the Synapse PaaS collection with a SaaS product built on one lake (OneLake) in Delta-Parquet[^fabric-ga]. Microsoft reported 35,000 paid Fabric customers, up 60% year over year, in April 2026[^msft-fy26q3].
- **Separation of storage and engines.** One Iceberg table can now be queried by Spark, Trino, Snowflake, DuckDB, StarRocks, ClickHouse and others.

# What failed

- **"No lock-in" was oversold.** Value moved to catalogs (Unity, Polaris, Glue, S3 Tables) and to proprietary engines (Photon, Snowflake). The open-source Unity Catalog lags the commercial one. See [catalog wars](/ideas/analytics-lakehouse/catalog-wars.md).
- **Operational complexity.** File-based metadata needs compaction, snapshot expiry, small-file management and orphan-file cleanup. Managed services (S3 Tables, Tabular, Onehouse) exist mostly to hide this. DuckLake's 2025 critique was that putting metadata in files rather than in a database was the root cause[^ducklake-01].
- **Low-latency and high-concurrency serving.** Object-storage latency still pushes real-time dashboards and user-facing analytics to dedicated OLAP stores (ClickHouse, Pinot, StarRocks). See [real-time OLAP](/ideas/analytics-lakehouse/real-time-olap.md).
- **Hudi's streaming-first variant** lost the format race even though it came first. See [open table formats](/ideas/analytics-lakehouse/open-table-formats.md).

# Why

1. **Economics.** Object storage costs about $20/TB-month and scales without limit. Once S3 became strongly consistent and engines got fast enough on Parquet, the warehouse's storage premium was hard to justify.
2. **ML/AI workloads.** Data scientists wanted direct file access from Python, Spark and ML tools, not a JDBC pipe. The AI boom after 2023 strengthened this.
3. **Customer power.** Large enterprises refused to pay twice (lake plus warehouse copy) and demanded multi-engine access. Snowflake's 2024 turn to Iceberg was a defensive response to customers asking for it.
4. **Hyperscaler alignment.** AWS, Google and Microsoft all benefit when data sits in their object stores, so all three backed open formats natively.
5. **The value did not disappear, it moved.** Vendors compete on governance, catalogs, serverless compute and AI features. This is why a "lakehouse" vendor (Databricks) became the most valuable private data company.

# Lessons

- Open storage formats commoditise storage, not platforms. Expect lock-in to move to the control plane (catalogs, security, metadata).
- An architecture wins when the incumbent's customers can force it onto the incumbent. Snowflake adopting Iceberg was the tipping point.
- Hardware and cloud changes (S3 consistency, fast NVMe caches, vectorized engines) often decide when an old idea such as "SQL on files" becomes viable.

# Related

- [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md) · [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md) · [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md)
- [Databricks](/systems/databricks.md) · [Delta Lake](/systems/delta-lake.md) · [Apache Iceberg](/systems/apache-iceberg.md) · [Microsoft Fabric](/systems/microsoft-fabric.md) · [DuckLake](/systems/ducklake.md)
- [Lakehouse paper (CIDR 2021)](/papers/2021-lakehouse-cidr.md)
- [Object-storage-native databases](/ideas/cloud-architecture/object-storage-native-databases.md)
