---
type: Organization
title: Redpanda Data
description: Maker of the BSL-licensed Kafka-compatible Redpanda; $100M Series D at ~$1B (April 2025), acquired Oxla (Oct 2025), and repositioned as an "Agentic Data Plane" vendor.
resource: https://www.redpanda.com
tags: [commercial-open-source, source-available, streaming, kafka-compatible]
org_kind: coss-startup
hq: "San Francisco, California, USA (unverified)"
funding: { total_usd: "~265.5M", last_round: "Series D $100M (GV lead)", last_round_date: 2025-04-03, valuation_usd: "~1B" }
business_verdict: growing
projects: [projects/data-engineering/redpanda]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rp-press
    resource: https://www.redpanda.com/press
    title: Redpanda press releases
  - id: rp-seriesd
    resource: https://www.redpanda.com/press/redpanda-raises-100m-launches-enterprise-agentic-ai-platform
    title: "Redpanda raises $100M Series D"
  - id: saasnews-rp
    resource: https://www.thesaasnews.com/news/redpanda-raises-100m-in-series-d-at-1b-valuation/
    title: "The SaaS News: Redpanda Series D at $1B valuation"
  - id: inv-rp-snow
    resource: https://www.investing.com/news/stock-market-news/snowflake-in-talks-to-buy-analytics-startup-redpanda-the-information-3838467
    title: "Investing.com: Snowflake in talks to buy analytics startup Redpanda — The Information (2025-01)"
    author: org:the-information
  - id: contrary-rp
    resource: https://research.contrary.com/company/redpanda
    title: "Contrary Research: Redpanda (total raised ~$265.5M; Snowflake talks Jan 2025)"
---

# Summary
Redpanda Data raised a $100M Series D led by GV (Lightspeed participating) on 2025-04-03 at ~$1B valuation[^rp-seriesd][^saasnews-rp], bringing total funding to ~$265.5M[^contrary-rp]. The Information reported in late January 2025 that Snowflake was in talks to acquire it, with Redpanda seeking about $1.5B; no deal followed[^inv-rp-snow][^contrary-rp]. It hired Tyler Akidau as CTO (May 2025), bought Oxla (Oct 2025), launched AI Gateway / Agentic Data Plane (Feb 2026) and Redpanda 26.1 (Mar 2026), and co-founded the Streamhouse Working Group (Sept 2026)[^rp-press]. Verdict: **growing**.

# Business timeline
| Date | Event |
|---|---|
| 2024-05-30 | Acquires Benthos[^rp-press] |
| 2025-01 | Snowflake acquisition talks reported by The Information[^inv-rp-snow] |
| 2025-04-03 | $100M Series D at ~$1B[^rp-seriesd][^saasnews-rp] |
| 2025-05-14 | Tyler Akidau CTO[^rp-press] |
| 2025-10-28 | Acquires Oxla[^rp-press] |
| 2026-02-18 | AI Gateway & Agentic Data Plane[^rp-press] |
| 2026-09-15 | Streamhouse Working Group[^rp-press] |

# Monetization model
Enterprise licenses for self-managed Redpanda, Redpanda Cloud (BYOC, dedicated, serverless); BSL core prevents competing hosted offerings.

# Successes
- Unicorn valuation; product expansion via M&A[^rp-seriesd][^rp-press].

# Failures / risks
- Exit via Snowflake did not materialize[^contrary-rp]; upstream Kafka is closing technical gaps.

# Related
- [Redpanda](/projects/data-engineering/redpanda.md), [Apache Kafka](/projects/data-engineering/apache-kafka.md), [Confluent](/organizations/confluent.md)

[^rp-press]: Redpanda press page.
[^rp-seriesd]: Redpanda press release.
[^saasnews-rp]: The SaaS News.
[^contrary-rp]: Contrary Research.
[^inv-rp-snow]: The Information via Investing.com, Jan 2025.
