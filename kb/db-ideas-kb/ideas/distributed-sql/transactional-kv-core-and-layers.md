---
type: Idea
title: "FoundationDB 'layers': a transactional KV core under every data model"
description: "Build one ordered, strictly serializable distributed key-value store and implement documents, records, SQL and queues as stateless 'layers' on top. Verdict: mixed. The core won as hidden infrastructure for metadata at Apple, Snowflake, Datadog and others, but the open layer ecosystem Apple hoped for in 2018 never formed."
tags: [foundationdb, key-value, transactions, layers, metadata, unbundled]
area: distributed-sql
verdict: mixed
hype_peak: 2018
adoption_2026: niche
origins: "FoundationDB (2009–2015, acquired by Apple 2015); Google Percolator/Megastore; TiKV plays a similar role under TiDB"
key_systems: [systems/foundationdb, systems/tidb, systems/snowflake]
related_ideas: [ideas/distributed-sql/deterministic-simulation-testing, ideas/distributed-sql/newsql-distributed-sql, ideas/cloud-architecture/object-storage-native-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: reg-fdb-oss
    resource: https://www.theregister.com/2018/04/20/apple_foundationdb_open/
    title: "The Register: Apple unleashes FoundationDB as an open source project (2018-04-20)"
  - id: ai-fdb-oss
    resource: https://appleinsider.com/articles/18/04/19/apple-owned-foundationdb-open-sources-the-core-technology-at-the-heart-of-icloud
    title: "AppleInsider: FoundationDB open sources the core technology at the heart of iCloud (2018-04-19)"
  - id: record-layer
    resource: https://arxiv.org/pdf/1901.04452
    title: "FoundationDB Record Layer: A Multi-Tenant Structured Datastore (SIGMOD 2019)"
  - id: doc-layer
    resource: https://github.com/FoundationDB/fdb-document-layer
    title: "GitHub: FoundationDB Document Layer (MongoDB-API layer)"
  - id: fdb-paper
    resource: https://www.foundationdb.org/files/fdb-paper.pdf
    title: "FoundationDB: A Distributed Unbundled Transactional Key Value Store (SIGMOD 2021)"
  - id: datadog-husky
    resource: https://www.datadoghq.com/blog/engineering/husky-deep-dive/
    title: "Datadog: Husky, exactly-once ingestion and multi-tenancy at scale"
    author: org:datadog
  - id: tigris-fdb
    resource: https://www.tigrisdata.com/blog/data-layer-foundationdb/
    title: "Tigris: How we built our metadata layer on FoundationDB"
    author: org:tigris-data
  - id: mvsqlite
    resource: https://simonwillison.net/2022/Aug/21/mvsqlite/
    title: "Simon Willison: Turning SQLite into a distributed database (mvSQLite, 2022)"
  - id: fdb-limits
    resource: https://apple.github.io/foundationdb/known-limitations.html
    title: "FoundationDB docs: Known limitations"
  - id: sigmod21-awards
    resource: https://2021.sigmod.org/sigmod_best_papers.shtml
    title: "SIGMOD 2021 best paper awards"
  - id: fdb-gh
    resource: https://github.com/apple/foundationdb
    title: "GitHub: apple/foundationdb"
---

# Summary
**Verdict: mixed.** When Apple open-sourced FoundationDB in April 2018, it said it hoped "the number and quality of layers will advance and improve rapidly"[^reg-fdb-oss][^ai-fdb-oss]. Half of that came true. The core (an ordered key-value store with strictly serializable multi-key transactions and famously thorough simulation testing) became trusted infrastructure for metadata and control planes. Examples are Apple's CloudKit (via the Record Layer, hosting "billions of independent databases")[^record-layer], Snowflake's metadata store[^fdb-paper], Datadog's Husky event store[^datadog-husky], and Tigris's object store[^tigris-fdb]. The other half did not. The public layers never became a product ecosystem. The MongoDB-compatible Document Layer stopped receiving commits in 2021[^doc-layer], and nobody built a widely used SQL layer. FoundationDB became a component that infrastructure teams build on, not a database application developers use.

# The idea
Unbundle the database. Put the hard parts (distribution, replication, fault tolerance, ACID across the whole keyspace) in one small, heavily tested core, and implement data models as stateless libraries that map their structures onto ordered keys. The SIGMOD 2021 paper describes the architecture: transaction processing separated from logging and storage, each scaled independently[^fdb-paper]. A good layer is then mostly an encoding problem, and many models can share one cluster and one set of operations.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | Apple open-sources FoundationDB under Apache 2.0 (Apr 19)[^ai-fdb-oss]. Document Layer (MongoDB API) released | + (peak) |
| 2019 | Record Layer open-sourced and its CloudKit use disclosed (Jan). SIGMOD paper[^record-layer] | + |
| 2021 | FoundationDB paper wins the SIGMOD industry best paper award[^sigmod21-awards]. It names Apple and Snowflake as users[^fdb-paper]. Last Document Layer commits[^doc-layer] | + / − |
| 2022 | mvSQLite runs SQLite on FDB[^mvsqlite]. Datadog describes Husky's FDB metadata store[^datadog-husky] | + |
| 2024 | Tigris pivots to S3-compatible object storage with FDB as the metadata layer[^tigris-fdb] | + |
| 2026 | Core still actively developed, about 16.7k GitHub stars[^fdb-gh] | + |

# What succeeded
- **Metadata and control planes.** Datadog chose FDB because it offers "strictly serializable and interactive transactions with no fine print"[^datadog-husky]. Systems that keep their bulk data in object storage need a small, perfectly consistent catalog, which is FDB's strength.
- **Apple-scale multi-tenancy.** The Record Layer shows the layer model working inside one company with a dedicated team[^record-layer].
- **Influence on testing.** FDB's deterministic simulation became the reference design for a whole testing movement (see [DST](/ideas/distributed-sql/deterministic-simulation-testing.md)).

# What failed
- **A public layer ecosystem.** The Document Layer has 233 stars and no commits since mid-2021[^doc-layer]. Projects like mvSQLite stayed hobby-scale[^mvsqlite].
- **Operational accessibility.** FDB has limits that layers must work around: transactions are capped at 5 seconds and 10 MB, there is no built-in query language, and data modeling is hand-written[^fdb-limits]. These suit infrastructure teams and put off application developers.
- **No company behind it.** After the 2015 acquisition there was no vendor to sell support, a managed service or layers. Apple, Snowflake and others steer the project for their own needs.

# Why
1. **Layers are where the product is.** Query planning, indexing, schema evolution and tooling are most of the work of a database. A transactional KV core removes the distribution problem but leaves all of that, and only well-staffed teams finish it.
2. **Postgres won the general-purpose slot.** From 2018, developers who wanted documents, queues or search got them as Postgres features or extensions, so a layer had no opening.
3. **Infrastructure buyers value exactly what FDB is.** For catalogs, schedulers and object-store metadata, a small API with ironclad semantics is the right product, so FDB thrived there.

# Lessons
- A great core is a component, not a product. Ecosystems form around end-user interfaces, not around storage APIs.
- The "boring, correct, unbundled core" pattern works well for metadata in lakehouse-era and object-storage-era systems.
- Open-sourcing without a commercial steward can preserve a project, but it rarely grows one.

# Related
- Systems: [FoundationDB](/systems/foundationdb.md), [Snowflake](/systems/snowflake.md), [TiDB](/systems/tidb.md)
- Ideas: [Deterministic simulation testing](/ideas/distributed-sql/deterministic-simulation-testing.md)
- Papers: [FoundationDB (SIGMOD 2021)](/papers/2021-foundationdb-unbundled-kv.md)
- Events: [Apple open-sources FoundationDB](/events/2018-04-apple-open-sources-foundationdb.md)

[^reg-fdb-oss]: The Register, 2018-04-20.
[^ai-fdb-oss]: AppleInsider, 2018-04-19.
[^record-layer]: Record Layer paper, SIGMOD 2019 (arXiv 1901.04452).
[^doc-layer]: GitHub FoundationDB/fdb-document-layer, last push 2021-06-13 (checked 2026-10-03).
[^fdb-paper]: Zhou et al., SIGMOD 2021.
[^datadog-husky]: Datadog engineering blog.
[^tigris-fdb]: Tigris Data blog.
[^mvsqlite]: Simon Willison, 2022-08-21.
[^fdb-limits]: FoundationDB documentation.
[^sigmod21-awards]: SIGMOD 2021.
[^fdb-gh]: GitHub apple/foundationdb, checked 2026-10-03.
