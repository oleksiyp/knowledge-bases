---
type: OSS Project
title: Sovereign Tech Agency (Germany)
description: "German federal agency funding open digital infrastructure (Fund, Resilience, Fellowship, Standards, Challenge); the leading public-sector model for paying maintainers, cited as template for an EU Sovereign Tech Fund."
resource: https://www.sovereign.tech
tags: [public-funding, germany, maintainers, digital-sovereignty]
domain: security-sustainability
license: n/a
license_history: []
governance: foundation
steward: SPRIND (German Federal Agency for Breakthrough Innovation)
backing_orgs: []
metrics:
  budget_2023_eur: { value: 22000000, as_of: 2023-12-31 }
oss_verdict: thriving
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sta-site
    resource: https://www.sovereign.tech/
    title: Sovereign Tech Agency homepage
  - id: wiki-sta
    resource: https://en.wikipedia.org/wiki/Sovereign_Tech_Agency
    title: "Wikipedia: Sovereign Tech Agency"
  - id: sta-resilience
    resource: https://www.sovereign.tech/news/resilience-relaunch
    title: "Sovereign Tech Agency: Sovereign Tech Resilience relaunches with four new services (2026-09-28)"
  - id: ofe-eustf
    resource: https://openforumeurope.org/wp-content/uploads/2025/10/EU-STF-Feasibility-Study_final.pdf
    title: "OpenForum Europe: Funding Europe's Open Digital Infrastructure, EU-STF feasibility study (2025)"
  - id: ffmpeg-news
    resource: https://ffmpeg.org/index.html
    title: FFmpeg news
---
# Summary
The Sovereign Tech Agency (STA, formerly the Sovereign Tech Fund) is the most successful example of a government paying directly for open source maintenance. Verdict: **thriving**. Its budget was €13M in 2022, about €22M in 2023, and an expected €16M in 2024. By April 2025 it had funded more than 40 projects, including GNOME (€1M), KDE (€1.28M) and Prossimo/Rustls (€1.43M).[^wiki-sta] It now runs five programs: Fund, Resilience (bug bounties and proactive security), Fellowship (paid maintainers), Standards (maintainer participation in the IETF, W3C and ISO) and Challenge. On 2026-09-28 it relaunched Resilience with four new services, each with a delivery partner: memory-safety transition (Tweede golf), post-quantum readiness (IAV), supply-chain security (Liquid Reply) and **CRA compliance** (EY Consulting). The agency said one reason was that "AI tools are accelerating vulnerability discovery".[^sta-resilience] FFmpeg called the STA its "first governmental sponsor" (May 2024), and its grant helped bring FFmpeg's Coverity issue count to the lowest level since 2016.[^ffmpeg-news] An OpenForum Europe feasibility study (2025) proposes scaling the model up into an EU Sovereign Tech Fund with at least €350M from the next EU budget.[^ofe-eustf]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04 | 40+ projects funded (GNOME, KDE, Rustls…)[^wiki-sta] | OSS | + |
| W24 | 2025 | OFE feasibility study proposes an EU Sovereign Tech Fund (≥ €350M)[^ofe-eustf] | OSS | + |
| W3 | 2026-09-28 | Resilience program relaunched with CRA compliance, PQC, memory safety, supply-chain services[^sta-resilience] | OSS | + |

# OSS successes
- Funds unglamorous maintenance work (GNOME, KDE, FFmpeg, Rustls) that companies don't pay for.[^wiki-sta][^ffmpeg-news]
- The Fellowship program pays individual maintainers directly.[^sta-site]

# OSS failures / risks
- The budget is small compared with the need and depends on German federal politics.

# Business successes
- n/a (public agency). The model is spreading to EU policy proposals.[^ofe-eustf]

# Business failures / risks
- The 2024 budget fell from about €22M to an expected €16M.[^wiki-sta]

# By window
## W3
- Resilience relaunched (2026-09-28) with CRA-compliance and PQC services.[^sta-resilience]
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Portfolio passed 40 projects.[^wiki-sta] The EU-STF feasibility study was published.[^ofe-eustf]

# Lessons
- Governments can fund OSS maintenance well when grants are tied to concrete infrastructure work rather than to innovation.

# Related
- [EU CRA](/projects/security-sustainability/eu-cyber-resilience-act.md), [GitHub Secure Open Source Fund](/projects/security-sustainability/github-secure-open-source-fund.md), [Open Source Pledge](/projects/security-sustainability/open-source-pledge.md)

[^sta-site]: sovereign.tech.
[^wiki-sta]: Wikipedia (budget figures; not independently re-confirmed).
[^sta-resilience]: Sovereign Tech Agency news, 2026-09-28.
[^ofe-eustf]: OpenForum Europe EU-STF feasibility study.
[^ffmpeg-news]: FFmpeg news page.
