---
type: Event
title: "Supabase raises $500M Series F at $10.5B"
description: "On 2026-06-04 Supabase raised $500M led by GIC at a $10.5B post-money valuation, doubling in eight months as AI coding tools drove a 600% rise in database launches."
event_kind: funding
date: 2026-06-04
window: W6
impact: positive
projects: [projects/databases/supabase]
organizations: [organizations/supabase]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: supabase-f
    resource: "https://supabase.com/blog/supabase-series-f"
    title: "Supabase blog: Series F (2026-06-04)"
  - id: cnbc-supabase
    resource: "https://www.cnbc.com/2026/06/04/database-startup-supabase-raises-500-million-10point5-billion-valuation.html"
    title: "CNBC: Supabase raises $500M at $10.5B (2026-06-04)"
  - id: tc-supa-f
    resource: https://techcrunch.com/2026/06/05/supabase-doubles-valuation-to-10b-in-8-months/
    title: "TechCrunch: Supabase doubles valuation to $10B in 8 months (2026-06-05)"
    author: org:techcrunch
  - id: db-multigres
    resource: https://github.com/multigres/multigres
    title: "Multigres GitHub repository (v0.1.0 2026-05-30)"
---
# What happened
Supabase raised $500M at a $10B pre-money / ~$10.5B post-money valuation. GIC led; existing investors joined, Stripe invested again, Salesforce Ventures and Georgian joined. Supabase reported ~10M developers (doubled in eight months), database launches +600% YoY and >60% of new databases launched by AI tools; TechCrunch counts $800M raised across the Series D–F rounds[^supabase-f][^cnbc-supabase][^tc-supa-f].

# Why it matters
The clearest public metric of AI agents as the primary consumers of open source infrastructure.

# Outcome so far
Followed by a $150M raise and the Turso acquisition on 2026-10-02.

# Related
- [Supabase](/organizations/supabase.md), [/events/2026-10-supabase-acquires-turso.md](/events/2026-10-supabase-acquires-turso.md)

[^supabase-f]: Supabase blog: Series F (2026-06-04).
[^cnbc-supabase]: CNBC: Supabase raises $500M at $10.5B (2026-06-04).
[^tc-supa-f]: TechCrunch, 2026-06-05.

## Additional notes (databases)
- The Series F post also released Multigres v0.1 alpha (open source, a Vitess-style HA and sharding layer for Postgres) and set OrioleDB production readiness as a 2026 goal[^db-multigres].
- See [/projects/databases/supabase.md](/projects/databases/supabase.md), [/projects/databases/orioledb.md](/projects/databases/orioledb.md).

[^db-multigres]: GitHub, multigres/multigres.
