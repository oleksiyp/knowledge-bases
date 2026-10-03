---
type: OSS Project
title: YugabyteDB
description: "Postgres-compatible distributed SQL database (Apache-2.0 core). It kept its open model while CockroachDB closed, added per-agent multitenant Postgres (2026.1) and reported its strongest half-year (2026)."
resource: https://github.com/yugabyte/yugabyte-db
tags: [distributed-sql, postgres-compatible, apache-2.0, ai-agents]
domain: databases
license: "Apache-2.0 (core; some enterprise components under separate terms)"
license_history: ["Apache-2.0 (2019-)"]
governance: company-led-open-core
steward: Yugabyte Inc.
backing_orgs: []
metrics:
  github_stars: { value: 10571, as_of: 2026-10-03 }
  latest_release: { value: "v2026.1.2.0", as_of: 2026-09-22 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: yb-gh
    resource: https://github.com/yugabyte/yugabyte-db
    title: YugabyteDB GitHub repository
  - id: yb-vector
    resource: https://www.businesswire.com/news/home/20250408036962/en/YugabyteDB-Unveils-First-Agentic-AI-Application-and-Extensible-Vector-Search-For-Deploying-AI-at-Scale
    title: "BusinessWire: YugabyteDB unveils agentic AI app and extensible vector search"
  - id: yb-aws
    resource: https://www.businesswire.com/news/home/20260422268506/en/Yugabyte-Signs-Strategic-Collaboration-Agreement-with-AWS-to-Deliver-Enterprise-PostgreSQL-Modernization
    title: "BusinessWire: Yugabyte signs Strategic Collaboration Agreement with AWS"
  - id: yb-meko
    resource: https://www.businesswire.com/news/home/20260507728812/en/Yugabyte-Launches-Meko-a-Data-Infrastructure-to-Solve-the-Multi-Agent-Memory-and-Knowledge-Problem
    title: "BusinessWire: Yugabyte launches Meko"
  - id: yb-h1
    resource: https://www.storagenewsletter.com/2026/09/17/yugabyte-accelerates-agentic-ai-momentum-with-new-product-lines-global-expansion-and-industry-recognition/
    title: "StorageNewsletter: Yugabyte accelerates agentic AI momentum"
---

# Summary
YugabyteDB benefited from staying open. It added extensible vector search and an agentic AI application in Apr 2025[^yb-vector], signed a Strategic Collaboration Agreement with AWS for Postgres modernisation in Apr 2026[^yb-aws], and launched Meko, multi-agent memory infrastructure, in May 2026[^yb-meko]. Release 2026.1 introduced Agentic Multitenant Postgres (AMP), a serverless, scale-to-zero Postgres per agent. In Sept 2026 Yugabyte reported its strongest first half ever, with new paying logos up more than 125% year over year[^yb-h1]. Releases are frequent (v2026.1.2.0, Sept 22 2026)[^yb-gh].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-08 | Vector search and agentic AI app [^yb-vector] | OSS/Business | + |
| W6 | 2026-04-22 | AWS Strategic Collaboration Agreement [^yb-aws] | Business | + |
| W6 | 2026-05-07 | Meko multi-agent memory launched [^yb-meko] | Business | + |
| W3 | 2026-09-17 | Strongest H1 ever. AMP per-agent Postgres in 2026.1 [^yb-h1] | Business | + |
| W3 | 2026-09-22 | v2026.1.2.0 [^yb-gh] | OSS | + |

# OSS successes
- Apache-2.0 core with frequent releases[^yb-gh]. The project gains from CockroachDB's closure.

# OSS failures / risks
- A smaller community (10.6k stars) than the Postgres-native ecosystems[^yb-gh].

# Business successes
- Logo growth and a hyperscaler partnership[^yb-h1][^yb-aws].

# Business failures / risks
- No disclosed funding round in the window. Customer counts are relative, not absolute.

# By window
## W3
- Strong H1. AMP[^yb-h1].
## W6
- AWS SCA. Meko[^yb-aws][^yb-meko].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Vector search[^yb-vector].

# Lessons
- In distributed SQL, staying open has become a differentiator now that CockroachDB is closed.

# Related
- [CockroachDB](/projects/databases/cockroachdb.md), [TiDB](/projects/databases/tidb.md), [PostgreSQL](/projects/databases/postgresql.md)

[^yb-gh]: GitHub API, yugabyte/yugabyte-db, 2026-10-03.
[^yb-vector]: BusinessWire, 2025-04-08.
[^yb-aws]: BusinessWire, 2026-04-22.
[^yb-meko]: BusinessWire, 2026-05-07.
[^yb-h1]: StorageNewsletter, 2026-09-17.
