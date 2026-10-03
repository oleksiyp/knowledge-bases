---
type: OSS Project
title: Apache Druid
description: "Real-time OLAP database releasing every ~3 months (34 → 38 over the window); technically steady but losing mindshare to ClickHouse and lakehouse engines, while commercial steward Imply pivoted to an observability warehouse (Imply Lumi, 2025–2026)."
resource: https://github.com/apache/druid
tags: [real-time-olap, apache-2.0, asf]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 14058, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: druid-gh
    resource: https://github.com/apache/druid
    title: Apache Druid GitHub repository (druid-34.0.0 2025-08-11 → druid-38.0.0 2026-10-01)
    last_modified: 2026-10-03T00:00:00Z
  - id: pinot-gh
    resource: https://github.com/apache/pinot
    title: Apache Pinot GitHub repository (release-1.3.0 2025-02-17 → release-1.5.1 2026-06-05)
  - id: imply-news
    resource: https://imply.io/news-and-press/
    title: "Imply newsroom (Imply Lumi 2025-09-05; Lumi Enterprise 2026-05-07; Lumi Loglake 2026-06-15, GA 2026-09-13)"
  - id: tc-startree
    resource: https://techcrunch.com/2022/08/29/data-analytics-startup-startree-secures-cash-to-expand-its-pinot-powered-platform/
    title: "TechCrunch: StarTree secures cash to expand its Pinot-powered platform (2022-08-29)"
  - id: clickhouse-gh
    resource: https://github.com/ClickHouse/ClickHouse
    title: ClickHouse GitHub repository (50k stars)
---

# Summary
Druid keeps a quarterly major cadence: 34.0.0 (2025-08-11), 35.0.0 (2025-11-18), 36.0.0 (2026-02-09), 37.0.0 (2026-05-08), 38.0.0 (2026-10-01)[^druid-gh]. Its peer Apache Pinot moved slower (1.3 Feb 2025, 1.4 Sept 2025, 1.5 Apr 2026)[^pinot-gh]. Both are dwarfed in community size by ClickHouse (~50k stars)[^clickhouse-gh]. Commercial steward Imply repositioned away from "Druid as a service": it launched Imply Lumi, billed as an "observability warehouse" (2025-09-05), then Lumi Enterprise BYOC (2026-05-07) and Lumi Loglake (2026-06-15, GA 2026-09-13), targeting log/SIEM cost reduction[^imply-news]. StarTree (Pinot) has announced no round since its $47M Series B (2022)[^tc-startree]; no funding or layoff news was found for either company in 2025–2026. Verdict: stable but relatively declining in mindshare.

Corrected in pass 2: "Imply/StarTree status unverified" → Imply pivoted to observability (Imply newsroom); StarTree no new announced round since 2022.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-11 | Druid 34.0.0[^druid-gh] | OSS | + |
| W24 | 2025-09-05 | Imply launches Imply Lumi "observability warehouse"[^imply-news] | Business | ± |
| W24 | 2025-09-15 | Pinot 1.4.0[^pinot-gh] | OSS | + |
| W12 | 2025-11-18 | Druid 35.0.0[^druid-gh] | OSS | + |
| W9 | 2026-02-09 | Druid 36.0.0[^druid-gh] | OSS | + |
| W6 | 2026-04-09 | Pinot 1.5.0[^pinot-gh] | OSS | + |
| W6 | 2026-05-07 | Imply Lumi Enterprise (BYOC on AWS)[^imply-news] | Business | + |
| W6 | 2026-05-08 | Druid 37.0.0[^druid-gh] | OSS | + |
| W6 | 2026-06-15 | Imply Lumi Loglake launched[^imply-news] | Business | + |
| W3 | 2026-09-13 | Imply Lumi Loglake GA[^imply-news] | Business | + |
| W3 | 2026-10-01 | Druid 38.0.0[^druid-gh] | OSS | + |

# OSS successes
- Predictable cadence[^druid-gh].

# OSS failures / risks
- Mindshare loss to ClickHouse[^clickhouse-gh].

# Business successes
- Imply found a new pitch (observability/SIEM cost reduction) and shipped a steady product cadence in 2025–2026[^imply-news].

# Business failures / risks
- Imply's pivot to observability suggests the real-time-analytics database market alone was not enough[^imply-news]; StarTree has announced no new round since 2022[^tc-startree].

# By window
## W3
- Druid 38.0.0[^druid-gh]; Imply Lumi Loglake GA[^imply-news].
## W6
- Druid 37; Pinot 1.5[^druid-gh][^pinot-gh]; Imply Lumi Enterprise and Loglake[^imply-news].
## W9
- Druid 36[^druid-gh].
## W12
- Druid 35[^druid-gh].
## W24
- Druid 34; Pinot 1.3/1.4[^druid-gh][^pinot-gh].

# Lessons
- In real-time OLAP, the simpler-to-operate engine (ClickHouse) captured the growth.

# Related
- [Apache Kafka](/projects/data-engineering/apache-kafka.md), [Trino](/projects/data-engineering/trino.md)

[^druid-gh]: Apache Druid GitHub releases.
[^pinot-gh]: Apache Pinot GitHub releases.
[^clickhouse-gh]: ClickHouse GitHub repository.
[^imply-news]: Imply newsroom.
[^tc-startree]: TechCrunch, 2022-08-29.
