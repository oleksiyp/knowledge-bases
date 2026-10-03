---
type: Domain Review
title: "Open Source Databases & Vector DBs: 2-year review (Oct 2024 – Oct 2026)"
description: "Postgres won and the AI-agent 'database per agent' land grab produced $1B+ acquisitions and a $10.5B Supabase. Meanwhile MySQL entered a governance crisis, CockroachDB went fully closed, and standalone vector databases commoditised."
domain: databases
tags: [databases, postgres, mysql, olap, vector-database, ai-agents, licensing, m-and-a]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: Stack Overflow Developer Survey 2025 — databases
  - id: pg18
    resource: https://www.postgresql.org/about/news/postgresql-18-released-3142/
    title: PostgreSQL 18 Released
  - id: neon-dbx
    resource: https://finance.yahoo.com/news/databricks-buy-startup-neon-1-094745186.html
    title: "Reuters/Yahoo: Databricks to buy Neon for $1 billion"
  - id: crunchy
    resource: https://www.cnbc.com/2025/06/02/snowflake-to-buy-crunchy-data-250-million.html
    title: "CNBC: Snowflake to buy Crunchy Data for about $250M"
  - id: sb-f
    resource: https://supabase.com/blog/supabase-series-f
    title: Supabase Series F
  - id: sb-turso
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: Turso is joining Supabase
  - id: ch-15b
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse lands $15B valuation"
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: DuckLabs to Join AWS
  - id: mysql-layoffs
    resource: https://www.theregister.com/2025/09/11/oracle_slammed_for_mysql_job/
    title: "The Register: Oracle's MySQL job cuts"
  - id: oursql
    resource: https://www.theregister.com/databases/2026/05/26/mysql-faithful-launch-oursql-foundation-to-keep-oracle-honest/5246451
    title: "The Register: OurSQL Foundation"
  - id: mysql-gov
    resource: https://www.theregister.com/databases/2026/06/26/oracle-promises-to-open-up-mysql-governance-but-the-community-wants-guarantees/5263106
    title: "The Register: Oracle promises to open up MySQL governance"
  - id: crdb-private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: Protecting source code in the age of AI"
  - id: neon-gh
    resource: https://github.com/neondatabase/neon
    title: Neon GitHub commit history (GitHub API)
  - id: pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest rescue"
  - id: mdb-q2
    resource: https://www.sec.gov/Archives/edgar/data/0001441816/000162828026059794/mdb-073126xex991xrelease.htm
    title: MongoDB Q2 FY2027 results
  - id: mdb-ceo
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828026063657/mdb-20260924.htm
    title: MongoDB 8-K CEO resignation
  - id: pinecone
    resource: https://www.theinformation.com/articles/top-funded-ai-database-startup-pinecone-considers-sale
    title: "The Information: Top-Funded AI Database Startup Pinecone Considers a Sale (Aug 2025)"
  - id: pinecone-calcalist
    resource: https://www.calcalistech.com/ctechnews/article/rz31q82b5
    title: "Calcalist: AI database startup Pinecone weighs sale amid rising competition (2025-08-31)"
  - id: pinecone-ceo
    resource: https://www.techtarget.com/searchdatamanagement/news/366631366/Vector-database-vendor-Pinecone-eyes-future-under-new-CEO
    title: "TechTarget: Vector database vendor Pinecone eyes future under new CEO (2025-09-08)"
  - id: dbx-neon-pr
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems
    title: "Databricks press release: Databricks Agrees to Acquire Neon (2025-05-14)"
  - id: mdb-meta
    resource: https://siliconangle.com/2026/09/28/meta-hires-mongodb-ceo-cj-desai-to-lead-new-enterprise-ai-business/
    title: "SiliconANGLE: Meta hires MongoDB CEO CJ Desai to lead new enterprise AI business (2026-09-28)"
  - id: mongobleed
    resource: https://thehackernews.com/2025/12/mongodb-vulnerability-cve-2025-14847.html
    title: "The Hacker News: MongoDB Vulnerability CVE-2025-14847 Under Active Exploitation Worldwide"
  - id: ch-250m
    resource: https://clickhouse.com/blog/clickhouse-tops-250m-arr-and-4000-customers
    title: "ClickHouse: tops $250M ARR and 4,000 customers (2026-05-27)"
  - id: ch-runreveal
    resource: https://clickhouse.com/blog/clickhouse-welcomes-runreveal
    title: "ClickHouse welcomes RunReveal (2026-09-01)"
  - id: phoenixai
    resource: https://www.dbta.com/Editorial/News-Flashes/CelerData-Rebrands-as-PhoenixAI-Introduces-Analytical-Engine-Designed-for-AI-Agents-174972.aspx
    title: "DBTA: CelerData Rebrands as PhoenixAI (2026-05-27)"
  - id: pg19-delay
    resource: https://www.snowflake.com/en/blog/engineering/postgresql-19-release-delay-feature-reverts/
    title: "Snowflake engineering blog: PostgreSQL 19 delayed, key feature reversions"
  - id: tidbx
    resource: https://finance.yahoo.com/news/pingcap-launches-tidb-x-ai-183000280.html
    title: "PingCAP Launches TiDB X at SCaiLE Summit 2025 (2025-10-08)"
  - id: qdrant-b
    resource: https://qdrant.tech/blog/series-b-announcement/
    title: Qdrant Series B
  - id: galera
    resource: https://www.theregister.com/software/2026/03/09/mariadb-backs-down-on-galera-removal-after-community-outcry/5224684
    title: "The Register: MariaDB backs down on Galera removal"
  - id: gel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: Gel joins Vercel
  - id: scylla
    resource: https://www.scylladb.com/2024/12/18/why-were-moving-to-a-source-available-license/
    title: ScyllaDB moves to source-available
  - id: percona-ceo
    resource: https://www.theregister.com/databases/2026/09/18/the-ideal-database-for-ai-agents-doesnt-exist-yet-says-percona-ceo/5296906
    title: "The Register: Ideal database for AI agents doesn't exist yet"
