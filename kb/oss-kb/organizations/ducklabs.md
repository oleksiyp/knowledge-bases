---
type: Organization
title: DuckLabs (formerly DuckDB Labs)
description: "Amsterdam company of DuckDB's creators, which provides development and support for DuckDB. Renamed DuckLabs in May 2026 and acquired by AWS (announced Aug 26 2026), while DuckDB IP stays with the non-profit DuckDB Foundation under MIT."
resource: https://duckdb.org
tags: [commercial-open-source, olap, acquired, aws, foundation]
org_kind: coss-startup
hq: Amsterdam, Netherlands
funding: { total_usd: "no VC funding announced (services/support-funded)", last_round: "acquired by AWS (terms undisclosed)", last_round_date: 2026-08-26, valuation_usd: "undisclosed" }
business_verdict: acquired
projects: [projects/databases/duckdb]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckLabs to Join AWS, Projects to Remain Open Source"
  - id: reg-aws-duck
    resource: https://www.theregister.com/databases/2026/08/26/aws-buys-ducklabs-the-people-behind-the-popular-in-process-olap-database/5292590
    title: "The Register: AWS buys DuckLabs"
  - id: duck-wiki
    resource: https://ducklabs.com/news/2026/05/27/duckdb-labs-becomes-ducklabs
    title: "DuckLabs news: DuckDB Labs becomes DuckLabs (2026-05-27)"
    author: org:ducklabs
  - id: reg-aws-duck-2
    resource: https://www.theregister.com/databases/2026/09/01/aws-duckdb-will-provide-connective-tissue-across-the-data-estate/5293304
    title: "The Register: AWS — DuckDB will provide 'connective tissue' across the data estate (2026-09-01)"
    author: org:the-register
---

# Summary
DuckLabs, led by co-founders Hannes Mühleisen (CEO) and Mark Raasveldt (CTO), employs most of DuckDB's core developers. It was renamed from DuckDB Labs on 27 May 2026 because it now maintains several projects (DuckDB, the DuckLake lakehouse format and the Quack client-server protocol); it then had 30+ full-time staff in Amsterdam[^duck-wiki]. On Aug 26 2026 it announced it would join AWS, with closing expected in early Sept 2026 and the team staying in Amsterdam. DuckDB, DuckLake and related extensions stay MIT under the DuckDB Foundation, which will create a stakeholder advisory board[^duck-aws][^reg-aws-duck].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W6 | 2026-05-27 | Renamed DuckLabs [^duck-wiki] | flat |
| W3 | 2026-08-26 | AWS acquisition announced [^duck-aws] | +/− |
| W3 | 2026-09-01 | AWS outlines DuckDB as "connective tissue" across its data services [^reg-aws-duck-2] | + |

# Monetization model
Support and development contracts. Now part of AWS.

# Successes
- An exit with open-source guarantees that hold up, thanks to the Foundation structure[^duck-aws].

# Failures / risks
- Vendor neutrality now depends on Foundation governance[^reg-aws-duck].

# Related
- [/projects/databases/duckdb.md](/projects/databases/duckdb.md), [/events/2026-08-aws-acquires-ducklabs.md](/events/2026-08-aws-acquires-ducklabs.md)

[^duck-aws]: DuckDB blog, 2026-08-26.
[^reg-aws-duck]: The Register, 2026-08-26.
[^duck-wiki]: DuckLabs news, 2026-05-27.
[^reg-aws-duck-2]: The Register, 2026-09-01.
