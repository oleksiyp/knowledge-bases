---
type: OSS Project
title: AutoGPT
description: The 2023 viral autonomous-agent repo (~188k stars) that re-licensed its new platform code under the non-open Polyform Shield license; still actively developed as a beta agent platform, but long overtaken in relevance.
resource: https://github.com/Significant-Gravitas/AutoGPT
tags: [ai-agents, autonomous-agent, polyform-shield, source-available, license-change]
domain: ai-agents
license: "Polyform Shield (autogpt_platform/) + MIT (classic/rest)"
license_history: ["MIT (2023-)", "Polyform Shield for autogpt_platform folder (2024-) + MIT elsewhere"]
governance: company-led-open-core
steward: Significant Gravitas Ltd
backing_orgs: []
metrics:
  github_stars: { value: 187643, as_of: 2026-10-03 }
  github_forks: { value: 45959, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: agpt-gh
    resource: https://github.com/Significant-Gravitas/AutoGPT
    title: AutoGPT GitHub repository (LICENSE file; autogpt-platform-beta-v0.8.2 2026-09-30)
  - id: agpt-platform-blog
    resource: https://agpt.co/blog/introducing-the-autogpt-platform
    title: "AutoGPT: Introducing the AutoGPT Platform"
---

# Summary
AutoGPT still has one of GitHub's highest star counts (~187.6k) from its 2023 virality[^agpt-gh]. Its new agent-building platform lives under `autogpt_platform/` and is licensed under the **Polyform Shield License** (not open source); the classic agent, Forge and benchmark remain MIT[^agpt-gh][^agpt-platform-blog]. The platform is still in beta (v0.8.2, 2026-09-30)[^agpt-gh]. Verdict: OSS **declining** in relevance (high legacy stars, source-available core); business **stable** (no verified financials).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024–2025 | Platform code under Polyform Shield; license wording clarified (Oct 2024, Jul 2025) | OSS | − [^agpt-gh] |
| W3 | 2026-09-30 | autogpt-platform-beta-v0.8.2 | OSS | ~ [^agpt-gh] |

# OSS successes
- Continued active development; huge legacy community.
# OSS failures / risks
- Moving the main product to a non-OSI license; still beta after ~2 years.
# Business successes
- Not verified.
# Business failures / risks
- Not verified.

# By window
## W3
- Beta releases continue[^agpt-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- License clarification commits (Jul 2025)[^agpt-gh].

# Lessons
- Viral stars are not a moat; relicensing a hyped repo's successor to source-available did not restore momentum.

# Related
- [/projects/ai-agents/openclaw.md](/projects/ai-agents/openclaw.md), [/projects/ai-agents/openmanus.md](/projects/ai-agents/openmanus.md)

[^agpt-gh]: https://github.com/Significant-Gravitas/AutoGPT
[^agpt-platform-blog]: https://agpt.co/blog/introducing-the-autogpt-platform
