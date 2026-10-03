---
type: Idea
title: "Dedicated vector databases"
description: "A new category of standalone databases built around approximate nearest-neighbor search over embeddings. The 2022–23 funding boom was real, but by 2025 vector search had become a feature of almost every database and of object storage itself. The category survives as a mid-sized niche: the open-source engines (Milvus, Qdrant, Weaviate, Chroma) are healthy, and the flagship closed service, Pinecone, looked for a buyer."
tags: [vector-search, embeddings, rag, startups, commoditization]
area: vector-ai
verdict: mixed
hype_peak: 2023
adoption_2026: common
origins: "Faiss (Meta, 2017) and Milvus (Zilliz, open-sourced 2019) built ANN libraries into servers. Pinecone launched in 2021. ChatGPT (Nov 2022) and retrieval-augmented generation turned them into a hot category."
key_systems: [systems/pinecone, systems/milvus, systems/zilliz, systems/weaviate, systems/qdrant, systems/chroma, systems/lancedb, systems/vespa, systems/turbopuffer]
related_ideas: [ideas/vector-ai/vector-search-as-a-feature, ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/ann-index-algorithms, ideas/vector-ai/rag-stack-consolidation-and-graphrag]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: calcalist-sale
    resource: https://www.calcalistech.com/ctechnews/article/rz31q82b5
    title: "Calcalist: AI database startup Pinecone weighs sale amid rising competition (2025-08-31)"
  - id: pinecone-ceo
    resource: https://www.pinecone.io/blog/growing-ai-ambitions/
    title: "Pinecone: Moving Pinecone forward with Ash Ashutosh as CEO (2025-09-08)"
    author: org:pinecone
  - id: zilliz-b
    resource: https://siliconangle.com/2022/08/24/vector-database-startup-zilliz-raises-60m-series-b-funding-extension/
    title: "SiliconANGLE: Zilliz raises $60M Series B extension (2022-08-24)"
  - id: qdrant-b
    resource: https://www.businesswire.com/news/home/20260312313902/en/Qdrant-Raises-%2450-Million-Series-B-to-Define-Composable-Vector-Search-as-Core-Infrastructure-for-Production-AI
    title: "Business Wire: Qdrant raises $50M Series B (2026-03-12)"
  - id: tp-notion
    resource: https://turbopuffer.com/customers/notion
    title: "turbopuffer: Notion customer story"
    author: org:turbopuffer
  - id: s3v-ga
    resource: https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-generally-available-with-increased-scale-and-performance
    title: "AWS News Blog: Amazon S3 Vectors now generally available (2025-12-02)"
    author: org:aws
  - id: pinecone-byoc
    resource: https://www.blocksandfiles.com/ai-ml/2026/09/24/byoc-pinecone-vector-database-managed-service-expands-to-aws-azure-gcp/5298778
    title: "Blocks and Files: Pinecone BYOC expands to AWS, Azure and GCP (2026-09-24)"
  - id: gh-stars
    resource: https://github.com/milvus-io/milvus
    title: "GitHub repositories of Milvus, Qdrant, Chroma, Weaviate (stars read 2026-10-03 via GitHub API)"
---

# Summary

**Verdict: mixed.** Standalone vector databases were the clearest database hype cycle of the decade. Andy Pavlo called 2023 "the year of the vector database".[^pavlo-2023] Within about a year, every major relational, document and search engine had added a vector index. In 2025 AWS put vector indexes into S3 itself.[^s3v-ga] The open-source engines kept growing and still raise money: Qdrant raised a $50M Series B in March 2026.[^qdrant-b] But the category did not become a new tier of the data stack the way warehouses did. Pinecone, the closed-source leader, explored a sale and replaced its founding CEO in 2025.[^calcalist-sale][^pinecone-ceo] Pavlo's summary of 2025: "The buzz around vector databases has muted."[^pavlo-2025]

# The idea

Embeddings turn text, images and code into fixed-length float vectors, so semantic similarity becomes a nearest-neighbor search. Exact k-NN is too slow at scale, so you need approximate (ANN) indexes such as HNSW, IVF-PQ or DiskANN. These indexes are memory-hungry, are awkward to update, and need filtering combined with vector distance. The pitch was that this workload needs a purpose-built database: a vector-first data model, its own index and memory management, and an API that LLM application developers can call directly. The promise was "long-term memory for AI", meaning a new database tier sitting next to the OLTP database and the warehouse.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | Zilliz open-sources Milvus; it joins LF AI in Jan 2020 and graduates in Jun 2021 | + |
| 2021 | Pinecone launches as a managed-only vector DB | + |
| 2022 | Milvus 2.0 GA (cloud-native rewrite, Jan); Zilliz raises a $60M Series B extension, $113M total (Aug)[^zilliz-b] | + |
| 2023 | Funding wave: Pinecone $100M at $750M, Weaviate $50M, Chroma $18M seed, Qdrant $7.5M seed[^pavlo-2023] | + |
| 2023 | pgvector gets HNSW; MongoDB, Oracle, Cassandra, ClickHouse, SingleStore and others add vector search[^pavlo-2023] | − |
| 2024 | Pinecone Serverless moves storage to object storage; Notion, a Pinecone flagship, moves to turbopuffer (Oct)[^tp-notion] | − |
| 2025 | Pinecone explores a sale (Aug) and replaces its CEO (Sep); MyScaleDB shuts down; AWS S3 Vectors GA (Dec)[^calcalist-sale][^pavlo-2025][^s3v-ga] | − |
| 2026 | Qdrant raises $50M Series B (Mar); Pinecone adds BYOC on all three clouds (Sep)[^qdrant-b][^pinecone-byoc] | + |

