---
type: Idea
title: Signals and fine-grained reactivity
description: Reactive cells (signals) with auto-tracked dependencies, updating only what changed, as an alternative to virtual-DOM diffing. Frameworks converged on it (Solid, Preact Signals, Angular 16–20, Svelte 5 runes, Vue). React chose a compiler instead, and the TC39 Signals proposal has stayed at Stage 1 since April 2024. A framework-level success and a language-level unknown.
area: concurrency
tags: [signals, reactivity, solid, svelte, angular, preact, vue, react-compiler, tc39, ui-runtime]
outcome: succeeding
maturity_2026: adopted
origin_year: 2010
mainstream_year: 2023
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore]
related_ideas: [ideas/tooling-and-ecosystem/tc39-proposal-outcomes, ideas/concurrency/async-await-and-function-coloring, ideas/types/algebraic-effects-and-handlers]
era_momentum: { E1: flat, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tc39-signals
    resource: https://github.com/tc39/proposal-signals
    title: "tc39/proposal-signals (Stage 1; 'at least 2-3 years at an absolute minimum')"
    author: org:tc39
  - id: eisenberg-signals
    resource: https://eisenbergeffect.medium.com/a-tc39-proposal-for-signals-f0bedd37a335
    title: "Rob Eisenberg: A TC39 Proposal for Signals (2024-03-31)"
  - id: angular-60964
    resource: https://github.com/angular/angular/issues/60964
    title: "angular/angular issue #60964: Support for TC39 Signals (2025-04-22)"
    author: org:google
  - id: angular-v20
    resource: https://blog.angular.dev/announcing-angular-v20-b5c9c06cf301
    title: "Angular blog: Announcing Angular v20 (signal, effect, linkedSignal stable; May 2025)"
    author: org:google
  - id: svelte5
    resource: https://svelte.dev/blog/svelte-5-is-alive
    title: "Svelte blog: Svelte 5 is alive (runes; 2024-10-19)"
  - id: preact-signals
    resource: https://preactjs.com/blog/introducing-signals/
    title: "Preact blog: Introducing Signals (2022-09)"
  - id: react-compiler
    resource: https://react.dev/blog/2025/10/07/react-compiler-1
    title: "React blog: React Compiler v1.0 (2025-10-07)"
    author: org:meta
  - id: infoq-sojs
    resource: https://www.infoq.com/news/2026/03/state-of-js-survey-2025
    title: "InfoQ: State of JavaScript 2025 survey (React 83.6% usage; Solid highest satisfaction five years running)"
---

# Summary
**Succeeding in frameworks, unproven in the language.** A *signal* is a value cell. Computations that read it record the dependency automatically, and when it changes only those dependents re-run. The model goes back to Knockout and MobX in the early 2010s. Solid.js revived it as a performance architecture, Preact shipped Signals in 2022, Angular rebuilt itself around signals (developer preview in v16, core APIs stable in **v20, May 2025**), and Svelte 5 replaced compiler-inferred reactivity with signal-based "runes" (Oct 2024).[^preact-signals][^angular-v20][^svelte5] Solid had the highest developer satisfaction in State of JS for the fifth straight year in 2025.[^infoq-sojs] The two big holdouts are significant. **React** (83.6% usage) chose the opposite route, an optimizing compiler for auto-memoization (React Compiler 1.0, Oct 2025).[^react-compiler][^infoq-sojs] And the **TC39 Signals proposal**, backed by authors from Angular, Vue, Solid, Svelte, Preact, Ember, MobX and others, reached Stage 1 in April 2024 and was still there in 2026. Its champions themselves expect "at least 2-3 years at an absolute minimum", and Angular said in April 2025 it will not adopt it while it is at Stage 1.[^tc39-signals][^eisenberg-signals][^angular-60964]

# The idea
Push-pull reactive graphs: writable `State` signals, lazily memoised `Computed` signals, and effects scheduled by the framework. The benefits are surgical DOM updates without virtual-DOM diffing or re-running whole components, plus glitch-free derived state. The TC39 proposal aims to standardise only the core graph (`Signal.State`, `Signal.Computed`, a watcher). Frameworks would then interoperate on one reactive substrate, and engines might be able to optimise it.[^tc39-signals]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2020 | Solid.js develops fine-grained reactivity without a VDOM; MobX in production | + |
| E2 | 2022-09 | Preact Signals [^preact-signals] | + |
| E3 | 2023-05 | Angular 16 ships signals in developer preview | + |
| E3 | 2024-03/04 | Signals proposal published and reaches Stage 1 ([event](/events/2024-04-tc39-signals-proposal.md)) [^eisenberg-signals][^tc39-signals] | + |
| E4 | 2024-10-19 | Svelte 5 runes [^svelte5] | + |
| E4 | 2025-04-22 | Angular: no support for the TC39 standard while at Stage 1 [^angular-60964] | − |
| E4 | 2025-05 | Angular v20: signal, effect, linkedSignal stable [^angular-v20] | + |
| E4 | 2025-10-07 | React Compiler 1.0, React's non-signals answer [^react-compiler] | mixed |
| E4 | 2026-03 | State of JS 2025: Solid top satisfaction; React still dominant [^infoq-sojs] | mixed |

# Where it succeeded
- **Convergence across frameworks.** By 2025, Angular, Vue, Svelte, Solid, Preact and Qwik all used signal-style reactivity, an unusual consensus in front-end history.[^angular-v20][^svelte5][^tc39-signals]
- **Performance and developer experience.** Solid's satisfaction lead and Angular's move towards zoneless operation show the model scales to large apps.[^infoq-sojs][^angular-v20]
- **Cross-framework standardisation effort.** The proposal's broad co-authorship is itself evidence of how widely the model is accepted.[^tc39-signals]

# Where it failed or stalled
- **React did not adopt it.** The most-used framework bet on compiler-driven memoization, so "signals everywhere" did not reach the majority of front-end code.[^react-compiler][^infoq-sojs]
- **Language standard stalled at Stage 1**, with a self-declared conservative path. Frameworks will not depend on it before it advances.[^tc39-signals][^angular-60964]
- **Semantic differences.** Effect scheduling, async signals and ownership semantics differ between frameworks, which makes a minimal common core hard to agree on.[^tc39-signals]

# Why
1. **The VDOM's cost became visible on mobile and in large apps**, and signals remove the diff entirely. Frameworks without React's ecosystem lock-in could switch cheaply.
2. **React's backward compatibility.** Its large codebase depends on render-function semantics, so a compiler that preserves those semantics fits better than a new reactive primitive.[^react-compiler]
3. **Standardising a scheduler is hard.** The core graph is agreed, but effects and batching are framework policy, so TC39 can only standardise a narrow slice. That reduces the payoff for engines and slows progress.[^tc39-signals]
4. **The TC39 pattern repeats.** Userland already works, so there is little urgency to standardise (compare decorators in [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md)).

# Lessons
- Ideas can win by framework convergence without a standard. Standardisation follows adoption, and may never be needed.
- The market leader's compatibility constraints can keep the best-known technique out of most code.

# Related
- [JavaScript](/languages/javascript.md), [TypeScript](/languages/typescript.md)
- [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md), [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md), [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md)

[^tc39-signals]: tc39/proposal-signals — https://github.com/tc39/proposal-signals
[^eisenberg-signals]: Rob Eisenberg: A TC39 Proposal for Signals — https://eisenbergeffect.medium.com/a-tc39-proposal-for-signals-f0bedd37a335
[^angular-60964]: angular/angular issue #60964 — https://github.com/angular/angular/issues/60964
[^angular-v20]: Angular blog: Announcing Angular v20 — https://blog.angular.dev/announcing-angular-v20-b5c9c06cf301
[^svelte5]: Svelte blog: Svelte 5 is alive — https://svelte.dev/blog/svelte-5-is-alive
[^preact-signals]: Preact blog: Introducing Signals — https://preactjs.com/blog/introducing-signals/
[^react-compiler]: React blog: React Compiler v1.0 — https://react.dev/blog/2025/10/07/react-compiler-1
[^infoq-sojs]: InfoQ: State of JavaScript 2025 survey — https://www.infoq.com/news/2026/03/state-of-js-survey-2025
