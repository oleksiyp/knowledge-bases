---
type: Area
title: Networking, service meshes and gateways
description: eBPF and mesh simplification progressed while maintenance and migration obligations remained.
area: networking
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: i1
  resource: /ideas/networking/ebpf-networking.md
  title: eBPF as an infrastructure implementation technique
- id: i2
  resource: /ideas/networking/mesh-simplification.md
  title: Service mesh simplification through ambient architecture
- id: i3
  resource: /ideas/networking/gateway-lifecycle.md
  title: Gateway modernization and the failure of assumed maintenance
- id: case-michelin-cilium
  resource: /research/michelin-cilium.md
  title: 'Michelin: successful CNI consolidation with a selective mesh strategy'
- id: case-zalando-routing
  resource: /research/zalando-routing.md
  title: 'Zalando: a routing optimization succeeded while zone affinity remained unresolved'
---

# Networking, service meshes and gateways

eBPF and mesh simplification progressed while maintenance and migration obligations remained.

## Idea scorecard

Verdicts concern the stated idea and fit, not market share. “Winning” means a durable useful mechanism with the evidence limits described in the linked assessment. [^i1] [^i2] [^i3]

| Idea | Verdict | Assessment |
|---|---|---|
| [eBPF as an infrastructure implementation technique](/ideas/networking/ebpf-networking.md) | winning | eBPF gained a durable role in networking and visibility, while operational responsibility moved into a different layer. |
| [Service mesh simplification through ambient architecture](/ideas/networking/mesh-simplification.md) | mixed | Ambient mesh reduces per-workload proxy coupling but does not remove identity, policy and traffic-management complexity. |
| [Gateway modernization and the failure of assumed maintenance](/ideas/networking/gateway-lifecycle.md) | mixed | Widely deployed infrastructure still needs funded maintainers, migration paths and explicit lifecycle ownership. |
| [Locality-aware routing must account for cache and backend costs](/ideas/networking/locality-and-routing.md) | mixed | A local network hop can be cheaper while the full request becomes more expensive. |

## What succeeded

Cilium’s ecosystem and Istio ambient’s architectural change show active technical maturation. The interesting improvement is a more selective placement of functionality, rather than the assumption that every workload needs every networking feature.

## What failed or remained unsettled

Ingress-nginx retirement exposes the gap between widespread use and sustainable maintenance. Ambient mesh also trades some per-workload coupling for shared components; it does not remove policy or diagnosis work.

## Decision implications

Choose the smallest supported implementation that meets traffic, identity and policy requirements. Inventory controllers and support status. During migration, test actual routing and failure behavior rather than assuming API similarity means equivalent behavior.

## Evidence trail

* [2023 10 11 Cilium](/events/2023-10-11-cilium.md)
* [2024 11 07 Ambient](/events/2024-11-07-ambient.md)
* [2025 11 11 Ingress](/events/2025-11-11-ingress.md)

The scorecard is a synthesis of the linked assessments. Release milestones establish availability; case studies establish situated experience; surveys establish associations. None alone establishes universal return on investment.

* [Executive summary](/executive-summary.md)
* [Cross-cutting lessons](/lessons/)

## Selected systems and standards

* [Cilium](/systems/cilium.md) — An eBPF-based networking and policy ecosystem that graduated in 2023.
* [Ingress NGINX](/systems/ingress-nginx.md) — A widely used community controller whose announced maintenance endpoint required migration planning.
* [Istio ambient](/systems/istio.md) — A service-mesh architecture separating baseline traffic handling from optional L7 processing.

## Additional evidence: Michelin: successful CNI consolidation with a selective mesh strategy

A fleet migration supports targeted networking consolidation while a prior mesh deployment had little internal uptake.[^case-michelin-cilium]

* [Case details and limitations](/research/michelin-cilium.md)

## Additional evidence: Zalando: a routing optimization succeeded while zone affinity remained unresolved

One production account separates realized routing gains from an unfinished locality-cost hypothesis.[^case-zalando-routing]

* [Case details and limitations](/research/zalando-routing.md)

[^i1]: [eBPF as an infrastructure implementation technique](/ideas/networking/ebpf-networking.md)
[^i2]: [Service mesh simplification through ambient architecture](/ideas/networking/mesh-simplification.md)
[^i3]: [Gateway modernization and the failure of assumed maintenance](/ideas/networking/gateway-lifecycle.md)
[^case-michelin-cilium]: [Michelin: successful CNI consolidation with a selective mesh strategy](/research/michelin-cilium.md)
[^case-zalando-routing]: [Zalando: a routing optimization succeeded while zone affinity remained unresolved](/research/zalando-routing.md)
