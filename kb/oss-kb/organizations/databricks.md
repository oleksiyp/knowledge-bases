---
type: Organization
title: Databricks
description: Creator of Spark, Delta Lake, MLflow and Unity Catalog; the domain's dominant business winner — $7B revenue run-rate and a $190B valuation (Aug 2026), with Iceberg absorbed via the Tabular deal.
resource: https://www.databricks.com
tags: [commercial-open-source, lakehouse, spark, delta-lake, iceberg]
org_kind: coss-startup
hq: San Francisco, California, USA
funding: { total_usd: "~$25B+ equity (Series J $10B, K $1B, L ~$5B incl. Feb 2026 close, Aug 2026 round $5B, plus earlier rounds) and ~$2B debt", last_round: "$5B led by Coatue", last_round_date: 2026-08-13, valuation_usd: "190B" }
business_verdict: thriving
projects: [projects/data-engineering/apache-spark, projects/data-engineering/delta-lake, projects/data-engineering/unity-catalog, projects/data-engineering/apache-iceberg]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dbx-wiki
    resource: https://en.wikipedia.org/wiki/Databricks
    title: "Wikipedia: Databricks (rounds, acquisitions, run-rate)"
  - id: dbx-cnbc
    resource: https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html
    title: "CNBC: Databricks wraps $5B round at $190B valuation (2026-08-13)"
  - id: dbx-tc
    resource: https://techcrunch.com/2026/07/17/databricks-hits-188b-valuation-extending-its-run-as-ais-favorite-second-act/
    title: "TechCrunch: Databricks hits $188B valuation (2026-07-17)"
  - id: dbx-tabular
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-tabular-company-founded-original-creators
    title: "Databricks agrees to acquire Tabular (2024-06-04)"
  - id: starburst-blog
    resource: https://www.starburst.io/blog/
    title: "Starburst blog: server-side scan planning with Databricks (2026-09-18)"
  - id: cm-cnbc-dbx-feb26
    resource: "https://www.cnbc.com/2026/02/09/databricks-completes-5-billion-funding-round-with-2-billion-in-debt.html"
    title: "CNBC: Databricks completes $5B round at $134B (incl. $2B debt), 2026-02-09"
  - id: cm-forge-dbx
    resource: "https://forgeglobal.com/insights/databricks-upcoming-ipo-news/"
    title: "Forge: Databricks IPO news (Ghodsi: 2026 a 'terrible' year to list)"
  - id: cm-yf-neon
    resource: "https://finance.yahoo.com/news/databricks-buy-startup-neon-1-094745186.html"
    title: "Reuters via Yahoo: Databricks to buy Neon for ~$1B (May 2025)"
  - id: db-neon-gh
    resource: https://github.com/neondatabase/neon
    title: "Neon GitHub repository — commit history via GitHub API (>=100 commits Jul 2025; 1 in Aug 2025; 11 since 2025-09-01)"
  - id: db-infoq-lakebase
    resource: https://www.infoq.com/news/2026/02/databricks-lakebase-postgresql/
    title: "InfoQ: Databricks Introduces Lakebase (GA AWS Feb 2026; Azure 2026-03-03)"
  - id: db-reg-ltap
    resource: https://www.theregister.com/databases/2026/07/03/databricks-unifies-oltp-and-olap-depending-on-what-counts-as-a-copy/5265733
    title: "The Register: Databricks unifies OLTP and OLAP, depending on what counts as a copy (2026-07-03)"
  - id: dbx-series-l
    resource: https://www.prnewswire.com/news-releases/databricks-grows-55-yoy-surpasses-4-8b-revenue-run-rate-and-is-raising-4b-series-l-at-134b-valuation-302643445.html
    title: "Databricks press release: Grows >55% YoY, surpasses $4.8B revenue run-rate, raising >$4B Series L at $134B (2025-12-16)"
    author: org:databricks
  - id: dbx-5-4b
    resource: https://databricks.com/company/newsroom/press-releases/databricks-grows-65-yoy-surpasses-5-4-billion-revenue-run-rate
    title: "Databricks press release: Grows >65% YoY, surpasses $5.4B revenue run-rate (2026-02-09)"
    author: org:databricks
---

# Summary
Databricks is the most successful commercial-open-source company in data. Funding: Series J $10B at $62B (Dec 2024), Series K $1B at >$100B (Aug 2025), Series L at $134B (announced 2025-12-16 as >$4B, led by Insight Partners, Fidelity and J.P. Morgan; closed in Feb 2026 at ~$5B of equity plus ~$2B of debt capacity)[^dbx-series-l][^cm-cnbc-dbx-feb26], and a $5B round led by Coatue at $190B post-money that closed 2026-08-13 (first reported at $188B in July)[^dbx-wiki][^dbx-cnbc][^dbx-tc]. Revenue run-rate rose from $4.8B (Q3 FY26, >55% YoY)[^dbx-series-l] to $5.4B (Feb 2026, >65% YoY; AI products >$1.4B)[^dbx-5-4b] to ~$7B (Aug 2026, >80% YoY)[^dbx-wiki][^dbx-cnbc]. The CEO has downplayed IPO urgency[^dbx-cnbc]. Strategically, it bought Tabular (Iceberg creators, June 2024)[^dbx-tabular], Neon (~$1B, May 2025), Panther Labs (June 2026) and Electric (Aug 2026)[^dbx-wiki]. Verdict: **thriving**.

