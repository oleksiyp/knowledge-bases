---
type: Idea
title: "Hyperscaler-native scale-out SQL (Aurora Limitless and Aurora DSQL)"
description: "AWS's 2024–25 answer to Spanner and CockroachDB: Limitless shards Aurora PostgreSQL behind one endpoint, and DSQL is a new serverless, multi-region, active-active PostgreSQL-compatible engine built from disaggregated services. Verdict: too early. The engineering is credible and now documented in a 2026 paper. Compatibility gaps and optimistic-concurrency semantics limit what existing apps can move, and there is little public adoption data."
tags: [distributed-sql, aws, postgres-compatible, multi-region, serverless, occ]
area: cloud-architecture
verdict: too-early
hype_peak: 2025
adoption_2026: rare
origins: "Google Spanner (2012) and Cloud Spanner (2017); Aurora shared storage; AWS internal journal/time-sync services"
key_systems: [systems/aurora-dsql, systems/aurora, systems/spanner, systems/cockroachdb, systems/yugabytedb]
related_ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/serverless-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: limitless-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-aurora-postgresql-limitless-database-generally-available
    title: "AWS: Aurora PostgreSQL Limitless Database is generally available (2024-10-31)"
    author: org:aws
  - id: limitless-preview
    resource: https://pages.awscloud.com/Aurora-Limitless-Database-Preview.html
    title: "AWS: Announcing private preview of Amazon Aurora Limitless Database"
    author: org:aws
  - id: infoq-limitless
    resource: https://www.infoq.com/news/2024/11/amazon-aurora-limiteless/
    title: "InfoQ: Aurora Limitless: AWS introduces new PostgreSQL database with automated horizontal scaling"
  - id: dsql-ga
    resource: https://press.aboutamazon.com/2025/5/aws-announces-the-general-availability-of-amazon-aurora-dsql-the-fastest-distributed-sql-database
    title: "Amazon press release: AWS announces GA of Aurora DSQL (2025-05-27)"
    author: org:aws
  - id: brooker-reads
    resource: https://brooker.co.za/blog/2024/12/04/inside-dsql.html
    title: "Marc Brooker: DSQL Vignette: Reads and Compute (2024-12-04)"
    author: person:marc-brooker
  - id: brooker-writes
    resource: https://brooker.co.za/blog/2024/12/05/inside-dsql-writes.html
    title: "Marc Brooker: DSQL Vignette: Transactions and Durability (2024-12-05)"
    author: person:marc-brooker
  - id: dsql-paper
    resource: https://arxiv.org/abs/2607.13276
    title: "Brooker et al.: Aurora DSQL: Scalable, Multi-Region OLTP (arXiv, July 2026)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: dsql-limits
    resource: https://andrewbaker.ninja/2025/11/19/amazon-aurora-dsql-a-deep-dive-into-performance-and-limitations/
    title: "Andrew Baker: Amazon Aurora DSQL: a deep dive into performance and limitations (Nov 2025)"
  - id: dsql-fk
    resource: https://dev.to/roosterdev/aurora-dsql-now-supports-foreign-keys-what-else-2dp0
    title: "DEV: Aurora DSQL now supports foreign keys. What else?"
  - id: hn-dsql
    resource: https://news.ycombinator.com/item?id=42308716
    title: "Hacker News discussion: Amazon Aurora DSQL (Dec 2024)"
---

# Summary
**Too early.** AWS spent a decade telling customers that single-writer Aurora was enough. Then it shipped two scale-out products within five weeks. **Aurora PostgreSQL Limitless** (GA Oct 31, 2024) shards tables across Aurora Serverless instances behind one endpoint[^limitless-ga]. **Aurora DSQL** (preview Dec 2024, GA May 27, 2025) is a new engine: PostgreSQL-compatible SQL in stateless Firecracker microVMs, MVCC reads with precise time sync, optimistic concurrency at commit, and a separate journal and storage. It promises 99.999% multi-region availability with strong consistency[^dsql-ga][^brooker-reads][^brooker-writes]. The design is well regarded and was published in July 2026[^dsql-paper]. The product has hard edges. At launch it had no foreign keys, no extensions, triggers, temp tables or views, and limits of 3,000 rows and 5 minutes per transaction. Apps must retry OCC aborts[^dsql-limits][^dsql-fk]. With no public adoption figures 18 months after GA, it is too early to call this a success.

