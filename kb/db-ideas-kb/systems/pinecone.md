---
type: System
title: Pinecone
description: "The best-known closed-source, managed-only vector database. It was the poster child of the 2023 vector boom ($100M at $750M). It rebuilt itself on object storage in 2024, lost flagship customer Notion, explored a sale and replaced its founder-CEO in 2025, and is now repositioning around BYOC and agents."
resource: https://www.pinecone.io
tags: [vector-database, managed-service, serverless, closed-source]
kind: cloud-service
first_release: 2021
org: "Pinecone Systems Inc."
license: proprietary
outcome: struggling
ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/rag-stack-consolidation-and-graphrag]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cb-750
    resource: https://news.crunchbase.com/ai-robotics/startup-venture-funding-database-pinecone/
    title: "Crunchbase News: Pinecone hits $750M valuation (Apr 2023)"
  - id: tc-sls
    resource: https://techcrunch.com/2024/01/16/pinecones-vector-database-gets-a-new-serverless-architecture
    title: "TechCrunch: Pinecone's vector database gets a new serverless architecture (2024-01-16)"
  - id: pc-sls
    resource: https://www.pinecone.io/newsroom/pinecone-makes-accurate-fast-scalable-generative-ai-accessible-to-organizations-large-and-small-with-launch-of-its-serverless-vector-database/
    title: "Pinecone: Serverless GA (2024-05-21)"
    author: org:pinecone
  - id: tp-notion
    resource: https://turbopuffer.com/customers/notion
    title: "turbopuffer: Notion customer story (migrated Oct 2024)"
  - id: calcalist-sale
    resource: https://www.calcalistech.com/ctechnews/article/rz31q82b5
    title: "Calcalist: Pinecone weighs sale amid rising competition (2025-08-31)"
  - id: pc-ceo
    resource: https://www.pinecone.io/blog/growing-ai-ambitions/
    title: "Pinecone: Ash Ashutosh as CEO, Edo Liberty Chief Scientist (2025-09-08)"
    author: org:pinecone
  - id: tt-ceo
    resource: https://www.techtarget.com/searchdatamanagement/news/366631366/Vector-database-vendor-Pinecone-eyes-future-under-new-CEO
    title: "TechTarget: Pinecone eyes future under new CEO"
  - id: byoc
    resource: https://www.blocksandfiles.com/ai-ml/2026/09/24/byoc-pinecone-vector-database-managed-service-expands-to-aws-azure-gcp/5298778
    title: "Blocks and Files: Pinecone BYOC on AWS, Azure, GCP (2026-09-24)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Pinecone, founded by Edo Liberty, coined much of the "vector database" vocabulary and was the default managed store in 2023 RAG tutorials. In April 2023 it raised $100M led by Andreessen Horowitz at a $750M valuation.[^cb-750] It never open-sourced its engine. In 2024 it replaced its RAM-heavy "pod" architecture with a serverless design on object storage, claiming up to 50x lower cost.[^tc-sls][^pc-sls] But object-storage-native rivals and bundled vector search in every database undercut it. In 2025 it explored a sale, with Oracle, IBM, MongoDB and Snowflake reported as possible buyers, after losing Notion.[^calcalist-sale] It then named Ash Ashutosh CEO.[^pc-ceo] Ashutosh said a sale is "definitely not on the table right now".[^tt-ceo] No acquisition had been announced as of October 2026.

# Timeline

| Date | Event |
|---|---|
| 2021 | Public launch as a managed vector DB |
| 2023-04 | $100M Series B at $750M[^cb-750] |
| 2024-01 | Serverless architecture preview; GA May 2024 with 20,000+ orgs in preview, Notion named as a user[^tc-sls][^pc-sls] |
| 2024-10 | Notion moves its search to turbopuffer[^tp-notion] |
| 2025-08 | Reported to be exploring a sale[^calcalist-sale] |
| 2025-09-08 | Ash Ashutosh CEO; Liberty becomes Chief Scientist[^pc-ceo] |
| 2026-09 | BYOC on AWS, Azure and GCP; Toyota North America named as a customer[^byoc] |

# What worked

- Developer experience and time-to-first-query in 2023: no ops at all, which fit the RAG gold rush.
- The serverless redesign was technically correct: it separated reads, writes and storage, and moved to object storage.[^pc-sls]
- Enterprise pivot (BYOC, private endpoints) addresses data-residency concerns that pure SaaS could not.[^byoc]

# What didn't

- **Closed source in an open-source category.** Milvus, Qdrant, Weaviate and Chroma won developer mindshare. pgvector won the "good enough" tier.
- **Pricing came from the RAM era.** Object-storage rivals offered an order-of-magnitude lower storage cost, and the largest multi-tenant customers left.[^tp-notion]
- **No moat against bundling.** The rumored acquirers were the incumbents that had already shipped vector search. Pavlo: Pinecone "replaced its CEO in September to prepare for an acquisition", though nothing followed in 2025.[^pavlo-2025]

# Related

- [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md)
- [turbopuffer](/systems/turbopuffer.md) · Events: [Series B](/events/2023-04-pinecone-series-b.md), [Serverless](/events/2024-01-pinecone-serverless.md), [CEO change](/events/2025-09-pinecone-ceo-change.md)

[^cb-750]: Crunchbase News.
[^tc-sls]: TechCrunch.
[^pc-sls]: Pinecone press release.
[^tp-notion]: turbopuffer.
[^calcalist-sale]: Calcalist, citing The Information.
[^pc-ceo]: Pinecone blog.
[^tt-ceo]: TechTarget.
[^byoc]: Blocks and Files.
[^pavlo-2025]: Pavlo, 2025 review.
