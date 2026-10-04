---
type: System
title: Amazon QLDB
description: "AWS's centralized ledger database with a cryptographically verifiable journal, announced at re:Invent 2018 as 'blockchain without decentralization'. AWS closed it to new customers in July 2024 and shut it down on July 31, 2025."
resource: https://aws.amazon.com/qldb/
tags: [ledger, blockchain, verifiability, aws, discontinued]
kind: cloud-service
first_release: 2019
org: "Amazon Web Services"
license: proprietary
outcome: dead
ideas: [ideas/nosql-models/ledger-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tc
    resource: https://techcrunch.com/2018/11/28/amazon-gets-into-the-blockchain-with-quantum-ledger-database-managed-blockchain/
    title: "TechCrunch: Amazon gets into the blockchain with QLDB (2018-11-28)"
  - id: infoq
    resource: https://www.infoq.com/news/2018/12/AWS-Blockchain-QLDB
    title: "InfoQ: AWS Blockchain and QLDB"
    author: org:infoq
  - id: dolt
    resource: https://www.dolthub.com/blog/2024-08-12-qldb-deprecated-alternatives/
    title: "DoltHub: QLDB deprecated (2024-08-12)"
  - id: hn
    resource: https://news.ycombinator.com/item?id=41000116
    title: "Hacker News: AWS is sunsetting QLDB"
  - id: ms
    resource: https://techcommunity.microsoft.com/blog/azuresqlblog/moving-from-amazon-quantum-ledger-database-qldb-to-ledger-in-azure-sql/4246237
    title: "Microsoft: Moving from Amazon QLDB to ledger in Azure SQL"
    author: org:microsoft
  - id: wgaca
    resource: https://db.cs.cmu.edu/papers/2024/whatgoesaround-sigmodrec2024.pdf
    title: "Stonebraker & Pavlo: What Goes Around Comes Around... And Around... (2024)"
---

# Summary

Andy Jassy announced QLDB at re:Invent on November 28, 2018, next to Amazon Managed Blockchain. AWS's argument was that most "blockchain" customers wanted an immutable, verifiable history, not decentralized consensus. QLDB exposed the internal journal technology AWS used for its own control-plane records[^tc][^infoq]. It stored Amazon Ion documents, used PartiQL for queries, and provided SHA-256 digests to verify the history. In July 2024 AWS quietly updated its documentation: no new customers, and end of support on July 31, 2025, after which data would be deleted. The suggested replacement was Aurora PostgreSQL, which gives up cryptographic verification[^dolt][^hn]. Microsoft published a guide for moving QLDB users to Azure SQL ledger tables[^ms]. Stonebraker and Pavlo cited QLDB as possibly the only sensible form of "blockchain database" (a private one), and it still failed[^wgaca].

# Timeline

| Year | Event |
|---|---|
| 2018 | Announced at re:Invent (Nov 28)[^tc] |
| 2019 | GA |
| 2024 | Deprecation: no new customers (Jul)[^dolt] |
| 2025 | End of support (Jul 31)[^hn] |

# What worked

- A clean design (append-only journal, Merkle digests) that showed the useful part of blockchain can be centralized.

# What didn't

- It was a separate database for a property users wanted on their existing data. It also had limited query and indexing ability and a niche document model.
- The suggested migration did not preserve cryptographic verification automatically. That is an exit-path gap, not evidence that customers never used the feature.[^ms]

# Related

- [Ledger databases](/ideas/nosql-models/ledger-databases.md)
- [Aurora](/systems/aurora.md)
- [AWS deprecates QLDB](/events/2024-07-amazon-qldb-deprecated.md)
