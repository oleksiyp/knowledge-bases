---
type: OSS Project
title: Onyx (formerly Danswer)
description: "MIT-core, open-core enterprise AI search/chat platform (~32k stars; 'open-source Glean') whose permission-aware features sit in a commercial 'ee' directory; raised a $10M seed (Khosla, First Round) in March 2025 — growing."
resource: https://github.com/onyx-dot-app/onyx
tags: [ai-apps, enterprise-search, rag, open-core, mit, yc]
domain: ai-apps
license: "MIT (core) + Onyx Enterprise License (ee/ directories)"
license_history: ["MIT + EE directories (2023-)", "Renamed Danswer → Onyx (2024-12)"]
governance: company-led-open-core
steward: Onyx (DanswerAI, Inc.)
backing_orgs: [organizations/onyx]
metrics:
  github_stars: { value: 32316, as_of: 2026-10-03 }
  github_forks: { value: 4519, as_of: 2026-10-03 }
  latest_release: { value: "v4.8.4 (2026-10-02)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: onyx-gh
    resource: https://github.com/onyx-dot-app/onyx
    title: Onyx GitHub repository and LICENSE (GitHub API, 2026-10-03)
  - id: onyx-seed
    resource: https://chinstrap.community/coss-enterprise-search-provider-onyx-raises-10-million-seed-round/
    title: "Chinstrap: COSS enterprise search provider Onyx raises $10M seed (2025-03-18)"
  - id: onyx-tfn
    resource: https://techfundingnews.com/onyx-lands-10m-to-build-ai-powered-24-7-coworker-that-instantly-finds-what-you-need/
    title: "Tech Funding News: Onyx lands $10M"
  - id: onyx-review
    resource: https://www.teamazing.com/blog/onyx-ai-enterprise-review-2026/
    title: "Onyx AI review 2026 (licensing of permission layer, pricing)"
---

# Summary
Onyx (renamed from Danswer in Dec 2024) connects LLMs to company knowledge through dozens of connectors, with chat, search and agents; ~32k stars and near-daily releases (v4.8.4, 2026-10-02)[^onyx-gh]. The core is MIT, but everything under `ee/` — including the permission-sync layer enterprises need — is under the Onyx Enterprise License[^onyx-gh][^onyx-review]. Founders Chris Weaver and Yuhong Sun (YC) raised a $10M seed co-led by Khosla Ventures and First Round on 2025-03-18, citing customers like Netflix, Ramp and Thales[^onyx-seed][^onyx-tfn]. No later round verified. Verdict: growing on both axes; classic open-core.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-18 | $10M seed (Khosla, First Round, YC)[^onyx-seed] | Business | + |
| W9 | 2026-02-14 | LICENSE touch-up, no terms change[^onyx-gh] | OSS | ± |
| W3 | 2026-10-02 | v4.8.4; Helm chart 0.9.3[^onyx-gh] | OSS | + |

# OSS successes
- Steady growth and very high release cadence[^onyx-gh].
# OSS failures / risks
- Key enterprise feature (permission-aware retrieval) is not open source[^onyx-review].
# Business successes
- Bottom-up open-source adoption into Fortune-scale customers[^onyx-seed].
# Business failures / risks
- Competes with Glean (well-funded) and with Microsoft/Google native assistants.

# By window
## W3
- v4.8.x releases[^onyx-gh].
## W6
- Continued releases; no discrete events found.
## W9
- Licence touch-up[^onyx-gh].
## W12
- No notable events found.
## W24
- $10M seed[^onyx-seed].

# Lessons
- Putting the "enterprise must-have" (permissions) in the paid tier is the cleanest open-core line for internal-search products.

# Related
- [Onyx (company)](/organizations/onyx.md), [Open WebUI](/projects/ai-apps/open-webui.md), [RAGFlow](/projects/ai-apps/ragflow.md), [Khoj](/projects/ai-apps/khoj.md)

[^onyx-gh]: GitHub API and LICENSE, onyx-dot-app/onyx — https://github.com/onyx-dot-app/onyx
[^onyx-seed]: Chinstrap, 2025-03-18 — https://chinstrap.community/coss-enterprise-search-provider-onyx-raises-10-million-seed-round/
[^onyx-tfn]: Tech Funding News — https://techfundingnews.com/onyx-lands-10m-to-build-ai-powered-24-7-coworker-that-instantly-finds-what-you-need/
[^onyx-review]: Teamazing review — https://www.teamazing.com/blog/onyx-ai-enterprise-review-2026/
