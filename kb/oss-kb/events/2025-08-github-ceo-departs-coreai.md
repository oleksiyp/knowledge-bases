---
type: Event
title: GitHub CEO Thomas Dohmke departs; GitHub folded into Microsoft CoreAI
description: "On 2025-08-11 GitHub CEO Thomas Dohmke announced he would leave by end-2025 and Microsoft said GitHub would not get a new CEO but report into its CoreAI division under Jay Parikh, ending ~7 years of semi-independent operation."
event_kind: governance
date: 2025-08-11
window: W24
impact: negative
projects: [projects/devtools-languages/github]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-dohmke
    resource: https://techcrunch.com/2025/08/11/github-ceo-to-step-down/
    title: "TechCrunch: GitHub CEO to step down (2025-08-11)"
    author: org:techcrunch
  - id: geekwire-coreai
    resource: https://www.geekwire.com/2025/github-will-join-microsofts-coreai-group-with-departure-of-ceo-thomas-dohmke/
    title: "GeekWire: GitHub will join Microsoft's CoreAI group with departure of CEO Thomas Dohmke"
    author: org:geekwire
  - id: reg-outages
    resource: https://www.theregister.com/software/2026/06/12/github-outages-persist-as-ai-coding-drives-traffic-surge/5255125
    title: "The Register: GitHub outages persist as AI coding drives traffic surge (2026-06-12)"
    author: org:the-register
  - id: zig-codeberg
    resource: https://ziglang.org/news/migrating-from-github-to-codeberg/
    title: "ziglang.org: Migrating from GitHub to Codeberg (2025-11-26)"
    author: org:zig-software-foundation
---

# What happened
Thomas Dohmke announced on 2025-08-11 that he would step down to found a startup, staying through end-2025; Microsoft did not name a successor CEO, instead moving GitHub's leadership under the CoreAI division led by Jay Parikh[^tc-dohmke][^geekwire-coreai].

# Why it matters
GitHub hosts most of the world's open source. Ending its operational independence signalled that its roadmap would be driven by Microsoft's AI strategy (Copilot, agents) rather than by the needs of the OSS community.

# Outcome so far
Subsequent months brought an accelerated Azure migration and an AI-traffic reliability crisis (multiple outages per month into mid-2026)[^reg-outages], and high-profile projects such as Zig left for Codeberg citing GitHub's decline and Copilot pushes[^zig-codeberg].

# Related
- [GitHub](/projects/devtools-languages/github.md)
- [Forgejo and Codeberg](/projects/devtools-languages/forgejo.md)

[^tc-dohmke]: TechCrunch, 2025-08-11.
[^geekwire-coreai]: GeekWire, Aug 2025.
[^reg-outages]: The Register, 2026-06-12.
[^zig-codeberg]: ziglang.org, 2025-11-26.
