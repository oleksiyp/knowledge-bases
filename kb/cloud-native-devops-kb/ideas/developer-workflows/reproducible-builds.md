---
type: Idea
title: Hermetic builds and shared caches
description: Reproducibility and reusable build work are durable engineering ideas, but their value depends on explicit
  inputs and trustworthy caches.
area: developer-workflows
verdict: winning
confidence: medium
tags:
- cloud-native
- devops
- developer-workflows
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: bazel
  resource: https://bazel.build/basics/hermeticity
  title: Bazel hermeticity documentation
- id: cache
  resource: https://bazel.build/remote/caching
  title: Bazel remote caching documentation
---

# Hermetic builds and shared caches

## Verdict

**WINNING — Reproducibility and reusable build work are durable engineering ideas, but their value depends on explicit inputs and trustworthy caches.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Bazel’s documentation describes hermeticity through controlled inputs and environment, and explains remote caching and its failure modes.[^bazel][^cache] These are maintained mechanisms, not an in-window invention or an industry-wide productivity experiment.

## What succeeded

When the same declared inputs produce reusable outputs, teams can avoid repeated build work and debug differences more systematically. Shared caches can amplify these benefits across developers and CI.

## What failed or remained difficult

Undeclared environment dependencies make apparently reusable results unsafe or inconsistent. Migration work, large downloads and poor cache hit rates can erase expected gains. Cache access and artifact integrity are also trust decisions.

## Why and when it fits

The inference is that reproducibility improves the foundation for optimization. A faster build that occasionally returns the wrong output is not a successful optimization.

Baseline representative build latency, cache hit rate and correctness before rollout. Identify environment inputs and restrict who can populate trusted caches. Include cold-cache and dependency-change behavior in evaluation.

## What would change the verdict

Matched before-and-after measurements including migration and cache operations would strengthen the economic verdict. Documentation establishes how the mechanism works, not how many teams benefit.

## Related

* [Area review](/areas/developer-workflows.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: Bazel](/systems/bazel.md)

[^bazel]: [Bazel hermeticity documentation](https://bazel.build/basics/hermeticity)
[^cache]: [Bazel remote caching documentation](https://bazel.build/remote/caching)
