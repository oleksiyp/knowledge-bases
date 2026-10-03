---
type: Idea
title: "Sync engines: a database replica in the client"
description: "Generic engines that keep a partial, queryable replica of server data inside the client and sync it in real time (Replicache/Zero, ElectricSQL, PowerSync, InstantDB, Convex). Verdict: winning. They became a recognised product category by 2025–26 with 1.0 releases, but none had become a default the way an ORM has."
tags: [sync, local-first, real-time, postgres, client-database]
area: edge-devx
verdict: winning
hype_peak: 2025
adoption_2026: niche
origins: "Firebase Realtime Database (2012), Meteor, CouchDB/PouchDB; Linear's in-house sync engine (2019) became the model."
key_systems: [systems/zero, systems/electricsql, systems/powersync, systems/instantdb, systems/convex, systems/firebase]
related_ideas: [ideas/edge-devx/local-first-crdts, ideas/edge-devx/reactive-backend-databases, ideas/streaming-messaging/streaming-databases-and-ivm]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: linear-talk
    resource: https://www.youtube.com/watch?v=bnOpm3a1fRE
    title: "Tuomas Artman: Linear's sync engine (talk)"
    author: person:tuomas-artman
  - id: electric-next
    resource: https://electric.ax/blog/2024/07/17/electric-next
    title: "ElectricSQL: A new approach to building Electric (2024-07-17)"
    author: org:electricsql
  - id: electric-1
    resource: https://electric.ax/blog/2025/03/17/electricsql-1.0-released
    title: "Electric 1.0 released (2025-03-17)"
    author: org:electricsql
  - id: zero-1
    resource: https://www.infoq.com/news/2026/06/zero-version-1/
    title: "InfoQ: Zero reaches 1.0 (Jun 2026)"
    author: org:infoq
  - id: replicache
    resource: https://replicache.dev/
    title: "Replicache homepage (maintenance-mode notice)"
    author: org:rocicorp
  - id: retiring-reflect
    resource: https://rocicorp.dev/blog/retiring-reflect
    title: "Rocicorp: Retiring Reflect (2024)"
    author: org:rocicorp
  - id: instant-hn
    resource: https://news.ycombinator.com/item?id=41322281
    title: "Show HN: InstantDB (Aug 2024)"
  - id: powersync-selfhost
    resource: https://docs.powersync.com/configuration/powersync-service/self-hosted-instances
    title: "PowerSync docs: self-hosted instances"
    author: org:powersync
  - id: triplit
    resource: https://supabase.com/blog/triplit-joins-supabase
    title: "Supabase: Triplit joins Supabase (Oct 2025)"
    author: org:supabase
  - id: npm-sync
    resource: https://api.npmjs.org/downloads/point/last-week/@electric-sql/client
    title: "npm download API: @electric-sql/client, @rocicorp/zero, @instantdb/core, convex, @powersync/web (week ending 2026-10-01)"
  - id: firebase-sqlconnect
    resource: https://firebase.blog/posts/2026/04/whats-new-sql-connect/
    title: "Firebase: Realtime PostgreSQL, from Data Connect to SQL Connect (2026-04-29)"
    author: org:google
---

# Summary
**Winning, as a category; adoption still small.** The idea that the client should hold a live, queryable subset of the database, with a generic engine handling sync, conflicts and optimistic writes, moved from in-house heroics (Linear[^linear-talk], Figma) to products. By 2026 there was a crowded field with stable releases: Electric 1.0 (March 2025)[^electric-1], Zero 1.0 (June 2026)[^zero-1], PowerSync (Postgres, MongoDB, MySQL, SQL Server → client SQLite)[^powersync-selfhost], InstantDB (open-sourced August 2024)[^instant-hn], and Convex's reactive queries. Even Firebase added realtime subscriptions to Postgres in 2026[^firebase-sqlconnect]. The designs converged: **Postgres stays the source of truth, sync is read-path partial replication, writes go through server-authoritative mutations**. They moved away from CRDT peer-to-peer replication. Adoption is real but modest. In late September 2026, weekly npm downloads were about 1.9M for `@electric-sql/client` and `convex`, about 0.29M for Zero, about 0.28M for InstantDB and about 0.1M for PowerSync's web SDK[^npm-sync], against tens of millions for ORMs.

