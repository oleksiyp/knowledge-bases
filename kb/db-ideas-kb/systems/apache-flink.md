---
type: System
title: Apache Flink
description: Flink became a central engine for distributed stateful processing. Version 2.0 addresses cloud-state
  economics, but the project itself acknowledges substantial complexity and cost.
resource: https://flink.apache.org
tags:
- streaming
- data-infrastructure
kind: oss
outcome: thriving
ideas:
- ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink
- ideas/streaming-messaging/streaming-databases-and-ivm
license: Apache-2.0
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: flink-20
  resource: https://flink.apache.org/2025/03/24/apache-flink-2.0.0-a-new-era-of-real-time-data-processing/
  title: 'Apache Flink 2.0.0: A new era of real-time data processing (2025-03-24)'
  author: org:apache
- id: immerok
  resource: https://investors.confluent.io/news-releases/news-release-details/confluent-announces-intent-acquire-immerok-accelerate
  title: Confluent announces intent to acquire Immerok (2023-01-06)
  author: org:confluent
---

# Summary

Apache Flink is a distributed engine for stateful computations over streams. Its 2.0 announcement identifies cost and the difficulty of operating distributed streaming as persistent adoption barriers. The March 2025 release introduces disaggregated state management and an asynchronous execution model to better suit cloud infrastructure.[^flink-20]

Its outcome is strong as a shared engine: Confluent's decision to acquire Immerok and build a managed Flink service is concrete evidence of investment by a major Kafka vendor.[^immerok] This does not mean every application needs a separate Flink deployment.

# Timeline

| Date | Event |
|---|---|
| 2023-01 | Confluent announces its planned acquisition of Immerok[^immerok] |
| 2025-03-24 | Flink 2.0 introduces a new major generation and disaggregated state work[^flink-20] |

# What worked

Stateful computation, recovery and declarative interfaces provide reusable infrastructure for pipelines that would otherwise require custom systems. Managed-service investment strengthens the surrounding deployment ecosystem. The interpretation is that an established open engine can accumulate improvements and distribution faster than every startup builds an independent alternative.

# What didn't

The Flink maintainers themselves emphasize resource cost and a steep learning curve.[^flink-20] Separating state from compute addresses part of that problem but does not make state disappear. Users still need workload-appropriate recovery and latency expectations. The most defensible verdict is engine success alongside continuing operational difficulty, rather than claiming that real-time processing has become universally simple or inexpensive.

# Related

- [Processing engines consolidate on Flink](/ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink.md)
- [Arroyo](/systems/arroyo.md) · [ksqlDB](/systems/ksqldb.md)
