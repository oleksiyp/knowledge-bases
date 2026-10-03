---
type: Organization
title: Ory Corp
description: "Identity-infrastructure company behind Ory Kratos/Hydra/Keto; sells the hosted Ory Network and a commercial Ory Enterprise License for self-hosters, and acquired BoxyHQ (May 2025) to launch Ory Polis for enterprise SSO."
resource: https://www.ory.com
tags: [commercial-open-source, identity, open-core, acquirer]
org_kind: coss-startup
hq: Scottsdale, Arizona, USA (per local press)
funding: { total_usd: "~25M (reported)", last_round: "$22.5M (Insight Partners, Balderton, In-Q-Tel per secondary sources)", last_round_date: "unverified", valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/web-platforms/ory]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: polis
    resource: https://www.ory.com/blog/introducing-ory-polis-for-enterprise-single-sign-on
    title: "Ory: Introducing Ory Polis (BoxyHQ acquisition, 2025-05-29)"
  - id: phx
    resource: https://www.phoenixmetrohomesearch.com/blog/scottsdale-company-acquires-london-based-boxyhq
    title: "Scottsdale's Ory Corp. acquires London-based BoxyHQ"
  - id: vb
    resource: https://venturebeat.com/security/ory-lands-22-5m-for-zero-trust-security-powered-by-open-source
    title: "VentureBeat: Ory lands $22.5M for zero trust security powered by open source"
  - id: changelog
    resource: https://changelog.ory.com/announcements/ory-network-ory-hydra-ory-kratos-v26-3-3-released
    title: "Ory changelog: v26.3.3 (2026-07-28)"
---
# Summary
Ory monetises Apache-2.0 identity components through the hosted **Ory Network** and the **Ory Enterprise License** for self-hosted production (e.g., FIPS builds)[^changelog]. It acquired London-based **BoxyHQ** — one of OSS Capital's two exits — on **29 May 2025**, relaunching it as Ory Polis[^polis][^phx]. Last disclosed raise: $22.5M[^vb]. Verdict: growing.

# Business timeline
| Date | Event |
|---|---|
| n/d | $22.5M round reported[^vb] |
| 2025-05-29 | Acquires BoxyHQ → Ory Polis[^polis] |
| 2026-07-28 | v26.3.3 with OEL-only FIPS build[^changelog] |

# Monetization model
Ory Network SaaS; Ory Enterprise License (self-hosted); enterprise SSO (Polis).

# Successes
- Consolidating OSS identity components[^polis].

# Failures / risks
- Self-hosters increasingly pushed to commercial builds[^changelog].

# Related
- [Ory](/projects/web-platforms/ory.md)

[^polis]: https://www.ory.com/blog/introducing-ory-polis-for-enterprise-single-sign-on
[^phx]: https://www.phoenixmetrohomesearch.com/blog/scottsdale-company-acquires-london-based-boxyhq
[^vb]: https://venturebeat.com/security/ory-lands-22-5m-for-zero-trust-security-powered-by-open-source
[^changelog]: https://changelog.ory.com/announcements/ory-network-ory-hydra-ory-kratos-v26-3-3-released
