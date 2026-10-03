---
type: Idea
title: Tree-sitter and incremental, error-tolerant parsing
description: "A parser generator that produces fast, incremental, error-recovering concrete syntax trees for editors and code-analysis tools. 2018–2026 verdict: succeeded as shared infrastructure. It powers Neovim, Helix, Zed, Emacs 29 and GitHub code navigation, and became the default chunker for AI code tools. It did not replace compiler-grade semantic analysis, and its original home, Atom, died."
area: tooling-and-ecosystem
tags: [parsing, editors, syntax-highlighting, code-navigation, neovim, zed, github, ast-grep]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2018
mainstream_year: 2021
languages: [languages/rust, languages/c, languages/javascript]
runtimes: []
related_ideas: [ideas/tooling-and-ecosystem/language-server-protocol, ideas/tooling-and-ecosystem/native-rewrites-of-tooling]
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ts-wiki
    resource: https://en.wikipedia.org/wiki/Tree-sitter_(parser_generator)
    title: "Wikipedia: Tree-sitter (parser generator)"
  - id: nvim-ts
    resource: https://github.com/neovim/neovim/discussions/11724
    title: "Neovim: Tree-sitter discussion #11724"
  - id: atom-sunset
    resource: https://gigazine.net/gsc_news/en/20220609-github-sunsetting-atom/
    title: "GIGAZINE: GitHub declares development stop of Atom, archive on 2022-12-15"
  - id: atom-slashdot
    resource: https://developers.slashdot.org/story/22/06/09/165206/github-sunsets-atom-its-text-editor-for-software-development
    title: "Slashdot: GitHub Sunsets Atom"
  - id: gh-ts
    resource: https://medium.com/@dubeysanjana23/how-github-uses-tree-sitter-to-understand-millions-of-repos-89f71a55e624
    title: "How GitHub uses Tree-sitter to understand millions of repos"
  - id: awesome-ts
    resource: https://github.com/HerringtonDarkholme/awesome-tree-sitter
    title: "GitHub: awesome-tree-sitter (curated list of tree-sitter tools)"
---

# Summary

**Succeeded as the shared parsing layer for editors and code tools.** Max Brunsfeld built
Tree-sitter at GitHub for Atom and released it in 2018.[^ts-wiki] It produces concrete syntax
trees that update incrementally on each keystroke and stay usable when the code is broken. By 2026
it powered Neovim, Helix, Zed and Emacs's built-in `treesit`, as well as GitHub code navigation,
difftastic, ast-grep and the code-chunking layer of many AI coding tools.[^ts-wiki][^gh-ts][^awesome-ts]
Its limits are equally clear. It is syntax only, with no types or name resolution, so it
complements [LSP](/ideas/tooling-and-ecosystem/language-server-protocol.md) rather than replacing
it. Grammar quality also varies by language. Atom, the editor it was built for, was sunset on
2022-12-15.[^atom-sunset]

# The idea

Editors traditionally highlighted code with regex grammars (TextMate) that do not understand
structure. Compilers' parsers understand structure but stop at the first error and re-parse whole
files. Tree-sitter generates GLR-style parsers in C from a JavaScript grammar DSL. The parsers:
(1) re-parse only the edited region, (2) recover from errors and keep a tree, and (3) expose a
query language (S-expressions) for highlighting, folding, text objects and code navigation. Prior
art: incremental parsing research (Wagner & Graham), and IDE parsers in Eclipse and IntelliJ that
were tied to one product.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018 | Tree-sitter publicly released; Atom adopts it for highlighting[^ts-wiki] | + |
| E1–E2 | 2020–2021 | GitHub uses Tree-sitter for code navigation in many languages[^gh-ts] | + |
| E2 | 2021-07 | Neovim 0.5 ships Tree-sitter integration[^nvim-ts] | + |
| E2 | 2022-06 | GitHub announces the Atom sunset (archive on 2022-12-15)[^atom-sunset][^atom-slashdot] | − |
| E3 | 2023 | Emacs 29 ships built-in `treesit`; Zed (founded by Atom/Tree-sitter alumni) builds on it[^ts-wiki] | + |
| E3–E4 | 2023–2026 | ast-grep, difftastic and AI code-indexing tools standardise on Tree-sitter grammars[^awesome-ts] | + |

# Where it succeeded

- **Editors.** Neovim, Helix, Zed, Emacs and Lapce made Tree-sitter their syntax layer.[^ts-wiki]
- **Code hosting.** GitHub's "jump to definition" across many languages is built on Tree-sitter
  rather than per-language compilers.[^gh-ts]
- **Structural search and diff.** Tools such as ast-grep and difftastic offer syntax-aware
  search, lint and diff for dozens of languages at little cost per language.[^awesome-ts]
- **AI tooling.** Splitting code into functions and classes for retrieval needs a fast,
  error-tolerant parser for every language, which is exactly what Tree-sitter provides.

# Where it failed or stalled

- **Atom died.** Tree-sitter outlived the editor it was built for. VS Code, the editor that
  won, still uses TextMate grammars for highlighting and LSP semantic tokens for meaning.[^atom-sunset]
- **No semantics.** Without types and scopes Tree-sitter cannot do correct rename or
  find-references for most languages. "Good enough" navigation (GitHub) is approximate.
- **Grammar maintenance.** Grammars are community-maintained per language. Quality and ABI
  versions vary, and each editor keeps its own query files, so the same grammar can highlight
  differently in Neovim, Helix and Zed.

# Why

1. **It solved a problem everyone had.** Every editor and code host needed structure-aware
   parsing for hundreds of languages, and no compiler parser was incremental or error-tolerant
   enough.
2. **Packaging.** It is a dependency-free C runtime with generated C parsers, so it embeds in Rust
   (Zed, Helix, difftastic), C (Neovim, Emacs) and anything else.
3. **The people moved on, the technology stayed.** Its author went on to Zed, so Tree-sitter
   gained a second large sponsor after GitHub.
4. **Limits come from the design.** Being syntax-only keeps it fast and generic, and also
   keeps it below compiler-grade analysis.

# Lessons

- Infrastructure can outlive its product. Tree-sitter survived Atom because it was a library with
  a clean C ABI.
- Syntax trees (Tree-sitter) and semantic services (LSP) are complementary layers. Neither
  replaced the other.

# Related

- [Language Server Protocol](/ideas/tooling-and-ecosystem/language-server-protocol.md)
- [Native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md)

[^ts-wiki]: Wikipedia, Tree-sitter — https://en.wikipedia.org/wiki/Tree-sitter_(parser_generator)
[^nvim-ts]: Neovim Tree-sitter discussion — https://github.com/neovim/neovim/discussions/11724
[^atom-sunset]: GitHub sunsets Atom (GIGAZINE) — https://gigazine.net/gsc_news/en/20220609-github-sunsetting-atom/
[^atom-slashdot]: Slashdot, GitHub Sunsets Atom — https://developers.slashdot.org/story/22/06/09/165206/github-sunsets-atom-its-text-editor-for-software-development
[^gh-ts]: How GitHub uses Tree-sitter — https://medium.com/@dubeysanjana23/how-github-uses-tree-sitter-to-understand-millions-of-repos-89f71a55e624
[^awesome-ts]: awesome-tree-sitter — https://github.com/HerringtonDarkholme/awesome-tree-sitter
