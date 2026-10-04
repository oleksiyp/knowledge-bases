---
type: Idea
title: Outcome-driven signals instead of dashboard accumulation
description: Observability helps when it closes a diagnostic or response loop; more dashboards do not establish
  reliability.
area: observability
verdict: mixed
confidence: medium
tags:
- cloud-native
- devops
- observability
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: slo
  resource: https://sre.google/workbook/alerting-on-slos/
  title: 'Google SRE Workbook: alerting on SLOs, background'
- id: atlassian
  resource: https://www.atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage
  title: Atlassian April 2022 outage post-incident review
---

# Outcome-driven signals instead of dashboard accumulation

## Verdict

**MIXED — Observability helps when it closes a diagnostic or response loop; more dashboards do not establish reliability.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Google’s SRE workbook provides the earlier foundation for alerting on SLO burn rates.[^slo] Atlassian’s April 2022 incident illustrates a blind spot: deletion through an ordinary workflow was not detected by its internal monitoring.[^atlassian]

## What succeeded

A service-level signal tied to a customer journey can reveal harm that host health misses. An alert linked to an owner and an actionable runbook is more useful than a broad catalog of thresholds.

## What failed or remained difficult

A metric can be technically correct while overlooking missing customers, data correctness or a failed business operation. A dashboard viewed only after an incident is not a detection mechanism. Generic thresholds may page repeatedly without informing action.

## Why and when it fits

This is a boundary-design problem: define what healthy service means before choosing the signals. The incident case establishes that ordinary infrastructure monitoring can miss customer loss; it does not establish a population-wide failure rate.

For each critical journey, define observable success, meaningful absence, an owner and a response. Exercise an incident in which the infrastructure remains healthy but the customer operation fails.

## What would change the verdict

Evidence that a signal reduces undetected harm and supports faster, correct action would strengthen the outcome claim. Dashboard and alert counts would not.

## Related

* [Area review](/areas/observability.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

[^slo]: [Google SRE Workbook: alerting on SLOs, background](https://sre.google/workbook/alerting-on-slos/)
[^atlassian]: [Atlassian April 2022 outage post-incident review](https://www.atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage)
