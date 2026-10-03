---
type: Event
title: CISA and NSA publish "Memory Safe Languages - Reducing Vulnerabilities" guide
description: On 2025-06-24 CISA and the NSA jointly reiterated, under the new US administration, that memory-safe languages are the most comprehensive mitigation for memory-safety bugs. They added practical adoption advice, which showed the policy push surviving the change of government.
event_kind: policy
date: 2025-06-24
era: E4
impact: positive
languages: [languages/c, languages/cpp, languages/rust]
runtimes: []
ideas: [ideas/memory-safety/memory-safety-policy-push]
tags: [policy, cisa, nsa, memory-safety]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cisa-alert
    resource: https://www.cisa.gov/news-events/alerts/2025/06/24/new-guidance-released-reducing-memory-related-vulnerabilities
    title: "CISA: New Guidance Released for Reducing Memory-Related Vulnerabilities (2025-06-24)"
    author: org:cisa
  - id: nsa-csi-2025
    resource: https://www.nsa.gov/Press-Room/Digital-Media-Center/Document-Gallery/igphoto/2003742198/
    title: "NSA: CSI — Memory Safe Languages: Reducing Vulnerabilities in Modern Software Development"
    author: org:nsa
  - id: reg-cisa-2025
    resource: https://www.theregister.com/software/2025/06/27/cisa-nsa-repeat-call-for-memory-safe-programming-languages/1192628
    title: "The Register: CISA, NSA repeat call for memory safe programming languages (2025-06-27)"
---

# What happened
On 2025-06-24 CISA and the NSA released a joint Cybersecurity Information Sheet, "Memory Safe Languages: Reducing Vulnerabilities in Modern Software Development".[^cisa-alert][^nsa-csi-2025] It restated that memory-safe languages (MSLs) offer "the most comprehensive mitigation" for memory-safety bugs. It also went further than the 2022 sheet in practical guidance: incremental adoption, interop with existing C/C++, and handling performance, training and ecosystem gaps. It cited industry evidence such as Android's falling memory-safety vulnerability share.[^reg-cisa-2025]

# Why it matters
Many expected the change of US administration in January 2025 to stall the [memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md), since the ONCD report was a Biden-era document. This guide showed the agency-level consensus persisting. The emphasis did shift, from "roadmaps by a deadline" to "how to migrate". Together with the EU Cyber Resilience Act (in force December 2024; vulnerability reporting from September 2026), it kept the pressure on C and C++ vendors that WG21 cited in its [profiles debate](/events/2025-09-safe-cpp-abandoned.md).

# Related
- [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)
- [NSA guidance (2022)](/events/2022-11-nsa-memory-safety-guidance.md)
- [CISA roadmap deadline](/events/2024-10-cisa-memory-safety-roadmap-deadline.md)

[^cisa-alert]: CISA: New Guidance Released for Reducing Memory-Related Vulnerabilities — https://www.cisa.gov/news-events/alerts/2025/06/24/new-guidance-released-reducing-memory-related-vulnerabilities
[^nsa-csi-2025]: NSA: Memory Safe Languages: Reducing Vulnerabilities in Modern Software Development — https://www.nsa.gov/Press-Room/Digital-Media-Center/Document-Gallery/igphoto/2003742198/
[^reg-cisa-2025]: The Register: CISA, NSA repeat call for memory safe programming languages — https://www.theregister.com/software/2025/06/27/cisa-nsa-repeat-call-for-memory-safe-programming-languages/1192628
