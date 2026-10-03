---
type: OSS Project
title: Ory (Kratos, Hydra, Keto, Polis)
description: "Apache-2.0 headless identity stack (Kratos, Hydra, Keto) whose company steers production self-hosters to a commercial 'Ory Enterprise License' and the hosted Ory Network; acquired OSS Capital-backed BoxyHQ (May 2025) to add enterprise SSO as Ory Polis."
resource: https://github.com/ory/kratos
tags: [identity, oauth2, oidc, go, apache-2.0, open-core, acquisition]
domain: web-platforms
license: Apache-2.0 (open-source editions); Ory Enterprise License (commercial self-hosted builds)
license_history: ["Apache-2.0 OSS; commercial Ory Enterprise License builds added alongside"]
governance: company-led-open-core
steward: Ory Corp
backing_orgs: [organizations/ory]
metrics:
  kratos_github_stars: { value: 13905, as_of: 2026-10-03 }
  kratos_last_push: { value: "2026-07-29", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kratos
    resource: https://github.com/ory/kratos
    title: Ory Kratos GitHub repository
  - id: oss
    resource: https://www.ory.com/docs/oss/getting-started
    title: "Ory docs: Introduction to Ory Open Source"
  - id: polis
    resource: https://www.ory.com/blog/introducing-ory-polis-for-enterprise-single-sign-on
    title: "Ory: Introducing Ory Polis for enterprise SSO (BoxyHQ acquisition, 2025-05-29)"
  - id: boxy-disc
    resource: https://github.com/orgs/ory/discussions/135
    title: "GitHub: Ory acquires BoxyHQ (discussion)"
  - id: changelog
    resource: https://changelog.ory.com/announcements/ory-network-ory-hydra-ory-kratos-v26-3-3-released
    title: "Ory changelog: Ory Network, Hydra, Kratos v26.3.3 (FIPS build under OEL) (2026-07-28)"
  - id: vb
    resource: https://venturebeat.com/security/ory-lands-22-5m-for-zero-trust-security-powered-by-open-source
    title: "VentureBeat: Ory lands $22.5M for zero trust security powered by open source"
---
# Summary
Ory's components remain Apache-2.0, but the company now ships calendar-versioned releases (v26.x) across Ory Network and self-hosted **Ory Enterprise License (OEL)** builds — e.g., a FIPS 140-3 Kratos build in v26.3.3 (28 July 2026) is OEL-only[^changelog][^oss]. On **29 May 2025** Ory **acquired BoxyHQ** (an OSS Capital portfolio company) and relaunched its SAML/SCIM "Jackson" as **Ory Polis**[^polis][^boxy-disc]. Public commit activity on the Kratos repo last landed 29 July 2026 (GitHub API), suggesting development is batched through the commercial pipeline[^kratos]. Last disclosed funding: a $22.5M round (VentureBeat; investors included Insight Partners and In-Q-Tel per secondary sources)[^vb]. Verdict: OSS stable (with open-core drift); business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-29 | Acquires BoxyHQ → Ory Polis[^polis] | Business | + |
| W6 | 2026-06-05 | Hydra/Kratos v26.2.16[^changelog] | OSS | + |
| W3 | 2026-07-28 | v26.3.3 incl. OEL-only FIPS build[^changelog] | OSS | ± |

# OSS successes
- Permissive license retained; BoxyHQ's OSS SSO folded in rather than shut[^polis].
# OSS failures / risks
- Production-grade features increasingly in OEL builds[^changelog]; sparse public commit cadence[^kratos].
# Business successes
- Consolidator in OSS identity (BoxyHQ = one of OSS Capital's two exits)[^polis].
# Business failures / risks
- Competes with free Keycloak and with Better Auth/Clerk for developers.

# By window
## W3
- v26.3.x with OEL FIPS build[^changelog].
## W6
- v26.2.x releases[^changelog].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- BoxyHQ acquisition[^polis].

# Lessons
- "Same license, different build" (OEL) is a quieter open-core tactic than relicensing, but has similar effects for self-hosters.

# Related
- [Ory (org)](/organizations/ory.md)
- [Keycloak](/projects/web-platforms/keycloak.md), [Zitadel](/projects/web-platforms/zitadel.md), [Authentik](/projects/web-platforms/authentik.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^kratos]: https://github.com/ory/kratos
[^oss]: https://www.ory.com/docs/oss/getting-started
[^polis]: https://www.ory.com/blog/introducing-ory-polis-for-enterprise-single-sign-on
[^boxy-disc]: https://github.com/orgs/ory/discussions/135
[^changelog]: https://changelog.ory.com/announcements/ory-network-ory-hydra-ory-kratos-v26-3-3-released
[^vb]: https://venturebeat.com/security/ory-lands-22-5m-for-zero-trust-security-powered-by-open-source
