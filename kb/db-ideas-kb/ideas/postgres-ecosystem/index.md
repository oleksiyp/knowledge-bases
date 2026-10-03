# Verdict: won

* [Postgres extensions as a platform for new database products](extensions-as-platform.md) - Build new database capabilities and companies as PostgreSQL extensions (pgvector, TimescaleDB, Citus, PostGIS, ParadeDB, pg_duckdb, pgmq) instead of new engines. Verdict: won as a distribution channel, mixed as a business. Extensions spread fast but are fragile to combine, depend on what cloud providers allow, and rarely sustain a standalone company.
* ["Just use Postgres": one general-purpose database for most workloads](just-use-postgres.md) - Use PostgreSQL by default, plus extensions, for relational, document, search, vector, queue and time-series workloads instead of running a separate specialized store for each. Verdict: won. Postgres became the most-used developer database and the default target for AI coding agents. The limits are single-primary write scaling and operational sharp edges that show up at very large scale.
* [Postgres compatibility as the de-facto standard interface](postgres-compatibility-standard.md) - New databases speak the PostgreSQL wire protocol and dialect, or fork Postgres code, so they can reuse its drivers, tools and developers. Verdict: won as the interface, but 'compatible' became a spectrum. Wire-protocol clones break on catalogs, extensions and semantics, and code forks pay a permanent cost to keep up with upstream.
* [The Postgres hosting land grab and consolidation (2024–2026)](postgres-hosting-consolidation.md) - Data platforms and analytics vendors bought or built managed Postgres to own the operational database of AI-era applications: Databricks–Neon, Snowflake–Crunchy, ClickHouse Postgres, PlanetScale Postgres, Azure HorizonDB, and Supabase at $10.5B. Verdict: won for sellers and platforms. Losers are undifferentiated hosts and the community tooling those small Postgres companies used to fund.

# Verdict: winning

* [Postgres as a backend platform (Supabase-style BaaS)](postgres-backend-as-a-service.md) - Wrap Postgres with auth, auto-generated APIs, realtime, storage and functions to give an open, SQL-based alternative to Firebase. Verdict: winning. Supabase grew to a $10.5B valuation and became the default database of AI app builders. The GraphQL-over-Postgres approach (Hasura) stalled and pivoted.

# Verdict: mixed

* [Analytics inside Postgres (DuckDB and lakehouse extensions)](analytics-inside-postgres.md) - Embed a vectorized analytical engine (usually DuckDB) or an Iceberg/lake bridge in Postgres so one database serves OLTP and analytics. Verdict: mixed. Four competing extensions appeared in 2024, one reached 1.0, the startups were bought by Databricks and Snowflake for their Postgres-to-lakehouse plumbing, and serious analytics still runs in a separate engine.

# Verdict: niche

* [Replacing Postgres's heap with pluggable storage engines](pluggable-storage-engines.md) - Use the table access method API (PG 12, 2019) to swap Postgres's append-only heap and VACUUM for undo-log, columnar or index-organized engines. Verdict: niche. Seven years on, zheap and zedstore are dead, Timescale removed its Hypercore TAM, and OrioleDB is still in beta. The storage changes that shipped went below the WAL instead (Aurora, Neon, AlloyDB).

# Verdict: fading

* [MySQL as the default open-source database (and its relative decline)](mysql-decline.md) - The LAMP-era assumption that MySQL (or MariaDB) is the default open-source OLTP database. Verdict: fading. MySQL is still huge in installed base, but Postgres passed it with developers in 2023. Oracle cut the core team in 2025 and folded the open-source team into its HeatWave cloud unit. MariaDB's commercial arm went through a failed SPAC and a take-private.
