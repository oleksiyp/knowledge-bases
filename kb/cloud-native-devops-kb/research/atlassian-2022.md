---
type: Research
title: 'Atlassian 2022: restore capacity was the limiting service'
description: A destructive automation incident exposed the gap between recoverable data and timely restoration at
  scale.
kind: postmortem
year: 2022
area: reliability
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:08:48Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: atlassian
  resource: https://www.atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage
  title: Atlassian April 2022 outage post-incident review
- id: atlassianfollow
  resource: https://www.atlassian.com/blog/company-news/pir-update-november2022
  title: Atlassian remediation update, November 2022
---

# Atlassian 2022: restore capacity was the limiting service

## Finding

Atlassian’s April review describes an unintended multi-site deletion and a recovery process that was not prepared for that volume across products.[^atlassian] Its November update records subsequent work on deletion safeguards.[^atlassianfollow]

## Method and limitations

This is the affected operator’s account. It is unusually useful for identifying the mechanism, but it is not an independent audit or a frequency estimate. The follow-up shows reported remedial work rather than proof that every future failure mode is resolved.

## Interpretation for decisions

The transferable test is restoration under a realistic shared failure, including customer communication and validation. Read the event as a challenge to the assumption that a successful backup job guarantees an acceptable recovery time.

## Related

* [Idea assessment](/ideas/reliability/recovery-is-a-product.md)
* [Area review](/areas/reliability.md)

[^atlassian]: [Atlassian April 2022 outage post-incident review](https://www.atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage)
[^atlassianfollow]: [Atlassian remediation update, November 2022](https://www.atlassian.com/blog/company-news/pir-update-november2022)
