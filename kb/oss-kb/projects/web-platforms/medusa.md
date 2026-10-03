---
type: OSS Project
title: Medusa
description: "MIT TypeScript commerce framework (the most-starred OSS commerce project) that shipped a ground-up v2 (Oct 2024), opened self-serve Medusa Cloud (Oct 2025) and in Aug 2026 added a proprietary Enterprise Edition (RBAC/SSO) to the repo — still running on a 2022 seed."
resource: https://github.com/medusajs/medusa
tags: [e-commerce, headless-commerce, typescript, mit, open-core, agentic-commerce]
domain: web-platforms
license: MIT + proprietary Enterprise Edition materials (since 2026-08)
license_history: ["MIT (2020-2026-08)", "MIT + proprietary ENTERPRISE-LICENSE.md materials (2026-08-11-)"]
governance: company-led-open-core
steward: MedusaJS, Inc.
backing_orgs: [organizations/medusa]
metrics:
  github_stars: { value: 36562, as_of: 2026-10-03 }
  latest_release: { value: "v2.21.2", as_of: 2026-09-28 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/medusajs/medusa
    title: Medusa GitHub repository
  - id: v2
    resource: https://medusajs.com/blog/v2-release
    title: "Medusa: v2.0 release (2024-10-23)"
  - id: cloud
    resource: https://medusajs.com/blog/announcing-cloud-self-serve
    title: "Medusa: Announcing Medusa Cloud self-serve (2025-10-02)"
  - id: ee
    resource: https://github.com/medusajs/medusa/blob/develop/ENTERPRISE-LICENSE.md
    title: "Medusa: ENTERPRISE-LICENSE.md (added 2026-08-11, commit 'chore: update license (#16110)')"
  - id: seed
    resource: https://medusajs.com/blog/announcement-8m-usd-seed-round-to-build-the-leading-ecom-platform-for-devs
    title: "Medusa: $8M seed round announcement (2022)"
  - id: agents
    resource: https://medusajs.com/blog/building-and-operating-your-store-with-agents
    title: "Medusa: Building and operating your store with agents"
  - id: ai-assistant
    resource: https://medusajs.com/blog/announcing-ai-assistant-for-medusa-cloud
    title: "Medusa: AI assistant for Medusa Cloud"
---
# Summary
Medusa rebuilt itself as a modular commerce framework: **Medusa 2.0 shipped 23 Oct 2024** after 16 months and 3,500+ PRs[^v2]. It then monetised through **Medusa Cloud**, opened to self-serve on **2 Oct 2025** at $29/$299 per month[^cloud], and repositioned for "agents and developers" (AI assistant, cloud CLI, skills/MCP)[^agents][^ai-assistant]. On **11 Aug 2026** it added a proprietary **Enterprise Edition** (RBAC, SSO) inside the otherwise-MIT repo[^ee][^gh]. Funding is thin by peer standards — the last public round is an $8M seed (2022)[^seed]. Verdict: OSS growing; business growing but capital-light and moving to open core.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-23 | Medusa 2.0 GA (modular architecture, workflows SDK)[^v2] | OSS | + |
| W24 | 2025-10-02 | Medusa Cloud self-serve ($29 Hobby / $299 Pro)[^cloud] | Business | + |
| W9–W6 | 2026 | AI assistant in Cloud; agent skills & MCP for store ops[^ai-assistant][^agents] | Business | + |
| W3 | 2026-08-11 | Proprietary Enterprise Edition materials added to repo (RBAC/SSO)[^ee] | OSS | − |
| W3 | 2026-09-28 | v2.21.2[^gh] | OSS | + |

# OSS successes
- Largest OSS commerce repo on GitHub by stars (36.6K)[^gh]; frequent v2.x releases.
# OSS failures / risks
- Open-core shift: RBAC/SSO now proprietary in-repo[^ee]; v1→v2 was a breaking rewrite[^v2].
# Business successes
- Self-serve cloud funnel and enterprise references (Heineken, Eight Sleep per Medusa)[^cloud].
# Business failures / risks
- No public raise since 2022 seed[^seed]; competes with Shopify's free headless stack (Hydrogen/Oxygen) and Saleor/Vendure.

# By window
## W3
- Enterprise Edition license added[^ee].
## W6
- Cloud agent tooling (dates approximate)[^agents].
## W9
- AI assistant for Medusa Cloud[^ai-assistant].
## W12
- No notable events found.
## W24
- v2.0 (Oct 2024); Cloud self-serve (Oct 2025)[^v2][^cloud].

# Lessons
- Commerce OSS monetises via managed cloud first, then gates enterprise identity features — the same RBAC/SSO "SSO tax" pattern seen across COSS.

# Related
- [Medusa (org)](/organizations/medusa.md)
- [Saleor](/projects/web-platforms/saleor.md), [Mage-OS / Magento](/projects/web-platforms/mage-os.md), [WooCommerce](/projects/web-platforms/woocommerce.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/medusajs/medusa
[^v2]: https://medusajs.com/blog/v2-release
[^cloud]: https://medusajs.com/blog/announcing-cloud-self-serve
[^ee]: https://github.com/medusajs/medusa/blob/develop/ENTERPRISE-LICENSE.md
[^seed]: https://medusajs.com/blog/announcement-8m-usd-seed-round-to-build-the-leading-ecom-platform-for-devs
[^agents]: https://medusajs.com/blog/building-and-operating-your-store-with-agents
[^ai-assistant]: https://medusajs.com/blog/announcing-ai-assistant-for-medusa-cloud
