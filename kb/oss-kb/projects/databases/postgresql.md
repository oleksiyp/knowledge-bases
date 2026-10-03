---
type: OSS Project
title: PostgreSQL
description: "The community-governed relational database that became the default substrate of the AI-agent era; 2024-2026 brought PG 18 (async I/O), $1B+ of Postgres-company M&A and record adoption, tempered by thin maintainer funding for critical tooling."
resource: https://www.postgresql.org
tags: [rdbms, postgres, postgresql-license, community-governed, ai-agents]
domain: databases
license: PostgreSQL
license_history: ["PostgreSQL License (1996-)"]
governance: community
steward: PostgreSQL Global Development Group
backing_orgs: [organizations/supabase, organizations/neon, organizations/tiger-data, organizations/planetscale]
metrics:
  github_stars_mirror: { value: 22264, as_of: 2026-10-03 }
  stackoverflow_usage_all_respondents_pct: { value: 55.6, as_of: "2025-07" }
  stackoverflow_usage_professional_pct: { value: 58.2, as_of: "2025-07" }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pg18-release
    resource: https://www.postgresql.org/about/news/postgresql-18-released-3142/
    title: "PostgreSQL 18 Released!"
    author: org:postgresql
  - id: pg-news
    resource: https://www.postgresql.org/about/newsarchive/
    title: PostgreSQL news archive (PostgreSQL 19 Beta 4, 2026-09-24)
    author: org:postgresql
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: Stack Overflow Developer Survey 2025 — Technology
    author: org:stackoverflow
  - id: reg-pg19-graph
    resource: https://www.theregister.com/databases/2026/09/04/postgresql-19-connects-the-dots-with-standardized-graph-queries/5294500
    title: "The Register: PostgreSQL 19 connects the dots with standardized graph queries"
    author: org:the-register
  - id: reg-pg19-pulled
    resource: https://www.theregister.com/databases/2026/09/15/postgresql-19-graph-queries-fail-the-would-you-ship-this-test/5296343
    title: "The Register: PostgreSQL 19 graph queries fail the 'would you ship this?' test"
    author: org:the-register
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: PostgreSQL backup tool gets some backup of its own after sole maintainer sounds alarm"
    author: org:the-register
  - id: yahoo-neon
    resource: https://finance.yahoo.com/news/databricks-buy-startup-neon-1-094745186.html
    title: "Reuters/Yahoo: Databricks to buy Neon for $1 billion"
  - id: cnbc-crunchy
    resource: https://www.cnbc.com/2025/06/02/snowflake-to-buy-crunchy-data-250-million.html
    title: "CNBC: Snowflake to buy database startup Crunchy Data for about $250 million"
    author: org:cnbc
  - id: supabase-series-f
    resource: https://supabase.com/blog/supabase-series-f
    title: Supabase Series F
    author: org:supabase
  - id: clickhouse-wiki
    resource: https://www.businesswire.com/news/home/20260122173204/en/ClickHouse-Announces-Native-Postgres-Service-Offering-a-Unified-Data-Stack-for-Real-Time-and-AI-Driven-Applications
    title: "BusinessWire: ClickHouse Announces Native Postgres Service (2026-01-22)"
  - id: reg-pg-oracle
    resource: https://www.theregister.com/databases/2026/08/19/postgres-pioneer-credits-oracle-with-helping-his-database-take-over-the-world/5289087
    title: "The Register: Postgres pioneer credits Oracle with helping his database take over the world"
    author: org:the-register
---

# Summary
PostgreSQL is the clear winner of the 2024-2026 database cycle. It is the most-used database among developers (55.6% of all respondents, 58.2% of professionals in the 2025 Stack Overflow survey)[^so-2025]. PostgreSQL 18 (Sept 25, 2025) added an asynchronous I/O subsystem with up to 3x faster reads from storage[^pg18-release]. The money around it was even more striking: Databricks paid about $1B for Neon[^yahoo-neon], Snowflake paid about $250M for Crunchy Data[^cnbc-crunchy], Supabase was valued at $10.5B[^supabase-series-f], and ClickHouse launched a managed Postgres. The weak spots are maintainer funding for critical tools (pgBackRest nearly lost its only maintainer after the Crunchy sale[^reg-pgbackrest]) and the conservative release process, which pulled SQL/PGQ graph queries out of PG 19[^reg-pg19-pulled].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-14 | Databricks agrees to buy Neon (~$1B) [^yahoo-neon] | Business | + |
| W24 | 2025-06-02 | Snowflake agrees to buy Crunchy Data (~$250M) [^cnbc-crunchy] | Business | + |
| W24 | 2025-07 | SO survey: Postgres used by 55.6% of respondents [^so-2025] | OSS | + |
| W24 | 2025-09-25 | PostgreSQL 18 released (async I/O, virtual generated columns, OAuth) [^pg18-release] | OSS | + |
| W9 | 2026-01-22 | ClickHouse announces a managed Postgres service (with Ubicloud) [^clickhouse-wiki] | Business | + |
| W6 | 2026-05-20 | Vendor consortium (AWS, Percona, Supabase, pgEdge, Tiger Data) funds pgBackRest after sole maintainer steps back [^reg-pgbackrest] | OSS | +/− |
| W6 | 2026-06-04 | Supabase $500M Series F at $10.5B post [^supabase-series-f] | Business | + |
| W3 | 2026-09-04 | PG 19 slated to ship SQL/PGQ graph queries [^reg-pg19-graph] | OSS | + |
| W3 | 2026-09-15 | SQL/PGQ pulled from PG 19 over bug risk [^reg-pg19-pulled] | OSS | − |
| W3 | 2026-09-24 | PostgreSQL 19 Beta 4 [^pg-news] | OSS | flat |

