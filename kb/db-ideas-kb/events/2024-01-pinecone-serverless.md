---
type: Event
title: "Pinecone rebuilds as serverless on object storage"
description: "Pinecone announced a serverless architecture on 2024-01-16 (GA 2024-05-21) that separates reads, writes and storage and serves vectors from object storage, claiming up to 50x lower cost. The launch made storage cost a central part of competition among vector services."
date: 2024-01-16
year: 2024
kind: launch
signal: mixed
ideas: [ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/dedicated-vector-databases]
systems: [systems/pinecone]
status: stable
generated: { by: codex/gpt-6, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tc
    resource: https://techcrunch.com/2024/01/16/pinecones-vector-database-gets-a-new-serverless-architecture
    title: "TechCrunch: Pinecone's vector database gets a new serverless architecture (2024-01-16)"
  - id: ga
    resource: https://www.pinecone.io/newsroom/pinecone-makes-accurate-fast-scalable-generative-ai-accessible-to-organizations-large-and-small-with-launch-of-its-serverless-vector-database/
    title: "Pinecone: Serverless GA (2024-05-21)"
    author: org:pinecone
  - id: tp-notion
    resource: https://turbopuffer.com/customers/notion
    title: "turbopuffer: Notion customer story"
---

# What happened

Pinecone introduced Pinecone Serverless in public preview in January 2024 and made it GA on 2024-05-21. It separates reads, writes and storage and does "fast and memory-efficient vector search from object storage". Pinecone claimed cost reductions up to 50x, said 20,000+ organizations tried the preview, and quoted Notion on a 60% cost reduction.[^tc][^ga]

# Why it matters

The category leader moved to the object-storage architecture that turbopuffer and LanceDB were also pursuing. The cost race had started. Five months after GA, Notion moved its workload to turbopuffer, reporting 80% savings.[^tp-notion] The customer move shows that a serverless redesign did not eliminate competition on price; it does not establish Pinecone's overall pricing power.

# Related

- [Pinecone](/systems/pinecone.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md) · [turbopuffer](/systems/turbopuffer.md)

[^tc]: TechCrunch.
[^ga]: Pinecone press release.
[^tp-notion]: turbopuffer.
