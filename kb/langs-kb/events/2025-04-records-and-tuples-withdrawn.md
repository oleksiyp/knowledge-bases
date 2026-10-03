---
type: Event
title: TC39 withdraws the Records & Tuples proposal
description: After years at Stage 2, TC39 withdrew deeply immutable primitive Records and Tuples (#{} / #[]) because engines would not accept new primitive types with value equality; a smaller object-based "Composites" proposal replaced it.
event_kind: withdrawal
date: 2025-04-14
era: E4
impact: negative
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore]
ideas: [ideas/tooling-and-ecosystem/tc39-proposal-outcomes, ideas/runtime-performance/value-types]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: rt-withdrawn
    resource: https://github.com/tc39/proposal-record-tuple/issues/394
    title: "tc39/proposal-record-tuple issue #394: Proposal is withdrawn (2025-04-15)"
    author: org:tc39
  - id: rt-repo
    resource: https://github.com/tc39/proposal-record-tuple
    title: "tc39/proposal-record-tuple (archived)"
    author: org:tc39
  - id: jsweekly-732
    resource: https://javascriptweekly.com/issues/732
    title: "JavaScript Weekly #732: TC39: No to records and tuples, yes to enums"
  - id: waspdev-rt
    resource: https://waspdev.com/articles/2025-04-25/why-was-records-and-tuples-proposal-withdrawn
    title: "WaspDev: Why was Records & Tuples proposal withdrawn in JavaScript? (2025-04-25)"
---

# What happened
At the TC39 plenary on 2025-04-14, the committee reached consensus to withdraw Records & Tuples. The proposal had been at Stage 2 for years (exact promotion date unverified) and was "unable to gain further consensus for adding new primitives to the language".[^rt-withdrawn] Its champions had proposed deeply immutable `#{}` records and `#[]` tuples compared by value with `===`. Engine implementers objected to the cost of new primitive types and to O(n) structural equality on a hot operator.[^waspdev-rt] The repository was archived, and readers were pointed to `proposal-composites`. That proposal covers only new objects, not new primitives, with opt-in structural equality.[^rt-withdrawn][^rt-repo] JavaScript Weekly summed up that meeting: "No to records and tuples, yes to enums".[^jsweekly-732]

# Why it matters
This is the period's clearest TC39 failure of an ambitious, popular proposal. Developers wanted value semantics for React state, map keys and memoization. Engines, which hold a de facto veto in the committee, judged the performance and complexity costs too high. The pattern repeats across JavaScript: features that need deep engine changes (value types, operator overloading, Records & Tuples, structs at first) stall. Library-level or erasable features (decorators, Temporal as a library-shaped API, type stripping) get through.

# Related
- [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md), [Value types](/ideas/runtime-performance/value-types.md)
- [JavaScript](/languages/javascript.md)
- [Temporal reaches Stage 4](/events/2026-03-temporal-reaches-stage-4.md)

[^rt-withdrawn]: tc39/proposal-record-tuple issue #394: Proposal is withdrawn — https://github.com/tc39/proposal-record-tuple/issues/394
[^rt-repo]: tc39/proposal-record-tuple — https://github.com/tc39/proposal-record-tuple
[^jsweekly-732]: JavaScript Weekly #732 — https://javascriptweekly.com/issues/732
[^waspdev-rt]: WaspDev: Why was Records & Tuples proposal withdrawn — https://waspdev.com/articles/2025-04-25/why-was-records-and-tuples-proposal-withdrawn
