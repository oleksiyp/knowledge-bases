---
type: Organization
title: Elastic N.V.
description: "Public company behind Elasticsearch/Kibana (NYSE: ESTC); returned to open source by adding AGPL in Aug 2024 and grew steadily (FY2026 revenue $1.739B, +17%; Q1 FY27 +15%)."
resource: https://www.elastic.co
tags: [commercial-open-source, public-company, search, observability, security, agpl]
org_kind: public-company
hq: Amsterdam, Netherlands / San Francisco, USA
funding: { total_usd: "public since 2018 IPO", last_round: "IPO (Oct 2018)", last_round_date: 2018-10, valuation_usd: "unverified" }
business_verdict: growing
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: elastic-fy26
    resource: https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-Fourth-Quarter-and-Fiscal-2026-Financial-Results/default.aspx
    title: "Elastic Reports Q4 and Fiscal 2026 results"
  - id: elastic-q1fy27
    resource: https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-First-Quarter-Fiscal-2027-Financial-Results/default.aspx
    title: "Elastic Reports Q1 Fiscal 2027 results (2026-08-27)"
  - id: elastic-agpl
    resource: https://www.elastic.co/blog/elasticsearch-is-open-source-again
    title: "Elastic: Elasticsearch is open source. Again! (2024-08-29)"
  - id: lf-opensearch-members
    resource: https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members
    title: "Linux Foundation: OpenSearch Software Foundation expands ecosystem (2026-09-22)"
  - id: stockstory-estc
    resource: https://stockstory.org/us/stocks/nyse/estc/news/earnings/elastics-nyseestc-q2-cy2026-beats-on-revenue-stock-jumps-231percent
    title: "StockStory: Elastic beats on revenue, stock jumps 23.1% (2026-08-27)"
---

# Summary
Elastic is the archetype of a COSS company that relicensed away from open source (SSPL/ELv2, 2021) and then came back: in Aug 2024 Shay Banon announced AGPL as an additional option alongside ELv2 and SSPL[^elastic-agpl]. Its business kept compounding: **FY2026 revenue $1.739B (+17%)**, subscription $1.634B (+18%), Q4 FY26 $451M (+16%)[^elastic-fy26]; **Q1 FY2027 revenue $478M (+15%)**, cRPO +21%[^elastic-q1fy27].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| (pre-W24) | 2024-08-29 | Adds AGPL license option[^elastic-agpl] | + |
| W6 | 2026-05/06 | FY2026: $1.739B, +17%[^elastic-fy26] | + |
| W3 | 2026-08-27 | Q1 FY27: $478M, +15%; cRPO +21%[^elastic-q1fy27] | + |

# Monetization model
Elastic Cloud (managed, consumption) plus self-managed subscriptions; triple license (AGPL / ELv2 / SSPL) for the core.

# Successes
- Steady mid-teens growth at ~$1.7B scale; regained OSI-approved status via AGPL[^elastic-agpl][^elastic-fy26].

# Failures / risks
- Growth decelerating slowly (17% → 15%)[^elastic-q1fy27]; OpenSearch fork (Linux Foundation) remains a competitor.

# Related
- [Business models](/projects/coss-market/business-models.md), [COSS public companies](/projects/coss-market/coss-ipos-and-public-companies.md)

[^elastic-fy26]: Elastic IR, FY2026.
[^elastic-q1fy27]: Elastic IR, 2026-08-27.
[^elastic-agpl]: Elastic blog, 2024-08-29.

## Additional notes (licensing-forks)
- **Did the AGPL return hurt revenue?** No visible cost. Revenue grew 17% in FY26 and 15% in Q1 FY27 after AGPL was added in Aug 2024, and the stock jumped about 23% on the Q1 FY27 print (Aug 27, 2026).[^stockstory-estc] So far this contradicts the claim that source-available terms are needed to protect revenue.
- **Fork outcome:** OpenSearch did not lose momentum after Elastic went back to AGPL. In Sept 2026 the foundation reported 2.4B+ downloads (+140% YoY), +31% contributors, and new members including Intel.[^lf-opensearch-members]
- See [Elasticsearch](/projects/licensing-forks/elasticsearch.md) and [OpenSearch](/projects/licensing-forks/opensearch.md).

[^lf-opensearch-members]: Linux Foundation — https://www.linuxfoundation.org/press/opensearch-software-foundation-expands-enterprise-ecosystem-with-new-members
[^stockstory-estc]: StockStory — https://stockstory.org/us/stocks/nyse/estc/news/earnings/elastics-nyseestc-q2-cy2026-beats-on-revenue-stock-jumps-231percent
