---
type: Organization
title: WP Engine
description: "Silver Lake-backed managed WordPress host targeted by Automattic/Mullenweg in Sept 2024; won a preliminary injunction (Dec 2024) and in Sept 2026 its antitrust claims survived dismissal, making it the main legal check on WordPress.org's single-person control."
resource: https://wpengine.com
tags: [wordpress, hosting, lawsuit, private-equity]
org_kind: coss-startup
hq: Austin, USA
funding: { total_usd: "undisclosed (PE-owned)", last_round: "Silver Lake $250M investment (primary + secondary)", last_round_date: 2018-01-04, valuation_usd: "undisclosed" }
business_verdict: stable
projects: [projects/licensing-forks/wordpress]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-wpengine
    resource: https://en.wikipedia.org/wiki/WP_Engine
    title: "Wikipedia: WP Engine"
  - id: court-pi
    resource: https://www.courtlistener.com/docket/69221176/64/wpengine-inc-v-automattic-inc/
    title: "WPEngine v. Automattic — Order on Motion for Preliminary Injunction (2024-12-10)"
  - id: sej-antitrust
    resource: https://www.searchenginejournal.com/automattic-matt-mullenweg-fail-to-dismiss-wp-engine-antitrust-claims/591210/
    title: "SEJ: Automattic & Mullenweg fail to dismiss WP Engine antitrust claims (2026-09-28)"
  - id: wpe-wpackagist
    resource: https://wpengine.com/blog/wp-engine-acquires-wpackagist/
    title: "WP Engine acquires WPackagist (2026-03)"
  - id: torque-wpe
    resource: https://torquemag.io/2018/01/wp-engine-gets-250-million-investment-silver-lake/
    title: "Torque: WP Engine gets $250 million investment from Silver Lake (2018-01-04)"
  - id: wht-tm-ruling
    resource: https://webhosting.today/2026/09/29/automattic-is-not-an-owner-of-the-wordpress-marks-it-asserted-in-court-a-judge-rules/
    title: "webhosting.today: Automattic is not an owner of the WordPress marks it asserted in court, judge rules (2026-09-29)"
---

# Summary
WP Engine is a large commercial WordPress host. Its majority owner is Silver Lake, which invested $250M on 2018-01-04 (partly buying out existing shareholders); WP Engine then had ~$100M revenue and 75,000 customers.[^torque-wpe] Automattic accused it in Sept 2024 of "meager contributions" and of misusing the WordPress trademark, and it says Automattic demanded 8% of revenue as a trademark fee.[^wiki-wpengine] WP Engine sued on Oct 2, 2024 and won a preliminary injunction on Dec 10, 2024 restoring its WordPress.org access.[^court-pi] In March 2026 it acquired WPackagist, the Composer mirror of WordPress.org plugins, which gives it more independent distribution infrastructure.[^wpe-wpackagist] In a ruling dated 2026-09-24 (reported 2026-09-28/29), Judge Araceli Martínez-Olguín revived all four of WP Engine's antitrust claims and held that Automattic does not own the WordPress marks, which belong to the WordPress Foundation, so Automattic's trademark claims cannot proceed in its own right; a jury trial is set for 2027-10-19 ([event](/events/2026-09-wp-engine-antitrust-revived-trademark-ruling.md)).[^sej-antitrust][^wht-tm-ruling] (Corrected in pass 2: "antitrust claims survived dismissal (09-28)" → ruling dated 09-24 that also covered the trademark question.) Only its computer-extortion claim was dismissed.[^sej-antitrust]

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2024-10-02 | Sues Automattic and Mullenweg[^wiki-wpengine] | ± |
| W24 | 2024-12-10 | Wins preliminary injunction[^court-pi] | + |
| W9 | 2026-03 | Acquires WPackagist[^wpe-wpackagist] | + |
| W3 | 2026-09-24 | Antitrust claims revived; Automattic ruled not owner of WordPress marks; trial set for 2027-10-19[^sej-antitrust][^wht-tm-ruling] | + |

# Monetization model
Managed WordPress hosting and plugins (ACF Pro, etc.).

# Successes
- Legal wins so far and continued operation despite being blocked from WordPress.org.[^court-pi][^sej-antitrust]

# Failures / risks
- Lost control of the ACF plugin slug on WordPress.org (Secure Custom Fields), although Automattic's trademark counterclaims were curtailed by the Sept 2026 ruling.[^wiki-wpengine][^wht-tm-ruling]

# Related
- [WordPress](/projects/licensing-forks/wordpress.md), [Automattic](/organizations/automattic.md)
- [WP Engine sues Automattic](/events/2024-10-wp-engine-sues-automattic.md)

[^wiki-wpengine]: Wikipedia — https://en.wikipedia.org/wiki/WP_Engine
[^court-pi]: CourtListener — https://www.courtlistener.com/docket/69221176/64/wpengine-inc-v-automattic-inc/
[^sej-antitrust]: SEJ — https://www.searchenginejournal.com/automattic-matt-mullenweg-fail-to-dismiss-wp-engine-antitrust-claims/591210/
[^wpe-wpackagist]: WP Engine blog — https://wpengine.com/blog/wp-engine-acquires-wpackagist/
[^torque-wpe]: Torque, 2018-01-04.
[^wht-tm-ruling]: webhosting.today, 2026-09-29.
