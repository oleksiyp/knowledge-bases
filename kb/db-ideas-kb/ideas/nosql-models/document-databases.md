---
type: Idea
title: "Document databases grow up (MongoDB, Atlas and the compatible clones)"
description: "The JSON document model became a mainstream option, and MongoDB turned it into a $2.46B-revenue business through Atlas, its managed cloud. The license fight (SSPL, 2018) did not stop clones: AWS DocumentDB, Cosmos DB and an MIT-licensed, Postgres-based DocumentDB at the Linux Foundation now offer the MongoDB API."
tags: [document-model, mongodb, json, licensing, dbaas, wire-compatibility]
area: nosql-models
verdict: won
hype_peak: 2019
adoption_2026: mainstream
origins: "MongoDB (2009), CouchDB (2005); JSON-over-HTTP web apps of the late 2000s"
key_systems: [systems/mongodb, systems/documentdb, systems/ferretdb, systems/cosmos-db, systems/postgresql, systems/couchbase]
related_ideas: [ideas/nosql-models/sql-nosql-convergence, ideas/nosql-models/redis-and-in-memory-key-value]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: atlas-10k
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm
    title: "MongoDB FY2026 Form 10-K"
  - id: mdb-sspl
    resource: https://www.mongodb.com/company/newsroom/press-releases/mongodb-issues-new-server-side-public-license-for-mongodb-community-server
    title: "MongoDB issues new Server Side Public License for MongoDB Community Server (2018-10-16)"
    author: org:mongodb
  - id: sspl-wiki
    resource: https://en.wikipedia.org/wiki/Server_Side_Public_License
    title: "Server Side Public License — Wikipedia (Debian, RHEL, Fedora removals; OSI withdrawal)"
  - id: reg-docdb
    resource: https://www.theregister.com/2019/01/10/amazon_documentdb/
    title: "The Register: Amazon takes aim at MongoDB with launch of Mongo-compatible DocumentDB (2019-01-10)"
    author: org:the-register
  - id: mdb-fy26
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828026013199/mdb-13126xex991xrelease.htm
    title: "MongoDB Q4 and full-year fiscal 2026 results (8-K exhibit 99.1)"
    author: org:mongodb
  - id: jepsen-mdb
    resource: https://jepsen.io/analyses/mongodb-4.2.6
    title: "Jepsen: MongoDB 4.2.6 (2020)"
    author: person:kyle-kingsbury
  - id: lf-docdb
    resource: https://www.linuxfoundation.org/press/linux-foundation-welcomes-documentdb-to-advance-open-developer-first-nosql-innovation
    title: "Linux Foundation welcomes DocumentDB (2025-08-25)"
    author: org:linux-foundation
  - id: reg-ms-docdb
    resource: https://www.theregister.com/2025/01/27/microsoft_builds_open_source_document/
    title: "The Register: Microsoft builds open source document database on PostgreSQL, suggests FerretDB as front end (2025-01-27)"
    author: org:the-register
  - id: mdb-v-ferret
    resource: https://www.courtlistener.com/docket/70354365/mongodb-inc-v-ferretdb-inc/
    title: "MongoDB, Inc. v. FerretDB Inc., 1:25-cv-00641 (D. Del.) docket"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: voyage
    resource: https://www.bloomberg.com/news/articles/2025-02-24/mongodb-buys-voyage-ai-for-220-million-to-bolster-ai-search
    title: "Bloomberg: MongoDB buys Voyage AI for $220 million to bolster AI search (2025-02-24)"
  - id: azure-docdb
    resource: https://devblogs.microsoft.com/cosmosdb/announced-at-ignite-2025-azure-documentdb-mcp-toolkit-fleet-analytics-and-more/
    title: "Azure Cosmos DB blog: Announced at Ignite 2025 — Azure DocumentDB"
    author: org:microsoft
---

# Summary

**Verdict: won, with an asterisk.** Storing nested, flexibly structured documents became a mainstream option. PostgreSQL-backed DocumentDB is particularly clear evidence that the document interface can succeed independently of its original storage engine.[^lf-docdb] MongoDB Inc. made the model pay. Fiscal 2026 revenue was $2.46B, and 73% of it came from the managed Atlas service[^mdb-fy26][^atlas-10k]. The asterisk is that MongoDB's own moat turned out to be the managed service and the brand, not the API or the license. AWS shipped an API clone in 2019[^reg-docdb]. By 2025 Microsoft, AWS and Google were backing an MIT-licensed, Postgres-based "DocumentDB" at the Linux Foundation that aims for MongoDB compatibility[^lf-docdb]. The document model became a commodity interface, and MongoDB answered with lawsuits[^mdb-v-ferret] and AI features[^voyage].

# The idea

