---
type: Event
title: "Drizzle ORM core team joins PlanetScale"
description: "On March 3, 2026 PlanetScale hired the entire Drizzle ORM core team, with Drizzle staying an independent open-source project. The most popular TypeScript ORM became sponsored by a database vendor."
date: 2026-03-03
year: 2026
kind: acquisition
signal: mixed
ideas: [ideas/edge-devx/type-safe-orms]
systems: [systems/drizzle, systems/planetscale]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ps
    resource: https://planetscale.com/blog/drizzle-joins-planetscale
    title: "PlanetScale: Drizzle joins PlanetScale"
    author: org:planetscale
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/drizzle-orm
    title: "npm download API: drizzle-orm, week ending 2026-10-01"
---

# What happened
PlanetScale announced that the Drizzle team was joining it "to continue their mission of building the best database tools for JavaScript and TypeScript". Drizzle "will remain an independent open source project with its own roadmap and goals"[^ps].

# Why it matters
Drizzle was the fastest-growing TypeScript ORM, with about 30M weekly npm downloads by late September 2026[^npm]. Like Prisma, which turned to Prisma Postgres, it ended up funded by database hosting. Developer tools that decide which database a project uses are valuable to hosts, and hard to run as standalone businesses.

# Related
[Drizzle](/systems/drizzle.md) · [PlanetScale](/systems/planetscale.md) · [Type-safe ORMs](/ideas/edge-devx/type-safe-orms.md)
