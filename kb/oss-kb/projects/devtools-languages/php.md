---
type: OSS Project
title: PHP (and the PHP Foundation)
description: "The web's most-deployed server language, now sustained by the PHP Foundation's paid core developers; shipped PHP 8.4 and 8.5 (pipe operator) on schedule and adopted FrankenPHP, but the Foundation's sponsor count fell sharply in 2025 and it spent ~$139k more than it raised."
resource: https://github.com/php/php-src
tags: [programming-language, web, foundation-funded, sovereign-tech, php-license]
domain: devtools-languages
license: PHP-3.01
license_history: ["PHP License 3.01 (php-src)", "FrankenPHP: MIT"]
governance: community
steward: PHP internals (RFC voting) with The PHP Foundation funding core developers
backing_orgs: [organizations/php-foundation]
metrics:
  github_stars: { value: 40431, as_of: 2026-10-03 }
  frankenphp_github_stars: { value: 11379, as_of: 2026-10-03 }
  php_foundation_2025_contributions_usd: { value: 730534, as_of: 2026-05-27 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: php-gh
    resource: https://github.com/php/php-src
    title: php-src GitHub repository (stars via GitHub API, 2026-10-03)
  - id: php85
    resource: https://www.php.net/releases/8.5/en.php
    title: "php.net: PHP 8.5 release announcement (2025-11-20)"
    author: org:php
  - id: pf-frankenphp
    resource: https://thephp.foundation/blog/2025/05/15/frankenphp/
    title: "The PHP Foundation: FrankenPHP is now officially supported by The PHP Foundation (2025-05-15)"
    author: org:php-foundation
  - id: pf-php30
    resource: https://thephp.foundation/blog/2025/06/08/php-30/
    title: "The PHP Foundation: 30 years of PHP — FrankenPHP is now part of the PHP organisation (2025-06-08)"
    author: org:php-foundation
  - id: pf-report-2025
    resource: https://thephp.foundation/blog/2026/05/27/impact-and-transparency-report-2025/
    title: "The PHP Foundation Impact and Transparency Report 2025 (2026-05-27)"
    author: org:php-foundation
  - id: pf-report-2024
    resource: https://thephp.foundation/blog/2025/03/31/transparency-and-impact-report-2024/
    title: "The PHP Foundation Impact and Transparency Report 2024 (2025-03-31)"
    author: org:php-foundation
  - id: pf-ed-search
    resource: https://thephp.foundation/blog/2025/11/10/seeking-new-executive-director/
    title: "The PHP Foundation is seeking a new Executive Director (2025-11-10)"
    author: org:php-foundation
  - id: pf-barron
    resource: https://thephp.foundation/blog/2026/02/27/welcoming-elizabeth-barron-new-executive-director/
    title: "The PHP Foundation: Welcoming Elizabeth Barron as the new Executive Director (2026-02-27)"
    author: org:php-foundation
  - id: heise-barron
    resource: https://www.heise.de/en/news/PHP-Foundation-with-new-leadership-Elizabeth-Barron-is-Executive-Director-11194876.html
    title: "heise: PHP Foundation with new leadership — Elizabeth Barron is Executive Director"
    author: org:heise
  - id: pf-blog
    resource: https://thephp.foundation/blog/
    title: "The PHP Foundation blog index (Ecosystem Security Team 2026-08-13; board change 2026-09-01)"
    author: org:php-foundation
  - id: pf-onboarding
    resource: https://thephp.foundation/blog/2026/08/03/kicking-off-the-php-onboarding-initiative/
    title: "The PHP Foundation: Kicking off the PHP Onboarding Initiative SIG (2026-08-03)"
    author: org:php-foundation
---

# Summary
PHP is the clearest example of a "boring" language rescued by a funded foundation. Since 2021 The PHP Foundation has paid core developers; at end-2025 it had 11 contracted developers, raised $730,534 (vs $683,550 in 2024) and spent $784,376, with Sovereign Tech Agency, JetBrains, Automattic and GoDaddy among top sponsors[^pf-report-2025]. The language shipped PHP 8.5 (pipe operator, URI extension) on 2025-11-20[^php85], and the Foundation took FrankenPHP (Go/Caddy-based app server) under the official PHP GitHub organization in May 2025[^pf-frankenphp]. Founding ED Roman Pronskiy stepped down; Elizabeth Barron took over in Feb 2026[^pf-barron]. The warning sign: sponsor count fell "substantially", described as "an increasingly challenging fundraising space"[^pf-report-2025]. Verdict: OSS stable; funding model under strain.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-31 | 2024 report: $683,550 raised [^pf-report-2024][^pf-report-2025] | Business | + |
| W24 | 2025-05-15 | FrankenPHP officially supported, moves to php GitHub org [^pf-frankenphp][^pf-php30] | OSS | + |
| W12 | 2025-11-10 | Roman Pronskiy to step down as ED; search opens [^pf-ed-search] | Governance | ± |
| W12 | 2025-11-20 | PHP 8.5 released (pipe operator) [^php85] | OSS | + |
| W9 | 2026-02-27 | Elizabeth Barron named Executive Director [^pf-barron][^heise-barron] | Governance | + |
| W6 | 2026-05-27 | 2025 report: $730,534 raised, ~$139k deficit, fewer sponsors [^pf-report-2025] | Business | − |
| W3 | 2026-08-03 | PHP Onboarding Initiative SIG launched [^pf-onboarding] | OSS | + |
| W3 | 2026-08-13 | Foundation launches Ecosystem Security Team [^pf-blog] | OSS | + |
| W3 | 2026-09-01 | Pronskiy leaves board; JetBrains' Brent Roose joins [^pf-blog] | Governance | ± |

# OSS successes
- Annual releases on time (8.4 in 2024, 8.5 in Nov 2025), partial function application accepted for the next release.[^php85]
- 2025 deliverables: PIE 1.0 (PECL successor), PECL deprecation started, STF-funded streams modernization, CRA compliance work.[^pf-report-2025]
- FrankenPHP adoption (Laravel Octane, Symfony) gives PHP a modern worker-mode runtime.[^pf-frankenphp]

# OSS failures / risks
- Core development concentrated in ~11 paid contractors; bus-factor and funding risk.[^pf-report-2025]

# Business successes
- Public-sector funding (Germany's Sovereign Tech Agency) diversified income beyond JetBrains.[^pf-report-2025]

# Business failures / risks
- Fewer sponsors in 2025 and spending above income; 2026 priority is a fundraising director and balancing the budget.[^pf-report-2025]

# By window
## W3
- Onboarding SIG; Ecosystem Security Team; board change.[^pf-onboarding][^pf-blog]
## W6
- 2025 transparency report shows deficit and sponsor decline.[^pf-report-2025]
## W9
- Elizabeth Barron becomes ED.[^pf-barron]
## W12
- PHP 8.5; ED transition announced.[^php85][^pf-ed-search]
## W24
- FrankenPHP joins the PHP org; PHP turns 30.[^pf-php30]

# Lessons
- A small, paid core team funded by tool vendors plus government (STA) can keep a huge legacy language modern — but donor fatigue arrives after a few years.
- Absorbing ecosystem projects (FrankenPHP, PIE) into the official org can modernize a platform without forking.

# Related
- [The PHP Foundation](/organizations/php-foundation.md)
- [Laravel](/projects/devtools-languages/laravel.md)
- [CPython](/projects/devtools-languages/cpython.md)

[^php-gh]: GitHub API, 2026-10-03.
[^php85]: php.net, PHP 8.5.
[^pf-frankenphp]: PHP Foundation, 2025-05-15.
[^pf-php30]: PHP Foundation, 2025-06-08.
[^pf-report-2025]: PHP Foundation, 2026-05-27.
[^pf-report-2024]: PHP Foundation, 2025-03-31.
[^pf-ed-search]: PHP Foundation, 2025-11-10.
[^pf-barron]: PHP Foundation, 2026-02-27.
[^heise-barron]: heise.
[^pf-blog]: PHP Foundation blog index.
[^pf-onboarding]: PHP Foundation, 2026-08-03.
