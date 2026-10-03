---
type: OSS Project
title: Vitess (and PlanetScale)
description: "CNCF-graduated MySQL sharding system (Apache-2.0) that kept shipping. Its main sponsor PlanetScale hedged on MySQL's decline with Metal NVMe hosting (Mar 2025), PlanetScale for Postgres (GA Sept 2025) and Neki sharded Postgres (Sept 2026)."
resource: https://github.com/vitessio/vitess
tags: [mysql, sharding, apache-2.0, cncf, postgres]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0 (2012-)"]
governance: foundation
steward: CNCF (graduated); PlanetScale as primary contributor
backing_orgs: [organizations/planetscale]
metrics:
  github_stars: { value: 21367, as_of: 2026-10-03 }
  latest_release: { value: "v24.0.4", as_of: 2026-10-01 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vitess-gh
    resource: https://github.com/vitessio/vitess
    title: Vitess GitHub repository (releases)
  - id: ps-metal
    resource: https://planetscale.com/blog/announcing-metal
    title: "PlanetScale: Announcing PlanetScale Metal"
    author: org:planetscale
  - id: ps-pg-ga
    resource: https://planetscale.com/blog/planetscale-for-postgres-is-generally-available
    title: "PlanetScale: PlanetScale for Postgres is now GA"
    author: org:planetscale
  - id: ps-50
    resource: https://planetscale.com/changelog/50-dollar-metal
    title: "PlanetScale changelog: $50 Metal Postgres databases GA"
    author: org:planetscale
  - id: ps-blog
    resource: https://planetscale.com/blog
    title: PlanetScale blog index (Neki posts, Sept 2026)
    author: org:planetscale
  - id: reg-oursql
    resource: https://www.theregister.com/databases/2026/05/26/mysql-faithful-launch-oursql-foundation-to-keep-oracle-honest/5246451
    title: "The Register: MySQL faithful launch OurSQL Foundation"
    author: org:the-register
  - id: multigres-gh
    resource: https://github.com/multigres/multigres
    title: "Multigres: Vitess for Postgres (Supabase-backed)"
---

# Summary
Vitess, which gives MySQL horizontal sharding, kept a healthy release cadence (v23 and v24 lines patched on Oct 1 2026, 21.4k stars)[^vitess-gh]. Its future is closely tied to MySQL's, and MySQL is weakening. PlanetScale, Vitess's main commercial sponsor, responded on three fronts. It launched Metal, local-NVMe database nodes claiming up to 65% lower p99 latency, GA on Mar 11 2025[^ps-metal]. It launched PlanetScale for Postgres, GA on Sept 22 2025[^ps-pg-ga], with $50/month Metal Postgres from Dec 2025[^ps-50]. And it introduced Neki, a sharded Postgres in preview on Sept 10 2026 with a claimed 118M QPS demonstration[^ps-blog]. Vitess's architecture is also being cloned for Postgres in Supabase's Apache-2.0 Multigres[^multigres-gh]. PlanetScale is also a founding participant in the OurSQL Foundation[^reg-oursql].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-11 | PlanetScale Metal GA [^ps-metal] | Business | + |
| W24 | 2025-06-10 | Multigres ("Vitess for Postgres") started [^multigres-gh] | OSS | +/− |
| W24 | 2025-09-22 | PlanetScale for Postgres GA [^ps-pg-ga] | Business | + |
| W12 | 2025-12 | $50/mo Metal Postgres sizes [^ps-50] | Business | + |
| W6 | 2026-05-26 | PlanetScale co-founds OurSQL Foundation [^reg-oursql] | Governance | + |
| W3 | 2026-09-10 | Neki sharded Postgres preview. 118M QPS post [^ps-blog] | Business | + |
| W3 | 2026-10-01 | Vitess v24.0.4 / v23.0.7 [^vitess-gh] | OSS | + |

# OSS successes
- Neutral CNCF governance and Apache-2.0 kept Vitess stable while MySQL upstream wobbled[^vitess-gh].

# OSS failures / risks
- Its main sponsor's growth has shifted to Postgres, and Neki is not presented as an open-source project[^ps-blog]. Vitess contributor attention could thin.

# Business successes
- PlanetScale turned infrastructure (NVMe Metal) into a performance and cost differentiator against Aurora[^ps-metal].

# Business failures / risks
- PlanetScale is now a late entrant into crowded Postgres hosting against Supabase, Neon/Databricks and AWS.

# By window
## W3
- Neki launch. Vitess patch releases[^ps-blog][^vitess-gh].
## W6
- OurSQL Foundation[^reg-oursql].
## W9
- No notable events found.
## W12
- Cheap Metal Postgres[^ps-50].
## W24
- Metal GA. Postgres GA[^ps-metal][^ps-pg-ga].

# Lessons
- Foundation-hosted infrastructure outlives its sponsor's pivots. Vendors whose upstream is stagnating hedge by adopting Postgres.

# Related
- [/organizations/planetscale.md](/organizations/planetscale.md), [MySQL](/projects/databases/mysql.md), [Supabase](/projects/databases/supabase.md), [PostgreSQL](/projects/databases/postgresql.md)

[^vitess-gh]: GitHub API, vitessio/vitess releases, 2026-10-03.
[^ps-metal]: PlanetScale blog, 2025-03-11.
[^ps-pg-ga]: PlanetScale blog, 2025-09-22.
[^ps-50]: PlanetScale changelog, Dec 2025.
[^ps-blog]: PlanetScale blog index, Sept 2026.
[^reg-oursql]: The Register, 2026-05-26.
[^multigres-gh]: GitHub, multigres/multigres.
