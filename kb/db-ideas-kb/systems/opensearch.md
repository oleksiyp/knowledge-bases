---
type: System
title: OpenSearch
description: "AWS's Apache-2.0 fork of Elasticsearch 7.10 and Kibana (April 2021), moved to the Linux Foundation's OpenSearch Software Foundation in September 2024. It passed 1B downloads, making it one of the most durable database forks."
resource: https://opensearch.org
tags: [search, fork, linux-foundation, apache-2, observability, vector-search]
kind: oss
first_release: 2021
org: "OpenSearch Software Foundation (Linux Foundation); founded by AWS"
license: Apache-2.0
outcome: thriving
ideas: [ideas/nosql-models/search-engines-as-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: wiki
    resource: https://en.wikipedia.org/wiki/OpenSearch_(software)
    title: "OpenSearch (software) — Wikipedia"
  - id: osf
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-opensearch-software-foundation-to-foster-open-collaboration-in-search-and-analytics
    title: "Linux Foundation announces OpenSearch Software Foundation (2024-09-16)"
    author: org:linux-foundation
  - id: osf1y
    resource: https://www.linuxfoundation.org/press/opensearch-software-foundation-marks-1-year-anniversary-with-community-growth-agentic-ai-and-hybrid-search-enhancements
    title: "OpenSearch Software Foundation marks 1-year anniversary"
    author: org:linux-foundation
---

# Summary

When Elastic relicensed in January 2021, AWS forked Elasticsearch 7.10.2 and Kibana and released them as OpenSearch and OpenSearch Dashboards in April 2021[^wiki]. Amazon Elasticsearch Service was renamed Amazon OpenSearch Service. Critics expected an AWS-only fork, but the project built a broader community. At the September 16, 2024 launch of the OpenSearch Software Foundation under the Linux Foundation it reported 700M+ downloads, thousands of contributors and 200+ maintainers, with AWS, SAP and Uber as premier members[^osf]. One year later downloads had grown 78% year over year to more than 1B[^osf1y]. Development has focused on vector and hybrid search, observability and "agentic AI" features[^osf1y].

# Timeline

| Year | Event |
|---|---|
| 2021 | Fork released (Apr)[^wiki] |
| 2024 | OpenSearch Software Foundation (Sep 16)[^osf] |
| 2025 | 1B+ downloads[^osf1y] |

# What worked

- The default engine of a hyperscaler's managed service means instant scale and a captive installed base.
- Neutral governance came three years in, which brought in other vendors (Aiven, Instaclustr, SAP, Uber).

# What didn't

- A fork preserves a starting implementation, not indefinite compatibility with the original's later features. Migration plans must check the actual versions, plugins and APIs used.
- Foundation governance arrived in 2024 rather than at the initial fork. The announcement documents a broader membership; it does not isolate the earlier governance structure's effect on contribution rates.[^osf]

# Related

- [Search engines as databases](/ideas/nosql-models/search-engines-as-databases.md)
- [Elasticsearch](/systems/elasticsearch.md), [Valkey](/systems/valkey.md) (a similar fork)
- [OpenSearch fork](/events/2021-04-opensearch-fork.md)
