---
type: Idea
title: "The managed service is the business (open core gives way to DBaaS)"
description: "Database companies moved from selling self-managed enterprise licenses (open core) to running their own cloud service. Verdict: won. Every database vendor that thrived in 2018–2026 made a managed service most of its revenue (MongoDB Atlas 71%, Confluent Cloud ~56%), and cloud-only Snowflake and Databricks became the largest database companies of the period."
tags: [business-model, dbaas, open-core, cloud, consumption-pricing]
area: business-licensing
verdict: won
hype_peak: 2021
adoption_2026: mainstream
origins: "MongoDB Atlas (2016), Elastic Cloud (2015 via Found acquisition), Snowflake (GA 2015) and Amazon RDS (2009) showed the model before 2018."
key_systems: [systems/mongodb, systems/confluent, systems/snowflake, systems/databricks, systems/couchbase, systems/elasticsearch, systems/redis]
related_ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/hyperscalers-capture-dbms-market, ideas/business-licensing/database-company-ipos, ideas/cloud-architecture/byoc-deployment]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: mdb-q4fy19
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000144181619000044/mdb-013119xex991xrelease.htm
    title: "MongoDB Q4 and FY2019 results (8-K exhibit, 2019-03-13)"
  - id: mdb-q4fy25
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000144181625000046/mdb-13125xex991xrelease.htm
    title: "MongoDB Q4 and FY2025 results (8-K exhibit)"
  - id: mdb-q2fy27
    resource: https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-second-quarter-fiscal-2027-financial
    title: "MongoDB Q2 FY2027 results (2026-09-01)"
  - id: cflt-q3-25
    resource: https://www.sec.gov/Archives/edgar/data/1699838/000169983825000011/cflt-20250930xexx991.htm
    title: "Confluent Q3 2025 results (8-K exhibit)"
  - id: snow-fy26
    resource: https://www.sec.gov/Archives/edgar/data/1640147/000162828026011631/fy2026q4earnings.htm
    title: "Snowflake Q4 and FY2026 results (8-K exhibit, 2026-02-25)"
  - id: cnbc-dbx-190
    resource: https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html
    title: "CNBC: Databricks wraps $5B round at $190B valuation (2026-08-13)"
  - id: base-fy25
    resource: https://www.sec.gov/Archives/edgar/data/1845022/000184502225000005/base-20250225xexx991.htm
    title: "Couchbase Q4 and FY2025 results (8-K exhibit)"
  - id: couchbase-close
    resource: https://www.couchbase.com/press-releases/haveli-investments-completes-acquisition-of-couchbase/
    title: "Couchbase: Haveli Investments completes acquisition (2025-09-24)"
  - id: redis-300m
    resource: https://finance.yahoo.com/news/redis-passes-300m-annualized-recurring-140000537.html
    title: "Redis passes $300M ARR (2026-01-27)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: mariadb-reg
    resource: https://www.theregister.com/2024/02/20/mariadb_plc_private_offer/
    title: "The Register: MariaDB receives offer to go private after disastrous IPO (2024-02-20)"
  - id: fauna-future
    resource: https://fauna.com/blog/the-future-of-fauna
    title: "Fauna: The Future of Fauna (Mar 2025)"
---

# Summary

**Verdict: won.** The durable business model for a database company in 2018–2026 was to run the database for the customer, priced by consumption, and not to sell support or enterprise add-ons for software customers run themselves. MongoDB's Atlas went from 32% of revenue in Q4 FY2019 to 71% in Q4 FY2025.[^mdb-q4fy19][^mdb-q4fy25] Confluent Cloud was about 56% of Confluent's subscription revenue by Q3 2025.[^cflt-q3-25] The two biggest database companies of the period, Snowflake ($4.47B FY2026 product revenue)[^snow-fy26] and Databricks ($190B valuation in Aug 2026),[^cnbc-dbx-190] never sold a self-managed product at all. Vendors that stayed mainly self-managed (Couchbase, MariaDB, DataStax) ended up taken private or acquired.

# The idea

