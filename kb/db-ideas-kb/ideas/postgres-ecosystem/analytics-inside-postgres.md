---
type: Idea
title: "Analytics inside Postgres (DuckDB and lakehouse extensions)"
description: "Embed a vectorized analytical engine (usually DuckDB) or an Iceberg/lake bridge in Postgres so one database serves OLTP and analytics. Verdict: mixed. Four competing extensions appeared in 2024, one reached 1.0, the startups were bought by Databricks and Snowflake for their Postgres-to-lakehouse plumbing, and serious analytics still runs in a separate engine."
tags: [postgres, htap, duckdb, iceberg, extensions, analytics]
area: postgres-ecosystem
verdict: mixed
hype_peak: 2024
adoption_2026: niche
origins: "Citus columnar and cstore_fdw (2014–2021). HTAP as a Gartner term (2014)."
key_systems: [systems/pg-duckdb, systems/paradedb, systems/crunchy-data, systems/duckdb, systems/motherduck, systems/citus, systems/postgresql]
related_ideas: [ideas/postgres-ecosystem/extensions-as-platform, ideas/distributed-sql/htap, ideas/analytics-lakehouse/lakehouse, ideas/postgres-ecosystem/postgres-hosting-consolidation]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pg-duckdb-1
    resource: https://github.com/duckdb/pg_duckdb/releases/tag/v1.0.0
    title: "pg_duckdb v1.0.0 release (2025-09-04)"
  - id: md-pgduckdb-1
    resource: https://motherduck.com/blog/pg-duckdb-release/
    title: "MotherDuck: Announcing pg_duckdb version 1.0"
    author: org:motherduck
  - id: pg-analytics-archived
    resource: https://github.com/paradedb/pg_analytics
    title: "paradedb/pg_analytics (archived 2025-03-19)"
  - id: dbx-mooncake
    resource: https://www.databricks.com/en/blog/mooncake-labs-joins-databricks-accelerate-vision-lakebase
    title: "Databricks: Mooncake Labs joins Databricks to accelerate the vision of Lakebase (2025-10-01)"
    author: org:databricks
  - id: cnbc-crunchy
    resource: https://www.cnbc.com/2025/06/02/snowflake-to-buy-crunchy-data-250-million.html
    title: "CNBC: Snowflake to buy Crunchy Data for about $250 million (2025-06-02)"
    author: org:cnbc
  - id: pg-lake
    resource: https://github.com/Snowflake-Labs/pg_lake
    title: "Snowflake-Labs/pg_lake (Apache-2.0, Nov 2025)"
    author: org:snowflake
  - id: ch-postgres
    resource: https://www.businesswire.com/news/home/20260122173204/en/ClickHouse-Announces-Native-Postgres-Service-Offering-a-Unified-Data-Stack-for-Real-Time-and-AI-Driven-Applications
    title: "BusinessWire: ClickHouse announces native Postgres service (2026-01-22)"
  - id: thebuild-field-guide
    resource: https://thebuild.com/blog/a-field-guide-to-alternative-storage-engines-for-postgresql/
    title: "Christophe Pettus: A Field Guide to Alternative Storage Engines for PostgreSQL (2026-05-08)"
  - id: anarchy
    resource: https://www.vldb.org/pvldb/vol18/p1962-kim.pdf
    title: "Kim et al.: Anarchy in the Database (PVLDB 2025)"
---

# Summary
**Verdict: mixed.** 2024 was the year of "put DuckDB in Postgres". Pavlo counted four separate efforts between May and November 2024: Crunchy Data's proprietary Bridge for Analytics, ParadeDB's `pg_analytics`, the official `pg_duckdb` (DuckDB Labs with MotherDuck and Hydra), and Mooncake's `pg_mooncake`, which writes Iceberg tables transactionally[^pavlo-2024]. By 2026 the field had thinned out. ParadeDB archived pg_analytics in Mar 2025[^pg-analytics-archived]. pg_duckdb reached 1.0 in Sept 2025[^pg-duckdb-1]. Crunchy (June 2025, ~$250M) went to Snowflake[^cnbc-crunchy] and Mooncake (Oct 2025) to Databricks[^dbx-mooncake], both for their Postgres-to-lakehouse plumbing, not as standalone analytics engines. ClickHouse took the opposite approach: a managed Postgres plus CDC into ClickHouse[^ch-postgres]. The technique works for moderate analytics on operational data and for querying Parquet/Iceberg from Postgres. It did not replace the warehouse.

