---
type: OSS Project
title: Appsmith
description: "Apache-2.0 open-source Retool alternative for internal tools; repositioned around AI agents (2025) and launched a separate AI website builder, Kite (Apr 2026), while a critical account-takeover CVE (Jan 2026) hit self-hosters — a low-code incumbent being squeezed by AI app generation."
resource: https://github.com/appsmithorg/appsmith
tags: [low-code, internal-tools, apache-2.0, open-core, ai-agents, vc-backed]
domain: web-platforms
license: Apache-2.0 (Community Edition) + commercial Business/Enterprise editions
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Appsmith, Inc.
backing_orgs: []
metrics:
  github_stars: { value: 40994, as_of: 2026-10-03 }
  latest_release: { value: "v2.4.3", as_of: 2026-09-30 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: down, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gh
    resource: https://github.com/appsmithorg/appsmith
    title: Appsmith GitHub repository
  - id: agents
    resource: https://community.appsmith.com/content/guide/appsmith-agents-are-here-building-your-first-agent-rag-and-function-calling
    title: "Appsmith Community: Appsmith Agents are here"
  - id: cve-info
    resource: https://www.infosecurity-magazine.com/news/appsmith-flaw-account-takeovers/
    title: "Infosecurity Magazine: Critical Appsmith flaw enables account takeovers"
  - id: cve-vendor
    resource: https://community.appsmith.com/content/blog/version-192-and-lower-important-security-notice-cve-2026-22794-recent-version-updates
    title: "Appsmith: Important security notice — CVE-2026-22794 (v1.92 and lower)"
  - id: kite
    resource: https://www.prweb.com/releases/ai-website-builder-kite-handles-seo-bug-fixes-and-maintenance-for-freelancers-and-small-businesses-302733539.html
    title: "PRWeb: AI website builder Kite (from Appsmith) handles SEO, bug fixes and maintenance (2026-04)"
  - id: inc42
    resource: https://inc42.com/buzz/exclusive-insight-partners-backed-appsmith-lays-off-25-of-its-workforce/
    title: "Inc42: Insight Partners-backed Appsmith lays off 25% of its workforce (Sept 2023)"
---
# Summary
Appsmith (~41K stars, Apache-2.0) was one of the 2020–22 COSS "Retool alternative" bets (≈$51M raised per aggregators). It cut 25% of staff back in Sept 2023 (outside this window)[^inc42], spent 2025 repositioning around **Appsmith Agents** (RAG + function calling)[^agents], and in **April 2026** launched **Kite**, a separate AI website builder for freelancers and small businesses — a sign the founders see growth outside classic internal tools[^kite]. In **January 2026, CVE-2026-22794** (CVSS 9.6, Origin-header password-reset poisoning in ≤1.92) exposed 1,600+ internet-facing instances to account takeover[^cve-info][^cve-vendor]. OSS releases continue (v2.4.3, 30 Sept 2026)[^gh]. Verdict: OSS stable; business struggling under AI app-generation pressure.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | Appsmith Agents introduced[^agents] | Business | ± |
| W9 | 2026-01 | CVE-2026-22794 critical account takeover; fixed in 1.93[^cve-info][^cve-vendor] | OSS | − |
| W6 | 2026-04-06 | Kite AI website builder launched[^kite] | Business | ± |
| W3 | 2026-09-30 | v2.4.3[^gh] | OSS | + |

# OSS successes
- Large community; permissive license retained[^gh].
# OSS failures / risks
- Critical auth CVE in a tool that holds database credentials[^cve-info].
# Business successes
- Attempts to find new AI-native products (Agents, Kite)[^agents][^kite].
# Business failures / risks
- Earlier layoffs[^inc42]; core market cannibalised by AI app builders and Retool's own AI pivot.

# By window
## W3
- No notable events found beyond releases.
## W6
- Kite launch[^kite].
## W9
- CVE-2026-22794[^cve-info].
## W12
- No notable events found.
## W24
- Agents repositioning[^agents].

# Lessons
- "Open-source alternative to X" low-code tools are directly exposed when AI agents can generate bespoke internal apps.

# Related
- [ToolJet](/projects/web-platforms/tooljet.md), [Budibase](/projects/web-platforms/budibase.md)
- [AI disruption of OSS monetization](/projects/coss-market/ai-disruption-of-oss-monetization.md)
- [Web platforms domain review](/domains/web-platforms.md)

[^gh]: https://github.com/appsmithorg/appsmith
[^agents]: https://community.appsmith.com/content/guide/appsmith-agents-are-here-building-your-first-agent-rag-and-function-calling
[^cve-info]: https://www.infosecurity-magazine.com/news/appsmith-flaw-account-takeovers/
[^cve-vendor]: https://community.appsmith.com/content/blog/version-192-and-lower-important-security-notice-cve-2026-22794-recent-version-updates
[^kite]: https://www.prweb.com/releases/ai-website-builder-kite-handles-seo-bug-fixes-and-maintenance-for-freelancers-and-small-businesses-302733539.html
[^inc42]: https://inc42.com/buzz/exclusive-insight-partners-backed-appsmith-lays-off-25-of-its-workforce/
