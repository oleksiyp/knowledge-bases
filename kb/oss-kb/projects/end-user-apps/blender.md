---
type: OSS Project
title: Blender
description: "GPL 3D suite funded by the Blender Development Fund; shipped Blender 5.0 (Nov 2025) and 5.2 LTS (July 2026), added Netflix Animation as Corporate Patron, and reversed an Anthropic patronage into a one-off donation after community backlash over AI."
resource: https://projects.blender.org/blender/blender
tags: [3d, creative, gpl, foundation-hosted, development-fund, ai-policy]
domain: end-user-apps
license: GPL-3.0-or-later
license_history: ["GPL-2.0-or-later → GPL-3.0-or-later"]
governance: foundation
steward: Blender Foundation
backing_orgs: []
metrics:
  github_mirror_stars: { value: 20652, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: b50
    resource: https://www.blender.org/download/releases/5-0/
    title: "Blender 5.0 release"
  - id: b52
    resource: https://www.blender.org/download/releases/5-2/
    title: "Blender 5.2 LTS release"
  - id: netflix
    resource: https://www.blender.org/press/netflix-animation-studios-joins-the-blender-development-fund-as-corporate-patron/
    title: "Blender: Netflix Animation Studios joins the Development Fund as Corporate Patron"
  - id: anthropic
    resource: https://www.blender.org/press/anthropic-joins-the-blender-development-fund-as-corporate-patron/
    title: "Blender: Anthropic joins the Development Fund as Corporate Patron"
  - id: aipolicy
    resource: https://www.blender.org/news/upcoming-blender-development-fund-and-ai-policies/
    title: "Blender: Upcoming Blender Development Fund and AI policies"
  - id: hdr
    resource: https://www.phoronix.com/news/Blender-5.0-Released
    title: "Phoronix: Blender 5.0 released with better Vulkan support, HDR on Wayland"
    author: org:phoronix
---
# Summary
Blender is the gold standard of foundation-funded creative OSS. Blender 5.0 (18 Nov 2025) brought HDR on Wayland and better Vulkan support[^b50][^hdr]; 5.2 LTS followed on 14 July 2026[^b52]. Netflix Animation Studios joined the Development Fund as a Corporate Patron (Jan 2026)[^netflix]. On 28 April 2026 Anthropic was announced as a Corporate Patron, supporting core/Python API work[^anthropic]; after community backlash the Foundation on 1 May converted it to a single donation, said Blender "is made by humans for humans", that no AI functionality is integrated or planned, and promised formal AI and donation policies[^aipolicy]. Verdict: thriving OSS and funding; AI is the main governance flashpoint.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-18 | Blender 5.0[^b50] | OSS | + |
| W9 | 2026-01-27 | Netflix Animation Studios becomes Corporate Patron[^netflix] | Business | + |
| W6 | 2026-04-28 | Anthropic announced as Corporate Patron[^anthropic] | Business | + |
| W6 | 2026-05-01 | Converted to one-off donation; AI policy process announced[^aipolicy] | OSS | mixed |
| W3 | 2026-07-14 | Blender 5.2 LTS[^b52] | OSS | + |

# OSS successes
- Major releases on schedule; industry-grade adoption.
# OSS failures / risks
- Community anti-AI sentiment constrains which sponsors are acceptable[^aipolicy].
# Business successes
- Corporate patron roster grows (Netflix)[^netflix].
# Business failures / risks
- Reputational risk from sponsor selection; fund totals not verified here.

# By window
## W3
- 5.2 LTS[^b52].
## W6
- Anthropic patronage reversal; AI policy[^anthropic][^aipolicy].
## W9
- Netflix patron[^netflix].
## W12
- Blender 5.0[^b50].
## W24
- 4.x releases (no notable events beyond normal cadence).

# Lessons
- Creative-tool communities treat AI-company money as a values question; foundations need sponsor policies before accepting it.

# Related
- [Penpot](/projects/end-user-apps/penpot.md), [Audacity](/projects/end-user-apps/audacity.md), [Omarchy](/projects/end-user-apps/omarchy.md) (also saw AI-lab patron churn)

[^b50]: https://www.blender.org/download/releases/5-0/
[^b52]: https://www.blender.org/download/releases/5-2/
[^netflix]: https://www.blender.org/press/netflix-animation-studios-joins-the-blender-development-fund-as-corporate-patron/
[^anthropic]: https://www.blender.org/press/anthropic-joins-the-blender-development-fund-as-corporate-patron/
[^aipolicy]: https://www.blender.org/news/upcoming-blender-development-fund-and-ai-policies/
[^hdr]: https://www.phoronix.com/news/Blender-5.0-Released
