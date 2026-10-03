---
type: System
title: Amazon Aurora DSQL
description: "Serverless, PostgreSQL-compatible distributed SQL database with multi-region active-active strong consistency, built from separate query-processor, adjudicator, journal and storage services. GA May 2025. Strong design, but limited Postgres feature coverage."
resource: https://aws.amazon.com/rds/aurora/dsql/
tags: [distributed-sql, serverless, multi-region, postgres-compatible, occ, aws]
kind: cloud-service
first_release: 2025
org: "Amazon Web Services"
license: proprietary
outcome: growing
ideas: [ideas/cloud-architecture/hyperscaler-distributed-sql, ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/disaggregated-storage-compute-oltp]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: dsql-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-aurora-dsql-generally-available
    title: "AWS: Amazon Aurora DSQL is now generally available (2025-05-27)"
    author: org:aws
  - id: dsql-press
    resource: https://press.aboutamazon.com/2025/5/aws-announces-the-general-availability-of-amazon-aurora-dsql-the-fastest-distributed-sql-database
    title: "Amazon press release: Aurora DSQL GA"
    author: org:aws
  - id: brooker-reads
    resource: https://brooker.co.za/blog/2024/12/04/inside-dsql.html
    title: "Marc Brooker: DSQL Vignette: Reads and Compute"
    author: person:marc-brooker
  - id: brooker-writes
    resource: https://brooker.co.za/blog/2024/12/05/inside-dsql-writes.html
    title: "Marc Brooker: DSQL Vignette: Transactions and Durability"
    author: person:marc-brooker
  - id: dsql-paper
    resource: https://arxiv.org/abs/2607.13276
    title: "Brooker et al.: Aurora DSQL: Scalable, Multi-Region OLTP (arXiv 2607.13276, July 2026)"
  - id: dsql-limits
    resource: https://andrewbaker.ninja/2025/11/19/amazon-aurora-dsql-a-deep-dive-into-performance-and-limitations/
    title: "Andrew Baker: Aurora DSQL deep dive into performance and limitations"
  - id: dsql-fk
    resource: https://dev.to/roosterdev/aurora-dsql-now-supports-foreign-keys-what-else-2dp0
    title: "DEV: Aurora DSQL now supports foreign keys"
---

# Summary
Aurora DSQL was announced at re:Invent in December 2024 and became GA on May 27, 2025, in eight regions. AWS markets it as "the fastest serverless distributed SQL database", with 99.999% multi-region availability and strong consistency. The "4x faster" claim has not been independently benchmarked[^dsql-ga][^dsql-press]. Apart from the name and PostgreSQL's parser and planner, it shares little with Aurora. Stateless query processors run in Firecracker microVMs. Reads use MVCC at precise timestamps from AWS's time-sync service, with no coordination. Writes are buffered locally and checked for conflicts optimistically at COMMIT by adjudicators, then made durable in a replicated journal[^brooker-reads][^brooker-writes]. The July 2026 paper claims it scales "from zero to millions of transactions per second"[^dsql-paper].

# Timeline
| Date | Event |
|---|---|
| 2024-12 | Preview at re:Invent. Brooker's design blog series[^brooker-reads] |
| 2025-05-27 | GA in 8 regions with CloudWatch, AWS Backup, CMK encryption[^dsql-ga] |
| 2025 | Foreign key support added[^dsql-fk] |
| 2026-07 | Design paper on arXiv[^dsql-paper] |

# What worked
- Clean disaggregated design. All cross-region coordination happens once per commit[^brooker-writes].
- Truly serverless: no nodes or shards to size.

# What didn't (yet)
- Feature gaps: no extensions (so no pgvector or PostGIS), no triggers, PL/pgSQL, temp tables or views. Transactions are limited to 3,000 rows and 5 minutes[^dsql-limits].
- OCC aborts must be retried by applications. Contended workloads suffer.
- No public adoption data.

# Related
[Hyperscaler distributed SQL](/ideas/cloud-architecture/hyperscaler-distributed-sql.md) · [Aurora](/systems/aurora.md) · [Spanner](/systems/spanner.md) · [CockroachDB](/systems/cockroachdb.md) · [Paper](/papers/2026-aurora-dsql.md) · [GA event](/events/2025-05-aurora-dsql-ga.md)
