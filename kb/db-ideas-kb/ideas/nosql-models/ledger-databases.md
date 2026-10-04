---
type: Idea
title: "Ledger and blockchain databases"
description: "The 2017–18 blockchain wave produced databases with cryptographically verifiable, append-only histories (BigchainDB, Amazon QLDB). QLDB failed as a standalone service and BigchainDB development stalled; this is not a verdict on every ledger implementation. What survived is a feature: tamper-evident ledger tables inside ordinary relational databases (SQL Server/Azure SQL ledger)."
tags: [ledger, blockchain, immutability, audit, qldb, verifiability]
area: nosql-models
verdict: failed
hype_peak: 2018
adoption_2026: rare
origins: "Blockchain hype 2017; Merkle-tree audit logs; AWS internal transaction journals"
key_systems: [systems/amazon-qldb, systems/aurora]
related_ideas: [ideas/nosql-models/sql-nosql-convergence, ideas/distributed-sql/specialized-oltp-ledgers]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: bigchain-primary
    resource: https://github.com/bigchaindb/bigchaindb
    title: "BigchainDB source and development history"
  - id: tc-qldb
    resource: https://techcrunch.com/2018/11/28/amazon-gets-into-the-blockchain-with-quantum-ledger-database-managed-blockchain/
    title: "TechCrunch: Amazon gets into the blockchain with Quantum Ledger Database & Managed Blockchain (2018-11-28)"
  - id: infoq-qldb
    resource: https://www.infoq.com/news/2018/12/AWS-Blockchain-QLDB
    title: "InfoQ: AWS blockchain and QLDB (2018-12)"
    author: org:infoq
  - id: dolt-qldb
    resource: https://www.dolthub.com/blog/2024-08-12-qldb-deprecated-alternatives/
    title: "DoltHub: QLDB deprecated — looking for an alternative immutable database? (2024-08-12)"
  - id: hn-qldb
    resource: https://news.ycombinator.com/item?id=41000116
    title: "Hacker News: AWS is sunsetting QLDB (2024-07)"
  - id: ms-qldb
    resource: https://techcommunity.microsoft.com/blog/azuresqlblog/moving-from-amazon-quantum-ledger-database-qldb-to-ledger-in-azure-sql/4246237
    title: "Microsoft: Moving from Amazon QLDB to ledger in Azure SQL"
    author: org:microsoft
  - id: ms-ledger
    resource: https://techcommunity.microsoft.com/blog/azuresqlblog/announcing-azure-sql-database-ledger/2200401
    title: "Microsoft: Announcing Azure SQL Database ledger (2021)"
    author: org:microsoft
  - id: ms-ledger-doc
    resource: https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-overview?view=sql-server-ver17
    title: "Microsoft Learn: Ledger overview — SQL Server"
    author: org:microsoft
  - id: bigchain-dbdb
    resource: https://dbdb.io/db/bigchaindb
    title: "Database of Databases: BigchainDB"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: sw-codecommit
    resource: https://simonwillison.net/2024/Jul/30/aws-codecommit-quietly-deprecated/
    title: "Simon Willison: AWS CodeCommit quietly deprecated (2024-07-30)"
    author: person:simon-willison
  - id: duran
    resource: https://news.alvaroduran.com/p/if-amazon-cant-figure-out-how-to
    title: "Alvaro Duran: RIP Amazon QLDB"
---

# Summary

**Verdict: failed for the highlighted standalone bets; the capability survives.** At the height of the 2017–18 blockchain boom, several systems promised "blockchain properties" (immutability, cryptographic verifiability) with different trust models: QLDB used a central operator, while BigchainDB 2.0 used Tendermint consensus.[^bigchain-primary] The hyperscaler-backed example was Amazon QLDB, announced at re:Invent 2018 by Andy Jassy[^tc-qldb]. In July 2024 AWS quietly stopped taking new QLDB customers and set end of support for July 31, 2025. The suggested migration target was Aurora PostgreSQL, which gives up cryptographic verification entirely[^dolt-qldb][^hn-qldb]. BigchainDB, the "blockchain database" startup, was effectively abandoned and its company moved on to Ocean Protocol[^bigchain-dbdb]. Pavlo listed QLDB among 2024's database deaths[^pavlo-2024]. The idea survives as ledger tables in SQL Server 2022 and Azure SQL Database[^ms-ledger-doc], where Microsoft even pitched itself as QLDB's migration target[^ms-qldb].

