---
type: Event
title: "AWS launches DocumentDB with MongoDB compatibility"
description: "On 9 Jan 2019, three months after MongoDB adopted SSPL, AWS made Amazon DocumentDB generally available: a MongoDB 3.6 API-compatible service built on Aurora-style storage with no MongoDB code."
date: 2019-01-09
year: 2019
kind: launch
signal: mixed
ideas: [ideas/business-licensing/hyperscalers-capture-dbms-market, ideas/business-licensing/source-available-licenses]
systems: [systems/documentdb, systems/mongodb, systems/aurora]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: aws-ga
    resource: "https://aws.amazon.com/about-aws/whats-new/2019/01/amazon-documentdb-with-mongodb-compatibility-generally-available/"
    title: "AWS: Amazon DocumentDB (with MongoDB compatibility) generally available (2019-01-09)"
  - id: geekwire
    resource: "https://www.geekwire.com/2019/amazon-web-services-calls-mongodbs-licensing-bluff-documentdb-new-managed-database/"
    title: "GeekWire: AWS calls MongoDB licensing bluff with DocumentDB"
  - id: reg
    resource: "https://www.theregister.com/2019/01/10/amazon_documentdb/"
    title: "The Register: Amazon DocumentDB (2019-01-10)"
---

# What happened

AWS launched Amazon DocumentDB, a managed document database that implements the MongoDB 3.6 wire protocol and API on AWS's own storage engine.[^aws-ga][^reg] Because it uses no MongoDB source and targets an API version from before SSPL, the new license did not apply.[^geekwire]

# Why it matters

It showed the limit of license-based defense: a hyperscaler can reimplement a popular API. It also showed the limit of compatibility: DocumentDB lagged MongoDB features for years, and MongoDB's own Atlas service kept winning developers on AWS. It started the pattern of cloud "compatible" services (Keyspaces for Cassandra, Babelfish for SQL Server).

# Related

- [Hyperscalers capture the DBMS market](/ideas/business-licensing/hyperscalers-capture-dbms-market.md) · [MongoDB SSPL](/events/2018-10-mongodb-sspl.md) · [DocumentDB](/systems/documentdb.md)

[^aws-ga]: AWS: Amazon DocumentDB (with MongoDB compatibility) generally available (2019-01-09).
[^geekwire]: GeekWire: AWS calls MongoDB licensing bluff with DocumentDB.
[^reg]: The Register: Amazon DocumentDB (2019-01-10).
