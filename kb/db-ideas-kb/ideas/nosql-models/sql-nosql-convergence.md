---
type: Idea
title: "SQL and NoSQL converge (the relational model absorbs the NoSQL models)"
description: "By 2018–2026 the 'NoSQL vs SQL' split had largely collapsed. NoSQL systems added SQL dialects, transactions and schemas, and relational systems absorbed JSON, key-value, full-text, graph (SQL/PGQ) and vectors. The relational model won by absorption, as Stonebraker and Pavlo argued in 2024."
tags: [nosql, sql, json, convergence, relational-model, sql-pgq, polyglot-persistence]
area: nosql-models
verdict: won
hype_peak: 2024
adoption_2026: mainstream
origins: "NoSQL movement (2009); Postgres JSON (2012) and JSONB (2014); SQL:2016 JSON functions"
key_systems: [systems/postgresql, systems/mongodb, systems/documentdb, systems/cassandra, systems/dynamodb, systems/couchbase, systems/redis]
related_ideas: [ideas/nosql-models/document-databases, ideas/nosql-models/multi-model-databases, ideas/nosql-models/graph-databases, ideas/postgres-ecosystem/just-use-postgres, ideas/vector-ai/vector-search-as-a-feature]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: c5-primary
    resource: https://cassandra.apache.org/_/blog/Apache-Cassandra-5.0-Announcement.html
    title: "Apache Cassandra 5.0 announcement, September 5, 2024"
  - id: wgaca
    resource: https://db.cs.cmu.edu/papers/2024/whatgoesaround-sigmodrec2024.pdf
    title: "Stonebraker & Pavlo: What Goes Around Comes Around... And Around... (SIGMOD Record, June 2024)"
    author: person:andy-pavlo
  - id: sql2023
    resource: https://en.wikipedia.org/wiki/SQL:2023
    title: "SQL:2023 — Wikipedia (JSON type, SQL/PGQ)"
  - id: oracle-pgq
    resource: https://blogs.oracle.com/database/property-graphs-in-oracle-database-23ai-the-sql-pgq-standard
    title: "Oracle: Property graphs in Oracle Database 23ai — the SQL/PGQ standard"
    author: org:oracle
  - id: c5
    resource: https://www.bigdatawire.com/2024/09/09/apache-cassandra-5-0-brings-major-updates-with-enhanced-indexing-and-ai-capabilities/
    title: "BigDATAwire: Apache Cassandra 5.0 brings major updates (2024-09-09)"
  - id: jepsen-mdb
    resource: https://jepsen.io/analyses/mongodb-4.2.6
    title: "Jepsen: MongoDB 4.2.6 (2020)"
    author: person:kyle-kingsbury
  - id: lf-docdb
    resource: https://www.linuxfoundation.org/press/linux-foundation-welcomes-documentdb-to-advance-open-developer-first-nosql-innovation
    title: "Linux Foundation welcomes DocumentDB (2025-08-25)"
    author: org:linux-foundation
  - id: redis8
    resource: https://www.infoq.com/news/2025/05/redis-agpl-license/
    title: "InfoQ: Redis returns to open source under AGPL (Redis 8 merges Query Engine, JSON, time series into core)"
    author: org:infoq
  - id: pg19-revert
    resource: https://www.commandprompt.com/blog/two-features-just-left-postgresql-19/
    title: "Command Prompt: Two features just left PostgreSQL v19 (2026-09)"
---

# Summary

**Verdict: won, by absorption.** The defining fact of 2018–2026 for non-relational databases is that the sharp NoSQL/SQL boundary of 2009–2015 dissolved. From one side, NoSQL systems added what they had dropped: SQL-like languages (DynamoDB PartiQL, Cassandra CQL, Couchbase SQL++, MongoDB Atlas SQL in 2021)[^wgaca], multi-document transactions (MongoDB 4.0, 2018) and schema validation. From the other side, relational engines absorbed the NoSQL data models: JSONB and the SQL:2023 JSON type, graph pattern matching (SQL/PGQ, SQL:2023[^sql2023], shipped in Oracle 23ai[^oracle-pgq]), key-value access, full-text search and vectors. Stonebraker and Pavlo's 2024 survey summarized it: non-relational systems "are either a niche market or are fast becoming SQL/RM systems"[^wgaca]. In 2025 a prominent document-database project was a MongoDB-compatible API *on top of Postgres* (DocumentDB at the Linux Foundation)[^lf-docdb].

# The idea

