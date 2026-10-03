---
type: System
title: Convex
description: "Reactive backend: a transactional document database with TypeScript server functions, automatic reactive queries and caching, built by ex-Dropbox engineers. Source-available (FSL→Apache) since March 2024, and repositioned in 2025–26 as the backend for agent-written software."
resource: https://www.convex.dev
tags: [baas, reactive, typescript, ai-agents]
kind: product
first_release: 2022
org: "Convex, Inc."
license: FSL-1.1-Apache-2.0
outcome: growing
ideas: [ideas/edge-devx/reactive-backend-databases, ideas/edge-devx/sync-engines]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: oss
    resource: https://news.convex.dev/convex-goes-open-source/
    title: "Convex goes open-source (2024-03-12)"
    author: org:convex
  - id: selfhost
    resource: https://news.convex.dev/self-hosting/
    title: "Convex self-hosting: more than just open source"
    author: org:convex
  - id: series-b
    resource: https://www.unite.ai/convex-raises-57m-series-b-to-build-the-backend-for-agent-written-software/
    title: "Unite.AI: Convex raises $57M Series B (Aug 2026)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/convex
    title: "npm download API: convex, week ending 2026-10-01"
---

# Summary
Convex treats backend state like React state. Queries are TypeScript functions that run inside the database with full serializable transactions. Clients subscribe to them, and Convex tracks read sets to push updates when results change. The backend, about 200k lines mostly in Rust, was open-sourced on March 12, 2024 under the Functional Source License, which converts to Apache-2.0 after two years and forbids only competing hosted services[^oss]. Self-hosting later added Postgres as a storage option[^selfhost]. Pavlo's 2025 review lists a $24M Series B[^pavlo-2025]. In August 2026 Convex announced a $57M round led by Insight Partners, reported as a Series B and bringing total funding to about $110.5M (the round naming conflicts with Pavlo's report), pitched as "the backend for agent-written software"[^series-b]. The `convex` npm package had about 1.9M weekly downloads in late September 2026[^npm].

# Timeline
| Year | Event |
|---|---|
| 2022–23 | Public launch |
| 2024 | Open-sourced under FSL (Mar 12)[^oss]. Self-hosting[^selfhost] |
| 2025 | Funding round reported by Pavlo[^pavlo-2025] |
| 2026 | $57M round (Aug)[^series-b] |

# What worked
- End-to-end TypeScript and reactivity by default. That suits AI coding agents, whose errors surface at build time.

# What didn't
- A proprietary data model and API instead of SQL/Postgres, which limits portability and makes buyers wary. FSL is not OSI open source.

# Related
[Reactive backends](/ideas/edge-devx/reactive-backend-databases.md) · [Sync engines](/ideas/edge-devx/sync-engines.md) · [Firebase](/systems/firebase.md) · [Supabase](/systems/supabase.md)
