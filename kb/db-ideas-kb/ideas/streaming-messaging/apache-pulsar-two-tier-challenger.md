---
type: Idea
title: "Apache Pulsar: a two-tier, multi-tenant challenger to Kafka"
description: "Pulsar separated stateless brokers from BookKeeper storage and combined queues and streams with native multi-tenancy and geo-replication, and was pitched as Kafka's successor. It failed to unseat Kafka. It stayed a respected niche, and in 2026 its main commercial backer launched a native Kafka service and said 'the Kafka protocol had won.'"
tags: [pulsar, bookkeeper, messaging, streaming, multi-tenancy, kafka-alternative]
area: streaming-messaging
verdict: niche
hype_peak: 2021
adoption_2026: niche
origins: "Built at Yahoo (from 2012), open-sourced 2016, Apache top-level project 2018. Storage on Apache BookKeeper."
key_systems: [systems/apache-pulsar, systems/streamnative, systems/apache-kafka]
related_ideas: [ideas/streaming-messaging/kafka-protocol-as-standard, ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/queues-and-logs-converge, ideas/streaming-messaging/kraft-removing-zookeeper]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: sn-adoption
    resource: https://streamnative.io/blog/apache-pulsar-adoption-why-companies-use-streaming-messaging-platform
    title: "StreamNative: Apache Pulsar adoption — why companies use it"
    author: org:streamnative
  - id: sa-sn-a
    resource: https://siliconangle.com/2021/09/14/messaging-streaming-platform-startup-streamnative-raises-23m/
    title: "SiliconANGLE: StreamNative raises $23M (Sept 2021)"
  - id: kop
    resource: https://streamnative.io/blog/kafka-on-pulsar-bring-native-kafka-protocol-support-to-apache-pulsar
    title: "StreamNative: Announcing Kafka-on-Pulsar (KoP), March 2020"
    author: org:streamnative
  - id: conduktor-vs
    resource: https://www.conduktor.io/glossary/kafka-vs-pulsar
    title: "Conduktor: Kafka vs Pulsar — architecture compared"
  - id: waehner-2020
    resource: https://www.kai-waehner.de/blog/2020/06/09/apache-kafka-versus-apache-pulsar-event-streaming-comparison-features-myths-explored/
    title: "Kai Waehner (Confluent): Pulsar vs Kafka — comparison and myths explored (2020)"
    author: person:kai-waehner
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
    title: "StreamNative introduces Lakestream and launches native Kafka service (2026-04-07)"
    author: org:streamnative
  - id: waehner-landscape
    resource: https://www.kai-waehner.de/blog/2026/09/07/data-streaming-landscape-q3-2026-who-controls-your-streams/
    title: "Kai Waehner: Data Streaming Landscape Q3 2026"
    author: person:kai-waehner
---

# Summary

**Verdict: niche (failed as a Kafka replacement).** Around 2019–2021 Pulsar looked like the technically superior next-generation system. It had compute/storage separation years before Kafka's tiered storage, built-in multi-tenancy, geo-replication, and both queue and stream semantics in one system. It became an Apache top-level project in 2018[^sn-adoption], and StreamNative raised a $23.7M Series A in 2021[^sa-sn-a]. It never got close to Kafka's ecosystem. GitHub stars in October 2026 were 15.3k for Pulsar vs 33.9k for Kafka (as_of 2026-10-03). The clearest signal came in April 2026. StreamNative's CEO wrote that "the Kafka protocol had won" and the company launched a native Kafka service built on Apache Kafka 4.2[^sn-kafka-too][^sn-lakestream]. In Waehner's words, StreamNative is "the company that spent years arguing against Kafka" and "now ships its own Kafka offering"[^waehner-landscape].

# The idea

