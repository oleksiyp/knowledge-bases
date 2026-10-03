---
type: Event
title: Oracle lays off about 70 core MySQL engineers
description: "In the week of Sept 8 2025 Oracle cut about 70 members of the MySQL development team and folded open-source MySQL work into its proprietary HeatWave unit. The move set off the 2026 MySQL governance crisis."
event_kind: layoffs
date: 2025-09-08
window: W24
impact: negative
projects: [projects/databases/mysql]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-layoffs
    resource: https://www.theregister.com/2025/09/11/oracle_slammed_for_mysql_job/
    title: "The Register: Monty Widenius 'heartbroken' over Oracle's MySQL job cuts (2025-09-11)"
  - id: reg-oracle-cuts
    resource: https://www.theregister.com/2025/09/03/oracle_cuts_more_jobs/
    title: "The Register: Oracle's layoff train rolls on (2025-09-03)"
  - id: heise-letter
    resource: https://www.heise.de/en/news/Can-MySQL-still-be-saved-Open-letter-to-Oracle-11181146.html
    title: "heise: Can MySQL still be saved? Open letter to Oracle"
---

# What happened
During broader Oracle layoffs (WARN notices in WA and CA, Sept 2025)[^reg-oracle-cuts], about 70 MySQL engineers, many of them senior, were let go in the week of Sept 8 2025. MySQL co-creator Monty Widenius said he was "heartbroken". Community sources said the open-source MySQL team now sits inside the HeatWave unit[^reg-layoffs]. The 2026 open letter later described this as roughly a 50% staff reduction[^heise-letter].

# Why it matters
MySQL is still the second most-used database. Losing core engineering capacity, combined with private code drops, signalled a slow death of the Community edition (Peter Zaitsev's warning)[^reg-layoffs].

# Outcome so far
The public mysql-server repo was nearly silent from Dec 2025 to Feb 2026[^heise-letter]. That led to the Feb 2026 open letter, the OurSQL Foundation (May 2026) and Oracle's June 2026 governance pledge. See [/events/2026-05-oursql-foundation-mysql-governance.md](/events/2026-05-oursql-foundation-mysql-governance.md).

# Related
- [/projects/databases/mysql.md](/projects/databases/mysql.md), [/projects/databases/mariadb.md](/projects/databases/mariadb.md)

[^reg-layoffs]: The Register, 2025-09-11.
[^reg-oracle-cuts]: The Register, 2025-09-03.
[^heise-letter]: heise online, Feb 2026.
