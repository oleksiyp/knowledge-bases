---
type: System
title: MySQL
description: "Oracle-owned open-source relational database (GPL-2.0 plus commercial). Still a top-two database by usage, but it lost the developer default to Postgres in 2023. Oracle's Sept 2025 layoffs set off a 2026 governance crisis and the OurSQL Foundation."
resource: https://www.mysql.com
tags: [rdbms, mysql, oracle, gpl, governance]
kind: oss
first_release: 1995
org: "Oracle Corporation"
license: "GPL-2.0 + commercial"
outcome: struggling
ideas: [ideas/postgres-ecosystem/mysql-decline]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: devclass-so2023
    resource: https://www.devclass.com/development/2023/06/13/postgresql-now-top-developer-choice-ahead-of-mysql-according-to-massive-new-survey/1623015
    title: "DevClass: PostgreSQL now top developer choice ahead of MySQL (2023)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stackoverflow
  - id: reg-layoffs
    resource: https://www.theregister.com/2025/09/11/oracle_slammed_for_mysql_job/
    title: "The Register: Monty Widenius 'heartbroken' over Oracle's MySQL job cuts (2025-09-11)"
    author: org:the-register
  - id: heise-letter
    resource: https://www.heise.de/en/news/Can-MySQL-still-be-saved-Open-letter-to-Oracle-11181146.html
    title: "heise: Can MySQL still be saved? Open letter to Oracle (Feb 2026)"
  - id: reg-oursql
    resource: https://www.theregister.com/databases/2026/05/26/mysql-faithful-launch-oursql-foundation-to-keep-oracle-honest/5246451
    title: "The Register: MySQL faithful launch OurSQL Foundation (2026-05-26)"
    author: org:the-register
  - id: reg-governance
    resource: https://www.theregister.com/databases/2026/06/26/oracle-promises-to-open-up-mysql-governance-but-the-community-wants-guarantees/5263106
    title: "The Register: Oracle promises to open up MySQL governance (2026-06-26)"
    author: org:the-register
  - id: ps-postgres
    resource: https://planetscale.com/blog/planetscale-for-postgres
    title: "PlanetScale: Announcing PlanetScale for Postgres (2025-07-01)"
    author: org:planetscale
---

# Summary
MySQL's 2018–2026 story is relative decline through stewardship. Its license never changed. MySQL 8.0 (2018) was a strong release, but Oracle's focus moved to the proprietary HeatWave cloud. Developers moved too: in the Stack Overflow survey Postgres passed MySQL in 2023 (45.6% vs 41.1%)[^devclass-so2023], and by 2025 the split was 55.6% vs 40.5%[^so-2025]. In Sept 2025 Oracle laid off about 70 MySQL engineers and folded the open-source team into HeatWave[^reg-layoffs]. Between Dec 2025 and Feb 2026 the public repo saw almost no commits. About 200 signatories, led by Percona, asked for a neutral foundation[^heise-letter]. Percona, PlanetScale, PingCAP, Alibaba and others then launched the OurSQL Foundation (May 2026)[^reg-oursql]. Oracle answered with a technical steering committee including AWS and Google Cloud and public roadmap discussions. Critics noted the community's role remains advisory[^reg-governance].

# Timeline
| Date | Event |
|---|---|
| 2018-04 | MySQL 8.0 GA |
| 2023-06 | Falls behind Postgres in SO survey[^devclass-so2023] |
| 2025-07 | PlanetScale, the largest MySQL/Vitess startup, launches Postgres[^ps-postgres] |
| 2025-09 | ~70 engineers laid off[^reg-layoffs] |
| 2026-02 | Open letter[^heise-letter] |
| 2026-05-26 | OurSQL Foundation[^reg-oursql] |
| 2026-06-26 | Oracle governance promises[^reg-governance] |

# What worked
- Huge installed base, simple replication, and mature scale-out tooling (Vitess, TiDB-compatible ecosystems).
- The ecosystem organized collectively instead of forking again[^reg-oursql].

# What didn't
- Development behind closed doors with code drops, a shrinking team, and new features reserved for HeatWave[^reg-layoffs][^heise-letter].
- Narrower extensibility than Postgres. Vectors, GIS and search did not grow a third-party ecosystem.
- Lost new-project mindshare, including its own ecosystem vendors hedging with Postgres[^ps-postgres].

# Related
- [MySQL decline](/ideas/postgres-ecosystem/mysql-decline.md)
- [Oracle MySQL layoffs](/events/2025-09-oracle-mysql-layoffs.md)
- [MariaDB](/systems/mariadb.md), [Vitess](/systems/vitess.md), [PlanetScale](/systems/planetscale.md), [TiDB](/systems/tidb.md), [PostgreSQL](/systems/postgresql.md)
