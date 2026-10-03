---
type: Idea
title: "Object-storage-native databases (S3 as primary storage)"
description: "Build the database so object storage (S3/GCS/Azure Blob) is the source of truth, with local SSD and RAM only as caches. Verdict: winning. Cost is 10–100x lower and operations get simpler. S3 conditional writes (2024) removed the need for a separate coordinator, and turbopuffer, SlateDB, Neon and diskless Kafka proved it in production. Object-store latency and per-request pricing still rule it out for the commit path of latency-sensitive OLTP."
tags: [object-storage, s3, cloud-native, storage-engine, cost]
area: cloud-architecture
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "Snowflake (2012–14) for analytics; lakehouse table formats; Riccomini's 'Cloud Storage Triad' (2024)"
key_systems: [systems/s3, systems/turbopuffer, systems/slatedb, systems/neon, systems/warpstream, systems/snowflake, systems/apache-iceberg]
related_ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/byoc-deployment]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: s3-cond
    resource: https://aws.amazon.com/about-aws/whats-new/2024/08/amazon-s3-conditional-writes
    title: "AWS: Amazon S3 now supports conditional writes (2024-08-20)"
    author: org:aws
  - id: s3-ifmatch
    resource: https://aws.amazon.com/about-aws/whats-new/2024/11/amazon-s3-functionality-conditional-writes
    title: "AWS: Amazon S3 adds new functionality for conditional writes (Nov 2024)"
    author: org:aws
  - id: morling
    resource: https://www.morling.dev/blog/leader-election-with-s3-conditional-writes/
    title: "Gunnar Morling: Leader Election With S3 Conditional Writes"
  - id: s3x-cut
    resource: https://aws.amazon.com/blogs/aws/up-to-85-price-reductions-for-amazon-s3-express-one-zone/
    title: "AWS News Blog: Up to 85% price reductions for S3 Express One Zone (Apr 2025)"
    author: org:aws
  - id: tpuf
    resource: https://turbopuffer.com/blog/turbopuffer
    title: "turbopuffer: turbopuffer: fast search on object storage"
    author: org:turbopuffer
  - id: sacra-tpuf
    resource: https://sacra.com/c/turbopuffer/
    title: "Sacra: turbopuffer revenue, funding & growth (third-party estimates)"
  - id: slatedb-intro
    resource: https://slatedb.io/blog/introducing-slatedb/
    title: "SlateDB: An Object-Native LSM for Online Systems (2026-06-30)"
    author: org:slatedb
  - id: riccomini-slatedb
    resource: https://materializedview.io/p/slatedb-an-embedded-storage-engine
    title: "Chris Riccomini: SlateDB: An Embedded Storage Engine Built on Object Storage (Aug 2024)"
    author: person:chris-riccomini
  - id: triad
    resource: https://materializedview.io/p/cloud-storage-triad-latency-cost-durability
    title: "Chris Riccomini: The Cloud Storage Triad: Latency, Cost, Durability"
    author: person:chris-riccomini
  - id: vogels-s3files
    resource: https://www.allthingsdistributed.com/2026/04/s3-files-and-the-changing-face-of-s3.html
    title: "Werner Vogels: S3 Files and the changing face of S3 (Apr 2026)"
    author: person:werner-vogels
  - id: s3v-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-s3-vectors-generally-available/
    title: "AWS: Amazon S3 Vectors GA with 40x the scale of preview (2025-12-02)"
    author: org:aws
  - id: neon-gh
    resource: https://github.com/neondatabase/neon
    title: "Neon GitHub repository"
    author: org:neon
  - id: jxnl-tpuf
    resource: https://jxnl.co/writing/2025/09/11/turbopuffer-object-storage-first-vector-database-architecture/
    title: "Jason Liu: TurboPuffer: object storage-first vector database architecture (Sep 2025)"
---

# Summary
**Winning.** Between 2023 and 2026 a new class of databases emerged that use object storage as **the** durable store rather than a backup target. Analytics did this first (Snowflake, lakehouse formats). The new part is doing it for *online* systems: search and vector serving (turbopuffer), embedded key-value engines (SlateDB), OLTP page stores (Neon), and Kafka-compatible logs (WarpStream and the "diskless Kafka" wave). Two developments made it practical. S3 shipped **conditional writes** in August 2024, giving it compare-and-swap with no external coordinator[^s3-cond][^s3-ifmatch]. And the cost gap is too large to ignore: turbopuffer cites about $70/TB-month against $1,600 for replicated-SSD incumbents[^tpuf]. The limit is physics plus pricing. A cold read costs tens to hundreds of milliseconds, and every PUT is billed, so these systems batch writes and cache aggressively. Latency-critical commits still go through a separate log tier.

