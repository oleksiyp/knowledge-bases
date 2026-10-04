---
type: Idea
title: "Native graph databases"
description: "Graph databases got a standard (GQL, ISO 2024), a SQL extension (SQL/PGQ, 2023) and a GenAI bump through GraphRAG, but they stayed a niche. Neo4j reached about $200M ARR while most challengers were sold, stalled or archived (Dgraph sold twice, Kuzu archived after Apple bought it in 2025), and relational engines started adding graph queries."
tags: [graph, neo4j, cypher, gql, sql-pgq, graphrag, property-graph]
area: nosql-models
verdict: niche
hype_peak: 2021
adoption_2026: niche
origins: "Neo4j (2007), property-graph model, Cypher (2011), Gremlin/TinkerPop, RDF triple stores"
key_systems: [systems/neo4j, systems/tigergraph, systems/dgraph, systems/kuzu, systems/arangodb, systems/postgresql]
related_ideas: [ideas/nosql-models/multi-model-databases, ideas/nosql-models/sql-nosql-convergence, ideas/vector-ai/rag-stack-consolidation-and-graphrag]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: repo
    resource: https://github.com/kuzudb/kuzu
    title: "Kuzu repository, archived October 10, 2025"
  - id: gql-iso
    resource: https://www.iso.org/standard/76120.html
    title: "ISO/IEC 39075:2024 GQL"
  - id: neo-primary
    resource: https://www.prnewswire.co.uk/news-releases/neo4j-surpasses-200m-in-revenue-accelerates-leadership-in-genai-driven-graph-technology-302309847.html
    title: "Neo4j announces more than USD 200 million ARR, November 2024"
  - id: neo-325
    resource: https://www.techtarget.com/searchdatamanagement/news/252502625/Neo4j-raises-325M-in-funding-to-advance-graph-database
    title: "TechTarget: Neo4j raises $325M in funding (2021-06)"
  - id: neo-200
    resource: https://techcrunch.com/2024/11/19/database-startup-neo4j-embraces-ai-to-supercharge-growth/
    title: "TechCrunch: Database startup Neo4j embraces AI to supercharge growth (2024-11-19)"
  - id: neo-200b
    resource: https://itbrief.co.uk/story/neo4j-achieves-usd-200-million-annual-recurring-revenue
    title: "IT Brief: Neo4j achieves USD $200 million annual recurring revenue"
  - id: tg-105
    resource: https://techcrunch.com/2021/02/17/tigergraph-raises-105m-series-c-for-its-enterprise-graph-database/
    title: "TechCrunch: TigerGraph raises $105M Series C (2021-02-17)"
  - id: gql-tns
    resource: https://thenewstack.io/gql-a-new-iso-standard-for-querying-graph-databases/
    title: "The New Stack: GQL, a new ISO standard for querying graph databases"
  - id: gql-wiki
    resource: https://en.wikipedia.org/wiki/Graph_Query_Language
    title: "Graph Query Language — Wikipedia (ISO/IEC 39075:2024, published April 2024)"
  - id: sql2023
    resource: https://en.wikipedia.org/wiki/SQL:2023
    title: "SQL:2023 — Wikipedia (Part 16 SQL/PGQ)"
  - id: oracle-pgq
    resource: https://blogs.oracle.com/database/property-graphs-in-oracle-database-23ai-the-sql-pgq-standard
    title: "Oracle: Property graphs in Oracle Database 23ai — the SQL/PGQ standard"
    author: org:oracle
  - id: pg19-revert
    resource: https://www.commandprompt.com/blog/two-features-just-left-postgresql-19/
    title: "Command Prompt: Two features just left PostgreSQL v19 (2026-09)"
  - id: dgraph-istari
    resource: https://www.prnewswire.com/news-releases/istari-digital-acquires-dgraph-to-strengthen-data-foundation-for-ai-and-engineering-302593246.html
    title: "Istari Digital acquires Dgraph (2025-10-23)"
  - id: kuzu-apple
    resource: https://appleinsider.com/articles/26/02/11/faster-more-flexible-databases-could-be-coming-to-filemaker-or-iwork
    title: "AppleInsider: Why has Apple bought a database company? (2026-02-11)"
  - id: kuzu-archived
    resource: https://biggo.com/news/202510130126_KuzuDB-embedded-graph-database-archived
    title: "BigGo: KuzuDB, the promising embedded graph database, is suddenly archived (2025-10)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: neo-ongdb
    resource: https://www.theregister.com/2022/03/17/court_open_source/
    title: "The Register: Court rules it's false advertising to call Neo4j fork ONgDB open source (2022-03-17)"
    author: org:the-register
---

# Summary

**Verdict: niche, with durable specialist demand.** From 2018 to 2026 graph databases got more money and standards work than ever. Neo4j raised $325M in 2021, then the largest private database round[^neo-325]. TigerGraph raised $105M[^tg-105]. ISO published GQL in April 2024, the first new ISO database language since SQL[^gql-iso]. GraphRAG gave the category a GenAI story. Neo4j crossed $200M ARR in 2024[^neo-primary]. Still, the category stayed small next to relational, document and key-value stores, and the challenger ecosystem thinned out. Dgraph was sold twice, and Pavlo wrote he had never met "anybody who is actively using Dgraph"[^pavlo-2025]. Kuzu, an embedded analytical engine, was bought by Apple and archived overnight in October 2025[^repo]. Meanwhile SQL itself gained graph pattern matching (SQL/PGQ, SQL:2023[^sql2023], shipped in Oracle 23ai[^oracle-pgq]), which attacks the main reason to run a separate graph database.

