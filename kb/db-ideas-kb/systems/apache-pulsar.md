---
type: System
title: Apache Pulsar
description: "Messaging and streaming system from Yahoo with stateless brokers over Apache BookKeeper storage, native multi-tenancy, geo-replication and queue plus stream subscriptions. Apache top-level since 2018. Technically respected, but it stayed a niche next to Kafka."
resource: https://pulsar.apache.org
tags: [messaging, streaming, bookkeeper, multi-tenancy, apache]
kind: oss
first_release: 2016
org: "Apache Software Foundation (originated at Yahoo; main commercial backer StreamNative)"
license: Apache-2.0
outcome: stable
ideas: [ideas/streaming-messaging/apache-pulsar-two-tier-challenger, ideas/streaming-messaging/tiered-storage-for-streams, ideas/streaming-messaging/queues-and-logs-converge]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
metrics:
  github_stars: { value: 15340, as_of: 2026-10-03 }
sources:
  - id: sn-adoption
    resource: https://streamnative.io/blog/apache-pulsar-adoption-why-companies-use-streaming-messaging-platform
    title: "StreamNative: Apache Pulsar adoption"
    author: org:streamnative
  - id: conduktor-vs
    resource: https://www.conduktor.io/glossary/kafka-vs-pulsar
    title: "Conduktor: Kafka vs Pulsar"
  - id: kop
    resource: https://streamnative.io/blog/kafka-on-pulsar-bring-native-kafka-protocol-support-to-apache-pulsar
    title: "StreamNative: Kafka-on-Pulsar (2020)"
    author: org:streamnative
  - id: sn-kafka-too
    resource: https://streamnative.io/blog/we-are-a-kafka-company-too
    title: "Sijie Guo: We Are a Kafka Company, Too (2026-04-01)"
    author: org:streamnative
  - id: pulsar-4
    resource: https://streamnative.io/blog/announcing-apache-pulsar-tm-4-0-towards-an-open-data-streaming-architecture
    title: "StreamNative: Introducing Apache Pulsar 4.0"
    author: org:streamnative
---

# Summary

Pulsar was developed at Yahoo from 2012, open-sourced in 2016, and became an Apache top-level project in 2018[^sn-adoption]. It runs at Tencent, Verizon Media, Splunk, China Mobile and others (per StreamNative)[^sn-adoption]. Its architecture (brokers + BookKeeper bookies + ZooKeeper/metadata store) anticipated compute/storage separation but meant more components to run[^conduktor-vs]. It tried to borrow Kafka's ecosystem through Kafka-on-Pulsar (2020)[^kop]. Pulsar 4.0 shipped as an LTS release in 2024[^pulsar-4]. In 2026 its main commercial backer said "the Kafka protocol had won" and launched a native Kafka service, while saying Pulsar "isn't going anywhere"[^sn-kafka-too].

# Timeline

| Date | Event |
|---|---|
| 2018 | Apache top-level project[^sn-adoption] |
| 2020-03 | Kafka-on-Pulsar protocol handler[^kop] |
| 2024 | Pulsar 4.0 LTS[^pulsar-4] |
| 2026-04 | StreamNative pivots to "Lakestream" and native Kafka[^sn-kafka-too] |

# What worked

- Multi-tenancy, geo-replication and flexible subscription types; strong for messaging-heavy platforms.
- Early tiered storage and stateless brokers.

# What didn't

- Operational complexity and a much smaller ecosystem than Kafka.
- No first-party hyperscaler service. Kafka copied its main advantages (KRaft, tiered storage, queues).

# Related

- [StreamNative](/systems/streamnative.md), [Apache Kafka](/systems/apache-kafka.md)
- [Pulsar's challenge](/ideas/streaming-messaging/apache-pulsar-two-tier-challenger.md)
