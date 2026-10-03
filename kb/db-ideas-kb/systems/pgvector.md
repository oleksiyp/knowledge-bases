---
type: System
title: pgvector
description: "Open-source PostgreSQL extension for vector similarity search (IVFFlat and HNSW indexes), created by Andrew Kane in 2021. It became the standard way to store embeddings in Postgres and the main reason 'vector database' turned from a category into a feature."
resource: https://github.com/pgvector/pgvector
tags: [postgres, extension, vector-search, hnsw, ai]
kind: oss
first_release: 2021
org: "Community project led by Andrew Kane"
license: PostgreSQL
outcome: thriving
ideas: [ideas/postgres-ecosystem/extensions-as-platform, ideas/postgres-ecosystem/just-use-postgres, ideas/vector-ai/vector-search-as-a-feature]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pgv-gh
    resource: https://github.com/pgvector/pgvector
    title: "pgvector GitHub repository and CHANGELOG"
  - id: kane-tweet
    resource: https://x.com/andrewkane/status/1384962687977852929
    title: "Andrew Kane on X: announcing pgvector (April 2021)"
    author: person:andrew-kane
  - id: pgv-050
    resource: https://www.postgresql.org/about/news/pgvector-050-released-2700
    title: "PostgreSQL news: pgvector 0.5.0 released (HNSW)"
  - id: rds-pgvector
    resource: https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-rds-postgresql-pgvector-ml-model-integration/
    title: "AWS: Amazon RDS for PostgreSQL now supports pgvector (May 2023)"
    author: org:aws
  - id: pgv-080
    resource: https://pgxn.org/dist/vector/0.8.0/
    title: "PGXN: vector 0.8.0 (iterative index scans)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pgvectorscale
    resource: https://www.prnewswire.com/news-releases/postgresql-is-now-faster-than-pinecone-75-cheaper-with-new-open-source-extensions-302169146.html
    title: "Timescale: PostgreSQL is now faster than Pinecone, 75% cheaper (June 2024, vendor benchmark)"
    author: org:timescale
  - id: case-against
    resource: https://alex-jacobs.com/posts/the-case-against-pgvector/
    title: "Alex Jacobs: The Case Against pgvector (2025-10-29)"
---

# Summary
pgvector adds a `vector` type, distance operators and approximate-nearest-neighbor indexes to Postgres. Andrew Kane announced it in April 2021[^kane-tweet]. The ChatGPT wave turned it from a hobby project into infrastructure. AWS RDS added it in May 2023[^rds-pgvector], and within a year of ChatGPT, Supabase and AlloyDB offered vector search built on it[^pavlo-2023]. Version 0.5.0 (Aug/Sept 2023) added HNSW indexes[^pgv-050]. 0.7 added half-precision, binary and sparse vectors, and 0.8.0 (late 2024) added iterative index scans to fix filtered queries returning too few rows[^pgv-080][^pgv-gh]. Pavlo argued in 2023 that because adding vector search to an existing DBMS takes little engineering, specialized vector vendors lack a moat[^pavlo-2023]. pgvector is the main evidence for that view.

# Timeline
| Date | Event |
|---|---|
| 2021-04 | First announced by Andrew Kane[^kane-tweet] |
| 2023-05 | Amazon RDS for PostgreSQL supports pgvector[^rds-pgvector] |
| 2023-08/09 | 0.5.0: HNSW index, parallel IVFFlat builds[^pgv-050] |
| 2024-06 | Timescale's pgvectorscale (DiskANN-based) builds on pgvector, claims 28x lower p95 latency vs Pinecone s1 (vendor benchmark)[^pgvectorscale] |
| 2024 | 0.8.0: iterative index scans, better filtered-query costing[^pgv-080] |
| 2025-10 | "The Case Against pgvector" documents production pain at scale[^case-against] |

# What worked
- Shipped everywhere Postgres is managed. Embeddings sit next to the relational data, with transactions, joins and RLS.
- A small, focused codebase with a permissive license, so every vendor could adopt it.
- Good enough recall and latency for the large majority of RAG workloads (millions of vectors, not billions).

# What didn't
- Filtered search was weak until iterative scans arrived, and still requires tuning[^case-against].
- HNSW builds are memory-hungry and slow at tens of millions of vectors. IVFFlat lists don't rebalance without a rebuild[^case-against].
- Vendors fragmented the ecosystem with add-ons (pgvectorscale, Lantern, pg_embedding), and not every cloud ships every add-on.

# Related
- [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md), [Vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md)
- [pgvector 0.5 adds HNSW](/events/2023-08-pgvector-hnsw.md)
- [PostgreSQL](/systems/postgresql.md), [Pinecone](/systems/pinecone.md), [TimescaleDB](/systems/timescaledb.md)
