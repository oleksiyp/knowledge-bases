---
type: Paper
title: 'FoundationDB: A Distributed Unbundled Transactional Key Value Store'
description: A production account of unbundled transactional storage and deterministic simulation, influential both as database
  infrastructure and as an engineering method.
year: 2021
venue: SIGMOD 2021
authors:
- Jingyu Zhou
- Meng Xu
- Alexander Shraer
- Bala Namasivayam
- Alex Miller
- Evan Tschannen
- Steve Atherton
- Andrew J. Beamon
- Rusty Sears
- John Leach
- Dave Rosenthal
- Xin Dong
- Will Wilson
- Ben Collins
- David Scherer
- Alec Grieser
- Young Liu
- Alvin Moore
- Bhaskar Muppana
- Xiaoge Su
- Vishesh Yadav
resource: https://www.foundationdb.org/files/fdb-paper.pdf
impact: high
ideas:
- ideas/distributed-sql/transactional-kv-core-and-layers
- ideas/distributed-sql/deterministic-simulation-testing
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: fdb-paper
  resource: https://www.foundationdb.org/files/fdb-paper.pdf
  title: 'FoundationDB: A Distributed Unbundled Transactional Key Value Store (SIGMOD 2021)'
- id: datadog-husky
  resource: https://www.datadoghq.com/blog/engineering/husky-deep-dive/
  title: 'Datadog: Husky, exactly-once ingestion and multi-tenancy at scale'
  author: org:datadog
- id: warpstream-dst
  resource: https://www.warpstream.com/blog/deterministic-simulation-testing-for-our-entire-saas
  title: 'WarpStream: Deterministic Simulation Testing for our entire SaaS'
  author: org:warpstream
---

# Claim
FoundationDB decomposes transactional storage into independently provisioned subsystems and exposes an ordered key-value API with strict serializability. Its integrated simulator runs real database code against controlled fault behavior. The 2021 paper describes these decisions together with production use at Apple and Snowflake.[^fdb-paper]

# What happened next
Later engineering accounts support two distinct lines of influence. Datadog describes using FoundationDB for Husky's metadata, while WarpStream describes adopting deterministic simulation for its own service.[^datadog-husky][^warpstream-dst] A team can therefore reuse the database itself or carry its testing discipline into a different architecture.

Our assessment is that this is a landmark implementation paper because it connects a narrow interface, an operational design and a way of gaining confidence in changes. Its lesson is not that query layers are easy: an application-facing database still needs indexing, query planning, schema evolution and tools above the transactional substrate. Likewise, a simulator's value depends on which faults and workloads it represents. The paper's production evidence supports the core architecture; it does not by itself validate every proposed layer or every later product inspired by its testing approach.

# Related
- [FoundationDB](/systems/foundationdb.md), [Transactional KV layers](/ideas/distributed-sql/transactional-kv-core-and-layers.md)
- [Deterministic simulation](/ideas/distributed-sql/deterministic-simulation-testing.md)

[^fdb-paper]: [FoundationDB: A Distributed Unbundled Transactional Key Value Store (SIGMOD 2021)](https://www.foundationdb.org/files/fdb-paper.pdf).
[^datadog-husky]: [Datadog: Husky, exactly-once ingestion and multi-tenancy at scale](https://www.datadoghq.com/blog/engineering/husky-deep-dive/).
[^warpstream-dst]: [WarpStream: Deterministic Simulation Testing for our entire SaaS](https://www.warpstream.com/blog/deterministic-simulation-testing-for-our-entire-saas).
