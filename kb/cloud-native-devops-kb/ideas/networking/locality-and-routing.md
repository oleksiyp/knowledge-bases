---
type: Idea
title: Locality-aware routing must account for cache and backend costs
description: A local network hop can be cheaper while the full request becomes more expensive.
area: networking
verdict: mixed
confidence: medium
tags:
- cloud-native
- devops
- networking
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:55:22Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: case
  resource: /research/zalando-routing.md
  title: Production account and evidence limits
---

# Locality-aware routing must account for cache and backend costs

## Verdict

**MIXED — A local network hop can be cheaper while the full request becomes more expensive.**

The idea is to keep requests near their callers or data to reduce transfer cost and latency. It competes with a second form of locality: repeatedly routing a key to a warm application cache.

## Evidence

Zalando’s account separates a successful internal-routing change from an unresolved zone-affinity trial.[^case] That distinction is more informative than labeling the entire project either a success or a failure.

## What succeeded and failed

Removing an unnecessary shared hop and improving load balance can reduce infrastructure demand. But partitioning traffic by zone can reduce the number of useful cache owners, increasing misses and database work. A load threshold calibrated against the wrong population can amplify the imbalance.

The broader failure mode is optimizing the network bill independently from the storage and application bill. This is an inference from the case, not an estimate that locality policies usually fail.

## Why and when it fits

Locality is useful when each partition has sufficient capacity and working-set coverage, and when degraded local capacity can fall back safely. The relevant boundary is the entire customer operation across caches, services and storage.

Measure cache hit rate, backend reads, tail latency, transfer charges and recovery together. Test warm-up, partial-zone failure and normal traffic as well as peak load. Prefer an existing maintained routing implementation unless a measured requirement justifies owning custom logic.

## What would change the verdict

A sustained comparison showing lower total cost at maintained service quality would support a stronger workload-specific outcome. Theoretical transfer savings alone do not establish the result.

## Related

* [Production case](/research/zalando-routing.md)
* [Area review](/areas/networking.md)
* [Executive summary](/executive-summary.md)

[^case]: [Production account and evidence limits](/research/zalando-routing.md)
