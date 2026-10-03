---
type: Event
title: "Aurora Serverless v1 reaches end of life"
description: "AWS retired its first serverless relational database after 6.5 years and force-upgraded the remaining clusters to v2 from April 2025. It is the clearest failure of first-generation serverless SQL."
date: 2025-03-31
year: 2025
kind: discontinuation
signal: negative
ideas: [ideas/cloud-architecture/serverless-databases]
systems: [systems/aurora-serverless]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: infoq-v1
    resource: https://www.infoq.com/news/2024/01/aurora-serverless-v1-retirement/
    title: "InfoQ: AWS to retire Aurora Serverless v1"
  - id: doit-v1
    resource: https://www.doit.com/blog/amazon-aurora-serverless-v1-end-of-life-key-steps-and-dates-you-need-to-know
    title: "DoiT: Aurora Serverless v1 End of Life: key steps and dates"
---

# What happened
AWS announced in early 2024 that Aurora Serverless v1 would end on Dec 31, 2024, later extended to Mar 31, 2025. New v1 clusters were blocked from Jan 8, 2025. From Apr 7, 2025, remaining clusters were upgraded to v2 automatically during maintenance windows, or converted to provisioned clusters if the upgrade failed[^infoq-v1][^doit-v1].

# Why it matters
v1 was the poster child of 2018's "serverless relational" hype. It lacked Multi-AZ, replicas and current engine versions, and scaled in coarse steps[^infoq-v1]. Its retirement, and the outcry because v2 could not yet scale to zero, showed that bolting autoscaling onto instance-based databases was a dead end. The durable approach builds it on disaggregated storage.

# Related
[Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [Aurora Serverless](/systems/aurora-serverless.md)
