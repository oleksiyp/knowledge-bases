---
type: OSS Project
title: "VictoriaMetrics"
description: "Apache-2.0 Prometheus-compatible time-series database (plus VictoriaLogs/VictoriaTraces); bootstrapped, profitable-style vendor with a relentless biweekly release cadence (v1.142 → v1.153 in 2026) — a stable, independent alternative to Mimir/Thanos."
resource: https://github.com/VictoriaMetrics/VictoriaMetrics
tags: [cloud-native, observability, metrics, apache-2.0, open-core]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2019-)"]
governance: company-led-open-core
steward: VictoriaMetrics Inc.
backing_orgs: []
metrics:
  github_stars: { value: 17810, as_of: 2026-10-03 }
  latest_release: { value: "v1.153.0 (2026-09-28)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vm-licenses-blog
    resource: https://victoriametrics.com/blog/open-source-software-licenses-vs-revenue-growth-rates/
    title: "VictoriaMetrics blog: Open source software licenses vs revenue growth rates (Aug 30, 2024)"
    author: org:victoriametrics
  - id: vm-gh
    resource: https://github.com/VictoriaMetrics/VictoriaMetrics
    title: "VictoriaMetrics GitHub repository and releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: panw-chrono
    resource: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
    title: "Palo Alto Networks to Acquire Chronosphere"
---

# Summary
VictoriaMetrics is a fast, cost-efficient Prometheus-compatible TSDB with single-node and cluster versions under Apache-2.0 and an enterprise edition adding features like anomaly detection and backup automation[^vm-gh]. It releases roughly every two weeks (v1.142 on Apr 28, 2026 to v1.153 on Sep 28, 2026) with ~13k commits and ~17.8k stars[^vm-gh]. In a market where the venture-backed peer Chronosphere was acquired for $3.35B[^panw-chrono], VictoriaMetrics stayed independent and permissively licensed. The company says it has never taken outside investment, is "entirely fueled by the revenue we generate" and is profitable, selling mainly enterprise support rather than gated features (Aug 2024)[^vm-licenses-blog]; third-party revenue estimates (~$5M) are not company-confirmed. Verdict: OSS **stable**, business **stable** (bootstrapped and profitable by its own account).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-19 | Peer Chronosphere acquired by Palo Alto Networks — consolidation in Prometheus-compatible SaaS[^panw-chrono] | Business | mixed |
| W6 | 2026-04-28 → 2026-06-22 | v1.142 – v1.146[^vm-gh] | OSS | flat |
| W3 | 2026-07-06 → 2026-09-28 | v1.147 – v1.153[^vm-gh] | OSS | flat |

# OSS successes
- Permissive license maintained while many peers moved to AGPL or source-available.
- Very high release cadence[^vm-gh].

# OSS failures / risks
- Single-company maintainer base; ~670 open issues[^vm-gh].

# Business successes
- Bootstrapped and self-described profitable; monetizes support so paid customers can stay on the open-source build[^vm-licenses-blog].

# Business failures / risks
- Smaller marketing footprint than Grafana Labs; Mimir and Chronosphere/PANW compete for the same enterprises.

# By window
## W3
- v1.147-v1.153[^vm-gh].
## W6
- v1.142-v1.146[^vm-gh].
## W9
- No notable events found.
## W12
- Chronosphere acquisition reshapes competitor landscape[^panw-chrono].
## W24
- No notable events found.

# Lessons
- Performance-led, permissively licensed infrastructure can sustain a lean vendor without hyper-growth funding.

# Related
- [Prometheus](/projects/cloud-native/prometheus.md), [Grafana](/projects/cloud-native/grafana.md), [Chronosphere](/organizations/chronosphere.md)

[^vm-gh]: https://github.com/VictoriaMetrics/VictoriaMetrics
[^panw-chrono]: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
[^vm-licenses-blog]: https://victoriametrics.com/blog/open-source-software-licenses-vs-revenue-growth-rates/
