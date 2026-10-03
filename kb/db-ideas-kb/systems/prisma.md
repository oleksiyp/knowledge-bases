---
type: System
title: Prisma
description: "Schema-first TypeScript ORM with generated types. It led the type-safe ORM wave from 2020, then removed its Rust query engine in Prisma 7 (Nov 2025) after it became a liability. It now funds itself through Prisma Postgres and Accelerate."
resource: https://www.prisma.io
tags: [orm, typescript, developer-experience, rust]
kind: oss
first_release: 2020
org: "Prisma Data, Inc."
license: Apache-2.0
outcome: pivoted
ideas: [ideas/edge-devx/type-safe-orms, ideas/edge-devx/serverless-db-connectivity]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: p7
    resource: https://www.prisma.io/blog/announcing-prisma-orm-7-0-0
    title: "Prisma 7 release: Rust-free, faster, and more compatible (2025-11-19)"
    author: org:prisma
  - id: p7-infoq
    resource: https://www.infoq.com/news/2026/01/prisma-7-performance/
    title: "InfoQ: Prisma 7: Rust-free architecture and performance gains"
    author: org:infoq
  - id: rust-ts
    resource: https://www.prisma.io/blog/rust-to-typescript-update-boosting-prisma-orm-performance
    title: "Prisma: Rust to TypeScript update: boosting Prisma ORM performance"
    author: org:prisma
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/prisma
    title: "npm download API: prisma and drizzle-orm, week ending 2026-10-01"
  - id: gh
    resource: https://github.com/prisma/prisma
    title: "Prisma GitHub repository"
---

# Summary
Prisma 2 (2020) made the schema file, `prisma generate` and a fully typed client the standard TypeScript database experience. Queries went through a separate query engine written in Rust. That engine's costs grew as deployment moved to serverless and edge runtimes: large binaries, cold starts, platform-specific builds, and a contributor barrier because few users could work in Rust. Prisma 7, released November 19, 2025, made a TypeScript query compiler the default and removed the Rust binary. Prisma said the Rust–JS communication layer had been slower than pure JS, and reported 90% smaller bundles, 3x faster queries and lower CPU and memory use[^p7][^p7-infoq][^rust-ts]. Commercially, Prisma moved toward hosting with Accelerate (pooling and caching) and Prisma Postgres, which runs on bare metal with unikernel microVMs[^p7]. It still had about 21.4M weekly npm downloads in late September 2026 and 47.7k GitHub stars, but Drizzle had overtaken it in downloads[^npm][^gh].

# Timeline
| Year | Event |
|---|---|
| 2020 | Prisma 2 GA (Rust engine) |
| 2023–25 | Accelerate, then Prisma Postgres |
| 2025 | Prisma 7 removes Rust (Nov 19)[^p7] |
| 2026 | Overtaken by Drizzle in weekly downloads[^npm] |

# What worked
- It defined the developer-experience bar for type-safe database access in TypeScript.

# What didn't
- The native engine architecture. The release notes admit the cross-language boundary slowed things down[^p7].

# Related
[Type-safe ORMs](/ideas/edge-devx/type-safe-orms.md) · [Drizzle](/systems/drizzle.md) · [Prisma 7 event](/events/2025-11-prisma-7-drops-rust.md)
