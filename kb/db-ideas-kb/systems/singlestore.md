---
type: System
title: SingleStore
description: MemSQL evolved into a hybrid operational and analytical SQL engine; its 2025 private-equity buyout signals survival
  and consolidation, not a database shutdown.
kind: product
outcome: acquired
ideas:
- ideas/distributed-sql/htap
- ideas/distributed-sql/newsql-distributed-sql
resource: https://www.singlestore.com
org: SingleStore; Vector Capital-led ownership
license: Proprietary
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: ss-storage
  resource: https://www.singlestore.com/blog/singlestore-universal-storage-episode-4/
  title: 'SingleStore Universal Storage: multi-column keys and upserts in 7.5'
- id: ss-close
  resource: https://www.singlestore.com/blog/a-new-chapter-for-singlestore-accelerating-our-growth-with-vector-capital/
  title: 'SingleStore: Vector Capital buyout closes, October 16, 2025'
- id: ss-vector
  resource: https://www.vectorcapital.com/investments/case-study/singlestore
  title: 'Vector Capital: SingleStore investment'
- id: ss-rename
  resource: https://www.businesswire.com/news/home/20201027005244/en/MemSQL-Changes-Name-to-SingleStore
  title: MemSQL changes name to SingleStore, October 27, 2020
---

# Summary
SingleStore is the proprietary distributed SQL database formerly called MemSQL. The 2020 rename reflected a product that had moved beyond its original in-memory identity.[^ss-rename] Its Universal Storage design extended a columnar representation with indexing, uniqueness checks and upserts, reducing the need to maintain separate rowstore and columnstore copies for mixed workloads.[^ss-storage] In October 2025, SingleStore closed a growth buyout with Vector Capital.[^ss-close] The outcome is an acquired, continuing business: the transaction does not establish that HTAP disappeared or that the engine stopped working.

# Timeline
| Date | Event |
|---|---|
| 2020-10-27 | MemSQL becomes SingleStore.[^ss-rename] |
| 2021 | Universal Storage 7.5 supports multi-column unique keys and upserts; columnstore becomes the default for new clusters.[^ss-storage] |
| 2025-10-16 | Company announces the Vector Capital buyout has closed.[^ss-close] |

# What worked
The engine attacked a concrete integration problem. Earlier ingestion paths could require writing streaming upserts into rowstore before moving data to columnstore. Broader columnstore update support reduced that extra movement and the need for large memory configurations.[^ss-storage] Vector describes a continuing enterprise customer base, including nearly 50 Fortune 500 companies; this is an investor-reported adoption claim, not independently audited market share.[^ss-vector]

# What didn't
A unified storage layout does not establish that every transaction and analytical workload can share a deployment without interference. Buyers still need workload-specific testing. The company also exited through private equity rather than becoming evidence of an independent HTAP vendor dominating general-purpose databases. That is an assessment of the ownership outcome, not proof of technical failure. The official closing announcement does not disclose a transaction price.[^ss-close]

# Related
- [HTAP](/ideas/distributed-sql/htap.md), [TiDB](/systems/tidb.md)
- [Vector Capital buyout](/events/2025-09-singlestore-vector-capital-buyout.md)

[^ss-storage]: [SingleStore Universal Storage: multi-column keys and upserts in 7.5](https://www.singlestore.com/blog/singlestore-universal-storage-episode-4/).
[^ss-close]: [SingleStore: Vector Capital buyout closes, October 16, 2025](https://www.singlestore.com/blog/a-new-chapter-for-singlestore-accelerating-our-growth-with-vector-capital/).
[^ss-vector]: [Vector Capital: SingleStore investment](https://www.vectorcapital.com/investments/case-study/singlestore).
[^ss-rename]: [MemSQL changes name to SingleStore, October 27, 2020](https://www.businesswire.com/news/home/20201027005244/en/MemSQL-Changes-Name-to-SingleStore).
