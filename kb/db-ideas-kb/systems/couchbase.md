---
type: System
title: Couchbase
description: "Distributed JSON document database (memcached plus CouchDB heritage) sold mainly as a self-managed enterprise product. It IPO'd in July 2021 at $24 and was taken private by Haveli Investments for ~$1.5B ($24.50/share) in September 2025, a case study of a slow-growing open-core database in public markets."
resource: https://www.couchbase.com
tags: [document-database, nosql, open-core, bsl, ipo, private-equity]
kind: product
first_release: 2011
org: "Couchbase, Inc. (Nasdaq: BASE 2021–2025; owned by Haveli Investments since Sept 2025)"
license: "BSL 1.1 (source, since 2021); enterprise edition proprietary"
outcome: acquired
ideas: [ideas/business-licensing/database-company-ipos, ideas/business-licensing/managed-service-is-the-business, ideas/business-licensing/source-available-licenses, ideas/business-licensing/database-company-graveyard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: base-ipo
    resource: https://investors.couchbase.com/news-releases/news-release-details/couchbase-announces-pricing-initial-public-offering
    title: "Couchbase announces pricing of IPO (July 2021)"
  - id: rencap
    resource: https://www.renaissancecapital.com/IPO-Center/News/84482/database-provider-couchbase-prices-upsized-ipo-at-24-above-the-range
    title: "Renaissance Capital: Couchbase prices upsized IPO at $24, above the range"
  - id: bsl-blog
    resource: https://www.couchbase.com/blog/couchbase-adopts-bsl-license/
    title: "Couchbase: Business Source License (BSL 1.1) adopted by Couchbase (2021)"
  - id: base-fy25
    resource: https://www.sec.gov/Archives/edgar/data/1845022/000184502225000005/base-20250225xexx991.htm
    title: "Couchbase Q4 and FY2025 results (8-K exhibit)"
  - id: sa-haveli
    resource: https://siliconangle.com/2025/06/22/couchbase-agrees-acquired-private-equity-firm-haveli-1-5b/
    title: "SiliconANGLE: Couchbase agrees to be acquired by Haveli for $1.5B (2025-06-22)"
  - id: couchbase-close
    resource: https://www.couchbase.com/press-releases/haveli-investments-completes-acquisition-of-couchbase/
    title: "Couchbase: Haveli Investments completes acquisition (2025-09-24)"
---

# Summary

Couchbase is a distributed document database with a memory-first key-value core, SQL++ (N1QL) queries, full-text search and a mobile sync product. Commercially it is the clearest example of the open-core database that went public late in the cycle and never reached the growth rate public investors wanted. It IPO'd on 22 July 2021 at $24, above its range, raising about $200M.[^rencap][^base-ipo] In 2021 it moved its source from Apache 2.0 to BSL 1.1.[^bsl-blog] Its Capella DBaaS launched the same year. FY2025 (ended Jan 2025) revenue was $209.5M (+16%), ARR $237.9M (+17%), and net loss $74.7M.[^base-fy25] Haveli Investments, already a 9.6% holder, agreed in June 2025 to buy it for $24.50 a share (~$1.5B), a 67% premium to the March 2025 price.[^sa-haveli] The deal closed on 24 September 2025.[^couchbase-close]

# Timeline

| Year | Event |
|---|---|
| 2011 | Couchbase Server formed from the Membase–CouchOne merger |
| 2021 | Source relicensed to BSL 1.1[^bsl-blog]; Capella DBaaS launched; IPO at $24 (Jul 22)[^base-ipo] |
| 2025 | FY2025 revenue $209.5M, +16%[^base-fy25]; Haveli deal announced (Jun) and closed (Sept 24)[^sa-haveli][^couchbase-close] |

# What worked

- Strong position in edge and mobile sync and in large enterprise deployments, which gave it steady 16–20% growth.
- Non-GAAP losses narrowed (operating loss $14.4M in FY2025 vs $31.3M the year before).[^base-fy25]

# What didn't

- Growth was too slow and losses too large for a sub-$250M-revenue public company. After four years it was sold at roughly its IPO price.
- Its managed service came late relative to MongoDB Atlas. That left Couchbase competing as a self-managed product while the market moved to DBaaS.

# Related

- [Database company IPOs](/ideas/business-licensing/database-company-ipos.md) · [Managed service is the business](/ideas/business-licensing/managed-service-is-the-business.md)
- [MongoDB](/systems/mongodb.md) · [Couchbase IPO](/events/2021-07-couchbase-ipo.md) · [Couchbase taken private](/events/2025-09-couchbase-taken-private.md)

[^base-ipo]: Couchbase IR, July 2021.
[^rencap]: Renaissance Capital, July 2021.
[^bsl-blog]: Couchbase blog, 2021.
[^base-fy25]: Couchbase 8-K, FY2025.
[^sa-haveli]: SiliconANGLE, 2025-06-22.
[^couchbase-close]: Couchbase press release, 2025-09-24.
