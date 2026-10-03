---
type: System
title: ElectricSQL
description: "Postgres sync engine. Started (2022–24) as an ambitious CRDT-based active-active Postgres-to-SQLite replication system, was rebuilt in July 2024 as a read-path 'shapes over HTTP' engine, and reached 1.0 in March 2025. A case study in cutting scope to ship."
resource: https://electric.ax
tags: [sync, postgres, local-first, crdt]
kind: oss
first_release: 2023
org: "Electric DB Ltd"
license: Apache-2.0
outcome: growing
ideas: [ideas/edge-devx/sync-engines, ideas/edge-devx/local-first-crdts]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: next
    resource: https://electric.ax/blog/2024/07/17/electric-next
    title: "ElectricSQL: A new approach to building Electric (2024-07-17)"
    author: org:electricsql
  - id: v1
    resource: https://electric.ax/blog/2025/03/17/electricsql-1.0-released
    title: "Electric 1.0 released (2025-03-17)"
    author: org:electricsql
  - id: v11
    resource: https://electric.ax/blog/2025/08/13/electricsql-v1.1-released
    title: "Electric 1.1: new storage engine with 100x faster writes (2025-08-13)"
    author: org:electricsql
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/@electric-sql/client
    title: "npm download API: @electric-sql/client, week ending 2026-10-01"
  - id: gh
    resource: https://github.com/electric-sql/electric
    title: "Electric GitHub repository"
---

# Summary
ElectricSQL's first architecture, built with CRDT researchers, offered bidirectional active-active replication between Postgres and client-side SQLite with CRDT conflict resolution. On July 17, 2024 the team announced a clean rebuild ("electric-next"), saying the original system was "too large and complex in scope" and hard to make stable and reliable. The new design does one thing: partial read-path sync of "shapes" (filtered table subsets) from Postgres logical replication to clients over plain HTTP, which makes it CDN-cacheable. Writes go through the app's own API[^next]. Electric 1.0 shipped on March 17, 2025, with production users including Trigger.dev[^v1], and 1.1 added a new storage engine in August 2025[^v11]. `@electric-sql/client` had about 1.9M weekly npm downloads in late September 2026[^npm] and the repository about 10.4k stars[^gh].

# Timeline
| Year | Event |
|---|---|
| 2023 | First public releases (CRDT, active-active) |
| 2024 | Rebuild announced (Jul 17)[^next] |
| 2025 | 1.0 GA (Mar 17)[^v1]. Electric Cloud beta. 1.1 storage engine (Aug)[^v11] |

# What worked
- Cutting scope. HTTP plus caching made sync scale through existing infrastructure.

# What didn't
- Version one: CRDT active-active replication proved too complex to stabilise[^next].

# Related
[Sync engines](/ideas/edge-devx/sync-engines.md) · [Local-first and CRDTs](/ideas/edge-devx/local-first-crdts.md) · [Zero](/systems/zero.md) · [PowerSync](/systems/powersync.md) · [Rewrite event](/events/2024-07-electricsql-rewrite.md)
