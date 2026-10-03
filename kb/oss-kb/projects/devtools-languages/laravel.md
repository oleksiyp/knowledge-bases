---
type: OSS Project
title: Laravel
description: "The most popular PHP framework, whose company Laravel Inc. took its first-ever VC round ($57M Series A from Accel, Sept 2024) to build Laravel Cloud; shipped Cloud (Feb 2025), Laravel 12/13 and Nightwatch, and Otwell says 2026 Cloud revenue is on pace to grow 5x — a rare clean OSS-to-PaaS success so far."
resource: https://github.com/laravel/framework
tags: [web-framework, php, mit, vc-backed, paas]
domain: devtools-languages
license: MIT
license_history: ["MIT (2011-)"]
governance: company-led-open-core
steward: Laravel (Laravel Holdings Inc., Little Rock, Arkansas)
backing_orgs: [organizations/laravel]
metrics:
  github_stars_framework: { value: 34949, as_of: 2026-10-03 }
  github_stars_skeleton: { value: 85046, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: laravel-gh
    resource: https://github.com/laravel/framework
    title: laravel/framework and laravel/laravel GitHub repositories (stars via GitHub API, 2026-10-03)
  - id: laravel-accel
    resource: https://laravel.com/blog/accel-invests-57m-into-laravel
    title: "Laravel blog: Accel invests $57M into Laravel (2024-09-05)"
    author: org:laravel
  - id: sa-laravel
    resource: https://siliconangle.com/2024/09/05/laravel-raises-57m-expand-team-support-open-source-development/
    title: "SiliconANGLE: Laravel raises $57M to expand team and support open-source development (2024-09-05)"
    author: org:siliconangle
  - id: accel-laravel
    resource: https://www.accel.com/noteworthies/our-series-a-investment-in-laravel-the-future-of-shipping
    title: "Accel: Our Series A investment in Laravel"
    author: org:accel
  - id: heise-cloud
    resource: https://www.heise.de/en/news/Laravel-Cloud-launches-on-February-24-2025-New-platform-for-developers-10268622.html
    title: "heise: Laravel Cloud launches on February 24, 2025"
    author: org:heise
  - id: laravel13
    resource: https://laravelmagazine.com/laravel-13-is-here-what-you-need-to-know
    title: "Laravel Magazine: Laravel 13 is here (2026-03-17)"
  - id: laravel-lsp
    resource: https://laravel-news.com/laravel-lsp-a-first-party-language-server-announced-at-laracon-us-2026
    title: "Laravel News: Laravel LSP announced at Laracon US 2026 (July 2026)"
  - id: laracon-us-2026
    resource: https://laravel-news.com/laracon-us-2026-announced
    title: "Laravel News: Laracon US 2026 announced (Boston, July 28-29)"
  - id: otwell-5x
    resource: https://x.com/taylorotwell/status/2093329899083759634
    title: "Taylor Otwell on X: goal to 3x Laravel Cloud revenue in 2026 already done, on pace to 5x (2026; self-reported)"
  - id: nightwatch
    resource: https://laravel-news.com/laravel-nightwatch-released
    title: "Laravel News: Laravel Nightwatch released (2025)"
  - id: nightwatch-pricing
    resource: https://laravel.com/nightwatch/pricing
    title: "Laravel Nightwatch pricing page"
    author: org:laravel
---

# Summary
Laravel is the standout commercial success in the PHP world. After 13 bootstrapped years, Taylor Otwell's company raised a $57M Series A from Accel on 2024-09-05 — its first institutional round — to build Laravel Cloud[^laravel-accel][^sa-laravel]. Cloud launched alongside Laravel 12 on 2025-02-24[^heise-cloud], followed by the Nightwatch monitoring SaaS[^nightwatch], Laravel 13 (2026-03-17; first-party AI SDK, passkeys, zero breaking changes)[^laravel13], and a first-party Laravel LSP plus Cloud scale-to-zero for MySQL at Laracon US 2026[^laravel-lsp]. Otwell publicly claimed in 2026 that the goal of tripling Cloud revenue was already met and the company was on pace for 5x (self-reported, no figures)[^otwell-5x]. Verdict: OSS thriving (framework still MIT, no license games); business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-09-05 | $57M Series A led by Accel (first ever raise) [^laravel-accel][^sa-laravel] | Business | + |
| W24 | 2025-02-24 | Laravel 12 and Laravel Cloud launch [^heise-cloud] | OSS/Business | + |
| W24 | 2025-06 | Nightwatch monitoring launched (free tier + per-event paid plans) [^nightwatch][^nightwatch-pricing] | Business | + |
| W9 | 2026-03-17 | Laravel 13 released at Laracon EU (AI SDK, passkeys) [^laravel13] | OSS | + |
| W3 | 2026-07-28 | Laracon US Boston: Laravel LSP, Cloud scale-to-zero for MySQL, AI SDK human-in-the-loop [^laravel-lsp][^laracon-us-2026] | OSS/Business | + |
| W3 | 2026 | Otwell: 2026 Cloud revenue goal (3x) met, on pace for 5x [^otwell-5x] | Business | + |

# OSS successes
- Annual major releases with minimal breaking changes; first-party AI SDK makes Laravel an early "AI-native" web framework.[^laravel13]
- Ecosystem integration with FrankenPHP/Octane and new tooling (LSP).[^laravel-lsp]

# OSS failures / risks
- Increasing feature gravity toward paid first-party services (Cloud, Forge, Nightwatch) could crowd out third-party ecosystem vendors.

# Business successes
- VC money spent on a coherent PaaS strategy rather than relicensing; Cloud growth claimed at 3–5x in 2026.[^otwell-5x]
- Accel thesis: "the future of shipping" for full-stack apps.[^accel-laravel]

# Business failures / risks
- No independently verified revenue numbers; growth claims are self-reported.[^otwell-5x]
- Nightwatch's per-event pricing drew complaints and spawned self-hosted alternatives (e.g., NightOwl).[^nightwatch-pricing]

# By window
## W3
- Laracon US 2026 announcements (LSP, Cloud features).[^laravel-lsp]
## W6
- No notable events found.
## W9
- Laravel 13 (2026-03-17).[^laravel13]
## W12
- No notable events found.
## W24
- Series A; Cloud and Laravel 12; Nightwatch.[^laravel-accel][^nightwatch]

# Lessons
- A framework company can monetize via hosting/observability around an unchanged MIT core — the Vercel/Next.js playbook transplanted to PHP.
- Raising late (after a decade of profitability) gave Laravel leverage and avoided the license-change trap.

# Related
- [Laravel (organization)](/organizations/laravel.md)
- [Laravel raises $57M Series A](/events/2024-09-laravel-series-a.md)
- [PHP](/projects/devtools-languages/php.md)
- [Next.js](/projects/devtools-languages/nextjs.md)

[^laravel-gh]: GitHub API, 2026-10-03.
[^laravel-accel]: Laravel blog, 2024-09-05.
[^sa-laravel]: SiliconANGLE, 2024-09-05.
[^accel-laravel]: Accel.
[^laravel13]: Laravel Magazine, 2026-03.
[^heise-cloud]: heise, Feb 2025.
[^laravel-lsp]: Laravel News, July 2026.
[^laracon-us-2026]: Laravel News.
[^otwell-5x]: Taylor Otwell on X (self-reported).
[^nightwatch]: Laravel News.
[^nightwatch-pricing]: laravel.com.
