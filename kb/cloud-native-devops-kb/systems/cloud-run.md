---
type: System
title: Cloud Run
description: Managed container execution with a GPU serving option introduced during the review window.
area: application-architecture
kind: managed-service
outcome: established
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: source
  resource: https://docs.cloud.google.com/run/docs/configuring/services/gpu
  title: Cloud Run GPU configuration and constraints
---

# Cloud Run

Managed container execution with a GPU serving option introduced during the review window.[^source]

## Role and outcome

GPU availability expands the workload classes that can use the service.

## Operating boundary

Model readiness, concurrency and service constraints remain application concerns.

The outcome label describes the reviewed project or product position, not a market-share ranking or an independent commercial audit.

## Related

* [Idea or case assessment](/ideas/application-architecture/serverless-and-containers.md)
* [Area review](/areas/application-architecture.md)

[^source]: [Cloud Run GPU configuration and constraints](https://docs.cloud.google.com/run/docs/configuring/services/gpu)
