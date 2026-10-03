---
type: System
title: Redpanda
description: "Kafka-API-compatible streaming engine rewritten in C++ (thread-per-core, Raft, no ZooKeeper, no JVM). Raised $100M at a $1B valuation in 2025 and added Iceberg Topics and diskless Cloud Topics. One of the few independent Kafka-compatible vendors left in 2026."
resource: https://www.redpanda.com
tags: [kafka-compatible, streaming, cpp, raft, iceberg, byoc]
kind: product
first_release: 2020
org: "Redpanda Data (founded 2019 as Vectorized)"
license: "BSL 1.1 (core) plus proprietary enterprise features"
outcome: growing
ideas: [ideas/streaming-messaging/kafka-protocol-as-standard, ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/streams-as-lakehouse-tables, ideas/streaming-messaging/tiered-storage-for-streams]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
metrics:
  github_stars: { value: 12591, as_of: 2026-10-03 }
sources:
  - id: jepsen-rp
    resource: https://jepsen.io/analyses/redpanda-21.10.1
    title: "Jepsen: Redpanda 21.10.1 (2022-04-29)"
    author: person:kyle-kingsbury
  - id: vanlightly-rp
    resource: https://jack-vanlightly.com/blog/2023/5/15/kafka-vs-redpanda-performance-do-the-claims-add-up
    title: "Jack Vanlightly: Kafka vs Redpanda performance — do the claims add up? (2023)"
    author: person:jack-vanlightly
  - id: rp-seriesd
    resource: https://www.finsmes.com/2025/04/redpanda-raises-100m-in-series-d-valued-at-1-billion.html
    title: "FinSMEs: Redpanda raises $100M Series D, valued at $1B (Apr 2025)"
  - id: rp-iceberg
    resource: https://www.businesswire.com/news/home/20250407927479/en/Redpanda-Announces-the-General-Availability-of-Apache-Iceberg-Topics-for-the-Enterprise
    title: "Redpanda: Iceberg Topics GA (2025-04-07)"
    author: org:redpanda
  - id: rp-oxla
    resource: https://www.techtarget.com/searchdatamanagement/news/366633563/Streaming-vendor-Redpanda-buys-SQL-engine-unveils-AI-suite
    title: "TechTarget: Streaming vendor Redpanda buys SQL engine (Oxla), unveils AI suite (Oct 2025)"
  - id: rp-cloud-topics
    resource: https://www.redpanda.com/blog/cloud-topics-architecture
    title: "Redpanda: Cloud Topics architecture"
    author: org:redpanda
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025"
    author: person:andy-pavlo
---

# Summary

Redpanda (founded 2019 as Vectorized) bet that a faster, simpler single-binary engine could take share from Kafka without asking users to change clients. It got real traction and money ($100M Series D at a $1B valuation, April 2025, led by GV[^rp-seriesd]), but its marketing drew scrutiny. Jepsen's 2022 analysis found 7 safety and 3 liveness issues, most fixed before publication[^jepsen-rp]. Jack Vanlightly, then at Confluent, reproduced its benchmarks in 2023 and found much worse results with more producers and in long runs[^vanlightly-rp]. Since 2024 it has added Iceberg Topics (GA Apr 2025)[^rp-iceberg], diskless Cloud Topics (GA in 26.1)[^rp-cloud-topics] and an "agentic data plane." It bought the SQL engine Oxla in October 2025[^rp-oxla], which Pavlo noted as a streaming company buying a Postgres-compatible database[^pavlo-2025].

# Timeline

| Date | Event |
|---|---|
| 2019 | Vectorized founded |
| 2022-04 | Jepsen report on 21.10.x[^jepsen-rp] |
| 2023-05 | Vanlightly benchmark critique[^vanlightly-rp] |
| 2025-04 | $100M Series D at $1B[^rp-seriesd]; Iceberg Topics GA[^rp-iceberg] |
| 2025-10 | Acquires Oxla[^rp-oxla] |
| 2026 | Cloud Topics GA (26.1)[^rp-cloud-topics] |

# What worked

- Simple operations: single binary, Raft-based, no ZooKeeper years before KRaft.
- Kafka compatibility made trials cheap. BYOC and enterprise sales built a real business.
- Moved fast on Iceberg and object storage.

# What didn't

- Performance claims did not hold up across workloads[^vanlightly-rp]. KRaft and diskless designs then took away "simpler" and "cheaper" as differentiators.
- BSL licensing limits community adoption compared with Apache-2.0 Kafka and AutoMQ.

# Related

- [Apache Kafka](/systems/apache-kafka.md), [WarpStream](/systems/warpstream.md), [AutoMQ](/systems/automq.md), [Jepsen](/systems/jepsen.md)
- [Kafka protocol as standard](/ideas/streaming-messaging/kafka-protocol-as-standard.md)