Open core sells a free community edition and a paid enterprise edition with extra features and support. It has two weaknesses: customers can stay on the free edition, and hyperscalers can host the free edition themselves. A managed service fixes both. The vendor charges for operations, not features. Revenue grows with usage, and the vendor's own service is the most up-to-date and best-integrated way to run its database. The license then only needs to stop clouds from reselling it (see [source-available licenses](/ideas/business-licensing/source-available-licenses.md)).

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2019 | MongoDB Atlas reaches 32% of quarterly revenue, up more than 400% year on year[^mdb-q4fy19] | + |
| 2020 | Snowflake IPO: cloud-only, consumption-priced warehouse becomes the largest software IPO ever | + |
| 2021 | Couchbase IPO with a mostly self-managed product; Capella DBaaS launched the same year | mixed |
| 2022 | MariaDB SPAC listing with weak cloud traction (SkySQL) | − |
| 2023 | MariaDB kills Xpand and SkySQL products, later spins SkySQL out; stock down ~90%[^pavlo-2023] | − |
| 2025 | MongoDB FY2025 revenue $2.01B, Atlas 71% of Q4[^mdb-q4fy25] | + |
| 2025 | Couchbase, still mostly self-managed (FY2025 revenue $209.5M, +16%, net loss $74.7M), taken private for ~$1.5B[^base-fy25][^couchbase-close] | − |
| 2025 | Confluent Cloud ~56% of subscription revenue (Q3)[^cflt-q3-25] | + |
| 2026 | MongoDB revenue growth re-accelerates to 30% (Q2 FY27), driven by Atlas[^mdb-q2fy27] | + |
| 2026 | Snowflake FY2026 product revenue $4.47B (+29%)[^snow-fy26]; Databricks at $190B[^cnbc-dbx-190] | + |

# What succeeded

- **Consumption revenue compounds.** Net revenue retention above 120% (Snowflake reported 125% for FY2026)[^snow-fy26] is only possible when the bill grows with usage without a new sale.
- **Moat against hyperscalers.** A vendor's own service can run on all three clouds and ship new versions first. MongoDB Atlas outgrew AWS DocumentDB in mindshare even though DocumentDB was the default on AWS.
- **Cloud-only starts.** Snowflake, Databricks SQL, BigQuery-style warehouses and later Neon, Supabase and PlanetScale skipped the self-managed phase completely.

# What failed

- **Late transitions.** Couchbase launched its Capella DBaaS in 2021, but four years later it was growing 16% a year with a $74.7M annual net loss and was sold to private equity at roughly its IPO price.[^base-fy25][^couchbase-close] MariaDB's cloud never gained traction, and K1 bought the company in 2024 for about $37M, after it had listed via SPAC at $10 a share in Dec 2022.[^mariadb-reg]
- **Gross margins.** A managed service pays the cloud bill. DBaaS gross margins are lower than license margins, and the hyperscaler is both landlord and competitor.
- **Small vendors cannot afford it.** Fauna said driving adoption of "a new operational database that runs as a service globally is very capital intensive" and shut its service down in 2025.[^fauna-future] See [Database company graveyard](/ideas/business-licensing/database-company-graveyard.md).

# Why

1. **Operations is the hard part customers pay to avoid.** Upgrades, backups, sharding and high availability are where self-managed users suffer. Charging for that matches price to value better than gating features.
2. **Consumption pricing aligns with growth.** It allows land-and-expand without sales cycles, which public markets rewarded (Snowflake's IPO, MongoDB's re-rating in 2026).
3. **Distribution moved to cloud marketplaces.** Buying a vendor DBaaS through AWS, Azure or GCP marketplaces lets customers spend committed cloud budgets, which removed a procurement barrier.
4. **Pavlo's warning applies to everyone else:** "Cloud vendors are behemoths with infinite money. If an open-source DBMS takes off, they will start hosting it and make more money than the ISV."[^pavlo-2024] Only vendors whose own service was clearly better escaped that.

# Lessons

- For an infrastructure database, the license and the source are marketing; the service is the product.
- A vendor that starts its DBaaS late (after IPO) has rarely caught up.
- Consumption pricing makes revenue volatile when customers optimize, as Snowflake saw in 2023, but the long-run compounding outweighed it.

# Related

- [Hyperscalers capture the DBMS market](/ideas/business-licensing/hyperscalers-capture-dbms-market.md) · [Database company IPOs](/ideas/business-licensing/database-company-ipos.md)
- Systems: [MongoDB](/systems/mongodb.md), [Snowflake](/systems/snowflake.md), [Databricks](/systems/databricks.md), [Confluent](/systems/confluent.md), [Couchbase](/systems/couchbase.md)

[^mdb-q4fy19]: MongoDB 8-K, Q4 FY2019.
[^mdb-q4fy25]: MongoDB 8-K, Q4 FY2025.
[^mdb-q2fy27]: MongoDB IR, 2026-09-01.
[^cflt-q3-25]: Confluent 8-K, Q3 2025 ($161M cloud of $286M subscription).
[^snow-fy26]: Snowflake 8-K, 2026-02-25.
[^cnbc-dbx-190]: CNBC, 2026-08-13.
[^base-fy25]: Couchbase 8-K, FY2025.
[^couchbase-close]: Couchbase press release, 2025-09-24.
[^redis-300m]: Redis press release, 2026-01-27.
[^pavlo-2024]: Andy Pavlo, Databases in 2024.
[^pavlo-2023]: Andy Pavlo, Databases in 2023.
[^mariadb-reg]: The Register, 2024-02-20.
[^fauna-future]: Fauna blog, Mar 2025.
