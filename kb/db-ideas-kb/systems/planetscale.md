---
type: System
title: PlanetScale
description: "Managed database company built on Vitess. It went from a developer-friendly serverless MySQL with a free tier and branching (2021) to layoffs and no free tier (2024), then to local-NVMe 'Metal' clusters, Postgres (GA Sept 2025) and the Neki sharded-Postgres preview (Sept 2026)."
resource: https://planetscale.com
tags: [vitess, mysql, postgres, dbaas, sharding, nvme, branching]
kind: cloud-service
first_release: 2021
org: "PlanetScale Inc."
outcome: pivoted
ideas: [ideas/distributed-sql/sharding-middleware, ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/database-branching]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021"
    author: person:andy-pavlo
  - id: hobby
    resource: https://planetscale.com/changelog/deprecating-hobby
    title: "PlanetScale: Deprecating the Hobby plan (2024-03)"
    author: org:planetscale
  - id: reg-layoff
    resource: https://www.theregister.com/2024/03/11/planetscale_lays_off_staff_and/
    title: "The Register: PlanetScale lays off staff (2024-03-11)"
  - id: metal
    resource: https://planetscale.com/blog/announcing-metal
    title: "PlanetScale: Announcing Metal (2025)"
    author: org:planetscale
  - id: pg-ga
    resource: https://planetscale.com/blog/planetscale-for-postgres-is-generally-available
    title: "PlanetScale for Postgres is GA (2025-09-22)"
    author: org:planetscale
  - id: neki
    resource: https://planetscale.com/blog/introducing-neki
    title: "PlanetScale: Introducing Neki (2026-09-10)"
    author: org:planetscale
  - id: neki-118m
    resource: https://planetscale.com/blog/118-million-queries-per-second-on-neki
    title: "PlanetScale: 118 million queries per second on Neki"
    author: org:planetscale
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025"
    author: person:andy-pavlo
---

# Summary
PlanetScale packaged Vitess as a serverless MySQL service with Git-like schema branching and non-blocking deploys, and raised a $20M Series B in 2021[^pavlo-2021]. On 6 March 2024 it laid off staff, mainly in sales and marketing, and retired the free Hobby plan (ended 8 April 2024). CEO Sam Lambert framed the move as prioritizing profitability[^hobby][^reg-layoff]. It then moved upmarket and onto hardware. "Metal" clusters on local NVMe claimed up to 65% lower p99 latency and 53% lower cost than Aurora[^metal]. It added Postgres (launched Mar 2025, GA 22 Sept 2025) using stock Postgres[^pg-ga][^pavlo-2025]. Neki, its sharded Postgres, entered platform preview on 10 Sept 2026 after a 118.5M-QPS, 512-shard demo[^neki][^neki-118m].

# Timeline
| Date | Event |
|---|---|
| 2021 | $20M Series B. Serverless MySQL with branching[^pavlo-2021] |
| 2024-03 | Layoffs. Hobby plan retired (Apr 8)[^hobby][^reg-layoff] |
| 2025 | Metal (local NVMe) GA[^metal]. Postgres launched (Mar), GA (Sept 22)[^pg-ga] |
| 2025-07 | Neki announced[^pavlo-2025] |
| 2026-09-10 | Neki platform preview[^neki] |

# What worked
- Profitability-first focus and performance-led marketing (Metal benchmarks, sharding demos).
- Moving to Postgres early enough to compete in the 2025–26 Postgres scale-out race.

# What didn't
- The free-tier, bottom-up serverless strategy, which ended in 2024[^hobby].
- MySQL/Vitess alone was not a big enough market as new projects moved to Postgres.

# Related
- [Vitess](/systems/vitess.md), [Sharding middleware](/ideas/distributed-sql/sharding-middleware.md), [Neon](/systems/neon.md), [Supabase](/systems/supabase.md)
- Events: [PlanetScale drops free tier](/events/2024-03-planetscale-drops-free-tier.md)

[^pavlo-2021]: Pavlo, Databases in 2021.
[^hobby]: PlanetScale changelog, March 2024.
[^reg-layoff]: The Register, 2024-03-11.
[^metal]: PlanetScale blog, 2025.
[^pg-ga]: PlanetScale blog, 2025-09-22.
[^neki]: PlanetScale blog, 2026-09-10.
[^neki-118m]: PlanetScale blog.
[^pavlo-2025]: Pavlo, Databases in 2025.
