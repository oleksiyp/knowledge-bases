---
type: Event
title: Microsoft acquires Citus Data
description: Microsoft acquires Citus Data to strengthen distributed PostgreSQL in Azure; the extension later becomes fully
  open source.
date: '2019-01-24'
year: 2019
kind: acquisition
signal: positive
ideas:
- ideas/distributed-sql/sharding-middleware
systems:
- systems/citus
- systems/postgresql
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: ms-citus
  resource: https://blogs.microsoft.com/blog/2019/01/24/microsoft-acquires-citus-data-re-affirming-its-commitment-to-open-source-and-accelerating-azure-postgresql-performance-and-scale/
  title: Microsoft acquires Citus Data (2019-01-24)
  author: org:microsoft
- id: citus11
  resource: https://www.citusdata.com/blog/2022/06/17/citus-11-goes-fully-open-source/
  title: Citus 11 for Postgres goes fully open source (2022-06-17)
  author: org:citus-data
---

# What happened
Microsoft announced its acquisition of Citus Data on January 24, 2019, bringing a PostgreSQL scale-out extension into its Azure database effort.[^ms-citus] Citus subsequently made its remaining enterprise features open source in version 11 in June 2022.[^citus11]

# Why it matters
The transaction illustrates how a database extension can become strategic infrastructure for a cloud provider. Its value lay in improving the scaling envelope of an established engine, rather than persuading applications to adopt an entirely new interface. The later opening of operational features also matters: acquisition did not necessarily mean closing the project. Our assessment is that this was a successful technology distribution path, while the acquisition itself does not establish that sharded Postgres became necessary for ordinary applications or that all upstream compatibility constraints disappeared.

# Related
- [Citus](/systems/citus.md)
- [Postgresql](/systems/postgresql.md)
- [Sharding Middleware](/ideas/distributed-sql/sharding-middleware.md)

[^ms-citus]: [Microsoft acquires Citus Data (2019-01-24)](https://blogs.microsoft.com/blog/2019/01/24/microsoft-acquires-citus-data-re-affirming-its-commitment-to-open-source-and-accelerating-azure-postgresql-performance-and-scale/).
[^citus11]: [Citus 11 for Postgres goes fully open source (2022-06-17)](https://www.citusdata.com/blog/2022/06/17/citus-11-goes-fully-open-source/).
