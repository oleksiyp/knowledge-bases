---
type: Idea
title: "The Postgres hosting land grab and consolidation (2024–2026)"
description: "Data platforms and analytics vendors bought or built managed Postgres to own the operational database of AI-era applications: Databricks–Neon, Snowflake–Crunchy, ClickHouse Postgres, PlanetScale Postgres, Azure HorizonDB, and Supabase at $10.5B. Verdict: won for sellers and platforms. Losers are undifferentiated hosts and the community tooling those small Postgres companies used to fund."
tags: [postgres, acquisitions, dbaas, consolidation, ai-agents, business]
area: postgres-ecosystem
verdict: won
hype_peak: 2025
adoption_2026: mainstream
origins: "Heroku Postgres (2007), Amazon RDS for PostgreSQL (2013), Microsoft's acquisition of Citus Data (2019)."
key_systems: [systems/neon, systems/crunchy-data, systems/supabase, systems/edb, systems/timescaledb, systems/planetscale, systems/alloydb, systems/aurora]
related_ideas: [ideas/postgres-ecosystem/just-use-postgres, ideas/postgres-ecosystem/postgres-backend-as-a-service, ideas/business-licensing/acquisitions-as-ai-acquihires, ideas/cloud-architecture/serverless-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: neon-dbx
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems
    title: "Databricks: Databricks Agrees to Acquire Neon (2025-05-14)"
    author: org:databricks
  - id: cnbc-neon
    resource: https://www.cnbc.com/2025/05/14/databricks-is-buying-database-startup-neon-for-about-1-billion.html
    title: "CNBC: Databricks is buying database startup Neon for about $1 billion"
    author: org:cnbc
  - id: cnbc-crunchy
    resource: https://www.cnbc.com/2025/06/02/snowflake-to-buy-crunchy-data-250-million.html
    title: "CNBC: Snowflake to buy Crunchy Data for about $250 million (2025-06-02)"
    author: org:cnbc
  - id: dbx-mooncake
    resource: https://www.databricks.com/en/blog/mooncake-labs-joins-databricks-accelerate-vision-lakebase
    title: "Databricks: Mooncake Labs joins Databricks (2025-10-01)"
    author: org:databricks
  - id: ps-postgres
    resource: https://planetscale.com/blog/planetscale-for-postgres
    title: "PlanetScale: Announcing PlanetScale for Postgres (2025-07-01)"
    author: org:planetscale
  - id: ps-postgres-ga
    resource: https://planetscale.com/blog/planetscale-for-postgres-is-generally-available
    title: "PlanetScale: PlanetScale for Postgres is GA (2025-09-22)"
    author: org:planetscale
  - id: horizondb
    resource: https://www.infoworld.com/article/4093191/azure-horizondb-microsoft-goes-big-with-postgresql.html
    title: "InfoWorld: Azure HorizonDB, Microsoft goes big with PostgreSQL (Nov 2025)"
  - id: ch-postgres
    resource: https://www.businesswire.com/news/home/20260122173204/en/ClickHouse-Announces-Native-Postgres-Service-Offering-a-Unified-Data-Stack-for-Real-Time-and-AI-Driven-Applications
    title: "BusinessWire: ClickHouse announces native Postgres service (2026-01-22)"
  - id: sb-series-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase: Series F (2026-06-04)"
    author: org:supabase
  - id: tipranks-150
    resource: https://www.tipranks.com/news/private-companies/supabase-raises-150-million-and-acquires-turso-to-scale-agentic-database-infrastructure
    title: "TipRanks: Supabase raises $150 million and acquires Turso (2026-10-02)"
  - id: tembo-hn
    resource: https://news.ycombinator.com/item?id=44038896
    title: "HN: Tembo pivots; managed Postgres shutting down (May 2025)"
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: PostgreSQL backup tool gets some backup of its own after sole maintainer sounds alarm (2026-05-20)"
    author: org:the-register
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: bain-edb
    resource: https://www.baincapital.com/news/edb-leading-global-provider-enterprise-class-software-and-services-postgres-announces-majority
    title: "Bain Capital: EDB announces majority growth investment from Bain Capital Private Equity (2022-06-07)"
  - id: ms-citus
    resource: https://blogs.microsoft.com/blog/2019/01/24/microsoft-acquires-citus-data-re-affirming-its-commitment-to-open-source-and-accelerating-azure-postgresql-performance-and-scale/
    title: "Microsoft: Microsoft acquires Citus Data (2019-01-24)"
    author: org:microsoft
  - id: snow-pg-preview
    resource: https://www.snowflake.com/en/engineering-blog/postgres-public-preview/
    title: "Snowflake: Snowflake Postgres public preview (2025-12-17)"
    author: org:snowflake
---

# Summary
**Verdict: won, for sellers and for the platforms that bought.** In 2025 Postgres went from commodity to strategic asset. Databricks agreed to buy Neon for about $1B (May 14), citing telemetry that over 80% of Neon databases were created by AI agents[^neon-dbx][^cnbc-neon]. Snowflake paid about $250M for Crunchy Data (June 2)[^cnbc-crunchy] and had Snowflake Postgres in public preview by Dec 2025[^snow-pg-preview]. Databricks also bought Mooncake (Oct)[^dbx-mooncake]. PlanetScale, until then MySQL-only, launched Postgres (GA Sept 22 2025)[^ps-postgres][^ps-postgres-ga]. Microsoft announced Azure HorizonDB[^horizondb], ClickHouse launched a managed Postgres (Jan 2026)[^ch-postgres], and Supabase reached $10.5B (June 2026)[^sb-series-f], then bought Turso (Oct 2026)[^tipranks-150]. Pavlo: "Most of the database energy and activity is going into PostgreSQL companies"[^pavlo-2025]. The casualties were smaller hosts (Tembo shut its service in 2025[^tembo-hn]) and community tooling: pgBackRest's sole maintainer could not find a sponsor after Crunchy was sold[^reg-pgbackrest].

# The idea
If AI agents and new apps all start on Postgres, the operational database becomes the entry point to a customer's data. Warehouse and lakehouse vendors that lacked an OLTP product, and analytics or MySQL vendors who saw Postgres winning, decided to own a Postgres service instead of integrating with someone else's. For Postgres specialists this meant exits at strategic prices. For the market it meant hosting consolidated into large platforms.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2019 | Microsoft acquires Citus Data (Jan)[^ms-citus]. Great Hill Partners acquires EDB[^bain-edb] | + |
| 2022 | Bain Capital takes majority stake in EDB[^bain-edb] | + |
| 2025 | Tembo shuts down its managed Postgres (May–June) and pivots[^tembo-hn] | − |
| 2025 | Databricks–Neon (~$1B, May 14)[^cnbc-neon]. Snowflake–Crunchy (~$250M, June 2)[^cnbc-crunchy] | + |
| 2025 | PlanetScale for Postgres (July 1, GA Sept 22). Neki sharding project announced[^ps-postgres][^ps-postgres-ga] | + |
| 2025 | Databricks acquires Mooncake (Oct 1)[^dbx-mooncake]. Azure HorizonDB preview (Nov)[^horizondb]. Snowflake Postgres preview (Dec)[^snow-pg-preview] | + |
| 2026 | ClickHouse managed Postgres with Ubicloud (Jan 22)[^ch-postgres] | + |
| 2026 | pgBackRest rescued by a vendor consortium after its maintainer steps back (May)[^reg-pgbackrest] | − |
| 2026 | Supabase $10.5B (June)[^sb-series-f]. $150M more and Turso acquisition (Oct 2)[^tipranks-150] | + |

# What succeeded
- **Exits for Postgres specialists** at prices well above typical DBaaS multiples: Neon at about $1B[^cnbc-neon].
- **Product breadth for the buyers.** Databricks (Lakebase) and Snowflake (Snowflake Postgres) now sell an operational database tied to their analytics[^dbx-mooncake][^snow-pg-preview].
- **More competition on Postgres performance.** PlanetScale's NVMe-backed Postgres and its public benchmarks against Aurora, AlloyDB, Neon, Supabase and others raised the bar for managed Postgres[^ps-postgres].

# What failed
- **Undifferentiated hosting.** Tembo, which offered extension "stacks", could not compete and shut down[^tembo-hn]. Generic managed Postgres is a price war against RDS.
- **Community side effects.** Crunchy funded key tools. After the sale, pgBackRest's maintainer of 13 years stepped back until AWS, Percona, Supabase, pgEdge and Tiger Data stepped in[^reg-pgbackrest].
- **Unproven economics.** Most agent-created databases are tiny. Whether $1B+ prices and a $10.5B valuation are backed by matching revenue is not public (unconfirmed).

# Why
- **AI agents changed the buyer.** Agents need an API to create a database in seconds, branch it and throw it away, and they default to Postgres. Neon's and Supabase's agent telemetry gave acquirers a concrete growth story[^neon-dbx][^sb-series-f].
- **Lakehouse vendors lacked OLTP.** Buying a Postgres team was faster than building a transactional engine, and Postgres's license lets anyone sell it.
- **Postgres's neutrality cuts both ways.** Anyone can host it, so differentiation must come from storage architecture (Neon, HorizonDB), integration (Lakebase, ClickHouse CDC) or distribution (Supabase). Hosting alone is not enough.

# Lessons
- When a neutral open-source standard wins, the money goes to whoever owns distribution and integration around it, not to the core project.
- Acquisitions of small open-source companies can quietly remove funding from critical community tools. Ecosystems need explicit funding mechanisms.
- In a gold rush, plain hosting gets squeezed between hyperscalers and specialists.

# Related
- [Neon](/systems/neon.md), [Crunchy Data](/systems/crunchy-data.md), [Supabase](/systems/supabase.md), [EDB](/systems/edb.md), [PlanetScale](/systems/planetscale.md), [TimescaleDB](/systems/timescaledb.md)
- [Databricks acquires Neon](/events/2025-05-databricks-acquires-neon.md), [Snowflake acquires Crunchy Data](/events/2025-06-snowflake-acquires-crunchy-data.md), [Supabase Series F](/events/2026-06-supabase-series-f.md)
- [Acquisitions as AI acquihires](/ideas/business-licensing/acquisitions-as-ai-acquihires.md), [Serverless databases](/ideas/cloud-architecture/serverless-databases.md)
