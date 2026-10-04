---
type: Event
title: Citus 11 opens remaining enterprise features
description: Citus 11 opens remaining enterprise functionality, including non-blocking shard rebalancing, improving the operational
  completeness of its public extension.
date: '2022-06-17'
year: 2022
kind: license-change
signal: positive
ideas:
- ideas/distributed-sql/sharding-middleware
systems:
- systems/citus
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: citus11
  resource: https://www.citusdata.com/blog/2022/06/17/citus-11-goes-fully-open-source/
  title: Citus 11 for Postgres goes fully open source (2022-06-17)
  author: org:citus-data
---

# What happened
Citus announced version 11 on June 17, 2022 with the remaining enterprise functionality included in the open-source extension. The changes included non-blocking shard rebalancing and support for querying from any node.[^citus11]

# Why it matters
The practical change was access to operations, not just query execution. A system that can distribute tables but requires a commercial feature to move them without write interruption leaves an important scaling step behind a paywall. Opening that capability improved the usefulness of the public project. Our interpretation is that cloud ownership can support a different incentive than a standalone open-core vendor: wider adoption of the engine can complement managed-service distribution. That is a plausible business explanation, not proof that every license decision followed the same calculation.

# Related
- [Citus](/systems/citus.md)
- [Sharding Middleware](/ideas/distributed-sql/sharding-middleware.md)

[^citus11]: [Citus 11 for Postgres goes fully open source (2022-06-17)](https://www.citusdata.com/blog/2022/06/17/citus-11-goes-fully-open-source/).
