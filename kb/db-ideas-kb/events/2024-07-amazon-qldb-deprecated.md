---
type: Event
title: AWS announces the end of Amazon QLDB
description: AWS stopped accepting new QLDB customers and announced end of support
  on July 31, 2025. The July 2024 notice was documented by DoltHub; AWS later published
  guidance pointing customers toward Aurora PostgreSQL migration.
date: '2024-07-18'
year: 2024
kind: discontinuation
signal: negative
ideas:
- ideas/nosql-models/ledger-databases
systems:
- systems/amazon-qldb
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  resource: https://www.dolthub.com/blog/2024-08-12-qldb-deprecated-alternatives/
  title: DoltHub records QLDB deprecation notice
- id: aws
  resource: https://aws.amazon.com/jp/blogs/news/migration-from-amazon-qldb/
  title: AWS QLDB end-of-support and migration guidance, October 2024
---

# What happened

AWS stopped accepting new QLDB customers and announced end of support on July 31, 2025. The July 2024 notice was documented by DoltHub; AWS later published guidance pointing customers toward Aurora PostgreSQL migration.[^announcement][^aws]

# Why it matters

A hyperscaler-backed ledger service still needed a viable lifecycle and exit path. Moving records into relational tables can preserve the data without automatically preserving QLDB's native verification workflow. Users requiring tamper evidence must evaluate that property explicitly.

The shutdown is strong evidence against this particular standalone product bet. It does not demonstrate that cryptographic auditability is useless, that no customers depended on it, or that every ledger database failed. Ledger features in general-purpose systems address a related requirement with a different adoption cost.

# Related

- [amazon-qldb](/systems/amazon-qldb.md)
- [ledger databases](/ideas/nosql-models/ledger-databases.md)
