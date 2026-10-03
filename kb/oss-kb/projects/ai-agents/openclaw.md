---
type: OSS Project
title: OpenClaw (formerly Clawdbot / Moltbot)
description: Self-hosted, always-on personal AI agent driven via WhatsApp/Telegram/Slack; the breakout OSS phenomenon of 2026 (≈391k GitHub stars, most-starred software repo) whose creator joined OpenAI while the project moved to a foundation — but also the year's biggest agent-security cautionary tale.
resource: https://github.com/openclaw/openclaw
tags: [ai-agents, personal-agent, mit, foundation-hosted, viral, security]
domain: ai-agents
license: MIT
license_history: ["MIT (2025-11-)"]
governance: foundation
steward: OpenClaw Foundation (supported by OpenAI)
backing_orgs: []
metrics:
  github_stars: { value: 391195, as_of: 2026-10-03 }
  github_forks: { value: 82229, as_of: 2026-10-03 }
  github_stars_early: { value: 247000, as_of: 2026-03-02 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: n/a }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: oc-gh
    resource: https://github.com/openclaw/openclaw
    title: OpenClaw GitHub repository (API stats 2026-10-03; created 2025-11-24; v2026.8.1 released 2026-08-31)
  - id: oc-wiki
    resource: https://en.wikipedia.org/wiki/OpenClaw
    title: "Wikipedia: OpenClaw"
  - id: oc-fortune
    resource: https://fortune.com/2026/02/15/openai-openclaw-ai-agent-developer-peter-steinberg-moltbot-clawdbot-moltbook/
    title: "Fortune: OpenAI hires OpenClaw developer Peter Steinberger"
    author: org:fortune
  - id: oc-cnbc
    resource: https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html
    title: "CNBC: From Clawdbot to Moltbot to OpenClaw"
    author: org:cnbc
  - id: oc-forbes
    resource: https://www.forbes.com/sites/ronschmelzer/2026/01/30/moltbot-molts-again-and-becomes-openclaw-pushback-and-concerns-grow/
    title: "Forbes: Moltbot gets another new name, OpenClaw, and triggers security fears and scams"
    author: org:forbes
  - id: oc-gitguardian
    resource: https://blog.gitguardian.com/moltbot-personal-assistant-goes-viral-and-so-do-your-secrets/
    title: "GitGuardian: OpenClaw (Moltbot) personal assistant goes viral — and so do your secrets"
  - id: flowise-sunset
    resource: https://flowiseai.com/sunset
    title: The Future of Flowise (sunset notice)
  - id: oc-foundation
    resource: https://openclaw.ai/blog/introducing-openclaw-foundation
    title: "OpenClaw Blog: Introducing the OpenClaw Foundation (2026-07-08)"
  - id: rundown-oc2
    resource: https://www.therundown.ai/tools/openclaw-2-0
    title: "The Rundown: OpenClaw 2.0 review (v2026.8.1)"
---

# Summary
OpenClaw is the defining open-source success story of 2026 in agents: a self-hosted "AI that really does things" assistant, first published by Austrian developer Peter Steinberger on 2025-11-24, that went viral in late January 2026 and now has ≈391k stars and 82k forks — the most-starred software repository on GitHub[^oc-gh][^oc-wiki]. It forced two renames (Clawdbot → Moltbot on 2026-01-27 after Anthropic trademark complaints, → OpenClaw on 2026-01-30)[^oc-wiki][^oc-forbes]. On 2026-02-14 Steinberger joined OpenAI and Sam Altman said OpenClaw would "live in a foundation as an open source project that OpenAI will continue to support"[^oc-fortune]. Verdict: OSS **thriving**, with serious, documented security and abuse problems; no standalone business (n/a).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-24 | First release (as "Warelay"/Clawdbot) by Peter Steinberger | OSS | + [^oc-wiki][^oc-gh] |
| W9 | 2026-01-24 | Goes viral: daily forks jump from ~50 to 3,000+; 17,830 stars in a single day reported | OSS | + [^oc-wiki][^oc-gitguardian] |
| W9 | 2026-01-27 | Renamed Moltbot after Anthropic trademark complaint; Moltbook (agent social network) launched by Matt Schlicht | OSS | ~ [^oc-wiki] |
| W9 | 2026-01-28/29 | Cisco researchers find third-party skills doing data exfiltration/prompt injection | OSS | − [^oc-wiki] |
| W9 | 2026-01-30 | Renamed OpenClaw; scams and security fears widely reported | OSS | ~ [^oc-forbes] |
| W9 | 2026-02-14 | Steinberger joins OpenAI; project to move to an OpenClaw Foundation with OpenAI support | Business/Gov | + [^oc-fortune][^oc-wiki] |
| W9 | 2026-03-02 | 247k stars, 47.7k forks | OSS | + [^oc-wiki] |
| W9 | 2026-03 | Chinese authorities restrict use by state agencies, SOEs and banks | OSS | − [^oc-wiki] |
| W3 | 2026-07-08 | OpenClaw Foundation launched as a 501(c)(3) (chair Dave Morin, chief steward Steinberger); partners OpenAI, NVIDIA, Microsoft, Tencent, Red Hat, GitHub and others; MIT license retained; ~4.5M new instances/week | Gov | + [^oc-foundation] |
| W3 | 2026-08-30/31 | OpenClaw 2.0 (v2026.8.1): ~16,000 merged PRs from 933 contributors; redesigned UI, shared team sessions | OSS | + [^oc-gh][^rundown-oc2] |
| W3 | 2026-10-03 | ≈391k stars; release v2026.9.8 same day | OSS | + [^oc-gh] |

