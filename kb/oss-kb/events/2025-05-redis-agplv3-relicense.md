---
type: Event
title: Redis returns to open source with AGPLv3
description: "With Redis 8.0 (May 1, 2025) Redis Ltd added AGPLv3 as a license option alongside RSALv2/SSPLv1, 14 months after leaving BSD; creator antirez returned. Valkey kept its backers, so the fork persisted."
event_kind: license-change
date: 2025-05-01
window: W24
impact: mixed
projects: [projects/licensing-forks/redis, projects/licensing-forks/valkey]
organizations: [organizations/redis-ltd]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: redis-agpl-blog
    resource: https://redis.io/blog/agplv3/
    title: "Redis blog: Redis is now available under the AGPLv3 open source license"
  - id: lwn-redis-agpl
    resource: https://lwn.net/Articles/1019686/
    title: "LWN: Redis AGPLv3"
  - id: techzine-redis
    resource: https://www.techzine.eu/news/infrastructure/131056/redis-returns-to-open-source-after-damaging-community-relationship/
    title: "Techzine: Redis returns to open source after damaging community relationship"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
  - id: percona-erosion
    resource: https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
    title: "Percona: Community erosion post license change"
---

# What happened
On May 1, 2025, with Redis 8.0, Redis Ltd added the OSI-approved AGPLv3 as a third license option next to RSALv2 and SSPLv1, which it had adopted in March 2024.[^redis-agpl-blog][^lwn-redis-agpl] Creator Salvatore Sanfilippo (antirez), who had rejoined the company, led the change and contributed the new Vector Sets data type.[^techzine-redis]

# Why it matters
It was the second high-profile reversal of an SSPL relicense, after Elastic in Aug 2024. It shows that source-available licensing became a reputational cost the vendor wanted to remove once the competitive goal was reached.

# Outcome so far
The fork did not come back. By April 2026 Valkey had sustained slightly higher commit velocity than Redis, and about 37.5% of Redis's pre-fork contributors had stopped contributing.[^redmonk-valkey][^percona-erosion] Redis Ltd's revenue grew anyway (see the org file).

# Related
- [Redis](/projects/licensing-forks/redis.md), [Valkey](/projects/licensing-forks/valkey.md), [Redis Ltd](/organizations/redis-ltd.md)

[^redis-agpl-blog]: Redis blog — https://redis.io/blog/agplv3/
[^lwn-redis-agpl]: LWN — https://lwn.net/Articles/1019686/
[^techzine-redis]: Techzine — https://www.techzine.eu/news/infrastructure/131056/redis-returns-to-open-source-after-damaging-community-relationship/
[^redmonk-valkey]: RedMonk — https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
[^percona-erosion]: Percona — https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
