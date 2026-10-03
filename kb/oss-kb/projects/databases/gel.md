---
type: OSS Project
title: Gel (formerly EdgeDB)
description: "Postgres-based graph-relational database (Apache-2.0) that rebranded from EdgeDB to Gel (Feb 2025). Its team joined Vercel (Dec 2025), Gel Cloud shut down (Jan 31 2026), and the repo has been dormant since."
resource: https://github.com/geldata/gel
tags: [postgres, orm, apache-2.0, acqui-hire, shutdown]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: single-vendor
steward: Gel Data Inc. (team now at Vercel)
backing_orgs: []
metrics:
  github_stars: { value: 14172, as_of: 2026-10-03 }
  last_push: { value: 2025-12-24, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: failed
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gel-rename
    resource: https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future
    title: "EdgeDB is now Gel and Postgres is the Future"
    author: org:gel
  - id: gel-vercel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: "Gel joins Vercel"
    author: org:gel
  - id: gel-gh
    resource: https://github.com/geldata/gel
    title: Gel GitHub repository
---

# Summary
Gel is a clear failure case from this period. EdgeDB renamed itself Gel on Feb 25 2025 and repositioned as a "frontend for Postgres", saying "Postgres is the future"[^gel-rename]. On Dec 2 2025 founder Yury Selivanov announced the team was joining Vercel to work on Vercel's Python cloud. Gel Cloud stopped taking signups immediately and shut down on Jan 31 2026[^gel-vercel]. The project officially "remains open source" and maintained, but the repo's last push was Dec 24 2025[^gel-gh].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-25 | EdgeDB rebrands to Gel. Gel 6.0 adds full SQL [^gel-rename] | OSS/Business | flat |
| W12 | 2025-12-02 | Team joins Vercel. Gel Cloud closed to new users [^gel-vercel] | Business | − |
| W12 | 2025-12-24 | Last push to the repository [^gel-gh] | OSS | − |
| W9 | 2026-01-31 | Gel Cloud shut down [^gel-vercel] | Business | − |

# OSS successes
- The code stays Apache-2.0 and self-hostable[^gel-vercel].

# OSS failures / risks
- No commits for more than 9 months after the acqui-hire[^gel-gh].

# Business successes
- The team found a landing spot at Vercel[^gel-vercel].

# Business failures / risks
- The hosted business shut down, and users had to migrate to managed Postgres or self-host[^gel-vercel].

# By window
## W3
- Dormant[^gel-gh].
## W6
- Dormant[^gel-gh].
## W9
- Cloud shutdown[^gel-vercel].
## W12
- Joins Vercel[^gel-vercel].
## W24
- Rebrand[^gel-rename].

# Lessons
- "A better layer on top of Postgres" is a thin moat when Postgres platforms bundle ORMs, auth and APIs. Acqui-hires usually end the OSS project in practice, whatever the stated intent.

# Related
- [PostgreSQL](/projects/databases/postgresql.md), [Convex](/projects/databases/convex.md), [Supabase](/projects/databases/supabase.md), [/events/2025-12-gel-joins-vercel.md](/events/2025-12-gel-joins-vercel.md)

[^gel-rename]: Gel blog, 2025-02-25.
[^gel-vercel]: Gel blog, 2025-12-02.
[^gel-gh]: GitHub API, geldata/gel, 2026-10-03.
