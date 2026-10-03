---
type: OSS Project
title: OpenBao
description: "MPL-2.0 fork of HashiCorp Vault (late 2023) under the OpenSSF; shipped free namespaces (2.3, 2025) and releases through 2.7 (Sept 2026), gaining Nvidia, SAP ApeiroRA and eight commercial support vendors — a fork that grew on digital-sovereignty demand."
resource: https://github.com/openbao/openbao
tags: [security, secrets-management, fork, mpl-2.0, openssf, linux-foundation, sovereignty]
domain: licensing-forks
license: MPL-2.0
license_history: ["MPL-2.0 (fork of Vault 1.14, 2023-)"]
governance: foundation
steward: OpenSSF (Linux Foundation)
backing_orgs: []
metrics:
  github_stars: { value: 8286, as_of: 2026-10-03 }
  commercial_support_vendors: { value: 8, as_of: 2026-06-18 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bao-gh
    resource: https://github.com/openbao/openbao
    title: OpenBao GitHub repository (releases)
  - id: techtarget-openbao
    resource: https://www.techtarget.com/searchitoperations/news/366644831/Nvidia-adopts-OpenBao-open-source-fork-of-HashiCorps-Vault
    title: "TechTarget: Nvidia adopts OpenBao, open source fork of HashiCorp's Vault (2026-06-18)"
  - id: bao-namespaces
    resource: https://openbao.org/blog/namespaces-announcement/
    title: "OpenBao blog: Namespaces announcement (v2.3, 2025-05)"
  - id: openssf-bao26
    resource: https://openssf.org/blog/2026/08/06/announcing-openbao-v2-6/
    title: "OpenSSF blog: Announcing OpenBao v2.6 (2026-08-06)"
  - id: controlplane-ent
    resource: https://control-plane.io/enterprise-for-openbao/
    title: "ControlPlane: Enterprise for OpenBao (2026-03)"
  - id: cncf-bao-cnpg
    resource: https://www.cncf.io/blog/2026/09/16/running-openbao-on-kubernetes-with-a-cloudnativepg-postgresql-backend/
    title: "CNCF blog: Running OpenBao on Kubernetes with a CloudNativePG backend (2026-09-16)"
  - id: endoflife-bao
    resource: https://endoflife.date/openbao
    title: "endoflife.date: OpenBao"
  - id: controlplane-rce
    resource: https://control-plane.io/posts/unauthed-to-rce-in-vault-and-openbao/
    title: "ControlPlane: Realistic RCE exploit chain in OpenBao and Vault (2026-09)"
---

# Summary
OpenBao was started in late 2023 by IBM engineers after Vault's BSL switch, months before IBM agreed to buy HashiCorp. It joined the Open Source Security Foundation as a Sandbox project in June 2025.[^techtarget-openbao] Its main differentiator is that enterprise features are free. Namespaces (multi-tenancy) landed in v2.3 in May 2025.[^bao-namespaces] Releases continued through 2.5 (Feb 2026), 2.6 (July 2026) and 2.7 (Sept 23, 2026).[^endoflife-bao][^openssf-bao26][^bao-gh] Adoption is driven by digital sovereignty. Nvidia (NVCF), SAP's ApeiroRA, Fermilab and OVHcloud are listed users or integrators, and eight companies sell support.[^techtarget-openbao] Verdict: growing, though from a much smaller base than Vault.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05 | v2.3 ships namespaces (free multi-tenancy)[^bao-namespaces] | OSS | + |
| W24 | 2025-06 | Joins OpenSSF as Sandbox project[^techtarget-openbao] | OSS | + |
| W9 | 2026-02-04 | v2.5.0[^endoflife-bao] | OSS | + |
| W9 | 2026-03 | ControlPlane (FluxCD backer) launches enterprise support for OpenBao[^controlplane-ent] | Business | + |
| W6 | 2026-05-20 / 06-18 | Nvidia added to adopters list; TechTarget coverage[^techtarget-openbao] | OSS | + |
| W3 | 2026-07-14 | v2.6 (namespace sealing, declarative config)[^openssf-bao26] | OSS | + |
| W3 | 2026-09-16 | CNCF blog features OpenBao on Kubernetes with CloudNativePG[^cncf-bao-cnpg] | OSS | + |
| W3 | 2026-09-23 | v2.7.0; shared Vault/OpenBao RCE chain disclosed and patched[^bao-gh][^controlplane-rce] | OSS | ± |

# OSS successes
- Features that are paid in Vault are free here (namespaces) and attract multi-tenant platform builders.[^bao-namespaces]
- Has OpenSSF governance with a separate CVE process, community audits and supply-chain tooling.[^techtarget-openbao]
- A commercial ecosystem is forming: eight support vendors and ControlPlane's enterprise offering.[^techtarget-openbao][^controlplane-ent]

# OSS failures / risks
- Its contributor base is much smaller than Vault's (8.3k vs 36k GitHub stars).[^bao-gh]
- It shares a code lineage with Vault, so vulnerabilities can affect both.[^controlplane-rce]

# Business successes
- n/a. Indirect value goes to support vendors and sovereign-cloud providers.

# Business failures / risks
- n/a.

# By window
## W3
- v2.6 (Jul 14) and v2.7 (Sept 23); CNCF-ecosystem visibility.[^openssf-bao26][^bao-gh][^cncf-bao-cnpg]
## W6
- Nvidia adoption made public (June 2026).[^techtarget-openbao]
## W9
- v2.5.0 (Feb 4, 2026); ControlPlane enterprise support (Mar 2026).[^endoflife-bao][^controlplane-ent]
## W12
- No notable events found.
## W24
- Namespaces in v2.3 (May 2025); OpenSSF Sandbox (June 2025).[^bao-namespaces][^techtarget-openbao]

# Lessons
- A fork can stand out by making the upstream's paid features free, not only by keeping the old license.
- The EU sovereignty agenda (see [CRA](/events/2026-09-cra-reporting-obligations-start.md)) is a new demand source for foundation-governed forks.

# Related
- [Vault](/projects/licensing-forks/vault.md)
- [OpenTofu](/projects/licensing-forks/opentofu.md)
- [HashiCorp](/organizations/hashicorp.md)

[^bao-gh]: OpenBao GitHub — https://github.com/openbao/openbao
[^techtarget-openbao]: TechTarget — https://www.techtarget.com/searchitoperations/news/366644831/Nvidia-adopts-OpenBao-open-source-fork-of-HashiCorps-Vault
[^bao-namespaces]: OpenBao blog — https://openbao.org/blog/namespaces-announcement/
[^openssf-bao26]: OpenSSF blog — https://openssf.org/blog/2026/08/06/announcing-openbao-v2-6/
[^controlplane-ent]: ControlPlane — https://control-plane.io/enterprise-for-openbao/
[^cncf-bao-cnpg]: CNCF blog — https://www.cncf.io/blog/2026/09/16/running-openbao-on-kubernetes-with-a-cloudnativepg-postgresql-backend/
[^endoflife-bao]: endoflife.date — https://endoflife.date/openbao
[^controlplane-rce]: ControlPlane — https://control-plane.io/posts/unauthed-to-rce-in-vault-and-openbao/
