---
type: OSS Project
title: Apache Flink
description: The dominant stateful stream processor; shipped Flink 2.0 (March 2025) through 2.3 (June 2026) and an agents sub-project, with commercial value consolidating into Confluent/IBM and Alibaba/Ververica.
resource: https://github.com/apache/flink
tags: [stream-processing, apache-2.0, foundation-hosted, asf]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0 (2014-)"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: [organizations/confluent]
metrics:
  github_stars: { value: 26378, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: flink-gh
    resource: https://github.com/apache/flink
    title: Apache Flink GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: flink-posts
    resource: https://flink.apache.org/posts/
    title: Apache Flink blog (release announcements 2.0–2.3, Flink Agents, K8s operator)
  - id: confluent-press
    resource: https://www.confluent.io/press-releases/
    title: Confluent press releases (Flink/Tableflow, stream+batch unification)
  - id: confluent-blog
    resource: https://www.confluent.io/blog/
    title: Confluent blog (Confluent Platform 8.3 with Flink SQL, Aug 2026)
  - id: redis-decodable
    resource: https://www.globenewswire.com/news-release/2025/09/04/3144606/0/en/Redis-to-Acquire-Real-Time-Data-Platform-Decodable-Expands-Redis-for-AI-to-Deliver-Context-and-Memory-for-AI-Agents-and-Agentic-Systems.html
    title: "GlobeNewswire: Redis to Acquire Real-Time Data Platform Decodable (2025-09-04)"
  - id: fluss-blog
    resource: https://fluss.apache.org/blog/
    title: Apache Fluss blog
---

# Summary
Flink is the clear winner of the stream-processing engine race. The community shipped the long-awaited Flink 2.0 on 2025-03-24, followed by 2.1 (2025-07-31), 2.2 (2025-12-04) and 2.3 (2026-06-25), each pitched around "real-time data + AI"[^flink-posts]. A Flink Agents sub-project started in October 2025 (0.1.0) and reached 0.3.1 by July 2026[^flink-posts]. Commercially, Flink is now a feature of larger platforms — Confluent Cloud/Platform (IBM) and Alibaba Cloud/Ververica — rather than a standalone business. Ecosystem siblings Apache Fluss (streaming storage, TLP Aug 2026) and Apache Paimon (2.0, Aug 2026) extend Flink into a "streamhouse"[^fluss-blog].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-24 | Flink 2.0.0 released[^flink-posts] | OSS | + |
| W24 | 2025-05-20 | Confluent unifies stream & batch processing on Flink for agentic AI[^confluent-press] | Business | + |
| W24 | 2025-07-31 | Flink 2.1.0[^flink-posts] | OSS | + |
| W12 | 2025-10 | Flink Agents 0.1.0[^flink-posts] | OSS | + |
| W12 | 2025-12-04 | Flink 2.2.0[^flink-posts] | OSS | + |
| W6 | 2026-06-25 | Flink 2.3.0: Hadoop-free native S3 filesystem, FROM_/TO_CHANGELOG[^flink-posts] | OSS | + |
| W3 | 2026-08 | Confluent Platform 8.3 adds Flink SQL operations[^confluent-blog] | Business | + |
| W3 | 2026-09 | Flink Kubernetes Operator 1.16.0[^flink-posts] | OSS | + |

# OSS successes
- Delivered a major version (2.0) after years of planning and then sustained a ~5-month minor cadence[^flink-posts].
- Expanded scope to AI agents (Flink Agents) and cloud-native storage (native S3 FS)[^flink-posts].
- Fluss graduated to TLP (2026-08-06), adding a Flink-native streaming storage layer[^fluss-blog].

# OSS failures / risks
- Operational complexity remains the chief complaint; streaming-database alternatives (RisingWave, Materialize) target that pain.
- Vendor concentration: Alibaba and Confluent employ many core contributors (exact shares unverified).

# Business successes
- Flink is a core part of Confluent's platform that IBM paid ~$11B for[^confluent-press].

# Business failures / risks
- No independent pure-play Flink vendor of scale remains; standalone Flink startups (e.g. Decodable, Immerok — the latter bought by Confluent in 2023) have been absorbed — Decodable was bought by Redis (announced 2025-09-04) to feed context and memory to AI agents[^redis-decodable].

# By window
## W3
- Confluent Platform 8.3 Flink SQL; K8s operator 1.16[^confluent-blog][^flink-posts].
## W6
- Flink 2.3.0 (2026-06-25)[^flink-posts].
## W9
- No notable events found (Fluss 0.9 in the adjacent project)[^fluss-blog].
## W12
- Flink 2.2.0; Flink Agents 0.1.0[^flink-posts].
## W24
- Flink 2.0 and 2.1[^flink-posts].

# Lessons
- Foundation governance plus multiple big-vendor backers produced durable momentum even as the standalone business case evaporated.

# Related
- [Apache Kafka](/projects/data-engineering/apache-kafka.md), [Apache Fluss](/projects/data-engineering/apache-fluss.md), [RisingWave](/projects/data-engineering/risingwave.md), [Confluent](/organizations/confluent.md), [Streamhouse](/events/2026-09-streamhouse-working-group.md)

[^flink-gh]: Apache Flink GitHub repository.
[^flink-posts]: Apache Flink blog posts list.
[^confluent-press]: Confluent press releases.
[^confluent-blog]: Confluent blog, Aug 2026 platform posts.
[^fluss-blog]: Apache Fluss blog.
[^redis-decodable]: GlobeNewswire (Redis press release), 2025-09-04.
