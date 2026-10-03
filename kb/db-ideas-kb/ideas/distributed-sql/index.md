# Verdict: won

* [Jepsen-driven correctness culture](jepsen-correctness-culture.md) - Independent, black-box fault-injection testing of database consistency claims, published as detailed reports and often paid for by the vendor. Verdict: won. After 2018 a Jepsen report became an expected part of launching a serious distributed database, and the Elle checker (VLDB 2020) extended scrutiny to the isolation levels of single-node SQL databases. Whole categories of vague marketing claims stopped being credible.

# Verdict: winning

* [Deterministic simulation testing (DST)](deterministic-simulation-testing.md) - Run the whole distributed system (network, disks, clocks, scheduler) inside a single-threaded, seeded simulator so that rare failures can be found and replayed exactly. Verdict: winning. It moved from FoundationDB folklore to standard practice for new data infrastructure (TigerBeetle, WarpStream, Turso, Resonate, Aiven's diskless Kafka) and to a funded company (Antithesis, $105M Series A in 2025). It remains hard to retrofit onto existing code.
* [Sharding middleware over stock MySQL/Postgres](sharding-middleware.md) - Keep the proven single-node engine and add a routing and resharding layer on top (Vitess, Citus, and the 2025–26 'Vitess for Postgres' race: Neki, Multigres, PgDog, Aurora Limitless). Verdict: winning. It runs the largest MySQL fleets and is now the main way Postgres scales out. It beat rewrite-the-engine distributed SQL on compatibility and on trust.

# Verdict: mixed

* [NewSQL / Spanner-style distributed SQL](newsql-distributed-sql.md) - Horizontally scalable, strongly consistent SQL databases built on consensus-replicated ranges (Spanner, CockroachDB, YugabyteDB, TiDB). Verdict: mixed. The architecture won and hyperscalers now sell it (Spanner, Aurora DSQL), but the independent vendors never became the default OLTP database. They peaked on 2021 valuations, then retreated into enterprise niches and tighter licenses.
* [FoundationDB 'layers': a transactional KV core under every data model](transactional-kv-core-and-layers.md) - Build one ordered, strictly serializable distributed key-value store and implement documents, records, SQL and queues as stateless 'layers' on top. Verdict: mixed. The core won as hidden infrastructure for metadata at Apple, Snowflake, Datadog and others, but the open layer ecosystem Apple hoped for in 2018 never formed.

# Verdict: niche

* [Multi-region and geo-partitioned databases for latency and data residency](geo-partitioning-data-residency.md) - One logical database spread across continents. Each row is pinned to a home region for low latency and legal residency, while transactions stay strongly consistent. Verdict: niche. The features shipped and work (CockroachDB REGIONAL BY ROW, Spanner geo-partitioning, Aurora DSQL multi-region), but most companies meet residency rules with separate per-region deployments and use multi-region mainly for disaster recovery.
* [Specialized OLTP engines for financial ledgers (TigerBeetle)](specialized-oltp-ledgers.md) - A purpose-built database with exactly one data model (double-entry accounts and transfers), designed for extreme write contention, strict serializability and safety under storage faults. Verdict: niche but credible. TigerBeetle reached production in 2024, passed Jepsen in 2025 and launched a managed cloud in 2026. Adoption is still small, and general-purpose Postgres remains what most ledgers run on.

# Verdict: fading

* [HTAP: one database for transactions and analytics](htap.md) - Hybrid transactional/analytical processing runs OLTP and OLAP on the same fresh data in one system, usually a row store plus a columnar replica. Verdict: fading as a product category. It survives as a feature (columnar replicas, hybrid tables) and as an architecture assembled from parts (CDC into lakehouse or real-time OLAP). Its strongest advocates moved on and sold to Databricks.

# Verdict: failed

* [Deterministic / Calvin-style transactions](deterministic-transactions.md) - Order transactions up front through a replicated log, then execute them deterministically on every replica, with no two-phase commit. Verdict: failed commercially. Its only well-funded product, Fauna, shut down in May 2025. The research held up, but nobody turned it into a database developers wanted.
