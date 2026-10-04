---
type: Event
title: Oracle MySQL engineering layoffs reported
description: September 2025 reporting described roughly 70 MySQL job cuts and a reorganization
  under HeatWave, prompting concern about community stewardship.
date: '2025-09-11'
year: 2025
kind: pivot
signal: negative
ideas:
- ideas/postgres-ecosystem/mysql-decline
systems:
- systems/mysql
- systems/mariadb
sources:
- id: report
  resource: https://www.theregister.com/2025/09/11/oracle_slammed_for_mysql_job/
  title: The Register reports MySQL engineering cuts, September 11, 2025
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
---

# What happened

The Register reported on September 11, 2025 that Oracle had cut around 70 members of the MySQL team, citing a senior community source. Community sources also described the open-source team becoming part of the HeatWave unit. Oracle had been asked to respond; the article did not establish a company-confirmed headcount. MySQL co-creator Michael Widenius publicly expressed concern.[^report]

# Why it matters

The event is evidence of a stewardship controversy around a widely deployed database, not evidence that MySQL ceased functioning or that all users migrated to PostgreSQL. Dependence on one employer can make a permissively available codebase vulnerable to shifts in staffing and priorities.

The recorded date is the report date, rather than an invented exact layoff day. The approximate headcount should remain attributed. This distinction matters when comparing organizational setbacks with technical failures: an engineering reorganization can increase uncertainty without proving that a database architecture has failed.

# Related

- [MySQL](/systems/mysql.md), [MariaDB](/systems/mariadb.md)
- [MySQL's relative decline](/ideas/postgres-ecosystem/mysql-decline.md)
