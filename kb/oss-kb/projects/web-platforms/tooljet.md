---
type: OSS Project
title: ToolJet
description: "AGPL low-code internal-tools builder that declared 'low-code had its moment' and rebuilt itself as ToolJet AI, an AI-native enterprise app and agent generator (Feb–Sept 2025), monetised through builder seats and AI credits."
resource: https://github.com/ToolJet/ToolJet
tags: [low-code, internal-tools, agpl-3.0, ai-app-builder, open-core]
domain: web-platforms
license: AGPL-3.0 (Community Edition); MCP server MIT
license_history: ["AGPL-3.0"]
governance: company-led-open-core
steward: ToolJet, Inc.
backing_orgs: []
metrics:
  github_stars: { value: 41027, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/tooljet/tooljet
    title: ToolJet GitHub repository
  - id: moment
    resource: https://blog.tooljet.com/low-code-had-its-moment-announcing-future-of-tooljet/
    title: "ToolJet blog: Low-code had its moment. We're moving on."
  - id: start2026
    resource: https://blog.tooljet.com/tooljet-at-the-start-of-2026-from-low-code-to-an-ai-native-enterprise-platform/
    title: "ToolJet blog: ToolJet at the start of 2026 — from low-code to an AI-native enterprise platform"
  - id: pr
    resource: https://www.cbs17.com/business/press-releases/ein-presswire/858012723/tooljet-repositions-as-ai-first-platform-to-replace-legacy-low-code-solutions/
    title: "EIN Presswire: ToolJet repositions as AI-first platform to replace legacy low-code"
  - id: pricing
    resource: https://dev.to/beton/tooljet-pricing-teardown-2026-2l40
    title: "DEV: ToolJet pricing teardown 2026 (AI credits)"
---
# Summary
ToolJet (~41K stars, AGPL-3.0) is the internal-tools vendor that most explicitly abandoned "low-code": it introduced AI app generation in **Feb 2025** and in **Sept 2025** repositioned as an AI-first platform to "replace legacy low-code", with apps buildable from prompts or from Claude Code/Codex/Cursor over MCP[^moment][^pr][^gh]. Pricing moved to builder seats plus **AI credits** as the upsell[^pricing]. Last disclosed funding remains a 2023 seed (aggregators). Verdict: OSS stable; business stable but unproven in the AI era.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02 | ToolJet AI app generation introduced[^moment] | Business | + |
| W24 | 2025-09 | Repositioning as AI-native enterprise app platform[^pr] | Business | ± |
| W9 | 2026-01 | "From low-code to AI-native" strategy update[^start2026] | Business | + |
| W6 | 2026-05 | v3.20 LTS line; AI-credit pricing tiers[^pricing] | OSS | ± |

# OSS successes
- Large community; AGPL protects against SaaS free-riding[^gh].
# OSS failures / risks
- AI features and credits live in the paid cloud; the OSS edition risks becoming a "foundation" only[^gh][^pricing].
# Business successes
- Early mover in AI internal-app generation[^moment].
# Business failures / risks
- Competes with general AI app builders (Lovable, Retool AppGen) with far more capital.

# By window
## W3
- No notable events found.
## W6
- v3.20 LTS; AI-credit pricing[^pricing].
## W9
- 2026 strategy update[^start2026].
## W12
- No notable events found.
## W24
- ToolJet AI launch and repositioning[^moment][^pr].

# Lessons
- Internal-tools COSS companies are converting from seat-based low-code to usage-based AI credits — the OSS core becomes a runtime, not the product.

# Related
- [Appsmith](/projects/web-platforms/appsmith.md), [Budibase](/projects/web-platforms/budibase.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/tooljet/tooljet
[^moment]: https://blog.tooljet.com/low-code-had-its-moment-announcing-future-of-tooljet/
[^start2026]: https://blog.tooljet.com/tooljet-at-the-start-of-2026-from-low-code-to-an-ai-native-enterprise-platform/
[^pr]: https://www.cbs17.com/business/press-releases/ein-presswire/858012723/tooljet-repositions-as-ai-first-platform-to-replace-legacy-low-code-solutions/
[^pricing]: https://dev.to/beton/tooljet-pricing-teardown-2026-2l40
