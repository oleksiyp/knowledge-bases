---
type: Event
title: DocumentDB joins the Linux Foundation
description: The Linux Foundation welcomed the MIT-licensed DocumentDB project on
  August 25, 2025. Originating at Microsoft, it uses PostgreSQL to implement document
  operations and targets compatibility with MongoDB drivers. Microsoft, AWS and Google
  supported the project.
date: '2025-08-25'
year: 2025
kind: pivot
signal: positive
ideas:
- ideas/nosql-models/document-databases
systems:
- systems/documentdb
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  resource: https://www.linuxfoundation.org/press/linux-foundation-welcomes-documentdb-to-advance-open-developer-first-nosql-innovation
  title: Linux Foundation welcomes DocumentDB
---

# What happened

The Linux Foundation welcomed the MIT-licensed DocumentDB project on August 25, 2025. Originating at Microsoft, it uses PostgreSQL to implement document operations and targets compatibility with MongoDB drivers. Microsoft, AWS and Google supported the project.[^announcement]

# Why it matters

This is a project-governance and interoperability initiative, not an ISO standard. It also must not be confused with Amazon's separately implemented DocumentDB managed service.

The event supports the SQL/NoSQL convergence thesis: document interfaces can sit above a relational engine. Multi-vendor backing and a permissive license create an alternative adoption path, but neither proves complete feature parity or eliminates migration testing. A successful data model can spread to implementations outside the company that originally popularized it.

# Related

- [documentdb](/systems/documentdb.md)
- [document databases](/ideas/nosql-models/document-databases.md)
