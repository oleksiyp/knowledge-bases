---
type: Event
title: Liquibase relicenses Community edition to the Functional Source License
description: "With Liquibase 5.0 (Sept 30, 2025) the 19-year-old Apache-2.0 schema-migration tool moved to FSL-1.1-ALv2 with a CLA, becoming the biggest Fair Source adopter and drawing criticism for still calling itself open source."
event_kind: license-change
date: 2025-09-30
window: W24
impact: negative
projects: [projects/licensing-forks/liquibase, projects/licensing-forks/sentry]
organizations: [organizations/sentry]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: liquibase-fsl
    resource: https://www.liquibase.com/blog/liquibase-community-for-the-future-fsl
    title: "Liquibase: Liquibase Community for the future (FSL)"
  - id: fontana-issue
    resource: https://github.com/liquibase/liquibase/issues/7374
    title: "GitHub issue #7374 (2025-10-14)"
  - id: fair-companies
    resource: https://fair.io/companies/
    title: "fair.io companies"
---

# What happened
Liquibase 5.0 moved Liquibase Community from Apache-2.0 to FSL-1.1-ALv2, which converts each release to Apache-2.0 after two years and bars competing commercial use. It added a one-time CLA and cited third parties repackaging the project without contributing back.[^liquibase-fsl] Liquibase joined the Fair Source list the same day.[^fair-companies]

# Why it matters
It is the largest and oldest project to adopt FSL, and so a test of whether Fair Source can grow beyond startups.

# Outcome so far
Open-source lawyer Richard Fontana challenged its continued "open source" marketing in GitHub issue #7374 (Oct 14, 2025).[^fontana-issue] No fork has gained traction, 5.0.x maintenance continues, and no other Fair Source adopters have been listed since.[^fair-companies]

# Related
- [Liquibase](/projects/licensing-forks/liquibase.md), [Sentry / Fair Source](/projects/licensing-forks/sentry.md)

[^liquibase-fsl]: Liquibase blog — https://www.liquibase.com/blog/liquibase-community-for-the-future-fsl
[^fontana-issue]: GitHub — https://github.com/liquibase/liquibase/issues/7374
[^fair-companies]: fair.io — https://fair.io/companies/
