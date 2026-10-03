---
type: Idea
title: "Stream processing consolidates on Apache Flink"
description: "Stateful, exactly-once stream processing went from many engines (Storm, Samza, Spark Streaming, Kafka Streams, ksqlDB, Beam runners) to Apache Flink as the default managed offering at Confluent, AWS, Alibaba and others. It won. Flink 2.0 (March 2025) moved state to object storage, and the remaining challengers either sold (Arroyo, Decodable, Immerok) or found niches."
tags: [stream-processing, flink, kafka-streams, spark, exactly-once, state]
area: streaming-messaging
verdict: won
hype_peak: 2023
adoption_2026: mainstream
origins: "Stratosphere research project (TU Berlin); Apache top-level 2014; data Artisans/Ververica, acquired by Alibaba in 2019."
key_systems: [systems/apache-flink, systems/confluent, systems/arroyo, systems/ksqldb, systems/risingwave, systems/amazon-kinesis]
related_ideas: [ideas/streaming-messaging/streaming-databases-and-ivm, ideas/streaming-messaging/kafka-as-central-log, ideas/analytics-lakehouse/composable-data-systems]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: flink-20
    resource: https://flink.apache.org/2025/03/24/apache-flink-2.0.0-a-new-era-of-real-time-data-processing/
    title: "Apache Flink 2.0.0: A new era of real-time data processing (2025-03-24)"
    author: org:apache
  - id: forst-vldb
    resource: https://www.vldb.org/pvldb/vol18/p4846-mei.pdf
    title: "Mei et al.: Disaggregated State Management in Apache Flink 2.0 (VLDB 2025, industry)"
  - id: immerok
    resource: https://investors.confluent.io/news-releases/news-release-details/confluent-announces-intent-acquire-immerok-accelerate
    title: "Confluent announces intent to acquire Immerok (2023-01-06)"
    author: org:confluent
  - id: arroyo-cf
    resource: https://blog.cloudflare.com/cloudflare-acquires-arroyo-pipelines-streaming-ingestion-beta/
    title: "Cloudflare: acquires Arroyo; Pipelines streaming ingestion beta (2025-04-10)"
    author: org:cloudflare
  - id: redis-decodable
    resource: https://redis.io/blog/redis-to-acquire-decodable-to-turbocharge-our-real-time-data-platform/
    title: "Redis to acquire Decodable (2025-09)"
    author: org:redis
  - id: ksql-status
    resource: https://www.conduktor.io/kafka-streams/vs-ksqldb
    title: "Conduktor: Kafka Streams vs ksqlDB (status of ksqlDB)"
  - id: spark-rtm
    resource: https://www.databricks.com/blog/introducing-real-time-mode-apache-sparktm-structured-streaming
    title: "Databricks: Introducing Real-Time Mode in Apache Spark Structured Streaming (2025)"
    author: org:databricks
  - id: kafka-42
    resource: https://www.confluent.io/blog/apache-kafka-4-2-release/
    title: "Confluent: Apache Kafka 4.2.0 released (2026-02-20)"
    author: org:confluent
  - id: sa-sale
    resource: https://siliconangle.com/2025/10/08/data-streaming-provider-confluent-reportedly-exploring-sale/
    title: "SiliconANGLE: Confluent reportedly exploring a sale (2025-10-08)"
---

# Summary

