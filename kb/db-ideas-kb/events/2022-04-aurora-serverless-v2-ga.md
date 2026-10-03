---
type: Event
title: "Aurora Serverless v2 becomes generally available"
description: "AWS shipped fine-grained autoscaling for Aurora with full feature parity but a 0.5 ACU minimum, which meant no scale-to-zero. That gap defined the next 2.5 years of serverless-Postgres competition."
date: 2022-04-21
year: 2022
kind: launch
signal: mixed
ideas: [ideas/cloud-architecture/serverless-databases]
systems: [systems/aurora-serverless, systems/aurora]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: v2-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2022/04/amazon-aurora-serverless-v2
    title: "AWS: Amazon Aurora Serverless v2 is generally available"
    author: org:aws
  - id: infoq-v2
    resource: https://www.infoq.com/news/2022/04/amazon-aurora-serverless-v2/
    title: "InfoQ: AWS releases the second version of Amazon Aurora Serverless"
  - id: infoq-v1
    resource: https://www.infoq.com/news/2024/01/aurora-serverless-v1-retirement/
    title: "InfoQ: AWS to retire Aurora Serverless v1"
---

# What happened
On Apr 21, 2022, AWS made Aurora Serverless v2 GA for MySQL 8.0 and PostgreSQL 13. It scales in fine-grained increments inside a regular Aurora cluster with Multi-AZ, Global Database, RDS Proxy and read replicas. AWS claimed up to 90% savings versus provisioning for peak[^v2-ga][^infoq-v2].

# Why it matters
v2 fixed v1's lack of production features but dropped its main selling point: the minimum of 0.5 ACU (about $43/month) meant it never went to zero[^infoq-v1]. That left room for Neon and others to win developers with true scale-to-zero, until AWS added 0-ACU auto-pause in November 2024.

# Related
[Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [Aurora Serverless](/systems/aurora-serverless.md) · [Scale-to-zero added](/events/2024-11-aurora-serverless-v2-scale-to-zero.md)
