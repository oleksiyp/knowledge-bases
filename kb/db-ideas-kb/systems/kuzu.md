---
type: System
title: Kuzu
description: "An MIT-licensed embedded graph database (the 'DuckDB for graphs') from the University of Waterloo. Apple acquired it in October 2025, and its GitHub repository was archived the next day, leaving users to forks."
resource: https://github.com/kuzudb/kuzu
tags: [graph, embedded, cypher, research, columnar, acquired]
kind: oss
first_release: 2022
org: "Kuzu Inc. (acquired by Apple, 2025)"
license: MIT
outcome: acquired
ideas: [ideas/nosql-models/graph-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: repo
    resource: https://github.com/kuzudb/kuzu
    title: "Kuzu repository, archived October 10, 2025"
  - id: ai
    resource: https://appleinsider.com/articles/26/02/11/faster-more-flexible-databases-could-be-coming-to-filemaker-or-iwork
    title: "AppleInsider: Why has Apple bought a database company? (2026-02-11)"
  - id: mo
    resource: https://www.macobserver.com/news/apple-buys-graph-database-startup-kuzu-eu-filing-shows-more/
    title: "The Mac Observer: Apple buys graph database startup Kuzu, EU filing shows"
  - id: archived
    resource: https://biggo.com/news/202510130126_KuzuDB-embedded-graph-database-archived
    title: "BigGo: KuzuDB is suddenly archived (2025-10)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Kuzu came from Semih Salihoğlu's group at the University of Waterloo. It applied modern analytical-database techniques (columnar storage, vectorized and factorized execution, worst-case-optimal joins) to an embedded, in-process property-graph engine with Cypher. Its in-process model allowed applications to use graph queries without operating a separate server.[^repo] Kuzu Inc. was formed in Ontario in 2023 and had about ten employees. Apple agreed on October 9, 2025 to buy its shares and hire select staff, and the GitHub repository was archived on October 10, 2025 without warning to users[^ai][^mo][^repo]. Community forks (for example LadybugDB) tried to continue the codebase[^pavlo-2025].

# Timeline

| Year | Event |
|---|---|
| 2022–23 | Open-source release; Kuzu Inc. formed (2023)[^ai] |
| 2025 | Apple acquisition agreement (Oct 9); repo archived (Oct 10)[^ai][^repo] |

# What worked

- An embedded graph engine made specialized analytical techniques available as a library. The acquisition shows a company-level outcome; it does not reveal Apple's technical plans.[^ai]

# What didn't

- Single-company stewardship: the archived repository stopped normal upstream development.[^repo] A permissive license preserves the ability to fork, but not the staff, release process or support relationship.
- An acquisition can reward a team while leaving existing users with migration or maintenance work. That distinction prevents treating a purchase as unqualified success for every stakeholder.

# Related

- [Graph databases](/ideas/nosql-models/graph-databases.md)
- [Neo4j](/systems/neo4j.md), [DuckDB](/systems/duckdb.md)
- [Apple acquires Kuzu](/events/2025-10-apple-acquires-kuzu.md)
