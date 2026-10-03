---
type: OSS Project
title: Cal.com (Cal.diy)
description: "Formerly the flagship open-source scheduling platform; on 14 April 2026 Cal.com took its production codebase closed, citing AI-accelerated vulnerability discovery, leaving an MIT community edition 'Cal.diy' for non-production self-hosting."
resource: https://github.com/calcom/cal.diy
tags: [scheduling, saas-alternative, mit, closed-source-transition, ai-security, vc-backed]
domain: end-user-apps
license: MIT (Cal.diy); proprietary (Cal.com production)
license_history: ["AGPL-3.0 core + commercial ee/ directories (2021–2026-04)", "2026-04-15: production Cal.com closed-source; public repo renamed Cal.diy and relicensed MIT"]
governance: single-vendor
steward: Cal.com Inc.
backing_orgs: []
metrics:
  github_stars: { value: 48831, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: stable
momentum_by_window: { W3: flat, W6: down, W9: flat, W12: flat, W24: flat }
status: community-edition
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: closed
    resource: https://cal.com/blog/cal-com-goes-closed-source-why
    title: "Cal.com: Cal.com is going closed source — why"
  - id: tech
    resource: https://cal.com/blog/cal-diy-open-source-to-closed-source
    title: "Cal.com: Moving to closed source — the technical changes"
  - id: diy
    resource: https://github.com/calcom/cal.diy
    title: Cal.diy repository (formerly calcom/cal.com)
  - id: pumfleet
    resource: https://twitter.com/pumfleet/status/2044406553508274554
    title: "Bailey Pumfleet: Cal.com is closing its core codebase, citing AI security risks"
  - id: coss
    resource: https://coss.com/
    title: "Coss (Cal.com UI framework and holdco)"
---
# Summary
Cal.com was one of the poster children of "open-source SaaS alternatives". On 14 April 2026 it announced it was going closed source, with co-founder Bailey Pumfleet arguing that AI now lets attackers systematically scan open codebases: "Being open source is increasingly like giving attackers the blueprints to the vault."[^closed][^pumfleet] The GitHub repo — previously AGPL-3.0 with commercially licensed `ee/` directories — was refactored into "Cal.diy" and relicensed MIT on 15 April — an MIT community edition explicitly "recommended for personal, non-production use", diverging from production Cal.com[^diy][^tech]. The repo still carries ~48.8k stars (now on Cal.diy)[^diy]. Earlier, in Oct 2025, the founders launched Coss, a UI framework and holding company[^coss]. Verdict: OSS declining (de facto exit from open source); business stable (no public financials verified).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-15 | Coss (UI framework/holdco) launched[^coss] | Business | + |
| W6 | 2026-04-14 | Cal.com goes closed source citing AI-driven vulnerability discovery[^closed] | OSS | − |
| W6 | 2026-04-15 | Repo becomes Cal.diy (MIT, non-production community edition)[^diy][^tech] | OSS | − |
| W3 | 2026-09-15 | Cal.com v6.9 changelog (closed product continues)[^closed] | Business | + |

# OSS successes
- Community edition remains MIT and self-hostable[^diy].
# OSS failures / risks
- Divergence means Cal.diy will lag production and lack enterprise features; trust signal for other "open SaaS" startups[^tech].
# Business successes
- Continued product velocity on the closed product.
# Business failures / risks
- Loss of OSS-driven distribution and contributor goodwill; the "security through obscurity" rationale was widely disputed on HN (391 points)[^closed].

# By window
## W3
- Closed product releases continue.
## W6
- Closed-source switch and Cal.diy[^closed][^diy].
## W9
- No notable events found.
## W12
- Coss launch[^coss].
## W24
- No notable events found.

# Lessons
- "AI makes open code dangerous" is a new rationale for closing source — expect copycats and pushback.
- Community editions explicitly labeled "non-production" signal a project has left OSS in all but name.

# Related
- [Cal.com goes closed source event](/events/2026-04-cal-com-goes-closed-source.md), [Mattermost](/projects/end-user-apps/mattermost.md), [PostHog](/projects/end-user-apps/posthog.md)

[^closed]: https://cal.com/blog/cal-com-goes-closed-source-why
[^tech]: https://cal.com/blog/cal-diy-open-source-to-closed-source
[^diy]: https://github.com/calcom/cal.diy
[^pumfleet]: https://twitter.com/pumfleet/status/2044406553508274554
[^coss]: https://coss.com/
