---
type: Event
title: Confluent announces agreement to acquire Immerok
description: The agreement accelerates Confluent’s move toward managed Apache Flink alongside Kafka.
date: '2023-01-06'
year: 2023
kind: acquisition
signal: positive
ideas:
- ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink
systems:
- systems/confluent
- systems/apache-flink
- systems/ksqldb
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: immerok-primary
  resource: https://www.confluent.io/blog/cloud-kafka-meets-cloud-flink-with-confluent-and-immerok/
  title: 'Confluent + Immerok: Cloud Native Kafka Meets Cloud Native Flink'
- id: ksql-docs
  resource: https://docs.confluent.io/platform/current/ksqldb/overview.html
  title: ksqlDB for Confluent Platform
---

# What happened

On January 6, 2023, Confluent announced a definitive agreement to acquire Immerok, a company building a managed Apache Flink service. Jay Kreps described plans to bring its team into Confluent and add managed Flink to Confluent Cloud.[^immerok-primary] This date records the announced agreement; the cited statement is not a separate closing notice.

# Why it matters

The strategic signal was investment in an established processing ecosystem around the Kafka transport layer. It also created an internal choice among Flink, Kafka Streams and ksqlDB. Confluent’s later documentation recommends Flink for new workloads while continuing support for existing ksqlDB applications.[^ksql-docs] The inference is consolidation of preferred new development, not proof of ksqlDB shutdown. An acquisition can redirect the sponsor’s product roadmap before an older product reaches formal end of life.

# Related

- [Confluent](/systems/confluent.md)
- [Apache Flink](/systems/apache-flink.md)
- [Ksqldb](/systems/ksqldb.md)
