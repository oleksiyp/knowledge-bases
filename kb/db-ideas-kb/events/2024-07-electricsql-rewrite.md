---
type: Event
title: "ElectricSQL abandons CRDT active-active sync and rebuilds"
description: "On July 17, 2024 ElectricSQL announced a clean rebuild: dropping CRDT-based bidirectional replication for read-path 'shapes' sync over HTTP. It was a turning point from local-first idealism to server-authoritative sync engines."
date: 2024-07-17
year: 2024
kind: pivot
signal: mixed
ideas: [ideas/edge-devx/local-first-crdts, ideas/edge-devx/sync-engines]
systems: [systems/electricsql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: next
    resource: https://electric.ax/blog/2024/07/17/electric-next
    title: "ElectricSQL: A new approach to building Electric"
    author: org:electricsql
  - id: v1
    resource: https://electric.ax/blog/2025/03/17/electricsql-1.0-released
    title: "Electric 1.0 released (2025-03-17)"
    author: org:electricsql
---

# What happened
Electric said its original system, with CRDT conflict resolution and active-active Postgres↔SQLite replication, was "too large and complex in scope" to make stable. It started over with a much smaller, modular design that syncs partial "shapes" of Postgres tables to clients over HTTP and leaves writes to the application[^next]. The new design reached 1.0 eight months later[^v1].

# Why it matters
The best-funded attempt to bring CRDT-based local-first sync to relational data concluded that convergence-by-CRDT was the wrong foundation for app databases. Read-path sync plus server authority became the shared design across Electric, Zero and PowerSync.

# Related
[ElectricSQL](/systems/electricsql.md) · [Local-first and CRDTs](/ideas/edge-devx/local-first-crdts.md) · [Sync engines](/ideas/edge-devx/sync-engines.md)
