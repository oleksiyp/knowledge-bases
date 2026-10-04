---
type: System
title: ArangoDB
description: "A native multi-model database (documents, graphs, key-value) with the AQL query language. In 2023 it moved from Apache 2.0 to BSL 1.1 and capped free community binaries at 100 GB, and later repositioned as 'Arango' for GraphRAG/AI."
resource: https://arango.ai
tags: [multi-model, graph, document, aql, bsl]
kind: product
first_release: 2011
org: "ArangoDB Inc. (brand 'Arango')"
license: "BSL-1.1 (3.12+); Apache-2.0 before"
outcome: pivoted
ideas: [ideas/nosql-models/multi-model-databases, ideas/nosql-models/graph-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: bsl
    resource: https://arangodb.com/2023/10/evolving-arangodbs-licensing-model-for-a-sustainable-future/
    title: "ArangoDB: Evolving ArangoDB's licensing model for a sustainable future (2023-10)"
    author: org:arangodb
  - id: hn
    resource: https://news.ycombinator.com/item?id=37850833
    title: "Hacker News discussion of the ArangoDB license change"
  - id: arcade
    resource: https://arcadedb.com/blog/open-source-forever-why-arcadedb-will-never-change-its-license/
    title: "ArcadeDB: Why ArcadeDB will never change its license"
---

# Summary

ArangoDB was one of the original "native multi-model" databases. A single C++ engine (RocksDB storage since 3.4) serves JSON documents, property graphs and key-value data, queried through AQL, with SmartGraphs for sharded graph workloads. In October 2023 it announced that from version 3.12 the source would move from Apache 2.0 to BSL 1.1, converting to Apache 2.0 after four years. Free community binaries came under a new Community License that bans commercial use and limits a cluster to 100 GB[^bsl]. The move drew criticism from users and dependent projects[^hn] and gave competitors such as ArcadeDB a talking point[^arcade]. The current Arango site positions graph, vector, document and search capabilities as a platform for AI applications.[^bsl]

# Timeline

| Year | Event |
|---|---|
| 2023 | BSL 1.1 and Community License with 100 GB limit (Oct)[^bsl] |
| 2024–25 | Rebrand toward "Arango" AI and GraphRAG platform |

# What worked

- A credible single engine for document and graph queries, used for knowledge graphs and identity graphs.

# What didn't

- The 2023 change restricted future free binary upgrades for commercial or larger deployments. Source and binary terms were different, so describing the whole product with one license label hides an important operational distinction.[^bsl]
- The company framed the change as sustainability and cloud-competition protection. It does not disclose enough financial data to establish that the product was second-best or commercially unsuccessful.[^bsl]

# Related

- [Multi-model databases](/ideas/nosql-models/multi-model-databases.md), [Graph databases](/ideas/nosql-models/graph-databases.md)
- [SurrealDB](/systems/surrealdb.md), [Neo4j](/systems/neo4j.md)
