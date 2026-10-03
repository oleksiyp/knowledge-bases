---
type: Event
title: Flowise is sunset and archived
description: Workday-owned Flowise froze development on 2026-07-29, archived its 55k-star repo in August and reached end of life on 2026-08-31, citing coding agents making low-code workflows obsolete.
event_kind: shutdown
date: 2026-07-29
window: W3
impact: negative
projects: [projects/ai-agents/flowise]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: flowise-sunset
    resource: https://flowiseai.com/sunset
    title: The Future of Flowise
  - id: flowise-disc
    resource: https://github.com/FlowiseAI/Flowise/discussions/6727
    title: "GitHub discussion #6727"
---

# What happened
Flowise announced a code freeze on 2026-07-29, archived the repository in August (2026-08-10 per the notice; GitHub shows 2026-08-13) and ended core-team support on 2026-08-31[^flowise-sunset][^flowise-disc]. Reason given: developers increasingly use coding agents "such as Claude Code/OpenClaw," and "the typical rigid workflow low-code approach quickly hits the limit"[^flowise-sunset][^flowise-disc].

# Why it matters
A top-tier low-code LLM builder publicly declared its own category obsolete less than a year after an acquisition.

# Outcome so far
Code remains Apache-2.0 and forkable; npm/Docker deprecated[^flowise-sunset].

# Related
- [/projects/ai-agents/flowise.md](/projects/ai-agents/flowise.md), [/events/2025-08-workday-acquires-flowise.md](/events/2025-08-workday-acquires-flowise.md)

[^flowise-sunset]: https://flowiseai.com/sunset
[^flowise-disc]: https://github.com/FlowiseAI/Flowise/discussions/6727
