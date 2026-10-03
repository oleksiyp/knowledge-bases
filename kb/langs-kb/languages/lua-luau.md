---
type: Language
title: Lua and Luau
description: "Lua stayed the default embeddable scripting language from 2018 to 2026 (games, Neovim, Redis, nginx/OpenResty). PUC-Rio shipped only two releases (5.4 in 2020, 5.5 in 2025), and LuaJIT froze at 5.1 semantics. Roblox's Luau fork — gradually typed, sandboxed, open-sourced in 2021 — became the most actively developed member of the family. It is a success of the 'small core, many dialects' model."
tags: [lua, luau, roblox, embedding, scripting, gradual-typing, games, neovim]
paradigms: [imperative, scripting, multi-paradigm]
typing: dynamic
memory_model: gc
first_released: 1993
steward: PUC-Rio (Lua team); Roblox (Luau); Mike Pall (LuaJIT)
governance: bdfl
trajectory: stable
ideas: [ideas/types/gradual-typing-for-dynamic-languages, ideas/runtime-performance/jit-for-dynamic-languages, ideas/runtime-performance/copy-and-patch-jit]
runtimes: [runtimes/luajit]
adoption_signals:
  tiobe_rank: { value: 31, as_of: 2026-09 }
  so_survey_usage_pct: { value: 9.2, as_of: 2025 }
era_momentum: { E1: flat, E2: up, E3: flat, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: lua-versions
    resource: https://lua.org/versions.html
    title: "Lua.org: Version history (5.4 in 2020, 5.5 in 2025)"
    author: org:puc-rio
  - id: lua55
    resource: https://www.phoronix.com/news/Lua-5.5-Released
    title: "Phoronix: Lua 5.5 Released With Declarations For Global Variables (Dec 2025)"
  - id: luau-oss
    resource: https://gamefromscratch.com/roblox-open-source-luau-programming-language/
    title: "GameFromScratch: Roblox Open Source Luau Programming Language (Nov 2021)"
  - id: luau-gh
    resource: https://github.com/luau-lang
    title: "GitHub: luau-lang organisation"
    author: org:roblox
  - id: luau-wiki
    resource: https://en.wikipedia.org/wiki/Luau_(programming_language)
    title: "Wikipedia: Luau (programming language) — open-sourced 2021-11-03 under MIT"
  - id: luau-fandom
    resource: https://roblox.fandom.com/wiki/Luau
    title: "Roblox Wiki: Luau (New Type Solver beta, Sept 2024)"
  - id: luajit-rolling
    resource: https://www.freelists.org/post/luajit/LuaJIT-uses-rolling-releases
    title: "Mike Pall, LuaJIT mailing list: LuaJIT uses rolling releases (Aug 2023)"
  - id: neovim-05
    resource: https://neovim.io/news/2021/07
    title: "Neovim News: Neovim 0.5 released with Lua configuration and built-in LSP (July 2021)"
    author: org:neovim
  - id: tiobe-2026-09
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026"
    author: org:tiobe
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stack-overflow
  - id: deegen-ljr
    resource: https://sillycross.github.io/2023/05/12/2023-05-12/
    title: "Haoran Xu: Building a baseline JIT for Lua automatically (LuaJIT Remake, 2023)"
---

# Summary
Lua's 2018–2026 verdict: **a stable success as an embedded language, carried forward by its forks.** The official PUC-Rio line moves slowly by design:
- **Lua 5.4** (June 2020) added a generational GC and to-be-closed variables.[^lua-versions]
- **Lua 5.5** followed on 2025-12-22, five years later, with global-variable declarations and arrays that use about 60% less memory.[^lua55]

Most of the energy was elsewhere:
- **Luau.** Roblox open-sourced its fork on 2021-11-03 under MIT. It adds gradual typing, sandboxing and a faster VM, and it is used by Roblox's very large creator base.[^luau-wiki][^luau-oss]
- **LuaJIT.** It remains the fastest dynamic-language JIT for many workloads but is frozen at Lua 5.1 semantics. In 2023 it moved to rolling releases.[^luajit-rolling]
- **Neovim 0.5** (July 2021) made Lua its first-class configuration language. That gave Lua a new developer audience.[^neovim-05]

Lua was used by 9.2% of Stack Overflow respondents in 2025, more than Ruby. On TIOBE it ranked #31 in September 2026.[^so-2025][^tiobe-2026-09]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-06 | Lua 5.4: generational GC, `<close>` variables, integer for-loop changes [^lua-versions] | + |
| E2 | 2021-07 | Neovim 0.5 ships Lua config and built-in LSP client [^neovim-05] | + |
| E2 | 2021-11-03 | Roblox open-sources Luau (MIT) [^luau-wiki] | + |
| E3 | 2023-05 | LuaJIT Remake shows an automatically generated copy-and-patch baseline JIT for Lua [^deegen-ljr] | + |
| E3 | 2023-08 | LuaJIT switches to rolling releases; v3.0 work begins [^luajit-rolling] | mixed |
| E3 | 2024-09 | Luau New Type Solver enters beta (type functions, read-only properties) [^luau-fandom] | + |
| E4 | 2025-12-22 | Lua 5.5 released [^lua55] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md) | Luau: succeeded on Roblox; PUC Lua stays untyped |
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | LuaJIT is still a reference design, but it forked the language |
| [Copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md) | demonstrated in research (LuaJIT Remake / Deegen) |

