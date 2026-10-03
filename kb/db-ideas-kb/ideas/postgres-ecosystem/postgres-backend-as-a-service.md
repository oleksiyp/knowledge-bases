---
type: Idea
title: "Postgres as a backend platform (Supabase-style BaaS)"
description: "Wrap Postgres with auth, auto-generated APIs, realtime, storage and functions to give an open, SQL-based alternative to Firebase. Verdict: winning. Supabase grew to a $10.5B valuation and became the default database of AI app builders. The GraphQL-over-Postgres approach (Hasura) stalled and pivoted."
tags: [postgres, baas, supabase, graphql, firebase-alternative, ai-agents]
area: postgres-ecosystem
verdict: winning
hype_peak: 2026
adoption_2026: common
origins: "Firebase (2011, acquired by Google 2014), Parse (shut down 2017), PostgREST (2014), Hasura (2018)."
key_systems: [systems/supabase, systems/hasura, systems/firebase, systems/neon, systems/postgresql]
related_ideas: [ideas/postgres-ecosystem/just-use-postgres, ideas/postgres-ecosystem/postgres-hosting-consolidation, ideas/edge-devx/reactive-backend-databases, ideas/vector-ai/agents-as-database-users]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tc-sb-a
    resource: https://techcrunch.com/2021/09/09/supabase-raises-30m-for-its-open-source-insta-backend/
    title: "TechCrunch: Supabase raises $30M for its open source insta-backend (2021-09-09)"
    author: org:techcrunch
  - id: fortune-sb-d
    resource: https://www.fortune.com/2025/04/22/exclusive-supabase-raises-200-million-series-d-at-2-billion-valuation
    title: "Fortune: Supabase raises $200M Series D at $2B valuation (2025-04-22)"
    author: org:fortune
  - id: sb-series-e
    resource: https://supabase.com/blog/supabase-series-e
    title: "Supabase: Series E ($100M at $5B, 2025-10-03)"
    author: org:supabase
  - id: sb-series-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase: Series F ($500M at $10.5B, 2026-06-04)"
    author: org:supabase
  - id: turso-joins
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso: Turso is joining Supabase to give every agent its own database (2026-10-02)"
    author: org:turso
  - id: tipranks-150
    resource: https://www.tipranks.com/news/private-companies/supabase-raises-150-million-and-acquires-turso-to-scale-agentic-database-infrastructure
    title: "TipRanks: Supabase raises $150 million and acquires Turso (2026-10-02)"
  - id: hasura-c
    resource: https://techcrunch.com/2022/02/22/graphql-developer-platform-hasura-raises-100m-series-c/
    title: "TechCrunch: GraphQL developer platform Hasura raises $100M Series C (2022-02-22)"
    author: org:techcrunch
  - id: hasura-promptql
    resource: https://hasura.io/blog/from-graphql-to-promptql-a-new-chapter-begins
    title: "Hasura: From GraphQL to PromptQL, a new chapter begins (2025-06-02)"
    author: org:hasura
  - id: nhost-constellation
    resource: https://nhost.io/blog/introducing-constellation
    title: "Nhost: Constellation, Hasura-compatible GraphQL in Go (2026-06-03)"
    author: org:nhost
  - id: neon-dbx
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems
    title: "Databricks: Databricks Agrees to Acquire Neon (2025-05-14)"
    author: org:databricks
---

# Summary
**Verdict: winning.** The bet was that developers wanted Firebase's speed without its lock-in and without giving up SQL. It paid off, mostly for one company. Supabase (YC Summer 2020) went from a $30M Series A in 2021, when it had 50,000 databases[^tc-sb-a], to $2B (Apr 2025)[^fortune-sb-d], $5B (Oct 2025)[^sb-series-e] and $10.5B (June 2026)[^sb-series-f]. In Oct 2026 it raised another $150M and agreed to buy Turso[^tipranks-150][^turso-joins]. AI app builders made it their default backend: AI tools launch over 60% of new Supabase databases[^sb-series-f]. The other variant, generating a GraphQL API over Postgres, did worse. Hasura became a unicorn in 2022[^hasura-c] and then pivoted to an AI product, PromptQL, in 2025[^hasura-promptql]. Its downstream user Nhost wrote its own replacement engine in 2026[^nhost-constellation].

