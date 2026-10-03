---
type: Event
title: Posit launches Positron as a stable data-science IDE
description: Posit formally launched Positron (2025.08.0, 2025-08-14), its Code-OSS-based Python+R IDE, as generally available after 2+ years of development and a July 2025 exit from beta — source-available under Elastic License 2.0, with RStudio kept alive.
event_kind: release
date: 2025-08-14
window: W24
impact: mixed
projects: [projects/scientific-computing/positron]
organizations: [organizations/posit]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: positron-ga
    resource: https://posit.co/blog/positron-product-announcement-aug-2025
    title: "Posit: Announcing Positron, a new Data Science IDE (2025-08)"
  - id: positron-2025-07
    resource: https://positron.posit.co/release-notes/release-2025-07.html
    title: "Positron 2025.07.0 release notes"
  - id: positron-license
    resource: https://github.com/posit-dev/positron/blob/main/LICENSE.txt
    title: Positron LICENSE (Elastic License 2.0 + Education rider)
  - id: posit-ai
    resource: https://posit.co/blog/posit-ai-now-available-all
    title: "Posit: Posit AI is now available to all (2026-05-05)"
---

# What happened
After first stable builds in July 2025[^positron-2025-07], Posit announced Positron 2025.08.0 on 2025-08-14 as a free desktop IDE and a supported IDE type in Posit Workbench. Positron is built on Code OSS with Open VSX extensions and treats Python and R as equals. Posit said "RStudio is not going away"[^positron-ga].

# Why it matters
It is the R ecosystem's generational IDE transition and Posit's entry into the VS Code-fork race. Unlike AGPL RStudio, Positron is licensed under the Elastic License 2.0 with an education rider — source-available, not OSI open source[^positron-license].

# Outcome so far
Positron moved to monthly releases and became the vehicle for Posit's paid AI (Posit Assistant, Posit AI subscription, May 2026)[^posit-ai].

# Related
- [/projects/scientific-computing/positron.md](/projects/scientific-computing/positron.md), [/organizations/posit.md](/organizations/posit.md)

[^positron-ga]: https://posit.co/blog/positron-product-announcement-aug-2025
[^positron-2025-07]: https://positron.posit.co/release-notes/release-2025-07.html
[^positron-license]: https://github.com/posit-dev/positron/blob/main/LICENSE.txt
[^posit-ai]: https://posit.co/blog/posit-ai-now-available-all
