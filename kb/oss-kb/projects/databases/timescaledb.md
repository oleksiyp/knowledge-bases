---
type: OSS Project
title: TimescaleDB (Tiger Data)
description: "Postgres time-series extension (Apache-2.0 core plus source-available Timescale License features) whose company renamed itself Tiger Data (June 2025) to sell 'the fastest Postgres' for analytical and agentic workloads."
resource: https://github.com/timescale/timescaledb
tags: [postgres, time-series, extension, open-core, tsl]
domain: databases
license: "Apache-2.0 (core) + Timescale License (TSL) for advanced features"
license_history: ["Apache-2.0 + TSL (2018-)"]
governance: company-led-open-core
steward: Tiger Data (formerly Timescale Inc.)
backing_orgs: [organizations/tiger-data]
metrics:
  github_stars: { value: 23638, as_of: 2026-10-03 }
  latest_release: { value: "2.30.2", as_of: 2026-09-29 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tsdb-gh
    resource: https://github.com/timescale/timescaledb
    title: TimescaleDB GitHub repository
  - id: tiger-rebrand
    resource: https://www.tigerdata.com/newsroom/timescale-becomes-tiger-data-defining-a-new-standard-as-the-fastest-postgresql-platform-for-modern-applications
    title: "Timescale Becomes Tiger Data"
    author: org:tiger-data
  - id: tiger-news
    resource: https://www.tigerdata.com/newsroom
    title: Tiger Data newsroom (Tiger Lake, TimescaleDB Enterprise, AWS collaboration)
    author: org:tiger-data
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest gets backing"
    author: org:the-register
  - id: reg-sprawl
    resource: https://www.theregister.com/ai-and-ml/2026/06/30/ai-agents-cause-of-database-sprawl-and-also-the-proposed-solution/5264430
    title: "The Register: AI agents: Cause of database sprawl (mentions Tiger Data 'Ghost')"
    author: org:the-register
---

# Summary
Timescale renamed itself Tiger Data on June 17 2025. The company is now Tiger Data, the cloud is Tiger Cloud, and the extension keeps the name TimescaleDB. The new pitch is "the fastest PostgreSQL platform" for transactional, analytical and agentic workloads[^tiger-rebrand]. The extension ships regularly (2.30.2 on Sept 29 2026, 23.6k stars)[^tsdb-gh]. The company added Tiger Lake (Postgres-to-lakehouse), a self-managed TimescaleDB Enterprise and an AWS collaboration[^tiger-news], plus "Ghost", an agent-oriented offering[^reg-sprawl]. Tiger Data was one of five companies that funded pgBackRest's maintainer in May 2026[^reg-pgbackrest]. No new funding round or layoffs were found for the window.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-17 | Timescale renames itself Tiger Data [^tiger-rebrand] | Business | +/− |
| W6 | 2026-05-20 | Co-funds pgBackRest maintenance [^reg-pgbackrest] | OSS | + |
| W6 | 2026-06-30 | "Ghost" agent tech cited among agentic database responses [^reg-sprawl] | Business | + |
| W3 | 2026-09-29 | TimescaleDB 2.30.2 [^tsdb-gh] | OSS | + |

# OSS successes
- A consistent release cadence. Still one of the most-starred Postgres extensions[^tsdb-gh].

# OSS failures / risks
- The dual license (TSL for compression and other advanced features) keeps cloud providers from offering the full feature set. The license field shows NOASSERTION on GitHub[^tsdb-gh].

# Business successes
- Broadened beyond time-series into general Postgres hosting[^tiger-rebrand][^tiger-news].

# Business failures / risks
- Tiger Data now competes head-on with Supabase, Neon/Databricks and PlanetScale in generic Postgres hosting, and it raises far less capital.

# By window
## W3
- Steady releases[^tsdb-gh].
## W6
- pgBackRest funding. Ghost[^reg-pgbackrest][^reg-sprawl].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Rebrand to Tiger Data[^tiger-rebrand].

# Lessons
- Postgres-extension companies are widening into full Postgres platforms, because the extension alone is too narrow a commercial wedge.

# Related
- [/organizations/tiger-data.md](/organizations/tiger-data.md), [PostgreSQL](/projects/databases/postgresql.md), [InfluxDB](/projects/databases/influxdb.md), [QuestDB](/projects/databases/questdb.md)

[^tsdb-gh]: GitHub API, timescale/timescaledb, 2026-10-03.
[^tiger-rebrand]: Tiger Data press release, 2025-06-17.
[^tiger-news]: Tiger Data newsroom.
[^reg-pgbackrest]: The Register, 2026-05-20.
[^reg-sprawl]: The Register, 2026-06-30.
