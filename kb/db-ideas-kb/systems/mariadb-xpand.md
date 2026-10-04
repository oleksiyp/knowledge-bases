---
type: System
title: MariaDB Xpand (Clustrix)
description: Distributed SQL acquired by MariaDB in 2018 and removed from its sales portfolio in 2023; a concrete commercial
  retreat from scale-out SQL, without a verified universal support cutoff.
kind: product
outcome: dead
ideas:
- ideas/distributed-sql/newsql-distributed-sql
resource: https://mariadb.com/xpand-docs/
org: MariaDB
license: Proprietary
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: xpand-acquire
  resource: https://mariadb.com/newsroom/press-releases/mariadb-acquires-clustrix-adding-distributed-database-technology/
  title: MariaDB acquires Clustrix, September 20, 2018
- id: xpand-stop
  resource: https://mariadb.com/xpand-docs/
  title: 'MariaDB: Xpand is no longer sold as of 2023'
- id: xpand-sec
  resource: https://www.sec.gov/Archives/edgar/data/1929589/000192958923000010/mrdb-20230930.htm
  title: 'MariaDB FY2023 annual report: October 12 restructuring and product termination'
---

# Summary
MariaDB bought Clustrix on September 20, 2018 to add distributed scale-out SQL to its portfolio.[^xpand-acquire] The product later known as Xpand was part of the promise that relational workloads could scale across machines without giving up enterprise capabilities. In 2023 MariaDB reversed that investment direction. Its annual report describes terminating the Xpand and SkySQL product lines as part of a restructuring focused on MariaDB Enterprise Server; the current Xpand landing page states that MariaDB stopped selling Xpand in 2023.[^xpand-sec][^xpand-stop] The outcome label here denotes a discontinued commercial product line, not proof that every deployed cluster ceased operating.

# Timeline
| Date | Event |
|---|---|
| 2018-09-20 | MariaDB announces the Clustrix acquisition; price undisclosed.[^xpand-acquire] |
| 2023-10-12 | Restructuring announcement focuses the company on Enterprise Server.[^xpand-sec] |
| 2023 onward | Xpand is no longer sold by MariaDB.[^xpand-stop] |

# What worked
The acquisition announcement identified a real architectural need: write and storage growth can exceed a single server. Clustrix offered MariaDB an existing distributed engine to address that need rather than requiring a new one from scratch.[^xpand-acquire] This establishes the product rationale; it is not independent evidence for the announcement's comparative performance claims.

# What didn't
Commercial continuity failed. The annual report connects portfolio retrenchment with the need to align spending and workforce with the core business.[^xpand-sec] Our interpretation is that technical differentiation did not make every additional database line financially sustainable. The available primary notice does not establish one end-of-support date for every customer contract, so this page deliberately makes the narrower, verified stop-selling claim.[^xpand-stop]

# Related
- [NewSQL](/ideas/distributed-sql/newsql-distributed-sql.md), [MariaDB](/systems/mariadb.md)
- [Xpand product-line termination](/events/2023-10-mariadb-discontinues-xpand.md)

[^xpand-acquire]: [MariaDB acquires Clustrix, September 20, 2018](https://mariadb.com/newsroom/press-releases/mariadb-acquires-clustrix-adding-distributed-database-technology/).
[^xpand-stop]: [MariaDB: Xpand is no longer sold as of 2023](https://mariadb.com/xpand-docs/).
[^xpand-sec]: [MariaDB FY2023 annual report: October 12 restructuring and product termination](https://www.sec.gov/Archives/edgar/data/1929589/000192958923000010/mrdb-20230930.htm).