# The idea
Give AWS customers Spanner-class properties (horizontal write scale, multi-region active-active, strong consistency) without managing shards, nodes or leaders. DSQL pushes [disaggregation](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) to its limit. Query processors, adjudicators (conflict checking), the journal (durability and replication) and storage scale independently. All coordination happens once, at COMMIT. Brooker's argument is that this makes cross-region latency a per-commit cost, not a per-statement one[^brooker-writes].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018–23 | Aurora stays single-writer. Google Spanner, CockroachDB, YugabyteDB and TiDB own distributed SQL | − |
| 2023 | Aurora Limitless announced in private preview (re:Invent)[^limitless-preview] | + |
| 2024 | Limitless GA, PostgreSQL 16.4-compatible, 10 regions (Oct 31)[^limitless-ga][^infoq-limitless]. DSQL preview at re:Invent (Dec)[^hn-dsql]. Brooker's design blog series[^brooker-reads]. Pavlo notes there is little public detail beyond "a distributed log service" and "timestamp ordering via Time Sync"[^pavlo-2024] | + |
| 2025 | DSQL GA in 8 regions, claimed "4x faster" reads and writes than other distributed SQL databases (unbenchmarked publicly)[^dsql-ga]. Foreign key support added after GA[^dsql-fk] | ± |
| 2026 | DSQL paper on arXiv: scales "from zero to millions of transactions per second"[^dsql-paper] | + |

# What succeeded
- **Architecture.** DSQL's split into query processor, adjudicator, journal and storage is a clean, publishable design. It makes the serverless, scale-to-zero, multi-region combination plausible[^dsql-paper].
- **Serverless pricing in distributed SQL.** Unlike Spanner or CockroachDB Dedicated, DSQL has no nodes to size, which matches the [serverless](/ideas/cloud-architecture/serverless-databases.md) trend.
- **Validation of the category.** AWS shipping two scale-out SQL products confirms that the single-writer ceiling was a real limit for some customers.

# What failed / open issues
- **PostgreSQL compatibility is wire-level, not semantic.** Missing extensions (no pgvector, PostGIS), triggers, PL/pgSQL, temp tables and views, plus per-transaction row limits, rule out most existing Postgres apps without redesign[^dsql-limits]. Hacker News reaction at launch focused on these gaps[^hn-dsql].
- **OCC changes application semantics.** Contended workloads such as hot counters and queues abort at commit and must retry. Developers used to Postgres locking hit this immediately[^brooker-writes].
- **Two products, unclear story.** Limitless (sharded Aurora) and DSQL (new engine) overlap. Pavlo mocked the naming: Amazon "could not resist adding 'Aurora' to DSQL's name"[^pavlo-2024].
- **No adoption evidence.** AWS has published no DSQL customer counts or revenue signal, unlike its Aurora numbers.

# Why
1. **Hyperscalers can build what startups can't.** DSQL depends on AWS-internal primitives (a precise time-sync service, a regional journal, Firecracker). A startup would need years to build these. That is a structural advantage over CockroachDB-class vendors.
2. **Compatibility was traded for scale.** Like Spanner before PostgreSQL dialect support, DSQL starts with a subset. History (Spanner, early CockroachDB) suggests gaps close slowly, over years.
3. **Few workloads need multi-region writes.** Most OLTP fits in one Aurora writer. The addressable market is real but narrow, which is why adoption is likely to be slow regardless of quality.

# Lessons
- "Postgres-compatible" now covers everything from full fork to wire protocol only. Read the unsupported-features list first.
- Deferring all coordination to commit is elegant but turns contention into retries the application has to handle.
- When the platform owner enters a category, startups lose the infrastructure-primitive argument, but not yet the maturity argument.

# Related
- Systems: [Aurora DSQL](/systems/aurora-dsql.md), [Aurora](/systems/aurora.md), [Spanner](/systems/spanner.md), [CockroachDB](/systems/cockroachdb.md), [YugabyteDB](/systems/yugabytedb.md)
- Events: [Aurora DSQL GA](/events/2025-05-aurora-dsql-ga.md)
- Papers: [Aurora DSQL (2026)](/papers/2026-aurora-dsql.md)
- Cross-area: [NewSQL / distributed SQL](/ideas/distributed-sql/newsql-distributed-sql.md), [Geo-partitioning](/ideas/distributed-sql/geo-partitioning-data-residency.md)
