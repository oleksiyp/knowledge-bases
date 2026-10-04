---
type: Idea
title: "Wide-column / Dynamo-style stores (Cassandra, ScyllaDB, DynamoDB)"
description: "Leaderless, partitioned wide-column stores remain the default for very high write-throughput workloads at large companies. The open-source category consolidated: Cassandra matured slowly, ScyllaDB went source-available in 2024, DataStax was sold to IBM in 2025, while managed alternatives competed for new workloads."
tags: [wide-column, cassandra, scylladb, dynamodb, lsm, partitioning]
area: nosql-models
verdict: niche
hype_peak: 2018
adoption_2026: common
origins: "Amazon Dynamo paper (2007), Google Bigtable (2006), Cassandra open-sourced by Facebook (2008)"
key_systems: [systems/cassandra, systems/scylladb, systems/dynamodb, systems/cosmos-db, systems/aerospike]
related_ideas: [ideas/nosql-models/sql-nosql-convergence, ideas/distributed-sql/newsql-distributed-sql]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: c5-primary
    resource: https://cassandra.apache.org/_/blog/Apache-Cassandra-5.0-Announcement.html
    title: "Apache Cassandra 5.0 announcement, September 5, 2024"
  - id: c4
    resource: https://news.apache.org/foundation/entry/the-apache-cassandra-project-releases
    title: "ASF: The Apache Cassandra project releases Cassandra v4.0 (2021-07-27)"
    author: org:apache
  - id: reg-c4
    resource: https://www.theregister.com/software/2021/07/27/cassandra-40-finally-out-of-the-gates-after-being-delayed-for-last-minute-bug-swat/409749
    title: "The Register: Cassandra 4.0 finally out of the gates"
    author: org:the-register
  - id: c5
    resource: https://www.bigdatawire.com/2024/09/09/apache-cassandra-5-0-brings-major-updates-with-enhanced-indexing-and-ai-capabilities/
    title: "BigDATAwire: Apache Cassandra 5.0 brings major updates with enhanced indexing and AI capabilities (2024-09-09)"
  - id: discord
    resource: https://discord.com/blog/how-discord-stores-trillions-of-messages
    title: "Discord: How Discord stores trillions of messages (2023)"
    author: org:discord
  - id: scylla6
    resource: https://www.globenewswire.com/news-release/2024/06/12/2897561/0/en/ScyllaDB-Announces-6-0-Release-for-True-Elastic-Scale.html
    title: "ScyllaDB announces 6.0 release for true elastic scale (2024-06-12)"
    author: org:scylladb
  - id: scylla-sa
    resource: https://www.scylladb.com/2024/12/18/why-were-moving-to-a-source-available-license/
    title: "ScyllaDB: Why we're moving to a source available license (2024-12-18)"
    author: org:scylladb
  - id: ibm-datastax
    resource: https://www.techtarget.com/searchdatamanagement/news/366619511/IBM-to-buy-open-source-data-platform-and-AI-vendor-DataStax
    title: "TechTarget: IBM to buy open source data platform and AI vendor DataStax (2025-02)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

**Verdict: niche, but a durable niche.** The Dynamo/Bigtable design (hash-partitioned, LSM-based, tunable consistency, linear write scaling) remains useful for very large partitionable workloads. Discord's migration is concrete evidence of continued value, rather than a measure of the entire market.[^discord] Cassandra took six years to ship 4.0 (July 2021)[^c4]. ScyllaDB proved a C++ rewrite could cut node counts by more than half[^discord], then dropped its open-source edition in December 2024[^scylla-sa]. DataStax, the main Cassandra vendor, was sold to IBM in 2025[^ibm-datastax]. Managed key-value services and distributed SQL provide competing ways to meet horizontal-scale requirements; the sources here do not quantify greenfield market share.

# The idea

