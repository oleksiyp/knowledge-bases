---
type: System
title: StreamNative
description: "Company founded in 2019 by Apache Pulsar's creators. Built Kafka-on-Pulsar, then the Ursa lakehouse-native, leaderless engine (VLDB 2025 Best Industry Paper), and in April 2026 relaunched as a 'Lakestream' company with a native Kafka service."
resource: https://streamnative.io
tags: [pulsar, kafka, streaming, lakehouse, iceberg, company]
kind: product
first_release: 2019
org: "StreamNative, Inc."
outcome: pivoted
ideas: [ideas/streaming-messaging/apache-pulsar-two-tier-challenger, ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/streams-as-lakehouse-tables, ideas/streaming-messaging/kafka-protocol-as-standard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: sa-sn-a
    resource: https://siliconangle.com/2021/09/14/messaging-streaming-platform-startup-streamnative-raises-23m/
    title: "SiliconANGLE: StreamNative raises $23M (2021)"
  - id: ursa-vldb
    resource: https://streamnative.io/blog/ursa-wins-vldb-2025-best-industry-paper-the-first-lakehouse-native-streaming-engine-for-kafka
    title: "StreamNative: Ursa wins VLDB 2025 Best Industry Paper"
    author: org:streamnative
  - id: sn-kafka-too
    resource: https://streamnative.io/blog/we-are-a-kafka-company-too
    title: "Sijie Guo: We Are a Kafka Company, Too (2026-04-01)"
    author: org:streamnative
  - id: sn-lakestream
    resource: https://www.businesswire.com/news/home/20260407143701/en/StreamNative-Introduces-Lakestream-Architecture-and-Launches-Native-Kafka-Service-Unifying-Streaming-and-the-Lakehouse
    title: "StreamNative introduces Lakestream and native Kafka service (2026-04-07)"
    author: org:streamnative
  - id: waehner-landscape
    resource: https://www.kai-waehner.de/blog/2026/09/07/data-streaming-landscape-q3-2026-who-controls-your-streams/
    title: "Kai Waehner: Data Streaming Landscape Q3 2026"
    author: person:kai-waehner
---

# Summary

StreamNative raised a $23.7M Series A in September 2021 at a $133M post-money valuation[^sa-sn-a] to sell managed Pulsar. Its most important technical work became Ursa: a Kafka-compatible, leaderless, stateless engine that writes directly to object storage in lakehouse formats. Ursa won VLDB 2025 Best Industry Paper and claims up to 95% lower cost[^ursa-vldb]. In April 2026 CEO Sijie Guo wrote "We Are a Kafka Company, Too", saying the Kafka protocol had won and that compatibility layers could not keep up with Kafka's "undocumented behaviors"[^sn-kafka-too]. The company launched Ursa for Kafka on Apache Kafka 4.2 as part of a "Lakestream" architecture (limited public preview)[^sn-lakestream]. Waehner's summary: the company that argued against Kafka for years now ships its own Kafka offering[^waehner-landscape].

# Timeline

| Date | Event |
|---|---|
| 2019 | Founded |
| 2020-03 | Kafka-on-Pulsar with OVHcloud |
| 2021-09 | $23.7M Series A[^sa-sn-a] |
| 2025 | Ursa VLDB Best Industry Paper[^ursa-vldb] |
| 2026-04 | Lakestream and Ursa for Kafka[^sn-lakestream] |

# What worked

- Strong research and engineering (Ursa).
- Pivoted early to where the market went: Kafka protocol, object storage, Iceberg.

# What didn't

- Pulsar-first positioning did not scale commercially, which forced the pivot.

# Related

- [Apache Pulsar](/systems/apache-pulsar.md), [Apache Kafka](/systems/apache-kafka.md)
- [Ursa paper](/papers/2025-ursa-lakehouse-native-streaming.md)
