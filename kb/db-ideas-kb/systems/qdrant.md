---
type: System
title: Qdrant
description: "Rust-based, Apache-2.0 open-source vector search engine from Berlin. It grew steadily from a $7.5M seed (2023) to a $50M Series B (March 2026) and is one of the clearest specialist survivors, competing on performance, filtering and self-hostability."
resource: https://qdrant.tech
tags: [vector-database, open-source, rust, filtering]
kind: oss
first_release: 2020
org: "Qdrant Solutions GmbH"
license: Apache-2.0
outcome: growing
ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/ann-index-algorithms]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: q-a
    resource: https://qdrant.tech/blog/series-a-funding-round/
    title: "Qdrant: $28M Series A (2024-01-23)"
    author: org:qdrant
  - id: q-b
    resource: https://qdrant.tech/blog/series-b-announcement/
    title: "Qdrant: We raised $50M (Series B, 2026-03-12)"
    author: org:qdrant
  - id: q-b-bw
    resource: https://www.businesswire.com/news/home/20260312313902/en/Qdrant-Raises-%2450-Million-Series-B-to-Define-Composable-Vector-Search-as-Core-Infrastructure-for-Production-AI
    title: "Business Wire: Qdrant raises $50M Series B"
  - id: q-gh
    resource: https://github.com/qdrant/qdrant
    title: "qdrant/qdrant GitHub repository (≈34.9k stars, 2026-10-03)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Qdrant is written in Rust and is known for payload (metadata) filtering integrated into its HNSW graph traversal, quantization options and a simple single-binary deployment. Its 2023 seed was $7.5M.[^pavlo-2023] A $28M Series A led by Spark Capital followed in January 2024, by which point it reported 5M+ downloads in the prior year.[^q-a] In March 2026 it raised a $50M Series B led by AVP with Bosch Ventures, Unusual Ventures, Spark Capital and 42CAP, for $87.8M total. It now pitches "composable vector search" as core production-AI infrastructure.[^q-b][^q-b-bw] With about 35k GitHub stars it is second only to Milvus among dedicated vector DBs.[^q-gh]

# Timeline

| Date | Event |
|---|---|
| 2020-05 | Open-source repository created[^q-gh] |
| 2023 | $7.5M seed[^pavlo-2023] |
| 2024-01 | $28M Series A[^q-a] |
| 2026-03 | $50M Series B[^q-b] |

# What worked

- Capital efficiency and steady, not hype-sized, rounds.
- Filtering-aware ANN and Rust performance attract teams that outgrow pgvector but want to self-host.
- Raising a Series B in 2026, when Pavlo said VCs were "only writing checks for LLM companies", shows real traction.

# What didn't

- Still exposed to bundling by incumbents and hyperscalers (S3 Vectors, OpenSearch). Its growth depends on the high-scale niche staying big enough.

# Related

- [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md) · [Weaviate](/systems/weaviate.md) · [Milvus](/systems/milvus.md)

[^q-a]: Qdrant blog.
[^q-b]: Qdrant blog.
[^q-b-bw]: Business Wire.
[^q-gh]: GitHub API.
[^pavlo-2023]: Pavlo, 2023 review.
