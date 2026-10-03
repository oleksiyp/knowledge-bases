---
type: Organization
title: Signal Foundation
description: "US nonprofit that funds and operates the Signal messenger (~70M MAU); donation-dependent with a 2024 deficit ($29.4M revenue vs $38.0M expenses) and a first paid feature (media backups) in 2026."
resource: https://signalfoundation.org
tags: [nonprofit, messaging, encryption]
org_kind: nonprofit
hq: Mountain View, California, USA
funding: { total_usd: "n/a (donations; 2024 revenue $29.4M)", last_round: "n/a", last_round_date: null, valuation_usd: "n/a" }
business_verdict: struggling
projects: [projects/end-user-apps/signal]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki
    resource: https://en.wikipedia.org/wiki/Signal_(software)
    title: "Wikipedia: Signal (software)"
  - id: v8
    resource: https://aboutsignal.com/news/signal-launches-version-8-0-with-signal-secure-backups/
    title: "Signal 8.0 with Secure Backups"
  - id: aws
    resource: https://www.theregister.com/2025/10/27/signal_ceo_meredith_whittaker_aws_dependency/
    title: "The Register: Signal had no choice but to use AWS"
    author: org:the-register
---
# Summary
The Signal Technology Foundation reported $29,413,537 revenue and $38,019,696 expenses for 2024[^wiki], continuing a structural deficit as costs approach the ~$50M/yr previously projected. President Meredith Whittaker framed infrastructure dependence (AWS) as unavoidable after the Oct 2025 outage[^aws]. Its first paid feature — Secure Backups for media in Signal 8.0 (Feb 2026) — is a modest step toward earned revenue[^v8]. Verdict: struggling financially, strong mission position.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W12 | 2025-10-27 | AWS dependency remarks[^aws] |
| W9 | 2026-02 | Signal 8.0 with Secure Backups (paid media tier)[^v8] |
| W6 | 2026-05 | Threat to exit Canada over Bill C-22[^wiki] |

# Monetization model
Donations (large and small), now supplemented by paid backup storage.

# Successes
- Usage growth and political salience (Signalgate)[^wiki].
# Failures / risks
- ~$8.6M 2024 operating deficit[^wiki]; regulatory threats.

# Related
- [Signal](/projects/end-user-apps/signal.md)

[^wiki]: https://en.wikipedia.org/wiki/Signal_(software)
[^v8]: https://aboutsignal.com/news/signal-launches-version-8-0-with-signal-secure-backups/
[^aws]: https://www.theregister.com/2025/10/27/signal_ceo_meredith_whittaker_aws_dependency/
