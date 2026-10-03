---
type: Event
title: "Prisma 7 removes its Rust query engine"
description: "Prisma ORM 7.0 (November 19, 2025) replaced its Rust query engine with a TypeScript query compiler, reporting 90% smaller bundles and 3x faster queries. The leading TypeScript ORM abandoned the native-engine architecture it was built on."
date: 2025-11-19
year: 2025
kind: launch
signal: mixed
ideas: [ideas/edge-devx/type-safe-orms, ideas/edge-devx/serverless-db-connectivity]
systems: [systems/prisma, systems/drizzle]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: p7
    resource: https://www.prisma.io/blog/announcing-prisma-orm-7-0-0
    title: "Prisma 7 release: Rust-free, faster, and more compatible"
    author: org:prisma
  - id: infoq
    resource: https://www.infoq.com/news/2026/01/prisma-7-performance/
    title: "InfoQ: Prisma 7: Rust-free architecture and performance gains"
    author: org:infoq
---

# What happened
Prisma 7 made the TypeScript-based query compiler the default and removed the Rust binary. Prisma said the Rust–JavaScript communication layer had been slower than a pure-JS implementation and that Rust had limited community contributions. It reported 90% smaller bundles, 3x faster queries, lower CPU and memory use, and simpler deployment to Vercel Edge and Cloudflare Workers[^p7][^infoq].

# Why it matters
It is a rare public admission that a "rewrite it in Rust" architecture made a system slower, because the bottleneck was the language boundary. It also reflects the shift in TypeScript ORMs toward thin, pure-JS, edge-compatible designs, the ground on which Drizzle had already overtaken Prisma in downloads.

# Related
[Prisma](/systems/prisma.md) · [Drizzle](/systems/drizzle.md) · [Type-safe ORMs](/ideas/edge-devx/type-safe-orms.md)
