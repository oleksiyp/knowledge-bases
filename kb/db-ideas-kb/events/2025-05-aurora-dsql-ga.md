---
type: Event
title: "Amazon Aurora DSQL becomes generally available"
description: "AWS's serverless, multi-region, active-active PostgreSQL-compatible distributed SQL database reached GA in eight regions, with notable compatibility gaps."
date: 2025-05-27
year: 2025
kind: launch
signal: mixed
ideas: [ideas/cloud-architecture/hyperscaler-distributed-sql, ideas/cloud-architecture/serverless-databases]
systems: [systems/aurora-dsql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dsql-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-aurora-dsql-generally-available
    title: "AWS: Amazon Aurora DSQL is now generally available"
    author: org:aws
  - id: dsql-press
    resource: https://press.aboutamazon.com/2025/5/aws-announces-the-general-availability-of-amazon-aurora-dsql-the-fastest-distributed-sql-database
    title: "Amazon press release: Aurora DSQL GA"
    author: org:aws
  - id: dsql-limits
    resource: https://andrewbaker.ninja/2025/11/19/amazon-aurora-dsql-a-deep-dive-into-performance-and-limitations/
    title: "Andrew Baker: Aurora DSQL deep dive into performance and limitations"
---

# What happened
On May 27, 2025, about six months after its re:Invent 2024 preview, Aurora DSQL became GA in eight regions. It added CloudWatch, AWS Backup and customer-managed KMS keys. AWS claimed 99.999% multi-region availability and reads and writes "up to 4x faster than other popular distributed SQL databases"[^dsql-ga][^dsql-press].

# Why it matters
It is AWS's first strongly consistent, multi-region, write-anywhere SQL database, competing directly with Spanner, CockroachDB and YugabyteDB. Launch-time limits (no extensions, triggers or temp tables, 3,000 rows and 5 minutes per transaction, and foreign keys only added later) make it a fit for new applications rather than migrations[^dsql-limits].

# Related
[Hyperscaler distributed SQL](/ideas/cloud-architecture/hyperscaler-distributed-sql.md) · [Aurora DSQL](/systems/aurora-dsql.md)
