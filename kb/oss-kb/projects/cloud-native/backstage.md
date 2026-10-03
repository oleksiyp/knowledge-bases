---
type: OSS Project
title: "Backstage"
description: "Spotify-created, CNCF-incubating framework for internal developer portals; monthly releases (v1.50-v1.55 in 2026) and \"thousands\" of adopters keep it the default IDP framework, while Spotify monetizes via Spotify Portal and SaaS rivals (Port, Cortex, Roadie) sell easier alternatives."
resource: https://github.com/backstage/backstage
tags: [cloud-native, platform-engineering, developer-portal, apache-2.0, foundation-hosted, cncf-incubating]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2020-)"]
governance: foundation
steward: Cloud Native Computing Foundation (Spotify main maintainer)
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 34548, as_of: 2026-10-03 }
  latest_minor: { value: "v1.55.0 (2026-09-15)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bs-gh
    resource: https://github.com/backstage/backstage
    title: "Backstage GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: bs-cncf
    resource: https://www.cncf.io/projects/backstage/
    title: "CNCF: Backstage project page (incubating since 2022-03-15)"
  - id: spotify-portal
    resource: https://backstage.spotify.com/
    title: "Spotify for Backstage / Spotify Portal"
    author: org:spotify
  - id: port-blog
    resource: https://www.port.io/blog
    title: "Port blog (agentic engineering platform positioning)"
  - id: port-series-c
    resource: https://www.port.io/blog/port-100m-series-c
    title: "Port: $100M Series C at $800M valuation (Dec 11, 2025)"
    author: org:port
  - id: cortex-series-c
    resource: https://www.cortex.io/post/announcing-series-c
    title: "Cortex: Our Series C - $60M in new funding (Sep 2024)"
    author: org:cortex
  - id: sdtimes-portal-ga
    resource: https://sdtimes.com/softwaredev/spotify-portal-now-generally-available-and-packed-with-features-for-improving-dev-experience/
    title: "SD Times: Spotify Portal now generally available (Oct 22, 2025)"
    author: org:sd-times
---

# Summary
Backstage remains the reference framework for internal developer portals, "adopted by thousands of companies" per Spotify[^spotify-portal], with a monthly minor release cadence (v1.50 Apr 2026 → v1.55 Sep 15, 2026)[^bs-gh]. It is still CNCF incubating (since March 2022) rather than graduated[^bs-cncf]. Spotify sells Spotify Portal, an out-of-the-box IDP built on Backstage that reached GA on Oct 22, 2025[^spotify-portal][^sdtimes-portal-ga], acknowledging that self-assembled Backstage is costly to operate; SaaS rivals are well funded — Port raised a $100M Series C led by General Atlantic at an $800M valuation (Dec 11, 2025; $158M raised in total) and now pitches an "agentic SDLC platform"[^port-series-c][^port-blog]. Verdict: OSS **stable**; the platform-engineering category is shifting toward AI-agent orchestration, where Backstage's plugin model is less differentiated.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| pre-W24 | 2024-09-04 | Cortex $60M Series C (Scale Venture Partners lead)[^cortex-series-c] | Business | − |
| W12 | 2025-10-22 | Spotify Portal for Backstage GA (with AiKA MCP support)[^sdtimes-portal-ga] | Business | + |
| W12 | 2025-12-11 | Rival Port raises $100M Series C at $800M[^port-series-c] | Business | − |
| W6 | 2026-04-14 → 2026-06-16 | Backstage v1.50 – v1.52[^bs-gh] | OSS | flat |
| W3 | 2026-07-14 → 2026-09-15 | Backstage v1.53 – v1.55[^bs-gh] | OSS | flat |

# OSS successes
- Reliable monthly releases and a large plugin ecosystem; 34.5k stars[^bs-gh].

# OSS failures / risks
- Still not graduated after 4+ years in incubation[^bs-cncf].
- High total cost of ownership drives buyers to SaaS portals.

# Business successes
- Spotify Portal (GA Oct 22, 2025) gives Spotify a direct monetization path[^spotify-portal][^sdtimes-portal-ga].

# Business failures / risks
- Competition from well-funded SaaS portals: Port ($100M Series C at $800M, Dec 2025)[^port-series-c] and Cortex ($60M Series C, Sep 2024)[^cortex-series-c], plus OpsLevel and Roadie.

# By window
## W3
- v1.53-v1.55[^bs-gh].
## W6
- v1.50-v1.52[^bs-gh].
## W9
- No notable events found.
## W12
- Spotify Portal GA (Oct 22, 2025)[^sdtimes-portal-ga]; Port $100M Series C (Dec 11, 2025)[^port-series-c].
## W24
- Continuous monthly releases (rival Cortex had raised a $60M Series C just before the window, Sep 2024)[^cortex-series-c].

# Lessons
- Frameworks that require heavy assembly invite managed SaaS competitors — including from the original creator.

# Related
- [Crossplane](/projects/cloud-native/crossplane.md), [Kubernetes](/projects/cloud-native/kubernetes.md), [CNCF](/organizations/cncf.md)

[^bs-gh]: https://github.com/backstage/backstage
[^bs-cncf]: https://www.cncf.io/projects/backstage/
[^spotify-portal]: https://backstage.spotify.com/
[^port-blog]: https://www.port.io/blog
[^port-series-c]: https://www.port.io/blog/port-100m-series-c
[^cortex-series-c]: https://www.cortex.io/post/announcing-series-c
[^sdtimes-portal-ga]: https://sdtimes.com/softwaredev/spotify-portal-now-generally-available-and-packed-with-features-for-improving-dev-experience/
