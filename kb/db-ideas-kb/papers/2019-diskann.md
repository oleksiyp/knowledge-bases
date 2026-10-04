---
type: Paper
title: "DiskANN: Fast Accurate Billion-point Nearest Neighbor Search on a Single Node"
description: "Showed that a graph ANN index (Vamana) with compressed vectors in RAM and full vectors on SSD can serve a billion vectors from one 64 GB machine at high recall. It became a product feature in Azure Cosmos DB and a preview index in SQL Server and shaped SSD- and object-storage-based vector search."
year: 2019
venue: NeurIPS 2019
authors: [Suhas Jayaram Subramanya, Devvrit, Rohan Kadekodi, Ravishankar Krishnaswamy, Harsha Vardhan Simhadri]
resource: https://www.microsoft.com/en-us/research/publication/diskann-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node/
impact: high
ideas: [ideas/vector-ai/ann-index-algorithms, ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/vector-search-as-a-feature]
status: stable
generated: { by: codex/gpt-6, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: paper
    resource: https://www.microsoft.com/en-us/research/publication/diskann-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node/
    title: "Microsoft Research publication page"
    author: org:microsoft-research
  - id: cosmos-paper
    resource: https://arxiv.org/abs/2505.05885
    title: "Cost-Effective, Low Latency Vector Search with Azure Cosmos DB (2025)"
  - id: sql2025
    resource: https://devblogs.microsoft.com/azure-sql/sql-server-2025-embraces-vectors-setting-the-foundation-for-empowering-your-data-with-ai/
    title: "Microsoft: SQL Server 2025 embraces vectors"
    author: org:microsoft
  - id: pgvs
    resource: https://github.com/timescale/pgvectorscale
    title: "timescale/pgvectorscale (StreamingDiskANN)"
  - id: bigann
    resource: https://arxiv.org/abs/2205.03763
    title: "Results of the NeurIPS'21 Challenge on Billion-Scale ANN Search"
---

# Claim

Billion-scale ANN search does not need a cluster or terabytes of RAM. With the Vamana graph (bounded out-degree with long-range edges, so search takes few hops), product-quantized vectors in memory for navigation and full-precision vectors on SSD for re-ranking, one workstation with 64 GB RAM and an inexpensive SSD serves SIFT1B at >5,000 QPS, <3 ms mean latency and 95%+ 1-recall@1. Memory-comparable methods such as Faiss IVFOADC+G+P plateaued around 50% recall.[^paper]

# What happened next

- It became a baseline track in the NeurIPS'21 billion-scale ANN challenge.[^bigann]
- Microsoft shipped it as a product feature: Azure Cosmos DB vector indexing (with a 2025 paper on cost-effective low-latency search) and the preview `CREATE VECTOR INDEX` feature in SQL Server 2025.[^cosmos-paper][^sql2025]
- Timescale's pgvectorscale brought a StreamingDiskANN variant to Postgres in 2024.[^pgvs]
- Its central idea, that RAM per vector is the cost driver and SSD should be the main tier, is the basis of the 2024–25 move to tiered and object-storage vector databases.
- Follow-ups (Fresh-DiskANN, filtered variants) addressed its weak points: updates and filtering.

# Related

- [DiskANN (system)](/systems/diskann.md) · [ANN index algorithms](/ideas/vector-ai/ann-index-algorithms.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md)

[^paper]: NeurIPS 2019 paper abstract.
[^bigann]: arXiv 2205.03763.
[^cosmos-paper]: arXiv 2505.05885.
[^sql2025]: Microsoft blog.
[^pgvs]: pgvectorscale repo.
