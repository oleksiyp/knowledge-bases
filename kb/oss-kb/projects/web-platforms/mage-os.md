---
type: OSS Project
title: Mage-OS (Magento Open Source fork)
description: "Community nonprofit distribution/fork of Adobe's Magento Open Source; shipped Mage-OS 2.0 (Oct 2025) and 3.0 (May 2026) with features Adobe never gave the free edition, as Adobe pushed merchants toward its SaaS 'Commerce as a Cloud Service' (June 2025)."
resource: https://mage-os.org
tags: [e-commerce, php, fork, nonprofit, osl-3.0, magento, adobe]
domain: web-platforms
license: OSL-3.0
license_history: ["OSL-3.0 (inherited from Magento Open Source)"]
governance: community
steward: Mage-OS Association (nonprofit)
backing_orgs: []
metrics:
  mageos_magento2_github_stars: { value: 314, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/mage-os/mageos-magento2
    title: "Mage-OS fork of Magento core (GitHub)"
  - id: mo2
    resource: https://mage-os.org/releases/2025-10-16-mage-os-2-0-innovation-takes-flight/
    title: "Mage-OS 2.0: Innovation takes flight (2025-10-16)"
  - id: mo3
    resource: https://mage-os.org/releases/2026-05-18-mage-os-3-0-0-release/
    title: "Announcing Mage-OS 3 (2026-05-18)"
  - id: mo34
    resource: https://mage-os.org/releases/2026-08-11-mage-os-3-4-0-release/
    title: "Mage-OS 3.4.0 (2026-08-11)"
  - id: accs
    resource: https://www.mgt-commerce.com/blog/magento-saas/
    title: "MGT Commerce: Adobe Commerce as a Cloud Service (ACCS) explained"
  - id: faq
    resource: https://mage-os.org/faq/
    title: "Mage-OS FAQ"
---
# Summary
Mage-OS is the community's hedge against Adobe's stewardship of Magento. The Mage-OS Association, explicitly unaffiliated with Adobe[^faq], released **Mage-OS 2.0 on 16 Oct 2025** (AI-assisted translation via DeepL/OpenAI/Gemini, new admin theme, SEO controls)[^mo2] and **Mage-OS 3.0 on 18 May 2026** on Magento Open Source 2.4.9 with PHP 8.5 support, an interactive installer, RMA and admin activity log[^mo3], followed by monthly security-tracking releases (3.4.0, Aug 2026)[^mo34]. Meanwhile Adobe launched **Adobe Commerce as a Cloud Service (ACCS)**, a true multi-tenant SaaS, in June 2025[^accs] — signalling the open-source edition is not Adobe's priority. Verdict: OSS growing (from a small base); business n/a.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06 | Adobe Commerce as a Cloud Service (SaaS) GA[^accs] | Business | − (for OSS edition) |
| W12 | 2025-10-16 | Mage-OS 2.0[^mo2] | OSS | + |
| W6 | 2026-05-18 | Mage-OS 3.0 on Magento OS 2.4.9[^mo3] | OSS | + |
| W3 | 2026-08-11 | Mage-OS 3.4.0 security release[^mo34] | OSS | + |

# OSS successes
- A vendor-neutral distribution shipping features (RMA, activity log) that Adobe reserved for paid editions[^mo3].
# OSS failures / risks
- Small contributor base (fork repo ~300 stars)[^gh]; dependent on Adobe's upstream security patches.
# Business successes
- n/a (nonprofit); agencies benefit from an Adobe-independent path.
# Business failures / risks
- Magento ecosystem shrinking relative to Shopify; Adobe's SaaS pivot[^accs].

# By window
## W3
- 3.x security releases[^mo34].
## W6
- Mage-OS 3.0[^mo3].
## W9
- No notable events found.
## W12
- Mage-OS 2.0[^mo2].
## W24
- Adobe ACCS launch[^accs].

# Lessons
- When a big-tech steward deprioritises an acquired OSS product, a nonprofit distribution (not a hard fork) is a low-drama way to keep it alive.

# Related
- [Medusa](/projects/web-platforms/medusa.md), [WooCommerce](/projects/web-platforms/woocommerce.md)
- [OpenTofu](/projects/licensing-forks/opentofu.md) (comparable community-fork dynamics)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/mage-os/mageos-magento2
[^mo2]: https://mage-os.org/releases/2025-10-16-mage-os-2-0-innovation-takes-flight/
[^mo3]: https://mage-os.org/releases/2026-05-18-mage-os-3-0-0-release/
[^mo34]: https://mage-os.org/releases/2026-08-11-mage-os-3-4-0-release/
[^accs]: https://www.mgt-commerce.com/blog/magento-saas/
[^faq]: https://mage-os.org/faq/
