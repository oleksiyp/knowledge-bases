---
type: Runtime
title: LuaJIT
description: "LuaJIT's trace compiler was still a benchmark for dynamic-language JITs in 2026, and it powers OpenResty, Neovim and many game engines. It is a one-maintainer project frozen at Lua 5.1 semantics, moved to rolling releases in 2023, and has not shipped 'v3.0'. Some high-profile users (Cloudflare) replaced LuaJIT-scripted proxies with Rust. A durable success with no succession plan."
tags: [luajit, lua, tracing-jit, mike-pall, openresty, neovim, ffi]
runtime_kind: jit
languages: [languages/lua-luau]
ideas: [ideas/runtime-performance/jit-for-dynamic-languages, ideas/runtime-performance/copy-and-patch-jit, ideas/platforms-and-portability/ffi-modernization]
trajectory: stable
steward: Mike Pall (sole maintainer)
governance: bdfl
era_momentum: { E1: flat, E2: flat, E3: flat, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: luajit-site
    resource: https://luajit.org/luajit.html
    title: "LuaJIT.org: project page"
  - id: luajit-rolling-hn
    resource: https://news.ycombinator.com/item?id=37260914
    title: "Hacker News: LuaJIT uses rolling releases (Aug 2023)"
  - id: luajit-rolling
    resource: https://www.freelists.org/post/luajit/LuaJIT-uses-rolling-releases
    title: "Mike Pall, LuaJIT list: LuaJIT uses rolling releases (Aug 2023)"
  - id: luajit-v3
    resource: https://lobste.rs/s/4rgej4/luajit_v3_0_tracking_issue
    title: "Lobsters: LuaJIT v3.0 tracking issue"
  - id: pingora
    resource: https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/
    title: "Cloudflare: How we built Pingora, the proxy that connects Cloudflare to the Internet (2022-09-14)"
    author: org:cloudflare
  - id: deegen-ljr
    resource: https://sillycross.github.io/2023/05/12/2023-05-12/
    title: "Haoran Xu: Building a baseline JIT for Lua automatically (LuaJIT Remake, 2023)"
  - id: deegen-paper
    resource: https://arxiv.org/abs/2411.11469
    title: "Xu & Kjolstad: Deegen — A JIT-Capable VM Generator for Dynamic Languages (2024)"
  - id: neovim-05
    resource: https://neovim.io/news/2021/07
    title: "Neovim News: Neovim 0.5 (Lua configuration)"
    author: org:neovim
---

# Summary
LuaJIT is a **finished masterpiece with a bus factor of one**. Mike Pall's tracing JIT, with its interpreter written in assembly and a zero-overhead FFI, set the standard that newer dynamic-language JITs are measured against. Between 2018 and 2026 it kept running in large deployments: OpenResty/Kong gateways, Neovim (which requires LuaJIT or Lua 5.1-compatible semantics) and many game engines.[^luajit-site][^neovim-05]

Its development model drifted further from conventional releases. In August 2023 Pall announced that LuaJIT uses **rolling releases**: the version is derived from the commit timestamp, v2.1 became the stable rolling branch, and v3.0 work began. As of 2026 there is no 3.0 release.[^luajit-rolling][^luajit-rolling-hn][^luajit-v3]

LuaJIT implements Lua 5.1 plus selected extensions. It never followed 5.2, 5.3, 5.4 or 5.5, so the Lua world split into a LuaJIT/5.1 dialect and a PUC-Rio dialect.

The research frontier moved past it. Haoran Xu's **LuaJIT Remake** (Deegen) generated an interpreter and a copy-and-patch baseline JIT for Lua automatically from semantic descriptions, and reported performance competitive with LuaJIT's interpreter.[^deegen-ljr][^deegen-paper] In industry, Cloudflare replaced its NGINX/OpenResty-based proxy with **Pingora**, written in Rust, citing NGINX's architectural limits at its scale. One of LuaJIT's most visible deployments thus moved to a compiled, type-safe stack.[^pingora]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021-07 | Neovim 0.5 makes Lua (via LuaJIT) the configuration language [^neovim-05] | + |
| E2 | 2022-09-14 | Cloudflare describes Pingora (Rust) replacing its NGINX/OpenResty proxy [^pingora] | − |
| E3 | 2023-05 | LuaJIT Remake: auto-generated baseline JIT via copy-and-patch [^deegen-ljr] | + (research) |
| E3 | 2023-08 | LuaJIT moves to rolling releases; v3.0 work announced [^luajit-rolling] | mixed |
| E4 | 2024-11 | Deegen paper published [^deegen-paper] | + (research) |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | the canonical success of tracing JITs |
| [Copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md) | used by LuaJIT Remake to auto-generate a baseline tier |
| [FFI modernization](/ideas/platforms-and-portability/ffi-modernization.md) | LuaJIT's FFI is still a model for zero-glue C interop |

# What succeeded
- **Performance per line of code.** A small codebase that is still competitive with large, corporate JITs.
- **The FFI.** Declaring C types inline, with the JIT compiling the calls, made LuaJIT a favourite for systems glue.

# What failed or stalled
- **Language evolution.** Freezing at 5.1 split the ecosystem and kept users on old semantics.
- **Succession.** There is no foundation, no co-maintainers of comparable depth and no release cadence. Rolling releases document reality rather than fix it.[^luajit-rolling]
- **Some flagship deployments.** At hyperscale, the cost of a dynamic-language VM inside the proxy pushed Cloudflare to Rust.[^pingora]

# By era
## E1
Quiet maintenance.
## E2
Neovim adoption; Cloudflare moves to Pingora.
## E3
Rolling releases; Deegen/LuaJIT Remake.
## E4
Maintenance continues; 3.0 still unreleased.

# Lessons
- One exceptional engineer can build a world-class JIT, but the community then depends on that person's availability.
- Tracing JITs excel on small, hot, loop-heavy code (games, packet filters). Modern work for large dynamic languages leans toward method or basic-block JITs (YJIT, ZJIT, CPython 3.16+ plans).

# Related
- [Lua and Luau](/languages/lua-luau.md) · [CRuby YJIT](/runtimes/cruby-yjit.md) · [PyPy](/runtimes/pypy.md)
- [Copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md)

[^luajit-site]: LuaJIT.org — https://luajit.org/luajit.html
[^luajit-rolling-hn]: Hacker News: LuaJIT uses rolling releases — https://news.ycombinator.com/item?id=37260914
[^luajit-rolling]: Mike Pall: LuaJIT uses rolling releases — https://www.freelists.org/post/luajit/LuaJIT-uses-rolling-releases
[^luajit-v3]: Lobsters: LuaJIT v3.0 tracking issue — https://lobste.rs/s/4rgej4/luajit_v3_0_tracking_issue
[^pingora]: Cloudflare: How we built Pingora — https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/
[^deegen-ljr]: Haoran Xu: Building a baseline JIT for Lua automatically — https://sillycross.github.io/2023/05/12/2023-05-12/
[^deegen-paper]: Xu & Kjolstad: Deegen — https://arxiv.org/abs/2411.11469
[^neovim-05]: Neovim News: Neovim 0.5 — https://neovim.io/news/2021/07
