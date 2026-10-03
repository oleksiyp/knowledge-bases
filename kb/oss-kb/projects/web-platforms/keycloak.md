---
type: OSS Project
title: Keycloak
description: "Red Hat-originated, CNCF-incubating Apache-2.0 identity and access management server; the default self-hosted IAM, it added passkeys, FAPI 2, DPoP, Kubernetes/SPIFFE machine identity and MCP authorization (26.4, late 2025) and began CNCF graduation work in Sept 2026."
resource: https://github.com/keycloak/keycloak
tags: [identity, iam, oidc, saml, apache-2.0, cncf, red-hat, foundation-hosted]
domain: web-platforms
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: CNCF (incubating since April 2023); Red Hat principal contributor
backing_orgs: [organizations/cncf, organizations/red-hat]
metrics:
  github_stars: { value: 37106, as_of: 2026-10-03 }
  contributors: { value: "1,350+", as_of: 2025-11-07 }
  latest_release: { value: "26.8.0", as_of: 2026-10-01 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/keycloak/keycloak
    title: Keycloak GitHub repository (releases)
  - id: cncf-proj
    resource: https://www.cncf.io/projects/keycloak/
    title: "CNCF: Keycloak project page"
  - id: cncf-264
    resource: https://www.cncf.io/blog/2025/11/07/self-hosted-human-and-machine-identities-in-keycloak-26-4/
    title: "CNCF blog: Self-hosted human and machine identities in Keycloak 26.4 (2025-11-07)"
  - id: clever
    resource: https://www.clever.cloud/developers/changelog/2025/10-02-keycloak-26.4.0/
    title: "Clever Cloud: Keycloak 26.4 with auth for MCP, passkeys, FAPI 2, DPoP (2025-10-02)"
  - id: grad1
    resource: https://github.com/keycloak/keycloak/issues/52409
    title: "Keycloak issue: CNCF graduation — provide a roadmap document"
  - id: grad2
    resource: https://github.com/keycloak/keycloak/issues/52410
    title: "Keycloak issue: CNCF graduation — describe release process"
  - id: kccon
    resource: https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/co-located-events/keycloakcon/
    title: "KeycloakCon (KubeCon Europe co-located event)"
---
# Summary
Keycloak is the vendor-neutral success in open identity. Under CNCF incubation (since April 2023)[^cncf-proj] it kept a quarterly feature cadence through 26.x: **26.4 (Oct 2025)** added passkeys, FAPI 2.0, DPoP, multi-zone deployments, Kubernetes service-account/SPIFFE machine identities and authorization-server metadata usable for **MCP** clients[^clever][^cncf-264]; it passed 30K stars and 1,350 contributors by Nov 2025[^cncf-264] and shipped **26.8.0 on 1 Oct 2026**[^gh]. In Sept 2026 maintainers opened **CNCF graduation** work items (roadmap, release-process docs)[^grad1][^grad2]. KeycloakCon now runs as a KubeCon co-located event[^kccon]. Verdict: OSS thriving; business n/a (monetised indirectly via Red Hat build of Keycloak and many hosting vendors).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-10-02 | 26.4: passkeys, FAPI 2, DPoP, MCP auth server support[^clever] | OSS | + |
| W12 | 2025-11-07 | CNCF: 30K stars, 1,350 contributors; agent/MCP roadmap[^cncf-264] | OSS | + |
| W6 | 2026-04-08 | 26.6.0 released[^gh] | OSS | + |
| W3 | 2026-09 | CNCF graduation preparation issues opened[^grad1][^grad2] | OSS | + |
| W3 | 2026-10-01 | 26.8.0 released[^gh] | OSS | + |

# OSS successes
- Foundation governance plus a corporate anchor (Red Hat) = stable roadmap; embraced agent identity early[^cncf-264].
# OSS failures / risks
- Operational complexity vs newer Go/TS IAMs (Zitadel, Authentik); Red Hat concentration.
# Business successes
- Ecosystem of hosted-Keycloak vendors; Red Hat build of Keycloak (n/a for project).
# Business failures / risks
- None specific to the project.

# By window
## W3
- Graduation prep; 26.8.0[^grad1][^gh].
## W6
- 26.6.0[^gh].
## W9
- 26.5.x security releases (no notable events).
## W12
- CNCF feature blog / MCP roadmap[^cncf-264].
## W24
- 26.4 release[^clever].

# Lessons
- In identity, vendor-neutral foundations beat single-vendor relicensing: Keycloak gained the users that Zitadel's AGPL switch and Ory's enterprise gating pushed away (assessment).

# Related
- [Zitadel](/projects/web-platforms/zitadel.md), [Ory](/projects/web-platforms/ory.md), [Authentik](/projects/web-platforms/authentik.md), [Better Auth](/projects/web-platforms/better-auth.md)
- [CNCF](/organizations/cncf.md), [Red Hat](/organizations/red-hat.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/keycloak/keycloak
[^cncf-proj]: https://www.cncf.io/projects/keycloak/
[^cncf-264]: https://www.cncf.io/blog/2025/11/07/self-hosted-human-and-machine-identities-in-keycloak-26-4/
[^clever]: https://www.clever.cloud/developers/changelog/2025/10-02-keycloak-26.4.0/
[^grad1]: https://github.com/keycloak/keycloak/issues/52409
[^grad2]: https://github.com/keycloak/keycloak/issues/52410
[^kccon]: https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/co-located-events/keycloakcon/
