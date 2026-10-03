---
type: System
title: Crunchy Data
description: "Long-running PostgreSQL company (support, Kubernetes operator, Crunchy Bridge DBaaS, DuckDB-backed analytics) acquired by Snowflake for about $250M in June 2025. It became Snowflake Postgres, and the community tools it sponsored, notably pgBackRest, lost funding."
resource: https://www.crunchydata.com
tags: [postgres, dbaas, kubernetes, acquisition, snowflake]
kind: product
first_release: 2012
org: "Crunchy Data (acquired by Snowflake, 2025)"
outcome: acquired
ideas: [ideas/postgres-ecosystem/postgres-hosting-consolidation, ideas/postgres-ecosystem/analytics-inside-postgres]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cnbc-crunchy
    resource: https://www.cnbc.com/2025/06/02/snowflake-to-buy-crunchy-data-250-million.html
    title: "CNBC: Snowflake to buy Crunchy Data for about $250 million (2025-06-02)"
    author: org:cnbc
  - id: bdw-crunchy
    resource: https://www.hpcwire.com/bigdatawire/2025/06/04/why_snowflake_bought_crunchy_data/
    title: "BigDATAwire: Why Snowflake bought Crunchy Data (2025-06-04)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: snow-pg-preview
    resource: https://www.snowflake.com/en/engineering-blog/postgres-public-preview/
    title: "Snowflake: Snowflake Postgres public preview (2025-12-17)"
    author: org:snowflake
  - id: pg-lake
    resource: https://github.com/Snowflake-Labs/pg_lake
    title: "Snowflake-Labs/pg_lake (Apache-2.0, Nov 2025)"
    author: org:snowflake
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest gets backing after sole maintainer sounds alarm (2026-05-20)"
    author: org:the-register
  - id: anarchy
    resource: https://www.vldb.org/pvldb/vol18/p1962-kim.pdf
    title: "Kim, Slot (Crunchy Data), Andersen, Pavlo: Anarchy in the Database (PVLDB 2025)"
---

# Summary
Crunchy Data was one of the oldest US Postgres specialists. Pavlo called it a "13-year-old" company when Snowflake bought it[^pavlo-2025]. It sold enterprise Postgres support, ran one of the main Postgres Kubernetes operators, and offered Crunchy Bridge, a managed Postgres. In May 2024 it launched a proprietary "Bridge for Analytics" that routes Postgres queries to embedded DuckDB, later extended to geospatial[^pavlo-2024]. Snowflake announced it would buy Crunchy for about $250M at its June 2025 Summit[^cnbc-crunchy], to give Snowflake an operational Postgres for AI agents and apps[^bdw-crunchy]. Snowflake Postgres reached public preview in Dec 2025[^snow-pg-preview], and the Postgres-to-Iceberg work was open-sourced as `pg_lake` (Nov 2025)[^pg-lake]. Crunchy staff also did ecosystem research: Marco Slot co-authored the CMU extension-compatibility study[^anarchy].

# Timeline
| Date | Event |
|---|---|
| ~2012 | Founded[^pavlo-2025] |
| 2024-05 | Crunchy Bridge for Analytics (DuckDB inside Postgres)[^pavlo-2024] |
| 2025-06-02 | Snowflake agrees to acquire for ~$250M[^cnbc-crunchy] |
| 2025-11 | `pg_lake` open-sourced by Snowflake Labs[^pg-lake] |
| 2025-12-17 | Snowflake Postgres public preview[^snow-pg-preview] |
| 2026-05 | pgBackRest maintainer, previously Crunchy-sponsored, steps back until a vendor consortium funds him[^reg-pgbackrest] |

# What worked
- A long-running enterprise Postgres business with strong engineering credibility, which made it an attractive acquisition.
- Early, pragmatic use of DuckDB for analytics on Postgres and Iceberg[^pavlo-2024].

# What didn't
- Independent Postgres hosting was squeezed by hyperscalers on one side and well-funded developer platforms (Neon, Supabase) on the other. Selling to a data platform was the logical exit.
- The acquisition showed how much community infrastructure depended on Crunchy's payroll: pgBackRest was left unfunded until AWS, Percona, Supabase, pgEdge and Tiger Data stepped in[^reg-pgbackrest].

# Related
- [Postgres hosting consolidation](/ideas/postgres-ecosystem/postgres-hosting-consolidation.md), [Analytics inside Postgres](/ideas/postgres-ecosystem/analytics-inside-postgres.md)
- [Snowflake acquires Crunchy Data](/events/2025-06-snowflake-acquires-crunchy-data.md)
- [Snowflake](/systems/snowflake.md), [PostgreSQL](/systems/postgresql.md), [Neon](/systems/neon.md)
