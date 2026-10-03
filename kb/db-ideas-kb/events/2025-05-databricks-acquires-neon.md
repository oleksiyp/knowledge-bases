---
type: Event
title: "Databricks acquires Neon for about $1 billion"
description: "Databricks bought the serverless Postgres company, citing that over 80% of Neon databases were created by AI agents, and relaunched the technology as Lakebase. It was the largest validation of disaggregated, branchable, scale-to-zero OLTP."
date: 2025-05-14
year: 2025
kind: acquisition
signal: positive
ideas: [ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/database-branching, ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/database-per-tenant, ideas/postgres-ecosystem/postgres-hosting-consolidation]
systems: [systems/neon, systems/databricks]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cnbc-neon
    resource: https://www.cnbc.com/2025/05/14/databricks-is-buying-database-startup-neon-for-about-1-billion.html
    title: "CNBC: Databricks is buying database startup Neon for about $1 billion"
  - id: techrepublic-neon
    resource: https://www.techrepublic.com/article/news-databricks-neon-acquisition/
    title: "TechRepublic: Databricks to acquire Neon in $1 billion deal"
  - id: lakebase
    resource: https://siliconangle.com/2025/06/11/following-neon-acquisition-databricks-launches-serverless-lakebase-database/
    title: "SiliconANGLE: Following Neon acquisition, Databricks launches Lakebase"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# What happened
On May 14, 2025, Databricks agreed to acquire Neon for about $1B[^cnbc-neon]. Databricks highlighted that "over 80 percent of the databases provisioned on Neon were created automatically by AI agents rather than by humans". Neon had 18,000+ customers including OpenAI, Adobe, Replit and Vercel[^techrepublic-neon]. In June, Databricks launched **Lakebase**, built on Neon's technology, while Neon continued as a standalone service[^lakebase][^pavlo-2025]. A month later Snowflake paid about $250M for Crunchy Data[^pavlo-2025].

# Why it matters
It marked the point where serverless and branching Postgres went from developer convenience to strategic asset, driven by agents creating databases at machine speed. It also shows a recurring 2024–26 pattern: data platforms buying OLTP startups to own the operational side of AI applications.

# Related
[Neon](/systems/neon.md) · [Databricks](/systems/databricks.md) · [Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [Database branching](/ideas/cloud-architecture/database-branching.md)

# Notes from postgres-ecosystem
This deal opened a run of Postgres acquisitions: Snowflake–Crunchy Data (June 2025), Databricks–Mooncake (Oct 2025) and Supabase–Turso (Oct 2026). Over the same period PlanetScale, Microsoft (HorizonDB) and ClickHouse launched their own Postgres services. See [Postgres hosting consolidation](/ideas/postgres-ecosystem/postgres-hosting-consolidation.md) and [Snowflake acquires Crunchy Data](/events/2025-06-snowflake-acquires-crunchy-data.md).
