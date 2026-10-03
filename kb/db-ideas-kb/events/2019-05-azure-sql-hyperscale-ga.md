---
type: Event
title: "Azure SQL Database Hyperscale becomes generally available"
description: "Microsoft shipped its Socrates-based disaggregated SQL Server tier, the second hyperscaler implementation of the 'log is the database' architecture after Aurora."
date: 2019-05-06
year: 2019
kind: launch
signal: positive
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp]
systems: [systems/azure-sql-hyperscale]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: hyperscale-ga
    resource: https://azure.microsoft.com/en-us/blog/get-high-performance-scaling-for-your-azure-database-workloads-with-hyperscale/
    title: "Azure blog: Get high-performance scaling for your Azure database workloads with Hyperscale"
    author: org:microsoft
  - id: socrates
    resource: https://www.microsoft.com/en-us/research/publication/socrates-the-new-sql-server-in-the-cloud/
    title: "Socrates: The New SQL Server in the Cloud (SIGMOD 2019)"
    author: org:microsoft-research
---

# What happened
In May 2019 Microsoft made the Hyperscale tier of Azure SQL Database generally available[^hyperscale-ga]. A month later, the Socrates paper at SIGMOD 2019 described the architecture: a primary compute node, a separate log service, page servers and Azure Storage, designed for 100 TB-class OLTP databases[^socrates].

# Why it matters
It confirmed that Aurora's design was not an AWS one-off but the new standard for cloud OLTP. Socrates also refined it by separating durability (log) from availability (page servers). Later cost modeling found this refinement often cheaper than Aurora's 3x full-copy replication.

# Related
[Disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) · [Azure SQL Hyperscale](/systems/azure-sql-hyperscale.md) · [Socrates paper](/papers/2019-socrates.md)
