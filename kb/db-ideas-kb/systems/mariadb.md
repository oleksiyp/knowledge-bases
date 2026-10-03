---
type: System
title: MariaDB
description: "Community fork of MySQL (2009) with a separate commercial company. The company's Dec 2022 SPAC listing fell nearly 40% on day one. In 2023 it cut 28% of staff and dropped SkySQL and Xpand, and in 2024 it was taken private by K1 at $0.55 a share. The server itself lives on under the MariaDB Foundation."
resource: https://mariadb.org
tags: [rdbms, mysql-fork, spac, take-private, gpl]
kind: oss
first_release: 2009
org: "MariaDB Foundation (server); MariaDB plc → K1 Investment Management (company, 2024)"
license: GPL-2.0
outcome: struggling
ideas: [ideas/postgres-ecosystem/mysql-decline]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: mariadb-spac
    resource: https://siliconangle.com/2022/12/19/mariadb-stock-drops-early-trading-following-ipo/
    title: "SiliconANGLE: MariaDB stock drops in early trading following IPO (2022-12-19)"
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: reg-mariadb-restructure
    resource: https://www.theregister.com/2023/10/13/mariadb_restructure/
    title: "The Register: MariaDB ditches products and 28% of workforce in restructure (2023-10-13)"
    author: org:the-register
  - id: tc-spac-indictment
    resource: https://techcrunch.com/2024/02/20/mariadbs-potential-take-private-deal-is-an-indictment-of-2021s-spac-mania/
    title: "TechCrunch: MariaDB's potential take-private deal is an indictment of 2021's SPAC mania (2024-02-20)"
    author: org:techcrunch
  - id: k1-mariadb
    resource: https://www.marketscreener.com/quote/stock/MARIADB-PLC-124600271/news/K5-Private-Investors-L-P-managed-by-K1-Investment-Management-LLC-completed-the-acquisition-of-Mar-47455822/
    title: "MarketScreener: K1 completes acquisition of MariaDB plc (2024-09-10)"
  - id: mariadb-org-chapter
    resource: https://mariadb.org/a-positive-new-chapter/
    title: "MariaDB Foundation: A positive new chapter for MariaDB Server"
---

# Summary
MariaDB is a cautionary tale about running a fork as a venture-backed business. The server, a GPL fork of MySQL maintained with the MariaDB Foundation, remains widely packaged by Linux distributions. The company did badly. It went public through a SPAC merger with Angel Pond in Dec 2022. About 99% of the SPAC's shares were redeemed, and the stock closed its first day down nearly 40% ($11.55 to $6.70)[^mariadb-spac]. Pavlo called it "disastrous"[^pavlo-2022]. In Oct 2023 it cut 28% of staff (84 jobs), took a $26.5M loan at 10% interest, and discontinued SkySQL (DBaaS) and Xpand (the distributed engine from the Clustrix acquisition), whose users included Samsung[^reg-mariadb-restructure]. K1 Investment Management completed a take-private at $0.55 a share on Sept 10 2024[^k1-mariadb][^tc-spac-indictment].

# Timeline
| Date | Event |
|---|---|
| 2022-12-19 | NYSE debut via SPAC. Down ~40% on day one[^mariadb-spac] |
| 2023-10-13 | 28% layoffs. SkySQL and Xpand discontinued[^reg-mariadb-restructure] |
| 2024-02 | Take-private talks seen as an indictment of SPAC mania[^tc-spac-indictment] |
| 2024-09-10 | K1 completes acquisition at $0.55/share[^k1-mariadb] |

# What worked
- The server survived the company's troubles. The Foundation and Linux-distro defaults keep it alive[^mariadb-org-chapter].
- It still offers a GPL MySQL-family option outside Oracle's control.

# What didn't
- The company spread itself across a DBaaS, a distributed engine and analytics instead of focusing on its core, and then abandoned them[^reg-mariadb-restructure].
- Its compatibility with MySQL drifted, so "drop-in replacement" weakened just as Postgres became the default for new projects.
- Public-market timing: a SPAC at the tail of the 2021 bubble[^tc-spac-indictment].

# Related
- [MySQL decline](/ideas/postgres-ecosystem/mysql-decline.md)
- [MariaDB SPAC listing](/events/2022-12-mariadb-spac-listing.md)
- [MySQL](/systems/mysql.md), [MariaDB Xpand](/systems/mariadb-xpand.md)
