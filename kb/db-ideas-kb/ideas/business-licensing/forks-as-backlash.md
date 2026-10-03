---
type: Idea
title: "Community forks as backlash against relicensing"
description: "When a widely used database left open source, hyperscalers and the community forked the last open version under a foundation (OpenSearch 2021, Valkey 2024). Verdict: won. Both forks became durable, and Valkey matched or passed its parent on contributor activity within two years. The pattern failed only where nobody outside the vendor wrote the code."
tags: [forks, licensing, valkey, opensearch, linux-foundation, governance, hyperscalers]
area: business-licensing
verdict: won
hype_peak: 2024
adoption_2026: common
origins: "MariaDB (2009) and Percona Server forked MySQL after Oracle's Sun purchase; LibreOffice (2010) set the foundation-fork template."
key_systems: [systems/valkey, systems/opensearch, systems/redis, systems/elasticsearch, systems/cockroachdb, systems/scylladb]
related_ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/return-to-agpl]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: infoq-elastic-aws
    resource: https://www.infoq.com/news/2021/01/elastic-aws-open-source/
    title: "InfoQ: Elastic changes licences for Elasticsearch and Kibana; AWS forks both (Jan 2021)"
  - id: lf-osf
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-opensearch-software-foundation-to-foster-open-collaboration-in-search-and-analytics
    title: "Linux Foundation announces OpenSearch Software Foundation (2024-09-16)"
  - id: lf-os-2026
    resource: https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members
    title: "Linux Foundation: OpenSearch Software Foundation expands enterprise ecosystem (2026-09-22)"
  - id: lf-valkey
    resource: https://www.linuxfoundation.org/press/linux-foundation-launches-open-source-valkey-community
    title: "Linux Foundation launches open source Valkey community (2024-03-28)"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
  - id: percona-erosion
    resource: https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/
    title: "Percona: Community erosion post license change"
  - id: stack-pulls
    resource: https://www.thestack.technology/valkeys-now-seeing-1m-container-pulls-a-week-how-hard-is-the-migration-from-redis/
    title: "The Stack: Valkey 70M+ container pulls, ~1M/week (2026-02-24)"
  - id: aws-valkey
    resource: https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-elasticache-valkey
    title: "AWS: Announcing Amazon ElastiCache for Valkey (2024-10-08)"
  - id: elastic-agpl
    resource: https://www.elastic.co/blog/elasticsearch-is-open-source-again
    title: "Elastic: Elasticsearch is open source. Again! (2024-08-29)"
  - id: redis-300m
    resource: https://finance.yahoo.com/news/redis-passes-300m-annualized-recurring-140000537.html
    title: "Redis passes $300M in annualized recurring revenue (2026-01-27)"
  - id: elastic-fy26
    resource: https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000008/a26q4erex991.htm
    title: "Elastic Q4 and FY2026 results (8-K exhibit)"
  - id: elastic-tm
    resource: https://www.theregister.com/2022/02/17/elastic_amazon_trademark/
    title: "The Register: Elastic and Amazon settle trademark case (2022-02-17)"
  - id: kuzu-macrumors
    resource: https://www.macrumors.com/2026/02/11/apple-acquires-new-database-app/
    title: "MacRumors: Apple acquires Kuzu (2026-02-11)"
---

# Summary

**Verdict: won.** The two high-profile database forks of the period, OpenSearch (from Elasticsearch, 2021) and Valkey (from Redis, 2024), both became durable, foundation-governed projects with hyperscaler funding. Neither was folded back when the parent returned to an OSI license (Elastic in 2024, Redis in 2025). By 2026 OpenSearch reported more than 2.4B downloads,[^lf-os-2026] and Valkey had a longer list of substantial committers than Redis.[^redmonk-valkey] The fork response did not happen for CockroachDB, ScyllaDB, ArangoDB or Kùzu. Their code was written almost entirely by one company and no large party needed it badly enough to fund a fork.

# The idea

