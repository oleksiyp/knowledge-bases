---
type: Event
title: Amazon describes its Learned Systems Group
description: Amazon publicly describes Tim Kraska’s Learned Systems Group and its work on instance optimization for Redshift,
  bringing the research agenda inside a cloud service.
date: '2022-11-03'
year: 2022
kind: launch
signal: positive
ideas:
- ideas/ml-for-db/instance-optimized-systems
- ideas/ml-for-db/learned-query-optimizers
systems:
- systems/sagedb
- systems/redshift
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: amzn-lsg
  resource: https://www.amazon.science/blog/building-systems-that-automatically-adjust-to-workloads-and-data
  title: 'Amazon Science: Building systems that automatically adjust to workloads and data (2022-11-03)'
---

# What happened

An Amazon Science article dated November 3, 2022 described Tim Kraska leading the company's new Learned Systems Group, with Redshift as its initial target for instance optimization.[^amzn-lsg] The date records the public account; it is not asserted to be the exact internal date on which every member joined.

# Why it matters

Our assessment is that the move changed the setting in which the research could be evaluated. Workload-specific optimization benefits from real execution histories and an operational place to apply decisions. A cloud service can offer both, while a standalone research prototype must construct its own evaluation environment. This creates an opportunity for learning to ship as a feature of an existing system rather than as a replacement database. The announcement establishes a team and an agenda; it does not show that every earlier SageDB component entered Redshift or that any particular performance target had already been achieved.

# Related

- [Sagedb](/systems/sagedb.md)
- [Redshift](/systems/redshift.md)
- [Instance Optimized Systems](/ideas/ml-for-db/instance-optimized-systems.md)
- [Learned Query Optimizers](/ideas/ml-for-db/learned-query-optimizers.md)

[^amzn-lsg]: [Amazon Science: Building systems that automatically adjust to workloads and data (2022-11-03)](https://www.amazon.science/blog/building-systems-that-automatically-adjust-to-workloads-and-data).
