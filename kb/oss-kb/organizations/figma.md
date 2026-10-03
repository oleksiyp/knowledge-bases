---
type: Organization
title: Figma
description: "Design-platform company (NYSE: FIG since 31 July 2025) that acquired the MIT-licensed Payload CMS team in June 2025 to give Figma Sites a content backend — a design tool becoming a steward of a major open-source web framework."
resource: https://www.figma.com
tags: [design-tools, public-company, acquirer, cms, payload]
org_kind: public-company
hq: San Francisco, USA
funding: { total_usd: "n/a (public)", last_round: "IPO raised ~$1.2B at $33/share", last_round_date: 2025-07-31, valuation_usd: "19.3B implied at IPO pricing" }
business_verdict: growing
projects: [projects/web-platforms/payload]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ipo
    resource: https://www.cnbc.com/2025/07/31/figma-fig-starts-trading-on-nyse-after-ipo.html
    title: "CNBC: Figma more than triples in NYSE debut after selling shares at $33 (2025-07-31)"
  - id: ipo-price
    resource: https://investor.figma.com/news-events/news/news-details/2025/Figma-Announces-Pricing-of-Initial-Public-Offering/default.aspx
    title: "Figma IR: Figma announces pricing of initial public offering"
  - id: payload
    resource: https://github.com/payloadcms/payload/discussions/12843
    title: "GitHub: Payload is joining Figma! (2025-06-17)"
  - id: cmswire
    resource: https://www.cmswire.com/digital-experience/when-cms-meets-ux-design-what-figmas-payload-deal-really-means/
    title: "CMSWire: What Figma's Payload deal really means"
---
# Summary
Figma acquired the Payload team on **17 June 2025** (terms undisclosed) to back Figma Sites with a real CMS, committing to keep Payload MIT and self-hostable[^payload][^cmswire]. Six weeks later it listed on the NYSE (**31 July 2025**, $33/share, ~$1.2B raised), more than tripling on day one[^ipo][^ipo-price]. For OSS, Figma is now the steward of a 45K-star web framework. Verdict: growing.

# Business timeline
| Date | Event |
|---|---|
| 2025-06-17 | Acquires Payload team[^payload] |
| 2025-07-31 | NYSE IPO (FIG)[^ipo] |
| 2026-04-22 | Payload 4.0 beta ships under Figma ownership (see project) |

# Monetization model
Seat-based SaaS for design, prototyping, FigJam, Dev Mode and Sites; Payload remains free OSS (Payload Cloud closed to new projects).

# Successes
- Kept Payload's OSS momentum (releases continued)[^payload].

# Failures / risks
- Payload users depend on Figma's strategic priorities[^cmswire].

# Related
- [Payload](/projects/web-platforms/payload.md), [Figma acquires Payload event](/events/2025-06-figma-acquires-payload.md)

[^ipo]: https://www.cnbc.com/2025/07/31/figma-fig-starts-trading-on-nyse-after-ipo.html
[^ipo-price]: https://investor.figma.com/news-events/news/news-details/2025/Figma-Announces-Pricing-of-Initial-Public-Offering/default.aspx
[^payload]: https://github.com/payloadcms/payload/discussions/12843
[^cmswire]: https://www.cmswire.com/digital-experience/when-cms-meets-ux-design-what-figmas-payload-deal-really-means/
