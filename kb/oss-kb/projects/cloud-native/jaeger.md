---
type: OSS Project
title: "Jaeger"
description: "CNCF-graduated distributed tracing backend; Jaeger v2 (Nov 2024) re-architected it on the OpenTelemetry Collector and v1 was wound down (last v1.76, Dec 2025) — a model of an incumbent project folding itself into the new standard."
resource: https://github.com/jaegertracing/jaeger
tags: [cloud-native, observability, tracing, apache-2.0, foundation-hosted, cncf-graduated]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2017-)"]
governance: foundation
steward: Cloud Native Computing Foundation
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 23263, as_of: 2026-10-03 }
  latest_release: { value: "v2.21.0 (2026-09-14)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: jaeger-gh
    resource: https://github.com/jaegertracing/jaeger
    title: "Jaeger GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: jaeger-docs
    resource: https://www.jaegertracing.io/docs/latest/
    title: "Jaeger documentation (v2 architecture, v1 archive)"
---

# Summary
Jaeger, originally from Uber, completed a strategic re-platforming: Jaeger v2, released in November 2024, "utilizes OpenTelemetry Collector framework as the base" and extends it with Jaeger-specific storage and UI[^jaeger-docs]. The v1 line was maintained in parallel until v1.76.0 (Dec 3, 2025), after which only v2 releases (v2.14 in Jan 2026 through v2.21 in Sep 2026) continued[^jaeger-gh]. Verdict: **stable** — healthy but increasingly a component in a commoditized tracing market where Grafana Tempo, SigNoz and vendor backends compete for OTel traces.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11 | Jaeger v2 GA on OTel Collector[^jaeger-docs] | OSS | + |
| W24 | 2025-09-03 | v1.73 / v2.x dual releases continue[^jaeger-gh] | OSS | flat |
| W12 | 2025-12-03 | v1.76.0 — final v1 release line archived[^jaeger-gh][^jaeger-docs] | OSS | flat |
| W9 | 2026-01-02 → 2026-03-30 | v2.14 – v2.17[^jaeger-gh] | OSS | flat |
| W6 | 2026-05-13, 2026-06-03 | v2.18, v2.19[^jaeger-gh] | OSS | flat |
| W3 | 2026-07-20, 2026-09-14 | v2.20, v2.21[^jaeger-gh] | OSS | flat |

# OSS successes
- Avoided obsolescence by building on the OTel Collector instead of maintaining a parallel agent/collector stack[^jaeger-docs].
- Monthly-ish release cadence sustained through the transition[^jaeger-gh].

# OSS failures / risks
- Differentiation shrinks as OTel standardizes collection; storage backends (Cassandra/Elasticsearch/ClickHouse) carry the operational burden.

# Business successes
- n/a (no single commercial steward).

# Business failures / risks
- No vendor monetizes Jaeger directly, so maintainer funding depends on employers' goodwill.

# By window
## W3
- v2.20, v2.21[^jaeger-gh].
## W6
- v2.18, v2.19[^jaeger-gh].
## W9
- v2.14-v2.17, first v2-only quarter[^jaeger-gh].
## W12
- Final v1 release v1.76 (Dec 2025)[^jaeger-gh].
## W24
- Jaeger v2 launch on the OTel Collector[^jaeger-docs].

# Lessons
- Incumbent projects survive a new standard by becoming a distribution of it.

# Related
- [OpenTelemetry](/projects/cloud-native/opentelemetry.md), [SigNoz](/projects/cloud-native/signoz.md), [Grafana](/projects/cloud-native/grafana.md)

[^jaeger-gh]: https://github.com/jaegertracing/jaeger
[^jaeger-docs]: https://www.jaegertracing.io/docs/latest/
