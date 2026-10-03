---
type: OSS Project
title: Rust
description: Memory-safe systems language governed by the Rust Project with the Rust Foundation; in 2025–26 it lost its "experimental" tag in the Linux kernel, entered the TIOBE top 10 (July 2026), and became the default language for rewrites of developer tooling — including AI-driven ones.
resource: https://github.com/rust-lang/rust
tags: [programming-language, systems, foundation-hosted, mit, apache-2.0, linux-kernel]
domain: devtools-languages
license: "MIT OR Apache-2.0"
license_history: ["MIT OR Apache-2.0 (2015-)"]
governance: foundation
steward: Rust Foundation / Rust Project leadership council
backing_orgs: [organizations/rust-foundation]
metrics:
  github_stars: { value: 119418, as_of: 2026-10-03 }
  tiobe_rank: { value: "top 10 (1.34%)", as_of: 2026-07-31 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rust-gh
    resource: https://github.com/rust-lang/rust
    title: Rust GitHub repository (stars via GitHub API, 2026-10-03)
  - id: lwn-rust-exp
    resource: https://lwn.net/Articles/1049831/
    title: "LWN: The (successful) end of the kernel Rust experiment (2025 Maintainers Summit, Tokyo, 2025-12-10)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology (Rust most admired, 72%)"
  - id: infoworld-tiobe
    resource: https://www.infoworld.com/article/4193406/rust-language-rises-to-top-10-in-tiobe-popularity-index.html
    title: "InfoWorld: Rust language rises to top 10 in Tiobe popularity index (July 2026)"
  - id: rf-openai
    resource: https://rustfoundation.org/media/rust-foundation-welcomes-openai-as-platinum-member-announces-donation-to-rust-project/
    title: "Rust Foundation: Welcomes OpenAI as Platinum Member, announces donation ($600K total; 2026-06-17)"
    author: org:rust-foundation
  - id: rf-new-members
    resource: https://rustfoundation.org/media/rust-foundation-welcomes-new-members-codspeed-haevek-perplexity-and-software-stewardship-lab/
    title: "Rust Foundation: Welcomes CodSpeed, Haevek, Perplexity and Software Stewardship Lab (2026-09-23)"
    author: org:rust-foundation
  - id: rf-farewell
    resource: https://rustfoundation.org/media/a-fond-farewell-to-three-rust-foundation-colleagues/
    title: "Rust Foundation: A Fond Farewell To Three Rust Foundation Colleagues (2026-10-02)"
    author: org:rust-foundation
  - id: rf-media
    resource: https://rustfoundation.org/media/
    title: Rust Foundation media room (members, Maintainers Fund, staff changes)
    author: org:rust-foundation
  - id: reg-bun-rust
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI"
  - id: ladybird-feb26
    resource: https://ladybird.org/newsletter/2026-02-28/
    title: "This Month in Ladybird — February 2026 (Rust LibJS frontend landed)"
---

# Summary
Rust consolidated its position as the systems/tooling language of the era. At the 2025 Linux Kernel Maintainers Summit, kernel developers (Tokyo, 2025-12-10) judged the Rust experiment a success and dropped the "experimental" label.[^lwn-rust-exp] Rust was "most admired" in Stack Overflow's 2025 survey (72%) and broke into the TIOBE top 10 for the first time in July 2026 (10th, 1.34%, up from 18th a year earlier).[^so-2025][^infoworld-tiobe] It became the target of high-profile rewrites — Bun's AI-generated Zig→Rust port (May 2026) and Ladybird's C++→Rust JS engine work (Feb 2026) — and the backbone of new JS/Python tooling (uv, Ruff, Rolldown, Oxc, Biome, Rspack).[^reg-bun-rust][^ladybird-feb26] The Rust Foundation added members (OpenAI as Platinum member with $600K of support on 2026-06-17; CodSpeed, Haevek, Perplexity and Software Stewardship Lab on 2026-09-23) and runs a Maintainers Fund, but on 2026-10-02 announced the departure of three staff (communications, technology and community leads) in a restructuring.[^rf-openai][^rf-new-members][^rf-farewell][^rf-media] Releases continue on the six-week train (1.99.0 on 2026-10-01). Verdict: thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07 | Rust "most admired" language in SO Developer Survey 2025 (72%) [^so-2025] | OSS | + |
| W12 | 2025-12-10 | Maintainers Summit: Rust in Linux kernel no longer experimental [^lwn-rust-exp] | OSS | + |
| W9 | 2026-02 | Ladybird begins porting JS parser/bytecode generator to Rust with AI assistance [^ladybird-feb26] | OSS | + |
| W6 | 2026-05-14 | Bun's 1M-line Rust rewrite merged [^reg-bun-rust] | OSS | + |
| W6 | 2026-06-17 | OpenAI joins Rust Foundation as Platinum member ($600K incl. maintainer support) [^rf-openai] | Governance | + |
| W3 | 2026-07 | Rust enters TIOBE top 10 (10th, 1.34%) [^infoworld-tiobe] | OSS | + |
| W3 | 2026-09-23 | Foundation welcomes CodSpeed, Haevek, Perplexity (Silver) and Software Stewardship Lab [^rf-new-members] | Governance | + |
| W3 | 2026-10-01 | Rust 1.99.0 (six-week train) [^rust-gh] | OSS | = |
| W3 | 2026-10-02 | Rust Foundation announces departure of three staff in restructuring [^rf-farewell] | Governance | − |

# OSS successes
- Kernel acceptance, rising industry rank, and dominance in new developer tooling.[^lwn-rust-exp][^infoworld-tiobe]
- Funding of maintainers via Rust Foundation Maintainers Fund / Maintainer-in-Residence program.[^rf-media]

# OSS failures / risks
- Foundation announced departures of three staff (Directors of Communications and of Technology, and the community coordinator) on 2026-10-02, framed as aligning staffing with "evolving needs". Corrected in pass 2: "mid-2026" → 2026-10-02.[^rf-farewell]
- AI-generated mass ports raise questions about code review and idiomatic quality.[^reg-bun-rust]

# Business successes
- n/a (foundation); corporate membership growth incl. AI companies (OpenAI, Perplexity).[^rf-openai][^rf-new-members]

# Business failures / risks
- n/a.

# By window
## W3
- TIOBE top 10; new Foundation members; 1.99.0; Foundation staff cuts.[^infoworld-tiobe][^rf-new-members][^rf-farewell]
## W6
- Bun moves to Rust; OpenAI joins Foundation.[^reg-bun-rust][^rf-openai]
## W9
- Ladybird Rust adoption.[^ladybird-feb26]
## W12
- Kernel "experimental" tag dropped.[^lwn-rust-exp]
## W24
- Continued tooling wave (uv, Ruff, Rolldown, Oxc, Biome).

# Lessons
- Memory safety + performance + great tooling made Rust the default for "rewrite it fast" projects — and AI makes rewrites cheaper still.

# Related
- [Rust Foundation](/organizations/rust-foundation.md)
- [Bun](/projects/devtools-languages/bun.md), [Ladybird](/projects/devtools-languages/ladybird.md), [Zig](/projects/devtools-languages/zig.md), [uv](/projects/devtools-languages/uv.md)

[^rust-gh]: Rust GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/rust-lang/rust
[^lwn-rust-exp]: LWN: The (successful) end of the kernel Rust experiment — https://lwn.net/Articles/1049831/
[^so-2025]: Stack Overflow Developer Survey 2025: Technology — https://survey.stackoverflow.co/2025/technology
[^infoworld-tiobe]: InfoWorld: Rust rises to top 10 in Tiobe index — https://www.infoworld.com/article/4193406/rust-language-rises-to-top-10-in-tiobe-popularity-index.html
[^rf-openai]: Rust Foundation: Welcomes OpenAI as Platinum Member — https://rustfoundation.org/media/rust-foundation-welcomes-openai-as-platinum-member-announces-donation-to-rust-project/
[^rf-new-members]: Rust Foundation: Welcomes new members — https://rustfoundation.org/media/rust-foundation-welcomes-new-members-codspeed-haevek-perplexity-and-software-stewardship-lab/
[^rf-farewell]: Rust Foundation: A Fond Farewell To Three Colleagues — https://rustfoundation.org/media/a-fond-farewell-to-three-rust-foundation-colleagues/
[^rf-media]: Rust Foundation media room (members, Maintainers Fund, staff changes) — https://rustfoundation.org/media/
[^reg-bun-rust]: The Register: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
[^ladybird-feb26]: This Month in Ladybird — February 2026 — https://ladybird.org/newsletter/2026-02-28/
