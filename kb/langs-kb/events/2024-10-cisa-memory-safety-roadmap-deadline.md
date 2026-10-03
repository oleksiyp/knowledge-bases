---
type: Event
title: CISA/FBI set a 2026-01-01 deadline for memory-safety roadmaps
description: CISA and the FBI's "Product Security Bad Practices" (draft 2024-10-16, v2 January 2025) said shipping memory-unsafe products without a published memory-safety roadmap by 2026-01-01 was "dangerous". The deadline was never binding, but it reached procurement questionnaires.
event_kind: policy
date: 2024-10-16
era: E4
impact: positive
languages: [languages/c, languages/cpp, languages/rust]
runtimes: []
ideas: [ideas/memory-safety/memory-safety-policy-push]
tags: [policy, cisa, fbi, secure-by-design, memory-safety]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: psbp-v1
    resource: https://www.ic3.gov/CSA/2024/241016-2.pdf
    title: "CISA/FBI: Product Security Bad Practices (draft publication, October 2024)"
    author: org:cisa
  - id: psbp-v2
    resource: https://www.ic3.gov/CSA/2025/250117.pdf
    title: "CISA/FBI: Product Security Bad Practices Version 2 (January 2025)"
    author: org:cisa
  - id: cisa-psbp
    resource: https://www.cisa.gov/resources-tools/resources/product-security-bad-practices
    title: "CISA: Product Security Bad Practices resource page"
    author: org:cisa
  - id: techrepublic-cisa
    resource: https://www.techrepublic.com/article/cisa-fbi-memory-safety-recommendations/
    title: "TechRepublic: Software Makers Encouraged to Stop Using C/C++ by 2026"
---

# What happened
On 2024-10-16 CISA and the FBI published a draft "Product Security Bad Practices" catalogue under their Secure by Design programme.[^psbp-v1] One entry targeted new products for critical infrastructure written in memory-unsafe languages such as C or C++. Another said that for existing products, failing to publish a memory-safety roadmap by **1 January 2026** "is dangerous and significantly elevates risk to national security". The roadmap should prioritise network-facing and cryptographic code.[^psbp-v1][^techrepublic-cisa] Version 2, published in January 2025 after 78 public comments, kept the deadline. It added context to the memory-safety section and exempted products with announced end-of-support before 2030-01-01.[^psbp-v2][^cisa-psbp]

# Why it matters
This turned the [memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md) from exhortation into a date. Vendors could act on a date even though the guidance was voluntary. It was the "plan by 2026" that Stroustrup cited in his 2025 [profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md) memo. It also explains why 2025 saw a wave of published roadmaps and hardening programmes. The deadline passed in January 2026 with no enforcement mechanism. Its lasting effect was on buyers' security questionnaires, not regulation.

# Related
- [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)
- [White House ONCD report](/events/2024-02-white-house-oncd-memory-safety-report.md)
- [CISA/NSA memory-safe languages guide](/events/2025-06-cisa-nsa-memory-safe-languages-guide.md)

[^psbp-v1]: CISA/FBI: Product Security Bad Practices (Oct 2024) — https://www.ic3.gov/CSA/2024/241016-2.pdf
[^psbp-v2]: CISA/FBI: Product Security Bad Practices Version 2 — https://www.ic3.gov/CSA/2025/250117.pdf
[^cisa-psbp]: CISA: Product Security Bad Practices — https://www.cisa.gov/resources-tools/resources/product-security-bad-practices
[^techrepublic-cisa]: TechRepublic: Software Makers Encouraged to Stop Using C/C++ by 2026 — https://www.techrepublic.com/article/cisa-fbi-memory-safety-recommendations/
