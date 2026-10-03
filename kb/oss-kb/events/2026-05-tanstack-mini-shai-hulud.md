---
type: Event
title: "TeamPCP's Mini Shai-Hulud worm hits SAP, TanStack, @antv and OpenAI"
description: "A spring 2026 worm campaign chained GitHub Actions weaknesses (pull_request_target, cache poisoning, OIDC token theft from runner memory) to publish malware with valid provenance across npm and PyPI, then open-sourced itself."
event_kind: security-incident
date: 2026-05-11
window: W6
impact: negative
projects: [projects/security-sustainability/npm-registry, projects/security-sustainability/pypi]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tanstack-pm
    resource: https://tanstack.com/blog/npm-supply-chain-compromise-postmortem
    title: "TanStack postmortem"
  - id: unit42-landscape
    resource: https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/
    title: "Unit 42: npm threat landscape"
  - id: csa-mini
    resource: https://labs.cloudsecurityalliance.org/research/csa-research-note-mini-shai-hulud-npm-supply-chain-20260516/
    title: "CSA: Mini Shai-Hulud"
  - id: sophos-mini
    resource: https://www.sophos.com/en-us/blog/-mini-shai-hulud-supply-chain-attack-targets-sap-npm-packages
    title: "Sophos: Mini Shai-Hulud targets SAP npm packages"
  - id: ms-antv
    resource: https://www.microsoft.com/en-us/security/blog/2026/05/20/mini-shai-hulud-compromised-antv-npm-packages-enable-ci-cd-credential-theft/
    title: "Microsoft: Mini Shai-Hulud @antv"
---
# What happened
The campaign began on 2026-04-29 with 4 SAP CAP/mbt packages (about 570k weekly downloads).[^sophos-mini][^unit42-landscape] On 05-11, 84 malicious versions across 42 @tanstack packages were published in 6 minutes through a pull_request_target → cache poisoning → OIDC-memory-extraction chain. They were detected in about 20 minutes.[^tanstack-pm] 172 packages across npm and PyPI were hit within 48 hours. OpenAI had two employee workstations compromised and rotated its macOS signing certificates. Mistral AI's source code surfaced on criminal markets. The payload planted persistence in Claude Code hooks and rogue MCP servers.[^csa-mini] TeamPCP released the source code on 05-12/13. On 05-19 the @antv wave published 639 versions across 323 packages in one hour.[^unit42-landscape][^ms-antv]

# Why it matters
Valid provenance no longer means the code is legitimate. AI developer tooling is now both a target and a persistence vector.

# Outcome so far
Followed by copycats: Red Hat on 06-01, Mastra (DPRK) on 06-17, AsyncAPI on 07-14 and keyv on 08-04. GitHub announced npm 12 on 06-09.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [keyv wave](/events/2026-08-keyv-shai-hulud-wave.md), [TeamPCP Trivy](/events/2026-03-teampcp-trivy-litellm-compromise.md)

[^tanstack-pm]: TanStack postmortem
[^unit42-landscape]: Unit 42: npm threat landscape
[^csa-mini]: CSA: Mini Shai-Hulud
[^sophos-mini]: Sophos: Mini Shai-Hulud targets SAP npm packages
[^ms-antv]: Microsoft: Mini Shai-Hulud @antv
