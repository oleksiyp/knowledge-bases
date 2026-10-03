---
type: OSS Project
title: GitHub (platform)
description: "Microsoft-owned home of most open source; commercially booming on Copilot (4.7M paid subscribers, Jan 2026) but lost its independence when CEO Thomas Dohmke left and GitHub was folded into Microsoft CoreAI (Aug 2025), then suffered an AI-traffic reliability crisis, a self-hosted-runner pricing reversal, AI-slop PR floods and a May 2026 breach of ~3,800 internal repos."
resource: https://github.com
tags: [code-hosting, forge, proprietary-platform, microsoft, copilot, ci-cd]
domain: devtools-languages
license: proprietary
license_history: ["Proprietary SaaS (hosts OSS; Actions runner, CLI and some components are MIT)"]
governance: single-vendor
steward: Microsoft (CoreAI division since Aug 2025)
backing_orgs: []
metrics:
  copilot_paid_subscribers: { value: 4700000, as_of: 2026-01-28 }
oss_verdict: contested
business_verdict: thriving
momentum_by_window: { W3: flat, W6: down, W9: down, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-dohmke
    resource: https://techcrunch.com/2025/08/11/github-ceo-to-step-down/
    title: "TechCrunch: GitHub CEO to step down (2025-08-11)"
    author: org:techcrunch
  - id: geekwire-coreai
    resource: https://www.geekwire.com/2025/github-will-join-microsofts-coreai-group-with-departure-of-ceo-thomas-dohmke/
    title: "GeekWire: GitHub will join Microsoft's CoreAI division with departure of CEO Thomas Dohmke"
    author: org:geekwire
  - id: msft-q2fy26
    resource: https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q2
    title: "Microsoft FY2026 Q2 earnings call (2026-01-28): 4.7M paid GitHub Copilot subscribers, +75% YoY"
    author: org:microsoft
  - id: gh-actions-pricing
    resource: https://github.com/orgs/community/discussions/182186
    title: "GitHub Community: Updates to GitHub Actions pricing (Dec 2025)"
    author: org:github
  - id: winbuzzer-runners
    resource: https://winbuzzer.com/2025/12/18/github-postpones-self-hosted-action-runner-fees-following-community-revolt-xcxwbn/
    title: "WinBuzzer: GitHub postpones self-hosted Action runner fees following community revolt (2025-12-18)"
  - id: reg-killswitch
    resource: https://www.theregister.com/2026/02/03/github_kill_switch_pull_requests_ai/
    title: "The Register: GitHub ponders kill switch for pull requests to stop AI slop (2026-02-03)"
    author: org:the-register
  - id: reg-outages
    resource: https://www.theregister.com/software/2026/06/12/github-outages-persist-as-ai-coding-drives-traffic-surge/5255125
    title: "The Register: GitHub outages persist as AI coding drives traffic surge (2026-06-12)"
    author: org:the-register
  - id: winbuzzer-aws
    resource: https://winbuzzer.com/2026/06/19/microsoft-may-use-aws-as-ai-coding-demand-strains-github-xcxwbn/
    title: "WinBuzzer: Microsoft turns to AWS cloud as AI coding demand strains GitHub (2026-06-19, citing Business Insider)"
  - id: thn-breach
    resource: https://thehackernews.com/2026/05/github-internal-repositories-breached.html
    title: "The Hacker News: GitHub internal repositories breached via malicious Nx Console VS Code extension (May 2026)"
    author: org:the-hacker-news
  - id: infosec-breach
    resource: https://www.infosecurity-magazine.com/news/github-breach-nx-console-vs-code/
    title: "Infosecurity Magazine: GitHub breach traced to malicious 'Nx Console' VS Code extension"
  - id: heise-openai
    resource: https://www.heise.de/en/news/Report-OpenAI-working-on-an-alternative-to-GitHub-11201652.html
    title: "heise: Report — OpenAI working on an alternative to GitHub (March 2026, citing The Information)"
    author: org:heise
  - id: thn-actions-sept
    resource: https://thehackernews.com/2026/09/compromised-github-actions-came-back.html
    title: "The Hacker News: Compromised GitHub Actions came back online and resumed executing Mini Shai-Hulud malware (Sept 2026)"
    author: org:the-hacker-news
  - id: gh-changelog-sep
    resource: https://github.blog/changelog/month/09-2026/
    title: "GitHub Changelog, September 2026"
    author: org:github
  - id: zig-codeberg
    resource: https://ziglang.org/news/migrating-from-github-to-codeberg/
    title: "ziglang.org: Migrating from GitHub to Codeberg (2025-11-26)"
    author: org:zig-software-foundation
---

# Summary
GitHub is not open source, but it is the infrastructure most open source depends on, and 2025–26 changed its character. On 2025-08-11 CEO Thomas Dohmke announced his departure and Microsoft folded GitHub into its CoreAI division under Jay Parikh, ending ~7 years of operational independence[^tc-dohmke][^geekwire-coreai]. Commercially it is booming — 4.7M paid Copilot subscribers (+75% YoY) by January 2026[^msft-q2fy26] — but AI agents drove a traffic explosion (1.4B commits per month vs ~1B per year previously) that, combined with an accelerated Azure migration, produced repeated outages through mid-2026; Microsoft added AWS capacity in June 2026[^reg-outages][^winbuzzer-aws]. A proposed per-minute fee on self-hosted Actions runners was withdrawn within ~48 hours (Dec 2025)[^winbuzzer-runners], maintainers demanded tools against AI-generated "slop" PRs[^reg-killswitch], and in May 2026 attackers exfiltrated ~3,800 internal repos via a poisoned Nx Console extension[^thn-breach]. Verdict: business thriving; standing with the open-source community contested (Zig, others left for Codeberg[^zig-codeberg]).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-11 | Dohmke to step down; GitHub moves into Microsoft CoreAI [^tc-dohmke][^geekwire-coreai] | Business | − |
| W12 | 2025-11-26 | Zig leaves GitHub for Codeberg citing decline, Actions and Copilot pushes [^zig-codeberg] | OSS | − |
| W12 | 2025-12 (mid) | Announces $0.002/min platform fee for self-hosted runners from 2026-03-01; postponed ~2 days later after backlash; hosted-runner price cuts proceed [^gh-actions-pricing][^winbuzzer-runners] | Business | − |
| W9 | 2026-01-28 | Microsoft: 4.7M paid Copilot subscribers, +75% YoY [^msft-q2fy26] | Business | + |
| W9 | 2026-02-03 | GitHub weighs PR "kill switch"; lets maintainers disable/restrict PRs amid AI slop [^reg-killswitch] | OSS | ± |
| W9 | 2026-03 | Report: OpenAI building a GitHub alternative after outages [^heise-openai] | Business | − |
| W6 | 2026-05-18 | Poisoned Nx Console extension (live 18 min) compromises employee device; ~3,800 internal repos exfiltrated by TeamPCP (confirmed ~05-20) [^thn-breach][^infosec-breach] | Security | − |
| W6 | 2026-06-12 | Outages persist: 26/23 status incidents in Apr/May; Azure serves 40% of monolith traffic [^reg-outages] | OSS | − |
| W6 | 2026-06 | Microsoft adds AWS capacity for GitHub (multi-cloud) [^winbuzzer-aws] | Business | ± |
| W3 | 2026-09-16 | Previously compromised Actions re-enabled and resume running Mini Shai-Hulud malware [^thn-actions-sept] | Security | − |
| W3 | 2026-09 | Copilot adds multi-model orchestration, new frontier models; Actions control features [^gh-changelog-sep] | Business | + |

# OSS successes
- Hosted-runner price cuts (Jan 2026) and new maintainer controls over PRs.[^winbuzzer-runners][^reg-killswitch]
- Still the default forge; continuing investment in supply-chain features (npm trusted publishing, token permissions).[^gh-changelog-sep]

# OSS failures / risks
- Reliability crisis: unofficial uptime ~87% over 90 days to June 2026.[^reg-outages]
- AI-generated PR floods impose costs on maintainers; GitHub's own Copilot features are part of the problem.[^reg-killswitch]
- Security incidents: internal repo breach and Actions-based worm campaigns.[^thn-breach][^thn-actions-sept]
- Values-driven departures to Codeberg/Forgejo.[^zig-codeberg]

# Business successes
- Copilot is one of the largest AI developer products by paid seats.[^msft-q2fy26]

# Business failures / risks
- Loss of independence inside CoreAI; strategy now subordinate to Microsoft's AI agenda.[^geekwire-coreai]
- Pricing missteps (self-hosted runner fee) damaged trust.[^winbuzzer-runners]
- Large customers (OpenAI) reportedly building alternatives.[^heise-openai]

# By window
## W3
- Actions-based Mini Shai-Hulud resurgence; Copilot multi-model features.[^thn-actions-sept][^gh-changelog-sep]
## W6
- Internal-repo breach (May 2026); outage streak and AWS capacity deal.[^thn-breach][^reg-outages][^winbuzzer-aws]
## W9
- 4.7M Copilot subscribers; PR kill-switch debate; OpenAI alternative report.[^msft-q2fy26][^reg-killswitch][^heise-openai]
## W12
- Zig departs; self-hosted runner fee announced and postponed.[^zig-codeberg][^winbuzzer-runners]
## W24
- Dohmke exit; CoreAI integration.[^tc-dohmke]

# Lessons
- AI agents are a new load class: platforms priced and provisioned for humans broke under agent-generated commits and PRs.
- Centralization of open source on one corporate forge is now a recognized risk; forge choice became a values statement.
- Pricing changes to "free" infrastructure (runners) trigger instant backlash; reversals cost credibility.

# Related
- [Forgejo and Codeberg](/projects/devtools-languages/forgejo.md)
- [GitLab Community Edition](/projects/devtools-languages/gitlab-ce.md)
- [npm registry](/projects/devtools-languages/npm-registry.md)
- [GitHub CEO departs; GitHub folded into CoreAI](/events/2025-08-github-ceo-departs-coreai.md)
- [GitHub internal repositories breach](/events/2026-05-github-internal-repos-breach.md)
- [TanStack / Mini Shai-Hulud](/events/2026-05-tanstack-mini-shai-hulud.md)
- [Nx s1ngularity attack](/events/2025-08-nx-s1ngularity-attack.md)

[^tc-dohmke]: TechCrunch, 2025-08-11.
[^geekwire-coreai]: GeekWire, Aug 2025.
[^msft-q2fy26]: Microsoft investor relations, 2026-01-28.
[^gh-actions-pricing]: GitHub Community discussion #182186.
[^winbuzzer-runners]: WinBuzzer, 2025-12-18.
[^reg-killswitch]: The Register, 2026-02-03.
[^reg-outages]: The Register, 2026-06-12.
[^winbuzzer-aws]: WinBuzzer, 2026-06-19.
[^thn-breach]: The Hacker News, May 2026.
[^infosec-breach]: Infosecurity Magazine.
[^heise-openai]: heise, March 2026.
[^thn-actions-sept]: The Hacker News, Sept 2026.
[^gh-changelog-sep]: GitHub Changelog.
[^zig-codeberg]: ziglang.org, 2025-11-26.
