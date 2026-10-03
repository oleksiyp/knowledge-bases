---
type: Organization
title: "Determinate Systems"
description: "Nix-focused company (Determinate Nix, FlakeHub, Determinate Secure Packages); in 2026 won FedRAMP High for FlakeHub and pitched Nix as an EU Cyber Resilience Act compliance tool — growing commercial layer over a community project."
resource: https://determinate.systems
tags: [commercial-open-source, nix, supply-chain-security, reproducible-builds]
org_kind: coss-startup
hq: USA
funding: { total_usd: "~$3.5M seed reported (2022; trackers, not company-confirmed)", last_round: "Seed (Root Ventures among investors; per trackers)", last_round_date: 2022-05, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/cloud-native/nix]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: detsys-blog
    resource: https://determinate.systems/blog/
    title: "Determinate Systems blog"
    author: org:determinate-systems
  - id: knox-detsys
    resource: https://cioinfluence.com/cloud/determinate-systems-achieves-fedramp-high-authorization-through-partnership-with-knox-systems/
    title: "CIO Influence: Determinate Systems achieves FedRAMP High authorization through partnership with Knox Systems (2026-07-15)"
  - id: detsys-emu
    resource: https://determinate.systems/blog/flakehub-github-enterprise-managed-users/
    title: "Determinate Systems blog: FlakeHub now supports GitHub Enterprise Managed Users (2026-09-14)"
    author: org:determinate-systems
---

# Summary
Determinate Systems distributes its own downstream "Determinate Nix" (3.x series through 3.22.2 in Aug 2026) and sells FlakeHub (a flake registry/cache) and Determinate Secure Packages[^detsys-blog]. Highlights in 2026: FlakeHub FedRAMP High via a partnership with federal managed-cloud provider Knox Systems (Jul 15)[^knox-detsys], FlakeAudit/FlakeBOM SBOM tooling (Jun-Aug), CRA compliance positioning (Aug 13), a public CVE dashboard (Aug 27) and support for GitHub Enterprise Managed Users (EMU), which carries IdP-managed SSO, SCIM provisioning and Conditional Access policies through to FlakeHub (Sep 14)[^detsys-emu]. (Corrected in pass 2: "GitHub Enterprise SSO/SCIM" → GitHub Enterprise Managed Users support.) Business verdict: **growing** (funding/revenue not verified).

# Business timeline
| Window | Date | Event |
|---|---|---|
| W6 | 2026-06-12 | Determinate Secure Packages 26.05[^detsys-blog] |
| W3 | 2026-07-15 | FlakeHub FedRAMP High via Knox Systems partnership[^knox-detsys] |
| W3 | 2026-08-13 | EU CRA compliance offering[^detsys-blog] |
| W3 | 2026-09-14 | FlakeHub supports GitHub Enterprise Managed Users[^detsys-emu] |

# Monetization model
Enterprise SaaS (FlakeHub), supported Nix distribution and curated secure package sets[^detsys-blog].

# Successes
- Regulated-market traction (federal, CRA)[^detsys-blog].

# Failures / risks
- Downstream divergence from community Nix creates governance tension.

# Related
- [Nix](/projects/cloud-native/nix.md)

[^detsys-blog]: https://determinate.systems/blog/
[^knox-detsys]: CIO Influence, 2026-07-15.
[^detsys-emu]: Determinate Systems blog, 2026-09-14.
