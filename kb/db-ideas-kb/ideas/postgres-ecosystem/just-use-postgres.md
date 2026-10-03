---
type: Idea
title: "\"Just use Postgres\": one general-purpose database for most workloads"
description: "Use PostgreSQL by default, plus extensions, for relational, document, search, vector, queue and time-series workloads instead of running a separate specialized store for each. Verdict: won. Postgres became the most-used developer database and the default target for AI coding agents. The limits are single-primary write scaling and operational sharp edges that show up at very large scale."
tags: [postgres, consolidation, default-database, developer-adoption]
area: postgres-ecosystem
verdict: won
hype_peak: 2025
adoption_2026: mainstream
origins: "PostgreSQL descends from Berkeley POSTGRES (1986). Its extensibility (user types, index methods) predates 2018. The slogan spread through blog posts around 2022–2023."
key_systems: [systems/postgresql, systems/pgvector, systems/timescaledb, systems/paradedb, systems/pgmq, systems/supabase]
related_ideas: [ideas/postgres-ecosystem/extensions-as-platform, ideas/postgres-ecosystem/mysql-decline, ideas/postgres-ecosystem/postgres-hosting-consolidation, ideas/vector-ai/vector-search-as-a-feature, ideas/vector-ai/dedicated-vector-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dbe-2023
    resource: https://db-engines.com/en/blog_post/106
    title: "DB-Engines: PostgreSQL is the DBMS of the Year 2023"
    author: org:db-engines
  - id: dbe-2024
    resource: https://db-engines.com/en/blog_post/109
    title: "DB-Engines: Snowflake is the Database Management System of the Year 2024"
    author: org:db-engines
  - id: devclass-so2023
    resource: https://www.devclass.com/development/2023/06/13/postgresql-now-top-developer-choice-ahead-of-mysql-according-to-massive-new-survey/1623015
    title: "DevClass: PostgreSQL now top developer choice ahead of MySQL (SO survey 2023)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stackoverflow
  - id: amazingcto
    resource: https://www.amazingcto.com/postgres-for-everything/
    title: "Stephan Schmidt: Just Use Postgres for Everything"
  - id: magda-book
    resource: https://livebook.manning.com/book/just-use-postgres/title
    title: "Denis Magda: Just Use Postgres! All the database you need (Manning, 2025)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: infoq-openai
    resource: https://www.infoq.com/news/2026/02/openai-runs-chatgpt-postgres
    title: "InfoQ: OpenAI runs ChatGPT on a single-primary PostgreSQL (Feb 2026)"
    author: org:infoq
  - id: neon-dbx
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems
    title: "Databricks: Databricks Agrees to Acquire Neon (2025-05-14)"
    author: org:databricks
  - id: sb-series-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase: Series F (2026-06-04)"
    author: org:supabase
  - id: tsdb-multinode
    resource: https://github.com/timescale/timescaledb/blob/main/docs/MultiNodeDeprecation.md
    title: "TimescaleDB: Multi-node deprecation notice"
    author: org:timescale
  - id: case-against-pgvector
    resource: https://alex-jacobs.com/posts/the-case-against-pgvector/
    title: "Alex Jacobs: The Case Against pgvector (2025-10-29)"
---

# Summary
**Verdict: won.** Between 2018 and 2026 PostgreSQL went from "the other open-source database" to the default answer for new applications. DB-Engines named it DBMS of the Year in 2017, 2018, 2020 and 2023[^dbe-2023]. It passed MySQL in the Stack Overflow survey in 2023 (45.6% vs 41.1%)[^devclass-so2023] and reached 55.6% of all respondents in 2025[^so-2025]. By 2025–26 AI coding agents were creating most new databases on Postgres platforms: over 80% at Neon[^neon-dbx] and over 60% at Supabase[^sb-series-f]. The claim that Postgres can *replace* specialized systems held up for small and mid-size workloads, and for vectors it held up surprisingly well. It held up less well at the extremes: write scale-out, very large vector indexes and heavy analytics still push teams to other systems, or to Postgres-compatible systems that are not Postgres inside.

# The idea
Run one mature, open, well-understood database and add capabilities through extensions and built-in features: JSONB for documents, `tsvector` and extensions such as ParadeDB for search, pgvector for embeddings, TimescaleDB for time series, `SKIP LOCKED` and pgmq for queues, pg_cron for jobs, and UNLOGGED tables for caches. The promise is fewer moving parts, one backup, monitoring and security story, transactional consistency across features, and a hiring pool that already knows SQL. Stephan Schmidt's widely shared essay "Just Use Postgres for Everything" made the case to startups[^amazingcto]. By late 2025 Manning had published a 400-page book with the slogan as its title[^magda-book].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | PostgreSQL named DB-Engines DBMS of the Year again (also 2017, 2020)[^dbe-2023] | + |
| 2021 | pgvector first released (April) | + |
| 2023 | Postgres overtakes MySQL in the Stack Overflow survey, 45.6% vs 41.1%[^devclass-so2023]. DBMS of the Year 2023[^dbe-2023] | + |
| 2023 | Pavlo: adding vector search to an existing DBMS "is small enough" that vector vendors lack a moat[^pavlo-2023] | + |
| 2023–24 | TimescaleDB drops multi-node, its scale-out mode; only about 1% of deployments used it[^tsdb-multinode] | − |
| 2024 | Snowflake wins DBMS of the Year; Postgres second[^dbe-2024] | flat |
| 2025 | Databricks buys Neon (~$1B). Over 80% of Neon databases are created by agents[^neon-dbx] | + |
| 2025 | SO survey: Postgres 55.6% of respondents[^so-2025]. Pavlo: "most of the database energy" is in Postgres[^pavlo-2025] | + |
| 2025 | "The Case Against pgvector" lists production pain with filtering and index rebuilds[^case-against-pgvector] | − |
| 2026 | OpenAI describes running ChatGPT on one Postgres primary with about 50 replicas. New write-heavy workloads go to sharded systems[^infoq-openai] | +/− |

# What succeeded
- **Default status.** For new projects the question changed from "which database?" to "is there a reason *not* to use Postgres?" Survey data, DB-Engines and the money (see [Postgres hosting consolidation](/ideas/postgres-ecosystem/postgres-hosting-consolidation.md)) all point the same way.
- **Vectors.** pgvector turned Postgres into a credible vector store within about two years, and every major cloud Postgres added it. This is the clearest case of Postgres absorbing a whole "new database category"[^pavlo-2023].
- **Queues, jobs, documents.** `SKIP LOCKED` queues, pgmq, pg_cron and JSONB covered most small-team needs that once required Redis, RabbitMQ or MongoDB[^amazingcto].
- **AI agents.** LLMs write SQL for Postgres well because there is so much training data. Agent platforms default to it, and that reinforces the default[^neon-dbx][^sb-series-f].
- **Vertical headroom.** OpenAI's single-primary setup shows how far one Postgres writer plus replicas can go[^infoq-openai].

# What failed
- **Write scale-out remains outside core Postgres.** OpenAI moves new write-heavy workloads to Cosmos DB-style sharded stores[^infoq-openai]. Sharding is still bolted on: Citus, and from 2025 the new Multigres, Neki and PgDog projects[^pavlo-2025].
- **Extension-based scale-out disappointed.** TimescaleDB removed multi-node in 2.14 (2024) because almost nobody used it and it was hard to maintain[^tsdb-multinode].
- **"Good enough" has edges.** Practitioners report pgvector trouble with filtered queries, index memory and rebuilds at tens of millions of vectors[^case-against-pgvector]. Analytics inside Postgres needed foreign engines like DuckDB (see [Analytics inside Postgres](/ideas/postgres-ecosystem/analytics-inside-postgres.md)).
- **Operational debt.** VACUUM, bloat, transaction-ID wraparound and connection limits are still the main complaints. They are the reason for the [storage-engine replacement](/ideas/postgres-ecosystem/pluggable-storage-engines.md) efforts and for poolers such as PgBouncer.

# Why
1. **Neutral governance plus a permissive license.** No single company owns Postgres, so AWS, Google, Microsoft, Databricks, Snowflake and startups could all build on it without strengthening a rival. MySQL (owned by Oracle) and MongoDB (SSPL) could not offer that. See [MySQL decline](/ideas/postgres-ecosystem/mysql-decline.md).
2. **Extensibility designed in from the start** (custom types, operators, index access methods, hooks). New categories such as vectors arrived as extensions, not forks. See [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md).
3. **Hardware outgrew most workloads.** A single NVMe-backed box with hundreds of cores serves what needed a cluster in 2012. This makes "one node plus replicas" viable much longer.
4. **Distribution through managed services and agents.** Every cloud sells Postgres, and coding agents pick it. Defaults compound.
5. **The limits follow from the architecture.** A process-per-connection, heap-plus-VACUUM, single-writer design is excellent at moderate scale and costly at the extremes. That is why "Postgres-compatible" systems with different internals keep appearing.

# Lessons
- A neutral, permissively licensed core with a real extension API can absorb new categories (vectors, queues, search) faster than startups can build moats.
- "Use one database" wins on total cost of ownership, not on benchmarks. Specialized systems survive only where scale or latency needs are extreme.
- Defaults compound: surveys, cloud catalogs and LLM training data all reinforce the incumbent.

# Related
- [PostgreSQL](/systems/postgresql.md), [pgvector](/systems/pgvector.md), [TimescaleDB](/systems/timescaledb.md), [ParadeDB](/systems/paradedb.md), [pgmq](/systems/pgmq.md), [Supabase](/systems/supabase.md)
- [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md), [Postgres hosting consolidation](/ideas/postgres-ecosystem/postgres-hosting-consolidation.md), [MySQL decline](/ideas/postgres-ecosystem/mysql-decline.md)
- [Vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md), [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md)
- [Postgres tops Stack Overflow survey (2023)](/events/2023-06-postgres-tops-stack-overflow-survey.md)
