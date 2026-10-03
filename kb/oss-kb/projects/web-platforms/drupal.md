---
type: OSS Project
title: Drupal
description: "GPL PHP CMS that relaunched itself for marketers (Drupal CMS 1.0 in Jan 2025, 2.0 with the Canvas visual builder in Jan 2026) and an AI initiative, while its nonprofit steward ran a ~$1.15M two-year deficit and changed CEOs in July 2026 and its main commercial backer Acquia kept cutting staff."
resource: https://www.drupal.org
tags: [cms, php, gpl, foundation-hosted, ai, enterprise-cms]
domain: web-platforms
license: GPL-2.0-or-later
license_history: ["GPL-2.0-or-later (2001-)"]
governance: community
steward: Drupal Association (nonprofit) with project lead Dries Buytaert
backing_orgs: [organizations/drupal-association, organizations/acquia]
metrics:
  latest_core_milestone: { value: "Drupal 12.0.0-beta1 / 11.5.0-beta1 scheduled week of 2026-09-14", as_of: 2026-09-11 }
  drupal_association_reserves_usd: { value: "~960K (2.3 months of opex)", as_of: 2026-08-04 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cms1
    resource: https://www.thedroptimes.com/46387/drupal-cms-10-key-step-in-drupals-evolving-strategy
    title: "The DropTimes: Drupal CMS 1.0 — a key step in Drupal's evolving strategy"
  - id: cms2-dries
    resource: https://dri.es/drupal-cms-2-released
    title: "Dries Buytaert: Drupal CMS 2.0 released"
  - id: cms2-org
    resource: https://www.drupal.org/blog/drupal-cms-20-is-here-visual-building-ai-and-site-templates-transform-drupal
    title: "Drupal.org: Drupal CMS 2.0 is here — visual building, AI and site templates"
  - id: ai-init
    resource: https://www.drupal.org/association/blog/drupal-launches-new-ai-initiative-to-democratize-intelligent-digital-experiences-for-everyone
    title: "Drupal Association: Drupal launches new AI initiative"
  - id: ai-init-de
    resource: https://www.drupal.de/en/news/update-drupal-ai-initiative
    title: "drupal.de: Update on the Drupal AI Initiative"
  - id: da-audit
    resource: https://www.drupal.org/association/blog/drupal-association-2025-audit-and-financial-overview
    title: "Drupal Association: 2025 audit and financial overview (2026-08-04)"
  - id: da-ceo
    resource: https://www.drupal.org/association/blog/tiffany-farriss-to-lead-the-drupal-association
    title: "Drupal Association: Tiffany Farriss to lead the Drupal Association"
  - id: droptimes-ceo
    resource: https://www.thedroptimes.com/71179/drupal-association-appoints-tiffany-farriss-interim-ceo
    title: "The DropTimes: Drupal Association appoints Tiffany Farriss as interim CEO"
  - id: d12
    resource: https://www.thedroptimes.com/70355/drupal-2026-release-support-timeline
    title: "The DropTimes: Drupal core schedule confirms 2026 dates for Drupal 11.4, Drupal 12 and Drupal 10 EOL"
  - id: sched
    resource: https://www.drupal.org/about/core/policies/core-release-cycles/schedule
    title: "Drupal.org: Drupal core release schedule"
  - id: rotterdam
    resource: https://drupal.org/about/ai/initiatives/blog/drupal-ai-after-the-driesnote-rotterdam-what-you-can-use-today-and-what-comes-next
    title: "Drupal AI after the DriesNote Rotterdam (Sept 2026)"
  - id: tranquill
    resource: https://www.globenewswire.com/news-release/2025/08/19/3135739/0/en/Acquia-Welcomes-Chris-Tranquill-As-Chief-Executive-Officer.html
    title: "GlobeNewswire: Acquia welcomes Chris Tranquill as CEO (2025-08-19)"
---
# Summary
Drupal spent the two years re-founding itself as a product for non-developers: the Starshot initiative shipped **Drupal CMS 1.0 on 15 Jan 2025**[^cms1] and **Drupal CMS 2.0 on 28 Jan 2026** with the Canvas drag-and-drop page builder, site templates and AI-assisted authoring[^cms2-dries][^cms2-org]. An agency-funded **Drupal AI Initiative** launched in June 2025[^ai-init][^ai-init-de]. Core development is healthy (Drupal 12 betas scheduled for Sept 2026)[^d12][^sched]. The weak spot is money: the Drupal Association disclosed a combined ~$1.15M 2024–2025 deficit with reserves down 60% since 2022, and CEO Tim Doyle was replaced by interim CEO Tiffany Farriss in July 2026[^da-audit][^da-ceo]. Verdict: OSS stable-to-improving; ecosystem business struggling.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-15 | Drupal CMS 1.0 (Starshot) released[^cms1] | OSS | + |
| W24 | 2025-06-09 | Drupal AI Initiative launched by Acquia, 1xINTERNET, Dropsolid, FreelyGive, Salsa Digital[^ai-init][^ai-init-de] | OSS | + |
| W24 | 2025-08-19 | Acquia names Chris Tranquill CEO[^tranquill] | Business | ± |
| W9 | 2026-01-28 | Drupal CMS 2.0 with Canvas, Mercury components, site templates, AI[^cms2-dries][^cms2-org] | OSS | + |
| W3 | 2026-07-15 | Tim Doyle steps down; Tiffany Farriss interim CEO of Drupal Association[^da-ceo][^droptimes-ceo] | Business | − |
| W3 | 2026-08-04 | DA discloses $451K 2025 deficit, restated $923K 2024 deficit, reserves ~2.3 months[^da-audit] | Business | − |
| W3 | 2026-09 | Drupal 12 beta; DriesNote at DrupalCon Rotterdam frames AI/multilingual/headless[^d12][^rotterdam] | OSS | + |

# OSS successes
- Shipped a coherent "product" layer (Drupal CMS) on top of core twice on schedule, addressing the "powerful but hard" reputation[^cms2-dries].
- Canvas visual builder finally delivered after years of Layout Builder criticism[^cms2-org].
- AI initiative with ~290 AI modules and integrations to 21 AI providers (per drupal.de)[^ai-init-de].

# OSS failures / risks
- Market share pressure from WordPress, headless TypeScript CMSs and SaaS site builders; Drupal CMS adoption numbers not published (unverified).
- Drupal.org infrastructure costs rose from $1.3M (2022) to $2.1M (2025)[^da-audit].

# Business successes
- Agencies co-funded AI work (~$100K operational funding plus in-kind contributions at launch)[^ai-init-de].

# Business failures / risks
- Drupal Association structural deficit and reserves below its 3-month minimum for the first time since 2019[^da-audit].
- Unexplained CEO departure mid-2026[^droptimes-ceo]; Acquia (PE-owned by Vista) went through more leadership change — see [Acquia](/organizations/acquia.md).

# By window
## W3
- Interim CEO and deficit disclosure at the Drupal Association[^da-ceo][^da-audit]; Drupal 12 betas and DrupalCon Rotterdam[^d12][^rotterdam].
## W6
- No notable events found beyond routine Drupal CMS 2.x and core minor releases.
## W9
- Drupal CMS 2.0 + Canvas (28 Jan 2026)[^cms2-dries].
## W12
- No notable events found (Drupal CMS 2.0 roadmap work).
## W24
- Drupal CMS 1.0 (Jan 2025)[^cms1]; AI Initiative (June 2025)[^ai-init]; new Acquia CEO (Aug 2025)[^tranquill].

# Lessons
- A mature OSS project can re-launch its product layer without forking or relicensing; the bottleneck becomes the funding of the steward, not code.
- Nonprofits that depend on events and one dominant corporate sponsor are exposed when that sponsor (PE-owned) cuts costs.

# Related
- [Drupal Association](/organizations/drupal-association.md), [Acquia](/organizations/acquia.md)
- [Drupal Association leadership change and deficit](/events/2026-07-drupal-association-interim-ceo-deficit.md)
- [Drupal CMS 1.0 launch](/events/2025-01-drupal-cms-1-launch.md)
- [WordPress](/projects/licensing-forks/wordpress.md), [Payload](/projects/web-platforms/payload.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^cms1]: The DropTimes — https://www.thedroptimes.com/46387/drupal-cms-10-key-step-in-drupals-evolving-strategy
[^cms2-dries]: Dries Buytaert — https://dri.es/drupal-cms-2-released
[^cms2-org]: Drupal.org — https://www.drupal.org/blog/drupal-cms-20-is-here-visual-building-ai-and-site-templates-transform-drupal
[^ai-init]: Drupal Association — https://www.drupal.org/association/blog/drupal-launches-new-ai-initiative-to-democratize-intelligent-digital-experiences-for-everyone
[^ai-init-de]: drupal.de — https://www.drupal.de/en/news/update-drupal-ai-initiative
[^da-audit]: Drupal Association — https://www.drupal.org/association/blog/drupal-association-2025-audit-and-financial-overview
[^da-ceo]: Drupal Association — https://www.drupal.org/association/blog/tiffany-farriss-to-lead-the-drupal-association
[^droptimes-ceo]: The DropTimes — https://www.thedroptimes.com/71179/drupal-association-appoints-tiffany-farriss-interim-ceo
[^d12]: The DropTimes — https://www.thedroptimes.com/70355/drupal-2026-release-support-timeline
[^sched]: Drupal.org — https://www.drupal.org/about/core/policies/core-release-cycles/schedule
[^rotterdam]: Drupal.org — https://drupal.org/about/ai/initiatives/blog/drupal-ai-after-the-driesnote-rotterdam-what-you-can-use-today-and-what-comes-next
[^tranquill]: GlobeNewswire — https://www.globenewswire.com/news-release/2025/08/19/3135739/0/en/Acquia-Welcomes-Chris-Tranquill-As-Chief-Executive-Officer.html
