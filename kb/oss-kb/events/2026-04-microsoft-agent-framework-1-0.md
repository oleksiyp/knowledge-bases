---
type: Event
title: Microsoft Agent Framework 1.0 ships; AutoGen enters maintenance mode
description: Microsoft released Agent Framework 1.0 for Python and .NET on 2026-04-02 and moved AutoGen to community-managed maintenance mode.
event_kind: release
date: 2026-04-02
window: W9
impact: mixed
projects: [projects/ai-agents/microsoft-agent-framework, projects/ai-agents/autogen, projects/ai-agents/ag2]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: maf-releases
    resource: https://github.com/microsoft/agent-framework/releases
    title: Microsoft Agent Framework releases (python-1.0.0, dotnet-1.0.0 on 2026-04-02)
  - id: autogen-gh
    resource: https://github.com/microsoft/autogen
    title: AutoGen README (maintenance mode)
---

# What happened
MAF 1.0 was published for Python and .NET on 2026-04-02[^maf-releases]. AutoGen's README now states it is in maintenance mode, "will not receive new features," is "community managed going forward," and directs users to MAF; its last push was 2026-04-15[^autogen-gh].

# Why it matters
Consolidates Microsoft's agent stack (AutoGen + Semantic Kernel) but retires a 61k-star project and forces another migration.

# Outcome so far
MAF ~13.9k stars; Copilot integration 1.0 (2026-07-23)[^maf-releases].

# Related
- [/projects/ai-agents/microsoft-agent-framework.md](/projects/ai-agents/microsoft-agent-framework.md), [/projects/ai-agents/autogen.md](/projects/ai-agents/autogen.md), [/events/2024-11-ag2-forks-autogen.md](/events/2024-11-ag2-forks-autogen.md)

[^maf-releases]: https://github.com/microsoft/agent-framework/releases
[^autogen-gh]: https://github.com/microsoft/autogen
