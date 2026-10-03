---
type: OSS Project
title: MongoDB
description: "SSPL-licensed document database whose public company re-accelerated to 30% growth ($771.8M quarter, Jul 2026) on Atlas, but lost its new CEO to Meta after under a year (Sept 2026). It also sued Postgres-based compatible FerretDB (May 2025)."
resource: https://github.com/mongodb/mongo
tags: [document-db, sspl, source-available, public-company]
domain: databases
license: SSPL-1.0
license_history: ["AGPL-3.0 (to 2018)", "SSPL-1.0 (2018-)"]
governance: single-vendor
steward: MongoDB, Inc.
backing_orgs: [organizations/mongodb]
metrics:
  github_stars: { value: 28615, as_of: 2026-10-03 }
  quarterly_revenue_usd: { value: "771.8M (Q2 FY27, +30% YoY)", as_of: 2026-07-31 }
  fy2026_revenue_usd: { value: "2.46B (+23%)", as_of: 2026-01-31 }
  customers: { value: "70,600+", as_of: 2026-07-31 }
oss_verdict: stable
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mdb-q2fy27
    resource: https://www.sec.gov/Archives/edgar/data/0001441816/000162828026059794/mdb-073126xex991xrelease.htm
    title: "MongoDB Q2 FY2027 results (8-K Ex. 99.1), 2026-09-01"
    author: org:sec
  - id: mdb-q4fy26
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828026013199/mdb-13126xex991xrelease.htm
    title: "MongoDB Q4/FY2026 results (8-K Ex. 99.1), 2026-03-02"
    author: org:sec
  - id: mdb-8k-ceo
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828026063657/mdb-20260924.htm
    title: "MongoDB 8-K: CEO CJ Desai resigns; Dev Ittycheria interim CEO (filed 2026-09-28)"
    author: org:sec
  - id: mdb-8k-desai-2025
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000162828025047941/a2025-11x03xpressrelease.htm
    title: "MongoDB 8-K press release: leadership transition, CJ Desai appointed CEO effective 2025-11-10 (filed 2025-11-03)"
    author: org:sec
  - id: cnbc-desai-2025
    resource: https://www.cnbc.com/2025/11/03/mongodb-ceo-dev-ittycheria-exits-replaced-by-cloudflares-cj-desai.html
    title: "CNBC: MongoDB CEO Dev Ittycheria steps down, replaced by Cloudflare executive CJ Desai"
    author: org:cnbc
  - id: sa-desai-meta
    resource: https://siliconangle.com/2026/09/28/meta-hires-mongodb-ceo-cj-desai-to-lead-new-enterprise-ai-business/
    title: "SiliconANGLE: Meta hires MongoDB CEO CJ Desai to lead new enterprise AI business (2026-09-28)"
  - id: mdb-ceo-pr
    resource: https://www.mongodb.com/company/newsroom/press-releases/mongodb-announces-ceo-transition
    title: "MongoDB press release: MongoDB Announces CEO Transition (2026-09-28)"
    author: org:mongodb
  - id: bbg-voyage
    resource: https://www.bloomberg.com/news/articles/2025-02-24/mongodb-buys-voyage-ai-for-220-million-to-bolster-ai-search
    title: "Bloomberg: MongoDB Buys Voyage AI for $220 Million to Bolster AI Search (2025-02-24)"
    author: org:bloomberg
  - id: thn-mongobleed
    resource: https://thehackernews.com/2025/12/mongodb-vulnerability-cve-2025-14847.html
    title: "The Hacker News: MongoDB Vulnerability CVE-2025-14847 Under Active Exploitation Worldwide"
  - id: tenable-mongobleed
    resource: https://www.tenable.com/blog/cve-2025-14847-mongobleed-mongodb-memory-leak-vulnerability-exploited-in-the-wild
    title: "Tenable: CVE-2025-14847 (MongoBleed) MongoDB memory leak vulnerability exploited in the wild"
  - id: cl-ferretdb
    resource: https://www.courtlistener.com/docket/70354365/mongodb-inc-v-ferretdb-inc/
    title: "CourtListener docket: MongoDB, Inc. v. FerretDB Inc., 1:25-cv-00641 (D. Del.)"
  - id: mdb-q1fy27
    resource: https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-first-quarter-fiscal-2027-financial
    title: "MongoDB Announces First Quarter Fiscal 2027 Financial Results (2026-05-28)"
    author: org:mongodb
  - id: mdb-wiki
    resource: https://en.wikipedia.org/wiki/MongoDB_Inc.
    title: MongoDB Inc. — Wikipedia (CEO transition, Voyage AI)
  - id: reg-percona
    resource: https://www.theregister.com/databases/2026/09/18/the-ideal-database-for-ai-agents-doesnt-exist-yet-says-percona-ceo/5296906
    title: "The Register: The ideal database for AI agents doesn't exist yet, says Percona CEO (mentions MongoDB v FerretDB suit)"
    author: org:the-register
  - id: mongo-gh
    resource: https://github.com/mongodb/mongo
    title: MongoDB GitHub repository
  - id: mongo-wiki
    resource: https://en.wikipedia.org/wiki/MongoDB
    title: MongoDB — Wikipedia (MongoBleed, releases)
---

