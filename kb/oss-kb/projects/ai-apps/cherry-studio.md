---
type: OSS Project
title: Cherry Studio
description: "AGPL-3.0 cross-platform desktop AI client from China (~52k stars) with dual commercial licensing, which turned into a full agent workbench with v2.0 (Aug 2026) — growing fast."
resource: https://github.com/CherryHQ/cherry-studio
tags: [ai-apps, desktop, agpl-3.0, dual-license, china, agents]
domain: ai-apps
license: AGPL-3.0
license_history: ["AGPL-3.0 community edition + commercial licence/enterprise edition (current)"]
governance: company-led-open-core
steward: CherryHQ
backing_orgs: []
metrics:
  github_stars: { value: 52332, as_of: 2026-10-03 }
  github_forks: { value: 5034, as_of: 2026-10-03 }
  latest_release: { value: "v2.1.4 (2026-09-30)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cherry-gh
    resource: https://github.com/CherryHQ/cherry-studio
    title: Cherry Studio GitHub repository (GitHub API, 2026-10-03)
  - id: cherry-readme
    resource: https://github.com/CherryHQ/cherry-studio/blob/main/README.md
    title: Cherry Studio README (licensing section)
  - id: cherry-v2
    resource: https://newreleases.io/project/github/CherryHQ/cherry-studio/release/v2.0.0
    title: "Cherry Studio v2.0.0 release"
  - id: cherry-pq
    resource: https://www.promptquorum.com/local-llms/cherry-studio-ai-desktop-client
    title: "PromptQuorum: Cherry Studio 2.0 review 2026"
---

# Summary
Cherry Studio is an Electron desktop client that unifies cloud and local LLMs with assistants, knowledge bases and MCP; ~52k stars[^cherry-gh]. Its community edition is AGPL-3.0, with a paid licence for AGPL exemptions and an enterprise edition — classic dual licensing[^cherry-readme]. Version 2.0 (reported 2026-08-05) embedded an agent runtime, multi-window UI and reuse of Claude/Codex subscriptions, turning it into an agent workbench[^cherry-v2][^cherry-pq]. Verdict: growing on both axes; one of the strongest Chinese-origin entrants in Western developer mindshare.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W3 | 2026-08-05 | v2.0 — built-in agent runtime, knowledge-base read/write, skills[^cherry-v2][^cherry-pq] | OSS | + |
| W3 | 2026-09-30 | v2.1.4; weekly patch cadence[^cherry-gh] | OSS | + |

# OSS successes
- AGPL keeps forks open while allowing commercial use; very active release cadence[^cherry-gh].
# OSS failures / risks
- CLA/dual-licence governance concentrates control in CherryHQ.
# Business successes
- Enterprise edition + AGPL-exemption licences[^cherry-readme].
# Business failures / risks
- Funding undisclosed; competes with free LM Studio/Jan and vendor desktop apps.

# By window
## W3
- 2.0 agent workbench and rapid 2.1.x patches[^cherry-v2][^cherry-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Steady growth; no notable discrete events found.

# Lessons
- AGPL + commercial exemption remains a viable, OSI-compatible alternative to bespoke "branding" licences.

# Related
- [LobeHub](/projects/ai-apps/lobehub.md), [Jan](/projects/ai-apps/jan.md), [AnythingLLM](/projects/ai-apps/anythingllm.md), [Model Context Protocol](/projects/ai-agents/model-context-protocol.md)

[^cherry-gh]: GitHub API, CherryHQ/cherry-studio, 2026-10-03 — https://github.com/CherryHQ/cherry-studio
[^cherry-readme]: README — https://github.com/CherryHQ/cherry-studio/blob/main/README.md
[^cherry-v2]: v2.0.0 release — https://newreleases.io/project/github/CherryHQ/cherry-studio/release/v2.0.0
[^cherry-pq]: PromptQuorum review — https://www.promptquorum.com/local-llms/cherry-studio-ai-desktop-client
