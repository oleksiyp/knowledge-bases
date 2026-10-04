---
type: Event
title: "pgvector 0.5.0 adds HNSW indexes"
description: "On 2023-08-28 pgvector added HNSW indexes, making Postgres a credible vector store. AWS shipped it on Aurora and RDS within two months, the turning point toward vector search as a feature."
date: 2023-08-28
year: 2023
kind: launch
signal: positive
ideas: [ideas/vector-ai/vector-search-as-a-feature, ideas/vector-ai/ann-index-algorithms, ideas/postgres-ecosystem/extensions-as-platform]
systems: [systems/pgvector, systems/postgresql]
status: stable
generated: { by: codex/gpt-6, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pg-news
    resource: https://www.postgresql.org/about/news/pgvector-050-released-2700
    title: "PostgreSQL.org: pgvector 0.5.0 released"
  - id: jkatz
    resource: https://jkatz05.com/post/postgres/pgvector-overview-0.5.0/
    title: "Jonathan Katz: pgvector 0.5.0 feature highlights and HOWTOs"
  - id: aws
    resource: https://aws.amazon.com/about-aws/whats-new/2023/10/amazon-aurora-postgresql-pgvector-v0-5-0-hnsw-indexing/
    title: "AWS: Aurora PostgreSQL supports pgvector 0.5.0 with HNSW indexing (Oct 2023)"
    author: org:aws
---

# What happened

pgvector 0.5.0 added the `hnsw` index type, parallel builds for IVFFlat and faster distance functions.[^pg-news] Unlike IVFFlat, HNSW can be built on an empty table and maintained through ordinary INSERT/UPDATE/DELETE; approximate-search recall still depends on index and query settings.[^jkatz] AWS made it available on Aurora PostgreSQL and RDS in October 2023.[^aws]

# Why it matters

It removed the main technical reason to run a separate vector database for small and mid-sized RAG workloads. Every managed Postgres (Supabase, Neon, AlloyDB, Azure, Crunchy, Timescale) had it within months. It is the single event most responsible for commoditizing dedicated vector databases.

# Related

- [pgvector](/systems/pgvector.md) · [Vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md)

[^pg-news]: PostgreSQL.org news.
[^jkatz]: Jonathan Katz blog.
[^aws]: AWS What's New.

# Notes from postgres-ecosystem
pgvector is the strongest example of a Postgres *extension* absorbing a whole database category. AWS RDS had shipped the pre-HNSW version in May 2023, before this release. See [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md) and [Just use Postgres](/ideas/postgres-ecosystem/just-use-postgres.md).
