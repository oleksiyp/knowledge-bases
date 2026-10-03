---
type: OSS Project
title: Open VSX Registry
description: Eclipse Foundation's vendor-neutral VS Code extension registry; became critical infrastructure for VS Code forks (Cursor, Windsurf, etc.) and AI editors, then suffered repeated supply-chain incidents (token leaks, GlassWorm) and launched a paid Managed Registry in April 2026.
resource: https://github.com/eclipse/openvsx
tags: [extension-registry, vscode, epl-2.0, foundation-hosted, eclipse, supply-chain-security]
domain: devtools-languages
license: EPL-2.0
license_history: ["EPL-2.0 (2020-)"]
governance: foundation
steward: Eclipse Foundation (Open VSX Working Group)
backing_orgs: [organizations/eclipse-foundation]
metrics:
  github_stars: { value: 2048, as_of: 2026-10-03 }
  daily_requests: { value: 50000000, as_of: 2026-06-30, note: "50M+ per Wikipedia" }
  extensions: { value: 10000, as_of: 2026-06-30, note: "10,000+" }
  monthly_downloads: { value: 300000000, as_of: 2026-06-30, note: "300M+" }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: openvsx-gh
    resource: https://github.com/eclipse/openvsx
    title: Open VSX GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-openvsx
    resource: https://en.wikipedia.org/wiki/Open_VSX
    title: "Wikipedia: Open VSX"
  - id: eclipse-advisory-2025
    resource: https://blogs.eclipse.org/post/mika%C3%ABl-barbero/eclipse-open-vsx-registry-security-advisory
    title: "Eclipse Foundation blog: Eclipse Open VSX Registry Security Advisory (reported 2025-05-04, fixed June 2025)"
    author: org:eclipse-foundation
  - id: sw-takeover
    resource: https://www.securityweek.com/vulnerability-exposed-all-open-vsx-repositories-to-takeover/
    title: "SecurityWeek: Vulnerability Exposed All Open VSX Repositories to Takeover (June 2025)"
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
Open VSX exists because Microsoft's Visual Studio Marketplace terms bar non-Microsoft VS Code builds — which made it the extension backbone for the wave of AI-first VS Code forks (Cursor, Windsurf and others). By April 2026 it hosted 12,000+ extensions from 8,000+ publishers, served 300M+ downloads a month and peaked above 200M requests a day.[^eclipse-managed] That load arrived faster than the Eclipse Foundation's security capacity: a flaw reported by Koi Security on 2025-05-04 (fixed by late June 2025) could have let attackers publish over any extension namespace, and from 2025-10-17 the self-propagating **GlassWorm** campaign repeatedly abused Open VSX extensions (72 more by March 2026, 73 "sleeper" extensions in late April 2026).[^eclipse-advisory-2025][^sw-takeover][^koi-glassworm][^thn-glassworm-72][^bc-sleeper] Responses included mandatory pre-publish security checks (Feb–Mar 2026), the paid **Open VSX Managed Registry** (2026-04-21; AWS, Google and Cursor as first customers, 99.95% SLA), Open VSX 1.0.0 (June 2026), and inclusion in OpenSSF's enterprise registry-sustainability commitment (2026-09-16).[^thn-prepublish][^eclipse-managed][^vsm-1-0][^openssf-registries] Verdict: OSS contested (security debt), business stable thanks to a new paid tier and working-group members.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-04 → 06-25 | Koi reports namespace-takeover flaw in publishing pipeline; fixed, 81 extensions deactivated as precaution [^eclipse-advisory-2025][^sw-takeover] | OSS | − |
| W12 | 2025-10-17 | GlassWorm first flagged by Koi — first self-propagating extension worm [^koi-glassworm] | OSS | − |
| W9 | 2026-02 | Mandatory pre-publish security checks announced (enforced from March) [^thn-prepublish] | OSS | + |
| W9 | 2026-03 | 72 more GlassWorm-linked Open VSX extensions [^thn-glassworm-72] | OSS | − |
| W6 | 2026-04-21 | Open VSX Managed Registry launched (AWS, Google, Cursor) [^eclipse-managed] | Business | + |
| W6 | 2026-04-27 | 73 GlassWorm "sleeper" extensions reported [^bc-sleeper] | OSS | − |
| W6 | 2026-06 | Open VSX 1.0.0 [^vsm-1-0] | OSS | + |
| W3 | 2026-09-16 | Included in OpenSSF enterprise commitment to sustainable package registries [^openssf-registries] | Business | + |

