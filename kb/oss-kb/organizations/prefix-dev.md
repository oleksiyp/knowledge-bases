---
type: Organization
title: prefix.dev
description: Berlin-based open-source packaging startup founded in 2022 by mamba creator Wolf Vollprecht; builds the Rust conda stack (Rattler, rattler-build, pixi) and sells channel hosting — its Rattler solver becomes conda's default in Oct 2026.
resource: https://prefix.dev
tags: [commercial-open-source, package-management, conda, rust, berlin]
org_kind: coss-startup
hq: Berlin, Germany
funding: { total_usd: "undisclosed", last_round: "Seed (468 Capital, Costanoa Ventures, QuantStack Ventures)", last_round_date: 2022-09-18, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/scientific-computing/pixi-mamba, projects/scientific-computing/conda-forge]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tracxn-prefix
    resource: https://tracxn.com/d/companies/prefix.dev/__kBqv-xjEWV03NAElKhzjqdNNvf2duQQhwioeDbUs1_w/funding-and-investors
    title: "Tracxn: prefix.dev funding (seed 2022-09-18; aggregator)"
  - id: prefix-team
    resource: https://prefix.dev/team
    title: prefix.dev team page
  - id: prefix-blog
    resource: https://prefix.dev/blog
    title: "prefix.dev blog (Channel Hosting GA 2026-04-16; Pixi Build 2026-07-02; Pixi Audit 2026-09-24)"
  - id: rattler-to-conda
    resource: https://conda.org/blog/2024-10-01-rattler-to-conda/
    title: "conda.org: Rattler is moving to the conda organization (2024-10-01)"
  - id: conda-sep-2026
    resource: https://conda.org/blog/2026-10-02-september-releases/
    title: "conda.org: Rattler to become default solver in conda 26.10"
  - id: pixi-gh
    resource: https://github.com/prefix-dev/pixi
    title: pixi GitHub repository
---

# Summary
prefix.dev GmbH was founded in Berlin in 2022 by Wolf Vollprecht, creator of mamba, and raised an undisclosed seed from 468 Capital, Costanoa Ventures and QuantStack Ventures (Sept 2022; aggregator data)[^tracxn-prefix][^prefix-team]. It builds the Rust conda toolchain — Rattler (donated to the conda org in Oct 2024)[^rattler-to-conda], rattler-build and pixi (~7.8k stars)[^pixi-gh] — and in 2026 launched paid channel hosting (GA 2026-04-16), Pixi Build and a Pixi Audit beta[^prefix-blog]. Its biggest strategic win: conda 26.10 makes Rattler the default solver[^conda-sep-2026]. Verdict: growing influence; revenue and any post-seed funding undisclosed.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| pre-W24 | 2024-10-01 | Rattler moves to conda org (community governance)[^rattler-to-conda] | + |
| W9 | 2026-02-03 | Pixi GUI[^prefix-blog] | + |
| W6 | 2026-04-16 | Channel hosting on prefix.dev GA[^prefix-blog] | + |
| W6 | 2026-07-02 | Pixi Build launched[^prefix-blog] | + |
| W3 | 2026-09-24 | Pixi Audit beta[^prefix-blog] | + |
| W3 | 2026-10-02 | conda announces Rattler as default solver (26.10)[^conda-sep-2026] | + |

# Monetization model
- Hosted conda channels / private package hosting; support and services for organizations adopting pixi[^prefix-blog].

# Successes
- Technology adopted upstream by conda; strong developer mindshare in robotics and research software engineering[^conda-sep-2026][^prefix-blog].

# Failures / risks
- No disclosed revenue or follow-on round since 2022 seed (unverified); competes with Anaconda's enterprise offering and uv (OpenAI/Astral).

# Related
- [/projects/scientific-computing/pixi-mamba.md](/projects/scientific-computing/pixi-mamba.md), [/projects/scientific-computing/conda.md](/projects/scientific-computing/conda.md), [/organizations/anaconda.md](/organizations/anaconda.md), [/organizations/astral.md](/organizations/astral.md)

[^tracxn-prefix]: https://tracxn.com/d/companies/prefix.dev/__kBqv-xjEWV03NAElKhzjqdNNvf2duQQhwioeDbUs1_w/funding-and-investors
[^prefix-team]: https://prefix.dev/team
[^prefix-blog]: https://prefix.dev/blog
[^rattler-to-conda]: https://conda.org/blog/2024-10-01-rattler-to-conda/
[^conda-sep-2026]: https://conda.org/blog/2026-10-02-september-releases/
[^pixi-gh]: https://github.com/prefix-dev/pixi
