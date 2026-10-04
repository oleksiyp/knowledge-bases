---
type: System
title: AutoMQ
description: "Apache-2.0 fork of Apache Kafka that replaces the local log storage with a shared storage layer on S3 (with a small WAL), keeping full Kafka compatibility while removing cross-AZ replication. One of the main open-source diskless Kafka options."
resource: https://www.automq.com
tags: [kafka-compatible, diskless, s3, fork, open-source]
kind: oss
first_release: 2023
org: "AutoMQ, Inc."
license: Apache-2.0
outcome: growing
ideas: [ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/kafka-protocol-as-standard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
metrics:
  github_stars: { value: 10901, as_of: 2026-10-03 }
sources:
  - id: automq-gh
    resource: https://github.com/automq/automq
    title: "AutoMQ GitHub repository"
    author: org:automq
  - id: automq-license
    resource: https://docs.automq.com/automq/what-is-automq/licensing-and-enterprise-features
    title: "AutoMQ docs: Licensing and enterprise features"
    author: org:automq
  - id: aiven-1150
    resource: https://aiven.io/blog/kip-1150-accepted-and-the-road-ahead
    title: "Aiven: KIP-1150 Accepted, and the Road Ahead"
    author: org:aiven
---

# Summary

AutoMQ takes a different route from WarpStream. Instead of reimplementing the protocol, it forks Apache Kafka and swaps the storage layer for a shared-storage design on S3 or S3-compatible stores. That keeps the full broker behaviour (transactions, compaction, Connect) while making brokers mostly stateless[^automq-gh]. Its public repository dates from August 2023, and the open-source engine is Apache 2.0, with some enterprise features held back[^automq-license]. The project lists production users including JD.com, Grab, Tencent and Geely (vendor claim)[^automq-gh]. With about 10.9k GitHub stars in October 2026, it is one of the most visible open-source diskless options. The acceptance of KIP-1150 upstream in March 2026[^aiven-1150] is both validation and a threat, because diskless storage in Apache Kafka itself would shrink the reason for a fork.

# Timeline

| Date | Event |
|---|---|
| 2023-08 | Public repository created[^automq-gh] |
| 2024–25 | Positions as "10x cost-effective" diskless Kafka; publishes comparisons against WarpStream, Inkless and others |
| 2026-03 | KIP-1150 accepted upstream[^aiven-1150] |

# What worked

- Fork-based compatibility: higher fidelity than protocol reimplementations.
- Apache-2.0 licence attracts users avoiding BSL (Redpanda) or proprietary (WarpStream) options.

# What didn't

- A fork must keep rebasing on upstream. If upstream diskless topics ship, the differentiation narrows.
- Many published comparisons are vendor marketing. Independent verification is limited.

# Related

- [WarpStream](/systems/warpstream.md), [Bufstream](/systems/bufstream.md), [Apache Kafka](/systems/apache-kafka.md)
- [Diskless Kafka](/ideas/streaming-messaging/diskless-kafka-on-object-storage.md)
