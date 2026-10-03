---
type: System
title: Zero (Rocicorp)
description: "General-purpose web sync engine from Rocicorp, the makers of Replicache: a client-side query engine plus a server-side Postgres replica that incrementally maintains query results. It replaced Replicache (now in maintenance mode) and the retired Reflect, and reached 1.0 in June 2026."
resource: https://zero.rocicorp.dev
tags: [sync, ivm, postgres, local-first, replicache]
kind: oss
first_release: 2024
org: "Rocicorp"
license: Apache-2.0
outcome: growing
ideas: [ideas/edge-devx/sync-engines]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: zero1
    resource: https://www.infoq.com/news/2026/06/zero-version-1/
    title: "InfoQ: Zero reaches 1.0 (Jun 2026)"
    author: org:infoq
  - id: reflect
    resource: https://rocicorp.dev/blog/retiring-reflect
    title: "Rocicorp: Retiring Reflect (2024)"
    author: org:rocicorp
  - id: replicache
    resource: https://replicache.dev/
    title: "Replicache homepage (maintenance-mode notice)"
    author: org:rocicorp
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/@rocicorp/zero
    title: "npm download API: @rocicorp/zero, week ending 2026-10-01"
---

# Summary
Rocicorp spent about four years on Replicache, a client-side sync library in which developers wrote their own push and pull endpoints, and Reflect, a hosted multiplayer backend. In May 2024 it shifted focus to Zero and retired Reflect, whose servers closed on November 1, 2024[^reflect]. Zero pairs a client library (still built on Replicache internally) with "zero-cache", a read-only replica of the app's Postgres that uses incremental view maintenance to keep each client's queries up to date. Writes are server-authoritative custom mutators. After roughly two years and more than 50 releases, Zero 1.0 shipped in June 2026. The version bump was largely symbolic (no breaking changes from 0.26) and signals API stability[^zero1]. Replicache is in maintenance mode[^replicache]. Zero's npm package had about 0.29M weekly downloads in late September 2026[^npm].

# Timeline
| Year | Event |
|---|---|
| ~2020–21 | Replicache launched |
| 2024 | Focus shifts to Zero (May). Reflect retired (Nov 1)[^reflect] |
| 2026 | Zero 1.0 (Jun)[^zero1] |

# What worked
- Instant UI by default, and a query-driven sync model that removes hand-written endpoints.

# What didn't
- Two earlier products (Replicache's do-it-yourself backend and Reflect's hosted model) did not reach a sustainable scale on their own[^reflect].

# Related
[Sync engines](/ideas/edge-devx/sync-engines.md) · [ElectricSQL](/systems/electricsql.md) · [Local-first and CRDTs](/ideas/edge-devx/local-first-crdts.md)