**Verdict: won.** Apache Flink became the standard engine for stateful stream processing. Confluent bought the Flink startup Immerok in January 2023 and made Flink SQL its strategic processing layer, which left its own ksqlDB behind[^immerok][^ksql-status]. AWS renamed Kinesis Data Analytics to Managed Service for Apache Flink. Alibaba, which bought Ververica in 2019, runs Flink at very large scale and led Flink 2.0 (March 24, 2025)[^flink-20]. Its headline feature, disaggregated state on object storage (ForSt), was published at VLDB 2025[^forst-vldb]. Rust/DataFusion challengers such as Arroyo were absorbed by platforms (Cloudflare, April 2025)[^arroyo-cf], and Flink-as-a-service startups were bought (Immerok → Confluent, Decodable → Redis)[^redis-decodable]. Flink stays hard to operate. That is why managed Flink is a business, and why simpler options (Kafka Streams, Spark Real-Time Mode, warehouses' incremental views) keep large shares of real workloads.

# The idea

One engine for event-time processing with watermarks, large keyed state, exactly-once checkpoints, and both a DataStream API and SQL, running continuously and at scale. With Flink SQL over Kafka, streaming becomes accessible to SQL users, and the same engine handles ETL, joins, enrichment, windowed aggregation and CEP.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | AWS launches Flink-based Kinesis Data Analytics for Java applications (renamed Amazon Managed Service for Apache Flink in 2023) | + |
| 2019 | Alibaba acquires data Artisans (renamed Ververica); Blink merged into Flink | + |
| 2022 | Arroyo (Rust) and other Flink alternatives founded; RisingWave pitches as a Flink alternative | mixed |
| 2023 | Confluent buys Immerok, planning cloud Flink starting with SQL (Jan 6)[^immerok] | + |
| 2025 | Flink 2.0: disaggregated state (ForSt), async execution, removal of deprecated APIs (Mar 24)[^flink-20]. Cloudflare acquires Arroyo (Apr 10)[^arroyo-cf]. Databricks announces Spark Structured Streaming Real-Time Mode (summer)[^spark-rtm] | + |
| 2025 | Redis acquires Decodable (announced Sept 4, closed Sept 17)[^redis-decodable]. Confluent's growth plan relies on Connect and Flink expansion[^sa-sale] | + |
| 2026 | Kafka 4.2: Kafka Streams server-side rebalance GA and DLQ support, still investing in the lightweight library[^kafka-42] | mixed |

# What succeeded

- **Vendor consolidation.** Confluent, AWS, Alibaba Cloud, Ververica, Aiven and many others offer managed Flink. A single dominant open engine means portable skills and connectors.
- **Flink SQL** made streaming available to analysts and won over ksqlDB even at the company that built ksqlDB[^ksql-status].
- **Cloud-native state.** Flink 2.0 made remote object storage the primary state store with local disk as cache, so jobs with hundreds of terabytes of state can rescale and recover quickly[^forst-vldb].

# What failed

- **Ease of use.** Flink is still known as hard to tune (checkpoints, backpressure, state size, upgrades with savepoints). Companies like Decodable and Immerok existed because of this, and they were acquired instead of growing into large independents[^redis-decodable].
- **Challengers.** Arroyo (Rust, SQL-first) was technically strong but became an internal engine for Cloudflare Pipelines[^arroyo-cf]. ksqlDB stalled. Samza and Storm faded. Apache Beam's portability promise mostly reduced to Google Dataflow.
- **Standalone processing revenue.** Stream processing sells best when bundled with the log (Confluent) or the cloud (AWS, Alibaba), not on its own.

# Why

Flink got the semantics right early: event time, exactly-once state and savepoints. It also had a corporate patron (Alibaba) with an enormous internal workload that funded hard engineering such as Flink 2.0's disaggregated state. Once Confluent chose it in 2023, the main Kafka vendor and the main processing engine were aligned, and alternative engines lost their best distribution channel. The trend toward object storage in Kafka also helped Flink, because state and logs could both live in S3.

Simpler choices keep their place because most streaming jobs are stateless or lightly stateful. Kafka Streams (a library inside the application), Spark (already deployed for batch, now with a low-latency mode[^spark-rtm]) and warehouse incremental refresh cover those without a Flink cluster.

# Lessons

- In infrastructure categories, one open-source engine usually becomes the default and vendors compete on hosting it.
- Engines that are hard to operate create a managed-service market, but the service companies are usually acquired by platforms rather than growing large.
- Corporate patrons with huge internal workloads (Alibaba for Flink, LinkedIn for Kafka) fund the deep engineering that small vendors cannot.

# Related

- [Apache Flink](/systems/apache-flink.md), [Confluent](/systems/confluent.md), [Arroyo](/systems/arroyo.md), [ksqlDB](/systems/ksqldb.md), [RisingWave](/systems/risingwave.md)
- [Confluent acquires Immerok](/events/2023-01-confluent-acquires-immerok.md), [Cloudflare acquires Arroyo](/events/2025-04-cloudflare-acquires-arroyo.md)
- [Streaming databases and IVM](/ideas/streaming-messaging/streaming-databases-and-ivm.md)
