---
type: Idea
title: "The Kafka wire protocol as the de facto streaming standard"
description: "Implement Kafka's client protocol on a different engine so existing producers, consumers and connectors work unchanged. It won: Azure, Redpanda, WarpStream, AutoMQ, Bufstream, StreamNative and Google all converged on it, and rival native APIs (Pulsar, Pub/Sub Lite) lost ground. The catch is that the protocol's semantics are loosely specified, so 'compatible' varies in practice."
tags: [kafka, protocol, compatibility, standards, redpanda, cloud]
area: streaming-messaging
verdict: won
hype_peak: 2024
adoption_2026: mainstream
origins: "Azure Event Hubs Kafka endpoint (public preview 2018, GA Nov 2018); Redpanda (Vectorized, 2019) as a C++ reimplementation."
key_systems: [systems/redpanda, systems/warpstream, systems/automq, systems/bufstream, systems/streamnative, systems/google-pubsub, systems/apache-kafka]
related_ideas: [ideas/streaming-messaging/kafka-as-central-log, ideas/streaming-messaging/apache-pulsar-two-tier-challenger, ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/postgres-ecosystem/postgres-compatibility-standard, ideas/distributed-sql/jepsen-correctness-culture]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: eh-ga
    resource: https://azure.microsoft.com/en-us/blog/announcing-the-general-availability-of-azure-event-hubs-for-apache-kafka/
    title: "Microsoft: General availability of Azure Event Hubs for Apache Kafka (Nov 2018)"
    author: org:microsoft
  - id: kop
    resource: https://streamnative.io/blog/kafka-on-pulsar-bring-native-kafka-protocol-support-to-apache-pulsar
    title: "StreamNative: Announcing Kafka-on-Pulsar (KoP), March 2020"
    author: org:streamnative
  - id: gmk-notes
    resource: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/release-notes
    title: "Google Cloud Managed Service for Apache Kafka release notes (GA Nov 2024)"
    author: org:google
  - id: psl-notes
    resource: https://docs.cloud.google.com/pubsub/lite/docs/release-notes
    title: "Google Pub/Sub Lite release notes (deprecation)"
    author: org:google
  - id: jepsen-rp
    resource: https://jepsen.io/analyses/redpanda-21.10.1
    title: "Jepsen: Redpanda 21.10.1 (2022-04-29)"
    author: person:kyle-kingsbury
  - id: jepsen-buf
    resource: https://jepsen.io/analyses/bufstream-0.1.0
    title: "Jepsen: Bufstream 0.1.0 (2024-11-12)"
    author: person:kyle-kingsbury
  - id: vanlightly-rp
    resource: https://jack-vanlightly.com/blog/2023/5/15/kafka-vs-redpanda-performance-do-the-claims-add-up
    title: "Jack Vanlightly: Kafka vs Redpanda Performance — Do the claims add up? (May 2023)"
    author: person:jack-vanlightly
  - id: rp-seriesd
    resource: https://www.redpanda.com/press/redpanda-raises-100m-launches-enterprise-agentic-ai-platform
    title: "Redpanda raises $100M Series D (Apr 2025)"
    author: org:redpanda
  - id: sn-kafka
    resource: https://www.businesswire.com/news/home/20260407143701/en/StreamNative-Introduces-Lakestream-Architecture-and-Launches-Native-Kafka-Service-Unifying-Streaming-and-the-Lakehouse
    title: "StreamNative introduces Lakestream and launches native Kafka service (2026-04-07)"
    author: org:streamnative
  - id: waehner-q3-2026
    resource: https://www.kai-waehner.de/blog/2026/09/21/data-streaming-trends-q3-2026-what-changes-through-2027/
    title: "Kai Waehner: Data Streaming Trends Q3 2026"
    author: person:kai-waehner
  - id: lite-current
    resource: https://docs.cloud.google.com/pubsub/lite/docs
    title: "Pub/Sub Lite current retirement notice (January 31, 2027)"
---

# Summary

**Verdict: won.** By 2026 "streaming" in most enterprises means "speaks Kafka." Microsoft added a Kafka endpoint to Event Hubs (GA Nov 2018)[^eh-ga]. Pulsar's company added Kafka-on-Pulsar in 2020[^kop] and in 2026 launched a native Kafka service[^sn-kafka]. Google launched Managed Service for Apache Kafka (GA Nov 2024)[^gmk-notes] and deprecated its Kafka-like Pub/Sub Lite; current documentation schedules retirement for January 31, 2027[^psl-notes][^lite-current]. A wave of startups (Redpanda, WarpStream, AutoMQ, Bufstream) competed on engine, not API. Waehner's Q3 2026 summary: "The Kafka protocol won the interoperability layer"[^waehner-q3-2026]. The weakness is that "Kafka-compatible" has no conformance suite. Jepsen showed that Kafka's own transaction semantics are underspecified, and implementations differ at the edges[^jepsen-buf].

