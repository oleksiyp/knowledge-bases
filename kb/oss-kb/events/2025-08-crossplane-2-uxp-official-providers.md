---
type: Event
title: "Crossplane 2.0 ships; Upbound restricts new Official Providers to its UXP distribution"
description: "Crossplane 2.0 and Upbound's \"AI-native\" UXP 2.0 launched Aug 14, 2025; on Aug 19 Upbound said Official Providers from v2.0 run only on UXP, splitting upstream users from vendor-maintained providers, months before Crossplane's CNCF graduation (Nov 6, 2025)."
event_kind: governance
date: 2025-08-14
window: W24
impact: mixed
projects: [projects/cloud-native/crossplane]
organizations: [organizations/upbound, organizations/cncf]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: uxp2
    resource: https://blog.upbound.io/introducing-upbound-crossplane-2-0
    title: "Introducing Upbound Crossplane 2.0"
    author: org:upbound
  - id: uxp2-clarify
    resource: https://www.upbound.io/blog/uxp-2-0-and-crossplane
    title: "UXP 2.0 and Crossplane: Clarifying the Relationship"
    author: org:upbound
  - id: xp-grad
    resource: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
    title: "Crossplane graduates from CNCF"
  - id: xp-gh
    resource: https://github.com/crossplane/crossplane
    title: "Crossplane releases"
---

# What happened
Crossplane 2.0 was released on Aug 14, 2025[^xp-gh]. The same day Upbound launched Upbound Crossplane (UXP) 2.0, an "AI-native" distribution[^uxp2]. On Aug 19, Upbound said that from v2.0 its Official Providers (the AWS/GCP/Azure providers most users run) work only on UXP. Upstream users can stay on pre-2.0 provider versions, switch to the free UXP Community Edition, or use crossplane-contrib community providers[^uxp2-clarify].

# Why it matters
Upbound did not relicense anything. Instead it moved the most valuable extension point behind its own distribution. It is a "soft" open-core move that keeps the foundation project nominally neutral while concentrating value in the vendor's product[^uxp2-clarify].

# Outcome so far
CNCF graduated Crossplane on Nov 6, 2025, citing 3,000+ contributors and 100M+ downloads[^xp-grad]. Upstream releases continued (v2.1 to v2.4 by Aug 2026)[^xp-gh]. No new Upbound funding has been disclosed since 2021[^xp-grad].

# Related
- [Crossplane](/projects/cloud-native/crossplane.md), [Upbound](/organizations/upbound.md)

[^uxp2]: https://blog.upbound.io/introducing-upbound-crossplane-2-0
[^uxp2-clarify]: https://www.upbound.io/blog/uxp-2-0-and-crossplane
[^xp-grad]: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
[^xp-gh]: https://github.com/crossplane/crossplane
