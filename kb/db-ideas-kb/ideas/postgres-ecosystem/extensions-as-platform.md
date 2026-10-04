---
type: Idea
title: "Postgres extensions as a platform for new database products"
description: "Build new database capabilities and companies as PostgreSQL extensions (pgvector, TimescaleDB, Citus, PostGIS, ParadeDB, pg_duckdb, pgmq) instead of new engines. Verdict: won as a distribution channel, mixed as a business. Extensions spread fast but are fragile to combine, depend on what cloud providers allow, and rarely sustain a standalone company."
tags: [postgres, extensions, platform, open-core, licensing]
area: postgres-ecosystem
verdict: won
hype_peak: 2024
adoption_2026: mainstream
origins: "Postgres extension hooks and CREATE EXTENSION (9.1, 2011). PostGIS (2001) was the early proof."
key_systems: [systems/pgvector, systems/timescaledb, systems/citus, systems/paradedb, systems/pg-duckdb, systems/pgmq, systems/postgresql]
related_ideas: [ideas/postgres-ecosystem/just-use-postgres, ideas/postgres-ecosystem/analytics-inside-postgres, ideas/postgres-ecosystem/pluggable-storage-engines, ideas/business-licensing/source-available-licenses]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: anarchy
    resource: https://www.vldb.org/pvldb/vol18/p1962-kim.pdf
    title: "Kim, Slot, Andersen, Pavlo: Anarchy in the Database: A Survey and Evaluation of DBMS Extensibility (PVLDB 18(6), 2025)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: rds-pgvector
    resource: https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-rds-postgresql-pgvector-ml-model-integration/
    title: "AWS: Amazon RDS for PostgreSQL now supports pgvector (May 2023)"
    author: org:aws
  - id: ts-license-2020
    resource: https://blog.timescale.com/blog/building-open-source-business-in-cloud-era-v2/
    title: "Timescale: Building a self-sustaining open-source business in the cloud era (v2, Sept 2020)"
    author: org:timescale
  - id: tiger-rebrand
    resource: https://www.tigerdata.com/newsroom/timescale-becomes-tiger-data-defining-a-new-standard-as-the-fastest-postgresql-platform-for-modern-applications
    title: "Timescale Becomes Tiger Data (2025-06-17)"
    author: org:tiger-data
  - id: pgvectorscale
    resource: https://www.prnewswire.com/news-releases/postgresql-is-now-faster-than-pinecone-75-cheaper-with-new-open-source-extensions-302169146.html
    title: "Timescale press release: PostgreSQL is now faster than Pinecone, 75% cheaper (June 2024)"
    author: org:timescale
  - id: pg-analytics-archived
    resource: https://github.com/paradedb/pg_analytics
    title: "paradedb/pg_analytics (archived 2025-03-19)"
  - id: tembo-hn
    resource: https://news.ycombinator.com/item?id=44038896
    title: "HN: Tembo pivots to autonomous software maintenance; managed Postgres shutting down (May 2025)"
  - id: paradedb-blog
    resource: https://www.paradedb.com/blog
    title: "ParadeDB blog index (Series A July 2025)"
    author: org:paradedb
  - id: pavlo-x
    resource: https://x.com/andy_pavlo/status/1940855236014625123
    title: "Andy Pavlo on X: summary of the Anarchy in the Database paper"
    author: person:andy-pavlo
  - id: pg-duckdb-1
    resource: https://github.com/duckdb/pg_duckdb/releases/tag/v1.0.0
    title: "pg_duckdb v1.0.0 release (2025-09-04)"
---

# Summary
**Verdict: won as a distribution channel, mixed as a business model.** From 2018 to 2026 the Postgres extension API became the cheapest way to ship a "new database". Vector search (pgvector), time series (TimescaleDB), sharding (Citus), BM25 search (ParadeDB `pg_search`), analytics (pg_duckdb, pg_mooncake, pg_lake) and queues (pgmq) all arrived as extensions. Hyperscalers adopted the popular ones within months: RDS shipped pgvector in May 2023[^rds-pgvector]. Pavlo calls Postgres's extension ecosystem "the most expansive and diverse" of any DBMS[^pavlo-2024]. The costs are real, though. A study catalogued 441 extensions and dynamically tested 96; section 5.4 reports failures in 16.8% of tested extension pairs, including brittle tests as well as integration bugs[^anarchy]. The companies behind extensions mostly had to grow into full Postgres hosts (Timescale became Tiger Data), switch to restrictive licenses, or pivot away (Tembo).

# The idea
Extensions let a team add types, functions, index access methods, planner and executor hooks, background workers and even table storage, without forking the database. That gives three things:
1. **Instant distribution**: every Postgres user, driver, ORM and managed service is a potential customer.
2. **Inherited maturity**: WAL, replication, backup, auth and SQL come for free.
3. **Lower cost to build**: a vector index is "just a new access method and index data structure"[^pavlo-2023].

