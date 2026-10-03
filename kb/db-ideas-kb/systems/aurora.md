---
type: System
title: Amazon Aurora
description: "AWS's MySQL- and PostgreSQL-compatible relational database built on a shared, log-structured storage service replicated six ways across three AZs. It defined the 'log is the database' architecture and is AWS's flagship relational service."
resource: https://aws.amazon.com/rds/aurora/
tags: [oltp, cloud-native, disaggregated-storage, mysql, postgres, aws]
kind: cloud-service
first_release: 2015
org: "Amazon Web Services"
license: proprietary
outcome: thriving
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/database-branching, ideas/cloud-architecture/hyperscaler-distributed-sql, ideas/cloud-architecture/managed-dbaas-vs-repatriation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: aurora-10y
    resource: https://aws.amazon.com/blogs/aws/celebrating-10-years-of-amazon-aurora-innovation/
    title: "AWS News Blog: Celebrating 10 years of Amazon Aurora innovation"
    author: org:aws
  - id: io-opt
    resource: https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-aurora-i-o-optimized
    title: "AWS: Amazon Aurora I/O-Optimized (2023-05-11)"
    author: org:aws
  - id: limitless-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-aurora-postgresql-limitless-database-generally-available
    title: "AWS: Aurora PostgreSQL Limitless Database GA (2024-10-31)"
    author: org:aws
  - id: cloud-oltp-cost
    resource: https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/CloudOLTP.pdf
    title: "Haubenschild, Leis: OLTP in the Cloud: Architectures, Tradeoffs, and Cost (VLDB Journal, 2025)"
---

# Summary
Aurora was previewed at re:Invent 2014 and became GA in July 2015 (MySQL), adding PostgreSQL compatibility in October 2017[^aurora-10y]. Its central idea is that the database engine sends only redo log records to a purpose-built storage fleet. The fleet keeps six copies across three AZs, materializes pages itself, and serves them to a single writer and up to 15 readers. From 2018 to 2026 Aurora was the reference design that Microsoft, Google, Alibaba and Neon followed. AWS kept adding features on the same storage layer: Serverless v1 (2018) and v2 (2022), Global Database (2018), I/O-Optimized pricing (2023), Limitless sharding (2024), and DSQL (2025, a separate engine under the Aurora brand)[^aurora-10y]. AWS says "hundreds of thousands" of customers use it[^aurora-10y].

# Timeline
| Date | Event |
|---|---|
| 2015-07 | GA (MySQL-compatible)[^aurora-10y] |
| 2017-10 | PostgreSQL compatibility[^aurora-10y] |
| 2018-08 | Aurora Serverless v1 GA[^aurora-10y] |
| 2018-11 | Global Database[^aurora-10y] |
| 2020-09 | Max storage 128 TiB[^aurora-10y] |
| 2022-04 | Serverless v2 GA |
| 2023-05 | I/O-Optimized: no per-I/O charges, up to 40% savings for I/O-heavy workloads[^io-opt] |
| 2024-10 | Limitless Database GA[^limitless-ga] |
| 2025-05 | Aurora DSQL GA |
| 2025-07 | Max storage 256 TiB[^aurora-10y] |

# What worked
- Compatibility plus cloud-native storage: users kept drivers and SQL and gained fast failover, shared-storage replicas and cloning.
- A single platform for many products. Serverless, Global Database, cloning/branching and zero-ETL all reuse the storage layer.
- An independent cost model (2025) finds Aurora-like designs scale well and are usually cheaper than classic designs, and are well suited to very high durability requirements[^cloud-oltp-cost].

# What didn't
- **I/O pricing.** Per-request I/O billing caused bill shock until I/O-Optimized arrived in 2023[^io-opt].
- **Single writer.** Write scale-out needed new products (Limitless, DSQL).
- **Replication cost.** Full 3x replication of the database (not just the log) dominates cost for large cold datasets, and cross-AZ page reads can raise costs sharply[^cloud-oltp-cost].
- **Version lag** behind upstream PostgreSQL and MySQL, which is normal for forks.

# Related
[Disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) · [Aurora Serverless](/systems/aurora-serverless.md) · [Aurora DSQL](/systems/aurora-dsql.md) · [Azure SQL Hyperscale](/systems/azure-sql-hyperscale.md) · [AlloyDB](/systems/alloydb.md)
