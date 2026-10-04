---
type: Paper
title: 'Kora: A Cloud-Native Event Streaming Platform for Kafka'
description: Confluent describes the architecture behind its managed Kafka service. The paper shows why elasticity,
  isolation and cloud operations require more than hosting an unchanged broker.
year: 2023
venue: 'PVLDB 16(12): 3822–3834'
authors:
- Anna Povzner
- Prince Mahajan
- Jason Gustafson
- Jun Rao
- Ismael Juma
- Feng Min
- Shriram Sridharan
- Nikhil Bhatia
- Gopi Attaluri
- Adithya Chandra
- Stanislav Kozlovski
- Rajini Sivaram
- Lucas Bradstreet
- Bob Barrett
- Dhruvil Shah
- David Jacot
- David Arthur
- Manveer Chawla
- Ron Dagostino
- Colin McCabe
- Manikumar Reddy Obili
- Kowshik Prakasam
- Jose Garcia Sancio
- Vikas Singh
- Alok Nikhil
- Kamal Gupta
resource: https://vldb.org/pvldb/vol16/p3822-povzner.pdf
impact: high
ideas:
- ideas/streaming-messaging/kafka-as-central-log
- ideas/streaming-messaging/kraft-removing-zookeeper
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: kora-vldb
  resource: https://vldb.org/pvldb/vol16/p3822-povzner.pdf
  title: 'Povzner et al.: Kora: A Cloud-Native Event Streaming Platform for Kafka (VLDB 2023)'
- id: ws-dead
  resource: https://www.warpstream.com/blog/kafka-is-dead-long-live-kafka
  title: 'WarpStream: Kafka is dead, long live Kafka (2023-07-25)'
  author: org:warpstream
---

# Claim

Kora describes Confluent Cloud as a Kafka-compatible platform built for reliability, elasticity, predictable performance and efficient multi-tenancy. The authors explain architectural separation and operational abstractions that let customers specify workloads instead of individual broker infrastructure. The evidence comes from an operating commercial service, with its associated production experience.[^kora-vldb]

# What happened next

The subsequent diskless-streaming wave pursued a related goal through different storage choices. WarpStream’s launch-era explanation makes cloud network costs and additional buffering latency explicit tradeoffs.[^ws-dead] This comparison should not collapse Kora and diskless Kafka into the same architecture.

The high impact verdict reflects a documented production implementation of managed streaming at scale. The paper is useful because it describes what a service must add around a familiar protocol: isolation, elastic capacity and operational control. It does not establish that every improvement is present in upstream Apache Kafka or that the managed product is cheapest for every workload. The transferable lesson is to evaluate service engineering separately from the open-source engine it builds upon.

# Related

- [Confluent](/systems/confluent.md)
- [Apache Kafka](/systems/apache-kafka.md)
- [Warpstream](/systems/warpstream.md)
