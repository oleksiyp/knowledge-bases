---
type: OSS Project
title: Ruby on Rails
description: "DHH's full-stack Ruby web framework, backed by the Rails Foundation; technically steady (Rails 8.0/8.1 'No PaaS required', Rails World 2026 its largest yet) but culturally contested — the 'Plan Vert' fork call against DHH (Sept 2025), the end of RailsConf, the RubyGems crisis, and DHH's own HEY backend moving to Rust (Sept 2026)."
resource: https://github.com/rails/rails
tags: [web-framework, ruby, mit, foundation-backed, dhh]
domain: devtools-languages
license: MIT
license_history: ["MIT (2004-)"]
governance: community
steward: Rails Core team; Rails Foundation (non-profit, funds docs/events)
backing_orgs: []
metrics:
  github_stars: { value: 58797, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rails-gh
    resource: https://github.com/rails/rails
    title: Rails GitHub repository (stars via GitHub API, 2026-10-03)
  - id: rails-81
    resource: https://rubyonrails.org/2025/10/24/this-week-in-rails
    title: "rubyonrails.org: Rails 8.1 released! (Oct 2025)"
    author: org:rails
  - id: rails-eos
    resource: https://rubyonrails.org/2025/10/29/new-rails-releases-and-end-of-support-announcement
    title: "rubyonrails.org: New Rails releases and end-of-support announcement (2025-10-29)"
    author: org:rails
  - id: rails-814
    resource: https://rubyonrails.org/2026/9/24/Rails-Version-8-1-4-has-been-released
    title: "rubyonrails.org: Rails 8.1.4 released (2026-09-24)"
    author: org:rails
  - id: final-railsconf
    resource: https://rubyonrails.org/2025/5/29/final-railsconf
    title: "rubyonrails.org: See you at the last RailsConf (2025-05-29)"
    author: org:rails
  - id: technically-railsconf
    resource: https://technical.ly/workforce/railsconf-ends-ruby-central-guest-post/
    title: "Technical.ly: Ruby Central hosted the final RailsConf in Philly"
  - id: heise-planvert
    resource: https://www.heise.de/en/news/Rails-developers-fork-away-from-Heinemeier-Hansson-10671723.html
    title: "heise: Rails developers fork away from Heinemeier Hansson (2025-09-26)"
    author: org:heise
  - id: rw2026-recap
    resource: https://rubyonrails.org/2026/10/1/rails-world-2026-recap
    title: "rubyonrails.org: Rails World 2026 recap (2026-10-01)"
    author: org:rails
  - id: heise-hey-rust
    resource: https://www.heise.de/en/news/Rust-instead-of-Ruby-Rails-founder-Hansson-s-new-project-11465884.html
    title: "heise: Rust instead of Ruby — Rails founder Hansson's new project (2026-09-26)"
    author: org:heise
  - id: rf-planning-center
    resource: https://rubyonrails.org/2026/3/3/planning-center-newest-contributing-member
    title: "rubyonrails.org: Planning Center is the newest Rails Foundation Contributing member (2026-03-03)"
    author: org:rails
  - id: rf-judgeme
    resource: https://rubyonrails.org/2025/6/3/judge-me-joins-rails-foundation
    title: "rubyonrails.org: Judge.me joins the Rails Foundation as a Core member (2025-06-03)"
    author: org:rails
---

# Summary
Rails is a mature, stable framework with a coherent product vision — Rails 8 "No PaaS Required" (Solid Queue/Cache/Cable, Kamal) and Rails 8.1 (2025-10-22; Active Job Continuations, structured event reporting, local CI)[^rails-81] — and a well-run Rails Foundation whose Rails World 2026 in Austin drew 1,000+ developers from 58 countries[^rw2026-recap]. Its community, however, is polarized around founder DHH: an open letter in Sept 2025 ("Plan Vert") called for a DHH-free fork[^heise-planvert], RailsConf ended after its final 2025 edition[^final-railsconf], and the overlapping RubyGems crisis damaged the Ruby ecosystem's institutions. In Sept 2026 DHH announced that the next HEY backend is written in Rust via agentic coding — a symbolic blow for Rails' own flagship app[^heise-hey-rust]. Verdict: OSS stable, no business entity at stake.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-03 | Judge.me joins Rails Foundation as Core member [^rf-judgeme] | OSS | + |
| W24 | 2025-07-08 | Final RailsConf (Philadelphia, 07-08→07-10) [^final-railsconf][^technically-railsconf] | OSS | − |
| W24 | 2025-09-26 | "Plan Vert" open letter calls for a fork of Rails away from DHH [^heise-planvert] | Governance | − |
| W12 | 2025-10-22 | Rails 8.1 released [^rails-81] | OSS | + |
| W9 | 2026-03-03 | Planning Center joins Rails Foundation (first new member of 2026) [^rf-planning-center] | OSS | + |
| W3 | 2026-09-23 | Rails World 2026, Austin: largest yet; Herb view engine slated for Rails 8.2 [^rw2026-recap] | OSS | + |
| W3 | 2026-09-24 | Rails 8.1.4 released; 8.2 still alpha [^rails-814] | OSS | ± |
| W3 | 2026-09-26 | DHH: new HEY backend in Rust, built with AI agents [^heise-hey-rust] | OSS | − |

# OSS successes
- Clear "one-person framework" narrative: self-hosting stack (Kamal, Solid*) without PaaS dependency.[^rails-81]
- Rails Foundation with ten Core members (incl. Shopify, GitHub, 37signals, 1Password) funds documentation and Rails World.[^rf-judgeme][^rw2026-recap]

# OSS failures / risks
- Founder controversy: Plan Vert fork call; sponsor withdrawals around RubyGems/RailsConf.[^heise-planvert]
- Loss of RailsConf as a community-run event.[^final-railsconf]
- Founder's own flagship rewrite in Rust undercuts Ruby's productivity story in the AI era.[^heise-hey-rust]
- Rails 8.2 not yet released as of 2026-10-03.[^rails-814]

# Business successes
- n/a (no single commercial owner); 37signals' ONCE products and Omarchy keep DHH's ecosystem visible.

# Business failures / risks
- Dependence of ecosystem institutions (Ruby Central, Rails Foundation) on a handful of companies, especially Shopify.

# By window
## W3
- Rails World 2026 (Austin); Rails 8.1.4; DHH's Rust HEY announcement.[^rw2026-recap][^rails-814][^heise-hey-rust]
## W6
- No notable events found (Rails World 2026 CFP/tickets announced).
## W9
- Planning Center joins the Foundation.[^rf-planning-center]
## W12
- Rails 8.1 (2025-10-22).[^rails-81]
## W24
- Final RailsConf; Plan Vert open letter.[^final-railsconf][^heise-planvert]

# Lessons
- A strong product vision can keep a framework healthy despite a polarizing founder, but it shrinks the community's institutional layer.
- AI-assisted coding weakens "developer happiness" arguments for dynamic languages; even their champions defect for performance.

# Related
- [Ruby, RubyGems and Bundler](/projects/devtools-languages/rubygems.md)
- [Ruby Central RubyGems takeover](/events/2025-09-ruby-central-rubygems-takeover.md)
- [Ruby Central](/organizations/ruby-central.md)
- [Omarchy Omacom funding](/events/2026-09-omarchy-omacom-funding.md)
- [Laravel](/projects/devtools-languages/laravel.md)

[^rails-gh]: GitHub API, 2026-10-03.
[^rails-81]: rubyonrails.org, Oct 2025.
[^rails-eos]: rubyonrails.org, 2025-10-29.
[^rails-814]: rubyonrails.org, 2026-09-24.
[^final-railsconf]: rubyonrails.org, 2025-05-29.
[^technically-railsconf]: Technical.ly guest post.
[^heise-planvert]: heise, 2025-09-26.
[^rw2026-recap]: rubyonrails.org, 2026-10-01.
[^heise-hey-rust]: heise, 2026-09-26.
[^rf-planning-center]: rubyonrails.org, 2026-03-03.
[^rf-judgeme]: rubyonrails.org, 2025-06-03.
