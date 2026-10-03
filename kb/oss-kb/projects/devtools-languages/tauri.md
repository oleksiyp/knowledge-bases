---
type: OSS Project
title: Tauri
description: Rust + system-webview framework for small, secure desktop and mobile apps; Tauri 2.0 (Oct 2024) added iOS/Android, 2.12 and the first 3.0 alphas shipped in Sept 2026 — while its commercial partner CrabNebula made its paid cloud free and moved community services into a foundation (June 2026).
resource: https://github.com/tauri-apps/tauri
tags: [desktop-framework, mobile, rust, webview, electron-alternative, mit, apache-2.0, foundation-hosted]
domain: devtools-languages
license: "Apache-2.0 OR MIT"
license_history: ["Apache-2.0 OR MIT (2019-)"]
governance: foundation
steward: Tauri Programme within The Commons Conservancy
backing_orgs: [organizations/crabnebula]
metrics:
  github_stars: { value: 111565, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tauri-gh
    resource: https://github.com/tauri-apps/tauri
    title: Tauri GitHub repository and releases (stars and release dates via GitHub API, 2026-10-03)
  - id: tauri-blog
    resource: https://v2.tauri.app/blog/
    title: "Tauri blog (2.0 stable Oct 2024; board elections 2025/2026; Verso integration)"
    author: org:tauri
  - id: tauri-212
    resource: https://v2.tauri.app/blog/tauri-2.12/
    title: "Announcing Tauri 2.12"
    author: org:tauri
  - id: tauri-releases
    resource: https://v2.tauri.app/release/
    title: Tauri ecosystem releases
  - id: crabnebula-free
    resource: https://crabnebula.dev/blog/why-cloud-is-free/
    title: "CrabNebula: Why CrabNebula Cloud is now free — Tauri, the CRA, and our move to a foundation"
    author: org:crabnebula
  - id: infoworld-tauri2
    resource: https://www.infoworld.com/article/3485804/tauri-2-0-moves-core-functionality-to-plugins.html
    title: "InfoWorld: Tauri 2.0 moves core functionality to plugins"
    author: org:infoworld
  - id: bishopfox-beyond-electron
    resource: https://bishopfox.com/blog/beyond-electron-attacking-alternative-desktop-application-frameworks
    title: "Bishop Fox: Beyond Electron — attacking alternative desktop application frameworks"
---

# Summary
Tauri is the main open-source challenger to Electron: apps ship a Rust backend and use the operating system's webview instead of bundling Chromium, so binaries are far smaller. Tauri 2.0 stable (2024-10-02) added iOS and Android and moved core features into plugins.[^tauri-gh][^infoworld-tauri2] Releases stayed steady after that (2.10 Feb 2026, 2.11 Apr 2026, 2.12 on 2026-09-26, which the team calls the biggest 2.x update), and 3.0 alphas started on 2026-09-13.[^tauri-gh][^tauri-212] Governance is a programme inside The Commons Conservancy, with board elections held every year.[^tauri-blog] The commercial side is weaker. Partner CrabNebula made CrabNebula Cloud free from 2026-06-19 and is moving its Tauri community services into a foundation it has not yet named. It linked the change to the EU Cyber Resilience Act's lighter rules for "open-source stewards".[^crabnebula-free] Verdict: OSS growing. There is no business model to speak of.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-02 | Tauri 2.0 stable (mobile, plugin architecture) [^tauri-gh][^infoworld-tauri2] | OSS | + |
| W24 | 2025-03-17 | Experimental Verso (Servo-based) webview integration [^tauri-blog] | OSS | + |
| W24 | 2025-06-30 | Tauri board elections 2025; 4 years in The Commons Conservancy [^tauri-blog] | Governance | + |
| W9 | 2026-02-02 | Tauri 2.10.0 [^tauri-gh] | OSS | + |
| W6 | 2026-04-30 | Tauri 2.11.0 [^tauri-gh] | OSS | + |
| W6 | 2026-06-11 | CrabNebula makes Cloud free from 2026-06-19 and announces it will move Tauri services into a foundation (CRA-driven) [^crabnebula-free] | Business | mixed |
| W6 | 2026-06-30 | Tauri board elections 2026 [^tauri-blog] | Governance | + |
| W3 | 2026-09-13 | First Tauri 3.0 alpha (CLI 3.0.0-alpha.0) [^tauri-gh] | OSS | + |
| W3 | 2026-09-26 | Tauri 2.12 (drops Windows 7, MSRV 1.90, Android 17 target) [^tauri-212] | OSS | + |

# OSS successes
- More than 111k GitHub stars, nearly level with Electron (123k).[^tauri-gh]
- Steady 2.x releases, and 3.0 work has started.[^tauri-gh][^tauri-releases]
- Vendor-neutral governance under a conservancy, with elected board directors.[^tauri-blog]

# OSS failures / risks
- Webview fragmentation (WebKitGTK, WKWebView, WebView2) is still the main pain point compared with bundled Chromium. Verso/Servo is still experimental.[^tauri-blog]
- Security research shows that leaving Electron "doesn't automatically solve your security problems".[^bishopfox-beyond-electron]

# Business successes
- CrabNebula (official partner) offers DevTools, distribution and audits. All of it became free in June 2026.[^crabnebula-free]

# Business failures / risks
- Making the paid cloud free and moving to a foundation suggests that monetizing Tauri services did not work as a standalone business. CrabNebula frames the move as compliance and stewardship.[^crabnebula-free]

# By window
## W3
- Tauri 3.0 alpha series started on 2026-09-13; 2.12 shipped on 2026-09-26.[^tauri-gh][^tauri-212]
## W6
- 2.11 (2026-04-30); CrabNebula Cloud made free with a foundation move (2026-06-11); board elections (2026-06-30).[^tauri-gh][^crabnebula-free][^tauri-blog]
## W9
- 2.10 (2026-02-02).[^tauri-gh]
## W12
- No notable events found.
## W24
- 2.0 stable (2024-10-02); Verso experiment (2025-03); board elections (2025-06).[^tauri-gh][^tauri-blog]

# Lessons
- The EU Cyber Resilience Act is starting to change how companies around OSS projects organize themselves: steward status carries lighter obligations than commercial distribution.
- A desktop framework can reach Electron-level mindshare without a VC-backed owner.

# Related
- [Electron](/projects/devtools-languages/electron.md)
- [CrabNebula](/organizations/crabnebula.md)
- [Servo](/projects/devtools-languages/servo.md)
- [Rust](/projects/devtools-languages/rust.md)

[^tauri-gh]: Tauri GitHub repository and releases (stars and release dates via GitHub API, 2026-10-03) — https://github.com/tauri-apps/tauri
[^infoworld-tauri2]: InfoWorld: Tauri 2.0 moves core functionality to plugins — https://www.infoworld.com/article/3485804/tauri-2-0-moves-core-functionality-to-plugins.html
[^tauri-212]: Announcing Tauri 2.12 — https://v2.tauri.app/blog/tauri-2.12/
[^tauri-blog]: Tauri blog (2.0 stable Oct 2024; board elections 2025/2026; Verso integration) — https://v2.tauri.app/blog/
[^crabnebula-free]: CrabNebula: Why CrabNebula Cloud is now free — Tauri, the CRA, and our move to a foundation — https://crabnebula.dev/blog/why-cloud-is-free/
[^tauri-releases]: Tauri ecosystem releases — https://v2.tauri.app/release/
[^bishopfox-beyond-electron]: Bishop Fox: Beyond Electron — attacking alternative desktop application frameworks — https://bishopfox.com/blog/beyond-electron-attacking-alternative-desktop-application-frameworks
