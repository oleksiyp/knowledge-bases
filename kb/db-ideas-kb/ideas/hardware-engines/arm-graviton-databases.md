---
type: Idea
title: "ARM servers (Graviton) for databases"
description: "Run databases on cloud providers' own ARM CPUs for better price-performance. Won: AWS made Graviton the default recommendation for RDS, Aurora, ElastiCache and other managed databases, claiming 20–35% better price-performance per generation, and more than half of new AWS CPU capacity has been Graviton for three years running."
tags: [hardware, arm, graviton, cloud, price-performance]
area: hardware-engines
verdict: won
hype_peak: 2021
adoption_2026: mainstream
origins: "AWS Graviton (2018, from the Annapurna Labs acquisition); Graviton2 (2020) made ARM competitive for server workloads."
key_systems: [systems/aws-graviton, systems/aurora, systems/postgresql, systems/mysql]
related_ideas: [ideas/hardware-engines/rdma-smartnic-fpga-offload, ideas/cloud-architecture/managed-dbaas-vs-repatriation]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: graviton-aurora
    resource: https://aws.amazon.com/about-aws/whats-new/2021/03/achieve-up-to-35-percent-better-price-performance-with-amazon-aurora-using-new-graviton2-instances
    title: "AWS: Up to 35% better price/performance with Amazon Aurora using Graviton2 instances (March 2021)"
    author: org:aws
  - id: graviton-rds-webinar
    resource: https://pages.awscloud.com/Improve-the-Price-Performance-of-Amazon-RDS-and-Amazon-Aurora-with-AWS-Graviton2-Instances_2021_0319-DAT_OD.html
    title: "AWS: Improve the Price-Performance of Amazon RDS and Amazon Aurora with AWS Graviton2 Instances"
    author: org:aws
  - id: graviton5
    resource: https://press.aboutamazon.com/2025/12/aws-introduces-graviton5-the-companys-most-powerful-and-efficient-cpu
    title: "Amazon: AWS introduces Graviton5 (December 2025)"
    author: org:aws
  - id: graviton-managed
    resource: https://github.com/aws/aws-graviton-getting-started/blob/main/managed_services.md
    title: "aws-graviton-getting-started: managed services on Graviton"
    author: org:aws
  - id: networkworld-50
    resource: https://www.networkworld.com/article/3631134/graviton-progress-50-of-new-aws-instances-run-on-amazon-custom-silicon.html
    title: "Network World: Graviton progress: 50% of new AWS instances run on Amazon custom silicon"
---

# Summary

**Verdict: won.** ARM in the data center was a perennial "next year" idea until AWS's Graviton2 (2020). For databases the shift happened through managed services: AWS put RDS, Aurora, ElastiCache, OpenSearch and others on Graviton, claimed up to 35% better price-performance for Aurora and up to 52% for RDS depending on size[^graviton-aurora][^graviton-rds-webinar], and made migration a matter of changing an instance class. By the Graviton5 launch in December 2025, AWS said more than half of new CPU capacity it added had been Graviton for the third year in a row, and that 98% of its top 1,000 EC2 customers use it[^graviton5]. Google (Axion) and Microsoft (Cobalt) followed with their own ARM server CPUs. This is the clearest hardware success in databases in the period, and it required almost no database-engine changes.

# The idea

Cloud providers design their own ARM CPUs, optimized for many cores, high memory bandwidth and low power, and sell them cheaper than x86 instances. Databases, mostly written in portable C/C++/Java/Go/Rust, recompile for aarch64 and get better throughput per dollar.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | Graviton (A1 instances) launched; weak single-thread performance | mixed |
| 2020 | Graviton2; RDS and Aurora add Graviton2 instance classes | + |
| 2021 | Aurora Graviton2: up to 20% better performance, up to 35% better price-performance[^graviton-aurora] | + |
| 2022–23 | Graviton3 for RDS; managed caches, search and analytics follow[^graviton-managed] | + |
| 2024 | Graviton4 for RDS; Google Axion and Microsoft Cobalt ARM CPUs enter clouds | + |
| 2025 | Graviton5; >50% of new AWS CPU capacity is Graviton for third year[^graviton5][^networkworld-50] | + |

# What succeeded

- **Managed databases made the switch invisible.** Users of RDS or Aurora change an instance type; AWS handles builds, tuning and support.
- **OSS engines ported easily.** PostgreSQL, MySQL, MariaDB, Redis/Valkey, MongoDB and others ship aarch64 builds; many vendors (e.g. Snowflake is listed among Graviton customers[^graviton5]) run their cloud services on it.
- **Price is the feature.** Cheaper instances with similar or better throughput gave CFO-level reasons to migrate.

# What failed

- **Not every engine benefits equally.** Workloads that depend on x86-specific SIMD or JIT paths needed work; some commercial databases (Oracle, SQL Server) do not run on Graviton.
- **Lock-in shifts.** Graviton is AWS-only; multi-cloud or on-prem users get the benefit only if their other providers ship ARM too (now true for Google and Azure).
- **Earlier ARM server attempts** (Calxeda, AMD Seattle, Qualcomm Centriq) failed before 2018; it took a hyperscaler designing for its own fleet to succeed.

# Why

1. **Vertical integration.** AWS controls the chip, server, hypervisor (Nitro) and the managed database, so it captured the margin and passed some on.
2. **Software portability had quietly arrived.** Linux, compilers and language runtimes supported aarch64 well by 2020, helped by mobile and Apple Silicon developer machines.
3. **Databases are throughput and memory-bandwidth bound,** where many-core ARM chips do well; single-thread peak matters less.

# Lessons

- The hardware ideas that won in this period required zero application changes and were delivered through managed services.
- Price-performance, not peak performance, drives cloud database hardware choices.
- Contrast with PMem and GPUs: those needed engine rewrites; ARM needed a recompile.

# Related

- [AWS Graviton](/systems/aws-graviton.md)
- [Aurora](/systems/aurora.md)
- [Persistent memory (failed)](/ideas/hardware-engines/persistent-memory-databases.md)
