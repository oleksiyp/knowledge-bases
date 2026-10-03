---
type: Idea
title: "Integrated toolchains (one binary: build, test, format, lint, package)"
description: "Ship one official command that builds, tests, formats, manages dependencies and serves the IDE, as the go command and cargo did. 2018–2026 verdict: succeeded. Every serious new language now ships this way (Zig, Gleam, Roc, Mojo), and older ecosystems retrofitted it (Python via uv, JS via Deno and Bun). JS runtimes that bundled everything won mindshare but not Node's market share."
area: tooling-and-ecosystem
tags: [toolchains, cargo, go, uv, deno, bun, zig, developer-experience]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2009
mainstream_year: 2015
languages: [languages/go, languages/rust, languages/zig, languages/gleam, languages/python, languages/javascript, languages/typescript, languages/dart]
runtimes: [runtimes/deno, runtimes/bun, runtimes/nodejs]
related_ideas: [ideas/tooling-and-ecosystem/native-rewrites-of-tooling, ideas/tooling-and-ecosystem/dependency-management-built-in, ideas/tooling-and-ecosystem/packaging-revolution-python, ideas/tooling-and-ecosystem/language-server-protocol]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: uber-zig
    resource: https://www.uber.com/us/en/blog/bootstrapping-ubers-infrastructure-on-arm64-with-zig/
    title: "Uber Engineering: Bootstrapping Uber's Infrastructure on arm64 with Zig"
    author: org:uber
  - id: hermetic-cc
    resource: https://github.com/uber/hermetic_cc_toolchain
    title: "GitHub: uber/hermetic_cc_toolchain"
  - id: deno2
    resource: https://thenewstack.io/deno-2-arrives-with-long-term-support-node-js-compatibility/
    title: "The New Stack: Deno 2 Arrives With Long-Term Support, npm Compatibility"
  - id: deno-decline
    resource: https://dbushell.com/2025/04/28/denos-decline/
    title: "David Bushell: Deno's Decline (6 Regions and Falling)"
  - id: deno-reply
    resource: https://deno.com/blog/greatly-exaggerated
    title: "Deno blog: Reports of Deno's Demise Have Been Greatly Exaggerated"
  - id: bun-anthropic
    resource: https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
    title: "DevClass: Bun JavaScript runtime acquired by Anthropic"
  - id: uv-unified
    resource: https://astral.sh/blog/uv-unified-python-packaging
    title: "Astral blog: uv — Unified Python packaging"
  - id: octoverse-2025
    resource: https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
    title: "GitHub Octoverse 2025"
    author: org:github
---

# Summary

**Succeeded. "One official tool" is now the expected shape of a language.** Go (2009–2012) and
Rust's cargo (2015) set the template: a single binary for building, testing, benchmarking,
formatting, dependency resolution and documentation. During 2018–2026 every new language copied
it (Zig's `zig build` and `zig cc`, Gleam, Roc, Mojo's `pixi`/`mojo`), and two of the most
fragmented ecosystems retrofitted it. **Python** consolidated around uv,[^uv-unified] and
**JavaScript** got all-in-one runtimes in Deno 2 and Bun.[^deno2][^bun-anthropic] The idea paid
off most where the ecosystem had lacked a standard (Python). It paid off least where an
incumbent ran the ecosystem (Node). Deno's hosted platform shrank from 35 regions to 6 even as its
CLI improved.[^deno-decline]

# The idea

A language's first-party CLI owns the whole inner loop: `new`, `build`, `run`, `test`, `fmt`,
`lint`, `doc`, `add`/`lock`, `publish`, and often the language server too. There is one config
file and one lockfile format, and no third-party combinations to choose between. Go's `gofmt`
showed that one official, non-configurable formatter ends style debates. cargo showed that
dependency management and building could share a resolver and a lockfile.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019 | Go modules default (1.13–1.16 path); cargo is held up as the model | + |
| E1 | 2020 | Deno 1.0 ships fmt, lint, test, bundle in one binary; `zig cc` is pitched as a drop-in cross C compiler | + |
| E2 | 2022 | Uber builds all C/C++ in its Go monorepo with `zig cc` via a hermetic Bazel toolchain (all Linux targets since 2023-01)[^uber-zig][^hermetic-cc] | + |
| E3 | 2023-09 | Bun 1.0: runtime, bundler, package manager, test runner in one binary | + |
| E3 | 2024 | uv grows from pip replacement to project, lock, tool and Python-version manager[^uv-unified] | + |
| E4 | 2024-10 | Deno 2 adds package.json/npm compatibility, conceding Node's ecosystem[^deno2] | mixed |
| E4 | 2025 | Deno Deploy shrinks to 6 regions; Deno disputes "decline" narrative[^deno-decline][^deno-reply] | − |
| E4 | 2025-12 | Anthropic acquires Bun, which already powers Claude Code[^bun-anthropic] | mixed |

