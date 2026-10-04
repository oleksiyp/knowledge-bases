---
type: System
title: FoundationDB
description: "Ordered, strictly serializable distributed key-value store with an 'unbundled' architecture and the deterministic simulator that started the DST movement. Apple open-sourced it in April 2018. It thrives as hidden metadata infrastructure (Apple, Snowflake, Datadog, Tigris), but its public layer ecosystem never formed."
resource: https://www.foundationdb.org
tags: [key-value, transactions, simulation-testing, apple, metadata, apache-2]
kind: oss
first_release: 2013
org: "Apple (acquired FoundationDB Inc. in 2015); community project"
license: Apache-2.0
outcome: stable
ideas: [ideas/distributed-sql/transactional-kv-core-and-layers, ideas/distributed-sql/deterministic-simulation-testing]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ai-oss
    resource: https://appleinsider.com/articles/18/04/19/apple-owned-foundationdb-open-sources-the-core-technology-at-the-heart-of-icloud
    title: "AppleInsider: FoundationDB open-sourced (2018-04-19)"
  - id: record
    resource: https://www.foundationdb.org/blog/announcing-record-layer/
    title: "FoundationDB: Announcing the Record Layer (2019-01)"
  - id: paper
    resource: https://www.foundationdb.org/files/fdb-paper.pdf
    title: "FoundationDB: A Distributed Unbundled Transactional Key Value Store (SIGMOD 2021)"
  - id: awards
    resource: https://2021.sigmod.org/sigmod_best_papers.shtml
    title: "SIGMOD 2021 best paper awards"
  - id: husky
    resource: https://www.datadoghq.com/blog/engineering/husky-deep-dive/
    title: "Datadog: Husky deep dive"
    author: org:datadog
  - id: doc-layer
    resource: https://github.com/FoundationDB/fdb-document-layer
    title: "GitHub: fdb-document-layer"
  - id: gh
    resource: https://github.com/apple/foundationdb
    title: "GitHub: apple/foundationdb"
---

# Summary
FoundationDB's core idea is to solve distributed transactions once in a small, heavily simulated key-value core and build every data model as a layer on top. Apple bought the company in 2015, pulled the downloads, and then open-sourced the core under Apache 2.0 on 19 April 2018. It disclosed that FDB underpins iCloud[^ai-oss]. In Jan 2019 Apple released the Record Layer, which CloudKit uses to host billions of per-user databases[^record]. The SIGMOD 2021 paper won the industry best paper award. It describes the unbundled architecture and the simulator, through which even Apple's production upgrades are rehearsed[^paper][^awards]. Outside Apple, FDB is the metadata store for Snowflake[^paper] and Datadog's Husky, chosen for "strictly serializable and interactive transactions with no fine print"[^husky]. The MongoDB-compatible Document Layer was abandoned after 2021[^doc-layer]. The core repo (about 16.7k stars) is active[^gh].

# Timeline
| Date | Event |
|---|---|
| 2018-04-19 | Open-sourced by Apple[^ai-oss] |
| 2018 | Document Layer (MongoDB wire protocol) released[^doc-layer] |
| 2019-01 | Record Layer open-sourced, CloudKit use confirmed[^record] |
| 2021-06 | SIGMOD industry best paper[^awards] |
| 2021-06 | Last Document Layer commit[^doc-layer] |

# What worked
- Correctness and operability at Apple scale, which made it a trusted foundation for metadata[^paper][^husky].
- Its simulator became the template for DST in TigerBeetle, Antithesis and many others.

# What didn't
- No vendor, no managed service, few maintained layers, and hard limits (5 s and 10 MB per transaction) that put off application developers.

# Related
- [Transactional KV core and layers](/ideas/distributed-sql/transactional-kv-core-and-layers.md), [DST](/ideas/distributed-sql/deterministic-simulation-testing.md), [Antithesis](/systems/antithesis.md), [Snowflake](/systems/snowflake.md)
- Papers: [FoundationDB SIGMOD 2021](/papers/2021-foundationdb-unbundled-kv.md)
- Events: [Apple open-sources FoundationDB](/events/2018-04-apple-open-sources-foundationdb.md)

[^ai-oss]: AppleInsider, 2018-04-19.
[^record]: FoundationDB blog, Jan 2019.
[^paper]: Zhou et al., SIGMOD 2021.
[^awards]: SIGMOD 2021.
[^husky]: Datadog engineering blog.
[^doc-layer]: GitHub, last push 2021-06-13.
[^gh]: GitHub, checked 2026-10-03.
