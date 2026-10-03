---
type: OSS Project
title: Milvus
description: "LF AI & Data-graduated, Apache-2.0 vector database (46k stars, the most of any vector DB). It shipped 3.0 'lake-native vector search' (July 16 2026). Zilliz, its main sponsor, has announced no new funding since its Aug 2022 Series B extension."
resource: https://github.com/milvus-io/milvus
tags: [vector-database, apache-2.0, foundation-hosted, lf-ai-data, lakehouse]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: LF AI & Data Foundation; Zilliz as primary contributor
backing_orgs: []
metrics:
  github_stars: { value: 46308, as_of: 2026-10-03 }
  latest_release: { value: "v3.0.2", as_of: 2026-09-20 }
oss_verdict: thriving
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: milvus-gh
    resource: https://github.com/milvus-io/milvus
    title: Milvus GitHub repository
  - id: milvus-blog
    resource: https://milvus.io/blog
    title: Milvus blog (Milvus 3.0 announcement, 2026-07-27)
  - id: lfai-milvus-grad
    resource: https://lfaidata.foundation/blog/2021/06/23/lf-ai-data-foundation-announces-graduation-of-milvus-project/
    title: "LF AI & Data Foundation Announces Graduation of Milvus Project (2021-06-23)"
    author: org:lf-ai-data
  - id: bf-milvus3
    resource: https://www.blocksandfiles.com/ai-ml/2026/07/16/zilliz-launches-milvus-vector-lakebase/5273617
    title: "Blocks and Files: Zilliz launches Milvus vector lakebase (2026-07-16)"
  - id: zilliz-milvus3
    resource: https://zilliz.com/news/milvus-3-0-lake-native-vector-database
    title: "Zilliz newsroom: Zilliz Announces Milvus 3.0, Making the World's Most Adopted Open-Source Vector Database Lake-Native"
    author: org:zilliz
  - id: lfai-milvus3
    resource: https://lfaidata.foundation/blog/2026/07/29/milvus-3-0-is-here-lf-ai-datas-open-source-vector-database-goes-lake-native/
    title: "LF AI & Data: Milvus 3.0 Is Here (2026-07-29)"
    author: org:lf-ai-data
  - id: zilliz-b-ext
    resource: https://zilliz.com/news/vector-database-company-zilliz-series-b-extension
    title: "Zilliz newsroom: Zilliz Raises $60 Million Series B Extension (Aug 2022)"
    author: org:zilliz
  - id: milvus-wiki
    resource: https://en.wikipedia.org/wiki/Milvus_(vector_database)
    title: Milvus — Wikipedia
---

# Summary
Milvus is the most-starred open-source vector database (46.3k)[^milvus-gh]. It is foundation-hosted (graduated in LF AI & Data on June 23 2021)[^lfai-milvus-grad]. Milvus 3.0, announced by Zilliz on July 16 2026, moves toward the lakehouse: lake-native vector search, zero-copy external collections over data-lake files, snapshots, Spark integration, regex filters, aggregation and ORDER BY, with external collections over Lance, Iceberg, Parquet and Vortex[^milvus-blog][^bf-milvus3][^zilliz-milvus3]. Zilliz says Milvus is used in production by more than 10,000 organizations, with 100M+ Docker pulls[^bf-milvus3]. 2.6.x and 3.0.x lines are patched in parallel (v2.6.25, v3.0.2 in Sept 2026)[^milvus-gh]. Sponsor Zilliz's last announced round is a $60M Series B extension in Aug 2022 (led by Prosperity7)[^zilliz-b-ext]. No layoffs or funding news was found for 2025-2026.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | 2.6.x release line [^milvus-gh] | OSS | + |
| W3 | 2026-07-16 | Milvus 3.0: lake-native vector search announced (LF AI & Data post Jul 29) [^bf-milvus3][^lfai-milvus3] | OSS | + |
| W3 | 2026-09-20/29 | v3.0.2 and v2.6.25 [^milvus-gh] | OSS | + |

# OSS successes
- Foundation governance, top stars and a big 3.0 release[^milvus-gh][^milvus-blog].

# OSS failures / risks
- Development is concentrated at Zilliz.

# Business successes
- Adoption claim of 10,000+ production organizations (vendor figure)[^bf-milvus3]. Revenue not disclosed.

# Business failures / risks
- Vector search has become a commodity feature (pgvector, Lakebase Search, Elastic, Mongo). Standalone vector-DB pricing power is shrinking.

# By window
## W3
- Milvus 3.0 (Jul 16)[^bf-milvus3][^lfai-milvus3].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- 2.6 line[^milvus-gh].

# Lessons
- Vector databases are surviving by becoming lakehouse retrieval engines rather than standalone stores.

# Related
- [Qdrant](/projects/databases/qdrant.md), [Weaviate](/projects/databases/weaviate.md), [Chroma](/projects/databases/chroma.md), [LanceDB](/projects/databases/lancedb.md), [/organizations/pinecone.md](/organizations/pinecone.md)

[^milvus-gh]: GitHub API, milvus-io/milvus, 2026-10-03.
[^milvus-blog]: Milvus blog, 2026-07-27.
[^milvus-wiki]: Wikipedia, Milvus.
[^lfai-milvus-grad]: LF AI & Data blog, 2021-06-23.
[^bf-milvus3]: Blocks and Files, 2026-07-16.
[^zilliz-milvus3]: Zilliz newsroom, July 2026.
[^lfai-milvus3]: LF AI & Data blog, 2026-07-29.
[^zilliz-b-ext]: Zilliz newsroom, Aug 2022.
