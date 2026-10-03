---
type: OSS Project
title: Browser Use (and Stagehand)
description: MIT library that lets LLM agents drive a web browser; grew from a weekend HN launch to ~117k stars and a $17M seed (Mar 2025). Peer Stagehand (Browserbase, MIT, ~25.5k stars) underpins Browserbase's $40M Series B (Jun 2025).
resource: https://github.com/browser-use/browser-use
tags: [ai-agents, browser-automation, mit, company-led-open-core]
domain: ai-agents
license: MIT
license_history: ["MIT (2024-)"]
governance: company-led-open-core
steward: Browser Use Inc
backing_orgs: [organizations/browser-use]
metrics:
  github_stars: { value: 117019, as_of: 2026-10-03 }
  github_forks: { value: 12911, as_of: 2026-10-03 }
  stagehand_github_stars: { value: 25521, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bu-gh
    resource: https://github.com/browser-use/browser-use
    title: Browser Use GitHub repository (0.13.10 2026-09-04; API stats 2026-10-03)
  - id: bu-seed
    resource: https://browser-use.com/posts/seed-round
    title: "Browser Use: $17M seed round"
    author: org:browser-use
  - id: sh-gh
    resource: https://github.com/browserbase/stagehand
    title: Stagehand GitHub repository (API stats 2026-10-03)
  - id: bb-seriesb
    resource: https://www.browserbase.com/blog/series-b-and-beyond
    title: "Browserbase: Series B and beyond ($40M)"
    author: org:browserbase
---

# Summary
Browser Use converts web pages into structured text so LLM agents can act on them; it raised a $17M seed led by Felicis on 2025-03-22 when it had ~50k stars[^bu-seed], and has since more than doubled to ~117k stars (Oct 2026)[^bu-gh]. Stagehand, Browserbase's MIT browser-automation SDK (~25.5k stars)[^sh-gh], gained a Python port alongside Browserbase's $40M Series B led by Notable Capital on 2025-06-18[^bb-seriesb]. Verdict: OSS **thriving**; business **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-22 | Browser Use $17M seed (Felicis; YC) | Business | + [^bu-seed] |
| W24 | 2025-06-18 | Browserbase $40M Series B; Stagehand for Python | Business | + [^bb-seriesb] |
| W3 | 2026-09-04 | Browser Use 0.13.10; ~117k stars | OSS | + [^bu-gh] |

# OSS successes
- One of the fastest-growing AI repos of 2025–26 (50k → 117k stars)[^bu-seed][^bu-gh].
# OSS failures / risks
- Still pre-1.0 (0.13.x) with API churn[^bu-gh]; labs' own computer-use agents compete.
# Business successes
- Seed + cloud product; Browserbase infra demand[^bb-seriesb].
# Business failures / risks
- Later rounds/revenue not verified.

# By window
## W3
- Continued releases[^bu-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Seed and Series B rounds[^bu-seed][^bb-seriesb].

# Lessons
- A narrowly-scoped "agent capability" library (browser control) can out-grow general frameworks.

# Related
- [/organizations/browser-use.md](/organizations/browser-use.md), [/projects/ai-agents/openmanus.md](/projects/ai-agents/openmanus.md)

[^bu-gh]: https://github.com/browser-use/browser-use
[^bu-seed]: https://browser-use.com/posts/seed-round
[^sh-gh]: https://github.com/browserbase/stagehand
[^bb-seriesb]: https://www.browserbase.com/blog/series-b-and-beyond
