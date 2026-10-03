---
type: Idea
title: "ANN index algorithms that mattered: HNSW, IVF-PQ, DiskANN, quantization"
description: "A few approximate nearest-neighbor algorithms became database infrastructure. In-memory HNSW won as the default, SSD-resident graph indexes (DiskANN) won for scale, and aggressive quantization (PQ, binary, RaBitQ) won for cost. Research kept producing algorithms, but production converged on a small toolkit."
tags: [ann, hnsw, diskann, quantization, faiss, algorithms]
area: vector-ai
verdict: won
hype_peak: 2024
adoption_2026: mainstream
origins: "Product quantization (Jégou et al., 2011); Faiss (2017); HNSW (Malkov & Yashunin, arXiv 2016, IEEE TPAMI). The period 2018–2026 is about taking these into databases."
key_systems: [systems/faiss, systems/diskann, systems/pgvector, systems/milvus, systems/lancedb, systems/elasticsearch]
related_ideas: [ideas/vector-ai/vector-search-as-a-feature, ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/dedicated-vector-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: hnsw
    resource: https://arxiv.org/abs/1603.09320
    title: "Malkov & Yashunin: Efficient and robust approximate nearest neighbor search using HNSW graphs"
  - id: diskann
    resource: https://www.microsoft.com/en-us/research/publication/diskann-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node/
    title: "Subramanya et al.: DiskANN (NeurIPS 2019)"
    author: org:microsoft-research
  - id: bigann21
    resource: https://arxiv.org/abs/2205.03763
    title: "Results of the NeurIPS'21 Challenge on Billion-Scale ANN Search"
  - id: faiss-paper
    resource: https://arxiv.org/abs/2401.08281
    title: "Douze et al.: The Faiss library (2024)"
  - id: faiss-cuvs
    resource: https://engineering.fb.com/2025/05/08/data-infrastructure/accelerating-gpu-indexes-in-faiss-with-nvidia-cuvs/
    title: "Meta Engineering: Accelerating GPU indexes in Faiss with NVIDIA cuVS (2025-05-08)"
    author: org:meta
  - id: rabitq
    resource: https://github.com/gaoj0017/RaBitQ
    title: "Gao & Long: RaBitQ (SIGMOD 2024) repository"
  - id: elastic-bbq
    resource: https://www.elastic.co/search-labs/blog/better-binary-quantization-lucene-elasticsearch
    title: "Elastic: Better Binary Quantization (BBQ) in Lucene and Elasticsearch"
    author: org:elastic
  - id: lance-rabitq
    resource: https://www.lancedb.com/blog/feature-rabitq-quantization
    title: "LanceDB: RaBitQ quantization"
    author: org:lancedb
  - id: pgv-050
    resource: https://www.postgresql.org/about/news/pgvector-050-released-2700
    title: "PostgreSQL.org: pgvector 0.5.0 released (HNSW)"
  - id: sqlserver-2025
    resource: https://devblogs.microsoft.com/azure-sql/sql-server-2025-embraces-vectors-setting-the-foundation-for-empowering-your-data-with-ai/
    title: "Microsoft: SQL Server 2025 embraces vectors"
    author: org:microsoft
  - id: cosmos-paper
    resource: https://arxiv.org/abs/2505.05885
    title: "Cost-Effective, Low Latency Vector Search with Azure Cosmos DB (2025)"
---

# Summary

**Verdict: won.** These are the algorithmic successes behind the vector boom. **HNSW** became the default in-memory index almost everywhere: pgvector, Lucene/Elasticsearch/OpenSearch, Qdrant, Weaviate, Milvus, Chroma.[^hnsw][^pgv-050] **DiskANN** (Microsoft Research, NeurIPS 2019) showed a billion-point index could be served from one machine's SSD with 64 GB RAM.[^diskann] It now ships inside Cosmos DB and SQL Server 2025.[^cosmos-paper][^sqlserver-2025] **Quantization** made vectors cheap: product quantization (IVF-PQ in Faiss), then binary and RaBitQ-style schemes, which Elastic adopted as BBQ and LanceDB as RaBitQ.[^rabitq][^elastic-bbq][^lance-rabitq] The open problems by 2026 are no longer raw recall/QPS. They are filtering, updates, multi-tenancy and cost on object storage.

# The idea

Exact k-NN in hundreds of dimensions does not scale, so trade a little recall for orders of magnitude in speed:
- **Graph indexes** (HNSW, Vamana/DiskANN): greedy walks over a proximity graph. High recall, but memory-hungry and hard to update.
- **Partition indexes** (IVF, SPANN): cluster the data and probe a few clusters. Disk- and object-storage-friendly.
- **Compression** (PQ, scalar, binary, RaBitQ): store 4–32x smaller codes, then re-rank with full vectors.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | HNSW published in IEEE TPAMI; hnswlib and Faiss widely used in recommender systems | + |
| 2019 | DiskANN: >5,000 QPS at 95%+ recall@1 on SIFT1B with 64 GB RAM plus an SSD[^diskann] | + |
| 2021 | NeurIPS'21 billion-scale ANN challenge (big-ann-benchmarks) sets common evaluation[^bigann21] | + |
| 2023 | pgvector 0.5.0 adds HNSW; HNSW becomes the industry default[^pgv-050] | + |
| 2024 | RaBitQ (SIGMOD 2024) gives binary quantization with error bounds; Elastic ships BBQ; "The Faiss library" paper[^rabitq][^elastic-bbq][^faiss-paper] | + |
| 2024 | Cosmos DB adopts DiskANN; Timescale ships StreamingDiskANN for Postgres | + |
| 2025 | Faiss 1.10 integrates NVIDIA cuVS: CAGRA GPU graph builds up to 12.3x faster than CPU HNSW[^faiss-cuvs] | + |
| 2025 | SQL Server 2025 ships DiskANN indexes (preview)[^sqlserver-2025] | + |

# What succeeded

- **HNSW as a commodity.** It is simple and incremental, and it gives high recall. Its main costs are memory and build time.
- **SSD-resident graphs.** DiskANN changed the cost model from "all vectors in RAM" to "compressed vectors in RAM, full vectors on SSD". It became a product feature at Microsoft.[^cosmos-paper]
- **Quantization plus re-ranking.** It became standard practice and cut memory 4–32x. RaBitQ's theoretical error bound made binary quantization usable without much recall loss.[^rabitq]
- **Faiss as the reference toolkit.** It underlies or inspired much of the field (the Faiss paper has authors from Meta and Zilliz) and absorbed GPU work from NVIDIA.[^faiss-paper][^faiss-cuvs]

# What failed

- **Benchmark-chasing.** ann-benchmarks-style recall/QPS leaderboards on SIFT/GloVe did not predict production pain: filtered queries, deletes, high write rates and thousands of small tenants.
- **Filtered ANN** stayed messy. Pre-filtering breaks graph connectivity and post-filtering loses results. Each engine built its own fix (filter-aware HNSW, iterative scans, partitioning by tenant).
- **GPU vector search** works for index *builds* and batch jobs. For online serving, CPU plus SSD stayed cheaper for most deployments.
- **Learned/novel ANN structures** from academia mostly stayed in papers. Production converged on HNSW, IVF, DiskANN and quantization.

# Why

1. **Memory cost dominates.** Every winning technique (DiskANN, PQ, BBQ/RaBitQ) reduces bytes in RAM per vector. Recall and QPS were already "good enough".
2. **Incrementality matters.** HNSW supports inserts without retraining, while IVF needs re-clustering. That is why HNSW won in OLTP-style engines and IVF/SPANN-style partitions came back on object storage.
3. **Open reference implementations** (hnswlib, Faiss, DiskANN under MIT) let every database adopt the same algorithms quickly. The algorithms became a commodity, so differentiation moved to systems engineering.

# Lessons

- Algorithms that reduce memory footprint get adopted. Algorithms that only improve benchmark recall usually do not.
- Open, permissively licensed reference code turns a research algorithm into an industry default within 2–3 years.
- Shared benchmarks need production-like dimensions (filters, updates, tenancy), or they optimize the wrong thing.

# Related

- [Vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md)
- Systems: [Faiss](/systems/faiss.md), [DiskANN](/systems/diskann.md), [pgvector](/systems/pgvector.md), [Milvus](/systems/milvus.md)
- Paper: [DiskANN (2019)](/papers/2019-diskann.md)

[^hnsw]: arXiv 1603.09320; IEEE TPAMI version.
[^diskann]: NeurIPS 2019 paper abstract.
[^bigann21]: arXiv 2205.03763.
[^faiss-paper]: arXiv 2401.08281.
[^faiss-cuvs]: Meta Engineering blog.
[^rabitq]: RaBitQ repository (SIGMOD 2024).
[^elastic-bbq]: Elastic blog.
[^lance-rabitq]: LanceDB blog.
[^pgv-050]: PostgreSQL.org.
[^sqlserver-2025]: Microsoft blog.
[^cosmos-paper]: arXiv 2505.05885.
