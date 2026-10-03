---
type: OSS Project
title: Redis
description: "In-memory data store whose 2024 move to SSPL/RSAL spawned the Valkey fork; Redis reversed course to AGPLv3 with Redis 8 (May 2025) and grew past $300M ARR, but lost its monopoly on the open ecosystem."
resource: https://github.com/redis/redis
tags: [database, cache, relicensing, agpl, sspl, fork-target]
domain: licensing-forks
license: "AGPL-3.0 OR SSPL-1.0 OR RSALv2 (tri-license, Redis 8+)"
license_history: ["BSD-3-Clause (2009-2024)", "RSALv2/SSPLv1 dual (Redis 7.4, March 2024)", "AGPLv3 added as option (Redis 8.0, May 2025)"]
governance: single-vendor
steward: Redis Ltd
backing_orgs: [organizations/redis-ltd]
metrics:
  github_stars: { value: 76574, as_of: 2026-10-03 }
  arr_usd: { value: "300M+", as_of: 2026-01-27 }
  paying_customers: { value: 12000, as_of: 2026-01-27 }
oss_verdict: contested
business_verdict: growing
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: redis-gh
    resource: https://github.com/redis/redis
    title: Redis GitHub repository (releases, stars)
  - id: redis-agpl-blog
    resource: https://redis.io/blog/agplv3/
    title: "Redis blog: Redis is now available under the AGPLv3 open source license"
  - id: lwn-redis-agpl
    resource: https://lwn.net/Articles/1019686/
    title: "LWN: Redis is now available under the AGPLv3 open source license"
  - id: techzine-redis
    resource: https://www.techzine.eu/news/infrastructure/131056/redis-returns-to-open-source-after-damaging-community-relationship/
    title: "Techzine: Redis returns to open source after damaging community relationship"
  - id: redis-dual
    resource: https://redis.io/blog/redis-adopts-dual-source-available-licensing/
    title: "Redis blog: Redis adopts dual source-available licensing (2024-03-20)"
  - id: lf-valkey-launch
    resource: https://www.linuxfoundation.org/press/linux-foundation-launches-open-source-valkey-community
    title: "Linux Foundation: Launches open source Valkey community (2024-03-28)"
  - id: reg-redis-2024
    resource: https://www.theregister.com/2024/03/22/redis_changes_license/
    title: "The Register: Redis tightens its license terms, pleasing no one (2024-03-22)"
  - id: redis-300m
    resource: https://finance.yahoo.com/news/redis-passes-300m-annualized-recurring-140000537.html
    title: "Redis passes $300M in annualized recurring revenue (press release, 2026-01-27)"
  - id: redis-decodable
    resource: https://www.globenewswire.com/news-release/2025/09/04/3144606/0/en/Redis-to-Acquire-Real-Time-Data-Platform-Decodable-Expands-Redis-for-AI-to-Deliver-Context-and-Memory-for-AI-Agents-and-Agentic-Systems.html
    title: "Redis to acquire Decodable; LangCache (2025-09-04)"
  - id: globes-layoffs
    resource: https://en.globes.co.il/en/article-redis-to-lay-off-80-in-israel-1001549107
    title: "Globes: Redis to lay off 80 in Israel (2026-07-13)"
  - id: percona-erosion
    resource: https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
    title: "Percona: Community erosion post license change"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
---

# Summary
Redis is the textbook case of a relicensing that was partially reversed. Redis Ltd moved Redis 7.4 from BSD to a source-available RSALv2/SSPLv1 dual license in March 2024, which triggered the Linux Foundation [Valkey](/projects/licensing-forks/valkey.md) fork backed by AWS, Google, Oracle, Ericsson and Snap.[^redis-dual][^lf-valkey-launch][^reg-redis-2024] In May 2025 Redis 8.0 added AGPLv3 as an option, and creator Salvatore "antirez" Sanfilippo, who had rejoined, framed it as "Redis is open source again".[^redis-agpl-blog][^lwn-redis-agpl] As a business Redis Ltd did well. It passed $300M ARR with about 12,000 paying customers by January 2026.[^redis-300m] As a community, though, Redis no longer has the ecosystem to itself. About 37.5% of its pre-fork contributors stopped contributing, and Valkey now has higher PR velocity.[^percona-erosion][^redmonk-valkey] Verdict: the business grew, and the OSS side is still contested.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024-03-20/28 | Redis 7.4 relicensed to RSALv2/SSPLv1 (Mar 20); LF launches Valkey from Redis 7.2.4 (Mar 28)[^redis-dual][^lf-valkey-launch] | OSS | − |
| W24 | 2025-05-01 | Redis 8.0 adds AGPLv3; antirez returns, contributes Vector Sets[^redis-agpl-blog][^techzine-redis] | OSS | + |
| W24 | 2025-09-04 | Announces Decodable acquisition and LangCache semantic caching[^redis-decodable] | Business | + |
| W9 | 2026-01-27 | Passes $300M ARR, 12,000 paying customers, 50+ $1M customers[^redis-300m] | Business | + |
| W6 | 2026-04-06 | RedMonk: Valkey has sustained slightly higher commit velocity than Redis[^redmonk-valkey] | OSS | − |
| W3 | 2026-07-13 | About 80 of 300 Israel staff laid off (≈27%)[^globes-layoffs] | Business | − |
| W3 | 2026-09-17 | Parallel patch releases 8.4.7 / 8.6.7 / 8.8.3 / 8.10.2[^redis-gh] | OSS | + |

