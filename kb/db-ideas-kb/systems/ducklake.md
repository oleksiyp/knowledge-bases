---
type: System
title: DuckLake
description: "Open lakehouse format from the DuckDB team (May 2025; 1.0 April 2026). It stores all table and catalog metadata in a SQL database (Postgres, MySQL, SQLite, DuckDB) instead of files in object storage. A sharp critique of Iceberg's design, with early-stage adoption."
resource: https://ducklake.select
tags: [lakehouse, table-format, catalog, duckdb]
kind: oss
first_release: 2025
org: "DuckDB Foundation / DuckLabs"
license: MIT
outcome: growing
ideas: [ideas/analytics-lakehouse/catalog-wars, ideas/analytics-lakehouse/open-table-formats, ideas/analytics-lakehouse/single-node-analytics]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ducklake-01
    resource: https://ducklake.select/2025/05/27/ducklake-01/
    title: "DuckLake: SQL as a Lakehouse Format (2025-05-27)"
  - id: reg-ducklake
    resource: https://www.theregister.com/2025/05/28/duckdb_flips_lakehouse_model_with/
    title: "The Register: DuckDB flips lakehouse model (2025-05-28)"
  - id: ducklake-10
    resource: https://duckdb.org/2026/04/13/ducklake-10
    title: "DuckLake v1.0 (2026-04-13)"
  - id: infoq-ducklake
    resource: https://www.infoq.com/news/2026/05/ducklake-sql-catalog/
    title: "InfoQ: DuckLake 1.0 — data lake format with SQL catalog metadata (May 2026)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

DuckLake, announced on 2025-05-27 as "SQL as a Lakehouse Format", keeps data in Parquet on object storage but puts *all* metadata (snapshots, schemas, file lists, statistics) in an ordinary transactional SQL database. That database can be PostgreSQL, MySQL, SQLite or DuckDB, and no custom catalog server is needed[^ducklake-01][^reg-ducklake]. The argument is that Iceberg and Delta already need a database-backed catalog for atomic commits, so keeping the rest of the metadata in files only adds latency, small-file churn and complexity. DuckLake 1.0 (2026-04-13) added a production-ready spec, data inlining for small writes, sorted tables, bucket partitioning and Iceberg-compatible deletion vectors, with backward-compatibility guarantees[^ducklake-10][^infoq-ducklake]. Pavlo noted it "seeks to upend Iceberg"[^pavlo-2025].

# Timeline

| Year | Event |
|---|---|
| 2025 | 0.1 announced (May 27)[^ducklake-01] |
| 2026 | 1.0 (Apr 13)[^ducklake-10]; v1.1 expected Sept 2026 |

# What worked

- It is a much simpler design that handles frequent small commits well, and it runs from a laptop to the cloud.

# What didn't (yet)

- Engine support outside DuckDB is limited compared with Iceberg's ecosystem, and it arrived after the industry had already converged on Iceberg.

# Related

- [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md) · [DuckDB](/systems/duckdb.md) · [Apache Iceberg](/systems/apache-iceberg.md) · [DuckLake launch](/events/2025-05-ducklake-launch.md)
