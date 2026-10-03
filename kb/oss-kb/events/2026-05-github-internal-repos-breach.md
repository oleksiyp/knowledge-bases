---
type: Event
title: GitHub internal repositories breached via poisoned Nx Console extension
description: "A backdoored Nx Console VS Code extension (v18.95.0), live on the Marketplace for 18 minutes on 2026-05-18, compromised a GitHub employee's device; the TeamPCP group exfiltrated ~3,800 internal GitHub repositories, with no evidence of customer repo impact per GitHub."
event_kind: security-incident
date: 2026-05-20
window: W6
impact: negative
projects: [projects/devtools-languages/github, projects/devtools-languages/open-vsx, projects/devtools-languages/nx]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: thn-breach
    resource: https://thehackernews.com/2026/05/github-internal-repositories-breached.html
    title: "The Hacker News: GitHub internal repositories breached via malicious Nx Console VS Code extension"
    author: org:the-hacker-news
  - id: infosec-breach
    resource: https://www.infosecurity-magazine.com/news/github-breach-nx-console-vs-code/
    title: "Infosecurity Magazine: GitHub breach traced to malicious 'Nx Console' VS Code extension"
  - id: ox-teampcp
    resource: https://www.ox.security/blog/teampcp-strikes-again-how-a-trojan-vs-code-extension-brought-down-github/
    title: "OX Security: TeamPCP strikes again — how a trojan VS Code extension brought down GitHub"
---

# What happened
On 2026-05-18 (12:30–12:48 UTC) a backdoored build of the Nx Console extension (`nrwl.angular-console` 18.95.0) was published to the Visual Studio Marketplace; on startup it fetched and ran a payload from a planted commit in the official nrwl/nx repo. A GitHub employee's device was infected and the TeamPCP group exfiltrated about 3,800 internal repositories, later advertising them for sale. GitHub said it found no evidence of impact on customer data outside its internal repos[^thn-breach][^infosec-breach][^ox-teampcp].

# Why it matters
The attack chained the spring-2026 npm worm wave (TanStack / Mini Shai-Hulud) into editor extensions and then into the platform that hosts most open source — showing that developer workstations and extension marketplaces are now prime supply-chain targets.

# Outcome so far
GitHub isolated the device, removed the extension and rotated credentials. Nx was hit for the second time in a year (after the Aug 2025 s1ngularity attack).

# Related
- [GitHub](/projects/devtools-languages/github.md)
- [TanStack / Mini Shai-Hulud](/events/2026-05-tanstack-mini-shai-hulud.md)
- [Nx s1ngularity attack](/events/2025-08-nx-s1ngularity-attack.md)
- [Open VSX](/projects/devtools-languages/open-vsx.md)

[^thn-breach]: The Hacker News, May 2026.
[^infosec-breach]: Infosecurity Magazine.
[^ox-teampcp]: OX Security blog.