The NoSQL thesis (around 2009) held that relational databases could not scale out, were too rigid for web data, and that SQL was the problem. Each workload would get its own specialized store ("polyglot persistence"). The convergence thesis says the data model and the query language are separable from the scale-out architecture. Once relational systems learned to shard (NewSQL, Spanner) and to store semi-structured data, most of the NoSQL advantage would disappear. Meanwhile NoSQL systems would find they needed declarative queries and transactions after all.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | MongoDB 4.0 adds multi-document ACID transactions | + convergence |
| 2019 | AWS releases PartiQL, a SQL-compatible language for DynamoDB, QLDB and S3 | + |
| 2020 | Jepsen shows MongoDB 4.2.6 transactions violate snapshot isolation in tested configurations, so bolted-on ACID is hard[^jepsen-mdb] | − |
| 2021 | MongoDB adds a SQL interface for Atlas, the "last holdout"[^wgaca] | + |
| 2023 | SQL:2023 adds a native JSON type and Part 16 SQL/PGQ (property graph queries)[^sql2023] | + |
| 2024 | Oracle 23ai ships SQL/PGQ and JSON-relational duality[^oracle-pgq]; Cassandra 5.0 adds storage-attached secondary indexes and vector search[^c5-primary]; Stonebraker & Pavlo publish "What Goes Around Comes Around... And Around..."[^wgaca] | + |
| 2025 | Redis 8 merges its query engine, JSON and time series into core[^redis8]; DocumentDB (Mongo API over Postgres) joins the Linux Foundation[^lf-docdb] | + |
| 2026 | PostgreSQL 19 commits SQL/PGQ, then reverts it before release[^pg19-revert] | − (delay) |

# What succeeded

- **JSON inside relational databases.** Relational engines can offer semi-structured data operations without a separate document system. DocumentDB on Postgres is a concrete example, though it does not establish why every MongoDB user chose its engine.[^lf-docdb]
- **SQL as the universal interface.** Almost every NoSQL system now offers a SQL dialect or SQL-inspired language. The survey emphasizes language convergence, while commands, guarantees and query coverage still differ.[^wgaca]
- **Transactions everywhere.** MongoDB, DynamoDB (transactions API, 2018) and Cassandra (lightweight transactions, Accord work) added stronger guarantees. These guarantees coexist with options that trade consistency for latency and availability; convergence is not identity of semantics.
- **Standards catching up.** SQL:2023 formalized JSON and property graphs, so vendors can converge on syntax rather than proprietary dialects[^sql2023].

# What failed

- **Polyglot persistence as default architecture.** Running five specialized stores for one application proved operationally costly. A smaller set of engines can reduce that burden. The sources do not establish that most teams abandoned polyglot persistence.
- **Bolting ACID onto non-ACID cores quickly.** Jepsen's MongoDB findings show retrofitted transactions can carry subtle anomalies for years[^jepsen-mdb].
- **Relational graph support in open source (so far).** SQL/PGQ took three years from standard to a Postgres commit, and was still pulled from Postgres 19[^pg19-revert]. Absorption is slower than the theory suggests.

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **Data independence wins over time.** The relational model separates logical queries from physical layout, so engines can add new storage and index types (GIN, columnar, HNSW) without changing applications. NoSQL systems that tied query capability to physical layout had to re-add declarative layers later[^wgaca].
2. **Scale-out stopped being exclusive to NoSQL.** Spanner, CockroachDB, Vitess, Citus and Aurora-style architectures gave SQL horizontal scale or enough vertical headroom, removing scale-out as an exclusive reason to reject SQL.
3. **Hardware moved the bar.** Single nodes with hundreds of cores and terabytes of RAM handle workloads that needed a NoSQL cluster in 2010.
4. **Ecosystem gravity.** BI tools, ORMs, data engineers and now LLMs all speak SQL. Any non-SQL interface pays a growing tax.

# Lessons

- Data models get absorbed and architectures persist. NoSQL's lasting contributions are its architectures (leaderless replication, LSM storage, partitioned scale-out), not its rejection of SQL.
- Before betting on a "new data model" database, ask how long it will take the leading relational engine to add it as a type plus an index. Compare an actual implementation roadmap and maturity evidence; no fixed absorption timetable is established here.
- Consolidation into fewer, more general engines is the steady-state trend. Specialized stores survive where the physical design differs fundamentally (search, wide-column at extreme scale, in-memory caches).

# Related

- [What Goes Around Comes Around... And Around...](/papers/2024-what-goes-around-comes-around-and-around.md)
- [PostgreSQL](/systems/postgresql.md), [MongoDB](/systems/mongodb.md), [DocumentDB](/systems/documentdb.md), [Cassandra](/systems/cassandra.md), [DynamoDB](/systems/dynamodb.md), [Couchbase](/systems/couchbase.md)
- [Document databases](/ideas/nosql-models/document-databases.md), [Multi-model databases](/ideas/nosql-models/multi-model-databases.md), [Graph databases](/ideas/nosql-models/graph-databases.md)
