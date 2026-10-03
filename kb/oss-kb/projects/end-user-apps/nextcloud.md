---
type: OSS Project
title: Nextcloud
description: "AGPL self-hosted collaboration suite and the biggest commercial winner of Europe's digital-sovereignty push: 50%+ bookings growth in 2025, 2M new professional users, a €250M 'Sovereignty 2030' plan, and leadership of the Euro-Office fork."
resource: https://github.com/nextcloud/server
tags: [self-hosting, collaboration, agpl-3.0, digital-sovereignty, europe, bootstrapped]
domain: end-user-apps
license: AGPL-3.0
license_history: ["AGPL-3.0 (2016 fork of ownCloud)"]
governance: company-led-open-core
steward: Nextcloud GmbH
backing_orgs: [organizations/nextcloud]
metrics:
  github_stars: { value: 36979, as_of: 2026-10-03 }
  bookings_growth_2025: { value: "50%+", as_of: 2026-03-24 }
  new_users_2025: { value: 2000000, as_of: 2026-03-24 }
oss_verdict: growing
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/nextcloud/server
    title: Nextcloud server repository
  - id: s2030
    resource: https://nextcloud.com/blog/press_releases/nextcloud-invests-in-digital-sovereignty/
    title: "Nextcloud: Sovereignty 2030 — Nextcloud invests over €250 million in digital sovereignty"
  - id: momentum
    resource: https://nextcloud.com/blog/press_releases/sovereign-workspace-momentum/
    title: "Nextcloud: Sovereign workspace gaining momentum — two million new seats in 2025"
  - id: play
    resource: https://www.theregister.com/2025/05/13/nextcloud_play_store_complaint/
    title: "The Register: Nextcloud cries foul over Google Play Store app rejection"
    author: org:the-register
  - id: austria
    resource: https://news.itsfoss.com/austrian-ministry-kicks-out-microsoft/
    title: "It's FOSS: Austrian ministry kicks out Microsoft in favor of Nextcloud"
  - id: eurostack
    resource: https://www.euractiv.com/news/eurostack-initiative-sets-up-a-non-profit-advocacy-organisation/
    title: "Euractiv: EuroStack initiative sets up a non-profit advocacy organisation"
    author: org:euractiv
  - id: oo-suspend
    resource: https://www.xda-developers.com/onlyoffice-pulled-its-8-year-partnership-with-nextcloud-licensing-violations/
    title: "XDA: OnlyOffice pulled its 8-year partnership with Nextcloud"
  - id: eo-ga
    resource: https://www.heise.de/en/news/Euro-Office-First-version-of-the-open-source-web-office-is-here-11322160.html
    title: "heise: Euro-Office — first version of the open-source web office is here"
    author: org:heise
  - id: hub26
    resource: https://nextcloud.com/blog/nextcloud-hub26-spring/
    title: "Nextcloud Hub 26 Spring"
  - id: opencloud
    resource: https://github.com/opencloud-eu/opencloud
    title: "OpenCloud — Go-based alternative (ownCloud Infinite Scale fork)"
  - id: slow
    resource: https://ounapuu.ee/posts/2025/11/03/nextcloud-slow/
    title: "Why Nextcloud feels slow to use"
