---
type: Event
title: Google deprecates Pub/Sub Lite
description: The retirement announcement sends customers toward Pub/Sub or managed Kafka; subsequent documentation
  extends the shutdown deadline.
date: '2024-06-17'
year: 2024
kind: discontinuation
signal: negative
ideas:
- ideas/streaming-messaging/kafka-protocol-as-standard
systems:
- systems/google-pubsub
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: psl-notes
  resource: https://docs.cloud.google.com/pubsub/lite/docs/release-notes
  title: Google Pub/Sub Lite release notes (deprecation)
  author: org:google
- id: lite-current
  resource: https://docs.cloud.google.com/pubsub/lite/docs
  title: Pub/Sub Lite current deprecation notice
---

# What happened

Google’s June 17, 2024 release notes announced Pub/Sub Lite deprecation and originally named March 18, 2026 as the shutdown date.[^psl-notes] The current documentation overview, updated in September 2026, instead specifies January 31, 2027. It names ordinary Pub/Sub and Managed Service for Apache Kafka as migration destinations.[^lite-current]

# Why it matters

The event records the deprecation decision, not an already completed shutdown. The differing pages are preserved as a chronology rather than silently choosing the old deadline. The analytical lesson is that cloud consolidation can impose migration work even when the provider and adjacent products remain healthy. It is also narrower than saying Google abandoned messaging: Pub/Sub Lite is a distinct service from Pub/Sub. Kafka’s availability as a destination signals ecosystem strength, but does not prove that every migrating customer selected it.

# Related

- [Google Pubsub](/systems/google-pubsub.md)
