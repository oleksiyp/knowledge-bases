---
type: OSS Project
title: Baserow
description: "Dutch open-core (MIT core + premium) Airtable alternative that grew 2.3x to 150K SaaS users in 2025 and launched Baserow 2.0 (Nov 2025) with an app builder, automations and the Kuma AI assistant, positioned for security-sensitive and public-sector users."
resource: https://github.com/baserow/baserow
tags: [no-code, airtable-alternative, open-core, mit, europe, sovereignty]
domain: web-platforms
license: MIT (core) + proprietary premium/enterprise directories
license_history: ["MIT core with premium/enterprise directories"]
governance: company-led-open-core
steward: Baserow B.V.
backing_orgs: []
metrics:
  github_stars: { value: 6070, as_of: 2026-10-03 }
  active_saas_users: { value: 150000, as_of: 2025-12 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/baserow/baserow
    title: Baserow GitHub repository (license header)
  - id: v2
    resource: https://baserow.io/blog/baserow20-press-release-general
    title: "Baserow: Baserow launches 2.0 (2025-11-18)"
  - id: review
    resource: https://baserow.io/blog/year-in-review-2025-baserow
    title: "Baserow: 2025 — a look back"
  - id: seed
    resource: https://baserow.io/blog/announcing-Baserow-5m-seed-round
    title: "Baserow: Announcing €5M seed round (2022)"
  - id: canals
    resource: https://siliconcanals.com/baserow-no-code-european-approach-ai-privacy/
    title: "Silicon Canals: How Baserow balances privacy, control and collaboration"
---
# Summary
Baserow is the steady European counterpoint to NocoDB's relicensing: an MIT core with separately licensed premium directories[^gh]. **Baserow 2.0 (18 Nov 2025)** expanded it from a database into a data-collaboration platform with an Application Builder, Automations Builder (beta) and the **Kuma** AI assistant, aimed at security-sensitive industries[^v2]. In 2025 it reported **2.3× user growth to 150,000 active SaaS users**, 100+ features and a move from GitLab to GitHub (hence the low star count)[^review]. Last disclosed funding is a €5M seed (2022)[^seed]. Verdict: OSS growing; business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-18 | Baserow 2.0 (app builder, automations, Kuma AI)[^v2] | OSS | + |
| W12 | 2025-12 | Year review: 150K active SaaS users (2.3×), GitHub migration[^review] | Business | + |
| W9–W3 | 2026 | Public-sector/regulated positioning amid EU sovereignty push[^canals] | Business | + |

# OSS successes
- Kept a permissive core while competitors tightened[^gh].
# OSS failures / risks
- Late GitHub move means small visible community (6K stars)[^gh].
# Business successes
- Strong SaaS growth on a small seed[^review][^seed].
# Business failures / risks
- AI builders and Airtable (now Bending Spoons-owned) compete for the same buyers.

# By window
## W3
- No notable events found.
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- Baserow 2.0 and 2025 growth report[^v2][^review].
## W24
- No notable events found.

# Lessons
- European "sovereign" positioning is a real tailwind for permissively licensed SaaS alternatives.

# Related
- [NocoDB](/projects/web-platforms/nocodb.md), [Grist](/projects/web-platforms/grist.md)
- [European sovereign tech OSS](/projects/coss-market/european-sovereign-tech-oss.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/baserow/baserow
[^v2]: https://baserow.io/blog/baserow20-press-release-general
[^review]: https://baserow.io/blog/year-in-review-2025-baserow
[^seed]: https://baserow.io/blog/announcing-Baserow-5m-seed-round
[^canals]: https://siliconcanals.com/baserow-no-code-european-approach-ai-privacy/
