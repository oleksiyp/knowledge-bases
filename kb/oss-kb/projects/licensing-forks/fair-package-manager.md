---
type: OSS Project
title: FAIR Package Manager
description: "Linux Foundation-hosted federated plugin/theme distribution for WordPress (June 2025), created by WordPress veterans to remove WordPress.org as a single point of control after the WP Engine fight; technically alive (plugin 1.4.x in 2026) but adoption remains niche."
resource: https://github.com/fairpm
tags: [cms, wordpress, package-manager, gpl-2.0, foundation-hosted, linux-foundation, governance]
domain: licensing-forks
license: GPL-2.0
license_history: ["GPL-2.0 (2025-)"]
governance: foundation
steward: Linux Foundation
backing_orgs: []
metrics:
  github_stars_fair_plugin: { value: 317, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lf-fair
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability
    title: "Linux Foundation: Announces the FAIR Package Manager project (2025-06-06)"
  - id: joost-fair
    resource: https://joost.blog/path-forward-for-wordpress/
    title: "Joost de Valk: The FAIR Package Manager: decentralized WordPress infrastructure (2025-06)"
  - id: sej-mullenweg-fair
    resource: https://www.searchenginejournal.com/wordpress-co-founder-mullenwegs-reaction-to-fair-project/548616/
    title: "Search Engine Journal: Mullenweg's reaction to FAIR project (2025-06-09)"
  - id: fair-gh
    resource: https://github.com/fairpm/fair-plugin
    title: FAIR plugin GitHub repository (releases)
  - id: bleeping-fair
    resource: https://www.bleepingcomputer.com/news/technology/linux-foundation-unveils-decentralized-wordpress-plugin-manager/
    title: "BleepingComputer: Linux Foundation unveils decentralized WordPress plugin manager"
---

# Summary
FAIR ("Federated And Independent Repository") is the WordPress community's structural answer to the [WordPress/WP Engine](/projects/licensing-forks/wordpress.md) crisis. Rather than fork WordPress, a group of former WordPress core contributors and leaders built a vendor-neutral, federated distribution layer for plugins and themes and placed it under the Linux Foundation on June 6, 2025. TSC co-chairs are Carrie Dils, Mika Epstein and Ryan McCue, with support from Fastly, Crowd Favorite, the CNCF and the OpenJS Foundation.[^lf-fair][^bleeping-fair] The FAIR plugin continued shipping in 2026 (1.4.0 in May, 1.4.1 in Aug).[^fair-gh] Its adoption is far smaller than WordPress.org's, so it works mainly as insurance against WordPress.org cutting off access again. Verdict: stable, and niche.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-06 | Launched at the Linux Foundation; shared repository live[^lf-fair] | OSS | + |
| W24 | 2025-06-09 | Mullenweg publicly reacts to FAIR[^sej-mullenweg-fair] | OSS | ± |
| W6 | 2026-05-14 | FAIR plugin 1.4.0[^fair-gh] | OSS | + |
| W3 | 2026-08-25 | FAIR plugin 1.4.1[^fair-gh] | OSS | + |

# OSS successes
- It gives WordPress a neutral, foundation-governed distribution path with cryptographic signing and mirrors, which removes the single point of control used against WP Engine.[^lf-fair][^joost-fair]
- Backed by credible infrastructure partners (Fastly) and sister foundations.[^lf-fair]

# OSS failures / risks
- Small footprint (317 GitHub stars on the core plugin) compared with WordPress's ~42% web share.[^fair-gh]
- Network effects favour WordPress.org. Without major hosts making FAIR the default, it stays a contingency plan.

# Business successes
- n/a.

# Business failures / risks
- The project was still seeking funding partners at launch.[^lf-fair]

# By window
## W3
- FAIR plugin 1.4.1 (Aug 25, 2026).[^fair-gh]
## W6
- FAIR plugin 1.4.0 (May 14, 2026).[^fair-gh]
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Launch (June 2025).[^lf-fair]

# Lessons
- When the problem is control of infrastructure rather than the license, the community's answer is to decentralise distribution, not to fork the code.
- Neutral infrastructure takes years to reach critical mass and usually only gets there if the incumbent keeps doing damage.

# Related
- [WordPress](/projects/licensing-forks/wordpress.md)
- [Automattic](/organizations/automattic.md)
- [FAIR launch event](/events/2025-06-fair-package-manager-launch.md)

[^lf-fair]: Linux Foundation press release — https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability
[^joost-fair]: Joost de Valk — https://joost.blog/path-forward-for-wordpress/
[^sej-mullenweg-fair]: Search Engine Journal — https://www.searchenginejournal.com/wordpress-co-founder-mullenwegs-reaction-to-fair-project/548616/
[^fair-gh]: FAIR plugin GitHub — https://github.com/fairpm/fair-plugin
[^bleeping-fair]: BleepingComputer — https://www.bleepingcomputer.com/news/technology/linux-foundation-unveils-decentralized-wordpress-plugin-manager/
