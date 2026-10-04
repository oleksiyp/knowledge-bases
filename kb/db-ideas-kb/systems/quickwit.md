---
type: System
title: Quickwit
description: "A Rust, object-storage-native search engine for logs and traces built on the Tantivy library. Datadog acquired it in January 2025 and announced an Apache 2.0 release."
resource: https://quickwit.io
tags: [search, logs, rust, tantivy, object-storage, observability]
kind: oss
first_release: 2021
org: "Datadog (acquired Jan 2025); formerly Quickwit Inc."
license: Apache-2.0
outcome: acquired
ideas: [ideas/nosql-models/search-engines-as-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dd
    resource: https://www.datadoghq.com/blog/datadog-acquires-quickwit/
    title: "Datadog acquires Quickwit (2025-01)"
    author: org:datadog
  - id: qw
    resource: https://quickwit.io/blog/quickwit-joins-datadog
    title: "Quickwit joins Datadog"
    author: org:quickwit
  - id: hn
    resource: https://news.ycombinator.com/item?id=42648043
    title: "Hacker News: Datadog acquires Quickwit"
---

# Summary

Quickwit was built by the creators of Tantivy, a Rust Lucene alternative. It indexes logs and traces directly onto object storage (S3) with stateless searchers, separating compute from storage. The design targets append-heavy data whose storage footprint would otherwise tie up expensive search nodes. It offered Elasticsearch-compatible and Jaeger/OpenTelemetry APIs. Datadog announced the acquisition in January 2025 and said a new release would be relicensed from AGPL to Apache 2.0[^dd][^qw][^hn]. Datadog uses the technology for customers with data-residency needs who want to keep logs in their own environment[^dd].

# Timeline

| Year | Event |
|---|---|
| 2021 | Quickwit open source (AGPL) |
| 2025 | Acquired by Datadog; Apache 2.0 relicense (Jan)[^dd] |

# What worked

The company story matters because it separates technical deployment from the venture outcome. The founders reported production partnerships with Binance and Mezmo, while Datadog emphasized bringing search into customer environments. Those are vendor-reported signals of useful technology; acquisition terms and standalone profitability were not disclosed in the announcements.[^qw][^dd]

- Object-storage-native search for logs, part of the broader "S3 as the database" trend.
- Rust performance plus Tantivy maturity.

# What didn't

- The founders described stronger revenue and investor interest before choosing acquisition, alongside difficulty scaling a geographically dispersed team. Calling the sale proof of product failure would contradict their account.[^qw]
- Object storage changes the latency and cache-management trade-offs. The architecture is strongest for large analytical log datasets; it is not evidence of a universal replacement for a transactional document database.

# Related

- [Search engines as databases](/ideas/nosql-models/search-engines-as-databases.md)
- [Elasticsearch](/systems/elasticsearch.md), [OpenSearch](/systems/opensearch.md)
