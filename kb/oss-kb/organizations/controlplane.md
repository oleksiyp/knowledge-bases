---
type: Organization
title: "ControlPlane"
description: "London-based cloud-native security consultancy that rescued Flux CD after Weaveworks' Feb 2024 shutdown by hiring its core maintainers and launching ControlPlane Enterprise for Flux; also a public backer of OpenBao."
resource: https://control-plane.io
tags: [commercial-open-source, gitops, security, maintainer-employer]
org_kind: coss-startup
hq: London, UK
funding: { total_usd: "unverified", last_round: "unverified", last_round_date: null, valuation_usd: "unverified" }
business_verdict: stable
projects: [projects/cloud-native/flux]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: itpro-flux
    resource: https://www.itpro.com/software/open-source/why-flux-cds-survival-is-another-major-victory-for-the-open-source-community
    title: "ITPro: Why Flux CD's survival is another major victory for open source"
    author: org:itpro
  - id: cp-openbao
    resource: https://control-plane.io/posts/why-we-support-openbao/
    title: "ControlPlane: Why we are throwing our weight behind OpenBao"
    author: org:controlplane
  - id: flux-gh
    resource: https://github.com/fluxcd/flux2
    title: "Flux2 releases"
---

# Summary
When Weaveworks shut down in February 2024, ControlPlane hired Flux's core maintainers (including Stefan Prodan) and built ControlPlane Enterprise for Flux CD, funding continued open development[^itpro-flux]. Flux has since shipped v2.5 through v2.9 (Feb 2025 – Jun 2026)[^flux-gh]. ControlPlane also publicly backs OpenBao, the Vault fork[^cp-openbao]. Business verdict: **stable** (private, no funding data verified).

# Business timeline
| Window | Date | Event |
|---|---|---|
| (pre-window) | 2024-02 | Hires Flux maintainers after Weaveworks closes[^itpro-flux] |
| W24–W6 | 2025-02 → 2026-06 | Flux v2.5 – v2.9 shipped under its stewardship[^flux-gh] |

# Monetization model
Enterprise support/distribution for Flux, plus cloud-native security consulting[^itpro-flux].

# Successes
- Demonstrated the "maintainer-employer of last resort" model for an orphaned graduated project[^itpro-flux].

# Failures / risks
- Small company carrying a graduated CNCF project; concentration risk for Flux.

# Related
- [Flux](/projects/cloud-native/flux.md); [OpenBao](/projects/licensing-forks/openbao.md)

[^itpro-flux]: https://www.itpro.com/software/open-source/why-flux-cds-survival-is-another-major-victory-for-the-open-source-community
[^cp-openbao]: https://control-plane.io/posts/why-we-support-openbao/
[^flux-gh]: https://github.com/fluxcd/flux2
