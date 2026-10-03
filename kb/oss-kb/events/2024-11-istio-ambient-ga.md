---
type: Event
title: "Istio ambient (sidecar-less) mode reaches GA"
description: "Istio 1.24 (Nov 7, 2024) made ambient mode — ztunnel L4 node proxies plus optional waypoint L7 proxies — generally available after 26 months, shifting the service-mesh market away from sidecars."
event_kind: release
date: 2024-11-07
window: W24
impact: positive
projects: [projects/cloud-native/istio, projects/cloud-native/linkerd, projects/cloud-native/envoy]
organizations: [organizations/cncf]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: istio-ga
    resource: https://istio.io/latest/blog/2024/ambient-reaches-ga/
    title: "Istio: Ambient mode reaches General Availability"
    author: org:istio
  - id: istio-gh
    resource: https://github.com/istio/istio
    title: "Istio releases"
---

# What happened
Istio announced that ambient mode was GA in v1.24 on Nov 7, 2024: ztunnel, waypoints and the related APIs reached Stable[^istio-ga]. Ambient was first announced in September 2022[^istio-ga].

# Why it matters
Sidecars were the main cost and complexity complaint about meshes. Ambient users reported up to 90% overhead reduction, and one cut 45% of its containers after leaving AWS App Mesh[^istio-ga]. Sidecar-based rivals now had to compete with a lighter design.

# Outcome so far
Istio kept a quarterly release train to 1.31 (Aug 31, 2026)[^istio-gh]. Multi-cluster and VM support for ambient were still roadmap items at GA[^istio-ga].

# Related
- [Istio](/projects/cloud-native/istio.md), [Linkerd](/projects/cloud-native/linkerd.md), [Cilium](/projects/cloud-native/cilium.md)

[^istio-ga]: https://istio.io/latest/blog/2024/ambient-reaches-ga/
[^istio-gh]: https://github.com/istio/istio
