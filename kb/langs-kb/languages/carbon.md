---
type: Language
title: Carbon
description: Google's experimental C++ successor, announced in July 2022 with C++ interop as its reason to exist; by October 2026 it has a working toolchain and a memory-safety design but no 0.1 release yet, which the team itself says cannot ship before the end of 2026. Unproven.
tags: [systems, cpp-successor, google, experimental, cpp-interop, memory-safety]
paradigms: [systems, imperative, generic]
typing: static
memory_model: manual
first_released: 2022
steward: Carbon Language project (started at Google; open-source governance)
governance: single-vendor
trajectory: stalled
ideas: [ideas/memory-safety/cpp-successor-languages, ideas/memory-safety/ownership-and-borrowing, ideas/memory-safety/safe-cpp-vs-profiles]
runtimes: []
adoption_signals:
  production_users: { value: "none public; early internal Google pilots reported", as_of: 2026-04 }
era_momentum: { E1: n/a, E2: up, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: carbon-roadmap
    resource: https://docs.carbon-lang.dev/docs/project/roadmap.html
    title: "Carbon Language: Roadmap (2025 objectives; 0.1 no sooner than end of 2026)"
    author: org:carbon-language
  - id: carbon-safety-pr
    resource: https://github.com/carbon-language/carbon-lang/pull/4880
    title: "carbon-lang PR #4880: Safety milestones and a 2025 roadmap (Chandler Carruth)"
    author: org:carbon-language
  - id: carbon-cppnorth
    resource: https://x.com/chandlerc1024/status/1549411352657133568
    title: "Chandler Carruth: Carbon shared ahead of CppNorth keynote (July 2022)"
  - id: carbon-ndc-2026
    resource: https://ndctoronto.com/agenda/carbon-graduating-from-the-experiment/be09a27e1d46
    title: "NDC Toronto 2026: Carbon: graduating from the experiment (Chandler Carruth)"
  - id: carbon-gh
    resource: https://github.com/carbon-language/carbon-lang
    title: "GitHub: carbon-language/carbon-lang (nightly toolchain builds)"
  - id: herecomesthemoon
    resource: https://herecomesthemoon.net/2025/02/carbon-is-not-a-language/
    title: "Here Comes The Moon: Carbon is not a programming language (sort of) (Feb 2025)"
  - id: reg-safecpp
    resource: https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
    title: "The Register: Safe C++ proposal all but abandoned in favor of profiles (2025-09-16)"
---

# Summary
Carbon was unveiled by Chandler Carruth at CppNorth (Toronto) on 2022-07-19 as an *experimental* successor to C++, designed around bidirectional interop with existing C++ codebases rather than replacement.[^carbon-cppnorth] Four years on it remains experimental: the project spent 2025 on two things — making C++ interop work in realistic scenarios (by integrating Clang into the Carbon toolchain) and producing a concrete memory-safety design.[^carbon-roadmap][^carbon-safety-pr] Folding memory safety into the 0.1 milestone pushed that milestone out "by at least a year"; the roadmap now says the end of 2026 is the *soonest* 0.1 could ship and that even this "may not be possible."[^carbon-roadmap] Verdict: **unproven, slow** — the most credible C++-successor effort on interop, but with no public production users after four years, it has been overtaken in practice by Rust's interop tooling and by in-place C++ hardening.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-07-19 | Carbon announced at CppNorth as experimental C++ successor (see [event](/events/2022-07-carbon-announced.md)) [^carbon-cppnorth] | + |
| E3 | 2023–2024 | Explorer interpreter gives way to a real compiler toolchain (`carbon` nightly builds) [^carbon-gh] | mixed |
| E4 | 2025-01 | "Safety milestones and a 2025 roadmap": memory safety added to the 0.1 MVP, delaying it [^carbon-safety-pr] | mixed |
| E4 | 2025-02 | Critics argue Carbon is really "a C++ migration tool" more than a language [^herecomesthemoon] | − |
| E4 | 2025-09 | Safe C++ dropped in WG21; Carbon remains one of few paths to borrow-checked C++-compatible code [^reg-safecpp] | mixed |
| E4 | 2026 | NDC Toronto talk "graduating from the experiment": Clang-integrated interop, safety design, internal pilots [^carbon-ndc-2026] | + |
| E4 | 2026-10 | Still nightly builds only; 0.1 "no sooner than end of 2026" [^carbon-roadmap] | − |

# Ideas it bet on
| Idea | Outcome for Carbon |
|---|---|
| [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md) | unproven — no 0.1 release yet |
| Seamless bidirectional C++ interop (Clang embedded in toolchain) | succeeding technically, demonstrated in 2025–26 [^carbon-ndc-2026] |
| [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md)-style compile-time temporal safety ("strict" vs "permissive" modes) | design only [^carbon-safety-pr] |
| Checked generics (definition-checked, unlike C++ templates) | designed and implemented in toolchain; unproven at scale |
| Open governance from day one (no BDFL) | working, but contributors remain mostly Google |

# What succeeded
- **Honest framing.** Carbon never claimed readiness; its README says "experimental" and tells users to use Rust if they can. That honesty insulated it from the hype backlash that hit [V](/languages/v-lang.md).[^carbon-gh]
- **Interop engineering.** Embedding Clang so Carbon can import C++ headers and C++ can call Carbon is a harder and more useful bet than a new syntax; by 2026 it was being demonstrated in realistic scenarios.[^carbon-roadmap][^carbon-ndc-2026]
- **A concrete safety design** with an incremental path: automated C++→"permissive Carbon" migration, then refactoring towards strict safe Carbon.[^carbon-safety-pr]

# What failed or stalled
- **Time.** Four years after announcement there is no 0.1; the earliest realistic date keeps moving.[^carbon-roadmap]
- **Strategic overtaking.** During those four years Google itself scaled Rust in Android and Chromium and retrofitted hardened libc++ across its C++ — reducing the urgency of a successor (see [bounds safety and hardened C](/ideas/memory-safety/bounds-safety-and-hardened-c.md)).
- **Single-sponsor risk.** Like [cppfront](/languages/cppfront.md), Carbon depends on a few champions at one company; there are no public external production users.

# By era
## E1
- Not public. Carbon's early material frames it as a response to C++'s difficulty evolving (ABI stability, committee process); the specific link to WG21's 2020 decision not to break ABI is widely reported but unverified here.
## E2
- July 2022 announcement; large initial interest (GitHub stars, press), explorer interpreter only.[^carbon-cppnorth]
## E3
- Toolchain rewrite; generics and interop design; momentum flat as Rust adoption in Google products accelerates.
## E4
- Memory safety pulled into 0.1, interop demos, "graduating from the experiment" messaging, but no release.[^carbon-safety-pr][^carbon-ndc-2026]

# Lessons
- A successor language for a 40-year-old ecosystem is a 10-year project; announcing at the start creates an expectations gap.
- Interop-first is the right bet for C++ successors, but it competes with *in-place* hardening, which needs no new language at all (see [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md)).
- Memory safety became table stakes during the project's life (see [memory safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)); a successor without it would have been dead on arrival, and adding it cost a year.

# Related
- [C++](/languages/cpp.md), [cppfront](/languages/cppfront.md), [Hylo](/languages/hylo.md), [Rust](/languages/rust.md)
- [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md), [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md)
- [Carbon announced (event)](/events/2022-07-carbon-announced.md), [Safe C++ abandoned (event)](/events/2025-09-safe-cpp-abandoned.md)

[^carbon-roadmap]: Carbon Language: Roadmap — https://docs.carbon-lang.dev/docs/project/roadmap.html
[^carbon-safety-pr]: carbon-lang PR #4880: Safety milestones and a 2025 roadmap — https://github.com/carbon-language/carbon-lang/pull/4880
[^carbon-cppnorth]: Chandler Carruth on Carbon's CppNorth debut (July 2022) — https://x.com/chandlerc1024/status/1549411352657133568
[^carbon-ndc-2026]: NDC Toronto 2026: Carbon: graduating from the experiment — https://ndctoronto.com/agenda/carbon-graduating-from-the-experiment/be09a27e1d46
[^carbon-gh]: GitHub: carbon-language/carbon-lang — https://github.com/carbon-language/carbon-lang
[^herecomesthemoon]: Carbon is not a programming language (sort of) — https://herecomesthemoon.net/2025/02/carbon-is-not-a-language/
[^reg-safecpp]: The Register: Safe C++ proposal all but abandoned in favor of profiles — https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
