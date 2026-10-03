---
type: OSS Project
title: Penpot
description: "MPL-2.0 open-source Figma alternative by Kaleidos; ~60k GitHub stars, a new rendering engine, an MCP server for AI agents, an 'Open Nitrate' governance-based business model and a €6.9M round with Spanish state backing (July 2026)."
resource: https://github.com/penpot/penpot
tags: [design, creative, mpl-2.0, figma-alternative, open-core]
domain: end-user-apps
license: MPL-2.0
license_history: ["MPL-2.0"]
governance: company-led-open-core
steward: Kaleidos (Penpot)
backing_orgs: []
metrics:
  github_stars: { value: 60626, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/penpot/penpot
    title: Penpot repository
  - id: model
    resource: https://community.penpot.app/t/penpots-upcoming-business-model-for-2025/7328
    title: "Penpot community: Penpot's upcoming business model for 2025"
  - id: render
    resource: https://penpot.app/blog/penpots-new-rendering-system/
    title: "Penpot: Penpot's new rendering system"
  - id: dom
    resource: https://community.penpot.app/t/its-time-for-penpot-to-almost-move-away-from-the-dom/6437
    title: "Penpot: It's time for Penpot to (almost) move away from the DOM"
  - id: xda
    resource: https://www.xda-developers.com/switched-from-figma-to-penpot/
    title: "XDA: I stopped using Figma and switched to Penpot"
  - id: selfhost
    resource: https://penpot.app/blog/how-to-self-host-penpot/
    title: "Penpot: How to self-host Penpot"
  - id: moncloa
    resource: https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/transformacion-digital-y-funcion-publica/paginas/2026/170726-inversion-interfaces-codigo-abierto.aspx
    title: "La Moncloa (Spanish government): Transformación Digital invierte 2 millones de euros en Penpot (2026-07-17)"
  - id: sett
    resource: https://sett.gob.es/la-sett-invierte-2-millones-de-euros-en-la-herramienta-espanola-penpot-para-el-diseno-de-webs-y-apps/
    title: "SETT: La SETT invierte 2 millones de euros en Penpot (July 2026)"
  - id: muy-penpot
    resource: https://www.muycomputerpro.com/2026/07/17/gobierno-invierte-kaleidos-empresa-creadora-penpot
    title: "MuyComputerPRO: El Gobierno invierte 1,92 millones en Kaleidos (2026-07-17)"
  - id: cnbc-2022
    resource: https://www.cnbc.com/2022/09/28/penpot-an-open-source-rival-to-figma-raises-8-million.html
    title: "CNBC: Penpot raises $8 million (2022-09-28)"
  - id: smashing-mcp
    resource: https://www.smashingmagazine.com/2026/01/penpot-experimenting-mcp-servers-ai-powered-design-workflows/
    title: "Smashing Magazine: Penpot is experimenting with MCP servers for AI-powered design workflows (Jan 2026)"
  - id: gh-releases
    resource: https://github.com/penpot/penpot/releases
    title: "Penpot GitHub releases (2.16.0 2026-06-11; 2.17.0 2026-07-22; 2.18.0 2026-09-23)"
---
# Summary
Penpot is the leading open-source Figma alternative (~60.6k stars, Oct 2026)[^gh]. In Dec 2024 it announced its 2025 "Open Nitrate" model: everything currently free stays free for individuals, small teams, NGOs and education, while organizations pay for a separate governance product (admin controls, SSO, usage restrictions) — "organizations should pay when they want to govern how the tool is used"; prior funding had covered ~three years and the company targeted self-sustainability from 2025[^model]. Engineering pivoted to a new non-DOM rendering engine (announced 2025, detailed Nov 2025)[^dom][^render]. Adoption stories (e.g., XDA's switch from Figma) trended in Nov 2025[^xda]. In July 2026 Kaleidos raised a €6.9M round that included €1.92M from SETT, the Spanish state technology investor, framed as a European sovereignty bet against Figma. It was the company's first disclosed raise since an $8M Series A in Sept 2022.[^moncloa][^sett][^muy-penpot][^cnbc-2022] On the product side, Penpot made an MCP server for AI agents its 2026 focus: an open beta in Feb, then standard in 2.15/2.16. Releases kept a monthly cadence through 2.18 (Sept 23, 2026).[^smashing-mcp][^gh-releases] Verdict: OSS growing; business growing (fresh public and private capital, though no revenue figures).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-13 | "Open Nitrate" business model announced[^model] | Business | + |
| W24 | 2025-09-03 | Plan to move rendering away from the DOM[^dom] | OSS | + |
| W12 | 2025-11-19 | New rendering system detailed[^render] | OSS | + |
| W12 | 2025-11-25 | Figma-to-Penpot switching stories trend[^xda] | OSS | + |
| W9 | 2026-01-14 | Self-hosting guide push[^selfhost] | OSS | + |
| W9 | 2026-01/02 | MCP server experiments and open beta for AI-agent design workflows[^smashing-mcp] | OSS | + |
| W6 | 2026-06-11 | Penpot 2.16.0 (WebGL renderer beta; MCP becomes standard)[^gh-releases] | OSS | + |
| W3 | 2026-07-17 | €6.9M round incl. €1.92M from Spain's SETT[^moncloa][^sett][^muy-penpot] | Business | + |
| W3 | 2026-09-23 | Penpot 2.18.0 (new Enterprise tier)[^gh-releases] | OSS | + |

# OSS successes
- Star growth and open standards (SVG/CSS) positioning[^gh].
# OSS failures / risks
- Performance gap with Figma drove a risky renderer rewrite[^render].
# Business successes
- Ethically framed monetization that avoids feature paywalls[^model].
- €6.9M raise with Spanish state participation (Jul 2026)[^moncloa][^muy-penpot].
# Business failures / risks
- Self-sustainability target from 2025 not met publicly; it needed new capital in 2026 and still competes with a well-funded incumbent.[^model][^moncloa]

# By window
## W3
- €6.9M round with SETT (Jul 17, 2026); 2.17–2.18 releases[^moncloa][^gh-releases].
## W6
- 2.16 with WebGL renderer beta (Jun 2026)[^gh-releases].
## W9
- Self-hosting push; MCP beta[^selfhost][^smashing-mcp].
## W12
- Renderer; adoption buzz[^render][^xda].
## W24
- Business model; renderer plan[^model][^dom].

# Lessons
- "Charge for control, not features" is an emerging alternative to classic open-core.

# Related
- [Kaleidos raises €6.9M with Spanish state investor](/events/2026-07-penpot-raises-6-9m-spanish-state.md)
- [Blender](/projects/end-user-apps/blender.md)

[^gh]: https://github.com/penpot/penpot
[^model]: https://community.penpot.app/t/penpots-upcoming-business-model-for-2025/7328
[^render]: https://penpot.app/blog/penpots-new-rendering-system/
[^dom]: https://community.penpot.app/t/its-time-for-penpot-to-almost-move-away-from-the-dom/6437
[^xda]: https://www.xda-developers.com/switched-from-figma-to-penpot/
[^selfhost]: https://penpot.app/blog/how-to-self-host-penpot/
[^moncloa]: https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/transformacion-digital-y-funcion-publica/paginas/2026/170726-inversion-interfaces-codigo-abierto.aspx
[^sett]: https://sett.gob.es/la-sett-invierte-2-millones-de-euros-en-la-herramienta-espanola-penpot-para-el-diseno-de-webs-y-apps/
[^muy-penpot]: https://www.muycomputerpro.com/2026/07/17/gobierno-invierte-kaleidos-empresa-creadora-penpot
[^cnbc-2022]: https://www.cnbc.com/2022/09/28/penpot-an-open-source-rival-to-figma-raises-8-million.html
[^smashing-mcp]: https://www.smashingmagazine.com/2026/01/penpot-experimenting-mcp-servers-ai-powered-design-workflows/
[^gh-releases]: https://github.com/penpot/penpot/releases
