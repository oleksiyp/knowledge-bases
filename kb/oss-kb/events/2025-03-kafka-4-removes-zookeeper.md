---
type: Event
title: Apache Kafka 4.0 ships without ZooKeeper
description: Kafka 4.0 (2025-03-18) completed the multi-year KRaft migration by removing ZooKeeper entirely and introduced early-access queues (share groups).
event_kind: release
date: 2025-03-18
window: W24
impact: positive
projects: [projects/data-engineering/apache-kafka]
organizations: [organizations/confluent]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: confluent-kafka4
    resource: https://www.confluent.io/blog/latest-apache-kafka-release/
    title: "Confluent: Apache Kafka 4.0 release"
  - id: twominute
    resource: https://blog.2minutestreaming.com/p/apache-kafka-4-0-release
    title: "2 Minute Streaming: Kafka 4.0 – Hello Queues, Goodbye ZooKeeper"
  - id: axonops-42
    resource: https://axonops.com/blog/apache-kafka-4-2-0-is-out/
    title: "AxonOps: Apache Kafka 4.2.0 is out"
---

# What happened
Apache Kafka 4.0 was released on 2025-03-18 as the first major release running entirely without ZooKeeper; KRaft is the only metadata mode, and ZooKeeper-mode clusters must migrate to KRaft on 3.7–3.9 before upgrading[^confluent-kafka4][^twominute]. It also brought the new consumer rebalance protocol and early-access share groups (queues)[^confluent-kafka4].

# Why it matters
Removed Kafka's biggest operational burden — a key selling point of Redpanda and other "no ZooKeeper" competitors.

# Outcome so far
Share groups progressed to preview in 4.1 and GA in 4.2 (Feb 2026)[^axonops-42].

# Related
- [Apache Kafka](/projects/data-engineering/apache-kafka.md), [Redpanda](/projects/data-engineering/redpanda.md)

[^confluent-kafka4]: Confluent blog.
[^twominute]: 2 Minute Streaming.
[^axonops-42]: AxonOps.
