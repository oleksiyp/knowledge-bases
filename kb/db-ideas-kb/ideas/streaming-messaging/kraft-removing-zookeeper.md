---
type: Idea
title: "Removing ZooKeeper: self-managed metadata consensus in Kafka (KRaft)"
description: "Replace Kafka's external ZooKeeper ensemble with a built-in Raft quorum that stores cluster metadata as a log. It won: proposed 2019, production-ready in Kafka 3.3 (2022), and the only option in Kafka 4.0 (2025). It took six years, with a forced migration at the end."
tags: [kafka, consensus, raft, zookeeper, operations, metadata]
area: streaming-messaging
verdict: won
hype_peak: 2022
adoption_2026: mainstream
origins: "Kafka depended on ZooKeeper from its 2011 open-sourcing. KIP-500 (Sept 2019, Jason Gustafson, Colin McCabe et al.) proposed a self-managed metadata quorum."
key_systems: [systems/apache-kafka, systems/confluent, systems/redpanda]
related_ideas: [ideas/streaming-messaging/kafka-as-central-log, ideas/streaming-messaging/tiered-storage-for-streams, ideas/streaming-messaging/apache-pulsar-two-tier-challenger]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kip500
    resource: https://cwiki.apache.org/confluence/display/KAFKA/KIP-500%3A+Replace+ZooKeeper+with+a+Self-Managed+Metadata+Quorum
    title: "KIP-500: Replace ZooKeeper with a Self-Managed Metadata Quorum"
    author: org:apache
  - id: morling-kraft
    resource: https://www.morling.dev/blog/exploring-zookeeper-less-kafka/
    title: "Gunnar Morling: Exploring ZooKeeper-less Kafka (2021)"
    author: person:gunnar-morling
  - id: infoq-33
    resource: https://www.infoq.com/news/2022/10/apache-kafka-kraft/
    title: "InfoQ: Apache Kafka 3.3 Replaces ZooKeeper with the New KRaft Consensus Protocol (Oct 2022)"
    author: org:infoq
  - id: kafka-40
    resource: https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/
    title: "Apache Kafka 4.0.0 Release Announcement (2025-03-18)"
    author: org:apache
  - id: kafka-39
    resource: https://kafka.apache.org/blog/2024/11/06/apache-kafka-3.9.0-release-announcement/
    title: "Apache Kafka 3.9.0 Release Announcement (2024-11-06)"
    author: org:apache
  - id: twominute-kraft
    resource: https://blog.2minutestreaming.com/p/kafka-raft-kraft-kip-500
    title: "2 Minute Streaming: KRaft — how Apache Kafka divorced ZooKeeper and married Raft"
    author: person:stanislav-kozlovski
---

# Summary

**Verdict: won.** KRaft is a clear engineering success. It turned Kafka into a single-process system, raised the practical partition ceiling, and made metadata changes fast. It took six years: the proposal was posted on September 30, 2019[^twominute-kraft], it was production-ready for new clusters in Kafka 3.3 (October 2022)[^infoq-33], and ZooKeeper was removed in Kafka 4.0 (March 18, 2025)[^kafka-40]. The cost was a forced migration. ZooKeeper-mode clusters must first move to KRaft on 3.x (3.9 is the last bridge release) before they can upgrade to 4.0.

# The idea

Kafka stored cluster metadata (topics, partitions, leaders, ISR sets, configs) in ZooKeeper, with one broker acting as controller. Every operator had to run and secure two distributed systems. Controller failover meant reloading all metadata from ZooKeeper, which grew slower with more partitions. KIP-500 proposed storing metadata in an internal Kafka topic (`__cluster_metadata`), replicated by a Raft variant among a small set of controller nodes. Brokers would follow that log like any consumer[^kip500]. The log stores its own metadata.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | KIP-500 posted (Sept 30)[^twominute-kraft] | + |
| 2021 | Kafka 2.8 ships early-access ZooKeeper-less mode. Not for production[^morling-kraft] | + |
| 2021 | Kafka 3.0: KRaft in preview | + |
| 2022 | Kafka 3.3: KRaft production-ready for new clusters (Oct 3)[^infoq-33] | + |
| 2023 | ZooKeeper-to-KRaft migration tooling (3.4 early access, later GA) | + |
| 2024 | Kafka 3.9 is the final 3.x release and last bridge for migration (Nov 6)[^kafka-39] | + |
| 2025 | Kafka 4.0 removes ZooKeeper completely and also drops old message formats and protocol versions (Mar 18)[^kafka-40] | + |

# What succeeded

- **Operational simplicity.** One binary, one config model and one security model. New users no longer meet ZooKeeper at all.
- **Scale and recovery.** Controllers keep metadata in memory as a replicated log, so failover no longer means a long reload. This removed the old "few hundred thousand partitions per cluster" ceiling that ZooKeeper caused.
- **It made other work possible.** Tiered storage, the KIP-848 consumer protocol (GA in 4.0[^kafka-40]), share groups and diskless topics all rest on the new controller and metadata log.
- **Competitive parity.** Redpanda had marketed "no ZooKeeper" as a reason to switch since 2019–2020. Pulsar still needed ZooKeeper or another metadata store plus BookKeeper. KRaft removed that argument against Kafka.

# What failed

- **Speed.** Six years from KIP to removal is slow. Rivals used the gap in their marketing, and operators spent years unsure which mode to run.
- **Migration pain.** Clusters still on ZooKeeper cannot jump to 4.0. They need a 3.x bridge migration first. Platforms with old clients also had to deal with the removal of message formats v0/v1 at the same time[^kafka-40].
- **Early KRaft gaps.** Until about 3.5–3.7, features such as JBOD and some migration paths were missing or early access. Cautious users waited.

# Why

The idea worked because it applied Kafka's own abstraction (a replicated log) to its own metadata, so there was no foreign system to bolt on. It was slow because Kafka's compatibility promise is strict. Thousands of production clusters needed an in-place, rolling, reversible migration, and the Apache process requires consensus and staged releases. Confluent paid most of the engineering cost because it also simplified Confluent Cloud, which runs tens of thousands of clusters (see [Kora](/papers/2023-kora-cloud-native-kafka.md)).

# Lessons

- Removing a dependency from a widely deployed system costs far more than adding a feature. Budget years for the migration path, not months for the code.
- "Use your own abstraction for your own metadata" is a good design rule for log-based systems.
- A long transition gives competitors a talking point, but compatibility-preserving evolution still beats a rewrite. Kafka kept its users.

# Related

- [Apache Kafka](/systems/apache-kafka.md), [Confluent](/systems/confluent.md), [Redpanda](/systems/redpanda.md)
- [Kafka 3.3: KRaft production-ready](/events/2022-10-kafka-3-3-kraft-production-ready.md), [Kafka 4.0 removes ZooKeeper](/events/2025-03-kafka-4-0-removes-zookeeper.md)
- [Tiered storage](/ideas/streaming-messaging/tiered-storage-for-streams.md), [Pulsar's challenge](/ideas/streaming-messaging/apache-pulsar-two-tier-challenger.md)
