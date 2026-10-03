---
type: Event
title: Apache Kafka accepts KIP-1150 diskless topics
description: On 2026-03-02 the Kafka community accepted Aiven's KIP-1150, endorsing object storage as Kafka's future data layer — upstreaming the idea behind WarpStream and AutoMQ.
event_kind: governance
date: 2026-03-02
window: W9
impact: positive
projects: [projects/data-engineering/apache-kafka, projects/data-engineering/automq, projects/data-engineering/redpanda]
organizations: [organizations/confluent]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: aiven-kip1150
    resource: https://aiven.io/blog/kip-1150-accepted-and-the-road-ahead
    title: "Aiven: KIP-1150 Accepted, and the Road Ahead"
  - id: automq-kip
    resource: https://www.automq.com/blog/kip-1150-explained-diskless-topics-kafka-future
    title: "AutoMQ: KIP-1150 Diskless Topics Explained"
  - id: tc-warpstream
    resource: https://techcrunch.com/2024/09/09/confluent-acquires-streaming-data-startup-warpstream/
    title: "TechCrunch: Confluent acquires WarpStream"
---

# What happened
KIP-1150 ("Diskless Topics"), led by Aiven, was approved on 2026-03-02 with 9 binding and 5 non-binding votes. It lets partitions write directly to object storage, removing cross-AZ replication traffic. Implementation KIPs 1163 (Diskless Core) and 1164 (Diskless Coordinator) still needed approval; Aiven's experimental "Inkless" fork is the testbed and will be deprecated once merged[^aiven-kip1150][^automq-kip].

# Why it matters
Object-storage Kafka was the main innovation of challengers (WarpStream — bought by Confluent in 2024 — and AutoMQ)[^tc-warpstream]. Upstreaming it commoditizes that differentiation and lowers Kafka TCO for everyone.

# Outcome so far
As of Oct 2026, diskless topics are not yet a GA Apache Kafka feature[^automq-kip].

# Related
- [Apache Kafka](/projects/data-engineering/apache-kafka.md), [AutoMQ](/projects/data-engineering/automq.md), [Redpanda](/projects/data-engineering/redpanda.md), [Confluent](/organizations/confluent.md)

[^aiven-kip1150]: Aiven blog.
[^automq-kip]: AutoMQ blog.
[^tc-warpstream]: TechCrunch.
