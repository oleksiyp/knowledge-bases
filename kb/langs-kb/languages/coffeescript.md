---
type: Language
title: CoffeeScript
description: "The 2010s compile-to-JS pioneer whose best ideas (arrow functions, classes, destructuring) were absorbed into ES2015, leaving the language redundant. 2018–2026 is its long tail: last release April 2022, its flagship app Atom sunset in December 2022, and downloads kept alive only by legacy dependency trees."
tags: [compile-to-js, legacy, absorbed-by-standard, ruby-influenced, decline]
paradigms: [multi-paradigm, functional, object-oriented]
typing: dynamic
memory_model: gc
first_released: 2009
steward: Jeremy Ashkenas and volunteer maintainers
governance: community
trajectory: dead
ideas:
  - ideas/tooling-and-ecosystem/tc39-proposal-outcomes
  - ideas/types/typescript-structural-typing-wins
runtimes: [runtimes/v8, runtimes/nodejs]
adoption_signals:
  github_stars: { value: 16596, as_of: 2026-10-03, note: "jashkenas/coffeescript; last push 2024-03-22" }
  npm_weekly_downloads: { value: 1557186, as_of: 2026-10-01, note: "coffeescript package; plus 941,516 for legacy coffee-script — transitive legacy dependencies" }
era_momentum: { E1: down, E2: down, E3: down, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cs-gh
    resource: https://github.com/jashkenas/coffeescript
    title: "jashkenas/coffeescript GitHub repository (stars, last push 2024-03-22, tags; via GitHub API 2026-10-03)"
  - id: cs-npm-versions
    resource: https://www.npmjs.com/package/coffeescript?activeTab=versions
    title: "npm: coffeescript versions (2.7.0, 2022-04-24)"
  - id: npm-cs-2026
    resource: https://api.npmjs.org/downloads/point/last-week/coffeescript
    title: "npm API: coffeescript weekly downloads (week ending 2026-10-01: 1,557,186)"
  - id: npm-cs-2019
    resource: https://api.npmjs.org/downloads/point/2019-09-25:2019-10-01/coffeescript
    title: "npm API: coffeescript downloads 2019-09-25..10-01 (892,029)"
  - id: npm-legacy
    resource: https://api.npmjs.org/downloads/point/last-week/coffee-script
    title: "npm API: legacy coffee-script package weekly downloads (941,516 in 2026 vs 975,777 in late Sept 2019)"
  - id: cs2-infoq
    resource: https://www.infoq.com/news/2017/10/coffeescript-2-released/
    title: "InfoQ: CoffeeScript 2 Released, Adding Modern JavaScript Features (2017)"
  - id: atom-sunset
    resource: https://github.blog/2022-06-08-sunsetting-atom/
    title: "GitHub Blog: Sunsetting Atom (2022-06-08; archived 2022-12-15)"
    author: org:github
  - id: decaf
    resource: https://github.com/decaffeinate/decaffeinate
    title: "decaffeinate: CoffeeScript-to-modern-JavaScript converter (GitHub)"
  - id: wiki-cs
    resource: https://en.wikipedia.org/wiki/CoffeeScript
    title: "Wikipedia: CoffeeScript"
---

# Summary
CoffeeScript is the canonical **"absorbed by the standard"** outcome. Its arrow functions, classes, destructuring, default parameters and string interpolation were standardised in ES2015. CoffeeScript 2 (2017) then compiled to that modern JS, which removed most of the reason to use it.[^cs2-infoq][^wiki-cs] In 2018–2026 there were no new ideas, only a tail. The last release was 2.7.0 on 2022-04-24, the repository's last push was in March 2024, and GitHub archived its largest CoffeeScript application, the Atom editor, on 2022-12-15.[^cs-npm-versions][^cs-gh][^atom-sunset] Organisations ran tools such as decaffeinate to convert their code to JavaScript and then TypeScript.[^decaf] The npm numbers show the zombie effect: the `coffeescript` package was downloaded ~1.56M times in the last week of September 2026, up from ~0.89M in the same week of 2019, and the legacy `coffee-script` package still gets ~0.94M a week. That is almost entirely transitive build-time dependencies, not new code.[^npm-cs-2026][^npm-cs-2019][^npm-legacy] Verdict: dead as a language choice; a successful *idea incubator* for JavaScript.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| (pre) | 2015 | ES2015 standardises arrow functions, classes and destructuring popularised by CoffeeScript[^wiki-cs] | − |
| (pre) | 2017-09 | CoffeeScript 2 compiles to ES2015+[^cs2-infoq] | mixed |
| E2 | 2021–2022 | CoffeeScript 2.6 and 2.7 (2022-04-24): maintenance releases[^cs-gh][^cs-npm-versions] | flat |
| E2 | 2022-06-08 | GitHub announces Atom sunset (archived 2022-12-15)[^atom-sunset] | − |
| E3 | 2024-03-22 | Last push to the main repository[^cs-gh] | − |
| E4 | 2026-09 | ~1.56M weekly npm downloads, almost all legacy transitive use[^npm-cs-2026] | flat |

# Ideas it bet on
| Idea | Outcome for CoffeeScript |
|---|---|
| Terser syntax for JS (arrows, classes, comprehensions) | Succeeded, then absorbed into ES2015 via [TC39](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md); fatal for CoffeeScript |
| Significant whitespace, Ruby/Python flavour | Failed to outlast the trend; revived by Civet on top of TypeScript |
| Untyped by design | Failed: the market moved to [typed JS](/ideas/types/typescript-structural-typing-wins.md) |
| Compile-to-JS as a language-design lab | Succeeded as a pattern (see [compile-to-JS](/languages/civet-and-compile-to-js.md)) |

# What succeeded
- **Shaping ES2015.** CoffeeScript's ergonomics became JavaScript's.[^wiki-cs]
- **Backward stability.** Old code still compiles; downloads remain high because nothing forces removal.[^npm-cs-2026]

# What failed or stalled
- **Relevance.** With no types and no syntax advantage over ES2015+, there was no reason to start a new project in it.
- **Flagship loss.** Atom, the best-known CoffeeScript codebase, was retired in favour of VS Code (TypeScript).[^atom-sunset]
- **Maintenance.** No release since April 2022.[^cs-npm-versions]

# By era
## E1
Migration away (decaffeinate), with Rails and others having already dropped it as a default.[^decaf]
## E2
2.6/2.7 maintenance releases. Atom sunset.[^cs-npm-versions][^atom-sunset]
## E3
Repository effectively dormant after March 2024.[^cs-gh]
## E4
Legacy downloads only. Civet carries the syntax idea on top of TypeScript ([page](/languages/civet-and-compile-to-js.md)).

# Lessons
- A language that exists to patch a platform's ergonomics dies when the platform adopts the patch. That is a success for the ideas and a failure for the language.
- Download counts can hide death: transitive legacy dependencies inflate metrics for years.

# Related
- [JavaScript](/languages/javascript.md), [TypeScript](/languages/typescript.md), [Civet and compile-to-JS languages](/languages/civet-and-compile-to-js.md)
- [TC39 proposal outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md)

[^cs-gh]: jashkenas/coffeescript GitHub repository — https://github.com/jashkenas/coffeescript
[^cs-npm-versions]: npm: coffeescript versions — https://www.npmjs.com/package/coffeescript?activeTab=versions
[^npm-cs-2026]: npm API: coffeescript weekly downloads — https://api.npmjs.org/downloads/point/last-week/coffeescript
[^npm-cs-2019]: npm API: coffeescript downloads 2019 — https://api.npmjs.org/downloads/point/2019-09-25:2019-10-01/coffeescript
[^npm-legacy]: npm API: coffee-script weekly downloads — https://api.npmjs.org/downloads/point/last-week/coffee-script
[^cs2-infoq]: InfoQ: CoffeeScript 2 Released — https://www.infoq.com/news/2017/10/coffeescript-2-released/
[^atom-sunset]: GitHub Blog: Sunsetting Atom — https://github.blog/2022-06-08-sunsetting-atom/
[^decaf]: decaffeinate — https://github.com/decaffeinate/decaffeinate
[^wiki-cs]: Wikipedia: CoffeeScript — https://en.wikipedia.org/wiki/CoffeeScript
