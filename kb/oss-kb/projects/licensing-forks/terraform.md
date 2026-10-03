---
type: OSS Project
title: Terraform
description: "HashiCorp's IaC tool, BSL-licensed since Aug 2023; IBM closed its $6.4B HashiCorp acquisition in Feb 2025 and has since pruned (CDKTF sunset Dec 2025) and squeezed (HCP free-tier changes) while keeping the BSL — commercially absorbed, community-ceded to OpenTofu."
resource: https://github.com/hashicorp/terraform
tags: [iac, bsl, relicensing, acquisition, ibm]
domain: licensing-forks
license: BUSL-1.1
license_history: ["MPL-2.0 (2014-2023)", "BUSL-1.1 (from 1.6, Aug 2023)"]
governance: single-vendor
steward: HashiCorp, an IBM Company
backing_orgs: [organizations/hashicorp]
metrics:
  github_stars: { value: 49817, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: acquired
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tf-gh
    resource: https://github.com/hashicorp/terraform
    title: Terraform GitHub repository (releases)
  - id: ibm-closes
    resource: https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform
    title: "IBM completes acquisition of HashiCorp (2025-02-27)"
  - id: hcp-fy24
    resource: https://www.sec.gov/Archives/edgar/data/1720671/000162828024008867/hcp-q4fy24xex991.htm
    title: "SEC 8-K Ex. 99.1: HashiCorp Q4 and fiscal 2024 results (FY ended 2024-01-31: revenue $583.1M, GAAP net loss $190.7M)"
  - id: crn-x
    resource: https://x.com/CRN/status/1960788659537358920
    title: "CRN (X post, 2025-08-27): HashiCorp's CEO of nine-plus years, David McJannet, has left"
  - id: cdktf-docs
    resource: https://developer.hashicorp.com/terraform/cdktf
    title: "HashiCorp: CDK for Terraform deprecated as of 2025-12-10"
  - id: tns-cdktf
    resource: https://thenewstack.io/ibm-hashicorp-sunsets-terraforms-external-language-support/
    title: "The New Stack: IBM HashiCorp sunsets Terraform's external language support"
  - id: hcp-free
    resource: https://www.hashicorp.com/en/blog/continuing-hcp-terraform-s-enhanced-free-tier-experience
    title: "HashiCorp: Continuing HCP Terraform's enhanced Free tier experience (legacy free plan EOL 2026-03-31)"
  - id: infoq-tf115
    resource: https://www.infoq.com/news/2026/06/terraform-1-15/
    title: "InfoQ: Terraform 1.15 closes gap to OpenTofu on dynamic sources and deprecation (2026-06)"
  - id: crn-mcjannet
    resource: https://observer.com/author/dave-mcjannet/
    title: "Observer author bio: Dave McJannet, now CEO of Dome Systems, formerly CEO of HashiCorp (departure reported by CRN 2025-08-27)"
  - id: fidelity-tofu
    resource: https://opentofu.org/blog/
    title: "OpenTofu blog: Fidelity Investments migration story (2025-10-06)"
---

# Summary
Terraform shows what happens when a relicensed project is then acquired. HashiCorp moved Terraform from MPL-2.0 to BUSL-1.1 in August 2023, which led to the [OpenTofu](/projects/licensing-forks/opentofu.md) fork. IBM announced a $6.4B acquisition in April 2024 and closed it on Feb 27, 2025.[^ibm-closes] Under IBM, Terraform kept the BSL, sunset CDK for Terraform (Dec 10, 2025),[^cdktf-docs] and moved all free HCP Terraform users to a 500-resource free tier (legacy plan EOL Mar 31, 2026).[^hcp-free] Core development is active (1.16.x, 1.17 beta in Sept 2026), and Terraform 1.15 shipped features that OpenTofu had first, which shows the fork now sometimes sets the agenda.[^tf-gh][^infoq-tf115] Verdict: the business was acquired, and community energy is declining.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2023-08 | Terraform relicensed MPL-2.0 → BUSL-1.1; OpenTofu fork follows | OSS | − |
| W24 | 2025-02-27 | IBM closes $6.4B HashiCorp acquisition (HashiCorp's last full fiscal year, FY2024 ended Jan 31, 2024: revenue $583.1M, GAAP net loss $190.7M)[^ibm-closes][^hcp-fy24] | Business | ± |
| W24 | 2025-08-27 | CEO Dave McJannet departs post-integration[^crn-x][^crn-mcjannet] | Business | − |
| W24 | 2025-10-06 | Fidelity publicly documents migrating to OpenTofu[^fidelity-tofu] | OSS | − |
| W12 | 2025-12-10 | CDK for Terraform deprecated and archived; "did not find product-market fit at scale"[^cdktf-docs][^tns-cdktf] | OSS | − |
| W9 | 2026-03-31 | HCP Terraform legacy free plan EOL; enhanced Free tier capped at 500 managed resources[^hcp-free] | Business | ± |
| W6 | 2026-06 | Terraform 1.15 adds dynamic sources/deprecation features, closing gap to OpenTofu[^infoq-tf115] | OSS | ± |
| W3 | 2026-09/10 | 1.16.5 and 1.17.0-beta2 released[^tf-gh] | OSS | + |

# OSS successes
- Still the default IaC tool by installed base, with a large provider ecosystem (registry under HashiCorp/IBM control).
- Release cadence continued under IBM.[^tf-gh]

# OSS failures / risks
- The BSL means downstream tools (Spacelift, env0, Scalr, Harness) have to build on OpenTofu or deal with legal ambiguity.
- CDKTF was archived, which left users of the polyglot-IaC path stranded.[^tns-cdktf]
- Feature leadership is now contested: some Terraform releases follow OpenTofu's lead.[^infoq-tf115]

# Business successes
- HashiCorp shareholders got a $6.4B exit. For a BSL vendor, the relicense arguably made the company a cleaner acquisition target.[^ibm-closes]

# Business failures / risks
- HashiCorp was still loss-making before acquisition ($190.7M GAAP net loss on $583.1M revenue in fiscal 2024, ended Jan 31, 2024); quarterly losses were narrowing in FY2025.[^hcp-fy24] (Corrected in pass 2: these figures are fiscal 2024, Feb 2023–Jan 2024, not calendar 2024.)
- Leadership departure and IBM's portfolio pruning (CDKTF) point to cost-focused stewardship.[^crn-mcjannet][^cdktf-docs]

# By window
## W3
- 1.16.x patches and 1.17 beta (Sept 2026).[^tf-gh]
## W6
- Terraform 1.15 (June 2026).[^infoq-tf115]
## W9
- HCP legacy free plan ends (Mar 31, 2026).[^hcp-free]
## W12
- CDKTF sunset (Dec 10, 2025).[^cdktf-docs]
## W24
- IBM closes acquisition (Feb 2025); CEO departs (Aug 2025).[^ibm-closes][^crn-mcjannet]

# Lessons
- Moving to BSL ahead of a sale can maximise exit value. The price is that the community moves to a fork and the acquirer inherits a product the community no longer supports.
- A large acquirer tends to cut adjacent open projects (CDKTF) rather than invest in them.

# Related
- [OpenTofu](/projects/licensing-forks/opentofu.md)
- [Vault](/projects/licensing-forks/vault.md), [OpenBao](/projects/licensing-forks/openbao.md)
- [HashiCorp](/organizations/hashicorp.md)
- [IBM completes HashiCorp acquisition](/events/2025-02-ibm-completes-hashicorp-acquisition.md)
- [CDKTF sunset](/events/2025-12-cdktf-sunset.md)

[^tf-gh]: Terraform GitHub — https://github.com/hashicorp/terraform
[^ibm-closes]: IBM newsroom — https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform
[^hcp-fy24]: SEC — https://www.sec.gov/Archives/edgar/data/1720671/000162828024008867/hcp-q4fy24xex991.htm
[^crn-x]: CRN on X — https://x.com/CRN/status/1960788659537358920
[^cdktf-docs]: HashiCorp CDKTF docs — https://developer.hashicorp.com/terraform/cdktf
[^tns-cdktf]: The New Stack — https://thenewstack.io/ibm-hashicorp-sunsets-terraforms-external-language-support/
[^hcp-free]: HashiCorp blog — https://www.hashicorp.com/en/blog/continuing-hcp-terraform-s-enhanced-free-tier-experience
[^infoq-tf115]: InfoQ — https://www.infoq.com/news/2026/06/terraform-1-15/
[^crn-mcjannet]: Observer bio (departure reported by CRN, 2025-08-27) — https://observer.com/author/dave-mcjannet/
[^fidelity-tofu]: OpenTofu blog — https://opentofu.org/blog/
