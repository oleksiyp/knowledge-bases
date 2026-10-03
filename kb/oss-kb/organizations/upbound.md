---
type: Organization
title: "Upbound"
description: "Crossplane creator; shipped Crossplane 2.0 and \"AI-native\" UXP 2.0 (Aug 2025) and saw Crossplane graduate (Nov 2025), but gated new Official Providers to its UXP distribution and has disclosed no funding since its 2021 Series B (~$69M total)."
resource: https://www.upbound.io
tags: [commercial-open-source, iac, platform-engineering, control-planes]
org_kind: coss-startup
hq: Seattle, USA
funding: { total_usd: "~69M", last_round: "Series B $60M (Altimeter lead)", last_round_date: 2021-11, valuation_usd: "unverified" }
business_verdict: struggling
projects: [projects/cloud-native/crossplane]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: xp-grad
    resource: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
    title: "Upbound: Crossplane graduates from CNCF"
    author: org:upbound
  - id: uxp2
    resource: https://blog.upbound.io/introducing-upbound-crossplane-2-0
    title: "Introducing Upbound Crossplane 2.0"
  - id: uxp2-clarify
    resource: https://www.upbound.io/blog/uxp-2-0-and-crossplane
    title: "UXP 2.0 and Crossplane: Clarifying the Relationship"
  - id: intel-b
    resource: https://www.intelcapital.com/upbound-raises-60m-in-funding-from-altimeter-capital-gv-intel-capital-and-others-to-advance-its-universal-cloud-management-platform/
    title: "Upbound raises $60M (Series B, 2021)"
  - id: uxp-gh
    resource: https://github.com/upbound/universal-crossplane
    title: "GitHub: upbound/universal-crossplane (archived 2026-07-22)"
    author: org:upbound
  - id: xp-v23
    resource: https://github.com/crossplane/crossplane/releases/tag/v2.3.0
    title: "GitHub: Crossplane v2.3.0 release (2026-05-21)"
    author: org:crossplane
---

# Summary
Upbound (founder/CEO Bassam Tabbara) is the main company behind Crossplane. It launched Upbound Crossplane (UXP) 2.0, an "AI-native" distribution, on Aug 14, 2025, and on Aug 19 clarified that Official Providers from v2.0 run only on UXP (free Community Edition, paid enterprise tiers)[^uxp2][^uxp2-clarify]. CNCF graduated Crossplane on Nov 6, 2025[^xp-grad]. Upbound describes itself as a Series B company with $69M raised, backed by GV, Altimeter and Intel Capital — no newer round found[^xp-grad][^intel-b]. Pass-2 note: no Crossplane v3 or UXP v3 release has been announced as of 2026-10-03; upstream Crossplane is on v2.3 (May 2026) with v2.4 scheduled, and Upbound archived its public UXP repository on 2026-07-22, moving development in-house[^uxp-gh][^xp-v23]. Business verdict: **struggling** (inferred from gating moves and absence of new funding; no layoffs verified).

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2025-08-14 | UXP 2.0 launched with Crossplane 2.0[^uxp2] |
| W24 | 2025-08-19 | Official Providers v2+ restricted to UXP[^uxp2-clarify] |
| W12 | 2025-11-06 | Crossplane graduates CNCF[^xp-grad] |
| W3 | 2026-07-22 | Public universal-crossplane (UXP) repo archived; UXP now developed in internal repos (UXP v2.3.x tracks Crossplane v2.3)[^uxp-gh] |

# Monetization model
UXP distribution (free Community, paid enterprise), Official Providers, managed control planes (Upbound Cloud)[^uxp2-clarify].

# Successes
- Shepherded Crossplane to graduation with 3,000+ contributors[^xp-grad].

# Failures / risks
- Provider gating alienates part of the community; competition from Terraform/OpenTofu/Pulumi; no new capital since 2021.

# Related
- [Crossplane](/projects/cloud-native/crossplane.md), [Event: Crossplane 2.0 provider split](/events/2025-08-crossplane-2-uxp-official-providers.md)

[^xp-grad]: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
[^uxp2]: https://blog.upbound.io/introducing-upbound-crossplane-2-0
[^uxp2-clarify]: https://www.upbound.io/blog/uxp-2-0-and-crossplane
[^intel-b]: https://www.intelcapital.com/upbound-raises-60m-in-funding-from-altimeter-capital-gv-intel-capital-and-others-to-advance-its-universal-cloud-management-platform/
[^uxp-gh]: GitHub, upbound/universal-crossplane.
[^xp-v23]: GitHub, Crossplane v2.3.0.
