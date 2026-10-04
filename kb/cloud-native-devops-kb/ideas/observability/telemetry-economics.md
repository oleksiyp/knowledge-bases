---
type: Idea
title: Telemetry budgets, cardinality and sampling
description: Collecting everything is not a sustainable observability strategy; selective data needs explicit diagnostic
  tradeoffs.
area: observability
verdict: mixed
confidence: medium
tags:
- cloud-native
- devops
- observability
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: otelusers
  resource: https://opentelemetry.io/blog/2023/end-user-discussions-03/
  title: OpenTelemetry end-user discussions, March 2023
- id: sampling
  resource: https://opentelemetry.io/docs/concepts/sampling/
  title: OpenTelemetry sampling concepts
---

# Telemetry budgets, cardinality and sampling

## Verdict

**MIXED — Collecting everything is not a sustainable observability strategy; selective data needs explicit diagnostic tradeoffs.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

OpenTelemetry’s March 2023 end-user discussion records different cost pressures at ingestion and storage.[^otelusers] Sampling documentation distinguishes early decisions from decisions after more of a trace is known.[^sampling]

## What succeeded

Explicit retention, attribute and sampling policies make telemetry spend something engineers can reason about. Keeping useful errors or representative latency information can provide more value than indiscriminate volume.

## What failed or remained difficult

Dropping data can hide rare failures, distort distributions or break a trace across services. Tail sampling also consumes processing and memory. A lower telemetry invoice can conceal higher incident cost if critical evidence disappears.

## Why and when it fits

The relevant unit is the cost of answering an operational question at an acceptable delay and fidelity. Optimizing bytes alone invites a local improvement that harms recovery.

Set budgets per service or useful workload unit and identify signals that must survive sampling. Test a rare-failure scenario and document which statistical interpretations remain valid after filtering.

## What would change the verdict

Longitudinal comparisons including diagnostic success and incident duration would distinguish effective optimization from lost visibility. A vendor’s storage compression result alone cannot.

## Related

* [Area review](/areas/observability.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

[^otelusers]: [OpenTelemetry end-user discussions, March 2023](https://opentelemetry.io/blog/2023/end-user-discussions-03/)
[^sampling]: [OpenTelemetry sampling concepts](https://opentelemetry.io/docs/concepts/sampling/)
