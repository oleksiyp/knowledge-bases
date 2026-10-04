---
type: Idea
title: Recovery engineering beyond having backups
description: Recovery readiness means restoring the required scope within a useful time, not merely possessing backup
  data.
area: reliability
verdict: winning
confidence: high
tags:
- cloud-native
- devops
- reliability
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: atlassian
  resource: https://www.atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage
  title: Atlassian April 2022 outage post-incident review
- id: atlassianfollow
  resource: https://www.atlassian.com/blog/company-news/pir-update-november2022
  title: Atlassian remediation update, November 2022
---

# Recovery engineering beyond having backups

## Verdict

**WINNING — Recovery readiness means restoring the required scope within a useful time, not merely possessing backup data.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Atlassian’s April 2022 incident deleted 883 sites belonging to 775 customers; recovery lasted up to 14 days for a subset. Its review distinguishes single-site restoration capability from restoring many sites and products together.[^atlassian] A November follow-up describes work on delayed deletion and tighter controls.[^atlassianfollow]

## What succeeded

Backups and sustained recovery work ultimately enabled restoration. Publishing the recovery bottleneck made a concrete engineering problem visible: scale, dependencies and validation mattered alongside data availability.

## What failed or remained difficult

An ordinary reviewed script could perform a much broader destructive action than intended. The system had data recovery capability without a sufficiently fast recovery process at the incident’s scope. Peer review alone did not bound the action’s impact.

## Why and when it fits

The general lesson is inferred from the case: recovery is a service with throughput, dependencies and failure modes. A successful backup job is only one input. A restore exercise should include application validation and communication access.

Set recovery objectives for realistic multi-tenant and multi-product failures. Exercise restoration at that scale, measure elapsed time, and constrain bulk destructive operations with independently checked scope.

## What would change the verdict

Measured restore exercises meeting objectives after material architecture changes would establish readiness for a specific system. A policy document or a clean backup dashboard would not.

## Related

* [Area review](/areas/reliability.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

[^atlassian]: [Atlassian April 2022 outage post-incident review](https://www.atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage)
[^atlassianfollow]: [Atlassian remediation update, November 2022](https://www.atlassian.com/blog/company-news/pir-update-november2022)
