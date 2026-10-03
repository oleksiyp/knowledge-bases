---
type: Event
title: "Palo Alto Networks acquires Chronosphere for $3.35B"
description: "Announced Nov 19, 2025 and closed Jan 29, 2026, the deal brought a Prometheus/OTel-native observability platform with $160M+ ARR into a security vendor, the largest observability M&A of the window."
event_kind: acquisition
date: 2025-11-19
window: W12
impact: mixed
projects: [projects/cloud-native/prometheus, projects/cloud-native/opentelemetry]
organizations: [organizations/chronosphere, organizations/grafana-labs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: panw-chrono
    resource: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
    title: "Palo Alto Networks to Acquire Chronosphere"
    author: org:palo-alto-networks
  - id: panw-close
    resource: https://www.tradingview.com/news/tradingview:23ec310350c2b:0-palo-alto-networks-completes-chronosphere-acquisition/
    title: "Palo Alto Networks completes Chronosphere acquisition"
---

# What happened
On Nov 19, 2025, Palo Alto Networks agreed to buy Chronosphere for $3.35B in cash and replacement equity awards. Chronosphere had over $160M of ARR at the end of September 2025, growing triple digits year over year[^panw-chrono]. PANW plans to combine it with Cortex AgentiX for "agentic remediation"[^panw-chrono]. The deal closed Jan 29, 2026, and co-founder Martin Mao became SVP/GM of Observability[^panw-close].

# Why it matters
It valued an open-standards-based observability vendor at roughly 20x ARR. It signals that security vendors now treat telemetry pipelines as strategic, and it removes an independent Prometheus/OTel-native competitor to Grafana Labs and Datadog.

# Outcome so far
Integration with PANW's Cortex platform is under way[^panw-close]. Its long-term effect on Chronosphere's upstream OSS contributions is unknown.

# Related
- [Chronosphere](/organizations/chronosphere.md), [Prometheus](/projects/cloud-native/prometheus.md), [OpenTelemetry](/projects/cloud-native/opentelemetry.md)

[^panw-chrono]: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
[^panw-close]: https://www.tradingview.com/news/tradingview:23ec310350c2b:0-palo-alto-networks-completes-chronosphere-acquisition/
