---
type: Event
title: Observable makes rewritten "Notebooks 2.0" the default
description: "On 2026-09-01 Observable switched observablehq.com to its rewritten, agent-first notebooks built on the open Notebook Kit format, moving the legacy product to old.observablehq.com with many features not yet ported."
event_kind: release
date: 2026-09-01
window: W3
impact: mixed
projects: [projects/scientific-computing/observable]
organizations: [organizations/observable-inc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nb2-preview
    resource: https://observablehq.com/release-notes/2025-07-29-observable-notebooks-2
    title: "Previewing Observable Notebooks 2.0 (2025-07-29)"
  - id: default-soon
    resource: https://talk.observablehq.com/t/making-the-new-observable-the-default-soon/10775
    title: "Observable Forum: Making the new Observable the default soon (2026-08-27)"
  - id: official-new
    resource: https://talk.observablehq.com/t/officially-announcing-the-new-observable/10782
    title: "Observable Forum: Officially announcing the new Observable (2026-09-01)"
  - id: flowingdata
    resource: https://flowingdata.com/2026/09/02/observable-notebooks-get-a-rewrite/
    title: "FlowingData: Observable notebooks get a rewrite (2026-09-02)"
  - id: where-going
    resource: https://talk.observablehq.com/t/where-is-observable-going/10372
    title: "Observable Forum: Where is Observable going?"
---

# What happened
After a July 2025 technology preview (Notebook Kit open format, vanilla JavaScript, macOS Desktop app)[^nb2-preview], Observable announced on 2026-08-27 that the new product would become the default[^default-soon] and switched over on 2026-09-01[^official-new][^flowingdata]. The team said it rebuilt nearly everything except the database and open-source runtime and introduced agent-first "chats" alongside notebooks; collections, version history, access control, database/secrets config and scheduling remain only on old.observablehq.com[^official-new].

# Why it matters
It resolves (for now) a year of community doubt about whether Observable would keep investing in notebooks[^where-going], and moves a well-known proprietary notebook platform onto an open, file-based format.

# Outcome so far
Mixed reception: educators objected to start-of-semester timing and removed cell modes; others welcomed upcoming SQL and multi-language support[^default-soon][^official-new].

# Related
- [/projects/scientific-computing/observable.md](/projects/scientific-computing/observable.md), [/organizations/observable-inc.md](/organizations/observable-inc.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^nb2-preview]: https://observablehq.com/release-notes/2025-07-29-observable-notebooks-2
[^default-soon]: https://talk.observablehq.com/t/making-the-new-observable-the-default-soon/10775
[^official-new]: https://talk.observablehq.com/t/officially-announcing-the-new-observable/10782
[^flowingdata]: https://flowingdata.com/2026/09/02/observable-notebooks-get-a-rewrite/
[^where-going]: https://talk.observablehq.com/t/where-is-observable-going/10372
