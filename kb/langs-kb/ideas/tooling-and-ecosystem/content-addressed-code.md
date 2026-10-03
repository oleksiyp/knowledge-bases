---
type: Idea
title: Content-addressed code
description: "Identify each definition by a hash of its content rather than by name and file location, and store code in a database instead of text files (Unison, and in part Darklang). Content addressing won in the layers under languages — git objects, Bazel/remote-execution caches, Nix stores — but as a language model of source code it stayed niche: Unison reached 1.0 in 2025 with tiny adoption, and Darklang's database-backed structured editor failed commercially."
area: tooling-and-ecosystem
tags: [content-addressing, unison, darklang, structured-editing, version-control, build-systems, nix, bazel]
outcome: mixed
maturity_2026: niche
origin_year: 2005
mainstream_year: null
languages: [languages/unison, languages/nix-language]
runtimes: []
related_ideas: [ideas/tooling-and-ecosystem/reproducible-builds-and-nix, ideas/types/algebraic-effects-and-handlers, ideas/tooling-and-ecosystem/hot-reload-and-live-programming, ideas/ai-and-languages/llm-impact-on-language-adoption]
era_momentum: { E1: up, E2: flat, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: unison-1-0
    resource: https://www.unison-lang.org/unison-1-0/
    title: "Unison: Announcing Unison 1.0"
  - id: unison-releases
    resource: https://github.com/unisonweb/unison/releases
    title: "GitHub: unisonweb/unison releases (dates via GitHub API)"
  - id: unison-seed
    resource: https://www.unison-lang.org/blog/our-seed-funding/
    title: "Unison blog: Unison Computing's seed funding"
  - id: uncork-ga
    resource: https://medium.com/uncorkcapital/welcome-unison-computing-now-in-ga-4d3e763638c3
    title: "Uncork Capital: Welcome, Unison Computing — Now in GA!"
  - id: hn-unison-1
    resource: https://news.ycombinator.com/item?id=46049722
    title: "Hacker News: Unison 1.0 discussion"
  - id: dark-goodbye
    resource: https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/
    title: "Darklang blog: Goodbye Dark Inc. — Hello Darklang Inc."
  - id: willison-biggar
    resource: https://simonwillison.net/2025/Jun/16/paul-biggar/
    title: "Simon Willison: A quote from Paul Biggar (2025-06-16)"
  - id: nix-rfc62
    resource: https://github.com/NixOS/rfcs/blob/master/rfcs/0062-content-addressed-paths.md
    title: "NixOS RFC 62: Content-addressed paths"
  - id: nix-experimental
    resource: https://nix.dev/manual/nix/2.34/development/experimental-features
    title: "Nix Reference Manual: Experimental features (ca-derivations)"
  - id: tweag-ca
    resource: https://www.tweag.io/blog/2021-12-02-nix-cas-4/
    title: "Tweag: Implementing a content-addressed Nix (2021)"
  - id: bazel-remote-apis
    resource: https://github.com/bazelbuild/remote-apis
    title: "GitHub: bazelbuild/remote-apis (Remote Execution API, content-addressable storage)"
---

# Summary
**Mixed.** As an *infrastructure* technique, content addressing was already a quiet success: git stores objects by hash, the Bazel Remote Execution API shares build outputs through a content-addressable store, and Nix spent the period working toward content-addressed derivations (still behind the experimental `ca-derivations` flag in 2026).[^bazel-remote-apis][^nix-rfc62][^nix-experimental] As a *programming-language design* — every function identified by the hash of its syntax tree, names as metadata, code living in a database — it was tested by two venture-backed projects. **Unison** shipped Unison Cloud (GA in February 2024) and 1.0 (2025-11-25), but remains a tiny ecosystem.[^uncork-ga][^unison-releases] **Darklang**, whose hosted, database-backed structured editor took a similar "no text files" approach, ran out of money. Dark Inc. was wound down in 2025 and its assets moved to a successor company that open-sourced everything. The founder concluded that "our online structured editor didn't make sense when the LLM is generating the code."[^dark-goodbye] In Biggar's words, "an 8 year old product with no traction was not going to attract new investment."[^willison-biggar]

# The idea
If a definition is named by the hash of its content, then:
- renaming is free and never breaks callers;
- two versions of a library can coexist (no "diamond dependency" conflicts);
- builds and tests are cached perfectly, since unchanged hashes need no recompiling;
- code can be shipped to a remote node by hash, and the node fetches whatever it is missing.

Prior art: Merkle trees, git (2005), Nix's store paths (2003, input-addressed), Joe Armstrong's 2015 "Why do we need modules at all?" musings, and Unison's own design (from about 2013). The cost: the source of truth is no longer plain text, so every text-based tool — editors, diff, code review, grep, CI and now LLMs — must be replaced or adapted.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-08 | Unison public alpha [^unison-1-0] | + |
| E1 | 2019-08 | NixOS RFC 62 (content-addressed paths) proposed by Théophane Hufschmitt [^nix-rfc62] | + |
| E2 | 2021-12 | Content-addressed Nix reaches beta quality behind an experimental flag [^tweag-ca] | mixed |
| E3 | 2022 (late) | Unison Computing closes most of its ~$9.75M seed [^unison-seed] | + |
| E3 | 2024-02 | Unison Cloud GA [^uncork-ga] | + |
| E4 | 2025-06 | Dark Inc. shuts down; Darklang moves to a successor company and is open-sourced under Apache-2.0 [^dark-goodbye] | − |
| E4 | 2025-11-25 | Unison 1.0 [^unison-releases] | + |
| E4 | 2026 | Nix `ca-derivations` still marked experimental [^nix-experimental] | − |

# Where it succeeded
- **Under the language.** Content-addressed storage in git, remote build caches (Bazel/REAPI) and Nix stores is standard practice.[^bazel-remote-apis][^nix-rfc62]
- **Inside Unison.** Instant, non-breaking renames; switching branches without recompiling; type-based search across the ecosystem; distributed computations that send code by hash. Unison Cloud's own orchestration runs on it.[^unison-1-0]
- **Shipping.** Unison reached 1.0 and kept a steady cadence (1.0 to 1.5 in about ten months).[^unison-releases]

# Where it failed or stalled
- **Commercial traction for "no text files."** Darklang's structured, database-backed environment found no market. After about eight years it had "no traction" and could not raise again.[^dark-goodbye][^willison-biggar]
- **Toolchain friction.** In Unison, reading or reviewing code requires its own tools (the codebase is a SQLite database). That was the most common criticism at 1.0.[^hn-unison-1]
- **Content-addressed builds even in Nix.** Moving Nix itself to content-addressed derivations has taken more than six years and is still experimental.[^nix-experimental][^tweag-ca]

# Why
1. **Text is the universal interface.** Editors, git, GitHub review, grep, static analysers and LLM coding assistants all operate on text files. A database-first language must rebuild all of them, and the LLM wave (2023–) made text-native code even more valuable: models are trained on and emit text.[^dark-goodbye]
2. **The benefits accrue at scale; the costs come first.** Dependency-conflict freedom and perfect caching matter most in big codebases, but adopters pay the tooling cost from day one.
3. **Infrastructure can adopt hashes invisibly.** Git and Bazel users never see hashes as names. That is why content addressing won there and not at the source level.
4. **VC timelines vs language timelines.** Both Unison (about seven years to 1.0) and Dark needed long runways. Dark ran out; Unison survived by pairing the language with a cloud product.[^unison-seed][^dark-goodbye]

# Lessons
- Put radical representations underneath a familiar text surface (as git and Nix do) rather than replacing that surface.
- In the LLM era, ideas that break with text-file code face a stronger headwind than before.

# Related
- [Unison](/languages/unison.md), [Nix language](/languages/nix-language.md)
- [Reproducible builds and Nix](/ideas/tooling-and-ecosystem/reproducible-builds-and-nix.md), [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md), [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)
- Event: [Unison 1.0](/events/2025-11-unison-1-0.md)

[^unison-1-0]: Announcing Unison 1.0 — https://www.unison-lang.org/unison-1-0/
[^unison-releases]: unisonweb/unison releases — https://github.com/unisonweb/unison/releases
[^unison-seed]: Unison Computing's seed funding — https://www.unison-lang.org/blog/our-seed-funding/
[^uncork-ga]: Uncork Capital: Welcome, Unison Computing — Now in GA! — https://medium.com/uncorkcapital/welcome-unison-computing-now-in-ga-4d3e763638c3
[^hn-unison-1]: Hacker News: Unison 1.0 — https://news.ycombinator.com/item?id=46049722
[^dark-goodbye]: Goodbye Dark Inc. — Hello Darklang Inc. — https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/
[^willison-biggar]: Simon Willison: A quote from Paul Biggar — https://simonwillison.net/2025/Jun/16/paul-biggar/
[^nix-rfc62]: NixOS RFC 62: Content-addressed paths — https://github.com/NixOS/rfcs/blob/master/rfcs/0062-content-addressed-paths.md
[^nix-experimental]: Nix manual: Experimental features — https://nix.dev/manual/nix/2.34/development/experimental-features
[^tweag-ca]: Tweag: Implementing a content-addressed Nix — https://www.tweag.io/blog/2021-12-02-nix-cas-4/
[^bazel-remote-apis]: bazelbuild/remote-apis — https://github.com/bazelbuild/remote-apis
