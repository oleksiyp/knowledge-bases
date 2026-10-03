---
type: Organization
title: PlanetScale
description: "Vitess creators' database company that moved from MySQL-only to Postgres. Metal NVMe hosting went GA (Mar 2025), PlanetScale for Postgres went GA (Sept 2025) and Neki sharded Postgres entered preview (Sept 2026). It is also a co-founder of the OurSQL Foundation."
resource: https://planetscale.com
tags: [commercial-open-source, vitess, mysql, postgres, sharding]
org_kind: coss-startup
hq: unverified
funding: { total_usd: "$105M through Series C (2021); trackers report ~$185M after an Oct 2025 round (unconfirmed)", last_round: "Series C $50M (Kleiner Perkins lead), 2021; trackers list an $80M Series D at ~$1B (Oct 2025), not confirmed by company or major press", last_round_date: 2021-11-16, valuation_usd: "undisclosed (~$1B per trackers, unconfirmed)" }
business_verdict: growing
projects: [projects/databases/vitess]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ps-metal
    resource: https://planetscale.com/blog/announcing-metal
    title: Announcing PlanetScale Metal
  - id: ps-pg-ga
    resource: https://planetscale.com/blog/planetscale-for-postgres-is-generally-available
    title: PlanetScale for Postgres is now GA
  - id: ps-blog
    resource: https://planetscale.com/blog
    title: PlanetScale blog (Neki)
  - id: reg-oursql
    resource: https://www.theregister.com/databases/2026/05/26/mysql-faithful-launch-oursql-foundation-to-keep-oracle-honest/5246451
    title: "The Register: OurSQL Foundation"
  - id: bw-ps-c
    resource: https://www.businesswire.com/news/home/20211116005566/en
    title: "Business Wire: PlanetScale Series C announcement (2021-11-16)"
    author: org:planetscale
---

# Summary
PlanetScale reinvented itself in two moves: infrastructure (Metal local-NVMe, GA Mar 11 2025[^ps-metal]) and database choice (Postgres GA Sept 22 2025[^ps-pg-ga]). In Sept 2026 it previewed Neki, a sharded Postgres, with a 118M QPS demonstration[^ps-blog]. It remains a MySQL ecosystem player as a co-founder of the OurSQL Foundation[^reg-oursql].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-03-11 | Metal GA [^ps-metal] | + |
| W24 | 2025-09-22 | Postgres GA [^ps-pg-ga] | + |
| W6 | 2026-05-26 | OurSQL co-founder [^reg-oursql] | + |
| W3 | 2026-09-10 | Neki preview [^ps-blog] | + |

# Monetization model
Managed MySQL (Vitess) and Postgres on Metal and network-storage clusters.

# Successes
- A credible move into Postgres with a performance story[^ps-pg-ga].

# Failures / risks
- A late entrant to Postgres. Its last confirmed round was a $50M Series C (Nov 2021)[^bw-ps-c]; tracker sites report an $80M round at ~$1B in Oct 2025, which pass 2 could not confirm from the company or major press.

# Related
- [/projects/databases/vitess.md](/projects/databases/vitess.md), [/projects/databases/mysql.md](/projects/databases/mysql.md)

[^ps-metal]: PlanetScale, 2025-03-11.
[^ps-pg-ga]: PlanetScale, 2025-09-22.
[^ps-blog]: PlanetScale blog, Sept 2026.
[^reg-oursql]: The Register, 2026-05-26.
[^bw-ps-c]: Business Wire, 2021-11-16.
