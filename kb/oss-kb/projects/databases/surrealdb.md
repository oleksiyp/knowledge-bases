---
type: OSS Project
title: SurrealDB
description: "Rust multi-model database (BSL-1.1) repositioned as an AI-agent memory store. 3.0 GA arrived with a $23M Series A extension (Feb 2026), and 3.3 shipped in Sept 2026."
resource: https://github.com/surrealdb/surrealdb
tags: [multi-model, rust, bsl, ai-agents, agent-memory]
domain: databases
license: BSL-1.1
license_history: ["BSL-1.1 (converts to Apache-2.0 after change date)"]
governance: single-vendor
steward: SurrealDB Ltd
backing_orgs: []
metrics:
  github_stars: { value: 33094, as_of: 2026-10-03 }
  total_funding_usd: { value: "44M", as_of: 2026-02-17 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sdb-gh
    resource: https://github.com/surrealdb/surrealdb
    title: SurrealDB GitHub repository
  - id: techeu-23m
    resource: https://tech.eu/2026/02/17/surrealdb-secures-23m-and-launches-surrealdb-3-0-to-address-ai-agent-memory-challenges/
    title: "Tech.eu: SurrealDB secures $23M and launches SurrealDB 3.0"
  - id: siliconangle-23m
    resource: https://siliconangle.com/2026/02/17/surrealdb-raises-23m-expand-ai-native-multi-model-database/
    title: "SiliconANGLE: SurrealDB raises $23M"
  - id: vb-30
    resource: https://venturebeat.com/data/surrealdb-3-0-wants-to-replace-your-five-database-rag-stack-with-one
    title: "VentureBeat: SurrealDB 3.0 wants to replace your five-database RAG stack with one"
---

# Summary
SurrealDB is one of the most-starred new databases (33.1k)[^sdb-gh]. On Feb 17 2026 it raised a $23M Series A extension (Chalfen Ventures and Begin Capital joining FirstMark and Georgian), bringing total funding to $44M, and shipped 3.0 GA[^techeu-23m][^siliconangle-23m]. 3.0 pitches one engine for relational, document, graph, time-series, vector, search and geospatial data, with agent memory and context graphs built in. The goal is to replace a "five-database RAG stack"[^vb-30]. v3.3.0 followed on Sept 28 2026[^sdb-gh]. The license is BSL-1.1, which is source-available rather than OSI open source.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-02-17 | $23M Series A extension ($44M total). 3.0 GA [^techeu-23m][^siliconangle-23m] | Business/OSS | + |
| W3 | 2026-09-28 | v3.3.0 and v2.7.0 [^sdb-gh] | OSS | + |

# OSS successes
- High star count and active Rust development[^sdb-gh].

# OSS failures / risks
- BSL-1.1 limits use as a hosted service. Single vendor.

# Business successes
- Raised during the agent-memory wave[^techeu-23m].

# Business failures / risks
- The multi-model "replace everything" pitch competes against Postgres plus extensions, which is the dominant pattern.

# By window
## W3
- 3.3 release[^sdb-gh].
## W6
- No notable events found.
## W9
- Funding and 3.0[^techeu-23m].
## W12
- No notable events found.
## W24
- No notable events found in this research.

# Lessons
- Startups are rebranding as "agent memory" to raise money. Durable traction is still to be proven.

# Related
- [MongoDB](/projects/databases/mongodb.md), [PostgreSQL](/projects/databases/postgresql.md)

[^sdb-gh]: GitHub API, surrealdb/surrealdb, 2026-10-03.
[^techeu-23m]: Tech.eu, 2026-02-17.
[^siliconangle-23m]: SiliconANGLE, 2026-02-17.
[^vb-30]: VentureBeat, Feb 2026.
