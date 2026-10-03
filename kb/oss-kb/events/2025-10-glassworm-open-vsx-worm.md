---
type: Event
title: "GlassWorm malware hits Open VSX and VS Code extensions"
description: "A self-propagating extension worm using invisible-Unicode code first surfaced on Open VSX in late 2025 and resurfaced repeatedly through 2026 across Open VSX, VS Code Marketplace and GitHub repos."
event_kind: security-incident
date: 2025-10-17
window: W12
impact: negative
projects: [projects/security-sustainability/open-vsx]
organizations: [organizations/koi-security, organizations/eclipse-foundation, organizations/aikido-security]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: koi-glassworm
    resource: https://www.koi.ai/incident/live-updates-glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-and-vscode-marketplaces
    title: "Koi Security: GlassWorm — first self-propagating worm using invisible code hits OpenVSX (Oct 2025, live updates)"
  - id: eclipse-ovsx-oct
    resource: https://blogs.eclipse.org/post/mika%C3%ABl-barbero/open-vsx-security-update-october-2025
    title: "Eclipse Foundation: Open VSX security update, October 2025"
  - id: heise-ovsx
    resource: https://www.heise.de/en/news/Open-VSX-Eclipse-Foundation-Draws-Consequences-from-GlassWorm-Attack-10965519.html
    title: "heise: Open VSX — Eclipse Foundation draws consequences from GlassWorm attack"
  - id: secweek-ovsx
    resource: https://www.securityweek.com/open-vsx-downplays-impact-from-glassworm-campaign/
    title: "SecurityWeek: Open VSX downplays impact from GlassWorm campaign"
  - id: aikido-returns
    resource: https://www.aikido.dev/blog/glassworm-returns-unicode-attack-github-npm-vscode
    title: "Aikido: GlassWorm returns — invisible Unicode malware found in 150+ GitHub repositories (2026-03)"
  - id: bleeping-macos
    resource: https://www.bleepingcomputer.com/news/security/new-glassworm-attack-targets-macos-via-compromised-openvsx-extensions/
    title: "BleepingComputer: New GlassWorm attack targets macOS via compromised OpenVSX extensions (2026)"
  - id: socket-blog
    resource: https://socket.dev/blog
    title: "Socket blog: GlassWorm-linked extensions span VS Code Marketplace and Open VSX"
---
# What happened
On Oct 17, 2025 Koi Security's risk engine flagged version 1.8.3 of the Open VSX extension CodeJoy for suspicious network connections and credential access. Koi named the campaign GlassWorm: a self-propagating worm that hides its JavaScript payload in invisible Unicode variation-selector characters, so the code renders as blank space in editors and diffs. The first wave hit seven Open VSX extensions with about 36,000 downloads.[^koi-glassworm] The Eclipse Foundation said the root cause was a small number of publisher tokens leaked through developer mistakes, not a compromise of Open VSX infrastructure. It revoked the affected tokens and removed the infected extensions, and suggested the download counts may have been inflated by bots.[^eclipse-ovsx-oct][^secweek-ovsx] The campaign kept coming back: Aikido tied it to 150+ GitHub repositories in Mar 2026, a variant targeted macOS through compromised Open VSX extensions, and Socket reported GlassWorm-linked extensions on both marketplaces.[^aikido-returns][^bleeping-macos][^socket-blog] (Corrected in pass 2: the "from memory" hedge on the date and counts was removed after checking Koi's and Eclipse's own writeups.)

# Why it matters
IDE extension registries, now critical for AI IDE forks, are an under-defended supply-chain layer.

# Outcome so far
Open VSX shortened default token lifetimes, simplified revocation, introduced a token prefix (with MSRC) to make leaked tokens easier to scan for, and moved toward automated extension scanning.[^eclipse-ovsx-oct][^heise-ovsx] Koi was acquired by Palo Alto Networks in Feb 2026.

# Related
- [Open VSX](/projects/security-sustainability/open-vsx.md), [Koi Security](/organizations/koi-security.md)

[^koi-glassworm]: Koi Security — https://www.koi.ai/incident/live-updates-glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-and-vscode-marketplaces
[^eclipse-ovsx-oct]: Eclipse Foundation — https://blogs.eclipse.org/post/mika%C3%ABl-barbero/open-vsx-security-update-october-2025
[^heise-ovsx]: heise — https://www.heise.de/en/news/Open-VSX-Eclipse-Foundation-Draws-Consequences-from-GlassWorm-Attack-10965519.html
[^secweek-ovsx]: SecurityWeek — https://www.securityweek.com/open-vsx-downplays-impact-from-glassworm-campaign/
[^aikido-returns]: Aikido — https://www.aikido.dev/blog/glassworm-returns-unicode-attack-github-npm-vscode
[^bleeping-macos]: BleepingComputer — https://www.bleepingcomputer.com/news/security/new-glassworm-attack-targets-macos-via-compromised-openvsx-extensions/
[^socket-blog]: Socket blog — https://socket.dev/blog
