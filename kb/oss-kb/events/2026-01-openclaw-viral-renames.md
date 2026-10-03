---
type: Event
title: OpenClaw goes viral and is renamed twice in a week
description: The self-hosted personal agent Clawdbot exploded on GitHub in late January 2026, was renamed Moltbot after Anthropic trademark complaints and then OpenClaw, amid malware-laden skills and leaked secrets.
event_kind: other
date: 2026-01-27
window: W9
impact: mixed
projects: [projects/ai-agents/openclaw]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: oc-wiki
    resource: https://en.wikipedia.org/wiki/OpenClaw
    title: "Wikipedia: OpenClaw"
  - id: oc-foundation
    resource: https://www.forkable.io/p/openclaw-is-now-a-non-profit-foundation
    title: "Forkable: OpenClaw is now a non-profit foundation (501(c)(3), announced 2026-07-08)"
  - id: oc-release-2
    resource: https://github.com/openclaw/openclaw/releases/tag/release-publish/728084497329-20260801
    title: "GitHub: OpenClaw release v2026.8.1 (OpenClaw 2.0, Aug 2026)"
    author: org:openclaw
  - id: oc-forbes
    resource: https://www.forbes.com/sites/ronschmelzer/2026/01/30/moltbot-molts-again-and-becomes-openclaw-pushback-and-concerns-grow/
    title: "Forbes: Moltbot gets another new name, OpenClaw"
  - id: oc-gitguardian
    resource: https://blog.gitguardian.com/moltbot-personal-assistant-goes-viral-and-so-do-your-secrets/
    title: "GitGuardian: Moltbot goes viral — and so do your secrets"
  - id: oc-cnbc
    resource: https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html
    title: "CNBC: From Clawdbot to Moltbot to OpenClaw"
---

# What happened
Around 2026-01-24 daily GitHub forks of Clawdbot jumped from ~50 to 3,000+; on 2026-01-27 it was renamed Moltbot after Anthropic trademark complaints (and Moltbook, a social network for agents, launched), and on 2026-01-30 it became OpenClaw[^oc-wiki][^oc-forbes]. Cisco researchers found third-party skills performing exfiltration and prompt injection (Jan 28–29)[^oc-wiki], and GitGuardian found 181 leaked secrets in related repos, 65 still valid[^oc-gitguardian].

# Why it matters
The fastest-growing open-source project ever also became the first mass-market demonstration of agent supply-chain and credential risks[^oc-cnbc].

# Outcome so far
OpenClaw reached 247k stars by March and ~390k by late Sept 2026[^oc-wiki]. After its creator joined OpenAI, the project moved to the OpenClaw Foundation, launched on 8 July 2026 as a US 501(c)(3) non-profit led by executive director Dave Morin, with a full-time staff and sponsors including OpenAI, GitHub, NVIDIA and Microsoft[^oc-foundation].

# Related
- [/projects/ai-agents/openclaw.md](/projects/ai-agents/openclaw.md), [/events/2026-02-openclaw-creator-joins-openai.md](/events/2026-02-openclaw-creator-joins-openai.md)

[^oc-wiki]: https://en.wikipedia.org/wiki/OpenClaw
[^oc-forbes]: https://www.forbes.com/sites/ronschmelzer/2026/01/30/moltbot-molts-again-and-becomes-openclaw-pushback-and-concerns-grow/
[^oc-gitguardian]: https://blog.gitguardian.com/moltbot-personal-assistant-goes-viral-and-so-do-your-secrets/
[^oc-cnbc]: https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html
[^oc-foundation]: Forkable, July 2026.
[^oc-release-2]: GitHub release, Aug 2026.
