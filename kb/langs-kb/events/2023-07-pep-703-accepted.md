---
type: Event
title: Python’s council signals conditional acceptance of PEP 703
description: Python’s Steering Council announced its intention to accept PEP 703, subject to a gradual rollout and
  the ability to reverse course.
event_kind: proposal-accepted
date: '2023-07-28'
date_precision: day
era: E3
impact: positive
tags:
- decision
languages: []
runtimes: []
ideas:
- ideas/concurrency/gil-removal-free-threading
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: Python’s council signals conditional acceptance of PEP 703
  resource: https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
---

# What happened
Python’s Steering Council announced its intention to accept PEP 703, subject to a gradual rollout and the ability to reverse course. The proposal made the GIL optional in a separate build configuration.[^announcement]

# Why it matters
**Interpretation:** this was a governance milestone, not a release that removed the GIL for every Python user. Compatibility, performance and ecosystem migration remained conditions of the transition.

# Related
- [Free-threading](/ideas/concurrency/gil-removal-free-threading.md)

[^announcement]: Python’s council signals conditional acceptance of PEP 703 — https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