---

# Executive summary
- **Postgres won the cycle.** It is used by 55.6% of developers versus 40.5% for MySQL (SO 2025)[^so-2025]. PG 18 shipped async I/O[^pg18]. Almost every big database deal of the period was a Postgres deal: Neon (~$1B, Databricks)[^neon-dbx], Crunchy Data (~$250M, Snowflake)[^crunchy], plus ClickHouse, PlanetScale and Snowflake launching Postgres services.
- **AI agents became the database's main customer.** More than 80% of Neon databases (Databricks telemetry, May 2025)[^dbx-neon-pr] and 60-70% of new Supabase databases (2026)[^sb-f] are created by agents or AI tools. This made Supabase the breakout company of the period ($2B → $5B → $10.5B in 14 months, then $150M more and the Turso acquisition on Oct 2 2026)[^sb-f][^sb-turso].
- **Analytics consolidated around two winners.** ClickHouse is valued at ~$15B and buying open-source AI tools[^ch-15b]. DuckDB's company was bought by AWS on Aug 26 2026, with the project kept MIT under its Foundation[^duck-aws].
- **MySQL is in a stewardship crisis.** Oracle laid off ~70 engineers (Sept 2025)[^mysql-layoffs]. The vendor-led OurSQL Foundation followed (May 2026)[^oursql], then an advisory-only governance pledge from Oracle (June 2026)[^mysql-gov].
- **Relicensing turned into outright closure.** CockroachDB took its source private on Sept 15 2026, citing AI risks[^crdb-private], following ScyllaDB's move to source-available (Dec 2024)[^scylla]. MariaDB had a GPL-component scare over Galera[^galera].
- **Acquisitions often stalled the open-source projects.** Neon's public repo went nearly silent after Aug 2025[^neon-gh]. Gel's repo has been dormant since its team joined Vercel[^gel]. pgBackRest lost its sponsored maintainer after Crunchy's sale and needed a five-vendor rescue[^pgbackrest].
- **Standalone vector DBs commoditised.** Pinecone weighed a sale (reported by The Information, Aug 2025) and replaced founder-CEO Edo Liberty with Ash Ashutosh (Sept 2025)[^pinecone][^pinecone-calcalist][^pinecone-ceo]. Qdrant was the only open-source vector DB found to raise a priced round in 2026 ($50M B)[^qdrant-b]. Milvus and LanceDB moved toward lakehouse retrieval.
- **Incumbents' businesses are fine even when their open-source standing is not.** MongoDB (SSPL) grew 30% in Q2 FY27[^mdb-q2] but lost its CEO to Meta after ~11 months (Sept 28 2026)[^mdb-ceo][^mdb-meta].

