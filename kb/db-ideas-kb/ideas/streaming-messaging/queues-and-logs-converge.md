---
type: Idea
title: "Queues and logs converge: share groups, RabbitMQ streams, NATS JetStream and Postgres-as-queue"
description: "The old split between message queues (RabbitMQ, SQS: per-message acks, competing consumers) and logs (Kafka: ordered partitions, replay) narrowed from both sides. Logs added queues (Kafka share groups, GA in 4.2, 2026), brokers added logs (RabbitMQ streams 2021, NATS JetStream), and small teams used the database as the queue. Verdict: winning for convergence, mixed for the lightweight brokers, which ran into durability and governance problems."
tags: [messaging, queues, kafka, rabbitmq, nats, postgres, share-groups]
area: streaming-messaging
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "AMQP/RabbitMQ (2007) for queues, Kafka (2011) for logs. NATS (2011) as fire-and-forget messaging. JetStream (2021) added persistence to NATS."
key_systems: [systems/apache-kafka, systems/rabbitmq, systems/nats, systems/apache-pulsar, systems/pgmq, systems/amazon-kinesis]
related_ideas: [ideas/streaming-messaging/kafka-as-central-log, ideas/streaming-messaging/apache-pulsar-two-tier-challenger, ideas/postgres-ecosystem/just-use-postgres, ideas/business-licensing/source-available-licenses]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kafka-40
    resource: https://kafka.apache.org/blog/2025/03/18/apache-kafka-4.0.0-release-announcement/
    title: "Apache Kafka 4.0.0 Release Announcement (2025-03-18)"
    author: org:apache
  - id: kafka-42
    resource: https://www.confluent.io/blog/apache-kafka-4-2-release/
    title: "Confluent: Apache Kafka 4.2.0 released (2026-02-20)"
    author: org:confluent
  - id: rmq-streams
    resource: https://www.rabbitmq.com/blog/2021/07/13/rabbitmq-streams-overview
    title: "RabbitMQ Streams Overview (2021-07-13)"
    author: org:rabbitmq
  - id: rmq-40
    resource: https://blog.rabbitmq.com/docs/4.0/whats-new
    title: "What's New in RabbitMQ 4.0"
    author: org:rabbitmq
  - id: rmq-policy
    resource: https://www.rabbitmq.com/blog/2024/05/31/new-community-support-policy
    title: "RabbitMQ: Changes to the open source release and community support policy (2024-05-31)"
    author: org:rabbitmq
  - id: reg-nats-dispute
    resource: https://www.theregister.com/2025/04/28/cncf_synadia_nats_dispute/
    title: "The Register: CNCF tells NATS contributor Synadia it's free to fork off (2025-04-28)"
    author: org:the-register
  - id: reg-nats-settle
    resource: https://www.theregister.com/2025/05/02/cncf_synadia_nats/
    title: "The Register: CNCF and Synadia settle NATS dispute (2025-05-02)"
    author: org:the-register
  - id: jepsen-nats
    resource: https://jepsen.io/analyses/nats-2.12.1
    title: "Jepsen: NATS 2.12.1 (2025-12-08)"
    author: person:kyle-kingsbury
  - id: solid-queue
    resource: https://github.com/rails/solid_queue
    title: "rails/solid_queue — database-backed Active Job backend"
    author: org:rails
  - id: pgmq-tembo
    resource: https://legacy.tembo.io/blog/pgmq-self-regulating-queue/
    title: "Tembo: PGMQ — lightweight message queue on Postgres"
    author: org:tembo
  - id: waehner-q3-2026
    resource: https://www.kai-waehner.de/blog/2026/09/21/data-streaming-trends-q3-2026-what-changes-through-2027/
    title: "Kai Waehner: Data Streaming Trends Q3 2026"
    author: person:kai-waehner
---

# Summary

