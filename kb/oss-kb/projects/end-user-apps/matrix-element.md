---
type: OSS Project
title: Matrix / Element
description: "Federated secure-messaging protocol and its main commercial implementer Element; government adoption broadened (~35 countries in talks, Bundeswehr, France, ICC via openDesk) but the Matrix.org Foundation ran a 2024 deficit and threatened to shut bridges in 2025."
resource: https://github.com/element-hq/synapse
tags: [messaging, federation, agpl-3.0, foundation-hosted, government, digital-sovereignty]
domain: end-user-apps
license: AGPL-3.0
license_history: ["Apache-2.0 (to 2023)", "AGPL-3.0 for Element-maintained Synapse/Element (Nov 2023-)"]
governance: foundation
steward: The Matrix.org Foundation (protocol); Element (main implementations)
backing_orgs: [organizations/element]
metrics:
  foundation_revenue_2024_usd: { value: 561000, as_of: 2025-02-20 }
  foundation_expenses_2024_usd: { value: 1200000, as_of: 2025-02-20 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: up, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: crossroads
    resource: https://matrix.org/blog/2025/02/crossroads/
    title: "Matrix.org: The Matrix.org Foundation is at a crossroads"
  - id: reg
    resource: https://www.theregister.com/2026/02/09/matrix_element_secure_chat/
    title: "The Register: Matrix messaging gaining ground in government IT"
    author: org:the-register
  - id: synapse-pro
    resource: https://element.io/blog/synapse-pro-slashes-costs-for-running-nation-scale-matrix-deployments/
    title: "Element: Synapse Pro for nation-scale deployments"
  - id: fud
    resource: https://element.io/blog/addressing-fear-uncertainty-and-doubt-thrown-at-element-and-matrix/
    title: "Element: Addressing FUD thrown at Element and Matrix"
  - id: giveup
    resource: https://xn--gckvb8fzb.com/giving-up-on-element-and-matrixorg/
    title: "Giving up on Element and Matrix.org (user critique)"
  - id: europe
    resource: https://element.io/matrix-in-europe
    title: "Element: Public sector Matrix deployments in Europe"
  - id: icc
    resource: https://www.theregister.com/2025/10/31/international_criminal_court_ditches_office/
    title: "The Register: International Criminal Court dumps Microsoft Office"
    author: org:the-register
  - id: annual-2025
    resource: https://matrix.org/blog/2026/03/annual-report/
    title: "Matrix.org: The first Public Annual Report is out! (FY Nov 2024–Oct 2025; published 2026-03-27)"
  - id: gb-2026h1
    resource: https://matrix.org/blog/2026/04/governing-board-report-2026h1/
    title: "Matrix.org: Governing Board report, April 2026 (2026-04-24)"
  - id: el-451
    resource: https://github.com/element-hq/element-web/issues/33163
    title: "element-web issue #33163: app.element.io yields 451 Unavailable For Legal Reasons (2026-04-15, UK)"
  - id: hn-451
    resource: https://news.ycombinator.com/item?id=47786108
    title: "Hacker News: Element Web and matrix.to unavailable for legal reasons (Apr 2026)"
  - id: el-series-b
    resource: https://element.io/blog/element-raises-30m-as-matrix-explodes/
    title: "Element: Element raises $30M as Matrix explodes (2021 Series B — last disclosed round)"
  - id: heise-hodgson
    resource: https://www.heise.de/en/background/Interview-Element-CEO-on-the-matrix-protocol-and-digital-sovereignty-10333426.html
    title: "heise: Interview — Element CEO on the Matrix protocol and digital sovereignty"
---
# Summary
Matrix is the sovereignty-era standard for government chat: France (Tchap), Germany's Bundeswehr/BWI, Swiss Post, Austrian healthcare, Ukraine and the UN use it, with ~35 countries in talks as of Feb 2026[^reg][^europe]; the ICC's openDesk switch (Oct 2025) includes Element chat[^icc][^reg]. Element launched a proprietary "Synapse Pro" for nation-scale deployments (Dec 2024)[^synapse-pro]. But the money remains thin: the Matrix.org Foundation had $561K revenue vs $1.2M expenses in 2024, sold $283K of crypto donations, and in Feb 2025 said it would shut down all its remaining bridges unless it raised $100K by 31 March[^crossroads]. The Foundation's first public annual report (Mar 2026, FY to Oct 2025) showed revenue up 38% and the loss cut from 50% to 34% of costs. Automattic's Gold membership alone was half of revenue, and the Foundation still relies heavily on Element's in-kind contributions.[^annual-2025] The board said in April 2026 that it "still can't afford the bare minimum requirements".[^gb-2026h1] On Apr 15, 2026 app.element.io and matrix.to briefly returned HTTP 451 "Unavailable For Legal Reasons" to UK users. No official cause was published in the issue; Hacker News commenters pointed at Cloudflare.[^el-451][^hn-451] User-experience critiques persisted ("Giving up on Element and Matrix.org", July 2025)[^giveup]. Element itself has disclosed no funding since its $30M Series B in 2021 and publishes no revenue figures.[^el-series-b] Verdict: OSS stable; business struggling (Foundation) / unverified (Element).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-10 | Element Synapse Pro (proprietary scaling server)[^synapse-pro] | Business | mixed |
| W24 | 2025-02-20 | Foundation "crossroads": 2024 deficit; bridges at risk without $100K[^crossroads] | Business | − |
| W24 | 2025-06-20 | Element blog rebuts "FUD" about Element/Matrix[^fud] | Business | − |
| W24 | 2025-07-19 | Prominent "giving up on Element" critique[^giveup] | OSS | − |
| W12 | 2025-10-31 | ICC adopts openDesk (includes Element)[^icc] | Business | + |
| W9 | 2026-03-27 | Foundation's first public annual report: revenue +38%, loss down to 34% of costs; Automattic = half of revenue[^annual-2025] | Business | ± |
| W9 | 2026-02-09 | Register: ~35 countries in talks; growing government IT adoption[^reg] | Business | + |
| W6 | 2026-04-15 | app.element.io / matrix.to return HTTP 451 to UK users (brief; cause not officially explained)[^el-451][^hn-451] | OSS | − |
| W6 | 2026-04-22 | Element publishes public-sector Matrix deployments map[^europe] | Business | + |
| W6 | 2026-04-24 | Governing Board: Foundation "still can't afford the bare minimum"[^gb-2026h1] | Business | − |

# OSS successes
- Protocol-level standardization (Matrix 2.0) and government federation at scale[^reg].
# OSS failures / risks
- AGPL relicensing + proprietary Synapse Pro concentrates power in Element[^synapse-pro]; UX lag.
# Business successes
- Government demand driven by sovereignty concerns; Element sells Element Server Suite Pro subscriptions to governments directly or through integrators[^reg][^heise-hodgson].
# Business failures / risks
- Foundation deficit; reliance on 11 funding members for half of budget[^crossroads]. In FY2025 a single member (Automattic) supplied half of revenue, a concentration risk given Automattic's own turmoil.[^annual-2025]

# By window
## W3
- No notable events found.
## W6
- European deployment map; 451 outage for UK users; board warns on resources[^europe][^el-451][^gb-2026h1].
## W9
- Government adoption story; first public annual report[^reg][^annual-2025].
## W12
- ICC/openDesk[^icc].
## W24
- Foundation funding crisis; Synapse Pro[^crossroads][^synapse-pro].

# Lessons
- Public-sector adoption doesn't automatically fund upstream protocol stewardship; governments must fund foundations directly.

# Related
- [Element](/organizations/element.md), [ICC drops Microsoft](/events/2025-10-icc-drops-microsoft-for-opendesk.md), [Signal](/projects/end-user-apps/signal.md), [Zulip](/projects/end-user-apps/zulip.md)

[^crossroads]: https://matrix.org/blog/2025/02/crossroads/
[^annual-2025]: https://matrix.org/blog/2026/03/annual-report/
[^gb-2026h1]: https://matrix.org/blog/2026/04/governing-board-report-2026h1/
[^el-451]: https://github.com/element-hq/element-web/issues/33163
[^hn-451]: https://news.ycombinator.com/item?id=47786108
[^el-series-b]: https://element.io/blog/element-raises-30m-as-matrix-explodes/
[^heise-hodgson]: https://www.heise.de/en/background/Interview-Element-CEO-on-the-matrix-protocol-and-digital-sovereignty-10333426.html
[^reg]: https://www.theregister.com/2026/02/09/matrix_element_secure_chat/
[^synapse-pro]: https://element.io/blog/synapse-pro-slashes-costs-for-running-nation-scale-matrix-deployments/
[^fud]: https://element.io/blog/addressing-fear-uncertainty-and-doubt-thrown-at-element-and-matrix/
[^giveup]: https://xn--gckvb8fzb.com/giving-up-on-element-and-matrixorg/
[^europe]: https://element.io/matrix-in-europe
[^icc]: https://www.theregister.com/2025/10/31/international_criminal_court_ditches_office/
