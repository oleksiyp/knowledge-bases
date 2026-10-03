---
type: OSS Project
title: Elasticsearch
description: "Search/analytics engine that went SSPL/ELv2 in 2021 and added AGPLv3 in Aug 2024; Elastic's business re-accelerated (FY26 revenue $1.74B, +17%) while the OpenSearch fork kept growing — evidence that the reversal helped trust but the split is permanent."
resource: https://github.com/elastic/elasticsearch
tags: [search, vector-database, relicensing, agpl, sspl, public-company]
domain: licensing-forks
license: "AGPL-3.0 OR SSPL-1.0 OR Elastic-2.0 (tri-license)"
license_history: ["Apache-2.0 (2010-2021)", "SSPL/ELv2 dual (7.11, Jan 2021)", "AGPLv3 added as third option (announced 2024-08-29)"]
governance: single-vendor
steward: Elastic N.V.
backing_orgs: [organizations/elastic]
metrics:
  github_stars: { value: 78180, as_of: 2026-10-03 }
  fy26_revenue_usd: { value: "1.739B", as_of: 2026-04-30 }
  q1_fy27_revenue_usd: { value: "478M (+15% YoY)", as_of: 2026-07-31 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: elastic-agpl
    resource: https://www.elastic.co/blog/elasticsearch-is-open-source-again
    title: "Elastic blog: Elasticsearch is open source. Again! (2024-08-29)"
  - id: es-gh
    resource: https://github.com/elastic/elasticsearch
    title: Elasticsearch GitHub repository
  - id: itpro-elastic
    resource: https://www.itpro.com/software/open-source/elastic-returns-to-open-source-but-can-it-regain-the-communitys-trust-some-industry-players-arent-holding-their-breath
    title: "ITPro: Elastic returns to open source, but can it regain the community's trust?"
  - id: elastic-fy26-ars
    resource: https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000056/fy26ars.pdf
    title: Elastic FY2026 annual report (SEC)
  - id: elastic-fy26-q4
    resource: https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000008/a26q4erex991.htm
    title: Elastic Q4 FY2026 results (8-K exhibit)
  - id: elastic-q1fy27
    resource: https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000035/a27q1erex991.htm
    title: Elastic Q1 FY2027 results (8-K exhibit, 2026-08-27)
  - id: stockstory-estc
    resource: https://stockstory.org/us/stocks/nyse/estc/news/earnings/elastics-nyseestc-q2-cy2026-beats-on-revenue-stock-jumps-231percent
    title: "StockStory: Elastic beats on revenue, stock jumps 23.1% (2026-08-27)"
  - id: lf-opensearch-members
    resource: https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members
    title: "Linux Foundation: OpenSearch Software Foundation expands ecosystem (2026-09-22)"
---

# Summary
Elastic was the first major vendor to undo a defensive relicense. On Aug 29, 2024 it added AGPLv3 alongside SSPL and ELv2, and Shay Banon said Elasticsearch "is open source. Again!"[^elastic-agpl] Two years later the business looks healthy. FY2026 (ended Apr 30, 2026) revenue was $1.739B (+17%) and Elastic returned to GAAP profitability.[^elastic-fy26-q4] Q1 FY27 revenue was $478M (+15%), guidance was raised, and the stock jumped about 23% on Aug 27, 2026.[^elastic-q1fy27][^stockstory-estc] The OpenSearch fork did not shrink, though: downloads were up 140% YoY in 2026.[^lf-opensearch-members] The AGPL move improved Elastic's position with developers but did not bring the community back together. Verdict: OSS stable, business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024-08-29 | AGPLv3 added as license option for Elasticsearch & Kibana[^elastic-agpl] | OSS | + |
| W24 | 2024–2025 | Industry skeptical that trust can be regained; OpenSearch keeps AWS/foundation backing[^itpro-elastic] | OSS | − |
| W6 | 2026-05 | FY26 results: revenue $1.739B (+17%), GAAP net income $367.8M[^elastic-fy26-q4] | Business | + |
| W3 | 2026-08-27 | Q1 FY27: $478M (+15%), raised FY27 guide to ~$2.0B; stock +23% on the day[^elastic-q1fy27][^stockstory-estc] | Business | + |
| W3 | 2026-09 | 9.5.x and 8.19.x patch releases continue[^es-gh] | OSS | + |

# OSS successes
- Elasticsearch is back under an OSI-approved license (AGPLv3), so distros and AGPL-tolerant users can use it again.[^elastic-agpl]
- Active development continues on two major lines (9.x and 8.19.x).[^es-gh]

# OSS failures / risks
- The 2021 fork is permanent. OpenSearch has its own foundation and is growing faster in downloads and contributors (+31% YoY).[^lf-opensearch-members]
- Many enterprises' legal teams avoid AGPL, so the "open source again" message reaches only part of the market.[^itpro-elastic]

# Business successes
- Growth re-accelerated around vector search and AI. Sales-led subscription revenue grew 20% in FY26.[^elastic-fy26-q4]
- Q1 FY27 had a record number of net new customers above $100K ACV (more than 1,800 total).[^elastic-q1fy27]

# Business failures / risks
- The stock was volatile through the 2026 software sell-off before rebounding in August.[^stockstory-estc]
- Growth guidance (~15%) is below the pre-2022 hypergrowth era.[^elastic-q1fy27]

# By window
## W3
- Q1 FY27 beat and raised guidance; stock rally (Aug 27, 2026).[^elastic-q1fy27][^stockstory-estc]
## W6
- FY26 results (May 2026): $1.739B revenue (+17%) and GAAP net income of $367.8M.[^elastic-fy26-q4]
## W9
- No notable licensing events found.
## W12
- Q2/Q3 FY26 results continued high-teens growth.[^elastic-fy26-q4]
## W24
- First full year of the AGPL option. OpenSearch Foundation operating independently.[^itpro-elastic]

# Lessons
- Adding AGPL had no visible commercial cost: revenue kept growing afterwards. This weakens the argument that SSPL-style licenses are needed to defend revenue.
- The revenue drivers are cloud and AI products. License terms did not drive them in either direction.

# Related
- [OpenSearch](/projects/licensing-forks/opensearch.md)
- [Elastic](/organizations/elastic.md)
- [Redis](/projects/licensing-forks/redis.md) — similar AGPL reversal
- [Licensing & forks domain review](/domains/licensing-forks.md)

[^elastic-agpl]: Elastic blog — https://www.elastic.co/blog/elasticsearch-is-open-source-again
[^es-gh]: Elasticsearch GitHub — https://github.com/elastic/elasticsearch
[^itpro-elastic]: ITPro — https://www.itpro.com/software/open-source/elastic-returns-to-open-source-but-can-it-regain-the-communitys-trust-some-industry-players-arent-holding-their-breath
[^elastic-fy26-ars]: Elastic FY26 annual report — https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000056/fy26ars.pdf
[^elastic-fy26-q4]: Elastic Q4 FY26 release — https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000008/a26q4erex991.htm
[^elastic-q1fy27]: Elastic Q1 FY27 release — https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000035/a27q1erex991.htm
[^stockstory-estc]: StockStory — https://stockstory.org/us/stocks/nyse/estc/news/earnings/elastics-nyseestc-q2-cy2026-beats-on-revenue-stock-jumps-231percent
[^lf-opensearch-members]: Linux Foundation — https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members
