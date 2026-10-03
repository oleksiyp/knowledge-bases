---
type: Organization
title: Onyx (DanswerAI, Inc.)
description: "San Francisco YC company behind Onyx (formerly Danswer), an MIT-core open-core enterprise AI search platform; raised a $10M seed co-led by Khosla Ventures and First Round in March 2025 — growing."
resource: https://onyx.app
tags: [commercial-open-source, ai-apps, enterprise-search, yc]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "$10M", last_round: "Seed $10M (Khosla, First Round)", last_round_date: 2025-03-18, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/ai-apps/onyx]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: onyx-seed
    resource: https://chinstrap.community/coss-enterprise-search-provider-onyx-raises-10-million-seed-round/
    title: "Chinstrap: Onyx raises $10M seed (2025-03-18)"
  - id: onyx-tfn
    resource: https://techfundingnews.com/onyx-lands-10m-to-build-ai-powered-24-7-coworker-that-instantly-finds-what-you-need/
    title: "Tech Funding News: Onyx lands $10M"
  - id: onyx-gh
    resource: https://github.com/onyx-dot-app/onyx
    title: Onyx GitHub repository and LICENSE
---

# Summary
Founded by Chris Weaver and Yuhong Sun (YC), Onyx raised $10M on 2025-03-18 co-led by Khosla Ventures and First Round, with YC and angels (Gokul Rajaram, Arash Ferdowsi, Amit Agarwal); customers cited include Netflix, Ramp, Zendesk and Thales[^onyx-seed][^onyx-tfn]. The codebase is MIT except `ee/` directories under the Onyx Enterprise License[^onyx-gh].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-03-18 | $10M seed[^onyx-seed] | + |

# Monetization model
Onyx Cloud per-seat and self-hosted enterprise licence for `ee/` features (permission sync, etc.).

# Successes
- Bottom-up OSS adoption into large enterprises[^onyx-seed].

# Failures / risks
- Competition from Glean and suite vendors' native assistants.

# Related
- [Onyx project](/projects/ai-apps/onyx.md)

[^onyx-seed]: Chinstrap — https://chinstrap.community/coss-enterprise-search-provider-onyx-raises-10-million-seed-round/
[^onyx-tfn]: Tech Funding News — https://techfundingnews.com/onyx-lands-10m-to-build-ai-powered-24-7-coworker-that-instantly-finds-what-you-need/
[^onyx-gh]: GitHub — https://github.com/onyx-dot-app/onyx
