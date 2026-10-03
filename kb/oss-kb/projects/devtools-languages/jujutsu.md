---
type: OSS Project
title: Jujutsu (jj)
description: Git-compatible version control system started at Google by Martin von Zweigbergk; steady monthly releases (0.34 → 0.45 between Oct 2025 and Sept 2026), general availability inside Google, a first dedicated conference (JJ Con 2026) and a VC-backed company (East River Source Control) hiring its creator as CTO — the most credible "post-Git" contender.
resource: https://github.com/jj-vcs/jj
tags: [version-control, git-compatible, rust, apache-2.0, google, ai-agents]
domain: devtools-languages
license: Apache-2.0
license_history: ["Apache-2.0 (2019-)"]
governance: community
steward: jj-vcs community (Google-originated; several Google engineers work on it full time)
backing_orgs: []
metrics:
  github_stars: { value: 31864, as_of: 2026-10-03 }
  latest_release: { value: "0.45.1", as_of: 2026-09-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:16:50Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: jj-gh
    resource: https://github.com/jj-vcs/jj
    title: jj-vcs/jj GitHub repository (stars via GitHub API, 2026-10-03)
  - id: jj-changelog
    resource: https://docs.jj-vcs.dev/latest/changelog/
    title: Jujutsu changelog
    author: org:jj-vcs
  - id: gb-jjcon
    resource: https://blog.gitbutler.com/jj-con-2026-talks
    title: "GitButler blog: JJ Con 2026 Talks are Up"
    author: org:gitbutler
  - id: gb-gitmerge
    resource: https://blog.gitbutler.com/git-merge-2026-talks
    title: "GitButler blog: Git Merge 2026 Talks are Up"
    author: org:gitbutler
  - id: gitmerge-announce
    resource: https://ratatoskr.run/git/2026/04/8034973
    title: "[ANNOUNCE] Git Merge 2026 (September 17-18, in Lisbon) — git mailing list"
  - id: ersc-martin
    resource: https://ersc.io/blog/martin-joins-ersc
    title: "ERSC: East River Source Control Names Jujutsu Creator Martin von Zweigbergk Chief Technology Officer"
    author: org:east-river-source-control
  - id: alleywatch-ersc
    resource: https://www.alleywatch.com/2025/07/the-alleywatch-startup-daily-funding-report-7-9-2025/
    title: "AlleyWatch Startup Daily Funding Report 7/9/2025 (East River Source Control)"
  - id: hn-jj-google
    resource: https://news.ycombinator.com/item?id=45759572
    title: "Hacker News: Jujutsu at Google [video]"
---

# Summary
Jujutsu is the breakout version-control project of the period and the most credible attempt to move developers past Git's UX while staying wire-compatible with Git. Its verdict is **growing**: the project ships a release on the first Wednesday of every month (0.34.0 in Oct 2025 through 0.45.1 in Sept 2026), made colocated Git repos the default, added Gerrit upload, `jj bisect`, `jj run` and `jj converge`, and reached ~31.9k GitHub stars.[^jj-changelog][^jj-gh] In 2026 it gained institutional weight: Google declared jj generally available to its internal developers (announced at JJ Con 2026 in Lisbon, held alongside Git Merge on 2026-09-17/18), and East River Source Control — a 2025 New York startup building jj-native hosting — named creator Martin von Zweigbergk its CTO on 2026-09-01, while he stays a core maintainer.[^gb-jjcon][^gitmerge-announce][^ersc-martin] It remains pre-1.0, has no foundation, and its commercial ecosystem is only now forming.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12 | Repository moves to the `jj-vcs` GitHub organization [^jj-changelog] | OSS | + |
| W24 | 2025-07-09 | East River Source Control (jj-based startup founded by Benjamin Brittain) raises $5M per SEC filing [^alleywatch-ersc] | Business | + |
| W12 | 2025-10-01 | 0.34.0: Git repos colocated by default, experimental `jj gerrit upload`, `jj bisect run` [^jj-changelog] | OSS | + |
| W12 | 2025-10 | "Jujutsu at Google" talk circulates; internal Google rollout described [^hn-jj-google] | OSS | + |
| W12 | 2025-12-03 | 0.36.0; docs move to docs.jj-vcs.dev [^jj-changelog] | OSS | + |
| W9 | 2026-03-04 | 0.39.0: `jj arrange` TUI [^jj-changelog] | OSS | + |
| W3 | 2026-07-01 | 0.43.0: `jj run` over change stacks [^jj-changelog] | OSS | + |
| W3 | 2026-09-01 | Creator Martin von Zweigbergk becomes CTO of East River Source Control [^ersc-martin] | Business | + |
| W3 | 2026-09 | JJ Con 2026 (Lisbon): jj GA inside Google; internships on VFS, commit cloud, AI-provenance metadata [^gb-jjcon] | OSS | + |
| W3 | 2026-09-02 | 0.45.0: `jj converge` for divergent commits; per-worktree Git HEAD [^jj-changelog] | OSS | + |

# OSS successes
- Disciplined monthly release train for 12+ consecutive months with meaningful features each time.[^jj-changelog]
- Google-internal GA gives jj a large captive user base and continued Google-funded engineering.[^gb-jjcon]
- Its own conference (JJ Con) co-located with Git Merge — a sign the Git community now treats jj as a peer.[^gb-jjcon][^gb-gitmerge]
- Positioned for AI agents: Google interns are building metadata storage to track AI contributions through rewrites.[^gb-jjcon]

# OSS failures / risks
- Still 0.x with regular removals of deprecated options; breaking changes continue (e.g., dropped legacy Git-like symbol resolution in 0.43).[^jj-changelog]
- No neutral foundation; core development leans on Google employees and now one startup.

# Business successes
- A dedicated commercial company (ERSC, backed by Amplify Partners) is building jj-native hosting and storage ("ERSC Storage" in private beta).[^ersc-martin][^alleywatch-ersc]

# Business failures / risks
- The project itself has no revenue; if ERSC's model fails or Google reprioritizes, maintainer capacity could shrink. GitButler and Entire are competing "post-Git" bets.

# By window
## W3
- 0.43–0.45 releases (`jj run`, `jj converge`, stable tag sync).[^jj-changelog]
- JJ Con 2026 in Lisbon; jj GA inside Google.[^gb-jjcon]
- Martin von Zweigbergk named ERSC CTO (2026-09-01).[^ersc-martin]
## W6
- 0.40–0.42 (revset diff functions, mimalloc allocator).[^jj-changelog]
## W9
- 0.37–0.39 (change-offset syntax, `jj arrange` TUI, config moved out of `.jj/` for security).[^jj-changelog]
## W12
- 0.34–0.36; colocation by default; "Jujutsu at Google" talk.[^jj-changelog][^hn-jj-google]
## W24
- Moved to `jj-vcs` org (Dec 2024); ERSC founded and funded (2025).[^jj-changelog][^alleywatch-ersc]

# Lessons
- A Git-compatible on-ramp (use jj on any Git repo) is what lets a new VCS gain adoption without a flag day.
- Big-company internal adoption (Google) plus a startup building the hosting layer is a plausible path to sustainability for infrastructure tools without a foundation.

# Related
- [GitButler](/projects/devtools-languages/gitbutler.md) — competing "after Git" bet, co-hosted JJ Con
- [GitHub](/projects/devtools-languages/github.md)
- [Forgejo](/projects/devtools-languages/forgejo.md)

[^jj-gh]: jj-vcs/jj GitHub repository (stars via GitHub API, 2026-10-03)
[^jj-changelog]: Jujutsu changelog
[^gb-jjcon]: GitButler blog: JJ Con 2026 Talks are Up
[^gb-gitmerge]: GitButler blog: Git Merge 2026 Talks are Up
[^gitmerge-announce]: Git Merge 2026 announcement (git mailing list)
[^ersc-martin]: ERSC: Martin von Zweigbergk named CTO
[^alleywatch-ersc]: AlleyWatch Startup Daily Funding Report 7/9/2025
[^hn-jj-google]: Hacker News: Jujutsu at Google [video]
