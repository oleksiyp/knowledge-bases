---
type: System
title: Drizzle ORM
description: "Lightweight, SQL-shaped TypeScript ORM and query builder with no code generation step and no native engine. It became the most-downloaded TypeScript ORM by 2026; its core team joined PlanetScale in March 2026 and the project stayed independent."
resource: https://orm.drizzle.team
tags: [orm, typescript, query-builder, edge]
kind: oss
first_release: 2022
org: "Drizzle Team (core team employed by PlanetScale since 2026)"
license: Apache-2.0
outcome: thriving
ideas: [ideas/edge-devx/type-safe-orms]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ps
    resource: https://planetscale.com/blog/drizzle-joins-planetscale
    title: "PlanetScale: Drizzle joins PlanetScale (2026-03-03)"
    author: org:planetscale
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/drizzle-orm
    title: "npm download API: drizzle-orm, week ending 2026-10-01"
  - id: gh
    resource: https://github.com/drizzle-team/drizzle-orm
    title: "Drizzle ORM GitHub repository"
  - id: gel
    resource: https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future
    title: "Gel (EdgeDB) adds Drizzle integration (2025-02-25)"
    author: org:gel
---

# Summary
Drizzle defines schemas in TypeScript and exposes a query API that mirrors SQL, plus a relational query layer. It has no code generation step and no binary, so it runs in Workers, Vercel Edge, Bun and Deno with HTTP drivers (Neon, PlanetScale, Turso/libSQL, D1). This was exactly the gap Prisma's Rust engine left in 2022–24. It became the default in many starter stacks. Other databases integrated with it rather than competing; Gel announced Drizzle support in 2025[^gel]. In the last week of September 2026 `drizzle-orm` had about 30.4M npm downloads, more than Prisma[^npm], with about 35.9k GitHub stars[^gh]. On March 3, 2026 PlanetScale hired the entire core team, stating that Drizzle "will remain an independent open source project with its own roadmap"[^ps].

# Timeline
| Year | Event |
|---|---|
| 2022 | First releases |
| 2023–24 | Rapid adoption in edge and serverless stacks |
| 2026 | Team joins PlanetScale (Mar 3)[^ps]. Most-downloaded TS ORM[^npm] |

# What worked
- Thin, transparent SQL abstraction, edge-runtime compatibility and performance.

# What didn't
- It ran for years on a small team without a business model, and was resolved by an employer-sponsor arrangement[^ps].

# Related
[Type-safe ORMs](/ideas/edge-devx/type-safe-orms.md) · [Prisma](/systems/prisma.md) · [PlanetScale](/systems/planetscale.md) · [Drizzle joins PlanetScale](/events/2026-03-drizzle-joins-planetscale.md)
