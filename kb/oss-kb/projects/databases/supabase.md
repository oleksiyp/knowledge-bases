---
type: OSS Project
title: Supabase
description: "Open-source Postgres backend platform (Apache-2.0) that grew from a $2B to a $10.5B+ valuation in a year by becoming the default database of vibe-coding and AI-agent tools; it acquired Turso in Oct 2026."
resource: https://github.com/supabase/supabase
tags: [postgres, backend-as-a-service, apache-2.0, ai-agents, vibe-coding]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0 (2020-)"]
governance: company-led-open-core
steward: Supabase Inc.
backing_orgs: [organizations/supabase]
metrics:
  github_stars: { value: 111029, as_of: 2026-10-03 }
  developers: { value: "nearly 10 million", as_of: 2026-06-04 }
  valuation_usd: { value: "10.5B post-money (Series F)", as_of: 2026-06-04 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sb-gh
    resource: https://github.com/supabase/supabase
    title: Supabase GitHub repository
  - id: tc-series-d
    resource: https://www.fortune.com/2025/04/22/exclusive-supabase-raises-200-million-series-d-at-2-billion-valuation
    title: "Fortune: Exclusive — Supabase raises $200 million Series D at $2 billion valuation (2025-04-22)"
    author: org:fortune
  - id: bdw-series-d
    resource: https://www.bigdatawire.com/2025/04/24/supabases-200m-raise-signals-big-ambitions/
    title: "BigDATAwire: Supabase's $200M Raise Signals Big Ambitions (2025-04-24)"
  - id: tc-series-e
    resource: https://techcrunch.com/2025/10/03/supabase-nabs-5b-valuation-four-months-after-hitting-2b/
    title: "TechCrunch: Supabase nabs $5B valuation, four months after hitting $2B"
    author: org:techcrunch
  - id: sb-series-e
    resource: https://supabase.com/blog/supabase-series-e
    title: Supabase Series E
    author: org:supabase
  - id: orrick-e
    resource: https://www.orrick.com/en/news/2025/10/supabase-raises-100-million-series-e-at-5-billion-valuation
    title: "Orrick: Supabase Raises $100 Million Series E at $5 Billion Valuation"
  - id: sb-series-f
    resource: https://supabase.com/blog/supabase-series-f
    title: Supabase Series F
    author: org:supabase
  - id: cnbc-f
    resource: https://www.cnbc.com/2026/06/04/database-startup-supabase-raises-500-million-10point5-billion-valuation.html
    title: "CNBC: Database startup Supabase raises $500 million at $10.5 billion valuation"
    author: org:cnbc
  - id: turso-joins
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso is joining Supabase to give every agent its own database"
    author: org:turso
  - id: citybiz-150
    resource: https://www.citybiz.co/article/913344/supabase-raises-150-million-acquires-turso-to-scale-agentic-databases/
    title: "citybiz: Supabase Raises $150 Million, Acquires Turso to Scale Agentic Databases (2026-10-02)"
  - id: tipranks-150
    resource: https://www.tipranks.com/news/private-companies/supabase-raises-150-million-and-acquires-turso-to-scale-agentic-database-infrastructure
    title: "TipRanks: Supabase raises $150 million and acquires Turso"
  - id: multigres-gh
    resource: https://github.com/multigres/multigres
    title: "Multigres GitHub repository — 'Vitess for Postgres'"
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest gets backing after sole maintainer sounds alarm"
    author: org:the-register
---

# Summary
Supabase is the breakout commercial open-source database company of 2025-2026. Its valuation went from about $2B (Series D, $200M, Apr 22 2025)[^tc-series-d] to $5B (Series E, Oct 3 2025)[^sb-series-e] to $10.5B post-money (Series F, $500M led by GIC, June 4 2026)[^sb-series-f]. On Oct 2 2026 it added $150M more and announced the acquisition of Turso[^tipranks-150][^turso-joins]. Growth comes from AI coding tools: more than 60% of new databases are launched by AI tools, and database launches grew 600% year over year[^sb-series-f]. In Oct 2026 the company said it adds more than 1M users and 4M databases a month, with about 70% of new databases created by agents[^tipranks-150]. On the open-source side it is healthy. The main repo has 111k stars[^sb-gh], and Supabase funds deep Postgres projects: Multigres, OrioleDB, and co-funding of pgBackRest[^multigres-gh][^reg-pgbackrest].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-22 | $200M Series D at $2B led by Accel [^tc-series-d][^bdw-series-d] | Business | + |
| W24 | 2025-06-10 | Multigres ("Vitess for Postgres") repo created [^multigres-gh] | OSS | + |
| W12 | 2025-10-03 | $100M Series E at $5B (Accel, Peak XV; Figma joins) [^sb-series-e][^orrick-e] | Business | + |
| W6 | 2026-05-20 | Co-funds pgBackRest maintainer with AWS, Percona, pgEdge, Tiger Data [^reg-pgbackrest] | OSS | + |
| W6 | 2026-05-30 | Multigres v0.1.0 released [^multigres-gh] | OSS | + |
| W6 | 2026-06-04 | $500M Series F, $10.5B post, led by GIC [^sb-series-f][^cnbc-f] | Business | + |
| W3 | 2026-10-02 | $150M led by GIC (CapitalG joins). Agrees to acquire Turso. Launches Supabase Compute [^tipranks-150][^citybiz-150][^turso-joins] | Business | + |

# OSS successes
- Everything is Apache-2.0 and self-hostable. The main repo has about 111k stars, among the most-starred database projects on GitHub[^sb-gh].
- Supabase invests in deep Postgres infrastructure: Multigres (sharding and HA, v0.1 alpha June 2026)[^sb-series-f] and OrioleDB (aiming for production readiness in 2026)[^sb-series-f].
- It acts as an ecosystem steward, co-funding pgBackRest[^reg-pgbackrest].

# OSS failures / risks
- Multigres and OrioleDB are still pre-production. Most "Supabase OSS" value sits in the hosted product.
- After the Turso deal, Supabase stewards both libSQL/Turso (SQLite) and Postgres projects. That spreads focus.

# Business successes
- The valuation rose more than 5x in about 14 months[^tc-series-d][^sb-series-f]. Each round includes employee liquidity (up to 25% of vested stock)[^sb-series-e][^sb-series-f], and the company planned a $1M community round open to customers and contributors[^sb-series-e].
- Supabase sits inside agentic coding tools: AI tools launch more than 60% of new databases[^sb-series-f].

# Business failures / risks
- Concentration risk: growth depends on AI app builders and agent platforms. Most agent-created databases are tiny and short-lived, which may not translate into revenue in proportion to the valuation.
- Competitors are well funded: Databricks/Neon, ClickHouse Postgres, PlanetScale Postgres.

# By window
## W3
- $150M raise plus the Turso acquisition. Supabase Compute launched as agent sandboxes[^tipranks-150][^turso-joins].
## W6
- Series F at $10.5B. Multigres v0.1. pgBackRest funding[^sb-series-f][^reg-pgbackrest].
## W9
- No notable events found.
## W12
- Series E at $5B on 2025-10-03[^sb-series-e].
## W24
- Series D at $2B (Apr 2025). Multigres effort begins[^tc-series-d][^multigres-gh].

# Lessons
- An OSS Postgres company can command a premium valuation when it becomes the default target for code-generating agents. Distribution through AI tools matters more than feature differentiation.
- Using fresh capital to fund upstream infrastructure (sharding, storage engines, tooling) both builds goodwill and builds a technical moat.

# Related
- [/organizations/supabase.md](/organizations/supabase.md), [/organizations/turso.md](/organizations/turso.md)
- [/events/2025-10-supabase-series-e.md](/events/2025-10-supabase-series-e.md), [/events/2026-06-supabase-series-f.md](/events/2026-06-supabase-series-f.md), [/events/2026-10-supabase-acquires-turso.md](/events/2026-10-supabase-acquires-turso.md)
- [Turso / libSQL](/projects/databases/turso.md), [OrioleDB](/projects/databases/orioledb.md), [PostgreSQL](/projects/databases/postgresql.md), [Neon](/projects/databases/neon.md)

[^sb-gh]: GitHub API, supabase/supabase, 2026-10-03.
[^tc-series-d]: Fortune, 2025-04-22.
[^bdw-series-d]: BigDATAwire, 2025-04-24.
[^citybiz-150]: citybiz, 2026-10-02.
[^tc-series-e]: TechCrunch, 2025-10-03.
[^sb-series-e]: Supabase blog, 2025-10-03.
[^orrick-e]: Orrick, Oct 2025.
[^sb-series-f]: Supabase blog, 2026-06-04.
[^cnbc-f]: CNBC, 2026-06-04.
[^turso-joins]: Turso blog, 2026-10-02.
[^tipranks-150]: TipRanks, 2026-10-02.
[^multigres-gh]: GitHub, multigres/multigres.
[^reg-pgbackrest]: The Register, 2026-05-20.
