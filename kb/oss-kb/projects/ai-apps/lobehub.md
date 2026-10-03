---
type: OSS Project
title: LobeHub (LobeChat)
description: "Chinese-led, design-polished chat/agent workspace (~83k stars) under a modified-Apache 'LobeHub Community License' that requires a commercial licence for derivative products; pivoted in 2026 from chat UI to 'Chief Agent Operator' — growing, licence not OSI."
resource: https://github.com/lobehub/lobehub
tags: [ai-apps, chat-ui, agents, source-available, china]
domain: ai-apps
license: "LobeHub Community License (Apache-2.0 + commercial-derivative restriction; not OSI)"
license_history: ["MIT (2023-2024)", "Apache-2.0 + commercialization supplementary clause from v1.0 (2024)", "Renamed LobeHub Community License after 'Apache' naming objections (2025)"]
governance: single-vendor
steward: LobeHub
backing_orgs: []
metrics:
  github_stars: { value: 82957, as_of: 2026-10-03 }
  github_forks: { value: 15953, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lobe-gh
    resource: https://github.com/lobehub/lobehub
    title: LobeHub GitHub repository (GitHub API, 2026-10-03; redirected from lobehub/lobe-chat)
  - id: lobe-license-blog
    resource: https://lobehub.com/blog/lobe-chat-v1-license-update
    title: "LobeHub blog: Announcing our transition to Apache License 2.0"
  - id: lobe-issue-9325
    resource: https://github.com/lobehub/lobehub/issues/9325
    title: "Issue #9325: License is not Apache 2.0 and should be renamed"
  - id: lobe-disc-4196
    resource: https://github.com/lobehub/lobehub/discussions/4196
    title: "Discussion #4196: Why is LobeChat calling itself Apache 2.0 licensed?"
  - id: lobe-v220
    resource: https://newreleases.io/project/github/lobehub/lobehub/release/v2.2.0
    title: "LobeHub v2.2.0 release (2026-05-18)"
  - id: lobe-oc
    resource: https://opencollective.com/lobehub
    title: LobeHub on Open Collective
---

# Summary
LobeHub (formerly LobeChat; repo renamed lobehub/lobehub) is one of the three largest self-hosted chat UIs, with ~83k stars and ~16k forks[^lobe-gh]. At v1.0 it moved from MIT to "Apache 2.0 with a commercialization supplementary clause" — free to self-host and use, but derivative products require a paid licence[^lobe-license-blog]; after community objections that the ASF forbids calling a modified licence "Apache", it became the "LobeHub Community License"[^lobe-disc-4196][^lobe-issue-9325]. In 2026 it repositioned from chat client to an agent-operations workspace (v2.2.0 "Chief Agent Operator", 2026-05-18)[^lobe-v220]. No institutional funding is publicly verified (only small Open Collective donations)[^lobe-oc]. Verdict: OSS growing but not OSI-open; business growing via cloud/commercial licences.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024–2025 | Licence objections; renamed "LobeHub Community License"[^lobe-disc-4196][^lobe-issue-9325] | OSS | − |
| W6 | 2026-05-18 | v2.2.0 "Chief Agent Operator" agent workspace[^lobe-v220] | OSS | + |
| W3 | 2026-09/10 | Near-daily canary releases; repo renamed lobehub/lobehub[^lobe-gh] | OSS | + |

# OSS successes
- Huge adoption and fork count; very active daily releases[^lobe-gh].
# OSS failures / risks
- Custom licence; misleading "Apache" branding damaged trust[^lobe-issue-9325].
# Business successes
- Hosted LobeHub cloud and commercial-derivative licences give a revenue path without blocking self-hosters[^lobe-license-blog].
# Business failures / risks
- No verified funding; dependence on founder Arvin Xu's small team.

# By window
## W3
- Rapid canary cadence; agent-workspace features[^lobe-gh].
## W6
- v2.2.0 agent operator pivot[^lobe-v220].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Licence renaming controversy[^lobe-issue-9325].

# Lessons
- Don't call a modified licence by an OSI licence's name — it creates avoidable trust damage.

# Related
- [Open WebUI](/projects/ai-apps/open-webui.md), [Cherry Studio](/projects/ai-apps/cherry-studio.md), [LibreChat](/projects/ai-apps/librechat.md)

[^lobe-gh]: GitHub API, lobehub/lobehub, 2026-10-03 — https://github.com/lobehub/lobehub
[^lobe-license-blog]: LobeHub blog — https://lobehub.com/blog/lobe-chat-v1-license-update
[^lobe-issue-9325]: GitHub issue #9325 — https://github.com/lobehub/lobehub/issues/9325
[^lobe-disc-4196]: GitHub discussion #4196 — https://github.com/lobehub/lobehub/discussions/4196
[^lobe-v220]: v2.2.0 release — https://newreleases.io/project/github/lobehub/lobehub/release/v2.2.0
[^lobe-oc]: Open Collective — https://opencollective.com/lobehub