The idea was to store an aggregate (an order with its line items, a user with their settings) as one nested document, query it by field, and let the schema change without migrations. In practice it promised three things: faster development (objects map to documents), horizontal scale through built-in sharding, and no ORM impedance mismatch. By 2018 the "NoSQL vs SQL" war was mostly over. The 2018–2026 question was whether a document-first vendor could build a lasting business against hyperscalers and against relational databases that now spoke JSON.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | MongoDB 4.0 adds multi-document ACID transactions; MongoDB relicenses Community Server under SSPL (Oct 16)[^mdb-sspl] | + / − |
| 2019 | Debian, Fedora and RHEL drop MongoDB over SSPL[^sspl-wiki]; AWS launches Amazon DocumentDB, emulating the MongoDB 3.6 API (Jan 9)[^reg-docdb] | − |
| 2020 | Jepsen finds MongoDB 4.2.6 transactions violate snapshot isolation in tested configurations, including strong concerns[^jepsen-mdb] | − |
| 2021–23 | Atlas becomes the majority of MongoDB revenue; FerretDB (Mongo API over Postgres) launches in 2021[^pavlo-2025] | + |
| 2023 | MongoDB sends FerretDB a cease-and-desist letter (Nov)[^pavlo-2025] | − |
| 2025 | Microsoft open-sources DocumentDB (BSON + Mongo query extensions for Postgres)[^reg-ms-docdb]; MongoDB buys Voyage AI for ~$220M[^voyage]; MongoDB sues FerretDB in Delaware (May 23)[^mdb-v-ferret]; DocumentDB joins the Linux Foundation with AWS and Google support (Aug 25)[^lf-docdb]; Azure renames its vCore Mongo service "Azure DocumentDB" (Nov)[^azure-docdb] | mixed |
| 2026 | MongoDB FY26: $2.46B revenue (+23%), Atlas 73% of revenue (+29%), 65,200+ customers[^mdb-fy26] | + |

# What succeeded

- **The model.** Nested, schema-flexible documents are a normal choice for operational apps. Even systems that are not "document databases" (Postgres JSONB, DynamoDB items, Cosmos DB, Couchbase, Firestore) ship document semantics.
- **Managed service as the business.** Atlas grew from a minority of MongoDB revenue to 73% by FY26[^mdb-fy26]. The reported revenue mix shows the importance of operating the service.[^atlas-10k]
- **Closing the correctness gap.** Multi-document transactions (4.0, 2018) broadened the applications MongoDB could serve. Jepsen's 2020 findings nevertheless show why guarantees must be assessed per version and read/write concern, rather than assumed from the word ACID.[^jepsen-mdb]
- **API as a standard.** The MongoDB wire protocol and query language became a de facto standard. That is good for users and awkward for MongoDB.

# What failed

- **SSPL as a moat.** SSPL got MongoDB removed from Linux distributions[^sspl-wiki] and did not stop AWS, which built DocumentDB from scratch as an API emulation instead of hosting MongoDB code[^reg-docdb]. Microsoft did the same with Cosmos DB's Mongo API and then open-sourced a Postgres-based engine for it[^reg-ms-docdb].
- **Schema flexibility does not remove schema management.** A changed document shape can still break application assumptions. Treating flexible storage as a replacement for validation or migration discipline is a design mistake, not a measured indictment of every document deployment.
- **Containing compatibility.** MongoDB's patent and trademark suit against FerretDB[^mdb-v-ferret] illustrates that API compatibility can carry legal disputes even alongside a foundation-governed alternative; the existence of the suit does not establish infringement[^pavlo-2025].

# Why

The following is causal analysis of the cited examples, not a measurement of worldwide market share.

1. **The relational camp absorbed the feature.** Once Postgres had JSONB with GIN indexes, "I need flexible JSON" stopped being a reason to adopt a separate database. Document-first vendors had to compete on operations, scale-out and developer experience instead.
2. **Interfaces are copyable, operations are not.** The Mongo API can be re-implemented in a few years (AWS 2019, Microsoft 2025). Operating a global managed service adds support, reliability and integration work beyond interface emulation. Atlas revenue supports that interpretation; it does not isolate the financial effect of SSPL.
3. **Sharding is still the real differentiator.** Built-in sharding is a separate architectural capability from storing JSON. A fair comparison must include the partitioning, routing and transaction design of each deployment, rather than assume that a common document interface implies identical scalability.
4. **AI repositioning.** Like most NoSQL vendors, MongoDB repositioned around vector search and embeddings (Atlas Vector Search, Voyage AI) to stay on the AI buying list[^voyage].

# Lessons

- A data model that wins gets copied. The durable asset is the managed service, not the API.
- Restrictive licenses do not stop hyperscalers that can clean-room the interface. The documented distribution losses are a cost, while the effect on commercial licensing revenue is not isolated here.
- A NoSQL product reaches maturity when it adds back what it once dropped: transactions, schemas, SQL-like aggregation.
- Being an open standard (the Linux Foundation's DocumentDB) and owning the original vendor's API are different things. Expect lawsuits at that boundary.

# Related

- [MongoDB](/systems/mongodb.md), [DocumentDB](/systems/documentdb.md), [FerretDB](/systems/ferretdb.md), [Azure Cosmos DB](/systems/cosmos-db.md), [PostgreSQL](/systems/postgresql.md), [Couchbase](/systems/couchbase.md)
- [SQL/NoSQL convergence](/ideas/nosql-models/sql-nosql-convergence.md)
- Events: [MongoDB adopts SSPL](/events/2018-10-mongodb-sspl.md), [Amazon DocumentDB launches](/events/2019-01-amazon-documentdb-launch.md), [DocumentDB joins the Linux Foundation](/events/2025-08-documentdb-linux-foundation.md)
