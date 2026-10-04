---
type: Event
title: AWS launches S3 Tables with managed Iceberg maintenance
description: Table buckets make Iceberg management a native object-storage service, reducing maintenance work while
  deepening cloud integration.
date: '2024-12-03'
year: 2024
kind: launch
signal: positive
ideas:
- ideas/analytics-lakehouse/open-table-formats
- ideas/analytics-lakehouse/lakehouse
- ideas/analytics-lakehouse/catalog-wars
systems:
- systems/apache-iceberg
- systems/redshift
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: launch
  resource: https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-s3-tables-apache-iceberg-tables-analytics-workloads/
  title: Announcing Amazon S3 Tables (December 3, 2024)
---

# What happened

AWS launched Amazon S3 Tables on December 3, 2024. A new table-bucket resource type stores Apache Iceberg tables and offers automated compaction, snapshot management and removal of unreferenced files. Initial availability covered three US regions, while integration with AWS Glue Data Catalog was in preview.[^launch]

AWS advertised up to three times higher query throughput and ten times higher transaction throughput than self-managed tables. Those figures are vendor comparison claims, not a general performance guarantee for arbitrary workloads.[^launch]

# Why it matters

A table format had become important enough for an object-storage provider to manage it directly. That is concrete adoption evidence for Iceberg, independent of claims that one startup or engine won the market. It also identifies what customers pay for after a format becomes open: table maintenance, permissions and integration with existing cloud services.[^launch]

The causal interpretation is that openness and managed-service dependence can grow together. Portable table data reduces one switching cost, while cloud-specific operational resources and permissions create others. Teams still need to assess their exit path at the service and catalog layers.

# Related

- [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md)
- [Apache Iceberg](/systems/apache-iceberg.md)
- [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md)
