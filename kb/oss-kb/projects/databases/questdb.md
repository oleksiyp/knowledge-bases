---
type: OSS Project
title: QuestDB
description: "Apache-2.0 high-performance time-series database popular in capital markets. Steady monthly releases culminated in QuestDB 10.0 with the QWP streaming protocol and Enterprise 4.0 (Aug 2026)."
resource: https://github.com/questdb/questdb
tags: [time-series, apache-2.0, finance, open-core]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: QuestDB Inc.
backing_orgs: []
metrics:
  github_stars: { value: 17412, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: qdb-gh
    resource: https://github.com/questdb/questdb
    title: QuestDB GitHub repository
  - id: qdb-blog
    resource: https://questdb.com/blog/
    title: QuestDB blog index (10.0, Enterprise 4.0, 9.4.2)
    author: org:questdb
---

# Summary
QuestDB keeps a disciplined cadence: 9.3.x → 9.4.x → 10.0 (Aug 6 2026). 10.0 introduced QWP, "one binary streaming protocol for writes and Arrow reads". Enterprise 4.0 (Aug 25 2026) added cold storage and restart-free failover[^qdb-blog]. Financial-sector case studies (HDFC Bank, SIX Group/Aquis, One Trading) anchor the commercial story[^qdb-blog]. The repo has 17.4k stars and is Apache-2.0[^qdb-gh]. No funding or license events were found.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-06-09 | 9.4.2 [^qdb-blog] | OSS | + |
| W3 | 2026-08-06 | QuestDB 10.0 with QWP [^qdb-blog] | OSS | + |
| W3 | 2026-08-25 | Enterprise 4.0 [^qdb-blog] | Business | + |

# OSS successes
- Permissive license and a major release[^qdb-blog][^qdb-gh].

# OSS failures / risks
- Niche focus. Single vendor.

# Business successes
- Strong references in finance[^qdb-blog].

# Business failures / risks
- Funding status in 2025-2026 is unknown.

# By window
## W3
- 10.0 and Enterprise 4.0[^qdb-blog].
## W6
- 9.4.2[^qdb-blog].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found in this research.

# Lessons
- A vertical focus (capital markets) sustains a permissively licensed open-core time-series database without relicensing.

# Related
- [InfluxDB](/projects/databases/influxdb.md), [TimescaleDB](/projects/databases/timescaledb.md)

[^qdb-gh]: GitHub API, questdb/questdb, 2026-10-03.
[^qdb-blog]: QuestDB blog index, accessed 2026-10-03.
