---
type: Organization
title: Posit PBC
description: Boston-based public-benefit corporation (formerly RStudio) behind RStudio, the tidyverse, Shiny, Quarto and the Positron IDE; bootstrapped-style, profitable-by-reputation steward of the R ecosystem that in 2025–26 launched Positron GA and a paid Posit AI subscription.
resource: https://posit.co
tags: [commercial-open-source, public-benefit-corporation, r, python, data-science, ide, ai-assistant]
org_kind: coss-startup
hq: Boston, Massachusetts, USA
funding: { total_usd: "undisclosed (General Catalyst holds a minority stake)", last_round: "undisclosed", last_round_date: null, valuation_usd: "undisclosed" }
business_verdict: stable
projects: [projects/scientific-computing/positron, projects/scientific-computing/quarto, projects/scientific-computing/r-cran]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: posit-wiki
    resource: https://en.wikipedia.org/wiki/Posit_PBC
    title: "Wikipedia: Posit PBC (founding 2009, renamed July 2022, General Catalyst minority stake)"
  - id: positron-ga
    resource: https://posit.co/blog/positron-product-announcement-aug-2025
    title: "Posit: Announcing Positron (2025-08)"
  - id: workbench-2026-04
    resource: https://posit.co/blog/workbench-release-2026-04
    title: "Posit: Workbench 2026.04.0 (2026-04-23)"
  - id: posit-ai
    resource: https://posit.co/blog/posit-ai-now-available-all
    title: "Posit: Posit AI is now available to all (2026-05-05)"
  - id: quarto-2
    resource: https://opensource.posit.co/blog/2026-04-06_whats-next-quarto-2/
    title: "Posit: What's next — Quarto 2 (2026-04-06)"
  - id: posit-snowflake
    resource: https://www.prweb.com/releases/posit-wins-two-snowflake-partner-of-the-year-awards-for-data-science-302788999.html
    title: "PRWeb: Posit wins two Snowflake Partner of the Year awards (2026)"
  - id: posit-conf-2026
    resource: https://posit.co/blog/posit-conf-2026-agenda-breakdown
    title: "Posit: posit::conf(2026) agenda breakdown (Houston, Sept 14–16, 2026)"
  - id: glimpse-sep-2026
    resource: https://posit.co/blog/2026-09-glimpse
    title: "posit::glimpse() Newsletter — September 2026"
  - id: positron-license
    resource: https://github.com/posit-dev/positron/blob/main/LICENSE.txt
    title: Positron LICENSE (Elastic License 2.0)
---

# Summary
Posit PBC (founded 2009 by J.J. Allaire; renamed from RStudio in July 2022 to signal a Python-inclusive future) is a privately held public-benefit corporation with a General Catalyst minority stake[^posit-wiki]. Its model is classic open core: free open-source tools (RStudio IDE, tidyverse, Shiny, Quarto) and paid enterprise products (Workbench, Connect, Package Manager)[^posit-wiki]. In the window it shipped Positron as GA (Aug 2025; source-available under ELv2)[^positron-ga][^positron-license], moved Workbench to monthly releases, launched Posit Assistant and a $20/month Posit AI subscription (GA May 2026, on Anthropic models; Kimi K3/GLM 5.2 added Sept 2026)[^workbench-2026-04][^posit-ai][^glimpse-sep-2026], and announced a Rust rewrite of Quarto[^quarto-2]. No funding, layoffs or M&A were found in the window. Verdict: stable, steadily adding AI revenue lines.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-08-14 | Positron GA; supported IDE type in Posit Workbench[^positron-ga] | + |
| W6 | 2026-04-06 | Quarto 2 (Rust rewrite) announced[^quarto-2] | + |
| W6 | 2026-04-23 | Workbench 2026.04: Posit Assistant preview, monthly releases, BYOK AI providers[^workbench-2026-04] | + |
| W6 | 2026-05-05 | Posit AI subscription GA ($20/mo)[^posit-ai] | + |
| W6 | 2026-06 | Two Snowflake Partner of the Year awards at Snowflake Summit 2026[^posit-snowflake] | + |
| W3 | 2026-09-14/16 | posit::conf(2026), Houston[^posit-conf-2026] | + |
| W3 | 2026-09 | Posit AI adds Kimi K3 and GLM 5.2 (cheaper, faster than Anthropic per Posit)[^glimpse-sep-2026] | + |

# Monetization model
- Enterprise software subscriptions (Workbench, Connect, Package Manager), cloud (Posit Cloud, Connect Cloud), and since 2026 AI subscriptions (Posit AI) for individuals; BYOK for enterprises[^posit-wiki][^posit-ai][^workbench-2026-04].
- Partnerships with data platforms (Snowflake, Databricks)[^posit-snowflake].

# Successes
- Successful IDE generational shift (Positron) without abandoning RStudio[^positron-ga].
- Early, opinionated AI product tailored to data science[^posit-ai].

# Failures / risks
- Positron's ELv2 license and single-vendor control of key R tooling (tidyverse, Quarto, Shiny)[^positron-license].
- AI-assistant economics depend on third-party model providers[^posit-ai][^glimpse-sep-2026].
- Financials undisclosed; revenue/funding figures on aggregator sites unverified.

# Related
- [/projects/scientific-computing/positron.md](/projects/scientific-computing/positron.md), [/projects/scientific-computing/quarto.md](/projects/scientific-computing/quarto.md), [/projects/scientific-computing/r-cran.md](/projects/scientific-computing/r-cran.md)
- [/events/2025-08-positron-ga.md](/events/2025-08-positron-ga.md), [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^posit-wiki]: https://en.wikipedia.org/wiki/Posit_PBC
[^positron-ga]: https://posit.co/blog/positron-product-announcement-aug-2025
[^workbench-2026-04]: https://posit.co/blog/workbench-release-2026-04
[^posit-ai]: https://posit.co/blog/posit-ai-now-available-all
[^quarto-2]: https://opensource.posit.co/blog/2026-04-06_whats-next-quarto-2/
[^posit-snowflake]: https://www.prweb.com/releases/posit-wins-two-snowflake-partner-of-the-year-awards-for-data-science-302788999.html
[^posit-conf-2026]: https://posit.co/blog/posit-conf-2026-agenda-breakdown
[^glimpse-sep-2026]: https://posit.co/blog/2026-09-glimpse
[^positron-license]: https://github.com/posit-dev/positron/blob/main/LICENSE.txt
