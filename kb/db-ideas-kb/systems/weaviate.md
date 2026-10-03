---
type: System
title: Weaviate
description: "Open-source (BSD-3) vector database from Amsterdam that brands itself 'AI-native'. It has built-in vectorizer modules and hybrid BM25+vector search. It raised a $50M Series B in 2023 and is still independent in 2026, a mid-sized survivor of the vector boom."
resource: https://weaviate.io
tags: [vector-database, open-source, hybrid-search, ai-native]
kind: oss
first_release: 2016
org: "Weaviate B.V."
license: BSD-3-Clause
outcome: stable
ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/rag-stack-consolidation-and-graphrag]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: w-b
    resource: https://www.prnewswire.com/news-releases/weaviate-raises-50-million-series-b-funding-to-meet-soaring-demand-for-ai-native-vector-database-technology-301803296.html
    title: "Weaviate raises $50M Series B (2023-04-21)"
    author: org:weaviate
  - id: w-gh
    resource: https://github.com/weaviate/weaviate
    title: "weaviate/weaviate GitHub repository (≈16.9k stars, 2026-10-03)"
  - id: ricoh
    resource: https://www.ricoh.com/release/2026/0616_1
    title: "Ricoh: invests in Weaviate through RICOH Innovation Fund (2026)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: byoc
    resource: https://www.blocksandfiles.com/ai-ml/2026/09/24/byoc-pinecone-vector-database-managed-service-expands-to-aws-azure-gcp/5298778
    title: "Blocks and Files (notes Weaviate BYOC on all three clouds)"
---

# Summary

Weaviate is a Go-based vector database with an object/GraphQL-style data model, pluggable "vectorizer" modules that call embedding models for you, and hybrid keyword-plus-vector search. Its April 2023 $50M Series B, led by Index Ventures with Battery Ventures, was one of the signature rounds of the vector boom.[^w-b][^pavlo-2023] It has about 17k GitHub stars.[^w-gh] It kept raising strategic money, including a 2026 investment from Ricoh's fund.[^ricoh] A reported $50M Series C in October 2025 could only be found in aggregator sources (unconfirmed).

# Timeline

| Date | Event |
|---|---|
| 2016 | Open-source repository created[^w-gh] |
| 2023-04 | $50M Series B[^w-b] |
| 2025–26 | BYOC on AWS, Azure, GCP; Ricoh strategic investment[^byoc][^ricoh] |

# What worked

- Hybrid search and built-in vectorization lowered the bar for RAG prototypes.
- A permissive license and self-hosting kept it in the open-source tier that survived the shake-out.

# What didn't

- "AI-native database" positioning lost meaning once Oracle, MongoDB and Postgres all claimed the same thing.
- Smaller community than Milvus, Qdrant or Chroma by GitHub stars.[^w-gh]

# Related

- [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md) · [Qdrant](/systems/qdrant.md) · [Milvus](/systems/milvus.md)

[^w-b]: Weaviate press release.
[^w-gh]: GitHub API.
[^ricoh]: Ricoh press release.
[^pavlo-2023]: Pavlo, 2023 review.
[^byoc]: Blocks and Files.
