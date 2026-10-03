---
type: Organization
title: Redis Ltd
description: "Commercial steward of Redis; its 2024 SSPL/RSAL relicense spawned Valkey, it returned to AGPLv3 in May 2025, passed $300M ARR in Jan 2026 on AI demand, but cut ~27% of Israel staff in July 2026."
resource: https://redis.io
tags: [commercial-open-source, database, relicensing, agpl]
org_kind: coss-startup
hq: San Francisco, USA / Tel Aviv, Israel
funding: { total_usd: "~350M", last_round: "Series G $110M", last_round_date: 2021-04, valuation_usd: ">2B (2021)" }
business_verdict: growing
projects: [projects/licensing-forks/redis, projects/licensing-forks/valkey]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: redis-300m
    resource: https://finance.yahoo.com/news/redis-passes-300m-annualized-recurring-140000537.html
    title: "Redis passes $300M in annualized recurring revenue (2026-01-27)"
  - id: globes-layoffs
    resource: https://en.globes.co.il/en/article-redis-to-lay-off-80-in-israel-1001549107
    title: "Globes: Redis to lay off 80 in Israel (2026-07-13)"
  - id: redis-agpl-blog
    resource: https://redis.io/blog/agplv3/
    title: "Redis blog: AGPLv3"
  - id: redis-decodable
    resource: https://www.globenewswire.com/news-release/2025/09/04/3144606/0/en/Redis-to-Acquire-Real-Time-Data-Platform-Decodable-Expands-Redis-for-AI-to-Deliver-Context-and-Memory-for-AI-Agents-and-Agentic-Systems.html
    title: "Redis to acquire Decodable (2025-09-04)"
---

# Summary
Redis Ltd is the main test case for whether defensive relicensing pays off. It moved Redis to RSALv2/SSPLv1 in March 2024, lost the community fork battle to Valkey, and added AGPLv3 with Redis 8 in May 2025.[^redis-agpl-blog] Commercially it kept growing. It passed $300M ARR with 12,000 paying customers in January 2026, attributing growth to AI (vector search, LangCache, agent memory).[^redis-300m] It acquired Decodable in Sept 2025.[^redis-decodable] In July 2026 it laid off about 80 of its roughly 300 Israel employees.[^globes-layoffs] Total funding is about $350M, and the last round was in 2021 at a valuation above $2B.[^globes-layoffs]

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-05-01 | AGPLv3 added with Redis 8[^redis-agpl-blog] | + |
| W24 | 2025-09-04 | Decodable acquisition announced[^redis-decodable] | + |
| W9 | 2026-01-27 | $300M ARR, 12,000 customers[^redis-300m] | + |
| W3 | 2026-07-13 | ~80 layoffs in Israel (~27% of local staff)[^globes-layoffs] | − |

# Monetization model
Redis Cloud (managed, including on hyperscaler marketplaces), Redis Software (self-managed enterprise), and AI add-ons (LangCache, vector search). The core is tri-licensed AGPLv3/SSPL/RSAL.

# Successes
- ARR growth through and after two license changes.[^redis-300m]

# Failures / risks
- Lost control of the open ecosystem to Valkey. Layoffs despite growth. No IPO.[^globes-layoffs]

# Related
- [Redis](/projects/licensing-forks/redis.md), [Valkey](/projects/licensing-forks/valkey.md)
- [Redis AGPLv3 event](/events/2025-05-redis-agplv3-relicense.md)

[^redis-300m]: Redis press release — https://finance.yahoo.com/news/redis-passes-300m-annualized-recurring-140000537.html
[^globes-layoffs]: Globes — https://en.globes.co.il/en/article-redis-to-lay-off-80-in-israel-1001549107
[^redis-agpl-blog]: Redis blog — https://redis.io/blog/agplv3/
[^redis-decodable]: GlobeNewswire — https://www.globenewswire.com/news-release/2025/09/04/3144606/0/en/Redis-to-Acquire-Real-Time-Data-Platform-Decodable-Expands-Redis-for-AI-to-Deliver-Context-and-Memory-for-AI-Agents-and-Agentic-Systems.html
