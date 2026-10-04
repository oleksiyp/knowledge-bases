---
type: System
title: Bazel
description: A build system built around declared dependencies and reproducible work.
area: developer-workflows
kind: build-system
outcome: established
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: source
  resource: https://bazel.build/basics/hermeticity
  title: Bazel hermeticity documentation
---

# Bazel

A build system built around declared dependencies and reproducible work.[^source]

## Role and outcome

Hermeticity and caching provide useful mechanisms for reducing repeated build work.

## Operating boundary

Migration and cache correctness must be included in the evaluation.

The outcome label describes the reviewed project or product position, not a market-share ranking or an independent commercial audit.

## Related

* [Idea or case assessment](/ideas/developer-workflows/reproducible-builds.md)
* [Area review](/areas/developer-workflows.md)

[^source]: [Bazel hermeticity documentation](https://bazel.build/basics/hermeticity)
