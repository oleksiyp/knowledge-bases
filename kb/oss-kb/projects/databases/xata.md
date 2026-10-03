---
type: OSS Project
title: Xata
description: "Postgres platform focused on copy-on-write branching for developers and coding agents. It moved from a proprietary serverless DB to an open-source (Apache-2.0) cloud-native Postgres platform in Apr 2026, but has small traction so far."
resource: https://github.com/xataio/xata
tags: [postgres, branching, apache-2.0, ai-agents, pivot]
domain: databases
license: Apache-2.0
license_history: ["Proprietary service (to 2026)", "Apache-2.0 platform repo (2026-04-)"]
governance: single-vendor
steward: Xata
backing_orgs: []
metrics:
  github_stars: { value: 1080, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: n/a, W12: n/a, W24: n/a }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: xata-gh
    resource: https://github.com/xataio/xata
    title: "Xata GitHub repository — 'Open source, cloud native, Postgres platform with copy-on-write branching and scale-to-zero'"
  - id: xata-blog
    resource: https://xata.io/blog
    title: Xata blog index (2026 posts)
---

# Summary
Xata rebuilt itself around Postgres branching for agents. On Apr 15 2026 it published `xataio/xata`, an Apache-2.0 "cloud native Postgres platform with copy-on-write branching and scale-to-zero". That puts in the open the kind of design Neon popularised, just as Neon's own public repo went quiet[^xata-gh]. Product cadence in W6/W3 has been brisk: ~1-second branching (June 2026), a GitHub app that creates a branch per pull request (July), "Xata Scratch" disposable copies (July) and MCP Server 2.0 for coding agents (Aug 2026). Open-source tools such as pgstream also continue[^xata-blog]. Adoption is still small (about 1.1k stars)[^xata-gh]. No 2025-2026 funding was found.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-04-15 | Open-source Postgres platform repo published (Apache-2.0) [^xata-gh] | OSS | + |
| W6 | 2026-06-11/16 | ~1s branching. pgstream v1.1.0 [^xata-blog] | OSS | + |
| W3 | 2026-07-08/17 | GitHub App per-PR branches. Xata Scratch [^xata-blog] | Business | + |
| W3 | 2026-08-26 | Xata MCP Server 2.0 for coding agents [^xata-blog] | Business | + |

# OSS successes
- Became an open alternative for self-hostable Postgres branching[^xata-gh].

# OSS failures / risks
- A small community. Single vendor.

# Business successes
- Clear positioning as safe database branches for coding agents[^xata-blog].

# Business failures / risks
- Competes against Supabase, Neon/Databricks and PlanetScale, all far better funded.

# By window
## W3
- Agent and branching features[^xata-blog].
## W6
- Platform open-sourced[^xata-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found in this research.

# Lessons
- Small vendors use open source as a distribution lever against much larger, closed competitors.

# Related
- [Neon](/projects/databases/neon.md), [Supabase](/projects/databases/supabase.md), [PostgreSQL](/projects/databases/postgresql.md)

[^xata-gh]: GitHub API, xataio/xata, 2026-10-03.
[^xata-blog]: Xata blog index, accessed 2026-10-03.
