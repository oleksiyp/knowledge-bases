---
type: OSS Project
title: Mattermost
description: "Self-hosted Slack alternative whose v11 free edition capped accessible history at 10,000 messages (late 2025), reigniting long-standing complaints about its ambiguous AGPL/'may be licensed' terms — an open-core squeeze rather than a relicense."
resource: https://github.com/mattermost/mattermost
tags: [collaboration, chat, open-core, agpl, free-tier-limits]
domain: licensing-forks
license: "AGPL-3.0 (source) / MIT (compiled binaries) / proprietary Enterprise — per repo LICENSE"
license_history: ["Dual AGPL-3.0 source + MIT binaries (long-standing)", "v11 free-tier 10k message history limit (2025-12)"]
governance: company-led-open-core
steward: Mattermost, Inc.
backing_orgs: []
metrics:
  github_stars: { value: 39249, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gigazine-limit
    resource: https://gigazine.net/gsc_news/en/20251226-mattermost-message-limit/
    title: "Gigazine: Mattermost imposes a 10,000-message limit on past messages, sparking outrage (2025-12-26)"
  - id: hn-limit
    resource: https://news.ycombinator.com/item?id=46594673
    title: "Hacker News: Tell HN: Mattermost 'upgrade' to v11 enforces 10k UI message limit (2026-01-12)"
  - id: license-issue
    resource: https://github.com/mattermost/mattermost/issues/8886
    title: "GitHub issue #8886: LICENSE 'may be licensed' — incorrect license grant (opened 2018; HN front page 2026-02-02, 172 pts)"
  - id: mm-gh
    resource: https://github.com/mattermost/mattermost
    title: Mattermost GitHub repository
---

# Summary
Mattermost shows the "squeeze the free tier" approach. There was no relicense, but free self-hosted use became much more limited. From v11, the free entry plan can access only 10,000 past messages, and the alternative free Team plan lacks SSO and is capped at 250 users. Self-hosting users called this abandoning the community that built the product.[^gigazine-limit][^hn-limit] The backlash revived scrutiny of Mattermost's licensing. A 2018 GitHub issue arguing that its LICENSE's "may be licensed" wording is not a clear open-source grant reached the HN front page in Feb 2026.[^license-issue] Verdict: OSS contested, business stable (no verified financials).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12 | v11 free plan: 10,000-message history limit[^gigazine-limit] | OSS | − |
| W9 | 2026-01-12 | "Tell HN" thread on the v11 limit[^hn-limit] | OSS | − |
| W9 | 2026-02-02 | 2018 license-ambiguity issue resurfaces on HN (172 pts)[^license-issue] | OSS | − |

# OSS successes
- Code remains public with an active repository (39k stars).[^mm-gh]

# OSS failures / risks
- Free-tier limits that cut existing self-hosters' features look like a bait-and-switch.[^gigazine-limit]
- Ambiguous license wording undermines the "open source" claim.[^license-issue]

# Business successes
- Pushes self-hosted organisations toward paid plans. Effect not disclosed.

# Business failures / risks
- Users may move to Matrix/Element, Zulip or Rocket.Chat. Not quantified.

# By window
## W3
- No notable events found.
## W6
- No notable events found.
## W9
- HN backlash threads (Jan–Feb 2026).[^hn-limit][^license-issue]
## W12
- v11 message limit (Dec 2025).[^gigazine-limit]
## W24
- No notable events found.

# Lessons
- Cutting free-tier functionality can hurt trust as much as a relicense, because the license is not the only thing that matters to self-hosters.
- License text that hedges ("may be licensed") becomes a liability when a dispute starts.

# Related
- [MinIO](/projects/licensing-forks/minio.md) — console stripped from free edition
- [Licensing & forks domain review](/domains/licensing-forks.md)

[^gigazine-limit]: Gigazine — https://gigazine.net/gsc_news/en/20251226-mattermost-message-limit/
[^hn-limit]: Hacker News "Tell HN" (2026-01-12) — https://news.ycombinator.com/item?id=46594673
[^license-issue]: GitHub issue #8886 — https://github.com/mattermost/mattermost/issues/8886
[^mm-gh]: Mattermost GitHub — https://github.com/mattermost/mattermost
