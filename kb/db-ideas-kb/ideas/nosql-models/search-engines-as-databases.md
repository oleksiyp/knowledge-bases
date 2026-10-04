---
type: Idea
title: "Search engines as data platforms (Elasticsearch, OpenSearch and successors)"
description: "Lucene-based search engines became core infrastructure for search, logs and security analytics, and Elastic reached $1.74B revenue. Elastic's 2021 license change produced OpenSearch, which kept AWS's market. Elastic added AGPL in 2024, newer Rust engines nibbled at the edges, and relational and vector databases took parts of the search workload."
tags: [search, elasticsearch, opensearch, lucene, observability, licensing, forks]
area: nosql-models
verdict: won
hype_peak: 2021
adoption_2026: mainstream
origins: "Lucene (1999), Solr (2004), Elasticsearch (2010), ELK stack (2012+)"
key_systems: [systems/elasticsearch, systems/opensearch, systems/quickwit, systems/clickhouse, systems/vespa]
related_ideas: [ideas/nosql-models/redis-and-in-memory-key-value, ideas/vector-ai/vector-search-as-a-feature]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: elastic-2021
    resource: https://www.elastic.co/blog/licensing-change
    title: "Elastic: Doubling down on open, Part II (2021-01-14)"
    author: person:shay-banon
  - id: lwn-2021
    resource: https://lwn.net/Articles/843274/
    title: "LWN: Banon — License changes to Elasticsearch and Kibana"
  - id: os-wiki
    resource: https://en.wikipedia.org/wiki/OpenSearch_(software)
    title: "OpenSearch (software) — Wikipedia"
  - id: elastic-agpl
    resource: https://www.businesswire.com/news/home/20240829537786/en/Elastic-Announces-Open-Source-License-for-Elasticsearch-and-Kibana-Source-Code
    title: "Elastic announces open source license for Elasticsearch and Kibana source code (2024-08-29)"
    author: org:elastic
  - id: osf
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-opensearch-software-foundation-to-foster-open-collaboration-in-search-and-analytics
    title: "Linux Foundation announces OpenSearch Software Foundation (2024-09-16)"
    author: org:linux-foundation
  - id: osf-1y
    resource: https://www.linuxfoundation.org/press/opensearch-software-foundation-marks-1-year-anniversary-with-community-growth-agentic-ai-and-hybrid-search-enhancements
    title: "Linux Foundation: OpenSearch Software Foundation marks 1-year anniversary"
    author: org:linux-foundation
  - id: elastic-fy26
    resource: https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-Fourth-Quarter-and-Fiscal-2026-Financial-Results/default.aspx
    title: "Elastic reports Q4 and fiscal 2026 financial results"
    author: org:elastic
  - id: dd-quickwit
    resource: https://www.datadoghq.com/blog/datadog-acquires-quickwit/
    title: "Datadog acquires Quickwit (2025-01)"
    author: org:datadog
  - id: meili-a
    resource: https://techcrunch.com/2022/10/10/meilisearch-lands-15m-investment-to-grow-its-search-as-a-service-business/
    title: "TechCrunch: Meilisearch lands $15M investment (2022-10-10)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

**Verdict: won as infrastructure; licensing did not remove the cloud competitor.** Inverted-index search engines, mainly Elasticsearch and its fork OpenSearch, are entrenched for full-text search, log analytics, SIEM and, increasingly, hybrid lexical-plus-vector retrieval. Elastic grew to $1.739B fiscal-2026 revenue[^elastic-fy26]. OpenSearch passed 1B downloads[^osf-1y]. Elastic's January 2021 switch from Apache 2.0 to SSPL/Elastic License, aimed squarely at AWS[^elastic-2021][^lwn-2021], produced a permanent fork. AWS launched OpenSearch in April 2021[^os-wiki] and moved it to a Linux Foundation sub-foundation in September 2024[^osf]. Three years after the change Elastic added AGPL ("Elasticsearch is open source, again")[^elastic-agpl]. The market split in two and stayed that way. At the edges, Rust engines (Tantivy/Quickwit, Meilisearch) and columnar stores for logs (ClickHouse) chipped away at specific workloads, and Postgres plus vector databases took some application search.

# The idea