The business theory was open core: give away the extension, sell hosting or enterprise features.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | Timescale introduces the source-available Timescale License (TSL) for advanced features | +/− |
| 2020 | TSL revised: all features free, cloud providers still barred from offering them as a service[^ts-license-2020] | +/− |
| 2021 | pgvector released | + |
| 2023 | AWS RDS (May), then other clouds, add pgvector[^rds-pgvector]. pgvector 0.5 adds HNSW | + |
| 2023 | Pavlo: Postgres-derived systems add vector search via pgvector within a year of ChatGPT[^pavlo-2023] | + |
| 2024 | Timescale pgvectorscale claims 28x lower p95 latency than Pinecone (vendor benchmark)[^pgvectorscale] | + |
| 2024 | Four separate DuckDB-in-Postgres extensions appear[^pavlo-2024] | + |
| 2025 | VLDB paper: 441 extensions catalogued; 96 dynamically tested, with 16.8% of tested pairs failing[^anarchy] | − |
| 2025 | ParadeDB archives pg_analytics (Mar)[^pg-analytics-archived] and raises a $12M Series A for search (July)[^paradedb-blog] | +/− |
| 2025 | Tembo, an "extension-stack" Postgres host, shuts its managed service and pivots[^tembo-hn] | − |
| 2025 | Timescale renames itself Tiger Data, a general Postgres platform[^tiger-rebrand]. pg_duckdb 1.0[^pg-duckdb-1] | +/− |

# What succeeded
- **pgvector** is the standout. A one-person project became the standard Postgres vector type, shipped by every major cloud, and it weakened the dedicated vector-database market. See [pgvector](/systems/pgvector.md).
- **PostGIS, TimescaleDB, Citus** stayed category leaders for years. Their users never had to leave Postgres.
- **Speed of category entry.** Within a year of ChatGPT, Supabase, AlloyDB, Timescale and Neon all offered vector search[^pavlo-2023].
- **Search via extensions** gained traction: ParadeDB raised funding and shipped on PaaS marketplaces[^paradedb-blog].

# What failed
- **Composability.** Extensions share one address space and one set of hooks. Kim et al. found many copy core Postgres code, and pairwise testing exposes conflicts as well as brittle test-output comparisons[^anarchy]. Pavlo's summary on X: the Postgres ecosystem "is fraught w/ footguns"[^pavlo-x].
- **Cloud gatekeeping.** Managed services allow only extensions they have approved. Restrictive licenses (TSL, and AGPL for ParadeDB) keep the full product off RDS, Cloud SQL and Azure. The extension's reach is then limited by its vendor's own cloud.
- **Extension-only businesses.** Tembo's bet on "Postgres with curated extension stacks" ended in May 2025[^tembo-hn]. Timescale broadened into a general Postgres host[^tiger-rebrand]. ParadeDB folded its analytics extension into its search extension[^pg-analytics-archived].
- **Duplication.** Four DuckDB-in-Postgres projects in one year, plus vendor-specific vector extensions (pgvectorscale, pg_embedding and others), split effort.

# Why
- **The API is powerful but low-level.** Hooks give access to the planner, executor and storage, so ambitious extensions effectively patch the server. That power is what makes conflicts and upgrade breakage common[^anarchy].
- **Value goes to whoever operates the database.** If AWS can run your Apache-licensed extension, you capture little revenue. If AWS cannot, you lose distribution. Timescale's license history shows this squeeze[^ts-license-2020].
- **Some extensions are features, not products.** An extension can reuse much of the host engine, lowering category-entry cost; production search quality and performance still require engineering[^pavlo-2023].

# Lessons
- An extension API is the cheapest way to enter a database market. It is also the cheapest way for incumbents to commoditize you.
- Extension isolation (sandboxing, declared dependencies, stable APIs) matters as much as extension power. DuckDB's cleaner API was rated better in the same study[^anarchy].
- Extension companies need to own the hosting surface or pick a license strategy early. Retrofitting either is painful.

# Related
- [pgvector](/systems/pgvector.md), [TimescaleDB](/systems/timescaledb.md), [Citus](/systems/citus.md), [ParadeDB](/systems/paradedb.md), [pg_duckdb](/systems/pg-duckdb.md), [pgmq](/systems/pgmq.md)
- [Anarchy in the Database (2025)](/papers/2025-anarchy-in-the-database.md)
- [Analytics inside Postgres](/ideas/postgres-ecosystem/analytics-inside-postgres.md), [Pluggable storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md), [Source-available licenses](/ideas/business-licensing/source-available-licenses.md)
- [pgvector 0.5 adds HNSW](/events/2023-08-pgvector-hnsw.md)
