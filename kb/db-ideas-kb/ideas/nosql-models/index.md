# Verdict: won

* [Document databases grow up (MongoDB, Atlas and the compatible clones)](document-databases.md) - The JSON document model became a mainstream option, and MongoDB turned it into a $2.46B-revenue business through Atlas, its managed cloud. The license fight (SSPL, 2018) did not stop clones: AWS DocumentDB, Cosmos DB and an MIT-licensed, Postgres-based DocumentDB at the Linux Foundation now offer the MongoDB API.
* [In-memory key-value stores and the Redis saga](redis-and-in-memory-key-value.md) - The Redis data-structure server is mainstream infrastructure and its RESP protocol is a standard. Redis Ltd.'s 2024 source-available move failed to prevent a cloud-backed competitor: Valkey attracted major vendors and contributors, and Redis went back to open source (AGPL) within 14 months.
* [Search engines as data platforms (Elasticsearch, OpenSearch and successors)](search-engines-as-databases.md) - Lucene-based search engines became core infrastructure for search, logs and security analytics, and Elastic reached $1.74B revenue. Elastic's 2021 license change produced OpenSearch, which kept AWS's market. Elastic added AGPL in 2024, newer Rust engines nibbled at the edges, and relational and vector databases took parts of the search workload.
* [SQL and NoSQL converge (the relational model absorbs the NoSQL models)](sql-nosql-convergence.md) - By 2018–2026 the 'NoSQL vs SQL' split had largely collapsed. NoSQL systems added SQL dialects, transactions and schemas, and relational systems absorbed JSON, key-value, full-text, graph (SQL/PGQ) and vectors. The relational model won by absorption, as Stonebraker and Pavlo argued in 2024.

# Verdict: mixed

* [Purpose-built time-series databases](time-series-databases.md) - Time-series workloads boomed, but the standalone time-series database category fragmented and was largely absorbed. InfluxDB changed its query stack across major versions and replaced its TSM engine in version 3 and dropped its own query language. Timescale renamed itself a Postgres company, and the winners were columnar or analytical engines on object storage plus Prometheus-compatible metrics stores.

# Verdict: niche

* [Native graph databases](graph-databases.md) - Graph databases got a standard (GQL, ISO 2024), a SQL extension (SQL/PGQ, 2023) and a GenAI bump through GraphRAG, but they stayed a niche. Neo4j reached about $200M ARR while most challengers were sold, stalled or archived (Dgraph sold twice, Kuzu archived after Apple bought it in 2025), and relational engines started adding graph queries.
* [Native multi-model databases](multi-model-databases.md) - One engine serving documents, graphs, key-value, and later vectors and time series. As standalone products, multi-model databases stayed niche: OrientDB was orphaned, ArangoDB retreated to a BSL license, and SurrealDB corrected its disk-sync defaults. The concept won inside Postgres (extensions) and Cosmos DB (many APIs on one storage engine).
* [Wide-column / Dynamo-style stores (Cassandra, ScyllaDB, DynamoDB)](wide-column-stores.md) - Leaderless, partitioned wide-column stores remain the default for very high write-throughput workloads at large companies. The open-source category consolidated: Cassandra matured slowly, ScyllaDB went source-available in 2024, DataStax was sold to IBM in 2025, while managed alternatives competed for new workloads.

# Verdict: failed

* [Ledger and blockchain databases](ledger-databases.md) - The 2017–18 blockchain wave produced databases with cryptographically verifiable, append-only histories (BigchainDB, Amazon QLDB). QLDB failed as a standalone service and BigchainDB development stalled; this is not a verdict on every ledger implementation. What survived is a feature: tamper-evident ledger tables inside ordinary relational databases (SQL Server/Azure SQL ledger).
