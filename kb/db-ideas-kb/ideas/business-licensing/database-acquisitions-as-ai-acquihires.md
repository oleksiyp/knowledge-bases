---
type: Idea
title: "Database startups as AI-era acquisitions and acquihires"
description: "From 2023 the main exit for database startups became acquisition by AI labs, data platforms or big tech that wanted the team or a strategic engine for AI workloads (Rockset to OpenAI, Tabular and Neon to Databricks, Crunchy to Snowflake, Kùzu to Apple, DuckLabs to AWS). Verdict: winning as an exit route. It paid founders and investors, but the acquired product was often shut down for its customers."
tags: [acquisitions, acquihire, ai, m-and-a, postgres, lakehouse, exits]
area: business-licensing
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "Apple's 2015 purchase of FoundationDB (download pulled, open-sourced again in 2018) is the template of a database bought for internal use."
key_systems: [systems/rockset, systems/tabular, systems/neon, systems/crunchy-data, systems/kuzu, systems/duckdb, systems/datastax, systems/warpstream, systems/edgedb-gel]
related_ideas: [ideas/business-licensing/funding-boom-and-consolidation, ideas/business-licensing/database-company-graveyard, ideas/postgres-ecosystem/postgres-hosting-consolidation]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: openai-rockset
    resource: https://openai.com/index/openai-acquires-rockset/
    title: "OpenAI acquires Rockset (2024-06-21)"
  - id: bnf-rockset
    resource: https://blocksandfiles.com/2024/06/24/openai-buys-rockset/
    title: "Blocks & Files: OpenAI acquires Rockset for vector database capabilities (2024-06-24)"
  - id: cnbc-tabular
    resource: https://www.cnbc.com/2024/06/04/databricks-is-buying-data-optimization-startup-tabular.html
    title: "CNBC: Databricks acquires Tabular (2024-06-04)"
  - id: techtarget-tabular
    resource: https://www.techtarget.com/searchdatamanagement/news/366588032/Databricks-1B-plus-Tabular-acquisition-adds-Iceberg-support
    title: "TechTarget: Databricks $1B-plus Tabular acquisition"
  - id: yf-neon
    resource: https://finance.yahoo.com/news/databricks-buy-startup-neon-1-094745186.html
    title: "Reuters via Yahoo Finance: Databricks to buy Neon for ~$1B (May 2025)"
  - id: cnbc-crunchy
    resource: https://www.cnbc.com/2025/06/02/snowflake-to-buy-crunchy-data-250-million.html
    title: "CNBC: Snowflake to buy Crunchy Data for about $250M (2025-06-02)"
  - id: kuzu-macrumors
    resource: https://www.macrumors.com/2026/02/11/apple-acquires-new-database-app/
    title: "MacRumors: Apple acquires Kuzu (2026-02-11)"
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckDB: DuckLabs to join AWS (2026-08-26)"
  - id: gel-vercel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: "Gel joins Vercel (Dec 2025)"
  - id: bitio-sunset
    resource: https://blog.bit.io/whats-next-for-bit-io-joining-databricks-ace9a40bce0d
    title: "bit.io: What's next for bit.io, joining Databricks (2023)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: ibm-confluent
    resource: https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai
    title: "IBM to acquire Confluent (2025-12-08)"
  - id: turso-supabase
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso is joining Supabase (2026-10-02)"
  - id: sap-dremio
    resource: https://news.sap.com/2026/07/sap-completes-dremio-acquisition/
    title: "SAP completes acquisition of Dremio (2026-07-06)"
---

# Summary

**Verdict: winning (as an exit route).** Between 2023 and 2026 the typical successful exit for a database startup was not an IPO but a sale to a company building AI products or AI data platforms. OpenAI bought Rockset (June 2024) and shut down Rockset's customer service. Databricks bought Tabular for a reported $1–2B (June 2024) and Neon for about $1B (May 2025). Snowflake bought Crunchy Data for about $250M (June 2025). Apple quietly bought Kùzu (Oct 2025), Vercel absorbed the Gel (EdgeDB) team, and AWS bought DuckLabs (Aug 2026).[^openai-rockset][^cnbc-tabular][^yf-neon][^cnbc-crunchy][^kuzu-macrumors][^gel-vercel][^duck-aws] The buyers wanted retrieval engines, Postgres for agents, table-format control or teams. For customers the result was mixed: products were often shut down (Rockset, bit.io, Gel Cloud) or the open-source project was archived (Kùzu).

# The idea