**Verdict: winning (convergence), mixed (lightweight brokers).** Through the 2010s teams ran two systems: RabbitMQ/SQS/ActiveMQ for work queues and Kafka for event streams. Between 2021 and 2026 both sides moved toward each other. RabbitMQ added an append-only **stream** type in 3.9 (July 2021)[^rmq-streams]. Kafka added **share groups** (KIP-932): per-record acks and many consumers per partition. They were early access in 4.0 (Mar 2025), preview in 4.1 and production-ready in 4.2 (Feb 2026)[^kafka-40][^kafka-42]. For small and medium apps, the database itself became the queue (Rails 8's Solid Queue default, pgmq)[^solid-queue][^pgmq-tembo]. The lightweight brokers had a rougher period. RabbitMQ's community support narrowed under Broadcom[^rmq-policy]. NATS survived an attempted relicensing by its main sponsor[^reg-nats-dispute][^reg-nats-settle], and then Jepsen found JetStream could lose acknowledged writes under its default fsync policy[^jepsen-nats].

# The idea

A queue deletes or hides a message once a consumer acknowledges it. Consumers compete, there is no ordering beyond best effort, and per-message retries and dead-letter queues are standard. A log keeps everything and consumers track offsets. Ordering is per partition and parallelism is capped by the partition count. Convergence means one system and one operational skill set for both patterns, plus replay for queues and elastic consumer scaling for logs.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2021 | RabbitMQ 3.9 ships streams: append-only log with non-destructive reads (Jul)[^rmq-streams]. NATS 2.2 introduces JetStream persistence | + |
| 2023 | Broadcom completes VMware acquisition and takes over RabbitMQ's commercial home | mixed |
| 2024 | RabbitMQ narrows community support to latest releases and commercial customers (May 31)[^rmq-policy]. RabbitMQ 4.0 removes classic mirrored queues; quorum queues and streams are the replicated types (Sept)[^rmq-40]. Rails 8 makes Solid Queue (DB-backed, `SKIP LOCKED`) the default job backend | mixed |
| 2025 | Kafka 4.0: share groups early access (Mar)[^kafka-40]. Synadia tries to take NATS out of CNCF and move it to BSL; CNCF refuses (Apr)[^reg-nats-dispute]. Settlement: NATS stays Apache 2.0 at CNCF and trademarks go to the Linux Foundation (May 1)[^reg-nats-settle] | mixed |
| 2025 | Jepsen NATS 2.12.1: lost committed writes and persistent split-brain under faults; default fsync every two minutes (Dec)[^jepsen-nats] | − |
| 2026 | Kafka 4.2: share groups production-ready (Feb 20)[^kafka-42][^waehner-q3-2026] | + |

# What succeeded

- **Kafka absorbed queues.** Share groups decouple consumer parallelism from partition count and add delivery counting. That removes the most common reason teams added RabbitMQ or SQS next to Kafka[^kafka-42]. Vendors (Confluent, StreamNative) shipped it quickly.
- **RabbitMQ modernized.** Raft-based quorum queues replaced the fragile mirrored queues, and streams gave it replay[^rmq-40].
- **Postgres as a queue for small scale.** With `FOR UPDATE SKIP LOCKED` (Postgres 9.5+), job queues live in the same transaction as the business data. That gives exactly-once enqueue relative to the data change and one less system to run. Rails 8 made it the default[^solid-queue].

# What failed

- **NATS JetStream durability.** Jepsen found JetStream acknowledged publishes but flushed to disk only every two minutes by default. Coordinated crashes could lose committed writes, and corrupted files on a minority of nodes could cause data loss[^jepsen-nats]. Simplicity had been bought partly with weaker defaults.
- **Open-source governance of brokers.** Synadia's April 2025 attempt to relicense NATS under BSL and leave CNCF failed. CNCF kept the project and the trademarks went to the Linux Foundation[^reg-nats-settle]. RabbitMQ's narrower community support under Broadcom pushed users toward commercial support or managed services[^rmq-policy].
- **Postgres queues at high volume.** Polling, table bloat from dead tuples and vacuum pressure limit throughput. "Just use Postgres" works for thousands of jobs per second, not for Kafka-scale fan-out.
- **Share groups arrived late.** Seven years after people started asking, and only GA in 2026. Many shops had already standardized on SQS or RabbitMQ next to Kafka.

# Why

Running two messaging systems costs real money and staff time, so pressure to consolidate was constant. The log is the more general primitive: a queue is a log plus per-record state. Adding that state to Kafka was cheaper than adding replay and retention to queue brokers. The lightweight brokers' problems were economic. NATS and RabbitMQ depend on one company each (Synadia, Broadcom), and when those companies tried to make the project pay, governance conflicts followed. Postgres queues won the small end because transactional enqueue is a correctness feature, not just a convenience.

# Lessons

- The more general abstraction (the log) tends to absorb the specialized one (the queue), as long as it can add the missing semantics compatibly.
- "Simple and fast" messaging often means relaxed durability defaults. Read the fsync policy before trusting acknowledgements.
- Single-vendor open-source projects are exposed to that vendor's business pressure. Foundation ownership of trademarks matters.

# Related

- [Apache Kafka](/systems/apache-kafka.md), [RabbitMQ](/systems/rabbitmq.md), [NATS](/systems/nats.md), [pgmq](/systems/pgmq.md), [Jepsen](/systems/jepsen.md)
- [CNCF and Synadia settle NATS dispute](/events/2025-05-cncf-synadia-nats-settlement.md)
- [Just use Postgres](/ideas/postgres-ecosystem/just-use-postgres.md), [Source-available licenses](/ideas/business-licensing/source-available-licenses.md)
