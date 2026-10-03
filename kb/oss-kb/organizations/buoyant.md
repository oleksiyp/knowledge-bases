---
type: Organization
title: "Buoyant"
description: "Creator and main maintainer of Linkerd; moved stable Linkerd releases into its commercial distribution in Feb 2024 and reported profitability with doubled revenue by Oct 2024, then pushed into MCP/AI traffic and FedRAMP markets."
resource: https://www.buoyant.io
tags: [commercial-open-source, service-mesh, profitable]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "unverified", last_round: "unverified", last_round_date: null, valuation_usd: "unverified" }
business_verdict: stable
projects: [projects/cloud-native/linkerd]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: linkerd-forever
    resource: https://www.buoyant.io/blog/linkerd-forever
    title: "Buoyant: Linkerd Forever"
    author: org:buoyant
  - id: buoyant-news
    resource: https://www.buoyant.io/newsroom
    title: "Buoyant newsroom"
  - id: infoq-mcp
    resource: https://www.infoq.com/news/2025/11/buoyant-linkerd-mcp-support/
    title: "InfoQ: Buoyant announces MCP support for Linkerd"
---

# Summary
Buoyant (CEO William Morgan) is the commercial home of Linkerd. Its Feb 2024 decision to ship stable Linkerd builds only via Buoyant Enterprise for Linkerd was followed, by Oct 23, 2024, by profitability and a doubling of recurring revenue and enterprise customers[^linkerd-forever]. In the window it added MCP support for AI-agent traffic (Nov 2025) and FedRAMP-oriented partnerships (Jan 2026), and shipped Linkerd 2.20 (Jun 2026)[^infoq-mcp][^buoyant-news]. Business verdict: **stable**.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2024-10-23 | Announces profitability; revenue and customers doubled since Feb 2024[^linkerd-forever] |
| W12 | 2025-11-06 | MCP support for Linkerd[^infoq-mcp] |
| W9 | 2026-01 | TestifySec FedRAMP partnership; Carahsoft public-sector channel[^buoyant-news] |

# Monetization model
Paid enterprise distribution (stable builds, FIPS, support)[^linkerd-forever].

# Successes
- Profitability without new VC funding claims[^linkerd-forever].

# Failures / risks
- Community friction over gated stable builds; mesh market consolidating around Istio ambient and Cilium.

# Related
- [Linkerd](/projects/cloud-native/linkerd.md), [Istio](/projects/cloud-native/istio.md)

[^linkerd-forever]: https://www.buoyant.io/blog/linkerd-forever
[^buoyant-news]: https://www.buoyant.io/newsroom
[^infoq-mcp]: https://www.infoq.com/news/2025/11/buoyant-linkerd-mcp-support/
