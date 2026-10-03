---
type: OSS Project
title: MariaDB
description: "GPL MySQL fork whose company, taken private by K1 in 2024, went on an acquisition spree (Galera/Codership, SkySQL, GridGain). It also tried to pull Galera clustering from the community server, then backed down after an outcry (Mar 2026)."
resource: https://github.com/MariaDB/server
tags: [rdbms, gpl-2.0, mysql-fork, private-equity, foundation]
domain: databases
license: GPL-2.0
license_history: ["GPL-2.0 (2009-)"]
governance: company-led-open-core
steward: MariaDB plc (K1-owned) with MariaDB Foundation
backing_orgs: [organizations/mariadb]
metrics:
  github_stars: { value: 8309, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: prn-k1
    resource: https://www.prnewswire.com/news-releases/k1-acquires-mariadb-a-leading-database-software-company-and-appoints-new-ceo-302243508.html
    title: "PR Newswire: K1 Acquires MariaDB and Appoints New CEO"
  - id: sa-k1
    resource: https://siliconangle.com/2024/09/10/mariadb-goes-private-acquisition-k1-investment-management/
    title: "SiliconANGLE: MariaDB goes private after acquisition by K1 Investment Management (2024-09-10)"
  - id: infoworld-codership
    resource: https://www.infoworld.com/article/3999634/mariadbs-acquisition-of-codership-why-enterprises-should-care.html
    title: "InfoWorld: MariaDB's acquisition of Codership"
    author: org:infoworld
  - id: mdb-skysql
    resource: https://mariadb.com/newsroom/press-releases/mariadb-accelerates-cloud-deployments-adds-agentic-ai-and-serverless-capability-with-acquisition-of-skysql/
    title: "MariaDB press release: acquisition of SkySQL"
    author: org:mariadb
  - id: mdb-gridgain
    resource: https://mariadb.com/newsroom/press-releases/mariadb-to-acquire-gridgain-architecting-the-real-time-foundation-for-the-agentic-enterprise/
    title: "MariaDB to Acquire GridGain"
    author: org:mariadb
  - id: mdb-gridgain-close
    resource: https://mariadb.com/newsroom/press-releases/mariadb-completes-gridgain-acquisition-to-power-the-next-generation-of-agentic-ai/
    title: "MariaDB press release: MariaDB Completes GridGain Acquisition (2026-03-24)"
    author: org:mariadb
  - id: bf-gridgain
    resource: https://www.blocksandfiles.com/ai-ml/2026/03/09/mariadb-buys-gridgain-to-cut-latency-for-ai-inference-workloads/5208064
    title: "Blocks & Files: MariaDB buys GridGain"
  - id: reg-galera-backdown
    resource: https://www.theregister.com/software/2026/03/09/mariadb-backs-down-on-galera-removal-after-community-outcry/5224684
    title: "The Register: MariaDB backs down on Galera removal after community outcry"
    author: org:the-register
  - id: reg-galera-again
    resource: https://www.theregister.com/databases/2026/07/30/mariadb-again-faces-questions-over-galeras-open-source-future/5280975
    title: "The Register: MariaDB again faces questions over Galera's open source future"
    author: org:the-register
  - id: mdb-gh
    resource: https://github.com/MariaDB/server
    title: MariaDB server GitHub repository
---

# Summary
K1 Investment Management took MariaDB plc private in Sept 2024 and installed CEO Rohit de Souza[^prn-k1]. The final price was not disclosed; K1's earlier offer was 55 cents a share, about $37M, roughly what the shares had fallen to by closing[^sa-k1]. After that, the company consolidated. It bought Codership, the maker of Galera Cluster, in June 2025[^infoworld-codership]. It re-acquired its own former spin-off SkySQL on Aug 26 2025[^mdb-skysql]. In Mar 2026 it agreed to buy GridGain, the company behind Apache Ignite[^mdb-gridgain][^bf-gridgain]. Owning Galera immediately created an open-source conflict. In Feb 2026 Galera dependencies quietly disappeared from community binaries, and after an outcry MariaDB committed to keep Galera in Community Server 12.3[^reg-galera-backdown]. By July 2026 questions returned. MySQL Galera support ends Sept 30 2026, and MariaDB is building separate proprietary replication for enterprise customers[^reg-galera-again]. MariaDB could pick up MySQL users fleeing Oracle, but trust is fragile.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06 | Acquires Codership (Galera Cluster) [^infoworld-codership] | Business | + |
| W24 | 2025-08-26 | Re-acquires SkySQL (serverless DBaaS) [^mdb-skysql] | Business | + |
| W9 | 2026-02 → 03-09 | Galera silently dropped from community binaries, then reinstated for 12.3 [^reg-galera-backdown] | OSS | − |
| W9 | 2026-03-09 | Agrees to acquire GridGain (Apache Ignite) [^bf-gridgain][^mdb-gridgain] | Business | + |
| W9 | 2026-03-24 | GridGain acquisition completed [^mdb-gridgain-close] | Business | + |
| W3 | 2026-07-30 | Galera's future questioned again. MySQL-Galera support ends 2026-09-30. Proprietary replication in development [^reg-galera-again] | OSS | − |

# OSS successes
- The GPL server is still actively developed (8.3k stars, daily pushes)[^mdb-gh]. The community reversal shows the MariaDB Foundation still has some leverage[^reg-galera-backdown].

# OSS failures / risks
- An open-core squeeze: a GPL HA component that has become proprietary-adjacent, and enterprise-only replication on a "distinct development path"[^reg-galera-again].
- Years of divergence make MariaDB a non-trivial migration target for MySQL users[^reg-galera-again].

# Business successes
- Under private-equity ownership it rebuilt a cloud (SkySQL) and in-memory/AI story (GridGain) cheaply after the troubled public-market period.

# Business failures / risks
- Roll-up integration risk, and repeated community-trust incidents.

# By window
## W3
- Galera future questioned again[^reg-galera-again].
## W6
- No notable events found.
## W9
- Galera removal and reversal. GridGain deal[^reg-galera-backdown][^bf-gridgain].
## W12
- No notable events found.
## W24
- Codership and SkySQL acquisitions[^infoworld-codership][^mdb-skysql].

# Lessons
- When a commercial owner buys a community-critical GPL component, users read any packaging change as an open-core move. Communicate before changing binaries.

# Related
- [/organizations/mariadb.md](/organizations/mariadb.md), [/events/2026-03-mariadb-galera-reversal.md](/events/2026-03-mariadb-galera-reversal.md), [MySQL](/projects/databases/mysql.md)

[^prn-k1]: PR Newswire, Sept 2024.
[^sa-k1]: SiliconANGLE, 2024-09-10.
[^mdb-gridgain-close]: MariaDB press release, 2026-03-24.
[^infoworld-codership]: InfoWorld, 2025.
[^mdb-skysql]: MariaDB press release, 2025-08-26.
[^mdb-gridgain]: MariaDB press release, Mar 2026.
[^bf-gridgain]: Blocks & Files, 2026-03-09.
[^reg-galera-backdown]: The Register, 2026-03-09.
[^reg-galera-again]: The Register, 2026-07-30.
[^mdb-gh]: GitHub API, MariaDB/server, 2026-10-03.