# The idea
Instead of hand-writing REST endpoints, caches, loading spinners and websocket invalidation, declare which data a client needs ("shapes", queries, sync rules). The engine keeps that subset in a local store (IndexedDB, SQLite, memory), serves reads instantly, applies writes optimistically and reconciles with the server. It is incremental view maintenance with the client as the view.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2019–20 | Linear ships with a custom sync engine. Its speed becomes the benchmark[^linear-talk] | + |
| ~2020–21 | Replicache (Rocicorp), a generic client-side sync framework, launched | + |
| 2022–23 | ElectricSQL (CRDT-based, active-active Postgres↔SQLite) and PowerSync appear | + |
| 2024 | ElectricSQL rewrite: read-path "shapes" over HTTP, no CRDTs (Jul)[^electric-next]. InstantDB open-sourced (Aug)[^instant-hn]. Rocicorp retires its hosted Reflect product (servers off Nov 1) to focus on Zero[^retiring-reflect] | +/− |
| 2025 | Electric 1.0 (Mar)[^electric-1]. Triplit joins Supabase (Oct)[^triplit] | +/− |
| 2026 | Zero 1.0 (Jun)[^zero-1]. Replicache in maintenance mode[^replicache]. Firebase SQL Connect adds realtime Postgres[^firebase-sqlconnect] | + |

# What succeeded
- **Category formation.** Several funded vendors, 1.0 releases, and integrations with the largest Postgres host (Supabase brought in Triplit's founder to make Supabase "an excellent partner" to Electric, Zero and PowerSync[^triplit]).
- **Architecture consensus.** Read-path sync from the Postgres logical replication stream, plus writes through the normal API, proved far simpler to operate than multi-master CRDT replication. Electric said its first design was "too large and complex in scope"[^electric-next].
- **Developer productivity.** Linear has said that sync made the team faster because engineers rarely deal with networking or error states[^linear-talk].

# What failed
- **The first generation.** Electric's 2022–24 design was abandoned. Replicache was superseded by Zero and put in maintenance mode[^replicache]. Triplit did not survive independently[^triplit].
- **Ubiquity.** Most web apps in 2026 still used request/response plus a cache library. Sync engines remain a choice for highly interactive SaaS rather than a default.

# Why
The demand was real: users compare every web app to Linear and Figma. The hard parts were permissions (which rows may this client see?), partial replication of query results, and schema evolution. Server-authoritative designs handle all three by reusing the backend's existing authority and treating the client as a cache with optimistic updates. Postgres logical replication gave everyone the same change stream to build on. What holds adoption back is that sync engines take over the whole data path, so moving to one is a rewrite. That is why greenfield, often AI-generated, apps adopt them first.

# Lessons
- When the research ideal (CRDT peer-to-peer) and the product reality (server authority) conflict, products that pick server authority ship sooner.
- Reusing the incumbent database's change stream beats building a new database.
- Expect 2–3 rewrites before a sync engine stabilises: Electric took two architectures, and Rocicorp went Replicache → Reflect → Zero[^retiring-reflect].

# Related
[Zero](/systems/zero.md) · [ElectricSQL](/systems/electricsql.md) · [PowerSync](/systems/powersync.md) · [InstantDB](/systems/instantdb.md) · [Convex](/systems/convex.md) · [Local-first and CRDTs](/ideas/edge-devx/local-first-crdts.md) · [Reactive backends](/ideas/edge-devx/reactive-backend-databases.md) · [Streaming databases and IVM](/ideas/streaming-messaging/streaming-databases-and-ivm.md)
