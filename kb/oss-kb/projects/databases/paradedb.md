---
type: OSS Project
title: ParadeDB
description: "AGPL-3.0 Postgres extension (pg_search) bringing Elasticsearch-style full-text search and analytics into Postgres. It raised a $12M Series A (July 2025) and keeps shipping, but remains pre-1.0."
resource: https://github.com/paradedb/paradedb
tags: [postgres, search, agpl-3.0, extension, elasticsearch-alternative]
domain: databases
license: AGPL-3.0
license_history: ["AGPL-3.0 (2023-)"]
governance: company-led-open-core
steward: ParadeDB Inc.
backing_orgs: []
metrics:
  github_stars: { value: 9339, as_of: 2026-10-03 }
  latest_release: { value: "v0.26.0-rc.4", as_of: 2026-10-01 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pd-gh
    resource: https://github.com/paradedb/paradedb
    title: ParadeDB GitHub repository
  - id: pd-blog
    resource: https://www.paradedb.com/blog
    title: ParadeDB blog index (Series A, 0.20, Railway, Render)
    author: org:paradedb
---

# Summary
ParadeDB is a good example of the "Postgres eats specialised databases" trend, applied to search. It announced a $12M Series A on July 14 2025[^pd-blog] and shipped 0.20 (search aggregation, V2 API default) on Nov 26 2025[^pd-blog]. It is now at a 0.26 release candidate with 9.3k stars[^pd-gh]. It is distributed through one-click templates on Railway (Apr 2026) and Render (May 2026)[^pd-blog]. It chose AGPL from the start, which avoids a later relicensing controversy[^pd-blog].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-14 | $12M Series A [^pd-blog] | Business | + |
| W12 | 2025-11-26 | ParadeDB 0.20 [^pd-blog] | OSS | + |
| W6 | 2026-04-14 | Available on Railway [^pd-blog] | Business | + |
| W6 | 2026-05-12 | Available on Render [^pd-blog] | Business | + |
| W3 | 2026-10-01 | v0.26.0 release candidates [^pd-gh] | OSS | + |

# OSS successes
- Fast iteration and a clear, upfront AGPL stance[^pd-blog][^pd-gh].

# OSS failures / risks
- Still pre-1.0. AGPL limits inclusion by hyperscaler-managed Postgres services, which hurts distribution.

# Business successes
- Venture-funded. Builds distribution through PaaS marketplaces[^pd-blog].

# Business failures / risks
- Competition from built-in Postgres full-text improvements and from vendor-native search, such as PlanetScale's TIN and Neon's Lakebase Search (Sept 2026). See [Vitess](/projects/databases/vitess.md) and [Neon](/projects/databases/neon.md).

# By window
## W3
- 0.26 RCs[^pd-gh].
## W6
- Railway and Render[^pd-blog].
## W9
- No notable events found.
## W12
- 0.20[^pd-blog].
## W24
- Series A[^pd-blog].

# Lessons
- Choosing a copyleft license from day one avoids the backlash that relicensing later brings, at the cost of being left out of some clouds.

# Related
- [PostgreSQL](/projects/databases/postgresql.md); Elasticsearch licensing context: [Elasticsearch](/projects/licensing-forks/elasticsearch.md), [OpenSearch](/projects/licensing-forks/opensearch.md)

[^pd-gh]: GitHub API, paradedb/paradedb, 2026-10-03.
[^pd-blog]: ParadeDB blog index, accessed 2026-10-03.
