---
type: Idea
title: "Returning to open source via AGPL"
description: "After SSPL failed to stop forks, Elastic (Aug 2024) and Redis (May 2025) added AGPLv3 as an option, making their databases OSI open source again while keeping strong copyleft. Verdict: mixed. AGPL became the stable compromise for vendors, but it did not bring forked communities back and the reversal mainly repaired reputation."
tags: [licensing, agpl, open-source, elastic, redis, reversal]
area: business-licensing
verdict: mixed
hype_peak: 2025
adoption_2026: common
origins: "AGPLv3 (2007) was used by MongoDB until 2018 and by Grafana Labs (relicensed to AGPL in 2021) as a cloud-resistant OSI license."
key_systems: [systems/elasticsearch, systems/redis, systems/valkey, systems/opensearch, systems/scylladb]
related_ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/forks-as-backlash]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: elastic-agpl
    resource: https://www.elastic.co/blog/elasticsearch-is-open-source-again
    title: "Elastic: Elasticsearch is open source. Again! (2024-08-29)"
  - id: redis-agpl
    resource: https://redis.io/blog/agplv3/
    title: "Redis: Redis is now available under the AGPLv3 open source license (2025-05-01)"
  - id: lwn-redis
    resource: https://lwn.net/Articles/1019686/
    title: "LWN: Redis AGPLv3"
  - id: techzine-redis
    resource: https://www.techzine.eu/news/infrastructure/131056/redis-returns-to-open-source-after-damaging-community-relationship/
    title: "Techzine: Redis returns to open source after damaging community relationship"
  - id: itpro-elastic
    resource: https://www.itpro.com/software/open-source/elastic-returns-to-open-source-but-can-it-regain-the-communitys-trust-some-industry-players-arent-holding-their-breath
    title: "ITPro: Elastic returns to open source, but can it regain the community's trust?"
  - id: stack-banon
    resource: https://www.thestack.technology/the-big-interview-their-product-sucked-elastic-cto-shay-banon-on-suing-aws-and-returning-to-oss/
    title: "The Stack: Shay Banon on suing AWS and returning to OSS"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
  - id: lf-os-2026
    resource: https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members
    title: "Linux Foundation: OpenSearch Software Foundation expands ecosystem (2026-09-22)"
  - id: elastic-fy26
    resource: https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000008/a26q4erex991.htm
    title: "Elastic Q4 and FY2026 results (8-K exhibit)"
  - id: redis-300m
    resource: https://finance.yahoo.com/news/redis-passes-300m-annualized-recurring-140000537.html
    title: "Redis passes $300M ARR (2026-01-27)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: scylla-2024
    resource: https://forum.scylladb.com/t/scylladb-source-available-licensing/4214
    title: "ScyllaDB forum: ScyllaDB source available licensing (Dec 2024)"
  - id: crdb-private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: Protecting source code in the age of AI (2026-09-15)"
---

# Summary

**Verdict: mixed.** Two of the most visible relicensers reversed course. Elastic added AGPLv3 to Elasticsearch and Kibana on 29 August 2024 ("Elasticsearch is open source. Again!").[^elastic-agpl] Redis added AGPLv3 with Redis 8.0 on 1 May 2025, after creator Salvatore Sanfilippo rejoined the company.[^redis-agpl] AGPL gave them an OSI-approved license that hyperscalers still avoid, so it became the place where the license pendulum settled. But the reversals did not undo the forks: OpenSearch and Valkey kept growing.[^lf-os-2026][^redmonk-valkey] The trend was also not universal. In the same period ScyllaDB (Dec 2024) and CockroachDB (2024, 2026) moved *further* from open source.[^scylla-2024][^crdb-private]

# The idea

