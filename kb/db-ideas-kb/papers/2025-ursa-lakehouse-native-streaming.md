---
type: Paper
title: 'Ursa: A Lakehouse-Native Data Streaming Engine for Kafka'
description: Ursa combines Kafka-compatible ingestion with open lakehouse tables. Its architectural contribution
  is reducing duplication and cloud replication costs, with explicit latency tradeoffs.
year: 2025
venue: 'PVLDB 18(12): 5184–5196'
authors:
- Matteo Merli
- Sijie Guo
- Penghui Li
- Hang Chen
- Neng Lu
resource: https://www.vldb.org/pvldb/vol18/p5184-guo.pdf
impact: medium
ideas:
- ideas/streaming-messaging/diskless-kafka-on-object-storage
- ideas/streaming-messaging/streams-as-lakehouse-tables
- ideas/streaming-messaging/apache-pulsar-two-tier-challenger
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: ursa-paper
  resource: https://www.vldb.org/pvldb/vol18/p5184-guo.pdf
  title: 'Ursa: A Lakehouse-Native Data Streaming Engine for Kafka'
- id: sn-lakestream
  resource: https://www.businesswire.com/news/home/20260407143701/en/StreamNative-Introduces-Lakestream-Architecture-and-Launches-Native-Kafka-Service-Unifying-Streaming-and-the-Lakehouse
  title: StreamNative introduces Lakestream and launches native Kafka service (2026-04-07)
  author: org:streamnative
---

# Claim

Ursa separates stateless brokers from metadata and stream storage. It first persists records to an external write-ahead log, then converts them to columnar files registered in open lakehouse formats. This is more precise than claiming every incoming message is immediately stored as a finished Iceberg table. The paper targets ingestion that can tolerate higher latency in exchange for lower cloud infrastructure cost.[^ursa-paper]

# What happened next

StreamNative subsequently announced a native Kafka service within its Lakestream strategy in April 2026.[^sn-lakestream] That provides a product direction around the research, while the medium impact verdict reflects the shorter period available to observe broad independent adoption.

The paper reports favorable cost comparisons, but these depend on workload and deployment assumptions rather than a universal guarantee. Its technical lesson is that transport and analytical storage need not be separate operational silos. The boundary still matters: broker acknowledgement, durable log storage, conversion to columnar files and table visibility are distinct stages. Understanding those stages is necessary before comparing freshness or failure behavior with a conventional Kafka-plus-connector pipeline.

# Related

- [Streamnative](/systems/streamnative.md)
- [Apache Pulsar](/systems/apache-pulsar.md)
- [Apache Kafka](/systems/apache-kafka.md)
