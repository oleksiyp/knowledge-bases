---
type: Market Study
title: "Open source economics studies"
description: "Key macro studies on the economic value of and investment in open source: Harvard 'Value of OSS' ($4.15B supply-side, $8.8T demand-side), the 2024 Open Source Software Funding Report ($7.7B/yr, 86% labor), and LF/COSSA/Serena State of Commercial Open Source 2025 (COSS outperforms closed source)."
resource: https://www.linuxfoundation.org/research/2025-state-of-commercial-open-source
tags: [oss-economics, research, linux-foundation, harvard, market-study]
domain: coss-market
momentum_by_window: { W3: n/a, W6: up, W9: n/a, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hbs-value-oss
    resource: https://www.hbs.edu/faculty/Pages/item.aspx?num=65230
    title: "Hoffmann, Nagle, Zhou: The Value of Open Source Software (HBS Working Paper 24-038, 2024)"
    author: org:harvard-business-school
  - id: oss-funding-2024
    resource: https://opensourcefundingsurvey2024.com/
    title: "2024 Open Source Software Funding Report (Boysel, Nagle, Carter et al.; Harvard/LF/GitHub/Georgia Tech; 2024-11-19)"
  - id: lf-coss-2025
    resource: https://www.linuxfoundation.org/press/linux-foundation-cossa-and-serena-report-shows-venture-investment-in-open-source-outperforms-proprietary-counterparts-and-benefits-communities
    title: "LF/COSSA/Serena press release (2025-08-25)"
  - id: lf-coss-report
    resource: https://www.linuxfoundation.org/research/2025-state-of-commercial-open-source
    title: "The State of Commercial Open Source 2025 (DOI 10.70828/REYQ7474)"
  - id: lf-eu-2025
    resource: https://www.linuxfoundation.org/research/world-of-open-source-eu-2025
    title: "LF Research: Open Source as Europe's Strategic Advantage (2025)"
  - id: tpp-eu
    resource: https://www.techpolicy.press/how-the-eus-tech-sovereignty-package-finally-puts-open-source-to-the-test/
    title: "Tech Policy Press: EU Tech Sovereignty Package (EU spends €264B/yr on IT)"
---

# Summary

Three studies anchor the economics debate of 2024–26. **Harvard's "Value of Open Source Software"** (Hoffmann, Nagle, Zhou, 2024) estimated that recreating widely used OSS once would cost ~**$4.15B** (supply side) but that the **demand-side value is ~$8.8 trillion** — firms would spend ~3.5x more on software without OSS[^hbs-value-oss]. The **2024 Open Source Software Funding Report** (Harvard/LF/GitHub/Georgia Tech, Nov 2024) estimated organizations invest **$7.7B/yr** in OSS (range $2.9–10.1B), **86% as employee labor** and only 14% as cash[^oss-funding-2024]. The **State of Commercial Open Source 2025** (LF/COSSA/Serena, Aug 2025) found COSS startups raised $26.4B in 2024 and earn 7x higher IPO and 14x higher M&A valuations than closed-source peers, with funding raising contributor counts 27% and downloads 7x[^lf-coss-2025][^lf-coss-report]. The gap between $8.8T of value and ~$7.7B of direct investment is the core argument behind 2026 public-funding initiatives such as the EU's €2B open source envelope[^tpp-eu].

# Key numbers

| Study | Date | Headline numbers | Source |
|---|---|---|---|
| Value of OSS (HBS WP 24-038) | 2024 | $4.15B supply-side; $8.8T demand-side; 3.5x software spend without OSS; value highly concentrated in few developers | [^hbs-value-oss] |
| OSS Funding Report | 2024-11-19 | $7.7B/yr org investment (range $2.9–10.1B); 86% labor / 14% cash; 501 responses | [^oss-funding-2024] |
| State of COSS 2025 | 2025-08-25 | $26.4B COSS funding 2024; ~$9B/yr avg 2019–24; 7x IPO / 14x M&A valuation premium; 12% exit rate; 800+ companies; US 65%, EU 25% | [^lf-coss-2025] |
| Open Source as Europe's Strategic Advantage | 2025 | many firms use OSS without OSPO/strategy; OSS seen as sovereignty lever | [^lf-eu-2025] |

Note: the HBS page returned HTTP 403 to automated fetch on 2026-10-03; figures are the widely cited working-paper numbers.

# By window
## W3
- No notable new macro study found.
## W6
- EU open source strategy cites €264B/yr EU IT spend to justify €2B OSS envelope[^tpp-eu].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- OSS Funding Report (Nov 2024)[^oss-funding-2024]; State of COSS 2025 (Aug 2025)[^lf-coss-2025].

# Lessons
- Value captured by users dwarfs money reinvested — the "tragedy of the commons" is quantified.
- Venture money is a minor share of OSS investment overall; corporate labor is the real funding system.

# Related
- [COSS funding](/projects/coss-market/coss-funding-2024-2026.md), [European sovereign tech](/projects/coss-market/european-sovereign-tech-oss.md), [OSPO trends](/projects/coss-market/ospo-trends.md)

[^hbs-value-oss]: Hoffmann, Nagle & Zhou, HBS WP 24-038.
[^oss-funding-2024]: OSS Funding Report, 2024-11-19.
[^lf-coss-2025]: LF press release, 2025-08-25.
[^lf-coss-report]: LF Research report page.
[^lf-eu-2025]: LF Research, 2025.
[^tpp-eu]: Tech Policy Press, 2026-06-03.
