---
type: System
title: Vitess
description: "Sharding and cluster-management layer for MySQL, born at YouTube in 2010, a CNCF graduated project since 2019, and the engine behind PlanetScale. It is the most proven example of scaling an unmodified relational engine through middleware, and the template for 2025–26 'Vitess for Postgres' projects."
resource: https://vitess.io
tags: [sharding, mysql, middleware, cncf, kubernetes, apache-2]
kind: oss
first_release: 2010
org: "CNCF project (originated at YouTube/Google; PlanetScale is the main contributor)"
license: Apache-2.0
outcome: thriving
ideas: [ideas/distributed-sql/sharding-middleware]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cncf
    resource: https://www.cncf.io/announcements/2019/11/05/cloud-native-computing-foundation-announces-vitess-graduation/
    title: "CNCF announces Vitess graduation (2019-11-05)"
    author: org:cncf
  - id: multigres
    resource: https://supabase.com/blog/multigres-vitess-for-postgres
    title: "Supabase: Announcing Multigres, Vitess for Postgres (2025-06)"
    author: org:supabase
  - id: neki
    resource: https://planetscale.com/blog/introducing-neki
    title: "PlanetScale: Introducing Neki (2026-09-10)"
    author: org:planetscale
  - id: gh
    resource: https://github.com/vitessio/vitess
    title: "GitHub: vitessio/vitess"
---

# Summary
Vitess puts a routing layer (VTGate), per-shard agents (VTTablet) and a topology service in front of ordinary MySQL instances. It provides transparent sharding, online resharding through VReplication, online schema changes and connection pooling. It entered CNCF incubation in Feb 2018 and graduated on 5 Nov 2019 as the eighth graduated project. At that point it ran some of the largest MySQL installations, at Slack, Square, Shopify and GitHub, and about 35% of contributions came from PlanetScale[^cncf]. Its success set the pattern for Postgres. Its co-creator Sugu Sougoumarane left to build Multigres at Supabase in 2025[^multigres], and PlanetScale built Neki, a new sharded-Postgres system informed by its Vitess experience[^neki]. The repo has about 21k stars and is actively developed[^gh].

# Timeline
| Date | Event |
|---|---|
| 2018-02 | CNCF incubation[^cncf] |
| 2019-11-05 | CNCF graduation, Vitess 4.0[^cncf] |
| 2025-06 | Co-creator starts Multigres (Vitess for Postgres) at Supabase[^multigres] |
| 2026-09 | PlanetScale's Neki (sharded Postgres) enters preview[^neki] |

# What worked
- Scales MySQL to very large fleets without replacing the storage engine.
- Kubernetes-native operation and online workflows (resharding, schema changes).

# What didn't
- Cross-shard transactions and some SQL constructs remain limited, and schema design must follow a shard key.
- It is MySQL-only, while most new projects after 2020 chose Postgres.

# Related
- [Sharding middleware](/ideas/distributed-sql/sharding-middleware.md), [PlanetScale](/systems/planetscale.md), [Citus](/systems/citus.md), [MySQL](/systems/mysql.md)
- Events: [Vitess graduates](/events/2019-11-vitess-cncf-graduation.md)

[^cncf]: CNCF, 2019-11-05.
[^multigres]: Supabase blog, June 2025.
[^neki]: PlanetScale blog, 2026-09-10.
[^gh]: GitHub, checked 2026-10-03.
