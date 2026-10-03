---
type: Event
title: chardet rewritten with an AI agent and relicensed from LGPL to MIT
description: "In March 2026 chardet's maintainer released a ground-up 7.0.0 rewrite built with Claude Code under MIT instead of LGPL; original author Mark Pilgrim objected, making it the test case for AI 'clean-room' relicensing."
event_kind: license-change
date: 2026-03-05
window: W9
impact: mixed
projects: []
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: willison-chardet
    resource: https://simonwillison.net/2026/Mar/5/chardet/
    title: "Simon Willison: Can coding agents relicense open source through a 'clean room' implementation? (2026-03-05)"
  - id: chardet-issue
    resource: https://github.com/chardet/chardet/issues/327
    title: "chardet issue #327: No right to relicense this project (2026-03-05)"
  - id: phoronix-chardet
    resource: https://www.phoronix.com/news/Chardet-LLM-Rewrite-Relicense
    title: "Phoronix: LLM-driven large code rewrites with relicensing are the latest AI concern (2026-03-08)"
  - id: sentry-ai-age
    resource: https://blog.sentry.io/fair-source-software-in-the-ai-age/
    title: "Sentry: Fair Source software in the AI age (2026-03-17)"
---

# What happened
Long-time maintainer Dan Blanchard released chardet 7.0.0, a ground-up rewrite made with Claude Code, under MIT instead of the original LGPL. Original author Mark Pilgrim opened issue #327 ("No right to relicense this project") on Mar 5, 2026, arguing that the maintainer had "ample exposure" to the LGPL code.[^willison-chardet][^chardet-issue] Open-source lawyer Richard Fontana said he saw "no basis for concluding that chardet 7.0.0 is required to be released under the LGPL".[^willison-chardet]

# Why it matters
If AI agents can cheaply reimplement copyleft code, copyleft protects much less. That affects how AGPL relicensings (Redis, Elastic, Grafana) and license-based business models hold up. Sentry used the case to argue that contract-based Fair Source licenses are more robust.[^sentry-ai-age][^phoronix-chardet]

# Outcome so far
No court ruling. The issue drew 535 HN points and has become the reference case in the debate.

# Related
- [Sentry / Fair Source](/projects/licensing-forks/sentry.md)
- [Licensing & forks domain review](/domains/licensing-forks.md)

[^willison-chardet]: Simon Willison — https://simonwillison.net/2026/Mar/5/chardet/
[^chardet-issue]: GitHub — https://github.com/chardet/chardet/issues/327
[^phoronix-chardet]: Phoronix — https://www.phoronix.com/news/Chardet-LLM-Rewrite-Relicense
[^sentry-ai-age]: Sentry blog — https://blog.sentry.io/fair-source-software-in-the-ai-age/
