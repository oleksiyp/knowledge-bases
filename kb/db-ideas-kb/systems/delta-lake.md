---
type: System
title: Delta Lake
description: "Databricks' transactional table format (open-sourced 2019, Linux Foundation). It is the default inside Databricks and Microsoft Fabric but lost the cross-vendor standard to Iceberg. Databricks now serves both formats (UniForm, Tabular)."
resource: https://delta.io
tags: [table-format, lakehouse, databricks, linux-foundation]
kind: oss
first_release: 2019
org: "Linux Foundation (Databricks-led)"
license: Apache-2.0
outcome: stable
ideas: [ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/lakehouse]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: delta-lf
    resource: https://techcrunch.com/2019/10/15/databricks-brings-its-delta-lake-open-source-project-to-the-linux-foundation
    title: "TechCrunch: Databricks brings Delta Lake to the Linux Foundation (2019-10-15)"
  - id: delta-2
    resource: https://siliconangle.com/2022/06/28/databricks-donates-delta-lake-framework-mlflow-operations-platform-entirely-open-source/
    title: "SiliconANGLE: Databricks makes Delta Lake entirely open source (2022-06-28)"
  - id: delta-40
    resource: https://delta.io/blog/2025-09-25-delta-lake-40/
    title: "Delta Lake 4.0 blog (catalog-managed tables)"
  - id: fabric-ga
    resource: https://www.jamesserra.com/archive/2023/11/microsoft-fabric-is-now-ga/
    title: "James Serra: Microsoft Fabric is now GA (Nov 2023)"
  - id: cnbc-tabular
    resource: https://www.cnbc.com/2024/06/04/databricks-is-buying-data-optimization-startup-tabular.html
    title: "CNBC: Databricks acquires Tabular (2024-06-04)"
---

# Summary

Delta Lake adds an ordered JSON transaction log (`_delta_log`) next to Parquet files, giving ACID commits, time travel and MERGE on Spark. Databricks open-sourced it in 2019 and moved it to the Linux Foundation in October 2019[^delta-lf]. For years, though, some features (such as OPTIMIZE/Z-order) stayed Databricks-only until Delta Lake 2.0 opened them in June 2022[^delta-2]. That history made other vendors see Delta as Databricks' format. Microsoft chose Delta-Parquet for Fabric/OneLake[^fabric-ga], but Snowflake, AWS and Google chose Iceberg. Databricks' answer was UniForm (Delta tables readable as Iceberg) and the Tabular acquisition[^cnbc-tabular]. Delta 4.0 (2025) added catalog-managed tables tied to Unity Catalog[^delta-40].

# Timeline

| Year | Event |
|---|---|
| 2019 | Open-sourced; Linux Foundation[^delta-lf] |
| 2022 | Delta 2.0 opens all features[^delta-2] |
| 2023 | Fabric standardises on Delta[^fabric-ga]; UniForm |
| 2024 | Databricks buys Tabular (Iceberg)[^cnbc-tabular] |
| 2025 | Delta 4.0[^delta-40] |

# What worked

- Huge installed base through Databricks, and Microsoft's adoption in Fabric.
- Strong technical features (deletion vectors, liquid clustering) that also influenced Iceberg v3.

# What didn't

- Its perceived single-vendor control cost it the neutral-standard role, and holding back features until 2022 reinforced that perception.

# Related

- [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md) · [Databricks](/systems/databricks.md) · [Apache Iceberg](/systems/apache-iceberg.md) · [Microsoft Fabric](/systems/microsoft-fabric.md)
