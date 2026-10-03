---
type: Event
title: Temporal reaches Stage 4 at TC39
description: After nine years, the Temporal date/time API reached Stage 4 at TC39's March 2026 meeting and was slated for ECMAScript 2026; it had already shipped in Firefox 139, Chrome 144 and Node 26.
event_kind: proposal-accepted
date: 2026-03-11
era: E4
impact: positive
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/nodejs, runtimes/deno]
ideas: [ideas/tooling-and-ecosystem/tc39-proposal-outcomes]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: igalia-temporal
    resource: https://www.igalia.com/2026/03/13/Temporal-Reaches-Stage-4.html
    title: "Igalia: Temporal Reaches Stage 4 (2026-03-13)"
    author: org:igalia
  - id: socket-temporal
    resource: https://socket.dev/blog/tc39-advances-temporal-to-stage-4
    title: "Socket: TC39 Advances Temporal to Stage 4 Alongside Several ECMAScript Proposals"
  - id: tc39-agenda-2603
    resource: https://github.com/tc39/agendas/blob/main/2026/03.md
    title: "TC39 agenda: 113th meeting, 10–12 March 2026, New York"
    author: org:tc39
  - id: bloomberg-temporal
    resource: https://bloomberg.github.io/js-blog/post/temporal/
    title: "Bloomberg JS blog: Temporal: The 9-Year Journey to Fix Time in JavaScript"
    author: org:bloomberg
---

# What happened
At TC39's 113th meeting (10–12 March 2026, New York), Temporal advanced to Stage 4, which placed it in the ECMAScript 2026 specification.[^tc39-agenda-2603][^socket-temporal] (The exact day within the meeting is not verified; 2026-03-11 is approximate.) The proposal began in 2017. It replaces the legacy `Date` with immutable types, built-in time-zone and calendar support, and explicit arithmetic. It comes with about 4,500 test262 tests, compared with 594 for `Date`.[^igalia-temporal] It needed companion standards work: an ECMA-402 calendar proposal and IETF RFC 9557 for serialising time zones and calendars.[^igalia-temporal] Engines shipped it before Stage 4: Firefox 139 (May 2025), Chrome/Edge 144 (January 2026) and Node 26 (May 2026).[^socket-temporal][^igalia-temporal]

# Why it matters
Temporal is often called the largest addition to ECMAScript since ES2015. It is the period's showcase TC39 success, but also proof of how slow and how dependent on sponsors large library-shaped proposals are. Bloomberg funded the work and Igalia's engineers carried it for nine years.[^igalia-temporal][^bloomberg-temporal] Its success contrasts with Records & Tuples, withdrawn in 2025. Temporal needed no new primitives or engine-level semantics, so implementers could agree to it.

# Related
- [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md)
- [JavaScript](/languages/javascript.md), [V8](/runtimes/v8.md), [SpiderMonkey](/runtimes/spidermonkey.md)
- [Records & Tuples withdrawn](/events/2025-04-records-and-tuples-withdrawn.md)

[^igalia-temporal]: Igalia: Temporal Reaches Stage 4 — https://www.igalia.com/2026/03/13/Temporal-Reaches-Stage-4.html
[^socket-temporal]: Socket: TC39 Advances Temporal to Stage 4 — https://socket.dev/blog/tc39-advances-temporal-to-stage-4
[^tc39-agenda-2603]: TC39 agenda, March 2026 — https://github.com/tc39/agendas/blob/main/2026/03.md
[^bloomberg-temporal]: Bloomberg JS blog: Temporal: The 9-Year Journey — https://bloomberg.github.io/js-blog/post/temporal/
