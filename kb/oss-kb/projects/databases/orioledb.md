---
type: OSS Project
title: OrioleDB
description: "Next-generation Postgres storage engine (table access method, Apache-2.0) owned by Supabase. Technically ambitious but still in beta (beta16, Jul 2026), with production readiness promised for 2026."
resource: https://github.com/orioledb/orioledb
tags: [postgres, storage-engine, apache-2.0, supabase, beta]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: single-vendor
steward: Supabase Inc.
backing_orgs: [organizations/supabase]
metrics:
  github_stars: { value: 4232, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: oriole-gh
    resource: https://github.com/orioledb/orioledb
    title: OrioleDB GitHub repository
  - id: oriole-blog
    resource: https://www.orioledb.com/blog
    title: OrioleDB blog index (beta12-beta16)
  - id: sb-series-f
    resource: https://supabase.com/blog/supabase-series-f
    title: Supabase Series F (OrioleDB production-readiness goal)
    author: org:supabase
---

# Summary
OrioleDB replaces Postgres's heap with an undo-log, bloat-free storage engine plugged in through the table access method API. Supabase owns it and publishes it as Apache-2.0[^oriole-blog][^oriole-gh]. Progress is steady but slow. beta12 (July 2025) added non-B-tree indexes, rewind and tablespaces. Later work targeted throughput, with up to 2x from 64 clients in Aug 2025. beta15/16 (July 2026) focused on correctness and replication[^oriole-blog]. Supabase's June 2026 Series F post set production readiness "this year" as a goal[^sb-series-f]. OrioleDB also argues publicly that Postgres needs a better table access method API[^oriole-blog].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-24 | Post: "Why PostgreSQL needs better Table Access Method API" [^oriole-blog] | OSS | flat |
| W24 | 2025-07-15 | beta12: non-B-tree indexes, rewind, tablespaces [^oriole-blog] | OSS | + |
| W24 | 2025-08-19 | Ordered-insertion optimisation (~2x throughput at 64+ clients) [^oriole-blog] | OSS | + |
| W6 | 2026-06-04 | Supabase targets production readiness in 2026 [^sb-series-f] | OSS | + |
| W3 | 2026-07-06 | beta15/beta16 stability releases [^oriole-blog] | OSS | + |

# OSS successes
- Apache-2.0, actively developed and funded by a well-capitalised sponsor[^oriole-gh][^sb-series-f].

# OSS failures / risks
- Years in beta. Depends on upstream Postgres API changes and on a single sponsor.

# Business successes
- n/a. It is a strategic asset for Supabase, not a separate business.

# Business failures / risks
- If Supabase's priorities shift, for example toward Turso/SQLite for agents, OrioleDB has no other backer.

# By window
## W3
- beta15/16[^oriole-blog].
## W6
- Production goal reaffirmed[^sb-series-f].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- beta12 and performance work[^oriole-blog].

# Lessons
- Deep engine work on Postgres is now funded by platform companies, not by standalone startups.

# Related
- [Supabase](/projects/databases/supabase.md), [PostgreSQL](/projects/databases/postgresql.md), [Neon](/projects/databases/neon.md)

[^oriole-gh]: GitHub API, orioledb/orioledb, 2026-10-03.
[^oriole-blog]: OrioleDB blog index.
[^sb-series-f]: Supabase blog, 2026-06-04.
