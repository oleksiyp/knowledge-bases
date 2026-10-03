---
type: Event
title: White House ONCD report urges memory-safe languages
description: On 2024-02-26 the White House Office of the National Cyber Director published "Back to the Building Blocks", calling on manufacturers to adopt memory-safe languages. It was the highest-level political endorsement of the memory-safety push, though it carried no binding mandate.
event_kind: policy
date: 2024-02-26
era: E3
impact: positive
languages: [languages/c, languages/cpp, languages/rust]
runtimes: []
ideas: [ideas/memory-safety/memory-safety-policy-push, ideas/memory-safety/cheri-capability-hardware]
tags: [policy, white-house, oncd, memory-safety]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: oncd-report
    resource: https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/02/Final-ONCD-Technical-Report.pdf
    title: "ONCD: Back to the Building Blocks — A Path Toward Secure and Measurable Software (2024-02-26)"
    author: org:white-house-oncd
  - id: oncd-fact
    resource: https://bidenwhitehouse.archives.gov/oncd/briefing-room/2024/02/26/memory-safety-fact-sheet
    title: "ONCD: Memory safety fact sheet (2024-02-26)"
    author: org:white-house-oncd
---

# What happened
On 2024-02-26 the US Office of the National Cyber Director released the technical report "Back to the Building Blocks: A Path Toward Secure and Measurable Software".[^oncd-report] It argued that technology manufacturers can "prevent entire classes of vulnerabilities from entering the digital ecosystem" by adopting memory-safe programming languages. It cited Heartbleed and the Morris worm as examples of the cost of memory-unsafety.[^oncd-fact] The report also named memory-safe hardware, specifically [CHERI](/ideas/memory-safety/cheri-capability-hardware.md), as a complementary path, and called for better software-quality metrics.[^oncd-report]

# Why it matters
The report put the message of the [2022 NSA guidance](/events/2022-11-nsa-memory-safety-guidance.md) behind the White House and drew mainstream press coverage. It changed how memory safety was discussed in boardrooms and procurement. It shifted "C/C++" from a style preference to a risk-management issue. That set up CISA's concrete [roadmap deadline](/events/2024-10-cisa-memory-safety-roadmap-deadline.md) and drove WG21's [profiles response](/ideas/memory-safety/safe-cpp-vs-profiles.md). The limits were also clear: the report imposed no mandate or procurement rule, and it was issued under an administration that changed in January 2025.

# Related
- [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)
- [CHERI capability hardware](/ideas/memory-safety/cheri-capability-hardware.md)
- [C](/languages/c.md), [C++](/languages/cpp.md), [Rust](/languages/rust.md)

[^oncd-report]: ONCD: Back to the Building Blocks — https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/02/Final-ONCD-Technical-Report.pdf
[^oncd-fact]: ONCD: Memory safety fact sheet — https://bidenwhitehouse.archives.gov/oncd/briefing-room/2024/02/26/memory-safety-fact-sheet
