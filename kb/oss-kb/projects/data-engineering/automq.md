---
type: OSS Project
title: AutoMQ
description: "\"Diskless\" Kafka fork that stores data on S3; relicensed from BSL to Apache-2.0 in April 2025, passed 10k GitHub stars in June 2026, and was validated when upstream Kafka accepted KIP-1150 — which also threatens its differentiation."
resource: https://github.com/AutoMQ/automq
tags: [streaming, kafka-compatible, object-storage, apache-2.0, company-led, relicensed-to-oss]
domain: data-engineering
license: Apache-2.0
license_history: ["BSL-1.1 (2023 – 2025-04)", "Apache-2.0 (2025-04-18-, PR #2433, 'use the apache license for the next major version')"]
governance: company-led-open-core
steward: AutoMQ
backing_orgs: []
metrics:
  github_stars: { value: 10901, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T08:19:24Z }
sources:
  - id: automq-gh
    resource: https://github.com/AutoMQ/automq
    title: AutoMQ GitHub repository (stars, 1.7.x releases; LICENSE history via GitHub API)
    last_modified: 2026-10-03T00:00:00Z
  - id: automq-relicense-pr
    resource: https://github.com/AutoMQ/automq/pull/2433
    title: "AutoMQ PR #2433: chore(license): use the apache license for the next major version (merged 2025-04-18)"
  - id: automq-bsl-medium
    resource: https://medium.com/@AutoMQ/redis-license-change-a-look-at-the-competitive-game-between-oss-and-cloud-computing-giants-a4b830cd7d01
    title: "AutoMQ (Medium): Redis license change — explains AutoMQ's earlier BSL choice"
  - id: automq-10k
    resource: https://www.automq.com/blog/automq-10k-stars-diskless-kafka-global-adoption
    title: "AutoMQ: AutoMQ Reaches 10K GitHub Stars as Diskless Kafka Gains Global Adoption (2026-06-12)"
  - id: kr36-automq
    resource: https://www.36kr.com/p/2525930971457029
    title: "36Kr: AutoMQ completes nearly RMB 100M angel and angel+ rounds (Nov 2023)"
  - id: automq-intro
    resource: https://www.automq.com/blog/introducing-automq-cloud-native-replacement-of-apache-kafka
    title: "AutoMQ: Introducing AutoMQ — two seed rounds, nearly $10M; GSR Ventures, Vision Plus Capital"
  - id: automq-kip
    resource: https://www.automq.com/blog/kip-1150-explained-diskless-topics-kafka-future
    title: "AutoMQ: KIP-1150 Diskless Topics Explained"
  - id: aiven-kip1150
    resource: https://aiven.io/blog/kip-1150-accepted-and-the-road-ahead
    title: "Aiven: KIP-1150 Accepted, and the Road Ahead"
  - id: tc-warpstream
    resource: https://techcrunch.com/2024/09/09/confluent-acquires-streaming-data-startup-warpstream/
    title: "TechCrunch: Confluent acquires streaming data startup WarpStream"
---

# Summary
AutoMQ re-engineers Kafka's storage layer onto object storage (S3) while keeping wire compatibility[^automq-gh][^automq-kip]. It launched as BSL source-available software[^automq-bsl-medium] and switched to Apache-2.0 on 2025-04-18[^automq-relicense-pr] — a rare move *toward* OSS among Kafka challengers. It rode the "diskless Kafka" wave started by WarpStream (acquired by Confluent in Sept 2024)[^tc-warpstream], passed 10k GitHub stars in June 2026 with named users such as JD.com, Grab, Tencent Cloud EMR and LG U+[^automq-10k], and stood at ~10.9k stars on 2026-10-03[^automq-gh]. The upstream acceptance of KIP-1150 (March 2026)[^aiven-kip1150] validates the architecture but means Apache Kafka will eventually offer the same thing natively. Funding: nearly $10M across two seed/angel rounds in 2023 (≈RMB 100M per 36Kr)[^kr36-automq][^automq-intro]; no later round was found.

Corrected in pass 2: license_history "Apache-2.0 (earlier history unverified)" → BSL-1.1 until 2025-04-18, then Apache-2.0 (GitHub PR #2433).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2023-11 | ~RMB 100M (≈$10M+) angel and angel+ rounds[^kr36-automq] | Business | + |
| W24 | 2024-09-09 | (Context) Confluent buys WarpStream, validating diskless BYOC Kafka[^tc-warpstream] | Business | + |
| W24 | 2025-04-18 | Relicenses from BSL to Apache-2.0 for next major version[^automq-relicense-pr] | OSS | + |
| W9 | 2026-03-02 | Upstream KIP-1150 diskless topics accepted[^aiven-kip1150] | OSS | ± |
| W6 | 2026-06-12 | Passes 10k GitHub stars; JD.com runs 4,000+ pods[^automq-10k] | OSS | + |
| W3 | 2026-08-29 | AutoMQ 1.7.4 released; 1.7.5 RCs in Sept[^automq-gh] | OSS | + |

# OSS successes
- Moved from BSL to Apache-2.0 (Apr 2025)[^automq-relicense-pr]; permissive license allows third parties to build managed services, an edge vs BSL Redpanda[^automq-kip].
- Steady 1.7.x releases and active commits through Oct 2026 (latest 2026-10-01)[^automq-gh]; 10k-star milestone and large production users[^automq-10k].

# OSS failures / risks
- Company-led, not foundation-governed; core contributors are AutoMQ employees.
- Upstream diskless topics could make the fork redundant once KIP-1163/1164 land[^aiven-kip1150].

# Business successes
- Early seed/angel funding (~$10M) from GSR Ventures, Vision Plus Capital and others[^automq-intro][^kr36-automq]; large Chinese and APAC reference customers[^automq-10k].

# Business failures / risks
- No priced round found after 2023; competes with Confluent WarpStream (now IBM) and Aiven Inkless on the same value proposition.

# By window
## W3
- 1.7.3/1.7.4 releases and 1.7.5 RCs[^automq-gh].
## W6
- 10k GitHub stars (June 2026)[^automq-10k].
## W9
- KIP-1150 accepted upstream[^aiven-kip1150].
## W12
- No notable events found.
## W24
- Relicensed BSL → Apache-2.0 (2025-04-18)[^automq-relicense-pr]; diskless Kafka category validated by WarpStream exit[^tc-warpstream].

# Lessons
- Architectural innovation outside the ASF can push the upstream to adopt it — and then commoditize the innovator.
- A challenger can use relicensing *to* Apache-2.0 as a competitive weapon against source-available incumbents.

# Related
- [Apache Kafka](/projects/data-engineering/apache-kafka.md), [Redpanda](/projects/data-engineering/redpanda.md), [KIP-1150](/events/2026-03-kafka-kip-1150-diskless-topics-accepted.md), [Confluent](/organizations/confluent.md)

[^automq-gh]: AutoMQ GitHub repository, as of 2026-10-03.
[^automq-relicense-pr]: GitHub PR #2433, merged 2025-04-18.
[^automq-bsl-medium]: AutoMQ on Medium, on its earlier BSL licensing.
[^automq-10k]: AutoMQ blog, 2026-06-12.
[^kr36-automq]: 36Kr, Nov 2023.
[^automq-intro]: AutoMQ blog, company introduction.
[^automq-kip]: AutoMQ blog on KIP-1150.
[^aiven-kip1150]: Aiven blog, KIP-1150 accepted.
[^tc-warpstream]: TechCrunch, 2024-09-09.
