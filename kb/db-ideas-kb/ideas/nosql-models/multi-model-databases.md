---
type: Idea
title: "Native multi-model databases"
description: "One engine serving documents, graphs, key-value, and later vectors and time series. As standalone products, multi-model databases stayed niche: OrientDB was orphaned, ArangoDB retreated to a BSL license, and SurrealDB corrected its disk-sync defaults. The concept won inside Postgres (extensions) and Cosmos DB (many APIs on one storage engine)."
tags: [multi-model, arangodb, surrealdb, cosmos-db, orientdb, postgres-extensions]
area: nosql-models
verdict: niche
hype_peak: 2023
adoption_2026: niche
origins: "OrientDB (2010), ArangoDB (2011), Gartner/Forrester 'multi-model' framing c. 2015; Cosmos DB (2017)"
key_systems: [systems/arangodb, systems/surrealdb, systems/cosmos-db, systems/postgresql, systems/couchbase]
related_ideas: [ideas/nosql-models/sql-nosql-convergence, ideas/nosql-models/graph-databases, ideas/postgres-ecosystem/just-use-postgres]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: durability
    resource: https://surrealdb.com/surrealdb/benchmarks
    title: "SurrealDB benchmark methodology and disk-sync defaults"
  - id: orient-wiki
    resource: https://en.wikipedia.org/wiki/OrientDB
    title: "OrientDB — Wikipedia (CallidusCloud 2017, SAP 2018, ArcadeDB 2021)"
  - id: arango-bsl
    resource: https://arangodb.com/2023/10/evolving-arangodbs-licensing-model-for-a-sustainable-future/
    title: "ArangoDB: Evolving ArangoDB's licensing model for a sustainable future (2023-10)"
    author: org:arangodb
  - id: surreal-20m
    resource: https://siliconangle.com/2024/06/18/multi-model-database-startup-surrealdb-raises-20m-announces-cloud-beta-access/
    title: "SiliconANGLE: Multi-model database startup SurrealDB raises $20M (2024-06-18)"
  - id: surreal-3
    resource: https://tech.eu/2026/02/17/surrealdb-secures-23m-and-launches-surrealdb-3-0-to-address-ai-agent-memory-challenges/
    title: "Tech.eu: SurrealDB secures $23M and launches SurrealDB 3.0 (2026-02-17)"
  - id: surreal-fsync
    resource: https://blog.cf8.gg/surrealdbs-ch/
    title: "SurrealDB is sacrificing data durability to make benchmarks look better (2025-08-23)"
  - id: surreal-3x
    resource: https://surrealdb.com/blog/surrealdb-3-x-by-the-numbers
    title: "SurrealDB: SurrealDB 3.x by the numbers"
    author: org:surrealdb
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: azure-docdb
    resource: https://devblogs.microsoft.com/cosmosdb/announced-at-ignite-2025-azure-documentdb-mcp-toolkit-fleet-analytics-and-more/
    title: "Azure Cosmos DB blog: Announced at Ignite 2025"
    author: org:microsoft
---

# Summary

**Verdict: niche as a product category; the idea won elsewhere.** The pitch of one database for documents, graphs, key-value (and later vectors, time series and full-text) appealed to architects tired of running five stores. From 2018 to 2026 the pure-play multi-model vendors struggled. OrientDB passed through CallidusCloud to SAP, lost commercial support, and its creator left to start ArcadeDB in 2021[^orient-wiki]. ArangoDB moved from Apache 2.0 to BSL 1.1 in 2023 and capped its free community binaries at 100 GB[^arango-bsl]. SurrealDB raised $44M in total and shipped 3.0 in February 2026[^surreal-3], but was publicly criticized in 2025 for defaulting to no fsync, so its benchmark numbers described a non-durable configuration[^surreal-fsync][^pavlo-2025]. The multi-model idea also appeared in two other forms. Postgres became multi-model through extensions (JSONB, PostGIS, pgvector, TimescaleDB, Apache AGE), and Azure Cosmos DB put multiple wire APIs on one globally distributed storage engine.

# The idea

