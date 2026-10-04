---
type: System
title: Apache Cassandra
description: "The leaderless wide-column database from Facebook and the Dynamo/Bigtable lineage. Slow releases (4.0 in 2021, 5.0 in 2024) and heavy operational demands kept it a large-scale specialist, and its main vendor DataStax was sold to IBM in 2025."
resource: https://cassandra.apache.org
tags: [wide-column, leaderless, lsm, apache, jvm]
kind: oss
first_release: 2008
org: "Apache Software Foundation (major contributors: Apple, Netflix, DataStax/IBM, Instaclustr)"
license: Apache-2.0
outcome: stable
ideas: [ideas/nosql-models/wide-column-stores, ideas/nosql-models/sql-nosql-convergence]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: c5-primary
    resource: https://cassandra.apache.org/_/blog/Apache-Cassandra-5.0-Announcement.html
    title: "Apache Cassandra 5.0 announcement, September 5, 2024"
  - id: c4
    resource: https://news.apache.org/foundation/entry/the-apache-cassandra-project-releases
    title: "ASF: Apache Cassandra v4.0 released (2021-07-27)"
    author: org:apache
  - id: reg-c4
    resource: https://www.theregister.com/software/2021/07/27/cassandra-40-finally-out-of-the-gates-after-being-delayed-for-last-minute-bug-swat/409749
    title: "The Register: Cassandra 4.0 finally out of the gates"
    author: org:the-register
  - id: c5
    resource: https://www.bigdatawire.com/2024/09/09/apache-cassandra-5-0-brings-major-updates-with-enhanced-indexing-and-ai-capabilities/
    title: "BigDATAwire: Apache Cassandra 5.0 (2024-09-09)"
  - id: discord
    resource: https://discord.com/blog/how-discord-stores-trillions-of-messages
    title: "Discord: How Discord stores trillions of messages (2023-03-06)"
    author: org:discord
  - id: ibm
    resource: https://www.techtarget.com/searchdatamanagement/news/366619511/IBM-to-buy-open-source-data-platform-and-AI-vendor-DataStax
    title: "TechTarget: IBM to buy DataStax (2025-02)"
---

# Summary

Cassandra remains the reference open-source wide-column store. It runs clusters of up to 1,000 nodes at Apple, Netflix and others[^c4]. In 2018–2026 it was mostly maintained rather than reinvented. Version 4.0 arrived on July 27, 2021, about six years after 3.0, with 1,000+ bug fixes and a strong testing push (fuzzing, Harry, in-JVM dtests)[^c4][^reg-c4]. Version 5.0 (September 2024) brought Storage-Attached Indexes, trie-based memtables and SSTables, Unified Compaction, Java 17 and native vector search[^c5-primary]. Its best-known 2023 migration went the other way: Discord moved trillions of messages from 177 Cassandra nodes to 72 ScyllaDB nodes because of GC pauses and compaction backlogs[^discord]. DataStax, the main commercial backer, was acquired by IBM in 2025[^ibm].

# Timeline

| Year | Event |
|---|---|
| 2021 | 4.0 released (Jul 27)[^c4] |
| 2023 | Discord migration to ScyllaDB published[^discord] |
| 2024 | 5.0 released with SAI and vector search (Sep)[^c5-primary] |
| 2025 | IBM announces acquisition of DataStax (Feb 25)[^ibm] |

# What worked

- Proven multi-datacenter, always-writable operation at very large scale.
- The 4.0 quality push restored trust after a slow 3.x era.
- SAI reduced the denormalize-per-query modelling burden.

# What didn't

- Operational complexity (repair, tombstones, compaction, JVM tuning) pushed users to DynamoDB, Keyspaces, ScyllaDB or distributed SQL.
- Release cadence and the vendor's shifting strategy slowed ecosystem growth.

# Related

- [Wide-column stores](/ideas/nosql-models/wide-column-stores.md)
- [ScyllaDB](/systems/scylladb.md), [DynamoDB](/systems/dynamodb.md), [Azure Cosmos DB](/systems/cosmos-db.md)
