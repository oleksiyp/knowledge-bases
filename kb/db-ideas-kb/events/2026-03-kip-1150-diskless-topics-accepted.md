---
type: Event
title: Kafka accepts the KIP-1150 diskless-topics direction
description: The community approves an architectural proposal, with implementation details and shipping work
  still ahead.
date: '2026-03-02'
year: 2026
kind: standard
signal: positive
ideas:
- ideas/streaming-messaging/diskless-kafka-on-object-storage
systems:
- systems/apache-kafka
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: aiven-1150
  resource: https://aiven.io/blog/kip-1150-accepted-and-the-road-ahead
  title: 'Aiven: KIP-1150 Accepted, and the Road Ahead (2026)'
  author: org:aiven
---

# What happened

Aiven’s account dates acceptance of KIP-1150 to March 2, 2026, with nine binding and five non-binding votes. The proposal established the direction for diskless topics while delegating substantial implementation detail to follow-up proposals, including diskless core and coordinator work.[^aiven-1150]

# Why it matters

This is evidence that object-storage-oriented designs influenced upstream Kafka, beyond proprietary services and experimental forks. It is not evidence that production-ready diskless topics shipped on the voting date. The distinction matters when judging startup differentiation: an approved direction creates potential future competition but does not immediately erase a working product’s operational experience or support. The analytical lesson is to track proposal, implementation and stable release separately. In a mature distributed system, agreement on architecture is only one stage in the adoption timeline.

# Related

- [Apache Kafka](/systems/apache-kafka.md)