If a vendor relicenses a project that many people and companies depend on, users take the last open-source commit and continue under a neutral home (Linux Foundation, Apache, CNCF). The fork keeps the original license, the protocol and usually wire compatibility, so switching costs are near zero. The threat of a fork is also supposed to discourage relicensing in the first place.

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2019 | AWS launches Open Distro for Elasticsearch (Apache add-ons); Elastic sues over trademark[^elastic-tm] | mixed |
| 2021 | AWS forks Elasticsearch 7.10 and Kibana as OpenSearch after Elastic's SSPL/ELv2 move[^infoq-elastic-aws] | + |
| 2021 | Amazon Elasticsearch Service renamed Amazon OpenSearch Service (Sept)[^elastic-tm] | + |
| 2022 | Elastic–Amazon trademark settlement; AWS drops "Elasticsearch" from product names[^elastic-tm] | mixed |
| 2024 | Valkey launched under the Linux Foundation 8 days after Redis's relicense, backed by AWS, Google, Oracle, Ericsson, Snap[^lf-valkey] | + |
| 2024 | Elastic adds AGPL (Aug); OpenSearch moves to its own LF foundation anyway (Sept)[^elastic-agpl][^lf-osf] | + |
| 2024 | AWS ElastiCache for Valkey priced 20–33% below its Redis OSS engine (Oct)[^aws-valkey] | + |
| 2025 | Redis adds AGPL; no migration back from Valkey | + |
| 2025 | Kùzu archived after acquisition; community forks (LadybugDB, Bighorn) appear but are small[^kuzu-macrumors] | − |
| 2026 | Valkey ~1M container pulls/week; ~37.5% of Redis's pre-fork contributors gone[^stack-pulls][^percona-erosion] | + |

# What succeeded

- **Speed and funding.** Valkey shipped under a foundation in about a week with hyperscaler maintainers already on the team.[^lf-valkey] OpenSearch had a full AWS engineering team from day one.
- **Price as a weapon.** AWS priced ElastiCache for Valkey 20–33% below its Redis-compatible engine.[^aws-valkey] This moved managed-service customers, who never cared about the license, onto the fork.
- **Survival after the parent reverted.** Elastic's and Redis's moves back to AGPL did not reunify the communities. Foundation governance had become the selling point.
- **Contributor drain.** Percona measured that about 37.5% of Redis's pre-fork outside contributors stopped contributing.[^percona-erosion]

# What failed

- **The parents did not die.** Redis Ltd passed $300M ARR in January 2026[^redis-300m] and Elastic grew 17% to $1.739B in FY2026.[^elastic-fy26] Forks took the community and the cloud-commodity segment, not the vendor's enterprise customers.
- **No fork without a sponsor.** CockroachDB (BSL, then private source), ScyllaDB (AGPL edition ended) and ArangoDB (BSL) saw no meaningful fork. Kùzu's community forks after its archival are small.[^kuzu-macrumors]
- **Feature divergence.** Forks freeze at the last open commit. Vendors then add features (Redis 8 vector sets, Elastic's ES|QL) that the fork must reimplement, so "drop-in" compatibility erodes over time.

# Why

1. **A fork needs a funded party with a motive.** AWS, Google and Oracle had large managed Redis and Elasticsearch businesses that the new licenses directly threatened. That is why they paid for forks. Nobody had a comparable stake in CockroachDB or ScyllaDB.
2. **Contributor base decides viability.** Redis and Elasticsearch had many committers outside the vendor, some employed by the clouds. They walked to the fork with their knowledge.
3. **Foundations are a credible commitment device.** Enterprises read "Linux Foundation project" as "cannot be relicensed". That reassurance is worth more to procurement than features.
4. **The fork inherits the brand-free half of the market.** Managed-service buyers choose by price and integration, so the cloud provider's choice of engine decides their default.

# Lessons

- The credible threat of a hyperscaler-funded fork is the strongest check on relicensing in infrastructure software.
- Reverting the license does not undo a fork; governance changes are sticky.
- Vendors kept their revenue by selling enterprise features and cloud services, which suggests the fight was about community and default status more than money.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [Return to AGPL](/ideas/business-licensing/return-to-agpl.md)
- Systems: [Valkey](/systems/valkey.md), [OpenSearch](/systems/opensearch.md), [Redis](/systems/redis.md), [Elasticsearch](/systems/elasticsearch.md)
- Events: [Valkey fork](/events/2024-03-valkey-fork.md), [OpenSearch fork](/events/2021-04-opensearch-fork.md), [Elastic–Amazon settlement](/events/2022-02-elastic-amazon-trademark-settlement.md)

[^infoq-elastic-aws]: InfoQ, Jan 2021.
[^lf-osf]: Linux Foundation, 2024-09-16.
[^lf-os-2026]: Linux Foundation, 2026-09-22.
[^lf-valkey]: Linux Foundation, 2024-03-28.
[^redmonk-valkey]: RedMonk, 2026-04-06.
[^percona-erosion]: Percona blog.
[^stack-pulls]: The Stack, 2026-02-24.
[^aws-valkey]: AWS What's New, 2024-10-08.
[^elastic-agpl]: Elastic blog, 2024-08-29.
[^redis-300m]: Redis press release, 2026-01-27.
[^elastic-fy26]: Elastic 8-K, FY2026.
[^elastic-tm]: The Register, 2022-02-17.
[^kuzu-macrumors]: MacRumors, 2026-02-11.
