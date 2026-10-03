---
type: Runtime
title: CRuby with YJIT and ZJIT
description: "The reference Ruby interpreter had the most successful dynamic-language JIT story of 2018–2026. After two failed JITs (MJIT, RJIT), Shopify's YJIT — lazy basic-block versioning, rewritten in Rust — became production-ready in Ruby 3.2 and runs Shopify's Rails monolith 15%+ faster. Its method-based successor ZJIT shipped experimentally in Ruby 4.0. Parallelism (Ractor) and isolation (Ruby::Box) remain unfinished."
tags: [cruby, mri, yjit, zjit, mjit, rjit, ruby, jit, rust, shopify, ractor, modular-gc]
runtime_kind: interpreter
languages: [languages/ruby]
ideas: [ideas/runtime-performance/jit-for-dynamic-languages, ideas/concurrency/subinterpreters, ideas/runtime-performance/low-pause-gc]
trajectory: growing
steward: Ruby core team (Matz); JIT team funded by Shopify
governance: bdfl
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ruby26
    resource: https://www.ruby-lang.org/en/news/2018/12/25/ruby-2-6-0-released/
    title: "Ruby 2.6.0 Released (MJIT introduced, 2018-12-25)"
    author: org:ruby-lang
  - id: yjit-intro
    resource: https://shopify.engineering/yjit-just-in-time-compiler-cruby
    title: "Shopify Engineering: YJIT — Building a New JIT Compiler for CRuby"
    author: org:shopify
  - id: yjit-32
    resource: https://shopify.engineering/ruby-yjit-is-production-ready
    title: "Shopify Engineering: Ruby 3.2's YJIT is Production-Ready"
    author: org:shopify
  - id: yjit-33
    resource: https://railsatscale.com/2023-09-18-ruby-3-3-s-yjit-runs-shopify-s-production-code-15-faster/
    title: "Rails at Scale: Ruby 3.3's YJIT Runs Shopify's Production Code 15% Faster"
    author: org:shopify
  - id: yjit-34
    resource: https://railsatscale.com/2025-01-10-yjit-3-4-even-faster-and-more-memory-efficient/
    title: "Rails at Scale: YJIT 3.4 — Even Faster and More Memory-Efficient"
    author: org:shopify
  - id: rubykaigi-2024
    resource: https://rubykaigi.org/2024/presentations/k0kubun.html
    title: "RubyKaigi 2024 (Takashi Kokubun): YJIT Makes Rails 1.7x Faster"
  - id: ruby-34
    resource: https://www.ruby-lang.org/en/news/2024/12/25/ruby-3-4-0-released/
    title: "Ruby 3.4.0 Released (Prism, modular GC with MMTk)"
    author: org:ruby-lang
  - id: zjit-merge
    resource: https://railsatscale.com/2025-05-14-merge-zjit/
    title: "Rails at Scale: ZJIT has been merged into Ruby (2025-05-14)"
    author: org:shopify
  - id: ruby-40
    resource: https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/
    title: "Ruby 4.0.0 Released (ZJIT experimental, RJIT removed, Ruby::Box)"
    author: org:ruby-lang
  - id: rubykaigi-2026
    resource: https://speakerdeck.com/k0kubun/rubykaigi-2026
    title: "Takashi Kokubun: Lightning-Fast Method Calls with Ruby 4.1 ZJIT (RubyKaigi 2026)"
  - id: byroot-ractors
    resource: https://byroot.github.io/ruby/performance/2025/02/27/whats-the-deal-with-ractors.html
    title: "Jean Boussier: What's The Deal With Ractors? (2025)"
  - id: ractors-rails
    resource: https://railsatscale.com/2026-08-11-ractors-on-rails/
    title: "Rails at Scale: Bringing Rails into the Ractor-age (2026-08-11)"
    author: org:shopify
---

# Summary
CRuby (MRI) is the **best example in this period of a JIT for a dynamic language paying off in production**, and of how many tries it took to get there:

1. **MJIT** (Ruby 2.6, December 2018) generated C and called a C compiler. It helped benchmarks but often slowed Rails, and was replaced in 3.3.[^ruby26]
2. **RJIT**, a pure-Ruby experiment that replaced MJIT in 3.3, was removed in 4.0.[^ruby-40]
3. **YJIT** succeeded. Built at Shopify on Maxime Chevalier-Boisvert's lazy basic-block versioning research, it was merged in Ruby 3.1 (December 2021).[^yjit-intro] It was rewritten in Rust and declared production-ready in 3.2. It gave about 10% on Shopify's Storefront Renderer, 15% in 3.3, and about 92% over the interpreter on Shopify's benchmark suite in 3.4.[^yjit-32][^yjit-33][^yjit-34] Kokubun's RubyKaigi 2024 talk claimed "YJIT makes Rails 1.7x faster" on benchmarks.[^rubykaigi-2024]
4. **ZJIT**, a "textbook" method-based JIT with an SSA IR, was merged in May 2025 to raise the ceiling and invite more contributors. It shipped experimental in Ruby 4.0, slower than YJIT for now, with production-readiness targeted for Ruby 4.1.[^zjit-merge][^ruby-40][^rubykaigi-2026]