# The idea

Keep an append-only journal with cryptographic commitments to the change history, so a verifier with independently retained digests can detect changes to committed history. A trusted operator (AWS, your DBA) runs it centrally, so you get blockchain-style auditability with ordinary database performance. Target uses were financial ledgers, supply-chain provenance, registries, HR and payroll history, and regulatory audit trails.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | AWS announces QLDB and Managed Blockchain at re:Invent (Nov 28); QLDB is based on AWS's internal journal technology[^tc-qldb][^infoq-qldb]; BigchainDB GmbH lays off its DBMS staff[^bigchain-dbdb] | + / − |
| 2019 | QLDB becomes a managed ledger service; documents are queried with PartiQL[^ms-qldb] | + |
| 2021 | Microsoft previews Azure SQL Database ledger[^ms-ledger] | + (feature) |
| 2022 | SQL Server 2022 GA ships ledger tables[^ms-ledger-doc] | + (feature) |
| 2024 | AWS deprecates QLDB (Jul 18 notice): no new customers, end of support 2025-07-31, migrate to Aurora PostgreSQL[^dolt-qldb][^hn-qldb] | − |
| 2025 | QLDB shuts down (Jul 31); undeleted data is lost[^hn-qldb] | − |

# What succeeded

- **Verifiable history as a feature of a general database.** SQL Server/Azure SQL ledger tables add hash-chained history and digest verification to ordinary tables with standard T-SQL[^ms-ledger-doc]. Users get auditability without changing databases.
- **The underlying techniques.** Merkle-tree journals, transparency logs (Certificate Transparency, Sigstore-style) and bitemporal/history tables are widely used, just not as a separate "ledger database" product.

# What failed

- **QLDB as a product.** It was a single-region, document-model service with its own (PartiQL) dialect, limited indexing and analytics, and per-I/O pricing. Customers kept auditable data next to their main database rather than in it, so the extra service rarely justified itself[^duran].
- **Sustained development.** BigchainDB's repository and release history show a long slowdown, but that does not establish that every blockchain database has the same adoption outcome.[^bigchain-primary]
- **Migration story.** AWS's recommended path (Aurora PostgreSQL with audit triggers) drops the core feature. That requires adopters who need verification to rebuild or replace it; it does not establish how many customers used the feature[^dolt-qldb].

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **Wrong unit of adoption.** Immutability and verification are properties people want *on* their existing data, not reasons to move data to a new engine. Features beat products.
2. **Hype timing.** Both products were conceived in the 2017–18 blockchain peak. When the hype faded, the remaining use cases ("audit log we can prove") were real but small.
3. **Trust model confusion.** A centrally operated ledger proves integrity only to people who trust the operator's digests. An audit trail, cryptographic integrity proof and decentralized agreement solve different problems; selecting an engine requires stating which threat model matters.
4. **Hyperscaler portfolio pruning.** In 2024 AWS restricted new sign-ups to several services and announced QLDB's future end of support[^sw-codecommit], and niche databases are an easy target.

# Lessons

- If a capability can be added to an existing database as a table option, a separate database built around it will struggle.
- Products launched at a hype peak need a use case that holds up after the hype is gone.
- Dependence on a niche managed service carries shutdown risk. Ask what the exit path keeps and what it drops.

# Related

- [Amazon QLDB](/systems/amazon-qldb.md), [Aurora](/systems/aurora.md)
- [AWS deprecates QLDB](/events/2024-07-amazon-qldb-deprecated.md)
- [SQL/NoSQL convergence](/ideas/nosql-models/sql-nosql-convergence.md)
