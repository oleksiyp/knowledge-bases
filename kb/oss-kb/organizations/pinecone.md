---
type: Organization
title: Pinecone
description: "Proprietary managed vector database, included here as the closed-source contrast to OSS vector DBs. It was reported to be weighing a sale (Aug 2025) and replaced its founder-CEO (Sept 2025), then pivoted to a 'knowledge platform' (Nexus GA Aug 2026)."
resource: https://www.pinecone.io
tags: [vector-database, proprietary, managed-service, ai-infrastructure]
org_kind: coss-startup
hq: New York, USA (unverified)
funding: { total_usd: "~$138M (trackers; not company-confirmed)", last_round: "$100M Series B (a16z lead) (2023)", last_round_date: 2023-04-27, valuation_usd: "~750M (2023)" }
business_verdict: struggling
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gn-pinecone-sale
    resource: https://www.calcalistech.com/ctechnews/article/rz31q82b5
    title: "Calcalist: AI database startup Pinecone weighs sale amid rising competition (2025-08-31; follows The Information, 2025-08-28)"
    author: org:calcalist
  - id: vb-vector
    resource: https://venturebeat.com/ai/from-shiny-object-to-sober-reality-the-vector-database-story-two-years-later
    title: "VentureBeat: From shiny object to sober reality — the vector database story, two years later (2025-11)"
    author: org:venturebeat
  - id: gn-pinecone-ceo
    resource: https://www.pinecone.io/newsroom/next-chapter/
    title: "Pinecone newsroom: Founder Edo Liberty to spearhead AI ambitions; appoints Ash Ashutosh as CEO (2025-09-08)"
    author: org:pinecone
  - id: pc-oneyear
    resource: https://www.pinecone.io/blog/one-year-in-just-getting-started/
    title: "Pinecone: One Year In, and Just Getting Started (2026-08-26)"
  - id: pc-news
    resource: https://www.pinecone.io/newsroom/
    title: Pinecone newsroom (Nexus GA 2026-08-06; OneLake integration 2026-06-03)
  - id: pc-blog
    resource: https://www.pinecone.io/blog/
    title: Pinecone blog index (BYOC GA 2026-09-23; full-text search GA 2026-09-09)
  - id: tc-pinecone-2023
    resource: https://techcrunch.com/tag/pinecone/
    title: "TechCrunch Pinecone tag: $100M at $750M valuation (2023-04-27)"
---

# Summary
Pinecone was the best-funded vector database ($100M at ~$750M in Apr 2023)[^tc-pinecone-2023]. It is the clearest sign that standalone vector databases became a commodity. On Aug 28 2025 The Information reported that Pinecone was considering a sale; Calcalist added that it had held early talks with bankers after losing Notion as a customer, with Oracle, IBM, MongoDB and Snowflake named as possible buyers[^gn-pinecone-sale]. On Sept 8 2025 it appointed Ash Ashutosh as CEO, and founder Edo Liberty became Chief Scientist[^gn-pinecone-ceo]. Liberty later moved to shareholder and board member[^pc-oneyear]. Under Ashutosh, Pinecone went from one product to a platform (Database, Nexus "knowledge engine", Marketplace). It reports more than 130% net retention on serverless and committed backlog up more than 60%[^pc-oneyear]. Nexus reached GA on Aug 6 2026[^pc-news], and BYOC and full-text search went GA in Sept 2026[^pc-blog]. No sale was found to have happened.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-08-28 | Reported to be weighing a sale [^gn-pinecone-sale] | − |
| W24 | 2025-09-08 | Ash Ashutosh named CEO. Liberty to Chief Scientist [^gn-pinecone-ceo] | +/− |
| W12 | 2025-11 | VentureBeat: vector databases' "sober reality" [^vb-vector] | − |
| W6 | 2026-06-03 | Nexus integrates with Microsoft OneLake [^pc-news] | + |
| W3 | 2026-08-06 | Nexus GA [^pc-news] | + |
| W3 | 2026-09-09 / 09-23 | Full-text search GA. BYOC GA [^pc-blog] | + |

# Monetization model
Proprietary managed serverless vector DB, BYOC, and the Nexus knowledge platform.

# Successes
- Retention and margin improvements reported by the company[^pc-oneyear].

# Failures / risks
- Its closed model faces free OSS rivals (Milvus, Qdrant, pgvector) and built-in vector features in general databases.

# Related
- [Milvus](/projects/databases/milvus.md), [Qdrant](/projects/databases/qdrant.md), [Weaviate](/projects/databases/weaviate.md), [Chroma](/projects/databases/chroma.md)

[^gn-pinecone-sale]: Calcalist, 2025-08-31 (following The Information, 2025-08-28).
[^gn-pinecone-ceo]: Pinecone newsroom, 2025-09-08.
[^vb-vector]: VentureBeat, Nov 2025.
[^pc-oneyear]: Pinecone blog, 2026-08-26.
[^pc-news]: Pinecone newsroom.
[^pc-blog]: Pinecone blog index.
[^tc-pinecone-2023]: TechCrunch, 2023-04-27.
