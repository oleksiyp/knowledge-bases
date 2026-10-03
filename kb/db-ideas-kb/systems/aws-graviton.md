---
type: System
title: AWS Graviton
description: "AWS's in-house ARM server CPUs (2018–). Graviton2 (2020) onward became the recommended instance family for RDS, Aurora, ElastiCache and other managed databases; by 2025 more than half of new AWS CPU capacity was Graviton for three years in a row."
resource: https://aws.amazon.com/ec2/graviton/
tags: [hardware, arm, cpu, cloud, aws]
kind: product
first_release: 2018
org: "Amazon Web Services (Annapurna Labs)"
outcome: thriving
ideas: [ideas/hardware-engines/arm-graviton-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: graviton-aurora
    resource: https://aws.amazon.com/about-aws/whats-new/2021/03/achieve-up-to-35-percent-better-price-performance-with-amazon-aurora-using-new-graviton2-instances
    title: "AWS: Up to 35% better price/performance with Amazon Aurora using Graviton2 (March 2021)"
    author: org:aws
  - id: graviton5
    resource: https://press.aboutamazon.com/2025/12/aws-introduces-graviton5-the-companys-most-powerful-and-efficient-cpu
    title: "Amazon: AWS introduces Graviton5 (Dec 2025)"
    author: org:aws
  - id: graviton-managed
    resource: https://github.com/aws/aws-graviton-getting-started/blob/main/managed_services.md
    title: "aws-graviton-getting-started: managed services"
    author: org:aws
---

# Summary

Graviton is AWS's family of ARM Neoverse-based server CPUs. The first generation (2018) was a curiosity; Graviton2 (2020) made ARM competitive and AWS moved its managed database services onto it. AWS claimed up to 35% better price-performance for Aurora on Graviton2[^graviton-aurora] and later generations added further gains. At the Graviton5 launch in December 2025, AWS said that for the third year more than half of new CPU capacity added was Graviton and that 98% of its top 1,000 EC2 customers use it[^graviton5]. Most AWS managed data services offer Graviton instance types[^graviton-managed].

# Timeline

| Year | Event |
|---|---|
| 2018 | Graviton (A1) |
| 2020 | Graviton2; RDS/Aurora support |
| 2021 | Aurora Graviton2 price-performance claim[^graviton-aurora] |
| 2022–24 | Graviton3, Graviton4 for RDS and other managed DBs |
| 2025 | Graviton5 (192 cores)[^graviton5] |

# What worked

- Price-performance delivered through managed services with no application changes.
- Pushed the whole database ecosystem to ship and test aarch64 builds.

# What didn't

- AWS-only; commercial databases like Oracle and SQL Server do not run on it.
- Gains vary by workload; AWS's "up to" figures are vendor claims.

# Related

- [ARM servers for databases](/ideas/hardware-engines/arm-graviton-databases.md)
- [Aurora](/systems/aurora.md)
