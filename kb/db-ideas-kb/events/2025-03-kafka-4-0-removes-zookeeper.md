---
type: Event
title: Kafka 4.0 removes ZooKeeper support
description: KRaft becomes the sole metadata-management mode, completing a staged architectural transition.
date: '2025-03-18'
year: 2025
kind: launch
signal: positive
ideas:
- ideas/streaming-messaging/kraft-removing-zookeeper
- ideas/streaming-messaging/kafka-as-central-log
systems:
- systems/apache-kafka
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: kafka-40
  resource: https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/
  title: Apache Kafka 4.0.0 Release Announcement (2025-03-18)
  author: org:apache
---

# What happened

Apache Kafka 4.0.0 was released on March 18, 2025 with ZooKeeper support removed. The release also made the new consumer group protocol generally available and introduced early-access share groups.[^kafka-40] Removal is distinct from earlier releases that merely allowed a KRaft configuration.

# Why it matters

The operational improvement is eliminating a separately deployed metadata system from Kafka’s architecture. The transition also demonstrates why simplification can take years: a mature broker must preserve availability and provide a migration path for existing clusters. Early access for share groups should not be read as production readiness for that separate feature.[^kafka-40] The transferable lesson is to evaluate each capability at its actual release stage. A major version can simultaneously retire an old dependency, stabilize one protocol and preview another without giving them identical maturity.

# Related

- [Apache Kafka](/systems/apache-kafka.md)
