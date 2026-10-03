---
type: OSS Project
title: Plausible Analytics
description: "AGPL, cookie-free Google Analytics alternative from a two-founder, never-funded EU company; kept growing (record months in Feb–Apr 2026), added funnels, user journeys and an 'AI Assistants' traffic channel — the archetype of a profitable bootstrapped open-source SaaS."
resource: https://github.com/plausible/analytics
tags: [web-analytics, privacy, agpl-3.0, bootstrapped, eu, saas-alternative]
domain: web-platforms
license: AGPL-3.0
license_history: ["AGPL-3.0 (current; earlier MIT period not re-verified)"]
governance: single-vendor
steward: Plausible Insights (two-founder EU company)
backing_orgs: [organizations/plausible-insights]
metrics:
  github_stars: { value: 29287, as_of: 2026-10-03 }
  outside_funding_usd: { value: 0, as_of: 2026-01-15 }
oss_verdict: stable
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/plausible/analytics
    title: Plausible Analytics GitHub repository (releases)
  - id: arr
    resource: https://plausible.io/blog/open-source-saas
    title: "Plausible: How we built a $1M ARR open source SaaS (2022)"
  - id: homepage
    resource: https://plausible.io/blog/homepage-edits-conversion-lift
    title: "Plausible: How simplifying our homepage helped increase trial signups by 84% (2026-05-12)"
  - id: blog
    resource: https://plausible.io/blog
    title: "The Plausible Blog"
  - id: changelog
    resource: https://plausible.io/changelog
    title: "Plausible: What's new (changelog)"
  - id: ai-traffic
    resource: https://plausible.io/blog/ai-referral-traffic-and-optimization
    title: "Plausible: Breaking down our 2.2K% surge in AI traffic (2024-12-11)"
---
# Summary
Plausible remains "100% user-supported" with no investors[^blog]. It disclosed $1M ARR in 2022[^arr] and stopped publishing revenue after that (third-party estimates exist but are unverified). In the window, it reported that **April 2026 was its best month ever** for new paying subscribers after a homepage rework lifted trial sign-ups 84%[^homepage], and shipped product depth — user journeys (May 2026), an **AI Assistants traffic channel** (June 2026), revenue-aware and flexible funnels (Sept 2026)[^changelog] — building on its observation of a 2,200% surge in AI-search referrals[^ai-traffic]. The self-hosted Community Edition (v3.2.1, May 2026) lags the cloud[^gh]. Verdict: OSS stable; business thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-01-15 | Reaffirms no investor funding[^blog] | Business | + |
| W6 | 2026-05-12 | "April 2026 was our best month ever"[^homepage] | Business | + |
| W6 | 2026-05-15 | Community Edition v3.2.1[^gh] | OSS | + |
| W6–W3 | 2026-05 → 09 | User journeys, AI Assistants channel, funnel upgrades[^changelog] | OSS | + |

# OSS successes
- AGPL code with a usable CE; lightweight script remains the privacy benchmark[^gh].
# OSS failures / risks
- CE releases are infrequent vs cloud (last CE release May 2026)[^gh].
# Business successes
- Profitable, bootstrapped, record growth in 2026[^homepage].
# Business failures / risks
- Competes with free GA4 and with fast-moving OSS newcomers ([Rybbit](/projects/web-platforms/rybbit.md), [Umami](/projects/web-platforms/umami.md)).

# By window
## W3
- Funnel upgrades (Sept 2026)[^changelog].
## W6
- Record month; user journeys; AI Assistants channel[^homepage][^changelog].
## W9
- No-investor stance reaffirmed[^blog].
## W12
- No notable events found.
## W24
- No notable events found (steady growth; AI referral analysis Dec 2024)[^ai-traffic].

# Lessons
- AGPL + hosted SaaS + privacy positioning is a durable, VC-free business when the product is simple and the cloud is the default.

# Related
- [Plausible Insights](/organizations/plausible-insights.md)
- [Umami](/projects/web-platforms/umami.md), [Matomo](/projects/web-platforms/matomo.md), [Rybbit](/projects/web-platforms/rybbit.md), [PostHog](/projects/end-user-apps/posthog.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/plausible/analytics
[^arr]: https://plausible.io/blog/open-source-saas
[^homepage]: https://plausible.io/blog/homepage-edits-conversion-lift
[^blog]: https://plausible.io/blog
[^changelog]: https://plausible.io/changelog
[^ai-traffic]: https://plausible.io/blog/ai-referral-traffic-and-optimization
