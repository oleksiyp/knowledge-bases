---
type: System
title: Arroyo
description: A Rust and SQL stream-processing engine joined Cloudflare in 2025. Its trajectory shows how an
  engine can gain distribution inside a broader developer platform.
resource: https://www.arroyo.dev
tags:
- streaming
- data-infrastructure
kind: oss
outcome: acquired
ideas:
- ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink
license: Apache-2.0
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: arroyo-cf
  resource: https://blog.cloudflare.com/cloudflare-acquires-arroyo-pipelines-streaming-ingestion-beta/
  title: 'Cloudflare: acquires Arroyo; Pipelines streaming ingestion beta (2025-04-10)'
  author: org:cloudflare
---

# Summary

Arroyo began in 2023 with a goal of making stream processing accessible to product engineers and data scientists. Its founder's account describes SQL as the interface, Rust as the implementation language, and object storage as the state substrate. Cloudflare announced the acquisition on April 10, 2025 alongside a beta of Pipelines.[^arroyo-cf]

The important outcome is acquisition into an existing developer platform, not evidence that an independent streaming engine displaced Flink. This distinction keeps technical promise separate from standalone commercial success.

# Timeline

| Period | Event |
|---|---|
| 2023 | Arroyo begins development and is open-sourced during the summer[^arroyo-cf] |
| 2025-04-10 | Cloudflare announces acquisition and plans integration with its developer platform[^arroyo-cf] |

# What worked

Arroyo targeted a recognizable friction: powerful distributed stream-processing APIs can be hard for nonspecialists to use. Cloudflare described plans to combine the engine with Workers, R2 and Pipelines.[^arroyo-cf] The analytical benefit is distribution and an existing operational environment around an engine that would otherwise have to build that platform itself.

# What didn't

The acquisition announcement described planned integrations, so it should not be treated as proof that every feature was already generally available that day. Nor does a SQL frontend alone establish that fault recovery and state management are effortless. The transferable lesson is that a good execution engine is only part of a useful streaming product; ingestion, deployment, testing and historical processing also affect adoption.

# Related

- [Cloudflare acquisition](/events/2025-04-cloudflare-acquires-arroyo.md)
- [Apache Flink](/systems/apache-flink.md)
