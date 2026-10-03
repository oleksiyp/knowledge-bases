---
type: Event
title: "npm 12 ships with install scripts disabled by default"
description: "npm 12 made dependency preinstall/install/postinstall scripts, git and remote-URL dependencies opt-in, and began deprecating 2FA-bypass granular tokens — the biggest default-security change in npm history."
event_kind: release
date: 2026-07-08
window: W3
impact: positive
projects: [projects/security-sustainability/npm-registry]
organizations: [organizations/socket]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: infoq-npm12
    resource: https://www.infoq.com/news/2026/08/npm-12-released/
    title: "InfoQ: npm 12 released"
  - id: reg-npm12
    resource: https://www.theregister.com/devops/2026/06/10/github-pulls-pin-on-npms-auto-run-scripts/5253453
    title: "The Register: GitHub pulls pin on npm's auto-run scripts"
  - id: socket-npm12
    resource: https://socket.dev/blog/npm-12
    title: "Socket: npm v12"
---
# What happened
Announced on 2026-06-09/10 by npm maintainer Leo Balter, who said "Install-time lifecycle scripts are the single largest code-execution surface in the npm ecosystem."[^reg-npm12] Released on 2026-07-08: allowScripts off (soft skip with warning, `strict-allow-scripts` for CI), `--allow-git` and `--allow-remote` set to none, and an allowlist committed in package.json.[^infoq-npm12] 2FA-bypass tokens lost account powers in early August 2026 and lose direct publishing around January 2027.[^socket-npm12]

# Why it matters
It removes the execution path every Shai-Hulud wave used.

# Outcome so far
The keyv wave (08-04) still spread through preinstall in environments that had not upgraded. Adoption of npm 12 will decide its effect.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [keyv wave](/events/2026-08-keyv-shai-hulud-wave.md)

[^infoq-npm12]: InfoQ: npm 12 released
[^reg-npm12]: The Register: GitHub pulls pin on npm's auto-run scripts
[^socket-npm12]: Socket: npm v12
