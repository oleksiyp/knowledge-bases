---
type: OSS Project
title: InfluxDB 3
description: "Time-series database rewritten in Rust on Arrow, DataFusion and Parquet. InfluxDB 3 Core went GA as permissive open source (MIT/Apache-2.0) in Apr 2025 alongside a commercial Enterprise edition, ending the long open-source gap after v2."
resource: https://github.com/influxdata/influxdb
tags: [time-series, rust, apache-arrow, mit, apache-2.0, open-core]
domain: databases
license: MIT OR Apache-2.0
license_history: ["MIT (v1/v2)", "MIT/Apache-2.0 dual (v3 Core, 2025-)"]
governance: company-led-open-core
steward: InfluxData
backing_orgs: []
metrics:
  github_stars: { value: 31759, as_of: 2026-10-03 }
  latest_release: { value: "v3.11.4", as_of: 2026-09-08 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: influx-ga
    resource: https://www.influxdata.com/blog/influxdb-3-oss-ga/
    title: "InfluxDB 3 Core & Enterprise GA"
    author: org:influxdata
  - id: influx-pr
    resource: https://www.influxdata.com/blog/influxdata-announces-influxdb-3-OSS-GA/
    title: "InfluxData Announces GA of InfluxDB 3 Core and InfluxDB 3 Enterprise"
    author: org:influxdata
  - id: influx-gh
    resource: https://github.com/influxdata/influxdb
    title: InfluxDB GitHub repository
---

# Summary
InfluxData delivered on its long-promised open-source v3. InfluxDB 3 Core (MIT/Apache-2.0) and the commercial InfluxDB 3 Enterprise went GA on Apr 15 2025. Both are built in Rust on Arrow, DataFusion, Parquet and Flight, with a "diskless" object-storage design and an embedded Python processing engine[^influx-ga][^influx-pr]. Point releases continue (v3.11.4, Sept 2026; 31.8k stars)[^influx-gh]. The open-core split puts clustering and long-range features in Enterprise. No funding, layoff or license events were found in 2025-2026.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-15 | InfluxDB 3 Core (OSS) and Enterprise GA [^influx-ga][^influx-pr] | OSS/Business | + |
| W3 | 2026-09-08 | v3.11.4 [^influx-gh] | OSS | + |

# OSS successes
- Permissive license on a modern Arrow and DataFusion stack[^influx-pr].

# OSS failures / risks
- Core is deliberately limited relative to Enterprise, which is a typical open-core tension.

# Business successes
- A single codebase now serves both the OSS and Enterprise lines[^influx-ga].

# Business failures / risks
- Postgres-native time-series options ([TimescaleDB](/projects/databases/timescaledb.md)) and fast OSS rivals ([QuestDB](/projects/databases/questdb.md), [ClickHouse](/projects/databases/clickhouse.md)) compete for the same workloads.

# By window
## W3
- Point releases[^influx-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- v3 GA[^influx-ga].

# Lessons
- Rebuilding on shared Apache components (Arrow, DataFusion) lets a mid-size vendor ship a modern engine. It also lowers the barrier for competitors.

# Related
- [TimescaleDB](/projects/databases/timescaledb.md), [QuestDB](/projects/databases/questdb.md)

[^influx-ga]: InfluxData blog, 2025-04-15.
[^influx-pr]: InfluxData blog, 2025-04-15.
[^influx-gh]: GitHub API, influxdata/influxdb, 2026-10-03.
