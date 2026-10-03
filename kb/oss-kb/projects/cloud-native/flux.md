---
type: OSS Project
title: "Flux CD"
description: "CNCF-graduated GitOps toolkit that survived the February 2024 shutdown of its creator Weaveworks; ControlPlane hired core maintainers, and Flux kept a regular release train (v2.5 → v2.9) — a textbook foundation-hosting rescue, though it trails Argo CD in mindshare."
resource: https://github.com/fluxcd/flux2
tags: [cloud-native, gitops, apache-2.0, foundation-hosted, cncf-graduated, vendor-collapse-survivor]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2016-)"]
governance: foundation
steward: Cloud Native Computing Foundation (ControlPlane main employer of maintainers)
backing_orgs: [organizations/controlplane, organizations/cncf]
metrics:
  github_stars: { value: 8435, as_of: 2026-10-03 }
  latest_minor: { value: "v2.9.0 (2026-06-30)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: flux-gh
    resource: https://github.com/fluxcd/flux2
    title: "Flux2 GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: itpro-flux
    resource: https://www.itpro.com/software/open-source/why-flux-cds-survival-is-another-major-victory-for-the-open-source-community
    title: "ITPro: Why Flux CD's survival is another major victory for the open source community"
    author: org:itpro
  - id: tt-weave
    resource: https://www.techtarget.com/searchitoperations/news/366569239/GitOps-vendors-close-echoes-wider-funding-open-core-woes
    title: "TechTarget: GitOps vendor's close echoes wider funding, open-core woes"
    author: org:techtarget
  - id: octopus-flux
    resource: https://octopus.com/devops/gitops/flux-cd/
    title: "Octopus: The FluxCD project's uncertain future & migration considerations"
---

# Summary
Flux's creator Weaveworks shut down in February 2024 after an M&A process collapsed at the last minute[^tt-weave]. Because Flux was already a CNCF graduated project, it survived: ControlPlane hired core maintainers (including Stefan Prodan) and launched an enterprise distribution, and Microsoft Azure, GitLab, Cisco and others pledged support[^itpro-flux][^octopus-flux]. Inside the two-year window Flux shipped v2.5 (Feb 2025), v2.6 (May 2025), v2.7 (Sep 2025), v2.8 (Feb 2026) and v2.9 (Jun 30, 2026)[^flux-gh]. Verdict: **stable** — alive and well-maintained, but with ~8.4k stars versus Argo CD's ~24k it is the smaller GitOps option.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre-window) | 2024-02 | Weaveworks shuts down[^tt-weave] | Business | − |
| W24 | 2025-02-20 | Flux v2.5[^flux-gh] | OSS | + |
| W24 | 2025-05-29 | Flux v2.6[^flux-gh] | OSS | + |
| W24 | 2025-09-30 | Flux v2.7[^flux-gh] | OSS | + |
| W9 | 2026-02-24 | Flux v2.8[^flux-gh] | OSS | + |
| W6 | 2026-06-30 | Flux v2.9[^flux-gh] | OSS | + |

# OSS successes
- Continuity of releases after vendor collapse; new commercial home for maintainers[^itpro-flux].
- Embedded in Azure Arc/AKS and GitLab, giving it institutional users[^octopus-flux].

# OSS failures / risks
- Maintainer concentration in one small company (ControlPlane).
- Mindshare loss to Argo CD; some vendors published "migrate off Flux" guidance during the 2024 uncertainty[^octopus-flux].

# Business successes
- ControlPlane Enterprise for Flux CD funds development[^itpro-flux].

# Business failures / risks
- Weaveworks' failure (pre-window) remains a cautionary tale for single-product GitOps vendors[^tt-weave].

# By window
## W3
- No notable events found.
## W6
- Flux v2.9 (Jun 30, 2026)[^flux-gh].
## W9
- Flux v2.8 (Feb 24, 2026)[^flux-gh].
## W12
- No notable events found.
## W24
- v2.5-v2.7 releases under ControlPlane stewardship[^flux-gh].

# Lessons
- Foundation hosting is insurance: vendor death did not kill the project.
- Single-product open-core GitOps companies struggle; the value accrued to platforms and to the Argo ecosystem.

# Related
- [ControlPlane](/organizations/controlplane.md), [Argo CD](/projects/cloud-native/argo-cd.md), [CNCF](/organizations/cncf.md)

[^flux-gh]: https://github.com/fluxcd/flux2
[^itpro-flux]: https://www.itpro.com/software/open-source/why-flux-cds-survival-is-another-major-victory-for-the-open-source-community
[^tt-weave]: https://www.techtarget.com/searchitoperations/news/366569239/GitOps-vendors-close-echoes-wider-funding-open-core-woes
[^octopus-flux]: https://octopus.com/devops/gitops/flux-cd/
