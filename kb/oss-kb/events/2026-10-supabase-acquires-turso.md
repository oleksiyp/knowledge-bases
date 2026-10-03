---
type: Event
title: "Supabase acquires Turso and raises $150M"
description: "On 2026-10-02 Supabase announced a $150M GIC-led raise and the acquisition of Turso (SQLite/libSQL rewritten in Rust) to give every AI agent its own database."
event_kind: acquisition
date: 2026-10-02
window: W3
impact: positive
projects: [projects/databases/turso, projects/databases/supabase]
organizations: [organizations/supabase, organizations/turso]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sb-turso-blog
    resource: https://supabase.com/blog/supabase-is-acquiring-turso
    title: "Supabase blog: Supabase is acquiring Turso (2026-10-02)"
    author: org:supabase
  - id: sa-supa-turso
    resource: https://siliconangle.com/2026/10/02/database-startup-supabase-raises-150m-acquires-turso/
    title: "SiliconANGLE: Database startup Supabase raises $150M, acquires Turso (2026-10-02)"
    author: org:siliconangle
  - id: turso-supabase
    resource: "https://turso.tech/blog/turso-is-joining-supabase"
    title: "Turso blog: Turso is joining Supabase (2026-10-02)"
  - id: db-reg-turso-pg
    resource: https://www.theregister.com/databases/2026/07/29/after-rewriting-sqlite-in-rust-turso-turns-its-sights-on-postgres/5279835
    title: "The Register: After rewriting SQLite in Rust, Turso turns its sights on Postgres (2026-07-29)"
  - id: db-turso-gh
    resource: https://github.com/tursodatabase/turso
    title: "Turso GitHub repository (24.5k stars; v0.8.1 2026-09-29)"
---
# What happened
On 2 Oct 2026 Supabase announced an agreement to acquire Turso; both products continue (Postgres and SQLite), with small agent tasks running on Turso and a migration path to Postgres/Multigres as workloads grow. Founder Glauber Costa becomes Head of Agentic Services and co-founder Pekka Enberg joins; Turso Database "remains open source and actively developed"[^turso-supabase][^sb-turso-blog]. Neither company disclosed the price[^sa-supa-turso]. The same day Supabase announced a $150M round led by GIC with CapitalG, IronArc and Square Peg (proceeds partly for employee liquidity; valuation undisclosed) and launched Supabase Compute, hosted sandboxes for long-running agents[^sa-supa-turso]. Supabase says it launches over one million databases per week[^sb-turso-blog]; press reports cite ~70% created by agents or AI tools (Corrected in pass 2: the 70% figure comes from press coverage, not the Turso blog).

# Why it matters
Extends the Postgres land-grab to SQLite and bets on per-agent databases as a new workload class.

# Outcome so far
Announced one day before this review; closing status not stated by either company; integration pending.

# Related
- [Supabase](/organizations/supabase.md), [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md)

[^turso-supabase]: Turso blog: Turso is joining Supabase (2026-10-02).
[^sb-turso-blog]: Supabase blog, 2026-10-02.
[^sa-supa-turso]: SiliconANGLE, 2026-10-02.

## Additional notes (databases)
- **What Supabase is buying, OSS-wise:** libSQL (MIT SQLite fork, 17.3k stars) and Turso Database (MIT Rust rewrite, formerly Limbo, 24.5k stars, v0.8 with concurrent writes)[^db-turso-gh]. Since July 2026 this also includes "pgmicro", an experimental Postgres-compatible frontend on the same engine[^db-reg-turso-pg]. Both projects are stated to remain open source. Co-founder Pekka Enberg also joins Supabase.
- See [/projects/databases/turso.md](/projects/databases/turso.md), [/organizations/turso.md](/organizations/turso.md).

[^db-reg-turso-pg]: The Register, 2026-07-29.
[^db-turso-gh]: GitHub API, 2026-10-03.
