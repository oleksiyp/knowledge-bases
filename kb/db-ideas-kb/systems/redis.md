---
type: System
title: Redis
description: "The in-memory data-structure server whose RESP protocol is the de facto cache standard. Redis Ltd.'s March 2024 switch from BSD to SSPL/RSAL caused the Valkey fork. Redis 8 (May 2025) added AGPLv3 and became open source again."
resource: https://redis.io
tags: [key-value, cache, in-memory, licensing, sspl, agpl, vector]
kind: product
first_release: 2009
org: "Redis Ltd. (formerly Redis Labs)"
license: "RSALv2 / SSPLv1 / AGPLv3 (tri-license since 8.0)"
outcome: stable
ideas: [ideas/nosql-models/redis-and-in-memory-key-value, ideas/nosql-models/sql-nosql-convergence]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dual
    resource: https://redis.io/blog/redis-adopts-dual-source-available-licensing/
    title: "Redis adopts dual source-available licensing (2024-03-20)"
    author: org:redis
  - id: antirez
    resource: https://antirez.com/news/151
    title: "antirez: Redis is open source again"
    author: person:salvatore-sanfilippo
  - id: infoq
    resource: https://www.infoq.com/news/2025/05/redis-agpl-license/
    title: "InfoQ: Redis returns to open source under AGPL license"
    author: org:infoq
  - id: percona
    resource: https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
    title: "Percona: Community erosion post license change (2025-12-05)"
    author: org:percona
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Redis is the default cache, session store and lightweight queue of the web era. From 2018 to 2026 its story was mostly about licensing. Redis Labs put Commons Clause on its modules (2018) and renamed itself Redis Ltd. (2021). On March 20, 2024 it relicensed the core from BSD-3 to dual RSALv2/SSPLv1, starting with 7.4[^dual]. Cloud vendors and outside maintainers left for the Valkey fork within days. Founder Salvatore Sanfilippo (antirez) rejoined in December 2024[^pavlo-2024]. Redis 8.0 (May 2025) added AGPLv3 as a third license, merged the Redis Stack modules (JSON, query engine, time series, probabilistic types) into core, and introduced antirez's vector sets[^antirez][^infoq]. A December 2025 Percona analysis found that 9 of 24 pre-fork contributors stopped contributing to Redis, and that Redis's PR rate (42/month) trailed Valkey's (80/month)[^percona].

# Timeline

| Year | Event |
|---|---|
| 2018 | Commons Clause on Redis Labs modules |
| 2021 | Company renamed Redis Ltd. |
| 2024 | Core relicensed to RSALv2/SSPLv1 (Mar 20)[^dual]; Valkey fork; antirez returns (Dec)[^pavlo-2024] |
| 2025 | Redis 8 with AGPLv3 option, vector sets, Stack merged into core (May)[^infoq] |

# What worked

- Product velocity after antirez's return. Redis 8 brought real performance gains and new data types.
- Reversing course quickly, within 14 months, once the fork had established itself.

# What didn't

- The license change prompted a major fork and contributor departures in Percona's sample. That is evidence of ecosystem fragmentation, not a measurement of the entire managed-cache market.[^percona]
- Trademark enforcement against community projects further hurt perception[^pavlo-2024].

# Related

- [In-memory KV and the Redis saga](/ideas/nosql-models/redis-and-in-memory-key-value.md)
- [Valkey](/systems/valkey.md), [Dragonfly](/systems/dragonfly.md), [Garnet](/systems/garnet.md)
- [Redis goes source-available](/events/2024-03-redis-source-available-relicense.md), [Redis returns to AGPL](/events/2025-05-redis-agpl.md)
