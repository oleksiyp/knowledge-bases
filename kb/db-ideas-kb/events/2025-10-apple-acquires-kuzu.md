---
type: Event
title: Apple acquisition accompanies Kuzu upstream archival
description: Reporting on Apple's regulatory filing dates its agreement to acquire
  Kuzu to October 9, 2025. The project repository independently confirms that it was
  archived on October 10, 2025.
date: '2025-10-09'
year: 2025
kind: acquisition
signal: mixed
ideas:
- ideas/nosql-models/graph-databases
systems:
- systems/kuzu
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  resource: https://appleinsider.com/articles/26/02/11/faster-more-flexible-databases-could-be-coming-to-filemaker-or-iwork
  title: AppleInsider reporting on acquisition filing
- id: repo
  resource: https://github.com/kuzudb/kuzu
  title: Kuzu repository archive notice
---

# What happened

Reporting on Apple's regulatory filing dates its agreement to acquire Kuzu to October 9, 2025. The project repository independently confirms that it was archived on October 10, 2025.[^announcement][^repo]

# Why it matters

The company outcome and the user outcome differ. Acquisition can be positive for a team while an archived upstream creates maintenance work for users. Kuzu's permissive license allows continuation through forks, but it cannot guarantee the original team's ongoing participation.

The archive is directly observable; Apple's intended product integration and the purchase price are not established here. This event therefore supports a lesson about stewardship continuity rather than a claim that embedded graph analytics failed technically. The date records the reported agreement, not a separately verified closing date.

# Related

- [kuzu](/systems/kuzu.md)
- [graph databases](/ideas/nosql-models/graph-databases.md)