# The idea

Kafka's real moat was never the broker code. It was the clients in every language, Kafka Connect's hundreds of connectors, Schema Registry, stream processors (Kafka Streams, Flink, Spark) and operational tooling. A new engine that speaks the same binary protocol inherits all of that on day one. Users can migrate by changing a bootstrap URL. This is the same playbook as the [Postgres wire protocol](/ideas/postgres-ecosystem/postgres-compatibility-standard.md) and the S3 API.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Azure Event Hubs for Kafka GA (Nov 22)[^eh-ga] | + |
| 2019 | Vectorized (later Redpanda) founded to rewrite Kafka in C++ with no ZooKeeper and no JVM | + |
| 2020 | Kafka-on-Pulsar (KoP) from StreamNative and OVHcloud (Mar)[^kop] | + |
| 2022 | Jepsen on Redpanda 21.10.1: 7 safety and 3 liveness issues, most fixed; documents surprising Kafka transaction behaviour[^jepsen-rp] | mixed |
| 2023 | Vanlightly (then at Confluent) benchmarks Redpanda vs Kafka and disputes Redpanda's performance claims outside the vendor's own benchmark setup[^vanlightly-rp] | − for Redpanda |
| 2023–24 | WarpStream, AutoMQ, Bufstream launch as Kafka-protocol engines on S3 | + |
| 2024 | Google: Pub/Sub Lite deprecated (Jun 17); Managed Service for Apache Kafka GA (Nov 12)[^psl-notes][^gmk-notes] | + |
| 2025 | Redpanda raises $100M Series D at a reported $1B valuation (Apr)[^rp-seriesd] | + |
| 2026 | StreamNative launches Ursa for Kafka, a native Kafka service (Apr 7)[^sn-kafka] | + |

# What succeeded

- **Migration without code changes** made alternatives credible. Redpanda reached a reported $1B valuation selling a Kafka-API engine[^rp-seriesd]. WarpStream sold to Confluent within 14 months.
- **Hyperscalers gave in.** Google built a managed Kafka next to Pub/Sub. Microsoft built the protocol into Event Hubs. AWS runs MSK. Google scheduled the retirement of Pub/Sub Lite, while ordinary Pub/Sub remains a migration destination[^lite-current].
- **Engine innovation became possible** (thread-per-core C++, S3-native, lakehouse-native) without asking users to rewrite applications.

# What failed

- **Semantics drift.** Jepsen's Bufstream report found write loss, aborted reads and torn transactions caused by the Kafka transaction protocol itself, and noted the "lack of authoritative documentation for transaction semantics." These affect Kafka and presumably every compatible system[^jepsen-buf]. Without a spec, each implementation reverse-engineers the Java broker.
- **Partial compatibility.** Many compatible services lag on newer APIs (transactions, compaction, KIP-848 consumer protocol, share groups). Event Hubs has historically not supported every Kafka feature. Users find the gaps in production.
- **Benchmark wars.** Headline performance claims (notably Redpanda's) were contested, and independent reproductions showed results depend heavily on workload[^vanlightly-rp]. Being protocol-compatible made benchmarks easy to run, so marketing claims were easy to check.
- **Competing protocols lost.** Pulsar's native API, Pub/Sub Lite and Kinesis did not become portable standards (see [Pulsar](/ideas/streaming-messaging/apache-pulsar-two-tier-challenger.md)).

# Why

Ecosystem gravity: the client libraries, connectors and skills outweigh any engine improvement. Once enough tools spoke Kafka, a new protocol had to offer a 10x benefit to justify rewrites, and no one could. The protocol is also simple enough at its core (produce/fetch over partitioned logs with offsets) to reimplement. The hard parts (consumer group coordination, idempotence, transactions) can be added later. The lack of a formal spec helped adoption, because anyone could implement a subset, but it hurts correctness.

# Lessons

- In infrastructure, the interface outlives the implementation. Compete on the engine, keep the API.
- A de facto standard without a spec or conformance tests invites subtle incompatibilities. Jepsen-style testing becomes the conformance suite.
- Hyperscalers may consolidate proprietary services; a migration option based on an open protocol does not prove every customer chose it.

# Related

- [Redpanda](/systems/redpanda.md), [WarpStream](/systems/warpstream.md), [AutoMQ](/systems/automq.md), [Bufstream](/systems/bufstream.md), [StreamNative](/systems/streamnative.md), [Google Pub/Sub](/systems/google-pubsub.md), [Jepsen](/systems/jepsen.md)
- [Pub/Sub Lite deprecated](/events/2024-06-google-pubsub-lite-deprecated.md)
- [Postgres wire protocol as standard](/ideas/postgres-ecosystem/postgres-compatibility-standard.md)
- [Jepsen-driven correctness culture](/ideas/distributed-sql/jepsen-correctness-culture.md)
