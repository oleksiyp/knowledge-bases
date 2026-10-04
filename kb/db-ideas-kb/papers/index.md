# Papers: 2026

* [Aurora DSQL: Scalable, Multi-Region OLTP](2026-aurora-dsql.md) - AWS's design paper for Aurora DSQL: stateless PostgreSQL-compatible query processors in Firecracker microVMs, coordination-free MVCC reads at precise timestamps, and OCC that defers all coordination to commit through adjudicators and a replicated journal.
* [Pervasive Annotation Errors Break Text-to-SQL Benchmarks and Leaderboards](2026-text-to-sql-benchmarks-broken.md) - Found that 52.8% of BIRD Mini-Dev and 62.8% of Spider 2.0-Snow examples contain annotation errors. Re-evaluating on corrected data moved leaderboard ranks by up to ±9 places and dropped rank correlation from 0.85 to 0.32.

# Papers: 2025

* [Anarchy in the Database: A Survey and Evaluation of Database Management System Extensibility](2025-anarchy-in-the-database.md) - A survey and automated analysis of extension mechanisms shows that a large plugin ecosystem does not guarantee safe composition; pairwise tests expose integration failures and testing limitations.
* [OLTP in the Cloud: Architectures, Tradeoffs, and Cost](2025-oltp-in-the-cloud-cost.md) - An analytical cost model comparing six cloud OLTP architectures (Classic, In-Memory, remote block device, HADR, Aurora-like, Socrates-like) on real AWS prices. It finds cloud-native disaggregated designs usually cheapest, but full-copy replication and cross-AZ traffic dominate their cost.
* [Spider 2.0: Evaluating Language Models on Real-World Enterprise Text-to-SQL Workflows](2025-spider-2.md) - A benchmark of 632 enterprise text-to-SQL workflows over real BigQuery/Snowflake/local databases with 1,000+ column schemas. The best o1-preview agent solved 21.3%, against 91.2% on Spider 1.0 and 73.0% on BIRD, deflating 'text-to-SQL is solved' claims.
* [Ursa: A Lakehouse-Native Data Streaming Engine for Kafka](2025-ursa-lakehouse-native-streaming.md) - Ursa combines Kafka-compatible ingestion with open lakehouse tables. Its architectural contribution is reducing duplication and cloud replication costs, with explicit latency tradeoffs.

# Papers: 2024

* [CXL and the Return of Scale-Up Database Engines](2024-cxl-return-of-scale-up.md) - PVLDB 2024 vision paper arguing that CXL will let databases scale up across a rack as one shared-memory machine instead of scaling out over the network.
* [GPTuner: A Manual-Reading Database Tuning System via GPT-Guided Bayesian Optimization](2024-gptuner.md) - GPTuner uses language-model extraction of documentation to narrow a Bayesian optimization search, showing a concrete role for LLMs without treating generated advice as measured performance.
* [SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL](2024-pipe-syntax-in-sql.md) - Google paper (PVLDB 17(12), 2024) proposing pipe syntax (|>) as a backwards-compatible extension of SQL, deployed across BigQuery, F1, Spanner and Procella. It quickly influenced Spark/Databricks and showed SQL can absorb the ideas of would-be replacements.
* [What Goes Around Comes Around... And Around...](2024-what-goes-around-comes-around-and-around.md) - Stonebraker and Pavlo's 2024 survey of 20 years of database ideas. It concludes that non-relational data models are either niches or are turning into SQL/relational systems, and that the real advances were architectural (columnar, cloud, lakehouse).

# Papers: 2023

* [The Composable Data Management System Manifesto](2023-composable-data-management-system-manifesto.md) - A vision paper organizes database software into reusable components and shared interfaces. Its influence is in framing the design tradeoffs of modular systems rather than proving universal interoperability.
* [DBSP: Automatic Incremental View Maintenance for Rich Query Languages](2023-dbsp-incremental-view-maintenance.md) - DBSP provides a systematic way to incrementalize expressive query computations. Feldera turns the research into a product, while practical cost still depends on the workload.
* [Kora: A Cloud-Native Event Streaming Platform for Kafka](2023-kora-cloud-native-kafka.md) - Confluent describes the architecture behind its managed Kafka service. The paper shows why elasticity, isolation and cloud operations require more than hosting an unchanged broker.
* [What Modern NVMe Storage Can Do, And How To Exploit It: High-Performance I/O for High-Performance Storage Engines](2023-modern-nvme-storage.md) - PVLDB 2023 paper measuring a 4.7x gap between NVMe array capability and existing systems on TPC-C, and showing an I/O-optimized engine reaching over 1M TPC-C transactions/s out of memory.

# Papers: 2022

