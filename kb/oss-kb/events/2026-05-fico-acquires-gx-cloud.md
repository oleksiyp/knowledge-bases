---
type: Event
title: "FICO acquires GX Cloud; Fivetran becomes steward of Great Expectations OSS"
description: "On 2026-05-06 Great Expectations announced that FICO had acquired its commercial GX Cloud product (shut to the public from 2026-06-01), while stewardship of the open source GX Core project moved to Fivetran."
event_kind: acquisition
date: 2026-05-06
window: W6
impact: mixed
projects: [projects/data-engineering/great-expectations]
organizations: [organizations/fivetran]
tags: [data-engineering, data-quality, acquisition, stewardship]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gx-update
    resource: https://greatexpectations.io/blog/an-update-from-great-expectations/
    title: "Great Expectations: An Update for the Great Expectations Community (2026-05-06)"
    author: org:great-expectations
---

# What happened
On 6 May 2026 Great Expectations (GX) said FICO had acquired GX Cloud and would use it as the foundation of FICO's next-generation data-quality offering. GX Cloud stopped being publicly available on 1 June 2026. The open source GX Core project and community moved to Fivetran's stewardship, with Fivetran committing to maintenance, ecosystem integrations and community engagement. Terms were not disclosed[^gx-update].

# Why it matters
This is the "split exit" pattern: the commercial SaaS goes to an enterprise buyer, and a different vendor takes on the OSS project as a goodwill and ecosystem play. Great Expectations was one of the best-known Python data-quality libraries, but its venture-backed company did not produce a standalone business.

# Outcome so far
GX Core continues as a community-driven project under Fivetran. Fivetran, which merged with dbt Labs on 2026-06-01, is now steward of both GX Core and dbt Core.

# Related
- [Great Expectations](/projects/data-engineering/great-expectations.md), [Fivetran](/organizations/fivetran.md)

[^gx-update]: Great Expectations blog, 2026-05-06.
