---
type: OSS Project
title: Bluesky / AT Protocol
description: "VC-backed open-protocol social network; surged past 30M users in early 2025 and 43M+ by Mar 2026 with a $100M Series B (Bain Capital Crypto), but mobile daily activity fell ~40% from its March 2025 peak and founding CEO Jay Graber stepped aside in 2026 with monetization still unresolved."
resource: https://github.com/bluesky-social/atproto
tags: [social, decentralized, at-protocol, mit-apache, vc-backed]
domain: end-user-apps
license: MIT OR Apache-2.0
license_history: ["MIT/Apache-2.0 dual (atproto)"]
governance: single-vendor
steward: Bluesky Social PBC
backing_orgs: [organizations/bluesky-social]
metrics:
  registered_users: { value: 43000000, as_of: 2026-03-19 }
  mobile_daily_active_users_similarweb: { value: 3500000, as_of: 2025-10-31 }
  github_stars_atproto: { value: 9670, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bsky-series-a
    resource: https://bsky.social/about/blog/10-24-2024-series-a
    title: "Bluesky: Announces Series A to grow network of 13M+ users (2024-10-24)"
  - id: reg-a
    resource: https://www.theregister.com/2024/10/28/bluesky_capitalizes_on_x_woes/
    title: "The Register: Bluesky capitalizes on X woes with funding and user growth"
    author: org:the-register
  - id: bi
    resource: https://www.businessinsider.com/x-competitor-bluesky-valuation-new-funding-round-2025-1
    title: "Business Insider: Bluesky valued at around $700M in new funding round (Jan 2025 report)"
    author: org:business-insider
  - id: bsky-series-b
    resource: https://bsky.social/about/blog/03-19-2026-series-b
    title: "Bluesky: Bluesky's 2025 $100M Series B lays foundation for open social web (2026-03-19)"
  - id: tnw-series-b
    resource: https://thenextweb.com/news/bluesky-raises-100m-series-b-as-new-ceo-takes-charge
    title: "The Next Web: Bluesky raises $100M Series B as new CEO takes charge (2026-03)"
  - id: ceo
    resource: https://bsky.social/about/blog/03-09-2026-a-new-chapter-for-bluesky
    title: "Bluesky: A new chapter for Bluesky (CEO transition, 2026-03-09)"
  - id: bsky-ceo-perm
    resource: https://bsky.social/about/blog/07-10-2026-toni-schneider-ceo
    title: "Bluesky: Bluesky names Toni Schneider CEO (2026-07-10)"
  - id: engadget-ceo
    resource: https://www.engadget.com/2212928/bluesky-official-ceo-toni-schneider/
    title: "Engadget: Bluesky has an official CEO again (2026-07)"
  - id: forbes-dau
    resource: https://www.forbes.com/sites/conormurray/2025/11/07/bluesky-and-x-users-plummet-year-after-trumps-election-win-truth-social-makes-small-gains/
    title: "Forbes: Bluesky and X users plummet year after Trump's election win (2025-11-07; Similarweb data)"
  - id: cnbc-reddit
    resource: https://www.cnbc.com/2026/06/04/bluesky-twitter-rival-reddit-social-media.html
    title: "CNBC: Bluesky was launched as a Twitter rival — now it's eyeing Reddit for inspiration (2026-06-04)"
  - id: tangled
    resource: https://blog.tangled.org/intro
    title: "Tangled: a Git collaboration platform built on atproto"
---
# Summary
Bluesky was the fastest-growing open-protocol social network of the period. It raised a $15M Series A led by Blockchain Capital in Oct 2024 at 13M users, and grew past 30M after the US election.[^bsky-series-a][^reg-a] Business Insider reported in Jan 2025 that a new round valued it at about $700M.[^bi] The round actually announced, on Mar 19, 2026, was a $100M Series B led by Bain Capital Crypto that had closed in April 2025; the valuation was not disclosed.[^bsky-series-b][^tnw-series-b] (Corrected in pass 2: "round led by Bain Capital Ventures at ~$700M" → $100M Series B led by Bain Capital Crypto, closed Apr 2025, announced Mar 2026, valuation undisclosed.) Engagement then cooled. Similarweb data reported by Forbes put mobile daily actives at about 3.5M in Oct 2025, down 39.8% year on year, after a peak of about 6M in March 2025.[^forbes-dau] (Corrected in pass 2: "~1.5M DAU in Sept 2025", a Wikipedia-only figure, → ~3.5M mobile DAU in Oct 2025 per Similarweb.) On Mar 9, 2026 Jay Graber became Chief Innovation Officer and former Automattic CEO Toni Schneider became interim CEO, made permanent on Jul 10, 2026, with a stated focus on smaller and more private communities.[^ceo][^bsky-ceo-perm][^engadget-ceo] Bluesky reported 43M+ users and "over a thousand apps built on atproto" in Mar 2026.[^bsky-series-b] The AT Protocol ecosystem broadened, for example with Tangled, a Git platform on atproto.[^tangled] Verdict: OSS/protocol growing; business struggling (well funded, but declining engagement and no material revenue disclosed).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-24 | $15M Series A (Blockchain Capital) at 13M users[^bsky-series-a][^reg-a] | Business | + |
| W24 | 2025-01 | ~$700M valuation round reported by Business Insider[^bi] | Business | + |
| W24 | 2025-03 | Mobile DAU peaks at ~6M (Similarweb)[^forbes-dau] | OSS | + |
| W24 | 2025-04 | $100M Series B led by Bain Capital Crypto closes (undisclosed until Mar 2026)[^bsky-series-b] | Business | + |
| W12 | 2025-10 | Mobile DAU ~3.5M, −39.8% YoY (Similarweb)[^forbes-dau] | OSS | − |
| W12 | 2025-10-10 | Tangled (atproto Git platform) launches[^tangled] | OSS | + |
| W9 | 2026-03-09 | Graber steps down as CEO; Toni Schneider interim[^ceo] | Business | − |
| W9 | 2026-03-19 | Series B announced; 43M+ users, 1,000+ atproto apps[^bsky-series-b][^tnw-series-b] | Business | + |
| W6 | 2026-06-04 | CNBC: Bluesky looks to Reddit-style communities as growth strategy[^cnbc-reddit] | Business | ± |
| W3 | 2026-07-10 | Schneider named permanent CEO[^bsky-ceo-perm][^engadget-ceo] | Business | ± |

# OSS successes
- Open protocol attracting third-party apps and infrastructure (1,000+ apps on atproto by Mar 2026)[^bsky-series-b][^tangled].
# OSS failures / risks
- Practical decentralization remains limited; most users on Bluesky PBC infrastructure.
# Business successes
- $115M raised across Series A and B while pledging no blockchain/token and no over-financialisation[^bsky-series-a][^bsky-series-b].
# Business failures / risks
- Engagement decline (−39.8% mobile DAU YoY by Oct 2025); no disclosed meaningful revenue; two CEO changes in 2026[^forbes-dau][^ceo][^bsky-ceo-perm].

# By window
## W3
- Toni Schneider made permanent CEO (Jul 10, 2026)[^bsky-ceo-perm].
## W6
- Pivot toward community/Reddit-like features reported (Jun 2026)[^cnbc-reddit].
## W9
- CEO transition; $100M Series B disclosed[^ceo][^bsky-series-b].
## W12
- Similarweb shows ~40% DAU decline; atproto ecosystem growth (Tangled)[^forbes-dau][^tangled].
## W24
- Series A, hypergrowth, Series B closed (Apr 2025), then engagement peak and decline[^bsky-series-a][^bsky-series-b][^forbes-dau].

# Lessons
- Event-driven migrations (X exodus) produce registrations, not durable engagement.
- VC-funded protocol companies face a monetization clock that nonprofits (Mastodon) don't.

# Related
- [Bluesky Social PBC](/organizations/bluesky-social.md), [Mastodon](/projects/end-user-apps/mastodon.md)

[^bsky-series-a]: https://bsky.social/about/blog/10-24-2024-series-a
[^reg-a]: https://www.theregister.com/2024/10/28/bluesky_capitalizes_on_x_woes/
[^bi]: https://www.businessinsider.com/x-competitor-bluesky-valuation-new-funding-round-2025-1
[^bsky-series-b]: https://bsky.social/about/blog/03-19-2026-series-b
[^tnw-series-b]: https://thenextweb.com/news/bluesky-raises-100m-series-b-as-new-ceo-takes-charge
[^ceo]: https://bsky.social/about/blog/03-09-2026-a-new-chapter-for-bluesky
[^bsky-ceo-perm]: https://bsky.social/about/blog/07-10-2026-toni-schneider-ceo
[^engadget-ceo]: https://www.engadget.com/2212928/bluesky-official-ceo-toni-schneider/
[^forbes-dau]: https://www.forbes.com/sites/conormurray/2025/11/07/bluesky-and-x-users-plummet-year-after-trumps-election-win-truth-social-makes-small-gains/
[^cnbc-reddit]: https://www.cnbc.com/2026/06/04/bluesky-twitter-rival-reddit-social-media.html
[^tangled]: https://blog.tangled.org/intro
