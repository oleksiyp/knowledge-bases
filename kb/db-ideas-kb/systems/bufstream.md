---
type: System
title: Bufstream
description: "Kafka-compatible broker from Buf (the Protobuf tooling company) that stores data on S3 as Parquet with Iceberg metadata and enforces Protobuf schemas at the broker. Launched 2024, validated by Jepsen, and taken in-house by CoreWeave in May 2026."
resource: https://buf.build/product/bufstream
tags: [kafka-compatible, diskless, s3, iceberg, protobuf]
kind: product
first_release: 2024
org: "Buf Technologies; acquired by CoreWeave (2026) for internal use"
license: Proprietary
outcome: acquired
ideas: [ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/streams-as-lakehouse-tables, ideas/streaming-messaging/kafka-protocol-as-standard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: buf-launch
    resource: https://webflow.buf.build/blog/bufstream-kafka-lower-cost
    title: "Buf: Bufstream — Kafka at 8x lower cost (2024-07-09)"
    author: org:buf
  - id: jepsen-buf
    resource: https://jepsen.io/analyses/bufstream-0.1.0
    title: "Jepsen: Bufstream 0.1.0 (2024-11-12)"
    author: person:kyle-kingsbury
  - id: cw-buf
    resource: https://buf.build/blog/coreweave-acquires-bufstream
    title: "Buf: CoreWeave acquires Bufstream"
    author: org:buf
  - id: waehner-q3-2026
    resource: https://www.kai-waehner.de/blog/2026/09/21/data-streaming-trends-q3-2026-what-changes-through-2027/
    title: "Kai Waehner: Data Streaming Trends Q3 2026"
    author: person:kai-waehner
---

# Summary

Bufstream launched in public beta on July 9, 2024 as a "drop-in replacement for Apache Kafka" that is "8x less expensive to operate." It writes to S3-compatible storage, encodes data as Parquet with Iceberg metadata, and validates Protobuf messages at the broker[^buf-launch]. Its Jepsen analysis (Nov 2024) found three safety and two liveness issues, including loss of acknowledged writes in healthy clusters, all fixed by 0.1.3. It also documented Kafka-wide transaction-protocol problems that remain unresolved[^jepsen-buf]. In May 2026 CoreWeave acquired Bufstream and folded it into its internal AI platform (W&B Models and Weave). Buf kept its schema registry and Protobuf business[^cw-buf][^waehner-q3-2026].

# Timeline

| Date | Event |
|---|---|
| 2024-07-09 | Public beta[^buf-launch] |
| 2024-11-12 | Jepsen report[^jepsen-buf] |
| 2026-05 | Acquired by CoreWeave for internal use[^cw-buf] |

# What worked

- Combined diskless storage, Iceberg output and schema enforcement in one product.
- Paid for a public Jepsen analysis, which few streaming vendors had done.

# What didn't

- Did not become a standalone market product. It ended as infrastructure inside an AI cloud.

# Related

- [WarpStream](/systems/warpstream.md), [AutoMQ](/systems/automq.md), [Jepsen](/systems/jepsen.md), [Antithesis](/systems/antithesis.md)
- [CoreWeave acquires Bufstream](/events/2026-05-coreweave-acquires-bufstream.md)
