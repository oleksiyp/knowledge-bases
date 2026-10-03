---
type: System
title: Hasura
description: "GraphQL engine that auto-generates APIs over Postgres and other databases. It became a unicorn in 2022, moved key v3 tooling to a proprietary control plane, and pivoted to the PromptQL AI product in 2025. Users such as Nhost then rebuilt its open engine."
resource: https://hasura.io
tags: [graphql, postgres, baas, open-core, pivot]
kind: product
first_release: 2018
org: "Hasura Inc. (PromptQL)"
license: "Apache-2.0 (engine); proprietary DDN control plane"
outcome: pivoted
ideas: [ideas/postgres-ecosystem/postgres-backend-as-a-service]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: hasura-c
    resource: https://techcrunch.com/2022/02/22/graphql-developer-platform-hasura-raises-100m-series-c/
    title: "TechCrunch: Hasura raises $100M Series C (2022-02-22)"
    author: org:techcrunch
  - id: hasura-v3-disc
    resource: https://github.com/hasura/graphql-engine/discussions/10556
    title: "GitHub discussion: Is Hasura v3 / DDN OSS?"
  - id: hasura-promptql
    resource: https://hasura.io/blog/from-graphql-to-promptql-a-new-chapter-begins
    title: "Hasura: From GraphQL to PromptQL, a new chapter begins (2025-06-02)"
    author: org:hasura
  - id: hasura-lts
    resource: https://hasura.io/legal/support-policy-hasura-v2
    title: "Hasura: Support policy for Hasura v2 (LTS)"
    author: org:hasura
  - id: nhost-constellation
    resource: https://nhost.io/blog/introducing-constellation
    title: "Nhost: Constellation, Hasura-compatible GraphQL in Go (2026-06-03)"
    author: org:nhost
---

# Summary
Hasura's GraphQL Engine (open-sourced 2018) pointed at a Postgres database and produced a realtime GraphQL API with permissions. It was a popular way to build backends in the GraphQL boom. A $100M Series C led by Greenoaks valued the company at $1B in Feb 2022 (total raised $136.5M)[^hasura-c]. The v3/DDN generation kept an Apache-2.0 engine but moved the control plane, CLI and console to proprietary software[^hasura-v3-disc]. On June 2 2025 co-founder Tanmai Gopal announced PromptQL, an AI data agent, as "the spiritual successor to GraphQL", with GraphQL Engine and DDN to be maintained but no longer the focus[^hasura-promptql]. v2 moved to long-term support[^hasura-lts]. In June 2026 Nhost, whose BaaS was built on Hasura, released Constellation, an open Go reimplementation, because "v2 is winding down … and v3 does not follow the same open-source model"[^nhost-constellation].

# Timeline
| Date | Event |
|---|---|
| 2018 | GraphQL Engine open-sourced |
| 2022-02-22 | $100M Series C at $1B[^hasura-c] |
| 2024 | v3/DDN with proprietary control plane[^hasura-v3-disc] |
| 2025-06-02 | Pivot to PromptQL[^hasura-promptql] |
| 2026-06-03 | Nhost Constellation replaces Hasura CE for its users[^nhost-constellation] |

# What worked
- Very fast time to a working API over Postgres. It showed the value of generating APIs from the schema.
- Large open-source adoption of v2.

# What didn't
- Monetizing an API layer that sits on someone else's database proved hard.
- Changing the open-source model in v3 broke trust and pushed users to reimplement the engine[^nhost-constellation].
- GraphQL's momentum faded, and LLM code generation reduced the value of auto-generated APIs. The company pivoted into AI agents[^hasura-promptql].

# Related
- [Postgres as a backend platform](/ideas/postgres-ecosystem/postgres-backend-as-a-service.md)
- [Supabase](/systems/supabase.md), [PostgreSQL](/systems/postgresql.md)
