---
type: Organization
title: Sentry (Functional Software, Inc.)
description: "Application-monitoring company that authored the Functional Source License and launched the 'Fair Source' label (Aug 2024); commercially established, but the Fair Source movement it leads has stalled at ~13 listed adopters."
resource: https://sentry.io
tags: [commercial-open-source, observability, fair-source, fsl, source-available]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "$217M (company, May 2022)", last_round: "Series E $90M (BOND, Accel co-lead)", last_round_date: 2022-05-04, valuation_usd: ">3B (2022)" }
business_verdict: stable
projects: [projects/licensing-forks/sentry, projects/licensing-forks/liquibase]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-fsl
    resource: https://techcrunch.com/2023/11/20/with-functional-source-license-sentry-wants-to-grant-developers-freedom-without-harmful-free-riding/
    title: "TechCrunch: Sentry's Functional Source License (2023-11-20)"
  - id: fair-companies
    resource: https://fair.io/companies/
    title: "fair.io: Fair Source companies"
  - id: sentry-ai-age
    resource: https://blog.sentry.io/fair-source-software-in-the-ai-age/
    title: "Sentry blog: Fair Source software in the AI age (2026-03-17)"
  - id: sa-sentry-e
    resource: https://siliconangle.com/2022/05/04/application-monitoring-startup-sentry-closes-90m-round-3b-valuation/
    title: "SiliconANGLE: Sentry closes $90M round at $3B valuation (2022-05-04)"
    author: org:siliconangle
---

# Summary
Sentry is the main promoter of "fair source" licensing as an alternative to both open source and closed source. It wrote FSL (Nov 2023), launched Fair Source with four other companies on Aug 6, 2024, and in March 2026 argued that Fair Source resists AI-driven clean-room rewrites better than permissive licenses do.[^tc-fsl][^fair-companies][^sentry-ai-age] The movement grew to 13 listed companies, the last of them Liquibase in Sept 2025.[^fair-companies] Its last disclosed round was a $90M Series E at a >$3B valuation (May 2022, BOND and Accel), bringing total funding to $217M[^sa-sentry-e]; no 2025–2026 funding or revenue disclosures were found.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| (pre) | 2024-08-06 | Fair Source launch[^fair-companies] | ± |
| W24 | 2025-09-30 | Liquibase joins (largest convert)[^fair-companies] | + |
| W9 | 2026-03-17 | Fair Source in the AI age post[^sentry-ai-age] | ± |

# Monetization model
SaaS (sentry.io), with the self-hostable code under FSL (converts to Apache-2.0/MIT after two years).

# Successes
- A durable SaaS business without a hosted-clone competitor.

# Failures / risks
- The Fair Source label has not reached critical mass.[^fair-companies]

# Related
- [Sentry / Fair Source](/projects/licensing-forks/sentry.md), [Liquibase](/projects/licensing-forks/liquibase.md)

[^tc-fsl]: TechCrunch — https://techcrunch.com/2023/11/20/with-functional-source-license-sentry-wants-to-grant-developers-freedom-without-harmful-free-riding/
[^fair-companies]: fair.io — https://fair.io/companies/
[^sentry-ai-age]: Sentry blog — https://blog.sentry.io/fair-source-software-in-the-ai-age/
[^sa-sentry-e]: SiliconANGLE, 2022-05-04.
