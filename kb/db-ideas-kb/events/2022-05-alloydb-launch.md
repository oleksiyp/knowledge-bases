---
type: Event
title: "Google announces AlloyDB for PostgreSQL"
description: "At Google I/O 2022 Google launched its Aurora-style disaggregated PostgreSQL service with a columnar engine. All three major hyperscalers now ran 'log is the database' OLTP."
date: 2022-05-11
year: 2022
kind: launch
signal: positive
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp]
systems: [systems/alloydb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: alloydb-tc
    resource: https://techcrunch.com/2022/05/11/google-cloud-launches-alloydb-a-new-fully-managed-postgresql-database-service/
    title: "TechCrunch: Google Cloud launches AlloyDB (2022-05-11)"
  - id: alloydb-ga
    resource: https://cloud.google.com/blog/products/databases/announcing-the-general-availability-of-alloydb-for-postgresql
    title: "Google Cloud blog: AlloyDB GA"
    author: org:google-cloud
---

# What happened
On May 11, 2022, Google previewed AlloyDB, a PostgreSQL-compatible managed database with disaggregated log-processing storage and an in-memory columnar accelerator. Google claimed 4x the transactional performance of standard PostgreSQL, 2x Aurora PostgreSQL, and up to 100x on analytical queries[^alloydb-tc]. It reached GA on Dec 14, 2022[^alloydb-ga].

# Why it matters
With AWS (Aurora), Microsoft (Hyperscale) and Google (AlloyDB) all shipping the same architecture, disaggregated OLTP became the industry default for managed relational databases. It also confirmed PostgreSQL, not MySQL, as the compatibility target of choice.

# Related
[Disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) · [AlloyDB](/systems/alloydb.md)
