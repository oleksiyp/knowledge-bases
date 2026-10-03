---
type: OSS Project
title: Turso (libSQL and Turso Database)
description: "Open-contribution SQLite fork (libSQL) and a from-scratch Rust rewrite of SQLite (Limbo, now Turso Database, MIT), recently extended to Postgres compatibility. Its company agreed to join Supabase on Oct 2 2026."
resource: https://github.com/tursodatabase/turso
tags: [sqlite, rust, mit, embedded, ai-agents, acquired]
domain: databases
license: MIT
license_history: ["MIT (libSQL fork 2022-; Limbo/Turso rewrite announced 2024-12-)"]
governance: single-vendor
steward: Turso Inc. (joining Supabase)
backing_orgs: [organizations/turso, organizations/supabase]
metrics:
  github_stars_turso: { value: 24513, as_of: 2026-10-03 }
  github_stars_libsql: { value: 17250, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: turso-gh
    resource: https://github.com/tursodatabase/turso
    title: Turso GitHub repository
  - id: libsql-gh
    resource: https://github.com/tursodatabase/libsql
    title: libSQL GitHub repository
  - id: turso-blog
    resource: https://turso.tech/blog
    title: Turso blog index
    author: org:turso
  - id: turso-joins
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso is joining Supabase to give every agent its own database"
    author: org:turso
  - id: reg-turso-pg
    resource: https://www.theregister.com/databases/2026/07/29/after-rewriting-sqlite-in-rust-turso-turns-its-sights-on-postgres/5279835
    title: "The Register: After rewriting SQLite in Rust, Turso turns its sights on Postgres"
    author: org:the-register
  - id: tipranks-150
    resource: https://www.tipranks.com/news/private-companies/supabase-raises-150-million-and-acquires-turso-to-scale-agentic-database-infrastructure
    title: "TipRanks: Supabase raises $150 million and acquires Turso"
  - id: devclass-limbo
    resource: https://www.devclass.com/databases/2024/12/12/sqlite-re-implemented-in-rust-to-achieve-asynchronous-i/o-and-other-changes/1619246
    title: "DevClass: SQLite re-implemented in Rust to achieve asynchronous I/O and other changes (2024-12-12)"
  - id: turso-limbo-intro
    resource: https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust
    title: "Turso blog: Introducing Limbo, a complete rewrite of SQLite in Rust (2024-12-10)"
    author: org:turso
  - id: turso-all-in
    resource: https://turso.tech/blog/we-will-rewrite-sqlite-and-we-are-going-all-in
    title: "Turso blog: We will rewrite SQLite. And we are going all-in (2025-01-21)"
    author: org:turso
  - id: dbdb-turso
    resource: https://dbdb.io/db/turso/revisions/4
    title: "Database of Databases: Turso (history of the Limbo rename)"
  - id: reg-sqlite-bug
    resource: https://www.theregister.com/databases/2026/08/12/deeply-buried-16-year-old-sqlite-bug-caused-last-years-tailscale-outages/5287004
    title: "The Register: Deeply buried 16-year-old SQLite bug caused last year's Tailscale outages"
    author: org:the-register
---

# Summary
Turso pursued an aggressive open-source strategy around SQLite. First came libSQL, an open-contribution fork, since SQLite itself does not accept outside contributions. Then came a full Rust rewrite, codenamed Limbo and later renamed Turso Database, now at v0.8 with concurrent writes[^reg-turso-pg][^turso-gh][^turso-blog]. In July 2026 it went after Postgres too ("pgmicro", Postgres in Rust on the same VM, "the LLVM of databases")[^reg-turso-pg]. The business story ends in an acquisition. On Oct 2 2026 Supabase agreed to acquire Turso; no price was disclosed in Turso's announcement, betting on SQLite as the instant, per-agent database. Founder Glauber Costa becomes Supabase's Head of Agentic Services, and Turso Database and libSQL stay open source[^turso-joins][^tipranks-150].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-10 | Limbo (Rust SQLite rewrite, async I/O, deterministic simulation testing) announced [^turso-limbo-intro][^devclass-limbo] | OSS | + |
| W24 | 2025-01-21 | Turso goes "all-in" on the rewrite as its main engine (codename Limbo kept for now) [^turso-all-in] | OSS | + |
| W24 | 2025 (month unconfirmed) | Limbo renamed Turso and released as alpha, later beta [^dbdb-turso] | OSS | + |
| W3 | 2026-07-13 | Turso v0.7.0 [^turso-blog] | OSS | + |
| W3 | 2026-07-16 | "We're building Postgres in Rust" (pgmicro) [^turso-blog][^reg-turso-pg] | OSS | + |
| W3 | 2026-08-03 | SQLite concurrent writes early preview [^turso-blog] | OSS | + |
| W3 | 2026-09-29 | Turso v0.8 (concurrent writes) [^turso-blog][^turso-gh] | OSS | + |
| W3 | 2026-10-02 | Agrees to join Supabase. Costa becomes Head of Agentic Services [^turso-joins][^tipranks-150] | Business | + |

# OSS successes
- The Rust rewrite drew 24.5k stars, more than the libSQL fork (17.3k)[^turso-gh][^libsql-gh]. Both remain MIT.
- It positions memory-safe reimplementation as a reliability answer. SQLite's own bugs, such as the 16-year-old bug behind Tailscale outages, make that argument for it[^reg-sqlite-bug].

# OSS failures / risks
- Turso Database is still pre-1.0 (v0.8.x)[^turso-gh]. The project has to reach full SQLite compatibility and now also Postgres compatibility, which stretches focus.
- libSQL's long-term role next to the rewrite is unclear[^reg-turso-pg].

# Business successes
- The company exited to the fastest-growing open-source database company, which keeps the OSS commitments in place[^turso-joins].

# Business failures / risks
- The exit price was not disclosed. Turso did not scale as an independent edge-database company.

# By window
## W3
- v0.7.0 (Jul 13), pgmicro, concurrent writes, v0.8, new Turso Cloud regions (Oct 1), Supabase acquisition[^turso-blog][^turso-joins].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Limbo announced (Dec 10 2024), made the company's main engine (Jan 2025), then renamed Turso during 2025[^turso-limbo-intro][^turso-all-in][^dbdb-turso].

# Lessons
- Forking a "closed-contribution" OSS project (SQLite) and then rewriting it can build a community fast. Monetizing an embedded database stays hard, and acquisition by a platform is the natural exit.

# Related
- [/organizations/turso.md](/organizations/turso.md), [/events/2026-10-supabase-acquires-turso.md](/events/2026-10-supabase-acquires-turso.md), [Supabase](/projects/databases/supabase.md)

[^turso-gh]: GitHub API, tursodatabase/turso, 2026-10-03.
[^libsql-gh]: GitHub API, tursodatabase/libsql, 2026-10-03.
[^turso-blog]: Turso blog index.
[^turso-joins]: Turso blog, 2026-10-02.
[^reg-turso-pg]: The Register, 2026-07-29.
[^tipranks-150]: TipRanks, 2026-10-02.
[^reg-sqlite-bug]: The Register, 2026-08-12.
[^devclass-limbo]: DevClass, 2024-12-12.
[^turso-limbo-intro]: Turso blog, 2024-12-10.
[^turso-all-in]: Turso blog, 2025-01-21.
[^dbdb-turso]: dbdb.io Turso entry (gives year 2025 for the rename, no month).
