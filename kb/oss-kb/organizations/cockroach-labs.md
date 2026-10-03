---
type: Organization
title: Cockroach Labs
description: "Maker of CockroachDB. It retired the free Core edition for a proprietary license (Nov 2024) and took development fully private on Sept 15 2026, citing AI risks, while pivoting to an 'agentic database cloud' (Continuum)."
resource: https://www.cockroachlabs.com
tags: [distributed-sql, proprietary, license-change, ai-agents]
org_kind: coss-startup
hq: New York, USA
funding: { total_usd: "$633M (after Series F)", last_round: "Series F $278M (Greenoaks lead)", last_round_date: 2021-12-16, valuation_usd: "5B (2021); no later priced round disclosed" }
business_verdict: stable
projects: [projects/databases/cockroachdb]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sdtimes-core
    resource: https://sdtimes.com/os/cockroachdb-retires-self-hosted-core-offering-makes-enterprise-version-free-for-companies-under-10m-in-annual-revenue/
    title: "SD Times: CockroachDB retires Core"
  - id: crl-source
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Protecting Cockroach Labs' Source Code in the Age of AI"
  - id: crl-continuum
    resource: https://www.cockroachlabs.com/blog/continuum-announcement/
    title: "Cockroach Continuum: the Agentic Database Cloud"
  - id: reg-sprawl
    resource: https://www.theregister.com/ai-and-ml/2026/06/30/ai-agents-cause-of-database-sprawl-and-also-the-proposed-solution/5264430
    title: "The Register: AI agents: Cause of database sprawl"
  - id: crdb-license
    resource: https://www.cockroachlabs.com/blog/enterprise-license-announcement/
    title: "Cockroach Labs: Enterprise license announcement (2024-08-15)"
  - id: crdb-continuum
    resource: https://finance.yahoo.com/technology/ai/articles/cockroach-labs-launches-cockroach-continuum-130000617.html
    title: "Cockroach Labs launches Cockroach Continuum (2026-09-15)"
  - id: tc-crl-f
    resource: https://techcrunch.com/2021/12/16/cockroach-rolls-on-with-278m-series-f-on-5b-valuation/
    title: "TechCrunch: Cockroach Labs keeps rolling with $278M Series F on $5B valuation (2021-12-16)"
    author: org:techcrunch
---

# Summary
Cockroach Labs (CEO Spencer Kimball) completed a move to proprietary software. Core was retired on Nov 18 2024, and Enterprise is free only under $10M in revenue[^sdtimes-core]. On Sept 15 2026 CockroachDB and Pebble moved to private development[^crl-source], alongside the launch of Cockroach Continuum[^crl-continuum]. Kimball argues that agents will drive exponential growth in operational database load[^reg-sprawl]. Its last priced round was a $278M Series F at $5B in Dec 2021, led by Greenoaks, bringing total funding to $633M; no later round has been disclosed[^tc-crl-f].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2024-11-18 | Core retired [^sdtimes-core] | − |
| W6 | 2026-06-30 | Agentic Database Cloud vision [^reg-sprawl] | + |
| W3 | 2026-09-15 | Source private. Continuum [^crl-source][^crl-continuum] | − / + |

# Monetization model
Enterprise licenses (free tier under $10M revenue), CockroachDB Cloud and BYOC.

# Successes
- A clear enterprise and agentic positioning[^crl-continuum].

# Failures / risks
- Loss of open-source community and developer funnel[^crl-source].

# Related
- [/projects/databases/cockroachdb.md](/projects/databases/cockroachdb.md), [/events/2026-09-cockroachdb-source-goes-private.md](/events/2026-09-cockroachdb-source-goes-private.md)

[^sdtimes-core]: SD Times, 2024.
[^crl-source]: Cockroach Labs, 2026-09-15.
[^crl-continuum]: Cockroach Labs, 2026-09-15.
[^reg-sprawl]: The Register, 2026-06-30.

## Additional notes (licensing-forks)

### Summary
Cockroach Labs completed its move away from open source in Nov 2024. The free Core edition was retired, and all self-hosted use now runs under a single Enterprise license that is free only below $10M annual revenue (and for individuals and academics).[^crdb-license] In 2026 it repositioned around AI with Cockroach Continuum (Sept 15, 2026).[^crdb-continuum] No verified funding or revenue updates were found for 2024–2026.

### Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2024-11-18 | Unified Enterprise license takes effect (v24.3)[^crdb-license] | ± |
| W3 | 2026-09-15 | Cockroach Continuum launched[^crdb-continuum] | + |

### Monetization model
CockroachDB Cloud plus self-hosted Enterprise licenses gated by revenue.

### Successes
- Turned free large-company usage into license conversations.[^crdb-license]

### Failures / risks
- No open-source edition left, and it competes with open distributed-SQL alternatives.

### Related
- [CockroachDB](/projects/licensing-forks/cockroachdb.md), [CockroachDB ends Core edition](/events/2024-11-cockroachdb-ends-core-edition.md)

[^crdb-license]: Cockroach Labs blog — https://www.cockroachlabs.com/blog/enterprise-license-announcement/
[^crdb-continuum]: Cockroach Labs press release — https://finance.yahoo.com/technology/ai/articles/cockroach-labs-launches-cockroach-continuum-130000617.html
[^tc-crl-f]: TechCrunch, 2021-12-16.
