---
type: Paper
title: "Local-first software: You own your data, in spite of the cloud"
description: "Ink & Switch essay and Onward! 2019 paper that coined 'local-first' and proposed seven ideals for software, with CRDTs as the enabling technology. Hugely influential on vocabulary and developer experience; its ownership ideals were rarely adopted commercially."
year: 2019
venue: "Onward! 2019 (ACM SIGPLAN)"
authors: [Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, Mark McGranaghan]
resource: https://www.inkandswitch.com/essay/local-first/
impact: medium
ideas: [ideas/edge-devx/local-first-crdts, ideas/edge-devx/sync-engines]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: essay
    resource: https://www.inkandswitch.com/essay/local-first/
    title: "Ink & Switch: Local-first software"
    author: org:ink-and-switch
  - id: onward
    resource: https://martin.kleppmann.com/2019/10/23/local-first-at-onward.html
    title: "Martin Kleppmann: Local-first software at Onward! 2019"
    author: person:martin-kleppmann
  - id: electric-next
    resource: https://electric.ax/blog/2024/07/17/electric-next
    title: "ElectricSQL: A new approach to building Electric (2024-07-17)"
    author: org:electricsql
  - id: npm-yjs
    resource: https://api.npmjs.org/downloads/point/last-week/yjs
    title: "npm download API: yjs, week ending 2026-10-01"
---

# Claim
Cloud apps (Google Docs, Trello) gave us collaboration but took away ownership, offline use and longevity. Old desktop apps had the reverse trade-off. The authors argue for software that achieves seven ideals at once: fast (no spinners), multi-device, offline, collaborative, long-lived, private, and user-controlled. They propose CRDTs as the foundation, reporting on prototypes built with Automerge and assessing alternatives (Firebase, CouchDB, Dropbox-style file sync)[^essay][^onward].

# What happened next
The term caught on: conferences, a podcast, and a "local-first" label applied to many sync products. CRDT engineering matured. Automerge 2.0 moved to a Rust core, and Yjs became the default for collaborative editors (about 11.5M weekly npm downloads in late September 2026[^npm-yjs]). But the commercial descendants mostly kept the server as authority. ElectricSQL, the best-known attempt to apply CRDT sync to Postgres, dropped CRDTs in 2024[^electric-next]. The UX ideals (fast, offline, collaborative) were widely adopted. The ownership ideals (long-lived, user control) remain rare. Impact: medium. It shaped an industry vocabulary and a product category, but not the default architecture.

# Related
[Local-first and CRDTs](/ideas/edge-devx/local-first-crdts.md) · [Sync engines](/ideas/edge-devx/sync-engines.md) · [Automerge](/systems/automerge.md) · [Yjs](/systems/yjs.md)
