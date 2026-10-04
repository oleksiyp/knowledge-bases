---
type: Event
title: Linux 6.12 includes sched_ext
description: Linux 6.12 included sched_ext, allowing BPF programs to implement scheduling policies.
event_kind: release
date: 2024-11
date_precision: month
era: E4
impact: positive
tags:
- release
languages: []
runtimes: []
ideas:
- ideas/platforms-and-portability/ebpf-as-a-runtime
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: Linux 6.12 includes sched_ext
  resource: https://www.kernel.org/doc/html/v6.12/scheduler/sched-ext.html
---

# What happened
Linux 6.12 included sched_ext, allowing BPF programs to implement scheduling policies. Its documentation describes fallback behavior and explicitly warns that its interface is not stable.[^announcement]

# Why it matters
**Interpretation:** this expands programmable kernel policy without making all kernel interfaces portable or permanent. Operational recovery and interface evolution remain part of the design.

# Related
- [eBPF as a runtime](/ideas/platforms-and-portability/ebpf-as-a-runtime.md)

[^announcement]: Linux 6.12 includes sched_ext — https://www.kernel.org/doc/html/v6.12/scheduler/sched-ext.html
