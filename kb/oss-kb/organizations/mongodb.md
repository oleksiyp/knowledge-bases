---
type: Organization
title: MongoDB, Inc.
description: "Public database company (NASDAQ: MDB; SSPL-licensed core, Atlas cloud) that re-accelerated to 30% growth in 2026 ($771.8M Q2 FY27) but lost CEO CJ Desai to Meta on 2026-09-28 after ~11 months, sending shares down ~18% (intraday ~26%)."
resource: https://www.mongodb.com
tags: [commercial-open-source, public-company, database, sspl, managed-cloud]
org_kind: public-company
hq: New York, USA
funding: { total_usd: "public since 2017 IPO", last_round: "IPO (Oct 2017)", last_round_date: 2017-10, valuation_usd: "n/a (public; market cap fluctuates)" }
business_verdict: growing
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mdb-q2fy27
    resource: https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-second-quarter-fiscal-2027-financial
    title: "MongoDB announces Q2 FY2027 results (2026-09-01)"
  - id: mdb-ceo
    resource: https://www.morningstar.com/news/pr-newswire/20260928ny57721/mongodb-announces-ceo-transition
    title: "MongoDB Announces CEO Transition (PR Newswire, 2026-09-28)"
  - id: gn-mdb-desai
    resource: https://investors.mongodb.com/news-releases/news-release-details/mongodb-announces-leadership-transition
    title: "MongoDB: Announces Leadership Transition — CJ Desai named President and CEO effective 2025-11-10 (2025-11-03)"
    author: org:mongodb
  - id: gn-mdb-stock
    resource: https://siliconangle.com/2026/09/28/meta-hires-mongodb-ceo-cj-desai-to-lead-new-enterprise-ai-business/
    title: "SiliconANGLE: Meta hires MongoDB CEO CJ Desai to lead new enterprise AI business (2026-09-28)"
    author: org:siliconangle
  - id: yahoo-mdb-18
    resource: https://finance.yahoo.com/markets/stocks/articles/mongodb-stock-fell-18-ceo-081850950.html
    title: "Yahoo Finance: MongoDB stock fell 18% when its CEO left for Meta (2026-09)"
  - id: thestreet-mdb
    resource: https://www.thestreet.com/investing/stocks/mongodb-stock-crash-ceo-resigns-meta
    title: "TheStreet: MongoDB stock crashes 26% (intraday) as its CEO jumps ship (2026-09-28)"
  - id: mdb-ars
    resource: https://www.sec.gov/Archives/edgar/data/0001441816/000162828026036431/ars.htm
    title: "MongoDB annual report FY2026 (62,500+ customers; $505.1M operating cash flow)"
  - id: db-mdb-8k
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828026063657/mdb-20260924.htm
    title: "MongoDB 8-K Item 5.02 (filed 2026-09-28): Desai notice 2026-09-24, resignation effective 2026-09-28; Ittycheria interim CEO"
  - id: db-reg-ferret
    resource: https://www.theregister.com/databases/2026/09/18/the-ideal-database-for-ai-agents-doesnt-exist-yet-says-percona-ceo/5296906
    title: "The Register: Percona CEO interview (notes MongoDB sued FerretDB in May 2025)"
---

# Summary
MongoDB is the best-performing large public COSS company of 2026 on growth: **Q2 FY2027 revenue $771.8M (+30%)**, Atlas $565.9M (+29%, 73.3% of subscription revenue), GAAP net income $40.9M, FCF $137.6M; FY27 guidance raised to $2.99–3.03B[^mdb-q2fy27]. FY2026 ended with 62,500+ customers and $505.1M operating cash flow[^mdb-ars]. Leadership is the risk: long-time CEO Dev Ittycheria handed over to **CJ Desai** (announced 2025-11-03)[^gn-mdb-desai], who left after ~11 months to become Meta's chief enterprise platform officer, "effective immediately", on **2026-09-28** (the day before MongoDB's Investor Day); Ittycheria returned as interim CEO and shares closed down ~18% after falling as much as ~26% intraday[^mdb-ceo][^gn-mdb-stock][^yahoo-mdb-18][^thestreet-mdb]. (Corrected in pass 2: "~18–24%" → ~18% close, ~26% intraday; tenure ~10 → ~11 months.)

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W12 | 2025-11-03 | CJ Desai named CEO (effective 2025-11-10), Ittycheria steps back[^gn-mdb-desai] | ± |
| W9 | 2026-03 | FY2026: 62,500+ customers, $505.1M CFO[^mdb-ars] | + |
| W3 | 2026-09-01 | Q2 FY27 $771.8M, +30%; guidance raised[^mdb-q2fy27] | + |
| W3 | 2026-09-28 | Desai leaves for Meta; Ittycheria interim; stock −18% (intraday −26%)[^mdb-ceo][^yahoo-mdb-18] | − |

# Monetization model
Managed cloud (Atlas, consumption) plus Enterprise Advanced self-managed subscriptions; core server under SSPL (source-available since 2018).

# Successes
- Re-acceleration to 30% at ~$3B scale and GAAP profitability[^mdb-q2fy27].

# Failures / risks
- CEO churn (two transitions in 11 months)[^mdb-ceo]; SSPL keeps it outside OSI definition.

# Related
- [COSS public companies](/projects/coss-market/coss-ipos-and-public-companies.md), [/events/2026-09-mongodb-ceo-departs-for-meta.md](/events/2026-09-mongodb-ceo-departs-for-meta.md)

[^mdb-q2fy27]: MongoDB IR, 2026-09-01.
[^mdb-ceo]: PR Newswire, 2026-09-28.
[^gn-mdb-desai]: MongoDB press release, 2025-11-03.
[^gn-mdb-stock]: SiliconANGLE, 2026-09-28.
[^yahoo-mdb-18]: Yahoo Finance, Sept 2026.
[^thestreet-mdb]: TheStreet, 2026-09-28.
[^mdb-ars]: MongoDB ARS, FY2026.

## Additional notes (databases)
- **CEO transition detail (primary source):** Per the 8-K, Desai notified the company on 2026-09-24 of his resignation, effective 2026-09-28, "not due to any disagreement". The board named Dev Ittycheria (CEO Sept 2014 to Nov 2025, now also a Sequoia partner) interim CEO[^db-mdb-8k].
- **OSS posture:** Core stays SSPL. In May 2025 MongoDB sued FerretDB, an Apache-2.0 MongoDB-compatible layer on Postgres, alleging patent and trademark infringement, which FerretDB disputes[^db-reg-ferret].
- Domain project file: [/projects/databases/mongodb.md](/projects/databases/mongodb.md).

[^db-mdb-8k]: MongoDB 8-K, filed 2026-09-28.
[^db-reg-ferret]: The Register, 2026-09-18.