AGPL requires anyone who offers modified software over a network to publish their changes. In practice the large clouds avoid running AGPL code as a service, so AGPL delivers most of SSPL's protection while keeping OSI approval, Linux distribution packaging and community legitimacy. The vendor's bet: once the fork exists, being "open source again" costs nothing and regains developers.

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2018 | MongoDB leaves AGPL for SSPL because AGPL did not stop cloud resale | − for AGPL |
| 2021 | Elastic leaves Apache 2.0 for SSPL/ELv2 | − |
| 2024 | Elastic adds AGPL as a third option (Aug 29)[^elastic-agpl] | + |
| 2024 | ScyllaDB ends its AGPL edition; single source-available release (Dec)[^scylla-2024] | − |
| 2025 | Redis 8.0 adds AGPLv3 (May 1); antirez leads the change[^redis-agpl][^techzine-redis] | + |
| 2026 | Valkey and OpenSearch keep growing after both reversals[^redmonk-valkey][^lf-os-2026] | − for reunification |
| 2026 | CockroachDB moves source to private development (Sept)[^crdb-private] | − |

# What succeeded

- **Reputation repair at low cost.** Both vendors kept their source-available options and changed nothing about commercial terms, yet regained the "open source" label. Elastic's business stayed healthy after the change: FY2026 revenue was $1.739B (+17%).[^elastic-fy26] Redis passed $300M ARR in January 2026.[^redis-300m]
- **Distribution.** AGPL code can return to Debian, Fedora and other distributions that refused SSPL.
- **AGPL as the stable point.** No major database that adopted AGPL in this period moved off it again.

# What failed

- **The forks stayed.** OpenSearch downloads were up 140% year on year in 2026,[^lf-os-2026] and Valkey's commit velocity stayed slightly above Redis's.[^redmonk-valkey] The foundation governance that forks offer is the thing a vendor license cannot match.
- **Trust remains damaged.** Trade press coverage asked openly whether Elastic could "regain the community's trust".[^itpro-elastic] Pavlo described the cycle as a pattern: "company announces license change, competitors create an open-source fork, and the company reverts".[^pavlo-2024]
- **AGPL itself did not stop MongoDB-era cloud resale.** That is why MongoDB left AGPL in 2018. The reversals work now only because the clouds already have their own forks and no longer need the original.

# Why

1. **The competitive goal was already met or lost.** Once AWS ran OpenSearch and Valkey, the restrictive license no longer stopped anyone. It only kept out developers and distros. Keeping it was pure cost.
2. **Founder legitimacy matters.** Redis's reversal was led by antirez, which gave it credibility that a corporate announcement lacked.[^techzine-redis] Banon framed Elastic's as finishing a fight with AWS that had been won through the trademark settlement.[^stack-banon]
3. **Governance, not license text, is what forks sell.** AGPL from a single vendor is still a single vendor's project. Users who moved for neutrality had no reason to move back.

# Lessons

- Relicensing is cheap to announce and very hard to undo; the reverse move recovers reputation but not community.
- AGPL emerged as the equilibrium license for single-vendor infrastructure that wants to be open source and still deter hyperscaler resale.
- Reversals happen when the license no longer protects anything, so watch for them after a fork has matured.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [Forks as backlash](/ideas/business-licensing/forks-as-backlash.md)
- Events: [Elastic adds AGPL](/events/2024-08-elastic-agpl.md), [Redis adds AGPL](/events/2025-05-redis-agpl.md)
- Systems: [Elasticsearch](/systems/elasticsearch.md), [Redis](/systems/redis.md), [Valkey](/systems/valkey.md), [OpenSearch](/systems/opensearch.md)

[^elastic-agpl]: Elastic blog, 2024-08-29.
[^redis-agpl]: Redis blog, 2025-05-01.
[^lwn-redis]: LWN.
[^techzine-redis]: Techzine.
[^itpro-elastic]: ITPro.
[^stack-banon]: The Stack, interview with Shay Banon.
[^redmonk-valkey]: RedMonk, 2026-04-06.
[^lf-os-2026]: Linux Foundation, 2026-09-22.
[^elastic-fy26]: Elastic 8-K, FY2026.
[^redis-300m]: Redis press release, 2026-01-27.
[^pavlo-2024]: Andy Pavlo, Databases in 2024.
[^scylla-2024]: ScyllaDB forum, Dec 2024.
[^crdb-private]: Cockroach Labs blog, 2026-09-15.
