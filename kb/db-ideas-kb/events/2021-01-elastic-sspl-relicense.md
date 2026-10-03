---
type: Event
title: "Elastic moves Elasticsearch and Kibana to SSPL and Elastic License"
description: "On 14 Jan 2021 Elastic announced that from 7.11 Elasticsearch and Kibana would be dual-licensed under SSPL and the Elastic License instead of Apache 2.0, citing AWS. AWS forked both as OpenSearch."
date: 2021-01-14
year: 2021
kind: license-change
signal: negative
ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/forks-as-backlash, ideas/business-licensing/return-to-agpl]
systems: [systems/elasticsearch, systems/opensearch]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: elastic-blog
    resource: "https://www.elastic.co/blog/elastic-license-update"
    title: "Elastic: Elastic License Update (2021-01-14)"
  - id: infoq
    resource: "https://www.infoq.com/news/2021/01/elastic-aws-open-source/"
    title: "InfoQ: Elastic changes licences for Elasticsearch and Kibana; AWS forks both"
---

# What happened

Elastic announced that the Apache 2.0 parts of Elasticsearch and Kibana would be dual-licensed under SSPL and the Elastic License from version 7.11, so they were no longer OSI open source.[^elastic-blog][^infoq] Elastic said cloud providers offered Elasticsearch as a service without contributing back. AWS responded by forking the last Apache versions (7.10) as OpenSearch, released in April 2021.[^infoq]

# Why it matters

This was the most consequential relicense of the period. Unlike MongoDB's in 2018, it produced a fully funded fork that later moved to its own Linux Foundation foundation. Elastic added AGPL back in August 2024, but OpenSearch kept growing.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [OpenSearch fork](/events/2021-04-opensearch-fork.md) · [Elastic adds AGPL](/events/2024-08-elastic-agpl.md)

[^elastic-blog]: Elastic: Elastic License Update (2021-01-14).
[^infoq]: InfoQ: Elastic changes licences for Elasticsearch and Kibana; AWS forks both.
