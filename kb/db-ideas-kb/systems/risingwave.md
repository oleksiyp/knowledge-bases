---
type: System
title: RisingWave
description: A Rust streaming database integrates ingestion, incremental SQL and serving. The open-source engine
  offers a simpler application interface while retaining the economics of continuously maintained state.
resource: https://github.com/risingwavelabs/risingwave
tags:
- streaming
- data-infrastructure
kind: oss
outcome: growing
ideas:
- ideas/streaming-messaging/streaming-databases-and-ivm
- ideas/streaming-messaging/streams-as-lakehouse-tables
license: Apache-2.0
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: rw-repo
  resource: https://github.com/risingwavelabs/risingwave
  title: RisingWave repository and architecture overview
- id: rw-a
  resource: https://www.techtarget.com/data-technologies/news/252526292/RisingWave-Labs-raises-36M-for-stream-processing-database
  title: 'TechTarget: RisingWave Labs raises $36M (Oct 2022)'
---

# Summary

RisingWave combines ingestion, incremental processing and serving in one system. Its repository describes the intended replacement of a separately operated CDC, Kafka, Flink and serving-database stack, and identifies Apache 2.0 as the core license. This is the vendor's proposed deployment simplification, not proof that every existing pipeline can be replaced without compromise.[^rw-repo]

In the 2018–2026 period, its significance is the attempt to make stream processing feel like database development: declare useful results and let a persistent engine maintain them. The design competes on operational simplicity as well as query speed.

# Timeline

| Period | Event |
|---|---|
| 2022 | RisingWave Labs raises $36 million for its streaming database[^rw-a] |
| 2026 snapshot | Public repository describes integrated ingestion, processing and serving, including lakehouse-oriented use cases[^rw-repo] |

# What worked

The integrated product reduces the number of separately configured boundaries when a workload fits its capabilities. An Apache-licensed core makes the implementation inspectable and deployable independently of the hosted service.[^rw-repo] These are useful adoption properties even without a verified market-share estimate.

# What didn't

The interpretation of the architecture is that fewer products do not mean no state-management costs. Operators still need to evaluate recovery, ingestion lag, query coverage and sustained resource use. A system that continuously maintains rarely queried results may spend work without enough read-side savings. The funding announcement demonstrates investor interest, not profitability or dominance.

# Related

- [Streaming databases and IVM](/ideas/streaming-messaging/streaming-databases-and-ivm.md)
- [Materialize](/systems/materialize.md) · [Apache Flink](/systems/apache-flink.md)
