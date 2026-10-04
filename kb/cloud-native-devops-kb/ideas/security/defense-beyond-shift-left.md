---
type: Idea
title: Defense beyond shift-left and dependency scanning
description: Early checks are valuable, but build compromise and malicious maintenance require controls across the
  software lifecycle.
area: security
verdict: mixed
confidence: medium
tags:
- cloud-native
- devops
- security
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: xz
  resource: https://www.redhat.com/en/blog/urgent-security-alert-fedora-40-and-rawhide-users
  title: Red Hat XZ security alert, March 2024
- id: actions
  resource: https://github.com/advisories/ghsa-mrrh-fwg8-r2c3
  title: tj-actions/changed-files supply-chain compromise advisory
---

# Defense beyond shift-left and dependency scanning

## Verdict

**MIXED — Early checks are valuable, but build compromise and malicious maintenance require controls across the software lifecycle.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Red Hat’s March 2024 XZ alert identified malicious 5.6.0 and 5.6.1 releases and stated that RHEL was not affected.[^xz] The March 2025 tj-actions advisory documents a compromised CI dependency.[^actions]

## What succeeded

Public disclosure, package withdrawal and corrective releases enable coordinated response. Provenance, constrained build authority and runtime observation address different points in the trust chain; no one layer has to carry the entire burden.

## What failed or remained difficult

A previously trusted component or maintainer can become the source of malicious behavior. A vulnerability scanner focused on known CVEs may not identify a newly introduced backdoor. Shifting work earlier cannot eliminate the need to detect and contain running-system behavior.

## Why and when it fits

These incidents undermine the assumption that dependency popularity or a successful build establishes safety. They do not show that open source is uniquely unsafe or that every consumer was compromised.

Keep release authority narrow, maintain an artifact and dependency inventory, and rehearse revocation and rebuild procedures. Use admission and runtime controls according to the threat model, while measuring false positives and response capacity.

## What would change the verdict

Independent evidence of lower compromise impact under specific layered controls would make the prescriptive case stronger. Incident anecdotes establish possible paths, not relative product effectiveness.

## Related

* [Area review](/areas/security.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

[^xz]: [Red Hat XZ security alert, March 2024](https://www.redhat.com/en/blog/urgent-security-alert-fedora-40-and-rawhide-users)
[^actions]: [tj-actions/changed-files supply-chain compromise advisory](https://github.com/advisories/ghsa-mrrh-fwg8-r2c3)
