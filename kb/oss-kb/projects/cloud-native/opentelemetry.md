---
type: OSS Project
title: "OpenTelemetry"
description: "Vendor-neutral telemetry standard (APIs, SDKs, Collector, OTLP); the biggest cloud-native OSS success of 2024-2026 — CNCF graduation in May 2026, second-highest CNCF velocity, profiling signal and GenAI semantic conventions, and it reshaped the observability vendor market."
resource: https://github.com/open-telemetry
tags: [cloud-native, observability, apache-2.0, foundation-hosted, cncf-graduated, standard]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2019-)"]
governance: foundation
steward: Cloud Native Computing Foundation
backing_orgs: [organizations/cncf, organizations/grafana-labs]
metrics:
  contributors: { value: "12,000+ from 2,800+ companies", as_of: 2026-05-21 }
  js_api_downloads_12mo: { value: 1360000000, as_of: 2026-05-21 }
  python_api_downloads_12mo: { value: 1300000000, as_of: 2026-05-21 }
  collector_github_stars: { value: 7634, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
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
    title: "CNCF blog: OpenTelemetry has graduated… Now what?"
  - id: obi
    resource: https://opentelemetry.io/blog/2025/obi-announcing-first-release/
    title: "OpenTelemetry eBPF Instrumentation (OBI): first release"
  - id: otelcol-gh
    resource: https://github.com/open-telemetry/opentelemetry-collector
    title: "OpenTelemetry Collector repository"
  - id: prom3
    resource: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
    title: "Announcing Prometheus 3.0"
  - id: jaeger-docs
    resource: https://www.jaegertracing.io/docs/latest/
    title: "Jaeger documentation (v2 on OTel Collector)"
  - id: panw-chrono
    resource: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
    title: "Palo Alto Networks to Acquire Chronosphere"
  - id: panw-chrono-close
    resource: https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-chronosphere-acquisition--unifying-observability-and-security-for-the-ai-era
    title: "Palo Alto Networks completes Chronosphere acquisition (Jan 29, 2026)"
    author: org:palo-alto-networks
  - id: panw-10q
    resource: https://www.sec.gov/Archives/edgar/data/1327567/000132756726000005/panw-20260131.htm
    title: "Palo Alto Networks Form 10-Q for quarter ended Jan 31, 2026 (SEC EDGAR)"
    author: org:palo-alto-networks
  - id: polar-profiles-alpha
    resource: https://www.polarsignals.com/blog/posts/2026/03/26/opentelemetry-profiling-goes-alpha
    title: "Polar Signals: OpenTelemetry Profiling goes Alpha (Mar 26, 2026)"
  - id: dd-otel-news
    resource: https://opensource.datadoghq.com/otel-news/2026/01/
    title: "Datadog Open Source Hub: OpenTelemetry news, January 2026"
    author: org:datadog
  - id: reg-datadog-2023
    resource: https://www.theregister.com/2023/02/02/datadog_opentelemetry_tool_dorman/
    title: "The Register: Claims Datadog asked developer to kill open source data tool (Feb 2023)"
    author: org:the-register
---

# Summary
OpenTelemetry (OTel) is the clearest open-source success in cloud-native over the last two years. CNCF announced its graduation on May 21, 2026, citing 12,000+ contributors from 2,800+ companies and the second-highest velocity of 240+ CNCF projects after Kubernetes[^cncf-otel-grad]. Its JavaScript and Python API packages each passed ~1.3B downloads in the preceding 12 months[^cncf-otel-grad]. Other projects re-platformed on it — Prometheus 3.0 added a native OTLP receiver and Jaeger v2 was rebuilt on the OTel Collector[^prom3][^jaeger-docs] — and Grafana donated Beyla to become OpenTelemetry eBPF Instrumentation (OBI)[^obi]. Verdict: **thriving**; it commoditized instrumentation, moving vendor competition to storage, query cost and AI-assisted analysis.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-14 | Prometheus 3.0 ships native OTLP ingestion and UTF-8 names[^prom3] | OSS | + |
| W24 | 2024-11 | Jaeger v2 rebuilt on the OTel Collector framework[^jaeger-docs] | OSS | + |
| W24 | 2025 | Grafana Labs donates Beyla → OpenTelemetry eBPF Instrumentation (OBI); first alpha release[^obi] | OSS | + |
| W12 | 2025-11-19 | Chronosphere (OTel-native vendor) acquired by Palo Alto Networks for $3.35B[^panw-chrono] | Business | + |
| W9 | 2026-01-29 | Palo Alto Networks closes Chronosphere acquisition[^panw-chrono-close] | Business | + |
| W9 | 2026-03-26 | Profiles (fourth signal) enters public alpha; eBPF profiler ships in Collector v0.148.0[^polar-profiles-alpha] | OSS | + |
| W6 | 2026-05-21 | CNCF graduation announced at Observability Summit, Minneapolis[^cncf-otel-grad] | OSS | + |
| W3 | 2026-07-24 | CNCF "now what" roadmap: profiling signal, GenAI conventions, Injector, packaging[^cncf-now-what] | OSS | + |
| W3 | 2026-09-28 | Collector v0.162.0 — still pre-1.0 versioning, biweekly releases[^otelcol-gh] | OSS | flat |

# OSS successes
- Graduation with third-party security audit and governance review completed[^cncf-otel-grad].
- Became the ingestion layer for others: Prometheus OTLP endpoint, Jaeger v2 on the Collector, OBI from Grafana Beyla[^prom3][^jaeger-docs][^obi].
- Expanding scope to profiling as a fourth signal and generative-AI semantic conventions for agent workloads[^cncf-now-what].
- Named end-user adopters include Alibaba, Anthropic, Bloomberg, Capital One and eBay[^cncf-otel-grad].

# OSS failures / risks
- Complexity: the Collector remains on 0.x versioning (v0.162 in Sep 2026)[^otelcol-gh]; config sprawl and semantic-convention churn are common complaints.
- Vendor-heavy maintainer base (observability vendors) raises the risk that priorities follow vendor roadmaps.

# Business successes
- OTel-native vendors raised or exited at high values: Chronosphere ($3.35B headline price to Palo Alto Networks, announced Nov 19, 2025, closed Jan 29, 2026; Palo Alto's filings put total purchase consideration at about $3.0B)[^panw-chrono][^panw-chrono-close][^panw-10q]; Grafana Labs, SigNoz and others market OTel-first stacks.

# Business failures / risks
- Neutral instrumentation lowers switching costs, pressuring incumbents that relied on proprietary agents for lock-in. The biggest incumbent has changed course: Datadog, accused in 2023 of asking a developer to drop an OTel contribution[^reg-datadog-2023], by 2026 shipped its own OTel Collector distribution (DDOT) with a Fleet Automation gateway, natively supported the GenAI semantic conventions, and co-authored the profiles alpha[^dd-otel-news]. This is co-option rather than defeat: the vendors keep their margins on the backend.

# By window
## W3
- Post-graduation roadmap (profiling, GenAI semconv, Injector)[^cncf-now-what]; Collector v0.157-v0.162 releases[^otelcol-gh].
## W6
- Graduation on May 21, 2026; record monthly downloads in April 2026[^cncf-otel-grad].
## W9
- Profiles signal public alpha (Mar 26)[^polar-profiles-alpha]; Chronosphere deal closes (Jan 29)[^panw-chrono-close]; Datadog ships DDOT gateway and GenAI-semconv support (Jan)[^dd-otel-news].
## W12
- Chronosphere acquisition validates OTel-native observability as strategic for security vendors[^panw-chrono].
## W24
- Prometheus 3.0 OTLP, Jaeger v2, Beyla donation as OBI[^prom3][^jaeger-docs][^obi].

# Lessons
- Merging competing standards (OpenTracing + OpenCensus, 2019) and staying vendor-neutral produced a de facto standard within ~7 years.
- When instrumentation is a commons, vendors differentiate on cost, scale and AI analysis — and still fund the commons.

# Related
- [Prometheus](/projects/cloud-native/prometheus.md), [Jaeger](/projects/cloud-native/jaeger.md), [Grafana](/projects/cloud-native/grafana.md), [SigNoz](/projects/cloud-native/signoz.md)
- [Event: OpenTelemetry graduates](/events/2026-05-opentelemetry-graduates.md), [Event: Chronosphere acquisition](/events/2025-11-palo-alto-acquires-chronosphere.md)
- [CNCF](/organizations/cncf.md)

[^cncf-otel-grad]: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
[^otel-blog-grad]: https://opentelemetry.io/blog/2026/otel-graduates/
[^cncf-now-what]: https://www.cncf.io/blog/2026/07/24/opentelemetry-has-graduated-now-what/
[^obi]: https://opentelemetry.io/blog/2025/obi-announcing-first-release/
[^otelcol-gh]: https://github.com/open-telemetry/opentelemetry-collector
[^prom3]: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
[^jaeger-docs]: https://www.jaegertracing.io/docs/latest/
[^panw-chrono-close]: https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-chronosphere-acquisition--unifying-observability-and-security-for-the-ai-era
[^panw-10q]: https://www.sec.gov/Archives/edgar/data/1327567/000132756726000005/panw-20260131.htm
[^polar-profiles-alpha]: https://www.polarsignals.com/blog/posts/2026/03/26/opentelemetry-profiling-goes-alpha
[^dd-otel-news]: https://opensource.datadoghq.com/otel-news/2026/01/
[^reg-datadog-2023]: https://www.theregister.com/2023/02/02/datadog_opentelemetry_tool_dorman/
[^panw-chrono]: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
