---
type: Event
title: "MariaDB goes public via SPAC and falls ~40% on day one"
description: "MariaDB plc began trading on the NYSE on 2022-12-19 after merging with Angel Pond. 99% of SPAC shares were redeemed and the stock closed its first day down nearly 40%. It led to restructuring in 2023 and a take-private at $0.55/share in 2024."
date: 2022-12-19
year: 2022
kind: ipo
signal: negative
ideas: [ideas/postgres-ecosystem/mysql-decline, ideas/business-licensing/database-company-ipos]
systems: [systems/mariadb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: mariadb-spac
    resource: https://siliconangle.com/2022/12/19/mariadb-stock-drops-early-trading-following-ipo/
    title: "SiliconANGLE: MariaDB stock drops in early trading following IPO (2022-12-19)"
  - id: blocks-files
    resource: https://blocksandfiles.com/2022/12/19/mariadb-public-spac-deal/
    title: "Blocks & Files: And just like SPAC, MariaDB has gone public (2022-12-19)"
  - id: k1-mariadb
    resource: https://www.marketscreener.com/quote/stock/MARIADB-PLC-124600271/news/K5-Private-Investors-L-P-managed-by-K1-Investment-Management-LLC-completed-the-acquisition-of-Mar-47455822/
    title: "MarketScreener: K1 completes acquisition of MariaDB plc (2024-09-10)"
---

# What happened
MariaDB plc (NYSE: MRDB) started trading after merging with the SPAC Angel Pond Holdings. Shares opened at $11.55 and closed at $6.70, down almost 40%, after touching $5.98. About 99% of Angel Pond shares were redeemed at $10, removing $263M from the deal. The opening market cap of $368M compared with a $672M valuation floated in February[^mariadb-spac][^blocks-files].

# Why it matters
It was the start of MariaDB's commercial unravelling: 28% layoffs and the dropping of SkySQL and Xpand in Oct 2023, then K1's take-private at $0.55 a share in Sept 2024[^k1-mariadb]. It is a data point in two stories: the MySQL family's loss of momentum to Postgres, and the failure of 2021-era SPACs.

# Related
- [MariaDB](/systems/mariadb.md), [MySQL decline](/ideas/postgres-ecosystem/mysql-decline.md)
