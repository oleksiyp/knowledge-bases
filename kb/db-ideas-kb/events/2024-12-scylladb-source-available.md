---
type: Event
title: "ScyllaDB ends its AGPL open-source edition"
description: "In Dec 2024 ScyllaDB said it would ship a single source-available ScyllaDB Enterprise release from 2025.1, free up to 50 vCPU and 10 TB, ending the AGPL edition with 6.2 as the last open-source release."
date: 2024-12-18
year: 2024
kind: license-change
signal: negative
ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/return-to-agpl]
systems: [systems/scylladb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: scylla-forum
    resource: "https://forum.scylladb.com/t/scylladb-source-available-licensing/4214"
    title: "ScyllaDB forum: ScyllaDB source available licensing (Dec 2024)"
  - id: scylla-faq
    resource: "https://www.scylladb.com/source-available-faq/"
    title: "ScyllaDB: Shift to source-available licensing FAQ"
  - id: zaitsev
    resource: "https://peterzaitsev.com/thoughts-on-scylladb-license-change/"
    title: "Peter Zaitsev: Thoughts on ScyllaDB license change"
---

# What happened

ScyllaDB announced it would stop maintaining separate open-source (AGPL) and enterprise editions. ScyllaDB OSS 6.2 became the last AGPL release. From ScyllaDB Enterprise 2025.1 there is one release stream under the ScyllaDB Source Available License, free for production up to 50 vCPUs and 10 TB of storage per organization.[^scylla-forum][^scylla-faq]

# Why it matters

It ran against the 2024–2025 trend, where Elastic and Redis moved back toward AGPL. It shows the difference between projects with a broad contributor base and single-vendor projects. No significant fork appeared, since nearly all code was ScyllaDB's own. Percona co-founder Peter Zaitsev was among the critics.[^zaitsev]

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [ScyllaDB](/systems/scylladb.md)

[^scylla-forum]: ScyllaDB forum: ScyllaDB source available licensing (Dec 2024).
[^scylla-faq]: ScyllaDB: Shift to source-available licensing FAQ.
[^zaitsev]: Peter Zaitsev: Thoughts on ScyllaDB license change.
