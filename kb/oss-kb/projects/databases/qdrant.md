---
type: OSS Project
title: Qdrant
description: "Rust, Apache-2.0 vector search engine that raised a $50M Series B (Mar 2026). It has 250M+ downloads and 34.9k stars, and is expanding to edge and serverless. The healthiest independent vector-DB company in the period."
resource: https://github.com/qdrant/qdrant
tags: [vector-database, rust, apache-2.0, open-core]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Qdrant Solutions GmbH
backing_orgs: [organizations/qdrant]
metrics:
  github_stars: { value: 34907, as_of: 2026-10-03 }
  downloads: { value: "250M+", as_of: 2026-03-12 }
  latest_release: { value: "v1.19.1", as_of: 2026-09-04 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: qd-gh
    resource: https://github.com/qdrant/qdrant
    title: Qdrant GitHub repository
  - id: qd-b
    resource: https://qdrant.tech/blog/series-b-announcement/
    title: "Qdrant Series B announcement"
    author: org:qdrant
  - id: qd-blog
    resource: https://qdrant.tech/blog/
    title: Qdrant blog index (1.19, Edge, Cloud Inference)
    author: org:qdrant
  - id: tc-qd-a
    resource: https://techcrunch.com/2024/01/23/qdrant-open-source-vector-database/
    title: "TechCrunch: Open source vector database startup Qdrant raises $28M"
    author: org:techcrunch
---

# Summary
Qdrant is the vector-database company that kept raising money in 2026. It raised a $50M Series B led by AVP on Mar 12 2026, with Bosch Ventures, Unusual Ventures, Spark Capital and 42CAP participating. Its Series A was $28M in Jan 2024[^qd-b][^tc-qd-a]. Reported traction includes 250M+ downloads and production use at Canva, HubSpot, Roche, Bosch and OpenTable[^qd-b]. Product work moved into edge deployment (Qdrant Edge beta), Cloud Inference and an upcoming serverless offering. 1.19 (Aug 5 2026) added TurboQuant and memory tiers[^qd-blog][^qd-gh].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-03-12 | $50M Series B led by AVP [^qd-b] | Business | + |
| W3 | 2026-08-05 | Qdrant 1.19 (TurboQuant, memory tiers) [^qd-blog][^qd-gh] | OSS | + |
| W3 | 2026-09-04 | v1.19.1 [^qd-gh] | OSS | + |

# OSS successes
- Permissive license, Rust performance and broad adoption[^qd-b].

# OSS failures / risks
- Single vendor. Advanced features may move to cloud-only offerings.

# Business successes
- Raised a Series B despite vector-DB commoditisation[^qd-b].

# Business failures / risks
- Competes with free vector features in Postgres (pgvector) and others.

# By window
## W3
- 1.19[^qd-blog].
## W6
- No notable events found.
## W9
- Series B[^qd-b].
## W12
- No notable events found.
## W24
- Continued 1.x releases[^qd-gh].

# Lessons
- Specialised OSS vector engines can still raise money if they position as retrieval infrastructure for agents and edge, not just "a vector store".

# Related
- [/organizations/qdrant.md](/organizations/qdrant.md), [Milvus](/projects/databases/milvus.md), [Weaviate](/projects/databases/weaviate.md), [Chroma](/projects/databases/chroma.md)

[^qd-gh]: GitHub API, qdrant/qdrant, 2026-10-03.
[^qd-b]: Qdrant blog, 2026-03-12.
[^qd-blog]: Qdrant blog index.
[^tc-qd-a]: TechCrunch, 2024-01-23.