# Scorecard
| Project | OSS verdict | Business verdict | 2y trajectory | One-line why |
|---|---|---|---|---|
| [PostgreSQL](/projects/databases/postgresql.md) | thriving | thriving | ↑↑ | Default database of the AI era. PG 18 async I/O. Billions in ecosystem M&A |
| [Supabase](/projects/databases/supabase.md) | thriving | thriving | ↑↑ | $10.5B on agent/vibe-coding demand. Bought Turso |
| [Neon](/projects/databases/neon.md) | declining | acquired | ↑ biz / ↓ OSS | $1B Databricks exit. Public repo nearly frozen since Aug 2025 |
| [ClickHouse](/projects/databases/clickhouse.md) | thriving | thriving | ↑↑ | ~$15B valuation. Open-source AI and observability roll-up. Postgres |
| [DuckDB](/projects/databases/duckdb.md) | thriving | acquired | ↑↑ | DuckLake 1.0, v2.0 preview. AWS buys DuckLabs. Foundation keeps MIT |
| [Turso / libSQL](/projects/databases/turso.md) | growing | acquired | ↑ | Rust SQLite rewrite, pgmicro. Joins Supabase |
| [TimescaleDB](/projects/databases/timescaledb.md) | stable | stable | → | Rebranded Tiger Data. Generic Postgres platform push |
| [ParadeDB](/projects/databases/paradedb.md) | growing | growing | ↑ | $12M A. AGPL Postgres search |
| [OrioleDB](/projects/databases/orioledb.md) | growing | n/a | → | Supabase-owned engine, still beta |
| [Xata](/projects/databases/xata.md) | growing | stable | ↑ | Open-sourced Postgres branching platform (Apr 2026) |
| [MySQL](/projects/databases/mysql.md) | crisis | struggling | ↓↓ | Layoffs, silent repo, foundation revolt |
| [MariaDB](/projects/databases/mariadb.md) | contested | stable | → | Private-equity roll-up. Galera removal attempt and reversal |
| [Vitess / PlanetScale](/projects/databases/vitess.md) | stable | growing | ↑ | CNCF Vitess steady. PlanetScale moves to Postgres (Neki) |
| [MongoDB](/projects/databases/mongodb.md) | stable | thriving | ↑ biz | 30% growth. CEO churn. Sued FerretDB |
| [CockroachDB](/projects/databases/cockroachdb.md) | dead | stable | ↓↓ OSS | Core retired, then source private (Sept 2026) |
| [TiDB](/projects/databases/tidb.md) | stable | stable | → | Apache-2.0. Agent cloud. OurSQL member |
| [YugabyteDB](/projects/databases/yugabytedb.md) | stable | growing | ↑ | Per-agent Postgres. Record H1 2026 |
| [SurrealDB](/projects/databases/surrealdb.md) | growing | growing | ↑ | 3.0 and $23M. BSL agent-memory pitch |
| [Gel (EdgeDB)](/projects/databases/gel.md) | dead | failed | ↓↓ | Acqui-hired by Vercel. Cloud shut down |
| [Convex](/projects/databases/convex.md) | growing | growing | ↑ | FSL open source. $24M. 10x growth |
| [InfluxDB 3](/projects/databases/influxdb.md) | stable | stable | → | MIT/Apache v3 Core GA (Apr 2025) |
| [QuestDB](/projects/databases/questdb.md) | growing | stable | ↑ | 10.0 with QWP. Finance niche |
| [ScyllaDB](/projects/databases/scylladb.md) | declining | stable | ↓ OSS | AGPL ended. Source-available with free tier |
| [Apache Cassandra](/projects/databases/cassandra.md) | stable | n/a | → | 6.0 alpha with Accord ACID |
| [Dragonfly (+KeyDB, Garnet)](/projects/databases/dragonfly.md) | growing | growing | ↑ | 2.0. KeyDB abandoned. Garnet active |
| [Milvus](/projects/databases/milvus.md) | thriving | stable | ↑ | 3.0 lake-native. Most-starred vector DB |
| [Qdrant](/projects/databases/qdrant.md) | thriving | growing | ↑ | $50M Series B (Mar 2026) |
| [Weaviate](/projects/databases/weaviate.md) | stable | stable | → | Fast releases. No priced round since 2023 |
| [Chroma](/projects/databases/chroma.md) | stable | stable | → | Cloud GA. Releases slowed in 2026 |
| [LanceDB](/projects/databases/lancedb.md) | growing | growing | ↑ | $30M A. Lance format as multimodal standard |
| [StarRocks](/projects/databases/starrocks.md) | stable | stable | → | Sponsor CelerData rebranded PhoenixAI (May 2026) |
| [Apache Doris](/projects/databases/apache-doris.md) | stable | n/a | → | Steady ASF releases |
| Pinecone (closed, [org](/organizations/pinecone.md)) | n/a | struggling | ↓ | Sale talks, CEO change, platform pivot |

