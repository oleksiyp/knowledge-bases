---
type: System
title: TiDB
description: "MySQL-compatible distributed SQL database from PingCAP, built on the TiKV Raft key-value store, with TiFlash columnar replicas for HTAP. It is the most-starred project in the category and still Apache 2.0. In 2025 it was re-architected onto object storage as TiDB X and repositioned around AI agents."
resource: https://www.pingcap.com
tags: [distributed-sql, newsql, mysql-compatible, htap, tikv, raft, apache-2]
kind: oss
first_release: 2017
org: "PingCAP"
license: Apache-2.0
outcome: stable
ideas: [ideas/distributed-sql/newsql-distributed-sql, ideas/distributed-sql/htap, ideas/distributed-sql/jepsen-correctness-culture, ideas/cloud-architecture/object-storage-native-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pc-d
    resource: https://www.pingcap.com/press-release/pingcap-the-company-behind-tidb-raises-270-million-in-series-d-funding/
    title: "PingCAP raises $270M Series D (2020-11-17)"
    author: org:pingcap
  - id: vldb
    resource: https://dl.acm.org/doi/10.14778/3415478.3415535
    title: "TiDB: A Raft-based HTAP Database (PVLDB 13(12), 2020)"
  - id: j-tidb
    resource: https://jepsen.io/analyses/tidb-2.1.7
    title: "Jepsen: TiDB 2.1.7 (2019-06)"
  - id: tidbx
    resource: https://www.pingcap.com/blog/introducing-tidb-x-a-new-foundation-distributed-sql-ai-era/
    title: "PingCAP: Introducing TiDB X (2025-10)"
    author: org:pingcap
  - id: tns-tidbx
    resource: https://thenewstack.io/tidb-x-open-source-database/
    title: "The New Stack: S3 is the new network, TiDB X"
  - id: deloitte
    resource: https://www.globenewswire.com/news-release/2025/11/19/3190869/0/en/PingCAP-Ranked-Number-125-Fastest-Growing-Company-in-North-America-on-the-2025-Deloitte-Technology-Fast-500.html
    title: "PingCAP ranked No. 125 on 2025 Deloitte Technology Fast 500 (2025-11-19)"
  - id: gh
    resource: https://github.com/pingcap/tidb
    title: "GitHub: pingcap/tidb"
---

# Summary
TiDB splits into a stateless SQL layer (MySQL protocol), TiKV (a Raft-replicated, RocksDB-based transactional KV store following Percolator, now a CNCF project), PD (placement and timestamps) and TiFlash (columnar learner replicas). Its VLDB 2020 paper was among the first detailed descriptions of a distributed HTAP architecture[^vldb]. PingCAP raised $270M in Nov 2020 (about $342M in total)[^pc-d]. Jepsen found in 2019 that its default auto-retry caused lost updates and read skew, and TiDB 3.0 turned auto-retry off by default[^j-tidb]. In Oct 2025 PingCAP announced TiDB X, which moves all data to object storage (S3) with fully separated compute and storage, marketed for AI-agent workloads[^tidbx][^tns-tidbx]. PingCAP reported 675% revenue growth on the 2025 Deloitte Fast 500 (base not disclosed)[^deloitte].

# Timeline
| Date | Event |
|---|---|
| 2019-06 | Jepsen: lost updates by default. Fixed in 3.0[^j-tidb] |
| 2020 | VLDB HTAP paper. $270M Series D (Nov)[^vldb][^pc-d] |
| 2025-10 | TiDB X on object storage announced[^tidbx] |
| 2025-11 | Deloitte Fast 500 listing[^deloitte] |

# What worked
- Open development under Apache 2.0, with about 40.6k GitHub stars, the most in the category[^gh].
- Heavy adoption by large internet companies, especially in Asia.
- TiKV became a reusable building block in its own right.

# What didn't
- HTAP did not become the category its marketing expected (see [HTAP](/ideas/distributed-sql/htap.md)).
- The Western market grew slowly compared with Cockroach and Spanner. Its 2025 pivot to an object-storage architecture and an AI-agent pitch suggests the original positioning had stalled (our assessment).

# Related
- [HTAP](/ideas/distributed-sql/htap.md), [NewSQL](/ideas/distributed-sql/newsql-distributed-sql.md), [RocksDB](/systems/rocksdb.md), [SingleStore](/systems/singlestore.md)
- Papers: [TiDB HTAP paper](/papers/2020-tidb-raft-htap.md)

[^pc-d]: PingCAP press release, 2020-11-17.
[^vldb]: Huang et al., PVLDB 13(12), 2020.
[^j-tidb]: Jepsen, June 2019.
[^tidbx]: PingCAP blog, Oct 2025.
[^tns-tidbx]: The New Stack, 2025.
[^deloitte]: GlobeNewswire, 2025-11-19.
[^gh]: GitHub, checked 2026-10-03.
