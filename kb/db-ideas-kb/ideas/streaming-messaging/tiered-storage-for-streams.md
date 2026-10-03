---
type: Idea
title: "Tiered storage for streaming logs (KIP-405 and peers)"
description: "Keep the hot tail of each partition on broker disks and move closed segments to object storage, so Kafka can retain data for months or forever at S3 prices. It won and is standard in every major Kafka distribution by 2026. It was also only a halfway step: it did nothing about cross-AZ replication cost, which diskless designs went after next."
tags: [kafka, tiered-storage, object-storage, s3, retention, cost]
area: streaming-messaging
verdict: won
hype_peak: 2023
adoption_2026: common
origins: "Pulsar offloaded segments to object storage early (2018). KIP-405 authors from Uber. Confluent shipped proprietary tiered storage and 'Infinite Storage' in Confluent Cloud before the open-source version."
key_systems: [systems/apache-kafka, systems/confluent, systems/redpanda, systems/apache-pulsar]
related_ideas: [ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/kafka-as-central-log, ideas/cloud-architecture/object-storage-native-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kip405
    resource: https://cwiki.apache.org/confluence/display/KAFKA/KIP-405:+Kafka+Tiered+Storage
    title: "KIP-405: Kafka Tiered Storage"
    author: org:apache
  - id: kafka-39
    resource: https://kafka.apache.org/blog/2024/11/06/apache-kafka-3.9.0-release-announcement/
    title: "Apache Kafka 3.9.0 Release Announcement (2024-11-06)"
    author: org:apache
  - id: msk-36
    resource: https://aws.amazon.com/about-aws/whats-new/2023/11/amazon-msk-support-apache-kafka-version-3-6-0-tiered-storage
    title: "AWS: Amazon MSK adds support for Apache Kafka 3.6.0 with Tiered Storage (Nov 2023)"
    author: org:aws
  - id: aiven-16
    resource: https://aiven.io/blog/16-ways-tiered-storage-makes-kafka-better
    title: "Aiven: 16 ways tiered storage makes Kafka better"
    author: org:aiven
  - id: automq-cons
    resource: https://medium.com/@AutoMQ/4-cons-of-kafka-tiered-storage-you-must-know-c77b762f70eb
    title: "AutoMQ: 4 cons of Kafka tiered storage you must know (vendor critique)"
    author: org:automq
  - id: warpstream-dead
    resource: https://www.warpstream.com/blog/kafka-is-dead-long-live-kafka
    title: "WarpStream: Kafka is dead, long live Kafka (Aug 2023)"
    author: org:warpstream
---

# Summary

**Verdict: won, but it was a stepping stone.** Tiered storage did what it promised. Retention became cheap, broker disks got small, and rebalancing and recovery got faster because brokers no longer had to copy months of data. Apache Kafka shipped it as early access in 3.6 (Oct 2023) and marked it production-ready in 3.9 (Nov 2024)[^kafka-39]. AWS MSK supported it from 3.6[^msk-36]. Confluent, Redpanda, Aiven and Pulsar all have their own versions. It did not fix the biggest cloud cost: the hot path still replicates every byte three times across availability zones. That gap gave rise to [diskless Kafka](/ideas/streaming-messaging/diskless-kafka-on-object-storage.md), which by 2026 is pushing tiered storage into the "legacy optimization" bucket for latency-tolerant workloads.

# The idea

A Kafka partition is a sequence of segment files. Only the active segment is written to. Closed segments are immutable, so they can be uploaded to S3/GCS/Azure Blob and deleted locally. Consumers reading old offsets fetch them through the broker from the remote tier. KIP-405's motivation names scalability, recovery time and cloud economics, with Kafka as "long-term storage"[^kip405]. The pitch: use Kafka as the system of record for history, not just a 7-day buffer.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Pulsar ships tiered storage offload to S3/GCS | + |
| 2018–2021 | KIP-405 (authors from Uber) designed and discussed; Confluent ships proprietary tiered storage and Cloud "Infinite Storage" | + |
| 2021 | Redpanda ships Shadow Indexing (its tiered storage) | + |
| 2023 | Kafka 3.6: KIP-405 early access (Oct). MSK supports it (Nov)[^msk-36] | + |
| 2023 | WarpStream argues tiered storage leaves the cross-AZ cost untouched and goes fully to S3[^warpstream-dead] | − |
| 2024 | Kafka 3.9: tiered storage production-ready, with per-topic disablement (KIP-950) and quotas (KIP-956)[^kafka-39] | + |
| 2026 | KIP-1150 diskless topics accepted. Tiered storage stays, alongside diskless | mixed |

# What succeeded

- **Cheap retention.** Storage cost per GB falls by roughly an order of magnitude when it moves from replicated SSD/EBS to object storage. This made "keep it in Kafka for a year" a reasonable choice[^aiven-16].
- **Faster operations.** Reassigning a partition only copies the local hot tail. Broker replacement takes minutes, not hours.
- **Universal adoption.** By 2026 every serious Kafka offering has it, and it became the base for "Kafka topic as Iceberg table" products.

# What failed

- **Slow upstream delivery.** Proprietary versions (Confluent, Redpanda) shipped years before Apache Kafka's open version was production-ready (2024). Open-source users waited about five years from the start of the design.
- **Feature limits.** Upstream tiered storage does not support compacted topics. Once a topic is tiered, its cleanup policy cannot switch from delete to compact[^kip405]. Early versions also did not work with JBOD.
- **It solved the smaller cost.** In a typical multi-AZ AWS deployment, the inter-AZ transfer for producer→leader and leader→follower traffic often costs more than storage. Tiered storage leaves all of that in place[^warpstream-dead][^automq-cons].
- **Cold-read performance.** Catch-up reads from S3 have higher and more variable latency. They can also put load on brokers when many consumers backfill at once.

# Why

Tiered storage was the conservative, compatible way to use object storage. It changed nothing about the write path, the replication protocol or client semantics. That made it acceptable to the Apache community and to risk-averse operators. Its limit is the same thing: the expensive, stateful, replicated hot path was left alone. Once S3 latency and request pricing improved, and especially after S3 conditional writes and S3 Express One Zone in 2023–24, designers could put the write path itself on object storage. The industry moved from "tier the cold data" to "make the broker stateless."

# Lessons

- The compatible, incremental version of an idea usually reaches mainstream adoption first, and then a more radical version overtakes it within a few years.
- Find the real cost driver before optimizing. For cloud Kafka it was network transfer, not bytes on disk.
- Proprietary-first, upstream-later is a common pattern for open-core companies. It gives the vendor a lead of several years but slows the open-source project.

# Related

- [Apache Kafka](/systems/apache-kafka.md), [Confluent](/systems/confluent.md), [Redpanda](/systems/redpanda.md), [Apache Pulsar](/systems/apache-pulsar.md)
- [Diskless Kafka on object storage](/ideas/streaming-messaging/diskless-kafka-on-object-storage.md)
- [Object-storage-native databases](/ideas/cloud-architecture/object-storage-native-databases.md)
