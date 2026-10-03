---
type: OSS Project
title: GitLab Community Edition
description: "The MIT-licensed open-core base of GitLab, the main self-hostable alternative to GitHub; the codebase keeps shipping monthly (GitLab 19.0, May 2026) but the company's energy goes into paid AI (Duo Agent Platform, credits) while GitLab Inc. decelerates and cut ~14% of staff in June 2026."
resource: https://gitlab.com/gitlab-org/gitlab
tags: [code-hosting, forge, devsecops, open-core, mit, self-hosted]
domain: devtools-languages
license: MIT
license_history: ["CE: MIT (2011-)", "EE features: proprietary source-available"]
governance: company-led-open-core
steward: GitLab Inc.
backing_orgs: [organizations/gitlab]
metrics:
  gitlab_com_stars_gitlab: { value: 6147, as_of: 2026-10-03, note: "gitlab-org/gitlab on GitLab.com" }
  gitlab_com_stars_foss_mirror: { value: 7174, as_of: 2026-10-03, note: "gitlab-org/gitlab-foss CE mirror" }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: flat, W6: down, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gitlab-repo
    resource: https://gitlab.com/gitlab-org/gitlab
    title: GitLab repository on GitLab.com (stars via GitLab API, 2026-10-03)
  - id: gitlab-19
    resource: https://docs.gitlab.com/releases/19/gitlab-19-0-released/
    title: "GitLab 19.0 release notes (2026-05-21)"
    author: org:gitlab
  - id: gitlab-19-breaking
    resource: https://about.gitlab.com/blog/a-guide-to-the-breaking-changes-in-gitlab-19-0/
    title: "GitLab blog: A guide to the breaking changes in GitLab 19.0"
    author: org:gitlab
  - id: gitlab-pr-ai
    resource: https://about.gitlab.com/press/releases/2026-03-19-gitlab-enables-broader-more-affordable-access-to-agentic-ai-across-the-sdlc/
    title: "GitLab press release: broader, more affordable access to agentic AI (2026-03-19)"
    author: org:gitlab
  - id: infoq-gitlab
    resource: https://www.infoq.com/news/2026/04/gitlab-flatrate-view-ai-access/
    title: "InfoQ: GitLab adds flat-rate code reviews, free-tier AI access and spending caps (Apr 2026)"
    author: org:infoq
  - id: gitlab-ceo
    resource: https://about.gitlab.com/blog/gitlab-names-bill-staples-as-new-ceo/
    title: "GitLab blog: GitLab names Bill Staples as new CEO (Dec 2024)"
    author: org:gitlab
  - id: tc-gitlab-cuts
    resource: https://techcrunch.com/2026/06/03/gitlab-cuts-14-of-staff-as-it-scales-its-platform-to-serve-ai-workloads/
    title: "TechCrunch: GitLab cuts 14% of staff (2026-06-03)"
    author: org:techcrunch
  - id: gitlab-q2fy27
    resource: https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-Second-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx
    title: "GitLab Reports Q2 FY2027 results (2026-09-01)"
    author: org:gitlab
---

# Summary
GitLab CE is the MIT-licensed core of GitLab, still the most complete self-hostable DevSecOps forge and the main enterprise alternative to GitHub. The code keeps a strict monthly cadence — GitLab 19.0 shipped 2026-05-21 with 15 breaking changes, including moving the Helm chart from the retired ingress-nginx to Gateway API/Envoy[^gitlab-19][^gitlab-19-breaking]. But the open core has not been the story: under CEO Bill Staples (Dec 2024)[^gitlab-ceo] the company made Duo Agent Platform GA (Jan 2026) and moved AI to usage-based GitLab Credits, even selling credits to Free-tier users (Mar–Apr 2026)[^gitlab-pr-ai][^infoq-gitlab]. GitLab Inc. cut ~14% of staff in June 2026 and growth slowed to 21% by Q2 FY2027[^tc-gitlab-cuts][^gitlab-q2fy27]. Verdict: OSS stable (no license change; benefits indirectly from "leave GitHub" sentiment, though Forgejo captured most of it); business struggling.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12 | Bill Staples succeeds Sid Sijbrandij as CEO [^gitlab-ceo] | Business | ± |
| W9 | 2026-01 | Duo Agent Platform GA; AI moves to usage-based credits [^infoq-gitlab] | Business | + |
| W9 | 2026-03-19 | Credits purchasable on Free tier; flat $0.25 automated code review [^gitlab-pr-ai][^infoq-gitlab] | Business | + |
| W6 | 2026-05-21 | GitLab 19.0 (15 breaking changes, ingress-nginx → Gateway API) [^gitlab-19][^gitlab-19-breaking] | OSS | + |
| W6 | 2026-06-03 | ~14% layoffs, exit from 22 countries [^tc-gitlab-cuts] | Business | − |
| W3 | 2026-09-01 | Q2 FY27 revenue $286.3M (+21%) [^gitlab-q2fy27] | Business | ± |

# OSS successes
- Unbroken monthly release train and MIT license for CE; no relicensing despite financial pressure.[^gitlab-19]
- Remains the default self-managed forge for enterprises and governments needing on-prem control.

# OSS failures / risks
- Most innovation (AI agents, security scanning) lands in paid tiers; CE increasingly a funnel.[^infoq-gitlab]
- Community "leave GitHub" migrations favored nonprofit Forgejo/Codeberg over GitLab.

# Business successes
- ~$1B run-rate and non-GAAP profitability (see organization file).[^gitlab-q2fy27]

# Business failures / risks
- Layoffs and deceleration; seat-based model exposed to AI agents.[^tc-gitlab-cuts]

# By window
## W3
- Q2 FY27 results; continued monthly releases.[^gitlab-q2fy27]
## W6
- GitLab 19.0; layoffs.[^gitlab-19][^tc-gitlab-cuts]
## W9
- Duo Agent Platform GA and credits for Free tier.[^gitlab-pr-ai]
## W12
- No notable CE-specific events found.
## W24
- CEO transition.[^gitlab-ceo]

# Lessons
- Open core keeps the code open, but under AI-era pressure the commercial roadmap absorbs nearly all investment.
- Being the "open" alternative to GitHub isn't enough to capture values-driven migrations when a nonprofit option exists.

# Related
- [GitLab Inc.](/organizations/gitlab.md)
- [GitLab layoffs and restructuring](/events/2026-06-gitlab-layoffs-restructuring.md)
- [GitHub](/projects/devtools-languages/github.md)
- [Forgejo and Codeberg](/projects/devtools-languages/forgejo.md)

[^gitlab-repo]: GitLab API, 2026-10-03.
[^gitlab-19]: GitLab docs, 2026-05-21.
[^gitlab-19-breaking]: GitLab blog.
[^gitlab-pr-ai]: GitLab press release, 2026-03-19.
[^infoq-gitlab]: InfoQ, April 2026.
[^gitlab-ceo]: GitLab blog, Dec 2024.
[^tc-gitlab-cuts]: TechCrunch, 2026-06-03.
[^gitlab-q2fy27]: GitLab IR, 2026-09-01.
