---
type: OSS Project
title: Immich
description: "Self-hosted Google Photos alternative funded by FUTO; went from beta to stable v2.0 (Oct 2025) and v3.0 (July 2026), reaching ~115k GitHub stars — the breakout self-hosting app of the period."
resource: https://github.com/immich-app/immich
tags: [self-hosting, photos, agpl-3.0, futo, saas-alternative]
domain: end-user-apps
license: AGPL-3.0
license_history: ["AGPL-3.0"]
governance: single-vendor
steward: FUTO (employs core team)
backing_orgs: []
metrics:
  github_stars: { value: 115485, as_of: 2026-10-03 }
  contributors: { value: "1500+", as_of: 2025-10-01 }
oss_verdict: thriving
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/immich-app/immich
    title: Immich GitHub repository
  - id: v2
    resource: https://immich.app/blog/v2.0.0-release
    title: "Immich: Release v2.0.0 — Stable"
  - id: linuxiac
    resource: https://linuxiac.com/immich-reaches-first-ever-stable-release-with-version-2-0/
    title: "Linuxiac: Immich reaches first-ever stable release with version 2.0"
  - id: google-flag
    resource: https://immich.app/blog/google-flags-immich-as-dangerous
    title: "Immich: Google flags Immich sites as dangerous"
  - id: v3
    resource: https://github.com/immich-app/immich/discussions/29439
    title: "Immich v3.0.0 release discussion"
  - id: rel
    resource: https://github.com/immich-app/immich/releases
    title: Immich releases
---
# Summary
Immich is the clearest breakout in self-hosting: after nearly four years and 271 prior releases it shipped its first stable version, v2.0, on 1 Oct 2025 with ~78k stars and 1,500+ contributors[^v2][^linuxiac], and v3.0 on 2 July 2026 with non-destructive mobile editing, Workflows (preview), real-time HLS transcoding, integrity checks and OCR[^v3]. Stars reached ~115k by Oct 2026[^gh]. The core team works full-time funded by FUTO, with optional product keys and merch as supplementary income[^linuxiac][^v3]. A notable hiccup: in Oct 2025 Google Safe Browsing flagged Immich's own sites as dangerous[^google-flag]. Verdict: thriving OSS; stable (patron-funded) business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-10-01 | v2.0.0 first stable release (271 prior versions, ~78k stars)[^v2][^linuxiac] | OSS | + |
| W12 | 2025-10-22 | Google flags Immich domains as dangerous[^google-flag] | OSS | − |
| W6 | 2026-07-02 | v3.0.0: mobile editing, Workflows, HLS, OCR; drops pgvecto.rs[^v3] | OSS | + |
| W3 | 2026-09-28 | v3.2.4[^rel] | OSS | + |

# OSS successes
- Stability commitment and API docs; huge contributor base[^v2].
# OSS failures / risks
- Breaking API changes in 3.0 affect third-party integrations[^v3]; Big Tech gatekeeping (Safe Browsing) can harm self-hosted brands[^google-flag].
# Business successes
- Patron funding (FUTO) enables a full-time team without paywalls; voluntary product keys[^linuxiac][^v3].
# Business failures / risks
- Single-patron dependence.

# By window
## W3
- 3.1/3.2 point releases (3.2.4 on Sept 28)[^rel].
## W6
- v3.0 (July 2)[^v3].
## W9
- No notable events found.
## W12
- Google Safe Browsing incident[^google-flag].
## W24
- v2.0 stable (Oct 1, 2025)[^v2].

# Lessons
- "Replace a Google service" apps with excellent mobile UX can reach mainstream self-hosters.
- Patron funding lets a project resist monetization pressure — at the cost of concentration risk.

# Related
- [Jellyfin](/projects/end-user-apps/jellyfin.md), [Nextcloud](/projects/end-user-apps/nextcloud.md)

[^gh]: https://github.com/immich-app/immich
[^v2]: https://immich.app/blog/v2.0.0-release
[^linuxiac]: https://linuxiac.com/immich-reaches-first-ever-stable-release-with-version-2-0/
[^google-flag]: https://immich.app/blog/google-flags-immich-as-dangerous
[^v3]: https://github.com/immich-app/immich/discussions/29439
[^rel]: https://github.com/immich-app/immich/releases
