---
type: Idea
title: "Vector indexes on SSD and object storage"
description: "Keep vector indexes on S3 (or SSD) with a RAM/NVMe cache, not in replicated RAM. It is winning. turbopuffer, Pinecone Serverless, LanceDB, Chroma Cloud, Zilliz's tiered storage and finally AWS S3 Vectors all moved here, because most vectors are cold and object storage is 50–100x cheaper per GB than RAM."
tags: [vector-search, object-storage, s3, tiered-storage, cost]
area: vector-ai
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "DiskANN (2019) showed SSD-resident ANN. Snowflake-style separation of storage and compute and S3 strong consistency (Dec 2020) made object-storage-first databases practical."
key_systems: [systems/turbopuffer, systems/pinecone, systems/lancedb, systems/chroma, systems/zilliz, systems/s3]
related_ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/ann-index-algorithms, ideas/vector-ai/ai-native-file-formats, ideas/cloud-architecture/object-storage-native-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tp-blog
    resource: https://turbopuffer.com/blog/turbopuffer
    title: "turbopuffer: launch blog post (cost per TB of RAM, SSD and S3)"
    author: org:turbopuffer
  - id: tp-notion
    resource: https://turbopuffer.com/customers/notion
    title: "turbopuffer: Notion customer story"
    author: org:turbopuffer
  - id: pc-sls
    resource: https://www.pinecone.io/newsroom/pinecone-makes-accurate-fast-scalable-generative-ai-accessible-to-organizations-large-and-small-with-launch-of-its-serverless-vector-database/
    title: "Pinecone: Serverless vector database GA (2024-05-21)"
    author: org:pinecone
  - id: tc-pc-sls
    resource: https://techcrunch.com/2024/01/16/pinecones-vector-database-gets-a-new-serverless-architecture
    title: "TechCrunch: Pinecone's vector database gets a new serverless architecture (2024-01-16)"
  - id: s3v-ga
    resource: https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-generally-available-with-increased-scale-and-performance
    title: "AWS News Blog: Amazon S3 Vectors now generally available (2025-12-02)"
    author: org:aws
  - id: chroma-cloud
    resource: https://docs.trychroma.com/cloud/getting-started
    title: "Chroma Cloud documentation"
    author: org:chroma
  - id: zilliz-oct25
    resource: https://zilliz.com/blog/zilliz-cloud-oct-2025-update
    title: "Zilliz: New in Zilliz Cloud, October 2025"
    author: org:zilliz
  - id: diskann
    resource: https://www.microsoft.com/en-us/research/publication/diskann-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node/
    title: "Subramanya et al.: DiskANN (NeurIPS 2019)"
  - id: calcalist-sale
    resource: https://www.calcalistech.com/ctechnews/article/rz31q82b5
    title: "Calcalist: Pinecone weighs sale amid rising competition (2025-08-31)"
---

# Summary

**Verdict: winning.** The architectural turn that reshaped the vector market. turbopuffer, started in 2023, puts the case in one table: RAM plus 3x replicated SSD costs about $3,600/TB/month, while S3 with an SSD cache costs about $70.[^tp-blog] Notion moved to turbopuffer in October 2024, reported an 80% cost reduction and runs 10B+ documents across 10M+ namespaces.[^tp-notion] Notion had been a showcase Pinecone customer, and losing it was cited when Pinecone explored a sale.[^pc-sls][^calcalist-sale] Pinecone rebuilt itself as serverless on object storage (2024).[^tc-pc-sls] Chroma Cloud and Zilliz did the same,[^chroma-cloud][^zilliz-oct25] and AWS made it a storage primitive with S3 Vectors (GA December 2025).[^s3v-ga] The trade-off is cold-query latency, often hundreds of milliseconds, which is fine for most RAG and agent workloads.

# The idea

