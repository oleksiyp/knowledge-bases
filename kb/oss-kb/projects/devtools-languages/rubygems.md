---
type: OSS Project
title: Ruby, RubyGems and Bundler
description: "The Ruby language and its package toolchain; Ruby itself is healthy (Ruby 4.0 with ZJIT and Ruby::Box, Dec 2025) but the Sept 2025 Ruby Central seizure of the RubyGems/Bundler repos split the maintainer community, spawned the gem.coop fork, moved stewardship to Ruby core and left Ruby Central in 'real financial jeopardy' by April 2026."
resource: https://github.com/rubygems/rubygems
tags: [programming-language, package-manager, registry, governance-crisis, ruby, mit]
domain: devtools-languages
license: MIT
license_history: ["RubyGems/Bundler: MIT (unchanged through the 2025 dispute)", "Ruby: Ruby License / BSD-2-Clause dual"]
governance: community
steward: Ruby core team (repos, since Oct 2025); Ruby Central (rubygems.org operations)
backing_orgs: [organizations/ruby-central]
metrics:
  github_stars_rubygems: { value: 3976, as_of: 2026-10-03 }
  github_stars_ruby: { value: 23769, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: struggling
momentum_by_window: { W3: flat, W6: down, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: rubygems-gh
    resource: https://github.com/rubygems/rubygems
    title: RubyGems GitHub repository (stars via GitHub API, 2026-10-03)
  - id: reg-quits
    resource: https://www.theregister.com/software/2025/09/22/rubygems-maintainer-quits-after-ruby-central-takes-control/1143835
    title: "The Register: RubyGems maintainer quits after Ruby Central takes control (2025-09-22)"
    author: org:the-register
  - id: lwn-takeover
    resource: https://lwn.net/Articles/1040778/
    title: "LWN: The RubyGems.org takeover"
    author: org:lwn
  - id: reg-gemcoop
    resource: https://www.theregister.com/2025/10/06/gem_cooperative/
    title: "The Register: Ex-RubyGems maintainers forge new home at Gem Cooperative (2025-10-06)"
    author: org:the-register
  - id: ruby-transition
    resource: https://www.ruby-lang.org/en/news/2025/10/17/rubygems-repository-transition/
    title: "ruby-lang.org: The Transition of RubyGems Repository Ownership (2025-10-17)"
    author: org:ruby-core
  - id: reg-peace
    resource: https://www.theregister.com/2025/10/18/ruby_central_taps_ruby_core/
    title: "The Register: Ruby Central tries to make peace after 'hostile takeover' (2025-10-18)"
    author: org:the-register
  - id: ruby4
    resource: https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/
    title: "ruby-lang.org: Ruby 4.0.0 Released (2025-12-25)"
    author: org:ruby-core
  - id: fosdem-rubygems
    resource: https://archive.fosdem.org/2026/schedule/event/YUJUKD-what_happened_to_rubygems_and_what_can_we_learn/
    title: "FOSDEM 2026: What happened to RubyGems and what can we learn? (Mike McQuaid)"
  - id: reg-report
    resource: https://www.theregister.com/software/2026/04/01/ruby-central-seeks-closure-with-rubygems-fracture-report/5224650
    title: "The Register: Ruby Central seeks closure with RubyGems fracture report (2026-04-01)"
    author: org:the-register
  - id: rc-report
    resource: https://rubycentral.org/news/rubygems-fracture-incident-report/
    title: "Ruby Central: RubyGems Fracture Incident Report (2026-03-31)"
    author: org:ruby-central
  - id: reg-jeopardy
    resource: https://theregister.com/2026/04/19/rubygems_nonprofit_in_real_financial
    title: "The Register: Exec director of Ruby Central gone amid 'financial jeopardy' (2026-04-19)"
    author: org:the-register
  - id: arko-legacy
    resource: https://andre.arko.net/2026/07/30/ruby-centrals-destructive-legacy/
    title: "André Arko: Ruby Central's Destructive Legacy (2026-07-30; partisan first-hand account)"
  - id: rc-news
    resource: https://rubycentral.org/news/
    title: "Ruby Central news index (Supporters Program Japan 2026-07-15; Ruby Shield reflection 2026-09-08)"
    author: org:ruby-central
  - id: socket-gemcoop
    resource: https://socket.dev/blog/gem-cooperative-emerges-as-a-community-run-alternative-to-rubygems-org
    title: "Socket: Gem Cooperative emerges as a community-run alternative to RubyGems.org"
---

# Summary
Ruby the language had a good two years — Ruby 4.0 shipped on its 30th anniversary (2025-12-25) with the new ZJIT compiler and experimental Ruby::Box isolation[^ruby4] — but its package toolchain suffered the period's ugliest open-source governance crisis. On 2025-09-09 and 2025-09-18 Ruby Central, the nonprofit operating rubygems.org, took control of the RubyGems GitHub enterprise and removed long-time RubyGems and Bundler maintainers, citing a security audit and legal advice; maintainers called it a "hostile takeover" and resigned[^reg-quits][^lwn-takeover]. Ex-maintainers launched the gem.coop registry fork[^reg-gemcoop], and on 2025-10-17 Matz moved ownership of the repos to the Ruby core team[^ruby-transition]. By April 2026 Ruby Central had published a contested incident report, lost its executive director and declared itself in "real financial jeopardy"[^reg-report][^reg-jeopardy]. Verdict: language stable; packaging governance contested; steward organization struggling.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-09 | RubyGems GitHub enterprise renamed to Ruby Central; other maintainers removed (partially reverted days later) [^reg-quits] | Governance | − |
| W24 | 2025-09-18 | Ruby Central removes all RubyGems/Bundler admins; Ellen Dash resigns [^reg-quits][^lwn-takeover] | Governance | − |
| W12 | 2025-10-06 | Ex-maintainers launch Gem Cooperative / gem.coop [^reg-gemcoop] | OSS | ± |
| W12 | 2025-10-17 | Matz announces RubyGems/Bundler repos transfer to Ruby core; Ruby Central keeps operating rubygems.org [^ruby-transition][^reg-peace] | Governance | + |
| W12 | 2025-12-25 | Ruby 4.0.0 (ZJIT, Ruby::Box) [^ruby4] | OSS | + |
| W9 | 2026-01-31 | FOSDEM post-mortem "What happened to RubyGems" [^fosdem-rubygems] | OSS | ± |
| W9 | 2026-03-31 | Ruby Central publishes "RubyGems Fracture Incident Report" [^rc-report][^reg-report] | Governance | ± |
| W6 | 2026-04-19 | Ruby Central parts with ED, CFO, PR agency; board warns of "real financial jeopardy" [^reg-jeopardy] | Business | − |
| W3 | 2026-07-15 | Ruby Central launches RubyGems.org Supporters Program in Japan with Ruby Association [^rc-news] | Business | + |
| W3 | 2026-07-30 | Arko: dispute over Bundler trademark/back pay still unsettled after 10 months [^arko-legacy] | Governance | − |

# OSS successes
- Ruby 4.0 delivered on schedule with a new JIT architecture aimed at contributor approachability.[^ruby4]
- Ruby core now formally owns the RubyGems/Bundler repositories, aligning the client with the language rather than a single nonprofit.[^ruby-transition]
- gem.coop provided an independent, Homebrew-style-governed mirror/registry and shipped release cooldowns in early 2026.[^socket-gemcoop]

# OSS failures / risks
- Loss of a decade of maintainer continuity on RubyGems and Bundler; contributor base fractured between Ruby Central/Ruby core and Gem Cooperative.[^lwn-takeover][^reg-gemcoop]
- The incident report reopened wounds rather than closing them.[^reg-report]
- Ruby's broader mindshare keeps eroding; even DHH's new HEY backend is in Rust (see [Rails](/projects/devtools-languages/rails.md)).

# Business successes
- Ruby Central launched a security project funded by an Alpha-Omega grant (amount reported as $250,000 in secondary coverage; not confirmed from a primary source).[^arko-legacy]
- Shopify's Ruby Shield partnership (since July 2022) continues to fund supply-chain security work.[^rc-news]

# Business failures / risks
- Ruby Central lost its executive director, CFO and many contractors and moved to a volunteer working board (April 2026).[^reg-jeopardy]
- According to Arko's (partisan) account, Ruby Central lost 5 of 7 board members and 6 of 7 rubygems.org operators; not independently confirmed.[^arko-legacy]
- Unresolved legal dispute over the Bundler trademark.[^arko-legacy]

# By window
## W3
- Ruby Central Supporters Program in Japan (2026-07-15); Ruby Shield retrospective (2026-09-08).[^rc-news]
- Arko–Ruby Central settlement still unresolved as of 2026-07-30.[^arko-legacy]
## W6
- Ruby Central financial-jeopardy announcement and leadership exit (2026-04-19).[^reg-jeopardy]
## W9
- FOSDEM post-mortem (2026-01-31); incident report (2026-03-31).[^fosdem-rubygems][^rc-report]
## W12
- gem.coop launch; repos to Ruby core (2025-10-17); Ruby 4.0 (2025-12-25).[^reg-gemcoop][^ruby-transition][^ruby4]
## W24
- The takeover itself (2025-09-09 / 09-18).[^reg-quits]

# Lessons
- Who "owns" an OSS project (repo, trademark, registry operations) must be written down before a crisis; ambiguity becomes a legal fight.
- Security/compliance arguments for centralizing control backfire when executed without maintainer consent.
- Small language nonprofits dependent on a few corporate sponsors (Shopify) are fragile; a governance scandal quickly becomes a funding crisis.

# Related
- [Ruby Central RubyGems takeover (event)](/events/2025-09-ruby-central-rubygems-takeover.md)
- [Ruby Central](/organizations/ruby-central.md)
- [Ruby on Rails](/projects/devtools-languages/rails.md)
- [npm registry](/projects/devtools-languages/npm-registry.md)

[^rubygems-gh]: GitHub API, 2026-10-03.
[^reg-quits]: The Register, 2025-09-22.
[^lwn-takeover]: LWN, The RubyGems.org takeover.
[^reg-gemcoop]: The Register, 2025-10-06.
[^ruby-transition]: ruby-lang.org, 2025-10-17.
[^reg-peace]: The Register, 2025-10-18.
[^ruby4]: ruby-lang.org, 2025-12-25.
[^fosdem-rubygems]: FOSDEM 2026 schedule.
[^reg-report]: The Register, 2026-04-01.
[^rc-report]: Ruby Central, 2026-03-31.
[^reg-jeopardy]: The Register, 2026-04-19.
[^arko-legacy]: André Arko blog, 2026-07-30 (party to the dispute).
[^rc-news]: Ruby Central news index.
[^socket-gemcoop]: Socket.dev blog.
