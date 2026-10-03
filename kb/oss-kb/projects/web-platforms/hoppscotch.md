---
type: OSS Project
title: Hoppscotch
description: "MIT browser-first API client (80K stars, most-starred in its category), an OSS Capital portfolio company that ships calendar-versioned releases with an Enterprise Edition and AI assistant reserved for cloud/desktop."
resource: https://github.com/hoppscotch/hoppscotch
tags: [api-client, devtools, mit, open-core, oss-capital, postman-alternative]
domain: web-platforms
license: MIT (Community Edition) + commercial Enterprise Edition
license_history: ["MIT"]
governance: company-led-open-core
steward: Hoppscotch (company)
backing_orgs: []
metrics:
  github_stars: { value: 80561, as_of: 2026-10-03 }
  latest_release: { value: "2026.9.0", as_of: 2026-09-30 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/hoppscotch/hoppscotch
    title: Hoppscotch GitHub repository
  - id: ee
    resource: https://hoppscotch.com/blog/introducing-hoppscotch-enterprise-edition
    title: "Hoppscotch: Introducing Hoppscotch Enterprise Edition"
  - id: v2025-11
    resource: https://hoppscotch.com/blog/hoppscotch-v2025-11-0
    title: "Hoppscotch v2025.11.0: API documentation beta, scripting, mocking, portable desktop apps (2025-11-27)"
  - id: v2025-2
    resource: https://hoppscotch.com/blog/hoppscotch-v2025-2-0
    title: "Hoppscotch v2025.2.0: Cloud for Organizations, desktop app for self-host"
  - id: ai
    resource: https://docs.hoppscotch.io/documentation/features/ai-features
    title: "Hoppscotch docs: AI features (cloud/desktop only)"
  - id: tc-ossc
    resource: https://techcrunch.com/2024/10/20/joseph-jacks-bets-on-open-source-startups-a-paradox-of-philanthropy-and-capitalism/
    title: "TechCrunch: Joseph Jacks bets on open source startups (OSS Capital portfolio incl. Hoppscotch)"
    author: org:techcrunch
---
# Summary
Hoppscotch has more GitHub stars (80.6K) than any other OSS API client[^gh] and is an OSS Capital portfolio company[^tc-ossc]. It monetises through Hoppscotch Cloud for Organizations and a self-hosted Enterprise Edition[^ee][^v2025-2]; **v2025.11.0 (27 Nov 2025)** added API documentation (beta), scripting and mocking upgrades and an Enterprise Cloud AI assistant[^v2025-11]. AI features are cloud/desktop-only and not available in self-host[^ai]. In the 2026 "leave Postman" wave, Git-native Bruno captured more of the narrative. Verdict: OSS stable; business stable (financials unverified).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02 | v2025.2.0: Cloud for Organizations; self-host desktop app[^v2025-2] | Business | + |
| W12 | 2025-11-27 | v2025.11.0: API docs, mocking, Enterprise Cloud AI assistant[^v2025-11] | OSS | + |
| W3 | 2026-09-30 | 2026.9.0 release[^gh] | OSS | + |

# OSS successes
- Highest-starred OSS API client; monthly releases[^gh].
# OSS failures / risks
- AI and enterprise features excluded from self-host CE[^ai].
# Business successes
- Organization cloud and EE tiers[^ee].
# Business failures / risks
- Lost "default Postman alternative" mindshare to Bruno in 2025–26 (assessment).

# By window
## W3
- 2026.9.0[^gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- v2025.11.0[^v2025-11].
## W24
- Cloud for Organizations[^v2025-2].

# Lessons
- Stars are not destiny: a browser-first cloud product competed less well than a local-first, Git-native one when users fled SaaS lock-in.

# Related
- [Bruno](/projects/web-platforms/bruno.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/hoppscotch/hoppscotch
[^ee]: https://hoppscotch.com/blog/introducing-hoppscotch-enterprise-edition
[^v2025-11]: https://hoppscotch.com/blog/hoppscotch-v2025-11-0
[^v2025-2]: https://hoppscotch.com/blog/hoppscotch-v2025-2-0
[^ai]: https://docs.hoppscotch.io/documentation/features/ai-features
[^tc-ossc]: https://techcrunch.com/2024/10/20/joseph-jacks-bets-on-open-source-startups-a-paradox-of-philanthropy-and-capitalism/
