---
type: Paper
title: "Socrates: The New SQL Server in the Cloud"
description: "Microsoft's SIGMOD 2019 paper describing Azure SQL Hyperscale: it decomposes SQL Server into compute, a separate log service, page servers and cheap blob storage, separating durability from availability."
year: 2019
venue: SIGMOD 2019
authors: [Panagiotis Antonopoulos, Alex Budovski, Cristian Diaconu, Alejandro Hernandez Saenz, Jack Hu, Hanuma Kodavalla, Donald Kossmann, Sandeep Lingam, Umar Farooq Minhas, Naveen Prakash, Vijendra Purohit, Hugh Qu, Chaitanya Sreenivas Ravella, Krystyna Reisteter, Sheetal Shrotri, Dixin Tang, Vikram Wakade]
resource: https://www.microsoft.com/en-us/research/publication/socrates-the-new-sql-server-in-the-cloud/
impact: high
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: socrates-pdf
    resource: https://www.microsoft.com/en-us/research/wp-content/uploads/2019/05/socrates.pdf
    title: "Socrates paper PDF (Microsoft Research)"
    author: org:microsoft-research
  - id: acm
    resource: https://dl.acm.org/doi/10.1145/3299869.3314047
    title: "ACM DL: Socrates (SIGMOD 2019)"
  - id: cloud-oltp-cost
    resource: https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/CloudOLTP.pdf
    title: "Haubenschild, Leis: OLTP in the Cloud: Architectures, Tradeoffs, and Cost (VLDB Journal, 2025)"
  - id: murat
    resource: http://muratbuffalo.blogspot.com/2022/08/socrates-new-sql-server-in-cloud-sigmod.html
    title: "Murat Demirbas: notes on Socrates (2022)"
---

# Claim
A DBaaS should separate **durability** (a fast, small, replicated log service: XLOG plus a landing zone on premium storage) from **availability** (page servers caching and replaying slices of the database, and secondaries). Long-term data sits on cheap blob storage. A single primary handles read/write transactions. The result supports 100 TB OLTP databases with fast scale-up, fast recovery and constant-time backups via snapshots, while reusing the SQL Server engine almost unchanged[^socrates-pdf][^acm].

# What happened next
Socrates shipped as Azure SQL Database Hyperscale, GA in May 2019, and became Microsoft's growth tier for large databases. It is one of the two canonical references, with Aurora, for the "log is the database" design and is widely taught and summarized[^murat]. The 2025 analytical cost model by Haubenschild and Leis found Socrates-like designs the **most cost-efficient architecture for a wide range of workloads** under moderate durability requirements, because they keep fewer full copies than Aurora's 3x replication[^cloud-oltp-cost]. Like Aurora, it left the single-writer limitation unaddressed.

# Related
[Disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) · [Azure SQL Hyperscale](/systems/azure-sql-hyperscale.md) · [OLTP in the Cloud (2025)](/papers/2025-oltp-in-the-cloud-cost.md)
