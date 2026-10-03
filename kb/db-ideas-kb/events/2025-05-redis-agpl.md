---
type: Event
title: "Redis 8 adds AGPLv3, returning Redis to open source"
description: "On 1 May 2025, with Redis 8.0, Redis Ltd added AGPLv3 as a license option alongside RSALv2 and SSPLv1, a change led by returning creator Salvatore Sanfilippo. Valkey kept its backers."
date: 2025-05-01
year: 2025
kind: license-change
signal: positive
ideas: [ideas/business-licensing/return-to-agpl, ideas/business-licensing/forks-as-backlash]
systems: [systems/redis, systems/valkey]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: redis-agpl
    resource: "https://redis.io/blog/agplv3/"
    title: "Redis: Redis is now available under the AGPLv3 open source license (2025-05-01)"
  - id: techzine
    resource: "https://www.techzine.eu/news/infrastructure/131056/redis-returns-to-open-source-after-damaging-community-relationship/"
    title: "Techzine: Redis returns to open source after damaging community relationship"
  - id: redmonk
    resource: "https://redmonk.com/sogrady/2026/04/06/valkey-at-two/"
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
  - id: redis-300m
    resource: "https://finance.yahoo.com/news/redis-passes-300m-annualized-recurring-140000537.html"
    title: "Redis passes $300M ARR (2026-01-27)"
---

# What happened

Redis 8.0 shipped with AGPLv3 as a third license choice next to RSALv2 and SSPLv1. The change was led by Salvatore Sanfilippo (antirez), who had rejoined Redis Ltd, and came with new features including vector sets.[^redis-agpl][^techzine]

# Why it matters

It was the second big SSPL reversal after Elastic. The business did fine either way: Redis passed $300M ARR in January 2026.[^redis-300m] Valkey's momentum continued, and RedMonk found no sign of contributors returning.[^redmonk] The lesson is that a license reversal repairs reputation but does not undo a well-funded fork.

# Related

- [Return to AGPL](/ideas/business-licensing/return-to-agpl.md) · [Redis relicense 2024](/events/2024-03-redis-source-available-relicense.md) · [Valkey fork](/events/2024-03-valkey-fork.md)

[^redis-agpl]: Redis: Redis is now available under the AGPLv3 open source license (2025-05-01).
[^techzine]: Techzine: Redis returns to open source after damaging community relationship.
[^redmonk]: RedMonk: Two Years of Valkey (2026-04-06).
[^redis-300m]: Redis passes $300M ARR (2026-01-27).
