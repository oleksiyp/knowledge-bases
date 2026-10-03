---
type: Event
title: "IBM completes $6.4B acquisition of HashiCorp"
description: "IBM closed its acquisition of HashiCorp (Terraform, Vault) on 2025-02-27 at $35/share — ~$7.2B equity, $6.4B net of cash — after FTC and UK CMA clearance."
event_kind: acquisition
date: 2025-02-27
window: W24
impact: mixed
projects: []
organizations: [organizations/hashicorp, organizations/red-hat]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-ibm-hashicorp
    resource: "https://techcrunch.com/2025/02/27/ibm-closes-6-4b-hashicorp-acquisition/"
    title: "TechCrunch: IBM closes $6.4B HashiCorp acquisition (2025-02-27)"
  - id: sa-ibm-hashicorp
    resource: "https://siliconangle.com/2025/02/27/ibm-completes-6-4b-hashicorp-acquisition-following-regulatory-approvals/"
    title: "SiliconANGLE: IBM completes $6.4B HashiCorp acquisition following regulatory approvals"
  - id: ibm-closes
    resource: https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform
    title: "IBM completes acquisition of HashiCorp (2025-02-27)"
  - id: tc-cma
    resource: https://techcrunch.com/2025/02/25/ibms-6-4b-hashicorp-acquisition-cleared-by-uk/
    title: "TechCrunch: IBM's $6.4B HashiCorp acquisition cleared by UK (2025-02-25)"
  - id: hcp-fy24
    resource: https://www.sec.gov/Archives/edgar/data/1720671/000162828024008867/hcp-q4fy24xex991.htm
    title: "SEC 8-K Ex. 99.1: HashiCorp fiscal 2024 results (FY ended 2024-01-31)"
  - id: cdktf-docs
    resource: https://developer.hashicorp.com/terraform/cdktf
    title: "HashiCorp: CDKTF deprecated (2025-12-10)"
---
# What happened
IBM completed its acquisition of HashiCorp on 2025-02-27, paying $35 per share in cash (~$7.2B equity value; $6.4B enterprise value net of cash), after the FTC and the UK CMA cleared the deal[^tc-ibm-hashicorp][^sa-ibm-hashicorp]. HashiCorp was delisted from Nasdaq.

# Why it matters
The first of three public COSS take-outs in 18 months (then Couchbase, Confluent). It validated the "relicense to BSL, then sell" path financially even as the community moved to the OpenTofu fork, and made IBM the dominant owner of infrastructure COSS franchises.

# Outcome so far
HashiCorp sits in IBM's "High-Growth Portfolio" with Red Hat and (from 2026) Confluent. BSL licensing remains.

# Related
- [HashiCorp](/organizations/hashicorp.md), [IBM's open source portfolio](/projects/coss-market/ibm-open-source-portfolio.md), [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md)

[^tc-ibm-hashicorp]: TechCrunch: IBM closes $6.4B HashiCorp acquisition (2025-02-27).
[^sa-ibm-hashicorp]: SiliconANGLE: IBM completes $6.4B HashiCorp acquisition following regulatory approvals.

## Additional notes (licensing-forks)

### What happened
IBM announced the deal in April 2024 and closed it on Feb 27, 2025, after the UK CMA cleared it on Feb 25.[^ibm-closes][^tc-cma] In its last full fiscal year before the deal closed (FY2024, ended Jan 31, 2024) HashiCorp had $583.1M revenue and a $190.7M GAAP net loss.[^hcp-fy24] (Corrected in pass 2: these are fiscal-2024 figures, not calendar 2024.)

### Why it matters
It is the largest exit for a company that had moved its products from open source to BSL. It suggests relicensing can make a company more attractive to a strategic buyer even as its community leaves for forks.

### Outcome so far
IBM kept Terraform and Vault under BSL, deprecated CDK for Terraform on Dec 10, 2025, and consolidated HCP free tiers.[^cdktf-docs] OpenTofu (CNCF) and OpenBao (OpenSSF) kept growing.

### Related
- [Terraform](/projects/licensing-forks/terraform.md), [Vault](/projects/licensing-forks/vault.md), [OpenTofu](/projects/licensing-forks/opentofu.md), [OpenBao](/projects/licensing-forks/openbao.md), [HashiCorp](/organizations/hashicorp.md)

[^ibm-closes]: IBM newsroom — https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform
[^tc-cma]: TechCrunch — https://techcrunch.com/2025/02/25/ibms-6-4b-hashicorp-acquisition-cleared-by-uk/
[^hcp-fy24]: SEC — https://www.sec.gov/Archives/edgar/data/1720671/000162828024008867/hcp-q4fy24xex991.htm
[^cdktf-docs]: HashiCorp docs — https://developer.hashicorp.com/terraform/cdktf
