---
type: System
title: Azure SQL Database Hyperscale
description: "Azure SQL Database tier based on Microsoft's Socrates architecture: compute, a separate log service, page servers and Azure Storage, supporting up to 128 TB. GA May 2019. Microsoft's quiet success with disaggregated OLTP."
resource: https://learn.microsoft.com/en-us/azure/azure-sql/database/service-tier-hyperscale
tags: [oltp, disaggregated-storage, sql-server, azure, cloud-native]
kind: cloud-service
first_release: 2019
org: "Microsoft"
license: proprietary
outcome: thriving
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/serverless-databases]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: hyperscale-ga
    resource: https://azure.microsoft.com/en-us/blog/get-high-performance-scaling-for-your-azure-database-workloads-with-hyperscale/
    title: "Azure blog: Get high-performance scaling with Hyperscale (May 2019)"
    author: org:microsoft
  - id: socrates
    resource: https://www.microsoft.com/en-us/research/publication/socrates-the-new-sql-server-in-the-cloud/
    title: "Antonopoulos et al.: Socrates: The New SQL Server in the Cloud (SIGMOD 2019)"
    author: org:microsoft-research
  - id: hs-docs
    resource: https://learn.microsoft.com/en-us/azure/azure-sql/database/service-tier-hyperscale?view=azuresql
    title: "Microsoft Learn: What is the Hyperscale service tier?"
    author: org:microsoft
  - id: hs-price
    resource: https://techcommunity.microsoft.com/blog/azuresqlblog/azure-sql-database-hyperscale-%E2%80%93-lower-simplified-pricing/3982209
    title: "Azure SQL blog: Hyperscale lower, simplified pricing (Nov 2023)"
    author: org:microsoft
  - id: hs-serverless
    resource: https://www.infoq.com/news/2023/02/azure-sql-hyperscale-serverless/
    title: "InfoQ: Azure SQL Database Hyperscale serverless (Feb 2023)"
---

# Summary
Hyperscale is the production form of **Socrates** (SIGMOD 2019). It splits SQL Server into four tiers: one primary compute node plus secondaries, a separate **log service** (XLOG) for durability, **page servers** that each own a slice of pages and replay the log, and Azure Storage for long-term data and snapshots[^socrates]. Separating durability (log) from availability (pages) goes a step beyond Aurora. Hyperscale became GA in May 2019[^hyperscale-ga] and supports databases up to 128 TB[^hs-docs]. A serverless option arrived in 2023[^hs-serverless]. In December 2023 Microsoft cut compute prices by /bin/zsh.10 per vCore-hour and removed the separate SQL license charge, up to 35% cheaper[^hs-price].

# Timeline
| Date | Event |
|---|---|
| 2019-05 | GA[^hyperscale-ga] |
| 2019-06 | Socrates paper at SIGMOD[^socrates] |
| 2023-02 | Serverless Hyperscale (preview)[^hs-serverless] |
| 2023-12-15 | Simplified, lower pricing[^hs-price] |

# What worked
- Full SQL Server compatibility with fast scale-up, fast restore from snapshots and large databases.
- The log/page split proved cost-efficient: an independent 2025 cost model finds Socrates-like designs cheapest for many workloads.

# What didn't
- Still a single writer.
- Pricing was complex (and initially carried license charges) until the 2023 simplification[^hs-price].

# Related
[Disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) · [Socrates paper](/papers/2019-socrates.md) · [Aurora](/systems/aurora.md) · [GA event](/events/2019-05-azure-sql-hyperscale-ga.md)
