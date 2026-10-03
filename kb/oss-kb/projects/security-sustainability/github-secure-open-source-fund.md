---
type: OSS Project
title: GitHub Secure Open Source Fund
description: "GitHub-run program (announced Nov 2024) giving maintainers $10k plus a 3-week security education cohort; multi-sponsor, 188 projects / $1.88M across four sessions by Aug 2026; a modest but well-structured success."
resource: https://github.com/open-source/github-secure-open-source-fund
tags: [funding, maintainers, security-education, github]
domain: security-sustainability
license: n/a
license_history: []
governance: single-vendor
steward: GitHub
backing_orgs: [organizations/chainguard]
metrics:
  per_project_usd: { value: 10000, as_of: 2026-10-03 }
  projects_funded_cumulative: { value: 188, as_of: 2026-08-13 }
  usd_distributed_cumulative: { value: 1880000, as_of: 2026-08-13 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh-sosf
    resource: https://github.com/open-source/github-secure-open-source-fund
    title: GitHub Secure Open Source Fund program page
  - id: gh-announce
    resource: https://github.blog/news-insights/company-news/announcing-github-secure-open-source-fund/
    title: "GitHub Blog: Announcing GitHub Secure Open Source Fund (Nov 2024)"
  - id: gh-s3
    resource: https://github.blog/open-source/maintainers/securing-the-ai-software-supply-chain-security-results-across-67-open-source-projects/
    title: "GitHub Blog: Security results across 67 open source projects (2026-02-17)"
  - id: gh-s4
    resource: https://github.blog/open-source/maintainers/what-50-open-source-projects-taught-us-about-security-in-the-ai-era/
    title: "GitHub Blog: What 50 open source projects taught us about security in the AI era (2026-08-13)"
---
# Summary
Announced in November 2024, the fund gives each project $10,000: $6k during the program, $2k at the 6-month check-in and $2k at 12 months. In return, maintainers take a 3-week security course and do follow-ups.[^gh-sosf][^gh-announce] Funders include the Alfred P. Sloan Foundation, American Express, Chainguard, Datadog, HeroDevs, Kraken, Microsoft, Shopify, Stripe, Vercel and 1Password.[^gh-sosf] Sessions 1–2 covered 71 projects. Session 3 (results 2026-02-17) covered 67 AI-stack projects, including Python, Node.js, LLVM, curl, PyPI and pandas, with 98 maintainers and $670k.[^gh-s3] Session 4 (results 2026-08-13) covered 50 projects and 71 maintainers with more than $500k. Cumulatively that is **188 projects, 290 maintainers, $1.88M, and 533 new CVEs disclosed** across 42 countries.[^gh-s4] Verdict: **growing**. The model is well designed (money tied to security education), but $10k per project is small.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11 | Fund announced[^gh-announce] | OSS | + |
| W24–W12 | 2025 | Sessions 1–2 (71 projects)[^gh-s3] | OSS | + |
| W9 | 2026-02-17 | Session 3 results: 67 projects, $670k, 191 CVEs cumulative[^gh-s3] | OSS | + |
| W3 | 2026-08-13 | Session 4 results: 50 projects; cumulative 188 projects, $1.88M, 533 CVEs[^gh-s4] | OSS | + |

# OSS successes
- Measured outcomes: 92–99% of projects per session enabled core security features (secret scanning, code scanning, private vulnerability reporting). 4,210 CodeQL alerts fixed and 650+ exposed secrets resolved cumulatively.[^gh-s3][^gh-s4]

# OSS failures / risks
- The grants are too small to pay for ongoing maintenance.

# Business successes
- The multi-company sponsor pool gives companies a low-friction way to pay upstream.[^gh-sosf]

# Business failures / risks
- n/a

# By window
## W3
- Session 4 results published (2026-08-13).[^gh-s4]
## W6
- No notable events found.
## W9
- Session 3 results published (2026-02-17).[^gh-s3]
## W12
- Session 3 ran (AI-stack focus).[^gh-s3]
## W24
- Launch and sessions 1–2.[^gh-announce][^gh-s3]

# Lessons
- Tying money to education and check-ins makes small grants produce lasting changes in practice.

# Related
- [Sovereign Tech Agency](/projects/security-sustainability/sovereign-tech-agency.md), [Open Source Pledge](/projects/security-sustainability/open-source-pledge.md), [Alpha-Omega](/projects/security-sustainability/alpha-omega.md)

[^gh-sosf]: GitHub program page.
[^gh-announce]: GitHub Blog, Nov 2024.
[^gh-s3]: GitHub Blog, 2026-02-17.
[^gh-s4]: GitHub Blog, 2026-08-13.
