---
type: System
title: RabbitMQ
description: "The most widely used open-source AMQP message broker (Erlang). Added append-only streams (3.9, 2021), removed classic mirrored queues in favour of Raft quorum queues (4.0, 2024), and narrowed community support under Broadcom ownership."
resource: https://www.rabbitmq.com
tags: [messaging, amqp, queues, erlang, broadcom]
kind: oss
first_release: 2007
org: "Broadcom (via VMware/Pivotal)"
license: MPL-2.0
outcome: stable
ideas: [ideas/streaming-messaging/queues-and-logs-converge]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: rmq-streams
    resource: https://www.rabbitmq.com/blog/2021/07/13/rabbitmq-streams-overview
    title: "RabbitMQ Streams Overview (2021-07-13)"
    author: org:rabbitmq
  - id: rmq-qq-migr
    resource: https://www.rabbitmq.com/blog/2023/03/02/quorum-queues-migration
    title: "RabbitMQ: Migrating from mirrored classic queues to quorum queues (2023)"
    author: org:rabbitmq
  - id: rmq-40
    resource: https://blog.rabbitmq.com/docs/4.0/whats-new
    title: "What's New in RabbitMQ 4.0"
    author: org:rabbitmq
  - id: rmq-policy
    resource: https://www.rabbitmq.com/blog/2024/05/31/new-community-support-policy
    title: "RabbitMQ: New community support policy (2024-05-31)"
    author: org:rabbitmq
  - id: eol
    resource: https://endoflife.date/rabbitmq
    title: "endoflife.date: RabbitMQ release dates"
---

# Summary

RabbitMQ remained the default general-purpose queue broker, but it spent 2018–2026 modernizing under pressure from Kafka. Streams, an append-only log type with non-destructive reads, arrived in 3.9 (July 2021)[^rmq-streams]. Raft-based quorum queues replaced classic mirrored queues, which were deprecated for about three years and removed in 4.0 (released September 18, 2024, the first major version since 3.0 in 2012)[^rmq-40][^eol]. Khepri began replacing Mnesia as the metadata store[^rmq-40]. After Broadcom bought VMware (Nov 2023), the team limited community support to the latest release series, with patches for older series only for commercial customers[^rmq-policy].

# Timeline

| Date | Event |
|---|---|
| 2021-07 | 3.9 adds streams[^rmq-streams] |
| 2023-03 | Migration guidance away from mirrored queues[^rmq-qq-migr] |
| 2024-05 | Community support policy narrowed[^rmq-policy] |
| 2024-09 | 4.0: mirrored queues removed; Khepri supported; AMQP 1.0 core[^rmq-40] |

# What worked

- Replaced a weak replication design with Raft (quorum queues).
- Added replay (streams) without changing its queue-first model.

# What didn't

- Lost the "event backbone" role to Kafka, and now faces Kafka share groups on queues.
- Commercial pressure under Broadcom pushed users toward paid support or cloud services.

# Related

- [NATS](/systems/nats.md), [Apache Kafka](/systems/apache-kafka.md)
- [Queues and logs converge](/ideas/streaming-messaging/queues-and-logs-converge.md)
