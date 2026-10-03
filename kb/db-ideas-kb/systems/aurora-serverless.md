---
type: System
title: Amazon Aurora Serverless
description: "Auto-scaling capacity mode for Aurora. v1 (2018–2025) could pause to zero but scaled coarsely and lacked features. v2 (2022) scales finely with full Aurora features but could not reach zero until Nov 2024. AWS retired v1 in 2025."
resource: https://aws.amazon.com/rds/aurora/serverless/
tags: [serverless, scale-to-zero, aurora, aws, oltp]
kind: cloud-service
first_release: 2018
org: "Amazon Web Services"
license: proprietary
outcome: stable
ideas: [ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/disaggregated-storage-compute-oltp]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: aurora-10y
    resource: https://aws.amazon.com/blogs/aws/celebrating-10-years-of-amazon-aurora-innovation/
    title: "AWS News Blog: Celebrating 10 years of Amazon Aurora innovation"
    author: org:aws
  - id: v2-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2022/04/amazon-aurora-serverless-v2
    title: "AWS: Amazon Aurora Serverless v2 is generally available (2022-04-21)"
    author: org:aws
  - id: infoq-v1
    resource: https://www.infoq.com/news/2024/01/aurora-serverless-v1-retirement/
    title: "InfoQ: AWS to retire Aurora Serverless v1 (Jan 2024)"
  - id: doit-v1
    resource: https://www.doit.com/blog/amazon-aurora-serverless-v1-end-of-life-key-steps-and-dates-you-need-to-know
    title: "DoiT: Aurora Serverless v1 End of Life: key steps and dates"
  - id: v2-zero
    resource: https://aws.amazon.com/about-aws/whats-new/2024/11/amazon-aurora-serverless-v2-scaling-zero-capacity
    title: "AWS: Aurora Serverless v2 supports scaling to zero capacity (2024-11-20)"
    author: org:aws
  - id: stack-zero
    resource: https://www.thestack.technology/aws-aurora-serverless-v2-finally-lives-up-to-its-name/
    title: "The Stack: AWS Aurora Serverless V2 finally lives up to its name"
---

# Summary
Aurora Serverless was AWS's first serverless relational database. **v1** (preview Nov 2017, GA Aug 2018[^aurora-10y]) used a proxy fleet and a warm pool of instances. It scaled in coarse steps, could pause to zero, and had no Multi-AZ, no replicas and old engine versions[^infoq-v1]. **v2** (GA Apr 21, 2022) scales in half-ACU increments inside a normal Aurora cluster with Multi-AZ, Global Database, RDS Proxy and read replicas. AWS claimed up to 90% savings versus provisioning for peak[^v2-ga]. But v2's minimum was 0.5 ACU (about /month), so it could not scale to zero. When AWS announced v1's retirement in early 2024, users protested losing scale-to-zero ("Hello to double the bill")[^infoq-v1]. AWS added 0-ACU auto-pause to v2 on Nov 20, 2024, with resume in about 15 s[^v2-zero][^stack-zero]. v1 creation stopped Jan 8, 2025, EOL was Mar 31, 2025, and clusters were force-upgraded from Apr 7, 2025[^doit-v1].

# Timeline
| Date | Event |
|---|---|
| 2018-08 | v1 GA[^aurora-10y] |
| 2022-04-21 | v2 GA (MySQL 8.0, PostgreSQL 13)[^v2-ga] |
| 2024-01 | v1 retirement announced (initially Dec 31, 2024)[^infoq-v1] |
| 2024-11-20 | v2 scales to 0 ACU[^v2-zero] |
| 2025-03-31 | v1 end of life (extended)[^doit-v1] |

# What worked
- v2 is a real production-grade autoscaler, and retains the full Aurora feature set[^v2-ga].
- Scale-to-zero arrived in 2024 and is useful for dev/test[^stack-zero].

# What didn't
- v1's architecture could not carry the full Aurora feature set and had to be thrown away after 6.5 years.
- v2 spent 2.5 years without the defining "serverless" property, damaging the brand[^infoq-v1].
- ~15 s resume makes zero-scaling unsuitable for latency-sensitive production[^stack-zero].

# Related
[Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [Aurora](/systems/aurora.md) · [Neon](/systems/neon.md) · [v1 end of life](/events/2025-03-aurora-serverless-v1-end-of-life.md)