# OSS successes
- AGPLv3 put Redis back on the OSI-approved list, which allows distro repackaging and community trust to recover.[^lwn-redis-agpl]
- antirez's return brought new feature work (Vector Sets) and credibility with developers.[^techzine-redis]
- Release cadence is fast: four maintained release lines were patched on the same day in Sept 2026.[^redis-gh]

# OSS failures / risks
- About 37.5% (9 of 24) of pre-fork contributors stopped contributing to Redis. Key maintainers from AWS, Tencent and Ericsson moved to Valkey.[^percona-erosion]
- In 2025 Valkey averaged about 80 PRs/month against Redis's 42.[^percona-erosion]
- AGPL is not BSD. Hyperscalers and many distros have standardised on Valkey and have little reason to come back (see [Valkey](/projects/licensing-forks/valkey.md)).

# Business successes
- ARR passed $300M (Jan 2026), with AI workloads (vector search, LangCache, agent memory) cited as the main driver.[^redis-300m]
- M&A to extend the AI story: Decodable (Sept 2025).[^redis-decodable]

# Business failures / risks
- Layoffs of roughly 27% of the Israel workforce in July 2026, despite the ARR milestone.[^globes-layoffs]
- No IPO after years of preparation; last priced round was 2021 (≈$2B valuation per Globes).[^globes-layoffs]
- Managed-cache revenue at the hyperscalers now goes to Valkey-based services, not to Redis Ltd.

# By window
## W3
- July 2026 Israel layoffs (~80 people).[^globes-layoffs]
- Routine multi-branch patch releases (8.10.2, Sept 17).[^redis-gh]
## W6
- RedMonk's "Valkey at two" analysis shows Redis no longer leads on contribution velocity.[^redmonk-valkey]
## W9
- $300M ARR milestone announced Jan 27, 2026.[^redis-300m]
## W12
- No notable licensing events found; product focus on AI/agent memory.
## W24
- AGPLv3 return with Redis 8 (May 2025).[^redis-agpl-blog]
- Decodable acquisition (Sept 2025).[^redis-decodable]

# Lessons
- Undoing a license change does not undo a fork. Once hyperscalers have funded a foundation alternative, the fork survives even after the original goes back to an open license.
- Relicensing and revenue growth happened together, but the growth came from AI products and enterprise sales, not from extra money paid by cloud providers.
- Bringing back the founder (antirez) was the most effective trust-repair step.

# Related
- [Valkey](/projects/licensing-forks/valkey.md)
- [Redis Ltd](/organizations/redis-ltd.md)
- [Redis returns to open source with AGPLv3](/events/2025-05-redis-agplv3-relicense.md)
- [Licensing & forks domain review](/domains/licensing-forks.md)

[^redis-gh]: Redis GitHub repository — https://github.com/redis/redis
[^redis-agpl-blog]: Redis blog, AGPLv3 — https://redis.io/blog/agplv3/
[^lwn-redis-agpl]: LWN — https://lwn.net/Articles/1019686/
[^techzine-redis]: Techzine — https://www.techzine.eu/news/infrastructure/131056/redis-returns-to-open-source-after-damaging-community-relationship/
[^redis-dual]: Redis blog — https://redis.io/blog/redis-adopts-dual-source-available-licensing/
[^lf-valkey-launch]: Linux Foundation — https://www.linuxfoundation.org/press/linux-foundation-launches-open-source-valkey-community
[^reg-redis-2024]: The Register — https://www.theregister.com/2024/03/22/redis_changes_license/
[^redis-300m]: Redis $300M ARR press release — https://finance.yahoo.com/news/redis-passes-300m-annualized-recurring-140000537.html
[^redis-decodable]: Redis/Decodable press release — https://www.globenewswire.com/news-release/2025/09/04/3144606/0/en/Redis-to-Acquire-Real-Time-Data-Platform-Decodable-Expands-Redis-for-AI-to-Deliver-Context-and-Memory-for-AI-Agents-and-Agentic-Systems.html
[^globes-layoffs]: Globes — https://en.globes.co.il/en/article-redis-to-lay-off-80-in-israel-1001549107
[^percona-erosion]: Percona — https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
[^redmonk-valkey]: RedMonk — https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