# OSS successes
- Fastest star growth ever recorded for a software repo; 247k → 391k stars between March and October 2026[^oc-wiki][^oc-gh].
- Defined a new category (persistent-memory personal agent reachable from chat apps) and a skills/plugin ecosystem[^oc-wiki].
- Neutral home: foundation stewardship announced at the moment the founder left for OpenAI, avoiding the "abandoned solo project" failure mode[^oc-fortune].
- Cited by competitors as a reason low-code builders are obsolete — Flowise's sunset notice names "Claude Code/OpenClaw"[^flowise-sunset].

# OSS failures / risks
- Security: malicious third-party skills (exfiltration, prompt injection) found within days of virality[^oc-wiki]; GitGuardian counted 181 leaked secrets in Clawdbot/Moltbot-related repos, 65 still valid[^oc-gitguardian].
- Agent misbehaviour: iMessage spam incidents[^oc-fortune] and the "MoltMatch" dating-profile episode (Feb 2026)[^oc-wiki].
- Government restrictions in China (Mar 2026)[^oc-wiki].
- Trademark-driven renames created confusion and opened space for scams[^oc-forbes].
- Bus factor and influence: OpenAI's support plus the founder's employment raises questions about vendor neutrality.

# Business successes
- No company; the outcome was an acqui-hire-style move of the creator to OpenAI (Feb 2026)[^oc-fortune]. Hosting providers and cloud vendors built offerings around it.

# Business failures / risks
- n/a (no commercial entity). The foundation (Jul 2026) is donor-funded; OpenAI is a major donor and the University of Michigan the largest[^oc-foundation].

# By window
## W3
- OpenClaw Foundation launched (2026-07-08)[^oc-foundation]; OpenClaw 2.0 (2026-08-30/31)[^rundown-oc2]; still releasing near-daily in Oct 2026[^oc-gh].
## W6
- Continued growth toward ~350k stars; no single notable event verified.
## W9
- Viral explosion, two renames, Moltbook, skill-malware findings, creator joins OpenAI, foundation plan announced (formally launched Jul 8), China restrictions[^oc-wiki][^oc-fortune].
## W12
- Initial release 2025-11-24[^oc-gh].
## W24
- n/a (did not exist).

# Lessons
- Distribution beats sophistication: chat-app-native UX and local self-hosting created a mass-market OSS agent overnight.
- Plugin/skill marketplaces for agents are a supply-chain attack surface from day one.
- Labs now "acquire" OSS momentum by hiring the creator and sponsoring a foundation rather than buying a company.

# Related
- [/events/2026-01-openclaw-viral-renames.md](/events/2026-01-openclaw-viral-renames.md)
- [/events/2026-02-openclaw-creator-joins-openai.md](/events/2026-02-openclaw-creator-joins-openai.md)
- [/projects/ai-agents/flowise.md](/projects/ai-agents/flowise.md), [/projects/ai-agents/goose.md](/projects/ai-agents/goose.md), [/projects/ai-agents/model-context-protocol.md](/projects/ai-agents/model-context-protocol.md)

[^oc-gh]: https://github.com/openclaw/openclaw
[^oc-wiki]: https://en.wikipedia.org/wiki/OpenClaw
[^oc-fortune]: https://fortune.com/2026/02/15/openai-openclaw-ai-agent-developer-peter-steinberg-moltbot-clawdbot-moltbook/
[^oc-cnbc]: https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html
[^oc-forbes]: https://www.forbes.com/sites/ronschmelzer/2026/01/30/moltbot-molts-again-and-becomes-openclaw-pushback-and-concerns-grow/
[^oc-gitguardian]: https://blog.gitguardian.com/moltbot-personal-assistant-goes-viral-and-so-do-your-secrets/
[^flowise-sunset]: https://flowiseai.com/sunset
[^oc-foundation]: OpenClaw blog, 2026-07-08.
[^rundown-oc2]: The Rundown AI, Sept 2026.
