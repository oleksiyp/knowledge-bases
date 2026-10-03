---
type: Event
title: "Gel (formerly EdgeDB) shuts down; team joins Vercel"
description: "On December 2, 2025 Gel Data announced it was shutting down Gel Cloud (closed January 31, 2026) and its team was joining Vercel to work on Python. The most serious 2020s attempt at a new query language over Postgres ended."
date: 2025-12-02
year: 2025
kind: shutdown
signal: negative
ideas: [ideas/edge-devx/sql-alternatives, ideas/edge-devx/reactive-backend-databases]
systems: [systems/edgedb-gel]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: vercel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: "Gel joins Vercel"
    author: org:gel
  - id: hn
    resource: https://news.ycombinator.com/item?id=46168814
    title: "HN: Gel (ex EdgeDB) shutting down, team joins Vercel"
  - id: rename
    resource: https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future
    title: "EdgeDB is now Gel and Postgres is the Future (2025-02-25)"
    author: org:gel
---

# What happened
Gel Cloud stopped accepting registrations and new instances immediately and shut down on January 31, 2026. The open-source database stays on GitHub, with migration guides to managed Postgres[^vercel]. The founders, Python core contributors, joined Vercel to build Python support. The founder's own explanation: building on Postgres created category confusion (people compared Gel to ORMs), and the company tried to do too much, "boiling the ocean"[^vercel][^hn]. Nine months earlier the company had renamed itself from EdgeDB and added full SQL[^rename].

# Why it matters
It is a direct test of the "replace SQL" thesis, and the result was negative. Even a technically admired language on top of Postgres could not overcome the SQL and ORM ecosystem.

# Related
[Gel (EdgeDB)](/systems/edgedb-gel.md) · [SQL alternatives](/ideas/edge-devx/sql-alternatives.md)
