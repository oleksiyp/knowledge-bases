---
type: Idea
title: SLOs, incident learning and bounded experiments
description: Reliability practices work when they change operational decisions and recovery behavior, rather than
  merely produce reports.
area: reliability
verdict: winning
confidence: medium
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
- id: slo
  resource: https://sre.google/workbook/alerting-on-slos/
  title: 'Google SRE Workbook: alerting on SLOs, background'
- id: atlassianfollow
  resource: https://www.atlassian.com/blog/company-news/pir-update-november2022
  title: Atlassian remediation update, November 2022
---

# SLOs, incident learning and bounded experiments

## Verdict

**WINNING — Reliability practices work when they change operational decisions and recovery behavior, rather than merely produce reports.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Error-budget burn-rate alerting is an established SRE mechanism predating this window.[^slo] Atlassian’s 2022 follow-up provides an in-window example of linking a postmortem to concrete deletion safeguards.[^atlassianfollow]

## What succeeded

An SLO makes tolerated harm explicit and can guide investment and paging. A postmortem can turn a surprising event into a tested design change. Fault experiments can check a stated recovery hypothesis before an uncontrolled incident does.

## What failed or remained difficult

An error budget without decision authority is a chart. A postmortem without a funded owner is a document. Chaos exercises without a bounded impact and a hypothesis can create interruption without useful learning. These are analytical failure modes, not measured prevalence estimates.

## Why and when it fits

The useful unit is a closed loop: observe harm, decide, change a control, and test that the change works. Reliability cannot be purchased by adopting the vocabulary of SRE.

Choose user-facing objectives and a small number of consequential alerts. Assign owners and deadlines to incident actions. Run narrow failure experiments only after basic detection and restoration are working.

## What would change the verdict

A sequence of verified actions followed by fewer repeated failure modes would strengthen a local success claim. Absence of incidents over a short quiet period would be weak evidence.

## Related

* [Area review](/areas/reliability.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

[^slo]: [Google SRE Workbook: alerting on SLOs, background](https://sre.google/workbook/alerting-on-slos/)
[^atlassianfollow]: [Atlassian remediation update, November 2022](https://www.atlassian.com/blog/company-news/pir-update-november2022)