# OSS successes
- Vendor-neutral alternative that let a whole category of editors (forks, AI IDEs) exist.[^eclipse-managed]
- Pre-publish scanning and a 1.0 release show the registry maturing.[^thn-prepublish][^vsm-1-0]

# OSS failures / risks
- Repeated malware incidents; registry security lagged usage growth.[^koi-glassworm][^bc-sleeper]

# Business successes
- Managed Registry gives Eclipse a revenue line from heavy commercial users.[^eclipse-managed]

# Business failures / risks
- Free-riding by commercially successful AI editors strained foundation resources until the paid tier; no public figures on its revenue.

# By window
## W3
- OpenSSF registry-sustainability commitment covers Open VSX (2026-09-16).[^openssf-registries]
## W6
- Managed Registry launch (2026-04-21); GlassWorm sleeper wave; Open VSX 1.0.0.[^eclipse-managed][^bc-sleeper][^vsm-1-0]
## W9
- Pre-publish checks; 72-extension GlassWorm wave.[^thn-prepublish][^thn-glassworm-72]
## W12
- GlassWorm first detected (2025-10-17).[^koi-glassworm]
## W24
- Takeover vulnerability and hardening (May–June 2025).[^eclipse-advisory-2025]

# Lessons
- Registries become security-critical infrastructure the moment AI forks route millions of installs through them; funding must scale with usage, and paid managed tiers are one answer.

# Related
- [Open VSX (security-sustainability view)](/projects/security-sustainability/open-vsx.md)
- [GlassWorm](/events/2025-10-glassworm-open-vsx-worm.md)
- [Eclipse Foundation](/organizations/eclipse-foundation.md)
- [npm registry](/projects/devtools-languages/npm-registry.md), [Zed](/projects/devtools-languages/zed.md)

[^openvsx-gh]: Open VSX GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/eclipse/openvsx
[^wiki-openvsx]: Wikipedia: Open VSX — https://en.wikipedia.org/wiki/Open_VSX
[^eclipse-advisory-2025]: Eclipse Foundation blog: Eclipse Open VSX Registry Security Advisory (reported 2025-05-04, fixed June 2025) — https://blogs.eclipse.org/post/mika%C3%ABl-barbero/eclipse-open-vsx-registry-security-advisory
[^sw-takeover]: SecurityWeek: Vulnerability Exposed All Open VSX Repositories to Takeover (June 2025) — https://www.securityweek.com/vulnerability-exposed-all-open-vsx-repositories-to-takeover/
[^eclipse-managed]: Eclipse Foundation: Eclipse Foundation Launches Open VSX Managed Registry (2026-04-21) — https://newsroom.eclipse.org/news/announcements/eclipse-foundation-launches-open-vsx-managed-registry-0
[^koi-glassworm]: Koi Security: GlassWorm, first self-propagating worm using invisible code hits OpenVSX and VS Code marketplaces — https://www.koi.ai/incident/live-updates-glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-and-vscode-marketplaces
[^thn-prepublish]: The Hacker News: Eclipse Foundation mandates pre-publish security checks for Open VSX extensions (Feb 2026) — https://thehackernews.com/2026/02/eclipse-foundation-mandates-pre-publish.html
[^thn-glassworm-72]: The Hacker News: GlassWorm supply-chain attack abuses 72 Open VSX extensions (Mar 2026) — https://thehackernews.com/2026/03/glassworm-supply-chain-attack-abuses-72.html
[^toms-151]: Tom's Hardware: Invisible malicious code attacks 151 GitHub repos and VS Code — https://www.tomshardware.com/tech-industry/cyber-security/malicious-packages-using-invisible-unicode-found-in-151-github-repos-and-vs-code
[^bc-sleeper]: BleepingComputer: GlassWorm malware attacks return via 73 OpenVSX sleeper extensions (2026-04-27) — https://www.bleepingcomputer.com/news/security/glassworm-malware-attacks-return-via-73-openvsx-sleeper-extensions/
[^vsm-1-0]: Visual Studio Magazine: Open VSX 1.0.0 puts focus on open extension registry (2026-06-24) — https://visualstudiomagazine.com/articles/2026/06/24/open-vsx-1-0-0-puts-focus-on-open-extension-registry-for-vs-code-ecosystem.aspx
[^openssf-registries]: OpenSSF: We're In: enterprise commitment to sustainable package registries (2026-09-16) — https://openssf.org/blog/2026/09/16/were-in-enterprise-commitment-to-sustainable-package-registries/
