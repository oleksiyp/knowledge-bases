---
type: System
title: Milvus
description: "Apache-2.0 open-source distributed vector database created by Zilliz, an LF AI & Data graduated project. It is the most-starred dedicated vector DB (about 46k GitHub stars), with a cloud-native 2.x architecture on object storage. A durable winner within the vector niche."
resource: https://milvus.io
tags: [vector-database, open-source, distributed, lf-ai]
kind: oss
first_release: 2019
org: "Zilliz (creator); LF AI & Data Foundation (host)"
license: Apache-2.0
outcome: thriving
ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/ann-index-algorithms]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: m-gh
    resource: https://github.com/milvus-io/milvus
    title: "milvus-io/milvus GitHub repository (≈46.3k stars, 2026-10-03)"
  - id: m-lf
    resource: https://lfaidata.foundation/projects/milvus/
    title: "LF AI & Data: Milvus project page"
  - id: m-20
    resource: https://milvus.io/blog/2022-1-25-annoucing-general-availability-of-milvus-2-0.md
    title: "Milvus blog: General availability of Milvus 2.0 (2022-01-25)"
  - id: m-wiki
    resource: https://en.wikipedia.org/wiki/Milvus_(vector_database)
    title: "Wikipedia: Milvus (vector database)"
  - id: z-oct25
    resource: https://zilliz.com/blog/zilliz-cloud-oct-2025-update
    title: "Zilliz: New in Zilliz Cloud, October 2025 (Milvus 2.6 on cloud)"
    author: org:zilliz
  - id: faiss-paper
    resource: https://arxiv.org/abs/2401.08281
    title: "Douze et al.: The Faiss library (co-authored with Zilliz engineers)"
---

# Summary

Milvus was open-sourced by Zilliz in 2019. It entered the LF AI Foundation as an incubation project in January 2020 and graduated in June 2021.[^m-wiki][^m-lf] Version 2.0 (GA January 2022) was a full rewrite into a cloud-native design: stateless query/data nodes, a log broker and object storage for segments.[^m-20] It supports many index types (HNSW, IVF variants, DiskANN, GPU indexes) and targets billion-scale collections. With about 46k GitHub stars it is the most popular dedicated vector DB by that measure.[^m-gh] Zilliz monetizes it through Zilliz Cloud.

# Timeline

| Date | Event |
|---|---|
| 2019 | Open-sourced by Zilliz |
| 2020-01 / 2021-06 | Joins LF AI incubation / graduates[^m-wiki] |
| 2022-01 | Milvus 2.0 GA, cloud-native rewrite[^m-20] |
| 2023 | Vector-DB boom; Milvus becomes a common enterprise RAG store |
| 2025 | Milvus 2.6 (tiered storage, cost work) arrives on Zilliz Cloud[^z-oct25] |

# What worked

- Foundation hosting and a permissive license made it a safe enterprise choice, unlike single-vendor or source-available projects.
- Early distributed architecture on object storage aged well as the market moved to cheaper storage tiers.
- Deep ANN expertise: Zilliz engineers co-authored the 2024 Faiss library paper.[^faiss-paper]

# What didn't

- Operational complexity. A distributed Milvus cluster has many moving parts (etcd, a message queue, object storage, several node roles), which is overkill for the small RAG apps that dominate demand. Those went to pgvector or Chroma.
- Like all specialists, it competes with "free" vector search in incumbents.

# Related

- [Zilliz](/systems/zilliz.md) · [Faiss](/systems/faiss.md) · [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md)
- Event: [Milvus 2.0 GA](/events/2022-01-milvus-2-ga.md)

[^m-gh]: GitHub API.
[^m-lf]: LF AI & Data.
[^m-20]: Milvus blog.
[^m-wiki]: Wikipedia.
[^z-oct25]: Zilliz blog.
[^faiss-paper]: arXiv 2401.08281.