# What succeeded
- **Embeddability.** A tiny C core, a clean C API and permissive licensing kept Lua the default in game engines, editors, network appliances and databases.
- **Forking as evolution.** Luau showed that a large platform owner can add types and safety to an embeddable language and then open-source the result.[^luau-gh]
- **New audiences.** Neovim's switch to Lua gave many developers their first Lua code.[^neovim-05]

# What failed or stalled
- **Fragmentation.** LuaJIT (5.1 plus extensions), PUC 5.4/5.5 and Luau are incompatible dialects, so libraries cannot target "Lua" as one language. LuaJIT's 5.1 lock-in kept much of the ecosystem on 2006-era semantics.
- **LuaJIT's bus factor.** It depends on one maintainer. Rolling releases replaced tagged versions, and "3.0" has not shipped.[^luajit-rolling]
- **Slow upstream.** Five years between 5.4 and 5.5 suits embedders but leaves language evolution to the forks.

# By era
## E1
Lua 5.4. LuaJIT is in a quiet period.
## E2
Neovim's Lua pivot and the Luau open-sourcing.
## E3
LuaJIT rolling releases. Research JITs (Deegen) and Luau's type-solver rewrite.
## E4
Lua 5.5. Luau keeps evolving its type system.

# Lessons
- A small, stable core plus downstream forks can be healthier than a fast-moving upstream, as long as the forks open-source their work.
- Gradual typing gets adopted when a platform owner (Roblox) ships it as the default experience.

# Related
- [LuaJIT](/runtimes/luajit.md) · [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md) · [Luau open-sourced](/events/2021-11-luau-open-sourced.md)

[^lua-versions]: Lua.org: Version history — https://lua.org/versions.html
[^lua55]: Phoronix: Lua 5.5 Released — https://www.phoronix.com/news/Lua-5.5-Released
[^luau-oss]: GameFromScratch: Roblox Open Source Luau — https://gamefromscratch.com/roblox-open-source-luau-programming-language/
[^luau-gh]: GitHub: luau-lang — https://github.com/luau-lang
[^luau-wiki]: Wikipedia: Luau (programming language) — https://en.wikipedia.org/wiki/Luau_(programming_language)
[^luau-fandom]: Roblox Wiki: Luau — https://roblox.fandom.com/wiki/Luau
[^luajit-rolling]: Mike Pall: LuaJIT uses rolling releases — https://www.freelists.org/post/luajit/LuaJIT-uses-rolling-releases
[^neovim-05]: Neovim News: Neovim 0.5 — https://neovim.io/news/2021/07
[^tiobe-2026-09]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^deegen-ljr]: Haoran Xu: Building a baseline JIT for Lua automatically — https://sillycross.github.io/2023/05/12/2023-05-12/