AI changed what a database team is worth. A small team that knows indexing, retrieval or serverless Postgres can be worth more inside an AI lab or data platform than as a standalone vendor with a few hundred customers. For acquirers it is faster to buy than to build. For founders it is an exit at a time when IPOs were closed to mid-size infrastructure companies.

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2023 | Databricks acquires bit.io team; bit.io service sunset June 29[^bitio-sunset] | mixed |
| 2024 | Databricks buys Tabular (Iceberg creators), reported $1–2B; Snowflake and Confluent also bid[^cnbc-tabular][^techtarget-tabular] | + |
| 2024 | OpenAI buys Rockset; customer service ends by late 2024[^openai-rockset][^bnf-rockset] | mixed |
| 2024 | Confluent buys WarpStream; ClickHouse buys PeerDB; Supabase buys OrioleDB[^pavlo-2024] | + |
| 2025 | Databricks–Neon (~$1B), Snowflake–Crunchy (~$250M)[^yf-neon][^cnbc-crunchy] | + |
| 2025 | Apple buys Kùzu; repo archived the next day[^kuzu-macrumors] | − for OSS |
| 2025 | Gel team joins Vercel; Gel Cloud closes Jan 2026[^gel-vercel] | − for users |
| 2025 | IBM agrees to buy Confluent (~$11B)[^ibm-confluent] | mixed |
| 2026 | SAP completes Dremio; AWS buys DuckLabs; Supabase buys Turso[^sap-dremio][^duck-aws][^turso-supabase] | + |

# What succeeded

- **Liquidity in a closed IPO market.** These deals returned capital to investors when no US database company was going public.
- **Strategic fit.** Rockset's indexing team went into OpenAI's retrieval stack. Tabular gave Databricks influence over Apache Iceberg. Neon and Crunchy gave Databricks and Snowflake transactional Postgres for agent-built apps.
- **Foundation-protected OSS survived.** DuckDB stayed MIT under the DuckDB Foundation after the AWS deal because the foundation holds the IP.[^duck-aws]

# What failed

- **Customers were stranded.** Rockset gave month-to-month customers until the end of September 2024 to leave.[^bnf-rockset] bit.io gave users a month.[^bitio-sunset] Gel Cloud closed within two months of the announcement.[^gel-vercel]
- **Open source abandoned.** Kùzu's GitHub repo was archived on 10 Oct 2025 with a final release, and the reason only became public through an EU filing four months later.[^kuzu-macrumors]
- **Acquihire prices reset expectations.** Many deals had undisclosed prices; Pavlo noted it is "not clear who the next major buyer will be after Databricks and Snowflake bought PostgreSQL companies".[^pavlo-2025]

# Why

1. **AI raised the value of data-infrastructure teams.** Retrieval, vector search and agent backends needed database engineers, and AI labs had the money.
2. **Platform wars.** Databricks and Snowflake fought over table formats (Tabular), catalogs and then Postgres. Each purchase was partly defensive.
3. **No IPO window.** With the 2021 cohort stuck and public markets favoring AI, M&A was the only exit at scale.
4. **License and governance decided what survived.** Projects owned by a company could be archived (Kùzu). Projects owned by a foundation could not (DuckDB).

# Lessons

- If you depend on a startup database, check who owns the IP and the trademark, and whether a foundation holds them.
- Acquisition by an AI company often means the product ends; acquisition by a data platform more often means it becomes a feature.
- For founders, a strong team in a hot AI-adjacent area was more valuable than revenue.

# Related

- [Funding boom and consolidation](/ideas/business-licensing/funding-boom-and-consolidation.md) · [Database company graveyard](/ideas/business-licensing/database-company-graveyard.md)
- Events: [OpenAI acquires Rockset](/events/2024-06-openai-acquires-rockset.md), [Databricks acquires Tabular](/events/2024-06-databricks-acquires-tabular.md), [Databricks acquires Neon](/events/2025-05-databricks-acquires-neon.md), [Snowflake acquires Crunchy Data](/events/2025-06-snowflake-acquires-crunchy-data.md), [Apple acquires Kùzu](/events/2025-10-apple-acquires-kuzu.md), [Gel joins Vercel](/events/2025-12-gel-joins-vercel.md), [AWS acquires DuckLabs](/events/2026-08-aws-acquires-ducklabs.md)

[^openai-rockset]: OpenAI, 2024-06-21.
[^bnf-rockset]: Blocks & Files, 2024-06-24.
[^cnbc-tabular]: CNBC, 2024-06-04.
[^techtarget-tabular]: TechTarget.
[^yf-neon]: Reuters via Yahoo Finance, May 2025.
[^cnbc-crunchy]: CNBC, 2025-06-02.
[^kuzu-macrumors]: MacRumors, 2026-02-11.
[^duck-aws]: DuckDB blog, 2026-08-26.
[^gel-vercel]: Gel blog, Dec 2025.
[^bitio-sunset]: bit.io blog, 2023.
[^pavlo-2024]: Andy Pavlo, Databases in 2024.
[^pavlo-2025]: Andy Pavlo, Databases in 2025.
[^ibm-confluent]: IBM newsroom, 2025-12-08.
[^turso-supabase]: Turso blog, 2026-10-02.
[^sap-dremio]: SAP News, 2026-07-06.