# OSS successes
- PG 18's async I/O (io_uring on Linux, worker fallback elsewhere) gave up to 3x speedups on storage reads[^pg18-release].
- Community governance, the permissive license and no single-vendor owner made Postgres the "safe" base that hyperscalers, Databricks, Snowflake, ClickHouse and startups could all build on. Even Michael Stonebraker credits Oracle's handling of MySQL for helping Postgres win[^reg-pg-oracle].
- PG 19 adds concurrent REPACK, which reclaims disk without exclusive locks[^reg-pg19-pulled].

# OSS failures / risks
- Critical ecosystem tools still hang on single maintainers. pgBackRest's maintainer of 13 years could not find a sponsor after Snowflake bought Crunchy Data[^reg-pgbackrest].
- SQL/PGQ graph queries were removed from PG 19 late in the cycle[^reg-pg19-pulled]. That shows the project choosing stability over feature velocity.
- Vendors are rebuilding Postgres's storage layer in proprietary ways (Neon/Lakebase, Aurora-style systems, PlanetScale Neki), which fragments the ecosystem.

# Business successes
- Postgres companies drew the largest database M&A of the period: Neon (~$1B), Crunchy Data (~$250M)[^yahoo-neon][^cnbc-crunchy]. They also drew the largest database startup valuation, Supabase at $10.5B[^supabase-series-f].
- "Postgres for AI agents" became a category of its own. See [Neon](/projects/databases/neon.md) and [Supabase](/projects/databases/supabase.md).

# Business failures / risks
- When small Postgres support companies are acquired, the open-source work their staff did often loses funding (Crunchy → pgBackRest)[^reg-pgbackrest].

# By window
## W3
- PG 19 Beta 4 on 2026-09-24. Graph queries (SQL/PGQ) pulled from the release[^pg-news][^reg-pg19-pulled].
## W6
- pgBackRest rescued by a vendor consortium[^reg-pgbackrest]. Supabase raises at $10.5B[^supabase-series-f].
## W9
- ClickHouse enters managed Postgres[^clickhouse-wiki].
## W12
- PG 18 adoption cycle under way. No notable governance events found.
## W24
- Neon and Crunchy Data acquisitions. PG 18 released[^yahoo-neon][^cnbc-crunchy][^pg18-release].

# Lessons
- A neutral, community-governed core with a permissive license can attract every competitor as a contributor and distributor. Single-vendor databases cannot do this.
- Commercial value goes to companies that run Postgres operations as a service (serverless, branching, agent provisioning), not to the core project. That leaves ecosystem tooling chronically underfunded.

# Related
- [Supabase](/projects/databases/supabase.md), [Neon](/projects/databases/neon.md), [TimescaleDB](/projects/databases/timescaledb.md), [ParadeDB](/projects/databases/paradedb.md), [OrioleDB](/projects/databases/orioledb.md), [Vitess/PlanetScale](/projects/databases/vitess.md), [Xata](/projects/databases/xata.md)
- [/events/2025-05-databricks-acquires-neon.md](/events/2025-05-databricks-acquires-neon.md), [/events/2025-06-snowflake-acquires-crunchy-data.md](/events/2025-06-snowflake-acquires-crunchy-data.md), [/events/2025-09-postgresql-18-release.md](/events/2025-09-postgresql-18-release.md), [/events/2026-05-pgbackrest-consortium-rescue.md](/events/2026-05-pgbackrest-consortium-rescue.md)
- [MySQL](/projects/databases/mysql.md) (the counter-example)

[^pg18-release]: PostgreSQL Global Development Group, "PostgreSQL 18 Released!", 2025-09-25.
[^pg-news]: PostgreSQL news archive, PostgreSQL 19 Beta 4, 2026-09-24.
[^so-2025]: Stack Overflow Developer Survey 2025.
[^reg-pg19-graph]: The Register, 2026-09-04.
[^reg-pg19-pulled]: The Register, 2026-09-15.
[^reg-pgbackrest]: The Register, 2026-05-20.
[^yahoo-neon]: Reuters via Yahoo Finance, 2025-05-14.
[^cnbc-crunchy]: CNBC, 2025-06-02.
[^supabase-series-f]: Supabase blog, 2026-06-04.
[^clickhouse-wiki]: BusinessWire, 2026-01-22 (pass 2: replaced Wikipedia source).
[^reg-pg-oracle]: The Register, 2026-08-19.
