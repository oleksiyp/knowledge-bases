---
type: OSS Project
title: Apache Fluss
description: Alibaba-originated columnar streaming storage for Flink and the lakehouse; a breakout incubation that graduated to an Apache TLP in August 2026 and shipped 1.0 in September 2026.
resource: https://github.com/apache/fluss
tags: [streaming-storage, lakehouse, apache-2.0, asf, breakout]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 2193, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: n/a }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fluss-gh
    resource: https://github.com/apache/fluss
    title: Apache Fluss GitHub repository (releases 0.8.0-incubating → 1.0.0)
    last_modified: 2026-10-03T00:00:00Z
  - id: fluss-blog
    resource: https://fluss.apache.org/blog/
    title: Apache Fluss blog (graduation 2026-08-06, 1.0 release 2026-09-21)
  - id: fluss-joins-asf
    resource: https://fluss.apache.org/blog/fluss-joins-asf/
    title: "Apache Fluss blog: Fluss Joins the Apache Incubator (incubator entry 2025-06-05)"
  - id: fluss-tlp
    resource: https://fluss.apache.org/blog/apache-fluss-graduates-to-top-level-project/
    title: "Apache Fluss blog: Apache Fluss Graduates to a Top Level Project (2026-08-06)"
  - id: paimon-gh
    resource: https://github.com/apache/paimon
    title: Apache Paimon GitHub repository (release-2.0.0, 2026-08-07)
---

# Summary
Fluss is a streaming storage layer ("real-time lakehouse") designed for Flink, tiering hot streaming data into lake formats (Paimon/Iceberg). Created by Alibaba's Flink team in July 2023 and open-sourced in November 2024, it entered the Apache Incubator on 2025-06-05[^fluss-joins-asf], released 0.8.0-incubating (2025-11-06) and 0.9.0-incubating (2026-03-02), graduated to Top-Level Project on 2026-08-06 and shipped 1.0 on 2026-09-21[^fluss-gh][^fluss-blog]. At graduation it reported 157 contributors, 1,700+ merged PRs and production use at Alibaba, Xiaohongshu (RedNote), Fresha, JD.com, Ant Group and iQIYI[^fluss-tlp]. Its sibling Apache Paimon (also Alibaba-originated) shipped 2.0.0 on 2026-08-07[^paimon-gh]. Verdict: fast-growing but China-ecosystem-centric.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-05 | Enters Apache Incubator (announced at Flink Forward Asia, 2025-07-03)[^fluss-joins-asf] | OSS | + |
| W12 | 2025-11-06 | 0.8.0-incubating[^fluss-gh] | OSS | + |
| W9 | 2026-03-02 | 0.9.0-incubating[^fluss-gh] | OSS | + |
| W3 | 2026-08-06 | Graduates to Apache TLP (157 contributors)[^fluss-tlp] | OSS | + |
| W3 | 2026-08-07 | Sibling Apache Paimon 2.0.0[^paimon-gh] | OSS | + |
| W3 | 2026-09-21 | Fluss 1.0 (Gateway, native clients)[^fluss-blog] | OSS | + |

# OSS successes
- Incubation-to-TLP in roughly a year; 30 blog articles with multiple production case studies[^fluss-blog].

# OSS failures / risks
- Modest star count (2.2k)[^fluss-gh]; the adopter list is dominated by Chinese companies (Alibaba, Ant, JD.com, RedNote, iQIYI), with Fresha a rare Western user[^fluss-tlp].
- Competes conceptually with Kafka + Tableflow and diskless Kafka.

# Business successes
- n/a (no dedicated startup; Alibaba is the originating and main corporate backer[^fluss-tlp]).

# Business failures / risks
- n/a.

# By window
## W3
- TLP graduation and 1.0[^fluss-blog]; Paimon 2.0[^paimon-gh].
## W6
- Tiering-service engineering series (June 2026)[^fluss-blog].
## W9
- 0.9.0-incubating[^fluss-gh].
## W12
- 0.8.0-incubating[^fluss-gh].
## W24
- Incubator entry on 2025-06-05[^fluss-joins-asf].

# Lessons
- Hyperscaler-originated ASF donations can graduate quickly when backed by large in-house production use.

# Related
- [Apache Flink](/projects/data-engineering/apache-flink.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Streamhouse Working Group](/events/2026-09-streamhouse-working-group.md)

[^fluss-gh]: Apache Fluss GitHub releases.
[^fluss-blog]: Apache Fluss blog.
[^paimon-gh]: Apache Paimon GitHub releases.
[^fluss-joins-asf]: Apache Fluss blog, incubator entry.
[^fluss-tlp]: Apache Fluss blog, TLP graduation.
