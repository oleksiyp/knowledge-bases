---
type: OSS Project
title: Payload
description: "MIT, TypeScript-native headless CMS/app framework that installs inside Next.js; acquired by Figma in June 2025 to power Figma Sites, stayed MIT and shipped a 4.0 beta (Apr 2026), but its managed Payload Cloud stopped taking new projects."
resource: https://github.com/payloadcms/payload
tags: [headless-cms, typescript, nextjs, mit, acquired, figma]
domain: web-platforms
license: MIT
license_history: ["MIT (2022-)"]
governance: single-vendor
steward: Figma, Inc. (acquired Payload team, June 2025)
backing_orgs: [organizations/figma]
metrics:
  github_stars: { value: 45065, as_of: 2026-10-03 }
  latest_stable: { value: "v3.90.2", as_of: 2026-09-23 }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/payloadcms/payload
    title: Payload GitHub repository
  - id: join
    resource: https://github.com/payloadcms/payload/discussions/12843
    title: "GitHub discussion: Payload is joining Figma! (2025-06-17)"
  - id: crains
    resource: https://www.crainsgrandrapids.com/news/technology/grand-rapids-tech-firm-acquired-by-san-francisco-web-designer/
    title: "Crain's Grand Rapids: Payload CMS acquired by Figma"
  - id: cmswire
    resource: https://www.cmswire.com/digital-experience/when-cms-meets-ux-design-what-figmas-payload-deal-really-means/
    title: "CMSWire: What Figma's Payload deal really means"
  - id: grand
    resource: https://grandvcp.com/from-payload-to-figma-a-journey-of-bold-vision-and-open-source-execution/
    title: "Grand Ventures: From Payload to Figma"
  - id: uithings
    resource: https://uithings.com/figma-acquires-payload
    title: "UIThings: Figma acquires Payload CMS (Payload Cloud paused new sign-ups)"
  - id: v4
    resource: https://payloadcms.com/posts/blog/payload-40-admin-ui-redesign-tanstack-mcp-and-more
    title: "Payload blog: Payload 4.0 — admin UI redesign, TanStack, MCP and more"
  - id: releases
    resource: https://github.com/payloadcms/payload/releases
    title: "Payload releases"
---
# Summary
Payload is the breakout code-first CMS of 2024–25: **Payload 3.0 (Nov 2024)** made it installable directly inside a Next.js app[^releases], and on **17 June 2025 Figma acquired the whole team** (terms undisclosed) to give Figma Sites a backend/CMS[^join][^crains][^cmswire]. The repo stays MIT and active (v3.90 in Sept 2026; 4.0.0-beta.0 on 22 Apr 2026 with an admin redesign, TanStack support and MCP)[^gh][^v4], but **Payload Cloud paused new projects** after the deal, pushing new users to self-host[^uithings]. Verdict: OSS growing; business outcome = acquisition (a positive exit for founders/investors, a strategic-dependency risk for users).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11 | Payload 3.0 stable (Next.js-native)[^releases] | OSS | + |
| W24 | 2025-06-17 | Payload team joins Figma; MIT retained[^join][^crains] | Business | + |
| W24 | 2025-06/07 | Payload Cloud stops accepting new projects[^uithings] | Business | − |
| W6 | 2026-04-22 | Payload 4.0.0-beta.0 (admin UI redesign, TanStack, MCP)[^v4] | OSS | + |
| W3 | 2026-09-23 | v3.90.2 stable; 4.0 still in beta[^gh] | OSS | + |

# OSS successes
- 45K stars; MIT; continued high release cadence after acquisition[^gh].
- Framework-agnostic move (TanStack support) in 4.0 reduces Next.js lock-in[^v4].
# OSS failures / risks
- Roadmap now set by Figma's product needs (Figma Sites CMS)[^cmswire]; community has no governance stake.
# Business successes
- Seed-stage startup exited to a design platform that IPO'd in 2025 (Grand Ventures was an investor)[^grand].
# Business failures / risks
- Managed hosting closed to new customers[^uithings]; revenue now opaque inside Figma.

# By window
## W3
- Steady 3.x releases; 4.0 beta continuing[^gh].
## W6
- 4.0 beta (Apr 2026)[^v4].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Payload 3.0 (Nov 2024); Figma acquisition (June 2025); Cloud paused[^join][^uithings].

# Lessons
- Design/hosting platforms are buying OSS CMSs to own the content layer (Figma–Payload; compare Vercel's acquisitions).
- Acquisitions keep MIT code alive but often kill the managed product that funded it.

# Related
- [Figma](/organizations/figma.md), [Figma acquires Payload event](/events/2025-06-figma-acquires-payload.md)
- [Strapi](/projects/web-platforms/strapi.md), [Directus](/projects/web-platforms/directus.md), [Next.js](/projects/devtools-languages/nextjs.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/payloadcms/payload
[^join]: https://github.com/payloadcms/payload/discussions/12843
[^crains]: https://www.crainsgrandrapids.com/news/technology/grand-rapids-tech-firm-acquired-by-san-francisco-web-designer/
[^cmswire]: https://www.cmswire.com/digital-experience/when-cms-meets-ux-design-what-figmas-payload-deal-really-means/
[^grand]: https://grandvcp.com/from-payload-to-figma-a-journey-of-bold-vision-and-open-source-execution/
[^uithings]: https://uithings.com/figma-acquires-payload
[^v4]: https://payloadcms.com/posts/blog/payload-40-admin-ui-redesign-tanstack-mcp-and-more
[^releases]: https://github.com/payloadcms/payload/releases