# The idea
Object storage gives 11 nines of durability, cross-AZ replication, unlimited capacity and about $20/TB-month. Replicated block storage costs far more, and you run the replication yourself. If the database treats S3 as the disk:
- compute nodes become stateless caches (NVMe + RAM), so scaling, failover and "BYOC" become simple;
- replication, durability and backups are delegated to the cloud provider;
- you trade **latency** (50–100 ms first byte) and **request costs** for that simplicity, which Riccomini calls the "cloud storage triad" of latency, cost and durability[^triad].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018–21 | Snowflake, Delta/Iceberg and Neon's design make "S3 as truth" standard for analytics and cold OLTP pages[^neon-gh] | + |
| 2023 | S3 Express One Zone (Nov) offers a low-latency tier. turbopuffer starts. Cursor migrates in Nov 2023 with a reported 95% cost cut[^tpuf] | + |
| 2024 | S3 conditional writes: `If-None-Match` (Aug 20)[^s3-cond], then `If-Match` compare-and-swap (Nov)[^s3-ifmatch]. Leader election directly on S3 becomes a blog-post pattern[^morling]. SlateDB open-sourced (Aug)[^riccomini-slatedb]. Confluent buys WarpStream. AWS launches S3 Tables (Dec) | + |
| 2025 | S3 Express prices cut by up to 85% on GETs (Apr)[^s3x-cut]. S3 Vectors preview (Jul) and GA (Dec, 2B vectors per index)[^s3v-ga]. Diskless proposals across the Kafka ecosystem | + |
| 2026 | turbopuffer reportedly reaches ~$100M ARR by March (Sacra estimate)[^sacra-tpuf]. S3 Files (Apr)[^vogels-s3files]. SlateDB formally launched and used at Dropbox and others (Jun)[^slatedb-intro] | + |

# What succeeded
- **Search and vector serving.** turbopuffer is the clearest commercial proof. Its customers include Cursor (over a trillion code chunks across tens of millions of namespaces, per a third-party write-up), Notion, Linear and Anthropic[^tpuf][^jxnl-tpuf]. AWS then shipped S3 Vectors itself, claiming up to 90% lower cost than dedicated vector databases[^s3v-ga]. That is a sign the pattern has gone mainstream.
- **Embedded storage engines.** SlateDB maps LSM properties onto object storage: immutable SSTs, batched flushes, and compaction that cuts PUTs. It also adds O(1) checkpoints and forks. It reports production users including Dropbox[^slatedb-intro].
- **Coordination without ZooKeeper.** Conditional writes let a writer fence others with a CAS on a manifest object. SlateDB, Delta/Iceberg commits and diskless Kafka designs rely on this[^s3-ifmatch][^morling].
- **Hyperscaler validation.** Vogels reports S3 serving over 25M requests per second for Parquet data alone and more than 2M S3 Tables[^vogels-s3files].

# What failed / limits
- **Write latency.** A PUT to S3 Standard takes tens of milliseconds. Systems either batch, as SlateDB does with configurable flush intervals, or put a low-latency WAL in front: Neon Safekeepers, or S3 Express One Zone, which gives up multi-AZ durability. "S3-only" OLTP with single-digit-millisecond commits did not arrive.
- **Cold reads.** A first query on an uncached namespace in turbopuffer has a p50 near a second in one independent test, against ~14 ms warm[^jxnl-tpuf]. Workloads with uniformly random access across huge datasets get little benefit.
- **Request pricing.** Small objects and chatty access patterns can cost more in request fees than in storage, which pushes designs toward large immutable files.

# Why
1. **Price gaps decide architecture.** A 10–100x gap between replicated SSD/RAM and object storage[^tpuf] is large enough that designers accept higher latency and add caches.
2. **AI workloads matched the shape.** Vector and code-search indexes are huge, multi-tenant (one namespace per user or repo) and mostly cold. That is exactly what object-first designs handle well.
3. **The missing primitive arrived.** Before Aug 2024, S3 users needed DynamoDB or ZooKeeper for mutual exclusion. Conditional writes removed the second dependency[^s3-cond].
4. **Hyperscalers compete for the layer.** S3 Tables, S3 Vectors and S3 Files show AWS moving up into the database layer, both validating and threatening startups built on it.

# Lessons
- Design around the storage bill: batch writes, make files immutable, treat local disk as cache.
- A single atomic primitive (CAS on an object) can delete a whole coordination subsystem.
- If your product is "a database on S3", expect the S3 team to build a narrower version of it.

# Related
- Systems: [S3](/systems/s3.md), [turbopuffer](/systems/turbopuffer.md), [SlateDB](/systems/slatedb.md), [Neon](/systems/neon.md), [WarpStream](/systems/warpstream.md)
- Events: [S3 conditional writes](/events/2024-08-s3-conditional-writes.md)
- Ideas: [BYOC](/ideas/cloud-architecture/byoc-deployment.md), [disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md)
- Cross-area: [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md), [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md)
