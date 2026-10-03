---
type: Language
title: Ruby
description: "Ruby spent 2018–2026 as a stable niche language anchored by Rails and Shopify. Its runtime story is a success: Shopify's YJIT made production Rails 15–30% faster and ZJIT arrived in Ruby 4.0. Its two other bets — Ractor parallelism and RBS/Sorbet typing — stayed niche, and a 2025 RubyGems governance crisis showed how much of the ecosystem depends on a few companies."
tags: [ruby, rails, dynamic, yjit, zjit, ractor, rbs, sorbet, shopify]
paradigms: [object-oriented, multi-paradigm, scripting]
typing: dynamic
memory_model: gc
first_released: 1995
steward: Ruby core team (Matz) / Ruby Association; ecosystem funding via Shopify, Ruby Central
governance: bdfl
trajectory: stable
ideas: [ideas/runtime-performance/jit-for-dynamic-languages, ideas/concurrency/subinterpreters, ideas/types/gradual-typing-for-dynamic-languages, ideas/concurrency/actor-model]
runtimes: [runtimes/cruby-yjit, runtimes/truffleruby]
adoption_signals:
  tiobe_rank: { value: 22, as_of: 2026-09 }
  so_survey_usage_pct: { value: 6.4, as_of: 2025 }
era_momentum: { E1: down, E2: flat, E3: flat, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tiobe-2026-09
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026"
    author: org:tiobe
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stack-overflow
  - id: ruby-30
    resource: https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/
    title: "Ruby 3.0.0 Released (2020-12-25)"
    author: org:ruby-lang
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
  - id: ruby-34
    resource: https://www.ruby-lang.org/en/news/2024/12/25/ruby-3-4-0-released/
    title: "Ruby 3.4.0 Released (Prism default parser, modular GC)"
    author: org:ruby-lang
  - id: ruby-40
    resource: https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/
    title: "Ruby 4.0.0 Released (2025-12-25)"
    author: org:ruby-lang
  - id: byroot-ractors
    resource: https://byroot.github.io/ruby/performance/2025/02/27/whats-the-deal-with-ractors.html
    title: "Jean Boussier: What's The Deal With Ractors? (2025-02-27)"
  - id: ractors-rails
    resource: https://railsatscale.com/2026-08-11-ractors-on-rails/
    title: "Rails at Scale: Bringing Rails into the Ractor-age (2026-08-11)"
    author: org:shopify
  - id: sorbet-shopify
    resource: https://shopify.engineering/the-state-of-ruby-static-typing-at-shopify
    title: "Shopify Engineering: The State of Ruby Static Typing at Shopify"
    author: org:shopify
  - id: sorbet-rbs
    resource: https://railsatscale.com/2025-04-23-rbs-support-for-sorbet/
    title: "Rails at Scale: Inline RBS comments support for Sorbet (2025-04-23)"
    author: org:shopify
  - id: reg-rubygems
    resource: https://www.theregister.com/2025/09/22/ruby_central_rubygems/
    title: "The Register: RubyGems maintainer quits after Ruby Central takes control"
  - id: reg-rubycore
    resource: https://www.theregister.com/2025/10/18/ruby_central_taps_ruby_core/
    title: "The Register: Ruby Central tries to make peace after 'hostile takeover'"
  - id: spinel
    resource: https://github.com/matz/spinel
    title: "GitHub: matz/spinel — Ruby AOT compiler"
  - id: rubyconf-2026
    resource: https://www.booleans.in/blog-rubyconf-2026.php
    title: "Booleans blog: RubyConf 2026 — Spinel, Roundhouse and Ruby Performance (secondary)"
  - id: truffleruby-33
    resource: https://truffleruby.dev/blog/truffleruby-33-is-released
    title: "TruffleRuby 33 is Released — no longer sponsored by Oracle (2026-01-13)"
---

# Summary
Ruby's 2018–2026 story is **a stable niche with a strong runtime**. Its share is small and flat: 6.4% of Stack Overflow respondents in 2025 and #22 on TIOBE in September 2026.[^so-2025][^tiobe-2026-09] Inside that niche the work was serious, and much of it was funded by one company, Shopify:
- **YJIT.** A basic-block-versioning JIT that became production-ready in Ruby 3.2. It runs Shopify's storefront 15–17% faster and roughly doubles interpreter speed on benchmarks.[^yjit-32][^yjit-33][^yjit-34]
- **ZJIT.** A method-based successor that shipped as experimental in Ruby 4.0 (2025-12-25).[^ruby-40]

The Ruby 3 promises had mixed results:
- **3x3.** Met on the Optcarrot benchmark.[^ruby-30]
- **Ractors.** Stayed experimental and unused for five years.[^byroot-ractors]
- **RBS.** Coexisted with Sorbet rather than replacing it.

In September–October 2025, Ruby Central's takeover of the RubyGems and Bundler repositories caused mass maintainer resignations. Matz stepped in and the Ruby core team took over stewardship.[^reg-rubygems][^reg-rubycore]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2020-12-25 | Ruby 3.0: 3x faster than 2.0 on Optcarrot; Ractor, Fiber Scheduler, RBS [^ruby-30] | + |
| E2 | 2021-12-25 | Ruby 3.1 merges Shopify's YJIT (experimental) | + |
| E3 | 2022-12-25 | Ruby 3.2: YJIT production-ready (rewritten in Rust), ~10% faster at Shopify [^yjit-32] | + |
| E3 | 2023-12-25 | Ruby 3.3: YJIT 15% faster on Shopify production; MJIT replaced by RJIT [^yjit-33] | + |
| E4 | 2024-12-25 | Ruby 3.4: Prism default parser, modular GC (MMTk), YJIT ~92% faster than interpreter on benchmarks [^ruby-34][^yjit-34] | + |
| E4 | 2025-04-23 | Sorbet accepts inline RBS comments [^sorbet-rbs] | + |
| E4 | 2025-09 | Ruby Central takes control of RubyGems/Bundler; maintainers resign [^reg-rubygems] | − |
| E4 | 2025-10-17 | Ruby core team (Matz) assumes stewardship of RubyGems and Bundler [^reg-rubycore] | mixed |
| E4 | 2025-12-25 | Ruby 4.0: ZJIT (experimental), Ruby::Box isolation, Ractor::Port; RJIT removed [^ruby-40] | + |
| E4 | 2026-01-13 | TruffleRuby leaves Oracle, becomes a community project [^truffleruby-33] | − |
| E4 | 2026 | Matz publishes Spinel, a whole-program-inference AOT compiler for Ruby [^spinel][^rubyconf-2026] | + |
| E4 | 2026-08-11 | Shopify shows Rails running on Ractors, with 7x less memory than forked workers [^ractors-rails] | + |

# Ideas it bet on
| Idea | Outcome for Ruby |
|---|---|
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | succeeded (YJIT); MJIT and RJIT abandoned along the way |
| [Subinterpreters / Ractors](/ideas/concurrency/subinterpreters.md) | stalled for five years; production pilots only in 2026 |
| [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md) | mixed: Sorbet at Stripe/Shopify scale, low community uptake |
| [Actor model](/ideas/concurrency/actor-model.md) | Ractor is actor-like; little adoption so far |

# What succeeded
- **YJIT.** It met real production needs. Shopify built it for its own Rails monolith and measured it on real traffic, not microbenchmarks. Upstreaming it into CRuby made it everyone's default JIT.[^yjit-32][^yjit-33]
- **Performance without breaking anything.** Ruby 3.x kept compatibility and avoided a repeat of the 1.8→1.9 pain.
- **Matz's arbitration.** When the RubyGems crisis threatened a split, a BDFL with legitimacy could settle it within weeks.[^reg-rubycore]

# What failed or stalled
- **Ractor.** It required redesigning code around shareable objects, while most gems keep global state. Five years after 3.0 it still had critical bugs and no Ractor-based web server.[^byroot-ractors]
- **MJIT and RJIT.** Two JITs were added and then removed (MJIT in 3.3, RJIT in 4.0). YJIT's lazy basic-block versioning beat a C-compiler-backed JIT on real Rails code.[^ruby-40]
- **Typing.** RBS (official, separate files) and Sorbet (Stripe, inline sigs) split the community. Shopify types 71% of its methods, but outside a few large companies typed Ruby is rare.[^sorbet-shopify]
- **Growth.** Ruby lost web mindshare to JavaScript/TypeScript, Python and Go. Its rankings drifted down in E1 and then flattened.

# By era
## E1
Mindshare fell as Node and Go took new backend work. The 3x3 plan and the MJIT experiments continued.
## E2
Ruby 3.0 delivered its three promises on paper (speed, concurrency, types). YJIT arrived from Shopify.
## E3
YJIT became production-ready and was adopted widely by Rails shops.
## E4
Ruby 3.4 and 4.0 shipped (ZJIT, Box). The RubyGems governance crisis was resolved by Ruby core. TruffleRuby lost Oracle. Ractor finally got a credible Rails pilot.[^ractors-rails]

# Lessons
- A JIT built against one company's real production workload beat JITs built for benchmarks.
- A concurrency model that needs the ecosystem to restructure global state will stall, however sound it is.
- Ecosystem infrastructure (the gem registry) needs explicit governance before a crisis forces it.

# Related
- [CRuby YJIT/ZJIT](/runtimes/cruby-yjit.md) · [TruffleRuby](/runtimes/truffleruby.md) · [Crystal](/languages/crystal.md)
- [Ruby 3.1 ships YJIT](/events/2021-12-ruby-3-1-yjit.md) · [RubyGems governance crisis](/events/2025-09-rubygems-governance-crisis.md) · [Ruby 4.0](/events/2025-12-ruby-4-0-zjit.md)

[^tiobe-2026-09]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^ruby-30]: Ruby 3.0.0 Released — https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/
[^yjit-32]: Shopify Engineering: Ruby 3.2's YJIT is Production-Ready — https://shopify.engineering/ruby-yjit-is-production-ready
[^yjit-33]: Rails at Scale: Ruby 3.3's YJIT Runs Shopify's Production Code 15% Faster — https://railsatscale.com/2023-09-18-ruby-3-3-s-yjit-runs-shopify-s-production-code-15-faster/
[^yjit-34]: Rails at Scale: YJIT 3.4 — https://railsatscale.com/2025-01-10-yjit-3-4-even-faster-and-more-memory-efficient/
[^ruby-34]: Ruby 3.4.0 Released — https://www.ruby-lang.org/en/news/2024/12/25/ruby-3-4-0-released/
[^ruby-40]: Ruby 4.0.0 Released — https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/
[^byroot-ractors]: Jean Boussier: What's The Deal With Ractors? — https://byroot.github.io/ruby/performance/2025/02/27/whats-the-deal-with-ractors.html
[^ractors-rails]: Rails at Scale: Bringing Rails into the Ractor-age — https://railsatscale.com/2026-08-11-ractors-on-rails/
[^sorbet-shopify]: Shopify Engineering: The State of Ruby Static Typing at Shopify — https://shopify.engineering/the-state-of-ruby-static-typing-at-shopify
[^sorbet-rbs]: Rails at Scale: Inline RBS comments support for Sorbet — https://railsatscale.com/2025-04-23-rbs-support-for-sorbet/
[^reg-rubygems]: The Register: RubyGems maintainer quits after Ruby Central takes control — https://www.theregister.com/2025/09/22/ruby_central_rubygems/
[^reg-rubycore]: The Register: Ruby Central tries to make peace — https://www.theregister.com/2025/10/18/ruby_central_taps_ruby_core/
[^spinel]: GitHub: matz/spinel — https://github.com/matz/spinel
[^rubyconf-2026]: Booleans blog: RubyConf 2026 — https://www.booleans.in/blog-rubyconf-2026.php
[^truffleruby-33]: TruffleRuby 33 is Released — https://truffleruby.dev/blog/truffleruby-33-is-released
