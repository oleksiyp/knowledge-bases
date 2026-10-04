---
type: Research
title: 'Alibaba OpenTelemetry: upstreaming reduces a private-fork burden'
description: A reported instrumentation migration shows both the value of a shared ecosystem and the work required
  to adapt to it.
kind: case-study
year: 2025
area: observability
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:08:48Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: alibaba
  resource: https://opentelemetry.io/blog/2025/otip-alibaba/
  title: Alibaba OpenTelemetry migration account, August 2025
---

# Alibaba OpenTelemetry: upstreaming reduces a private-fork burden

## Finding

The August 2025 OpenTelemetry community account describes Alibaba moving from a customized fork of the Java agent toward the upstream agent plus extensions.[^alibaba]

## Method and limitations

This is an interview-based practitioner account published by the project community. It supports a particular migration mechanism, not an independently measured cost reduction for all users. The author’s affiliation and publication venue should inform interpretation.

## Interpretation for decisions

The inference is that a standard can lower long-run divergence costs when required extensions can be maintained without owning a full fork. Migration and semantic stability still matter; standardization should be evaluated across upgrades, not only initial installation.

## Related

* [Idea assessment](/ideas/observability/open-instrumentation.md)
* [Area review](/areas/observability.md)

[^alibaba]: [Alibaba OpenTelemetry migration account, August 2025](https://opentelemetry.io/blog/2025/otip-alibaba/)
