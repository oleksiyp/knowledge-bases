---
type: Event
title: Shai-Hulud propagates through npm packages
description: Security researchers documented Shai-Hulud, a campaign that compromised npm packages and used stolen
  credentials to propagate through additional publishing accounts..
event_kind: incident
date: '2025-09-16'
date_precision: day
era: E4
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
  title: Shai-Hulud propagates through npm packages
  resource: https://www.sysdig.com/blog/shai-hulud-the-novel-self-replicating-worm-infecting-hundreds-of-npm-packages
---

# What happened
Security researchers documented Shai-Hulud, a campaign that compromised npm packages and used stolen credentials to propagate through additional publishing accounts.[^announcement]

# Why it matters
**Interpretation:** registry credentials can let a compromise spread beyond its original repository. Defenses need to address publishing authority and installation-time execution, not only direct source dependencies.

# Related
- [Package supply chains](/ideas/tooling-and-ecosystem/package-registry-supply-chain.md)

[^announcement]: Shai-Hulud propagates through npm packages — https://www.sysdig.com/blog/shai-hulud-the-novel-self-replicating-worm-infecting-hundreds-of-npm-packages
