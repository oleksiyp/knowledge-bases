---
type: Paper
title: 'Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics'
description: "The lakehouse paper argues that transactional metadata and optimized execution can provide warehouse capabilities over open analytical files. Its architectural thesis proved influential without eliminating managed warehouses."
year: 2021
venue: CIDR 2021
authors:
- Michael Armbrust
- Ali Ghodsi
- Reynold Xin
- Matei Zaharia
resource: https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf
impact: high
ideas:
- ideas/analytics-lakehouse/lakehouse
- ideas/analytics-lakehouse/open-table-formats
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: paper
  resource: https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf
  title: Lakehouse (CIDR 2021)
- id: s3
  resource: https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-s3-tables-apache-iceberg-tables-analytics-workloads/
  title: Amazon S3 Tables launch
- id: ducklake
  resource: https://ducklake.select/2025/05/27/ducklake-01/
  title: 'DuckLake: SQL as a Lakehouse Format'
---

# Claim

Armbrust and colleagues argued that open analytical files could support warehouse-style management and performance while remaining directly accessible to machine-learning tools. A transactional metadata layer, caching, statistics and optimized execution would replace the duplication inherent in separate lake and warehouse pipelines. Their Databricks implementation supplied performance evidence, rather than proving the economics of every possible deployment.[^paper]

# What happened next

AWS's S3 Tables launch supplied concrete evidence that a major cloud platform would build managed table services directly on Iceberg. It combined an open format with operational automation.[^s3] DuckLake later challenged the metadata implementation by putting that state in SQL tables while retaining Parquet files.[^ducklake]

The resulting interpretation is architectural convergence, not literal disappearance of data warehouses. The paper's useful contribution is the separation of durable data representation from the engine selling access to it. Catalogs, governance and maintenance remain services that somebody must operate. Its long-term impact is high because it supplied a clear design thesis against which later systems can be evaluated; vendor revenue or a benchmark win alone would be a weaker test.

# Related

- [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md)
- [Databricks](/systems/databricks.md)
- [S3 Tables launch](/events/2024-12-aws-s3-tables-iceberg.md)