# The idea

Model data as nodes and relationships with properties, and use layouts optimized for adjacency traversal (implementation details vary) to reduce repeated adjacency lookup work; fan-out, path length and result size still determine cost. Query with pattern languages (Cypher, Gremlin, GSQL, now GQL) that express paths more naturally than recursive SQL. Target uses include fraud rings, recommendations, network/IT topology, knowledge graphs, identity and access, and supply chains.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Neo4j moves Enterprise Edition from AGPL to AGPL + Commons Clause, then closed; the ONgDB fork and lawsuits follow[^neo-ongdb] | − |
| 2019 | ISO approves the GQL standards project[^gql-iso] | + |
| 2021 | TigerGraph $105M Series C (Feb)[^tg-105]; Neo4j $325M Series F at $2B+ valuation (Jun)[^neo-325] | + (hype peak) |
| 2022 | Court rules ONgDB cannot be called "free and open source" Neo4j[^neo-ongdb] | ~ |
| 2023 | SQL:2023 published with Part 16, SQL/PGQ (Jun)[^sql2023]; Dgraph Labs acquired by Hypermode (Nov)[^dgraph-istari] | mixed |
| 2024 | GQL published as ISO/IEC 39075:2024 (Apr)[^gql-iso]; Oracle 23ai ships SQL/PGQ[^oracle-pgq]; Neo4j passes $200M ARR, citing GenAI/GraphRAG demand (Nov)[^neo-primary] | + |
| 2025 | Apple buys Kuzu (Oct 9); Kuzu repo archived (Oct 10)[^kuzu-apple][^repo]; Istari Digital buys Dgraph from Hypermode (Oct 23)[^dgraph-istari] | − |
| 2026 | SQL/PGQ committed to PostgreSQL 19 (Mar) and then reverted before release (Sep) over design issues[^pg19-revert] | mixed |

# What succeeded

- **Neo4j as the category leader.** It doubled ARR in three years to $200M, holds a large share of graph DBMS mindshare, and expected to turn cash-flow positive[^neo-200b]. It turned "knowledge graph for LLMs" (GraphRAG) into a sales motion.
- **Standardization.** GQL, largely shaped by Cypher's design, gives the category a vendor-neutral language, and SQL/PGQ gives relational vendors a way in[^gql-tns].
- **Embedded/analytical graph research.** Kuzu (Waterloo) showed modern columnar and factorized techniques make graph analytics fast in-process. The acquisition and archive show divergent company and community outcomes; they do not disclose Apple's valuation or intended use[^kuzu-apple].

# What failed

- **Graph as a general-purpose primary database.** The cited evidence establishes specialist use and a successful leader, not displacement of relational systems. It does not provide a census of primary versus secondary graph deployments.
- **Venture-scale challengers.** TigerGraph raised over $170M by 2021; comparable realized revenue is not established by the sources.[^tg-105] Dgraph changed owners twice[^dgraph-istari][^pavlo-2025]. Kuzu's users were left with an archived repo and community forks[^repo].
- **Postgres-native graph queries (so far).** Postgres 19's SQL/PGQ was pulled weeks before release[^pg19-revert], so the main open-source relational engine still lacks standard graph syntax.

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **Traversal depth changes the trade-off.** Shallow relationships often fit indexed joins. Deep, selective pattern queries can justify a dedicated graph layout, while high fan-out can overwhelm either approach.
2. **Data gravity.** The data already lives in relational or document systems. Copying it into a separate graph store adds ETL, consistency and operations costs, which is why "graph views over existing tables" (SQL/PGQ, PuppyGraph-style engines) are attractive.
3. **Language fragmentation until 2024.** Cypher, Gremlin, GSQL, SPARQL and AQL split the ecosystem and tooling. GQL arrived late.
4. **AI demand does not settle engine choice.** Neo4j attributed growth to GenAI, but GraphRAG is an application architecture, not proof that every retrieval workload needs a graph-native system of record.[^neo-primary]

# Lessons

- A specialist database can be valuable without replacing the system of record. Its query benefits must justify synchronization and operational costs.
- When the incumbent query language (SQL) can absorb your syntax, you have a deadline.
- Embedded, MIT-licensed projects owned by one startup can vanish overnight on acquisition. Governance matters to adopters.

# Related

- [Neo4j](/systems/neo4j.md), [TigerGraph](/systems/tigergraph.md), [Dgraph](/systems/dgraph.md), [Kuzu](/systems/kuzu.md), [ArangoDB](/systems/arangodb.md)
- Events: [GQL becomes an ISO standard](/events/2024-04-gql-iso-standard.md), [Apple acquires Kuzu](/events/2025-10-apple-acquires-kuzu.md)
- [Multi-model databases](/ideas/nosql-models/multi-model-databases.md), [SQL/NoSQL convergence](/ideas/nosql-models/sql-nosql-convergence.md)
