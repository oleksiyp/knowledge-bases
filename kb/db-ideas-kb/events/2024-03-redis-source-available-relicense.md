---
type: Event
title: "Redis moves from BSD to RSALv2/SSPLv1"
description: "On 20 Mar 2024 Redis Ltd announced that from Redis 7.4 the core would be dual-licensed under RSALv2 and SSPLv1 instead of BSD-3. Within eight days the Linux Foundation launched the Valkey fork."
date: 2024-03-20
year: 2024
kind: license-change
signal: negative
ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/forks-as-backlash]
systems: [systems/redis, systems/valkey]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: redis-blog
    resource: "https://redis.io/blog/redis-adopts-dual-source-available-licensing/"
    title: "Redis: Redis adopts dual source-available licensing (2024-03-20)"
  - id: reg
    resource: "https://www.theregister.com/2024/03/22/redis_changes_license/"
    title: "The Register: Redis tightens its license terms, pleasing no one (2024-03-22)"
  - id: pavlo-2024
    resource: "https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html"
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
---

# What happened

Redis Ltd announced that future Redis releases, starting with 7.4, would be available under the Redis Source Available License v2 or SSPLv1 rather than the BSD license Redis had used since 2009.[^redis-blog][^reg] The same day it announced the acquisition of Speedb.[^pavlo-2024] Redis Ltd had already moved its modules to source-available terms in 2018–2019.

# Why it matters

Redis was one of the most widely deployed open-source databases, with many contributors outside Redis Ltd, including hyperscaler engineers. The result was the fastest and best-funded fork of the period, Valkey. Pavlo noted the backlash was larger because the company's founders "were not the system's original creators".[^pavlo-2024] Redis added AGPL 14 months later.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [Valkey fork](/events/2024-03-valkey-fork.md) · [Redis adds AGPL](/events/2025-05-redis-agpl.md)

[^redis-blog]: Redis: Redis adopts dual source-available licensing (2024-03-20).
[^reg]: The Register: Redis tightens its license terms, pleasing no one (2024-03-22).
[^pavlo-2024]: Andy Pavlo: Databases in 2024: A Year in Review.
