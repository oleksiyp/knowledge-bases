---
type: System
title: Citus
description: "PostgreSQL extension that shards tables across nodes, used for multi-tenant SaaS and real-time analytics. Microsoft acquired it in 2019 and made it fully open source (AGPL) in 2022. It powers Azure's distributed Postgres, which moved from 'Hyperscale (Citus)' to 'Cosmos DB for PostgreSQL' to Elastic Clusters on Flexible Server."
resource: https://www.citusdata.com
tags: [postgres-extension, sharding, multi-tenant, microsoft, azure, agpl]
kind: oss
org: "Microsoft (acquired Citus Data, Jan 2019)"
license: AGPL-3.0
outcome: acquired
ideas: [ideas/distributed-sql/sharding-middleware, ideas/postgres-ecosystem/extensions-as-platform]
status: stable
generated: { by: codex/gpt-6, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ms
    resource: https://blogs.microsoft.com/blog/2019/01/24/microsoft-acquires-citus-data-re-affirming-its-commitment-to-open-source-and-accelerating-azure-postgresql-performance-and-scale/
    title: "Microsoft acquires Citus Data (2019-01-24)"
    author: org:microsoft
  - id: tc
    resource: https://techcrunch.com/2019/01/24/microsoft-acquires-citus-data/
    title: "TechCrunch: Microsoft acquires Citus Data (2019-01-24)"
  - id: c10
    resource: https://www.citusdata.com/blog/2021/03/05/citus-10-release-open-source-rebalancer-and-columnar-for-postgres/
    title: "Citus 10: columnar, open-source rebalancer, single-node (2021-03-05)"
    author: org:citus-data
  - id: c11
    resource: https://www.citusdata.com/blog/2022/06/17/citus-11-goes-fully-open-source/
    title: "Citus 11 goes fully open source (2022-06-17)"
    author: org:citus-data
  - id: azure
    resource: https://learn.microsoft.com/en-us/azure/cosmos-db/postgresql/concepts-benefits-database-postgresql
    title: "Microsoft Learn: Migrate to Azure Database for PostgreSQL with Elastic Cluster"
    author: org:microsoft
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025"
    author: person:andy-pavlo
  - id: gh
    resource: https://github.com/citusdata/citus
    title: "GitHub: citusdata/citus"
---

# Summary
Citus turns Postgres into a distributed database as an extension rather than a fork. It uses a coordinator, worker nodes and distributed tables sharded by a column such as tenant ID, plus reference tables replicated to every node. Microsoft bought Citus Data, about 40 people, on 24 Jan 2019[^ms][^tc]. It then open-sourced more and more of it. Citus 10 (2021) added columnar storage and an open-source rebalancer[^c10], and Citus 11 (June 2022) opened all remaining enterprise features, including the non-blocking rebalancer, and allowed queries from any node[^c11]. Pavlo notes that Citus began in 2010 with an analytics focus and that its Azure product was "rebranded multiple times"[^pavlo-2025]. By 2025–26, Azure blocked new Cosmos DB for PostgreSQL deployments and pointed customers to Elastic Clusters, which run Citus on Azure Database for PostgreSQL Flexible Server[^azure].

# Timeline
| Date | Event |
|---|---|
| 2019-01-24 | Acquired by Microsoft[^ms] |
| 2021-03 | Citus 10: columnar, open rebalancer[^c10] |
| 2022-06 | Citus 11: fully open source[^c11] |
| 2025–26 | Cosmos DB for PostgreSQL on a retirement path, replaced by Elastic Clusters[^azure] |

# What worked
- The extension approach keeps real Postgres, so drivers, tools and most extensions keep working.
- A strong fit for multi-tenant SaaS. The 2022 release removed the enterprise-only boundary around operational features such as non-blocking rebalancing[^c11].

# What didn't
- Azure product churn (Hyperscale, then Cosmos DB for PostgreSQL, then Elastic Clusters) confused customers[^pavlo-2025][^azure].
- Distributed schemas still require deliberate placement and shard-key design. The extension approach preserves the underlying engine, but cannot make every cross-node access as cheap as a local query (our assessment).

# Related
- [Sharding middleware](/ideas/distributed-sql/sharding-middleware.md), [PostgreSQL](/systems/postgresql.md), [Vitess](/systems/vitess.md), [Cosmos DB](/systems/cosmos-db.md)
- Events: [Microsoft acquires Citus](/events/2019-01-microsoft-acquires-citus.md)

[^ms]: Microsoft blog, 2019-01-24.
[^tc]: TechCrunch, 2019-01-24.
[^c10]: Citus blog, 2021-03-05.
[^c11]: Citus blog, 2022-06-17.
[^azure]: Microsoft Learn, accessed 2026-10.
[^pavlo-2025]: Pavlo, Databases in 2025.
[^gh]: GitHub, checked 2026-10-03.
