---
type: OSS Project
title: Matomo
description: "GPL-3.0 veteran self-hosted analytics platform (formerly Piwik) used on 1.4M+ websites; founder Matthieu Aubry handed the CEO role to Adam Taylor (Feb 2026) as InnoCraft pushes European sales and AI-chatbot traffic tracking."
resource: https://github.com/matomo-org/matomo
tags: [web-analytics, privacy, gpl-3.0, php, europe, self-hosting]
domain: web-platforms
license: GPL-3.0
license_history: ["GPL-3.0"]
governance: single-vendor
steward: InnoCraft (Matomo)
backing_orgs: []
metrics:
  github_stars: { value: 21920, as_of: 2026-10-03 }
  websites_using: { value: "1.4M+", as_of: 2026-02-18 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/matomo-org/matomo
    title: Matomo GitHub repository
  - id: ceo
    resource: https://matomo.org/blog/2026/02/matomo-evolves-its-global-leadership-to-drive-international-expansion/
    title: "Matomo: Matomo evolves its global leadership to drive international expansion (2026-02-18)"
  - id: changelog
    resource: https://matomo.org/changelog/
    title: "Matomo changelog"
---
# Summary
Matomo is the long-running, GPL-licensed incumbent of privacy analytics, used on **1.4M+ websites in 190+ countries**[^ceo]. On **2 Feb 2026** COO **Adam Taylor became CEO** and founder Matthieu Aubry moved to Chief Product Officer after 10+ years, alongside new country sales leads for Germany and France[^ceo]. Product cadence continues (5.x line, including AI-chatbot traffic tracking in 5.8)[^changelog]. Verdict: OSS stable; business stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-02-02 | Adam Taylor CEO; Aubry → CPO; EU sales expansion[^ceo] | Business | ± |
| W9 | 2026-03 | Matomo 5.8 with AI chatbot tracking (per changelog)[^changelog] | OSS | + |

# OSS successes
- Mature, broadly deployed GPL codebase[^gh].
# OSS failures / risks
- PHP/MySQL stack and UI feel dated next to Umami/Plausible (assessment).
# Business successes
- European data-sovereignty demand; regional sales build-out[^ceo].
# Business failures / risks
- Founder-to-operator CEO transition; competition from newer OSS tools.

# By window
## W3
- No notable events found (5.x releases).
## W6
- No notable events found.
## W9
- CEO transition[^ceo].
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Older OSS SaaS alternatives professionalise (operator CEOs, regional sales) rather than raise VC.

# Related
- [Plausible](/projects/web-platforms/plausible.md), [Umami](/projects/web-platforms/umami.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/matomo-org/matomo
[^ceo]: https://matomo.org/blog/2026/02/matomo-evolves-its-global-leadership-to-drive-international-expansion/
[^changelog]: https://matomo.org/changelog/
