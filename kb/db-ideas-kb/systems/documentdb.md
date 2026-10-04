---
type: System
title: DocumentDB
description: "Two products share the name. Amazon DocumentDB (2019) is AWS's managed MongoDB-API emulation. DocumentDB (2025) is Microsoft's MIT-licensed, Postgres-based document engine, donated to the Linux Foundation with AWS and Google backing as an open MongoDB-compatible standard."
resource: https://github.com/documentdb/documentdb
tags: [document, mongodb-compatible, postgres-extension, linux-foundation, wire-compatibility]
kind: oss
first_release: 2025
org: "Linux Foundation (originally Microsoft); separate Amazon DocumentDB service by AWS"
license: MIT
outcome: growing
ideas: [ideas/nosql-models/document-databases, ideas/nosql-models/sql-nosql-convergence]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: reg-aws
    resource: https://www.theregister.com/2019/01/10/amazon_documentdb/
    title: "The Register: Amazon takes aim at MongoDB with launch of Mongo-compatible DocumentDB (2019-01-10)"
    author: org:the-register
  - id: reg-ms
    resource: https://www.theregister.com/2025/01/27/microsoft_builds_open_source_document/
    title: "The Register: Microsoft builds open source document database on PostgreSQL (2025-01-27)"
    author: org:the-register
  - id: lf
    resource: https://www.linuxfoundation.org/press/linux-foundation-welcomes-documentdb-to-advance-open-developer-first-nosql-innovation
    title: "Linux Foundation welcomes DocumentDB (2025-08-25)"
    author: org:linux-foundation
  - id: ms-lf
    resource: https://opensource.microsoft.com/blog/2025/08/25/documentdb-joins-the-linux-foundation/
    title: "Microsoft Open Source blog: DocumentDB joins the Linux Foundation"
    author: org:microsoft
  - id: azure
    resource: https://devblogs.microsoft.com/cosmosdb/announced-at-ignite-2025-azure-documentdb-mcp-toolkit-fleet-analytics-and-more/
    title: "Azure Cosmos DB blog: Announced at Ignite 2025 — Azure DocumentDB"
    author: org:microsoft
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

"DocumentDB" names two things, and both show that the MongoDB API has become a commodity.

1. **Amazon DocumentDB (with MongoDB compatibility)** launched January 9, 2019. It initially emulated the MongoDB 3.6 API on Aurora-style storage without using MongoDB code, a competing implementation that did not depend on licensing MongoDB server code. MongoDB's CEO called it "a poor imitation"[^reg-aws].
2. **DocumentDB (open source)** is a set of PostgreSQL extensions (BSON type plus document query operators) that Microsoft built for Azure Cosmos DB for MongoDB vCore and open-sourced in early 2025[^reg-ms]. It joined the Linux Foundation in August 2025 under MIT, with AWS and Google support and a goal of an open standard for document databases[^lf][^ms-lf]. In November 2025 Azure renamed its vCore service "Azure DocumentDB"[^azure].

# Timeline

| Year | Event |
|---|---|
| 2019 | Amazon DocumentDB GA (Jan 9)[^reg-aws] |
| 2025 | Microsoft open-sources the DocumentDB Postgres extensions; FerretDB 2.0 adopts them as its engine[^reg-ms] |
| 2025 | DocumentDB joins the Linux Foundation (Aug 25); nearly 2,000 GitHub stars at donation[^lf] |
| 2025 | Azure Cosmos DB for MongoDB (vCore) renamed Azure DocumentDB (Nov)[^azure] |

# What worked

- Running the document model on Postgres reuses a mature transactional and storage core and its tooling.
- Neutral governance and multi-vendor backing create an independently governed option for document workloads.

# What didn't

- Compatibility must be tested at the feature, query and behavioral level; shared drivers do not make Amazon DocumentDB, the foundation project and MongoDB interchangeable. Amazon DocumentDB is not the MIT-licensed project described by this page's metadata.[^lf][^reg-aws]
- Legal ambiguity: Pavlo points out that MongoDB is suing FerretDB over the same kind of compatibility that DocumentDB's charter describes[^pavlo-2025].

# Related

- [Document databases](/ideas/nosql-models/document-databases.md)
- [MongoDB](/systems/mongodb.md), [FerretDB](/systems/ferretdb.md), [Azure Cosmos DB](/systems/cosmos-db.md), [PostgreSQL](/systems/postgresql.md)
- [Amazon DocumentDB launches](/events/2019-01-amazon-documentdb-launch.md), [DocumentDB joins the Linux Foundation](/events/2025-08-documentdb-linux-foundation.md)