# The idea
Postgres already has most of what a backend needs: row-level security for authorization, LISTEN/NOTIFY and logical replication for realtime, JSONB, functions and extensions. A BaaS adds hosted auth, an auto-generated REST (PostgREST) or GraphQL API, file storage, edge functions and a dashboard. Unlike Firebase, the data lives in a standard database that can be exported, queried with SQL and self-hosted.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | Hasura GraphQL Engine open-sourced | + |
| 2020 | Supabase founded (YC S20) as an "open source Firebase alternative"[^tc-sb-a] | + |
| 2021 | Supabase $30M Series A led by Coatue. 50,000 databases[^tc-sb-a] | + |
| 2022 | Hasura $100M Series C at $1B[^hasura-c] | + |
| 2024–25 | AI app builders standardize on Supabase as their backend | + |
| 2025 | Supabase Series D at $2B (Apr)[^fortune-sb-d]. Hasura pivots to PromptQL (June)[^hasura-promptql]. Series E at $5B (Oct)[^sb-series-e] | +/− |
| 2026 | Series F $500M at $10.5B (June)[^sb-series-f]. Nhost ships Constellation to replace Hasura (June)[^nhost-constellation] | +/− |
| 2026 | Supabase raises $150M and acquires Turso. About 70% of new databases created by agents[^tipranks-150][^turso-joins] | + |

# What succeeded
- **The SQL-first BaaS.** Supabase kept Postgres visible instead of hiding it, so users could outgrow the BaaS features without migrating. Its developer experience and Apache-2.0 self-hosting built trust.
- **Agent distribution.** Coding agents need a backend they can provision through an API and reason about in SQL. Supabase and Neon both found that most new databases are now created by agents, not humans[^sb-series-f][^neon-dbx].
- **Funding upstream.** Supabase uses its capital for deep Postgres work (OrioleDB, Multigres), which strengthens its position as the ecosystem's steward[^sb-series-f].

# What failed
- **GraphQL-over-Postgres as a business.** Hasura's v2 engine was widely used, but its v3/DDN moved key tooling to a proprietary control plane, and the company pivoted to PromptQL[^hasura-promptql]. Users rebuilt the open engine themselves (Nhost Constellation, "v2 is winding down … and v3 does not follow the same open-source model")[^nhost-constellation].
- **Revenue vs database count.** Agent-created databases are numerous but often tiny and short-lived. Whether the valuation is backed by revenue at matching scale is not public (unconfirmed).
- **Smaller BaaS players** (Nhost, Appwrite and others) stayed small next to Supabase. The category concentrated on one winner.

# Why
- **Postgres did the heavy lifting.** RLS, extensions (pgvector for AI apps) and logical replication meant Supabase could compose existing parts instead of building a database.
- **Timing.** The 2023–2026 wave of AI app builders needed a default backend at exactly the moment Supabase was the most complete open option.
- **GraphQL lost its tailwind.** LLMs generate SQL and REST client code well, which weakened the value of an auto-generated GraphQL layer. Hasura's response, changing its open-source model, alienated the community it relied on[^nhost-constellation].

# Lessons
- Platforms that expose the underlying standard (SQL/Postgres) beat platforms that abstract it away, because users can grow without leaving.
- Distribution through AI tools can outweigh feature differences. Being the default in an agent's template is a new kind of moat.
- Closing parts of an open-source product mid-flight invites compatible reimplementations.

# Related
- [Supabase](/systems/supabase.md), [Hasura](/systems/hasura.md), [Firebase](/systems/firebase.md), [Neon](/systems/neon.md), [PostgreSQL](/systems/postgresql.md)
- [Supabase Series F](/events/2026-06-supabase-series-f.md)
- [Postgres hosting consolidation](/ideas/postgres-ecosystem/postgres-hosting-consolidation.md)
