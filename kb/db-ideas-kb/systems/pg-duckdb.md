---
type: System
title: pg_duckdb
description: "Official DuckDB extension for PostgreSQL (DuckDB Labs with MotherDuck and Hydra) that runs analytical queries in embedded DuckDB and reads Parquet/Iceberg/Delta from Postgres. It reached 1.0 in Sept 2025 and outlasted three competing DuckDB-in-Postgres efforts."
resource: https://github.com/duckdb/pg_duckdb
tags: [postgres, extension, duckdb, analytics, htap, lakehouse]
kind: oss
first_release: 2024
org: "DuckDB Labs, MotherDuck, Hydra"
license: MIT
outcome: growing
ideas: [ideas/postgres-ecosystem/analytics-inside-postgres, ideas/postgres-ecosystem/extensions-as-platform]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pgd-gh
    resource: https://github.com/duckdb/pg_duckdb
    title: "duckdb/pg_duckdb GitHub repository"
  - id: pg-duckdb-1
    resource: https://github.com/duckdb/pg_duckdb/releases/tag/v1.0.0
    title: "pg_duckdb v1.0.0 release (2025-09-04)"
  - id: md-pgduckdb-1
    resource: https://motherduck.com/blog/pg-duckdb-release/
    title: "MotherDuck: Announcing pg_duckdb version 1.0"
    author: org:motherduck
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary
pg_duckdb embeds DuckDB's vectorized engine in a Postgres backend. Analytical queries over Postgres tables, and over Parquet, Iceberg or Delta files in object storage, run in DuckDB and return through the normal Postgres connection[^pgd-gh]. Announced in August 2024 as the "officially sanctioned" DuckDB extension, it was built by DuckDB Labs with MotherDuck and Hydra. Pavlo reports that Microsoft and Neon "allegedly" left the effort over who would control development[^pavlo-2024]. Version 1.0 (Sept 4 2025) was declared production-ready, with parallel table scans, broader type support and reworked MotherDuck integration[^pg-duckdb-1][^md-pgduckdb-1]. Of the four DuckDB-in-Postgres efforts of 2024 (Crunchy Bridge for Analytics, ParadeDB pg_analytics, pg_duckdb, pg_mooncake), it is the only independent open-source one still on its original path. The others were archived or acquired[^pavlo-2024].

# Timeline
| Date | Event |
|---|---|
| 2024-08 | Announced (DuckDB Labs, MotherDuck, Hydra)[^pavlo-2024] |
| 2025-09-04 | v1.0.0 "ready for production"[^pg-duckdb-1] |

# What worked
- Big analytical speedups without ETL for moderate data sizes, plus SQL access to the data lake from Postgres.
- Backing from the DuckDB core team gave it legitimacy over forks and FDW-based alternatives.
- It doubles as an on-ramp to MotherDuck's cloud. That gives a commercial sponsor a reason to keep investing.

# What didn't
- Running a second engine inside Postgres raises memory, type-mapping and transaction-semantics issues. It also complicates managed-service support, since not every cloud allows it.
- The fragmented 2024 launch (four competing projects) diluted early adoption.
- Heavy concurrent analytics still belongs on a separate engine or replica.

# Related
- [Analytics inside Postgres](/ideas/postgres-ecosystem/analytics-inside-postgres.md)
- [DuckDB](/systems/duckdb.md), [MotherDuck](/systems/motherduck.md), [ParadeDB](/systems/paradedb.md), [Crunchy Data](/systems/crunchy-data.md)
