---
type: OSS Project
title: GNOME
description: "The GNOME desktop; technically steady but its Foundation endured deficits, a halved budget and executive-director churn (two EDs gone within a year), now trying a donor-funded Fellowship program."
resource: https://www.gnome.org
tags: [desktop-environment, linux, gpl, foundation-hosted, funding-crisis]
domain: end-user-apps
license: GPL-2.0-or-later
license_history: ["GPL/LGPL family"]
governance: foundation
steward: GNOME Foundation
backing_orgs: []
metrics:
  fy2025_budget_expenses_usd: { value: 550000, as_of: 2024-10-10 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: budget
    resource: https://foundation.gnome.org/2024/10/10/budget-and-economic-review/
    title: "GNOME Foundation: 2024–2025 budget and economic review"
  - id: lwn
    resource: https://lwn.net/Articles/993665/
    title: "LWN: Free-software foundations face fundraising problems"
    author: org:lwn
  - id: phoronix-cuts
    resource: https://www.phoronix.com/news/GNOME-Cost-Cutting-2024
    title: "Phoronix: GNOME Foundation announces cost cutting measures"
    author: org:phoronix
  - id: deobald-in
    resource: https://tech.slashdot.org/story/25/05/07/200259/new-gnome-executive-director-named
    title: "Slashdot: New GNOME executive director named"
  - id: deobald-out
    resource: https://blogs.gnome.org/aday/2025/08/29/thanks-and-farewell-to-steven-deobald/
    title: "Allan Day: Thanks and farewell to Steven Deobald"
  - id: fellowship
    resource: https://fellowship.gnome.org/
    title: "GNOME Fellowship program"
  - id: stf
    resource: https://foundation.gnome.org/2024/05/31/gnome-development-initiative-update/
    title: "GNOME Foundation: GNOME Development Initiative and Sovereign Tech Fund"
---
# Summary
GNOME (the default desktop of Fedora Workstation and Ubuntu) keeps shipping on its six-month cycle, but its Foundation has been the domain's clearest example of nonprofit fragility. In Oct 2024 it adopted a FY2024–25 budget about half the prior year's (~$550K expenses vs ~$586K income) after running deficits for 3+ years and losing ED Holly Million[^budget][^lwn][^phoronix-cuts]. Steven Deobald was named ED in May 2025 and left on 29 Aug 2025, under four months later[^deobald-in][^deobald-out]. The €1M Sovereign Tech Fund program (2023–24) largely concluded[^stf]. In 2026 the Foundation launched a donor-funded Fellowship paying $70K–$100K/year for sustainability work, starting with one full-time or two part-time fellows from ~May 2026[^fellowship]. Verdict: OSS stable, Foundation finances struggling.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-08/10 | Halved budget, cost cuts after multi-year deficits[^budget][^phoronix-cuts] | Business | − |
| W24 | 2025-05-07 | Steven Deobald named Executive Director[^deobald-in] | Business | + |
| W24 | 2025-08-29 | Deobald departs after <4 months[^deobald-out] | Business | − |
| W9 | 2026-03 | GNOME Fellowship program announced ($70K–$100K/yr)[^fellowship] | Business | + |
| W6 | 2026-05 | Fellowship round one begins[^fellowship] | OSS | + |

# OSS successes
- Steady releases; STF-funded infrastructure/accessibility work completed[^stf].
# OSS failures / risks
- Less visible in the 2025–26 gaming-driven Linux wave, where KDE Plasma is the default.
# Business successes
- Fellowship shows a shift to directly funding maintenance[^fellowship].
# Business failures / risks
- Leadership instability and small, donation-dependent budget[^deobald-out][^budget].

# By window
## W3
- No notable events found.
## W6
- Fellowship round one starts[^fellowship].
## W9
- Fellowship announced[^fellowship].
## W12
- No notable events found.
## W24
- Budget halved; ED hired and departed[^budget][^deobald-out].

# Lessons
- Foundations with small budgets cannot absorb executive churn; continuity matters more than vision.
- Government funds (STF) can bootstrap work but don't fix structural revenue gaps.

# Related
- [KDE Plasma](/projects/end-user-apps/kde-plasma.md), [Ubuntu](/projects/end-user-apps/ubuntu.md)

[^budget]: https://foundation.gnome.org/2024/10/10/budget-and-economic-review/
[^lwn]: https://lwn.net/Articles/993665/
[^phoronix-cuts]: https://www.phoronix.com/news/GNOME-Cost-Cutting-2024
[^deobald-in]: https://tech.slashdot.org/story/25/05/07/200259/new-gnome-executive-director-named
[^deobald-out]: https://blogs.gnome.org/aday/2025/08/29/thanks-and-farewell-to-steven-deobald/
[^fellowship]: https://fellowship.gnome.org/
[^stf]: https://foundation.gnome.org/2024/05/31/gnome-development-initiative-update/