Most embeddings are queried rarely: think of one namespace per user, per codebase or per document workspace. So treat object storage as the source of truth and keep hot namespaces cached on NVMe and RAM. Use index structures that need few round-trips: partitioned/IVF-style clusters or SSD-friendly graphs, plus quantized vectors in cache.[^diskann] You get cheap writes, near-unlimited namespaces and pay-per-query pricing.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | DiskANN: billion-scale ANN from SSD[^diskann] | + |
| 2023 | turbopuffer begins (Readwise scaling work); LanceDB builds an embedded vector DB on the Lance format over S3[^tp-blog] | + |
| 2024 | Pinecone Serverless preview (Jan) and GA (May): reads, writes and storage separated, data on object storage[^tc-pc-sls][^pc-sls] | + |
| 2024 | Notion migrates to turbopuffer (Oct), 80% cost reduction[^tp-notion] | + |
| 2025 | Chroma Cloud (distributed Chroma on object storage); Zilliz rebuilds storage tiering; S3 Vectors preview (Jul) and GA (Dec): 2B vectors per index, AWS claims up to 90% lower cost than specialized DBs[^chroma-cloud][^zilliz-oct25][^s3v-ga] | + |

# What succeeded

- **Cost curve.** An order-of-magnitude lower storage cost made it viable to embed and search everything, for example every user's workspace in Notion.[^tp-notion]
- **Multi-tenancy.** Millions of namespaces are cheap when an idle namespace is just S3 objects.
- **Adoption speed of S3 Vectors.** In about four months from the July 2025 preview, customers created 250,000+ vector indexes and ingested 40B+ vectors.[^s3v-ga]

# What failed

- **Latency-sensitive, high-QPS search** (recommendations, ads) still wants RAM-resident indexes. Object-storage designs serve it only after warm-up.
- **First-generation RAM-priced SaaS.** Pinecone's pod-based model had to be rebuilt, and pricing pressure followed.[^calcalist-sale]
- S3 Vectors is limited (simple similarity plus metadata filters). AWS itself positions it as complementary to OpenSearch for hot workloads.[^s3v-ga]

# Why

1. **Hardware and pricing.** S3 at about $20/TB/month versus RAM at thousands of dollars is a structural gap that no amount of index cleverness in RAM closes.[^tp-blog]
2. **Workload shape.** RAG and agent memory are many small, mostly idle collections. That is the worst case for provisioned clusters and the best case for object storage.
3. **The same shift happened everywhere at once.** Warehouses, Kafka (diskless) and OLTP (Neon) also moved to object storage. The vector version is one instance of the broader [object-storage-native](/ideas/cloud-architecture/object-storage-native-databases.md) pattern.

# Lessons

- When the cost of a storage tier differs by 50x, the architecture built on the cheaper tier usually wins even if it is slower.
- Once a cloud provider turns a pattern into a storage primitive (S3 Vectors), the pattern is fully commoditized. Specialists must move up the stack.

# Related

- [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md) · [AI-native file formats](/ideas/vector-ai/ai-native-file-formats.md) · [ANN index algorithms](/ideas/vector-ai/ann-index-algorithms.md)
- Systems: [turbopuffer](/systems/turbopuffer.md), [Pinecone](/systems/pinecone.md), [LanceDB](/systems/lancedb.md), [Chroma](/systems/chroma.md), [Zilliz](/systems/zilliz.md), [S3](/systems/s3.md)
- Events: [Pinecone Serverless](/events/2024-01-pinecone-serverless.md), [S3 Vectors GA](/events/2025-12-s3-vectors-ga.md)

[^tp-blog]: turbopuffer blog.
[^tp-notion]: turbopuffer customer story.
[^pc-sls]: Pinecone press release, which names Notion as a serverless preview user.
[^tc-pc-sls]: TechCrunch.
[^s3v-ga]: AWS News Blog.
[^chroma-cloud]: Chroma docs.
[^zilliz-oct25]: Zilliz blog.
[^diskann]: Microsoft Research.
[^calcalist-sale]: Calcalist.
