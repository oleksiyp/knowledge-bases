---
type: Event
title: "Microsoft engineer's \"eliminate all C/C++ by 2030\" post, then walk-back"
description: In December 2025 Microsoft Distinguished Engineer Galen Hunt wrote that his goal was to "eliminate every line of C and C++ from Microsoft by 2030" using AI plus algorithms, at "1 engineer, 1 month, 1 million lines". After a backlash, Microsoft clarified that Windows is not being rewritten in Rust with AI and that this is a research effort.
event_kind: announcement
date: 2025-12-22
era: E4
impact: mixed
languages: [languages/rust, languages/c, languages/cpp]
runtimes: []
ideas: [ideas/memory-safety/c-to-rust-translation, ideas/ai-and-languages/ai-assisted-code-migration]
tags: [microsoft, rust, ai, migration, windows]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: wc-hunt
    resource: https://www.windowscentral.com/microsoft/windows-11/my-goal-is-to-eliminate-every-line-of-c-and-c-from-microsoft-by-2030-microsoft-bets-on-ai-to-finally-modernize-windows
    title: "Windows Central: 'My goal is to eliminate every line of C and C++ from Microsoft by 2030'"
  - id: wl-denial
    resource: https://www.windowslatest.com/2025/12/24/microsoft-denies-rewriting-windows-11-using-ai-after-an-employees-one-engineer-one-month-one-million-code-post-on-linkedin-causes-outrage/
    title: "Windows Latest: Microsoft denies rewriting Windows 11 using AI after employee's LinkedIn post (2025-12-24)"
  - id: xda-hunt
    resource: https://www.xda-developers.com/no-microsoft-isnt-actually-eliminating-c-and-c-from-its-software-rust/
    title: "XDA: No, Microsoft isn't actually eliminating C and C++ from its software"
  - id: slashdot-hunt
    resource: https://developers.slashdot.org/story/25/12/23/010200/microsoft-to-replace-all-cc-code-with-rust-by-2030
    title: "Slashdot: Microsoft To Replace All C/C++ Code With Rust By 2030 (2025-12-23)"
---

# What happened
In late December 2025 (the post was widely reported on 2025-12-23), Galen Hunt, a Microsoft Distinguished Engineer in the CoreAI organisation, wrote on LinkedIn: "My goal is to eliminate every line of C and C++ from Microsoft by 2030." He described combining AI agents with algorithmic program analysis to translate Microsoft's largest codebases to Rust. His "North Star" was "1 engineer, 1 month, 1 million lines of code", and the post was a recruiting call.[^wc-hunt][^slashdot-hunt] Headlines like "Microsoft to replace all C/C++ with Rust" followed. Microsoft communications then said Windows is *not* being rewritten in Rust with AI. Hunt edited the post to describe a research project building "tech to make migration from language to language possible".[^wl-denial][^xda-hunt]

# Why it matters
The episode captures the 2025–26 mood of [AI-assisted code migration](/ideas/ai-and-languages/ai-assisted-code-migration.md). LLM agents made wholesale [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md) seem newly plausible, but the people responsible for shipping products would not commit to it. The tension between research ambition and production caution shows up in DARPA TRACTOR, Canonical's 2026 PhD funding, and Bun's agent-driven [Zig-to-Rust port](/events/2026-05-bun-zig-to-rust.md). Nine months later Microsoft made Rust a [Tier 1 internal language](/events/2026-09-microsoft-rust-tier-1.md), an incremental commitment rather than a 2030 elimination target.

# Related
- [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md)
- [DARPA TRACTOR](/events/2024-07-darpa-tractor-announced.md)
- [Rust](/languages/rust.md), [C++](/languages/cpp.md)

[^wc-hunt]: Windows Central: 'My goal is to eliminate every line of C and C++ from Microsoft by 2030' — https://www.windowscentral.com/microsoft/windows-11/my-goal-is-to-eliminate-every-line-of-c-and-c-from-microsoft-by-2030-microsoft-bets-on-ai-to-finally-modernize-windows
[^wl-denial]: Windows Latest: Microsoft denies rewriting Windows 11 using AI — https://www.windowslatest.com/2025/12/24/microsoft-denies-rewriting-windows-11-using-ai-after-an-employees-one-engineer-one-month-one-million-code-post-on-linkedin-causes-outrage/
[^xda-hunt]: XDA: No, Microsoft isn't actually eliminating C and C++ — https://www.xda-developers.com/no-microsoft-isnt-actually-eliminating-c-and-c-from-its-software-rust/
[^slashdot-hunt]: Slashdot: Microsoft To Replace All C/C++ Code With Rust By 2030 — https://developers.slashdot.org/story/25/12/23/010200/microsoft-to-replace-all-cc-code-with-rust-by-2030
