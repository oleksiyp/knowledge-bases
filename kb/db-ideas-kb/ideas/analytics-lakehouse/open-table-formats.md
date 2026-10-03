---
type: Idea
title: "Open table formats war: Iceberg vs Delta Lake vs Hudi"
description: "Three open specs competed to be the transactional table layer over Parquet. Iceberg won the cross-vendor standard by 2024–2025 because it was engine-neutral and the vendor most threatened by it (Snowflake) adopted it. Delta survives as Databricks' native format and Hudi became niche."
tags: [lakehouse, iceberg, delta-lake, hudi, standards, format-war]
area: analytics-lakehouse
verdict: won
hype_peak: 2024
adoption_2026: mainstream
origins: "Hudi (Uber, 2016–2017), Iceberg (Netflix, 2017; ASF incubator Nov 2018), Delta Lake (Databricks, open-sourced 2019)"
key_systems: [systems/apache-iceberg, systems/delta-lake, systems/apache-hudi, systems/tabular, systems/databricks, systems/snowflake]
related_ideas: [ideas/analytics-lakehouse/lakehouse, ideas/analytics-lakehouse/catalog-wars]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: iceberg-wiki
    resource: https://en.wikipedia.org/wiki/Apache_Iceberg
    title: "Wikipedia: Apache Iceberg (ASF donation 2018, TLP May 2020)"
  - id: delta-lf
    resource: https://techcrunch.com/2019/10/15/databricks-brings-its-delta-lake-open-source-project-to-the-linux-foundation
    title: "TechCrunch: Databricks brings Delta Lake to the Linux Foundation (2019)"
  - id: delta-2
    resource: https://siliconangle.com/2022/06/28/databricks-donates-delta-lake-framework-mlflow-operations-platform-entirely-open-source/
    title: "SiliconANGLE: Databricks makes Delta Lake entirely open source (2022-06-28)"
  - id: cnbc-tabular
    resource: https://www.cnbc.com/2024/06/04/databricks-is-buying-data-optimization-startup-tabular.html
    title: "CNBC: Databricks acquires Tabular (2024-06-04)"
  - id: tc-tabular-2b
    resource: https://techcrunch.com/2024/08/14/databricks-reportedly-paid-2-billion-in-tabular-acquisition
    title: "TechCrunch: Databricks reportedly paid $2 billion in Tabular acquisition (2024-08-14)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: polaris-announce
    resource: https://www.hpcwire.com/bigdatawire/2024/06/03/snowflake-embraces-open-data-with-polaris-catalog/
    title: "BigDATAwire: Snowflake Embraces Open Data with Polaris Catalog (2024-06-03)"
  - id: s3-tables
    resource: https://siliconangle.com/2024/12/03/aws-expands-amazon-s3-features-support-apache-iceberg-metadata-management/
    title: "SiliconANGLE: AWS S3 Tables for Apache Iceberg (2024-12-03)"
  - id: bq-iceberg
    resource: https://docs.cloud.google.com/bigquery/docs/release-notes
    title: "BigQuery release notes (Iceberg tables GA June 2025)"
  - id: iceberg-110
    resource: https://opensource.googleblog.com/2025/09/apache-iceberg-110-maturing-the-v3-spec-the-rest-api-and-google-contributions.html
    title: "Google Open Source Blog: Apache Iceberg 1.10 — maturing the V3 spec (Sept 2025)"
  - id: snow-v3
    resource: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-04-iceberg-v3-support-preview
    title: "Snowflake release notes: Iceberg v3 support preview (2026-03-04)"
  - id: reg-onehouse
    resource: https://www.theregister.com/2024/06/26/onehouse_35_million_hudi/
    title: "The Register: Onehouse raises $35M for Hudi (2024-06-26)"
  - id: onehouse-blog
    resource: https://www.onehouse.ai/blog
    title: "Onehouse blog (Open Engines, Quanton, Lakegres)"
  - id: fabric-ga
    resource: https://www.jamesserra.com/archive/2023/11/microsoft-fabric-is-now-ga/
    title: "James Serra: Microsoft Fabric is now GA (Nov 2023)"
  - id: ducklake-10
    resource: https://duckdb.org/2026/04/13/ducklake-10
    title: "DuckLake v1.0 (2026-04-13)"
---

# Summary

**Verdict: won (Iceberg). Delta: stable inside Databricks. Hudi: niche.** All three formats did the same basic job: ACID commits, snapshots, schema evolution and time travel over Parquet files. The fight was over which one every engine would support. By the end of 2024 the answer was Apache Iceberg. Snowflake made Iceberg tables GA and announced Polaris (June 2024)[^polaris-announce]. Databricks paid a reported $2B for Tabular, the company of Iceberg's creators, in the same week[^cnbc-tabular][^tc-tabular-2b]. AWS built Iceberg into S3 itself (Dec 2024)[^s3-tables]. Pavlo's 2024 review simply calls Iceberg "the standard"[^pavlo-2024]. The war ended with convergence, not a knockout: Delta and Iceberg are moving toward each other (UniForm, shared deletion-vector designs in Iceberg v3)[^iceberg-110].

