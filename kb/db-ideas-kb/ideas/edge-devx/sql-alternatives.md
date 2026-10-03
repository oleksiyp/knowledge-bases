---
type: Idea
title: "Replacing SQL with a better query language"
description: "New query languages meant to replace or sit above SQL: PRQL, Malloy, EdgeQL (EdgeDB/Gel), GraphQL-as-database-API, FQL. Verdict: failed as replacements. SQL absorbed the best idea, pipelined syntax, through Google's pipe syntax (2024), which spread to BigQuery, Spark/Databricks and others, while the standalone languages stayed niche or died with their companies."
tags: [sql, query-languages, prql, malloy, edgeql, pipe-syntax]
area: edge-devx
verdict: failed
hype_peak: 2023
adoption_2026: rare
origins: "QUEL and many earlier SQL challengers lost to SQL in the 1980s; 2010s NoSQL query APIs largely re-added SQL by 2018."
key_systems: [systems/prql, systems/malloy, systems/edgedb-gel, systems/fauna, systems/bigquery, systems/hasura]
related_ideas: [ideas/edge-devx/type-safe-orms, ideas/vector-ai/text-to-sql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pipe-paper
    resource: https://vldb.org/pvldb/vol17/p4051-shute.pdf
    title: "Shute et al.: SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL (PVLDB 17(12), 2024)"
    author: org:google
  - id: databricks-pipe
    resource: https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-pipeline
    title: "Databricks docs: SQL pipeline syntax"
    author: org:databricks
  - id: prql-changelog
    resource: https://prql-lang.org/book/project/changelog.html
    title: "PRQL changelog"
  - id: ch-237
    resource: https://clickhouse.com/blog/clickhouse-release-23-07
    title: "ClickHouse release 23.7 (experimental PRQL dialect)"
    author: org:clickhouse
  - id: npm-prql
    resource: https://api.npmjs.org/downloads/point/last-week/prql-js
    title: "npm download API: prql-js, week ending 2026-10-01"
  - id: tabb-meta
    resource: https://x.com/lloydtabb/status/1786784460702376077
    title: "Lloyd Tabb: starting at Meta to work on Malloy (May 2024)"
    author: person:lloyd-tabb
  - id: gel-rename
    resource: https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future
    title: "EdgeDB is now Gel and Postgres is the future (2025-02-25)"
    author: org:gel
  - id: gel-vercel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: "Gel joins Vercel (2025-12-02)"
    author: org:gel
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: gh-stars
    resource: https://github.com/PRQL/prql
    title: "PRQL, Malloy and Gel GitHub repositories (stars and last-push dates as of 2026-10-03)"
---

# Summary
**Failed as replacements; SQL absorbed the good idea.** 2021–2023 brought a run of serious attempts to fix SQL's well-known flaws: clause order that doesn't match data flow, awkward composition, verbose joins and nesting. PRQL offered a pipelined language that compiles to SQL. Malloy, from Looker's founder Lloyd Tabb at Google, offered a semantic-model-plus-query language. EdgeDB's EdgeQL offered graph-relational queries over Postgres. Fauna offered FQL. None broke out. PRQL kept a following (about 10.9k GitHub stars[^gh-stars]) and an experimental ClickHouse dialect[^ch-237], but its JavaScript binding saw about 1,100 weekly downloads[^npm-prql]. EdgeDB renamed itself Gel in February 2025 and added native SQL, saying "Postgres is the future"[^gel-rename]. It then shut its cloud and joined Vercel in December 2025[^gel-vercel]. Fauna shut down in 2025, and Pavlo pointed to its "proprietary query language" and GraphQL bets[^pavlo-2025]. Meanwhile Google published "SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL" (VLDB 2024)[^pipe-paper], shipped `|>` in BigQuery, F1, Spanner and Procella, and Databricks/Spark 4.0 followed[^databricks-pipe]. **SQL won again by extending itself.**

# The idea
SQL is 50 years old, non-composable and hard to read. A modern language could be easier to write, easier to compile, and closer to how analysts think (a pipeline of transformations) or how apps use data (object graphs). Compile it to SQL so it runs on any engine.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2021–22 | Malloy (Google) and PRQL announced. EdgeDB 1.0 (2022) | + |
| 2023 | ClickHouse 23.7 adds an experimental PRQL dialect[^ch-237] | + |
| 2024 | Pipe syntax paper at VLDB; `|>` shipped in BigQuery and other Google engines[^pipe-paper]. Tabb moves to Meta to work on Malloy (May)[^tabb-meta] | + for SQL |
| 2025 | Spark 4.0 / Databricks pipe syntax[^databricks-pipe]. EdgeDB → Gel with full SQL (Feb)[^gel-rename]. Fauna shuts down. Gel Cloud closes; team joins Vercel (Dec)[^gel-vercel] | − for alternatives |
| 2026 | Gel repository dormant since Dec 2025. PRQL still releasing 0.13.x[^prql-changelog][^gh-stars] | − |

# What succeeded
- **Pipelined syntax as an idea.** It moved into SQL itself without breaking anything. The paper's key argument is that pipes can be added "without removing anything", keeping the ecosystem[^pipe-paper].
- **Semantic layers** (Malloy's real contribution) influenced the metrics-layer category and LLM-facing semantic models, even if Malloy itself stayed small.
- **Type-safe query builders** in host languages (see [ORMs](/ideas/edge-devx/type-safe-orms.md)) captured much of the "better than raw SQL" demand without a new language.

# What failed
- **Standalone languages.** Every database-coupled language (EdgeQL, FQL) died with its company's service. Compile-to-SQL languages (PRQL, Malloy) survived as niche tools.
- **GraphQL as a database interface** stayed an API-layer concern (Hasura, PostGraphile). It did not become a query language for databases.

# Why
SQL's moat is ecosystem, not syntax: every BI tool, driver, ORM, optimizer, DBA and, after 2023, every LLM speaks it. LLMs widened that moat. Text-to-SQL works because models trained on decades of SQL, and nobody has a corpus of PRQL. A new language must be ten times better to pay switching costs, and pipe syntax showed you can get much of the readability benefit at near-zero switching cost. Coupling a language to a new database (EdgeDB, Fauna) multiplied the risk: users had to adopt both. Gel's founder named the result "category confusion" and "boiling the ocean"[^gel-vercel].

# Lessons
- Extending the incumbent standard beats replacing it. Pipe syntax succeeded where PRQL did not.
- Never couple a new query language to a new storage engine in one product.
- In the LLM era, how much training data exists for a language is a real adoption factor.

# Related
[PRQL](/systems/prql.md) · [Malloy](/systems/malloy.md) · [Gel (EdgeDB)](/systems/edgedb-gel.md) · [Fauna](/systems/fauna.md) · [BigQuery](/systems/bigquery.md) · [Pipe syntax paper](/papers/2024-pipe-syntax-in-sql.md) · [Gel shutdown](/events/2025-12-gel-joins-vercel.md) · [Text-to-SQL](/ideas/vector-ai/text-to-sql.md) · [Semantic layers](/ideas/analytics-lakehouse/semantic-layers.md)
