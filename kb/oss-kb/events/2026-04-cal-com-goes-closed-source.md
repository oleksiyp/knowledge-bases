---
type: Event
title: Cal.com goes closed source, citing AI-driven vulnerability discovery
description: "On 2026-04-14 Cal.com closed its production codebase, arguing AI makes open code a security liability; the public AGPL repo was turned into an MIT, non-production 'Cal.diy' community edition."
event_kind: license-change
date: 2026-04-14
window: W6
impact: negative
projects: [projects/end-user-apps/cal-com]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: blog
    resource: https://cal.com/blog/cal-com-goes-closed-source-why
    title: "Cal.com: Cal.com is going closed source — why"
  - id: tech
    resource: https://cal.com/blog/cal-diy-open-source-to-closed-source
    title: "Cal.com: Moving to closed source — the technical changes"
  - id: diy
    resource: https://github.com/calcom/cal.diy
    title: "Cal.diy repository"
  - id: hn
    resource: https://news.ycombinator.com/item?id=47780456
    title: "Hacker News discussion: Cal.com is going closed source"
---
# What happened
On 14 April 2026 Cal.com announced it would stop publishing its production source. Co-founder Bailey Pumfleet wrote that AI can now systematically scan open codebases for vulnerabilities, so "being open source is increasingly like giving attackers the blueprints to the vault"[^blog]. On 15 April the calcom/cal.com repository — previously AGPL-3.0 with commercially licensed ee/ directories — was refactored into calcom/cal.diy under MIT, labeled for personal, non-production use and expected to diverge from production[^diy][^tech].

# Why it matters
It is the first prominent OSS SaaS company to justify going closed on AI-security grounds, a new rationale distinct from the cloud-competition arguments behind earlier license changes (BSL/SSPL). It landed the same month as Anthropic's Project Glasswing AI vulnerability-discovery push and shortly before NHS England restricted public repos over similar fears.

# Outcome so far
Strong community pushback (391 points on HN; "security through obscurity" critiques)[^hn]; Cal.com continues shipping its closed product. No other major end-user OSS app had followed explicitly as of Oct 2026 (unverified).

# Related
- [Cal.com](/projects/end-user-apps/cal-com.md)
- [Project Glasswing](/events/2026-04-project-glasswing-ai-vuln-discovery.md), [NHS England closes repos](/events/2026-05-nhs-england-closes-repos-ai-fears.md)

[^blog]: https://cal.com/blog/cal-com-goes-closed-source-why
[^tech]: https://cal.com/blog/cal-diy-open-source-to-closed-source
[^diy]: https://github.com/calcom/cal.diy
[^hn]: https://news.ycombinator.com/item?id=47780456
