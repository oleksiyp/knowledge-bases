---
type: Organization
title: HashiCorp
description: "Maker of Terraform, Vault, Consul and Nomad; moved its products to BSL in 2023 (spawning the OpenTofu fork) and was acquired by IBM for $35/share (~$6.4B enterprise value), closing 2025-02-27."
resource: https://www.hashicorp.com
tags: [commercial-open-source, infrastructure-as-code, bsl, acquired]
org_kind: public-company
hq: San Francisco, USA
funding: { total_usd: "public 2021-2025", last_round: "IPO (Dec 2021)", last_round_date: 2021-12, valuation_usd: "~$6.4B EV / ~$7.2B equity (IBM, 2025)" }
business_verdict: acquired
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-ibm-hashicorp
    resource: https://techcrunch.com/2025/02/27/ibm-closes-6-4b-hashicorp-acquisition/
    title: "TechCrunch: IBM closes $6.4B HashiCorp acquisition (2025-02-27)"
  - id: sa-ibm-hashicorp
    resource: https://siliconangle.com/2025/02/27/ibm-completes-6-4b-hashicorp-acquisition-following-regulatory-approvals/
    title: "SiliconANGLE: IBM completes $6.4B HashiCorp acquisition following regulatory approvals"
  - id: ibm-q2-2026
    resource: https://newsroom.ibm.com/2026-07-22-IBM-RELEASES-SECOND-QUARTER-RESULTS
    title: "IBM Q2 2026 results (HashiCorp in High-Growth Portfolio)"
  - id: cdktf-docs
    resource: https://developer.hashicorp.com/terraform/cdktf
    title: "HashiCorp: CDK for Terraform deprecated (2025-12-10)"
  - id: hcp-free
    resource: https://www.hashicorp.com/en/blog/continuing-hcp-terraform-s-enhanced-free-tier-experience
    title: "HashiCorp: HCP Terraform legacy free plan EOL 2026-03-31"
  - id: techtarget-openbao
    resource: https://www.techtarget.com/searchitoperations/news/366644831/Nvidia-adopts-OpenBao-open-source-fork-of-HashiCorps-Vault
    title: "TechTarget: Nvidia adopts OpenBao (2026-06-18)"
  - id: infoq-tf115
    resource: https://www.infoq.com/news/2026/06/terraform-1-15/
    title: "InfoQ: Terraform 1.15 closes gap to OpenTofu (2026-06)"
---

# Summary
HashiCorp is the canonical case of a source-available relicense followed by sale. After switching Terraform and other products from MPL to the Business Source License in Aug 2023 (which triggered the Linux Foundation's OpenTofu fork), it agreed to be acquired by IBM in April 2024; the deal closed **2025-02-27** after FTC and UK CMA clearance, at **$35/share (~$7.2B equity, $6.4B net of cash)**[^tc-ibm-hashicorp][^sa-ibm-hashicorp]. IBM now reports HashiCorp in its "High-Growth Portfolio"[^ibm-q2-2026].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| (pre) | 2023-08 | Relicense to BSL 1.1; OpenTofu fork follows | − (community) |
| (pre) | 2024-04 | IBM agrees to acquire | + (exit) |
| W24 | 2025-02-27 | Acquisition closes; delisted[^tc-ibm-hashicorp] | acquired |

# Monetization model
HCP managed cloud and enterprise self-managed subscriptions; products now under BSL (source-available).

# Successes
- $6.4B exit; Terraform remains the IaC standard inside IBM's hybrid-cloud stack.

# Failures / risks
- BSL relicense ceded community leadership of open IaC to OpenTofu.

# Related
- [IBM open source portfolio](/projects/coss-market/ibm-open-source-portfolio.md), [/events/2025-02-ibm-completes-hashicorp-acquisition.md](/events/2025-02-ibm-completes-hashicorp-acquisition.md), [Licensing & forks domain](/domains/licensing-forks.md)

[^tc-ibm-hashicorp]: TechCrunch, 2025-02-27.
[^sa-ibm-hashicorp]: SiliconANGLE, 2025-02-27.
[^ibm-q2-2026]: IBM Newsroom, 2026-07-22.

## Additional notes (licensing-forks)
- **Post-acquisition pruning:** CDK for Terraform was deprecated and archived on 2025-12-10 ("did not find product-market fit at scale").[^cdktf-docs] HCP Terraform's legacy free plan ended on 2026-03-31, replaced by a 500-managed-resource free tier.[^hcp-free]
- **Fork pressure:** Terraform 1.15 (June 2026) shipped features OpenTofu had first.[^infoq-tf115] Nvidia became a public OpenBao adopter in 2026, and OpenBao offers free namespaces, which are a paid feature in Vault.[^techtarget-openbao]
- **Verdict on the BSL:** it maximised exit value but handed community leadership to OpenTofu and OpenBao. See [Terraform](/projects/licensing-forks/terraform.md), [OpenTofu](/projects/licensing-forks/opentofu.md), [Vault](/projects/licensing-forks/vault.md), [OpenBao](/projects/licensing-forks/openbao.md), [CDKTF sunset](/events/2025-12-cdktf-sunset.md).

[^cdktf-docs]: HashiCorp — https://developer.hashicorp.com/terraform/cdktf
[^hcp-free]: HashiCorp blog — https://www.hashicorp.com/en/blog/continuing-hcp-terraform-s-enhanced-free-tier-experience
[^techtarget-openbao]: TechTarget — https://www.techtarget.com/searchitoperations/news/366644831/Nvidia-adopts-OpenBao-open-source-fork-of-HashiCorps-Vault
[^infoq-tf115]: InfoQ — https://www.infoq.com/news/2026/06/terraform-1-15/
