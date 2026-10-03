---
type: OSS Project
title: Redpanda
description: Source-available (BSL) C++ Kafka-compatible streaming engine; Redpanda Data became a unicorn in 2025 and repositioned around an "Agentic Data Plane", but the core remains non-OSI and the public repo's activity is opaque.
resource: https://github.com/redpanda-data/redpanda
tags: [streaming, kafka-compatible, bsl, single-vendor]
domain: data-engineering
license: BSL-1.1
license_history: ["BSL-1.1 core + Redpanda Community License for enterprise features (2020-)"]
governance: single-vendor
steward: Redpanda Data
backing_orgs: [organizations/redpanda-data]
metrics:
  github_stars: { value: 12590, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rp-gh
    resource: https://github.com/redpanda-data/redpanda
    title: Redpanda GitHub repository (stars, releases v26.x)
    last_modified: 2026-10-03T00:00:00Z
  - id: rp-press
    resource: https://www.redpanda.com/press
    title: Redpanda press releases
  - id: rp-seriesd
    resource: https://www.redpanda.com/press/redpanda-raises-100m-launches-enterprise-agentic-ai-platform
    title: "Redpanda Raises $100M Series D, Launches Enterprise Agentic AI Platform"
  - id: saasnews-rp
    resource: https://www.thesaasnews.com/news/redpanda-raises-100m-in-series-d-at-1b-valuation/
    title: "The SaaS News: Redpanda Raises $100M in Series D at $1B Valuation"
  - id: info-snowflake-rp
    resource: https://www.theinformation.com/articles/snowflake-in-talks-to-acquire-analytics-startup-redpanda
    title: "The Information: Snowflake in Talks to Acquire Analytics Startup Redpanda (Jan 2025)"
  - id: investing-snowflake-rp
    resource: https://www.investing.com/news/stock-market-news/snowflake-in-talks-to-buy-analytics-startup-redpanda-the-information-3838467
    title: "Investing.com: Snowflake in talks to buy analytics startup Redpanda — The Information (Redpanda seeking ~$1.5B)"
  - id: rp-q2
    resource: https://www.redpanda.com/press/redpanda-continues-strong-momentum-reports-record-q2-performance
    title: "Redpanda Continues Strong Momentum, Reports Record Q2 Performance (2026-08-20)"
  - id: rp-pr-q2
    resource: https://www.prnewswire.com/news-releases/redpanda-continues-strong-momentum-reports-record-q2-performance-302855827.html
    title: "PR Newswire: Redpanda reports record Q2 (fiscal 2027) performance (2026-08-20)"
  - id: confluent-streamhouse
    resource: https://www.confluent.io/blog/
    title: "Confluent blog: Streamhouse Working Group (2026-09-15)"
---

# Summary
Redpanda is the most commercially successful Kafka-API reimplementation. Redpanda Data raised a $100M Series D led by GV at a ~$1B valuation (April 2025)[^rp-seriesd][^saasnews-rp], bought Oxla (distributed SQL) in October 2025, and rebranded its platform around AI agents (AI Gateway / Agentic Data Plane, Feb 2026)[^rp-press]. The code is BSL-licensed, not OSI open source, so community health is mostly vendor-driven. On 2026-08-20 it reported record fiscal-Q2 2027 results with new ARR up more than 100% YoY, a 30-partner "Frontier" program, a new Warsaw R&D office and Redpanda SQL GA on Google Cloud[^rp-q2][^rp-pr-q2]. Verdict: business growing; OSS posture stable but source-available.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01 | The Information reports Snowflake acquisition talks (Redpanda seeking ~$1.5B); no deal[^info-snowflake-rp][^investing-snowflake-rp] | Business | ± |
| W24 | 2025-04-03 | $100M Series D led by GV, ~$1B valuation[^rp-seriesd][^saasnews-rp] | Business | + |
| W24 | 2025-05-14 | Tyler Akidau (ex-Google/Snowflake) named CTO[^rp-press] | Business | + |
| W12 | 2025-10-28 | Acquires Oxla distributed SQL engine[^rp-press] | Business | + |
| W9 | 2026-02-18 | AI Gateway and Agentic Data Plane launched[^rp-press] | Business | + |
| W9 | 2026-03-31 | Redpanda Streaming 26.1 with R1 "adaptable streaming engine"[^rp-press] | OSS/Business | + |
| W3 | 2026-08-10 | GlobalFoundries selects Redpanda for manufacturing real-time data/AI agents[^rp-press] | Business | + |
| W3 | 2026-08-20 | Record fiscal Q2: new ARR +100% YoY; Redpanda SQL GA on GCP; Warsaw R&D office[^rp-q2][^rp-pr-q2] | Business | + |
| W3 | 2026-08-22 | v26.2.2 — latest public release; last public commit 2026-08-20[^rp-gh] | OSS | ? |
| W3 | 2026-09-15 | Co-founds Streamhouse Working Group[^confluent-streamhouse] | Business | + |

# OSS successes
- Steady release trains (25.3, 26.1, 26.2 maintained in parallel)[^rp-gh].
- Benthos (acquired May 2024) folded into Redpanda Connect, expanding the connector ecosystem[^rp-press].

# OSS failures / risks
- BSL core is not open source; GitHub shows no SPDX license and community contribution is limited[^rp-gh].
- Public repository `dev` branch shows no commits after 2026-08-20 and no release after v26.2.2 (2026-08-22) as of 2026-10-03 (re-checked via GitHub API in pass 2)[^rp-gh]. No announcement explaining the pause was found; the company kept shipping commercially in the same period[^rp-q2], so a move of development to a private mirror is possible but unconfirmed.
- Kafka itself is absorbing Redpanda's differentiators (no ZooKeeper, diskless topics).

# Business successes
- Unicorn round in a cooling market[^rp-seriesd]; repeated M&A to broaden beyond the broker[^rp-press]; new ARR more than doubled YoY in fiscal Q2 2027[^rp-q2].

# Business failures / risks
- Snowflake acquisition talks reported by The Information did not result in a deal[^info-snowflake-rp].
- Faces an IBM-backed Confluent and cheap object-storage Kafka (WarpStream, AutoMQ, upstream diskless).

# By window
## W3
- Record Q2 and Redpanda SQL GA on GCP (08-20)[^rp-q2]; GlobalFoundries deal (08-10)[^rp-press]; v26.2.x releases; Streamhouse Working Group[^confluent-streamhouse][^rp-gh]; public repo quiet after 08-20[^rp-gh].
## W6
- No notable events found beyond maintenance releases.
## W9
- Agentic Data Plane (Feb 18) and Redpanda 26.1 (Mar 31)[^rp-press].
## W12
- Oxla acquisition (Oct 28, 2025)[^rp-press].
## W24
- Series D $100M; CTO hire; Snowflake talks reported[^rp-seriesd][^info-snowflake-rp].

# Lessons
- Protocol-compatible reimplementations can build big businesses, but the moat erodes as upstream catches up.
- "AI agents" became the funding narrative even for infrastructure brokers.

# Related
- [Redpanda Data](/organizations/redpanda-data.md), [Apache Kafka](/projects/data-engineering/apache-kafka.md), [AutoMQ](/projects/data-engineering/automq.md), [Streamhouse](/events/2026-09-streamhouse-working-group.md)

[^rp-gh]: Redpanda GitHub repository, as of 2026-10-03.
[^rp-press]: Redpanda press page.
[^rp-seriesd]: Redpanda press release, Series D.
[^saasnews-rp]: The SaaS News on Series D valuation.
[^confluent-streamhouse]: Confluent blog, Streamhouse Working Group.
[^info-snowflake-rp]: The Information, Jan 2025 (paywalled).
[^investing-snowflake-rp]: Investing.com summary of The Information report.
[^rp-q2]: Redpanda press release, 2026-08-20.
[^rp-pr-q2]: PR Newswire, 2026-08-20.
