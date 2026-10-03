---
type: System
title: AlloyDB for PostgreSQL
description: "Google Cloud's PostgreSQL-compatible database with disaggregated, log-processing storage and an in-memory columnar engine. Launched May 2022, GA Dec 2022, plus a downloadable 'Omni' edition. Google's answer to Aurora."
resource: https://cloud.google.com/products/alloydb
tags: [postgres, oltp, htap, disaggregated-storage, google-cloud, columnar]
kind: cloud-service
first_release: 2022
org: "Google Cloud"
license: proprietary
outcome: growing
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/managed-dbaas-vs-repatriation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: alloydb-tc
    resource: https://techcrunch.com/2022/05/11/google-cloud-launches-alloydb-a-new-fully-managed-postgresql-database-service/
    title: "TechCrunch: Google Cloud launches AlloyDB (2022-05-11)"
  - id: alloydb-intro
    resource: https://cloud.google.com/blog/products/databases/introducing-alloydb-for-postgresql
    title: "Google Cloud blog: Introducing AlloyDB for PostgreSQL"
    author: org:google-cloud
  - id: alloydb-ga
    resource: https://cloud.google.com/blog/products/databases/announcing-the-general-availability-of-alloydb-for-postgresql
    title: "Google Cloud blog: AlloyDB GA (Dec 2022)"
    author: org:google-cloud
  - id: omni-tc
    resource: https://techcrunch.com/2023/03/29/google-cloud-launches-alloydb-omni-a-downloadable-version-of-its-postgresql-compatible-database/
    title: "TechCrunch: Google Cloud launches AlloyDB Omni (2023-03-29)"
  - id: omni-ga
    resource: https://www.infoq.com/news/2023/11/google-alloydb-omni-ga/
    title: "InfoQ: AlloyDB Omni GA (Nov 2023)"
  - id: alloydb-ai
    resource: https://www.infoq.com/news/2023/09/google-cloud-alloydb-ai-preview/
    title: "InfoQ: Google Cloud unveils AlloyDB AI (Sep 2023)"
---

# Summary
Google announced AlloyDB at I/O on May 11, 2022, claiming it was 4x faster than standard PostgreSQL and 2x faster than Aurora PostgreSQL on transactional workloads, and up to 100x faster on analytical queries[^alloydb-tc]. It reached GA on Dec 14, 2022[^alloydb-ga]. Like Aurora, it ships WAL to a disaggregated, regional storage layer that processes logs into pages. It adds an automatically managed **columnar engine** in memory for HTAP-style queries[^alloydb-intro]. Google also did something AWS didn't: **AlloyDB Omni**, a downloadable edition for on-prem, other clouds and laptops (preview Mar 2023, GA Nov 2023)[^omni-tc][^omni-ga]. From 2023 it marketed AlloyDB AI (vector search, in-database model calls)[^alloydb-ai].

# Timeline
| Date | Event |
|---|---|
| 2022-05-11 | Preview announced at Google I/O[^alloydb-tc] |
| 2022-12-14 | GA[^alloydb-ga] |
| 2023-03-29 | AlloyDB Omni preview[^omni-tc] |
| 2023-09 | AlloyDB AI preview[^alloydb-ai] |
| 2023-11 | Omni GA[^omni-ga] |

# What worked
- Brought the Aurora architecture to GCP with a credible HTAP twist.
- Omni reduced lock-in fears, an unusual move for a hyperscaler.

# What didn't
- Late to market (7 years after Aurora). Vendor-published benchmark claims were not independently reproduced at scale.
- Proprietary fork, so it lags upstream PostgreSQL versions. Google also runs Cloud SQL and Spanner (with a PostgreSQL interface), which confuses product positioning.

# Related
[Disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) · [Aurora](/systems/aurora.md) · [Spanner](/systems/spanner.md) · [AlloyDB launch](/events/2022-05-alloydb-launch.md)
