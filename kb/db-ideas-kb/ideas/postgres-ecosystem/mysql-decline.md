---
type: Idea
title: "MySQL as the default open-source database (and its relative decline)"
description: "The LAMP-era assumption that MySQL (or MariaDB) is the default open-source OLTP database. Verdict: fading. MySQL is still huge in installed base, but Postgres passed it with developers in 2023. Oracle cut the core team in 2025 and folded the open-source team into its HeatWave cloud unit. MariaDB's commercial arm went through a failed SPAC and a take-private."
tags: [mysql, mariadb, oracle, governance, decline, postgres]
area: postgres-ecosystem
verdict: fading
hype_peak: 2008
adoption_2026: common
origins: "MySQL AB (1995), acquired by Sun (2008) and then Oracle (2010). MariaDB fork in 2009."
key_systems: [systems/mysql, systems/mariadb, systems/postgresql, systems/vitess, systems/planetscale, systems/tidb]
related_ideas: [ideas/postgres-ecosystem/just-use-postgres, ideas/postgres-ecosystem/postgres-hosting-consolidation, ideas/business-licensing/database-company-graveyard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: devclass-so2023
    resource: https://www.devclass.com/development/2023/06/13/postgresql-now-top-developer-choice-ahead-of-mysql-according-to-massive-new-survey/1623015
    title: "DevClass: PostgreSQL now top developer choice ahead of MySQL (2023-06-13)"
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
    title: "The Register: MySQL faithful launch OurSQL Foundation to keep Oracle honest (2026-05-26)"
    author: org:the-register
  - id: reg-governance
    resource: https://www.theregister.com/databases/2026/06/26/oracle-promises-to-open-up-mysql-governance-but-the-community-wants-guarantees/5263106
    title: "The Register: Oracle promises to open up MySQL governance, but community wants guarantees (2026-06-26)"
    author: org:the-register
  - id: reg-pg-oracle
    resource: https://www.theregister.com/databases/2026/08/19/postgres-pioneer-credits-oracle-with-helping-his-database-take-over-the-world/5289087
    title: "The Register: Postgres pioneer credits Oracle with helping his database take over the world (2026-08-19)"
    author: org:the-register
  - id: mariadb-spac
    resource: https://siliconangle.com/2022/12/19/mariadb-stock-drops-early-trading-following-ipo/
    title: "SiliconANGLE: MariaDB stock drops in early trading following IPO (2022-12-19)"
  - id: reg-mariadb-restructure
    resource: https://www.theregister.com/2023/10/13/mariadb_restructure/
    title: "The Register: MariaDB ditches products and 28% of workforce in restructure (2023-10-13)"
    author: org:the-register
  - id: k1-mariadb
    resource: https://www.marketscreener.com/quote/stock/MARIADB-PLC-124600271/news/K5-Private-Investors-L-P-managed-by-K1-Investment-Management-LLC-completed-the-acquisition-of-Mar-47455822/
    title: "MarketScreener: K1 completes acquisition of MariaDB plc (Sept 2024)"
  - id: ps-postgres
    resource: https://planetscale.com/blog/planetscale-for-postgres
    title: "PlanetScale: Announcing PlanetScale for Postgres (2025-07-01)"
    author: org:planetscale
  - id: cockroach-why-pg
    resource: https://www.cockroachlabs.com/blog/why-postgres/
    title: "Cockroach Labs: Why CockroachDB and PostgreSQL are compatible"
    author: org:cockroach-labs
---

# Summary
**Verdict: fading.** This is relative decline, not collapse. MySQL still runs a vast installed base: WordPress, the large web companies' fleets, Vitess/PlanetScale and the RDS/Aurora MySQL editions. But between 2018 and 2026 it lost its position as the default *new* open-source database. In the Stack Overflow survey, MySQL's lead (55.6% vs 36.1% three years earlier) flipped to Postgres 45.6% vs MySQL 41.1% in 2023[^devclass-so2023]. In 2025 the gap was 55.6% vs 40.5%[^so-2025]. In Sept 2025 Oracle laid off about 70 MySQL engineers and folded the open-source team into HeatWave[^reg-layoffs]. The public repo went nearly silent for two months[^heise-letter]. Community vendors formed the OurSQL Foundation (May 2026)[^reg-oursql], and Oracle promised an advisory steering committee (June 2026)[^reg-governance]. On the MariaDB side, the company's Dec 2022 SPAC listing fell almost 40% on day one[^mariadb-spac]. It cut 28% of staff and dropped SkySQL and Xpand in 2023[^reg-mariadb-restructure], and was taken private by K1 at $0.55 a share in 2024[^k1-mariadb].

# The idea
MySQL was the "M" in LAMP: fast, simple, easy to replicate, and the database most web developers learned first. The assumption was that it would remain the default open-source OLTP engine, with Oracle as a steward and MariaDB as the community-governed alternative.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | MySQL 8.0 GA (released April 2018) | + |
| 2020 | SO survey: MySQL 55.6% vs Postgres 36.1% (cited in 2023 coverage)[^devclass-so2023] | + |
| 2022 | MariaDB plc lists via SPAC, falls ~40% on day one, 99% of SPAC shares redeemed[^mariadb-spac] | − |
| 2023 | Postgres overtakes MySQL in SO survey (45.6% vs 41.1%)[^devclass-so2023]. MariaDB cuts 28%, drops SkySQL and Xpand[^reg-mariadb-restructure] | − |
| 2024 | K1 completes MariaDB take-private at $0.55/share[^k1-mariadb] | − |
| 2025 | PlanetScale, the leading MySQL/Vitess vendor, launches Postgres[^ps-postgres] | − |
| 2025 | Oracle lays off ~70 MySQL engineers (Sept)[^reg-layoffs] | − |
| 2026 | Open letter (Feb)[^heise-letter]. OurSQL Foundation (May)[^reg-oursql]. Oracle TSC promise (June)[^reg-governance] | +/− |
| 2026 | Stonebraker credits Oracle's stewardship of MySQL with helping Postgres win (Aug)[^reg-pg-oracle] | − |

# What succeeded
- **Installed base and scale tooling.** Vitess, TiDB and the managed MySQL services keep very large MySQL fleets running. MySQL is still the second most-used database among developers[^so-2025].
- **Collective response without a fork war.** Percona, PlanetScale, PingCAP, Alibaba and others organized the OurSQL Foundation instead of splitting into more forks, and pushed Oracle into governance concessions[^reg-oursql][^reg-governance].

# What failed
- **Stewardship.** Oracle develops MySQL behind closed doors with code drops. After the layoffs, signatories of the open letter said the team had been roughly halved[^heise-letter]. New features such as vectors and analytics go first to proprietary HeatWave[^reg-layoffs].
- **MariaDB as a business.** Public-market failure, restructuring and a take-private within two years[^mariadb-spac][^reg-mariadb-restructure][^k1-mariadb].
- **Mindshare with new builders.** Distributed SQL startups chose Postgres over MySQL for compatibility. Cockroach Labs cited MySQL's GPL, organic design and fragmented community[^cockroach-why-pg]. Even PlanetScale added Postgres[^ps-postgres].

# Why
- **Ownership by a competitor.** Oracle's commercial interest is Oracle Database and HeatWave, not a vibrant community MySQL. Postgres, owned by no one, absorbed the energy that MySQL's ecosystem might have had[^reg-pg-oracle].
- **Extensibility gap.** Postgres's extension model let it add vectors, GIS, time series and search. MySQL's plugin model is narrower, and new MySQL features mostly come from Oracle.
- **License and community fragmentation.** GPL plus the Oracle, MariaDB and Percona split discouraged companies from building on MySQL code[^cockroach-why-pg].
- **The fork never replaced the original.** MariaDB diverged enough to lose drop-in compatibility, and its company spent its energy on SkySQL and Xpand instead of the core server[^reg-mariadb-restructure].

# Lessons
- A permissive or copyleft license does not protect a project owned by one indifferent company. Neglect can do what relicensing does.
- Forks need a sustainable business and a clear compatibility promise. Otherwise they split mindshare without winning it.
- Developer defaults shift slowly and then suddenly. Survey crossovers lag the actual change in new projects by years.

# Related
- [MySQL](/systems/mysql.md), [MariaDB](/systems/mariadb.md), [PostgreSQL](/systems/postgresql.md), [Vitess](/systems/vitess.md), [PlanetScale](/systems/planetscale.md), [TiDB](/systems/tidb.md)
- [MariaDB SPAC listing](/events/2022-12-mariadb-spac-listing.md), [Oracle MySQL layoffs](/events/2025-09-oracle-mysql-layoffs.md), [Postgres tops Stack Overflow survey](/events/2023-06-postgres-tops-stack-overflow-survey.md)
- [Just use Postgres](/ideas/postgres-ecosystem/just-use-postgres.md)
