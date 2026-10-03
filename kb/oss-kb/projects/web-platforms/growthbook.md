---
type: OSS Project
title: GrowthBook
description: "Open-core (MIT + enterprise directories), warehouse-native feature-flagging and A/B-testing platform from YC W22; reported a ~$22.6M Series A in mid-2025 (aggregator data) and shipped v5 in 2026 as experimentation consolidates."
resource: https://github.com/growthbook/growthbook
tags: [feature-flags, experimentation, open-core, yc, warehouse-native]
domain: web-platforms
license: MIT (core) + GrowthBook Enterprise License (enterprise directories)
license_history: ["MIT core + enterprise directories"]
governance: company-led-open-core
steward: GrowthBook, Inc.
backing_orgs: []
metrics:
  github_stars: { value: 8467, as_of: 2026-10-03 }
  latest_release: { value: "v5.1.0", as_of: 2026-09-22 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/growthbook/growthbook
    title: GrowthBook GitHub repository (license header, releases)
  - id: pitchbook
    resource: https://pitchbook.com/profiles/company/466885-63
    title: "PitchBook: GrowthBook company profile (Series A, 2025)"
  - id: tracxn
    resource: https://tracxn.com/d/companies/growthbook/__ybuTaEleb_daVWYK1sVloK4npIHJdsMUEHm0JcpnZkM/funding-and-investors
    title: "Tracxn: GrowthBook funding rounds"
  - id: cnbc-statsig
    resource: https://www.cnbc.com/2025/09/02/openai-buys-statsig-for-1point1-billion-hires-ceo-as-applications-exec.html
    title: "CNBC: OpenAI acquires Statsig for $1.1 billion (2025-09-02)"
  - id: alts
    resource: https://www.growthbook.io/blog/unleash-alternatives
    title: "GrowthBook blog: Unleash alternatives (2026)"
---
# Summary
GrowthBook queries a company's own warehouse (Snowflake, BigQuery, Databricks, ClickHouse…) for experiment analysis instead of re-ingesting events — a model that suited the warehouse-centric data stack[^gh]. Aggregators report a **~$22.6M Series A in June–July 2025** with Khosla Ventures and YC among investors; no primary announcement was found, so treat amounts as unverified[^pitchbook][^tracxn]. It reached **v5.1.0 (22 Sept 2026)**[^gh] and markets directly against Unleash and LaunchDarkly[^alts]. Verdict: OSS growing; business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06/07 | Series A ~$22.6M reported (unverified)[^pitchbook][^tracxn] | Business | + |
| W3 | 2026-09-22 | v5.1.0[^gh] | OSS | + |

# OSS successes
- Warehouse-native design avoids data duplication; active releases[^gh].
# OSS failures / risks
- Enterprise directories under a proprietary license[^gh].
# Business successes
- Funded at a time when most web-platform COSS rounds dried up[^pitchbook].
# Business failures / risks
- Category consolidation (OpenAI bought Statsig for ~$1.1B in Sept 2025[^cnbc-statsig]; PostHog bundling) squeezes standalone vendors (assessment).

# By window
## W3
- v5.1[^gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Series A (reported)[^pitchbook].

# Lessons
- Building on the customer's warehouse is a viable OSS wedge against SaaS incumbents that charge per event.

# Related
- [Unleash](/projects/web-platforms/unleash.md), [PostHog](/projects/end-user-apps/posthog.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/growthbook/growthbook
[^pitchbook]: https://pitchbook.com/profiles/company/466885-63
[^tracxn]: https://tracxn.com/d/companies/growthbook/__ybuTaEleb_daVWYK1sVloK4npIHJdsMUEHm0JcpnZkM/funding-and-investors
[^alts]: https://www.growthbook.io/blog/unleash-alternatives
[^cnbc-statsig]: https://www.cnbc.com/2025/09/02/openai-buys-statsig-for-1point1-billion-hires-ceo-as-applications-exec.html
