---
type: OSS Project
title: Zitadel
description: "Swiss Go-based multi-tenant identity platform that relicensed its core from Apache-2.0 to AGPL-3.0 with v3 (31 Mar 2025) under a 'code or contribution' philosophy, backed by a $9M Series A (Nov 2024), and moved to quarterly major releases (v4)."
resource: https://github.com/zitadel/zitadel
tags: [identity, iam, go, agpl-3.0, relicensing, multi-tenant]
domain: web-platforms
license: AGPL-3.0 (core, console, hosted login); Apache-2.0 (APIs, SDKs, protos, Helm, docs)
license_history: ["Apache-2.0 (to v2.x)", "AGPL-3.0 core (v3.0, 2025-03-31-)"]
governance: single-vendor
steward: Zitadel (company; St. Gallen, Switzerland)
backing_orgs: [organizations/zitadel]
metrics:
  github_stars: { value: 15165, as_of: 2026-10-03 }
  latest_release: { value: "v4.19.4", as_of: 2026-10-01 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/zitadel/zitadel
    title: Zitadel GitHub repository
  - id: agpl
    resource: https://zitadel.com/blog/apache-to-agpl
    title: "Zitadel: Strengthening our open source foundation — moving to AGPL 3.0 (2025-03-13)"
  - id: v3
    resource: https://zitadel.com/blog/zitadel-v3-announcement
    title: "Zitadel v3: AGPL license, streamlined releases, platform updates"
  - id: v3rel
    resource: https://github.com/zitadel/zitadel/releases/tag/v3.0.0
    title: "Zitadel v3.0.0 release"
  - id: seriesa
    resource: https://www.startupticker.ch/en/news/zitadel-raises-9-million-series-a
    title: "Startupticker: Zitadel raises $9 million Series A"
  - id: v4
    resource: https://zitadel.com/blog/announcing-the-general-availability-of-zitadel-v4
    title: "Zitadel: Announcing the general availability of Zitadel v4"
  - id: ai-era
    resource: https://zitadel.com/blog/open-source-in-the-ai-era
    title: "Zitadel: Open source in the AI era — why risk transfer became the product"
---
# Summary
Zitadel raised a **$9M Series A led by Nexus Venture Partners (Nov 2024, ~160 customers)**[^seriesa], then on **13 Mar 2025** announced it would relicense its core, console and hosted login from **Apache-2.0 to AGPL-3.0** effective with **v3.0 on 31 Mar 2025**, keeping APIs/SDKs/Helm under Apache to avoid virality concerns; its stated philosophy was "code or contribution"[^agpl][^v3][^v3rel]. Unlike BSL moves, AGPL is OSI-approved, so Zitadel stayed open source. It then moved to a quarterly major-release rhythm (v4 GA with resource-based APIs, self-hosted login, new SDKs) and v4.19 by Oct 2026[^v4][^gh]. Its 2026 essay argued that in the AI era "risk transfer became the product"[^ai-era]. Verdict: OSS stable; business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11 | $9M Series A (Nexus, Floodgate)[^seriesa] | Business | + |
| W24 | 2025-03-13 | AGPL relicense announced[^agpl] | OSS | ± |
| W24 | 2025-03-31 | v3.0 under AGPL; Postgres standardisation[^v3rel][^v3] | OSS | ± |
| W24–W12 | 2025 | v4 GA (resource APIs, self-hosted login)[^v4] | OSS | + |
| W3 | 2026-07-17 → 10-01 | v4.16 → v4.19 releases[^gh] | OSS | + |

# OSS successes
- Relicensed to an OSI license rather than BSL/SSPL; scoped AGPL to server components[^agpl].
# OSS failures / risks
- AGPL deters some embedders/hosting providers; CockroachDB support dropped in favour of Postgres (v3)[^v3].
# Business successes
- Series A + predictable release train; enterprise self-hosting demand[^seriesa][^v4].
# Business failures / risks
- Small vendor vs Okta/Auth0, Keycloak and well-funded devtools auth (Clerk, WorkOS).

# By window
## W3
- v4.16–v4.19 releases[^gh].
## W6
- No notable events found.
## W9
- No notable events found ("open source in the AI era" essay, date unverified)[^ai-era].
## W12
- No notable events found.
## W24
- Series A; AGPL relicense; v3/v4[^seriesa][^agpl][^v4].

# Lessons
- AGPL is the "OSI-safe" relicensing path: it protects against cloud resale while preserving open-source status, and drew far less backlash than BSL moves.

# Related
- [Zitadel (org)](/organizations/zitadel.md), [Zitadel AGPL relicense event](/events/2025-03-zitadel-agpl-relicense.md)
- [Keycloak](/projects/web-platforms/keycloak.md), [Ory](/projects/web-platforms/ory.md), [Redis AGPL relicense](/events/2025-05-redis-agplv3-relicense.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/zitadel/zitadel
[^agpl]: https://zitadel.com/blog/apache-to-agpl
[^v3]: https://zitadel.com/blog/zitadel-v3-announcement
[^v3rel]: https://github.com/zitadel/zitadel/releases/tag/v3.0.0
[^seriesa]: https://www.startupticker.ch/en/news/zitadel-raises-9-million-series-a
[^v4]: https://zitadel.com/blog/announcing-the-general-availability-of-zitadel-v4
[^ai-era]: https://zitadel.com/blog/open-source-in-the-ai-era
