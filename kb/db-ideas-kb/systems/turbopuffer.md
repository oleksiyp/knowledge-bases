---
type: System
title: turbopuffer
description: "Serverless vector and full-text search engine whose only source of truth is object storage, with NVMe/RAM caching. Founded 2023; powers Cursor, Notion, Linear and Anthropic. The leading commercial proof of object-storage-native online databases."
resource: https://turbopuffer.com
tags: [vector-search, full-text-search, object-storage, serverless, ai]
kind: product
first_release: 2023
org: "turbopuffer Inc. (CEO Simon Hørup Eskildsen)"
license: proprietary
outcome: growing
ideas: [ideas/cloud-architecture/object-storage-native-databases, ideas/cloud-architecture/database-per-tenant]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tpuf
    resource: https://turbopuffer.com/blog/turbopuffer
    title: "turbopuffer: fast search on object storage"
    author: org:turbopuffer
  - id: sacra-tpuf
    resource: https://sacra.com/c/turbopuffer/
    title: "Sacra: turbopuffer revenue, funding & growth (third-party estimates)"
  - id: jxnl-tpuf
    resource: https://jxnl.co/writing/2025/09/11/turbopuffer-object-storage-first-vector-database-architecture/
    title: "Jason Liu: TurboPuffer: object storage-first vector database architecture (Sep 2025)"
---

# Summary
Simon Hørup Eskildsen started turbopuffer in 2023 after vector search costs proved prohibitive at Readwise[^tpuf]. Its storage engine treats S3/GCS as the source of truth, with a write-ahead log on object storage and SSD/RAM caches for hot namespaces. The company says this costs about $70/TB-month against about $1,600 for replicated-memory/SSD incumbents[^tpuf]. Cursor migrated in November 2023 and reported a 95% cost reduction[^tpuf]. Later customers include Notion (migrated from Pinecone), Linear, Superhuman and Anthropic[^tpuf][^jxnl-tpuf]. Sacra *estimates* annualized revenue reached about $100M by March 2026, up from about $75M at end of 2025, on very little primary capital[^sacra-tpuf]. These are third-party figures, not company-confirmed.

# Timeline
| Date | Event |
|---|---|
| 2023 | Founded. Cursor migrates (Nov)[^tpuf] |
| 2024-10 | Notion migrates its large vector workload (per third-party write-up)[^jxnl-tpuf] |
| 2025 | Adds full-text search. Customer base grows across AI products[^jxnl-tpuf] |
| 2025-12 | Seed round with Thrive Capital (per Sacra)[^sacra-tpuf] |
| 2026-03 | ~$100M ARR (Sacra estimate)[^sacra-tpuf] |

# What worked
- An architecture that suits multi-tenant AI search: millions of mostly cold namespaces.
- Capital efficiency: high growth with little funding, if the estimates are right.

# What didn't / limits
- Cold queries hit object-store latency: a sub-second-to-second p50 in one independent test vs ~14 ms warm[^jxnl-tpuf].
- AWS's S3 Vectors (GA Dec 2025) targets the same cost argument directly.

# Related
[Object-storage-native databases](/ideas/cloud-architecture/object-storage-native-databases.md) · [S3](/systems/s3.md) · [Pinecone](/systems/pinecone.md) · [LanceDB](/systems/lancedb.md)
