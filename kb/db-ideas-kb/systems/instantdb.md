---
type: System
title: InstantDB
description: "YC-backed 'modern Firebase': a client-side database with real-time sync, backed by a triple store on Postgres and a Datalog engine, with auth, permissions and storage. Open-sourced in August 2024 and repositioned around AI-coded apps."
resource: https://www.instantdb.com
tags: [baas, sync, triple-store, datalog, realtime]
kind: product
first_release: 2022
org: "Instant (YC)"
license: Apache-2.0
outcome: growing
ideas: [ideas/edge-devx/sync-engines, ideas/edge-devx/reactive-backend-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: hn
    resource: https://news.ycombinator.com/item?id=41322281
    title: "Show HN: InstantDB (Aug 2024)"
  - id: essay
    resource: https://www.instantdb.com/essays/next_firebase
    title: "InstantDB: A Graph-Based Firebase"
    author: org:instantdb
  - id: gh
    resource: https://github.com/instantdb/instant
    title: "InstantDB GitHub repository"
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/@instantdb/core
    title: "npm download API: @instantdb/core, week ending 2026-10-01"
---

# Summary
InstantDB stores data as triples in Postgres and evaluates queries with a Datalog engine. On the client, queries in its GraphQL-like InstaQL language run against a local store that syncs transparently, with optimistic updates and multiplayer presence built in[^essay]. After two years of development it was open-sourced in August 2024 and drew a large Hacker News response[^hn]. Firebase co-founder James Tamplin was among its backers. By 2026 the project described itself as "the best backend for AI-coded apps", following the market shift toward agent-built software[^gh]. It had about 10.5k GitHub stars and about 0.28M weekly npm downloads for `@instantdb/core` in late September 2026[^gh][^npm].

# Timeline
| Year | Event |
|---|---|
| 2022 | Company founded (YC) and "Graph-based Firebase" essay[^essay] |
| 2024 | Open-sourced (Aug)[^hn] |
| 2025–26 | Repositioned around AI-coded apps[^gh] |

# What worked
- Developer experience: no build step, instant UI, and relations in a NoSQL-feeling API.

# What didn't
- A custom data model (triples plus Datalog) instead of plain tables runs into the same ecosystem gravity that hurt other non-SQL backends.

# Related
[Reactive backends](/ideas/edge-devx/reactive-backend-databases.md) · [Sync engines](/ideas/edge-devx/sync-engines.md) · [Firebase](/systems/firebase.md) · [Convex](/systems/convex.md)
