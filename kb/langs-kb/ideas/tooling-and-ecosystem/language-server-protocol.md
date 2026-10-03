---
type: Idea
title: Language Server Protocol (one analyzer, every editor)
description: "A JSON-RPC protocol that lets one language analyzer serve every editor, turning M×N editor–language integrations into M+N. 2018–2026 verdict: succeeded. Every new language now ships an LSP server as table stakes, even JetBrains adopted it, and AI coding agents consume it. Its weak points are that the protocol is lowest-common-denominator and that the best servers are often proprietary."
area: tooling-and-ecosystem
tags: [lsp, editors, ide, vscode, rust-analyzer, jetbrains, neovim, tooling]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2016
mainstream_year: 2018
languages: [languages/rust, languages/typescript, languages/go, languages/python, languages/zig, languages/gleam, languages/lean]
runtimes: []
related_ideas: [ideas/tooling-and-ecosystem/tree-sitter-and-incremental-parsing, ideas/tooling-and-ecosystem/integrated-toolchains, ideas/ai-and-languages/llm-impact-on-language-adoption]
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: lsp-317
    resource: https://github.com/Microsoft/language-server-protocol/blob/gh-pages/_specifications/lsp/3.17/specification.md
    title: "Microsoft: Language Server Protocol Specification 3.17"
    author: org:microsoft
  - id: lsp-318
    resource: https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/
    title: "Microsoft: Language Server Protocol Specification 3.18"
    author: org:microsoft
  - id: langserver
    resource: https://langserver.org/
    title: "langserver.org: Language Server implementations list"
  - id: ra-joins
    resource: https://blog.rust-lang.org/2022/02/21/rust-analyzer-joins-rust-org/
    title: "Rust blog: rust-analyzer joins the Rust organization"
  - id: rls-dep
    resource: https://blog.rust-lang.org/2022/07/01/RLS-deprecation/
    title: "Rust blog: RLS Deprecation"
  - id: jb-lsp-2023
    resource: https://blog.jetbrains.com/platform/2023/07/lsp-for-plugin-developers/
    title: "JetBrains Platform blog: Language Server Protocol (LSP) for Plugin Developers"
  - id: jb-lsp-2025
    resource: https://blog.jetbrains.com/platform/2025/09/the-lsp-api-is-now-available-to-all-intellij-idea-users-and-plugin-developers/
    title: "JetBrains Platform blog: The LSP API is now available to all IntelliJ IDEA users and plugin developers"
  - id: pj-lsp
    resource: https://www.michaelpj.com/blog/2024/09/03/lsp-good-bad-ugly.html
    title: "Michael Peyton Jones: LSP — the good, the bad, and the ugly"
  - id: zylos-lsp
    resource: https://zylos.ai/research/2026-01-13-language-server-protocol-ecosystem/
    title: "Zylos Research: Language Server Protocol Ecosystem 2026"
---

# Summary

**Succeeded. LSP became the default way to give a language IDE support.** Microsoft published it
in 2016 for VS Code. By 2018 it was the obvious choice for new languages, and by 2026 a language
without a good language server was effectively unadoptable. JetBrains, long the holdout with its
own analysis engines, added an LSP client API in 2023.2 and opened it to all IntelliJ IDEA users
in 2025.[^jb-lsp-2023][^jb-lsp-2025] The protocol's limits are now well understood: it is lowest
common denominator, synchronisation is chatty, and refactoring support is weak.[^pj-lsp] The
strongest servers for some big languages are proprietary rather than open.

# The idea

Before LSP, each editor (Vim, Emacs, Sublime, Atom, Eclipse) needed its own plugin for each
language, so each pairing (M×N) was a separate project. LSP defines a JSON-RPC protocol, with
messages like `textDocument/definition`, `completion`, `hover` and `publishDiagnostics`, so one
server per language and one client per editor is enough (M+N). Prior art: Eclipse's language
toolkits, OmniSharp, and the Dart Analysis Server.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| (pre) | 2016 | Microsoft, Red Hat and Codenvy publish LSP alongside VS Code | + |
| E1 | 2018–2020 | gopls, clangd, rust-analyzer, Pyright, sourcekit-lsp mature; Neovim begins native LSP client work (shipped 0.5, 2021) | + |
| E2 | 2022-02 | rust-analyzer becomes an official Rust project[^ra-joins] | + |
| E2 | 2022-05-10 | LSP 3.17: type hierarchy, inlay hints, inline values, notebooks, a machine-readable meta-model[^lsp-317] | + |
| E2 | 2022-07 | Rust deprecates RLS in favour of rust-analyzer[^rls-dep] | + |
| E3 | 2023-07 | JetBrains 2023.2 ships an LSP API for plugin developers (paid IDEs only)[^jb-lsp-2023] | + |
| E4 | 2025-09 | JetBrains opens its LSP API to all IntelliJ IDEA users[^jb-lsp-2025] | + |
| E4 | 2025–26 | LSP 3.18 drafted; AI coding agents and IDE agents use language servers for go-to-definition and diagnostics[^lsp-318][^zylos-lsp] | + |

