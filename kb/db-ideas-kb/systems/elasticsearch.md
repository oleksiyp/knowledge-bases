---
type: System
title: Elasticsearch
description: "The dominant Lucene-based distributed search and analytics engine and the core of the Elastic Stack. Its January 2021 move from Apache 2.0 to SSPL/Elastic License produced the OpenSearch fork. Elastic added AGPL in August 2024 and reached $1.74B revenue in fiscal 2026."
resource: https://www.elastic.co/elasticsearch
tags: [search, lucene, observability, siem, licensing, vector-search]
kind: product
first_release: 2010
org: "Elastic N.V. (NYSE: ESTC, IPO 2018)"
license: "Free source portions: AGPL-3.0 / SSPL-1.0 / ELv2; default distribution: ELv2"
outcome: thriving
ideas: [ideas/nosql-models/search-engines-as-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: lic2021
    resource: https://www.elastic.co/blog/licensing-change
    title: "Elastic: Doubling down on open, Part II (2021-01)"
    author: person:shay-banon
  - id: lwn
    resource: https://lwn.net/Articles/843274/
    title: "LWN: Banon — License changes to Elasticsearch and Kibana"
  - id: agpl
    resource: https://www.businesswire.com/news/home/20240829537786/en/Elastic-Announces-Open-Source-License-for-Elasticsearch-and-Kibana-Source-Code
    title: "Elastic announces open source license for Elasticsearch and Kibana (2024-08-29)"
    author: org:elastic
  - id: fy26
    resource: https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-Fourth-Quarter-and-Fiscal-2026-Financial-Results/default.aspx
    title: "Elastic reports Q4 and fiscal 2026 results"
    author: org:elastic
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Elasticsearch turned Lucene into a distributed JSON document store with near-real-time search and aggregations. Through the ELK stack it became widely used for log analytics, SIEM and application search. In January 2021, citing AWS behavior it called "NOT OK", Elastic relicensed versions 7.11+ from Apache 2.0 to SSPL or the Elastic License[^lic2021][^lwn]. AWS forked the last Apache version as OpenSearch. On August 29, 2024 Elastic added AGPLv3 as a third option, presented as "open source again", with binaries and clients unchanged[^agpl]. Pavlo noted that this reversal came alongside AWS moving OpenSearch to the Linux Foundation[^pavlo-2024]. The business kept growing through all of it. Fiscal 2026 revenue was $1.739B (+17%), and Elastic Cloud contributed $837M (+22%)[^fy26]. Recent releases emphasize vector and hybrid search and "AI search" positioning.

# Timeline

| Year | Event |
|---|---|
| 2018 | Elastic IPO; X-Pack source opened under the Elastic License |
| 2021 | 7.11 relicensed to SSPL/ELv2 (Jan)[^lic2021]; OpenSearch fork (Apr) |
| 2024 | AGPL option added (Aug 29)[^agpl] |
| 2026 | FY26 revenue $1.739B[^fy26] |

# What worked

- One engine for search, observability and security, sold as solutions with Kibana and Elastic Cloud.
- Continuing product development after the fork rather than relying on the license change alone.

# What didn't

- The license change did not stop AWS. It created a permanent, foundation-backed competitor.
- It is still weak as a primary database: no multi-document transactions, eventual visibility, and expensive reindexing.

# Related

- [Search engines as databases](/ideas/nosql-models/search-engines-as-databases.md)
- [OpenSearch](/systems/opensearch.md), [Quickwit](/systems/quickwit.md)
- [Elastic license change](/events/2021-01-elastic-sspl-relicense.md), [Elastic adds AGPL](/events/2024-08-elastic-agpl.md)
