---
type: Event
title: IBM/HashiCorp sunsets CDK for Terraform
description: "HashiCorp, an IBM Company, deprecated and archived CDK for Terraform on Dec 10, 2025, saying it 'did not find product-market fit at scale' — the most visible post-acquisition pruning of a HashiCorp open project."
event_kind: shutdown
date: 2025-12-10
window: W12
impact: negative
projects: [projects/licensing-forks/terraform]
organizations: [organizations/hashicorp]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cdktf-docs
    resource: https://developer.hashicorp.com/terraform/cdktf
    title: "HashiCorp: CDK for Terraform deprecated"
  - id: tns-cdktf
    resource: https://thenewstack.io/ibm-hashicorp-sunsets-terraforms-external-language-support/
    title: "The New Stack: IBM HashiCorp sunsets Terraform's external language support"
  - id: cdktf-gh
    resource: https://github.com/hashicorp/terraform-cdk
    title: terraform-cdk GitHub repository
---

# What happened
CDKTF, which let users define Terraform infrastructure in TypeScript, Python, Go and other languages, was deprecated and archived on Dec 10, 2025. HashiCorp said it "did not find product-market fit at scale" and recommended migrating to HCL.[^cdktf-docs][^tns-cdktf][^cdktf-gh]

# Why it matters
It is a concrete sign of how IBM manages the HashiCorp portfolio: concentrating on core products and cutting adjacent open projects.

# Outcome so far
The repository is read-only. Users are left with HCL, Pulumi or AWS CDK.

# Related
- [Terraform](/projects/licensing-forks/terraform.md), [IBM completes HashiCorp acquisition](/events/2025-02-ibm-completes-hashicorp-acquisition.md)

[^cdktf-docs]: HashiCorp — https://developer.hashicorp.com/terraform/cdktf
[^tns-cdktf]: The New Stack — https://thenewstack.io/ibm-hashicorp-sunsets-terraforms-external-language-support/
[^cdktf-gh]: GitHub — https://github.com/hashicorp/terraform-cdk
