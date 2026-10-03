---
type: System
title: libSQL
description: "Turso's open-source, open-contribution fork of SQLite (October 2022), adding network replication hooks, a server mode, embedded replicas and vector search. Widely used as a client library and the engine behind Turso Cloud, but positioned since 2025 as the predecessor of the Rust rewrite."
resource: https://github.com/tursodatabase/libsql
tags: [sqlite, fork, open-contribution]
kind: oss
first_release: 2022
org: "Turso"
license: MIT
outcome: stable
ideas: [ideas/edge-devx/sqlite-forks-and-rewrites, ideas/edge-devx/sqlite-in-production]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: family
    resource: https://turso.tech/blog/were-bringing-libsql-into-the-turso-family-8cc1a653448e
    title: "Turso: We're bringing libSQL into the Turso family"
    author: org:turso
  - id: limbo
    resource: https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust
    title: "Turso: Introducing Limbo (2024-12-10)"
    author: org:turso
  - id: gh
    resource: https://github.com/tursodatabase/libsql
    title: "libSQL GitHub repository"
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/@libsql/client
    title: "npm download API: @libsql/client, week ending 2026-10-01"
---

# Summary
In October 2022 the Turso (then ChiselStrike) team forked SQLite as libSQL. They could not upstream the WAL virtualization their replication needed, because SQLite is "Open Source, not Open Contribution"[^family]. libSQL added a server mode (sqld), replication, embedded replicas, `ALTER TABLE` extensions and native vector search. By December 2024 it had 12k stars and 85 contributors[^limbo]. The vector-search work persuaded the team that deep changes to SQLite's C code and closed test suite were too costly, so they started the Rust rewrite[^limbo]. libSQL remains production-ready and powers Turso Cloud, with about 17.3k GitHub stars and active commits[^gh], and `@libsql/client` drew about 3.9M weekly npm downloads in late September 2026[^npm]. Its role, though, is now a bridge to the Turso rewrite.

# Timeline
| Year | Event |
|---|---|
| 2022 | Fork announced (Oct)[^family] |
| 2023–24 | Server mode, embedded replicas, vector search |
| 2024 | Rust rewrite announced as its successor (Dec)[^limbo] |

# What worked
- It showed that demand existed for an open-contribution SQLite, and became a widely used client library.

# What didn't
- Hard to change deeply while staying close to upstream SQLite, which led to the rewrite.

# Related
[Turso](/systems/turso.md) · [SQLite](/systems/sqlite.md) · [SQLite forks and rewrites](/ideas/edge-devx/sqlite-forks-and-rewrites.md) · [libSQL fork event](/events/2022-10-libsql-fork.md)
