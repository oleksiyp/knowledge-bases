---
type: System
title: PowerSync
description: "Sync engine spun out of JourneyApps that keeps client-side SQLite in sync with Postgres, MongoDB, MySQL or SQL Server through declarative sync rules. A pragmatic, server-authoritative design with source-available (FSL) self-hosting."
resource: https://powersync.com
tags: [sync, sqlite, offline-first, mobile]
kind: product
first_release: 2023
org: "JourneyApps / PowerSync"
license: FSL (service); client SDKs open source
outcome: growing
ideas: [ideas/edge-devx/sync-engines]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: home
    resource: https://powersync.com/
    title: "PowerSync homepage"
    author: org:powersync
  - id: selfhost
    resource: https://docs.powersync.com/configuration/powersync-service/self-hosted-instances
    title: "PowerSync docs: self-hosted instances"
    author: org:powersync
  - id: vs-electric
    resource: https://powersync.com/blog/electricsql-electric-next-vs-powersync
    title: "PowerSync: ElectricSQL electric-next vs PowerSync"
    author: org:powersync
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/@powersync/web
    title: "npm download API: @powersync/web, week ending 2026-10-01"
---

# Summary
PowerSync grew out of JourneyApps' long experience with offline-first industrial mobile apps. It has a server-side service that reads the source database's change stream and computes per-user "buckets" from sync rules, and client SDKs (web, React Native, Flutter, Swift, Kotlin) that keep a local SQLite database with reactive queries and an upload queue for writes. Writes go back through the developer's own backend[^home][^selfhost]. Support grew beyond Postgres to MongoDB, MySQL and SQL Server[^selfhost]. The service can be self-hosted under the Functional Source License[^selfhost]. PowerSync competed directly with ElectricSQL and published comparison posts during Electric's 2024 rewrite[^vs-electric]. Its web SDK had about 0.1M weekly npm downloads in late September 2026[^npm]. Most of its usage is probably in mobile SDKs, which npm does not capture.

# Timeline
| Year | Event |
|---|---|
| 2023 | PowerSync launched publicly (Postgres) |
| 2024 | Open edition / self-hosting. Comparisons with Electric's rewrite[^vs-electric] |
| 2025–26 | MongoDB, MySQL and SQL Server sources[^selfhost] |

# What worked
- Database-agnostic, server-authoritative sync with mature mobile SDKs.

# What didn't
- A smaller developer mindshare in web-centric communities than Electric or Zero.

# Related
[Sync engines](/ideas/edge-devx/sync-engines.md) · [ElectricSQL](/systems/electricsql.md) · [Zero](/systems/zero.md)
