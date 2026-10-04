---
type: Idea
title: Resilience follows dependencies, not region labels
description: Multiple regions or providers improve resilience only when the critical dependencies and recovery paths
  are genuinely independent.
area: reliability
verdict: mixed
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
- id: kv
  resource: https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025/
  title: Cloudflare June 12, 2025 outage report
- id: kvdesign
  resource: https://blog.cloudflare.com/rearchitecting-workers-kv-for-redundancy/
  title: 'Cloudflare: rearchitecting Workers KV for redundancy'
---

# Resilience follows dependencies, not region labels

## Verdict

**MIXED — Multiple regions or providers improve resilience only when the critical dependencies and recovery paths are genuinely independent.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Cloudflare’s June 12, 2025 outage report describes a 2-hour-28-minute disruption and widespread Workers KV request failures. Its subsequent architecture account explains the tradeoff between simplifying storage operations and restoring provider redundancy.[^kv][^kvdesign]

## What succeeded

The public analysis makes dependency concentration inspectable. Redundant storage and tested alternate paths can reduce exposure to a single provider failure when consistency and operational behavior are designed together.

## What failed or remained difficult

A distributed frontend can still depend on a concentrated backend. Adding a second provider also adds synchronization, failure detection and recovery complexity. “Multi-cloud” on a diagram does not establish that the customer path survives the relevant outage.

## Why and when it fits

The causal tension is real: consolidation reduces day-to-day complexity while increasing a particular common-mode risk. Neither maximum replication nor maximum simplicity is always correct.

Map authentication, DNS, storage, deployment and control-plane dependencies for critical journeys. Test degraded operation and failback, not just initial failover. Include the cost of continuously proving the alternate path works.

## What would change the verdict

Observed exercises and real incident performance can support a resilience claim. A provider count cannot. The Cloudflare case is a concrete counterexample to simple labels, not evidence that all managed services are unreliable.

## Related

* [Area review](/areas/reliability.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

[^kv]: [Cloudflare June 12, 2025 outage report](https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025/)
[^kvdesign]: [Cloudflare: rearchitecting Workers KV for redundancy](https://blog.cloudflare.com/rearchitecting-workers-kv-for-redundancy/)
