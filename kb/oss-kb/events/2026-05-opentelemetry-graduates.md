---
type: Event
title: "OpenTelemetry graduates from the CNCF"
description: "CNCF announced OpenTelemetry's graduation on May 21, 2026 at Observability Summit in Minneapolis, recognizing 12,000+ contributors from 2,800+ companies and its status as the de facto observability standard."
event_kind: governance
date: 2026-05-21
window: W6
impact: positive
projects: [projects/cloud-native/opentelemetry, projects/cloud-native/prometheus, projects/cloud-native/jaeger]
organizations: [organizations/cncf, organizations/grafana-labs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cncf-otel-grad
    resource: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
    title: "CNCF announces OpenTelemetry's graduation"
    author: org:cncf
  - id: otel-blog-grad
    resource: https://opentelemetry.io/blog/2026/otel-graduates/
    title: "OpenTelemetry is a CNCF Graduated Project"
  - id: cncf-now-what
    resource: https://www.cncf.io/blog/2026/07/24/opentelemetry-has-graduated-now-what/
    title: "OpenTelemetry has graduated… Now what?"
---

# What happened
CNCF announced OpenTelemetry's graduation on May 21, 2026, after a third-party security audit, a governance review and a Collector component review[^cncf-otel-grad][^otel-blog-grad]. CNCF cited 12,000+ contributors from 2,800+ companies, the second-highest velocity of 240+ CNCF projects, and roughly 1.36B (JS) and 1.3B (Python) API package downloads in the preceding 12 months[^cncf-otel-grad].

# Why it matters
Seven years after the OpenTracing and OpenCensus merger, vendor-neutral instrumentation is now formally "production-grade". Proprietary agents lose lock-in, and vendors have to compete on backend economics and analysis[^cncf-otel-grad].

# Outcome so far
The post-graduation roadmap covers profiling as a new signal, GenAI semantic conventions for agentic workloads, an OpenTelemetry Injector for zero-code instrumentation, and modular packaging[^cncf-now-what].

# Related
- [OpenTelemetry](/projects/cloud-native/opentelemetry.md), [CNCF](/organizations/cncf.md), [Event: Prometheus 3.0](/events/2024-11-prometheus-3-release.md)

[^cncf-otel-grad]: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
[^otel-blog-grad]: https://opentelemetry.io/blog/2026/otel-graduates/
[^cncf-now-what]: https://www.cncf.io/blog/2026/07/24/opentelemetry-has-graduated-now-what/
