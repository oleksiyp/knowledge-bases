---
type: Idea
title: "Vector search as a feature of existing databases"
description: "Rather than adding a vector database, add a vector type and ANN index to the database you already run: pgvector, MongoDB Atlas, Oracle, SQL Server, Elasticsearch/OpenSearch, Cosmos DB, even S3. It won. By 2026 nearly every major engine ships one, because real retrieval is hybrid and lives next to the business data."
tags: [vector-search, pgvector, incumbents, bundling, hybrid-search]
area: vector-ai
verdict: won
hype_peak: 2024
adoption_2026: mainstream
origins: "Elasticsearch dense_vector and OpenSearch k-NN (2019) predate the LLM boom. pgvector was first released in 2021. The wave came after ChatGPT (late 2022)."
key_systems: [systems/pgvector, systems/mongodb, systems/elasticsearch, systems/opensearch, systems/cosmos-db, systems/s3, systems/diskann]
related_ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/ann-index-algorithms, ideas/vector-ai/object-storage-vector-search]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pgv-050
    resource: https://www.postgresql.org/about/news/pgvector-050-released-2700
    title: "PostgreSQL.org: pgvector 0.5.0 released (HNSW)"
  - id: aurora-pgv
    resource: https://aws.amazon.com/about-aws/whats-new/2023/10/amazon-aurora-postgresql-pgvector-v0-5-0-hnsw-indexing/
    title: "AWS: Aurora PostgreSQL supports pgvector 0.5.0 with HNSW (Oct 2023)"
    author: org:aws
  - id: pgvs
    resource: https://www.prnewswire.com/news-releases/postgresql-is-now-faster-than-pinecone-75-cheaper-with-new-open-source-extensions-302169146.html
    title: "Timescale: PostgreSQL is now faster than Pinecone, 75% cheaper (pgvectorscale, 2024)"
    author: org:timescale
  - id: mdb-vs-ga
    resource: https://www.mongodb.com/company/newsroom/press-releases/mongo-db-announces-general-availability-of-new-capabilities-to-power-next-generation-apps
    title: "MongoDB: Atlas Vector Search and Search Nodes GA (2023-12-04)"
    author: org:mongodb
  - id: ora-23ai
    resource: https://blogs.oracle.com/database/oracle-23ai-now-generally-available
    title: "Oracle: Announcing Oracle Database 23ai general availability (May 2024)"
    author: org:oracle
  - id: ora-26ai
    resource: https://mikedietrichde.com/2025/10/14/oracle-ai-database-26ai-replaces-oracle-database-23ai/
    title: "Mike Dietrich (Oracle): Oracle AI Database 26ai replaces Oracle Database 23ai (2025-10-14)"
  - id: sqlserver-2025
    resource: https://devblogs.microsoft.com/azure-sql/sql-server-2025-embraces-vectors-setting-the-foundation-for-empowering-your-data-with-ai/
    title: "Microsoft: SQL Server 2025 embraces vectors"
    author: org:microsoft
  - id: cosmos-diskann
    resource: https://devblogs.microsoft.com/cosmosdb/diskann-for-azure-cosmos-db-now-in-open-public-preview/
    title: "Microsoft: DiskANN for Azure Cosmos DB in open public preview (Sep 2024)"
    author: org:microsoft
  - id: elastic-bbq
    resource: https://www.elastic.co/search-labs/blog/better-binary-quantization-lucene-elasticsearch
    title: "Elastic: Better Binary Quantization (BBQ) in Lucene and Elasticsearch"
    author: org:elastic
  - id: s3v-ga
    resource: https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-generally-available-with-increased-scale-and-performance
    title: "AWS News Blog: Amazon S3 Vectors now generally available (2025-12-02)"
    author: org:aws
  - id: pgv-gh
    resource: https://github.com/pgvector/pgvector
    title: "pgvector GitHub repository (≈23k stars on 2026-10-03)"
---

# Summary

**Verdict: won.** The fastest and most complete absorption of a new database category this decade. pgvector got HNSW in August 2023 and was on Aurora/RDS two months later.[^pgv-050][^aurora-pgv] MongoDB Atlas Vector Search went GA in December 2023.[^mdb-vs-ga] Oracle shipped a native `VECTOR` type in 23ai (May 2024) and renamed the whole product "Oracle AI Database" in October 2025.[^ora-23ai][^ora-26ai] SQL Server 2025 added a `VECTOR` type and DiskANN indexes.[^sqlserver-2025] AWS then built vector indexes into S3 itself.[^s3v-ga] For most applications, "which vector database?" now has a simple answer: the one you already run.

# The idea

