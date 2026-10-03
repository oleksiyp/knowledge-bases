---
type: OSS Project
title: Open Interpreter
description: "2023's viral 'let the LLM run code on your computer' tool (~68k stars) that went dormant, then in 2026 was rebuilt in Rust as a fork of OpenAI's Codex CLI, relicensed AGPL-3.0 → Apache-2.0, and repositioned as a harness-emulating coding agent for cheap open models — revived but niche."
resource: https://github.com/openinterpreter/openinterpreter
tags: [ai-apps, coding-agent, computer-use, apache-2.0, relaunch, relicense-permissive]
domain: ai-apps
license: Apache-2.0
license_history: ["AGPL-3.0 (Python, 2023-2025)", "Apache-2.0 (Rust rewrite forked from Codex, 2026)"]
governance: single-vendor
steward: Open Interpreter, Inc. (Killian Lucas)
backing_orgs: []
metrics:
  github_stars: { value: 68495, as_of: 2026-10-03 }
  latest_release: { value: "rust-v0.0.55 (2026-09-30)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: up, W6: up, W9: flat, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: oi-gh
    resource: https://github.com/openinterpreter/openinterpreter
    title: Open Interpreter GitHub repository (GitHub API, 2026-10-03)
  - id: oi-pr1891
    resource: https://github.com/openinterpreter/openinterpreter/pull/1891
    title: "PR #1891: Sync Codex rust-v0.153.4 and release OIX 0.0.41"
  - id: oi-pq
    resource: https://www.promptquorum.com/es/power-local-llm/open-interpreter-review
    title: "PromptQuorum: Open Interpreter 2026 — Rust agent, Apache licence"
  - id: oi-0026
    resource: https://ai-tldr.dev/releases/openinterpreter-rust-0-0-26/
    title: "ai-tldr: Open Interpreter 0.0.26 — Rust coding agent"
---

# Summary
Open Interpreter (Killian Lucas, 2023) let LLMs execute code locally and was #1 trending on GitHub; ~68k stars[^oi-gh]. After a long quiet period (and the 01 hardware detour), the project was relaunched in 2026 as a Rust coding agent **forked from OpenAI's open-source Codex CLI**, relicensed from AGPL-3.0 to Apache-2.0, and focused on emulating the agent harnesses (claude-code, kimi-cli, qwen-code, etc.) that make cheap open models perform better[^oi-pq][^oi-0026]. It regularly syncs upstream Codex releases[^oi-pr1891] and ships Rust releases weekly (rust-v0.0.55, 2026-09-30)[^oi-gh]. Verdict: OSS revived (stable); business unclear/struggling.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24–W12 | 2025 | Python project largely dormant[^oi-pq] | OSS | − |
| W6 | 2026-05/06 | Rust rewrite (Codex fork) and AGPL → Apache-2.0[^oi-pq] | OSS | + |
| W3 | 2026-07/08 | 0.0.26 first stable Rust tag[^oi-0026] | OSS | + |
| W3 | 2026-09-30 | rust-v0.0.55[^oi-gh] | OSS | + |

# OSS successes
- Permissive relicensing and fast cadence on relaunch[^oi-gh][^oi-pq].
# OSS failures / risks
- Now a downstream fork of Codex; differentiation is harness emulation[^oi-pr1891].
# Business successes
- None verified.
# Business failures / risks
- Prior hardware (01) and desktop pivots did not produce a durable business.

# By window
## W3
- Weekly Rust releases[^oi-gh].
## W6
- Rust relaunch + relicense[^oi-pq].
## W9
- No notable events found.
## W12
- Dormant.
## W24
- Dormant.

# Lessons
- Forking a permissive big-lab agent (Codex) is now a cheap way to reboot a stalled agent project.

# Related
- [OpenAI Codex CLI](/projects/ai-agents/openai-codex-cli.md), [OpenHands](/projects/ai-agents/openhands.md), [Aider](/projects/ai-agents/aider.md), [Kimi](/projects/ai-models/kimi.md)

[^oi-gh]: GitHub API, openinterpreter/openinterpreter — https://github.com/openinterpreter/openinterpreter
[^oi-pr1891]: PR #1891 — https://github.com/openinterpreter/openinterpreter/pull/1891
[^oi-pq]: PromptQuorum — https://www.promptquorum.com/es/power-local-llm/open-interpreter-review
[^oi-0026]: ai-tldr — https://ai-tldr.dev/releases/openinterpreter-rust-0-0-26/
