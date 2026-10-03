---
type: OSS Project
title: RisingWave
description: Apache-2.0 Postgres-compatible streaming database; kept shipping (3.0 in June 2026) and repositioned as a real-time context layer for AI agents, with no new funding announced since its 2022 $36M Series A.
resource: https://github.com/risingwavelabs/risingwave
tags: [streaming-database, apache-2.0, company-led]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: RisingWave Labs
backing_orgs: []
metrics:
  github_stars: { value: 9358, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rw-gh
    resource: https://github.com/risingwavelabs/risingwave
    title: RisingWave GitHub repository (v3.0.0 2026-06-11, v3.1.0 2026-09-21)
    last_modified: 2026-10-03T00:00:00Z
  - id: rw-blog
    resource: https://risingwave.com/blog/
    title: RisingWave blog
  - id: tc-rw-seriesa
    resource: https://techcrunch.com/2022/10/18/streaming-data-processing-platform-risingwave-lands-36m-to-launch-a-cloud-service/
    title: "TechCrunch: RisingWave lands $36M to launch a cloud service (2022-10-18)"
---

# Summary
RisingWave is a distributed SQL streaming database (Rust, Apache-2.0) positioned as a simpler alternative to Flink. It released v3.0 on 2026-06-11 and v3.1 on 2026-09-21[^rw-gh], marketed as "the real-time data platform for agentic AI", and added DataFusion-based Iceberg analytics (July 2026)[^rw-blog]. Customer stories (e.g. Radicant core-banking, KLP Eiendom) appeared in W3[^rw-blog]. Its last announced round is the $36M Series A of October 2022[^tc-rw-seriesa]; no funding or revenue news was found for 2025–2026.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-06-11 | RisingWave 3.0[^rw-gh] | OSS | + |
| W3 | 2026-07-23 | Uses Apache DataFusion for faster Iceberg analytics[^rw-blog] | OSS | + |
| W3 | 2026-09-21 | RisingWave 3.1[^rw-gh] | OSS | + |

# OSS successes
- Permissive license (unlike BSL Materialize) and steady major releases[^rw-gh].
- Embraced Iceberg and DataFusion rather than building proprietary storage/query layers[^rw-blog].

# OSS failures / risks
- Star growth modest (~9.4k)[^rw-gh]; development is driven mainly by RisingWave Labs (company-led governance).

# Business successes
- Published production case studies in banking and real-estate investment[^rw-blog].

# Business failures / risks
- No new round announced since 2022 (four years)[^tc-rw-seriesa]; streaming databases remain a niche next to Flink.

# By window
## W3
- 3.1 release; DataFusion-Iceberg; customer case studies[^rw-gh][^rw-blog].
## W6
- 3.0 release[^rw-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found (2.x releases).

# Lessons
- Streaming-database startups now sell "fresh context for AI agents" rather than "simpler Flink".

# Related
- [Apache Flink](/projects/data-engineering/apache-flink.md), [Materialize](/projects/data-engineering/materialize.md), [Apache DataFusion](/projects/data-engineering/apache-datafusion.md)

[^rw-gh]: RisingWave GitHub releases.
[^rw-blog]: RisingWave blog.
[^tc-rw-seriesa]: TechCrunch, 2022-10-18.
