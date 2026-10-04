---
type: System
title: DiskANN
description: "Microsoft Research's SSD-resident graph ANN index (Vamana graph, NeurIPS 2019), MIT-licensed. It became a product feature in Azure Cosmos DB and a preview index in SQL Server 2025 and inspired pgvectorscale. A significant research-to-product transfer in vector search."
resource: https://github.com/microsoft/DiskANN
tags: [ann, vector-index, ssd, microsoft-research, algorithm]
kind: research
first_release: 2019
org: "Microsoft Research"
license: MIT
outcome: thriving
ideas: [ideas/vector-ai/ann-index-algorithms, ideas/vector-ai/vector-search-as-a-feature, ideas/vector-ai/object-storage-vector-search]
status: stable
generated: { by: codex/gpt-6, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: paper
    resource: https://www.microsoft.com/en-us/research/publication/diskann-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node/
    title: "Subramanya et al.: DiskANN (NeurIPS 2019)"
    author: org:microsoft-research
  - id: cosmos
    resource: https://devblogs.microsoft.com/cosmosdb/diskann-for-azure-cosmos-db-now-in-open-public-preview/
    title: "Azure Cosmos DB: DiskANN in open public preview (Sep 2024)"
    author: org:microsoft
  - id: cosmos-paper
    resource: https://arxiv.org/abs/2505.05885
    title: "Cost-Effective, Low Latency Vector Search with Azure Cosmos DB (2025)"
  - id: sql2025
    resource: https://devblogs.microsoft.com/azure-sql/sql-server-2025-embraces-vectors-setting-the-foundation-for-empowering-your-data-with-ai/
    title: "Microsoft: SQL Server 2025 embraces vectors"
    author: org:microsoft
  - id: pgvs
    resource: https://github.com/timescale/pgvectorscale
    title: "timescale/pgvectorscale: StreamingDiskANN for Postgres"
  - id: gh
    resource: https://github.com/microsoft/DiskANN
    title: "microsoft/DiskANN GitHub repository"
---

# Summary

DiskANN (Subramanya, Devvrit, Kadekodi, Krishnaswamy, Simhadri) showed a billion-vector index could be served from a single workstation with 64 GB RAM and a cheap SSD. On SIFT1B it reached more than 5,000 QPS at under 3 ms mean latency and 95%+ recall@1, where comparable-memory methods plateaued around 50% recall.[^paper] The core is the Vamana graph (bounded degree, long-range edges) plus compressed vectors in RAM and full vectors on SSD. Microsoft productized it: Cosmos DB (preview September 2024, with a 2025 paper on cost-effective vector search)[^cosmos][^cosmos-paper] and SQL Server 2025 (`CREATE VECTOR INDEX`, DiskANN in preview).[^sql2025] Timescale's pgvectorscale implements a "StreamingDiskANN" variant for Postgres.[^pgvs]

# Timeline

| Date | Event |
|---|---|
| 2019-12 | NeurIPS 2019 paper[^paper] |
| 2020 | Open-source repo (MIT)[^gh] |
| 2024 | Cosmos DB DiskANN preview; pgvectorscale StreamingDiskANN[^cosmos][^pgvs] |
| 2025-11 | SQL Server 2025 GA with DiskANN vector indexes (preview)[^sql2025] |

# What worked

- It attacked the real cost driver (RAM per vector) and made SSD the main tier.
- An in-house product path at Microsoft turned research into a feature in two flagship databases.

# What didn't

- Updates and deletes were hard in the original static design. Fresh-DiskANN and streaming variants were needed.
- The standalone repo has modest adoption (about 1.9k stars). Its impact came through products, not direct use.[^gh]

# Related

- [ANN index algorithms](/ideas/vector-ai/ann-index-algorithms.md) · [Paper: DiskANN (2019)](/papers/2019-diskann.md) · [Cosmos DB](/systems/cosmos-db.md)

[^paper]: NeurIPS 2019.
[^cosmos]: Azure Cosmos DB blog.
[^cosmos-paper]: arXiv 2505.05885.
[^sql2025]: Microsoft blog.
[^pgvs]: pgvectorscale repository.
[^gh]: GitHub API.
