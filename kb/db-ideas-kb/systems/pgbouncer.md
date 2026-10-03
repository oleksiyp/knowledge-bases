---
type: System
title: PgBouncer
description: "Lightweight single-process connection pooler for PostgreSQL (2007). Still the default self-hosted pooler in 2026; version 1.21 (Oct 2023) closed its biggest gap by supporting prepared statements in transaction mode."
resource: https://www.pgbouncer.org
tags: [postgres, connection-pooling, serverless]
kind: oss
first_release: 2007
org: "PgBouncer community"
license: ISC
outcome: stable
ideas: [ideas/edge-devx/serverless-db-connectivity]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pga
    resource: https://pganalyze.com/blog/5mins-postgres-pgbouncer-prepared-statements-transaction-mode
    title: "pganalyze: PgBouncer 1.21 adds prepared statement support in transaction mode"
    author: org:pganalyze
  - id: crunchy
    resource: https://www.crunchydata.com/blog/prepared-statements-in-transaction-mode-for-pgbouncer
    title: "Crunchy Data: Prepared statements in transaction mode for PgBouncer"
    author: org:crunchy-data
  - id: supavisor
    resource: https://supabase.com/blog/supavisor-postgres-connection-pooler
    title: "Supabase: Supavisor 1.0"
    author: org:supabase
  - id: gh
    resource: https://github.com/pgbouncer/pgbouncer
    title: "PgBouncer GitHub repository"
---

# Summary
Postgres uses a process per connection, so applications with many clients put PgBouncer in front of it. Transaction-mode pooling multiplexes many clients onto a few server connections, but before 2023 it broke protocol-level prepared statements, a long-standing source of production bugs and slowdowns. PgBouncer 1.21 (October 2023) added `max_prepared_statements`. PgBouncer now tracks each client's prepared statements and re-prepares them on whichever server connection the client gets. SQL-level `PREPARE` still does not work[^pga][^crunchy]. Newer poolers challenged it: Supabase's Elixir-based Supavisor became Supabase's default in early 2024[^supavisor], and PgCat and cloud poolers (RDS Proxy, Hyperdrive) appeared. PgBouncer remained the self-hosting default and was still maintained in 2026 (about 4.4k stars)[^gh].

# Timeline
| Year | Event |
|---|---|
| 2007 | First release |
| 2023 | 1.21: prepared statements in transaction mode (Oct)[^pga] |
| 2024 | Supabase replaces it with Supavisor for its shared pooler[^supavisor] |

# What worked
- Simplicity and reliability, and a key building block for serverless Postgres.

# What didn't
- Single-threaded design and session-feature leaks under transaction pooling. Multi-tenant clouds built their own poolers.

# Related
[Serverless DB connectivity](/ideas/edge-devx/serverless-db-connectivity.md) · [Supabase](/systems/supabase.md) · [PostgreSQL](/systems/postgresql.md)
