---
type: Organization
title: Tiger Data (formerly Timescale)
description: "Company behind TimescaleDB. It renamed itself Tiger Data (June 17 2025) to sell 'the fastest PostgreSQL' (Tiger Cloud) for real-time, analytical and agentic workloads."
resource: https://www.tigerdata.com
tags: [commercial-open-source, postgres, time-series, open-core]
org_kind: coss-startup
hq: unverified
funding: { total_usd: "$180M (company, June 2025)", last_round: "Series C $110M (Tiger Global lead)", last_round_date: 2022-02-22, valuation_usd: ">1B (2022)" }
business_verdict: stable
projects: [projects/databases/timescaledb]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tiger-rebrand
    resource: https://www.tigerdata.com/newsroom/timescale-becomes-tiger-data-defining-a-new-standard-as-the-fastest-postgresql-platform-for-modern-applications
    title: "Timescale Becomes Tiger Data"
  - id: tiger-news
    resource: https://www.tigerdata.com/newsroom
    title: Tiger Data newsroom
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest consortium"
  - id: tiger-pr-rename
    resource: https://www.tigerdata.com/newsroom/timescale-becomes-tiger-data-defining-a-new-standard-as-the-fastest-postgresql-platform-for-modern-applications
    title: "Tiger Data press release: Timescale becomes Tiger Data (2025-06-17)"
    author: org:tiger-data
  - id: tiger-c
    resource: https://www.tigerdata.com/blog/year-of-the-tiger-110-million-to-build-the-future-of-data-for-developers-worldwide
    title: "Timescale blog: Year of the Tiger — $110M Series C (2022-02-22)"
    author: org:tiger-data
---

# Summary
Timescale became Tiger Data on June 17 2025. The cloud became Tiger Cloud, and the extension kept the TimescaleDB name[^tiger-rebrand]. Recent products include Tiger Lake, a self-managed TimescaleDB Enterprise and an AWS collaboration[^tiger-news]. It co-funds pgBackRest's maintainer[^reg-pgbackrest]. At the rename it reported ~2,000 customers, "mid 8-digit" ARR growing >100% a year and $180M raised in total[^tiger-pr-rename]. Its last priced round was a $110M Series C at a >$1B valuation led by Tiger Global (Feb 2022)[^tiger-c]. No funding or layoffs were found for the window.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-06-17 | Rebrand to Tiger Data [^tiger-rebrand] | +/− |
| W6 | 2026-05-20 | pgBackRest co-funder [^reg-pgbackrest] | + |

# Monetization model
Tiger Cloud managed Postgres. TSL-licensed advanced features. Self-managed Enterprise.

# Successes
- Broadened its market beyond time-series[^tiger-rebrand].

# Failures / risks
- Head-to-head with much better-funded Postgres platforms.

# Related
- [/projects/databases/timescaledb.md](/projects/databases/timescaledb.md)

[^tiger-rebrand]: Tiger Data, 2025-06-17.
[^tiger-news]: Tiger Data newsroom.
[^reg-pgbackrest]: The Register, 2026-05-20.
[^tiger-pr-rename]: Tiger Data press release, 2025-06-17.
[^tiger-c]: Timescale blog, 2022-02-22.
