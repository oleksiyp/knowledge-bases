---
type: Event
title: The xz release backdoor is disclosed
description: Andres Freund disclosed a backdoor affecting xz Utils 5.6.0 and 5.6.1.
event_kind: incident
date: '2024-03-29'
date_precision: day
era: E3
impact: negative
tags:
- security
languages: []
runtimes: []
ideas:
- ideas/tooling-and-ecosystem/package-registry-supply-chain
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: The xz release backdoor is disclosed
  resource: https://www.openwall.com/lists/oss-security/2024/03/29/4
---

# What happened
Andres Freund disclosed a backdoor affecting xz Utils 5.6.0 and 5.6.1. His report traced suspicious behavior to compromised release and build machinery.[^announcement]

# Why it matters
**Interpretation:** reviewing repository source is insufficient when distributed release artifacts or build inputs differ. Provenance and reproducibility address important parts of that gap; neither alone proves the source is benign.

# Related
- [Supply-chain security](/ideas/tooling-and-ecosystem/package-registry-supply-chain.md)

[^announcement]: The xz release backdoor is disclosed — https://www.openwall.com/lists/oss-security/2024/03/29/4