Pulsar brokers are stateless. Data lives in Apache BookKeeper "ledgers" striped across storage nodes ("bookies"), with metadata in ZooKeeper. This allows instant scaling and no partition data movement on rebalance. It also supports tiered offload to object storage, per-tenant namespaces and quotas, and subscription modes (exclusive, shared, failover, key-shared) that cover both work-queue and streaming patterns. The pitch was "Kafka plus RabbitMQ, cloud-native, without rebalancing pain."

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Pulsar graduates to Apache top-level project[^sn-adoption] | + |
| 2019 | StreamNative founded by Pulsar creators | + |
| 2020 | Kafka-on-Pulsar (KoP) protocol handler, with OVHcloud (Mar)[^kop]. Confluent publishes "Pulsar vs Kafka myths" rebuttals[^waehner-2020] | mixed |
| 2021 | StreamNative $23.7M Series A at a $133M post-money valuation (Sept)[^sa-sn-a] | + |
| 2022–23 | Kafka gets KRaft and tiered storage, which removes two of Pulsar's main advantages | − |
| 2024 | StreamNative announces Ursa, a Kafka-compatible engine without BookKeeper, writing to object storage | mixed |
| 2025 | Ursa wins VLDB Best Industry Paper[^ursa-vldb] | + |
| 2026 | "We Are a Kafka Company, Too" (Apr 1). Ursa for Kafka launched on Apache Kafka 4.2 (Apr 7)[^sn-kafka-too][^sn-lakestream] | − for Pulsar |

# What succeeded

- **Architecture ideas spread.** Stateless brokers, segment-based storage, tiered offload and multi-tenancy all show up later in Kafka (tiered storage, diskless) and in WarpStream/AutoMQ.
- **Real production users.** Pulsar runs mission-critical messaging at companies including Tencent, Verizon Media, Splunk and China Mobile (per StreamNative)[^sn-adoption]. Guo says Pulsar "isn't going anywhere"[^sn-kafka-too].
- **StreamNative's research quality.** Ursa's VLDB award shows the team's engineering strength[^ursa-vldb].

# What failed

- **Operational complexity.** Running brokers, bookies, ZooKeeper and RocksDB inside BookKeeper meant four systems to configure and tune, compared with Kafka's one (after KRaft)[^conduktor-vs].
- **Ecosystem.** Connectors, client maturity, managed offerings and hiring pools all favoured Kafka. No hyperscaler offered managed Pulsar as a first-party service.
- **Compatibility layers were not enough.** KoP tried to borrow Kafka's ecosystem. Guo later wrote that "the Kafka wire protocol is not just a specification — it's a living system with undocumented behaviors," which their compatibility layers struggled to keep up with[^sn-kafka-too].
- **The lead disappeared.** Kafka copied the best ideas compatibly: KRaft (no ZooKeeper), tiered storage, share groups (queues). Diskless startups then beat BookKeeper on cost by using S3 directly.

# Why

Pulsar competed on architecture against an incumbent whose advantage was ecosystem. Its better design also had a cost: more moving parts at a time when operators wanted fewer. BookKeeper's design (fast journal disks plus replicated ledgers) was built for on-prem and still paid cross-AZ replication in the cloud, so it did not win the cost argument that later decided the market. Kafka evolved in place without breaking clients, so the reasons to switch got smaller every year.

# Lessons

- A better architecture rarely displaces an incumbent with a large ecosystem. The incumbent can usually copy the architecture faster than the challenger can copy the ecosystem.
- Extra operational components count against you, even when each one is well designed.
- Compatibility layers bolted onto a different engine are always a step behind. StreamNative's eventual answer was to run real Kafka.

# Related

- [Apache Pulsar](/systems/apache-pulsar.md), [StreamNative](/systems/streamnative.md), [Apache Kafka](/systems/apache-kafka.md)
- [Kafka protocol as standard](/ideas/streaming-messaging/kafka-protocol-as-standard.md), [Diskless Kafka](/ideas/streaming-messaging/diskless-kafka-on-object-storage.md)
- [Ursa paper (VLDB 2025)](/papers/2025-ursa-lakehouse-native-streaming.md)
