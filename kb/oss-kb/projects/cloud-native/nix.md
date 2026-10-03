---
type: OSS Project
title: "Nix / NixOS (with Determinate Systems and Flox)"
description: "Reproducible, declarative package manager and OS; community governance turbulence in 2024 gave way to a commercial layer — Determinate Systems' downstream Determinate Nix 3.x, FlakeHub FedRAMP High (Jul 2026), CRA/SBOM tooling — and Flox's developer environments; OSS growing, business growing."
resource: https://github.com/NixOS/nix
tags: [cloud-native, reproducible-builds, package-manager, supply-chain-security, lgpl-2.1, community]
domain: cloud-native
license: LGPL-2.1
license_history: ["LGPL-2.1 (2003-)"]
governance: community
steward: NixOS Foundation (community); Determinate Systems and Flox as commercial distributors
backing_orgs: [organizations/determinate-systems]
metrics:
  github_stars: { value: 17820, as_of: 2026-10-03 }
  flox_github_stars: { value: 4149, as_of: 2026-10-03 }
  flox_latest: { value: "v1.17.0 (2026-09-22)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nix-gh
    resource: https://github.com/NixOS/nix
    title: "NixOS/nix repository"
    last_modified: 2026-10-03T00:00:00Z
  - id: detsys-blog
    resource: https://determinate.systems/blog/
    title: "Determinate Systems blog"
    author: org:determinate-systems
  - id: detsys-fedramp
    resource: https://www.prnewswire.com/news-releases/determinate-systems-achieves-fedramp-high-authorization-through-partnership-with-knox-systems-302825937.html
    title: "PR Newswire: Determinate Systems achieves FedRAMP High authorization through partnership with Knox Systems (Jul 15, 2026)"
    author: org:determinate-systems
  - id: dbta-flox
    resource: https://www.dbta.com/Editorial/News-Flashes/Flox-Raises-25M-in-Funding-to-Address-Growing-AI-Complexity-for-Engineering-Teams-171643.aspx
    title: "DBTA: Flox raises $25M Series B led by Addition (Sep 26, 2025)"
  - id: tc-flox-2023
    resource: https://techcrunch.com/2023/02/07/flox-raises-27m-to-bring-nix-to-more-developers/
    title: "TechCrunch: Flox raises $27M to bring Nix to more developers (Feb 2023)"
    author: org:techcrunch
  - id: linuxiac-coreteam
    resource: https://linuxiac.com/nixpkgs-core-team-dissolves/
    title: "Linuxiac: Nixpkgs Core Team dissolves (Aug 8, 2026)"
  - id: nix-mods-resign
    resource: https://discourse.nixos.org/t/a-statement-from-members-of-the-moderation-team/69828
    title: "NixOS Discourse: statement from members of the moderation team (Sep 2025)"
  - id: flox-gh
    resource: https://github.com/flox/flox
    title: "Flox repository and releases"
---

# Summary
Nix provides bit-for-bit reproducible builds and declarative systems (NixOS), and its value proposition rose with supply-chain regulation. The commercial ecosystem matured in 2025-2026: Determinate Systems ships its own downstream Determinate Nix 3.x (Wasm-based Nix functions, parallel evaluation and flake schemas announced Mar 3-6, 2026; 3.21.0 on May 25, 2026; 3.22.2 rebased on upstream Nix 2.35 on Aug 26, 2026), launched Determinate Secure Packages (Jan 13, 2026), achieved FedRAMP High for FlakeHub via a Knox Systems partnership (Jul 15, 2026)[^detsys-fedramp], launched SBOM/policy tools (FlakeAudit, FlakeBOM) and pitched EU Cyber Resilience Act compliance (Aug 2026)[^detsys-blog]. Flox, a Nix-based developer-environment company, raised a $25M Series B led by Addition (Sep 26, 2025)[^dbta-flox] and shipped near-monthly (v1.8 Dec 2025 → v1.17 Sep 22, 2026)[^flox-gh]. Verdict: OSS **growing**, business **growing** — but the split between upstream Nix and vendor downstreams is a governance tension to watch.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09 | NixOS moderation-team members resign over Steering Committee interference[^nix-mods-resign] | OSS | − |
| W24 | 2025-09-26 | Flox $25M Series B (Addition lead; NEA, D. E. Shaw)[^dbta-flox] | Business | + |
| W12 | 2025-12-17 | Flox v1.8[^flox-gh] | OSS | + |
| W9 | 2026-01-13 | Determinate Secure Packages introduced[^detsys-blog] | Business | + |
| W9 | 2026-03-03 → 03-06 | Determinate Nix: Wasm functions, parallel eval, flake schemas[^detsys-blog] | OSS | + |
| W6 | 2026-05-25 | Determinate Nix 3.21.0[^detsys-blog] | OSS | + |
| W6 | 2026-06-11 | FlakeBOM SBOM generator[^detsys-blog] | Business | + |
| W6 | 2026-06-12 | Determinate Secure Packages 26.05[^detsys-blog] | Business | + |
| W3 | 2026-08-08 | Nixpkgs Core Team dissolves (~10 months after formation), citing burnout and Steering Committee interference[^linuxiac-coreteam] | OSS | − |
| W3 | 2026-07-15 | FlakeHub FedRAMP High authorization (with Knox Systems)[^detsys-fedramp] | Business | + |
| W3 | 2026-08-03 | FlakeAudit CycloneDX SBOM policy CLI[^detsys-blog] | Business | + |
| W3 | 2026-08-13 | CRA compliance positioning ahead of Sep 11, 2026 obligations[^detsys-blog] | Business | + |
| W3 | 2026-08-27 | Public CVE dashboard for Secure Packages[^detsys-blog] | Business | + |
| W3 | 2026-09-14 | FlakeHub supports GitHub Enterprise Managed Users[^detsys-blog] | Business | + |

# OSS successes
- Regulation (CRA, FedRAMP, SBOM mandates) makes reproducibility a selling point[^detsys-blog].
- Active tooling ecosystem (Flox, FlakeHub)[^flox-gh].

# OSS failures / risks
- Vendor downstreams (Determinate Nix) diverge from upstream Nix — a soft-fork dynamic.
- Governance keeps breaking down: moderation-team members resigned in Sep 2025 and the Nixpkgs Core Team dissolved on Aug 8, 2026 (only one applicant answered its recruitment call; it clashed with the majority-vote Steering Committee). Nixpkgs development continues, but nobody now owns the areas the Core Team managed[^nix-mods-resign][^linuxiac-coreteam].

# Business successes
- Determinate Systems' enterprise/federal traction (FedRAMP High)[^detsys-fedramp].
- Flox $25M Series B (Sep 2025), on top of a $27M raise in Feb 2023[^dbta-flox][^tc-flox-2023].

# Business failures / risks
- Determinate Systems has no publicly disclosed round since a ~$3.5M seed (2022, per funding databases; not confirmed by a primary source) — it competes with a thin public war chest.

# By window
## W3
- Nixpkgs Core Team dissolves (Aug 8)[^linuxiac-coreteam].
- FedRAMP High, FlakeAudit, CRA tooling, CVE dashboard, Flox v1.14-v1.17[^detsys-fedramp][^detsys-blog][^flox-gh].
## W6
- Determinate Nix 3.21.0; FlakeBOM; Secure Packages 26.05[^detsys-blog].
## W9
- Determinate Secure Packages launched; Wasm functions/parallel eval/flake schemas; Flox v1.9-v1.11[^detsys-blog][^flox-gh].
## W12
- Flox v1.8[^flox-gh].
## W24
- Flox $25M Series B (Sep 26, 2025)[^dbta-flox]; moderation-team resignations (Sep 2025)[^nix-mods-resign].

# Lessons
- Compliance regimes can turn a niche purist technology into an enterprise product.

# Related
- [Event: Nixpkgs Core Team dissolves](/events/2026-08-nixpkgs-core-team-dissolves.md), [Determinate Systems](/organizations/determinate-systems.md), [NixOS (licensing-forks view)](/projects/licensing-forks/nixos.md), [Docker](/projects/cloud-native/docker.md) (hardened images as a competing supply-chain answer)

[^nix-gh]: https://github.com/NixOS/nix
[^detsys-blog]: https://determinate.systems/blog/
[^flox-gh]: https://github.com/flox/flox
[^linuxiac-coreteam]: https://linuxiac.com/nixpkgs-core-team-dissolves/
[^nix-mods-resign]: https://discourse.nixos.org/t/a-statement-from-members-of-the-moderation-team/69828
[^detsys-fedramp]: https://www.prnewswire.com/news-releases/determinate-systems-achieves-fedramp-high-authorization-through-partnership-with-knox-systems-302825937.html
[^dbta-flox]: https://www.dbta.com/Editorial/News-Flashes/Flox-Raises-25M-in-Funding-to-Address-Growing-AI-Complexity-for-Engineering-Teams-171643.aspx
[^tc-flox-2023]: https://techcrunch.com/2023/02/07/flox-raises-27m-to-bring-nix-to-more-developers/
