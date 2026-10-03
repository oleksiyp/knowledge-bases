---
type: OSS Project
title: Ghost
description: "MIT-licensed publishing/newsletter platform run by a non-profit foundation; Ghost 6.0 (Aug 2025) federated every site over ActivityPub and the foundation crossed $10M ARR bootstrapped (Mar 2026) — the cleanest non-VC success story in web platforms."
resource: https://github.com/TryGhost/Ghost
tags: [cms, publishing, newsletters, mit, nonprofit, activitypub, fediverse, bootstrapped]
domain: web-platforms
license: MIT
license_history: ["MIT (2013-)"]
governance: single-vendor
steward: Ghost Foundation (non-profit)
backing_orgs: [organizations/ghost-foundation]
metrics:
  github_stars: { value: 55478, as_of: 2026-10-03 }
  arr_usd: { value: "10M+", as_of: 2026-03 }
  publisher_revenue_cumulative_usd: { value: "~130M", as_of: 2026-03 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/TryGhost/Ghost
    title: Ghost GitHub repository
  - id: g6
    resource: https://ghost.org/changelog/6/
    title: "Ghost: Ghost 6.0 changelog"
  - id: wedistribute
    resource: https://wedistribute.org/2025/08/ghost-6-0-activitypub-release/
    title: "We Distribute: Ghost 6.0 ships with ActivityPub support"
  - id: john-6
    resource: https://x.com/JohnONolan/status/1952379645078458404
    title: "John O'Nolan on X: Ghost 6.0 has arrived ($100M earned by indie publishers)"
  - id: john-10m
    resource: https://x.com/JohnONolan/status/2029195753428758756
    title: "John O'Nolan on X: Ghost crossed $10M ARR as a bootstrapped non-profit"
  - id: swf
    resource: https://socialwebfoundation.org/2025/10/10/interview-with-john-onolan-about-ghost-6/
    title: "Social Web Foundation: Interview with John O'Nolan about Ghost 6"
  - id: changelog
    resource: https://ghost.org/changelog/
    title: "Ghost changelog"
  - id: news
    resource: https://ghost.org/news/
    title: "Ghost: the local news platform"
---
# Summary
Ghost is the strongest *bootstrapped, non-profit* success in this domain. **Ghost 6.0 (4 Aug 2025)** turned every Ghost site into an ActivityPub actor that can be followed from Mastodon, Threads, Flipboard, WordPress and (bridged) Bluesky, and added native analytics[^g6][^wedistribute]. In early March 2026 founder John O'Nolan announced the foundation had crossed **$10M ARR** with no outside capital, with publishers having earned ~$130M on Ghost[^john-10m]. The repo remains MIT, and 2026 shipped a steady stream of creator-economy features (email sequences, gift subscriptions, AI-search optimization)[^changelog]. Verdict: OSS thriving, business thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-04 | Ghost 6.0: ActivityPub "social web" + native analytics; $100M earned by publishers[^g6][^john-6] | OSS | + |
| W12 | 2025-10-10 | Social Web Foundation interview on Ghost 6 federation[^swf] | OSS | + |
| W9 | 2026-03 | Ghost crosses $10M ARR, bootstrapped non-profit; ~$130M publisher revenue[^john-10m] | Business | + |
| W6 | 2026-05/06 | Comment threads, member dynamic filters, email sequences[^changelog] | OSS | + |
| W3 | 2026-07/08 | AI-search optimization, email-sequence analytics, gift subscriptions; v6.67 (29 Sep 2026)[^changelog][^gh] | OSS | + |

# OSS successes
- First major CMS to ship ActivityPub federation for all sites by default (self-hosted too)[^g6].
- ~55K GitHub stars; ~weekly minor releases (v6.67.0 on 2026-09-29)[^gh].
# OSS failures / risks
- Federation depends on Ghost's own ActivityPub service and bridges for Bluesky[^wedistribute]; self-hosting the full social-web stack is harder than classic Ghost (unverified complexity claims omitted).
# Business successes
- $10M ARR, 14 weeks from $9M to $10M per the founder[^john-10m]; local-news program (300+ newsrooms per Ghost)[^news].
# Business failures / risks
- Competes with Substack/beehiiv on distribution; the non-profit charter caps upside but also removes exit pressure.

# By window
## W3
- Creator features (email sequences analytics, gifting, AI-search optimisation)[^changelog].
## W6
- Comments/threads upgrade and member filters[^changelog].
## W9
- $10M ARR milestone[^john-10m].
## W12
- Federation maturing; Social Web Foundation coverage[^swf].
## W24
- Ghost 6.0 with ActivityPub (Aug 2025)[^g6].

# Lessons
- A non-profit, hosting-funded model can compound to eight-figure ARR without relicensing.
- Open protocols (ActivityPub) can be a distribution moat for an open-source CMS against closed newsletter platforms.

# Related
- [Ghost Foundation](/organizations/ghost-foundation.md)
- [Ghost 6 ActivityPub event](/events/2025-08-ghost-6-activitypub.md)
- [Mastodon](/projects/end-user-apps/mastodon.md), [WordPress](/projects/licensing-forks/wordpress.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/TryGhost/Ghost
[^g6]: https://ghost.org/changelog/6/
[^wedistribute]: https://wedistribute.org/2025/08/ghost-6-0-activitypub-release/
[^john-6]: https://x.com/JohnONolan/status/1952379645078458404
[^john-10m]: https://x.com/JohnONolan/status/2029195753428758756
[^swf]: https://socialwebfoundation.org/2025/10/10/interview-with-john-onolan-about-ghost-6/
[^changelog]: https://ghost.org/changelog/
[^news]: https://ghost.org/news/