# The idea

A table format is a metadata spec that turns a directory of immutable Parquet files into a table with atomic commits and snapshots. The promise was a shared open storage layer that any engine could read and write, so that no single vendor owned a company's data.

- **Hudi** (Uber) was optimised for streaming upserts and incremental pulls (merge-on-read).
- **Iceberg** (Netflix) was designed to be engine-neutral from the start, with hidden partitioning, a manifest tree and a strict spec.
- **Delta Lake** (Databricks) used a JSON transaction log next to the data and was tightly integrated with Spark and Databricks' runtime.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Netflix donates Iceberg to the ASF incubator (Nov)[^iceberg-wiki] | + |
| 2019 | Delta Lake open-sourced; moves to the Linux Foundation (Oct)[^delta-lf] | + |
| 2020 | Iceberg graduates to Apache TLP (May)[^iceberg-wiki] | + |
| 2022 | Delta Lake 2.0 open-sources features previously reserved for Databricks[^delta-2]; Snowflake previews Iceberg | + |
| 2023 | Microsoft Fabric standardises on Delta-Parquet[^fabric-ga]; Databricks ships UniForm (Delta readable as Iceberg/Hudi) | ± |
| 2024 | Snowflake Iceberg GA + Polaris (June 3)[^polaris-announce]; Databricks buys Tabular (June 4)[^cnbc-tabular]; Onehouse raises $35M for Hudi[^reg-onehouse]; S3 Tables (Dec)[^s3-tables] | + Iceberg, − Hudi |
| 2025 | BigQuery Iceberg tables GA (June)[^bq-iceberg]; Iceberg 1.10 makes V3 features GA (Sept)[^iceberg-110] | + |
| 2026 | Snowflake previews Iceberg v3[^snow-v3]; DuckLake 1.0 offers a different design[^ducklake-10]; Onehouse moves away from Hudi-only products[^onehouse-blog] | + Iceberg |

# What succeeded

- **Iceberg as the interchange standard.** It is read and written natively by Snowflake, BigQuery, Redshift/Athena, S3 Tables, Databricks (after Tabular), Trino, Spark, Flink, DuckDB, ClickHouse, StarRocks and others.
- **The spec process.** Iceberg v3 (deletion vectors, row lineage, VARIANT, geo types, nanosecond timestamps) was agreed across rival vendors, including Databricks, Snowflake and Google[^iceberg-110][^snow-v3].
- **Delta inside Databricks and Fabric.** Delta is still the default for Databricks' large customer base and for Microsoft Fabric[^fabric-ga].

# What failed

- **Hudi** had the earliest production use but lost the standards race. Its commercial steward Onehouse diversified into managed Trino/Ray, Spark acceleration and a SQL product[^onehouse-blog].
- **Delta as "the" open standard.** The 2019 Linux Foundation move and the 2022 "fully open" relaunch did not persuade competitors. Databricks' purchase of Tabular was an admission that the industry had picked Iceberg.
- **Translation layers as the end state.** UniForm and Apache XTable (metadata translation between formats) exist but are stopgaps. Customers chose one format rather than live with permanent translation.
- **Simplicity.** Iceberg's file-based manifests are complex to operate. DuckLake (2025–2026) argues that table metadata belongs in a SQL database[^ducklake-10].

# Why

1. **Neutrality beats features.** Iceberg was not controlled by a company that also sold a competing engine. Snowflake, AWS and Google could adopt it without strengthening Databricks. Delta's tie to Databricks was its main weakness, whatever its technical merits.
2. **Kingmakers.** Snowflake's Iceberg adoption (2022 preview, 2024 GA) and AWS putting Iceberg into S3 made it the safe choice for everyone else.
3. **Acqui-hire as concession.** Databricks bought the format's creators instead of fighting them. Reports say Snowflake had been negotiating to buy Tabular for about $600M before Databricks outbid it[^pavlo-2024].
4. **Hudi's design centre was too narrow.** Upsert-heavy CDC ingestion mattered, but Iceberg and Delta added merge-on-read and deletion vectors, which erased Hudi's advantage.

# Lessons

- In format wars the neutral option wins once a large rival of the format's sponsor adopts it.
- Buying the winner can be cheaper than fighting a standard. $1–2B for Tabular was small next to the risk of being outside the ecosystem.
- Winning the format does not settle the war. The next control point (catalogs) gets contested immediately.

# Related

- [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md) · [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md)
- [Apache Iceberg](/systems/apache-iceberg.md) · [Delta Lake](/systems/delta-lake.md) · [Apache Hudi](/systems/apache-hudi.md) · [Tabular](/systems/tabular.md)
- [Databricks acquires Tabular](/events/2024-06-databricks-acquires-tabular.md) · [AWS S3 Tables](/events/2024-12-aws-s3-tables-iceberg.md)
