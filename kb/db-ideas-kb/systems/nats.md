---
type: System
title: NATS
description: "Lightweight, high-performance messaging system (CNCF) with JetStream persistence added in 2021. Survived a 2025 attempt by its main sponsor Synadia to relicense it under BSL and take it out of CNCF. A December 2025 Jepsen report found JetStream could lose acknowledged writes under default settings."
resource: https://nats.io
tags: [messaging, pubsub, cncf, jetstream, edge, go]
kind: oss
first_release: 2011
org: "CNCF (trademarks assigned to the Linux Foundation, 2025); main developer Synadia"
license: Apache-2.0
outcome: stable
ideas: [ideas/streaming-messaging/queues-and-logs-converge, ideas/business-licensing/source-available-licenses]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
metrics:
  github_stars: { value: 20832, as_of: 2026-10-03 }
sources:
  - id: reg-nats-dispute
    resource: https://www.theregister.com/2025/04/28/cncf_synadia_nats_dispute/
    title: "The Register: CNCF tells NATS contributor Synadia it's free to fork off (2025-04-28)"
    author: org:the-register
  - id: cncf-nats
    resource: https://www.cncf.io/blog/2025/05/01/protecting-nats-and-the-integrity-of-open-source-cncfs-commitment-to-the-community/
    title: "CNCF: Protecting NATS and the integrity of open source (2025-05-01)"
    author: org:cncf
  - id: reg-nats-settle
    resource: https://www.theregister.com/2025/05/02/cncf_synadia_nats/
    title: "The Register: CNCF and Synadia settle NATS dispute"
    author: org:the-register
  - id: jepsen-nats
    resource: https://jepsen.io/analyses/nats-2.12.1
    title: "Jepsen: NATS 2.12.1 (2025-12-08)"
    author: person:kyle-kingsbury
  - id: nats-issue
    resource: https://github.com/nats-io/nats-server/issues/7564
    title: "nats-server issue #7564: JetStream loses acknowledged writes by default due to deferred fsync"
---

# Summary

NATS started as fire-and-forget pub/sub and grew into a full messaging platform (request/reply, key-value, object store) once JetStream added Raft-replicated persistence in 2021. It is popular for edge, IoT and microservice messaging and has about 20.8k GitHub stars (Oct 2026). In April 2025 Synadia, its main sponsor, said it would move future NATS releases to the BSL and withdraw the project from CNCF. CNCF refused and filed trademark petitions[^reg-nats-dispute]. They settled on May 1: Synadia assigned the NATS trademarks to the Linux Foundation, CNCF kept the domain and repos, and the server stays Apache 2.0[^cncf-nats][^reg-nats-settle]. In December 2025 Jepsen tested NATS 2.12.1. JetStream acknowledged writes but by default fsynced only every two minutes, so coordinated failures could lose committed writes and cause persistent split-brain. An earlier version (2.10.20–2.10.22) could lose whole streams on process crashes[^jepsen-nats][^nats-issue].

# Timeline

| Date | Event |
|---|---|
| 2021 | JetStream persistence (NATS 2.2) |
| 2025-04 | Synadia BSL/CNCF-exit attempt[^reg-nats-dispute] |
| 2025-05-01 | Settlement; stays Apache 2.0 under CNCF[^cncf-nats] |
| 2025-12 | Jepsen NATS 2.12.1[^jepsen-nats] |

# What worked

- Simplicity, small footprint and performance. A strong fit for edge and service meshes.
- Foundation governance protected the project from a sponsor's relicensing.

# What didn't

- Durability defaults favoured speed over safety[^jepsen-nats].
- Single-sponsor economics led to a public governance fight.

# Related

- [RabbitMQ](/systems/rabbitmq.md), [Apache Kafka](/systems/apache-kafka.md), [Jepsen](/systems/jepsen.md)
- [CNCF and Synadia settle](/events/2025-05-cncf-synadia-nats-settlement.md)
- [Queues and logs converge](/ideas/streaming-messaging/queues-and-logs-converge.md)
