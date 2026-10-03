---
type: OSS Project
title: Budibase
description: "GPLv3 low-code platform (with BSL-licensed pro package) that rebranded as an 'AI Workflow Toolkit' for privacy-first organisations (Dec 2025), shipping agents and chat in 2026 while removing its free cloud tier."
resource: https://github.com/Budibase/budibase
tags: [low-code, internal-tools, gpl-3.0, bsl, ai-agents, self-hosting]
domain: web-platforms
license: GPL-3.0 (core) + BSL-1.1 (pro package, converts to GPLv3 after 4 years)
license_history: ["GPL-3.0 core; pro features under BSL with GPLv3 change license"]
governance: company-led-open-core
steward: Budibase Ltd
backing_orgs: []
metrics:
  github_stars: { value: 28331, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/Budibase/budibase
    title: Budibase GitHub repository
  - id: pro-license
    resource: https://github.com/Budibase/budibase/blob/master/packages/pro/license.md
    title: "Budibase pro package license (BSL)"
  - id: future
    resource: https://budibase.com/blog/updates/future-of-budibase-2026/
    title: "Budibase: Budibase 2026 (AI Workflow Toolkit roadmap, 2025-12-08)"
  - id: reviews
    resource: https://www.zite.com/blog/budibase-reviews
    title: "Zite: Budibase reviews 2026 (cloud free tier removed)"
---
# Summary
Budibase (~28K stars) keeps a GPLv3 core with its paid "pro" package under a BSL that converts to GPLv3 after four years[^gh][^pro-license]. On **8 Dec 2025** it announced a 2026 pivot to an **"AI Workflow Toolkit"** aimed at privacy-first organisations, with Agents alpha (Dec 2025), Agents/Chat betas (Feb–Mar 2026) and human-in-the-loop automations planned for Q2 2026[^future]. Budibase Cloud dropped its permanent free tier (14-day trial), leaving self-hosting as the only free option (secondary source)[^reviews]. Verdict: OSS stable; business stable (no public funding news in window).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-08 | "Budibase 2026" AI Workflow Toolkit roadmap; Agents alpha[^future] | Business | + |
| W9 | 2026-02/03 | Agents beta, Chat alpha/beta (planned)[^future] | OSS | + |
| W6 | 2026-Q2 | Agent testing / HITL automations (planned)[^future] | OSS | ± |

# OSS successes
- Self-hosting focus fits the sovereignty/privacy demand[^future].
# OSS failures / risks
- Dual GPL/BSL licensing confuses contributors[^pro-license].
# Business successes
- Clear niche (regulated, self-hosted AI workflows)[^future].
# Business failures / risks
- Removal of free cloud tier[^reviews]; same AI-builder pressure as Appsmith/ToolJet.

# By window
## W3
- No notable events found.
## W6
- Planned agent tooling releases[^future].
## W9
- Agents/Chat betas[^future].
## W12
- AI Workflow Toolkit pivot[^future].
## W24
- No notable events found.

# Lessons
- Self-hostability is being re-sold as "private AI" — the OSS angle shifts from cost to data control.

# Related
- [Appsmith](/projects/web-platforms/appsmith.md), [ToolJet](/projects/web-platforms/tooljet.md), [n8n](/projects/ai-agents/n8n.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/Budibase/budibase
[^pro-license]: https://github.com/Budibase/budibase/blob/master/packages/pro/license.md
[^future]: https://budibase.com/blog/updates/future-of-budibase-2026/
[^reviews]: https://www.zite.com/blog/budibase-reviews
