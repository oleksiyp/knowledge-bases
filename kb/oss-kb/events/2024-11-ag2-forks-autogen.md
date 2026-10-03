---
type: Event
title: Original AutoGen creators fork it as AG2
description: In November 2024 AutoGen's original contributors created AG2 to continue the v0.2 API outside Microsoft, splitting the multi-agent framework's community.
event_kind: fork
date: 2024-11-11
window: W24
impact: negative
projects: [projects/ai-agents/autogen, projects/ai-agents/ag2]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ag2-gh
    resource: https://github.com/ag2ai/ag2
    title: AG2 GitHub repository (created 2024-11-11)
  - id: autogen-gh
    resource: https://github.com/microsoft/autogen
    title: AutoGen GitHub repository (maintenance-mode README)
---

# What happened
The `ag2ai/ag2` repository ("AG2, formerly AutoGen") was created on 2024-11-11 by AutoGen's original contributors, continuing the v0.2 line while Microsoft pursued the incompatible v0.4 rewrite[^ag2-gh].

# Why it matters
It split users between two "AutoGen"s with diverging APIs — the first of three migrations that ended with Microsoft retiring AutoGen in favor of Microsoft Agent Framework[^autogen-gh].

# Outcome so far
AG2 shipped v1.0 on 2026-07-27 but has ~5k stars vs AutoGen's 61k; AutoGen is in maintenance mode since April 2026[^ag2-gh][^autogen-gh].

# Related
- [/projects/ai-agents/autogen.md](/projects/ai-agents/autogen.md), [/projects/ai-agents/ag2.md](/projects/ai-agents/ag2.md), [/events/2026-04-microsoft-agent-framework-1-0.md](/events/2026-04-microsoft-agent-framework-1-0.md)

[^ag2-gh]: https://github.com/ag2ai/ag2
[^autogen-gh]: https://github.com/microsoft/autogen
