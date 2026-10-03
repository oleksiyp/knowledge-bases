---
type: OSS Project
title: "Prometheus"
description: "The CNCF-graduated metrics system; Prometheus 3.0 (Nov 2024, first major in 7 years) modernized it with OTLP ingestion, UTF-8 names, Remote Write 2.0 and native histograms, followed by a steady 6-weekly 3.x cadence — stable, well-governed infrastructure."
resource: https://github.com/prometheus/prometheus
tags: [cloud-native, observability, metrics, apache-2.0, foundation-hosted, cncf-graduated]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2012-)"]
governance: foundation
steward: Cloud Native Computing Foundation
backing_orgs: [organizations/cncf, organizations/grafana-labs]
metrics:
  github_stars: { value: 66344, as_of: 2026-10-03 }
  latest_minor: { value: "v3.15.0 (2026-09-25)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: prom3
    resource: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
    title: "Announcing Prometheus 3.0"
    author: org:prometheus
  - id: prom-gh
    resource: https://github.com/prometheus/prometheus
    title: "Prometheus GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: vm-gh
    resource: https://github.com/VictoriaMetrics/VictoriaMetrics
    title: "VictoriaMetrics repository"
  - id: panw-chrono
    resource: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
    title: "Palo Alto Networks to Acquire Chronosphere"
---

# Summary
Prometheus remains the default metrics engine for Kubernetes. Prometheus 3.0, released November 14, 2024 as the first major version in seven years, added a rewritten UI, UTF-8 metric/label names, Remote Write 2.0, a native OTLP receiver and (experimental) native histograms[^prom3]. Since then the project has shipped a 3.x minor roughly every six weeks, reaching v3.15.0 on Sep 25, 2026[^prom-gh]. The commercial value around the Prometheus data model sits with Grafana Labs (Mimir), Chronosphere (acquired by Palo Alto Networks) and VictoriaMetrics[^panw-chrono][^vm-gh]. Verdict: **stable**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-14 | Prometheus 3.0 released[^prom3] | OSS | + |
| W24 | 2025-05-17 → 2025-09-22 | v3.4 – v3.6 releases[^prom-gh] | OSS | + |
| W12 | 2025-10-15, 2025-12-02 | v3.7, v3.8[^prom-gh] | OSS | flat |
| W12 | 2025-11-19 | Chronosphere (Prometheus-compatible SaaS) to be acquired for $3.35B[^panw-chrono] | Business | + |
| W9 | 2026-01-07, 2026-02-26 | v3.9, v3.10[^prom-gh] | OSS | flat |
| W6 | 2026-04-02 → 2026-07-01 | v3.11 – v3.13[^prom-gh] | OSS | flat |
| W3 | 2026-08-18, 2026-09-25 | v3.14, v3.15[^prom-gh] | OSS | flat |

# OSS successes
- Successfully absorbed OpenTelemetry rather than competing with it (OTLP receiver, UTF-8 naming)[^prom3].
- Reliable release train (14 minors in 22 months)[^prom-gh].

# OSS failures / risks
- Scaling still requires a third-party backend (Mimir, Thanos, VictoriaMetrics, Cortex), fragmenting long-term storage.
- Maintainer base is concentrated in a few vendors (Grafana Labs, Red Hat, Chronosphere/PANW).

# Business successes
- Prometheus-compatible backends are valuable: Chronosphere's $3.35B exit[^panw-chrono]; VictoriaMetrics remains independent and Apache-2.0[^vm-gh].

# Business failures / risks
- None for the project; no single vendor controls it.

# By window
## W3
- v3.14 and v3.15 releases[^prom-gh].
## W6
- v3.11-v3.13 releases[^prom-gh].
## W9
- v3.9-v3.10 releases[^prom-gh].
## W12
- v3.7-v3.8; Chronosphere deal[^prom-gh][^panw-chrono].
## W24
- Prometheus 3.0 (Nov 14, 2024)[^prom3].

# Lessons
- Mature OSS stays relevant by adopting the emerging standard (OTel) instead of fighting it.
- A small, stable core with an ecosystem of scale-out backends lets commercial value accrue elsewhere without destabilizing governance.

# Related
- [OpenTelemetry](/projects/cloud-native/opentelemetry.md), [VictoriaMetrics](/projects/cloud-native/victoriametrics.md), [Grafana](/projects/cloud-native/grafana.md)
- [Chronosphere](/organizations/chronosphere.md), [Grafana Labs](/organizations/grafana-labs.md)

[^prom3]: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
[^prom-gh]: https://github.com/prometheus/prometheus
[^vm-gh]: https://github.com/VictoriaMetrics/VictoriaMetrics
[^panw-chrono]: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
