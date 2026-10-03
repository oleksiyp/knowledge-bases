---
type: OSS Project
title: Vault
description: "HashiCorp's secrets manager, BSL since 2023 and now sold as IBM Vault Enterprise; Vault 2.0 (2026) marked the move to IBM's lifecycle while the OpenBao fork gained Nvidia and sovereign-cloud adopters — commercially intact, community leaking to the fork."
resource: https://github.com/hashicorp/vault
tags: [security, secrets-management, bsl, ibm, relicensing]
domain: licensing-forks
license: BUSL-1.1
license_history: ["MPL-2.0 (2015-2023)", "BUSL-1.1 (Aug 2023-)"]
governance: single-vendor
steward: HashiCorp, an IBM Company
backing_orgs: [organizations/hashicorp]
metrics:
  github_stars: { value: 36335, as_of: 2026-10-03 }
  enterprise_customers: { value: "4,300+ (2023 figure)", as_of: 2023-12-31 }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vault-gh
    resource: https://github.com/hashicorp/vault
    title: Vault GitHub repository (releases)
  - id: infoq-vault2-ldap
    resource: https://www.infoq.com/news/2026/06/ibm-hashicorp-vault-ldap-secrets/
    title: "InfoQ: IBM Vault Enterprise 2.0 brings automated LDAP secrets management (2026-06-09)"
  - id: techtarget-openbao
    resource: https://www.techtarget.com/searchitoperations/news/366644831/Nvidia-adopts-OpenBao-open-source-fork-of-HashiCorps-Vault
    title: "TechTarget: Nvidia adopts OpenBao, open source fork of HashiCorp's Vault (2026-06-18)"
  - id: ibm-closes
    resource: https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform
    title: "IBM completes acquisition of HashiCorp (2025-02-27)"
  - id: controlplane-rce
    resource: https://control-plane.io/posts/unauthed-to-rce-in-vault-and-openbao/
    title: "ControlPlane: Realistic RCE exploit chain in OpenBao and Vault (2026-09)"
---

# Summary
Vault is the commercial core of HashiCorp's security business. It has been under BUSL-1.1 since 2023 and has been part of IBM since February 2025.[^ibm-closes] In 2026 IBM rebadged the paid product as IBM Vault Enterprise and released Vault 2.0, marking the move to IBM's lifecycle, with releases continuing through 2.1.x in Sept 2026.[^infoq-vault2-ldap][^vault-gh] The enterprise franchise (4,300+ enterprise customers as of 2023) looks intact.[^techtarget-openbao] Meanwhile the [OpenBao](/projects/licensing-forks/openbao.md) fork, started by IBM's own engineers before the acquisition, is winning adopters who care about digital sovereignty, including Nvidia in 2026.[^techtarget-openbao] Verdict: OSS stable, business acquired.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-27 | IBM closes HashiCorp acquisition; Vault becomes part of IBM security portfolio[^ibm-closes] | Business | ± |
| W6 | 2026-04/06 | Vault 2.0 / IBM Vault Enterprise 2.0 with LDAP secrets automation[^infoq-vault2-ldap] | Business | + |
| W6 | 2026-06-18 | Nvidia publicly listed as OpenBao adopter[^techtarget-openbao] | OSS | − |
| W3 | 2026-09-01 | Vault 2.1.0[^vault-gh] | OSS | + |
| W3 | 2026-09 | Researchers publish unauthenticated-to-RCE chain affecting both Vault and OpenBao[^controlplane-rce] | OSS | − |

# OSS successes
- Release cadence continued under IBM without disruption.[^vault-gh]

# OSS failures / risks
- The BSL prevents competing hosted offerings, so neutral vendors and sovereign-cloud providers have adopted OpenBao instead.[^techtarget-openbao]
- Vault and OpenBao share code, so security issues can affect both. The 2026 RCE chain did.[^controlplane-rce]

# Business successes
- A large enterprise installed base that is now sold through IBM's channel.[^techtarget-openbao][^infoq-vault2-ldap]

# Business failures / risks
- Multi-tenancy (namespaces), long a paid differentiator, is free in OpenBao, which weakens Vault's upsell.[^techtarget-openbao]

# By window
## W3
- Vault 2.1.0 (Sept 1, 2026); shared RCE disclosure.[^vault-gh][^controlplane-rce]
## W6
- IBM Vault Enterprise 2.0; Nvidia's OpenBao adoption made public.[^infoq-vault2-ldap][^techtarget-openbao]
## W9
- No notable licensing/governance events found.
## W12
- No notable events found.
## W24
- IBM acquisition closes (Feb 2025).[^ibm-closes]

# Lessons
- In security software, an open fork with multi-tenancy included becomes a real competitor wherever sovereignty matters (EU public sector, sovereign clouds).
- Acquirers can keep enterprise revenue while the community moves elsewhere. Those two outcomes do not depend on each other.

# Related
- [OpenBao](/projects/licensing-forks/openbao.md)
- [Terraform](/projects/licensing-forks/terraform.md)
- [HashiCorp](/organizations/hashicorp.md)

[^vault-gh]: Vault GitHub — https://github.com/hashicorp/vault
[^infoq-vault2-ldap]: InfoQ — https://www.infoq.com/news/2026/06/ibm-hashicorp-vault-ldap-secrets/
[^techtarget-openbao]: TechTarget — https://www.techtarget.com/searchitoperations/news/366644831/Nvidia-adopts-OpenBao-open-source-fork-of-HashiCorps-Vault
[^ibm-closes]: IBM newsroom — https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform
[^controlplane-rce]: ControlPlane — https://control-plane.io/posts/unauthed-to-rce-in-vault-and-openbao/
