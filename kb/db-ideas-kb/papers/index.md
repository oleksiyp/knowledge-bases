# Papers: 2026

* [Aurora DSQL: Scalable, Multi-Region OLTP](2026-aurora-dsql.md) - AWS's design paper for Aurora DSQL: stateless PostgreSQL-compatible query processors in Firecracker microVMs, coordination-free MVCC reads at precise timestamps, and OCC that defers all coordination to commit through adjudicators and a replicated journal.

# Papers: 2025

* [OLTP in the Cloud: Architectures, Tradeoffs, and Cost](2025-oltp-in-the-cloud-cost.md) - An analytical cost model comparing six cloud OLTP architectures (Classic, In-Memory, remote block device, HADR, Aurora-like, Socrates-like) on real AWS prices. It finds cloud-native disaggregated designs usually cheapest, but full-copy replication and cross-AZ traffic dominate their cost.

# Papers: 2024

* [CXL and the Return of Scale-Up Database Engines](2024-cxl-return-of-scale-up.md) - PVLDB 2024 vision paper arguing that CXL will let databases scale up across a rack as one shared-memory machine instead of scaling out over the network.
* [SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL](2024-pipe-syntax-in-sql.md) - Google paper (PVLDB 17(12), 2024) proposing pipe syntax (|>) as a backwards-compatible extension of SQL, deployed across BigQuery, F1, Spanner and Procella. It quickly influenced Spark/Databricks and showed SQL can absorb the ideas of would-be replacements.

# Papers: 2023

* [What Modern NVMe Storage Can Do, And How To Exploit It: High-Performance I/O for High-Performance Storage Engines](2023-modern-nvme-storage.md) - PVLDB 2023 paper measuring a 4.7x gap between NVMe array capability and existing systems on TPC-C, and showing an I/O-optimized engine reaching over 1M TPC-C transactions/s out of memory.

# Papers: 2022

* [Are You Sure You Want to Use MMAP in Your Database Management System?](2022-mmap-in-dbms.md) - CIDR 2022 paper arguing, with benchmarks, that memory-mapped file I/O causes correctness and performance problems for DBMSs, especially on fast NVMe.

# Papers: 2020

* [Umbra: A Disk-Based System with In-Memory Performance](2020-umbra-disk-based-in-memory-performance.md) - CIDR 2020 paper introducing Umbra, HyPer's SSD-based successor, whose variable-size-page buffer manager delivers in-memory performance on cached data while scaling beyond RAM.

# Papers: 2019

* [Local-first software: You own your data, in spite of the cloud](2019-local-first-software.md) - Ink & Switch essay and Onward! 2019 paper that coined 'local-first' and proposed seven ideals for software, with CRDTs as the enabling technology. Hugely influential on vocabulary and developer experience; its ownership ideals were rarely adopted commercially.
* [Socrates: The New SQL Server in the Cloud](2019-socrates.md) - Microsoft's SIGMOD 2019 paper describing Azure SQL Hyperscale: it decomposes SQL Server into compute, a separate log service, page servers and cheap blob storage, separating durability from availability.

# Papers: 2018

* [Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask](2018-compiled-vs-vectorized-queries.md) - VLDB 2018 paper implementing both data-centric compilation (HyPer-style) and vectorization (VectorWise-style) in one test system to compare them fairly; found neither dominates.
