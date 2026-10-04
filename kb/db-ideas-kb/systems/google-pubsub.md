---
type: System
title: Google Cloud Pub/Sub
description: Google’s managed publish/subscribe service remains distinct from its deprecated Lite variant.
  Lite’s changing retirement schedule illustrates lifecycle risk in proprietary cloud APIs.
resource: https://cloud.google.com/pubsub
tags:
- streaming
- data-infrastructure
kind: cloud-service
outcome: stable
ideas:
- ideas/streaming-messaging/kafka-protocol-as-standard
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: pubsub
  resource: https://docs.cloud.google.com/pubsub/docs/overview
  title: What is Pub/Sub?
- id: psl-notes
  resource: https://docs.cloud.google.com/pubsub/lite/docs/release-notes
  title: Google Pub/Sub Lite release notes (deprecation)
  author: org:google
- id: lite-current
  resource: https://docs.cloud.google.com/pubsub/lite/docs
  title: Pub/Sub Lite current deprecation notice
---

# Summary

Google Cloud Pub/Sub is a managed asynchronous messaging service connecting publishers and subscribers. Its documentation positions it for event distribution and integration, without requiring users to maintain a broker fleet.[^pubsub] It must be distinguished from Pub/Sub Lite, a separate partition-oriented service whose retirement was announced in June 2024.[^psl-notes]

The ordinary Pub/Sub service is not being declared shut down here. Conflating these products would turn a real example of portfolio consolidation into a false claim about the provider's entire messaging offering.

# Timeline

| Period | Event |
|---|---|
| 2024-06-17 | Google release notes announce Pub/Sub Lite deprecation[^psl-notes] |
| 2026-09 documentation snapshot | Lite's overview specifies January 31, 2027 as its scheduled retirement; historical notes retain an earlier date[^lite-current][^psl-notes] |

# What worked

A managed publish/subscribe abstraction serves teams prioritizing integration and operational convenience. Google offers Pub/Sub itself and Managed Service for Apache Kafka as migration destinations for Lite customers.[^lite-current] The analytical lesson is that native cloud services and Kafka can coexist rather than one protocol replacing every messaging interface.

# What didn't

Lite's deprecation imposed migration work even though its cloud provider continued operating other streaming products. The conflicting historical and current dates make a precise chronology essential: the current overview gives a future deadline, not evidence of an already completed shutdown. Provider size does not eliminate product-lifecycle risk, and a migration guide does not make application semantics automatically identical.

# Related

- [Pub/Sub Lite deprecation](/events/2024-06-google-pubsub-lite-deprecated.md)
- [Kafka protocol as standard](/ideas/streaming-messaging/kafka-protocol-as-standard.md)
