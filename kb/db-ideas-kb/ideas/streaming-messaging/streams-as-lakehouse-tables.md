---
type: Idea
title: "Streams as lakehouse tables (Kafka topics materialized as Iceberg)"
description: "Have the streaming platform write topic data directly as Iceberg/Delta tables in object storage, so one copy serves Kafka consumers and SQL engines with no connector pipeline. Winning: Confluent Tableflow, Redpanda Iceberg Topics, Bufstream, StreamNative Ursa/Lakestream and AWS all shipped it in 2024–2026. The 'one copy' promise is only partly delivered, and most enterprises still keep a log plus a separate analytical copy."
tags: [iceberg, lakehouse, kafka, streaming, object-storage, tableflow]
area: streaming-messaging
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "Kafka Connect S3/HDFS sinks (2010s); Iceberg (Netflix 2017) and Delta Lake (2019); lakehouse consolidation 2023–24."
key_systems: [systems/confluent, systems/redpanda, systems/bufstream, systems/streamnative, systems/risingwave, systems/apache-iceberg]
related_ideas: [ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/cdc-as-integration-backbone, ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/lakehouse]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tableflow-ga
    resource: https://www.confluent.io/press-release/confluent-announces-tableflow-general-availability/
    title: "Confluent announces general availability of Tableflow (2025-03-19)"
    author: org:confluent
  - id: rp-iceberg
    resource: https://www.businesswire.com/news/home/20250407927479/en/Redpanda-Announces-the-General-Availability-of-Apache-Iceberg-Topics-for-the-Enterprise
    title: "Redpanda announces GA of Apache Iceberg Topics (2025-04-07)"
    author: org:redpanda
  - id: buf-launch
    resource: https://webflow.buf.build/blog/bufstream-kafka-lower-cost
    title: "Buf: Bufstream — Kafka at 8x lower cost (Parquet + Iceberg metadata)"
    author: org:buf
  - id: ursa-vldb
    resource: https://streamnative.io/blog/ursa-wins-vldb-2025-best-industry-paper-the-first-lakehouse-native-streaming-engine-for-kafka
    title: "StreamNative: Ursa wins VLDB 2025 Best Industry Paper"
    author: org:streamnative
  - id: sn-lakestream
    resource: https://www.businesswire.com/news/home/20260407143701/en/StreamNative-Introduces-Lakestream-Architecture-and-Launches-Native-Kafka-Service-Unifying-Streaming-and-the-Lakehouse
    title: "StreamNative introduces Lakestream architecture (2026-04-07)"
    author: org:streamnative
  - id: waehner-q3-2026
    resource: https://www.kai-waehner.de/blog/2026/09/21/data-streaming-trends-q3-2026-what-changes-through-2027/
    title: "Kai Waehner: Data Streaming Trends Q3 2026"
    author: person:kai-waehner
  - id: tc-ws
    resource: https://techcrunch.com/2024/09/09/confluent-acquires-streaming-data-startup-warpstream/
    title: "TechCrunch: Confluent acquires WarpStream (2024-09-09)"
---

# Summary

**Verdict: winning.** Once the streaming platform's data sits in object storage (tiered or diskless), writing it as Parquet files with Iceberg or Delta metadata is a small step, and it removes a whole class of connector jobs. Every major vendor shipped a version in about 18 months. Bufstream launched with Iceberg-format storage (Jul 2024)[^buf-launch]. Confluent's Tableflow went GA for Iceberg (Mar 2025)[^tableflow-ga]. Redpanda Iceberg Topics went GA (Apr 2025)[^rp-iceberg]. StreamNative made "a Kafka topic and an Iceberg table can be the same object" the core of its 2026 Lakestream architecture[^sn-lakestream]. Waehner's Q3 2026 summary is that Iceberg "emerged as the standard analytical storage format", while "most enterprises maintain separate event logs and analytical copies"[^waehner-q3-2026]. The integration is real. The single-copy architecture is still mostly a roadmap.

# The idea

Topic → table with zero pipelines. The broker (or a managed service beside it) writes records as columnar files, maps the schema registry's schema to the table schema, commits Iceberg snapshots, and registers them in a catalog (Glue, Unity, Polaris, Snowflake Horizon, S3 Tables). Streaming consumers read the topic, and Spark/Trino/Snowflake/DuckDB read the table. In the strongest form (Ursa, Bufstream) the table files are the stream's storage, so there is one copy.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018–23 | Kafka Connect sink connectors (S3, Iceberg, Delta) are the standard way to land streams in lakes, as separately operated pipelines | mixed |
| 2024 | Bufstream launches with Parquet/Iceberg storage (Jul)[^buf-launch]. Confluent announces Tableflow (Mar). Redpanda Iceberg Topics beta (Dec)[^rp-iceberg] | + |
| 2025 | Tableflow GA for Iceberg; Delta in early access with Databricks (Mar 19)[^tableflow-ga]. Redpanda Iceberg Topics GA (Apr 7)[^rp-iceberg]. Ursa wins VLDB Best Industry Paper[^ursa-vldb] | + |
| 2026 | StreamNative Lakestream: stream and table as one object, federating with Unity, Horizon and S3 Tables catalogs (Apr 7)[^sn-lakestream] | + |

# What succeeded

- **Vendor convergence.** Confluent, Redpanda, StreamNative, Buf, AWS (MSK data delivery) and Snowflake all ship topic-to-Iceberg features[^waehner-q3-2026].
- **Iceberg as the shared format.** Streaming vendors standardized on Iceberg first (Delta second), following the [open table formats](/ideas/analytics-lakehouse/open-table-formats.md) outcome.
- **Less glue.** For append-only event data, removing the sink connector removes a failure point, a schema-mapping layer and a cost line.

# What failed

- **"One copy" is rare.** Most implementations (Tableflow, Iceberg Topics) still write a second, table-formatted copy next to the log segments. True shared storage exists mainly in Ursa and Bufstream[^waehner-q3-2026].
- **Updates and CDC.** Mapping upsert or CDC topics to tables needs merge-on-read, compaction and equality deletes. Small-file problems and maintenance costs are now the streaming vendor's job.
- **Catalog fragmentation.** Each vendor integrates with a different set of catalogs, which mirrors the lakehouse catalog war.

# Why

Streaming and lakehouse storage converged on the same substrate (S3 + Parquet) for cost reasons, so the remaining gap was metadata. Iceberg's open spec made that gap small enough for streaming vendors to close themselves. It also gave streaming vendors a way to capture analytics spend instead of feeding Databricks and Snowflake through connectors. That is why Confluent bought WarpStream for BYOC[^tc-ws] and built Tableflow, and why StreamNative rebranded around "Lakestream."

# Lessons

- When two systems share a storage substrate, integration features soon follow, and vendors on both sides race to own the boundary.
- An open table format turns "data movement" products into "metadata commit" features.
- Marketing (single copy, zero ETL) usually runs ahead of architecture. Check whether there are really one or two copies.

# Related

- [Confluent](/systems/confluent.md), [Redpanda](/systems/redpanda.md), [Bufstream](/systems/bufstream.md), [StreamNative](/systems/streamnative.md), [Apache Iceberg](/systems/apache-iceberg.md)
- [Diskless Kafka](/ideas/streaming-messaging/diskless-kafka-on-object-storage.md), [Open table formats war](/ideas/analytics-lakehouse/open-table-formats.md), [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md)
- [Ursa paper](/papers/2025-ursa-lakehouse-native-streaming.md)