# Business timeline
| Date | Event |
|---|---|
| 2024-06-04 | Agrees to acquire Tabular[^dbx-tabular] |
| 2024-12 | Series J $10B at $62B[^dbx-wiki] |
| 2025-05 | Acquires Neon (~$1B)[^dbx-wiki] |
| 2025-06 | Agent Bricks, Lakebase launched[^dbx-wiki] |
| 2025-08 | Series K $1B at >$100B[^dbx-wiki] |
| 2025-12-16 | Series L (>$4B) at $134B announced; $4.8B run-rate[^dbx-series-l] |
| 2026-02-09 | $5.4B run-rate (>65% YoY); Series L closed at ~$5B equity + ~$2B debt[^dbx-5-4b][^cm-cnbc-dbx-feb26] |
| 2026-06 | Omnigent OSS agent framework; Panther Labs acquisition[^dbx-wiki] |
| 2026-07-17 | Round valuing it at $188B reported[^dbx-tc] |
| 2026-08-13 | $5B at $190B closes; ~$7B run-rate[^dbx-cnbc] |
| 2026-09-18 | Server-side scan planning partnership with Starburst[^starburst-blog] |

# Monetization model
Consumption-based cloud platform (Databricks Units) atop open formats (Delta, Iceberg), Spark, MLflow and Unity Catalog; proprietary Photon engine, serverless, AI/agent products, Lakebase (Postgres).

# Successes
- Hyper-growth at scale; won both sides of the format war by owning Delta and buying Iceberg's creators[^dbx-tabular].

# Failures / risks
- Delta's "open standard" narrative weakened; Unity Catalog OSS lags the commercial product.
- Valuation implies very high growth expectations; IPO still deferred[^dbx-cnbc].

# Related
- [Apache Spark](/projects/data-engineering/apache-spark.md), [Delta Lake](/projects/data-engineering/delta-lake.md), [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Databricks $190B round](/events/2026-08-databricks-190b-valuation.md)

[^dbx-wiki]: Wikipedia, Databricks.
[^dbx-cnbc]: CNBC, 2026-08-13.
[^dbx-tc]: TechCrunch, 2026-07-17.
[^dbx-tabular]: Databricks press release, 2024-06-04.
[^starburst-blog]: Starburst blog.

## Additional notes (coss-market)

Market context: Databricks alone raised more in 2026 ($5B at $134B in Feb, incl. $2B debt[^cm-cnbc-dbx-feb26], and $5B at $190B in Aug) than the entire COSS sector's 2019–2024 annual average (~$9B/yr per LF/COSSA). It is the largest acquirer in the Postgres land-grab (Neon, ~$1B, May 2025)[^cm-yf-neon]. CEO Ali Ghodsi called 2026 a "terrible" year to IPO given SpaceX/OpenAI/Anthropic listings, pushing a listing to 2027+[^cm-forge-dbx]. See [COSS funding](/projects/coss-market/coss-funding-2024-2026.md) and [IPOs & public companies](/projects/coss-market/coss-ipos-and-public-companies.md).

[^cm-cnbc-dbx-feb26]: CNBC, 2026-02-09.
[^cm-yf-neon]: Reuters via Yahoo Finance.
[^cm-forge-dbx]: Forge Global.

## Additional notes (databases)
- **Lakebase timeline:** Lakebase, built on Neon, went GA on AWS in Feb 2026 and on Azure on 2026-03-03[^db-infoq-lakebase]. The July 2026 "LTAP / zero copies" marketing was challenged because Lakebase keeps both pageserver pages and Parquet copies[^db-reg-ltap].
- **OSS side-effect of the Neon deal:** The public `neondatabase/neon` repo (Apache-2.0, 23k stars) went from 100+ commits in July 2025 to one in Aug 2025 and only 11 since Sept 2025, with no tagged releases since July 2025[^db-neon-gh]. See [/projects/databases/neon.md](/projects/databases/neon.md).

[^db-infoq-lakebase]: InfoQ, Feb 2026.
[^db-reg-ltap]: The Register, 2026-07-03.
[^db-neon-gh]: GitHub API, queried 2026-10-03.
[^dbx-series-l]: Databricks press release, 2025-12-16.
[^dbx-5-4b]: Databricks press release, 2026-02-09.
