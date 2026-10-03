---
type: OSS Project
title: Strapi
description: "Most-starred open-source headless CMS (MIT core + ee/ directory); shipped Strapi 5 (Sept 2024), a free cloud tier and Strapi AI/MCP in 2025–26, but has not raised since its 2022 Series B and declared 2026 a 'quality' year rather than a growth one."
resource: https://github.com/strapi/strapi
tags: [headless-cms, nodejs, typescript, open-core, mit, vc-backed]
domain: web-platforms
license: MIT (Community Edition) + proprietary ee/
license_history: ["MIT core with proprietary Enterprise Edition directory (ee/) since at least 2023"]
governance: company-led-open-core
steward: Strapi Solutions SAS
backing_orgs: []
metrics:
  github_stars: { value: 73273, as_of: 2026-10-03 }
  latest_release: { value: "v5.56.0", as_of: 2026-09-30 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/strapi/strapi
    title: Strapi GitHub repository (license file, stars, releases)
  - id: s5
    resource: https://www.businesswire.com/news/home/20240924033608/en/Strapi-Introduces-Version-5-Improving-Both-Content-Management-and-Developer-Efficiency
    title: "BusinessWire: Strapi introduces version 5 (2024-09-24)"
  - id: conf25
    resource: https://www.businesswire.com/news/home/20250513073644/en/Strapi-Unveils-Live-Preview-Strapi-AI-Native-Integrations-and-Free-Cloud-Plan-at-StrapiConf
    title: "BusinessWire: Strapi unveils Live Preview, Strapi AI, native integrations and free Cloud plan at StrapiConf (2025-05-13)"
  - id: review25
    resource: https://strapi.io/blog/bye-2025-hello-2026-a-year-in-review
    title: "Strapi: Bye 2025, Hello 2026 — a year in review (2026-01-13)"
  - id: ai-ga
    resource: https://strapi.io/blog/strapi-ai-is-now-generally-available
    title: "Strapi: Strapi AI is now generally available"
  - id: seriesb
    resource: https://www.crunchbase.com/organization/strapi
    title: "Crunchbase: Strapi profile (Series B $31M, June 2022)"
  - id: v4eol
    resource: https://github.com/strapi/strapi/issues/24240
    title: "GitHub: NOTICE — End of Strapi 4 bug fixes"
---
# Summary
Strapi remains the reference open-source headless CMS by mindshare (~73K GitHub stars)[^gh]. It shipped **Strapi 5 on 23–24 Sept 2024**[^s5], then used 2025 to add Live Preview, a **free Strapi Cloud plan**, Shopify/BigCommerce/Cloudinary integrations and **Strapi AI** (unveiled at the first in-person StrapiConf, 13 May 2025)[^conf25], followed by MCP and an AI Content-Type Builder (GA in early 2026)[^ai-ga][^review25]. Business signals are muted: no new round has been reported since the $31M Series B of June 2022 (aggregator data)[^seriesb], and leadership said 2026 "will be dedicated to User Experience" — quality and bug-fixing rather than new surface[^review25]. Verdict: OSS stable, business stable (watch for consolidation).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-09-24 | Strapi 5 GA (Vite, TS, draft/publish, content history)[^s5] | OSS | + |
| W24 | 2025-05-13 | StrapiConf: Live Preview, Strapi AI, free Cloud plan[^conf25] | Business | + |
| W12 | 2025 (late) | End of Strapi 4 bug fixes announced[^v4eol] | OSS | ± |
| W9 | 2026-01-13 | Year review: 70K+ stars, 9.4K PRs; "2026 = UX/quality"[^review25] | OSS | ± |
| W9 | 2026-02 | AI Content-Type Builder (from prompt or Figma file) GA; Strapi MCP GA[^ai-ga] | OSS | + |
| W3 | 2026-09-30 | v5.56.0 (steady weekly cadence)[^gh] | OSS | + |

# OSS successes
- Largest community in headless CMS; weekly releases continue[^gh].
- Embraced agents early (MCP server, AI schema builder)[^ai-ga].
# OSS failures / risks
- v4→v5 migration burden; v4 fixes ended[^v4eol].
- TypeScript-native, code-first rivals ([Payload](/projects/web-platforms/payload.md)) won developer mindshare in 2024–25.
# Business successes
- Free + $15/month Essential cloud tiers broaden funnel[^review25].
# Business failures / risks
- No reported funding since 2022[^seriesb]; enterprise features gated in ee/[^gh]. No layoffs found in public sources.

# By window
## W3
- Steady releases (v5.5x); no notable business events found.
## W6
- No notable events found.
## W9
- AI Content-Type Builder & MCP GA; 2026 "quality year" plan[^ai-ga][^review25].
## W12
- Strapi 4 end of bug fixes[^v4eol].
## W24
- Strapi 5 GA; StrapiConf AI + free cloud[^s5][^conf25].

# Lessons
- Mindshare (stars) does not translate automatically into capital: Strapi's growth story stalled while code-first and AI-native competitors attracted acquirers.
- Shipping MCP/AI schema tools is now table stakes for CMSs as agents become content operators.

# Related
- [Payload](/projects/web-platforms/payload.md), [Directus](/projects/web-platforms/directus.md), [Drupal](/projects/web-platforms/drupal.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/strapi/strapi
[^s5]: https://www.businesswire.com/news/home/20240924033608/en/Strapi-Introduces-Version-5-Improving-Both-Content-Management-and-Developer-Efficiency
[^conf25]: https://www.businesswire.com/news/home/20250513073644/en/Strapi-Unveils-Live-Preview-Strapi-AI-Native-Integrations-and-Free-Cloud-Plan-at-StrapiConf
[^review25]: https://strapi.io/blog/bye-2025-hello-2026-a-year-in-review
[^ai-ga]: https://strapi.io/blog/strapi-ai-is-now-generally-available
[^seriesb]: https://www.crunchbase.com/organization/strapi
[^v4eol]: https://github.com/strapi/strapi/issues/24240
