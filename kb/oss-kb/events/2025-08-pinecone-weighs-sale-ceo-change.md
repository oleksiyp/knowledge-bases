---
type: Event
title: Pinecone weighs a sale and replaces its founder-CEO
description: "In late Aug 2025 The Information reported that Pinecone, the best-funded closed-source vector database, was considering a sale. On Sept 8 2025 it named Ash Ashutosh CEO, with founder Edo Liberty moving to Chief Scientist."
event_kind: other
date: 2025-08-28
window: W24
impact: negative
projects: [projects/databases/milvus, projects/databases/qdrant]
organizations: [organizations/pinecone]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: info-pinecone
    resource: https://www.theinformation.com/articles/top-funded-ai-database-startup-pinecone-considers-sale
    title: "The Information: Top-funded AI database startup Pinecone considers a sale (2025-08-28)"
  - id: calcalist-pinecone
    resource: https://www.calcalistech.com/ctechnews/article/rz31q82b5
    title: "Calcalist: AI database startup Pinecone weighs sale amid rising competition (2025-08)"
  - id: pc-ceo
    resource: https://www.pinecone.io/newsroom/next-chapter/
    title: "Pinecone newsroom: Edo Liberty to spearhead AI ambitions; Ash Ashutosh appointed CEO (2025-09-08)"
  - id: vb-pc-ceo
    resource: https://venturebeat.com/data-infrastructure/pinecone-founder-edo-liberty-appoints-googler-ash-as-ceo
    title: "VentureBeat: Pinecone founder Edo Liberty moves to Chief Scientist, names Ash Ashutosh CEO (2025-09-08)"
  - id: pc-oneyear
    resource: https://www.pinecone.io/blog/one-year-in-just-getting-started/
    title: "Pinecone: One Year In, and Just Getting Started (2026-08-26)"
---

# What happened
The Information reported on Aug 28, 2025 that Pinecone, last valued at $750M, had talked to bankers about a possible sale after AI model makers and AWS made standalone vector databases less relevant. Calcalist followed on Aug 31, also noting the loss of Notion as a customer.[^info-pinecone][^calcalist-pinecone] On Sept 8, 2025 Pinecone appointed Ash Ashutosh (Actifio founder, ex-Google) as CEO, and founder Edo Liberty became Chief Scientist.[^pc-ceo][^vb-pc-ceo] By Aug 2026 Liberty was described as a shareholder and board member.[^pc-oneyear]

# Why it matters
It marks the end of the standalone vector-database hype cycle. Vector search became a feature of general-purpose databases (pgvector, MongoDB, Elastic, Lakebase).

# Outcome so far
No sale was found. Pinecone pivoted to a platform (Nexus knowledge engine GA Aug 2026, BYOC GA Sept 2026), and reports more than 130% serverless retention and committed backlog up more than 60%.[^pc-oneyear] Open-source rivals diverged: Qdrant raised a $50M Series B in Mar 2026, while Weaviate and Chroma raised no priced rounds (not re-verified in pass 2).

# Related
- [/organizations/pinecone.md](/organizations/pinecone.md), [/projects/databases/qdrant.md](/projects/databases/qdrant.md), [/projects/databases/milvus.md](/projects/databases/milvus.md), [/projects/databases/weaviate.md](/projects/databases/weaviate.md)

[^info-pinecone]: The Information — https://www.theinformation.com/articles/top-funded-ai-database-startup-pinecone-considers-sale
[^calcalist-pinecone]: Calcalist — https://www.calcalistech.com/ctechnews/article/rz31q82b5
[^pc-ceo]: Pinecone — https://www.pinecone.io/newsroom/next-chapter/
[^vb-pc-ceo]: VentureBeat — https://venturebeat.com/data-infrastructure/pinecone-founder-edo-liberty-appoints-googler-ash-as-ceo
[^pc-oneyear]: Pinecone blog — https://www.pinecone.io/blog/one-year-in-just-getting-started/
