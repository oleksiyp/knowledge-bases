---
type: OSS Project
title: Mattermost
description: "AGPL/MIT open-core team chat; v11 (2025) cut the free Team Edition to 250 users and enforced a 10,000-message history limit in the free tier, triggering backlash and Framasoft's 'Mostlymatter' fork."
resource: https://github.com/mattermost/mattermost
tags: [team-chat, open-core, agpl-3.0, fork, free-tier-restriction]
domain: end-user-apps
license: AGPL-3.0 (source) / MIT-compiled or commercial binaries
license_history: ["AGPL-3.0 source + MIT-compiled Team Edition binaries; v11 (2025) adds commercial 'Entry' tier"]
governance: company-led-open-core
steward: Mattermost Inc.
backing_orgs: []
metrics:
  github_stars: { value: 39249, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: v11
    resource: https://forum.mattermost.com/t/mattermost-v11-changes-in-free-offerings/25126
    title: "Mattermost forum: Mattermost v11 changes in free offerings"
  - id: limit
    resource: https://github.com/mattermost/mattermost/issues/34271
    title: "GitHub issue: restricted access to old messages after 10,000 limit"
  - id: mostlymatter
    resource: https://framagit.org/framasoft/framateam/mostlymatter
    title: "Framasoft: Mostlymatter, a fork of Mattermost without user limits"
  - id: tellhn
    resource: https://news.ycombinator.com/item?id=46594673
    title: "Tell HN: Mattermost upgrade to v11 enforces 10k UI message limit"
  - id: bleve
    resource: https://danielhnyk.cz/restoring-bleve-search-mattermost-v11/
    title: "Restoring Bleve search in Mattermost v11 with a fork"
---
# Summary
Mattermost illustrates open-core tightening. On 23 Aug 2025 it announced v11 free-offering changes: a new free commercial "Entry" tier with usage limits (10,000 messages, 40-minute calls), and the MIT-compiled Team Edition capped at 250 users (down from 1,000) with GitLab SSO removed — rationalized by GitLab deprecating its Mattermost bundle[^v11]. In Dec 2025–Jan 2026 users discovered upgrades restricting access to messages beyond the 10k limit, generating backlash[^limit][^tellhn]; Framasoft responded with "Mostlymatter", a fork without user limits[^mostlymatter], and others forked to restore removed search backends[^bleve]. The AGPL source remains available. Verdict: OSS contested; business stable (private, no verified financials).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-23 | v11 free-tier changes announced (Entry tier; Team Edition 250 users)[^v11] | Business | − |
| W12 | 2025-12-25 | 10k-message history restriction surfaces; Mostlymatter fork[^limit][^mostlymatter] | OSS | − |
| W9 | 2026-01-12 | Continued backlash over v11 limits[^tellhn] | OSS | − |
| W9 | 2026-03-24 | Community forks restore removed features (Bleve search)[^bleve] | OSS | − |

# OSS successes
- AGPL source lets community fork around restrictions[^mostlymatter].
# OSS failures / risks
- Trust erosion from retroactive limits on self-hosted data[^limit].
# Business successes
- Clear segmentation toward paid defense/critical-infra customers[^v11].
# Business failures / risks
- Pushes small orgs to Zulip, Matrix, Rocket.Chat or forks.

# By window
## W3
- No notable events found.
## W6
- No notable events found.
## W9
- Backlash continues; feature-restoring forks[^tellhn][^bleve].
## W12
- Message-limit discovery; Mostlymatter[^limit][^mostlymatter].
## W24
- v11 changes announced[^v11].

# Lessons
- Limiting access to users' own historical data in self-hosted software is perceived as hostile and invites forks.

# Related
- [Zulip](/projects/end-user-apps/zulip.md), [Cal.com](/projects/end-user-apps/cal-com.md)

[^v11]: https://forum.mattermost.com/t/mattermost-v11-changes-in-free-offerings/25126
[^limit]: https://github.com/mattermost/mattermost/issues/34271
[^mostlymatter]: https://framagit.org/framasoft/framateam/mostlymatter
[^tellhn]: https://news.ycombinator.com/item?id=46594673
[^bleve]: https://danielhnyk.cz/restoring-bleve-search-mattermost-v11/
