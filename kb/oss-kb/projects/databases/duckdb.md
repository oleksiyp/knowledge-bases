---
type: OSS Project
title: DuckDB
description: "MIT-licensed in-process analytical database stewarded by the non-profit DuckDB Foundation. It shipped DuckLake 1.0 and a v2.0 preview, and AWS bought its commercial arm DuckLabs (Aug 2026) while the projects stayed MIT."
resource: https://github.com/duckdb/duckdb
tags: [olap, embedded, mit, foundation-hosted, lakehouse, acquired-steward]
domain: databases
license: MIT
license_history: ["MIT (2018-)"]
governance: foundation
steward: DuckDB Foundation (IP holder); DuckLabs (now AWS) as main developer
backing_orgs: [organizations/ducklabs]
metrics:
  github_stars: { value: 41875, as_of: 2026-10-03 }
  pg_duckdb_stars: { value: 3256, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: duck-gh
    resource: https://github.com/duckdb/duckdb
    title: DuckDB GitHub repository
  - id: duck-wiki
    resource: https://en.wikipedia.org/wiki/DuckDB
    title: DuckDB — Wikipedia (release history)
  - id: duck-news
    resource: https://duckdb.org/news/
    title: DuckDB news index
    author: org:duckdb
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckLabs to Join AWS, Projects to Remain Open Source"
    author: org:duckdb
  - id: reg-aws-duck
    resource: https://www.theregister.com/databases/2026/08/26/aws-buys-ducklabs-the-people-behind-the-popular-in-process-olap-database/5292590
    title: "The Register: AWS buys DuckLabs"
    author: org:the-register
  - id: reg-aws-tissue
    resource: https://www.theregister.com/databases/2026/09/01/aws-duckdb-will-provide-connective-tissue-across-the-data-estate/5293304
    title: "The Register: AWS: DuckDB will provide 'connective tissue' across the data estate"
    author: org:the-register
  - id: md-wiki
    resource: https://en.wikipedia.org/wiki/MotherDuck
    title: MotherDuck — Wikipedia
  - id: tt-md-b
    resource: https://www.techtarget.com/searchdatamanagement/news/252527260/MotherDuck-raises-475M-for-open-source-DuckDB-database
    title: "TechTarget: MotherDuck raises $47.5M for open source DuckDB database"
  - id: tracxn-md
    resource: https://tracxn.com/d/companies/motherduck/__ImNOuR4_9UpxigSXghehK9xIMsE-BU-RyEsr6aHQ6_M/funding-and-investors
    title: "Tracxn: MotherDuck funding rounds (aggregator)"
  - id: md-duck-amazon
    resource: https://motherduck.com/blog/duckdb-amazon/
    title: "MotherDuck blog: DuckDB outgrows its nest"
    author: org:motherduck
  - id: ducklabs-rename
    resource: https://ducklabs.com/news/2026/05/27/duckdb-labs-becomes-ducklabs
    title: "DuckLabs: DuckDB Labs becomes DuckLabs (2026-05-27)"
    author: org:ducklabs
  - id: pgduck-gh
    resource: https://github.com/duckdb/pg_duckdb
    title: pg_duckdb GitHub repository
  - id: reg-cf-basin
    resource: https://www.theregister.com/databases/2026/10/01/cloudflare-launches-data-platform-with-bland-basin-branding-promise-of-fewer-fees/5300618
    title: "The Register: Cloudflare launches Data Platform 'Basin'"
    author: org:the-register
---

# Summary
DuckDB had an excellent two years. It shipped quarterly releases (1.2 in Feb 2025 through 1.5 in Mar 2026), with 1.4 as an LTS line[^duck-wiki]. DuckLake, its lakehouse format, reached 1.0 in Apr 2026, and a v2.0-dev preview with a new PEG parser appeared on Sept 2 2026[^duck-news]. The defining business event came on Aug 26 2026, when AWS agreed to acquire DuckLabs (formerly DuckDB Labs, the Amsterdam team that builds DuckDB). DuckDB, DuckLake and its extensions stay MIT, and IP and stewardship remain with the non-profit DuckDB Foundation, which will add a stakeholder advisory board[^duck-aws][^reg-aws-duck]. MotherDuck, the VC-backed DuckDB cloud ($47.5M seed and Series A in 2022[^tt-md-b], then a $52.5M Series B at a $400M valuation in Sept 2023, about $100M in total[^md-wiki]), now competes with a hyperscaler that employs the core team. Its public response was to start selling enterprise DuckDB support, with the founders' blessing[^md-duck-amazon].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-05 | DuckDB 1.2 (CSV reader rewrite, C extension API) [^duck-wiki] | OSS | + |
| W24 | 2025-05-21 | DuckDB 1.3 [^duck-news] | OSS | + |
| W24 | 2025-07-04 | DuckLake 0.2 [^duck-news] | OSS | + |
| W24 | 2025-09-16/17 | DuckDB 1.4 LTS (AES-256 encryption, MERGE INTO). DuckLake 0.3 with Iceberg interop [^duck-wiki][^duck-news] | OSS | + |
| W9 | 2026-03-09 | DuckDB 1.5 (GEOMETRY, VARIANT, new CLI) [^duck-news][^duck-wiki] | OSS | + |
| W6 | 2026-04-13 | DuckLake 1.0 production release [^duck-news] | OSS | + |
| W6 | 2026-05-27 | DuckDB Labs renamed DuckLabs (30+ staff, several projects beyond DuckDB) [^ducklabs-rename] | Business | flat |
| W3 | 2026-08-17/20 | New PEG parser posts ahead of v2.0 [^duck-news] | OSS | + |
| W3 | 2026-08-26 | AWS to acquire DuckLabs. Projects remain MIT under the Foundation [^duck-aws][^reg-aws-duck] | Business | +/− |
| W3 | 2026-09-02 | "Try DuckDB v2.0-dev" preview [^duck-news] | OSS | + |
| W3 | 2026-09-28 | v1.5.6 released [^duck-gh] | OSS | + |
| W3 | 2026-10-01 | Cloudflare "Basin" data platform lists DuckDB as a supported engine [^reg-cf-basin] | OSS | + |

# OSS successes
- Its governance is unusually durable. The Foundation's statutes keep DuckDB MIT "in perpetuity", which made the AWS deal far less threatening than typical vendor acquisitions[^duck-wiki][^duck-aws].
- It became the default embedded analytics engine. Extensions such as pg_duckdb (3.3k stars, Postgres 14-18) carry it into Postgres[^pgduck-gh], and platforms like Cloudflare Basin list it as a first-class engine[^reg-cf-basin].
- DuckLake reached 1.0 within about a year of announcement[^duck-news].

# OSS failures / risks
- The core team now works for a hyperscaler. Roadmap neutrality toward GCP, Azure and MotherDuck depends on the Foundation's new advisory board, which is not yet in place[^reg-aws-duck].

# Business successes
- AWS acquired the small Amsterdam services and support company (terms undisclosed)[^duck-aws]. AWS says DuckDB will be "connective tissue" across S3 data[^reg-aws-tissue].

# Business failures / risks
- MotherDuck has announced no priced round since Sept 2023[^md-wiki]. Aggregators list a further ~$33M "Series B+" in May 2025, which was not announced by the company (aggregator data only; not confirmed)[^tracxn-md]. It now faces AWS-native DuckDB offerings, and its CEO described Amazon's move as the familiar "launch it as a service" playbook while welcoming the momentum[^md-duck-amazon].

# By window
## W3
- AWS buys DuckLabs. v2.0 preview. 1.5.x patch releases[^duck-aws][^duck-news][^duck-gh].
## W6
- DuckLake 1.0 (Apr 13). Rebrand to DuckLabs (May 27)[^duck-news][^ducklabs-rename].
## W9
- DuckDB 1.5[^duck-wiki].
## W12
- LTS 1.4.x patch releases. No notable corporate events found[^duck-news].
## W24
- 1.2, 1.3 and 1.4 LTS. DuckLake launched[^duck-wiki][^duck-news].

# Lessons
- Putting IP in a non-profit foundation early lets the people commercializing a project sell to a hyperscaler without the license fight seen with Redis or Elastic.
- Embedded, zero-ops engines win developer mindshare quickly, but most of the commercial capture flows to clouds.

# Related
- [/organizations/ducklabs.md](/organizations/ducklabs.md), [/events/2026-08-aws-acquires-ducklabs.md](/events/2026-08-aws-acquires-ducklabs.md)
- [ClickHouse](/projects/databases/clickhouse.md), [PostgreSQL](/projects/databases/postgresql.md)

[^duck-gh]: GitHub API, duckdb/duckdb, 2026-10-03.
[^duck-wiki]: Wikipedia, DuckDB.
[^duck-news]: duckdb.org news index.
[^duck-aws]: DuckDB blog, 2026-08-26.
[^reg-aws-duck]: The Register, 2026-08-26.
[^reg-aws-tissue]: The Register, 2026-09-01.
[^md-wiki]: Wikipedia, MotherDuck.
[^tt-md-b]: TechTarget, Nov 2022.
[^tracxn-md]: Tracxn aggregator listing (unconfirmed by company).
[^md-duck-amazon]: MotherDuck blog, Aug/Sept 2026.
[^ducklabs-rename]: DuckLabs news, 2026-05-27.
[^pgduck-gh]: GitHub, duckdb/pg_duckdb.
[^reg-cf-basin]: The Register, 2026-10-01.
