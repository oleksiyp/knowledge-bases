---
type: Event
title: Apache MADlib retirement decision recorded
description: MADlib’s Attic tracking records a September 2026 termination decision after a retirement vote; implementation
  of retirement and proposed revival remain distinct lifecycle steps.
date: '2026-09-16'
year: 2026
kind: discontinuation
signal: negative
ideas:
- ideas/ml-for-db/in-database-ml
systems:
- systems/madlib
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: madlib-vote
  resource: http://www.mail-archive.com/dev@madlib.apache.org/msg05081.html
  title: 'dev@madlib.apache.org: [RESULT][VOTE] Moving to the Attic (2026-09-03)'
- id: madlib-attic-pr
  resource: https://github.com/apache/attic/pull/60
  title: 'apache/attic PR #60: Retire madlib'
- id: revive
  resource: http://www.mail-archive.com/dev@madlib.apache.org/msg05082.html
  title: MADlib revival discussion, September 2026
---

# What happened

The MADlib community recorded a vote to move the project to the Attic in early September 2026. The Apache Attic tracking pull request records a board termination decision on September 16.[^madlib-vote][^madlib-attic-pr] The same research record contains a late-September discussion about re-establishing the PMC.[^revive] A decision to retire, completion of the Attic migration and a successful revival are separate events.

# Why it matters

Our assessment is that the episode demonstrates a maintenance and governance failure for this project, not a general failure of running ML near relational data. An open-source library depends on people who can review changes, maintain compatibility and fulfill project obligations. Preserving code does not automatically preserve those activities. The revival discussion matters because the lifecycle was still contested around the research cutoff; this page does not claim that a proposal to restart had already restored the project, or that an open tracking pull request meant retirement had never been decided.

# Related

- [Madlib](/systems/madlib.md)
- [In Database Ml](/ideas/ml-for-db/in-database-ml.md)

[^madlib-vote]: [dev@madlib.apache.org: [RESULT][VOTE] Moving to the Attic (2026-09-03)](http://www.mail-archive.com/dev@madlib.apache.org/msg05081.html).
[^madlib-attic-pr]: [apache/attic PR #60: Retire madlib](https://github.com/apache/attic/pull/60).
[^revive]: [MADlib revival discussion, September 2026](http://www.mail-archive.com/dev@madlib.apache.org/msg05082.html).
