---
type: System
title: Apache Kafka
description: "Distributed, partitioned, replicated commit log, the de facto standard for event streaming. Removed ZooKeeper in 4.0 (2025), added production queues (share groups) in 4.2 (2026), and accepted diskless topics (KIP-1150) as its next storage direction."
resource: https://kafka.apache.org
tags: [streaming, log, messaging, apache, jvm]
kind: oss
first_release: 2011
org: "Apache Software Foundation (created at LinkedIn; main contributor Confluent, now IBM)"
license: Apache-2.0
outcome: thriving
ideas: [ideas/streaming-messaging/kafka-as-central-log, ideas/streaming-messaging/kraft-removing-zookeeper, ideas/streaming-messaging/tiered-storage-for-streams, ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/kafka-protocol-as-standard, ideas/streaming-messaging/queues-and-logs-converge, ideas/streaming-messaging/cdc-as-integration-backbone]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
metrics:
  github_stars: { value: 33895, as_of: 2026-10-03 }
sources:
  - id: kafka-home
    resource: https://kafka.apache.org/
    title: "Apache Kafka home page"
    author: org:apache
  - id: infoq-33
    resource: https://www.infoq.com/news/2022/10/apache-kafka-kraft/
    title: "InfoQ: Kafka 3.3 replaces ZooKeeper with KRaft (Oct 2022)"
    author: org:infoq
  - id: kafka-39
    resource: https://kafka.apache.org/blog/2024/11/06/apache-kafka-3.9.0-release-announcement/
    title: "Apache Kafka 3.9.0 release announcement"
    author: org:apache
  - id: kafka-40
    resource: https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/
    title: "Apache Kafka 4.0.0 release announcement"
    author: org:apache
  - id: kafka-42
    resource: https://www.confluent.io/blog/apache-kafka-4-2-release/
    title: "Confluent: Apache Kafka 4.2.0 released (2026-02-20)"
    author: org:confluent
  - id: aiven-1150
    resource: https://aiven.io/blog/kip-1150-accepted-and-the-road-ahead
    title: "Aiven: KIP-1150 Accepted, and the Road Ahead"
    author: org:aiven
  - id: jepsen-buf
    resource: https://jepsen.io/analyses/bufstream-0.1.0
    title: "Jepsen: Bufstream 0.1.0 (includes Kafka-general findings)"
    author: person:kyle-kingsbury
---

# Summary

Kafka is the most widely deployed streaming system of the period. The project claims use at more than 80% of the Fortune 100[^kafka-home]. From 2018 to 2026 it changed in place without breaking clients. It moved metadata to KRaft (production-ready 3.3, Oct 2022[^infoq-33]; ZooKeeper removed in 4.0, Mar 2025[^kafka-40]). Tiered storage became production-ready in 3.9 (Nov 2024)[^kafka-39]. A new consumer rebalance protocol (KIP-848) went GA in 4.0. Queues (share groups, KIP-932) became production-ready in 4.2 (Feb 2026)[^kafka-42]. Diskless topics (KIP-1150) were accepted on March 2, 2026[^aiven-1150]. Its wire protocol became an industry standard, implemented by many other engines.

# Timeline

| Date | Event |
|---|---|
| 2019-09 | KIP-500 (remove ZooKeeper) posted |
| 2022-10 | 3.3: KRaft production-ready[^infoq-33] |
| 2023-10 | 3.6: tiered storage early access |
| 2024-11 | 3.9: tiered storage production-ready; last 3.x bridge release[^kafka-39] |
| 2025-03 | 4.0: ZooKeeper removed; KIP-848 GA; queues early access[^kafka-40] |
| 2026-02 | 4.2: share groups production-ready[^kafka-42] |
| 2026-03 | KIP-1150 diskless topics accepted[^aiven-1150] |

# What worked

- Compatible evolution. Major architectural changes landed without a fork or client rewrite.
- Ecosystem: Connect, Streams, Schema Registry (Confluent), Debezium, Flink connectors.
- The protocol as a standard: competitors implement it rather than replace it.

# What didn't

- Slow delivery. KRaft took about six years and tiered storage about five, while vendors shipped proprietary versions first.
- Cloud cost. The leader/follower replication design causes heavy cross-AZ traffic, which diskless designs exploit.
- Transaction semantics are underspecified. Jepsen found write loss, aborted reads and torn transactions caused by the protocol's lack of ordering constraints, affecting Kafka and compatible systems[^jepsen-buf].

# Related

- [Confluent](/systems/confluent.md), [Redpanda](/systems/redpanda.md), [WarpStream](/systems/warpstream.md), [Apache Pulsar](/systems/apache-pulsar.md), [ksqlDB](/systems/ksqldb.md)
- [Kafka as central log](/ideas/streaming-messaging/kafka-as-central-log.md), [KRaft](/ideas/streaming-messaging/kraft-removing-zookeeper.md), [Diskless Kafka](/ideas/streaming-messaging/diskless-kafka-on-object-storage.md)
