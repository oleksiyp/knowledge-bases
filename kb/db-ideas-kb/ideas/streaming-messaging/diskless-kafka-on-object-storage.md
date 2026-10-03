---
type: Idea
title: "Diskless Kafka: streaming logs written directly to object storage"
description: "Stateless Kafka-compatible brokers that write produce batches straight to S3 and keep only metadata in a small consensus store. This removes broker disks and cross-AZ replication traffic. It is winning: it went from a 2023 startup pitch (WarpStream) to an accepted Apache Kafka direction (KIP-1150, March 2026) in under three years. The cost is higher latency, so it is a topic type, not a replacement."
tags: [kafka, object-storage, s3, diskless, cloud-native, cost, byoc]
area: streaming-messaging
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "Pulsar/BookKeeper separated storage and compute in the 2010s. WarpStream (July 2023) was the first Kafka-compatible system with no local disks."
key_systems: [systems/warpstream, systems/automq, systems/bufstream, systems/confluent, systems/redpanda, systems/streamnative, systems/apache-kafka]
related_ideas: [ideas/streaming-messaging/tiered-storage-for-streams, ideas/streaming-messaging/kafka-protocol-as-standard, ideas/streaming-messaging/streams-as-lakehouse-tables, ideas/cloud-architecture/object-storage-native-databases, ideas/cloud-architecture/byoc-deployment]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ws-dead
    resource: https://www.warpstream.com/blog/kafka-is-dead-long-live-kafka
    title: "WarpStream: Kafka is dead, long live Kafka (2023-07-25)"
    author: org:warpstream
  - id: tc-ws
    resource: https://techcrunch.com/2024/09/09/confluent-acquires-streaming-data-startup-warpstream/
    title: "TechCrunch: Confluent acquires streaming data startup WarpStream (2024-09-09)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: freight
    resource: https://www.confluent.io/blog/freight-clusters-are-generally-available/
    title: "Confluent: Freight Clusters are generally available"
    author: org:confluent
  - id: buf-launch
    resource: https://webflow.buf.build/blog/bufstream-kafka-lower-cost
    title: "Buf: Bufstream — Kafka at 8x lower cost (July 2024)"
    author: org:buf
  - id: jepsen-buf
    resource: https://jepsen.io/analyses/bufstream-0.1.0
    title: "Jepsen: Bufstream 0.1.0 (2024-11-12)"
    author: person:kyle-kingsbury
  - id: automq-gh
    resource: https://github.com/automq/automq
    title: "AutoMQ GitHub repository"
    author: org:automq
  - id: aiven-1150
    resource: https://aiven.io/blog/kip-1150-accepted-and-the-road-ahead
    title: "Aiven: KIP-1150 Accepted, and the Road Ahead (2026)"
    author: org:aiven
  - id: rp-cloud-topics
    resource: https://www.redpanda.com/blog/cloud-topics-architecture
    title: "Redpanda: Under the hood — Cloud Topics architecture"
    author: org:redpanda
  - id: ursa-vldb
    resource: https://streamnative.io/blog/ursa-wins-vldb-2025-best-industry-paper-the-first-lakehouse-native-streaming-engine-for-kafka
    title: "StreamNative: Ursa wins VLDB 2025 Best Industry Paper"
    author: org:streamnative
  - id: cw-buf
    resource: https://buf.build/blog/coreweave-acquires-bufstream
    title: "Buf: CoreWeave acquires Bufstream (2026)"
    author: org:buf
  - id: s2-intro
    resource: https://s2.dev/blog/intro
    title: "S2: Introducing S2 — streams as a cloud storage primitive"
    author: org:s2
  - id: waehner-q3-2026
    resource: https://www.kai-waehner.de/blog/2026/09/21/data-streaming-trends-q3-2026-what-changes-through-2027/
    title: "Kai Waehner: Data Streaming Trends Q3 2026"
    author: person:kai-waehner
---

# Summary

**Verdict: winning.** "Diskless" Kafka is the most important streaming architecture change of the period. WarpStream's July 2023 launch post claimed inter-zone networking was "over 80% of the infrastructure cost" of cloud Kafka at scale, and that a stateless S3-backed design was 5–10x cheaper[^ws-dead]. Within 14 months Confluent had shipped its own direct-to-S3 cluster type (Freight) and bought WarpStream[^tc-ws]. AutoMQ, Bufstream, Redpanda (Cloud Topics), StreamNative (Ursa) and Aiven (Inkless) followed. On March 2, 2026 Apache Kafka accepted KIP-1150 Diskless Topics[^aiven-1150]. The trade-off is latency. WarpStream disclosed a produce p99 of about 400 ms and about 1 s end-to-end[^ws-dead]. So the design wins for logs, telemetry, CDC and analytics feeds, not for sub-10 ms transactional messaging. The 2026 consensus is mixed-mode clusters: classic and diskless topics side by side.

# The idea

Classic Kafka acknowledges a write after the partition leader and its followers in other availability zones have it on local disk. In AWS every cross-AZ byte is billed in both directions, and disks must be provisioned for peak. Diskless designs:

1. Let any stateless agent or broker accept a produce request (no partition leader).
2. Batch records from many partitions into one object, write it to S3 (which is already replicated across zones), then commit the batch's offsets to a small metadata/sequencing service.
3. Serve reads from object storage, usually through a zone-local cache.

