---
type: Idea
title: "Reactive backend databases (Backend-as-a-Service 2.0)"
description: "Databases that bundle the backend: reactive queries pushed to clients, server functions, auth and storage (Firebase, Supabase, Convex, InstantDB). Verdict: winning, mainly because AI app builders and coding agents adopted them as the default backend. The Postgres-based variant (Supabase) won the market over proprietary data models."
tags: [baas, realtime, reactive, firebase, ai-agents]
area: edge-devx
verdict: winning
hype_peak: 2026
adoption_2026: common
origins: "Parse (2011, shut down by Facebook 2017), Firebase (2011, acquired by Google 2014), Meteor (2012), RethinkDB changefeeds."
key_systems: [systems/firebase, systems/supabase, systems/convex, systems/instantdb, systems/hasura]
related_ideas: [ideas/edge-devx/sync-engines, ideas/postgres-ecosystem/postgres-backend-as-a-service, ideas/vector-ai/ai-agents-as-database-users]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: convex-oss
    resource: https://news.convex.dev/convex-goes-open-source/
    title: "Convex goes open-source (2024-03-12)"
    author: org:convex
  - id: convex-b
    resource: https://www.unite.ai/convex-raises-57m-series-b-to-build-the-backend-for-agent-written-software/
    title: "Unite.AI: Convex raises $57M Series B to build the backend for agent-written software (Aug 2026)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: firebase-dc-ga
    resource: https://firebase.blog/posts/2025/04/dataconnect-general-availability/
    title: "Firebase: Data Connect is now generally available (Apr 2025)"
    author: org:google
  - id: firebase-sqlconnect
    resource: https://firebase.blog/posts/2026/04/whats-new-sql-connect/
    title: "Firebase: Realtime PostgreSQL, from Data Connect to SQL Connect (2026-04-29)"
    author: org:google
  - id: supabase-turso
    resource: https://www.prnewswire.com/news-releases/supabase-announces-150m-in-new-funding-and-turso-acquisition-302896752.html
    title: "Supabase announces $150M in new funding and Turso acquisition (2026-10-02)"
    author: org:supabase
  - id: instant-hn
    resource: https://news.ycombinator.com/item?id=41322281
    title: "Show HN: InstantDB (Aug 2024)"
  - id: fauna-reg
    resource: https://www.theregister.com/2025/03/24/faunadb_shut_down/
    title: "The Register: FaunaDB shutters (2025-03-24)"
    author: org:the-register
  - id: gel-vercel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: "Gel joins Vercel (2025-12-02)"
    author: org:gel
  - id: npm-sync
    resource: https://api.npmjs.org/downloads/point/last-week/convex
    title: "npm download API: convex, week ending 2026-10-01"
---

# Summary
**Winning, and AI was the accelerant.** The "Firebase alternative" wave of 2020–2024 had two strands: open, Postgres-based platforms (Supabase, Hasura, Nhost) and new reactive databases with their own data models (Convex, InstantDB, Fauna). By 2026 the Postgres strand had clearly won the market. Supabase reported adding more than 4M databases a month, with 70% created by agents or AI tools, and raised at a $10.5B valuation in June 2026[^supabase-turso]. Even Google's Firebase moved to Postgres with Data Connect (GA April 2025), renamed SQL Connect with realtime subscriptions in April 2026[^firebase-dc-ga][^firebase-sqlconnect]. The proprietary-model strand split. Fauna shut down in 2025[^fauna-reg] and Gel/EdgeDB folded into Vercel[^gel-vercel], while Convex survived by positioning its TypeScript-everywhere reactive model as the safest target for code-writing agents ($57M round, August 2026, about $110.5M raised in total[^convex-b]; about 1.9M weekly npm downloads[^npm-sync]).

# The idea
Most apps need the same backend: a database, auth, file storage, server functions, and live updates to the UI. Bundle them, make queries *reactive* (subscribe and get pushed updates), and front-end developers or now agents can ship full-stack apps without operating a backend.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2020 | Supabase founded as an "open source Firebase alternative" on Postgres | + |
| 2022–23 | Convex launches publicly: reactive queries and TypeScript server functions over a custom transactional store | + |
| 2024 | Convex open-sources its backend under FSL (Mar)[^convex-oss]. InstantDB open-sourced (Aug)[^instant-hn] | + |
| 2025 | Firebase Data Connect GA on Cloud SQL Postgres (Apr)[^firebase-dc-ga]. Fauna shuts down (May)[^fauna-reg]. All major vendors ship MCP servers; Supabase also publishes guidelines for MCP agents[^pavlo-2025] | +/− |
| 2025 | Gel (EdgeDB) shuts down Gel Cloud; team joins Vercel (Dec)[^gel-vercel] | − |
| 2026 | Firebase SQL Connect adds realtime Postgres (Apr)[^firebase-sqlconnect]. Supabase $500M Series F (Jun), then $150M and the Turso acquisition (Oct)[^supabase-turso]. Convex $57M (Aug)[^convex-b] | + |

# What succeeded
- **Postgres-based BaaS.** Supabase grew into what Pavlo called likely the largest independent Postgres DBaaS by instance count[^pavlo-2025].
- **Reactive queries as a primitive.** Convex, InstantDB, Supabase Realtime and now Firebase SQL Connect all treat "subscribe to a query" as basic functionality[^firebase-sqlconnect].
- **Agent-friendliness.** Typed schemas, generated SDKs and a single platform give coding agents fewer ways to fail. Convex's fundraising pitch was framed entirely around agent-written software[^convex-b].

# What failed
- **Proprietary query languages and data models without Postgres compatibility.** Fauna (FQL, a GraphQL bet) and EdgeDB/Gel (EdgeQL) could not attract enough developers. Both are gone as services[^fauna-reg][^gel-vercel].
- **Firebase's NoSQL lock-in.** Google itself moved its new offering to SQL[^firebase-dc-ga].

# Why
BaaS wins when it removes decisions. The ecosystem's gravity sits with Postgres: drivers, ORMs, extensions such as pgvector, and SQL knowledge in LLM training data. A Postgres-based BaaS inherits all of it, while a new data model must rebuild it. The 2024–26 surge of AI app builders (Lovable, Bolt, v0 and similar) needed a backend that could be provisioned by API in seconds and that models already knew how to use. That favoured Supabase above all, and Convex, whose all-TypeScript surface type-checks agent output. The reactive layer itself became table stakes rather than a moat.

# Lessons
- Build new developer experience *on* the dominant database rather than replacing it.
- A product used by agents rather than humans rewards typed, declarative, one-platform designs.
- Real-time subscriptions moved from differentiator to expected feature within about five years.

# Related
[Firebase](/systems/firebase.md) · [Supabase](/systems/supabase.md) · [Convex](/systems/convex.md) · [InstantDB](/systems/instantdb.md) · [Hasura](/systems/hasura.md) · [Sync engines](/ideas/edge-devx/sync-engines.md) · [Gel shutdown](/events/2025-12-gel-joins-vercel.md) · [Supabase acquires Turso](/events/2026-10-supabase-acquires-turso.md) · [Postgres backend-as-a-service](/ideas/postgres-ecosystem/postgres-backend-as-a-service.md) · [AI agents as database users](/ideas/vector-ai/ai-agents-as-database-users.md)
