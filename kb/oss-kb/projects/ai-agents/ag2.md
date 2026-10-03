---
type: OSS Project
title: AG2 (formerly AutoGen community fork)
description: Community fork of AutoGen v0.2 launched Nov 2024 by original AutoGen creators; survived and shipped 1.0 in July 2026, but remains small (~5k stars on the new repo) next to the 61k-star original.
resource: https://github.com/ag2ai/ag2
tags: [ai-agents, agent-framework, apache-2.0, fork, community]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2024-11-)"]
governance: community
steward: AG2AI (community / company)
backing_orgs: []
metrics:
  github_stars: { value: 4973, as_of: 2026-10-03 }
  github_forks: { value: 732, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ag2-gh
    resource: https://github.com/ag2ai/ag2
    title: AG2 GitHub repository (created 2024-11-11; v1.0.0 2026-07-27; v1.1.1 2026-09-29)
  - id: autogen-gh
    resource: https://github.com/microsoft/autogen
    title: AutoGen GitHub repository
---

# Summary
AG2 ("The Open-Source AgentOS", formerly AutoGen) was created on 2024-11-11 by AutoGen's original contributors to continue the v0.2 API outside Microsoft[^ag2-gh]. It kept shipping, releasing v1.0.0 on 2026-07-27 and v1.1.1 on 2026-09-29[^ag2-gh]. However, the fork never captured the original's star/brand gravity (~5k stars vs AutoGen's 61k)[^ag2-gh][^autogen-gh]. Verdict: OSS **stable** — alive and independent, but niche; business n/a (no verified funding).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-11 | Fork created | OSS | + [^ag2-gh] |
| W6 | 2026-04 | Upstream AutoGen enters maintenance mode — AG2 becomes the only actively developed v0.2-lineage | OSS | + [^autogen-gh] |
| W3 | 2026-07-27 | AG2 v1.0.0 | OSS | + [^ag2-gh] |

# OSS successes
- Outlasted the parent as an actively developed project[^ag2-gh][^autogen-gh].
# OSS failures / risks
- Small community; package/brand confusion with Microsoft's AutoGen.
# Business successes
- None verified.
# Business failures / risks
- No verified funding or revenue.

# By window
## W3
- v1.0 (2026-07-27) and v1.1 (Sep 2026)[^ag2-gh].
## W6
- Parent goes to maintenance mode[^autogen-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Fork (Nov 2024)[^ag2-gh].

# Lessons
- Forks keep code alive but rarely inherit the brand-driven adoption of a big-tech original.

# Related
- [/events/2024-11-ag2-forks-autogen.md](/events/2024-11-ag2-forks-autogen.md), [/projects/ai-agents/autogen.md](/projects/ai-agents/autogen.md)

[^ag2-gh]: https://github.com/ag2ai/ag2
[^autogen-gh]: https://github.com/microsoft/autogen