Store embeddings as a column type next to the rows they describe. Add an ANN index access method, and let the existing query planner combine vector distance with `WHERE` filters, joins, permissions, transactions and backups. You give up some peak performance in exchange for one system, one consistency model and no sync pipeline.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | OpenSearch/Open Distro k-NN plugin and Elasticsearch `dense_vector` exist, used mostly for e-commerce and recommendations | + |
| 2021 | pgvector first released (IVFFlat only) | + |
| 2023 | pgvector 0.5.0 adds HNSW (Aug 28); AWS ships it on Aurora/RDS (Oct)[^pgv-050][^aurora-pgv] | + |
| 2023 | SingleStore, Oracle, Supabase, AlloyDB, Timescale, Neon, MongoDB, Cassandra, Rockset and ClickHouse all add vector search within a year of ChatGPT[^pavlo-2023] | + |
| 2023 | MongoDB Atlas Vector Search GA (Dec 4)[^mdb-vs-ga] | + |
| 2024 | Oracle Database 23ai GA with AI Vector Search (May 2); Timescale pgvectorscale (StreamingDiskANN); Cosmos DB DiskANN preview (Sep); Elastic BBQ quantization[^ora-23ai][^pgvs][^cosmos-diskann][^elastic-bbq] | + |
| 2025 | Oracle renames the product Oracle AI Database 26ai (Oct); SQL Server 2025 GA with VECTOR type, DiskANN index in preview (Nov); S3 Vectors GA (Dec)[^ora-26ai][^sqlserver-2025][^s3v-ga] | + |

# What succeeded

- **pgvector became the default.** It is an open-source extension with about 23k GitHub stars, offered by every managed Postgres provider.[^pgv-gh] It drove much of the "just use Postgres" story (see [pgvector](/systems/pgvector.md)).
- **Performance caught up enough.** Timescale's vendor benchmark claimed pgvector plus pgvectorscale beat Pinecone's storage-optimized index on 50M Cohere embeddings: 28x lower p95 latency at 99% recall and 75% lower cost when self-hosted. The numbers are vendor-produced, but they changed the conversation.[^pgvs]
- **Search engines adapted well.** Elasticsearch and OpenSearch already had relevance ranking, filtering and scale-out. Adding quantized HNSW (Elastic's BBQ, derived from RaBitQ) made them strong hybrid-search engines.[^elastic-bbq]
- **Hyperscalers used Microsoft Research's DiskANN** in Cosmos DB and SQL Server, so vector indexes run from SSD rather than RAM.[^cosmos-diskann][^sqlserver-2025]

# What failed

- **Peak scale and write-heavy workloads.** HNSW indexes inside a row store are slow to build, bloat memory and degrade with heavy updates. At hundreds of millions to billions of vectors, teams still move to Milvus, Qdrant, turbopuffer or Vespa.
- **Filtered search quality.** Post-filtering an ANN result can return too few rows. pgvector added iterative index scans in 2024 to address this. Every engine had to relearn this problem.
- **"AI database" rebranding** (Oracle 23c → 23ai → "AI Database 26ai") added marketing rather than new capability. It is a sign of the category's absorption, not a separate success.[^ora-26ai]

# Why

1. **Low technical barrier.** An ANN index is a self-contained access method. Postgres's index AM API, Lucene's codec model and Oracle's extensibility made it a few-engineer project.
2. **Data gravity.** Retrieval needs the metadata, ACLs and freshness of the operational data. Keeping vectors in the same transaction removes the sync pipeline, which is the most fragile part of a two-database RAG stack.
3. **Incumbents moved fast because the threat was existential for mindshare.** Pavlo noted that the vendors reacted in "less than one year".[^pavlo-2023]
4. **Hyperscaler bundling.** When S3, Aurora, Cosmos DB and OpenSearch all include vectors at no extra product cost, specialists have to win on cost or scale, not on availability.

# Lessons

- When a new data type arrives, bet on the extensible incumbents (Postgres, Lucene) to absorb it.
- Integration (transactions, filters, security) beats raw benchmark speed for the median workload.
- Rebranding a product around a hype term is a lagging indicator: it comes once the feature has already become a commodity.

# Related

- [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md) · [ANN index algorithms](/ideas/vector-ai/ann-index-algorithms.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md)
- Systems: [pgvector](/systems/pgvector.md), [MongoDB](/systems/mongodb.md), [Elasticsearch](/systems/elasticsearch.md), [OpenSearch](/systems/opensearch.md), [Cosmos DB](/systems/cosmos-db.md), [DiskANN](/systems/diskann.md)
- Events: [pgvector HNSW](/events/2023-08-pgvector-hnsw.md), [MongoDB Atlas Vector Search GA](/events/2023-12-mongodb-atlas-vector-search-ga.md), [Oracle 23ai GA](/events/2024-05-oracle-database-23ai-ga.md), [S3 Vectors GA](/events/2025-12-s3-vectors-ga.md)

[^pavlo-2023]: Pavlo, 2023 review.
[^pgv-050]: PostgreSQL.org news.
[^aurora-pgv]: AWS What's New.
[^pgvs]: Timescale press release; vendor benchmark.
[^mdb-vs-ga]: MongoDB press release.
[^ora-23ai]: Oracle blog.
[^ora-26ai]: Oracle product manager blog.
[^sqlserver-2025]: Microsoft Azure SQL blog.
[^cosmos-diskann]: Azure Cosmos DB blog.
[^elastic-bbq]: Elastic Search Labs.
[^s3v-ga]: AWS News Blog.
[^pgv-gh]: GitHub.
