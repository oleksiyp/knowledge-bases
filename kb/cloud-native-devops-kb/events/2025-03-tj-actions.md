---
type: Event
title: tj-actions CI dependency compromised
description: Mutable dependencies inside a trusted pipeline are a real trust boundary. Repository usage counts are
  not confirmed-compromise counts.
date: 2025-03
year: 2025
area: security
kind: incident
signal: failure
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:08:48Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: actions
  resource: https://github.com/advisories/ghsa-mrrh-fwg8-r2c3
  title: tj-actions/changed-files supply-chain compromise advisory
---

# tj-actions CI dependency compromised

## What happened

**Date: 2025-03.** The changed-files security advisory records compromised releases and remediation.[^actions]

## Why it matters

Mutable dependencies inside a trusted pipeline are a real trust boundary. Repository usage counts are not confirmed-compromise counts.

## Evidence boundary

This event records a specific incident or milestone. It does not estimate an industry-wide success or failure rate.

## Related

* [Assessment and context](/ideas/delivery/pipeline-trust.md)
* [Year review](/years/2025.md)

[^actions]: [tj-actions/changed-files supply-chain compromise advisory](https://github.com/advisories/ghsa-mrrh-fwg8-r2c3)