# By window
## W3 (2026-07-03 → 2026-10-03)
**Successes**
- Supabase raises $150M more and agrees to acquire Turso (Oct 2)[^sb-turso].
- AWS acquires DuckLabs, and DuckDB stays MIT under its Foundation (Aug 26)[^duck-aws]. DuckDB v2.0 preview.
- MongoDB Q2 FY27 revenue $771.8M (+30%)[^mdb-q2]. Milvus 3.0, Qdrant 1.19, QuestDB 10.0, Dragonfly 2.0 ship. PlanetScale previews Neki. Neon backend GA and Electric acquisition. ClickHouse buys RunReveal (Sept 1)[^ch-runreveal].

**Failures**
- CockroachDB moves development private (Sept 15)[^crdb-private].
- MongoDB CEO CJ Desai leaves after ~11 months to run Meta's new enterprise platform; shares fall >18% (Sept 28)[^mdb-ceo][^mdb-meta].
- SQL/PGQ graph queries pulled from PostgreSQL 19 amid dozens of post-beta reverts; GA delayed "weeks and maybe even months" past the usual Sept/Oct slot (Beta 4 on Sept 24)[^pg19-delay]. MariaDB's Galera future questioned again.

## W6 (2026-04-03 → 2026-07-03)
**Successes**
- Supabase $500M Series F at $10.5B (June 4)[^sb-f]. Multigres v0.1. DuckLake 1.0. Xata open-sources its platform.
- OurSQL Foundation (May 26)[^oursql] pushes Oracle to promise a MySQL TSC (June 26)[^mysql-gov].
- pgBackRest rescued by AWS, Percona, Supabase, pgEdge and Tiger Data (May 20)[^pgbackrest].
- ClickHouse passes $250M ARR (≈3x YoY) and launches ClickHouse Agents (May 27)[^ch-250m]. CelerData rebrands as PhoenixAI around agent analytics (May 27)[^phoenixai].

**Failures**
- Oracle's MySQL governance remains advisory only[^mysql-gov].
- Weaviate and Chroma show no priced funding. The vector-DB funding drought continues.

## W9 (2026-01-03 → 2026-04-03)
**Successes**
- ClickHouse $400M at ~$15B plus the Langfuse acquisition and a Postgres launch (Jan 16)[^ch-15b].
- Qdrant $50M Series B (Mar 12)[^qdrant-b]. SurrealDB 3.0 with $23M. Lakebase GA on AWS and Azure. DuckDB 1.5.

**Failures**
- MySQL open letter reveals a near-silent public repo and ~50% staff cuts.
- MariaDB quietly drops, then restores, Galera[^galera]. Gel Cloud shut down (Jan 31)[^gel].

