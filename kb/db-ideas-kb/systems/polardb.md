---
type: System
title: PolarDB
description: "Alibaba Cloud's cloud-native relational database family (MySQL-, PostgreSQL- and Oracle-compatible) on shared distributed storage, extended with RDMA disaggregated memory (PolarDB Serverless) and multi-primary (PolarDB-MP). The most research-active disaggregated OLTP system."
resource: https://www.alibabacloud.com/product/polardb
tags: [oltp, disaggregated-storage, disaggregated-memory, rdma, mysql, postgres, alibaba]
kind: cloud-service
first_release: 2017
org: "Alibaba Cloud"
license: "proprietary (PolarDB for PostgreSQL open-sourced under Apache-2.0, 2021)"
outcome: thriving
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: polardb-serverless
    resource: https://dl.acm.org/doi/abs/10.1145/3448016.3457560
    title: "Cao et al.: PolarDB Serverless: A Cloud Native Database for Disaggregated Data Centers (SIGMOD 2021)"
  - id: polardb-mp
    resource: https://www.alibabacloud.com/blog/601447
    title: "Alibaba Cloud: PolarDB brings Alibaba Cloud SIGMOD Best Paper Award (2024)"
    author: org:alibaba-cloud
  - id: polardb-pg-oss
    resource: https://mb.com.ph/2021/06/03/alibaba-cloud-open-sources-its-self-developed-polardb-for-postgresql/
    title: "Manila Bulletin: Alibaba Cloud open sources PolarDB for PostgreSQL (2021-06-03)"
  - id: polardb-docs
    resource: https://www.alibabacloud.com/help/en/polardb/product-overview/
    title: "Alibaba Cloud docs: What is PolarDB"
    author: org:alibaba-cloud
---

# Summary
PolarDB is Alibaba Cloud's Aurora-class database. It is notable for publishing a steady stream of papers that push disaggregation further than Western vendors did. **PolarDB Serverless** (SIGMOD 2021) separates compute, a shared remote **memory pool** over RDMA, and storage, so each scales independently. It reports 5.3x faster failure recovery than a design using local resources[^polardb-serverless]. **PolarDB-MP** (SIGMOD 2024 industry-track best paper) adds multiple primaries over disaggregated shared memory and claims 3x the throughput of comparable systems at eight nodes. Alibaba says it is the first Chinese company to win the award[^polardb-mp]. Alibaba reports more than 10,000 customers and 400% growth over three years (as of 2024)[^polardb-mp]. PolarDB for PostgreSQL was open-sourced under Apache-2.0 in 2021[^polardb-pg-oss].

# Timeline
| Date | Event |
|---|---|
| 2017 | PolarDB launched (MySQL-compatible) |
| 2021-05/06 | PolarDB for PostgreSQL open-sourced[^polardb-pg-oss] |
| 2021-06 | PolarDB Serverless paper (SIGMOD)[^polardb-serverless] |
| 2024-06 | PolarDB-MP wins SIGMOD industry best paper[^polardb-mp] |

# What worked
- The only large production system with multi-primary on shared storage plus a disaggregated memory tier.
- Strong domestic adoption in China[^polardb-mp].

# What didn't
- Little traction outside China and the Alibaba ecosystem. Western hyperscalers did not adopt RDMA memory disaggregation in their OLTP products.
- The open-source PostgreSQL edition has had little visible adoption outside China.

# Related
[Disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) · [Aurora](/systems/aurora.md) · [Azure SQL Hyperscale](/systems/azure-sql-hyperscale.md)
