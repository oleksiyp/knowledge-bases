---
type: Organization
title: Eclipse Foundation
description: "Brussels-based OSS foundation; operator of Open VSX (critical for AI IDE forks) and a leading CRA open-source-steward voice; launched a paid Open VSX Managed Registry in April 2026."
resource: https://www.eclipse.org
tags: [foundation, europe, open-vsx, cra]
org_kind: foundation
hq: Brussels, Belgium
funding: { total_usd: "n/a", last_round: "n/a", last_round_date: 2026-04, valuation_usd: "n/a" }
business_verdict: stable
projects: [projects/security-sustainability/open-vsx, projects/security-sustainability/eu-cyber-resilience-act]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-openvsx
    resource: https://en.wikipedia.org/wiki/Open_VSX
    title: "Wikipedia: Open VSX"
  - id: openssf-registries
    resource: https://openssf.org/blog/2026/09/16/were-in-enterprise-commitment-to-sustainable-package-registries/
    title: "OpenSSF: registry sustainability commitment"
  - id: devtools-openvsx
    resource: https://en.wikipedia.org/wiki/Open_VSX
    title: "Wikipedia: Open VSX (GlassWorm: 72 extensions; Managed Registry launch participants)"
  - id: hw-vda-mou
    resource: https://www.vda.de/en/press/press-releases/2025/250624_PM_Automotive_industry_signs_Memorandum_of_Understanding
    title: "VDA: Automotive industry signs MoU for open-source software (2025-06)"
  - id: hw-sdv-ces
    resource: https://eclipsesdv.org/blogs/open-source-automotive-reaches-critical-mass-32-companies-unite-at-ces-and-traton-joins-eclipse-sdv/
    title: "Eclipse SDV: CES 2026 \u2014 32 companies unite; Traton joins"
---
# Summary
The Eclipse Foundation runs Open VSX, which by 2026 handled more than 50M requests a day for 10,000+ extensions. Its working group includes Google, Salesforce, Amazon Europe, Huawei, Posit and Siemens.[^wiki-openvsx] After repeated malware incidents (GlassWorm) and security fixes, it launched the **Open VSX Managed Registry** (Apr 2026) as a paid enterprise service.[^wiki-openvsx] OpenVSX is one of the registries named in the Sept 2026 enterprise funding commitment.[^openssf-registries] The foundation is also a central European voice on CRA steward obligations (no specific 2026 statement fetched).

# Business timeline
| Date | Event |
|---|---|
| 2023 | Open VSX Working Group formed[^wiki-openvsx] |
| 2026-04 | Open VSX Managed Registry launched[^wiki-openvsx] |
| 2026-09-16 | OpenVSX in enterprise registry commitment[^openssf-registries] |

# Monetization model
Memberships, working groups, and now a managed-registry service.

# Successes
- Earned revenue from registry infrastructure.[^wiki-openvsx]

# Failures / risks
- Malware on Open VSX is a reputational risk.

# Related
- [Open VSX](/projects/security-sustainability/open-vsx.md), [EU CRA](/projects/security-sustainability/eu-cyber-resilience-act.md)

[^wiki-openvsx]: Wikipedia.
[^openssf-registries]: OpenSSF blog.

## Additional notes (devtools-languages)
- From the developer-tools angle, Open VSX is the extension backbone for VS Code forks and AI editors, which cannot use Microsoft's Marketplace; usage reached 300M+ monthly downloads. The GlassWorm campaign abused 72 Open VSX extensions, and the April 2026 Managed Registry launched with AWS, Google and Cursor as participants.[^devtools-openvsx]
- Related: [Open VSX (devtools view)](/projects/devtools-languages/open-vsx.md), [Zed](/projects/devtools-languages/zed.md)

[^devtools-openvsx]: Wikipedia: Open VSX — https://en.wikipedia.org/wiki/Open_VSX

## Additional notes (hardware-embedded)
- The Eclipse SDV working group hosts **S-CORE**, the automotive industry's shared safety-oriented vehicle software core. Eleven OEMs and suppliers (BMW, Mercedes-Benz, VW, Bosch, ZF and others) signed a VDA MoU in June 2025 to build it in the open,[^hw-vda-mou] and the circle widened to 32 executives at CES 2026, when Traton joined as a strategic member. S-CORE 0.5 shipped and 1.0 is targeted for end-2026.[^hw-sdv-ces]
- Domain files: [Eclipse S-CORE](/projects/hardware-embedded/eclipse-s-core.md), [Event: S-CORE MoU](/events/2025-06-automakers-sign-eclipse-s-core-mou.md).

[^hw-vda-mou]: VDA, June 2025.
[^hw-sdv-ces]: Eclipse SDV blog, Jan 2026.
