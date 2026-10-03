---
type: Event
title: TC39 Signals proposal reaches Stage 1
description: A cross-framework group (Angular, Vue, Solid, Preact, Svelte, Ember, MobX and others) brought a standard reactive Signal primitive to TC39; it reached Stage 1 in April 2024 and was still there as of October 2026.
event_kind: proposal-accepted
date: 2024-04-10
era: E3
impact: mixed
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore]
ideas: [ideas/concurrency/signals-and-fine-grained-reactivity, ideas/tooling-and-ecosystem/tc39-proposal-outcomes]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tc39-agenda-2404
    resource: https://github.com/tc39/agendas/blob/main/2024/04.md
    title: "TC39 agenda: 101st meeting, 8–11 April 2024 (Signals for Stage 1)"
    author: org:tc39
  - id: signals-repo
    resource: https://github.com/tc39/proposal-signals
    title: "tc39/proposal-signals (Stage 1)"
    author: org:tc39
  - id: eisenberg-signals
    resource: https://eisenbergeffect.medium.com/a-tc39-proposal-for-signals-f0bedd37a335
    title: "Rob Eisenberg: A TC39 Proposal for Signals (2024-03-31)"
---

# What happened
At the 101st TC39 meeting (8–11 April 2024, remote), Daniel Ehrenberg and Jatin Ramanathan presented the Signals proposal for Stage 1, and it advanced.[^tc39-agenda-2404][^signals-repo] Rob Eisenberg had published a v0 draft and polyfill days earlier. The draft came out of an effort he started in late 2023 with Ehrenberg, Ben Lesh and Dominic Gannaway to gather signal-library authors.[^eisenberg-signals] The repository lists design input from maintainers of Angular, Bubble, Ember, FAST, MobX, Preact, Qwik, RxJS, Solid, Starbeam, Svelte, Vue and Wiz.[^signals-repo] (The exact day within the meeting is not verified; 2024-04-10 is approximate.)

# Why it matters
Signals were the dominant frontend idea of 2022–2025: SolidJS, Preact Signals, Angular signals, Vue refs and Svelte 5 runes all converged on fine-grained reactive cells. The proposal tests whether TC39 can standardise a pattern that frameworks already ship. The champions chose to wait. The repository says they will standardise only if signals prove "suitable for use in practice in multiple frameworks" and better than framework-provided ones. They require production-grade polyfills and framework integrations before Stage 2.[^signals-repo] As of October 2026 no advancement beyond Stage 1 has been found. Library convergence succeeded, but language-level standardisation stalled.

# Related
- [Signals and fine-grained reactivity](/ideas/concurrency/signals-and-fine-grained-reactivity.md)
- [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md)
- [JavaScript](/languages/javascript.md)

[^tc39-agenda-2404]: TC39 agenda, April 2024 — https://github.com/tc39/agendas/blob/main/2024/04.md
[^signals-repo]: tc39/proposal-signals — https://github.com/tc39/proposal-signals
[^eisenberg-signals]: Rob Eisenberg: A TC39 Proposal for Signals — https://eisenbergeffect.medium.com/a-tc39-proposal-for-signals-f0bedd37a335