Beyond the JIT: Ruby 3.4 added a pluggable GC (with MMTk) and made Prism the default parser.[^ruby-34] Ractor parallelism stayed experimental and largely unused until Shopify's 2026 Rails pilots.[^byroot-ractors][^ractors-rails]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-12-25 | Ruby 2.6 introduces MJIT [^ruby26] | mixed |
| E2 | 2020-12-25 | Ruby 3.0 ships Ractor (experimental) | mixed |
| E2 | 2021-12-25 | Ruby 3.1 merges YJIT (experimental, C) [^yjit-intro] | + |
| E3 | 2022-12-25 | Ruby 3.2: YJIT in Rust, production-ready; Shopify +10% [^yjit-32] | + |
| E3 | 2023-12-25 | Ruby 3.3: YJIT +15% on Shopify production; MJIT replaced by RJIT [^yjit-33] | + |
| E4 | 2024-12-25 | Ruby 3.4: YJIT ~92% over interpreter (benchmarks), modular GC, Prism [^yjit-34][^ruby-34] | + |
| E4 | 2025-05-14 | ZJIT merged into Ruby master [^zjit-merge] | + |
| E4 | 2025-12-25 | Ruby 4.0: ZJIT experimental, RJIT removed, Ruby::Box, Ractor::Port [^ruby-40] | + |
| E4 | 2026 | ZJIT inliner and method-call work aimed at Ruby 4.1 production-readiness [^rubykaigi-2026] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | succeeded with YJIT, after MJIT and RJIT failed |
| [Subinterpreters / Ractors](/ideas/concurrency/subinterpreters.md) | stalled 2020–2025; Ruby::Box adds isolation without parallelism |
| [Pluggable GC](/ideas/runtime-performance/low-pause-gc.md) | modular GC landed in 3.4; MMTk experimental |

# What succeeded
- **Lazy basic-block versioning.** It specialises on types observed at run time without a separate profiling tier. This matched Rails' polymorphic, method-heavy code better than MJIT's C-compiler approach.[^yjit-intro]
- **Production-first engineering.** YJIT was developed against Shopify's real storefront traffic, with memory overhead treated as a first-class metric (cut to about a third in 3.2).[^yjit-32]
- **Rust in a C runtime.** Moving YJIT to Rust (3.2) and writing ZJIT in Rust showed that a memory-safe language can live inside a C interpreter without forking it.[^ruby-40]

# What failed or stalled
- **MJIT and RJIT.** Two JIT designs reached release and were removed: a costly but useful set of negative results.[^ruby-40]
- **Ractor.** Five years with dozens of open critical bugs, and incompatible with gems that keep global state.[^byroot-ractors]
- **ZJIT's first release.** It shipped slower than YJIT, so there was no user-visible win in 4.0.[^ruby-40]

# By era
## E1
MJIT, with its weak Rails results.
## E2
Ruby 3.0 (3x3 on Optcarrot, Ractor); YJIT lands.
## E3
YJIT goes to production (3.2, 3.3).
## E4
YJIT matures; ZJIT, modular GC, Ruby::Box, Ractor::Port.

# Lessons
- A JIT for a web framework language should be judged on the framework's real request path, not microbenchmarks.
- A corporate patron with a single huge monolith (Shopify) is an effective way to fund a runtime: incentives line up and results are measurable.

# Related
- [Ruby](/languages/ruby.md) · [TruffleRuby](/runtimes/truffleruby.md) · [CPython](/runtimes/cpython.md)
- [Ruby 3.1 ships YJIT](/events/2021-12-ruby-3-1-yjit.md) · [Ruby 4.0 and ZJIT](/events/2025-12-ruby-4-0-zjit.md)

[^ruby26]: Ruby 2.6.0 Released — https://www.ruby-lang.org/en/news/2018/12/25/ruby-2-6-0-released/
[^yjit-intro]: Shopify Engineering: YJIT — Building a New JIT Compiler for CRuby — https://shopify.engineering/yjit-just-in-time-compiler-cruby
[^yjit-32]: Shopify Engineering: Ruby 3.2's YJIT is Production-Ready — https://shopify.engineering/ruby-yjit-is-production-ready
[^yjit-33]: Rails at Scale: Ruby 3.3's YJIT Runs Shopify's Production Code 15% Faster — https://railsatscale.com/2023-09-18-ruby-3-3-s-yjit-runs-shopify-s-production-code-15-faster/
[^yjit-34]: Rails at Scale: YJIT 3.4 — https://railsatscale.com/2025-01-10-yjit-3-4-even-faster-and-more-memory-efficient/
[^rubykaigi-2024]: RubyKaigi 2024: YJIT Makes Rails 1.7x Faster — https://rubykaigi.org/2024/presentations/k0kubun.html
[^ruby-34]: Ruby 3.4.0 Released — https://www.ruby-lang.org/en/news/2024/12/25/ruby-3-4-0-released/
[^zjit-merge]: Rails at Scale: ZJIT has been merged into Ruby — https://railsatscale.com/2025-05-14-merge-zjit/
[^ruby-40]: Ruby 4.0.0 Released — https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/
[^rubykaigi-2026]: Takashi Kokubun: Lightning-Fast Method Calls with Ruby 4.1 ZJIT — https://speakerdeck.com/k0kubun/rubykaigi-2026
[^byroot-ractors]: Jean Boussier: What's The Deal With Ractors? — https://byroot.github.io/ruby/performance/2025/02/27/whats-the-deal-with-ractors.html
[^ractors-rails]: Rails at Scale: Bringing Rails into the Ractor-age — https://railsatscale.com/2026-08-11-ractors-on-rails/
