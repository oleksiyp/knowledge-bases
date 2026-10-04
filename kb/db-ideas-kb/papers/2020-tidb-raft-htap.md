---
type: Paper
title: 'TiDB: A Raft-based HTAP Database'
description: TiDB combines row and column replicas through Raft-based replication, demonstrating fresh analytical access with
  physical workload specialization.
year: 2020
venue: PVLDB 13(12), 3072–3084
authors:
- Dongxu Huang
- Qi Liu
- Qiu Cui
- Zhuhe Fang
- Xiaoyu Ma
- Fei Xu
- Li Shen
- Liu Tang
- Yuxing Zhou
- Menglong Huang
- Wan Wei
- Cong Liu
- Jian Zhang
- Jianjun Li
- Xuelian Wu
- Lingyu Song
- Ruoxi Sun
- Shuaipeng Yu
- Lei Zhao
- Nicholas Cameron
- Liquan Pei
- Xin Tang
resource: https://dl.acm.org/doi/10.14778/3415478.3415535
impact: high
ideas:
- ideas/distributed-sql/htap
- ideas/distributed-sql/newsql-distributed-sql
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: vldb
  resource: https://dl.acm.org/doi/10.14778/3415478.3415535
  title: 'TiDB: A Raft-based HTAP Database (PVLDB 13(12), 2020)'
---

# Claim
TiDB separates transaction-oriented row replicas from analytical column replicas while maintaining a consistent view. TiKV handles the row-oriented path; TiFlash receives Raft logs as a learner and transforms the records into a columnar representation. The SQL layer can choose between them. The paper evaluates this architecture with mixed transactional and analytical workloads, including CH-benCHmark.[^vldb]

# What happened next
The paper documents an implemented database architecture rather than a promise that one universal layout will suit every query. Its importance is the combination of freshness with physical specialization: removing an application-managed ETL pipeline does not require running all work on identical replicas.[^vldb]

Our assessment is that this is a durable HTAP design lesson even where the marketing category remains contested. The benchmark establishes results for the evaluated setup; it cannot establish that customers no longer need data warehouses, that cross-source analytics belongs in an OLTP cluster, or that shared infrastructure is always cheaper. This distinction separates the success of a storage and replication technique from the much broader claim that one database can replace an organization's entire analytical stack.

# Related
- [TiDB](/systems/tidb.md), [HTAP](/ideas/distributed-sql/htap.md)

[^vldb]: [TiDB: A Raft-based HTAP Database (PVLDB 13(12), 2020)](https://dl.acm.org/doi/10.14778/3415478.3415535).