The idea is to use a distributed search engine (sharded Lucene indexes with near-real-time refresh) as a general data store: index everything as JSON documents and query it with full-text, aggregations and filters. The ELK stack generalized this from site search to logs, metrics, security events and APM. Some teams went further and used Elasticsearch as a primary database, which requires examining transactional and visibility limits separately from search quality.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Elastic IPO (Oct); X-Pack code opened under Elastic License | + |
| 2019 | AWS launches Open Distro for Elasticsearch | ~ |
| 2021 | Elastic relicenses 7.11+ to SSPL/ELv2 (Jan), citing AWS behavior that was "NOT OK"[^elastic-2021]; AWS forks to OpenSearch (Apr)[^os-wiki] | − |
| 2022 | Meilisearch raises $15M Series A[^meili-a] | + |
| 2024 | Elastic adds AGPLv3 as a third license option (Aug 29)[^elastic-agpl]; OpenSearch Software Foundation launched under the Linux Foundation (Sep 16) with 700M+ downloads[^osf] | mixed |
| 2025 | Datadog acquires Quickwit (Jan); Quickwit relicensed AGPL to Apache 2.0[^dd-quickwit]; OpenSearch passes 1B downloads, +78% YoY[^osf-1y] | + |
| 2026 | Elastic FY26 revenue $1.739B (+17%), Elastic Cloud $837M (+22%)[^elastic-fy26] | + |

# What succeeded

- **Search plus logs as one engine.** The same inverted-index, columnar doc-values design serves app search, observability and security. That breadth is why Elastic and OpenSearch both kept growing after the split.
- **The fork as a durable alternative.** OpenSearch became a first-party managed option on AWS and gained independent foundation governance with SAP, Uber and others as members[^osf]. Unlike many forks, it did not wither.
- **Hybrid search.** Both engines added dense-vector kNN alongside BM25 and positioned themselves as RAG retrieval layers, which kept them relevant during the vector-database boom.
- **Rust-native successors.** Tantivy/Quickwit showed that object-storage search can reduce local-storage requirements, and Datadog bought Quickwit for its own log platform[^dd-quickwit].

# What failed

- **Elasticsearch as a system of record.** Weak transactional guarantees, refresh-interval visibility and the cost of reindexing make it a poor primary database. Keeping an independently recoverable source of truth avoids making the search index the only recoverable record.
- **License change as a weapon against AWS.** It produced a well-funded fork and then a partial reversal. Pavlo describes the Redis and Elastic backlashes as stronger than MongoDB's because both projects were seen as community-built[^pavlo-2024].
- **Cost at log scale.** Indexing every field of every log line is expensive. Columnar stores (ClickHouse-based observability) and object-storage engines (Quickwit, Loki) offer alternatives for cost-sensitive log workloads.

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **AWS had the users and the distribution.** Amazon Elasticsearch Service already had a large installed base. Forking let AWS keep it without paying Elastic, so the license change converted Elastic's former users into a competitor's.
2. **Elastic's real moat was the product suite.** Kibana, security and observability apps, and Elastic Cloud on all three clouds generate the revenue, which is why the company kept growing despite the fork[^elastic-fy26].
3. **Workload unbundling.** Full-text search on application data moved partly into Postgres (pg_search/ParadeDB, tsvector) and vector DBs. Logs moved partly to columnar and object-storage engines. The search engine kept the middle ground where relevance tuning and aggregations both matter.
4. **AGPL as the settlement.** Both vendors added an OSI-approved copyleft option without withdrawing their other source licenses. Elastic's free-source option also did not change its binary distribution license.[^elastic-agpl]

# Lessons

- Forks backed by a hyperscaler with existing customers don't die, so a license change aimed at that hyperscaler splits the market permanently.
- In infrastructure software the product suite and managed service matter more than the license of the core engine.
- Search engines are good secondary indexes and analytics engines and poor primary databases. Architect accordingly.

# Related

- [Elasticsearch](/systems/elasticsearch.md), [OpenSearch](/systems/opensearch.md), [Quickwit](/systems/quickwit.md), [Vespa](/systems/vespa.md), [ClickHouse](/systems/clickhouse.md)
- Events: [Elastic license change](/events/2021-01-elastic-sspl-relicense.md), [OpenSearch fork](/events/2021-04-opensearch-fork.md), [Elastic adds AGPL](/events/2024-08-elastic-agpl.md)
- [Redis saga](/ideas/nosql-models/redis-and-in-memory-key-value.md)
