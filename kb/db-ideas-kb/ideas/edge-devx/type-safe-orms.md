---
type: Idea
title: "Type-safe ORMs and query builders (TypeScript era)"
description: "Schema-first, type-generating database clients (Prisma) and SQL-shaped type-safe query builders (Drizzle, Kysely) as the main way application developers touch databases. Verdict: won. The style flipped from heavy, Rust-engine ORM to thin, SQL-like builder: Drizzle overtook Prisma in npm downloads and Prisma removed its Rust engine in 2025."
tags: [orm, typescript, developer-experience, prisma, drizzle]
area: edge-devx
verdict: won
hype_peak: 2024
adoption_2026: mainstream
origins: "ActiveRecord/Hibernate-era ORMs; jOOQ (2010) pioneered type-safe SQL builders; Prisma 2 (2020) brought schema-first codegen to TypeScript."
key_systems: [systems/prisma, systems/drizzle]
related_ideas: [ideas/edge-devx/sql-alternatives, ideas/edge-devx/serverless-db-connectivity, ideas/edge-devx/reactive-backend-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: prisma7
    resource: https://www.prisma.io/blog/announcing-prisma-orm-7-0-0
    title: "Prisma 7 release: Rust-free, faster, and more compatible (2025-11-19)"
    author: org:prisma
  - id: prisma7-infoq
    resource: https://www.infoq.com/news/2026/01/prisma-7-performance/
    title: "InfoQ: Prisma 7: Rust-free architecture and performance gains (Jan 2026)"
    author: org:infoq
  - id: drizzle-ps
    resource: https://planetscale.com/blog/drizzle-joins-planetscale
    title: "PlanetScale: Drizzle joins PlanetScale (2026-03-03)"
    author: org:planetscale
  - id: npm-orm
    resource: https://api.npmjs.org/downloads/point/last-week/drizzle-orm
    title: "npm download API: drizzle-orm, prisma, @prisma/client (week ending 2026-10-01)"
  - id: gh-orm
    resource: https://github.com/drizzle-team/drizzle-orm
    title: "Drizzle ORM and Prisma GitHub repositories (stars as of 2026-10-03)"
  - id: gel-rename
    resource: https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future
    title: "EdgeDB is now Gel (2025-02-25), adds Drizzle integration"
    author: org:gel
---

# Summary
**Won, with a change in style partway through.** In the TypeScript ecosystem, which became the main place new web backends are written, the type-checked database client went from nice-to-have to default between 2020 and 2026. Prisma led the first phase with a schema file, generated types and a query engine written in Rust. Drizzle led the second phase with SQL-shaped TypeScript, no code generation step, no binary, and the ability to run in edge runtimes. By late September 2026 `drizzle-orm` had about 30.4M weekly npm downloads against about 21.4M for `prisma`[^npm-orm], although Prisma still had more GitHub stars (47.7k vs 35.9k)[^gh-orm]. Prisma conceded the architecture argument: Prisma 7 (November 2025) removed the Rust engine entirely, saying the Rust–JavaScript bridge was slower than pure TypeScript and kept contributors away. It reported 90% smaller bundles and 3x faster queries[^prisma7][^prisma7-infoq]. In March 2026 PlanetScale hired the whole Drizzle core team while keeping the project independent[^drizzle-ps]. Both ORMs ended up attached to database vendors (Prisma Postgres, PlanetScale), which says where the money in developer experience is.

# The idea
Make the database schema a type the compiler knows, so that a renamed column breaks the build instead of production, and autocomplete writes your queries. Do it in the application language rather than in a new query language.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2020 | Prisma 2 GA: schema-first TypeScript ORM with Rust query engine | + |
| 2022–23 | Drizzle ORM gains traction. Edge runtimes expose Prisma's binary-engine problem | + Drizzle |
| 2024 | Drizzle becomes a default in popular starter stacks. Prisma announces a Rust-to-TypeScript move (exact date unconfirmed, around late 2024) | + |
| 2025 | Gel integrates with Drizzle rather than fighting ORMs[^gel-rename]. Prisma 7 removes Rust (Nov 19)[^prisma7] | + |
| 2026 | Drizzle team joins PlanetScale (Mar 3)[^drizzle-ps]. Drizzle ahead of Prisma in weekly downloads[^npm-orm] | + |

# What succeeded
- **Compile-time safety for queries** became expected in TypeScript stacks. It also turned out to suit AI coding agents, whose mistakes surface as type errors.
- **SQL-shaped APIs.** Drizzle's "if you know SQL, you know Drizzle" approach beat abstractions that hide SQL. This matches the wider trend of [SQL winning](/ideas/edge-devx/sql-alternatives.md).
- **Pure-JS clients.** They work in serverless and edge runtimes, which binary engines could not do easily[^prisma7].

# What failed
- **Native-engine ORMs.** Prisma's Rust engine, once a selling point, became a liability: bundle size, cold starts, unsupported platforms, and a Rust-only contributor barrier. It was removed after about five years[^prisma7].
- **Independent ORM businesses.** Neither became a standalone company. Prisma monetises through Prisma Postgres and Accelerate, and Drizzle's team was absorbed by PlanetScale[^drizzle-ps].

# Why
TypeScript's type system is expressive enough to model SQL results precisely, so the code-generation and query-engine layers became unnecessary overhead. Serverless and edge runtimes punished native binaries and large bundles. The JS–Rust boundary cost more than the Rust code saved, the same lesson some Python and JS tools learned the other way round. Commercially, a free library has little to sell, so ORMs became distribution channels for hosted databases.

# Lessons
- Rewriting in a "faster" language can make the system slower when the bottleneck is the language boundary.
- Thin, transparent abstractions over SQL outlast thick ones.
- Popular developer tools tend to be acquired by the infrastructure they send traffic to.

# Related
[Prisma](/systems/prisma.md) · [Drizzle](/systems/drizzle.md) · [PlanetScale](/systems/planetscale.md) · [Serverless DB connectivity](/ideas/edge-devx/serverless-db-connectivity.md) · [Prisma 7 event](/events/2025-11-prisma-7-drops-rust.md) · [Drizzle joins PlanetScale](/events/2026-03-drizzle-joins-planetscale.md)
