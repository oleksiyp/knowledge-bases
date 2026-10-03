---
type: System
title: Amazon DynamoDB
description: "AWS's fully managed, serverless key-value and document database. On-demand per-request billing (2018) and a 50% on-demand price cut (2024) made it the clearest success of serverless database pricing. It handles over 100M requests per second at Amazon Prime Day peaks."
resource: https://aws.amazon.com/dynamodb/
tags: [key-value, serverless, nosql, aws, on-demand]
kind: cloud-service
first_release: 2012
org: "Amazon Web Services"
license: proprietary
outcome: thriving
ideas: [ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/managed-dbaas-vs-repatriation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ddb-ondemand-2018
    resource: https://www.infoq.com/news/2018/11/aws-reinvent-recap/
    title: "InfoQ: Recap of AWS re:Invent 2018 announcements"
  - id: ddb-price-2024
    resource: https://aws.amazon.com/blogs/database/new-amazon-dynamodb-lowers-pricing-for-on-demand-throughput-and-global-tables/
    title: "AWS Database Blog: DynamoDB lowers pricing for on-demand throughput and global tables (Nov 2024)"
    author: org:aws
  - id: ddb-txn-atc23
    resource: https://www.usenix.org/system/files/atc23-idziorek.pdf
    title: "Idziorek et al.: Distributed Transactions at Scale in Amazon DynamoDB (USENIX ATC 2023)"
  - id: prime-2023
    resource: https://aws.amazon.com/blogs/aws/prime-day-2023-powered-by-aws-all-the-numbers
    title: "AWS News Blog: Prime Day 2023 powered by AWS: all the numbers"
    author: org:aws
  - id: prime-2024
    resource: https://aws.amazon.com/blogs/aws/how-aws-powered-prime-day-2024-for-record-breaking-sales
    title: "AWS News Blog: How AWS powered Prime Day 2024"
    author: org:aws
---

# Summary
DynamoDB (2012) was serverless before the word was marketing. There are no instances, only tables, and capacity is billed by throughput. In 2018–2026 its key cloud-architecture move was **on-demand capacity mode**, launched at re:Invent on Nov 28, 2018: pay per request with no capacity planning[^ddb-ondemand-2018]. In November 2024 AWS cut on-demand throughput prices by 50% and global-table prices by up to 67%[^ddb-price-2024], making on-demand the default recommendation for most tables. Scale numbers from Prime Day: peaks of 105.2M requests per second in 2022, 126M in 2023 and 146M in 2024[^ddb-txn-atc23][^prime-2023][^prime-2024]. A USENIX ATC 2023 paper described how it added serializable multi-item transactions without hurting latency for non-transactional operations[^ddb-txn-atc23].

# Timeline
| Date | Event |
|---|---|
| 2018-11-28 | On-demand capacity mode[^ddb-ondemand-2018] |
| 2023-07 | ATC paper on distributed transactions[^ddb-txn-atc23] |
| 2024-11-01 | On-demand -50%, global tables up to -67%[^ddb-price-2024] |
| 2024-07 | Prime Day peak 146M req/s[^prime-2024] |

# What worked
- Serverless pricing done right: per-request billing on a multi-tenant fleet that AWS already ran at huge scale.
- Predictable single-digit-millisecond latency at any scale.

# What didn't
- Data-modeling rigidity (single-table design, limited queries) pushed many teams back to relational databases or to Aurora Serverless/Neon for flexible queries.
- On-demand was too expensive for steady workloads until the 2024 price cut.

# Related
[Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [On-demand launch](/events/2018-11-dynamodb-on-demand.md) · [Cassandra](/systems/cassandra.md) · [ScyllaDB](/systems/scylladb.md)
