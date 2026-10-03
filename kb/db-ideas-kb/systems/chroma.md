---
type: System
title: Chroma
description: "Apache-2.0 'AI-native embedding database' that became the default local vector store in Python RAG tutorials (about 29k GitHub stars). It raised an $18M seed in 2023, rewrote its core in Rust (2025) and launched Chroma Cloud on object storage."
resource: https://www.trychroma.com
tags: [vector-database, open-source, embedded, python, rust]
kind: oss
first_release: 2022
org: "Chroma (Chroma Inc.)"
license: Apache-2.0
outcome: growing
ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/rag-stack-consolidation-and-graphrag]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: c-seed
    resource: https://www.trychroma.com/company/seed
    title: "Chroma raises $18M seed round (Apr 2023)"
    author: org:chroma
  - id: c-10
    resource: https://www.trychroma.com/project/1.0.0
    title: "Chroma: Chroma is now 4x faster (Rust core, v1.0)"
    author: org:chroma
  - id: c-cloud
    resource: https://docs.trychroma.com/cloud/getting-started
    title: "Chroma Cloud documentation"
    author: org:chroma
  - id: c-gh
    resource: https://github.com/chroma-core/chroma
    title: "chroma-core/chroma GitHub repository (≈29.4k stars, 2026-10-03)"
---

# Summary

Chroma was founded by Jeff Huber and Anton Troynikov. It started as a pip-installable, in-process vector store, the "SQLite of embeddings", and LangChain and LlamaIndex tutorials made it the default for prototypes. It raised an $18M seed led by Quiet Capital in April 2023.[^c-seed] The original Python implementation hit GIL and scale limits. In 2025 Chroma shipped a shared Rust core (v1.0, about 4x faster local writes and queries)[^c-10] and Chroma Cloud, a distributed, serverless service on object storage with the same API as the open-source version.[^c-cloud]

# Timeline

| Date | Event |
|---|---|
| 2022-10 | Open-source repository created[^c-gh] |
| 2023-04 | $18M seed[^c-seed] |
| 2025 | Rust core (v1.0); Chroma Cloud GA[^c-10][^c-cloud] |

# What worked

- Zero-setup developer experience and placement in tutorials: classic bottom-up adoption.
- Following the market to object storage with a single API from laptop to cloud.

# What didn't

- Many prototype users graduate to pgvector or a managed service rather than to Chroma Cloud. Conversion from tutorial to paying customer is the open question (revenue not disclosed).

# Related

- [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md)

[^c-seed]: Chroma announcement.
[^c-10]: Chroma project page.
[^c-cloud]: Chroma docs.
[^c-gh]: GitHub API.
