---
type: Idea
title: "Sharding middleware over stock MySQL/Postgres"
description: "Keep the proven single-node engine and add a routing and resharding layer on top (Vitess, Citus, and the 2025–26 'Vitess for Postgres' race: Neki, Multigres, PgDog, Aurora Limitless). Verdict: winning. It runs the largest MySQL fleets and is now the main way Postgres scales out. It beat rewrite-the-engine distributed SQL on compatibility and on trust."
tags: [sharding, vitess, citus, mysql, postgres, middleware, scale-out]
area: distributed-sql
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "Vitess built at YouTube from 2010; Citus (2011) as a Postgres extension"
key_systems: [systems/vitess, systems/planetscale, systems/citus, systems/aurora, systems/supabase]
related_ideas: [ideas/distributed-sql/newsql-distributed-sql, ideas/postgres-ecosystem/just-use-postgres, ideas/postgres-ecosystem/extensions-as-platform, ideas/cloud-architecture/serverless-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cncf-vitess
    resource: https://www.cncf.io/announcements/2019/11/05/cloud-native-computing-foundation-announces-vitess-graduation/
    title: "CNCF announces Vitess graduation (2019-11-05)"
    author: org:cncf
  - id: ms-citus
    resource: https://blogs.microsoft.com/blog/2019/01/24/microsoft-acquires-citus-data-re-affirming-its-commitment-to-open-source-and-accelerating-azure-postgresql-performance-and-scale/
    title: "Microsoft acquires Citus Data (2019-01-24)"
    author: org:microsoft
  - id: citus11
    resource: https://www.citusdata.com/blog/2022/06/17/citus-11-goes-fully-open-source/
    title: "Citus 11 for Postgres goes fully open source (2022-06-17)"
    author: org:citus-data
  - id: azure-elastic
    resource: https://learn.microsoft.com/en-us/azure/cosmos-db/postgresql/concepts-benefits-database-postgresql
    title: "Microsoft Learn: Migrate to Azure Database for PostgreSQL with Elastic Cluster"
    author: org:microsoft
  - id: ps-hobby
    resource: https://planetscale.com/changelog/deprecating-hobby
    title: "PlanetScale: Deprecating the Hobby plan (2024-03)"
    author: org:planetscale
  - id: ps-pg-ga
    resource: https://planetscale.com/blog/planetscale-for-postgres-is-generally-available
    title: "PlanetScale for Postgres is GA (2025-09-22)"
    author: org:planetscale
  - id: neki
    resource: https://planetscale.com/blog/introducing-neki
    title: "PlanetScale: Introducing Neki (2026-09-10)"
    author: org:planetscale
  - id: neki-118m
    resource: https://planetscale.com/blog/118-million-queries-per-second-on-neki
    title: "PlanetScale: 118 million queries per second on Neki"
    author: org:planetscale
  - id: multigres
    resource: https://supabase.com/blog/multigres-vitess-for-postgres
    title: "Supabase: Announcing Multigres, Vitess for Postgres (2025-06)"
    author: org:supabase
  - id: limitless-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-aurora-postgresql-limitless-database-generally-available
    title: "AWS: Aurora PostgreSQL Limitless Database GA (2024-10-31)"
    author: org:aws
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: reg-ps-layoff
    resource: https://www.theregister.com/2024/03/11/planetscale_lays_off_staff_and/
    title: "The Register: PlanetScale lays off staff and kills free tier (2024-03-11)"
---

# Summary
**Verdict: winning.** Instead of writing a new distributed engine, this approach keeps MySQL or Postgres on every shard and adds a layer for query routing, resharding, online schema changes and failover. Vitess graduated from the CNCF in 2019 and runs some of the largest MySQL installations (Slack, Square, Shopify, GitHub)[^cncf-vitess]. Microsoft bought Citus in 2019[^ms-citus] and open-sourced all of it in 2022[^citus11]. In 2024–2026, as Postgres became the default OLTP database, a "Vitess for Postgres" race started. AWS shipped Aurora Limitless (Oct 2024)[^limitless-ga]. Supabase hired Vitess co-creator Sugu Sougoumarane to build Multigres (June 2025)[^multigres]. PlanetScale put its Neki sharded Postgres into platform preview (Sept 2026) after demonstrating 118.5M QPS over 512 shards[^neki][^neki-118m]. The weak spots: cross-shard transactions and joins remain second-class, and the commercial vendor that wraps the middleware does not necessarily get rich from it.

# The idea
Shard at the application's natural key (tenant, user, merchant), run an ordinary database per shard, and hide the topology behind a proxy that speaks the native wire protocol. You keep the mature storage engine, its operational tooling, its extensions and its failure modes. Then you add online resharding and schema-change workflows, the operations that make hand-rolled sharding painful.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2019 | Microsoft acquires Citus (Jan 24)[^ms-citus]. Vitess graduates from the CNCF (Nov 5). About 35% of contributions come from PlanetScale[^cncf-vitess] | + |
| 2022 | Citus 11 makes the non-blocking rebalancer and all enterprise features open source[^citus11] | + |
| 2024 | PlanetScale lays off staff and retires its free Hobby plan (Mar)[^reg-ps-layoff][^ps-hobby]. Aurora Limitless GA (Oct 31)[^limitless-ga] | − / + |
| 2025 | PlanetScale launches Postgres (GA Sept 22)[^ps-pg-ga]. Supabase starts Multigres (June)[^multigres]. Microsoft blocks new Azure Cosmos DB for PostgreSQL clusters and steers users to Elastic Clusters (Citus on Flexible Server)[^azure-elastic] | + |
| 2026 | Neki enters platform preview (Sept 10), not yet for production[^neki] | + |

# What succeeded
- **Vitess at hyperscale.** It is the de facto way to run MySQL past one machine. It carries PlanetScale's product and is used by large internal fleets[^cncf-vitess].
- **Citus as the Postgres option.** Citus is fully open source under AGPL and runs inside Azure's Postgres service[^citus11][^azure-elastic]. It is used heavily for multi-tenant SaaS and real-time analytics.
- **The approach fits where Postgres is going.** Because each shard is "real Postgres", extensions, drivers and tooling mostly work. Neki, Multigres and Limitless all chose this design over a new engine[^neki][^multigres][^limitless-ga]. Pavlo's 2025 review treats this race as one of the year's main stories[^pavlo-2025].

# What failed
- **Cross-shard semantics.** Vitess and Citus support distributed transactions and joins, but performance and isolation across shards are weaker than in Spanner-style systems. Schemas must be designed around a shard key, which is the very work NewSQL promised to remove.
- **Monetizing middleware.** PlanetScale's free tier and mass-market strategy ended in 2024 with layoffs and a focus on profitability[^reg-ps-layoff][^ps-hobby]. Microsoft's own branding for Citus changed several times, and the Cosmos DB for PostgreSQL product is now on a retirement path[^azure-elastic].
- **Postgres lagged MySQL by a decade.** Neki is still in preview (as of Sept 2026), and we found no stable Multigres release (unconfirmed). Postgres users who needed scale-out in 2018–2024 had only Citus or a NewSQL engine.

# Why
1. **Trust in the storage engine.** Teams with petabytes in MySQL or Postgres want the bugs they already know. A routing layer is easier to audit and to back out of than a new engine.
2. **Most workloads shard cleanly.** SaaS and consumer apps have an obvious tenant or user key. Cross-shard transactions are rare enough to treat as exceptions.
3. **Ecosystem compatibility.** Postgres's value after 2020 lies in its extensions and tooling, and middleware keeps them. Re-implementations lose them (see [NewSQL](/ideas/distributed-sql/newsql-distributed-sql.md)).
4. **Hardware raised the bar for sharding.** Large NVMe machines meant only the biggest users needed to shard. Those users have the engineering staff to accept middleware's constraints, and they prefer that to rewriting on a new engine.

# Lessons
- Adding a layer on top of a trusted engine beats replacing the engine when the ecosystem is the main asset.
- Open-source middleware is a strong technology and a weak business, and its value tends to flow to whoever hosts it.
- Shard-key design is still the developer's job. No product has made it go away.

# Related
- Systems: [Vitess](/systems/vitess.md), [PlanetScale](/systems/planetscale.md), [Citus](/systems/citus.md), [Aurora](/systems/aurora.md), [Supabase](/systems/supabase.md)
- Ideas: [NewSQL](/ideas/distributed-sql/newsql-distributed-sql.md), [Just use Postgres](/ideas/postgres-ecosystem/just-use-postgres.md)
- Events: [Microsoft acquires Citus](/events/2019-01-microsoft-acquires-citus.md), [Vitess graduates](/events/2019-11-vitess-cncf-graduation.md), [PlanetScale drops free tier](/events/2024-03-planetscale-drops-free-tier.md)

[^cncf-vitess]: CNCF, 2019-11-05.
[^ms-citus]: Microsoft blog, 2019-01-24.
[^citus11]: Citus blog, 2022-06-17.
[^azure-elastic]: Microsoft Learn documentation, accessed 2026-10.
[^ps-hobby]: PlanetScale changelog, March 2024.
[^ps-pg-ga]: PlanetScale blog, 2025-09-22.
[^neki]: PlanetScale blog, 2026-09-10.
[^neki-118m]: PlanetScale blog.
[^multigres]: Supabase blog, June 2025.
[^limitless-ga]: AWS What's New, 2024-10-31.
[^pavlo-2025]: Pavlo, Databases in 2025.
[^reg-ps-layoff]: The Register, 2024-03-11.
