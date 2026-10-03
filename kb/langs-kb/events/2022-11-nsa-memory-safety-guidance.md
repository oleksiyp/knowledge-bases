---
type: Event
title: NSA publishes "Software Memory Safety" guidance
description: On 2022-11-10 the US NSA told organisations to move from C and C++ to memory-safe languages (C#, Go, Java, Ruby, Rust, Swift), the first of a run of US government statements that turned memory safety into policy.
event_kind: policy
date: 2022-11-10
era: E3
impact: positive
languages: [languages/c, languages/cpp, languages/rust]
runtimes: []
ideas: [ideas/memory-safety/memory-safety-policy-push]
tags: [policy, nsa, memory-safety, government]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: nsa-csi
    resource: https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF
    title: "NSA Cybersecurity Information Sheet: Software Memory Safety (2022-11-10)"
    author: org:nsa
  - id: reg-nsa
    resource: https://www.theregister.com/2022/11/11/nsa_urges_orgs_to_use/
    title: "The Register: NSA urges orgs to use memory-safe programming languages (2022-11-11)"
  - id: secweek-nsa
    resource: https://www.securityweek.com/nsa-publishes-guidance-mitigating-software-memory-safety-issues/
    title: "SecurityWeek: NSA Publishes Guidance on Mitigating Software Memory Safety Issues"
---

# What happened
On 2022-11-10 the NSA published the Cybersecurity Information Sheet "Software Memory Safety".[^nsa-csi] It cited Microsoft's and Google's figure that about 70% of their vulnerabilities are memory-safety bugs. It recommended that organisations "use a memory safe language when possible", naming C#, Go, Java, Ruby, Rust and Swift. Where C and C++ remain, it recommended hardening them with compiler options, static and dynamic analysis, and OS mitigations.[^reg-nsa][^secweek-nsa]

# Why it matters
This was the first time a US security agency named C and C++ as a systemic risk. It began the escalation that went through CISA's "Case for Memory Safe Roadmaps" (December 2023), the [White House ONCD report](/events/2024-02-white-house-oncd-memory-safety-report.md) (February 2024), the [CISA/FBI roadmap deadline](/events/2024-10-cisa-memory-safety-roadmap-deadline.md) and the [2025 CISA/NSA guide](/events/2025-06-cisa-nsa-memory-safe-languages-guide.md). The C++ community read it as an existential threat. It directly motivated the [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md) fight in WG21 and Stroustrup's 2025 "call to urgent action".

# Related
- [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)
- [C](/languages/c.md), [C++](/languages/cpp.md), [Rust](/languages/rust.md)

[^nsa-csi]: NSA CSI: Software Memory Safety — https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF
[^reg-nsa]: The Register: NSA urges orgs to use memory-safe programming languages — https://www.theregister.com/2022/11/11/nsa_urges_orgs_to_use/
[^secweek-nsa]: SecurityWeek: NSA Publishes Guidance on Mitigating Software Memory Safety Issues — https://www.securityweek.com/nsa-publishes-guidance-mitigating-software-memory-safety-issues/
