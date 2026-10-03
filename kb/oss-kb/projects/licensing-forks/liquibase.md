---
type: OSS Project
title: Liquibase
description: "Database schema-migration tool that moved Liquibase Community from Apache-2.0 to the Functional Source License with 5.0 (Sept 30, 2025) and added a CLA; the largest Fair Source convert, criticised for still marketing itself as 'open source', with no significant fork yet."
resource: https://github.com/liquibase/liquibase
tags: [database, devtools, fsl, fair-source, relicensing, cla]
domain: licensing-forks
license: FSL-1.1-ALv2
license_history: ["Apache-2.0 (2006-2025)", "FSL-1.1-ALv2 (from 5.0, 2025-09-30)"]
governance: single-vendor
steward: Liquibase Inc.
backing_orgs: []
metrics:
  github_stars: { value: 5618, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: liquibase-fsl
    resource: https://www.liquibase.com/blog/liquibase-community-for-the-future-fsl
    title: "Liquibase: Liquibase Community for the future (FSL)"
  - id: liquibase-gh
    resource: https://github.com/liquibase/liquibase
    title: Liquibase GitHub repository (releases)
  - id: fontana-issue
    resource: https://github.com/liquibase/liquibase/issues/7374
    title: "GitHub issue #7374: Liquibase continues to advertise itself as 'open source' despite license switch (2025-10-14)"
  - id: fair-companies
    resource: https://fair.io/companies/
    title: "fair.io: Fair Source companies"
  - id: keycloak-issue
    resource: https://github.com/keycloak/keycloak/issues/43391
    title: "Keycloak issue #43391: Liquibase license changing to non-open source license (opened 2025-10-13; still open)"
  - id: fineract-thread
    resource: http://www.mail-archive.com/dev@fineract.apache.org/msg11494.html
    title: "Apache Fineract dev list: Liquibase license moves to FSL (ASF Category X)"
  - id: hn-liquibase
    resource: https://news.ycombinator.com/item?id=45602676
    title: "Hacker News: Liquibase continues to advertise itself as 'open source' despite license switch"
---

# Summary
Liquibase is the most prominent company to adopt Fair Source so far. Starting with Liquibase 5.0 (Sept 30, 2025), Liquibase Community moved from Apache-2.0 to FSL-1.1-ALv2. Each release converts to Apache-2.0 after two years, and contributions now require a one-time CLA. The stated reason was third parties "repackaging" the tool and monetising it without contributing back.[^liquibase-fsl] Internal production use stays free.[^liquibase-fsl] Richard Fontana opened a GitHub issue on Oct 14, 2025 pointing out that Liquibase still marketed itself as "open source"; it drew 343 points on Hacker News.[^fontana-issue][^hn-liquibase] Downstream foundation projects are stuck. The ASF treats FSL as "Category X" (not allowed in releases), so Apache projects such as Fineract cannot move to 5.x.[^fineract-thread] Keycloak (CNCF) opened an issue on Oct 13, 2025 listing its options: switch tools, stay on 4.x, fork, or seek a CNCF exception. The issue was still open in Oct 2026.[^keycloak-issue] No significant community fork has emerged, and 5.0.x patch releases continued through Aug 2026 (5.0.4 on Aug 20).[^liquibase-gh] Verdict: OSS contested, business stable (no disclosed financials).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-30 | Liquibase 5.0 under FSL; Liquibase Secure (commercial) launched; joins Fair Source[^liquibase-fsl][^fair-companies] | OSS | − |
| W12 | 2025-10-13 | Keycloak (CNCF) opens issue on Liquibase license; ASF projects classify FSL as Category X[^keycloak-issue][^fineract-thread] | OSS | − |
| W12 | 2025-10-14 | Issue #7374: still advertising as "open source"[^fontana-issue] | OSS | − |
| W9 | 2026-03-05 | 5.0.2[^liquibase-gh] | OSS | + |
| W6 | 2026-05-15 | 5.0.3[^liquibase-gh] | OSS | + |
| W3 | 2026-08-20 | 5.0.4[^liquibase-gh] | OSS | + |

# OSS successes
- Releases continue, and existing users can keep using it at no cost.[^liquibase-fsl][^liquibase-gh]
- The two-year Apache conversion caps how long any one release stays restricted.[^liquibase-fsl]

# OSS failures / risks
- Foundation-hosted downstream users (ASF, CNCF/Keycloak) cannot adopt 5.x and are pinned to the 4.x line, whose maintenance horizon is unclear.[^keycloak-issue][^fineract-thread]
- Relicensing a 19-year-old Apache project and adding a CLA discourages outside contributors.
- The "open source" messaging was publicly challenged by a prominent open-source lawyer.[^fontana-issue]
- Flyway (Redgate) and Atlas are ready alternatives for users who leave.

# Business successes
- It is now protected against third-party commercial repackaging. Commercial outcome not yet disclosed.

# Business failures / risks
- No funding disclosed since a 2019 Series C (aggregator data only); no primary revenue figures.

# By window
## W3
- 5.0.4 maintenance release (Aug 20, 2026).[^liquibase-gh]
## W6
- 5.0.3 (May 15, 2026).[^liquibase-gh]
## W9
- 5.0.2 (Mar 5, 2026).[^liquibase-gh]
## W12
- "Open source" marketing controversy (Oct 2025).[^fontana-issue]
## W24
- FSL relicense with 5.0 (Sept 30, 2025).[^liquibase-fsl]

# Lessons
- Tools with low switching costs and existing competitors (Flyway) do not get forked after a relicense. Users simply move to the competitor.
- Calling FSL software "open source" is reputationally costly. Fair Source only works if vendors use the label honestly.

# Related
- [Linkerd stable-release paywall](/events/2024-10-linkerd-paywall-profitability.md) — a no-relicense alternative
- [Sentry / Fair Source](/projects/licensing-forks/sentry.md)
- [Liquibase FSL relicense event](/events/2025-09-liquibase-fsl-relicense.md)

[^liquibase-fsl]: Liquibase blog — https://www.liquibase.com/blog/liquibase-community-for-the-future-fsl
[^liquibase-gh]: Liquibase GitHub — https://github.com/liquibase/liquibase
[^fontana-issue]: GitHub issue #7374 — https://github.com/liquibase/liquibase/issues/7374
[^keycloak-issue]: Keycloak issue #43391 — https://github.com/keycloak/keycloak/issues/43391
[^fineract-thread]: Apache Fineract dev list — http://www.mail-archive.com/dev@fineract.apache.org/msg11494.html
[^hn-liquibase]: Hacker News — https://news.ycombinator.com/item?id=45602676
[^fair-companies]: fair.io — https://fair.io/companies/
