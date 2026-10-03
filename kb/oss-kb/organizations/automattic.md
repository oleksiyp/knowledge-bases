---
type: Organization
title: Automattic
description: "Parent of WordPress.com, WooCommerce and Tumblr, controlled by Matt Mullenweg; its 2024 war on WP Engine led to an injunction, antitrust litigation, a 16% layoff (Apr 2025) and a failed September 2026 board attempt to oust Mullenweg, after which he replaced the board."
resource: https://automattic.com
tags: [commercial-open-source, wordpress, governance, lawsuit]
org_kind: coss-startup
hq: San Francisco, USA (distributed)
funding: { total_usd: "~$1B+ across rounds (not company-confirmed)", last_round: "Series E $288M (Alta Park Capital, BlackRock lead)", last_round_date: 2021-02, valuation_usd: "7.5B (2021); later investor markdowns reported, unconfirmed" }
business_verdict: struggling
projects: [projects/licensing-forks/wordpress, projects/licensing-forks/fair-package-manager]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-wpengine
    resource: https://en.wikipedia.org/wiki/WP_Engine
    title: "Wikipedia: WP Engine (dispute timeline)"
  - id: tc-layoffs
    resource: https://techcrunch.com/2025/04/02/wordpress-maker-automattic-lays-off-16-of-staff/
    title: "TechCrunch: Automattic lays off 16% of staff (2025-04-02)"
  - id: tc-leave
    resource: https://techcrunch.com/2026/09/09/automattics-board-forces-ceo-matt-mullenweg-into-leave-of-absence/
    title: "TechCrunch: Automattic's board forces Mullenweg into leave of absence (2026-09-09)"
  - id: tc-return
    resource: https://techcrunch.com/2026/09/12/automattic-confirms-mullenweg-has-returned-as-ceo-after-attempted-ouster-by-board/
    title: "TechCrunch: Automattic confirms Mullenweg has returned as CEO (2026-09-12)"
  - id: tc-severance
    resource: https://techcrunch.com/2026/09/16/automattics-interim-ceo-and-legal-chief-signed-reciprocal-severance-deals-during-mullenwegs-brief-ouster/
    title: "TechCrunch: Automattic's interim CEO and legal chief signed reciprocal severance deals (2026-09-16)"
  - id: techzine-board
    resource: https://www.techzine.eu/news/privacy-compliance/144598/ceo-mullenweg-replaces-automattic-board-after-failed-suspension-attempt/
    title: "Techzine: Mullenweg replaces Automattic board (2026-09-28)"
  - id: sej-antitrust
    resource: https://www.searchenginejournal.com/automattic-matt-mullenweg-fail-to-dismiss-wp-engine-antitrust-claims/591210/
    title: "SEJ: Automattic & Mullenweg fail to dismiss WP Engine antitrust claims (2026-09-28)"
  - id: wp-wc11
    resource: https://developer.woocommerce.com/2026/08/04/woocommerce-11-0/
    title: "WooCommerce 11.0 release notes (2026-08-04)"
  - id: wp-wc111
    resource: https://developer.woocommerce.com/2026/09/03/wc-11-1-release-notes/
    title: "WooCommerce 11.1.0 release notes (2026-09-03)"
  - id: wiki-automattic
    resource: https://en.wikipedia.org/wiki/Automattic
    title: "Wikipedia: Automattic (funding history; consistent with 2021 press coverage)"
  - id: wht-tm-ruling
    resource: https://webhosting.today/2026/09/29/automattic-is-not-an-owner-of-the-wordpress-marks-it-asserted-in-court-a-judge-rules/
    title: "webhosting.today: Automattic is not an owner of the WordPress marks it asserted in court, judge rules (2026-09-29)"
---

