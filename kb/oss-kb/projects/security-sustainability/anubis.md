---
type: OSS Project
title: Anubis
description: "MIT-licensed proof-of-work 'AI firewall' by Xe Iaso (Techaro), released 2025-01-19, that GNOME, FFmpeg, LKML archives, sourcehut and many more adopted in 2025 to survive AI-scraper floods; a breakout defensive success (~23k stars) with a small paid add-on business (Thoth)."
resource: https://github.com/TecharoHQ/anubis
tags: [ai-scrapers, infrastructure, proof-of-work, mit]
domain: security-sustainability
license: MIT
license_history: ["MIT"]
governance: single-vendor
steward: Techaro (Xe Iaso)
backing_orgs: []
metrics:
  github_stars: { value: 23007, as_of: 2026-10-03 }
  forks: { value: 744, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: anubis-gh
    resource: https://github.com/TecharoHQ/anubis
    title: Anubis GitHub repository
  - id: anubis-releases
    resource: https://github.com/TecharoHQ/anubis/releases
    title: Anubis GitHub releases
    last_modified: 2026-09-17T00:00:00Z
  - id: anubis-site
    resource: https://anubis.techaro.lol/
    title: Anubis documentation site
  - id: devault
    resource: https://drewdevault.com/blog/Stop-externalizing-your-costs-on-me/
    title: "Drew DeVault: Please stop externalizing your costs directly into my face (2025-03-17)"
    author: person:drew-devault
  - id: lwn-anubis
    resource: https://lwn.net/Articles/1028558/
    title: "LWN: Anubis sends AI scraperbots to a well-deserved fate (2025-07-10)"
    author: org:lwn
  - id: reg-anubis
    resource: https://www.theregister.com/2025/07/09/anubis_fighting_the_llm_hordes/
    title: "The Register: Anubis guards gates against hordes of LLM bot crawlers (2025-07-09)"
    author: org:the-register
  - id: wiki-anubis
    resource: https://en.wikipedia.org/wiki/Anubis_(software)
    title: "Wikipedia: Anubis (software)"
---
# Summary
In 2025, AI crawlers became an infrastructure crisis for OSS hosts. On 2025-03-17 SourceHut's Drew DeVault reported spending 20–100% of his time fighting LLM crawlers that ignore robots.txt, rotate user agents and come from thousands of residential IPs, causing "dozens of brief outages per week".[^devault] Anubis, a SHA-256 proof-of-work challenge proxy that Xe Iaso released on 2025-01-19, became the most common open source fix.[^wiki-anubis] By July 2025 LWN listed the LKML archive, sourcehut, FFmpeg and GNOME as users, and a Duke University pilot blocked "more than 4 million unwanted HTTP requests per day".[^lwn-anubis] Verdict: **thriving**: about 23k GitHub stars, 744 forks, and releases every few weeks. v1.27.0 shipped on 2026-08-08, and the v1.28.0 pre-releases (from 2026-08-30) add WebAssembly-based challenges.[^anubis-gh][^anubis-releases] Techaro makes money from Thoth, a paid IP-reputation (geo/ASN) service, and from a paid unbranded tier.[^lwn-anubis]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-19 | Anubis first released (MIT)[^wiki-anubis] | OSS | + |
| W24 | 2025-03-17 | SourceHut publicly documents AI-crawler outages[^devault] | OSS | − |
| W24 | 2025-07-10 | LWN: deployed at LKML archive, sourcehut, FFmpeg, GNOME; Duke pilot; Thoth paid service[^lwn-anubis] | OSS / Business | + |
| W3 | 2026-07-27 → 08-08 | v1.26.x and v1.27.0 released[^anubis-releases] | OSS | + |
| W3 | 2026-08-30 → 09-17 | v1.28.0 pre-releases (WebAssembly challenges)[^anubis-releases] | OSS | + |

# OSS successes
- A small MIT tool became the community's default defense in a matter of months, used across major FOSS infrastructure.[^lwn-anubis][^reg-anubis]

# OSS failures / risks
- It works as an arms race. Scrapers running headless browsers can solve the challenges, and critics call proof-of-work "inflationary" and wasteful.[^reg-anubis]
- The project itself warns it can block legitimate automated indexing.[^anubis-gh]

# Business successes
- Techaro sells Thoth reputation checking and an unbranded tier ($50/month at the time of LWN's report).[^lwn-anubis]

# Business failures / risks
- Institutions find it hard to pay for small OSS subscriptions; LWN cites Duke as an example.[^lwn-anubis]
- Scrapers' costs keep landing on volunteer infrastructure.[^devault]

# By window
## W3
- v1.27.0 released; v1.28 pre-releases add WASM challenges.[^anubis-releases][^anubis-site]
## W6
- No notable dated events verified.
## W9
- No notable dated events verified.
## W12
- No notable dated events verified.
## W24
- Released in January 2025; the scraper crisis drove broad adoption; Thoth paid tier launched.[^wiki-anubis][^devault][^lwn-anubis]

# Lessons
- When a cost is pushed onto OSS infrastructure, OSS answers with a shared defensive tool, not a lawsuit.
- A popular defensive tool can support a small company through add-ons, but institutional procurement is hard.

# Related
- [AI scraper crisis](/events/2025-03-ai-scrapers-overload-oss-infrastructure.md)

[^anubis-gh]: GitHub repository (checked 2026-10-03).
[^anubis-releases]: GitHub releases (checked 2026-10-03).
[^anubis-site]: Anubis site.
[^devault]: Drew DeVault blog, 2025-03-17.
[^lwn-anubis]: LWN, 2025-07-10.
[^reg-anubis]: The Register, 2025-07-09.
[^wiki-anubis]: Wikipedia, Anubis (software) (release date).
