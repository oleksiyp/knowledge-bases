---
type: System
title: SQLite
description: "Public-domain, in-process SQL database engine and the most widely deployed database. Between 2018 and 2026 it became a credible server-side and edge database, while staying closed to outside contributions."
resource: https://www.sqlite.org
tags: [embedded, sqlite, public-domain, oltp]
kind: oss
first_release: 2000
org: "D. Richard Hipp / Hwaci (SQLite Consortium)"
license: Public domain
outcome: thriving
ideas: [ideas/edge-devx/sqlite-in-production, ideas/edge-devx/sqlite-forks-and-rewrites, ideas/edge-devx/edge-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: mostdeployed
    resource: https://www.sqlite.org/mostdeployed.html
    title: "SQLite: Most Widely Deployed and Used Database Engine"
    author: org:sqlite
  - id: rails8
    resource: https://rubyonrails.org/2024/11/7/rails-8-no-paas-required
    title: "Rails 8.0: No PaaS Required (2024-11-07)"
    author: org:rails
  - id: do-sqlite
    resource: https://blog.cloudflare.com/sqlite-in-durable-objects/
    title: "Cloudflare: Zero-latency SQLite storage in every Durable Object (2024-09-26)"
    author: org:cloudflare
  - id: libsql-family
    resource: https://turso.tech/blog/were-bringing-libsql-into-the-turso-family-8cc1a653448e
    title: "Turso: We're bringing libSQL into the Turso family"
    author: org:turso
  - id: limbo
    resource: https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust
    title: "Turso: Introducing Limbo (2024-12-10)"
    author: org:turso
---

# Summary
SQLite's developers estimate "over one trillion (1e12) SQLite databases in active use", mostly on phones[^mostdeployed]. The 2018–2026 story is its move from client-side storage to a production server database. Litestream, Cloudflare D1 and Durable Objects, and Rails 8's production-SQLite defaults all built on it[^do-sqlite][^rails8]. Its development model, public domain but closed to outside contributions with a proprietary test suite (TH3), made it extremely reliable. It also pushed companies that wanted structural changes, such as replication hooks, concurrent writers or vector search, to fork it (libSQL) or rewrite it (Turso)[^libsql-family][^limbo].

# Timeline
| Year | Event |
|---|---|
| 2018–2024 | Steady additions: window functions, UPSERT, generated columns, `RETURNING`, STRICT tables, JSONB |
| 2021 | Litestream makes server-side SQLite durable through WAL streaming to S3 |
| 2022 | libSQL fork. Cloudflare D1 announced |
| 2024 | D1 GA. SQLite-backed Durable Objects. Rails 8 defaults[^rails8] |
| 2024 | Limbo, a Rust rewrite, announced by Turso[^limbo] |

# What worked
- Reliability and compatibility: a stable file format and a test culture that others treat as the benchmark.
- In-process reads with no network hop, which suit single-node web apps and per-tenant databases on fast NVMe.

# What didn't
- One writer per database. `BEGIN CONCURRENT` and HC-tree stayed on experimental branches, so write-heavy multi-user workloads still need a server database.
- No network replication or server mode in core. Each distributed SQLite product had to build its own.

# Related
[SQLite in production](/ideas/edge-devx/sqlite-in-production.md) · [libSQL](/systems/libsql.md) · [Turso](/systems/turso.md) · [Litestream](/systems/litestream.md) · [Cloudflare D1](/systems/cloudflare-d1.md)
