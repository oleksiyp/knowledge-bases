---
type: System
title: Yjs
description: "High-performance JavaScript CRDT framework (YATA algorithm) by Kevin Jahns. By 2026 it was the default engine for collaborative rich-text editing, used through ProseMirror, Tiptap, Lexical and others. It is the clearest commercial success of CRDTs."
resource: https://yjs.dev
tags: [crdt, collaboration, javascript, local-first]
kind: oss
first_release: 2015
org: "Kevin Jahns and community"
license: MIT
outcome: thriving
ideas: [ideas/edge-devx/local-first-crdts]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: site
    resource: https://yjs.dev/
    title: "Yjs homepage (users list)"
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/yjs
    title: "npm download API: yjs, week ending 2026-10-01"
  - id: gh
    resource: https://github.com/yjs/yjs
    title: "Yjs GitHub repository"
---

# Summary
Yjs implements shared types (text, arrays, maps, XML) as CRDTs, with pluggable network providers (WebSocket, WebRTC) and persistence. It was optimised early for the text-editing case, and that is where it won. Editor frameworks and SaaS products adopted it instead of building operational-transformation servers, and the users it lists include Proton Docs, Nextcloud, Evernote and AWS SageMaker[^site]. In the last week of September 2026 the `yjs` package had about 11.5M npm downloads[^npm], and the repository had about 22.9k stars with active development[^gh]. Ports such as Yrs (Rust) extend it to other languages. Hosted Yjs backends became a small business niche.

# Timeline
| Year | Event |
|---|---|
| 2015 | First releases (YATA paper by Nicolaescu, Jahns et al., 2016) |
| 2019–22 | Editor bindings (ProseMirror, Tiptap, Monaco, later Lexical). Rust port Yrs |
| 2026 | About 11.5M weekly downloads[^npm] |

# What worked
- Speed and small encoding size on real editing traces, and editor integrations.
- Solving the one problem where CRDT convergence really is the whole requirement.

# What didn't
- It is less suited to app-wide relational data: permissions, schemas and invariants live outside it.
- Development depends heavily on one maintainer, funded through sponsorships.

# Related
[Automerge](/systems/automerge.md) · [Local-first and CRDTs](/ideas/edge-devx/local-first-crdts.md)
