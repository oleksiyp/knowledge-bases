---
type: OSS Project
title: WooCommerce
description: "GPL WordPress commerce plugin owned by Automattic; kept a monthly release train (10.x → 11.x in Aug 2026), moved paid features into core and made stores addressable over MCP, but its fate is tied to Automattic's WP Engine war, 2025 layoffs and September 2026 governance turmoil."
resource: https://github.com/woocommerce/woocommerce
tags: [e-commerce, wordpress, php, gpl, automattic, mcp]
domain: web-platforms
license: GPL-3.0-or-later
license_history: ["GPL-3.0-or-later"]
governance: single-vendor
steward: Automattic
backing_orgs: [organizations/automattic]
metrics:
  github_stars: { value: 10536, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/woocommerce/woocommerce
    title: WooCommerce GitHub repository
  - id: wc11
    resource: https://developer.woocommerce.com/2026/08/04/woocommerce-11-0/
    title: "WooCommerce 11.0 release notes (2026-08-04)"
  - id: wc111
    resource: https://developer.woocommerce.com/2026/09/03/wc-11-1-release-notes/
    title: "WooCommerce 11.1.0 release notes (2026-09-03)"
  - id: wc109
    resource: https://developer.woocommerce.com/2026/06/09/woocommerce-10-9-beta/
    title: "WooCommerce 10.9: what's coming for developers (2026-06-09)"
  - id: sej
    resource: https://www.searchenginejournal.com/woocommerce-may-gain-sidekick-type-ai-through-extensions/567642/
    title: "Search Engine Journal: WooCommerce may gain Sidekick-type AI through extensions"
  - id: tc-layoffs
    resource: https://techcrunch.com/2025/04/02/wordpress-maker-automattic-lays-off-16-of-staff/
    title: "TechCrunch: Automattic lays off 16% of staff (2025-04-02)"
    author: org:techcrunch
---
# Summary
WooCommerce remains the largest self-hosted open-source commerce install base (via WordPress), and engineering kept shipping: 10.x through mid-2026, **WooCommerce 11.0 on 4 Aug 2026** (guest checkout, performance) and **11.1 on 3 Sept 2026** (30–42% faster REST requests)[^wc11][^wc111][^wc109]. Automattic is pulling previously paid features into core and exposing stores to AI agents through MCP[^sej]. The risk is the steward: Automattic laid off 16% of staff in April 2025 amid the WP Engine dispute[^tc-layoffs] and had a failed board attempt to sideline its CEO in Sept 2026 (see org). Verdict: OSS stable; business stable but governance-exposed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-02 | Automattic lays off 16% (~281)[^tc-layoffs] | Business | − |
| W6 | 2026-06-09 | WooCommerce 10.9 beta[^wc109] | OSS | + |
| W3 | 2026-08-04 | WooCommerce 11.0[^wc11] | OSS | + |
| W3 | 2026-09-03 | WooCommerce 11.1 (variation galleries, faster REST)[^wc111] | OSS | + |

# OSS successes
- Predictable monthly releases; "more in core" reduces paid-extension dependence[^wc111][^sej].
# OSS failures / risks
- Single-vendor governance inside a contested WordPress ecosystem.
# Business successes
- Agentic-commerce readiness via MCP rather than a proprietary assistant[^sej].
# Business failures / risks
- Steward turmoil and layoffs[^tc-layoffs]; Shopify continues to win SMB merchants (assessment).

# By window
## W3
- 11.0 and 11.1 releases[^wc11][^wc111]; Automattic board crisis (see org).
## W6
- 10.9[^wc109].
## W9
- No notable WooCommerce-specific events found.
## W12
- No notable events found.
## W24
- Automattic layoffs[^tc-layoffs].

# Lessons
- Plugin-based OSS commerce inherits the governance risk of its host platform's steward.

# Related
- [Automattic](/organizations/automattic.md), [WordPress](/projects/licensing-forks/wordpress.md)
- [Medusa](/projects/web-platforms/medusa.md), [Mage-OS](/projects/web-platforms/mage-os.md)
- [Automattic board ouster attempt](/events/2026-09-automattic-board-ouster-attempt.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/woocommerce/woocommerce
[^wc11]: https://developer.woocommerce.com/2026/08/04/woocommerce-11-0/
[^wc111]: https://developer.woocommerce.com/2026/09/03/wc-11-1-release-notes/
[^wc109]: https://developer.woocommerce.com/2026/06/09/woocommerce-10-9-beta/
[^sej]: https://www.searchenginejournal.com/woocommerce-may-gain-sidekick-type-ai-through-extensions/567642/
[^tc-layoffs]: https://techcrunch.com/2025/04/02/wordpress-maker-automattic-lays-off-16-of-staff/