Trade general joins and unrestricted cross-partition transactions for partition-local access and distributed replication. Latency and availability still depend on consistency levels, hot partitions, repairs and the deployment topology. Cassandra, ScyllaDB and DynamoDB should not be treated as identical implementations. Users model data per query (one denormalized table per access pattern) around a partition key.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2021 | Cassandra 4.0 released (Jul 27), about six years after 3.0, "most stable release" with 1,000+ bug fixes[^c4][^reg-c4] | + |
| 2022–23 | Discord moves trillions of messages from 177 Cassandra nodes to 72 ScyllaDB nodes; p99 read latency falls from 40–125 ms to 15 ms[^discord] | + Scylla |
| 2024 | ScyllaDB 6.0 "tablets" on Raft give elastic scaling (Jun)[^scylla6]; Cassandra 5.0 adds Storage-Attached Indexes, trie SSTables, Unified Compaction and vector search (Sep)[^c5-primary]; ScyllaDB announces it will end its AGPL open-source version (Dec)[^scylla-sa] | mixed |
| 2025 | IBM announces acquisition of DataStax (Feb 25)[^ibm-datastax] | ~ |

# What succeeded

- **Operational track record at the high end.** Write-heavy, partitionable workloads can benefit from the model. The design's predictable latency is why Discord rebuilt on ScyllaDB rather than leaving the model[^discord].
- **ScyllaDB's engineering bet.** A shard-per-core C++ (Seastar) rewrite of the Cassandra design showed that hardware-aware engines can give large constant-factor gains. Tablets on Raft finally removed the slow token-range rebalancing that made scaling Cassandra painful[^scylla6].
- **Cassandra 5.0 closing gaps.** SAI secondary indexes and vector search reduced the "one table per query" modelling burden[^c5-primary].
- **DynamoDB.** The managed descendant of the same ideas became one of AWS's flagship services. See [DynamoDB](/systems/dynamodb.md).

# What failed

- **Cassandra's release cadence.** Six years between 3.0 and 4.0 and three more to 5.0 let alternatives take mindshare. The 2010s operational pains (repair, tombstones, compaction tuning, JVM GC) were well known by 2018.
- **Open-core businesses on Cassandra.** DataStax pivoted repeatedly (DSE, then Astra serverless, then vector/AI "Astra DB" and Langflow) before selling to IBM[^ibm-datastax]. ScyllaDB moved to source-available, a sign the open-source edition was not converting enough users[^scylla-sa][^pavlo-2024].
- **Developer ergonomics.** Query-first modelling, no joins and eventual consistency made wide-column stores a poor default for typical applications once distributed SQL (Spanner, CockroachDB, Yugabyte) offered horizontal scale with SQL.

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **Managed services absorbed the use case.** The real appeal was "a table that never runs out of capacity." DynamoDB delivers that with no operations work, and Cassandra's operational burden was its main weakness.
2. **Distributed SQL squeezed it from above.** Strongly consistent, horizontally scalable SQL removed the trade-off that justified giving up joins and transactions for many workloads.
3. **Hardware rewards rewrites.** Cassandra's JVM design left performance unused on NVMe and many-core CPUs. ScyllaDB exploited that, which illustrates a hardware-aware implementation gain. Discord also changed hardware and its data-service layer, so node counts alone are not an isolated engine comparison.[^discord]
4. **The economics of one large-user community.** Cassandra's main contributors (Apple, Netflix, DataStax, Instaclustr) used it at huge scale. That kept it robust but did not produce a mass-market developer experience.

# Lessons

- Mature niches persist. "Not the default for new apps" is different from "dead."
- Operational complexity, not the data model, is what pushes users to managed alternatives.
- A rewrite for new hardware can beat the original by a large constant factor. Turning that into a business still needs licensing and go-to-market that work.

# Related

- [Apache Cassandra](/systems/cassandra.md), [ScyllaDB](/systems/scylladb.md), [DynamoDB](/systems/dynamodb.md), [Azure Cosmos DB](/systems/cosmos-db.md), [Aerospike](/systems/aerospike.md)
- [ScyllaDB goes source-available](/events/2024-12-scylladb-source-available.md)
- [SQL/NoSQL convergence](/ideas/nosql-models/sql-nosql-convergence.md)
