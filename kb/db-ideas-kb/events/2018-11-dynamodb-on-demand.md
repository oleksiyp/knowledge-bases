---
type: Event
title: "DynamoDB launches on-demand capacity mode"
description: "At re:Invent 2018 AWS launched per-request billing for DynamoDB with no capacity planning. It became the template for usage-priced serverless databases."
date: 2018-11-28
year: 2018
kind: launch
signal: positive
ideas: [ideas/cloud-architecture/serverless-databases]
systems: [systems/dynamodb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: infoq-2018
    resource: https://www.infoq.com/news/2018/11/aws-reinvent-recap/
    title: "InfoQ: Recap of AWS re:Invent 2018 announcements"
  - id: ddb-price-2024
    resource: https://aws.amazon.com/blogs/database/new-amazon-dynamodb-lowers-pricing-for-on-demand-throughput-and-global-tables/
    title: "AWS Database Blog: DynamoDB lowers pricing for on-demand throughput (Nov 2024)"
    author: org:aws
---

# What happened
On Nov 28, 2018, AWS added an on-demand capacity mode to DynamoDB. Tables are billed per read and write request and scale automatically, so users no longer provision read/write capacity units[^infoq-2018]. Six years later, effective Nov 1, 2024, AWS halved on-demand throughput prices[^ddb-price-2024].

# Why it matters
It separated "serverless" as a **pricing model** from serverless as an architecture claim, and the pricing model is what won. Every later DBaaS (Neon, PlanetScale, CockroachDB, Aurora DSQL) offers usage-based tiers. The 2024 price cut made on-demand the default rather than the premium option.

# Related
[Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [DynamoDB](/systems/dynamodb.md)