# Summary
Automattic's last priced round was a $288M Series E at $7.5B in Feb 2021, led by Alta Park Capital and BlackRock (after a $300M Salesforce Ventures-led Series D at $3B in 2019)[^wiki-automattic]. Its last two years were driven by its CEO's conflict with WP Engine. After Mullenweg's Sept 2024 campaign, WP Engine sued on Oct 2, 2024, WordPress.org took over ACF on Oct 12, and a court ordered Automattic to stop blocking WP Engine on Dec 10, 2024.[^wiki-wpengine] Automattic cut 16% of staff (~281) in April 2025.[^tc-layoffs] On Sept 9, 2026 its board put Mullenweg on paid leave and named CFO Mark Davies interim CEO. Mullenweg, who holds about 84% voting control, reversed this within about 33 hours, removed directors (Sue Decker resigned, Ann Dunwoody was removed, Toni Schneider left) and installed a new board that includes author Hugh Howey and two former executives of the defunct app IRL.[^tc-leave][^tc-return][^techzine-board] In a ruling dated 2026-09-24 (reported 2026-09-28/29), Judge Araceli Martínez-Olguín revived all four of WP Engine's antitrust claims and held that Automattic does not own the WordPress marks, which belong to the WordPress Foundation, so Automattic's trademark claims cannot proceed in its own right; a jury trial is set for 2027-10-19 ([event](/events/2026-09-wp-engine-antitrust-revived-trademark-ruling.md)).[^sej-antitrust][^wht-tm-ruling] (Corrected in pass 2: "antitrust claims survived dismissal (09-28)" → ruling dated 09-24 that also covered the trademark question.)

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2024-10-02 | Sued by WP Engine[^wiki-wpengine] | − |
| W24 | 2024-12-10 | Preliminary injunction against Automattic[^wiki-wpengine] | − |
| W24 | 2025-04-02 | 16% layoff (~281)[^tc-layoffs] | − |
| W3 | 2026-09-09→12 | Board ouster attempt fails[^tc-leave][^tc-return] | − |
| W3 | 2026-09-16 | Reciprocal severance deals by interim CEO/legal chief under review[^tc-severance] | − |
| W3 | 2026-09-24 | Court revives WP Engine antitrust claims; Automattic held not to own WordPress marks; trial 2027-10-19[^sej-antitrust][^wht-tm-ruling] | − |
| W3 | 2026-09-25/28 | New board installed[^techzine-board] | − |

# Monetization model
WordPress.com hosting, WooCommerce extensions and payments, Jetpack, Tumblr, and (attempted) trademark licensing fees from hosts.

# Successes
- Mullenweg's control of the company is now uncontested.[^techzine-board]

# Failures / risks
- Governance credibility, executive departures, exposure in antitrust litigation, and WordPress's declining market share.[^sej-antitrust]

# Related
- [WordPress](/projects/licensing-forks/wordpress.md), [WP Engine](/organizations/wp-engine.md)
- [Automattic board ouster attempt](/events/2026-09-automattic-board-ouster-attempt.md)

[^wiki-wpengine]: Wikipedia — https://en.wikipedia.org/wiki/WP_Engine
[^tc-layoffs]: TechCrunch — https://techcrunch.com/2025/04/02/wordpress-maker-automattic-lays-off-16-of-staff/
[^tc-leave]: TechCrunch — https://techcrunch.com/2026/09/09/automattics-board-forces-ceo-matt-mullenweg-into-leave-of-absence/
[^tc-return]: TechCrunch — https://techcrunch.com/2026/09/12/automattic-confirms-mullenweg-has-returned-as-ceo-after-attempted-ouster-by-board/
[^tc-severance]: TechCrunch — https://techcrunch.com/2026/09/16/automattics-interim-ceo-and-legal-chief-signed-reciprocal-severance-deals-during-mullenwegs-brief-ouster/
[^techzine-board]: Techzine — https://www.techzine.eu/news/privacy-compliance/144598/ceo-mullenweg-replaces-automattic-board-after-failed-suspension-attempt/
[^sej-antitrust]: Search Engine Journal — https://www.searchenginejournal.com/automattic-matt-mullenweg-fail-to-dismiss-wp-engine-antitrust-claims/591210/

## Additional notes (web-platforms)
- WooCommerce engineering kept a monthly cadence through the governance turmoil: WooCommerce 11.0 shipped on 4 Aug 2026 and 11.1 on 3 Sept 2026 (30–42% faster REST requests), alongside a "more in core" push and MCP access for AI agents[^wp-wc11][^wp-wc111]. See [WooCommerce](/projects/web-platforms/woocommerce.md).

[^wp-wc11]: https://developer.woocommerce.com/2026/08/04/woocommerce-11-0/
[^wp-wc111]: https://developer.woocommerce.com/2026/09/03/wc-11-1-release-notes/
[^wiki-automattic]: Wikipedia, Automattic.
[^wht-tm-ruling]: webhosting.today, 2026-09-29.
