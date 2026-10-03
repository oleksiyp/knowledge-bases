---
type: OSS Project
title: Open WebUI
description: "The most-starred self-hosted chat UI for LLMs (~154k stars) that left OSI open source in April 2025 with a branding-restriction clause plus CLA, yet kept exploding in adoption and (per aggregators) raised venture money through a reported July 2026 Series B — growing, but contested licensing."
resource: https://github.com/open-webui/open-webui
tags: [ai-apps, chat-ui, self-hosted, source-available, license-change, cla]
domain: ai-apps
license: "Open WebUI License (BSD-3-Clause + branding clause; not OSI)"
license_history: ["MIT (2023-2025-01)", "BSD-3-Clause (2025-01-10)", "Open WebUI License = BSD-3 + branding clause + CLA (v0.6.6, 2025-04-19)", "License text reorganised, terms unchanged in substance (2026-04-14)"]
governance: single-vendor
steward: Open WebUI Inc.
backing_orgs: [organizations/open-webui-inc]
metrics:
  github_stars: { value: 153847, as_of: 2026-10-03 }
  github_forks: { value: 22487, as_of: 2026-10-03 }
  latest_release: { value: "v0.11.4 (2026-09-21)", as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: owui-gh
    resource: https://github.com/open-webui/open-webui
    title: Open WebUI GitHub repository (stars/forks/releases via GitHub API, 2026-10-03)
  - id: owui-license-docs
    resource: https://docs.openwebui.com/license/
    title: Open WebUI License documentation
  - id: owui-bsd-discussion
    resource: https://github.com/open-webui/open-webui/discussions/8467
    title: "A Quick Update: Open WebUI Moves to the Permissive BSD 3-Clause License (Discussion #8467)"
  - id: hn-owui-license
    resource: https://news.ycombinator.com/item?id=43901575
    title: "Hacker News: Open WebUI changed license from BSD-3 to Open WebUI license with CLA"
  - id: biggo-owui
    resource: https://finance.biggo.com/news/202511041923_open-webui-license-change-backlash
    title: "BigGo: Open WebUI's license shift sparks community backlash and forking debate (2025-11-04)"
  - id: owui-v011
    resource: https://openwebui.com/blog/v0-11-0-the-interface-reorganized
    title: "Open WebUI blog: v0.11.0 — The Interface, Reorganized (2026-07)"
  - id: owui-openrouter
    resource: https://openwebui.com/blog/open-webui-openrouter-interface-and-inference-for-enterprise-ai
    title: "Open WebUI blog: Open WebUI + OpenRouter — Interface and Inference for Enterprise AI (2026-05)"
  - id: owui-v080
    resource: https://newreleases.io/project/github/open-webui/open-webui/release/v0.8.0
    title: "Open WebUI v0.8.0 release notes (2026-02-12)"
  - id: caplight-owui
    resource: https://www.caplight.com/company/openwebui
    title: "Caplight: Open WebUI funding history (aggregator)"
  - id: owui-enterprise
    resource: https://docs.openwebui.com/enterprise/
    title: Open WebUI for Enterprise
---

# Summary
Open WebUI is the default self-hosted "ChatGPT-style" front end for Ollama and OpenAI-compatible APIs and, at ~154k GitHub stars, the most-starred project in this domain[^owui-gh]. It moved from MIT to BSD-3 in January 2025, then on 2025-04-19 (v0.6.6) added a clause forbidding removal of "Open WebUI" branding for deployments over 50 users without an enterprise licence, plus a mandatory CLA — taking it outside OSI open source[^owui-license-docs][^hn-owui-license]. The backlash produced debate and alternatives but no significant fork[^biggo-owui]; adoption kept growing, enterprise licences and partnerships (OpenRouter, May 2026) followed[^owui-openrouter], and aggregators report a Series B on 2026-07-09 bringing total funding to ~$88M (not confirmed by a primary announcement)[^caplight-owui]. Verdict: OSS contested (source-available), business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-10 | Relicensed MIT → BSD-3-Clause[^owui-bsd-discussion] | OSS | ± |
| W24 | 2025-04-19 | v0.6.6 adds branding clause (>50 users) + CLA — "Open WebUI License"[^owui-license-docs][^hn-owui-license] | OSS/Business | − |
| W12 | 2025-11-04 | Press coverage of continuing backlash and fork debate; no major fork materialises[^biggo-owui] | OSS | − |
| W9 | 2026-02-12 | v0.8.0: Skills, Open Responses protocol, per-user sharing[^owui-v080] | OSS | + |
| W6 | 2026-04-14 | Licence text reorganised under Open WebUI Inc. copyright; LICENSE_HISTORY added[^owui-gh] | OSS | ± |
| W6 | 2026-05-31 | Enterprise partnership with OpenRouter[^owui-openrouter] | Business | + |
| W3 | 2026-07 | v0.11.0 interface rebuild; v0.11.4 on 2026-09-21[^owui-v011][^owui-gh] | OSS | + |
| W3 | 2026-07-09 | Series B reported by aggregators (Benchmark, 8VC, Theory, Pace, YC listed); total ~$88M — unconfirmed[^caplight-owui] | Business | + |

# OSS successes
- Category leader: ~154k stars and ~22.5k forks, with 100+ commits in the last six months and near-monthly releases[^owui-gh].
- Rapid feature velocity (Skills, Open Responses, notes, tool approvals, terminal panel)[^owui-v080][^owui-v011].

# OSS failures / risks
- Branding clause + CLA = not OSI open source; code contributed after v0.6.5 is under the new terms only[^owui-license-docs].
- Community criticism of "Open" naming vs restrictive terms; contributors are asked to sign a CLA that enables future relicensing[^hn-owui-license][^biggo-owui].

# Business successes
- Enterprise licence (white-labelling, support) monetises exactly the large deployments the branding clause targets[^owui-enterprise].
- Reported VC backing including Benchmark (aggregator data only)[^caplight-owui].

# Business failures / risks
- Funding amounts/valuation not publicly confirmed; the founder-centric project depends heavily on Timothy J. Baek.
- Competes with LibreChat (now ClickHouse-funded, MIT) and LobeHub for the same enterprise buyers.

# By window
## W3
- v0.11.x interface rebuild and tool-approval features[^owui-v011]; reported Series B (2026-07-09)[^caplight-owui].
## W6
- OpenRouter enterprise partnership[^owui-openrouter]; licence text reorganised (2026-04-14)[^owui-gh].
## W9
- v0.8.0 (Skills, Open Responses)[^owui-v080].
## W12
- Backlash coverage, no successful fork[^biggo-owui].
## W24
- MIT → BSD-3 (Jan 2025), then branding clause + CLA (Apr 2025)[^owui-bsd-discussion][^owui-license-docs].

# Lessons
- A "branding" restriction is a softer variant of open-core relicensing: it monetises white-labellers without blocking ordinary self-hosters, and in a fast-moving category users did not fork.
- Adopting a CLA before a monetisation move is the tell that a relicence is coming.

# Related
- [Open WebUI Inc.](/organizations/open-webui-inc.md), [Open WebUI branding licence event](/events/2025-04-open-webui-branding-license.md)
- [LibreChat](/projects/ai-apps/librechat.md), [LobeHub](/projects/ai-apps/lobehub.md), [Ollama](/projects/ai-inference/ollama.md)

[^owui-gh]: GitHub API, open-webui/open-webui, 2026-10-03 — https://github.com/open-webui/open-webui
[^owui-license-docs]: Open WebUI License docs — https://docs.openwebui.com/license/
[^owui-bsd-discussion]: GitHub Discussion #8467 — https://github.com/open-webui/open-webui/discussions/8467
[^hn-owui-license]: Hacker News thread — https://news.ycombinator.com/item?id=43901575
[^biggo-owui]: BigGo, 2025-11-04 — https://finance.biggo.com/news/202511041923_open-webui-license-change-backlash
[^owui-v011]: Open WebUI blog, v0.11.0 — https://openwebui.com/blog/v0-11-0-the-interface-reorganized
[^owui-openrouter]: Open WebUI blog, OpenRouter partnership — https://openwebui.com/blog/open-webui-openrouter-interface-and-inference-for-enterprise-ai
[^owui-v080]: v0.8.0 release notes — https://newreleases.io/project/github/open-webui/open-webui/release/v0.8.0
[^caplight-owui]: Caplight (aggregator; amounts behind login) — https://www.caplight.com/company/openwebui
[^owui-enterprise]: Open WebUI for Enterprise — https://docs.openwebui.com/enterprise/
