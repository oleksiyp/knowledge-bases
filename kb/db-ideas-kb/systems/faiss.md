---
type: System
title: Faiss
description: "Meta's MIT-licensed library for vector similarity search and clustering (2017): IVF, PQ, HNSW, GPU indexes. The reference toolkit underneath much of the vector-database industry (about 41k GitHub stars), and a library rather than a database."
resource: https://github.com/facebookresearch/faiss
tags: [ann, library, gpu, quantization, meta]
kind: oss
first_release: 2017
org: "Meta FAIR"
license: MIT
outcome: thriving
ideas: [ideas/vector-ai/ann-index-algorithms, ideas/vector-ai/dedicated-vector-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: paper
    resource: https://arxiv.org/abs/2401.08281
    title: "Douze et al.: The Faiss library (2024, rev. 2025)"
  - id: cuvs
    resource: https://engineering.fb.com/2025/05/08/data-infrastructure/accelerating-gpu-indexes-in-faiss-with-nvidia-cuvs/
    title: "Meta Engineering: Accelerating GPU indexes in Faiss with NVIDIA cuVS (2025-05-08)"
    author: org:meta
  - id: gh
    resource: https://github.com/facebookresearch/faiss
    title: "facebookresearch/faiss GitHub repository (≈41k stars, 2026-10-03)"
  - id: diskann
    resource: https://www.microsoft.com/en-us/research/publication/diskann-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node/
    title: "DiskANN (NeurIPS 2019), which compares against Faiss at billion scale"
---

# Summary

Faiss (Facebook AI Similarity Search) brought product quantization, inverted-file indexes and fast GPU k-NN into one C++/Python library in 2017. For most of 2018–2022 "vector search" in production meant Faiss or hnswlib embedded in a service. Several vector databases started as servers around these libraries. The 2024 paper "The Faiss library", with authors from Meta and Zilliz, documents its design space.[^paper] In 2025 Faiss 1.10 integrated NVIDIA cuVS: IVF builds up to 4.7x faster, and CAGRA graph builds up to 12.3x faster than CPU HNSW.[^cuvs]

# Timeline

| Date | Event |
|---|---|
| 2017 | Released by Facebook AI Research[^gh] |
| 2019 | DiskANN uses Faiss as the main billion-scale baseline[^diskann] |
| 2024-01 | "The Faiss library" paper[^paper] |
| 2025-05 | Faiss 1.10 with cuVS GPU backends[^cuvs] |

# What worked

- It set the vocabulary (IVF, PQ, OPQ, index factory strings) and became a reference implementation that every vector DB benchmarks against.
- The permissive license allowed embedding in commercial products.

# What didn't

- A library has no persistence, replication, filtering semantics or updates as a database would. That gap is exactly what the vector-DB companies filled, and then what incumbents filled again.
- At billion scale with limited RAM, IVF/PQ recall lagged SSD graph methods like DiskANN.[^diskann]

# Related

- [ANN index algorithms](/ideas/vector-ai/ann-index-algorithms.md) · [Milvus](/systems/milvus.md) · [DiskANN](/systems/diskann.md)

[^paper]: arXiv 2401.08281.
[^cuvs]: Meta Engineering blog.
[^gh]: GitHub.
[^diskann]: DiskANN paper.