---
# Summary
Nextcloud is the commercial standard-bearer of the European sovereignty wave. Employee-owned, profitable and without VC, it reported 50–70% YoY bookings growth[^s2030], and its 2025 results (published 24 Mar 2026) showed >2M new professional users, tripled inbound leads and >50% bookings growth, with wins such as the French Ministry of National Education (400k users, targeting 1.2M), SURF (100k) and Austria's economy ministry[^momentum][^austria]. On 5 Nov 2025 it announced "Sovereignty 2030": €250M+ through 2030 and a 7× workforce expansion[^s2030]; it is a founding member of the EuroStack foundation[^eurostack]. In 2026 it co-led Euro-Office (with IONOS), an OnlyOffice fork that triggered OnlyOffice to end their 8-year partnership over alleged license violations in late March, later settled; Euro-Office went GA 9 June 2026[^oo-suspend][^eo-ga]. OSS-side, users still complain about performance[^slow], and the Go-based OpenCloud offers a competing alternative[^opencloud]. Verdict: OSS growing, business thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-13 | Google Play revokes file-access permission for Nextcloud Android; later reversed[^play] | OSS | − |
| W12 | 2025-10-28 | Austrian ministry replaces Microsoft with Nextcloud[^austria] | Business | + |
| W12 | 2025-10-30 | Founding member of EuroStack foundation[^eurostack] | Business | + |
| W12 | 2025-11-05 | Sovereignty 2030: €250M+ investment, 7× workforce[^s2030] | Business | + |
| W9 | 2026-03-24 | 2025 results: >2M new users, >50% bookings growth[^momentum] | Business | + |
| W9 | 2026-03-31 | OnlyOffice suspends partnership over Euro-Office fork[^oo-suspend] | Business | − |
| W6 | 2026-06-09 | Euro-Office GA; dispute settled with attribution notices[^eo-ga] | OSS | + |
| W6 | 2026-06-11 | Nextcloud Hub 26 Spring[^hub26] | OSS | + |

# OSS successes
- 37k stars; 500+ third-party apps; partner ecosystem up ~300% in 2025[^momentum].
# OSS failures / risks
- Performance/UX critiques[^slow]; dependence on Android platform policies[^play]; competition from OpenCloud[^opencloud].
# Business successes
- Self-funded hypergrowth; marquee public-sector deals[^momentum][^s2030].
# Business failures / risks
- Execution risk of 7× hiring; forking a partner's code (OnlyOffice) strained ecosystem trust[^oo-suspend].

# By window
## W3
- No single headline event found; continued sovereignty-driven demand (qualitative).
## W6
- Euro-Office GA; Hub 26 Spring[^eo-ga][^hub26].
## W9
- Record 2025 results; OnlyOffice split[^momentum][^oo-suspend].
## W12
- Sovereignty 2030; EuroStack; Austria win[^s2030][^eurostack][^austria].
## W24
- Google Play dispute; demand surge after US policy shifts[^play][^momentum].

# Lessons
- Geopolitics can be the biggest growth driver for OSS business: "sovereignty" sells where "open" alone did not.
- Bootstrapped, profitable COSS companies can scale aggressively when demand arrives.

# Related
- [Nextcloud GmbH](/organizations/nextcloud.md), [OnlyOffice](/projects/end-user-apps/onlyoffice.md), [LibreOffice](/projects/end-user-apps/libreoffice.md)
- [Euro-Office fork event](/events/2026-06-euro-office-onlyoffice-fork.md), [EU Open Source Strategy](/events/2026-06-eu-tech-sovereignty-package-open-source-strategy.md)

[^gh]: https://github.com/nextcloud/server
[^s2030]: https://nextcloud.com/blog/press_releases/nextcloud-invests-in-digital-sovereignty/
[^momentum]: https://nextcloud.com/blog/press_releases/sovereign-workspace-momentum/
[^play]: https://www.theregister.com/2025/05/13/nextcloud_play_store_complaint/
[^austria]: https://news.itsfoss.com/austrian-ministry-kicks-out-microsoft/
[^eurostack]: https://www.euractiv.com/news/eurostack-initiative-sets-up-a-non-profit-advocacy-organisation/
[^oo-suspend]: https://www.xda-developers.com/onlyoffice-pulled-its-8-year-partnership-with-nextcloud-licensing-violations/
[^eo-ga]: https://www.heise.de/en/news/Euro-Office-First-version-of-the-open-source-web-office-is-here-11322160.html
[^hub26]: https://nextcloud.com/blog/nextcloud-hub26-spring/
[^opencloud]: https://github.com/opencloud-eu/opencloud
[^slow]: https://ounapuu.ee/posts/2025/11/03/nextcloud-slow/
