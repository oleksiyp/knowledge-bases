---
type: Idea
title: "Local-first software and CRDTs"
description: "Apps whose primary copy of data lives on the user's device and merges with others through CRDTs, with the cloud as an optional relay. Verdict: niche. CRDTs won as the engine of collaborative text editing (Yjs), but the full local-first vision of user-owned data with no server authority stayed a research and indie movement, and commercial sync products dropped CRDTs."
tags: [local-first, crdt, offline, collaboration, sync]
area: edge-devx
verdict: niche
hype_peak: 2024
adoption_2026: niche
origins: "CRDTs formalised by Shapiro et al. (2011); the term 'local-first' coined by Ink & Switch's essay (Onward! 2019)."
key_systems: [systems/automerge, systems/yjs, systems/electricsql]
related_ideas: [ideas/edge-devx/sync-engines, ideas/edge-devx/reactive-backend-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: localfirst
    resource: https://www.inkandswitch.com/essay/local-first/
    title: "Ink & Switch: Local-first software: You own your data, in spite of the cloud (2019)"
    author: org:ink-and-switch
  - id: kleppmann-onward
    resource: https://martin.kleppmann.com/2019/10/23/local-first-at-onward.html
    title: "Martin Kleppmann: Local-first software at Onward! 2019"
    author: person:martin-kleppmann
  - id: automerge2
    resource: https://automerge.org/blog/automerge-2/
    title: "Introducing Automerge 2.0 (Jan 2023)"
    author: org:automerge
  - id: yjs-site
    resource: https://yjs.dev/
    title: "Yjs homepage (users list)"
  - id: npm-yjs
    resource: https://api.npmjs.org/downloads/point/last-week/yjs
    title: "npm download API: yjs and @automerge/automerge, week ending 2026-10-01"
  - id: electric-next
    resource: https://electric.ax/blog/2024/07/17/electric-next
    title: "ElectricSQL: A new approach to building Electric (2024-07-17)"
    author: org:electricsql
  - id: linear-talk
    resource: https://www.youtube.com/watch?v=bnOpm3a1fRE
    title: "Tuomas Artman: Building a synchronous experience with asynchronous data: Linear's sync engine"
    author: person:tuomas-artman
  - id: triplit
    resource: https://supabase.com/blog/triplit-joins-supabase
    title: "Supabase: Triplit joins Supabase (Oct 2025)"
    author: org:supabase
---

# Summary
**Niche, with one big success inside it.** The 2019 Ink & Switch essay by Kleppmann, Wiggins, van Hardenberg and McGranaghan set out seven ideals for software that works offline, syncs across devices, enables collaboration and leaves the user in control of their data, with CRDTs as the enabling technology[^localfirst][^kleppmann-onward]. Seven years on, the *technology* half succeeded in one domain: Yjs is the default engine for collaborative rich-text editors, with about 11.5M weekly npm downloads in late September 2026[^npm-yjs], and users listed on its site include Proton Docs, Nextcloud and Evernote[^yjs-site]. Automerge 2.0 (a Rust core compiled to Wasm, January 2023) made the research CRDT production-ready[^automerge2] but stayed small (about 74k weekly downloads[^npm-yjs]). The *ideology* half did not go mainstream. Commercial products kept the server as the authority, and the best-known "local-first" company, ElectricSQL, removed CRDTs and active-active replication in its 2024 rewrite[^electric-next]. What the market adopted was "local-first UX" (instant UI, offline cache), delivered by server-authoritative [sync engines](/ideas/edge-devx/sync-engines.md).

# The idea
Keep the primary copy of data on the device and treat the network as optional. Merge concurrent edits with CRDTs, data types whose merges always converge without coordination. The promised result: zero-latency UI, offline work, real-time collaboration, data that outlives the vendor, and user ownership[^localfirst].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2019 | "Local-first software" essay, Onward! 2019 (Oct)[^kleppmann-onward] | + |
| 2020–22 | Yjs spreads through editor frameworks (ProseMirror, Tiptap, Lexical bindings). Linear shows a sync-engine-first SaaS can win[^linear-talk] | + |
| 2023 | Automerge 2.0: Rust core, Wasm, C bindings[^automerge2] | + |
| 2024 | Local-first conferences and podcasts. ElectricSQL drops CRDT-based active-active sync (Jul)[^electric-next] | +/− |
| 2025 | Triplit (a local-first database startup) joins Supabase (Oct)[^triplit] | − |

# What succeeded
- **Collaborative text editing.** CRDTs, mainly Yjs, replaced operational transformation as the default way to build multiplayer editors outside Google Docs.
- **The vocabulary and the UX bar.** "Local-first" changed what users expect: instant interactions and offline tolerance. Linear's speed, built on a client-side object graph synced with the server, became the reference example[^linear-talk].
- **Research quality.** Automerge's move to one Rust core with bindings fixed the performance and cross-language consistency problems of earlier versions[^automerge2].

# What failed
- **General-purpose CRDT databases.** Building relational or app-wide data models on CRDTs proved hard: permissions, schema migrations, invariants such as "balance ≥ 0", and partial replication don't fit convergent merge semantics. Electric gave up on it and called its original system "too large and complex in scope"[^electric-next].
- **Business models.** Software where the user owns the data leaves little to bill for as a hosted service. Small local-first startups were acquired or folded into larger platforms (Triplit → Supabase[^triplit]).
- **User ownership.** Few mainstream apps ship the "you own your data, in spite of the cloud" property. Most use local-first techniques purely for speed.

# Why
CRDTs solve one problem, convergence, very well, but most apps also need authority: access control, validation, and server-side business rules. A server-authoritative design with optimistic client mutations and rebase (Replicache/Zero, Linear) gives users 90% of the experience with simpler correctness. Text is the exception, because concurrent character-level edits have no "correct" authority and convergence really is the whole problem, so CRDTs won there. Economically, SaaS revenue depends on the vendor holding the data, which works against true local-first.

# Lessons
- A technique can win in a narrow domain (text CRDTs) while the movement around it stays niche.
- Users want the *latency* benefits of local-first much more than the *ownership* benefits.
- Server authority plus optimistic local state is usually the pragmatic middle ground.

# Related
[Automerge](/systems/automerge.md) · [Yjs](/systems/yjs.md) · [ElectricSQL](/systems/electricsql.md) · [Sync engines](/ideas/edge-devx/sync-engines.md) · [Local-first paper](/papers/2019-local-first-software.md) · [Electric rewrite event](/events/2024-07-electricsql-rewrite.md)
