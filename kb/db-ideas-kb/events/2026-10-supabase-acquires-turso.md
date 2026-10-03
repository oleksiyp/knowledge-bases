---
type: Event
title: "Supabase raises $150M and acquires Turso"
description: "On October 2, 2026 Supabase announced a $150M Series G and the acquisition of Turso (SQLite/libSQL and its Rust rewrite) to provide on-demand per-agent databases. It said 70% of new Supabase databases were created by agents or AI tools."
date: 2026-10-02
year: 2026
kind: acquisition
signal: mixed
ideas: [ideas/edge-devx/sqlite-forks-and-rewrites, ideas/edge-devx/reactive-backend-databases, ideas/edge-devx/sqlite-in-production]
systems: [systems/turso, systems/libsql, systems/supabase]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pr
    resource: https://www.prnewswire.com/news-releases/supabase-announces-150m-in-new-funding-and-turso-acquisition-302896752.html
    title: "Supabase announces $150M in new funding and Turso acquisition"
    author: org:supabase
---

# What happened
Supabase announced a $150M Series G led by GIC, four months after a $500M Series F that valued it at $10.5B, and said it was acquiring Turso. Turso's architecture enables "provisioning of on-demand per-agent databases" in public cloud and BYOC environments. The Turso platform will keep operating with "a clear graduation path" into Supabase. Supabase said it was adding more than 1M users and 4M databases a month, with 70% of new databases created by agents or AI-driven tools[^pr]. Terms were not disclosed.

# Why it matters
It joined the two strongest forces of this area: the Postgres-based BaaS platform and cheap embedded SQLite. Agents spin up huge numbers of small, short-lived databases, which favours SQLite-style files over Postgres instances. For Turso it ended the independent bet on forking and rewriting SQLite before the rewrite left beta.

# Related
[Turso](/systems/turso.md) · [Supabase](/systems/supabase.md) · [SQLite forks and rewrites](/ideas/edge-devx/sqlite-forks-and-rewrites.md) · [Reactive backends](/ideas/edge-devx/reactive-backend-databases.md)
