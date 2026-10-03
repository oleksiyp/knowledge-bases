---
type: Event
title: "Nx 's1ngularity' npm compromise weaponizes AI CLIs"
description: "Malicious Nx versions published via a GitHub Actions injection used local AI coding CLIs (Claude, Gemini) to hunt for secrets and dumped them to public GitHub repos."
event_kind: security-incident
date: 2025-08-26
window: W24
impact: negative
projects: [projects/security-sustainability/npm-registry, projects/devtools-languages/nx]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nx-pm
    resource: https://nx.dev/blog/s1ngularity-postmortem
    title: "Nx: s1ngularity postmortem"
  - id: wiz-s1ng
    resource: https://www.wiz.io/blog/s1ngularitys-aftermath
    title: "Wiz: s1ngularity's aftermath — analysis of Nx supply chain attack"
---
# What happened
Attackers exploited an injection flaw in Nx's PR-title validation workflow to get a read/write GitHub token, then triggered the publish workflow. Malicious nx 20.9–21.8 and @nx/* versions ran postinstall scripts that "attempted to use local AI tools (like Claude and Gemini)" to search for secrets and uploaded the results to public repos. The packages were live for about 4 hours. Nx has about 6M weekly installs.[^nx-pm]

# Why it matters
The first major attack to turn developers' AI agents into reconnaissance tools. It came just before the Shai-Hulud worm.

# Outcome so far
Nx hardened its workflows. AI-tool credential theft became a staple of later Shai-Hulud variants.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [Shai-Hulud](/events/2025-09-shai-hulud-npm-worm.md)

## Additional notes (devtools-languages)
- Wiz's follow-up analysis counted 6,700+ private repositories made public and 2,300+ secrets exposed as the stolen GitHub tokens were reused.[^wiz-s1ng]
- Nx moved to npm Trusted Publishing (OIDC) and mandatory manual 2FA for all Nx package publishes.[^nx-pm]
- Project page: [Nx](/projects/devtools-languages/nx.md).

[^nx-pm]: Nx: s1ngularity postmortem
[^wiz-s1ng]: Wiz: s1ngularity's aftermath
