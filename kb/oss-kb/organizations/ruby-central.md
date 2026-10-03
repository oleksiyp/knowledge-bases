---
type: Organization
title: Ruby Central
description: "US nonprofit that operates rubygems.org and ran RailsConf/RubyConf; its Sept 2025 seizure of the RubyGems/Bundler repositories triggered a community split, and by April 2026 it had lost its executive director and declared itself in 'real financial jeopardy'."
resource: https://rubycentral.org
tags: [nonprofit, ruby, package-registry, governance-crisis]
org_kind: nonprofit
hq: USA
funding: { total_usd: "n/a (donations/sponsorships; key sponsor Shopify)", last_round: "n/a", last_round_date: "n/a", valuation_usd: "n/a" }
business_verdict: struggling
projects: [projects/devtools-languages/rubygems, projects/devtools-languages/rails]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-quits
    resource: https://www.theregister.com/software/2025/09/22/rubygems-maintainer-quits-after-ruby-central-takes-control/1143835
    title: "The Register: RubyGems maintainer quits after Ruby Central takes control (2025-09-22)"
    author: org:the-register
  - id: final-railsconf
    resource: https://rubyonrails.org/2025/5/29/final-railsconf
    title: "rubyonrails.org: See you at the last RailsConf (2025-05-29)"
    author: org:rails
  - id: ruby-transition
    resource: https://www.ruby-lang.org/en/news/2025/10/17/rubygems-repository-transition/
    title: "ruby-lang.org: The Transition of RubyGems Repository Ownership (2025-10-17)"
    author: org:ruby-core
  - id: rc-report
    resource: https://rubycentral.org/news/rubygems-fracture-incident-report/
    title: "Ruby Central: RubyGems Fracture Incident Report (2026-03-31)"
    author: org:ruby-central
  - id: reg-jeopardy
    resource: https://theregister.com/2026/04/19/rubygems_nonprofit_in_real_financial
    title: "The Register: Exec director of Ruby Central gone amid 'financial jeopardy' (2026-04-19)"
    author: org:the-register
  - id: rc-news
    resource: https://rubycentral.org/news/
    title: "Ruby Central news index"
    author: org:ruby-central
  - id: arko-legacy
    resource: https://andre.arko.net/2026/07/30/ruby-centrals-destructive-legacy/
    title: "André Arko: Ruby Central's Destructive Legacy (2026-07-30; party to the dispute)"
---

# Summary
Ruby Central runs rubygems.org and Ruby community conferences. It hosted the final RailsConf in July 2025[^final-railsconf], then in September 2025 took administrative control of the RubyGems and Bundler repositories, removing long-standing maintainers[^reg-quits]. After a month of backlash it ceded repository ownership to Ruby core (2025-10-17) while keeping registry operations[^ruby-transition]. Its March 2026 incident report did not end the dispute[^rc-report], and in April 2026 it dropped its executive director, CFO and PR agency, moved to a volunteer working board, and warned of "real financial jeopardy"[^reg-jeopardy].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-07-08 | Final RailsConf (Philadelphia) [^final-railsconf] | − |
| W24 | 2025-09-18 | Removes RubyGems/Bundler maintainers [^reg-quits] | − |
| W12 | 2025-10-17 | Repos transferred to Ruby core [^ruby-transition] | ± |
| W9 | 2026-03-31 | Fracture incident report [^rc-report] | ± |
| W6 | 2026-04-19 | ED/CFO out; "financial jeopardy"; volunteer board [^reg-jeopardy] | − |
| W3 | 2026-07-15 | RubyGems.org Supporters Program in Japan with Ruby Association [^rc-news] | + |

# Monetization model
Corporate sponsorships (Ruby Shield partnership with Shopify since 2022; Ruby Alliance sponsors), grants (Alpha-Omega) and conference revenue[^rc-news][^arko-legacy].

# Successes
- Kept rubygems.org operating without major reported incidents through the crisis[^rc-news].

# Failures / risks
- Governance action without maintainer consent destroyed trust and, per its critics, most of its volunteer and operator base[^arko-legacy].
- Financial fragility and leadership vacuum[^reg-jeopardy]; unresolved Bundler trademark dispute[^arko-legacy].

# Related
- [Ruby, RubyGems and Bundler](/projects/devtools-languages/rubygems.md)
- [Ruby Central RubyGems takeover](/events/2025-09-ruby-central-rubygems-takeover.md)
- [Ruby on Rails](/projects/devtools-languages/rails.md)

[^reg-quits]: The Register, 2025-09-22.
[^final-railsconf]: rubyonrails.org, 2025-05-29.
[^ruby-transition]: ruby-lang.org, 2025-10-17.
[^rc-report]: Ruby Central, 2026-03-31.
[^reg-jeopardy]: The Register, 2026-04-19.
[^rc-news]: Ruby Central news.
[^arko-legacy]: André Arko, 2026-07-30.