## W12 (2025-10-03 → 2026-01-03)
**Successes**
- Supabase $100M at $5B (Oct 3). PingCAP launches TiDB X (Oct 8)[^tidbx]. ClickHouse buys LibreChat. Convex raises $24M. Lance SDK 1.0. Snowflake Postgres preview.

**Failures**
- Gel team joins Vercel, which ends the company (Dec 2)[^gel]. MongoDB CEO transition. MongoBleed (CVE-2025-14847), a pre-auth memory leak exploited in the wild and added to CISA KEV (Dec 2025)[^mongobleed].

## W24 (2024-10-03 → 2025-10-03)
**Successes**
- Databricks buys Neon (~$1B, May 14 2025)[^neon-dbx]. Snowflake buys Crunchy Data (~$250M, June 2)[^crunchy]. Supabase $2B Series D (Apr). ClickHouse $350M C plus HyperDX. PG 18 (Sept 25)[^pg18].
- InfluxDB 3 Core open source GA. PlanetScale Metal and Postgres GA. DuckDB 1.2-1.4 LTS. DuckLake launched. MariaDB buys Galera and SkySQL.

**Failures**
- CockroachDB retires Core (Nov 2024). ScyllaDB ends AGPL (Dec 2024)[^scylla].
- Oracle MySQL layoffs (Sept 2025)[^mysql-layoffs]. Pinecone weighs a sale and changes CEO (Aug-Sept 2025)[^pinecone][^pinecone-ceo]. MongoDB sues FerretDB (May 2025). Neon's public repo goes quiet after acquisition (Aug 2025)[^neon-gh].

# Trends
1. **The Postgres land grab ("Postgres for agents").** Data platforms bought or built Postgres: Databricks/Neon → Lakebase, Snowflake/Crunchy → Snowflake Postgres, ClickHouse Managed Postgres, PlanetScale Postgres and Neki, and Supabase. Evidence: [Neon](/projects/databases/neon.md), [Supabase](/projects/databases/supabase.md), [/events/2025-05-databricks-acquires-neon.md](/events/2025-05-databricks-acquires-neon.md), [/events/2025-06-snowflake-acquires-crunchy-data.md](/events/2025-06-snowflake-acquires-crunchy-data.md).
2. **Database-per-agent economics.** Agents create most new databases (Neon >80%[^dbx-neon-pr], Supabase 60-70%[^sb-f]). Branching, scale-to-zero and tiny SQLite databases (Turso) became core features, and every vendor pitches "agentic" offerings (Cockroach Continuum, Yugabyte AMP, TiDB Cloud Zero, Xata MCP). Percona's CEO argues the ideal agent database does not exist yet[^percona-ceo].
3. **Acquisitions that preserve the license but end public development.** Neon and Gel kept their licenses, but their repos went quiet. DuckDB is the counter-model: its Foundation-held IP survived a hyperscaler buyout intact[^neon-gh][^gel][^duck-aws].
4. **From relicensing to closing source.** After the 2024 wave (CockroachDB, ScyllaDB), CockroachDB's Sept 2026 move to private development, justified by AI security and copyright, is a new escalation[^crdb-private]. Redis's 2025 return to AGPL went the other way; see [Redis](/projects/licensing-forks/redis.md).
5. **Single-vendor stewardship risk beyond licensing.** MySQL shows a project can decline from owner neglect with no license change. The response was a vendor coalition foundation (OurSQL), not a fork[^oursql][^mysql-gov].
6. **Analytics roll-ups and the lakehouse pull.** ClickHouse bought open-source AI and observability tools. DuckLake, Milvus 3.0, Lance 2.2 and Cloudflare Basin all converge on object storage plus open table formats.
7. **Vector search commoditised.** Pinecone's sale talks and pivot[^pinecone], vector features built into Postgres, Mongo and Lakebase, and only Qdrant raising a priced round[^qdrant-b].
8. **Underfunded critical tooling.** pgBackRest's near-orphaning after the Crunchy sale[^pgbackrest] shows that upstream maintenance funded by small vendors can disappear in M&A.

