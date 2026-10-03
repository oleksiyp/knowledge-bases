---
type: Organization
title: The PHP Foundation
description: "Non-profit collective (on Open Collective) that funds ~11 PHP core developers; raised $730,534 in 2025 but ran a ~$139k deficit as sponsor numbers fell, changed executive director (Roman Pronskiy → Elizabeth Barron, Feb 2026) and added FrankenPHP and an Ecosystem Security Team."
resource: https://thephp.foundation
tags: [foundation, php, nonprofit, sovereign-tech]
org_kind: foundation
hq: Distributed (Open Collective fiscal host)
funding: { total_usd: "730,534 contributions in 2025", last_round: "n/a (donations; Sovereign Tech Agency contracts)", last_round_date: "n/a", valuation_usd: "n/a" }
business_verdict: stable
projects: [projects/devtools-languages/php]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pf-report-2025
    resource: https://thephp.foundation/blog/2026/05/27/impact-and-transparency-report-2025/
    title: "The PHP Foundation Impact and Transparency Report 2025 (2026-05-27)"
    author: org:php-foundation
  - id: pf-frankenphp
    resource: https://thephp.foundation/blog/2025/05/15/frankenphp/
    title: "The PHP Foundation: FrankenPHP officially supported (2025-05-15)"
    author: org:php-foundation
  - id: pf-barron
    resource: https://thephp.foundation/blog/2026/02/27/welcoming-elizabeth-barron-new-executive-director/
    title: "The PHP Foundation: Welcoming Elizabeth Barron (2026-02-27)"
    author: org:php-foundation
  - id: pf-blog
    resource: https://thephp.foundation/blog/
    title: "The PHP Foundation blog index"
    author: org:php-foundation
---

# Summary
Founded in 2021 (JetBrains-initiated), The PHP Foundation pays contractors to work on php-src. In 2025 it raised $730,534 and spent $784,376 with 11 contracted developers; top sponsors included the Sovereign Tech Agency, JetBrains, Automattic and GoDaddy; sponsor count fell "substantially"[^pf-report-2025]. Elizabeth Barron replaced founding ED Roman Pronskiy in Feb 2026[^pf-barron].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-05-15 | Takes FrankenPHP under the PHP org [^pf-frankenphp] | + |
| W9 | 2026-02-27 | Elizabeth Barron named ED [^pf-barron] | + |
| W6 | 2026-05-27 | 2025 report: deficit, fewer sponsors [^pf-report-2025] | − |
| W3 | 2026-08-13 | Ecosystem Security Team launched [^pf-blog] | + |
| W3 | 2026-09-01 | Pronskiy leaves board; Brent Roose (JetBrains) joins [^pf-blog] | ± |

# Monetization model
Donations from companies and individuals via Open Collective/GitHub Sponsors, plus government (STA) project contracts.

# Successes
- Sustained paid core development; delivered PHP 8.5, PIE 1.0, CRA work[^pf-report-2025].

# Failures / risks
- Donor fatigue and spending above income; 2026 plan to hire a fundraising director[^pf-report-2025].

# Related
- [PHP](/projects/devtools-languages/php.md)

[^pf-report-2025]: PHP Foundation, 2026-05-27.
[^pf-frankenphp]: PHP Foundation, 2025-05-15.
[^pf-barron]: PHP Foundation, 2026-02-27.
[^pf-blog]: PHP Foundation blog.
