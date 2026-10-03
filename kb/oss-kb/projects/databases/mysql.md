---
type: OSS Project
title: MySQL
description: "Oracle-owned GPL database in visible decline. About 70 core engineers were laid off (Sept 2025), the public repo went quiet, and the community responded with an open letter and the OurSQL Foundation (May 2026), which pushed Oracle into a still-advisory governance promise (June 2026)."
resource: https://github.com/mysql/mysql-server
tags: [rdbms, gpl-2.0, single-vendor, oracle, governance-crisis]
domain: databases
license: GPL-2.0 (with commercial dual license)
license_history: ["GPL-2.0 + commercial (Oracle since 2010)"]
governance: single-vendor
steward: Oracle
backing_orgs: []
metrics:
  github_stars: { value: 12440, as_of: 2026-10-03 }
  stackoverflow_usage_all_respondents_pct: { value: 40.5, as_of: "2025-07" }
oss_verdict: crisis
business_verdict: struggling
momentum_by_window: { W3: flat, W6: up, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-layoffs
    resource: https://www.theregister.com/2025/09/11/oracle_slammed_for_mysql_job/
    title: "The Register: Monty Widenius 'heartbroken' over Oracle's MySQL job cuts"
    author: org:the-register
  - id: heise-letter
    resource: https://www.heise.de/en/news/Can-MySQL-still-be-saved-Open-letter-to-Oracle-11181146.html
    title: "heise: Can MySQL still be saved? Open letter to Oracle"
  - id: reg-letter
    resource: https://www.theregister.com/2026/02/17/mysql_foundation_oracle_letter/
    title: "The Register: Dear Oracle, we need to talk about the future of MySQL"
    author: org:the-register
  - id: reg-new-era
    resource: https://www.theregister.com/software/2026/02/16/oracle-promises-new-approach-to-mysql/4507849
    title: "The Register: Oracle vows 'new era' for MySQL as users sharpen their forks"
    author: org:the-register
  - id: reg-reassure
    resource: https://www.theregister.com/software/2026/03/10/oracle-moves-to-assure-mysql-community-it-really-does-care/5225671
    title: "The Register: Oracle moves to assure MySQL community it really does care"
    author: org:the-register
  - id: reg-oursql
    resource: https://www.theregister.com/databases/2026/05/26/mysql-faithful-launch-oursql-foundation-to-keep-oracle-honest/5246451
    title: "The Register: MySQL faithful launch OurSQL Foundation to keep Oracle honest"
    author: org:the-register
  - id: reg-governance
    resource: https://www.theregister.com/databases/2026/06/26/oracle-promises-to-open-up-mysql-governance-but-the-community-wants-guarantees/5263106
    title: "The Register: Oracle promises to open up MySQL governance, but community wants guarantees"
    author: org:the-register
  - id: mysql-gh
    resource: https://github.com/mysql/mysql-server
    title: mysql-server GitHub mirror (commit history)
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: Stack Overflow Developer Survey 2025
---

# Summary
MySQL is the clearest open-source failure among major databases in this period. The trouble is stewardship, not the license. In Sept 2025 Oracle laid off about 70 members of the MySQL development team and folded the open-source team into HeatWave, its proprietary cloud unit[^reg-layoffs]. By Feb 2026 the public mysql-server repo had received a single commit since Dec 7 2025. Nearly 200 developers, users and companies, led by Percona, then signed an open letter asking Oracle to create a neutral foundation[^heise-letter][^reg-letter]. When Oracle offered only reassurances[^reg-new-era][^reg-reassure], Percona, PlanetScale, PingCAP, Alibaba and others launched the OurSQL Foundation (May 26 2026)[^reg-oursql]. Oracle then promised a technical steering committee with AWS and Google Cloud and public roadmap discussions (June 26 2026). Critics note the community's role is only advisory[^reg-governance]. MySQL is still widely used (40.5% of SO 2025 respondents) but trails Postgres (55.6%)[^so-2025].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09 (week of 8th) | Oracle lays off ~70 MySQL engineers. OSS team folded into HeatWave [^reg-layoffs] | Business/OSS | − |
| W12 | 2025-12-07 → 2026-02 | Only one public commit to mysql-server [^heise-letter] | OSS | − |
| W9 | 2026-02-16 | Oracle vows a "new era" for MySQL [^reg-new-era] | Governance | +/− |
| W9 | 2026-02-17 | Open letter (~200 signatories, Percona-led) asks for a foundation [^reg-letter][^heise-letter] | Governance | +/− |
| W9 | 2026-03-10 | Oracle moves to reassure the community [^reg-reassure] | Governance | flat |
| W6 | 2026-05-26 | OurSQL Foundation launched (Percona, PlanetScale, PingCAP, VillageSQL, Alibaba) [^reg-oursql] | Governance | + |
| W6 | 2026-06-26 | Oracle announces TSC (Oracle, AWS, Google Cloud), public roadmap, contributor summits [^reg-governance] | Governance | + |
| W3 | 2026-09 | Public commits resume, including a feature-contribution issue template (2026-09-01) [^mysql-gh] | OSS | + |

# OSS successes
- Community pressure worked to a degree. Oracle conceded a TSC and public roadmap discussions[^reg-governance], and public GitHub activity resumed in Sept 2026[^mysql-gh].
- Ecosystem vendors (Percona, PlanetScale/Vitess, PingCAP/TiDB) organized collectively instead of fragmenting into forks[^reg-oursql].

# OSS failures / risks
- Development happens through private code drops with an opaque security process. Staff were cut by roughly half, per letter signatories[^heise-letter].
- Governance stays advisory. Oracle keeps the trademark, IP and final say, and Microsoft is absent from the TSC[^reg-governance].

# Business successes
- Oracle's HeatWave strategy captures the commercial value. No positive community-edition business signals were found.

# Business failures / risks
- MySQL-based vendors (Percona, PlanetScale, MariaDB) face an upstream that may stagnate. PlanetScale's move to Postgres hedges against this; see [Vitess](/projects/databases/vitess.md).

# By window
## W3
- Public GitHub activity resumes under the new contribution process[^mysql-gh].
## W6
- OurSQL Foundation. Oracle governance promise[^reg-oursql][^reg-governance].
## W9
- Open letter. Oracle "new era" and reassurance statements[^reg-letter][^reg-new-era][^reg-reassure].
## W12
- Public repo nearly silent[^heise-letter].
## W24
- Core team layoffs[^reg-layoffs].

# Lessons
- A permissive or copyleft license is not enough. A project owned by one indifferent corporation can decline through neglect alone, without any relicensing.
- A coordinated vendor foundation can extract concessions without forking. Whether those concessions are binding is still untested.

# Related
- [/events/2025-09-oracle-mysql-layoffs.md](/events/2025-09-oracle-mysql-layoffs.md), [/events/2026-05-oursql-foundation-mysql-governance.md](/events/2026-05-oursql-foundation-mysql-governance.md)
- [MariaDB](/projects/databases/mariadb.md), [Vitess](/projects/databases/vitess.md), [TiDB](/projects/databases/tidb.md), [PostgreSQL](/projects/databases/postgresql.md)

[^reg-layoffs]: The Register, 2025-09-11.
[^heise-letter]: heise online, Feb 2026.
[^reg-letter]: The Register, 2026-02-17.
[^reg-new-era]: The Register, 2026-02-16.
[^reg-reassure]: The Register, 2026-03-10.
[^reg-oursql]: The Register, 2026-05-26.
[^reg-governance]: The Register, 2026-06-26.
[^mysql-gh]: GitHub API, mysql/mysql-server commits, queried 2026-10-03.
[^so-2025]: Stack Overflow Developer Survey 2025.