* [Are You Sure You Want to Use MMAP in Your Database Management System?](2022-mmap-in-dbms.md) - CIDR 2022 paper arguing, with benchmarks, that memory-mapped file I/O causes correctness and performance problems for DBMSs, especially on fast NVMe.
* [SageDB: An Instance-Optimized Data Analytics System](2022-sagedb-instance-optimized-analytics.md) - A working SageDB prototype combines optimized data layouts with partial materialized views, correcting the impression that the 2019 agenda never progressed beyond a vision paper.
* [Velox: Meta’s Unified Execution Engine](2022-velox.md) - Meta describes a reusable vectorized execution library shared across analytical and machine-learning systems. Its practical contribution is a common execution layer with explicit integration boundaries.

# Papers: 2021

* [Are We Ready For Learned Cardinality Estimation?](2021-are-we-ready-learned-cardinality-estimation.md) - A comparative evaluation finds accuracy gains but also training, inference and update costs, making deployment readiness a broader question than static estimation error.
* [Bao: Making Learned Query Optimization Practical](2021-bao.md) - Bao keeps the native optimizer and learns hints with a contextual bandit; its lasting contribution is a smaller integration surface, not proof that all plan regressions disappear.
* [Benchmarking Learned Indexes](2021-benchmarking-learned-indexes.md) - SOSD compares tuned learned and traditional indexes and confirms a bounded performance win for read-only in-memory search over dense arrays.
* [FoundationDB: A Distributed Unbundled Transactional Key Value Store](2021-foundationdb-unbundled-kv.md) - A production account of unbundled transactional storage and deterministic simulation, influential both as database infrastructure and as an engineering method.
* [Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics](2021-lakehouse-cidr.md) - The lakehouse paper argues that transactional metadata and optimized execution can provide warehouse capabilities over open analytical files. Its architectural thesis proved influential without eliminating managed warehouses.

# Papers: 2020

* [Elle: Inferring Isolation Anomalies from Experimental Observations](2020-elle-isolation-checker.md) - A practical checker infers transaction dependency graphs from carefully chosen client observations; Jepsen applications demonstrate its industry impact.
* [TiDB: A Raft-based HTAP Database](2020-tidb-raft-htap.md) - TiDB combines row and column replicas through Raft-based replication, demonstrating fresh analytical access with physical workload specialization.
* [Umbra: A Disk-Based System with In-Memory Performance](2020-umbra-disk-based-in-memory-performance.md) - CIDR 2020 paper introducing Umbra, HyPer's SSD-based successor, whose variable-size-page buffer manager delivers in-memory performance on cached data while scaling beyond RAM.

# Papers: 2019

* [Automatically Indexing Millions of Databases in Microsoft Azure SQL Database](2019-azure-sql-auto-indexing.md) - An industry account of continuous index recommendation, implementation and regression validation shows that operational feedback can matter more than a novel learning model.
* [DiskANN: Fast Accurate Billion-point Nearest Neighbor Search on a Single Node](2019-diskann.md) - Showed that a graph ANN index (Vamana) with compressed vectors in RAM and full vectors on SSD can serve a billion vectors from one 64 GB machine at high recall. It became a product feature in Azure Cosmos DB and a preview index in SQL Server and shaped SSD- and object-storage-based vector search.
* [Local-first software: You own your data, in spite of the cloud](2019-local-first-software.md) - Ink & Switch essay and Onward! 2019 paper that coined 'local-first' and proposed seven ideals for software, with CRDTs as the enabling technology. Hugely influential on vocabulary and developer experience; its ownership ideals were rarely adopted commercially.
* [Neo: A Learned Query Optimizer](2019-neo-learned-query-optimizer.md) - Neo demonstrated learned plan generation bootstrapped from an existing optimizer; the subsequent practical direction favored smaller decision spaces and integration with existing engines.
* [SageDB: A Learned Database System](2019-sagedb.md) - The 2019 vision of instance-specialized database components led to an integrated 2022 research prototype and influenced cloud optimization work; broad commercial deployment remains a separate question.
* [Socrates: The New SQL Server in the Cloud](2019-socrates.md) - Microsoft's SIGMOD 2019 paper describing Azure SQL Hyperscale: it decomposes SQL Server into compute, a separate log service, page servers and cheap blob storage, separating durability from availability.

# Papers: 2018

* [Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask](2018-compiled-vs-vectorized-queries.md) - VLDB 2018 paper implementing both data-centric compilation (HyPer-style) and vectorization (VectorWise-style) in one test system to compare them fairly; found neither dominates.
* [The Case for Learned Index Structures](2018-learned-index-structures.md) - The landmark proposal to model key distributions launched learned-index research; later evaluation separated real lookup gains from the broader claim of replacing mature engine indexes.
