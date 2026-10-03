---
type: System
title: Zilliz
description: "Company behind Milvus and the managed Zilliz Cloud. It raised $113M by 2022, before the LLM boom, and is one of the steadier vector-database businesses, competing on cost through tiered and object storage."
resource: https://zilliz.com
tags: [vector-database, managed-service, open-core, milvus]
kind: product
first_release: 2019
org: "Zilliz Inc."
license: "proprietary (cloud) / Apache-2.0 (Milvus)"
outcome: growing
ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/object-storage-vector-search]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: z-b
    resource: https://siliconangle.com/2022/08/24/vector-database-startup-zilliz-raises-60m-series-b-funding-extension/
    title: "SiliconANGLE: Zilliz raises $60M Series B extension (2022-08-24)"
  - id: z-oct25
    resource: https://zilliz.com/blog/zilliz-cloud-oct-2025-update
    title: "Zilliz: New in Zilliz Cloud, October 2025"
    author: org:zilliz
  - id: byoc
    resource: https://www.blocksandfiles.com/ai-ml/2026/09/24/byoc-pinecone-vector-database-managed-service-expands-to-aws-azure-gcp/5298778
    title: "Blocks and Files: Pinecone BYOC (notes Zilliz, Weaviate, Qdrant also offer BYOC)"
---

# Summary

Zilliz created Milvus. Its Series B extension in August 2022 was $60M, led by Aramco's Prosperity7 Ventures, bringing total funding to $113M. That was well before ChatGPT made vector databases fashionable.[^z-b] It sells Zilliz Cloud, a managed Milvus with its own proprietary engine improvements, plus BYOC options on all three major clouds.[^byoc] In October 2025 it announced a rebuilt storage layer that cut storage prices from $0.30 to $0.04 per GB-month and compute costs by 25%. That was a direct response to object-storage-native competitors.[^z-oct25]

# Timeline

| Date | Event |
|---|---|
| 2019 | Milvus open-sourced |
| 2022-08 | $60M Series B extension; $113M total[^z-b] |
| 2023 | Zilliz Cloud grows with the RAG boom |
| 2025-10 | Storage rebuilt; storage price cut ~87%[^z-oct25] |

# What worked

- Open-source-first distribution (Milvus) feeding a managed service: the classic open-core-plus-cloud model that worked for MongoDB.
- Capital raised early, at pre-hype valuations, avoiding the 2023 valuation trap.

# What didn't

- It still has to cut prices to follow S3-backed rivals and S3 Vectors. The October 2025 storage price cut shows how much pricing power the category lost.[^z-oct25]
- Revenue and valuation after 2022 are not publicly disclosed (unconfirmed).

# Related

- [Milvus](/systems/milvus.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md)

[^z-b]: SiliconANGLE.
[^z-oct25]: Zilliz blog.
[^byoc]: Blocks and Files.
