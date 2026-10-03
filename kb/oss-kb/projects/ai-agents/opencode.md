---
type: OSS Project
title: OpenCode
description: Open-source, provider-agnostic terminal coding agent from the SST team (now Anomaly); the breakout coding-agent OSS project of 2025–26, reaching ~211k GitHub stars and becoming the main open alternative to Claude Code.
resource: https://github.com/anomalyco/opencode
tags: [ai-agents, coding-agent, terminal, mit, company-led-open-core]
domain: ai-agents
license: MIT
license_history: ["MIT (2025-)"]
governance: company-led-open-core
steward: Anomaly Innovations (formerly SST)
backing_orgs: [organizations/anomaly-innovations]
metrics:
  github_stars: { value: 211526, as_of: 2026-10-03 }
  github_forks: { value: 28078, as_of: 2026-10-03 }
  monthly_active_users: { value: 13000000, as_of: 2026-06-30 }
  weekly_active_users: { value: 4600000, as_of: 2026-06-30 }
  tokens_per_day: { value: "7 trillion", as_of: 2026-07-24 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: oc-gh
    resource: https://github.com/anomalyco/opencode
    title: OpenCode GitHub repository (moved from sst/opencode; created 2025-04-30; API stats 2026-10-03)
  - id: dax-rename
    resource: https://x.com/thdxr/status/2007199285251842478
    title: "dax (Dax Raad) on X: rebranding under 'anomaly', repo now anomalyco/opencode"
  - id: aiwiki-opencode
    resource: https://aiwiki.ai/wiki/opencode
    title: "AI Wiki: opencode (SST) — secondary source for usage/revenue estimates"
  - id: dd-opencode
    resource: https://www.developersdigest.tech/blog/opencode-developer-guide-2026
    title: "Developers Digest: OpenCode developer guide (2026)"
  - id: tfn-opencode
    resource: https://techfundingnews.com/opencode-the-background-story-on-the-most-popular-open-source-coding-agent-in-the-world/
    title: "Tech Funding News: OpenCode — the background story on the most popular open source coding agent (2026-01-13)"
  - id: yc-lightcone
    resource: https://www.ycombinator.com/library/TJ-opencode-ceo-getting-blocked-20x-growth-in-6-months-building-the-open-harness
    title: "Y Combinator Lightcone: OpenCode CEO — Getting blocked, 20x growth in 6 months, building the open harness (2026-07)"
    author: org:y-combinator
  - id: shub-opencode
    resource: https://www.startuphub.ai/ai-news/startup-news/2026/opencode-ceo-on-20x-growth-ai-agent-market
    title: "StartupHub.ai: OpenCode CEO on 20x growth (2026-07-24; summary of Lightcone interview)"
  - id: snowmaker-tokens
    resource: https://x.com/snowmaker/status/2080667637861011924
    title: "Jared Friedman (YC) on X: OpenCode processes 7 trillion tokens per day"
  - id: anthropic-oauth-block
    resource: https://mlq.ai/news/anthropic-ends-paid-access-for-claude-in-third-party-tools-like-openclaw/
    title: "MLQ: Anthropic ends paid (subscription) access for Claude in third-party tools (2026-04)"
---

# Summary
OpenCode is a terminal-first, model-agnostic coding agent (TUI + server + desktop/IDE clients) built by the team behind the SST framework. Created on 2025-04-30, it moved from `sst/opencode` to `anomalyco/opencode` when the company rebranded to its legal name, Anomaly, in early January 2026[^oc-gh][^dax-rename]. It reached ~211.5k stars and 28k forks by 2026-10-03 — among the most-starred developer tools on GitHub — and is the default open-source alternative to Claude Code[^oc-gh]. Usage exploded in 2026: 650k MAU in Jan[^tfn-opencode] → ~13M MAU and 4.6M WAU by end-June, processing ~7T tokens/day, per CEO Jay V on YC's Lightcone podcast (Jul 2026)[^yc-lightcone][^shub-opencode][^snowmaker-tokens]. Growth was helped, not hurt, by Anthropic blocking Claude subscription OAuth in third-party harnesses (Jan–Apr 2026)[^anthropic-oauth-block][^yc-lightcone]. Revenue comes mainly from OpenCode Zen hosted models; figures are not officially disclosed (secondary estimates range ~$25M in May to ~$40–58M annualized by July 2026 — unconfirmed)[^aiwiki-opencode][^tfn-opencode]. Verdict: OSS **thriving**; business **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-30 | Repo created under sst | OSS | + [^oc-gh] |
| W12 | 2026-01-02 | Company rebrands as Anomaly; repo moves to anomalyco/opencode | Business | ~ [^dax-rename] |
| W9 | 2026-01-08/09 | Anthropic blocks Claude subscription OAuth in OpenCode; formalised in ToS (Feb 19) and enforced for all third-party harnesses (Apr 4) | Business | mixed [^anthropic-oauth-block] |
| W9 | 2026-01-13 | ~650k MAU; "several million" annualized revenue from OpenCode Zen | Business | + [^tfn-opencode] |
| W9 | 2026-02 | ~112k stars (reported) | OSS | + [^aiwiki-opencode] |
| W6 | 2026-05 | ~8M MAU, ~$25M annualized revenue (secondary estimate, unconfirmed) | Business | + [^aiwiki-opencode] |
| W6 | 2026-06-30 | ~13M MAU, 4.6M WAU (CEO, Lightcone) | OSS/Business | + [^yc-lightcone][^shub-opencode] |
| W3 | 2026-07-24 | Lightcone interview: ~7T tokens/day, "more than all of OpenRouter" | Business | + [^shub-opencode][^snowmaker-tokens] |
| W3 | 2026-10-03 | 211.5k stars | OSS | + [^oc-gh] |

# OSS successes
- Star count roughly doubled Feb→Sep 2026[^aiwiki-opencode][^oc-gh]; 28k forks indicate heavy customization.
- Provider-agnostic design plus client/server architecture made it the base for many derivative agents.
# OSS failures / risks
- Dependence on access to frontier models via third-party subscriptions; any provider policy changes on subscription use hit OpenCode directly.
# Business successes
- Monetization via OpenCode Zen hosted models — "several million" ARR by Jan 2026[^tfn-opencode]; tens of millions by mid-2026 per secondary estimates.
# Business failures / risks
- No disclosed priced round (only an undisclosed pre-seed); revenue numbers beyond Jan 2026 are unconfirmed estimates.
- Dependence on model providers' terms: Anthropic's 2026 OAuth block[^anthropic-oauth-block].

# By window
## W3
- 13M MAU / 7T tokens per day disclosed (Jul 24)[^shub-opencode]; continued growth to 211.5k stars (verified via GitHub API)[^oc-gh].
## W6
- ~8M MAU in May (secondary)[^aiwiki-opencode] → ~13M by end-June (CEO)[^yc-lightcone].
## W9
- Rapid star growth (~112k in Feb 2026)[^aiwiki-opencode]; Anthropic OAuth block (Jan–Apr)[^anthropic-oauth-block].
## W12
- Anomaly rebrand and repo move[^dax-rename].
## W24
- Launch (Apr 2025)[^oc-gh].

# Lessons
- Open, model-agnostic harnesses won developer mindshare as closed lab-native agents proliferated.

# Related
- [/organizations/anomaly-innovations.md](/organizations/anomaly-innovations.md)
- [/projects/ai-agents/openai-codex-cli.md](/projects/ai-agents/openai-codex-cli.md), [/projects/ai-agents/gemini-cli.md](/projects/ai-agents/gemini-cli.md), [/projects/ai-agents/aider.md](/projects/ai-agents/aider.md)

[^oc-gh]: https://github.com/anomalyco/opencode
[^dax-rename]: https://x.com/thdxr/status/2007199285251842478
[^aiwiki-opencode]: https://aiwiki.ai/wiki/opencode
[^dd-opencode]: https://www.developersdigest.tech/blog/opencode-developer-guide-2026
[^tfn-opencode]: Tech Funding News, 13 Jan 2026.
[^yc-lightcone]: YC Lightcone podcast, Jul 2026.
[^shub-opencode]: StartupHub.ai, 24 Jul 2026 (Lightcone summary). Pass 2 note: MAU ~8M (May) and ~13M (June) are both plausible points on the same curve; 13M is the CEO's own figure.
[^snowmaker-tokens]: Jared Friedman on X, Jul 2026.
[^anthropic-oauth-block]: MLQ.ai, Apr 2026.
