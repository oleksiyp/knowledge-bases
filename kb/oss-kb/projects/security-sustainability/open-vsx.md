---
type: OSS Project
title: Open VSX Registry
description: "Eclipse Foundation's vendor-neutral VS Code extension registry that became critical infrastructure for AI IDE forks; repeatedly abused by the GlassWorm malware campaign (Oct 2025 onward) while adding pre-publish scanning (Feb-Mar 2026) and a paid Managed Registry (Apr 2026)."
resource: https://open-vsx.org
tags: [extension-registry, supply-chain, eclipse-foundation, ai-ide]
domain: security-sustainability
license: EPL-2.0
license_history: ["EPL-2.0"]
governance: foundation
steward: Eclipse Foundation
backing_orgs: [organizations/eclipse-foundation]
metrics:
  extensions: { value: 12000, as_of: 2026-04-21 }
  publishers: { value: 8000, as_of: 2026-04-21 }
  monthly_downloads: { value: 300000000, as_of: 2026-04-21 }
  peak_daily_requests: { value: 200000000, as_of: 2026-04-21 }
oss_verdict: contested
business_verdict: growing
momentum_by_window: { W3: flat, W6: up, W9: down, W12: down, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: eclipse-managed
    resource: https://newsroom.eclipse.org/news/announcements/eclipse-foundation-launches-open-vsx-managed-registry-0
    title: "Eclipse Foundation: Eclipse Foundation Launches Open VSX Managed Registry (2026-04-21)"
    author: org:eclipse-foundation
  - id: koi-glassworm
    resource: https://www.koi.ai/incident/live-updates-glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-and-vscode-marketplaces
    title: "Koi Security: GlassWorm, first self-propagating worm using invisible code hits OpenVSX and VS Code marketplaces"
  - id: thn-prepublish
    resource: https://thehackernews.com/2026/02/eclipse-foundation-mandates-pre-publish.html
    title: "The Hacker News: Eclipse Foundation mandates pre-publish security checks for Open VSX extensions (Feb 2026)"
  - id: thn-glassworm-72
    resource: https://thehackernews.com/2026/03/glassworm-supply-chain-attack-abuses-72.html
    title: "The Hacker News: GlassWorm supply-chain attack abuses 72 Open VSX extensions (Mar 2026)"
  - id: toms-151
    resource: https://www.tomshardware.com/tech-industry/cyber-security/malicious-packages-using-invisible-unicode-found-in-151-github-repos-and-vs-code
    title: "Tom's Hardware: Invisible malicious code attacks 151 GitHub repos and VS Code"
  - id: bc-sleeper
    resource: https://www.bleepingcomputer.com/news/security/glassworm-malware-attacks-return-via-73-openvsx-sleeper-extensions/
    title: "BleepingComputer: GlassWorm malware attacks return via 73 OpenVSX sleeper extensions (2026-04-27)"
  - id: vsm-1-0
    resource: https://visualstudiomagazine.com/articles/2026/06/24/open-vsx-1-0-0-puts-focus-on-open-extension-registry-for-vs-code-ecosystem.aspx
    title: "Visual Studio Magazine: Open VSX 1.0.0 puts focus on open extension registry (2026-06-24)"
  - id: openssf-registries
    resource: https://openssf.org/blog/2026/09/16/were-in-enterprise-commitment-to-sustainable-package-registries/
    title: "OpenSSF: We're In: enterprise commitment to sustainable package registries (2026-09-16)"
    author: org:openssf
---
# Summary
Open VSX is the extension registry behind every VS Code fork that cannot use Microsoft's Marketplace: Cursor, Windsurf, VSCodium, Theia, Gitpod. By April 2026 it hosted more than 12,000 extensions from 8,000+ publishers, served 300M+ downloads a month and peaked above 200M requests a day.[^eclipse-managed] Verdict: **contested**. Usage is booming, but it has become a malware channel. The **GlassWorm** campaign, a self-spreading worm hiding JavaScript in invisible Unicode variation selectors and using the Solana blockchain for command-and-control, was first flagged by Koi Security on 2025-10-17 (about 35,800 installs affected in the first wave).[^koi-glassworm] It kept returning in waves: 72 more malicious Open VSX extensions found from 31 January 2026, 151 GitHub repositories hit by March 2026, and 73 "sleeper" extensions in April 2026.[^thn-glassworm-72][^toms-151][^bc-sleeper] The Eclipse Foundation responded with mandatory pre-publish checks (monitoring in February 2026, enforcement from March) and on 2026-04-21 launched a paid **Open VSX Managed Registry**, with AWS, Google and Cursor as first customers.[^thn-prepublish][^eclipse-managed] Open VSX is one of the registries covered by the September 2026 enterprise registry-funding commitment.[^openssf-registries]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-17 | Koi Security flags GlassWorm in Open VSX extension CodeJoy; first self-propagating extension worm[^koi-glassworm] | OSS | − |
| W9 | 2026-02 | Eclipse announces mandatory pre-publish security checks (monitor Feb, enforce from Mar)[^thn-prepublish] | OSS | + |
| W9 | 2026-03 | 72 more GlassWorm-linked Open VSX extensions (since 2026-01-31); campaign also in 151 GitHub repos[^thn-glassworm-72][^toms-151] | OSS | − |
| W6 | 2026-04-21 | Open VSX Managed Registry launched (99.95% SLA; AWS, Google, Cursor as first customers)[^eclipse-managed] | Business | + |
| W6 | 2026-04-27 | 73 GlassWorm "sleeper" extensions reported, 6 already activated[^bc-sleeper] | OSS | − |
| W6 | 2026-06 | Open VSX 1.0.0 released[^vsm-1-0] | OSS | + |
| W3 | 2026-09-16 | Covered by OpenSSF enterprise registry sustainability commitment[^openssf-registries] | Business | + |

# OSS successes
- Vendor-neutral and in heavy demand from AI IDEs; 300M+ downloads a month.[^eclipse-managed]
- Moved from reactive takedowns to proactive pre-publish scanning for impersonation, leaked secrets and known-malicious patterns.[^thn-prepublish]
- Reached a 1.0.0 release in June 2026.[^vsm-1-0]

# OSS failures / risks
- GlassWorm keeps coming back. By its fourth wave it was using extensionPack/extensionDependencies to pull malware in transitively, and shipping harmless-looking extensions that turn malicious in later updates.[^thn-glassworm-72][^bc-sleeper]

# Business successes
- The Managed Registry is the first foundation-run managed service for this kind of developer infrastructure. It stays free for individuals and OSS projects and charges for production-scale commercial embedding.[^eclipse-managed]

# Business failures / risks
- Pricing tiers are not public. Revenue depends on a handful of AI-IDE and cloud customers.[^eclipse-managed]

# By window
## W3
- Covered by the enterprise registry pledge (no dollar amounts).[^openssf-registries]
## W6
- Managed Registry launched 2026-04-21.[^eclipse-managed]
- A GlassWorm sleeper-extension wave followed (2026-04-27).[^bc-sleeper]
- Open VSX 1.0.0 released.[^vsm-1-0]
## W9
- Pre-publish checks introduced.[^thn-prepublish]
- 72 more malicious extensions found; 151 GitHub repos affected.[^thn-glassworm-72][^toms-151]
## W12
- GlassWorm first disclosed (2025-10-17).[^koi-glassworm]
## W24
- Demand from AI IDE forks surged (qualitative; see April 2026 traffic figures).[^eclipse-managed]

# Lessons
- Registries that turn into critical infrastructure because of AI tools need a paid tier to fund their security.
- Scanning at publish time does not stop malware that arrives in a later update. Registries also have to re-scan updates and dependencies.

# Related
- [Eclipse Foundation](/organizations/eclipse-foundation.md), [GlassWorm](/events/2025-10-glassworm-open-vsx-worm.md), [registry pledge](/events/2026-09-registry-sustainability-commitment.md), [Open VSX (devtools view)](/projects/devtools-languages/open-vsx.md)

[^eclipse-managed]: Eclipse Foundation press release, 2026-04-21.
[^koi-glassworm]: Koi Security, GlassWorm incident report (Oct 2025).
[^thn-prepublish]: The Hacker News, Feb 2026.
[^thn-glassworm-72]: The Hacker News, Mar 2026.
[^toms-151]: Tom's Hardware, Mar 2026.
[^bc-sleeper]: BleepingComputer, 2026-04-27.
[^vsm-1-0]: Visual Studio Magazine, 2026-06-24.
[^openssf-registries]: OpenSSF blog, 2026-09-16.
