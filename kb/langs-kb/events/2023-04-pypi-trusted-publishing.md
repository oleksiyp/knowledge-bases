---
type: Event
title: PyPI introduces Trusted Publishing
description: PyPI introduced Trusted Publishing using OpenID Connect to authenticate supported publishing workflows
  with short-lived credentials instead of long-lived API tokens..
event_kind: release
date: '2023-04-20'
date_precision: day
era: E3
impact: positive
tags:
- release
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
  title: PyPI introduces Trusted Publishing
  resource: https://blog.pypi.org/posts/2023-04-20-introducing-trusted-publishers/
---

# What happened
PyPI introduced Trusted Publishing using OpenID Connect to authenticate supported publishing workflows with short-lived credentials instead of long-lived API tokens.[^announcement]

# Why it matters
**Interpretation:** removing stored publishing secrets reduces one class of credential exposure. It does not review package behavior or prevent compromise of an authorized build workflow.

# Related
- [Package registry security](/ideas/tooling-and-ecosystem/package-registry-supply-chain.md)

[^announcement]: PyPI introduces Trusted Publishing — https://blog.pypi.org/posts/2023-04-20-introducing-trusted-publishers/
