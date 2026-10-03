---
type: Organization
title: "Cloud Native Computing Foundation (CNCF)"
description: "Linux Foundation sub-foundation hosting Kubernetes and 240+ projects; 2024-2026 saw high-profile graduations (Crossplane Nov 2025, OpenTelemetry May 2026), new sandbox entrants (Podman, Spin, Jan 2025) and the first big retirement of a core-adjacent project (ingress-nginx, Mar 2026)."
resource: https://www.cncf.io
tags: [foundation, cloud-native, governance]
org_kind: foundation
hq: San Francisco, USA (Linux Foundation)
funding: { total_usd: "n/a (membership-funded)", last_round: "n/a", last_round_date: null, valuation_usd: "n/a" }
business_verdict: stable
projects: [projects/cloud-native/kubernetes, projects/cloud-native/opentelemetry, projects/cloud-native/prometheus, projects/cloud-native/cilium, projects/cloud-native/istio, projects/cloud-native/linkerd, projects/cloud-native/envoy, projects/cloud-native/argo-cd, projects/cloud-native/flux, projects/cloud-native/crossplane, projects/cloud-native/backstage, projects/cloud-native/containerd, projects/cloud-native/podman, projects/cloud-native/kubevirt, projects/cloud-native/spin-webassembly, projects/cloud-native/jaeger, projects/cloud-native/external-secrets-operator, projects/cloud-native/ingress-nginx, projects/cloud-native/gateway-api]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cncf-otel-grad
    resource: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
    title: "CNCF announces OpenTelemetry's graduation"
  - id: xp-grad
    resource: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
    title: "Crossplane graduates from CNCF"
  - id: podman-cncf
    resource: https://www.cncf.io/projects/podman-container-tools/
    title: "CNCF: Podman Container Tools"
  - id: spin-cncf
    resource: https://www.cncf.io/projects/spin/
    title: "CNCF: Spin"
  - id: cncf-archived
    resource: https://www.cncf.io/archived-projects/
    title: "CNCF archived projects"
  - id: ingn-statement
    resource: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
    title: "Ingress NGINX: Statement from the Kubernetes Steering and Security Response Committees"
  - id: wasmcloud-cncf
    resource: https://www.cncf.io/projects/wasmcloud/
    title: "CNCF: wasmCloud"
---

# Summary
CNCF is the governance home for the cloud-native stack. In the two-year window it graduated Crossplane (Nov 6, 2025) and OpenTelemetry (May 21, 2026)[^xp-grad][^cncf-otel-grad], admitted Podman Container Tools and Spin to the Sandbox (Jan 21, 2025)[^podman-cncf][^spin-cncf] and moved wasmCloud to Incubating (Nov 2024)[^wasmcloud-cncf]. CNCF reports 240+ projects; its archive lists 27 retired projects (e.g., Brigade, Keptn, Open Service Mesh)[^cncf-otel-grad][^cncf-archived]. The hardest moment was Kubernetes' retirement of ingress-nginx, used by ~50% of environments but maintained by 1-2 people[^ingn-statement]. Verdict: **stable** institution; sustainability of widely used but unglamorous projects is its central unsolved problem.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2024-11-08 | wasmCloud to Incubating[^wasmcloud-cncf] |
| W24 | 2025-01-21 | Podman Container Tools and Spin accepted to Sandbox[^podman-cncf][^spin-cncf] |
| W12 | 2025-11-06 | Crossplane graduates[^xp-grad] |
| W9 | 2026-01-29 | Kubernetes Steering/SRC statement on ingress-nginx retirement[^ingn-statement] |
| W6 | 2026-05-21 | OpenTelemetry graduates[^cncf-otel-grad] |

# Monetization model
Corporate memberships, KubeCon + CloudNativeCon events, training and certification (CKA etc.).

# Successes
- Graduation process produced credible "standard" signals (OTel, Crossplane)[^cncf-otel-grad][^xp-grad].
- Foundation hosting saved Flux after Weaveworks failed, and protected Spin through the Fermyon acquisition.

# Failures / risks
- Member companies fund events and marketing more readily than maintainers of critical components (ingress-nginx, External Secrets)[^ingn-statement].
- Sandbox churn and a growing archive raise questions about project intake standards[^cncf-archived].

# Related
- [Linux Foundation](/organizations/linux-foundation.md), [Kubernetes](/projects/cloud-native/kubernetes.md), [OpenTelemetry](/projects/cloud-native/opentelemetry.md), [Domain review](/domains/cloud-native.md)

[^cncf-otel-grad]: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
[^xp-grad]: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
[^podman-cncf]: https://www.cncf.io/projects/podman-container-tools/
[^spin-cncf]: https://www.cncf.io/projects/spin/
[^cncf-archived]: https://www.cncf.io/archived-projects/
[^ingn-statement]: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
[^wasmcloud-cncf]: https://www.cncf.io/projects/wasmcloud/
