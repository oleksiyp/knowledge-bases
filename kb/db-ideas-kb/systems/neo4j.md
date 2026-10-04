---
type: System
title: Neo4j
description: "The dominant native graph database and creator of Cypher, which largely shaped the GQL ISO standard. It raised $325M in 2021, passed $200M ARR in 2024 on GraphRAG demand, demonstrating a substantial specialist business."
resource: https://neo4j.com
tags: [graph, cypher, gql, graphrag, property-graph]
kind: product
first_release: 2007
org: "Neo4j, Inc."
license: "GPLv3 (Community); commercial (Enterprise, AuraDB)"
outcome: thriving
ideas: [ideas/nosql-models/graph-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: gql-iso
    resource: https://www.iso.org/standard/76120.html
    title: "ISO/IEC 39075:2024 GQL"
  - id: neo-primary
    resource: https://www.prnewswire.co.uk/news-releases/neo4j-surpasses-200m-in-revenue-accelerates-leadership-in-genai-driven-graph-technology-302309847.html
    title: "Neo4j announces more than USD 200 million ARR, November 2024"
  - id: f
    resource: https://www.techtarget.com/searchdatamanagement/news/252502625/Neo4j-raises-325M-in-funding-to-advance-graph-database
    title: "TechTarget: Neo4j raises $325M (2021-06)"
  - id: arr
    resource: https://techcrunch.com/2024/11/19/database-startup-neo4j-embraces-ai-to-supercharge-growth/
    title: "TechCrunch: Neo4j embraces AI to supercharge growth (2024-11-19)"
  - id: arr2
    resource: https://itbrief.co.uk/story/neo4j-achieves-usd-200-million-annual-recurring-revenue
    title: "IT Brief: Neo4j achieves USD $200M ARR"
  - id: court
    resource: https://www.theregister.com/2022/03/17/court_open_source/
    title: "The Register: Court — false advertising to call ONgDB open source (2022-03-17)"
    author: org:the-register
  - id: neo-gql
    resource: https://neo4j.com/blog/cypher-and-gql/gql-database-language-standard/
    title: "Neo4j: Creating the GQL database language standard"
    author: org:neo4j
---

# Summary

Neo4j is a clear commercial success in native graph databases. In 2018 it moved Enterprise Edition from AGPL to AGPL plus Commons Clause and then to closed source. It sued the ONgDB fork's backers and won rulings that the fork could not be marketed as "free and open source" Neo4j[^court]. Its $325M Series F in June 2021, led by Eurazeo with GV, valued it above $2B and was described as the largest private database round to that date[^f]. In November 2024 it reported more than $200M ARR, double in three years, with fivefold growth in cloud demand and expected cash-flow break-even[^neo-primary][^arr2]. It credited GenAI knowledge-graph and GraphRAG use cases. Neo4j drove the GQL standard (ISO/IEC 39075:2024), which is largely based on Cypher's pattern syntax[^neo-gql].

# Timeline

| Year | Event |
|---|---|
| 2018 | Enterprise license changes; ONgDB fork and litigation begin[^court] |
| 2021 | $325M Series F, $2B+ valuation (Jun)[^f] |
| 2024 | GQL published as ISO standard; $200M ARR (Nov)[^neo-primary] |

# What worked

- Developer-friendly Cypher and early category ownership.
- Pivoting messaging to knowledge graphs for LLMs at the right moment.
- AuraDB managed service.

# What didn't

- A substantial specialist business is not evidence that graph storage displaces relational systems. ARR also should not be directly compared with another vendor's annual recognized revenue.
- Enterprise licensing and the ONgDB dispute complicated the promise of an unrestricted fork; legal outcomes should be read in the specific license and marketing context.[^court]

# Related

- [Graph databases](/ideas/nosql-models/graph-databases.md)
- [TigerGraph](/systems/tigergraph.md), [Kuzu](/systems/kuzu.md), [Dgraph](/systems/dgraph.md)
- [GQL becomes an ISO standard](/events/2024-04-gql-iso-standard.md)
