---
type: Organization
title: Element
description: "UK company (Element Creations Ltd) that builds the main Matrix implementations (Synapse, Element); pivoted to government/sovereign deployments and proprietary 'Synapse Pro', while the Matrix.org Foundation it once fully funded struggled with deficits."
resource: https://element.io
tags: [commercial-open-source, messaging, matrix, government, digital-sovereignty]
org_kind: coss-startup
hq: London, UK
funding: { total_usd: "undisclosed aggregate (incl. $30M Series B 2021)", last_round: "Series B $30M (Protocol Labs, Metaplanet lead)", last_round_date: 2021-07-27, valuation_usd: "undisclosed" }
business_verdict: struggling
projects: [projects/end-user-apps/matrix-element]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: synapse-pro
    resource: https://element.io/blog/synapse-pro-slashes-costs-for-running-nation-scale-matrix-deployments/
    title: "Element: Synapse Pro"
  - id: gov
    resource: https://element.io/blog/in-an-increasingly-volatile-world-governments-turn-to-element-and-matrix/
    title: "Element: In an increasingly volatile world, governments turn to Element and Matrix"
  - id: reg
    resource: https://www.theregister.com/2026/02/09/matrix_element_secure_chat/
    title: "The Register: Matrix messaging gaining ground in government IT"
    author: org:the-register
  - id: crossroads
    resource: https://matrix.org/blog/2025/02/crossroads/
    title: "Matrix.org Foundation at a crossroads"
  - id: europe
    resource: https://element.io/matrix-in-europe
    title: "Element: Public sector Matrix deployments in Europe"
  - id: tc-element-b
    resource: https://techcrunch.com/2021/07/27/element-a-messaging-app-built-on-the-decentralized-matrix-protocol-raises-30m/
    title: "TechCrunch: Element raises $30M (2021-07-27)"
    author: org:techcrunch
---
# Summary
Element relicensed its Matrix projects to AGPL in late 2023 and since then has focused on government buyers: Synapse Pro for nation-scale deployments (Dec 2024)[^synapse-pro], positioning amid geopolitical volatility[^gov], and a public map of European public-sector deployments (2026)[^europe]. The Register reported ~35 countries in talks by Feb 2026[^reg]. The Matrix.org Foundation, once entirely Element-funded, reported a 2024 deficit and threatened bridge shutdowns in 2025[^crossroads]. Element's last disclosed funding was a $30M Series B in July 2021, led by Protocol Labs and Jaan Tallinn's Metaplanet[^tc-element-b]; no later rounds or layoff reports were found, and its finances are not public. Verdict: struggling-to-stable (strong demand, thin public finances).

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2024-12-10 | Synapse Pro launched[^synapse-pro] |
| W24 | 2024-12-19 | Government-focused positioning[^gov] |
| W24 | 2025-02-20 | Matrix Foundation funding crisis[^crossroads] |
| W9 | 2026-02-09 | Government adoption momentum (~35 countries)[^reg] |
| W6 | 2026-04-22 | European deployments map[^europe] |

# Monetization model
Enterprise/government licenses and support (Element Server Suite, Synapse Pro), hosted services.

# Successes
- Sovereignty-driven public-sector pipeline[^reg].
# Failures / risks
- Proprietary scaling server sits uneasily with OSS community; foundation underfunding[^crossroads].

# Related
- [Matrix/Element](/projects/end-user-apps/matrix-element.md), [ICC openDesk event](/events/2025-10-icc-drops-microsoft-for-opendesk.md)

[^synapse-pro]: https://element.io/blog/synapse-pro-slashes-costs-for-running-nation-scale-matrix-deployments/
[^gov]: https://element.io/blog/in-an-increasingly-volatile-world-governments-turn-to-element-and-matrix/
[^reg]: https://www.theregister.com/2026/02/09/matrix_element_secure_chat/
[^crossroads]: https://matrix.org/blog/2025/02/crossroads/
[^europe]: https://element.io/matrix-in-europe
[^tc-element-b]: TechCrunch, 2021-07-27.
