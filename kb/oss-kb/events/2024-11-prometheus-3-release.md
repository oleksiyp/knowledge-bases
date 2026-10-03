---
type: Event
title: "Prometheus 3.0 released — first major version in seven years"
description: "On Nov 14, 2024 Prometheus 3.0 shipped a new UI, UTF-8 metric names, Remote Write 2.0, native OTLP ingestion and native histograms, aligning the metrics standard with OpenTelemetry."
event_kind: release
date: 2024-11-14
window: W24
impact: positive
projects: [projects/cloud-native/prometheus, projects/cloud-native/opentelemetry]
organizations: [organizations/cncf, organizations/grafana-labs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: prom3
    resource: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
    title: "Announcing Prometheus 3.0"
    author: org:prometheus
  - id: prom-gh
    resource: https://github.com/prometheus/prometheus
    title: "Prometheus releases"
---

# What happened
Prometheus 3.0, the first major release in seven years, launched Nov 14, 2024[^prom3]. It brought a rewritten UI with a PromLens-style tree view, UTF-8 metric and label names by default, Remote Write 2.0 (metadata, exemplars, created timestamps, native histograms), a native OTLP receiver at /api/v1/otlp/v1/metrics, and experimental native histograms[^prom3].

# Why it matters
It ended the naming friction between Prometheus and OpenTelemetry. That let OTel-instrumented apps send metrics straight to Prometheus, so the two most important CNCF observability projects stopped competing[^prom3].

# Outcome so far
The project moved to a ~6-week 3.x cadence and reached v3.15.0 on Sep 25, 2026[^prom-gh].

# Related
- [Prometheus](/projects/cloud-native/prometheus.md), [OpenTelemetry](/projects/cloud-native/opentelemetry.md)

[^prom3]: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
[^prom-gh]: https://github.com/prometheus/prometheus
