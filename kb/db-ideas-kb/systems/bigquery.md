---
type: System
title: Google BigQuery
description: "Google's serverless analytical warehouse (from Dremel). It added multi-cloud (Omni) and lakehouse features (BigLake, Iceberg tables GA 2025) to stay central as open formats spread. A steady hyperscaler success with no dramatic arc."
resource: https://cloud.google.com/bigquery
tags: [data-warehouse, serverless, google-cloud, iceberg, lakehouse]
kind: cloud-service
first_release: 2010
org: "Google Cloud"
outcome: stable
ideas: [ideas/analytics-lakehouse/cloud-data-warehouses, ideas/analytics-lakehouse/lakehouse, ideas/analytics-lakehouse/open-table-formats]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: biglake-paper
    resource: https://research.google/pubs/biglake-bigquerys-evolution-toward-a-multi-cloud-lakehouse/
    title: "Google Research: BigLake — BigQuery's Evolution toward a Multi-Cloud Lakehouse"
  - id: biglake-iceberg
    resource: https://cloud.google.com/blog/products/data-analytics/announcing-apache-iceberg-support-for-biglake
    title: "Google Cloud blog: Apache Iceberg support for BigLake (2022)"
  - id: bq-iceberg
    resource: https://docs.cloud.google.com/bigquery/docs/release-notes
    title: "BigQuery release notes (BigLake tables for Apache Iceberg GA, June 2025)"
  - id: iceberg-110
    resource: https://opensource.googleblog.com/2025/09/apache-iceberg-110-maturing-the-v3-spec-the-rest-api-and-google-contributions.html
    title: "Google Open Source Blog: Apache Iceberg 1.10 and Google contributions (Sept 2025)"
---

# Summary

BigQuery was serverless from the start, with no clusters to size, and it billed per byte scanned or per slot. Between 2018 and 2026 Google spent its effort keeping BigQuery central while data moved to open formats and other clouds. BigQuery Omni runs the engine in AWS and Azure regions. BigLake (2022) extended BigQuery governance and performance to files in object storage and added Iceberg support[^biglake-paper][^biglake-iceberg]. BigQuery-managed Iceberg tables, renamed "BigLake tables for Apache Iceberg in BigQuery", went GA in June 2025[^bq-iceberg]. Google also became a significant contributor to Iceberg v3 and the REST catalog spec[^iceberg-110]. BigQuery ML (in-database ML, 2018) and later Gemini features are covered under ML-for-DB.

# Timeline

| Year | Event |
|---|---|
| 2018 | BigQuery ML launched |
| 2020 | BigQuery Omni announced (multi-cloud) |
| 2022 | BigLake GA; Iceberg support announced[^biglake-iceberg] |
| 2025 | Iceberg tables GA (June)[^bq-iceberg]; Google contributions in Iceberg 1.10[^iceberg-110] |

# What worked

- The serverless pricing and operations model, which competitors (Redshift Serverless, Snowflake) later copied.
- Embracing Iceberg kept BigQuery relevant as the lakehouse engine on Google Cloud.

# What didn't

- Omni's multi-cloud pitch had little visible traction compared with simply using each cloud's native warehouse (no public adoption numbers found).
- BigQuery stayed tied to Google Cloud's smaller market share.

# Related

- [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md) · [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md)
- [BigQuery ML](/systems/bigquery-ml.md) · [Snowflake](/systems/snowflake.md) · [Redshift](/systems/redshift.md)
