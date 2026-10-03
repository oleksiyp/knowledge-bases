---
type: Event
title: Ruby Central takes control of the RubyGems and Bundler repositories
description: "On 2025-09-09 and 2025-09-18 Ruby Central, operator of rubygems.org, seized the RubyGems GitHub enterprise and removed long-time RubyGems/Bundler maintainers; the fallout produced the gem.coop fork, a transfer of the repos to Ruby core (2025-10-17), a Bundler trademark dispute and Ruby Central's own financial crisis (Apr 2026)."
event_kind: governance
date: 2025-09-18
window: W24
impact: negative
projects: [projects/devtools-languages/rubygems, projects/devtools-languages/rails]
organizations: [organizations/ruby-central]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-quits
    resource: https://www.theregister.com/software/2025/09/22/rubygems-maintainer-quits-after-ruby-central-takes-control/1143835
    title: "The Register: RubyGems maintainer quits after Ruby Central takes control (2025-09-22)"
    author: org:the-register
  - id: lwn-takeover
    resource: https://lwn.net/Articles/1040778/
    title: "LWN: The RubyGems.org takeover"
    author: org:lwn
  - id: drapper
    resource: https://joel.drapper.me/p/rubygems-takeover/
    title: "Joel Drapper: Shopify, pulling strings at Ruby Central, forces Bundler and RubyGems takeover (partisan account)"
  - id: reg-gemcoop
    resource: https://www.theregister.com/2025/10/06/gem_cooperative/
    title: "The Register: Ex-RubyGems maintainers forge new home at Gem Cooperative (2025-10-06)"
    author: org:the-register
  - id: ruby-transition
    resource: https://www.ruby-lang.org/en/news/2025/10/17/rubygems-repository-transition/
    title: "ruby-lang.org: The Transition of RubyGems Repository Ownership (2025-10-17)"
    author: org:ruby-core
  - id: rc-report
    resource: https://rubycentral.org/news/rubygems-fracture-incident-report/
    title: "Ruby Central: RubyGems Fracture Incident Report (2026-03-31)"
    author: org:ruby-central
  - id: devclass-report
    resource: https://www.devclass.com/development/2026/04/02/ruby-central-report-reopens-wounds-over-rubygems-repo-takeover/5213851
    title: "DevClass: Ruby Central report reopens wounds over RubyGems repo takeover (2026-04-02)"
  - id: reg-jeopardy
    resource: https://theregister.com/2026/04/19/rubygems_nonprofit_in_real_financial
    title: "The Register: Exec director of Ruby Central gone amid 'financial jeopardy' (2026-04-19)"
    author: org:the-register
  - id: arko-legacy
    resource: https://andre.arko.net/2026/07/30/ruby-centrals-destructive-legacy/
    title: "André Arko: Ruby Central's Destructive Legacy (2026-07-30; party to the dispute)"
---

# What happened
On 2025-09-09 the RubyGems GitHub enterprise was renamed "Ruby Central", Ruby Central's director of open source Marty Haught was added as owner and other maintainers were removed; the change was partly reverted days later. On 2025-09-18 all RubyGems and Bundler admins were removed and access to the `bundler` and `rubygems-update` gems revoked. Ruby Central cited a security audit and legal counsel, saying only its employees/contractors would hold admin rights to rubygems.org; ten-year maintainer Ellen Dash resigned, calling it a "hostile takeover"[^reg-quits][^lwn-takeover]. Critics alleged pressure from Shopify, Ruby Central's key funder[^drapper]; Ruby Central's later report identified André Arko's launch of the competing `rv` tool as the trigger[^rc-report]. Ex-maintainers launched Gem Cooperative / gem.coop on 2025-10-06[^reg-gemcoop], and on 2025-10-17 Matz announced the RubyGems/Bundler repositories would be owned by the Ruby core team, with Ruby Central continuing to operate rubygems.org[^ruby-transition].

# Why it matters
The highest-profile case in this period of a nonprofit steward unilaterally seizing a community project, showing how unclear ownership of repos, trademarks and registry operations turns into a legal and funding crisis.

# Outcome so far
- Ruby Central's incident report (2026-03-31) reopened criticism rather than closing it[^rc-report][^devclass-report].
- By 2026-04-19 Ruby Central had parted ways with its executive director, CFO and PR agency and warned of "real financial jeopardy"[^reg-jeopardy].
- As of 2026-07-30 the Bundler trademark / back-pay dispute with Arko was still unsettled, per Arko[^arko-legacy].

# Related
- [Ruby, RubyGems and Bundler](/projects/devtools-languages/rubygems.md)
- [Ruby on Rails](/projects/devtools-languages/rails.md)
- [Ruby Central](/organizations/ruby-central.md)

[^reg-quits]: The Register, 2025-09-22.
[^lwn-takeover]: LWN.
[^drapper]: Joel Drapper blog.
[^reg-gemcoop]: The Register, 2025-10-06.
[^ruby-transition]: ruby-lang.org, 2025-10-17.
[^rc-report]: Ruby Central, 2026-03-31.
[^devclass-report]: DevClass, 2026-04-02.
[^reg-jeopardy]: The Register, 2026-04-19.
[^arko-legacy]: André Arko, 2026-07-30.
