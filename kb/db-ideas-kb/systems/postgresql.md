---
type: System
title: PostgreSQL
description: "Community-governed open-source relational database (PostgreSQL License) that became the default database of 2018–2026: most-used in developer surveys, the interface hyperscalers and startups copy, and the target of $1B+ in acquisitions."
resource: https://www.postgresql.org
tags: [rdbms, postgres, open-source, community-governed, extensions]
kind: oss
first_release: 1996
org: "PostgreSQL Global Development Group (community)"
license: PostgreSQL
outcome: thriving
ideas: [ideas/postgres-ecosystem/just-use-postgres, ideas/postgres-ecosystem/extensions-as-platform, ideas/postgres-ecosystem/postgres-compatibility-standard, ideas/postgres-ecosystem/pluggable-storage-engines, ideas/postgres-ecosystem/postgres-hosting-consolidation, ideas/postgres-ecosystem/mysql-decline]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pg12
    resource: https://www.postgresql.org/about/news/postgresql-12-released-1976/
    title: "PostgreSQL 12 Released! (2019-10-03)"
    author: org:postgresql
  - id: pg18
    resource: https://www.postgresql.org/about/news/postgresql-18-released-3142/
    title: "PostgreSQL 18 Released! (2025-09-25)"
    author: org:postgresql
  - id: dbe-2023
    resource: https://db-engines.com/en/blog_post/106
    title: "DB-Engines: PostgreSQL is the DBMS of the Year 2023"
    author: org:db-engines
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stackoverflow
  - id: devclass-so2023
    resource: https://www.devclass.com/development/2023/06/13/postgresql-now-top-developer-choice-ahead-of-mysql-according-to-massive-new-survey/1623015
    title: "DevClass: PostgreSQL now top developer choice ahead of MySQL (2023)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: reg-pg19-pulled
    resource: https://www.theregister.com/databases/2026/09/15/postgresql-19-graph-queries-fail-the-would-you-ship-this-test/5296343
    title: "The Register: PostgreSQL 19 graph queries fail the 'would you ship this?' test (2026-09-15)"
    author: org:the-register
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest gets backing after sole maintainer sounds alarm (2026-05-20)"
    author: org:the-register
  - id: infoq-openai
    resource: https://www.infoq.com/news/2026/02/openai-runs-chatgpt-postgres
    title: "InfoQ: OpenAI runs ChatGPT on PostgreSQL (Feb 2026)"
    author: org:infoq
---

# Summary
PostgreSQL is the clearest database winner of 2018–2026. DB-Engines named it DBMS of the Year in 2017, 2018, 2020 and 2023[^dbe-2023]. It passed MySQL in the Stack Overflow survey in 2023[^devclass-so2023] and was used by 55.6% of respondents in 2025[^so-2025]. Its release train delivered a pluggable table-storage API (PG 12, 2019)[^pg12] and an asynchronous I/O subsystem with up to 3x faster storage reads (PG 18, Sept 2025)[^pg18]. Its wire protocol and dialect became the interface new databases imitate. Pavlo's 2025 review: "Most of the database energy and activity is going into PostgreSQL companies, offerings, projects, and derivative systems"[^pavlo-2025]. Weak spots: no built-in write scale-out, VACUUM and bloat, a conservative process (SQL/PGQ graph queries pulled from PG 19 in Sept 2026[^reg-pg19-pulled]), and underfunded critical tools[^reg-pgbackrest].

# Timeline
| Date | Event |
|---|---|
| 2019-10-03 | PG 12: pluggable table storage interface, generated columns[^pg12] |
| 2023-06 | Overtakes MySQL in Stack Overflow survey[^devclass-so2023] |
| 2024-01 | DB-Engines DBMS of the Year 2023 (fourth time)[^dbe-2023] |
| 2025-09-25 | PG 18: async I/O, skip scan, OAuth, virtual generated columns[^pg18] |
| 2026-02 | OpenAI describes ChatGPT on a single-primary Postgres with ~50 replicas[^infoq-openai] |
| 2026-05 | Vendor consortium funds pgBackRest maintainer[^reg-pgbackrest] |
| 2026-09 | SQL/PGQ removed from PG 19 late in the cycle[^reg-pg19-pulled] |

# What worked
- **Neutral governance and a permissive license**, so every cloud and startup can build on it without enriching a rival.
- **Extensibility** (types, index methods, hooks) let it absorb vectors, GIS, time series and search.
- **Steady annual major releases** with a reputation for correctness. Very large deployments run on a single primary[^infoq-openai].

# What didn't
- **Write scale-out** still depends on add-ons (Citus, Multigres, Neki, PgDog) or forks[^pavlo-2025].
- **Storage architecture.** Heap plus VACUUM is the main operational pain, and efforts to replace it have stalled. See [Pluggable storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md).
- **Ecosystem funding.** Critical tools depend on a few people at small companies[^reg-pgbackrest].

# Related
- [Just use Postgres](/ideas/postgres-ecosystem/just-use-postgres.md), [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md), [Postgres compatibility](/ideas/postgres-ecosystem/postgres-compatibility-standard.md)
- [PostgreSQL 18 release](/events/2025-09-postgresql-18-async-io.md), [PG 12 table access methods](/events/2019-10-postgresql-12-table-access-methods.md)
- [pgvector](/systems/pgvector.md), [Supabase](/systems/supabase.md), [EDB](/systems/edb.md), [MySQL](/systems/mysql.md)
