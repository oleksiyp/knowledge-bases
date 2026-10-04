---
type: Lesson
title: The winners standardized boundaries without erasing differences
description: Interoperability succeeded most clearly at specific interfaces, rather than as complete infrastructure
  interchangeability.
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:15:14Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: otel
  resource: /ideas/observability/open-instrumentation.md
  title: Open instrumentation and portable telemetry interfaces
- id: focus
  resource: /ideas/cloud-economics/portable-cost-data.md
  title: Portable cost data versus portable workloads
- id: identity
  resource: /ideas/security/workload-identity.md
  title: Short-lived workload identity and CI federation
---

# The winners standardized boundaries without erasing differences

OpenTelemetry standardizes instrumentation, FOCUS standardizes cost data, and workload identity standardizes identity exchange. Their common strength is a defined boundary that different implementations can support. The evidence does not require every implementation behind that boundary to behave identically.[^otel][^focus][^identity]

The failure is expanding a valid interface claim into a universal portability claim. A standard trace format does not migrate dashboards; a cost schema does not move a database; a container image does not replace an operating model. This is the KB’s synthesis of the mechanisms, not a measured law of the industry.

For a decision, name the boundary and perform the corresponding exit test. Can the application send telemetry to another collector? Can a billing export enter the same analysis? Can an identity be verified under an explicit trust policy? Keep these tests separate from application migration.

A useful standard can succeed even when substantial implementation differences remain. Evaluate reduced coupling at that boundary and record the remaining dependencies.

* [Executive summary](/executive-summary.md)

[^otel]: [Open instrumentation and portable telemetry interfaces](/ideas/observability/open-instrumentation.md)
[^focus]: [Portable cost data versus portable workloads](/ideas/cloud-economics/portable-cost-data.md)
[^identity]: [Short-lived workload identity and CI federation](/ideas/security/workload-identity.md)
