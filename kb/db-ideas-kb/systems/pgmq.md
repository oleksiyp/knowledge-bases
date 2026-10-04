---
type: System
title: pgmq
description: "Lightweight SQS-style message-queue extension for PostgreSQL (visibility timeouts, archiving) built on SKIP LOCKED. Created by Tembo in 2023. It outlived Tembo's managed Postgres business and became the base of Supabase Queues."
resource: https://github.com/pgmq/pgmq
tags: [postgres, extension, message-queue, skip-locked]
kind: oss
first_release: 2023
org: "Created by Tembo; community-maintained"
license: PostgreSQL
outcome: stable
ideas: [ideas/postgres-ecosystem/extensions-as-platform, ideas/postgres-ecosystem/just-use-postgres, ideas/streaming-messaging/queues-and-logs-converge]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pgmq-intro
    resource: https://temboio.substack.com/p/introducing-pgmq-simple-message-queues
    title: "Tembo: Introducing PGMQ, simple message queues built on Postgres (2023-11-25)"
    author: org:tembo
  - id: tembo-mq-hn
    resource: https://news.ycombinator.com/item?id=38558258
    title: "HN: Yeeting over 30k messages per second on Postgres with Tembo MQ (Dec 2023)"
  - id: sb-queues
    resource: https://supabase.com/blog/supabase-queues
    title: "Supabase: Supabase Queues (built on pgmq)"
    author: org:supabase
  - id: tembo-hn
    resource: https://news.ycombinator.com/item?id=44038896
    title: "HN: Tembo pivots to autonomous software maintenance; managed PG is shutting down (May 2025)"
  - id: amazingcto
    resource: https://www.amazingcto.com/postgres-for-everything/
    title: "Stephan Schmidt: Just Use Postgres for Everything"
---

# Summary
pgmq packages the well-known "Postgres as a queue" pattern (`SELECT … FOR UPDATE SKIP LOCKED`) as an extension with an SQS-like API: send, read with a visibility timeout, delete or archive. Messages that are not acknowledged in time become visible again, which gives at-least-once delivery[^pgmq-intro]. Tembo introduced it in 2023 and showed more than 30k messages per second on one Postgres instance[^tembo-mq-hn]. Supabase built its Queues product on pgmq, noting that Tembo licensed it under the PostgreSQL license[^sb-queues]. When Tembo shut down its managed Postgres service and pivoted to AI coding agents in 2025[^tembo-hn], pgmq carried on as a community extension. In this ecosystem the extension can outlive its sponsor.

# Timeline
| Date | Event |
|---|---|
| 2023 | Released by Tembo. Introduced publicly Nov 2023[^pgmq-intro] |
| 2023-12 | 30k+ msgs/sec benchmark discussed on HN[^tembo-mq-hn] |
| 2024–25 | Supabase Queues built on pgmq[^sb-queues] |
| 2025-05 | Tembo sunsets managed Postgres and pivots[^tembo-hn] |

# What worked
- It covers the common case (background jobs, task queues) with the same transactions, backups and monitoring as the application database. This is the core "just use Postgres" argument[^amazingcto].
- Permissive license and small scope made it easy for platforms to adopt.

# What didn't
- Queue tables create heavy UPDATE and DELETE churn, which means bloat and VACUUM pressure on the primary. Throughput is bounded by a single Postgres writer.
- Not a replacement for log-based streaming (replay, fan-out to many consumer groups, very high throughput). Kafka-class systems remain separate.

# Related
- [Extensions as platform](/ideas/postgres-ecosystem/extensions-as-platform.md), [Just use Postgres](/ideas/postgres-ecosystem/just-use-postgres.md), [Postgres as a queue](/ideas/streaming-messaging/queues-and-logs-converge.md)
- [Supabase](/systems/supabase.md), [Apache Kafka](/systems/apache-kafka.md), [RabbitMQ](/systems/rabbitmq.md)
