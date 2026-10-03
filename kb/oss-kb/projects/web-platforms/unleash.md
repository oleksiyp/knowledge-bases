---
type: OSS Project
title: Unleash (and OpenFeature)
description: "Oslo-based open-source feature-flag platform (AGPL core) that reframed itself as 'FeatureOps' for AI-generated code and raised a $35M Series B led by One Peak (Mar 2026) after doubling ARR three years running; the vendor-neutral OpenFeature standard (CNCF incubating) now has providers from nearly every flag vendor."
resource: https://github.com/Unleash/unleash
tags: [feature-flags, featureops, agpl-3.0, open-core, vc-backed, openfeature, cncf]
domain: web-platforms
license: AGPL-3.0 (open-source core; Enterprise edition commercial)
license_history: ["AGPL-3.0 (current core; earlier history not re-verified)"]
governance: company-led-open-core
steward: Unleash (Bricks Software AS)
backing_orgs: [organizations/unleash]
metrics:
  github_stars: { value: 13851, as_of: 2026-10-03 }
  paying_customers: { value: "500+", as_of: 2026-03-04 }
  total_funding_usd: { value: "51.5M", as_of: 2026-03-04 }
oss_verdict: stable
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/Unleash/unleash
    title: Unleash GitHub repository
  - id: seriesb
    resource: https://www.getunleash.io/blog/series-b
    title: "Unleash: We've raised $35M in Series B"
  - id: tnw
    resource: https://thenextweb.com/news/oslos-unleash-raises-35m-to-govern-ai-generated-code-as-european-enterprise-bets-grow-bolder
    title: "The Next Web: Oslo's Unleash raises $35M to govern AI-generated code (2026-03-04)"
  - id: openfeature
    resource: https://www.cncf.io/projects/openfeature/
    title: "CNCF: OpenFeature project page"
  - id: cnbc-statsig
    resource: https://www.cnbc.com/2025/09/02/openai-buys-statsig-for-1point1-billion-hires-ceo-as-applications-exec.html
    title: "CNBC: OpenAI acquires Statsig for $1.1 billion (2025-09-02)"
  - id: of-inc
    resource: https://www.cncf.io/blog/2023/12/19/openfeature-becomes-a-cncf-incubating-project/
    title: "CNCF: OpenFeature becomes an incubating project (2023-12-19)"
---
# Summary
Unleash raised a **$35M Series B led by One Peak on 4 Mar 2026** (total $51.5M), reporting **ARR doubled every year since its 2022 Series A**, 140% net revenue retention, 500+ paying customers (Prudential, Lloyds Banking Group, Wayfair, Lenovo) and 40M+ downloads[^tnw][^seriesb]. The pitch: when AI-generated code reaches production, kill switches and gradual rollouts are the safety net ("FeatureOps", Impact Metrics)[^tnw]. Releases continue (v8.2.0, Sept 2026)[^gh]. The wider category standardised on **OpenFeature**, a CNCF incubating project (since Nov 2023) with providers from nearly every flag vendor[^openfeature][^of-inc]. Verdict: OSS stable; business thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-03-04 | $35M Series B (One Peak); ARR 2× three years running[^tnw][^seriesb] | Business | + |
| W3 | 2026-09-08 | Unleash v8.2.0[^gh] | OSS | + |

# OSS successes
- Open-source core with 13.8K stars; standards alignment via OpenFeature[^gh][^openfeature].
# OSS failures / risks
- Enterprise features (SSO, change requests) remain paid; AGPL may deter embedders.
# Business successes
- One of the few web-platform COSS companies to raise a large round in 2026, on AI-safety framing[^tnw].
# Business failures / risks
- Competes with LaunchDarkly, Statsig (acquired by OpenAI for ~$1.1B in Sept 2025)[^cnbc-statsig], GrowthBook and PostHog flags.

# By window
## W3
- v8.x releases[^gh].
## W6
- No notable events found.
## W9
- Series B[^tnw].
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- "AI-generated code needs guardrails" is a fundable narrative for OSS infrastructure that predates AI.

# Related
- [Unleash (org)](/organizations/unleash.md), [Unleash Series B event](/events/2026-03-unleash-series-b.md)
- [GrowthBook](/projects/web-platforms/growthbook.md), [PostHog](/projects/end-user-apps/posthog.md), [CNCF](/organizations/cncf.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/Unleash/unleash
[^seriesb]: https://www.getunleash.io/blog/series-b
[^tnw]: https://thenextweb.com/news/oslos-unleash-raises-35m-to-govern-ai-generated-code-as-european-enterprise-bets-grow-bolder
[^openfeature]: https://www.cncf.io/projects/openfeature/
[^of-inc]: https://www.cncf.io/blog/2023/12/19/openfeature-becomes-a-cncf-incubating-project/
[^cnbc-statsig]: https://www.cnbc.com/2025/09/02/openai-buys-statsig-for-1point1-billion-hires-ceo-as-applications-exec.html
