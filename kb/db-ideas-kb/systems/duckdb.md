---
type: System
title: DuckDB
description: "MIT-licensed in-process analytical database from CWI ('SQLite for analytics'), the defining success of single-node analytics. 1.0 in June 2024, embedded everywhere, with IP held by the DuckDB Foundation. AWS acquired its developer company DuckLabs in Aug 2026."
resource: https://duckdb.org
tags: [olap, embedded, single-node, vectorized, mit, foundation]
kind: oss
first_release: 2019
org: "DuckDB Foundation (IP); DuckLabs (developers; acquired by AWS 2026)"
license: MIT
outcome: thriving
ideas: [ideas/analytics-lakehouse/single-node-analytics, ideas/analytics-lakehouse/composable-data-systems, ideas/analytics-lakehouse/catalog-wars]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: duckdb-1
    resource: https://duckdb.org/2024/06/03/announcing-duckdb-100
    title: "Announcing DuckDB 1.0.0 (2024-06-03)"
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckLabs to Join AWS, Projects to Remain Open Source (2026-08-26)"
  - id: reg-aws-duck
    resource: https://www.theregister.com/databases/2026/08/26/aws-buys-ducklabs-the-people-behind-the-popular-in-process-olap-database/5292590
    title: "The Register: AWS buys DuckLabs (2026-08-26)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: ducklake-10
    resource: https://duckdb.org/2026/04/13/ducklake-10
    title: "DuckLake v1.0 (2026-04-13)"
  - id: duckdb-substrait
    resource: https://github.com/duckdb/duckdb/pull/15810
    title: "DuckDB PR #15810: remove Substrait from core (Jan 2025)"
---

# Summary

DuckDB, created by Mark Raasveldt and Hannes Mühleisen at CWI Amsterdam, is a vectorized columnar SQL engine that runs inside the host process (Python, R, Java, WASM and others) with no server. It reads Parquet, CSV and JSON locally or from S3. DuckDB 1.0.0 "Snow Duck" (2024-06-03) guaranteed storage-format backward compatibility after almost six years of development[^duckdb-1]. Its embeddability produced a wave of integrations. In 2024 alone four separate projects put DuckDB inside Postgres[^pavlo-2024]. In 2025–2026 the team launched DuckLake, a lakehouse format with SQL-database metadata (1.0 in Apr 2026)[^ducklake-10]. On 2026-08-26 DuckLabs (formerly DuckDB Labs) announced it would join AWS. The projects stay MIT under the non-profit DuckDB Foundation, which will add a stakeholder advisory board[^duck-aws][^reg-aws-duck].

# Timeline

| Year | Event |
|---|---|
| 2019 | First public releases; SIGMOD demo |
| 2021 | DuckDB Labs and DuckDB Foundation founded |
| 2024 | 1.0 (June)[^duckdb-1]; pg_duckdb and other Postgres integrations[^pavlo-2024] |
| 2025 | Substrait moved out of core[^duckdb-substrait]; DuckLake launched |
| 2026 | DuckLake 1.0[^ducklake-10]; AWS acquires DuckLabs[^duck-aws] |

# What worked

- Zero-dependency install, excellent SQL ergonomics and very fast single-node performance.
- MIT licence plus foundation-held IP drove ubiquity and survived an acquisition.

# What didn't

- Single-writer, in-process design limits shared multi-user use (addressed via MotherDuck and DuckLake).
- The commercial value accrued to others (MotherDuck, AWS) more than to an independent DuckDB company.

# Related

- [Single-node analytics](/ideas/analytics-lakehouse/single-node-analytics.md) · [MotherDuck](/systems/motherduck.md) · [DuckLake](/systems/ducklake.md) · [pg_duckdb](/systems/pg-duckdb.md)
- [DuckDB 1.0](/events/2024-06-duckdb-1-0.md) · [AWS acquires DuckLabs](/events/2026-08-aws-acquires-ducklabs.md)