# Summary
MongoDB shows how a source-available database can be a strong business while its open-source standing stays flat. FY2026 (ended Jan 31 2026) revenue was $2.46B, up 23%, with Atlas up 29%[^mdb-q4fy26]. Q2 FY2027 revenue was $771.8M, up 30%, "the highest level of growth in several years", with 70,600+ customers[^mdb-q2fy27]. Leadership has been unstable. CJ Desai, previously Cloudflare's president of product and engineering, replaced long-time CEO Dev Ittycheria effective Nov 10 2025[^mdb-8k-desai-2025][^cnbc-desai-2025]. He left after about 11 months, on Sept 28 2026, to become Meta's Chief Enterprise Platform Officer; Ittycheria returned as interim CEO and the shares fell more than 18% that day[^mdb-8k-ceo][^mdb-ceo-pr][^sa-desai-meta]. On the openness front, MongoDB bought Voyage AI (embeddings) for about $220M in Feb 2025[^bbg-voyage] and on May 23 2025 sued FerretDB, the Apache-2.0 MongoDB-compatible layer on Postgres, in Delaware, alleging infringement of four patents plus false advertising and trademark dilution[^cl-ferretdb][^reg-percona].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-24 | Acquires Voyage AI (~$220M). $200M buyback [^bbg-voyage][^mdb-wiki] | Business | + |
| W24 | 2025-05-23 | Sues FerretDB in D. Del. (four patents, Lanham Act, trademark dilution) [^cl-ferretdb] | OSS/Legal | − |
| W12 | 2025-11-03 | CJ Desai appointed CEO effective Nov 10 [^mdb-8k-desai-2025][^cnbc-desai-2025] | Business | flat |
| W12 | 2025-12 | "MongoBleed" (CVE-2025-14847, CVSS 8.7): pre-auth zlib memory leak; public PoC Dec 25, CISA KEV Dec 29, ~87k exposed servers [^thn-mongobleed][^tenable-mongobleed] | Security | − |
| W9 | 2026-03-02 | FY26 revenue $2.46B (+23%), 65,200+ customers [^mdb-q4fy26] | Business | + |
| W6 | 2026-05-28 | Q1 FY27 revenue $687.6M (+25%), Atlas +29%, guidance raised to $2.92-2.96B [^mdb-q1fy27] | Business | + |
| W3 | 2026-09-01 | Q2 FY27 $771.8M (+30%). FY27 guide $2.99-3.03B [^mdb-q2fy27] | Business | + |
| W3 | 2026-09-28 | Desai leaves to join Meta as Chief Enterprise Platform Officer. Ittycheria interim CEO. Shares fall >18% [^mdb-8k-ceo][^sa-desai-meta] | Business | − |

# OSS successes
- Server development stays active in public (28.6k stars, regular 8.x releases)[^mongo-gh][^mongo-wiki].

# OSS failures / risks
- SSPL is not OSI-approved. The FerretDB lawsuit signals hostility toward compatible open-source implementations[^reg-percona].
- The MongoBleed incident (CVE-2025-14847, Dec 2025) was a pre-authentication memory leak in the default-on zlib compression path; it was exploited in the wild and added to CISA's KEV catalog, hurting the security reputation of self-managed deployments[^thn-mongobleed][^tenable-mongobleed].

# Business successes
- Atlas-driven re-acceleration to 30% growth, with operating profitability[^mdb-q2fy27][^mdb-q4fy26].

# Business failures / risks
- Two CEO transitions within 11 months, the second a sudden exit to Meta[^mdb-8k-desai-2025][^mdb-8k-ceo][^sa-desai-meta].
- Agent and vibe-coding platforms mostly default to Postgres (see [Supabase](/projects/databases/supabase.md)).

# By window
## W3
- Strong Q2. CEO departs for Meta[^mdb-q2fy27][^mdb-8k-ceo][^sa-desai-meta].
## W6
- Q1 FY27: $687.6M revenue (+25%), guidance raised[^mdb-q1fy27].
## W9
- FY26 results[^mdb-q4fy26].
## W12
- New CEO. MongoBleed[^mdb-8k-desai-2025][^thn-mongobleed].
## W24
- Voyage AI. FerretDB suit[^bbg-voyage][^cl-ferretdb].

# Lessons
- Moving to source-available (SSPL) did not hurt MongoDB's managed-service growth. It did cede the "open" narrative to Postgres-compatible alternatives, which MongoDB now fights in court.

# Related
- [/organizations/mongodb.md](/organizations/mongodb.md), [/events/2026-09-mongodb-ceo-departs-for-meta.md](/events/2026-09-mongodb-ceo-departs-for-meta.md)
- [PostgreSQL](/projects/databases/postgresql.md), [SurrealDB](/projects/databases/surrealdb.md)

[^mdb-q2fy27]: MongoDB 8-K Ex. 99.1, 2026-09-01.
[^mdb-q4fy26]: MongoDB 8-K Ex. 99.1, 2026-03-02.
[^mdb-8k-ceo]: MongoDB 8-K, filed 2026-09-28.
[^mdb-wiki]: Wikipedia, MongoDB Inc.
[^mdb-8k-desai-2025]: MongoDB 8-K press release, 2025-11-03.
[^cnbc-desai-2025]: CNBC, 2025-11-03.
[^sa-desai-meta]: SiliconANGLE, 2026-09-28.
[^mdb-ceo-pr]: MongoDB press release, 2026-09-28.
[^bbg-voyage]: Bloomberg, 2025-02-24.
[^thn-mongobleed]: The Hacker News, Dec 2025.
[^tenable-mongobleed]: Tenable, Dec 2025.
[^cl-ferretdb]: CourtListener, D. Del. 1:25-cv-00641 (filed 2025-05-23).
[^mdb-q1fy27]: MongoDB investor release, 2026-05-28.
[^reg-percona]: The Register, 2026-09-18.
[^mongo-gh]: GitHub API, mongodb/mongo, 2026-10-03.
[^mongo-wiki]: Wikipedia, MongoDB.
