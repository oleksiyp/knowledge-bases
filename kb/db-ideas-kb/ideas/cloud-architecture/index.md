# Verdict: won

* [Disaggregated storage and compute for OLTP ("the log is the database")](disaggregated-storage-compute-oltp.md) - Split a single-node OLTP engine into a stateless compute node that ships only WAL to a shared, replicated storage service. Verdict: won. Every hyperscaler built one and they now carry most new managed relational workloads. The weak spots are the single-writer ceiling and cost surprises from I/O and cross-AZ traffic.
* [Managed cloud DBaaS as the default (and the cloud-repatriation counter-trend)](managed-dbaas-vs-repatriation.md) - Running databases as cloud-provider or vendor managed services instead of self-hosting. Verdict: won. Cloud dbPaaS passed half of DBMS spend in 2022 and generated almost all market growth. Cloud repatriation (37signals, 2022–25) produced real savings for steady, predictable workloads but stayed a vocal niche.

# Verdict: winning

* [Database branching and copy-on-write dev workflows](database-branching.md) - Create instant, writable copies of a database (schema and data) per pull request, preview environment or AI agent, using copy-on-write storage. Verdict: winning. It became a standard feature of developer-focused Postgres platforms and a selling point for agent workloads. True data merging was never solved, so branches stay disposable.
* [Object-storage-native databases (S3 as primary storage)](object-storage-native-databases.md) - Build the database so object storage (S3/GCS/Azure Blob) is the source of truth, with local SSD and RAM only as caches. Verdict: winning. Cost is 10–100x lower and operations get simpler. S3 conditional writes (2024) removed the need for a separate coordinator, and turbopuffer, SlateDB, Neon and diskless Kafka proved it in production. Object-store latency and per-request pricing still rule it out for the commit path of latency-sensitive OLTP.

# Verdict: mixed

* [BYOC (bring your own cloud) deployment for data infrastructure](byoc-deployment.md) - The vendor runs the control plane and the data plane runs in the customer's own cloud account. Verdict: mixed. It became a standard enterprise tier for streaming and analytics vendors (Redpanda, WarpStream, ClickHouse, Databricks-style) and helps close deals with committed-spend and sovereignty buyers. It shifts real operational and security burden to customers and never displaced plain SaaS.
* [Serverless databases and scale-to-zero](serverless-databases.md) - Databases billed per request or per second of compute that scale automatically and ideally to zero when idle. Verdict: mixed. Usage-based pricing won (DynamoDB on-demand, Neon). The first generation of serverless relational databases with scale-to-zero did badly: Aurora Serverless v1 was retired, and free tiers were cut or renamed. AI agents that spin up thousands of short-lived databases revived the idea in 2025.

# Verdict: niche

* [Database-per-tenant (and database-per-agent) multi-tenancy](database-per-tenant.md) - Give every customer, workspace, user or agent its own small database instead of sharing tables keyed by tenant_id. Verdict: niche. It works well on SQLite-style platforms (Turso, Durable Objects) and serverless Postgres. Dedicated multi-tenant Postgres products (Nile) stayed small, and fleet-wide migrations and cross-tenant analytics remain painful. Its strongest 2025–26 driver is agents, not SaaS.

# Verdict: too-early

* [Hyperscaler-native scale-out SQL (Aurora Limitless and Aurora DSQL)](hyperscaler-distributed-sql.md) - AWS's 2024–25 answer to Spanner and CockroachDB: Limitless shards Aurora PostgreSQL behind one endpoint, and DSQL is a new serverless, multi-region, active-active PostgreSQL-compatible engine built from disaggregated services. Verdict: too early. The engineering is credible and now documented in a 2026 paper. Compatibility gaps and optimistic-concurrency semantics limit what existing apps can move, and there is little public adoption data.
