---
type: Event
title: Open WebUI adds branding clause and CLA, leaving OSI open source
description: "With v0.6.6 on 2025-04-19, Open WebUI changed from BSD-3-Clause to the 'Open WebUI License' — BSD-3 plus a ban on removing Open WebUI branding for deployments over 50 users without an enterprise licence, and a mandatory CLA."
event_kind: license-change
date: 2025-04-19
window: W24
impact: mixed
projects: [projects/ai-apps/open-webui]
organizations: [organizations/open-webui-inc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: owui-license-docs
    resource: https://docs.openwebui.com/license/
    title: Open WebUI License documentation
  - id: hn-owui-license
    resource: https://news.ycombinator.com/item?id=43901575
    title: "Hacker News: Open WebUI changed license from BSD-3 to Open WebUI license with CLA"
  - id: owui-bsd-discussion
    resource: https://github.com/open-webui/open-webui/discussions/8467
    title: "Discussion #8467: Open WebUI moves to BSD-3-Clause (Jan 2025)"
  - id: biggo-owui
    resource: https://finance.biggo.com/news/202511041923_open-webui-license-change-backlash
    title: "BigGo: Open WebUI license shift sparks backlash (2025-11-04)"
  - id: owui-gh
    resource: https://github.com/open-webui/open-webui
    title: Open WebUI GitHub repository (LICENSE history, stars)
---

# What happened
Open WebUI went MIT → BSD-3-Clause on 2025-01-10[^owui-bsd-discussion], then on 2025-04-18/19 (v0.6.6) added a clause prohibiting alteration or removal of "Open WebUI" branding unless a deployment has ≤50 end users in a rolling 30 days, the licensee has written permission, or holds an enterprise licence; new contributions require a CLA, while code up to v0.6.5 stays BSD-3[^owui-license-docs][^owui-gh].

# Why it matters
It is the highest-profile AI-app relicence of the period and a new template: rather than SSPL/BSL-style competitive-use bans, it monetises white-labelling and large deployments while staying free for most self-hosters. It is not OSI-approved[^hn-owui-license].

# Outcome so far
Criticism and fork talk followed, but no significant fork emerged by late 2025[^biggo-owui]; stars rose to ~154k by Oct 2026 and the company signed enterprise partnerships and reportedly raised a Series B[^owui-gh]. In April 2026 the licence text was reorganised under "Open WebUI Inc." copyright with a LICENSE_HISTORY file[^owui-gh].

# Related
- [Open WebUI](/projects/ai-apps/open-webui.md), [Open WebUI Inc.](/organizations/open-webui-inc.md), [AI apps domain review](/domains/ai-apps.md)

[^owui-license-docs]: Open WebUI License — https://docs.openwebui.com/license/
[^hn-owui-license]: Hacker News — https://news.ycombinator.com/item?id=43901575
[^owui-bsd-discussion]: GitHub discussion #8467 — https://github.com/open-webui/open-webui/discussions/8467
[^biggo-owui]: BigGo, 2025-11-04 — https://finance.biggo.com/news/202511041923_open-webui-license-change-backlash
[^owui-gh]: GitHub — https://github.com/open-webui/open-webui
