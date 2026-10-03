---
type: OSS Project
title: authentik
description: "Self-hosted identity provider beloved by homelabbers and increasingly enterprises; run by an Open Core Ventures-backed public benefit company, MIT core plus enterprise directory, it rewrote workers in Rust, open-sourced formerly enterprise search (2026.5) and slowed to a quarterly cadence."
resource: https://github.com/goauthentik/authentik
tags: [identity, sso, self-hosting, mit, open-core, public-benefit-company]
domain: web-platforms
license: MIT (core) + proprietary authentik/enterprise directory
license_history: ["GPL-3.0 (to 2023)", "MIT core + enterprise directory (2023-)"]
governance: company-led-open-core
steward: Authentik Security Inc. (public benefit company)
backing_orgs: []
metrics:
  github_stars: { value: 25821, as_of: 2026-10-03 }
  latest_release: { value: "2026.8.3", as_of: 2026-09-17 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/goauthentik/authentik
    title: authentik GitHub repository (license header, releases)
  - id: ocv
    resource: https://www.opencoreventures.com/blog/introducing-our-first-public-benefit-company-authentik-security
    title: "Open Core Ventures: Introducing our first public benefit company, Authentik Security"
  - id: gpl
    resource: https://goauthentik.io/blog/2023-08-23-my-hobby-became-my-job/
    title: "authentik blog: My hobby became my job … just needed to let go of GPLv3 (2023-08-23)"
  - id: r20265
    resource: https://docs.goauthentik.io/releases/2026.5/
    title: "authentik docs: Release 2026.5"
  - id: r20262
    resource: https://goauthentik.io/blog/2026-02-27-authentik-version-2026-2/
    title: "authentik blog: version 2026.2 is here (2026-02-27)"
---
# Summary
authentik is the most-starred (25.8K) community-favourite self-hosted IdP[^gh]. Its company, **Authentik Security**, was launched in 2022 by Open Core Ventures as OCV's first **public benefit company**, with a charter protecting the open-source core[^ocv]; the project left GPLv3 for MIT in 2023[^gpl]. In the window it shipped 2026.2 (Feb 2026)[^r20262] and **2026.5**, which moved the AKQL search language from enterprise to open source, added Account Lockdown and device-compliance connectors (enterprise), rewrote workers in Rust (~200MB less memory per container) and switched to a **three-month release cycle**[^r20265]. Verdict: OSS growing; business growing (no disclosed recent round verified).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-02-27 | authentik 2026.2[^r20262] | OSS | + |
| W6 | 2026-05 | 2026.5: AKQL open-sourced, Rust workers, quarterly cadence[^r20265] | OSS | + |
| W3 | 2026-09-17 | 2026.8.3[^gh] | OSS | + |

# OSS successes
- Moving features *from* enterprise *to* open source (AKQL) — rare in this domain[^r20265].
# OSS failures / risks
- Breaking changes (default bind address, Postgres options) in 2026.5[^r20265].
# Business successes
- PBC structure + OCV backing gives a credible "won't rug-pull" story[^ocv].
# Business failures / risks
- Small company competing with Keycloak (free) and enterprise IdPs.

# By window
## W3
- 2026.8 line[^gh].
## W6
- 2026.5[^r20265].
## W9
- 2026.2[^r20262].
## W12
- No notable events found.
## W24
- No notable events found (2025.x releases).

# Lessons
- Governance devices (public benefit charters) are being used to pre-commit COSS companies against future relicensing.

# Related
- [Keycloak](/projects/web-platforms/keycloak.md), [Zitadel](/projects/web-platforms/zitadel.md), [Ory](/projects/web-platforms/ory.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/goauthentik/authentik
[^ocv]: https://www.opencoreventures.com/blog/introducing-our-first-public-benefit-company-authentik-security
[^gpl]: https://goauthentik.io/blog/2023-08-23-my-hobby-became-my-job/
[^r20265]: https://docs.goauthentik.io/releases/2026.5/
[^r20262]: https://goauthentik.io/blog/2026-02-27-authentik-version-2026-2/
