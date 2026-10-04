---
type: System
title: ksqlDB
description: Confluent exposes Kafka stream processing through SQL. The product remains supported for existing
  applications, but Confluent recommends Flink for new workloads.
resource: https://docs.confluent.io/platform/current/ksqldb/overview.html
tags:
- streaming
- data-infrastructure
kind: product
outcome: stable
ideas:
- ideas/streaming-messaging/streaming-databases-and-ivm
- ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: ksql-docs
  resource: https://docs.confluent.io/platform/current/ksqldb/overview.html
  title: ksqlDB for Confluent Platform
- id: immerok
  resource: https://investors.confluent.io/news-releases/news-release-details/confluent-announces-intent-acquire-immerok-accelerate
  title: Confluent announces intent to acquire Immerok (2023-01-06)
  author: org:confluent
- id: infoq-ccl
  resource: https://www.infoq.com/news/2018/12/confluent-license-changes/
  title: 'InfoQ: License Changes for Confluent Platform Restricting Cloud Vendor Usage (Dec 2018)'
  author: org:infoq
---

# Summary

ksqlDB offers a SQL interface to stream processing on Kafka. Confluent documents persistent transformations, stream and table operations, and queryable results. Its current guidance explicitly recommends Confluent Platform for Apache Flink for new stream-processing workloads while keeping ksqlDB supported for existing applications.[^ksql-docs]

That is a narrower and better-supported verdict than declaring the project dead. The technology succeeded at making common Kafka transformations approachable through SQL, but the sponsor's preferred platform for new work moved elsewhere.

# Timeline

| Period | Event |
|---|---|
| 2018 | Confluent changes the licensing of components including KSQL[^infoq-ccl] |
| 2023 | Confluent announces intent to acquire Immerok to accelerate a managed Flink offering[^immerok] |
| 2026 snapshot | Documentation recommends Flink for new workloads and supports existing ksqlDB applications[^ksql-docs] |

# What worked

Developers can express streaming operations in SQL rather than manage all the processing logic in an application. Existing Kafka infrastructure and schemas provide a natural entry point.[^ksql-docs] The analytical lesson is that a convenient interface can create a useful product even when it does not become the universal execution engine.

# What didn't

The sponsor's recommendation weakens the case for treating ksqlDB as its long-term default for new projects.[^ksql-docs] This does not establish a universal end-of-life date: hosted-service availability, self-managed support and repository activity are different questions. No shutdown claim is inferred from an acquisition or from third-party descriptions of maintenance mode.

# Related

- [Apache Flink](/systems/apache-flink.md) · [Kafka Streams](/systems/kafka-streams.md)
- [Streaming databases and IVM](/ideas/streaming-messaging/streaming-databases-and-ivm.md)
