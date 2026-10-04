---
type: Idea
title: "The 2021 database funding boom and the 2023–2026 consolidation"
description: "In 2020–2022 investors funded dozens of independent database companies at multi-billion valuations on the theory that each data model or workload could support a large standalone vendor. Verdict: the broad expectation of independent public companies did not materialize uniformly. Capital concentrated in several platforms while selected vendors were acquired or shut down; this is not a measured failure rate for the full funding cohort."
tags: [funding, venture-capital, valuations, consolidation, private-equity, startups]
area: business-licensing
verdict: failed
hype_peak: 2021
adoption_2026: rare
origins: "Low interest rates and Snowflake's 2020 IPO, which showed a database company could be worth $70B, triggered the 2021 rush."
key_systems: [systems/cockroachdb, systems/yugabytedb, systems/neo4j, systems/redis, systems/singlestore, systems/datastax, systems/fauna, systems/databricks, systems/clickhouse, systems/supabase]
related_ideas: [ideas/business-licensing/database-company-graveyard, ideas/business-licensing/database-acquisitions-as-ai-acquihires, ideas/business-licensing/database-company-ipos]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: neo4j-f
    resource: https://neo4j.com/press-releases/neo4j-announces-seriesf-funding/
    title: "Neo4j announces $325M Series F (June 2021)"
  - id: redis-g
    resource: https://www.theregister.com/2021/04/07/redis_labs_doubles_value_to/
    title: "The Register: Redis Labs doubles value to $2B with $110M Series G (2021-04-07)"
  - id: crdb-f
    resource: https://www.cockroachlabs.com/news/press-release-series-f-funding/
    title: "Cockroach Labs: $278M Series F at $5B valuation (Dec 2021)"
  - id: datastax-2022
    resource: https://news.crunchbase.com/cloud/datastax-valuation-unicorn-vc-goldman/
    title: "Crunchbase News: DataStax raises $115M at $1.6B valuation (June 2022)"
  - id: singlestore-vector
    resource: https://www.singlestore.com/blog/a-new-chapter-for-singlestore-accelerating-our-growth-with-vector-capital/
    title: "SingleStore: A new chapter with Vector Capital (2025)"
  - id: singlestore-bnf
    resource: https://www.blocksandfiles.com/ai-ml/2025/09/17/singlestore-sidesteps-into-private-equity-ownership/1589537
    title: "Blocks & Files: SingleStore sidesteps into private equity ownership (2025-09-17)"
  - id: fauna-reg
    resource: https://www.theregister.com/2025/03/24/faunadb_shut_down/
    title: "The Register: FaunaDB shutters but hints at open source future (2025-03-24)"
  - id: couchbase-close
    resource: https://www.couchbase.com/press-releases/haveli-investments-completes-acquisition-of-couchbase/
    title: "Couchbase: Haveli completes acquisition (2025-09-24)"
  - id: cnbc-dbx-190
    resource: https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html
    title: "CNBC: Databricks wraps $5B round at $190B valuation (2026-08-13)"
  - id: bbg-clickhouse
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse lands $15B valuation (2026-01-16)"
  - id: supabase-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase Series F (2026-06-04)"
  - id: ibm-datastax
    resource: https://www.theregister.com/2025/02/25/ibm_datastax/
    title: "The Register: IBM plans to buy DataStax (2025-02-25)"
---

# Summary

**Verdict: failed as a broad expectation of independent IPOs, with substantial exceptions.** In 2021 database companies raised record rounds: Databricks $1.6B at $38B, Cockroach Labs $160M and then $278M at $5B, Neo4j $325M at over $2B ("the largest investment in a private database company"), Yugabyte $188M at over $1.3B, ClickHouse Inc. $250M, Firebolt $127M, Redis Labs $110M at $2B.[^pavlo-2021][^neo4j-f][^redis-g][^crdb-f] The bet was that every niche (distributed SQL, graph, time series, document, real-time analytics) would produce its own standalone public company. That did not happen. By 2023 VCs "wrote fewer checks", and Pavlo predicted the over-funded vendors would face down rounds, private equity or "maintenance mode".[^pavlo-2023] Between 2024 and 2026 DataStax went to IBM, Couchbase and SingleStore to private equity, and Fauna shut down. In the same years capital concentrated in a handful of winners: Databricks ($190B), ClickHouse ($15B) and Supabase ($10.5B).[^cnbc-dbx-190][^bbg-clickhouse][^supabase-f]

# The idea

