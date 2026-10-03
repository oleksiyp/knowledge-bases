---
type: OSS Project
title: NixOS / Nix
description: "Declarative package manager and Linux distro with chronic governance turmoil — Lix fork (2024), moderation-team resignation over Steering Committee interference (Sept 2025), Nixpkgs Core Team dissolution (Aug 2026) — yet adoption is rising, capped by the Dutch government choosing NixOS for its sovereign desktop (Sept 2026)."
resource: https://github.com/NixOS/nixpkgs
tags: [linux-distro, package-manager, governance, fork, community, sovereignty]
domain: licensing-forks
license: MIT
license_history: ["MIT (nixpkgs)", "LGPL-2.1 (Nix)"]
governance: community
steward: NixOS Foundation / NixOS Steering Committee
backing_orgs: []
metrics: {}
oss_verdict: contested
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn-nix-spinoffs
    resource: https://lwn.net/Articles/981124/
    title: "LWN: Nix alternatives and spinoffs (2024-07)"
  - id: nix-mods-resign
    resource: https://discourse.nixos.org/t/a-statement-from-members-of-the-moderation-team/69828
    title: "NixOS Discourse: Statement from members of the moderation team (2025-09-27)"
  - id: nix-reelection
    resource: https://discourse.nixos.org/t/call-for-full-re-election-of-the-steering-committee/70208
    title: "NixOS Discourse: Call for full re-election of the Steering Committee (2025-10)"
  - id: nix-hensing
    resource: https://discourse.nixos.org/t/stepping-down-from-the-nix-team/70203
    title: "NixOS Discourse: Stepping down from the Nix team (2025-10-04)"
  - id: linuxiac-coreteam
    resource: https://linuxiac.com/nixpkgs-core-team-dissolves/
    title: "Linuxiac: Nixpkgs Core Team dissolves, leaving governance duties without a direct owner (2026-08-08)"
  - id: reg-dawo
    resource: https://www.theregister.com/os-platforms/2026/09/28/dutch-government-turns-to-nixos-for-a-sovereign-desktop/5299501
    title: "The Register: Dutch government turns to NixOS for a sovereign desktop (2026-09-28)"
  - id: lix-295
    resource: https://lix.systems/blog/2026-03-25-lix-2.95-release/
    title: "Lix 2.95 'Kakigōri' release (2026-03-25)"
  - id: nix-lpe
    resource: https://discourse.nixos.org/t/security-advisory-local-privilege-escalation-in-lix-and-nix/77407
    title: "NixOS Discourse: Security advisory — local privilege escalation in Lix and Nix (2026-05)"
---

# Summary
Nix/NixOS shows that a project can keep growing in adoption while its governance stays in crisis. After the 2024 disputes that led founder Eelco Dolstra to leave the NixOS Foundation board, several forks and spinoffs appeared. The most durable is Lix, a community fork of the Nix implementation that shipped 2.95 in March 2026.[^lwn-nix-spinoffs][^lix-295] The elected Steering Committee, created in 2024, has not settled things. In Sept 2025 the moderation team resigned over SC "interference", followed by calls for a full SC re-election and senior Nix-team departures.[^nix-mods-resign][^nix-reelection][^nix-hensing] In Aug 2026 the Nixpkgs Core Team dissolved itself, citing burnout, recruitment failure and an SC that "lacks a native instinct for delegation".[^linuxiac-coreteam] At the same time NixOS won a major institutional adopter. The Dutch government's DAWO programme chose NixOS for a sovereign government desktop, with 8 municipalities piloting by Sept 2026.[^reg-dawo] Verdict: contested.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024 | Governance disputes; Lix and other spinoffs emerge[^lwn-nix-spinoffs] | OSS | − |
| W24 | 2025-09-27 | Moderation team members resign over Steering Committee interference[^nix-mods-resign] | OSS | − |
| W12 | 2025-10 | Call for full SC re-election; Nix team member steps down[^nix-reelection][^nix-hensing] | OSS | − |
| W9 | 2026-03-25 | Lix 2.95 released[^lix-295] | OSS | + |
| W6 | 2026-05 | Local privilege escalation advisory affecting both Lix and Nix[^nix-lpe] | OSS | − |
| W3 | 2026-07 | Dutch ICBR commissions DAWO sovereign workplace (NixOS-based)[^reg-dawo] | OSS | + |
| W3 | 2026-08-08 | Nixpkgs Core Team dissolves[^linuxiac-coreteam] | OSS | − |
| W3 | 2026-09-28 | DAWO publicised; 8 municipalities piloting[^reg-dawo] | OSS | + |

# OSS successes
- Rising institutional and sovereignty-driven adoption (DAWO), chosen because NixOS is "not controlled by a commercial vendor" and has declarative, reproducible configuration.[^reg-dawo]
- The Lix fork coexists with upstream and gives a second implementation.[^lix-295]

# OSS failures / risks
- Repeated resignations of governance bodies: moderators (2025) and the Nixpkgs Core Team (2026).[^nix-mods-resign][^linuxiac-coreteam]
- Governance duties of the dissolved Core Team now have no direct owner.[^linuxiac-coreteam]

# Business successes
- n/a (ecosystem companies such as Determinate Systems not covered here).

# Business failures / risks
- n/a.

# By window
## W3
- Core Team dissolution (Aug 8, 2026); Dutch DAWO adoption (Jul–Sept 2026).[^linuxiac-coreteam][^reg-dawo]
## W6
- Shared Lix/Nix privilege-escalation advisory (May 2026).[^nix-lpe]
## W9
- Lix 2.95 (Mar 25, 2026).[^lix-295]
## W12
- SC re-election calls and Nix team departures (Oct 2025).[^nix-reelection][^nix-hensing]
## W24
- Moderation team resignation (Sept 2025).[^nix-mods-resign]

# Lessons
- Elected steering committees do not fix governance on their own. Without clear delegation, the bodies they delegate to burn out and dissolve.
- Being vendor-neutral is itself an adoption advantage in the EU sovereignty push, even when governance is messy.

# Related
- [Nixpkgs Core Team dissolves](/events/2026-08-nixpkgs-core-team-dissolves.md)
- [Cyber Resilience Act reporting begins](/events/2026-09-cra-reporting-obligations-start.md)
- [OpenBao](/projects/licensing-forks/openbao.md) — another sovereignty beneficiary

[^lwn-nix-spinoffs]: LWN — https://lwn.net/Articles/981124/
[^nix-mods-resign]: NixOS Discourse — https://discourse.nixos.org/t/a-statement-from-members-of-the-moderation-team/69828
[^nix-reelection]: NixOS Discourse — https://discourse.nixos.org/t/call-for-full-re-election-of-the-steering-committee/70208
[^nix-hensing]: NixOS Discourse — https://discourse.nixos.org/t/stepping-down-from-the-nix-team/70203
[^linuxiac-coreteam]: Linuxiac — https://linuxiac.com/nixpkgs-core-team-dissolves/
[^reg-dawo]: The Register — https://www.theregister.com/os-platforms/2026/09/28/dutch-government-turns-to-nixos-for-a-sovereign-desktop/5299501
[^lix-295]: Lix blog — https://lix.systems/blog/2026-03-25-lix-2.95-release/
[^nix-lpe]: NixOS Discourse — https://discourse.nixos.org/t/security-advisory-local-privilege-escalation-in-lix-and-nix/77407
