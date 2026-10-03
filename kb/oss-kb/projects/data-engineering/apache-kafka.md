---
type: OSS Project
title: Apache Kafka
description: The de facto event-streaming standard; technically reinvigorated (ZooKeeper removed in 4.0, queues GA in 4.2, diskless topics accepted) while its main commercial steward Confluent was absorbed by IBM for ~$11B.
resource: https://github.com/apache/kafka
tags: [streaming, apache-2.0, foundation-hosted, asf]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0 (2011-)"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: [organizations/confluent, organizations/redpanda-data]
metrics:
  github_stars: { value: 33893, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kafka-gh
    resource: https://github.com/apache/kafka
    title: Apache Kafka GitHub repository (stars, tags 4.0.0–4.3.1)
    last_modified: 2026-10-03T00:00:00Z
  - id: confluent-kafka4
    resource: https://www.confluent.io/blog/latest-apache-kafka-release/
    title: "Confluent: Apache Kafka 4.0 Release – Default KRaft, Queues, Faster Rebalances"
  - id: axonops-42
    resource: https://axonops.com/blog/apache-kafka-4-2-0-is-out/
    title: "AxonOps: Apache Kafka 4.2.0 is out"
  - id: conduktor-share
    resource: https://www.conduktor.io/glossary/kafka-share-groups
    title: "Conduktor: Kafka Queues – Share Groups Explained"
  - id: aiven-kip1150
    resource: https://aiven.io/blog/kip-1150-accepted-and-the-road-ahead
    title: "Aiven: KIP-1150 Accepted, and the Road Ahead"
  - id: ibm-confluent
    resource: https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai
    title: "IBM to acquire Confluent (press release, 2025-12-08)"
  - id: ibm-confluent-close
    resource: https://www.hpcwire.com/bigdatawire/this-just-in/ibm-completes-acquisition-of-confluent/
    title: "BigDATAwire: IBM Completes Acquisition of Confluent"
  - id: confluent-streamhouse
    resource: https://www.confluent.io/blog/
    title: "Confluent blog: Aiven, Confluent, Redpanda, StreamNative and Ververica Form Streamhouse Working Group (2026-09-15)"
---

# Summary
Kafka is in its strongest technical period in years: Kafka 4.0 (March 2025) completed the removal of ZooKeeper, share groups ("queues for Kafka") went GA in 4.2 (February 2026), and the community accepted KIP-1150 diskless topics (March 2026), formally endorsing object storage as Kafka's future data layer. The protocol's position as the lingua franca of streaming is unchallenged — competitors (Redpanda, WarpStream, AutoMQ) compete on *implementation*, not API. Commercially, the story is consolidation: Confluent, the dominant Kafka vendor, was acquired by IBM for $31/share (~$11B EV), closing 2026-03-17. Verdict: OSS thriving; business layer consolidated into big-vendor hands.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-18 | Kafka 4.0: first release without ZooKeeper, KRaft only; queues early access[^confluent-kafka4][^kafka-gh] | OSS | + |
| W24 | 2025-09-02 | Kafka 4.1 (share groups preview)[^kafka-gh][^axonops-42] | OSS | + |
| W12 | 2025-12-08 | IBM announces acquisition of Confluent at $31/share (~$11B EV)[^ibm-confluent] | Business | +/− |
| W9 | 2026-02-16 | Kafka 4.2: share groups GA[^kafka-gh][^axonops-42] | OSS | + |
| W9 | 2026-03-02 | KIP-1150 (diskless topics) accepted, 9 binding votes[^aiven-kip1150] | OSS | + |
| W9 | 2026-03-17 | IBM completes Confluent acquisition; CFLT delisted[^ibm-confluent-close] | Business | +/− |
| W6 | 2026-05-20 | Kafka 4.3.0 tagged[^kafka-gh] | OSS | + |
| W3 | 2026-09-15 | Streamhouse Working Group formed by Aiven, Confluent, Redpanda, StreamNative, Ververica[^confluent-streamhouse] | Business | + |

# OSS successes
- Decade-long ZooKeeper removal finished in 4.0; KRaft is now the only metadata mode[^confluent-kafka4].
- Share groups (KIP-932) bring per-record acknowledgement / queue semantics; GA in 4.2[^axonops-42][^conduktor-share].
- KIP-1150 diskless topics accepted — the upstream answer to WarpStream/AutoMQ-style object-storage Kafka; driven by Aiven, which chose to upstream rather than fork (its "Inkless" fork is a testbed)[^aiven-kip1150].
- Healthy release cadence: 4.0 → 4.3 in ~14 months[^kafka-gh].

# OSS failures / risks
- KIP-1150's implementation KIPs (1163/1164) were still under discussion after acceptance; diskless is not yet a GA feature[^aiven-kip1150].
- Hard break: clusters still on ZooKeeper cannot upgrade directly to 4.x; must migrate to KRaft in 3.7–3.9 first[^confluent-kafka4].
- Contributor concentration: Confluent historically employed a large share of committers; IBM ownership shifts that dependency (impact unverified so far).

# Business successes
- Confluent exited at ~$11B EV in cash to IBM[^ibm-confluent].
- Ecosystem of Kafka-API vendors (Redpanda, Aiven, StreamNative, Ververica, Confluent) cooperating on a "Streamhouse" open architecture[^confluent-streamhouse].

# Business failures / risks
- Confluent never reached the scale that would let it stay independent; the IBM take-private is a mixed signal for COSS streaming vendors.
- Object-storage-native Kafka compresses pricing for everyone (cross-AZ replication fees were a large part of the value captured).

# By window
## W3
- Streamhouse Working Group formed (2026-09-15)[^confluent-streamhouse]; 4.3.x maintenance releases[^kafka-gh].
## W6
- Kafka 4.3.0 (2026-05-20)[^kafka-gh].
## W9
- Kafka 4.2 with share groups GA (2026-02-16)[^axonops-42]; KIP-1150 accepted (2026-03-02)[^aiven-kip1150]; IBM closes Confluent (2026-03-17)[^ibm-confluent-close].
## W12
- IBM–Confluent deal announced (2025-12-08)[^ibm-confluent].
## W24
- Kafka 4.0 drops ZooKeeper (2025-03-18)[^confluent-kafka4]; Kafka 4.1 (2025-09-02)[^kafka-gh].

# Lessons
- A protocol standard outlives its vendors: competitors cloned the API instead of displacing it, reinforcing Kafka.
- Upstreaming (Aiven's KIP-1150) beat forking as a strategy for vendor differentiation in an ASF project.
- Even category-defining COSS companies can end as tuck-ins for incumbents when growth slows.

# Related
- [Confluent](/organizations/confluent.md), [Redpanda Data](/organizations/redpanda-data.md)
- [IBM acquires Confluent](/events/2025-12-ibm-acquires-confluent.md), [KIP-1150 diskless accepted](/events/2026-03-kafka-kip-1150-diskless-topics-accepted.md), [Kafka 4.0 drops ZooKeeper](/events/2025-03-kafka-4-removes-zookeeper.md), [Streamhouse Working Group](/events/2026-09-streamhouse-working-group.md)
- [Redpanda](/projects/data-engineering/redpanda.md), [AutoMQ](/projects/data-engineering/automq.md), [Apache Flink](/projects/data-engineering/apache-flink.md)

[^kafka-gh]: Apache Kafka GitHub repository, tags and stars as of 2026-10-03.
[^confluent-kafka4]: Confluent, "Apache Kafka 4.0 Release".
[^axonops-42]: AxonOps, "Apache Kafka 4.2.0 is out".
[^conduktor-share]: Conduktor, "Kafka Queues: Share Groups Explained".
[^aiven-kip1150]: Aiven, "KIP-1150 Accepted, and the Road Ahead".
[^ibm-confluent]: IBM newsroom, 2025-12-08.
[^ibm-confluent-close]: BigDATAwire, "IBM Completes Acquisition of Confluent".
[^confluent-streamhouse]: Confluent blog, Streamhouse Working Group post (2026-09-15).
