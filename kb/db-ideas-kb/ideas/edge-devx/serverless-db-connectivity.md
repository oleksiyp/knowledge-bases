---
type: Idea
title: "Serverless database connectivity: HTTP drivers and connection poolers"
description: "Making TCP-and-process-per-connection databases (Postgres, MySQL) usable from thousands of short-lived serverless and edge functions, using HTTP/WebSocket drivers and external poolers (PgBouncer, Supavisor, Hyperdrive, RDS Proxy). Verdict: won. It is unglamorous infrastructure that every serverless Postgres vendor now ships."
tags: [connection-pooling, serverless, postgres, pgbouncer, drivers]
area: edge-devx
verdict: won
hype_peak: 2023
adoption_2026: mainstream
origins: "PgBouncer (2007) for long-lived app servers; AWS RDS Proxy (2019/2020) for Lambda."
key_systems: [systems/pgbouncer, systems/neon, systems/supabase, systems/planetscale, systems/cloudflare-d1]
related_ideas: [ideas/edge-devx/edge-databases, ideas/edge-devx/type-safe-orms, ideas/cloud-architecture/serverless-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pgb-121
    resource: https://pganalyze.com/blog/5mins-postgres-pgbouncer-prepared-statements-transaction-mode
    title: "pganalyze: PgBouncer 1.21 adds prepared statement support in transaction mode (Oct 2023)"
    author: org:pganalyze
  - id: supavisor
    resource: https://supabase.com/blog/supavisor-postgres-connection-pooler
    title: "Supabase: Supavisor 1.0, a scalable connection pooler for Postgres"
    author: org:supabase
  - id: supavisor-1m
    resource: https://supabase.com/blog/supavisor-1-million
    title: "Supabase: Supavisor, scaling Postgres to 1 million connections"
    author: org:supabase
  - id: neon-driver
    resource: https://neon.com/blog/serverless-driver-for-postgres
    title: "Neon: Edge-compatible serverless driver for Postgres"
    author: org:neon
  - id: hyperdrive
    resource: https://www.infoq.com/news/2023/10/cloudflare-hyperdrive-postgres
    title: "InfoQ: Cloudflare Hyperdrive (Oct 2023)"
    author: org:infoq
  - id: npm-neon
    resource: https://api.npmjs.org/downloads/point/last-week/@neondatabase/serverless
    title: "npm download API: @neondatabase/serverless, week ending 2026-10-01"
  - id: prisma7
    resource: https://www.prisma.io/blog/announcing-prisma-orm-7-0-0
    title: "Prisma 7 release (2025-11-19)"
    author: org:prisma
---

# Summary
**Won, quietly.** Postgres forks a process per connection and expects long-lived TCP clients. Serverless functions open many short connections, and V8-isolate edge runtimes (Cloudflare Workers, Vercel Edge) could not open raw TCP at all. Between 2020 and 2024 the industry solved this with two plain techniques. **Connection poolers**: PgBouncer finally supported prepared statements in transaction mode in version 1.21 (October 2023)[^pgb-121]. Supabase built Supavisor in Elixir and demonstrated a million client connections[^supavisor-1m], and Cloudflare offered Hyperdrive with pooling it says will always be free[^hyperdrive]. **HTTP and WebSocket drivers**: Neon's serverless driver tunnels the Postgres protocol over WebSockets or runs one-shot queries over HTTP[^neon-driver], with about 5.1M weekly npm downloads in late September 2026[^npm-neon]. PlanetScale and Turso shipped similar drivers. By 2026 "connect from anywhere" was a checkbox for every serverless database, and ORMs were rebuilt to run in those runtimes[^prisma7].

# The idea
Put a multiplexing layer between many ephemeral clients and few database backends, and speak a protocol that the most restricted runtimes allow, which means HTTP.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2019–20 | AWS RDS Proxy for Lambda | + |
| 2022 | Neon serverless driver (WebSockets, later HTTP) and PlanetScale's HTTP driver[^neon-driver] | + |
| 2023 | PgBouncer 1.21: prepared statements in transaction mode (Oct)[^pgb-121]. Cloudflare Hyperdrive beta (Sep–Oct)[^hyperdrive]. Supavisor 1.0 at Supabase[^supavisor] | + |
| 2024 | Supabase makes Supavisor its default pooler[^supavisor]. D1 GA as a SQLite alternative | + |
| 2025 | Prisma 7 drops its binary engine, partly for edge compatibility[^prisma7] | + |

# What succeeded
- **Transaction-mode pooling** plus protocol-level prepared statements removed the old PgBouncer trade-off[^pgb-121].
- **HTTP query endpoints** made databases callable from any runtime, including AI tool calls.
- **Pooling as a free platform feature** (Hyperdrive[^hyperdrive], Supavisor[^supavisor]) rather than something each user operates.

# What didn't
- **Session semantics.** Advisory locks, `SET`, `LISTEN/NOTIFY` and SQL-level `PREPARE` still break under transaction pooling[^pgb-121]. The abstraction leaks.
- **A Postgres-native fix.** Core Postgres still uses a process per connection in 2026. The problem is solved around the database, not in it.
- **New poolers vs PgBouncer.** PgCat and Supavisor did not displace PgBouncer for self-hosters.

# Why
The problem was narrow and well understood, and vendors had a direct revenue reason to fix it: serverless Postgres (Neon, Supabase) and edge platforms could not sell without it. Old components (PgBouncer) kept their place by adding the one missing feature. The protocol change to HTTP was the bigger shift, and it later helped AI agents, which call databases through stateless tool invocations.

# Lessons
- Infrastructure gaps with clear revenue attached get solved fast, usually by middleware rather than the core.
- Leaky abstractions such as transaction pooling are acceptable when documented, and fatal when hidden.

# Related
[PgBouncer](/systems/pgbouncer.md) · [Neon](/systems/neon.md) · [Supabase](/systems/supabase.md) · [Edge databases](/ideas/edge-devx/edge-databases.md) · [Type-safe ORMs](/ideas/edge-devx/type-safe-orms.md) · [Serverless databases](/ideas/cloud-architecture/serverless-databases.md)
