---
type: Event
title: "Elastic adds AGPLv3: Elasticsearch is open source again"
description: "On 29 Aug 2024 Elastic added AGPLv3 as a third license option for Elasticsearch and Kibana, alongside SSPL and ELv2, three and a half years after leaving Apache 2.0. OpenSearch kept growing anyway."
date: 2024-08-29
year: 2024
kind: license-change
signal: positive
ideas: [ideas/business-licensing/return-to-agpl, ideas/business-licensing/forks-as-backlash]
systems: [systems/elasticsearch, systems/opensearch]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: elastic-agpl
    resource: "https://www.elastic.co/blog/elasticsearch-is-open-source-again"
    title: "Elastic: Elasticsearch is open source. Again! (2024-08-29)"
  - id: itpro
    resource: "https://www.itpro.com/software/open-source/elastic-returns-to-open-source-but-can-it-regain-the-communitys-trust-some-industry-players-arent-holding-their-breath"
    title: "ITPro: Elastic returns to open source, but can it regain the community trust?"
  - id: lf-osf
    resource: "https://www.linuxfoundation.org/press/linux-foundation-announces-opensearch-software-foundation-to-foster-open-collaboration-in-search-and-analytics"
    title: "Linux Foundation announces OpenSearch Software Foundation (2024-09-16)"
---

# What happened

Elastic founder Shay Banon announced that Elasticsearch and Kibana would also be available under AGPLv3, an OSI-approved license, in addition to SSPL and the Elastic License 2.0.[^elastic-agpl] He said the 2021 change had achieved its goal: AWS now ran its own fork and no longer used the Elasticsearch name.

# Why it matters

It was the first major reversal of a defensive relicense, and it made AGPL the settling point for single-vendor databases. It did not reunite the community. Three weeks later OpenSearch moved to its own Linux Foundation foundation,[^lf-osf] and trade press doubted Elastic could regain trust.[^itpro]

# Related

- [Return to AGPL](/ideas/business-licensing/return-to-agpl.md) · [Elastic relicense 2021](/events/2021-01-elastic-sspl-relicense.md) · [Redis adds AGPL](/events/2025-05-redis-agpl.md)

[^elastic-agpl]: Elastic: Elasticsearch is open source. Again! (2024-08-29).
[^itpro]: ITPro: Elastic returns to open source, but can it regain the community trust?.
[^lf-osf]: Linux Foundation announces OpenSearch Software Foundation (2024-09-16).
