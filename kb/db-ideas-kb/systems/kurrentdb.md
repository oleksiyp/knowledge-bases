---
type: System
title: KurrentDB (formerly EventStoreDB)
description: An event-oriented database treats durable application history as primary data. The Event Store
  company’s Kurrent rebrand reflects an attempt to bridge database and streaming workflows.
resource: https://www.kurrent.io
tags:
- streaming
- data-infrastructure
kind: product
outcome: stable
ideas:
- ideas/streaming-messaging/event-sourcing-and-database-inside-out
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: kurrent
  resource: https://www.kurrent.io/press/event-store-changes-name-to-kurrent-raises-12m-to-unify-streams-and-databases
  title: Event Store changes name to Kurrent, raises $12M (2024-12-18)
  author: org:kurrent
---

# Summary

Kurrent is the successor branding to Event Store, a company centered on event-oriented data storage. In December 2024 it announced a $12 million funding round, a new company name and an enterprise edition, presenting its strategy as a bridge between streaming systems and databases.[^kurrent]

Its role in this knowledge base is specialized rather than universal. Storing application history as events can support reconstruction and auditing, but that choice also shifts responsibility into event schemas and the code that interprets old records. The case therefore belongs with the mixed verdict on event sourcing rather than as proof that ordinary state-based databases are obsolete.

# Timeline

| Period | Event |
|---|---|
| Before rebranding | Event Store provides the company lineage behind Kurrent[^kurrent] |
| 2024-12 | Company announces new branding, funding and enterprise positioning[^kurrent] |

# What worked

The product targets applications for which history itself is useful, rather than treating a message bus as a complete database by default. Its continued commercial development is evidence that event-centric storage has a durable niche.[^kurrent] The interpretation is that a specialized product can persist without turning its architecture into a universal prescription.

# What didn't

A stored event history still needs projections to answer many application queries. Changing business interpretation can require rebuilding those projections or supporting old event representations. These are architectural tradeoffs of event sourcing, not evidence of a product defect. The available announcement does not establish market share, profitability or that the rebrand removed these modeling costs.

# Related

- [Event sourcing and the database inside out](/ideas/streaming-messaging/event-sourcing-and-database-inside-out.md)
- [Apache Kafka](/systems/apache-kafka.md)
