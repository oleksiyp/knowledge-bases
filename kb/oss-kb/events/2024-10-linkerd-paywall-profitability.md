---
type: Event
title: Buoyant says Linkerd stable-release paywall made it profitable
description: "Eight months after Buoyant stopped publishing free stable Linkerd builds (Feb 2024) while keeping the code Apache-2.0, it announced in Oct 2024 that it was profitable and had hired more maintainers — a no-relicense alternative to BSL/SSPL that it kept using through Linkerd 2.20 (June 2026)."
event_kind: other
date: 2024-10-23
window: W24
impact: mixed
projects: [projects/cloud-native/linkerd]
organizations: [organizations/buoyant]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: linkerd-sustainable
    resource: https://linkerd.io/2024/10/23/making-linkerd-sustainable/
    title: "Linkerd blog: Towards a sustainable service mesh (2024-10-23)"
  - id: tt-paywall
    resource: https://www.techtarget.com/searchitoperations/news/366614632/Linkerd-stable-release-paywall-worked-Buoyant-CEO-says
    title: "TechTarget: Linkerd stable release paywall worked, Buoyant CEO says (2024-10-24)"
  - id: tns-release-model
    resource: https://thenewstack.io/buoyant-revises-release-model-for-the-linkerd-service-mesh/
    title: "The New Stack: Buoyant revises release model for the Linkerd service mesh (2024)"
  - id: buoyant-218
    resource: https://www.buoyant.io/blog/announcing-linkerd-2-18
    title: "Buoyant: Announcing Linkerd 2.18 (2025-04-23)"
  - id: bel-220
    resource: https://www.buoyant.io/blog/bel-2-20-automated-trust-anchor-rotation-windows-vm-support-rate-limit-aware-load-balancing
    title: "Buoyant: Announcing Buoyant Enterprise for Linkerd 2.20 (2026-06)"
---

# What happened
In Feb 2024 Buoyant stopped publishing free stable release packages of Linkerd, a CNCF-graduated service mesh. The code stayed Apache-2.0, and only "edge" builds remained free; stable builds moved to Buoyant Enterprise for Linkerd (BEL), which is free in production for companies under 50 employees.[^tns-release-model][^bel-220] On Oct 23, 2024 the project said the change had made Linkerd sustainable.[^linkerd-sustainable] Buoyant CEO William Morgan told TechTarget that the company had doubled its paying customers and ARR, become profitable, and hired more core maintainers. Analysts warned against treating it as a general model.[^tt-paywall]

# Why it matters
It is a third route between staying fully free and relicensing. The source stays OSI-approved and inside CNCF rules, and the vendor charges for the convenience and assurance of stable builds. Over the same period Redis, Elastic, HashiCorp and others changed licences instead.

# Outcome so far
Buoyant kept shipping on this model: Linkerd 2.18 (Apr 23, 2025), 2.19 (Oct 2025) and BEL 2.20 (June 2026).[^buoyant-218][^bel-220] No community fork that publishes free stable builds gained traction, but no independent profitability figures were found beyond the CEO's 2024 statements.

# Related
- [Linkerd](/projects/cloud-native/linkerd.md), [Buoyant](/organizations/buoyant.md)
- [Istio ambient GA](/events/2024-11-istio-ambient-ga.md)
- [Licensing & forks domain review](/domains/licensing-forks.md)

[^linkerd-sustainable]: Linkerd blog — https://linkerd.io/2024/10/23/making-linkerd-sustainable/
[^tt-paywall]: TechTarget — https://www.techtarget.com/searchitoperations/news/366614632/Linkerd-stable-release-paywall-worked-Buoyant-CEO-says
[^tns-release-model]: The New Stack — https://thenewstack.io/buoyant-revises-release-model-for-the-linkerd-service-mesh/
[^buoyant-218]: Buoyant — https://www.buoyant.io/blog/announcing-linkerd-2-18
[^bel-220]: Buoyant — https://www.buoyant.io/blog/bel-2-20-automated-trust-anchor-rotation-windows-vm-support-rate-limit-aware-load-balancing
