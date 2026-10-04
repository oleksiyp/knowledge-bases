---
type: Area
title: Observability and telemetry economics
description: Instrumentation standards advanced further than diagnostic quality or cost discipline.
area: observability
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: i1
  resource: /ideas/observability/open-instrumentation.md
  title: Open instrumentation and portable telemetry interfaces
- id: i2
  resource: /ideas/observability/telemetry-economics.md
  title: Telemetry budgets, cardinality and sampling
- id: i3
  resource: /ideas/observability/outcome-driven-signals.md
  title: Outcome-driven signals instead of dashboard accumulation
---

# Observability and telemetry economics

Instrumentation standards advanced further than diagnostic quality or cost discipline.

## Idea scorecard

Verdicts concern the stated idea and fit, not market share. “Winning” means a durable useful mechanism with the evidence limits described in the linked assessment. [^i1] [^i2] [^i3]

| Idea | Verdict | Assessment |
|---|---|---|
| [Open instrumentation and portable telemetry interfaces](/ideas/observability/open-instrumentation.md) | winning | OpenTelemetry became a durable instrumentation standard; backend and operational portability remain incomplete. |
| [Telemetry budgets, cardinality and sampling](/ideas/observability/telemetry-economics.md) | mixed | Collecting everything is not a sustainable observability strategy; selective data needs explicit diagnostic tradeoffs. |
| [Outcome-driven signals instead of dashboard accumulation](/ideas/observability/outcome-driven-signals.md) | mixed | Observability helps when it closes a diagnostic or response loop; more dashboards do not establish reliability. |

## What succeeded

OpenTelemetry’s maturation and the Alibaba migration case support the value of a shared instrumentation boundary. Prometheus evolution shows continued investment in interoperable signal ingestion. This is an interface success with practical ecosystem consequences.

## What failed or remained unsettled

Standards do not guarantee stable semantic conventions, affordable retention or useful alerts. A system can emit more data while leaving a critical user failure invisible. Sampling decisions can lower an invoice while removing evidence needed for an incident.

## Decision implications

Instrument a critical user journey, define a telemetry budget and exercise diagnosis before expanding volume. Test upgrades and backend changes with real queries. Measure whether operators can answer consequential questions at acceptable cost.

## Evidence trail

* [Alibaba Otel](/research/alibaba-otel.md)
* [Atlassian 2022](/research/atlassian-2022.md)
* [2026 05 21 Otel](/events/2026-05-21-otel.md)

The scorecard is a synthesis of the linked assessments. Release milestones establish availability; case studies establish situated experience; surveys establish associations. None alone establishes universal return on investment.

* [Executive summary](/executive-summary.md)
* [Cross-cutting lessons](/lessons/)

## Selected systems and standards

* [OpenTelemetry](/systems/opentelemetry.md) — A shared instrumentation and telemetry ecosystem that graduated in 2026.
* [Prometheus](/systems/prometheus.md) — A metrics ecosystem whose 3.0 release expanded modern telemetry interoperability.

[^i1]: [Open instrumentation and portable telemetry interfaces](/ideas/observability/open-instrumentation.md)
[^i2]: [Telemetry budgets, cardinality and sampling](/ideas/observability/telemetry-economics.md)
[^i3]: [Outcome-driven signals instead of dashboard accumulation](/ideas/observability/outcome-driven-signals.md)
