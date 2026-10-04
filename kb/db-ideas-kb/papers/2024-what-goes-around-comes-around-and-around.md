---
type: Paper
title: "What Goes Around Comes Around... And Around..."
description: "Stonebraker and Pavlo's 2024 survey of 20 years of database ideas. It concludes that non-relational data models are either niches or are turning into SQL/relational systems, and that the real advances were architectural (columnar, cloud, lakehouse)."
year: 2024
venue: "SIGMOD Record 53(2), June 2024"
authors: [Michael Stonebraker, Andrew Pavlo]
resource: https://db.cs.cmu.edu/papers/2024/whatgoesaround-sigmodrec2024.pdf
impact: medium
ideas: [ideas/nosql-models/sql-nosql-convergence, ideas/nosql-models/graph-databases, ideas/nosql-models/document-databases, ideas/nosql-models/wide-column-stores, ideas/nosql-models/ledger-databases, ideas/nosql-models/search-engines-as-databases]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: paper
    resource: https://db.cs.cmu.edu/papers/2024/whatgoesaround-sigmodrec2024.pdf
    title: "Stonebraker & Pavlo: What Goes Around Comes Around... And Around... (PDF)"
    author: person:andy-pavlo
  - id: sigrec
    resource: https://sigmodrecord.org/2024/06/30/what-goes-around-comes-around-and-around/
    title: "SIGMOD Record listing (2024-06-30)"
  - id: datanami
    resource: https://www.datanami.com/2024/07/08/dont-believe-the-big-database-hype-stonebraker-warns/
    title: "Datanami: Don't believe the big database hype, Stonebraker warns (2024-07-08)"
  - id: pg19-revert
    resource: https://www.commandprompt.com/blog/two-features-just-left-postgresql-19/
    title: "Command Prompt: Two features just left PostgreSQL v19 (2026-09)"
  - id: lf-docdb
    resource: https://www.linuxfoundation.org/press/linux-foundation-welcomes-documentdb-to-advance-open-developer-first-nosql-innovation
    title: "Linux Foundation welcomes DocumentDB (2025-08-25)"
    author: org:linux-foundation
  - id: dolt-qldb
    resource: https://www.dolthub.com/blog/2024-08-12-qldb-deprecated-alternatives/
    title: "DoltHub: QLDB deprecated (2024-08-12)"
---

# Claim

Stonebraker and Pavlo revisit their earlier critique of database-model fashion, surveying developments from roughly 2005 to 2024. Their central argument is that many non-relational systems either serve narrower markets or reintroduce relational capabilities. They contrast that convergence with substantial progress in physical architecture: columnar execution, cloud systems and lakehouses.[^paper][^sigrec]

The paper groups document stores with relational systems that increasingly support semi-structured values; treats graph and wide-column systems as specialist categories; and questions the need for standalone vector and blockchain databases. It acknowledges search as a useful separate component while arguing that relational engines should offer stronger search capabilities. These are the authors' judgments, not independently measured market shares.[^paper]

# What happened next

Subsequent events offer useful tests rather than a blanket confirmation. QLDB's discontinuation supports skepticism about that standalone ledger product.[^dolt-qldb] Microsoft's PostgreSQL-based DocumentDB demonstrates that a document interface need not imply a non-relational storage core.[^lf-docdb] Neither proves that all specialized engines lack value.

Graph-query absorption has also been slower than a simple convergence story implies: PostgreSQL's proposed SQL/PGQ support was reverted before version 19.[^pg19-revert] Standards, implementation maturity and production ergonomics remain separate hurdles.

The paper is best read as an opinionated framework for asking whether a workload needs a new engine, not as an adoption survey or a benchmark. Its medium impact rating reflects its role in debate and teaching; this page does not claim a measured causal effect on product design. Operational simplicity, service quality and ecosystem fit can justify a product even when its logical model overlaps an incumbent.

# Related

- [SQL/NoSQL convergence](/ideas/nosql-models/sql-nosql-convergence.md)
- [Graph databases](/ideas/nosql-models/graph-databases.md), [Document databases](/ideas/nosql-models/document-databases.md), [Ledger databases](/ideas/nosql-models/ledger-databases.md)