# Where it succeeded

- **New languages.** Zig (ZLS), Gleam (built into the compiler), Roc, Lean 4 and Mojo launched with
  or quickly gained LSP servers. Gleam and Lean put the server into the compiler binary, which is
  the pattern described in [integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md).
- **Server quality.** rust-analyzer replaced the earlier RLS because it was designed for LSP from
  the start: incremental, query-based (salsa) and resilient to broken code.[^ra-joins][^rls-dep]
- **Editor diversity.** Neovim, Helix, Zed, Emacs (eglot, built into Emacs 29) and Sublime all
  became viable for many languages without per-language effort.
- **Scale.** Hundreds of servers are listed for dozens of editors.[^langserver][^zylos-lsp]

# Where it failed or stalled

- **Lowest common denominator.** Advanced refactorings, project-model configuration and semantic
  queries do not fit the protocol well. Critics in 2024 described weak support for workspace-wide
  operations and constant editor-specific extensions.[^pj-lsp]
- **The best servers are often closed.** Microsoft's Pylance and the C# Dev Kit ship under
  proprietary licences restricted to Microsoft's VS Code builds, so VS Code forks and other editors
  get weaker open alternatives (basedpyright, OmniSharp). The protocol is open, but the best
  implementations are not.
- **JetBrains never fully converted.** Its own PSI engines remain primary for its flagship
  languages. LSP is a fallback for the long tail.[^jb-lsp-2023]

# Why

1. **Network effects from VS Code.** VS Code's dominance (2018 onward) gave every language team a
   reason to write an LSP server, and every other editor got that server for free.
2. **The economics changed for language designers.** One server is a project a small team can do,
   and N editor plugins are not. This lowered the IDE-support barrier for new languages more than
   any other 2016–2020 change.
3. **The protocol grew with care.** Versions 3.x added features additively (semantic tokens, inlay
   hints) without breaking clients.[^lsp-317]
4. **What limits it.** Design by lowest common denominator and Microsoft's single stewardship
   (no foundation) left gaps that vendors fill with proprietary extensions.

# Lessons

- A protocol that turns M×N into M+N wins when one dominant client gives everyone a reason to
  adopt it.
- Opening the protocol does not open the ecosystem. Watch where the best implementations are
  licensed.
- Write language servers for incremental analysis from day one (rust-analyzer), rather than
  bolting them onto a batch compiler (RLS).

# Related

- [Tree-sitter and incremental parsing](/ideas/tooling-and-ecosystem/tree-sitter-and-incremental-parsing.md)
- [Integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md)
- [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)
- [Rust](/languages/rust.md), [TypeScript](/languages/typescript.md)

[^lsp-317]: LSP Specification 3.17 — https://github.com/Microsoft/language-server-protocol/blob/gh-pages/_specifications/lsp/3.17/specification.md
[^lsp-318]: LSP Specification 3.18 — https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/
[^langserver]: langserver.org — https://langserver.org/
[^ra-joins]: rust-analyzer joins the Rust organization — https://blog.rust-lang.org/2022/02/21/rust-analyzer-joins-rust-org/
[^rls-dep]: RLS Deprecation — https://blog.rust-lang.org/2022/07/01/RLS-deprecation/
[^jb-lsp-2023]: JetBrains, LSP for Plugin Developers — https://blog.jetbrains.com/platform/2023/07/lsp-for-plugin-developers/
[^jb-lsp-2025]: JetBrains, LSP API available to all IntelliJ IDEA users — https://blog.jetbrains.com/platform/2025/09/the-lsp-api-is-now-available-to-all-intellij-idea-users-and-plugin-developers/
[^pj-lsp]: LSP: the good, the bad, and the ugly — https://www.michaelpj.com/blog/2024/09/03/lsp-good-bad-ugly.html
[^zylos-lsp]: Language Server Protocol Ecosystem 2026 — https://zylos.ai/research/2026-01-13-language-server-protocol-ecosystem/
