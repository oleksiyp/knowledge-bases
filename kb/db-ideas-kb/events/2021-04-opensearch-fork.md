---
type: Event
title: "AWS releases OpenSearch, a fork of Elasticsearch"
description: "In April 2021 AWS released OpenSearch and OpenSearch Dashboards, forks of Apache-licensed Elasticsearch 7.10 and Kibana, after Elastic left Apache 2.0. It moved to the Linux Foundation in Sept 2024."
date: 2021-04-12
year: 2021
kind: fork
signal: positive
ideas: [ideas/business-licensing/forks-as-backlash, ideas/business-licensing/hyperscalers-capture-dbms-market]
systems: [systems/opensearch, systems/elasticsearch]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: infoq
    resource: "https://www.infoq.com/news/2021/01/elastic-aws-open-source/"
    title: "InfoQ: Elastic changes licences; AWS forks both (Jan 2021)"
  - id: elastic-tm
    resource: "https://www.theregister.com/2022/02/17/elastic_amazon_trademark/"
    title: "The Register: Elastic and Amazon settle trademark case (2022-02-17)"
  - id: lf-osf
    resource: "https://www.linuxfoundation.org/press/linux-foundation-announces-opensearch-software-foundation-to-foster-open-collaboration-in-search-and-analytics"
    title: "Linux Foundation announces OpenSearch Software Foundation (2024-09-16)"
  - id: lf-os-2026
    resource: "https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members"
    title: "Linux Foundation: OpenSearch Software Foundation expands ecosystem (2026-09-22)"
---

# What happened

After Elastic's January 2021 relicense, AWS forked Elasticsearch 7.10 and Kibana and released them in April 2021 as OpenSearch and OpenSearch Dashboards under Apache 2.0.[^infoq] In September 2021 AWS renamed Amazon Elasticsearch Service to Amazon OpenSearch Service.[^elastic-tm] In September 2024 the project moved to the Linux Foundation's new OpenSearch Software Foundation, with AWS, SAP and Uber as premier members.[^lf-osf]

# Why it matters

It is the reference case of a hyperscaler-funded fork succeeding. By September 2026 the foundation reported more than 2.4B downloads, up 140% year on year.[^lf-os-2026] Elastic's return to AGPL did not slow it.

# Related

- [Forks as backlash](/ideas/business-licensing/forks-as-backlash.md) · [Elastic relicense](/events/2021-01-elastic-sspl-relicense.md) · [OpenSearch](/systems/opensearch.md)

[^infoq]: InfoQ: Elastic changes licences; AWS forks both (Jan 2021).
[^elastic-tm]: The Register: Elastic and Amazon settle trademark case (2022-02-17).
[^lf-osf]: Linux Foundation announces OpenSearch Software Foundation (2024-09-16).
[^lf-os-2026]: Linux Foundation: OpenSearch Software Foundation expands ecosystem (2026-09-22).
