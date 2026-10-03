---
type: Event
title: "NHS England closes public GitHub repos over AI vulnerability-discovery fears"
description: "NHS England restricted hundreds of public repositories citing AI-accelerated vulnerability discovery; UK GDS/DSIT issued rebuttal guidance reaffirming 'open by default'."
event_kind: governance
date: 2026-05-14
window: W6
impact: negative
projects: [projects/security-sustainability/openssf]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: openssf-nhs
    resource: https://openssf.org/blog/2026/09/10/open-by-default-after-ai-the-gds-guidance-and-the-enforcement-question/
    title: "OpenSSF: Open by default after AI"
---
# What happened
In May 2026 NHS England restricted public access to roughly 200–850 repositories, citing vulnerabilities found through Glasswing/Mythos. On 2026-05-14 GDS and DSIT issued guidance that risk comes from architecture, configuration and dependency hygiene, not from the code being visible, and kept "open by default".[^openssf-nhs]

# Why it matters
The first major public body to retreat from open source because of AI security fears, a possible precedent.

# Outcome so far
UK government guidance rejected security through obscurity. Enforcement is still unclear.[^openssf-nhs]

# Related
- [Glasswing](/events/2026-04-project-glasswing-ai-vuln-discovery.md)

[^openssf-nhs]: OpenSSF: Open by default after AI
