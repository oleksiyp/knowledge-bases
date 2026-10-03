---
type: OSS Project
title: Open Source Pledge
description: "Sentry-initiated pledge asking companies to pay $2,000 per employed developer per year to OSS maintainers; ~$7.4M pledged cumulatively — a meaningful norm-setting effort that remains small relative to need."
resource: https://opensourcepledge.com
tags: [funding, maintainers, corporate-giving]
domain: security-sustainability
license: n/a
license_history: []
governance: community
steward: Sentry and member companies
backing_orgs: []
metrics:
  total_pledged_usd: { value: 7421535, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pledge
    resource: https://opensourcepledge.com/
    title: Open Source Pledge homepage
  - id: django-pledge
    resource: https://www.djangoproject.com/weblog/2024/oct/08/why-django-supports-the-open-source-pledge/
    title: "Django: Why Django supports the Open Source Pledge (2024-10-08)"
  - id: tc-pledge
    resource: https://techcrunch.com/2024/11/10/open-source-projects-draw-equity-free-funding-from-corporates-startups-and-even-vcs/
    title: "TechCrunch: Open source projects draw equity-free funding from corporates, startups, and even VCs (2024-11-10)"
---
# Summary
The Open Source Pledge asks member companies to pay at least $2,000 a year per developer they employ, directly to maintainers and foundations. Its site shows **$7,421,535** raised in total, with more than $3M in the past year. Members named include Sentry, Posit, AG Grid, Sanity, Zerodha and Mux.[^pledge] Verdict: **growing**. It is a clear benchmark for what "paying your share" means, but almost all members are small or mid-sized developer-tool companies, and big tech has not joined.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-08 | Pledge launched by Sentry with 20+ partner organizations[^django-pledge][^tc-pledge] | OSS | + |
| W3 | 2026-10 | Cumulative $7.42M; $3M+ in trailing year[^pledge] | Business | + |

# OSS successes
- Gives maintainers money with no strings attached.[^pledge]

# OSS failures / risks
- No hyperscaler members.

# Business successes
- Member companies get a public "good citizen" signal.[^pledge]

# Business failures / risks
- n/a

# By window
## W3
- Cumulative total passed $7.4M.[^pledge]
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Launched 2024-10-08. Sentry's own share was about $500k a year, or $3,704 per developer.[^tc-pledge]

# Lessons
- A per-developer benchmark turns "should we pay?" into "how much?". Getting the largest companies to join is the unsolved part.

# Related
- [GitHub Secure Open Source Fund](/projects/security-sustainability/github-secure-open-source-fund.md), [Sovereign Tech Agency](/projects/security-sustainability/sovereign-tech-agency.md)

[^pledge]: opensourcepledge.com (checked 2026-10-03).
[^django-pledge]: Django weblog, 2024-10-08.
[^tc-pledge]: TechCrunch, 2024-11-10.
