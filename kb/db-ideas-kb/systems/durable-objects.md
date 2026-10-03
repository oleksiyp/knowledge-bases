---
type: System
title: Cloudflare Durable Objects
description: "Cloudflare's actor-style stateful serverless primitive: each object has a global ID, lives in one place, processes requests one at a time and, since 2024, owns a private SQLite database in the same thread. It is the most successful edge state design of 2018–2026, because it moves compute to the data."
resource: https://developers.cloudflare.com/durable-objects/
tags: [actors, edge, sqlite, stateful-serverless, cloudflare]
kind: cloud-service
first_release: 2020
org: "Cloudflare"
outcome: growing
ideas: [ideas/edge-devx/edge-databases, ideas/edge-devx/sqlite-in-production]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: do-beta
    resource: https://blog.cloudflare.com/introducing-workers-durable-objects/
    title: "Cloudflare: Workers Durable Objects Beta (2020-09-28)"
    author: org:cloudflare
  - id: do-sqlite
    resource: https://blog.cloudflare.com/sqlite-in-durable-objects/
    title: "Cloudflare (Kenton Varda): Zero-latency SQLite storage in every Durable Object (2024-09-26)"
    author: org:cloudflare
---

# Summary
Durable Objects were announced as a closed beta on September 28, 2020, as "the missing piece" for running whole applications on Cloudflare's edge. Each object has a globally unique ID, exists in exactly one location at a time, and any Worker anywhere can send it messages[^do-beta]. This gives strong consistency for per-entity state such as a chat room, a document or a game session. The objects initially had only key-value storage. In September 2024 Cloudflare gave every Durable Object an embedded SQLite database running "in the same thread" as the object's code, so that storage latency is "essentially zero" while remaining durable, with writes replicated before results are confirmed[^do-sqlite]. Cloudflare's D1 is built on Durable Objects, and Cloudflare's agents tooling later used them as the per-agent state store.

# Timeline
| Year | Event |
|---|---|
| 2020 | Closed beta (Sep 28)[^do-beta] |
| 2021 | Generally available (approximate) |
| 2024 | SQLite storage backend for every object (Sep 26)[^do-sqlite] |

# What worked
- The actor model plus colocated SQLite removes network hops for per-entity state rather than replicating data globally.
- One primitive for WebSockets, coordination and storage.

# What didn't
- A single-threaded object is a throughput ceiling. Designs must shard state into many objects, which is unfamiliar to most developers.
- Cross-object queries and transactions have to be built by the application.

# Related
[Cloudflare D1](/systems/cloudflare-d1.md) · [Edge databases](/ideas/edge-devx/edge-databases.md) · [Durable Objects beta event](/events/2020-09-durable-objects-beta.md)
