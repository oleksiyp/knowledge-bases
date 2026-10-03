---
type: OSS Project
title: OpenAI Codex CLI
description: OpenAI's open-source (Apache-2.0) terminal coding agent, released April 2025 and later rewritten in Rust; a lab-backed OSS client to a proprietary model service that reached ~128k GitHub stars.
resource: https://github.com/openai/codex
tags: [ai-agents, coding-agent, terminal, apache-2.0, single-vendor, big-tech]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2025-04-)"]
governance: single-vendor
steward: OpenAI
backing_orgs: []
metrics:
  github_stars: { value: 127658, as_of: 2026-10-03 }
  github_forks: { value: 19974, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: codex-gh
    resource: https://github.com/openai/codex
    title: OpenAI Codex GitHub repository (created 2025-04-13; API stats 2026-10-03)
  - id: agentsmd-gh
    resource: https://github.com/agentsmd/agents.md
    title: AGENTS.md repository
---

# Summary
Codex CLI is OpenAI's open-source terminal coding agent, published in April 2025 (repo created 2025-04-13) under Apache-2.0 and actively developed with a Rust core[^codex-gh]. With ~127.7k stars and ~20k forks as of 2026-10-03 it is one of the most-starred agent tools, but it is primarily a client for OpenAI's paid models/ChatGPT plans — an "OSS-as-distribution" play for a proprietary service. OpenAI also seeded the AGENTS.md convention that Codex reads[^agentsmd-gh]. Verdict: OSS **thriving**; business n/a (part of OpenAI).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04 | Codex CLI open-sourced (Apache-2.0) | OSS | + [^codex-gh] |
| W24 | 2025-08 | AGENTS.md convention published (read by Codex) | OSS | + [^agentsmd-gh] |
| W3 | 2026-10-03 | ~127.7k stars; daily commits | OSS | + [^codex-gh] |

# OSS successes
- Rapid adoption; permissive license; accepts community contributions.
# OSS failures / risks
- Single-vendor governance; the value is in the closed model, so "open source" mostly covers the harness.
# Business successes
- n/a (drives ChatGPT/API consumption).
# Business failures / risks
- n/a.

# By window
## W3
- Continued high-velocity development[^codex-gh].
## W6
- No notable OSS governance events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Launch (Apr 2025)[^codex-gh].

# Lessons
- Frontier labs open-source agent harnesses to win distribution while keeping models closed; the harness layer became commoditized.

# Related
- [/projects/ai-agents/openai-agents-sdk.md](/projects/ai-agents/openai-agents-sdk.md), [/projects/ai-agents/gemini-cli.md](/projects/ai-agents/gemini-cli.md), [/projects/ai-agents/opencode.md](/projects/ai-agents/opencode.md), [/projects/ai-agents/agents-md.md](/projects/ai-agents/agents-md.md)

[^codex-gh]: https://github.com/openai/codex
[^agentsmd-gh]: https://github.com/agentsmd/agents.md