Brokers become cattle. They autoscale, need no rebalancing, and can run in the customer's account ([BYOC](/ideas/cloud-architecture/byoc-deployment.md)) while the vendor runs only the control plane.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2023 | WarpStream launches: "Kafka is dead, long live Kafka" (Jul 25)[^ws-dead]. AutoMQ open-sources its S3-based Kafka fork (Aug)[^automq-gh] | + |
| 2024 | Confluent announces Freight clusters (Kafka Summit London), up to 90% cheaper for relaxed-latency workloads[^freight] | + |
| 2024 | Bufstream public beta (Jul 9), "8x lower cost"[^buf-launch]. Confluent acquires WarpStream, a 13-person team; price undisclosed (Sept 9)[^tc-ws] | + |
| 2024 | Jepsen on Bufstream: lost acknowledged writes in healthy clusters, fixed by 0.1.3; Kafka transaction-protocol issues remain[^jepsen-buf] | mixed |
| 2025 | KIP-1150 proposed by Aiven (Apr). Competing KIP-1176 and KIP-1183 (Slack); Slack later backs 1150[^aiven-1150] | + |
| 2025 | StreamNative's Ursa wins VLDB Best Industry Paper[^ursa-vldb] | + |
| 2026 | KIP-1150 accepted with 9 binding and 5 non-binding votes (Mar 2)[^aiven-1150]. Redpanda Cloud Topics GA in 26.1[^rp-cloud-topics]. CoreWeave buys Bufstream for internal use (May)[^cw-buf] | + |

# What succeeded

- **Cost.** Removing replication traffic and broker disks gives large, repeatable savings. Vendors claim 5–10x (WarpStream), 8x (Bufstream) and up to 90% (Freight)[^ws-dead][^buf-launch][^freight]. These are vendor numbers, but the direction is not disputed.
- **Elasticity and operations.** Stateless agents scale in seconds. No partition rebalancing, no disk-full incidents.
- **Industry convergence.** Every major Kafka vendor has a diskless or direct-to-object-storage mode by 2026, and upstream Apache Kafka has accepted the direction[^waehner-q3-2026].
- **Lakehouse integration.** Data already sits in object storage, so writing it as Parquet/Iceberg is a short step (Bufstream, Ursa). See [streams as lakehouse tables](/ideas/streaming-messaging/streams-as-lakehouse-tables.md).

# What failed

- **Latency.** Hundreds of milliseconds to about a second end-to-end rules out request/response, low-latency trading and many microservice uses[^ws-dead]. Redpanda and Aiven explicitly position diskless as one mode among several[^rp-cloud-topics].
- **Correctness is hard.** Jepsen found acknowledged-write loss in Bufstream 0.1.0 before fixes[^jepsen-buf]. Building a sequencer plus object store plus Kafka transaction semantics is subtle.
- **Independent vendors did not stay independent.** WarpStream went to Confluent (which then went to IBM), and Bufstream went to CoreWeave as an internal tool[^cw-buf]. Pavlo's comment on the WarpStream deal: "Confluent could have done this themselves"[^pavlo-2024].
- **Upstream timing.** KIP-1150 is a direction, not shipped code. Sub-KIPs (1163 core, 1164 coordinator) still have to land[^aiven-1150].

# Why

The idea won because cloud pricing made Kafka's on-prem design expensive. Replication across zones was free in a data centre but costs about $0.02/GB in AWS, and S3 already provides multi-AZ durability. S3 also got better: strong read-after-write consistency (2020), then conditional writes and S3 Express One Zone (2023–24). Those lowered the latency and coordination cost of using S3 as the primary store. It did not replace Kafka because many workloads need single-digit-millisecond latency, and because the Kafka protocol's semantics (per-partition order, transactions, compaction) are hard to emulate on top of batched objects. The startups were bought quickly because a 13-person team could build the product in a year, while incumbents had distribution and customers.

Related "streams as a primitive" services such as [S2](https://s2.dev) (2024) take the same object-storage approach but expose a simple REST/SSE stream API instead of the Kafka protocol[^s2-intro]. As of 2026 they are niche.

# Lessons

- When a cloud cost line item (cross-AZ transfer) dominates, a redesign around the provider's pricing can beat years of optimization of the old architecture.
- Small teams can prove a new architecture. Incumbents with the customer base usually capture the value by acquisition.
- Expect hybrid outcomes. The radical design becomes a per-topic option, not a wholesale replacement.

# Related

- Systems: [WarpStream](/systems/warpstream.md), [AutoMQ](/systems/automq.md), [Bufstream](/systems/bufstream.md), [Confluent](/systems/confluent.md), [Redpanda](/systems/redpanda.md), [StreamNative](/systems/streamnative.md)
- Events: [WarpStream launch](/events/2023-07-warpstream-launch.md), [Confluent acquires WarpStream](/events/2024-09-confluent-acquires-warpstream.md), [KIP-1150 accepted](/events/2026-03-kip-1150-diskless-topics-accepted.md), [CoreWeave acquires Bufstream](/events/2026-05-coreweave-acquires-bufstream.md)
- Paper: [Ursa (VLDB 2025)](/papers/2025-ursa-lakehouse-native-streaming.md)
- Ideas: [Tiered storage](/ideas/streaming-messaging/tiered-storage-for-streams.md), [Object-storage-native databases](/ideas/cloud-architecture/object-storage-native-databases.md)
- [BYOC deployment model](/ideas/cloud-architecture/byoc-deployment.md), [Database acquisitions as AI acquihires](/ideas/business-licensing/database-acquisitions-as-ai-acquihires.md)
