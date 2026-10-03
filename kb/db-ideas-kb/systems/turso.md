---
type: System
title: Turso
description: "Company and products built on SQLite: the Turso Cloud service (on the libSQL fork, 2023) and the Turso Database, a from-scratch Rust rewrite of SQLite (announced as Limbo in Dec 2024, still beta in 2026). It dropped edge replicas in 2025 and agreed to be acquired by Supabase in October 2026."
resource: https://turso.tech
tags: [sqlite, rust, edge, per-tenant-databases]
kind: product
first_release: 2023
org: "Turso (formerly ChiselStrike); acquired by Supabase, 2026"
license: MIT
outcome: acquired
ideas: [ideas/edge-devx/sqlite-forks-and-rewrites, ideas/edge-devx/edge-databases, ideas/edge-devx/sqlite-in-production]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: limbo
    resource: https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust
    title: "Turso: Introducing Limbo (2024-12-10)"
    author: org:turso
  - id: changes
    resource: https://turso.tech/blog/upcoming-changes-to-the-turso-platform-and-roadmap
    title: "Turso: Upcoming changes to the Turso Platform and Roadmap (2025-01-21)"
    author: org:turso
  - id: supabase-turso
    resource: https://www.prnewswire.com/news-releases/supabase-announces-150m-in-new-funding-and-turso-acquisition-302896752.html
    title: "Supabase announces $150M in new funding and Turso acquisition (2026-10-02)"
    author: org:supabase
  - id: gh
    resource: https://github.com/tursodatabase/turso
    title: "tursodatabase/turso GitHub repository"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary
Turso began as a managed, edge-replicated SQLite service built on the team's libSQL fork, which was itself born of SQLite's refusal of outside contributions. Its notable features were cheap databases (many per account) and embedded replicas, meaning a local SQLite file inside the app that syncs from the primary. In December 2024 it announced Limbo, a full Rust rewrite of SQLite with async I/O (io_uring), deterministic simulation testing with Antithesis, and early benchmarks about 20% faster than SQLite on the same queries[^limbo][^pavlo-2024]. In January 2025 it renamed the rewrite Turso and cut the platform back: no new edge replicas ("70% of Turso users never create geographical replicas"), no multi-DB schemas, and a move from Fly.io to AWS[^changes]. By October 2026 the rewrite had about 24.5k GitHub stars and was still labelled beta[^gh]. On October 2, 2026 Supabase announced it was acquiring Turso to provide on-demand "per-agent databases"; the Turso platform continues with a "graduation path" into Supabase[^supabase-turso].

# Timeline
| Year | Event |
|---|---|
| 2022 | libSQL fork (Oct) |
| 2023 | Turso platform launches on libSQL with edge replicas |
| 2024 | Limbo announced (Dec 10)[^limbo] |
| 2025 | Edge replicas dropped. Limbo renamed Turso (Jan 21)[^changes] |
| 2026 | Acquired by Supabase (Oct 2)[^supabase-turso] |

# What worked
- Database-per-tenant and per-agent economics, which is what Supabase bought.
- Embedded replicas, and a credible open engineering culture around the rewrite.

# What didn't
- Edge replication, the founding product thesis[^changes].
- Running a fork, a rewrite and a cloud service at the same time was more than a startup could fund independently.

# Related
[libSQL](/systems/libsql.md) · [SQLite](/systems/sqlite.md) · [Supabase](/systems/supabase.md) · [SQLite forks and rewrites](/ideas/edge-devx/sqlite-forks-and-rewrites.md) · [Edge databases](/ideas/edge-devx/edge-databases.md)
