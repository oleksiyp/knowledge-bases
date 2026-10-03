---
type: OSS Project
title: Mastodon
description: "AGPL fediverse server; restructured into a European nonprofit (2025), founder Eugen Rochko stepped down as CEO (Nov 2025, Felix Hlatky succeeding), and won €614K from the Sovereign Tech Fund in 2026 — stable but no longer growing fast."
resource: https://github.com/mastodon/mastodon
tags: [social, fediverse, activitypub, agpl-3.0, nonprofit, europe]
domain: end-user-apps
license: AGPL-3.0
license_history: ["AGPL-3.0"]
governance: foundation
steward: Mastodon European nonprofit
backing_orgs: []
metrics:
  github_stars: { value: 50347, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nonprofit
    resource: https://blog.joinmastodon.org/2025/01/the-people-should-own-the-town-square/
    title: "Mastodon: The people should own the town square"
  - id: stepdown
    resource: https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/
    title: "Mastodon: My next chapter with Mastodon (Eugen Rochko)"
  - id: exit
    resource: https://v.cx/2025/04/mastodon-exit-interview
    title: "Mastodon exit interview (user critique)"
  - id: gh
    resource: https://github.com/mastodon/mastodon
    title: Mastodon repository
  - id: masto-sta
    resource: https://blog.joinmastodon.org/2026/04/sovereign-tech-agency-funding/
    title: "Mastodon blog: Sovereign Tech Agency funding (2026-04)"
  - id: heise-sta
    resource: https://www.heise.de/en/news/Mastodon-Funding-for-work-on-encrypted-direct-messages-and-more-11267471.html
    title: "heise: Mastodon — funding for work on encrypted direct messages and more (2026-04)"
  - id: yahoo-stepdown
    resource: https://tech.yahoo.com/social-media/articles/mastodon-ceo-steps-down-social-080000354.html
    title: "TechCrunch via Yahoo: Mastodon CEO steps down as the social network restructures (2025-11-18)"
---
# Summary
Mastodon spent 2025–26 institutionalizing. In January 2025 it announced that control would move from founder Eugen Rochko to a new European nonprofit, with a call for funding[^nonprofit]. On 18 Nov 2025 Rochko stepped down as CEO (becoming Strategy & Product Advisor and transferring trademark/assets to the nonprofit); Felix Hlatky succeeded him, and Rochko received a one-time €1M compensation for past contributions[^stepdown][^yahoo-stepdown]. In April 2026 Germany's Sovereign Tech Fund committed €614K for five projects including blocklist sync, remote media storage, automated content detection and E2EE work[^masto-sta][^heise-sta]. User growth has been flat relative to Bluesky's surge; critics cite UX and moderation friction[^exit]. Verdict: OSS stable; finances stable on donations/grants.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-13 | European nonprofit and leadership transition announced[^nonprofit] | Business | + |
| W24 | 2025-04-11 | High-profile "exit interview" critique[^exit] | OSS | − |
| W12 | 2025-11-18 | Rochko steps down; Felix Hlatky executive director; €1M one-time compensation[^stepdown][^yahoo-stepdown] | Business | mixed |
| W6 | 2026-04-15 | Sovereign Tech Agency €614K service agreement (2026–27) for five projects incl. E2EE DMs; €90K shared with other Fediverse projects[^masto-sta][^heise-sta] | Business | + |

# OSS successes
- Reference ActivityPub implementation; ~50k stars[^gh]; STF-funded roadmap[^masto-sta].
# OSS failures / risks
- Growth stagnation vs Bluesky; onboarding UX.
# Business successes
- Founder-to-nonprofit transition completed without forks[^stepdown].
# Business failures / risks
- Small budget; the €1M founder payout drew debate (no verified figures on overall budget).

# By window
## W3
- No notable events found.
## W6
- STF €614K grant[^masto-sta][^heise-sta].
## W9
- No notable events found.
## W12
- CEO change[^stepdown].
## W24
- Nonprofit restructuring announced[^nonprofit].

# Lessons
- Founder-led social projects can transition to nonprofit governance cleanly if trademarks/assets move with it.

# Related
- [Bluesky / AT Protocol](/projects/end-user-apps/bluesky-atproto.md)

[^nonprofit]: https://blog.joinmastodon.org/2025/01/the-people-should-own-the-town-square/
[^stepdown]: https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/
[^exit]: https://v.cx/2025/04/mastodon-exit-interview
[^gh]: https://github.com/mastodon/mastodon
[^masto-sta]: https://blog.joinmastodon.org/2026/04/sovereign-tech-agency-funding/
[^heise-sta]: https://www.heise.de/en/news/Mastodon-Funding-for-work-on-encrypted-direct-messages-and-more-11267471.html
[^yahoo-stepdown]: https://tech.yahoo.com/social-media/articles/mastodon-ceo-steps-down-social-080000354.html
