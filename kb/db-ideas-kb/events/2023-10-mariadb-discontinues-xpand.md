---
type: Event
title: MariaDB terminates the Xpand product line
description: MariaDB terminates the Xpand product line during its Enterprise Server-focused restructuring; the verified claim
  is product withdrawal, not a universal support cutoff.
date: '2023-10-12'
year: 2023
kind: discontinuation
signal: negative
ideas:
- ideas/distributed-sql/newsql-distributed-sql
systems:
- systems/mariadb-xpand
- systems/mariadb
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: xpand-sec
  resource: https://www.sec.gov/Archives/edgar/data/1929589/000192958923000010/mrdb-20230930.htm
  title: 'MariaDB FY2023 annual report: October 12 restructuring and product termination'
- id: xpand-stop
  resource: https://mariadb.com/xpand-docs/
  title: 'MariaDB: Xpand is no longer sold as of 2023'
---

# What happened
MariaDB's FY2023 annual report records an October 12 restructuring focused on Enterprise Server and termination of the Xpand product line. MariaDB's product notice separately confirms that Xpand has not been sold by the company since 2023.[^xpand-sec][^xpand-stop]

# Why it matters
This is a concrete failed commercialization outcome for distributed SQL within a broader database portfolio. It does not show that distributed execution was technically impossible; it shows that a vendor chose not to continue selling this implementation. Our assessment is that lifecycle risk belongs beside consistency and throughput in database selection. Customers commit to migration and operational knowledge over many years. A product-line termination can erase much of the value of a technically sound choice. Neither cited source establishes one universal end-of-support date for every existing contract, so the event is bounded to the verified product and sales decision.

# Related
- [Mariadb Xpand](/systems/mariadb-xpand.md)
- [Mariadb](/systems/mariadb.md)
- [Newsql Distributed Sql](/ideas/distributed-sql/newsql-distributed-sql.md)

[^xpand-sec]: [MariaDB FY2023 annual report: October 12 restructuring and product termination](https://www.sec.gov/Archives/edgar/data/1929589/000192958923000010/mrdb-20230930.htm).
[^xpand-stop]: [MariaDB: Xpand is no longer sold as of 2023](https://mariadb.com/xpand-docs/).