# Success patterns
- **Neutral governance plus a permissive license** (PostgreSQL, DuckDB Foundation, Vitess/CNCF, Cassandra/ASF) made projects safe to build on for competitors, hyperscalers and agent platforms alike.
- **Riding the AI distribution channel.** Supabase and Neon won by being the default target for code-generating tools, not by core-database innovation.
- **Platformisation via acquisition with licenses kept** (ClickHouse with Langfuse, LibreChat and HyperDX) preserved community trust while widening the commercial surface.
- **Foundation-held IP before the exit** (DuckDB) let founders sell to a hyperscaler without a community backlash.
- **Clear licensing from day one** (ParadeDB AGPL, Convex FSL) avoided relicensing fights.

# Failure patterns
- **Owner neglect of a single-vendor project** (MySQL) erodes trust as fast as relicensing does.
- **Closing source to protect the business** (CockroachDB, ScyllaDB) gives up the community funnel to open rivals (YugabyteDB, TiDB, Cassandra).
- **Acqui-hires** (Gel → Vercel) and platform acquisitions (Neon → Databricks) quietly end public development.
- **Thin "layer on Postgres" or "standalone vector store" moats** lose to Postgres plus extensions and built-in vector features (Gel, Pinecone's struggles, Weaviate and Chroma's funding drought).
- **Open-core squeezes on community-critical components** (MariaDB Galera) trigger backlash and reversals.

# Open questions / watchlist for next 6 months
- Does Supabase keep Turso and libSQL vigorous? Does Multigres or OrioleDB reach production?
- Will Databricks re-open Neon development publicly or formally abandon the OSS repo?
- Will the DuckDB Foundation's advisory board give GCP, Azure and MotherDuck real influence under AWS ownership?
- Does Oracle's MySQL TSC produce binding governance, or does OurSQL move toward a fork?
- Do other single-vendor databases follow CockroachDB's "AI risk" source closure?
- MongoDB's permanent CEO choice and the FerretDB lawsuit outcome.
- PostgreSQL 19 GA timing, and whether SQL/PGQ lands in PG 20.
- Any ClickHouse IPO filing. Consolidation among vector DBs (Weaviate, Chroma, Zilliz).

[^so-2025]: Stack Overflow Developer Survey 2025.
[^pg18]: PostgreSQL, 2025-09-25.
[^neon-dbx]: Reuters/Yahoo, 2025-05-14.
[^crunchy]: CNBC, 2025-06-02.
[^sb-f]: Supabase blog, 2026-06-04.
[^sb-turso]: Turso blog, 2026-10-02.
[^ch-15b]: Bloomberg, 2026-01-16.
[^duck-aws]: DuckDB blog, 2026-08-26.
[^mysql-layoffs]: The Register, 2025-09-11.
[^oursql]: The Register, 2026-05-26.
[^mysql-gov]: The Register, 2026-06-26.
[^crdb-private]: Cockroach Labs, 2026-09-15.
[^neon-gh]: GitHub API, queried 2026-10-03.
[^pgbackrest]: The Register, 2026-05-20.
[^mdb-q2]: MongoDB 8-K, 2026-09-01.
[^mdb-ceo]: MongoDB 8-K, 2026-09-28.
[^pinecone]: The Information, Aug 2025.
[^pinecone-calcalist]: Calcalist, 2025-08-31.
[^pinecone-ceo]: TechTarget, 2025-09-08.
[^dbx-neon-pr]: Databricks press release, 2025-05-14.
[^mdb-meta]: SiliconANGLE, 2026-09-28.
[^mongobleed]: The Hacker News, Dec 2025.
[^ch-250m]: ClickHouse blog, 2026-05-27.
[^ch-runreveal]: ClickHouse blog, 2026-09-01.
[^phoenixai]: DBTA, 2026-05-27.
[^pg19-delay]: Snowflake engineering blog, 2026-09-16.
[^tidbx]: PingCAP via Yahoo Finance, 2025-10-08.
[^qdrant-b]: Qdrant, 2026-03-12.
[^galera]: The Register, 2026-03-09.
[^gel]: Gel blog, 2025-12-02.
[^scylla]: ScyllaDB, 2024-12-18.
[^percona-ceo]: The Register, 2026-09-18.