# The idea
Postgres's row-oriented executor is slow for large scans and aggregations. Instead of ETL into a warehouse, embed a columnar, vectorized engine inside Postgres, either through planner hooks (pg_duckdb) or foreign data wrappers (pg_analytics). Use it to query Postgres tables and data-lake files (Parquet, Iceberg, Delta) in one SQL statement, and optionally write analytics-friendly copies in open formats. It is HTAP delivered as an extension, without building a new database.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2021–23 | Citus columnar and Hydra columnar table access methods (append-only)[^thebuild-field-guide] | + |
| 2024 | May: Crunchy Bridge for Analytics routes Postgres queries to DuckDB (proprietary)[^pavlo-2024] | + |
| 2024 | June: ParadeDB pg_analytics. Aug: pg_duckdb announced. Nov: pg_mooncake[^pavlo-2024] | + |
| 2025 | Mar: pg_analytics archived. Analytics folded into pg_search[^pg-analytics-archived] | − |
| 2025 | June: Snowflake buys Crunchy Data (~$250M)[^cnbc-crunchy] | + |
| 2025 | Sept: pg_duckdb 1.0 declared production-ready[^pg-duckdb-1][^md-pgduckdb-1] | + |
| 2025 | Oct: Databricks acquires Mooncake Labs for Lakebase[^dbx-mooncake]. Nov: Snowflake open-sources pg_lake[^pg-lake] | + |
| 2026 | Jan: ClickHouse launches managed Postgres with native CDC into ClickHouse[^ch-postgres] | +/− |

# What succeeded
- **Reading the lake from Postgres.** Querying Parquet/Iceberg on S3 from Postgres became routine (pg_duckdb, pg_lake)[^pg-duckdb-1][^pg-lake].
- **Order-of-magnitude speedups** on analytical queries over Postgres tables, at least in vendor benchmarks. That matters for dashboards inside applications.
- **Strategic value.** The teams and code became the bridge between operational Postgres and lakehouse platforms. That is why Snowflake and Databricks bought them[^cnbc-crunchy][^dbx-mooncake].

# What failed
- **Fragmentation.** Four overlapping projects in one year, with reported disagreements over who controlled pg_duckdb (Pavlo notes Microsoft and Neon "allegedly" left that effort)[^pavlo-2024]. One of the four was shut down within a year[^pg-analytics-archived].
- **Running two engines in one process.** DuckDB inside a Postgres backend has to reconcile memory limits, type systems, transactions and extension conflicts, the class of problems Kim et al. measured[^anarchy].
- **Not a warehouse.** Heavy, concurrent analytics still runs separately: ClickHouse, Snowflake and Databricks all market Postgres *plus* their engine linked by CDC, not Postgres alone[^ch-postgres].

# Why
- DuckDB made a world-class vectorized engine embeddable and MIT-licensed, which made the integration cheap to try. The low barrier is also why four teams did it at once.
- The real prize turned out to be **data movement** (Postgres ↔ open table formats), which lakehouse vendors value. Faster Postgres queries matter less to them.
- Workload isolation still argues for separate systems. Long analytical scans on the OLTP primary compete for CPU, memory and I/O, so production setups often run them on replicas or in a separate engine.

# Lessons
- Embedding a best-in-class engine through an extension is a fast way to prototype HTAP. Long-term ownership and process-level integration are the hard parts.
- In data infrastructure, technology that moves data between ecosystems is often acquired for its strategic value, regardless of whether it won as a product.

# Related
- [pg_duckdb](/systems/pg-duckdb.md), [ParadeDB](/systems/paradedb.md), [Crunchy Data](/systems/crunchy-data.md), [DuckDB](/systems/duckdb.md), [MotherDuck](/systems/motherduck.md), [Citus](/systems/citus.md)
- [Snowflake acquires Crunchy Data](/events/2025-06-snowflake-acquires-crunchy-data.md)
- [HTAP](/ideas/distributed-sql/htap.md), [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md), [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md)
