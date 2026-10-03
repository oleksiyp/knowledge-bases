---
type: OSS Project
title: PostHog
description: "Open-core product-analytics/dev-tools suite (MIT core + proprietary ee); the domain's VC growth story — $70M Series D (June 2025) and $75M Series E at $1.4B (Sept 2025) — while expanding into AI coding tools and data warehousing."
resource: https://github.com/PostHog/posthog
tags: [analytics, saas-alternative, open-core, mit, vc-backed, unicorn]
domain: end-user-apps
license: MIT (core) + proprietary (ee/)
license_history: ["MIT core with proprietary ee directory; separate MIT-only posthog-foss mirror"]
governance: company-led-open-core
steward: PostHog Inc.
backing_orgs: [organizations/posthog]
metrics:
  github_stars: { value: 40114, as_of: 2026-10-03 }
  valuation_usd: { value: "1.4B", as_of: 2025-09-29 }
oss_verdict: growing
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: seriesd
    resource: https://posthog.com/blog/series-d
    title: "PostHog: Series D ($70M)"
  - id: seriese
    resource: https://posthog.com/blog/series-e
    title: "PostHog: Series E ($75M at $1.4B, led by Peak XV)"
  - id: npm
    resource: https://news.ycombinator.com/item?id=46031776
    title: "HN: Malware in PostHog NPM packages (Nov 2025)"
  - id: hashed
    resource: https://www.uxwizz.com/blog/posthog-subprocessors-ad-audiences-update
    title: "UXWizz: PostHog now shares hashed emails of new users with Reddit and LinkedIn"
  - id: code
    resource: https://posthog.com/code
    title: "PostHog Code"
  - id: foss
    resource: https://github.com/PostHog/posthog-foss
    title: "PostHog FOSS repository"
  - id: duckdb
    resource: https://posthog.com/blog/why-we-rebuilt-our-data-warehouse
    title: "PostHog: Why we rebuilt our data warehouse on DuckDB instead of ClickHouse"
  - id: gh
    resource: https://github.com/PostHog/posthog
    title: PostHog repository
---
# Summary
PostHog is the strongest commercial-open-source growth story among SaaS alternatives: a $70M Series D at almost $1B valuation (June 2025)[^seriesd] followed three months later by a $75M Series E at $1.4B led by Peak XV (29 Sept 2025)[^seriese]. It keeps an MIT core (plus a pure-FOSS mirror, posthog-foss, surfaced July 2026)[^foss] and expanded into AI tooling ("PostHog Code", May 2026)[^code] and a DuckDB-based warehouse (July 2026)[^duckdb]. Negatives: its npm packages were hit by malware in the Nov 2025 Shai-Hulud-style npm campaign[^npm], and in Feb 2026 it began sharing hashed emails of new users with Reddit/LinkedIn ad platforms[^hashed]. Verdict: OSS growing; business thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-09 | $70M Series D (~$1B valuation)[^seriesd] | Business | + |
| W24 | 2025-09-29 | $75M Series E at $1.4B (Peak XV)[^seriese] | Business | + |
| W12 | 2025-11-24 | Malicious versions of PostHog npm packages[^npm] | OSS | − |
| W9 | 2026-02-27 | Hashed-email sharing with ad platforms disclosed[^hashed] | Business | − |
| W6 | 2026-05 | PostHog Code launched[^code] | Business | + |
| W3 | 2026-07-03/09 | DuckDB warehouse rebuild; posthog-foss mirror highlighted[^duckdb][^foss] | OSS | + |

# OSS successes
- Large, active public codebase (~40k stars) and FOSS mirror[^gh][^foss].
# OSS failures / risks
- npm supply-chain compromise[^npm]; proprietary ee/ code limits self-hosters.
# Business successes
- Two large rounds within four months; unicorn status[^seriesd][^seriese].
# Business failures / risks
- Privacy-adjacent marketing practices at odds with "privacy-friendly analytics" positioning[^hashed].

# By window
## W3
- Warehouse rebuild; FOSS mirror[^duckdb][^foss].
## W6
- PostHog Code[^code].
## W9
- Ad-platform hashed email sharing[^hashed].
## W12
- npm malware incident[^npm].
## W24
- Series D and E[^seriesd][^seriese].

# Lessons
- Product-led open core with generous cloud free tiers can still raise at unicorn valuations in 2025.
- Open-core analytics vendors are judged on privacy practices, not just code license.

# Related
- [PostHog Inc.](/organizations/posthog.md), [Cal.com](/projects/end-user-apps/cal-com.md)

[^seriesd]: https://posthog.com/blog/series-d
[^seriese]: https://posthog.com/blog/series-e
[^npm]: https://news.ycombinator.com/item?id=46031776
[^hashed]: https://www.uxwizz.com/blog/posthog-subprocessors-ad-audiences-update
[^code]: https://posthog.com/code
[^foss]: https://github.com/PostHog/posthog-foss
[^duckdb]: https://posthog.com/blog/why-we-rebuilt-our-data-warehouse
[^gh]: https://github.com/PostHog/posthog
