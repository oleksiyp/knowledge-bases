---
type: Idea
title: "Database company IPOs and their aftermath"
description: "Elastic (2018), Snowflake (2020), Confluent and Couchbase (2021) and MariaDB (2022 SPAC) went public on the cloud-database growth story. Verdict: mixed. Snowflake, MongoDB and Elastic became durable public companies, but Couchbase and Confluent were taken out (PE and IBM) and MariaDB collapsed. Several prominent private vendors remained private, while the listed cohort had sharply different outcomes."
tags: [ipo, public-markets, snowflake, mongodb, confluent, couchbase, elastic, mariadb]
area: business-licensing
verdict: mixed
hype_peak: 2021
adoption_2026: rare
origins: "MongoDB (Oct 2017, $24/share) was the first open-source database IPO of the cloud era, after Hortonworks and Cloudera in big data."
key_systems: [systems/snowflake, systems/mongodb, systems/elasticsearch, systems/confluent, systems/couchbase, systems/mariadb, systems/databricks]
related_ideas: [ideas/business-licensing/managed-service-is-the-business, ideas/business-licensing/funding-boom-and-consolidation]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: elastic-ipo
    resource: https://www.cnbc.com/2018/10/05/elastic-estc-ipo-stock-makes-debut-on-nyse.html
    title: "CNBC: Elastic IPO stock makes debut on NYSE (2018-10-05)"
  - id: snow-ipo
    resource: https://www.cnn.com/2020/09/16/investing/snowflake-ipo/
    title: "CNN: Snowflake shares more than double; biggest software IPO ever (2020-09-16)"
  - id: snow-geekwire
    resource: https://www.geekwire.com/2020/snowflake-stock-soars-largest-software-ipo-ever-madrona-among-earlier-venture-investors/
    title: "GeekWire: Snowflake stock soars in largest software IPO ever (2020-09-16)"
  - id: cflt-ipo
    resource: https://www.cnbc.com/2021/06/24/confluent-climbs-26percent-after-raising-828-million-in-ipo.html
    title: "CNBC: Confluent climbs 25% in Nasdaq debut after raising $828M (2021-06-24)"
  - id: base-ipo
    resource: https://investors.couchbase.com/news-releases/news-release-details/couchbase-announces-pricing-initial-public-offering
    title: "Couchbase announces pricing of IPO (July 2021)"
  - id: mariadb-tc
    resource: https://techcrunch.com/2024/02/20/mariadbs-potential-take-private-deal-is-an-indictment-of-2021s-spac-mania/
    title: "TechCrunch: MariaDB's potential take-private deal is an indictment of 2021's SPAC mania (2024-02-20)"
  - id: mariadb-sa
    resource: https://siliconangle.com/2024/09/10/mariadb-goes-private-acquisition-k1-investment-management/
    title: "SiliconANGLE: MariaDB goes private after acquisition by K1 (2024-09-10)"
  - id: couchbase-close
    resource: https://www.couchbase.com/press-releases/haveli-investments-completes-acquisition-of-couchbase/
    title: "Couchbase: Haveli completes acquisition (2025-09-24)"
  - id: ibm-confluent-close
    resource: https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents
    title: "IBM completes acquisition of Confluent (2026-03-17)"
  - id: ibm-confluent
    resource: https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai
    title: "IBM to acquire Confluent (2025-12-08)"
  - id: snow-fy26
    resource: https://www.sec.gov/Archives/edgar/data/1640147/000162828026011631/fy2026q4earnings.htm
    title: "Snowflake Q4 and FY2026 results (8-K exhibit)"
  - id: mdb-q2fy27
    resource: https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-second-quarter-fiscal-2027-financial
    title: "MongoDB Q2 FY2027 results (2026-09-01)"
  - id: mdb-ceo
    resource: https://www.morningstar.com/news/pr-newswire/20260928ny57721/mongodb-announces-ceo-transition
    title: "MongoDB announces CEO transition (2026-09-28)"
  - id: yf-mdb-18
    resource: https://finance.yahoo.com/markets/stocks/articles/mongodb-stock-fell-18-ceo-081850950.html
    title: "Yahoo Finance: MongoDB stock fell 18% when its CEO left for Meta (2026-09)"
  - id: elastic-fy26
    resource: https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000008/a26q4erex991.htm
    title: "Elastic Q4 and FY2026 results (8-K exhibit)"
  - id: forge-dbx
    resource: https://forgeglobal.com/insights/databricks-upcoming-ipo-news/
    title: "Forge: Databricks IPO news (Ghodsi: 2026 a 'terrible' year to list)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
---

# Summary

**Verdict: mixed.** The cloud-database IPO wave produced one historic success and several disappointments. Snowflake's September 2020 listing raised $3.4B, the largest software IPO ever at the time, and closed its first day at about $254 a share (IPO price $120), valuing it above $60B.[^snow-ipo][^snow-geekwire] By FY2026 Snowflake had $4.47B in product revenue, growing 29%.[^snow-fy26] MongoDB and Elastic also became durable public companies. The 2021 class did worse. Couchbase IPO'd at $24 in July 2021[^base-ipo] and was sold to private equity at $24.50 in 2025.[^couchbase-close] Confluent IPO'd at $36 in June 2021[^cflt-ipo] and IBM bought it at $31 per share in 2025–26.[^ibm-confluent] MariaDB listed via SPAC in December 2022 at $10 and was bought by K1 at $0.55 in 2024.[^mariadb-tc] Databricks remained private; the cited IPO coverage reports that its CEO called 2026 a "terrible" year to list.[^forge-dbx]

