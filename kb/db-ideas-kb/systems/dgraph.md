---
type: System
title: Dgraph
description: "A distributed, GraphQL-native graph database written in Go. Dgraph Labs raised roughly $15–20M, sold itself to Hypermode in 2023, and was sold again to Istari Digital in 2025, with undisclosed acquisition terms."
resource: https://dgraph.io
tags: [graph, graphql, go, distributed]
kind: oss
first_release: 2016
org: "Istari Digital (since 2025); previously Hypermode (2023), Dgraph Labs"
license: Apache-2.0
outcome: acquired
ideas: [ideas/nosql-models/graph-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: istari
    resource: https://www.prnewswire.com/news-releases/istari-digital-acquires-dgraph-to-strengthen-data-foundation-for-ai-and-engineering-302593246.html
    title: "Istari Digital acquires Dgraph (2025-10-23)"
  - id: hypermode
    resource: https://x.com/hypermodeinc/status/1843305053668642880
    title: "Hypermode on X: raised $9M seed and acquired Dgraph Labs"
    author: org:hypermode
  - id: dbdb
    resource: https://dbdb.io/db/dgraph
    title: "Database of Databases: Dgraph"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Dgraph was founded by ex-Google engineer Manish Jain in 2015–16. It promised a horizontally scalable graph database with GraphQL as a native query language (with its distinct DQL language and a separate GraphQL layer) and launched Dgraph Cloud in 2020[^dbdb]. GraphQL API support alone is not evidence of storage-engine adoption. Hypermode, an AI-infrastructure startup that raised a $9M seed, acquired Dgraph Labs in late 2023[^hypermode]. On October 23, 2025, Istari Digital bought Dgraph from Hypermode, terms undisclosed[^istari]. Pavlo's 2025 review commented: "I still haven't met anybody who is actively using Dgraph"[^pavlo-2025].

# Timeline

| Year | Event |
|---|---|
| 2020 | Dgraph Cloud launched |
| 2023 | Acquired by Hypermode (Nov)[^hypermode] |
| 2025 | Acquired by Istari Digital (Oct 23)[^istari] |

# What worked

- Solid engineering (Badger, its LSM KV store, saw independent use) and an Apache-licensed core that survived the ownership changes.

# What didn't

- GraphQL familiarity does not remove the need to understand distributed graph storage, query execution and data modeling. DQL and GraphQL are not interchangeable languages.
- Two ownership changes create continuity questions, but do not by themselves prove business failure. Pavlo's anecdote is a commentator's experience, not an adoption survey; the purchase announcement identifies an AI and engineering use case.[^istari][^pavlo-2025]

# Related

- [Graph databases](/ideas/nosql-models/graph-databases.md)
- [Neo4j](/systems/neo4j.md), [Kuzu](/systems/kuzu.md)
