---
type: Reference
title: Methodology and conventions
description: How this knowledge base on database-systems ideas from 2018 to 2026 was researched and structured, the verdict scales it uses, and how to read it.
tags: [methodology, meta]
status: draft
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: okf-spec
    resource: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
    title: Open Knowledge Format (OKF) v0.2 specification
    author: org:google-cloud
---

# Scope

This bundle covers ideas in database systems that emerged, peaked, won or failed between 2018-01-01
and 2026-10-03. Data infrastructure is in scope too: lakehouse formats, streaming and messaging
(Kafka and its successors), and sync engines. Earlier history appears only as short "origins" notes.
The aim is honest verdicts, and failures get as much space as successes. The bundle follows OKF
v0.2.[^okf-spec]

# Concept types

| Type | Location | Purpose |
|---|---|---|
| Idea | `/ideas/<area>/*.md` | An idea, its verdict, timeline, what succeeded and failed, and **why** |
| System | `/systems/*.md` | A product, OSS project, cloud service or research prototype, with its outcome |
| Event | `/events/YYYY-MM-*.md` | A dated launch, deal, license change, shutdown, paper or standard |
| Paper | `/papers/YYYY-*.md` | A landmark paper and what became of its claim |
| Area Review | `/areas/*.md` | Scorecard for one area |
| Lesson | `/lessons/*.md` | A cross-cutting pattern of why ideas win or fail |
| Year Review | `/years/*.md` | What happened in one year across all areas |

# Verdict scales

These frontmatter fields are defined by this bundle, not by the OKF spec:

- **Idea `verdict`**:
  - `won`: became the default.
  - `winning`: clear momentum, not yet the default.
  - `mixed`: real wins and real failures.
  - `niche`: works, but only for a small segment.
  - `fading`: was popular and is declining.
  - `failed`: abandoned or disproven.
  - `too-early`: not yet decided.
- **Idea `adoption_2026`**: mainstream · common · niche · rare · abandoned.
- **System `outcome`**: thriving · growing · stable · acquired · pivoted · struggling · dead.
- **Paper `impact`**: high · medium · low. This measures real-world impact by 2026, not citation count.

Verdicts are the research agents' judgements based on the cited evidence. They are not measurements.

# Research process

Eleven Claude research agents began the initial pass, one per area:
- cloud architecture
- distributed SQL
- analytics and lakehouse
- Postgres ecosystem
- vector and AI
- ML for databases
- hardware and engines
- NoSQL models
- edge and developer experience
- streaming and messaging
- business and licensing

Each agent used web search and preferred primary sources: vendor announcements, papers, filings,
Jepsen reports, and Andy Pavlo's yearly reviews. Every non-obvious claim has a footnote that points
to a source.

Eight interrupted areas were subsequently completed by Codex agents. Each continuation read the
corresponding Claude transcript and saved drafts before resuming. This recovered unpublished NoSQL
drafts and completed missing systems, events and papers. The continuations also corrected factual
errors and unsupported conclusions encountered during review; they did not independently recheck
every claim in the initial pass.

All concepts are agent-generated and unverified. A human reviewer should add `verified` after
checking a concept.

# Status

The area research pass is complete through the October 3, 2026 cutoff. The synthesis pages
(lessons, area reviews, year reviews and the executive summary) remain to be written. Format,
citation identifiers and internal links are checked separately from factual accuracy; passing
those checks does not replace human review of the evidence or verdicts.
