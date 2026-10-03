---
type: Event
title: WP Engine sues Automattic and Matt Mullenweg
description: "After Mullenweg's WordCamp attack and WordPress.org's ban, WP Engine filed suit on Oct 2, 2024; a preliminary injunction followed in Dec 2024 and in Sept 2026 its antitrust claims were revived and Automattic was held not to own the WordPress marks; trial is set for Oct 2027."
event_kind: lawsuit
date: 2024-10-02
window: W24
impact: negative
projects: [projects/licensing-forks/wordpress]
organizations: [organizations/automattic, organizations/wp-engine]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-lawsuit
    resource: https://techcrunch.com/2024/10/02/wp-engine-sues-automattic-and-wordpress-co-founder-matt-mullenweg
    title: "TechCrunch: WP Engine sues Automattic and WordPress co-founder Matt Mullenweg (2024-10-02)"
  - id: tc-explainer
    resource: https://techcrunch.com/2025/01/12/wordpress-vs-wp-engine-drama-explained/
    title: "TechCrunch: The WordPress vs. WP Engine drama, explained"
  - id: lwn-injunction
    resource: https://lwn.net/Articles/1001783/
    title: "LWN: WP Engine granted preliminary injunction in WordPress case (2024-12)"
  - id: wht-tm-ruling
    resource: https://webhosting.today/2026/09/29/automattic-is-not-an-owner-of-the-wordpress-marks-it-asserted-in-court-a-judge-rules/
    title: "webhosting.today: Automattic is not an owner of the WordPress marks it asserted in court, judge rules (2026-09-29)"
  - id: thebuild-oct
    resource: https://thebuild.com/blog/oss-ip-law-briefing-friday-october-2-2026/
    title: "The Build: OSS IP-law briefing, 2026-10-02"
  - id: court-pi
    resource: https://www.courtlistener.com/docket/69221176/64/wpengine-inc-v-automattic-inc/
    title: "Order on Motion for Preliminary Injunction (2024-12-10)"
  - id: sej-antitrust
    resource: https://www.searchenginejournal.com/automattic-matt-mullenweg-fail-to-dismiss-wp-engine-antitrust-claims/591210/
    title: "SEJ: Automattic & Mullenweg fail to dismiss WP Engine antitrust claims (2026-09-28)"
---

# What happened
Mullenweg attacked WP Engine at WordCamp US in Sept 2024, and WordPress.org then blocked WP Engine's access to plugin and theme updates on Sept 25. Mullenweg had demanded 8% of WP Engine's monthly gross revenue as a trademark royalty. WP Engine sued Automattic and Mullenweg in California federal court on Oct 2, 2024, alleging extortion and abuse of power.[^tc-lawsuit][^tc-explainer] On Dec 10, 2024 Judge Araceli Martínez-Olguín granted a preliminary injunction ordering Automattic to restore WP Engine's access within 72 hours.[^court-pi][^lwn-injunction]

# Why it matters
It is the first major court test of whether the person controlling an open-source project's infrastructure and trademark can use them against a commercial competitor.

# Outcome so far
In a ruling dated Sept 24, 2026 (reported Sept 28–29), the judge revived all four antitrust claims (monopolization, attempted monopolization and two tying claims), reversing her own dismissal of a year earlier. She dismissed WP Engine's Computer Fraud and Abuse Act extortion claim, and held that Automattic and Mullenweg cannot assert WordPress trademark claims in their own right, because the WordPress Foundation owns the marks; Automattic's other counterclaims survive.[^sej-antitrust][^wht-tm-ruling] A sanctions hearing over allegedly destroyed messages was set for Oct 7, 2026, and a 10-day jury trial for Oct 19, 2027.[^thebuild-oct] (Corrected in pass 2: ruling date Sept 28 → Sept 24; "Automattic's trademark counterclaims also survive" → Automattic lacks standing on the marks.)

# Related
- [WordPress](/projects/licensing-forks/wordpress.md), [Automattic](/organizations/automattic.md), [WP Engine](/organizations/wp-engine.md)
- [ACF → Secure Custom Fields](/events/2024-10-acf-secure-custom-fields-fork.md)

[^tc-lawsuit]: TechCrunch — https://techcrunch.com/2024/10/02/wp-engine-sues-automattic-and-wordpress-co-founder-matt-mullenweg
[^tc-explainer]: TechCrunch — https://techcrunch.com/2025/01/12/wordpress-vs-wp-engine-drama-explained/
[^lwn-injunction]: LWN — https://lwn.net/Articles/1001783/
[^wht-tm-ruling]: webhosting.today — https://webhosting.today/2026/09/29/automattic-is-not-an-owner-of-the-wordpress-marks-it-asserted-in-court-a-judge-rules/
[^thebuild-oct]: The Build — https://thebuild.com/blog/oss-ip-law-briefing-friday-october-2-2026/
[^court-pi]: CourtListener — https://www.courtlistener.com/docket/69221176/64/wpengine-inc-v-automattic-inc/
[^sej-antitrust]: SEJ — https://www.searchenginejournal.com/automattic-matt-mullenweg-fail-to-dismiss-wp-engine-antitrust-claims/591210/