# Where it succeeded

- **Rust and Go.** Their toolchains are consistently cited as reasons developers like these
  languages. cargo became the benchmark that other ecosystems are compared against.
- **Python.** uv put venvs, lockfiles, Python installation and tool running into one fast binary,
  ending years of pip/virtualenv/pyenv/pipx/Poetry fragmentation. See
  [Python packaging revolution](/ideas/tooling-and-ecosystem/packaging-revolution-python.md).[^uv-unified]
- **C/C++ cross-compilation.** `zig cc` bundles libc headers for many targets in a small download.
  Uber chose it for hermetic arm64 builds.[^uber-zig][^hermetic-cc]
- **New languages.** Gleam, Roc and Zig all launched with formatter, build tool, package manager
  and LSP in the compiler binary, which kept tooling debates out of their early communities.

# Where it failed or stalled

- **JavaScript runtimes did not displace Node.** Deno (2018–2020) bet on "no package.json, URL
  imports", then reversed course in Deno 2 to support npm.[^deno2] Its commercial edge platform
  shrank.[^deno-decline] Bun's adoption was real but it was absorbed into an AI lab rather than
  becoming a standalone business.[^bun-anthropic]
- **Node responded by absorbing features.** Node added a built-in test runner, `--watch`, `.env`
  loading and type stripping, which reduced the reason to switch.
- **C and C++** never got an official tool. CMake, Conan, vcpkg, Bazel and Meson stay fragmented,
  and `zig cc` stays a niche tool for experts.

# Why

1. **Defaults beat choice.** Most developers want the inner loop to just work. Ecosystems with
   one blessed path have lower onboarding cost and less configuration churn.
2. **Retrofitting works when the incumbent is weak.** Python's tooling had no dominant owner, so a
   fast, compatible newcomer (uv) could take the role. Node's ecosystem had an owner (npm and the
   Node project) that could copy features faster than challengers could gain share.
3. **Compatibility matters more than purity.** Deno's original "no npm" stance cost it years. Bun
   aimed for Node compatibility from day one and grew faster.
4. **Single binaries also suit AI agents**, which prefer one deterministic command per action. This
   is one reason AI labs bought toolchain companies in 2025–2026.[^bun-anthropic]

# Lessons

- Ship the toolchain with the compiler on day one. Retrofitting later costs a decade (Python).
- An integrated toolchain is not a business model by itself. Deno and Bun needed hosting or a
  parent company.

# Related

- [Native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md)
- [Built-in dependency management](/ideas/tooling-and-ecosystem/dependency-management-built-in.md)
- [Python packaging revolution](/ideas/tooling-and-ecosystem/packaging-revolution-python.md)
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)
- [Go](/languages/go.md), [Rust](/languages/rust.md), [Zig](/languages/zig.md), [Deno](/runtimes/deno.md), [Bun](/runtimes/bun.md)

[^uber-zig]: Uber, Bootstrapping arm64 with Zig — https://www.uber.com/us/en/blog/bootstrapping-ubers-infrastructure-on-arm64-with-zig/
[^hermetic-cc]: uber/hermetic_cc_toolchain — https://github.com/uber/hermetic_cc_toolchain
[^deno2]: The New Stack on Deno 2 — https://thenewstack.io/deno-2-arrives-with-long-term-support-node-js-compatibility/
[^deno-decline]: Deno's Decline — https://dbushell.com/2025/04/28/denos-decline/
[^deno-reply]: Deno, Greatly Exaggerated — https://deno.com/blog/greatly-exaggerated
[^bun-anthropic]: DevClass on Bun/Anthropic — https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
[^uv-unified]: uv: Unified Python packaging — https://astral.sh/blog/uv-unified-python-packaging
[^octoverse-2025]: GitHub Octoverse 2025 — https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
