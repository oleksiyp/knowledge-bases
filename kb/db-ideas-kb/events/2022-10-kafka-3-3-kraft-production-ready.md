---
type: Event
title: Kafka 3.3 marks KRaft production-ready for new clusters
description: The release family makes Kafka’s self-managed metadata quorum a production option before ZooKeeper
  migration and removal are complete.
date: '2022-10-03'
year: 2022
kind: launch
signal: positive
ideas:
- ideas/streaming-messaging/kraft-removing-zookeeper
systems:
- systems/apache-kafka
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: kafka-downloads
  resource: https://kafka.apache.org/community/downloads/
  title: Apache Kafka release history
- id: kraft33
  resource: https://kafka.apache.org/33/operations/kraft/
  title: Apache Kafka 3.3 KRaft documentation
- id: kafka-40
  resource: https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/
  title: Apache Kafka 4.0.0 Release Announcement (2025-03-18)
  author: org:apache
---

# What happened

Kafka’s release history lists the October 3, 2022 release in the 3.3 family with KIP-833, marking KRaft production-ready. The accompanying documentation describes controller and broker roles in the new metadata architecture.[^kafka-downloads][^kraft33] The milestone concerns production use for new clusters, not a claim that ZooKeeper vanished in 2022.

# Why it matters

The distinction between a supported new deployment and a safe migration path is central to infrastructure adoption. Operators of an existing cluster cannot infer upgrade readiness from a clean-install milestone alone. Kafka 4.0 later removed ZooKeeper support in March 2025, making the multi-year transition visible.[^kafka-40] The analytical lesson is that dependency removal has technical and operational phases. The new architecture can be viable well before every installed system can move without preparation.

# Related

- [Apache Kafka](/systems/apache-kafka.md)
