---
type: OSS Project
title: LanceDB (Lance format)
description: "Apache-2.0 multimodal AI database and columnar format (Lance). It raised a $30M Series A (June 2025), shipped Lance SDK 1.0 (Dec 2025) and file format 2.2 (2026), repositioning as a 'multimodal lakehouse'."
resource: https://github.com/lancedb/lancedb
tags: [vector-database, multimodal, lakehouse, apache-2.0, file-format]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: LanceDB Inc.
backing_orgs: []
metrics:
  github_stars: { value: 11585, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lance-gh
    resource: https://github.com/lancedb/lancedb
    title: LanceDB GitHub repository
  - id: lance-blog
    resource: https://lancedb.com/blog/
    title: LanceDB blog index (Series A, SDK 1.0, format 2.2)
    author: org:lancedb
  - id: tc-lance
    resource: https://techcrunch.com/2024/05/15/lancedb-which-counts-midjourney-as-a-customer-is-building-databases-for-multimodal-ai/
    title: "TechCrunch: LanceDB, which counts Midjourney as a customer..."
    author: org:techcrunch
---

# Summary
LanceDB moved from "vector database" to "multimodal lakehouse". It announced a $30M Series A in June 2025[^lance-blog] and stabilised Lance file format 2.1. Lance SDK 1.0 (Rust core with Python and Java bindings) shipped in Dec 2025 under a community-driven release process[^lance-blog]. Format 2.2 (2026) added Blob V2, nested schema evolution and Map types, with "50%+ storage cuts"[^lance-blog]. Hugging Face Hub integration and 10B+-scale distributed indexing widen adoption[^lance-blog]. Midjourney is a long-standing reference customer[^tc-lance].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06 | $30M Series A [^lance-blog] | Business | + |
| W12 | 2025-11 | First "Reverie" summit [^lance-blog] | Business | + |
| W12 | 2025-12 | Lance SDK 1.0.0 [^lance-blog] | OSS | + |
| W6/W9 | 2026 | Lance file format 2.2 [^lance-blog] | OSS | + |

# OSS successes
- The format may become a neutral standard for multimodal AI data, alongside Parquet and Iceberg[^lance-blog].

# OSS failures / risks
- Single-vendor governance of a would-be standard format.

# Business successes
- Funded, with AI-native customers[^lance-blog][^tc-lance].

# Business failures / risks
- Competes with Iceberg/Parquet-based lakehouses that add vector support (e.g. Milvus 3.0).

# By window
## W3
- Ongoing format and indexing work. No notable corporate events found.
## W6
- Format 2.2[^lance-blog].
## W9
- No notable events found.
## W12
- SDK 1.0. Reverie summit[^lance-blog].
## W24
- Series A[^lance-blog].

# Lessons
- Owning a file format, not just a server, is the vector-DB survival strategy for the lakehouse era.

# Related
- [Milvus](/projects/databases/milvus.md), [DuckDB](/projects/databases/duckdb.md), [Chroma](/projects/databases/chroma.md)

[^lance-gh]: GitHub API, lancedb/lancedb, 2026-10-03.
[^lance-blog]: LanceDB blog index, accessed 2026-10-03.
[^tc-lance]: TechCrunch, 2024-05-15.