Cheap capital plus the cloud-database growth story implied a "database for every workload" world. Each new data model could become a MongoDB-sized company. Large funding rounds implied demanding growth expectations, but the cited examples do not establish one valuation multiple for the entire category.

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2020 | Snowflake IPO sets the valuation ceiling | + |
| 2021 | Redis $110M at $2B (Apr); Neo4j $325M at >$2B (Jun); Databricks $1.6B at $38B (Aug); Cockroach $278M at $5B (Dec)[^redis-g][^neo4j-f][^pavlo-2021][^crdb-f] | + (peak) |
| 2022 | DataStax $115M at $1.6B (Jun)[^datastax-2022]; rate hikes begin | mixed |
| 2023 | VCs see more pitches, write fewer checks; MariaDB plc down ~90% after SPAC[^pavlo-2023] | − |
| 2023 | Vector databases are the exception: Pinecone $100M, Weaviate $50M[^pavlo-2023] | + (narrow) |
| 2024 | OtterTune dies; Rockset and Tabular sold; Databricks raises a $10B Series J[^pavlo-2024] | mixed |
| 2025 | IBM buys DataStax; Fauna shuts down; Couchbase and SingleStore go to PE[^ibm-datastax][^fauna-reg][^couchbase-close][^singlestore-bnf] | − |
| 2026 | Databricks $190B, ClickHouse $15B, Supabase $10.5B[^cnbc-dbx-190][^bbg-clickhouse][^supabase-f] | + (for few) |

# What succeeded

- **Platforms that broadened.** Databricks moved from Spark to warehouse, catalog, AI and (with Neon) Postgres. ClickHouse added observability and LLM tooling. Supabase became a full backend. Breadth, not a better engine, carried the high valuations.
- **Capital-efficient survivors.** Companies that raised modest amounts and found a niche (DuckDB Labs, TigerBeetle, ParadeDB) did not face the same pressure.
- **Private equity as a soft landing.** SingleStore's buyer said it was reporting $123M ARR, +23%, with over $150M cash; it was a sale, not a failure.[^singlestore-bnf]

# What failed

- **Category-sized companies.** Graph, time-series, distributed SQL and multi-model vendors each found real customers but rarely more than a few hundred million in revenue. The selected examples show that a large private round does not itself establish a near-term IPO path.
- **Valuation resets.** Couchbase sold for about $1.5B in 2025, roughly its 2021 IPO price.[^couchbase-close] DataStax, valued at $1.6B in 2022,[^datastax-2022] sold to IBM at an undisclosed price (reported around $3B; unconfirmed).
- **Shutdowns of well-funded technology.** Fauna had raised from top investors and still concluded it was "not possible to raise the capital needed".[^fauna-reg] See the [graveyard](/ideas/business-licensing/database-company-graveyard.md).

# Why

1. **Postgres absorbed the niches.** Extensions (pgvector, TimescaleDB, PostGIS, Citus) and Postgres-compatible products took the "good enough" share of graph, time-series, vector and distributed workloads. Pavlo: "most of the database energy and activity is going into PostgreSQL companies".[^pavlo-2025]
2. **Hyperscalers sell the default.** Aurora, DynamoDB, Cosmos DB and Spanner are bundled into cloud commitments. An independent vendor must be much better to win against a default that procurement has already approved.
3. **Database sales cycles are long.** Migrating a system of record takes years, so revenue ramps more slowly than 2021 valuations assumed.
4. **Rate increases in 2022 removed the multiple, and AI took the remaining capital.** AI-related positioning became prominent in several large rounds; the examples do not show that all other companies were excluded from funding.

# Lessons

- A new data model is a feature, not a company, unless it creates a new platform.
- Over-capitalization narrows exits: a large gap between a prior valuation and an exit price can create difficult investor incentives; actual shareholder proceeds depend on financing terms.
- Watch where capital concentrates in 2025–2026 (Postgres, lakehouse, agent backends) for the next consolidation wave.

# Related

- [Database company graveyard](/ideas/business-licensing/database-company-graveyard.md) · [AI acquihires](/ideas/business-licensing/database-acquisitions-as-ai-acquihires.md) · [Database company IPOs](/ideas/business-licensing/database-company-ipos.md)
- Events: [Neo4j Series F](/events/2021-06-neo4j-series-f.md), [Cockroach Series F](/events/2021-12-cockroach-labs-series-f.md), [SingleStore sold to Vector Capital](/events/2025-09-singlestore-vector-capital-buyout.md), [Couchbase taken private](/events/2025-09-couchbase-taken-private.md)

[^pavlo-2021]: Andy Pavlo, Databases in 2021.
[^pavlo-2023]: Andy Pavlo, Databases in 2023.
[^pavlo-2024]: Andy Pavlo, Databases in 2024.
[^pavlo-2025]: Andy Pavlo, Databases in 2025.
[^neo4j-f]: Neo4j press release, June 2021.
[^redis-g]: The Register, 2021-04-07.
[^crdb-f]: Cockroach Labs press release, Dec 2021.
[^datastax-2022]: Crunchbase News, June 2022.
[^singlestore-vector]: SingleStore blog, 2025.
[^singlestore-bnf]: Blocks & Files, 2025-09-17.
[^fauna-reg]: The Register, 2025-03-24.
[^couchbase-close]: Couchbase press release, 2025-09-24.
[^cnbc-dbx-190]: CNBC, 2026-08-13.
[^bbg-clickhouse]: Bloomberg, 2026-01-16.
[^supabase-f]: Supabase blog, 2026-06-04.
[^ibm-datastax]: The Register, 2025-02-25.
