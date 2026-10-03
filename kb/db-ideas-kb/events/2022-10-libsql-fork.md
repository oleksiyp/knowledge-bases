---
type: Event
title: "Turso forks SQLite as libSQL"
description: "In October 2022 the team behind Turso forked SQLite as libSQL, an 'open source and open contribution' fork, because SQLite does not accept outside patches such as the WAL virtualization they needed."
date: "2022-10"
year: 2022
kind: fork
signal: mixed
ideas: [ideas/edge-devx/sqlite-forks-and-rewrites]
systems: [systems/libsql, systems/turso, systems/sqlite]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: family
    resource: https://turso.tech/blog/were-bringing-libsql-into-the-turso-family-8cc1a653448e
    title: "Turso: We're bringing libSQL into the Turso family"
    author: org:turso
  - id: gh
    resource: https://github.com/tursodatabase/libsql
    title: "libSQL GitHub repository"
---

# What happened
The ChiselStrike team, later Turso, published libSQL, a fork of SQLite open to outside contributions. They were building an edge-replicated SQLite service and had no way to upstream its core enabling change, WAL virtualization[^family]. (The exact day in October 2022 is unconfirmed; the month is from Turso's own account.)

# Why it matters
It was the first well-funded attempt to evolve SQLite outside its famously closed development process. The fork gained real use (17k+ stars[^gh]), but deep changes proved hard enough that Turso began a full Rust rewrite two years later.

# Related
[libSQL](/systems/libsql.md) · [SQLite forks and rewrites](/ideas/edge-devx/sqlite-forks-and-rewrites.md)
