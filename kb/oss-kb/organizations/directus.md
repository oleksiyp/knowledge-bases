---
type: Organization
title: Directus (Monospace Inc.)
description: "Company behind the Directus data platform/headless CMS; moved from MIT to BSL (2023) and then to its own source-available 'Monospace Sustainable Core License' with license keys in v12 (June 2026)."
resource: https://directus.io
tags: [headless-cms, source-available, relicensing, coss-startup]
org_kind: coss-startup
hq: New York, USA (unverified)
funding: { total_usd: "unverified", last_round: "unverified", last_round_date: 2026-06-10, valuation_usd: "unverified" }
business_verdict: stable
projects: [projects/web-platforms/directus]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: forum
    resource: https://community.directus.com/t/directus-license-revision-community-feedback-requested/2125
    title: "Directus Community: License revision — community feedback requested (2026-04-02)"
  - id: v12
    resource: https://github.com/directus/directus/releases/tag/v12.0.0
    title: "Directus v12.0.0 release notes"
  - id: docs
    resource: https://directus.com/docs/licensing/overview
    title: "Directus docs: Licensing overview"
---
# Summary
Monospace Inc. sells Directus Cloud and self-hosted licenses. In April 2026 CEO Ben Haynes proposed replacing BSL with the **MSCL** — keys instead of honor-system thresholds, gated enterprise features, GPLv3 conversion after four years — and shipped it in **v12.0.0 (10 June 2026)**[^forum][^v12]. Free use is limited to entities under $5M revenue and 50 employees via an "Open Innovation Grant"[^docs]. The company states it is not financially distressed[^forum]. Verdict: stable.

# Business timeline
| Date | Event |
|---|---|
| 2023-04 | MIT → BSL 1.1 (pre-window) |
| 2026-04-02 | MSCL proposal[^forum] |
| 2026-06-10 | v12 under MSCL-1.0-GPL[^v12] |

# Monetization model
Directus Cloud; paid self-hosted licenses above the grant threshold; enterprise features (SSO, custom permissions, AI translations) by tier[^v12][^docs].

# Successes
- Converts large self-hosters to paying customers via enforceable keys[^forum].

# Failures / risks
- Two relicenses in three years; trust erosion[^forum].

# Related
- [Directus](/projects/web-platforms/directus.md), [Directus MSCL relicense](/events/2026-04-directus-mscl-relicense.md)

[^forum]: https://community.directus.com/t/directus-license-revision-community-feedback-requested/2125
[^v12]: https://github.com/directus/directus/releases/tag/v12.0.0
[^docs]: https://directus.com/docs/licensing/overview
