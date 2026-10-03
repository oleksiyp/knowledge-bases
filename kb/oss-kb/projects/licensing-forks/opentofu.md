---
type: OSS Project
title: OpenTofu
description: "MPL-2.0 fork of Terraform (2023) that joined the CNCF in April 2025 and shipped 1.9→1.13 with features Terraform later copied; a clear fork success with enterprise adopters like Fidelity, though Terraform retains the larger installed base."
resource: https://github.com/opentofu/opentofu
tags: [iac, fork, mpl-2.0, foundation-hosted, cncf, linux-foundation]
domain: licensing-forks
license: MPL-2.0
license_history: ["MPL-2.0 (fork of Terraform 1.5.x, 2023-)"]
governance: foundation
steward: CNCF (Linux Foundation)
backing_orgs: []
metrics:
  github_stars: { value: 30363, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tofu-gh
    resource: https://github.com/opentofu/opentofu
    title: OpenTofu GitHub repository (releases)
  - id: tofu-blog
    resource: https://opentofu.org/blog/
    title: OpenTofu blog (release announcements, Fidelity case study)
  - id: tns-tofu-cncf
    resource: https://thenewstack.io/opentofu-joins-cncf-new-home-for-open-source-iac-project/
    title: "The New Stack: OpenTofu joins CNCF (2025-04-28)"
  - id: sa-tofu-ga
    resource: https://siliconangle.com/2024/01/10/terraform-fork-opentofu-launches-general-availability/
    title: "SiliconANGLE: Terraform fork OpenTofu launches into general availability (2024-01-10)"
  - id: endoflife-tofu
    resource: https://endoflife.date/opentofu
    title: "endoflife.date: OpenTofu release support"
  - id: tns-tofu19
    resource: https://thenewstack.io/opentofu-turns-one-with-opentofu-1-9-0/
    title: "The New Stack: OpenTofu turns one with OpenTofu 1.9.0 (2025-01)"
  - id: gruntwork-switch
    resource: https://blog.gruntwork.io/make-the-switch-to-opentofu-6904ba95e799
    title: "Gruntwork: It's time to switch to OpenTofu (2025-01)"
  - id: infoq-tf115
    resource: https://www.infoq.com/news/2026/06/terraform-1-15/
    title: "InfoQ: Terraform 1.15 closes gap to OpenTofu"
  - id: techtarget-openbao
    resource: https://www.techtarget.com/searchitoperations/news/366644831/Nvidia-adopts-OpenBao-open-source-fork-of-HashiCorps-Vault
    title: "TechTarget: Nvidia adopts OpenBao (cites OpenTofu supporter counts)"
---

# Summary
OpenTofu is the second strongest license-driven fork of the period, after [Valkey](/projects/licensing-forks/valkey.md). It forked Terraform's last MPL release after HashiCorp's 2023 BSL switch, reached GA (1.6.0) in January 2024, and was accepted into the CNCF as a Sandbox project on April 23, 2025.[^sa-tofu-ga][^tns-tofu-cncf] It shipped major features before Terraform: state encryption, provider iteration (1.9), exclusions, ephemeral values (1.11, Dec 2025), dynamic `prevent_destroy` (1.12, May 2026) and built-in linting (1.13, Sept 2026).[^tofu-blog] Terraform 1.15 explicitly "closes the gap" to OpenTofu.[^infoq-tf115] Fidelity Investments published a migration case study (Oct 2025), and Gruntwork told its users to switch.[^tofu-blog][^gruntwork-switch] Verdict: thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01 | OpenTofu 1.9.0 (provider for_each, -exclude); Gruntwork: "time to switch"[^tns-tofu19][^gruntwork-switch] | OSS | + |
| W24 | 2025-04-23 | Accepted into CNCF Sandbox[^tns-tofu-cncf] | OSS | + |
| W24 | 2025-10-06 | Fidelity Investments migration story published[^tofu-blog] | OSS | + |
| W12 | 2025-12-09 | OpenTofu 1.11.0: ephemeral values, conditional enablement[^tofu-blog] | OSS | + |
| W6 | 2026-05-14 | OpenTofu 1.12.0: dynamic prevent_destroy, import by identity[^tofu-blog] | OSS | + |
| W6 | 2026-06 | Terraform 1.15 copies OpenTofu features[^infoq-tf115] | OSS | + |
| W3 | 2026-08-19 | Final 1.11 patch (1.11.14) — predictable support policy[^endoflife-tofu] | OSS | + |
| W3 | 2026-09-29 | OpenTofu 1.13.0 (built-in linting, symbol libraries); 1.13.1 on Oct 1[^tofu-blog][^tofu-gh] | OSS | + |

# OSS successes
- Steady roughly 6-month minor-release cadence with a published support policy.[^endoflife-tofu]
- Leads on features. Several OpenTofu ideas (state encryption, provider iteration, exclusions) arrived before Terraform's versions.[^infoq-tf115]
- Has neutral CNCF governance, and the TACOS vendors (Spacelift, env0, Harness, Scalr) back it because the BSL threatens them directly.
- A broad pledge base: TechTarget cites 163 companies and 791 individuals as supporters.[^techtarget-openbao]

# OSS failures / risks
- Terraform still has a far larger installed base and mindshare, and the provider registry ecosystem is shared but drifting apart.
- It is still a CNCF Sandbox project (as of the sources reviewed), so incubation status is a pending milestone.

# Business successes
- n/a. Commercial value goes to the vendors in its governance (Spacelift, env0, Harness, Gruntwork).

# Business failures / risks
- n/a.

# By window
## W3
- 1.13.0 (Sept 29) and 1.13.1 (Oct 1); end of 1.11 support.[^tofu-gh][^endoflife-tofu]
## W6
- 1.12.0 (May 14, 2026); Terraform 1.15 follows OpenTofu features.[^tofu-blog][^infoq-tf115]
## W9
- 1.12 beta cycle (Apr 7, 2026 beta1) and dual output streams work.[^tofu-blog]
## W12
- 1.11.0 with ephemeral values (Dec 9, 2025).[^tofu-blog]
## W24
- 1.9 (Jan 2025), CNCF admission (Apr 2025), Fidelity case study (Oct 2025).[^tns-tofu-cncf][^tofu-blog]

# Lessons
- Forks win when they come from companies whose business model the relicense directly threatens (here, the TACOS vendors). Those companies supply steady engineering capacity.
- Shipping requested features before upstream is the best way to win migrations. Matching upstream is not enough.

# Related
- [Terraform](/projects/licensing-forks/terraform.md)
- [HashiCorp](/organizations/hashicorp.md)
- [OpenTofu joins CNCF](/events/2025-04-opentofu-joins-cncf.md)
- [OpenBao](/projects/licensing-forks/openbao.md)

[^tofu-gh]: OpenTofu GitHub — https://github.com/opentofu/opentofu
[^tofu-blog]: OpenTofu blog — https://opentofu.org/blog/
[^tns-tofu-cncf]: The New Stack — https://thenewstack.io/opentofu-joins-cncf-new-home-for-open-source-iac-project/
[^sa-tofu-ga]: SiliconANGLE — https://siliconangle.com/2024/01/10/terraform-fork-opentofu-launches-general-availability/
[^endoflife-tofu]: endoflife.date — https://endoflife.date/opentofu
[^tns-tofu19]: The New Stack — https://thenewstack.io/opentofu-turns-one-with-opentofu-1-9-0/
[^gruntwork-switch]: Gruntwork — https://blog.gruntwork.io/make-the-switch-to-opentofu-6904ba95e799
[^infoq-tf115]: InfoQ — https://www.infoq.com/news/2026/06/terraform-1-15/
[^techtarget-openbao]: TechTarget — https://www.techtarget.com/searchitoperations/news/366644831/Nvidia-adopts-OpenBao-open-source-fork-of-HashiCorps-Vault
