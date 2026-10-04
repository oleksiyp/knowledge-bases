---
type: System
title: MongoDB
description: "The leading document database, and the clearest NoSQL commercial success. Atlas, the managed cloud service, was 73% of $2.46B fiscal-2026 revenue. It pioneered the SSPL license (2018), which did not stop API clones, and it is suing FerretDB."
resource: https://www.mongodb.com
tags: [document, nosql, sspl, dbaas, atlas, vector-search]
kind: product
first_release: 2009
org: "MongoDB, Inc. (NASDAQ: MDB, IPO 2017)"
license: SSPL-1.0
outcome: thriving
ideas: [ideas/nosql-models/document-databases, ideas/nosql-models/sql-nosql-convergence]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: atlas-10k
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm
    title: "MongoDB FY2026 Form 10-K"
  - id: sspl
    resource: https://www.mongodb.com/company/newsroom/press-releases/mongodb-issues-new-server-side-public-license-for-mongodb-community-server
    title: "MongoDB issues new Server Side Public License (2018-10-16)"
    author: org:mongodb
  - id: fy26
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828026013199/mdb-13126xex991xrelease.htm
    title: "MongoDB full-year fiscal 2026 results (8-K)"
    author: org:mongodb
  - id: jepsen
    resource: https://jepsen.io/analyses/mongodb-4.2.6
    title: "Jepsen: MongoDB 4.2.6"
    author: person:kyle-kingsbury
  - id: voyage
    resource: https://www.bloomberg.com/news/articles/2025-02-24/mongodb-buys-voyage-ai-for-220-million-to-bolster-ai-search
    title: "Bloomberg: MongoDB buys Voyage AI for $220 million (2025-02-24)"
  - id: ferret-suit
    resource: https://www.courtlistener.com/docket/70354365/mongodb-inc-v-ferretdb-inc/
    title: "MongoDB, Inc. v. FerretDB Inc. (D. Del. 1:25-cv-00641)"
  - id: wgaca
    resource: https://db.cs.cmu.edu/papers/2024/whatgoesaround-sigmodrec2024.pdf
    title: "Stonebraker & Pavlo: What Goes Around Comes Around... And Around... (2024)"
---

# Summary

MongoDB is a major commercial document platform. Its 2018–2026 product evolution added multi-document ACID transactions (4.0, 2018), a SQL interface for Atlas (2021)[^wgaca], vector search, and queryable encryption. Its business became a cloud-service business. In fiscal 2026 (ending Jan 31, 2026), revenue was $2.46B (+23%), and Atlas was 73% of it[^atlas-10k], up from 70% the prior year and growing 29%, with 65,200+ customers[^fy26]. Its 2018 switch to SSPL[^sspl] created a license other vendors copied, but it did not stop AWS DocumentDB or Microsoft's compatible engines.

# Timeline

| Year | Event |
|---|---|
| 2018 | 4.0 adds multi-document transactions; Community Server relicensed to SSPL (Oct 16)[^sspl] |
| 2019 | AWS launches DocumentDB with MongoDB compatibility; Debian, RHEL and Fedora drop MongoDB |
| 2020 | Jepsen finds 4.2.6 transactions violate snapshot isolation in tested configurations, including strong concerns[^jepsen] |
| 2021 | Atlas SQL interface[^wgaca] |
| 2025 | Acquires Voyage AI (embeddings and reranking) for ~$220M[^voyage]; sues FerretDB for patent and trademark infringement (May 23)[^ferret-suit] |
| 2026 | FY26 revenue $2.46B, Atlas 73%[^fy26] |

# What worked

- Atlas on all three hyperscalers. A managed multi-cloud service turned out to be a stronger moat than the license.
- Steadily closing correctness and feature gaps (transactions, schema validation, time-series collections, search, vectors).
- A developer-first brand that made the document model a common default.

# What didn't

- The SSPL change did not prevent compatible API implementations. The Atlas revenue evidence supports a managed-service business, but cannot by itself measure whether SSPL improved licensing revenue.[^sspl]
- Defaults that were too weak for years (write and read concerns), which Jepsen exposed[^jepsen].
- MongoDB filed allegations against FerretDB; this page records the filing and does not infer a finding of infringement.[^ferret-suit]

# Related

- [Document databases](/ideas/nosql-models/document-databases.md), [SQL/NoSQL convergence](/ideas/nosql-models/sql-nosql-convergence.md)
- [DocumentDB](/systems/documentdb.md), [FerretDB](/systems/ferretdb.md), [Azure Cosmos DB](/systems/cosmos-db.md)
- [MongoDB adopts SSPL](/events/2018-10-mongodb-sspl.md)
