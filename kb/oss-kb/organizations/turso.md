---
type: Organization
title: Turso Inc.
description: "Company behind libSQL and Turso Database (a Rust SQLite rewrite). It agreed to join Supabase on Oct 2 2026, with founder Glauber Costa becoming Supabase's Head of Agentic Services."
resource: https://turso.tech
tags: [commercial-open-source, sqlite, rust, acquired, ai-agents]
org_kind: coss-startup
hq: unverified
funding: { total_usd: "~$7M seed (trackers; unconfirmed)", last_round: "acquired by Supabase (undisclosed; announced 2026-10-02)", last_round_date: 2026-10-02, valuation_usd: "undisclosed" }
business_verdict: acquired
projects: [projects/databases/turso]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: turso-joins
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: Turso is joining Supabase
  - id: sb-turso-blog
    resource: https://supabase.com/blog/supabase-is-acquiring-turso
    title: "Supabase blog: Supabase is acquiring Turso (2026-10-02)"
    author: org:supabase
  - id: sa-supa-turso
    resource: https://siliconangle.com/2026/10/02/database-startup-supabase-raises-150m-acquires-turso/
    title: "SiliconANGLE: Database startup Supabase raises $150M, acquires Turso (2026-10-02)"
    author: org:siliconangle
  - id: reg-turso-pg
    resource: https://www.theregister.com/databases/2026/07/29/after-rewriting-sqlite-in-rust-turso-turns-its-sights-on-postgres/5279835
    title: "The Register: Turso turns its sights on Postgres"
---

# Summary
Turso started as ChiselStrike, forked SQLite as libSQL, rewrote SQLite in Rust (Limbo, now Turso Database) and in July 2026 began a Postgres-compatible frontend[^reg-turso-pg]. On Oct 2 2026 it agreed to join Supabase. Founder Glauber Costa (Head of Agentic Services), co-founder Pekka Enberg and the team move over, and Turso Database remains open source[^turso-joins][^sb-turso-blog]. The price was not disclosed[^sa-supa-turso].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W3 | 2026-07 | pgmicro (Postgres in Rust) [^reg-turso-pg] | + |
| W3 | 2026-10-02 | Joins Supabase [^turso-joins] | + |

# Monetization model
Turso Cloud (multi-tenant SQLite, database-per-agent/tenant). Now inside Supabase.

# Successes
- Built a strong OSS brand. Exited to a well-funded acquirer[^turso-joins].

# Failures / risks
- Did not scale independently. Terms undisclosed.

# Related
- [/projects/databases/turso.md](/projects/databases/turso.md), [Supabase](/organizations/supabase.md), [/events/2026-10-supabase-acquires-turso.md](/events/2026-10-supabase-acquires-turso.md)

[^turso-joins]: Turso blog, 2026-10-02.
[^reg-turso-pg]: The Register, 2026-07-29.
[^sb-turso-blog]: Supabase blog, 2026-10-02.
[^sa-supa-turso]: SiliconANGLE, 2026-10-02.
