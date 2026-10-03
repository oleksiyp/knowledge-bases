---
type: OSS Project
title: GitButler
description: Git client from GitHub co-founder Scott Chacon built around virtual/stacked branches and now an agent-friendly `but` CLI; source-available under the Fair Source FSL (not OSI open source), it raised a $17M a16z-led Series A in April 2026 to build "what comes after Git".
resource: https://github.com/gitbutlerapp/gitbutler
tags: [version-control, git-client, fair-source, fsl, rust, tauri, ai-agents, vc-backed]
domain: devtools-languages
license: FSL-1.1-MIT
license_history: ["source-available, public on GitHub (early 2024)", "FSL-1.1-MIT / Fair Source (Aug 2024-; each release converts to MIT after 2 years)"]
governance: single-vendor
steward: GitButler Inc. (Berlin)
backing_orgs: []
metrics:
  github_stars: { value: 21771, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:16:50Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gb-gh
    resource: https://github.com/gitbutlerapp/gitbutler
    title: gitbutlerapp/gitbutler GitHub repository (stars via GitHub API, 2026-10-03)
  - id: gb-fair-source
    resource: https://blog.gitbutler.com/gitbutler-is-now-fair-source
    title: "GitButler blog: GitButler is now Fair Source"
    author: org:gitbutler
  - id: tc-fair-source
    resource: https://techcrunch.com/2024/09/22/some-startups-are-going-fair-source-to-avoid-the-pitfalls-of-open-source-licensing/
    title: "TechCrunch: Some startups are going 'fair source' to avoid the pitfalls of open source licensing"
    author: org:techcrunch
  - id: gb-series-a
    resource: https://blog.gitbutler.com/series-a
    title: "GitButler blog: We've raised $17M to build what comes after Git"
    author: org:gitbutler
  - id: siliconangle-gb
    resource: https://siliconangle.com/2026/04/08/gitbutler-raises-17m-simplify-git-workflows-developers/
    title: "SiliconANGLE: GitButler raises $17M to simplify Git workflows for developers"
  - id: gb-releases
    resource: https://github.com/gitbutlerapp/gitbutler/releases
    title: GitButler releases (0.19 CLI Feb 2026; 0.22 "Catch 22" Jul 2026)
  - id: gb-gitmerge
    resource: https://blog.gitbutler.com/git-merge-2026-talks
    title: "GitButler blog: Git Merge 2026 Talks are Up"
    author: org:gitbutler
  - id: gb-jjcon
    resource: https://blog.gitbutler.com/jj-con-2026-talks
    title: "GitButler blog: JJ Con 2026 Talks are Up"
    author: org:gitbutler
---

# Summary
GitButler is a VC-backed Git client (Tauri/Rust/Svelte desktop app plus, since Feb 2026, the `but` CLI) whose core idea is working on several virtual or stacked branches at once — a model that maps unusually well onto parallel AI coding agents.[^gb-releases] It is **not OSI open source**: the code went public in early 2024 and moved to the Functional Source License (FSL, non-compete, converting to MIT after two years) in August 2024, making it a poster child of the "Fair Source" movement alongside Sentry.[^gb-fair-source][^tc-fair-source] Business momentum is strong: a **$17M Series A led by a16z** (Peter Levine joining the board) announced 2026-04-08, explicitly to rebuild version control for "swarms of agents".[^gb-series-a][^siliconangle-gb] In 2026 GitButler also took over a convening role GitHub used to play, co-hosting Git Merge 2026 with OpenAI and helping run JJ Con in Lisbon.[^gb-gitmerge][^gb-jjcon] Verdict: growing (OSS-adjacent), business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-08 | Relicenses client to FSL ("Fair Source") [^gb-fair-source][^tc-fair-source] | License | mixed |
| W9 | 2026-02-05 | 0.19 "Commander Keen": `but` CLI, agent-oriented commands [^gb-releases] | OSS | + |
| W6 | 2026-04-08 | $17M Series A led by a16z; Fly Ventures and A Capital follow on [^gb-series-a][^siliconangle-gb] | Business | + |
| W3 | 2026-07 | 0.22 "Catch 22": native stacked PRs on GitHub [^gb-releases] | OSS | + |
| W3 | 2026-09-17 | Co-hosts Git Merge 2026 (with OpenAI) and helps run JJ Con, Lisbon [^gb-gitmerge][^gb-jjcon] | Community | + |

# OSS successes
- ~21.8k GitHub stars and a fast release cadence; the `but` CLI made it usable by coding agents, with structured output and parallel branch sessions.[^gb-gh][^gb-releases]
- Became a neutral-ish convener of the Git/jj communities (Git Merge, JJ Con).[^gb-gitmerge][^gb-jjcon]

# OSS failures / risks
- FSL is not an OSI license; contributions are into a single-vendor, non-compete-licensed codebase.[^gb-fair-source]
- Competes with jj (Apache-2.0, Google-backed) and AI-native VCS startups such as Entire for the same "post-Git" mindshare.

# Business successes
- $17M Series A from a16z at a time when "version control for agents" became a hot category.[^gb-series-a]

# Business failures / risks
- Revenue model (paid team/cloud features) is still unproven publicly; no customer or ARR numbers disclosed.[^siliconangle-gb]

# By window
## W3
- 0.22 with native stacked PRs; Git Merge 2026 and JJ Con co-hosting.[^gb-releases][^gb-gitmerge]
## W6
- $17M Series A (2026-04-08).[^gb-series-a]
## W9
- `but` CLI launched with 0.19 (2026-02-05).[^gb-releases]
## W12
- No notable events found.
## W24
- FSL relicense (Aug 2024) and Fair Source movement launch.[^gb-fair-source][^tc-fair-source]

# Lessons
- "Fair Source" lets a VC-backed tool get open-source-style distribution while blocking competing hosted offerings — but forfeits the "open source" label.
- AI agents revived interest (and capital) in version control, a category that had been static for 15 years.

# Related
- [Jujutsu (jj)](/projects/devtools-languages/jujutsu.md)
- [GitHub](/projects/devtools-languages/github.md)
- [Tauri](/projects/devtools-languages/tauri.md)

[^gb-gh]: gitbutlerapp/gitbutler GitHub repository
[^gb-fair-source]: GitButler blog: GitButler is now Fair Source
[^tc-fair-source]: TechCrunch: startups going fair source
[^gb-series-a]: GitButler blog: We've raised $17M to build what comes after Git
[^siliconangle-gb]: SiliconANGLE: GitButler raises $17M
[^gb-releases]: GitButler releases
[^gb-gitmerge]: GitButler blog: Git Merge 2026 Talks are Up
[^gb-jjcon]: GitButler blog: JJ Con 2026 Talks are Up
