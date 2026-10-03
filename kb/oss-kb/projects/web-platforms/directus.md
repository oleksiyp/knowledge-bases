---
type: OSS Project
title: Directus
description: "Database-first headless CMS/backend that left MIT for BSL in 2023 and, with v12 (June 2026), moved again to a custom 'Monospace Sustainable Core License' with license keys and feature gating — the domain's clearest example of source-available tightening."
resource: https://github.com/directus/directus
tags: [headless-cms, backend, source-available, bsl, relicensing, open-core]
domain: web-platforms
license: MSCL-1.0-GPL (source-available; each version converts to GPLv3 after 4 years)
license_history: ["MIT (pre-April 2023; earlier history not re-verified)", "BUSL-1.1 (Apr 2023 - v11)", "MSCL-1.0-GPL (v12, June 2026-)"]
governance: single-vendor
steward: Monospace Inc. (Directus)
backing_orgs: [organizations/directus]
metrics:
  github_stars: { value: 38008, as_of: 2026-10-03 }
  free_use_threshold: { value: "<$5M annual revenue and <50 employees", as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: down, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/directus/directus
    title: Directus GitHub repository (LICENSE = MSCL-1.0-GPL)
  - id: v12
    resource: https://github.com/directus/directus/releases/tag/v12.0.0
    title: "Directus v12.0.0 release notes (relicense BUSL-1.1 → MSCL-1.0-GPL)"
  - id: forum
    resource: https://community.directus.com/t/directus-license-revision-community-feedback-requested/2125
    title: "Directus Community: License revision — community feedback requested (2026-04-02)"
  - id: docs
    resource: https://directus.com/docs/licensing/overview
    title: "Directus docs: Licensing overview (Open Innovation Grant)"
  - id: contensu
    resource: https://contensu.com/directus-license
    title: "Contensu: Directus license, MSCL and v12 — every question answered"
  - id: medium
    resource: https://medium.com/@kutubkhanmakda/is-directus-dead-the-truth-behind-v12-the-mscl-license-and-new-pricing-restrictions-8505353096ed
    title: "Medium: Is Directus dead? v12, MSCL and new pricing restrictions"
---
# Summary
Directus already left OSI open source in April 2023 (BSL 1.1 with a $5M revenue threshold, honor-system enforcement). On **2 April 2026** CEO Ben Haynes opened a "license revision" thread, and **v12.0.0 (published 10 June 2026)** relicensed to the custom **MSCL-1.0-GPL**: free for entities under $5M revenue and 50 employees, a "Competing Use" ban, license keys replacing the honor system, enterprise features (SSO, custom permission rules, AI translations) gated, and a 4-year conversion to GPLv3[^forum][^v12][^docs]. The community thread criticised an untested custom license and phone-home keys; the company said it was not financially distressed[^forum]. Verdict: OSS contested; business stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-04-02 | License revision proposal (MSCL, keys, gated features)[^forum] | Business | − |
| W6 | 2026-06-10 | v12.0.0: BUSL-1.1 → MSCL-1.0-GPL; Core tier default for self-host; MCP OAuth[^v12] | OSS | − |
| W3 | 2026-09-23 | v12.4.1 — releases continue[^gh] | OSS | + |

(Earlier: MIT → BSL 1.1 in April 2023, outside the 2-year window.)

# OSS successes
- Active development continues (v12.4 in Sept 2026); 38K stars[^gh].
- Each version still converts to GPLv3 after four years (a stronger "eventual open" promise than many BSL variants)[^docs].
# OSS failures / risks
- Second relicense in three years; custom license not reviewed by OSI and introduces key-based enforcement[^forum][^contensu].
- Features previously usable for free now require keys above the Core tier[^v12][^medium].
# Business successes
- Converts honor-system freeloaders into licensable customers; company says it is not distressed[^forum].
# Business failures / risks
- Trust erosion; migration guides to rivals (Payload, Strapi) proliferated (secondary sources)[^medium].

# By window
## W3
- No notable events found beyond v12.x releases.
## W6
- MSCL proposal and v12 relicense[^forum][^v12].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found (BSL period).

# Lessons
- BSL with honor-system thresholds is hard to enforce; vendors drift toward license keys and feature gates.
- Custom licenses ("MSCL", "SUL") proliferate in this domain — see [NocoDB](/projects/web-platforms/nocodb.md).

# Related
- [Directus (org)](/organizations/directus.md), [Directus MSCL relicense event](/events/2026-04-directus-mscl-relicense.md)
- [NocoDB](/projects/web-platforms/nocodb.md), [Zitadel](/projects/web-platforms/zitadel.md), [Strapi](/projects/web-platforms/strapi.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/directus/directus
[^v12]: https://github.com/directus/directus/releases/tag/v12.0.0
[^forum]: https://community.directus.com/t/directus-license-revision-community-feedback-requested/2125
[^docs]: https://directus.com/docs/licensing/overview
[^contensu]: https://contensu.com/directus-license
[^medium]: https://medium.com/@kutubkhanmakda/is-directus-dead-the-truth-behind-v12-the-mscl-license-and-new-pricing-restrictions-8505353096ed
