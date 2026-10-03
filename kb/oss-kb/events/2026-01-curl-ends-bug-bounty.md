---
type: Event
title: "curl ends its bug bounty, citing AI slop"
description: "curl terminated its HackerOne bug bounty effective 2026-01-31 after confirmed-vulnerability rates fell below 5% amid AI-generated reports."
event_kind: governance
date: 2026-01-26
window: W9
impact: mixed
projects: [projects/security-sustainability/curl]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: curl-jan
    resource: https://daniel.haxx.se/blog/2026/01/
    title: "daniel.haxx.se January 2026: The end of the curl bug-bounty"
  - id: curl-moves-again
    resource: https://daniel.haxx.se/blog/2026/02/25/curl-security-moves-again/
    title: "daniel.haxx.se: curl security moves again (2026-02-25)"
    author: person:daniel-stenberg
  - id: curl-jan-post
    resource: https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/
    title: "daniel.haxx.se: The end of the curl bug-bounty (2026-01-26)"
    author: person:daniel-stenberg
  - id: curl-bliss
    resource: https://daniel.haxx.se/blog/2026/08/03/what-the-bliss-taught-us/
    title: "daniel.haxx.se: What the bliss taught us"
---
# What happened
Daniel Stenberg announced the end of the bounty on 2026-01-26, effective 01-31. Confirmed rates had dropped from more than 15% to under 5% in 2025. The program had paid more than $100k for 87 vulnerabilities since 2019. Reports initially moved to GitHub private vulnerability reporting.[^curl-jan][^curl-jan-post] That proved a mistake: from 2026-03-01 curl took security reports on HackerOne again, still with no monetary rewards.[^curl-moves-again]

# Why it matters
It was a bellwether: AI-generated reports can make paying for findings pointless.

# Outcome so far
curl then paused vulnerability intake for all of July 2026 with good results.[^curl-bliss] Node.js also ended its bounty, and OpenJS created a pooled replacement in Sep 2026.

# Related
- [curl](/projects/security-sustainability/curl.md), [OpenJS CNA pause](/events/2026-09-openjs-cna-pause-security-stewardship.md)

[^curl-jan]: daniel.haxx.se January 2026: The end of the curl bug-bounty
[^curl-bliss]: daniel.haxx.se: What the bliss taught us
[^curl-moves-again]: daniel.haxx.se, 2026-02-25.
[^curl-jan-post]: daniel.haxx.se, 2026-01-26.