The bet was that a single engine and query language (AQL, SurrealQL, OrientDB SQL) could natively store and query several data models without "polyglot persistence" and its ETL, consistency gaps and operational sprawl. Joins across models (for example, a graph traversal that returns documents) would be first-class.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | SAP acquires CallidusCloud, and with it OrientDB[^orient-wiki] | − |
| 2021 | SAP stops commercial OrientDB support; founder Luca Garulli leaves and starts ArcadeDB[^orient-wiki] | − |
| 2022–23 | SurrealDB (Rust, "database for the web") publishes source-available betas and reaches 1.0, gaining a large developer following | + |
| 2023 | ArangoDB 3.12 moves to BSL 1.1; community binaries limited to 100 GB per cluster and non-commercial use (Oct)[^arango-bsl] | − |
| 2024 | SurrealDB raises $20M Series A, launches Surreal Cloud beta (Jun)[^surreal-20m] | + |
| 2025 | SurrealDB's default `SURREAL_SYNC_DATA=false` (no fsync) draws public criticism (Aug)[^surreal-fsync]; Microsoft rebrands Cosmos DB's vCore MongoDB API as Azure DocumentDB (Nov)[^azure-docdb] | − |
| 2026 | SurrealDB 3.0 GA with fsync on by default and a $23M extension, repositioned as "AI agent memory" (Feb)[^surreal-3][^durability] | mixed |

# What succeeded

- **Multi-model by extension (Postgres).** One battle-tested transactional core plus extensions covers documents, geo, vectors, time series and (via AGE) graphs. It gives most of the multi-model benefit with a far larger ecosystem.
- **Multi-API over one storage engine (Cosmos DB).** Cosmos DB put NoSQL/SQL, MongoDB, Cassandra, Gremlin and Table APIs on shared partitioned storage with SLAs. It is a successful commercial pattern, while the separate vCore MongoDB offering used the Postgres-based engine and was renamed Azure DocumentDB[^azure-docdb].
- **Developer enthusiasm for SurrealDB.** A single binary with built-in auth, live queries and graph edges attracted a large community and repeat funding[^surreal-3].

# What failed

- **"Native" multi-model as a business.** OrientDB was orphaned and ArangoDB went source-available with tight free-tier limits[^arango-bsl]. Neither became a mainstream default.
- **Depth across every model.** A broad feature list does not prove competitive traversal, search relevance and transactional behavior simultaneously. Each model needs separate workload tests; no cited benchmark establishes that all multi-model engines are second-best.
- **Trust.** SurrealDB's non-durable default is an example of a durability configuration that must be made explicit in performance claims. It was fixed in 3.x[^durability], but public criticism is documented; its commercial effect is not quantified[^pavlo-2025].

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **Storage engines specialize.** Graph traversal, columnar scans, inverted indexes and point lookups want different layouts. A generic engine (often RocksDB underneath) compromises on each.
2. **The incumbent became extensible.** Postgres's extension API let the community add models one by one inside a trusted core, so "multi-model" turned into a property of Postgres rather than a new category.
3. **New query languages are a tax.** AQL and SurrealQL had to fight SQL's ecosystem (drivers, BI tools, ORMs, LLM familiarity).
4. **Funding cycles.** Multi-model startups needed a hook. The 2024–26 one is "AI agent memory" and RAG (vectors + graph + documents), the same reframing every NoSQL vendor made.

# Lessons

- "One database for everything" usually ends up being the most extensible general-purpose database, not a new one.
- Breadth must not come at the cost of durability defaults. Benchmarks without fsync come back to haunt you.
- Wire-API compatibility (Cosmos DB) is a more practical route to multi-model than inventing a new query language.

# Related

- [ArangoDB](/systems/arangodb.md), [SurrealDB](/systems/surrealdb.md), [Azure Cosmos DB](/systems/cosmos-db.md), [PostgreSQL](/systems/postgresql.md), [Couchbase](/systems/couchbase.md)
- [Graph databases](/ideas/nosql-models/graph-databases.md), [SQL/NoSQL convergence](/ideas/nosql-models/sql-nosql-convergence.md)
