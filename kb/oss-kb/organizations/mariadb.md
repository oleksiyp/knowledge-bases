---
type: Organization
title: MariaDB plc
description: "Commercial company behind MariaDB Server. Taken private by K1 Investment Management (Sept 2024), it then bought Codership/Galera (June 2025), SkySQL (Aug 2025) and GridGain (Mar 2026) while clashing with the community over Galera."
resource: https://mariadb.com
tags: [commercial-open-source, mysql-fork, private-equity, rdbms]
org_kind: coss-startup
hq: unverified
funding: { total_usd: "n/a (PE-owned)", last_round: "take-private by K1 Investment Management", last_round_date: 2024-09, valuation_usd: "unverified (~$37M reported deal value)" }
business_verdict: stable
projects: [projects/databases/mariadb]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: prn-k1
    resource: https://www.prnewswire.com/news-releases/k1-acquires-mariadb-a-leading-database-software-company-and-appoints-new-ceo-302243508.html
    title: "PR Newswire: K1 Acquires MariaDB and Appoints New CEO"
  - id: mdb-skysql
    resource: https://mariadb.com/newsroom/press-releases/mariadb-accelerates-cloud-deployments-adds-agentic-ai-and-serverless-capability-with-acquisition-of-skysql/
    title: MariaDB acquires SkySQL
  - id: bf-gridgain
    resource: https://www.blocksandfiles.com/ai-ml/2026/03/09/mariadb-buys-gridgain-to-cut-latency-for-ai-inference-workloads/5208064
    title: "Blocks & Files: MariaDB buys GridGain"
  - id: infoworld-codership
    resource: https://www.infoworld.com/article/3999634/mariadbs-acquisition-of-codership-why-enterprises-should-care.html
    title: "InfoWorld: MariaDB's acquisition of Codership"
  - id: reg-galera-backdown
    resource: https://www.theregister.com/software/2026/03/09/mariadb-backs-down-on-galera-removal-after-community-outcry/5224684
    title: "The Register: MariaDB backs down on Galera removal"
---

# Summary
K1 Investment Management took MariaDB private in Sept 2024 and appointed Rohit de Souza CEO[^prn-k1]. The reported deal value of about $37M is from secondary sources and unverified. Since then MariaDB has run a roll-up: Codership/Galera (June 2025)[^infoworld-codership], SkySQL (Aug 26 2025)[^mdb-skysql] and GridGain/Apache Ignite (Mar 2026)[^bf-gridgain]. Its Galera removal attempt and reversal in Mar 2026 shows the tension between private-equity monetisation and the GPL community[^reg-galera-backdown].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-06 | Codership acquired [^infoworld-codership] | + |
| W24 | 2025-08-26 | SkySQL re-acquired [^mdb-skysql] | + |
| W9 | 2026-03-09 | GridGain deal. Galera reversal [^bf-gridgain][^reg-galera-backdown] | +/− |

# Monetization model
Enterprise Platform subscriptions, SkySQL cloud, and in-memory (GridGain) products.

# Successes
- Rebuilt its product portfolio cheaply after its public-market collapse.

# Failures / risks
- Community-trust incidents around Galera.

# Related
- [/projects/databases/mariadb.md](/projects/databases/mariadb.md), [/events/2026-03-mariadb-galera-reversal.md](/events/2026-03-mariadb-galera-reversal.md)

[^prn-k1]: PR Newswire, Sept 2024.
[^mdb-skysql]: MariaDB, 2025-08-26.
[^bf-gridgain]: Blocks & Files, 2026-03-09.
[^infoworld-codership]: InfoWorld, 2025.
[^reg-galera-backdown]: The Register, 2026-03-09.
