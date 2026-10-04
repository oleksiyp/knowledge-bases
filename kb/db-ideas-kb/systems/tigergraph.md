---
type: System
title: TigerGraph
description: "A distributed, MPP-style native graph database with its own GSQL language, aimed at deep-link analytics. It raised over $170M by 2021 at the graph hype peak with later revenue outcomes not established by the collected evidence."
resource: https://www.tigergraph.com
tags: [graph, gsql, mpp, analytics]
kind: product
first_release: 2017
org: "TigerGraph Inc. (founded 2012 as GraphSQL)"
license: proprietary
outcome: stable
ideas: [ideas/nosql-models/graph-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tc
    resource: https://techcrunch.com/2021/02/17/tigergraph-raises-105m-series-c-for-its-enterprise-graph-database/
    title: "TechCrunch: TigerGraph raises $105M Series C (2021-02-17)"
  - id: wiki
    resource: https://en.wikipedia.org/wiki/TigerGraph
    title: "TigerGraph — Wikipedia"
  - id: tt
    resource: https://www.techtarget.com/searchbusinessanalytics/news/252520740/Tech-stock-sell-off-signals-tough-times-for-data-vendors
    title: "TechTarget: Tech stock sell-off signals tough times for data vendors (2022)"
---

# Summary

TigerGraph (founded in 2012 as GraphSQL) came out of stealth in September 2017 with $33M. It raised $32M more in 2019 and a $105M Series C led by Tiger Global in February 2021, bringing its total above $170M[^wiki][^tc]. Its pitch was a massively parallel native graph engine for multi-hop analytics on large graphs (fraud, supply chain, customer 360), queried with GSQL. In 2021 founder-CEO Yu Xu set a goal of tripling revenue and passing $100M ARR within three years[^tt]. This research did not verify whether that revenue target was reached. A funding round establishes investor commitment, not product-market dominance or a subsequent failure.

The specialist case is strongest when repeated traversals are central to the application and the working graph is large enough to justify a distributed engine. For simpler relationships, an additional graph platform must earn back its data-integration and operational cost. This is a workload-selection inference, not a claim that graph queries are intrinsically faster than SQL.

# Timeline

| Year | Event |
|---|---|
| 2017 | Emerges from stealth with $33M (Sep)[^wiki] |
| 2019 | $32M round[^wiki] |
| 2021 | $105M Series C (Feb)[^tc] |

# What worked

- A clear technical target: parallel multi-hop analytics rather than simply exposing relationships in a document API. The 2021 investment financed cloud and product expansion.[^tc]

# What didn't

- A distinct query language adds migration and training work. Whether its expressiveness or execution model offsets that cost depends on the workload.
- The disclosed fundraising does not justify calling the company failed or struggling. No comparable revenue series or verified shutdown was found. The narrower conclusion is that its technical ambition was better documented than its eventual commercial scale.

# Related

- [Graph databases](/ideas/nosql-models/graph-databases.md)
- [Neo4j](/systems/neo4j.md), [Dgraph](/systems/dgraph.md)
