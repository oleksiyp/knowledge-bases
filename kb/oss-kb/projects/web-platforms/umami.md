---
type: OSS Project
title: Umami
description: "MIT-licensed privacy-focused web analytics; the most-starred OSS GA alternative (39K stars), it shipped a redesigned v3 (Nov 2025, Postgres-only) and by Sept 2026 added heatmaps, session replay controls and MCP support."
resource: https://github.com/umami-software/umami
tags: [web-analytics, privacy, mit, saas-alternative]
domain: web-platforms
license: MIT
license_history: ["MIT"]
governance: single-vendor
steward: Umami Software, Inc.
backing_orgs: []
metrics:
  github_stars: { value: 39134, as_of: 2026-10-03 }
  latest_release: { value: "v3.4.0", as_of: 2026-09-17 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/umami-software/umami
    title: Umami GitHub repository (releases)
  - id: v3
    resource: https://umami.is/blog/umami-v3
    title: "Umami: Umami v3 (2025-11-06)"
  - id: heise
    resource: https://www.heise.de/en/news/Umami-v3-Google-Analytics-Alternative-with-New-Tracking-Features-11069615.html
    title: "heise: Umami v3 — Google Analytics alternative with new tracking features"
  - id: updates
    resource: https://umami.is/blog/category/product-updates
    title: "Umami blog: product updates (v3.2 heatmaps, v3.4 MCP)"
---
# Summary
Umami stays fully MIT (no enterprise directory) while out-starring Plausible and Matomo[^gh]. **Umami v3 (6 Nov 2025)** brought a rebuilt UI, segments and cohorts, tracking links and pixels — and dropped MySQL for PostgreSQL only[^v3][^heise]. 2026 releases added heatmaps and session-replay controls (v3.2) and, in **v3.4 (17 Sept 2026)**, annotations, **MCP support**, account API keys and a typed API client[^updates][^gh]. Funding details are only available from aggregators (unverified). Verdict: OSS growing; business growing (cloud product).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-06 | Umami v3 (new UI, cohorts; Postgres-only)[^v3][^heise] | OSS | + |
| W6 | 2026 (mid) | v3.2: heatmaps, replay controls, security hardening[^updates] | OSS | + |
| W3 | 2026-09-17 | v3.4: MCP, annotations, API keys[^gh][^updates] | OSS | + |

# OSS successes
- Permissive license with no gated directory; rapid feature growth[^gh].
# OSS failures / risks
- MySQL removal forced migrations for self-hosters[^heise].
# Business successes
- Cloud product expanding into product-analytics features (replay, heatmaps)[^updates].
# Business failures / risks
- No verified financials; overlap with PostHog's free tier.

# By window
## W3
- v3.4 with MCP[^gh].
## W6
- v3.2 heatmaps/replay[^updates].
## W9
- No notable events found.
## W12
- v3 launch[^v3].
## W24
- No notable events found.

# Lessons
- Analytics tools are converging: privacy-first web analytics add product-analytics features while PostHog adds web analytics.

# Related
- [Plausible](/projects/web-platforms/plausible.md), [Matomo](/projects/web-platforms/matomo.md), [Rybbit](/projects/web-platforms/rybbit.md), [PostHog](/projects/end-user-apps/posthog.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/umami-software/umami
[^v3]: https://umami.is/blog/umami-v3
[^heise]: https://www.heise.de/en/news/Umami-v3-Google-Analytics-Alternative-with-New-Tracking-Features-11069615.html
[^updates]: https://umami.is/blog/category/product-updates
