---
type: Organization
title: Laravel (company)
description: "Little Rock-based company behind the MIT-licensed Laravel PHP framework; raised its first outside money ($57M Series A, Accel, Sept 2024) and monetizes via Laravel Cloud, Forge, Vapor and Nightwatch, with self-reported 3–5x Cloud revenue growth in 2026."
resource: https://laravel.com
tags: [commercial-open-source, php, paas, vc-backed]
org_kind: coss-startup
hq: Little Rock, Arkansas, USA
funding: { total_usd: "57M", last_round: "Series A (Accel)", last_round_date: 2024-09-05, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/devtools-languages/laravel]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: laravel-accel
    resource: https://laravel.com/blog/accel-invests-57m-into-laravel
    title: "Laravel blog: Accel invests $57M into Laravel (2024-09-05)"
    author: org:laravel
  - id: sa-laravel
    resource: https://siliconangle.com/2024/09/05/laravel-raises-57m-expand-team-support-open-source-development/
    title: "SiliconANGLE: Laravel raises $57M (2024-09-05)"
    author: org:siliconangle
  - id: heise-cloud
    resource: https://www.heise.de/en/news/Laravel-Cloud-launches-on-February-24-2025-New-platform-for-developers-10268622.html
    title: "heise: Laravel Cloud launches on February 24, 2025"
    author: org:heise
  - id: nightwatch-pricing
    resource: https://laravel.com/nightwatch/pricing
    title: "Laravel Nightwatch pricing"
    author: org:laravel
  - id: laravel-lsp
    resource: https://laravel-news.com/laravel-lsp-a-first-party-language-server-announced-at-laracon-us-2026
    title: "Laravel News: Laravel LSP announced at Laracon US 2026"
  - id: otwell-5x
    resource: https://x.com/taylorotwell/status/2093329899083759634
    title: "Taylor Otwell on X: Cloud revenue on pace to 5x in 2026 (self-reported)"
---

# Summary
Laravel was bootstrapped for 13 years on paid tools (Forge, Vapor, Envoyer) before taking a $57M Series A from Accel on 2024-09-05[^laravel-accel][^sa-laravel]. It launched Laravel Cloud on 2025-02-24[^heise-cloud] and Nightwatch monitoring in 2025[^nightwatch-pricing], and in 2026 CEO Taylor Otwell said Cloud revenue had already tripled and was on pace for 5x[^otwell-5x].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2024-09-05 | $57M Series A (Accel) [^laravel-accel] | + |
| W24 | 2025-02-24 | Laravel Cloud launch [^heise-cloud] | + |
| W24 | 2025 | Nightwatch launch [^nightwatch-pricing] | + |
| W3 | 2026-07-28 | Laracon US: LSP, Cloud scale-to-zero MySQL [^laravel-lsp] | + |
| W3 | 2026 | Cloud revenue "on pace to 5x" (self-reported) [^otwell-5x] | + |

# Monetization model
Open-source MIT framework + paid first-party hosting/ops SaaS (Cloud, Forge, Vapor), monitoring (Nightwatch) and commercial packages.

# Successes
- Clean OSS→PaaS transition with no license change[^laravel-accel].

# Failures / risks
- Revenue undisclosed; claims self-reported[^otwell-5x]. Per-event Nightwatch pricing drew complaints[^nightwatch-pricing].

# Related
- [Laravel](/projects/devtools-languages/laravel.md)
- [Laravel raises $57M Series A](/events/2024-09-laravel-series-a.md)

[^laravel-accel]: Laravel blog.
[^sa-laravel]: SiliconANGLE.
[^heise-cloud]: heise.
[^nightwatch-pricing]: laravel.com.
[^laravel-lsp]: Laravel News.
[^otwell-5x]: X post.
