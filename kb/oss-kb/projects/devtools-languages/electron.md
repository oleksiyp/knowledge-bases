---
type: OSS Project
title: Electron
description: OpenJS Foundation framework for Chromium+Node desktop apps; the incumbent behind VS Code, Slack, Discord and most AI desktop clients, stable on an 8-week cadence (Electron 38→44 in 2025–26) but dogged by a macOS Tahoe system-lag bug (Sept 2025) and recurring CVEs.
resource: https://github.com/electron/electron
tags: [desktop-framework, chromium, nodejs, mit, foundation-hosted, openjs]
domain: devtools-languages
license: MIT
license_history: ["MIT (2013-)"]
governance: foundation
steward: OpenJS Foundation
backing_orgs: [organizations/openjs-foundation]
metrics:
  github_stars: { value: 123361, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: electron-gh
    resource: https://github.com/electron/electron
    title: Electron GitHub repository (stars via GitHub API, 2026-10-03)
  - id: electron-blog
    resource: https://www.electronjs.org/blog
    title: "Electron blog (release posts Electron 38–44, December quiet month)"
    author: org:electron
  - id: electron-41
    resource: https://www.electronjs.org/blog/electron-41-0
    title: "Electron 41.0.0"
    author: org:electron
  - id: tsai-tahoe
    resource: https://mjtsai.com/blog/2025/09/30/electron-apps-causing-system-wide-lag-on-tahoe/
    title: "Michael Tsai: Electron apps causing system-wide lag on Tahoe"
  - id: 9to5-tahoe-fix
    resource: https://9to5mac.com/2025/10/11/macos-26-tahoe-electron-gpu-slowdown-bug-fix-rollout/
    title: "9to5Mac: Developers begin rolling out fix for major bug that caused slowdowns on macOS Tahoe"
    author: org:9to5mac
  - id: ai-tahoe-fix
    resource: https://appleinsider.com/articles/25/10/10/update-your-slack-discord-clients-the-electron-tahoe-gpu-slowdown-bug-is-fixed
    title: "AppleInsider: Update your Slack & Discord clients, the Electron Tahoe GPU slowdown bug is fixed"
    author: org:appleinsider
  - id: s1-cve-34779
    resource: https://www.sentinelone.com/vulnerability-database/cve-2026-34779/
    title: "SentinelOne: CVE-2026-34779 Electron RCE (moveToApplicationsFolder AppleScript injection)"
  - id: bishopfox-beyond-electron
    resource: https://bishopfox.com/blog/beyond-electron-attacking-alternative-desktop-application-frameworks
    title: "Bishop Fox: Beyond Electron — attacking alternative desktop application frameworks"
---

# Summary
Electron is a mature incumbent. It runs VS Code, Slack, Discord, Figma, Notion, Obsidian, Signal and the desktop clients of the AI labs (Claude was on the list of apps that updated for the Tahoe fix).[^ai-tahoe-fix] Since 2025 it has shipped a major release roughly every 8 weeks, from Electron 38 (2025-09-09) to Electron 44 (2026-08-25). Each release tracks the latest Chromium and Node 24, and ASAR integrity checks became stable.[^electron-blog] Its worst moment was in September 2025, when macOS 26 Tahoe made every app on older Electron versions cause system-wide GPU lag. Electron had been overriding a private AppKit API, so hundreds of apps had to ship updates.[^tsai-tahoe][^9to5-tahoe-fix] A steady flow of CVEs in 2026, such as an AppleScript injection RCE in `moveToApplicationsFolder`, keeps security as its main cost.[^s1-cve-34779] Verdict: stable. Tauri is the only serious open challenger, and Electron has no business entity at risk.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-09 | Electron 38 (Chromium 140, Node 22) [^electron-blog] | OSS | + |
| W24 | 2025-09-30 | Apps on older Electron cause system-wide lag on macOS 26 Tahoe (private `_cornerMask` API override) [^tsai-tahoe] | OSS | − |
| W12 | 2025-10-10 | Fix rolls out across Slack, Discord, VS Code, Claude, Figma, Notion, etc. [^ai-tahoe-fix][^9to5-tahoe-fix] | OSS | + |
| W12 | 2025-10-28 | Electron 39; ASAR integrity stable [^electron-blog] | OSS | + |
| W9 | 2026-01-13 | Electron 40 (Chromium 144, Node 24) [^electron-blog] | OSS | + |
| W9 | 2026-03-10 | Electron 41 (ASAR digest on macOS, Wayland shadows) [^electron-41] | OSS | + |
| W6 | 2026-04-04 | CVE-2026-34779 (CVSS 7.8, macOS AppleScript injection) published; fixed in 38.8.6/39.8.1/40.8.0 [^s1-cve-34779] | OSS | − |
| W6 | 2026-05-07 | Electron 42 (Chromium 148) [^electron-blog] | OSS | + |
| W3 | 2026-07-02 | Electron 43 (Chromium 150) [^electron-blog] | OSS | + |
| W3 | 2026-08-25 | Electron 44 (Chromium 152, V8 15.2) [^electron-blog] | OSS | + |

# OSS successes
- About 123k GitHub stars as of 2026-10-03.[^electron-gh]
- Predictable releases in lockstep with Chromium, with no missed majors in 2025–26.[^electron-blog]
- The default desktop shell for the AI-app boom: Claude and other AI clients ship on it.[^ai-tahoe-fix]

# OSS failures / risks
- The Tahoe incident showed how fragile reliance on private platform APIs is, and how slowly the long tail of stale Electron versions updates.[^tsai-tahoe][^9to5-tahoe-fix]
- Recurring CVEs, and every app bundles its own Chromium, so patches spread unevenly.[^s1-cve-34779]
- Footprint criticism still feeds Tauri's growth, although alternatives have security issues of their own.[^bishopfox-beyond-electron]

# Business successes
- n/a. Electron is foundation-governed and its corporate maintainers come from user companies.

# Business failures / risks
- n/a.

# By window
## W3
- Electron 43 (2026-07-02) and 44 (2026-08-25).[^electron-blog]
## W6
- Electron 42 (2026-05-07); CVE-2026-34779 published (2026-04-04).[^electron-blog][^s1-cve-34779]
## W9
- Electron 40 (2026-01-13) and 41 (2026-03-10).[^electron-blog][^electron-41]
## W12
- Tahoe fix rollout (Oct 2025); Electron 39 (2025-10-28).[^9to5-tahoe-fix][^electron-blog]
## W24
- Tahoe lag bug surfaces (2025-09-30); Electron 38.[^tsai-tahoe][^electron-blog]

# Lessons
- Incumbency in developer platforms holds up well: Electron grew less than Tauri in stars but still hosts the most important new desktop apps, the AI clients.
- Shipping a private copy of a browser means owning that browser's security patch cadence.

# Related
- [Tauri](/projects/devtools-languages/tauri.md)
- [Node.js](/projects/devtools-languages/nodejs.md)
- [OpenJS Foundation](/organizations/openjs-foundation.md)

[^ai-tahoe-fix]: AppleInsider: Update your Slack & Discord clients, the Electron Tahoe GPU slowdown bug is fixed — https://appleinsider.com/articles/25/10/10/update-your-slack-discord-clients-the-electron-tahoe-gpu-slowdown-bug-is-fixed
[^electron-blog]: Electron blog (release posts Electron 38–44, December quiet month) — https://www.electronjs.org/blog
[^tsai-tahoe]: Michael Tsai: Electron apps causing system-wide lag on Tahoe — https://mjtsai.com/blog/2025/09/30/electron-apps-causing-system-wide-lag-on-tahoe/
[^9to5-tahoe-fix]: 9to5Mac: Developers begin rolling out fix for major bug that caused slowdowns on macOS Tahoe — https://9to5mac.com/2025/10/11/macos-26-tahoe-electron-gpu-slowdown-bug-fix-rollout/
[^s1-cve-34779]: SentinelOne: CVE-2026-34779 Electron RCE (moveToApplicationsFolder AppleScript injection) — https://www.sentinelone.com/vulnerability-database/cve-2026-34779/
[^electron-41]: Electron 41.0.0 — https://www.electronjs.org/blog/electron-41-0
[^electron-gh]: Electron GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/electron/electron
[^bishopfox-beyond-electron]: Bishop Fox: Beyond Electron — attacking alternative desktop application frameworks — https://bishopfox.com/blog/beyond-electron-attacking-alternative-desktop-application-frameworks
