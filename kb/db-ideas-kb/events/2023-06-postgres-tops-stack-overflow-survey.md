---
type: Event
title: "PostgreSQL overtakes MySQL in the Stack Overflow Developer Survey"
description: "The 2023 Stack Overflow survey (June 2023) showed Postgres used by 45.6% of respondents vs MySQL's 41.1%, the first time Postgres led. By 2025 the gap was 55.6% vs 40.5%."
date: 2023-06-13
year: 2023
kind: standard
signal: positive
ideas: [ideas/postgres-ecosystem/just-use-postgres, ideas/postgres-ecosystem/mysql-decline]
systems: [systems/postgresql, systems/mysql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: so-2023
    resource: https://survey.stackoverflow.co/2023/
    title: "Stack Overflow Developer Survey 2023"
    author: org:stackoverflow
  - id: devclass-so2023
    resource: https://www.devclass.com/development/2023/06/13/postgresql-now-top-developer-choice-ahead-of-mysql-according-to-massive-new-survey/1623015
    title: "DevClass: PostgreSQL now top developer choice ahead of MySQL (2023-06-13)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stackoverflow
  - id: dbe-2023
    resource: https://db-engines.com/en/blog_post/106
    title: "DB-Engines: PostgreSQL is the DBMS of the Year 2023"
    author: org:db-engines
---

# What happened
The 2023 Stack Overflow Developer Survey put PostgreSQL at 45.6% of respondents, ahead of MySQL (41.1%) and SQLite (30.9%). Three years earlier MySQL had led 55.6% to 36.1%[^so-2023][^devclass-so2023]. Months later DB-Engines named Postgres DBMS of the Year 2023, its fourth win[^dbe-2023]. The 2025 survey widened the gap to 55.6% vs 40.5%[^so-2025].

# Why it matters
This was the symbolic crossover: Postgres became the default database among developers, not only among database experts. The crossover lagged the real shift in new projects, which was already visible in managed-service launches and startup choices.

# Related
- [Just use Postgres](/ideas/postgres-ecosystem/just-use-postgres.md), [MySQL decline](/ideas/postgres-ecosystem/mysql-decline.md), [PostgreSQL](/systems/postgresql.md), [MySQL](/systems/mysql.md)
