---
type: OSS Project
title: Valkey
description: "Linux Foundation BSD-licensed fork of Redis (March 2024), backed by AWS, Google, Oracle and others; the most successful license-driven fork of the period, shipping 8.0→9.1 and becoming the default in clouds and distros."
resource: https://github.com/valkey-io/valkey
tags: [database, cache, fork, bsd-3-clause, foundation-hosted, linux-foundation]
domain: licensing-forks
license: BSD-3-Clause
license_history: ["BSD-3-Clause (fork of Redis 7.2.4, 2024-)"]
governance: foundation
steward: Linux Foundation
backing_orgs: []
metrics:
  github_stars: { value: 27359, as_of: 2026-10-03 }
  contributors_growth: { value: "18 (Apr 2024) -> 49 (Nov 2025)", as_of: 2025-11-30 }
  prs_per_month_2025: { value: 80, as_of: 2025-12-31 }
  container_pulls_total: { value: "70M+ (1M/week)", as_of: 2026-02-24 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: valkey-releases
    resource: https://valkey.io/download/releases/
    title: Valkey release history
  - id: valkey-gh
    resource: https://github.com/valkey-io/valkey
    title: Valkey GitHub repository
  - id: lf-valkey9
    resource: https://www.linuxfoundation.org/press/valkey-9.0-delivers-performance-and-resiliency-for-real-time-workloads
    title: "Linux Foundation: Valkey 9.0 delivers performance and resiliency (2025-10-21)"
  - id: infoq-valkey9
    resource: https://www.infoq.com/news/2025/11/valkey-9-atomic-migration/
    title: "InfoQ: Valkey 9.0 introduces multi-database clustering, atomic slot migration"
  - id: tns-valkey91
    resource: https://thenewstack.io/valkey-91-cuts-memory/
    title: "The New Stack: Valkey 9.1 trims memory 10% and pulls search into the core"
  - id: tns-valkey-bots
    resource: https://thenewstack.io/valkey-ai-backporting-agents/
    title: "The New Stack: Project Valkey now sends in the bots (AI backporting)"
  - id: valkey-security-2026
    resource: https://valkey.io/blog/keeping-up-with-ai-valkey-security/
    title: "Valkey blog: Keeping up with AI: Valkey security in 2026"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
  - id: percona-erosion
    resource: https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
    title: "Percona: Community erosion post license change"
  - id: stack-pulls
    resource: https://www.thestack.technology/valkeys-now-seeing-1m-container-pulls-a-week-how-hard-is-the-migration-from-redis/
    title: "The Stack: AWS's Madelyn Olson on the future of Valkey — 70M+ container pulls, 1M/week (2026-02-24)"
  - id: percona-adoption
    resource: https://www.percona.com/resource/valkey-adoption-report/
    title: "Percona: Key-value stores — adoption trends through a Valkey lens (survey of 151 IT professionals)"
  - id: valkey-92-plan
    resource: https://github.com/valkey-io/valkey/issues/4218
    title: "Valkey 9.2 release plan (rc1 Sept 2026, GA target Nov 15, 2026)"
  - id: al2023-valkey
    resource: https://docs.aws.amazon.com/linux/al2023/ug/redis6-to-valkey-al2023.html
    title: "AWS docs: Redis 6 to Valkey transition on Amazon Linux 2023"
---

# Summary
Valkey is the clearest case in this period of a fork that won. It was created under the Linux Foundation from the last BSD-licensed Redis after Redis Ltd's March 2024 relicensing. It has shipped major releases on a steady cadence: 8.0 (Sept 2024), 8.1 (Mar 2025), 9.0 (Oct 2025), 9.1 (May 2026), with 9.2-rc1 in Sept 2026.[^valkey-releases] RedMonk found in April 2026 that Valkey "is not behaving like most forks and declining in interest" and has a longer list of substantial committers than Redis, led by Amazon with Aiven, Alibaba, ByteDance and Google also contributing.[^redmonk-valkey] Adoption numbers are large for a two-year-old fork: AWS's Madelyn Olson cited 70M+ container pulls, running at about 1M a week, in Feb 2026.[^stack-pulls] In a Percona survey of 151 IT professionals, 75% of organisations said they were evaluating Valkey as an alternative.[^percona-adoption] Distros have switched too; Amazon Linux 2023, for example, documents a Redis 6 → Valkey transition.[^al2023-valkey] Redis's return to AGPL in 2025 did not cause any measurable migration back.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-09-16 | Valkey 8.0.0 GA[^valkey-releases] | OSS | + |
| W24 | 2025-03-31 | Valkey 8.1.0[^valkey-releases] | OSS | + |
| W24 | 2025-05-01 | Redis returns to AGPLv3; Valkey keeps BSD and its backers[^redmonk-valkey] | OSS | + |
| W12 | 2025-10-21 | Valkey 9.0: atomic slot migration, multi-DB clusters, hash-field expiry; >1B req/s cluster claim[^lf-valkey9][^infoq-valkey9] | OSS | + |
| W9 | 2026-02-24 | 70M+ container pulls, ~1M/week (AWS's Madelyn Olson)[^stack-pulls] | OSS | + |
| W9 | 2026-03-17 | 9.1.0-rc1[^valkey-releases] | OSS | + |
| W6 | 2026-04-06 | RedMonk "Two Years of Valkey": sustained higher commit velocity than Redis[^redmonk-valkey] | OSS | + |
| W6 | 2026-05-19 | Valkey 9.1.0: ~10% memory cut, search pulled into core[^valkey-releases][^tns-valkey91] | OSS | + |
| W6 | 2026-06 | Project adopts AI agents for backporting fixes[^tns-valkey-bots] | OSS | + |
| W3 | 2026-09-16 | 9.2.0-rc1 (B+tree sorted sets, forkless save, LZ4 RDB compression; GA targeted Nov 15)[^valkey-92-plan]; Valkey says it published more security advisories in Jan–Aug 2026 than in its first 21 months[^valkey-security-2026] | OSS | ± |

# OSS successes
- Contributor base grew from 18 (Apr 2024) to 49 (Nov 2025). Valkey opened 865 PRs in 2025 against Redis's 537.[^percona-erosion]
- Multi-vendor governance. No single company controls the project, and the backers are themselves competitors (AWS, Google, Alibaba, Oracle, Aiven).[^redmonk-valkey][^lf-valkey9]
- It has moved beyond Redis 7.2 compatibility with features of its own (atomic slot migration, multi-DB in cluster mode, built-in search in 9.1).[^infoq-valkey9][^tns-valkey91]

# OSS failures / risks
- The rate of security advisories rose sharply in 2026 as AI tools made bugs cheaper to find. Valkey frames this as a capacity issue it is managing, not yet as a crisis.[^valkey-security-2026]
- Feature divergence from Redis (Redis Query Engine, Vector Sets) means "drop-in replacement" claims are getting weaker for module users.
- Dependence on a small set of hyperscaler employers: a strategy change at AWS would matter a great deal.

# Business successes
- n/a as a project. The value goes to backers' managed services (e.g., AWS ElastiCache/MemoryDB for Valkey, Google Memorystore for Valkey) and to support vendors (Percona, Aiven).

# Business failures / risks
- No company has direct financial responsibility for the project. Funding depends on how committed the backers stay.

# By window
## W3
- 9.0.6 / 9.1.2 / 8.1.10 patch releases (Sept 1) and 9.2.0-rc1 (Sept 16).[^valkey-releases]
- Security-advisory surge blog post (Sept 2026).[^valkey-security-2026]
## W6
- Valkey 9.1.0 GA (May 19, 2026).[^valkey-releases]
- RedMonk two-year assessment (Apr 6, 2026).[^redmonk-valkey]
## W9
- 9.0.2/9.0.3 maintenance; 9.1-rc1 (Mar 17, 2026).[^valkey-releases]
- 70M+ container pulls reported (Feb 2026).[^stack-pulls]
## W12
- Valkey 9.0 GA (Oct 21, 2025).[^lf-valkey9]
## W24
- 8.0 GA (Sept 2024) and 8.1 (Mar 2025).[^valkey-releases]
- Survived Redis's AGPL return without losing backers.[^redmonk-valkey]

# Lessons
- A fork succeeds when the companies harmed by the relicense (cloud providers) pay maintainers and bring their maintainers with them. Community enthusiasm alone is not enough.
- Neutral foundation governance plus a permissive license makes the fork the safest choice for downstream distributors.
- Once the fork reaches critical mass, a reversal by the original vendor is too late.

# Related
- [Redis](/projects/licensing-forks/redis.md)
- [Redis Ltd](/organizations/redis-ltd.md)
- [Redis returns to open source with AGPLv3](/events/2025-05-redis-agplv3-relicense.md)
- [OpenTofu](/projects/licensing-forks/opentofu.md), [OpenSearch](/projects/licensing-forks/opensearch.md) — sibling foundation forks

[^valkey-releases]: Valkey releases — https://valkey.io/download/releases/
[^valkey-gh]: Valkey GitHub — https://github.com/valkey-io/valkey
[^lf-valkey9]: Linux Foundation press — https://www.linuxfoundation.org/press/valkey-9.0-delivers-performance-and-resiliency-for-real-time-workloads
[^infoq-valkey9]: InfoQ — https://www.infoq.com/news/2025/11/valkey-9-atomic-migration/
[^tns-valkey91]: The New Stack — https://thenewstack.io/valkey-91-cuts-memory/
[^tns-valkey-bots]: The New Stack — https://thenewstack.io/valkey-ai-backporting-agents/
[^valkey-security-2026]: Valkey blog — https://valkey.io/blog/keeping-up-with-ai-valkey-security/
[^redmonk-valkey]: RedMonk — https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
[^stack-pulls]: The Stack — https://www.thestack.technology/valkeys-now-seeing-1m-container-pulls-a-week-how-hard-is-the-migration-from-redis/
[^percona-adoption]: Percona — https://www.percona.com/resource/valkey-adoption-report/
[^valkey-92-plan]: Valkey issue #4218 — https://github.com/valkey-io/valkey/issues/4218
[^al2023-valkey]: AWS docs — https://docs.aws.amazon.com/linux/al2023/ug/redis6-to-valkey-al2023.html
[^percona-erosion]: Percona — https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
