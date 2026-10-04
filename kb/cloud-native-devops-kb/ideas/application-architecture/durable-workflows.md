---
type: Idea
title: Durable execution for long-running coordination
description: Durable workflow engines provide a useful alternative to custom retry and orchestration code when their
  programming model fits.
area: application-architecture
verdict: winning
confidence: medium
tags:
- cloud-native
- devops
- application-architecture
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: temporal
  resource: https://docs.temporal.io/workflow-execution
  title: Temporal workflow execution model
- id: dapr
  resource: https://docs.dapr.io/getting-started/quickstarts/workflow-quickstart/
  title: Dapr workflow execution quickstart and state-store limits
---

# Durable execution for long-running coordination

## Verdict

**WINNING — Durable workflow engines provide a useful alternative to custom retry and orchestration code when their programming model fits.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Temporal documents persisted workflow execution and recovery.[^temporal] Dapr’s workflow quickstart illustrates coordinated activities and explicitly distinguishes tutorial state-store choices from production suitability.[^dapr]

## What succeeded

Persisting execution state can make multi-step work observable and resumable. Timers, retries and external events can become part of a defined lifecycle rather than scattered queues and cron jobs.

## What failed or remained difficult

External effects still need safe retry behavior; replay and versioning impose constraints. A quickstart can hide state-store requirements that matter in production. The engine itself needs availability and operational ownership.

## Why and when it fits

The benefit grows with the coordination logic being replaced. A short synchronous operation may gain little from a separate durable execution system. This is a technical-fit assessment, not a market-share assertion.

Use it for business processes that cross service or time boundaries. Exercise duplicate delivery, activity failure, worker replacement and workflow code upgrades. Treat compensation as explicit business logic.

## What would change the verdict

Independent maintenance and failure-recovery comparisons against custom orchestration would strengthen the economic verdict.

## Related

* [Area review](/areas/application-architecture.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: Temporal](/systems/temporal.md)

[^temporal]: [Temporal workflow execution model](https://docs.temporal.io/workflow-execution)
[^dapr]: [Dapr workflow execution quickstart and state-store limits](https://docs.dapr.io/getting-started/quickstarts/workflow-quickstart/)
