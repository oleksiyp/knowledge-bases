---
type: Event
title: Cloudflare acquires Arroyo
description: Arroyo’s stream-processing engine joins a platform with existing compute and object-storage services.
date: '2025-04-10'
year: 2025
kind: acquisition
signal: positive
ideas:
- ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink
systems:
- systems/arroyo
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

# What happened

Cloudflare announced on April 10, 2025 that it had acquired Arroyo. The same post introduced the Pipelines ingestion beta and described future integration of Arroyo’s processing capabilities with Workers, R2 and the developer platform.[^arroyo-cf] Planned integration should not be confused with immediate general availability of every Arroyo capability.

# Why it matters

The event illustrates an acquisition route for a technically differentiated engine. Distribution, billing, deployment and storage are substantial parts of a useful streaming service; placing the engine inside an existing platform can address those needs. The analytical signal is therefore positive for the technology, but more ambiguous for the thesis that another independent processing vendor would displace Flink. The announcement establishes a new product home, not evidence that every integration goal had already been delivered.

# Related

- [Arroyo](/systems/arroyo.md)
