---
type: OSS Project
title: StarRocks
description: "Linux Foundation-hosted, Apache-2.0 MPP analytics engine. It is actively maintained (4.0.x), while its commercial sponsor CelerData has rebranded as PhoenixData AI ('PhoenixAI') around agent analytics."
resource: https://github.com/StarRocks/starrocks
tags: [olap, lakehouse, apache-2.0, linux-foundation]
domain: databases
license: Apache-2.0
license_history: ["Elastic License 2.0 (early)", "Apache-2.0 (2022-)"]
governance: foundation
steward: Linux Foundation; CelerData / PhoenixData AI as primary contributor
backing_orgs: []
metrics:
  github_stars: { value: 12152, as_of: 2026-10-03 }
  latest_release: { value: "4.0.14 / 3.5.21", as_of: 2026-08-31 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sr-gh
    resource: https://github.com/StarRocks/starrocks
    title: StarRocks GitHub repository
  - id: phoenix-blog
    resource: https://phoenixdata.ai/blog
    title: PhoenixData AI blog (celerdata.com/blog redirects here)
  - id: dbta-phoenix
    resource: https://www.dbta.com/Editorial/News-Flashes/CelerData-Rebrands-as-PhoenixAI-Introduces-Analytical-Engine-Designed-for-AI-Agents-174972.aspx
    title: "DBTA: CelerData Rebrands as PhoenixAI, Introduces Analytical Engine Designed for AI Agents (2026-05-27)"
  - id: phoenix-rebrand
    resource: https://www.phoenixdata.ai/rebrand
    title: CelerData Is Now PhoenixAI (company rebrand page)
    author: org:phoenixai
  - id: bf-phoenix
    resource: https://www.blocksandfiles.com/ai-ml/2026/06/15/phoenixai-leaves-legacy-analytics-ashes-behind-to-build-ai-agent-database/5255402
    title: "Blocks and Files: PhoenixAI leaves legacy analytics ashes behind to build AI agent database (2026-06-15)"
  - id: reg-cf-basin
    resource: https://www.theregister.com/databases/2026/10/01/cloudflare-launches-data-platform-with-bland-basin-branding-promise-of-fewer-fees/5300618
    title: "The Register: Cloudflare Basin supports StarRocks among query engines"
    author: org:the-register
---

# Summary
StarRocks keeps two maintained lines (4.0.14 and 3.5.21 in Aug 2026)[^sr-gh] and is a first-class query engine for Iceberg platforms such as Cloudflare Basin[^reg-cf-basin]. Its sponsor CelerData now operates as PhoenixData AI. celerdata.com/blog permanently redirects to phoenixdata.ai, the products are "PhoenixAI Cloud" and "PhoenixAI Anywhere" (Sept 2026), and it pitches agentic analytics with an in-product copilot and Claude integration[^phoenix-blog]. The rebrand was announced on May 27 2026 together with an "Agentic AI Database" product and the appointment of former Clumio CEO Rick Underwood as President; contracts, pricing and support were unchanged[^dbta-phoenix][^phoenix-rebrand][^bf-phoenix]. Blocks and Files reports cumulative backing including an $80M Series B led by Sky9 Capital and production customers such as AppLovin, Coinbase and Demandbase[^bf-phoenix]. (Corrected in pass 2: rebrand date "unverified" → May 27 2026.)

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | StarRocks 4.0 line begins (patches through 4.0.14) [^sr-gh] | OSS | + |
| W6 | 2026-05-27 | CelerData rebrands as PhoenixAI; Agentic AI Database launched; Rick Underwood named President [^dbta-phoenix][^phoenix-rebrand] | Business | + |
| W6 | 2026-05-20 | "Agent Fawkes" copilot in PhoenixAI Cloud [^phoenix-blog] | Business | + |
| W3 | 2026-09-04 | PhoenixAI Anywhere (self-managed) [^phoenix-blog] | Business | + |
| W3 | 2026-10-01 | Listed as a Cloudflare Basin engine [^reg-cf-basin] | OSS | + |

# OSS successes
- Foundation hosting and integration across the lakehouse ecosystem[^reg-cf-basin].

# OSS failures / risks
- Contributor concentration at one vendor. The rebrand may dilute StarRocks' visibility[^phoenix-blog].

# Business successes
- Repositioned toward agent-driven analytics[^phoenix-blog].

# Business failures / risks
- Squeezed between ClickHouse (~$15B) and Databricks/Snowflake.

# By window
## W3
- PhoenixAI Anywhere. Basin integration[^phoenix-blog][^reg-cf-basin].
## W6
- CelerData → PhoenixAI rebrand (May 27) and agent copilot[^dbta-phoenix][^phoenix-blog].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- 4.0 line[^sr-gh].

# Lessons
- Second-tier OLAP vendors rebrand around "AI agents" to stay relevant next to ClickHouse's dominance.

# Related
- [Apache Doris](/projects/databases/apache-doris.md), [ClickHouse](/projects/databases/clickhouse.md), [DuckDB](/projects/databases/duckdb.md)

[^sr-gh]: GitHub API, StarRocks/starrocks releases, 2026-10-03.
[^phoenix-blog]: phoenixdata.ai blog, accessed 2026-10-03.
[^reg-cf-basin]: The Register, 2026-10-01.
[^dbta-phoenix]: DBTA, 2026-05-27.
[^phoenix-rebrand]: PhoenixAI rebrand page.
[^bf-phoenix]: Blocks and Files, 2026-06-15 (funding round date not stated in article).
