---
type: System
title: WarpStream
description: "Kafka-protocol-compatible streaming written in Go with stateless agents that write directly to S3 and a vendor-hosted metadata control plane (BYOC). Launched July 2023, acquired by Confluent in September 2024, and the system that started the diskless-Kafka wave."
resource: https://www.warpstream.com
tags: [kafka-compatible, diskless, s3, byoc, go]
kind: cloud-service
first_release: 2023
org: "WarpStream Labs (acquired by Confluent 2024; Confluent acquired by IBM 2026)"
license: Proprietary
outcome: acquired
ideas: [ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/kafka-protocol-as-standard, ideas/cloud-architecture/byoc-deployment]
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
    title: "TechCrunch: Confluent acquires WarpStream (2024-09-09)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024"
    author: person:andy-pavlo
---

# Summary

WarpStream was founded by former Datadog engineers Richard Artoul and Ryan Worl. It launched on July 25, 2023 with the post "Kafka is dead, long live Kafka", which argued that inter-zone networking was "over 80% of the infrastructure cost" of cloud Kafka and that a disk-free, S3-backed design was 5–10x cheaper[^ws-dead]. It openly traded latency for cost: about 400 ms produce p99 and about 1 s end-to-end[^ws-dead]. Confluent bought it 14 months later. The team had 13 people and had raised $20M; the price was undisclosed[^tc-ws]. Figures around $220M circulated on social media but are unconfirmed. Pavlo: "I'm happy for the Warpstream team, but Confluent could have done this themselves"[^pavlo-2024].

# Timeline

| Date | Event |
|---|---|
| 2023-07 | Launch blog post[^ws-dead] |
| 2024 | $20M raised[^tc-ws] |
| 2024-09-09 | Acquired by Confluent; positioned as Confluent's BYOC offering[^tc-ws] |

# What worked

- Clear, quantified cost argument based on cloud pricing, not benchmarks.
- Stateless agents in the customer VPC plus a vendor control plane became a widely copied BYOC template.
- Forced the whole industry, including Apache Kafka (KIP-1150), toward diskless designs.

# What didn't

- Higher latency rules out low-latency workloads.
- Did not stay independent. Its value went to Confluent and then IBM.

# Related

- [Confluent](/systems/confluent.md), [AutoMQ](/systems/automq.md), [Bufstream](/systems/bufstream.md)
- [WarpStream launch](/events/2023-07-warpstream-launch.md), [Confluent acquires WarpStream](/events/2024-09-confluent-acquires-warpstream.md)
- [Diskless Kafka](/ideas/streaming-messaging/diskless-kafka-on-object-storage.md)
