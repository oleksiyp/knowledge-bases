---
type: OSS Project
title: "Coolify (and self-hosted PaaS: Dokku, Kamal, Portainer)"
description: "Apache-2.0 self-hostable Heroku/Vercel alternative that reached 62k+ GitHub stars and finally shipped v4.0 GA (Apr 2026) after hundreds of betas — the breakout of the \"cloud exit / self-host\" movement alongside Dokku, 37signals' Kamal and Portainer."
resource: https://github.com/coollabsio/coolify
tags: [cloud-native, paas, self-hosting, apache-2.0, community]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2021-)"]
governance: single-vendor
steward: coolLabs (Andras Bacsai)
backing_orgs: []
metrics:
  github_stars: { value: 62524, as_of: 2026-10-03 }
  dokku_stars: { value: 32159, as_of: 2026-10-03 }
  kamal_stars: { value: 14626, as_of: 2026-10-03 }
  portainer_stars: { value: 38616, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: coolify-gh
    resource: https://github.com/coollabsio/coolify
    title: "Coolify GitHub repository and releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: dokku-gh
    resource: https://github.com/dokku/dokku
    title: "Dokku repository"
  - id: kamal-gh
    resource: https://github.com/basecamp/kamal
    title: "Kamal repository and releases"
  - id: portainer-gh
    resource: https://github.com/portainer/portainer
    title: "Portainer repository"
---

# Summary
Coolify is the breakout self-hosted PaaS: a single-maintainer-led, Apache-2.0 project with ~62.5k GitHub stars[^coolify-gh]. After a famously long v4 beta (beta.474 in April 2026), v4.0.0 GA shipped on Apr 27, 2026, followed by v4.1 (May 2026) and v4.3 (Aug 2026)[^coolify-gh]. It funds itself through a hosted Coolify Cloud offering and sponsorships rather than disclosed VC rounds[^coolify-gh]. Peers in the same "leave the hyperscaler PaaS" wave stayed active: Dokku (32k stars), 37signals' Kamal deploy tool (v2.4 Dec 2024 → v2.12 Jun 2026) and Portainer (38.6k stars)[^dokku-gh][^kamal-gh][^portainer-gh]. Verdict: OSS **thriving**; business **growing** (small, sustainable; revenue undisclosed).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-13 → 2025-06-18 | Kamal 2.4 – 2.7[^kamal-gh] | OSS | + |
| W12 | 2025-12-15 | Kamal 2.10[^kamal-gh] | OSS | + |
| W9 | 2026-03 | Coolify v4 betas 466-470 (rapid stabilization)[^coolify-gh] | OSS | + |
| W6 | 2026-04-27 | Coolify v4.0.0 GA[^coolify-gh] | OSS | + |
| W6 | 2026-05-18 | Coolify v4.1[^coolify-gh] | OSS | + |
| W6 | 2026-06-18 | Kamal 2.12[^kamal-gh] | OSS | + |
| W3 | 2026-08-12 | Coolify v4.3[^coolify-gh] | OSS | + |

# OSS successes
- Star growth to 62k+ makes it one of the most-starred deployment tools on GitHub[^coolify-gh].
- GA after a long beta signals maturation[^coolify-gh].

# OSS failures / risks
- Bus factor: development concentrated around its founder.
- Security exposure of a root-level server-management panel; frequent patch releases.

# Business successes
- Bootstrapped model (cloud + sponsors) without VC dilution.

# Business failures / risks
- Small team vs. venture-funded PaaS competitors (Vercel, Render, Railway).

# By window
## W3
- Coolify v4.3[^coolify-gh].
## W6
- Coolify v4.0 GA and v4.1; Kamal 2.12[^coolify-gh][^kamal-gh].
## W9
- Final v4 betas[^coolify-gh].
## W12
- Kamal 2.10[^kamal-gh].
## W24
- Kamal 2.x releases; Coolify v4 beta growth[^kamal-gh][^coolify-gh].

# Lessons
- Cost backlash against PaaS/hyperscaler pricing created a large audience for simple self-hosting tools; single maintainers can capture it with great UX.

# Related
- [Docker](/projects/cloud-native/docker.md), [Proxmox VE](/projects/cloud-native/proxmox-ve.md), [Gateway API (Traefik/Caddy)](/projects/cloud-native/gateway-api.md)

[^coolify-gh]: https://github.com/coollabsio/coolify
[^dokku-gh]: https://github.com/dokku/dokku
[^kamal-gh]: https://github.com/basecamp/kamal
[^portainer-gh]: https://github.com/portainer/portainer
