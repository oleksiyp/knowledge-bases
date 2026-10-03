---
type: Event
title: "AI crawlers overload OSS infrastructure (SourceHut and others)"
description: "AI training crawlers ignoring robots.txt caused repeated outages at SourceHut and other OSS forges, spurring mass adoption of proof-of-work defenses like Anubis."
event_kind: other
date: 2025-03-17
window: W24
impact: negative
projects: [projects/security-sustainability/anubis]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: devault
    resource: https://drewdevault.com/blog/Stop-externalizing-your-costs-on-me/
    title: "Drew DeVault: Please stop externalizing your costs directly into my face"
  - id: anubis-gh
    resource: https://github.com/TecharoHQ/anubis
    title: "Anubis GitHub repository"
---
# What happened
SourceHut founder Drew DeVault reported spending 20–100% of his time fighting LLM crawlers that use randomized user agents and thousands of residential IPs. The crawlers caused "dozens of brief outages per week" and delayed planned work by weeks or months.[^devault]

# Why it matters
AI companies' data collection costs were being pushed onto volunteer-run infrastructure, a new sustainability cost for OSS.

# Outcome so far
Anubis (MIT, Xe Iaso) became the de facto defense, with about 23k stars by Oct 2026.[^anubis-gh]

# Related
- [Anubis](/projects/security-sustainability/anubis.md)

[^devault]: Drew DeVault: Please stop externalizing your costs directly into my face
[^anubis-gh]: Anubis GitHub repository
