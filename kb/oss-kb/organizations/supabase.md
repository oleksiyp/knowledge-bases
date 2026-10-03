---
type: Organization
title: Supabase
description: "Open source Postgres development platform that became the default backend for AI coding agents; valuation went $2B → $5B (Oct 2025) → $10.5B (Jun 2026), and it agreed to acquire Turso alongside a $150M raise (Oct 2026)."
resource: https://supabase.com
tags: [commercial-open-source, postgres, backend-as-a-service, ai-native, vibe-coding]
org_kind: coss-startup
hq: Singapore / remote
funding: { total_usd: ">$1B (TechCrunch: $800M across Series D–F; plus earlier rounds and $150M in Oct 2026)", last_round: "$150M (GIC lead; CapitalG, IronArc, Square Peg)", last_round_date: 2026-10-02, valuation_usd: "$10.5B post (Series F, Jun 2026); Oct 2026 valuation undisclosed" }
business_verdict: thriving
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: supabase-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase blog: Series F (2026-06-04)"
  - id: cnbc-supabase
    resource: https://www.cnbc.com/2026/06/04/database-startup-supabase-raises-500-million-10point5-billion-valuation.html
    title: "CNBC: Supabase raises $500M at $10.5B valuation (2026-06-04)"
  - id: gn-supa-e
    resource: https://techcrunch.com/2025/10/03/supabase-nabs-5b-valuation-four-months-after-hitting-2b/
    title: "TechCrunch: Supabase nabs $5B valuation four months after hitting $2B (2025-10-03)"
    author: org:techcrunch
  - id: tc-supa-f
    resource: https://techcrunch.com/2026/06/05/supabase-doubles-valuation-to-10b-in-8-months/
    title: "TechCrunch: Supabase doubles valuation to $10B in 8 months (2026-06-05)"
    author: org:techcrunch
  - id: sb-turso-blog
    resource: https://supabase.com/blog/supabase-is-acquiring-turso
    title: "Supabase blog: Supabase is acquiring Turso (2026-10-02)"
    author: org:supabase
  - id: sa-supa-turso
    resource: https://siliconangle.com/2026/10/02/database-startup-supabase-raises-150m-acquires-turso/
    title: "SiliconANGLE: Database startup Supabase raises $150M, acquires Turso (2026-10-02)"
    author: org:siliconangle
  - id: turso-supabase
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso blog: Turso is joining Supabase (2026-10-02)"
  - id: db-sb-series-d
    resource: https://www.fortune.com/2025/04/22/exclusive-supabase-raises-200-million-series-d-at-2-billion-valuation
    title: "Fortune: Exclusive — Supabase raises $200M Series D at $2B valuation (2025-04-22)"
    author: org:fortune
  - id: db-multigres
    resource: https://github.com/multigres/multigres
    title: "Multigres GitHub repository (v0.1.0, 2026-05-30)"
  - id: db-reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest gets backing from AWS, Percona, Supabase, pgEdge, Tiger Data (2026-05-20)"
  - id: db-tipranks
    resource: https://www.tipranks.com/news/private-companies/supabase-raises-150-million-and-acquires-turso-to-scale-agentic-database-infrastructure
    title: "TipRanks: Supabase raises $150M (GIC, CapitalG, IronArc, Square Peg) and acquires Turso; launches Supabase Compute"
---

# Summary
Supabase is the breakout COSS company of the "vibe coding" era. It raised **$200M at $2B** (Series D, Accel lead, 2025-04-22)[^db-sb-series-d], **$100M at $5B** (Series E, Accel and Peak XV, 2025-10-03)[^gn-supa-e], then a **$500M Series F led by GIC at $10B pre / ~$10.5B post** (2026-06-04) with Stripe, Salesforce Ventures and Georgian participating[^supabase-f][^cnbc-supabase][^tc-supa-f]. It reports ~10M developers, database launches +600% YoY, and **>60% of new databases launched by AI tools**, with Claude Code the largest contributor in 2026[^supabase-f][^cnbc-supabase]. On **2026-10-02** it announced a further **$150M (GIC-led, with CapitalG, IronArc and Square Peg; proceeds partly for employee liquidity)** and an agreement to acquire **Turso** (SQLite/libSQL in Rust) for an undisclosed price to give "every agent its own database"; Turso founder Glauber Costa becomes Head of Agentic Services and co-founder Pekka Enberg also joins[^turso-supabase][^sb-turso-blog][^sa-supa-turso]. Supabase says it launches over one million databases per week[^sb-turso-blog].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-04-22 | $200M Series D at $2B (Accel)[^db-sb-series-d] | + |
| W12 | 2025-10-03 | $100M Series E at $5B[^gn-supa-e] | + |
| W6 | 2026-06-04 | $500M Series F at ~$10.5B post (GIC)[^supabase-f][^tc-supa-f] | + |
| W3 | 2026-10-02 | $150M (GIC) + agreement to acquire Turso (undisclosed); Supabase Compute launched[^sb-turso-blog][^sa-supa-turso] | + |

# Monetization model
Managed Postgres platform (usage tiers) built from Apache/MIT/PostgreSQL-licensed components; self-hostable.

# Successes
- Clearest public metric of AI-agent-driven OSS consumption[^supabase-f].

# Failures / risks
- Dependence on AI coding tools (Claude Code, Codex, Lovable) as distribution; free-tier economics of millions of throwaway agent databases.

# Related
- [COSS funding](/projects/coss-market/coss-funding-2024-2026.md), [/events/2026-06-supabase-series-f.md](/events/2026-06-supabase-series-f.md), [/events/2026-10-supabase-acquires-turso.md](/events/2026-10-supabase-acquires-turso.md)

[^supabase-f]: Supabase blog, 2026-06-04.
[^cnbc-supabase]: CNBC, 2026-06-04.
[^gn-supa-e]: TechCrunch, 2025-10-03.
[^turso-supabase]: Turso blog, 2026-10-02.
[^tc-supa-f]: TechCrunch, 2026-06-05.
[^sb-turso-blog]: Supabase blog, 2026-10-02.
[^sa-supa-turso]: SiliconANGLE, 2026-10-02.

## Additional notes (databases)
- **Date correction:** Primary press coverage dates the $200M Series D at a $2B valuation to **2025-04-22** (Fortune), not June 2025[^db-sb-series-d]. (Pass 2: timeline row corrected accordingly.)
- **OSS investments:** Supabase backs Multigres ("Vitess for Postgres", Apache-2.0, v0.1.0 on 2026-05-30)[^db-multigres] and OrioleDB (beta). In May 2026 it co-funded the pgBackRest maintainer after Snowflake's Crunchy Data purchase left the project without a sponsor[^db-reg-pgbackrest].
- **Oct 2026 round detail:** The $150M was led by GIC, with CapitalG, IronArc and Square Peg. Supabase also launched "Supabase Compute", hosted sandboxes for long-running agents[^sa-supa-turso], and press coverage reports more than 1M new users and ~4M new databases a month, about 70% agent-created[^db-tipranks] (Supabase's own blog says "over one million databases per week"[^sb-turso-blog]).
- Domain project files: [/projects/databases/supabase.md](/projects/databases/supabase.md), [/projects/databases/turso.md](/projects/databases/turso.md), [/projects/databases/orioledb.md](/projects/databases/orioledb.md).

[^db-sb-series-d]: Fortune, 2025-04-22.
[^db-multigres]: GitHub, multigres/multigres.
[^db-reg-pgbackrest]: The Register, 2026-05-20.
[^db-tipranks]: TipRanks, 2026-10-02.
