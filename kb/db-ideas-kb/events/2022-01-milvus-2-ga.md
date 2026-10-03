---
type: Event
title: "Milvus 2.0 reaches general availability"
description: "Zilliz's Milvus 2.0, a cloud-native rewrite with storage/compute separation and object storage, went GA in January 2022, ten months before ChatGPT started the vector-database boom."
date: 2022-01-25
year: 2022
kind: launch
signal: positive
ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/object-storage-vector-search]
systems: [systems/milvus, systems/zilliz]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: m-20
    resource: https://milvus.io/blog/2022-1-25-annoucing-general-availability-of-milvus-2-0.md
    title: "Milvus blog: Announcing general availability of Milvus 2.0"
  - id: m-wiki
    resource: https://en.wikipedia.org/wiki/Milvus_(vector_database)
    title: "Wikipedia: Milvus (vector database)"
---

# What happened

Milvus 2.0 was declared generally available and production-ready in January 2022.[^m-20] It replaced the 1.x single-node design with a distributed architecture: stateless query and data nodes, a log broker as the backbone, and segments persisted to object storage. Milvus had graduated from the LF AI & Data Foundation in June 2021.[^m-wiki]

# Why it matters

The dedicated vector database category existed, with a foundation-hosted open-source flagship, *before* the LLM boom. Its design choice, object storage as the durable tier, foreshadowed where the whole vector market moved in 2024–25.

# Related

- [Milvus](/systems/milvus.md) · [Zilliz](/systems/zilliz.md) · [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md)

[^m-20]: Milvus blog.
[^m-wiki]: Wikipedia.