# What succeeded

- **Open-source engines found real users.** As of 2026-10-03, Milvus had about 46k GitHub stars, Qdrant about 35k, Chroma about 29k and Weaviate about 17k.[^gh-stars] Chroma became the default local store in many RAG tutorials. Milvus and Qdrant run billion-vector deployments that a general-purpose database extension struggles with.
- **They pushed the state of the art.** Serverless and tiered storage (Pinecone Serverless), filtered HNSW, quantization and hybrid sparse/dense search all shipped in the specialists first. The incumbents copied them.
- **High-scale multi-tenant search is a real workload.** It just went to the cheapest architecture rather than the first mover. Notion moved to the object-storage-native [turbopuffer](/systems/turbopuffer.md) and reported an 80% cost cut.[^tp-notion]

# What failed

- **"New tier of the stack."** Most RAG apps hold fewer than a few million vectors. For those, [pgvector](/systems/pgvector.md) or the vector index in the database they already run is good enough. A second database meant a second consistency, security and backup story for no gain.
- **Closed, memory-priced SaaS.** Pinecone's original pod architecture priced vectors like RAM. Serverless fixed the architecture, but pricing pressure came from object-storage designs and later from S3 Vectors, which AWS claims is up to 90% cheaper than specialized vector databases.[^s3v-ga]
- **Valuations.** Pinecone's $750M (2023) round was not followed by a public up-round. The reported suitors (Oracle, IBM, MongoDB, Snowflake) are exactly the incumbents that had already shipped vector search.[^calcalist-sale] MyScaleDB, a ClickHouse-based vector SQL database, shut down in 2025.[^pavlo-2025]

# Why

1. **Vector search is an index, not a data model.** An ANN index is roughly as hard to add to an existing engine as a full-text or spatial index. Incumbents did it in under a year (see [vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md)). Pavlo framed the choice in 2023: either vector DBs grow into general-purpose databases, or they stay secondary systems like Elasticsearch.[^pavlo-2023] Most stayed secondary.
2. **Real queries are hybrid.** Production retrieval mixes vector similarity with metadata filters, permissions, keyword relevance and joins to business data. The system that already owns that data has the advantage.
3. **Storage economics moved to object storage.** Once indexes could live on S3 with an SSD/RAM cache ([object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md)), the RAM-resident design and its pricing stopped working.
4. **Demand moved.** Long-context models and agentic search (grep, tools) took some of the "you need RAG over a vector DB" use cases (see [RAG stack consolidation](/ideas/vector-ai/rag-stack-consolidation-and-graphrag.md)).
5. **Open source beat closed for developer mindshare.** The specialists that are doing well in 2026 (Milvus/Zilliz, Qdrant, Weaviate, Chroma, LanceDB) are all open source. The one closed product is the one that went looking for a buyer.

# Lessons

- If a new workload needs only a new index type, expect incumbents to absorb it within 12–18 months. A standalone company needs a different storage architecture or cost curve to survive.
- Hype-driven funding rounds set valuations that the eventual niche-market revenue cannot support.
- In a fast-moving category, being cheapest at scale (object storage) beats being first.
- Open-source distribution was the specialists' best defense against bundling by incumbents.

# Related

- [Vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md) · [ANN index algorithms](/ideas/vector-ai/ann-index-algorithms.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md)
- Systems: [Pinecone](/systems/pinecone.md), [Milvus](/systems/milvus.md), [Zilliz](/systems/zilliz.md), [Weaviate](/systems/weaviate.md), [Qdrant](/systems/qdrant.md), [Chroma](/systems/chroma.md), [LanceDB](/systems/lancedb.md), [Vespa](/systems/vespa.md)
- Events: [Pinecone Series B](/events/2023-04-pinecone-series-b.md), [Pinecone CEO change](/events/2025-09-pinecone-ceo-change.md), [S3 Vectors GA](/events/2025-12-s3-vectors-ga.md)

[^pavlo-2023]: Pavlo, "Databases in 2023", section on vector databases.
[^pavlo-2025]: Pavlo, "Databases in 2025".
[^calcalist-sale]: Calcalist, citing The Information.
[^pinecone-ceo]: Pinecone blog.
[^zilliz-b]: SiliconANGLE.
[^qdrant-b]: Qdrant press release.
[^tp-notion]: turbopuffer customer page.
[^s3v-ga]: AWS News Blog.
[^pinecone-byoc]: Blocks and Files.
[^gh-stars]: GitHub API, read 2026-10-03.
