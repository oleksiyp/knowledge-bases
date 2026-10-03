---
type: Organization
title: "Chronosphere"
description: "Prometheus/OpenTelemetry-native observability SaaS founded by ex-Uber M3 engineers; acquired by Palo Alto Networks for $3.35B (announced Nov 19, 2025, closed Jan 29, 2026) at $160M+ ARR growing triple digits."
resource: https://chronosphere.io
tags: [observability, prometheus, opentelemetry, acquired]
org_kind: coss-startup
hq: New York, USA
funding: { total_usd: "$343M (company, Jan 2023)", last_round: "Series C extension $115M at $1.6B (2023-01-10); acquired by Palo Alto Networks 2026-01-29", last_round_date: 2026-01-29, valuation_usd: "3.35B announced price; ~3.0B purchase consideration recorded at close (PANW 10-Q)" }
business_verdict: acquired
projects: [projects/cloud-native/prometheus, projects/cloud-native/opentelemetry]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: panw-chrono
    resource: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
    title: "Palo Alto Networks to Acquire Chronosphere"
    author: org:palo-alto-networks
  - id: panw-close
    resource: https://www.tradingview.com/news/tradingview:23ec310350c2b:0-palo-alto-networks-completes-chronosphere-acquisition/
    title: "Palo Alto Networks completes Chronosphere acquisition"
  - id: panw-10q
    resource: https://www.sec.gov/Archives/edgar/data/1327567/000132756726000005/panw-20260131.htm
    title: "Palo Alto Networks Form 10-Q (quarter ended Jan 31, 2026)"
    author: org:sec
  - id: tc-chrono-c
    resource: https://techcrunch.com/2023/01/10/observability-platform-chronosphere-raises-another-115m-at-a-1-6b-valuation/
    title: "TechCrunch: Chronosphere raises another $115M at a $1.6B valuation (2023-01-10)"
    author: org:techcrunch
---

# Summary
Chronosphere built a high-scale, cost-controlling observability platform compatible with Prometheus and OpenTelemetry. Palo Alto Networks agreed on Nov 19, 2025 to acquire it for $3.35B in cash and replacement equity; Chronosphere had $160M+ ARR at end-September 2025 with triple-digit growth[^panw-chrono]. The deal closed Jan 29, 2026, with co-founder Martin Mao becoming SVP/GM of Observability at Palo Alto Networks; Palo Alto's 10-Q records total purchase consideration of ~$3.0B ($2,842M cash plus $109M of replacement awards) at closing, versus the $3.35B announced headline[^panw-close][^panw-10q]. Chronosphere had raised $343M in venture funding, last valued at $1.6B in Jan 2023[^tc-chrono-c]. Business verdict: **acquired** — a strong exit (~19–21x ARR). (Pass 2: consideration at close added from the 10-Q.)

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2025-09 | ARR $160M+, triple-digit YoY growth[^panw-chrono] |
| W12 | 2025-11-19 | Acquisition agreement, $3.35B[^panw-chrono] |
| W9 | 2026-01-29 | Acquisition completed (~$3.0B consideration recorded); integration with Cortex AgentiX[^panw-close][^panw-10q] |

# Monetization model
Usage-based SaaS with telemetry-volume control (claims 30%+ data reduction), built on open standards rather than proprietary agents[^panw-close].

# Successes
- Turned open standards (Prometheus, OTel) into a premium SaaS and a multi-billion exit[^panw-chrono].

# Failures / risks
- Inside a security vendor, observability roadmap may tilt toward SecOps; OSS contributions (M3 lineage) may decline.

# Related
- [Event: Palo Alto Networks acquires Chronosphere](/events/2025-11-palo-alto-acquires-chronosphere.md), [Prometheus](/projects/cloud-native/prometheus.md), [OpenTelemetry](/projects/cloud-native/opentelemetry.md), [Grafana Labs](/organizations/grafana-labs.md)

[^panw-chrono]: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
[^panw-close]: https://www.tradingview.com/news/tradingview:23ec310350c2b:0-palo-alto-networks-completes-chronosphere-acquisition/
[^panw-10q]: https://www.sec.gov/Archives/edgar/data/1327567/000132756726000005/panw-20260131.htm
[^tc-chrono-c]: TechCrunch, 2023-01-10.