# The idea

A database is the stickiest software a company buys, so database vendors should make excellent public companies: high retention, expanding usage, long lifetimes. Public markets would fund their growth and reward consumption models.

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2018 | Elastic IPO at $36, closes first day at $70 (Oct 5)[^elastic-ipo] | + |
| 2020 | Snowflake IPO at $120, raises $3.4B, closes at ~$254 (Sept 16)[^snow-ipo] | + |
| 2021 | Confluent IPO at $36, raises $828M (Jun 24)[^cflt-ipo] | + |
| 2021 | Couchbase IPO at $24 (Jul 22)[^base-ipo] | + |
| 2022 | MariaDB plc lists via SPAC at $10 a share (Dec)[^mariadb-tc] | − |
| 2023 | MariaDB down ~90%, product cuts and layoffs[^pavlo-2023] | − |
| 2024 | K1 takes MariaDB private for ~$37M; delisted Aug[^mariadb-tc][^mariadb-sa] | − |
| 2025 | Couchbase sold to Haveli for ~$1.5B ($24.50/share)[^couchbase-close] | − |
| 2025 | IBM agrees to buy Confluent at $31/share (~$11B EV); closes Mar 2026[^ibm-confluent][^ibm-confluent-close] | mixed |
| 2026 | MongoDB growth re-accelerates to 30%, then CEO leaves for Meta; stock −18% in a day[^mdb-q2fy27][^mdb-ceo][^yf-mdb-18] | mixed |

# What succeeded

- **Snowflake** proved a cloud-only database could be a large public company: $4.47B product revenue and 125% net revenue retention in FY2026.[^snow-fy26]
- **MongoDB** (2017 IPO) grew with Atlas and re-accelerated to 30% growth in 2026.[^mdb-q2fy27]
- **Elastic** grew to $1.739B revenue in FY2026 (+17%).[^elastic-fy26]

# What failed

- **Couchbase** never grew fast enough. It was sold at roughly its IPO price after four years.[^couchbase-close]
- **Confluent** sold to IBM below its $36 IPO price, though at a large premium to its depressed 2025 trading price.[^ibm-confluent]
- **MariaDB** is the clearest failure: a SPAC listing at $10, about $0.35 per share before the K1 offer, and a $37M take-private.[^mariadb-tc]
- **Private financing remained an alternative.** Several prominent vendors continued raising private capital; this selected case list is not an exhaustive census of database listings.

# Why

1. **Growth rate determined outcome.** Companies growing 25–30%+ with a strong managed service (Snowflake, MongoDB) were rewarded. Those growing 15–20% with self-managed revenue (Couchbase) became PE targets.
2. **Timing.** The 2021 IPOs priced at peak multiples. When rates rose in 2022, software multiples compressed and never fully recovered for mid-size infrastructure.
3. **A SPAC did not ensure a durable listing.** MariaDB’s subsequent financial distress shows the limits of that route; the outcome alone does not establish whether a traditional IPO was available.[^mariadb-tc]
4. **Private capital became plentiful for winners.** Large private rounds gave Databricks an alternative to listing; the valuation it would have received in a hypothetical IPO is not established here.

# Lessons

- Being a database company is not enough for public markets; growth and the share of consumption revenue are what get paid for.
- Revenue scale and growth affect public-market expectations, but the selected acquisitions do not establish a universal revenue or growth threshold.
- The next database IPO, if any, will likely be a broad platform (Databricks, ClickHouse), not a single-model database.

# Related

- [Managed service is the business](/ideas/business-licensing/managed-service-is-the-business.md) · [Funding boom and consolidation](/ideas/business-licensing/funding-boom-and-consolidation.md)
- Events: [Elastic IPO](/events/2018-10-elastic-ipo.md), [Snowflake IPO](/events/2020-09-snowflake-ipo.md), [Confluent IPO](/events/2021-06-confluent-ipo.md), [Couchbase IPO](/events/2021-07-couchbase-ipo.md), [MariaDB taken private](/events/2024-09-mariadb-taken-private-by-k1.md), [Couchbase taken private](/events/2025-09-couchbase-taken-private.md), [IBM acquires Confluent](/events/2025-12-ibm-to-acquire-confluent.md)

[^elastic-ipo]: CNBC, 2018-10-05.
[^snow-ipo]: CNN, 2020-09-16.
[^snow-geekwire]: GeekWire, 2020-09-16.
[^cflt-ipo]: CNBC, 2021-06-24.
[^base-ipo]: Couchbase IR, July 2021.
[^mariadb-tc]: TechCrunch, 2024-02-20.
[^mariadb-sa]: SiliconANGLE, 2024-09-10.
[^couchbase-close]: Couchbase press release, 2025-09-24.
[^ibm-confluent-close]: IBM newsroom, 2026-03-17.
[^ibm-confluent]: IBM newsroom, 2025-12-08.
[^snow-fy26]: Snowflake 8-K, FY2026.
[^mdb-q2fy27]: MongoDB IR, 2026-09-01.
[^mdb-ceo]: PR Newswire, 2026-09-28.
[^yf-mdb-18]: Yahoo Finance, Sept 2026.
[^elastic-fy26]: Elastic 8-K, FY2026.
[^forge-dbx]: Forge Global.
[^pavlo-2023]: Andy Pavlo, Databases in 2023.
