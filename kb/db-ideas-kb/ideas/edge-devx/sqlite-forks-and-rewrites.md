---
type: Idea
title: "Forking and rewriting SQLite (libSQL, Turso)"
description: "Building a company on an open-contribution fork of SQLite (libSQL, 2022) and then a from-scratch Rust rewrite (Limbo, now Turso, 2024). Verdict: mixed. The fork got real adoption as a client and server library, but the rewrite was still in beta in 2026, and the company sold to Supabase in October 2026."
tags: [sqlite, fork, rust, rewrite, deterministic-simulation-testing]
area: edge-devx
verdict: mixed
hype_peak: 2025
adoption_2026: niche
origins: "SQLite has been public domain since 2000 but does not accept outside contributions. Earlier derivatives such as SQLCipher stayed narrow; libSQL (Oct 2022) was the first venture-funded general fork."
key_systems: [systems/libsql, systems/turso, systems/sqlite, systems/antithesis]
related_ideas: [ideas/edge-devx/sqlite-in-production, ideas/edge-devx/edge-databases, ideas/hardware-engines/rust-database-rewrites]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: libsql-gh
    resource: https://github.com/tursodatabase/libsql
    title: "libSQL GitHub repository"
    author: org:turso
  - id: libsql-family
    resource: https://turso.tech/blog/were-bringing-libsql-into-the-turso-family-8cc1a653448e
    title: "Turso: We're bringing libSQL into the Turso family"
    author: org:turso
  - id: limbo
    resource: https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust
    title: "Turso: Introducing Limbo, a complete rewrite of SQLite in Rust (2024-12-10)"
    author: org:turso
  - id: turso-changes
    resource: https://turso.tech/blog/upcoming-changes-to-the-turso-platform-and-roadmap
    title: "Turso: Upcoming changes to the Turso Platform and Roadmap (2025-01-21)"
    author: org:turso
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: supabase-turso
    resource: https://www.prnewswire.com/news-releases/supabase-announces-150m-in-new-funding-and-turso-acquisition-302896752.html
    title: "Supabase announces $150M in new funding and Turso acquisition (2026-10-02)"
    author: org:supabase
  - id: gh-turso
    resource: https://github.com/tursodatabase/turso
    title: "Turso (Rust rewrite) GitHub repository"
  - id: npm-libsql
    resource: https://api.npmjs.org/downloads/point/last-week/@libsql/client
    title: "npm download API: @libsql/client and @tursodatabase/database, week ending 2026-10-01"
---

# Summary
**Mixed.** Turso forked SQLite in October 2022 as libSQL[^libsql-gh] because SQLite is "open source, not open contribution" and the team could not upstream the WAL virtualization its replication product needed[^libsql-family]. libSQL became useful infrastructure: the `@libsql/client` package had about 3.9M weekly npm downloads in late September 2026[^npm-libsql]. But the fork did not let Turso change SQLite deeply. Adding vector search showed that real changes required invasive edits to a C codebase whose full test suite is proprietary[^limbo]. So in December 2024 Turso started a second bet, a full Rust rewrite (Limbo, renamed Turso in January 2025)[^limbo][^turso-changes]. To pay for it, Turso cut platform features: no new edge replicas, no multi-DB schemas, and a move off Fly.io[^turso-changes]. By October 2026 the rewrite had about 24.5k GitHub stars but was still described as beta[^gh-turso], and Supabase announced it was acquiring Turso for "per-agent databases"[^supabase-turso]. The *technology* was interesting. As an *independent business* it did not reach escape velocity.

# The idea
SQLite is the most deployed database but changes slowly and closes its development to outsiders. A fork could add what server-side users want, such as network replication, a server mode, vector search, `ALTER TABLE` improvements, encryption and concurrent writes, while staying file-format compatible. A rewrite could go further: async I/O (io_uring), MVCC for concurrent writers, memory safety, and deterministic simulation testing instead of SQLite's proprietary TH3 test suite[^limbo].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2022 | libSQL fork announced (Oct)[^libsql-family] | + |
| 2023–24 | Turso platform built on libSQL: edge replicas, embedded replicas, vector search | + |
| 2024 | Limbo, a Rust rewrite, announced (Dec 10). libSQL had 12k stars and 85 contributors by then[^limbo] | + |
| 2025 | Limbo renamed Turso. Edge replicas and multi-DB schemas dropped for new users. Fly.io phased out[^turso-changes] | − |
| 2025 | Pavlo notes the rewrite's reliance on deterministic simulation testing with Antithesis[^pavlo-2024] | + |
| 2026 | Supabase acquires Turso (Oct 2)[^supabase-turso] | +/− |

# What succeeded
- **libSQL as a building block.** The TypeScript client is widely used: 3.9M weekly downloads against about 89k for the new `@tursodatabase/database` package[^npm-libsql]. Embedded replicas, a local SQLite file synced from a primary, were a good idea that Turso kept after dropping edge replicas[^turso-changes].
- **Showing that SQLite can be re-engineered.** The Rust rewrite built an open test culture around deterministic simulation and Antithesis[^limbo][^pavlo-2024], and attracted a large contributor base.
- **Exit.** The acquisition by Supabase, at a time when "70% of new databases [are] created by agents", valued the cheap, per-agent database model[^supabase-turso].

# What failed
- **Edge replication as the product.** It was the original reason for the fork and was effectively abandoned in 2025[^turso-changes].
- **Fork maintenance cost.** Keeping a C fork in sync while changing internals was hard enough that the company chose to rewrite instead[^limbo].
- **Time to production.** About 21 months after the rewrite was announced, it was still beta, not the engine behind Turso Cloud[^gh-turso].

# Why
SQLite's moat is not its code. It is decades of testing and a near-zero defect rate, which a fork inherits only as long as it stays close to upstream. Every deep change to a fork costs you that inheritance. A rewrite resets it to zero and must rebuild trust from scratch, as Pavlo pointed out[^pavlo-2024]. Meanwhile the edge-replica product that justified the fork found little demand. Startups that bet on rebuilding a foundation-level component need a long runway, and in 2025–26 the money for that went to companies that could sell to AI-agent builders. That is the angle that led to the Supabase deal.

# Lessons
- Forking a famously reliable project costs more than it seems, because the testing is the product.
- A rewrite in a safer language is a multi-year bet. Fund it as one, or find an acquirer who needs it.
- Pivot features ruthlessly when data says users don't use them (Turso's 70% statistic).

# Related
[libSQL](/systems/libsql.md) · [Turso](/systems/turso.md) · [SQLite](/systems/sqlite.md) · [SQLite in production](/ideas/edge-devx/sqlite-in-production.md) · [Limbo announcement](/events/2024-12-turso-limbo-rust-rewrite.md) · [Supabase acquires Turso](/events/2026-10-supabase-acquires-turso.md) · [Supabase](/systems/supabase.md) · [Rust database rewrites](/ideas/hardware-engines/rust-database-rewrites.md) · [Deterministic simulation testing](/ideas/distributed-sql/deterministic-simulation-testing.md)
