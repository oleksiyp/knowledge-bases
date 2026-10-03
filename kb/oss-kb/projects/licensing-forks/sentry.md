---
type: OSS Project
title: Sentry (and the Fair Source / FSL movement)
description: "Error-monitoring platform that authored the Functional Source License (FSL, Nov 2023) and launched the 'Fair Source' label (Aug 2024); Sentry itself is commercially healthy, but Fair Source adoption stalled at ~13 listed companies, with Liquibase (Sept 2025) its biggest and most controversial convert."
resource: https://github.com/getsentry/sentry
tags: [observability, fsl, fair-source, source-available, license-design]
domain: licensing-forks
license: FSL-1.1-Apache-2.0
license_history: ["BSD-3-Clause (to 2019)", "BUSL-1.1 (Nov 2019)", "FSL-1.1-Apache-2.0 (Nov 2023-)", "Fair Source label (Aug 2024-)"]
governance: single-vendor
steward: Functional Software, Inc. (Sentry)
backing_orgs: [organizations/sentry]
metrics:
  github_stars: { value: 45061, as_of: 2026-10-03 }
  fair_source_listed_companies: { value: 13, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sentry-gh
    resource: https://github.com/getsentry/sentry
    title: Sentry GitHub repository
  - id: fair-companies
    resource: https://fair.io/companies/
    title: "fair.io: Fair Source companies (adopter list with dates)"
  - id: fsl-site
    resource: https://fsl.software/
    title: Functional Source License
  - id: tc-fsl
    resource: https://techcrunch.com/2023/11/20/with-functional-source-license-sentry-wants-to-grant-developers-freedom-without-harmful-free-riding/
    title: "TechCrunch: With Functional Source License, Sentry wants to grant developers freedom 'without harmful free-riding' (2023-11-20)"
  - id: tc-fairsource
    resource: https://techcrunch.com/2024/09/22/some-startups-are-going-fair-source-to-avoid-the-pitfalls-of-open-source-licensing/
    title: "TechCrunch: Some startups are going 'fair source' (2024-09-22)"
  - id: sentry-ai-age
    resource: https://blog.sentry.io/fair-source-software-in-the-ai-age/
    title: "Sentry blog: Fair Source software in the AI age (2026-03-17)"
  - id: liquibase-fsl
    resource: https://www.liquibase.com/blog/liquibase-community-for-the-future-fsl
    title: "Liquibase: Community for the future (FSL)"
  - id: sentry-emerge
    resource: https://blog.sentry.io/emerge-tools-is-now-a-part-of-sentry/
    title: "Sentry blog: Emerge Tools is now a part of Sentry (May 2025)"
  - id: sentry-seer-jan
    resource: https://www.businesswire.com/news/home/20260127739891/en/Sentry-Adds-Local-Development-and-Code-Review-Debugging-to-Seer
    title: "Business Wire: Sentry adds local development and code review debugging to Seer (2026-01-27)"
  - id: sentry-seer-agent
    resource: https://sentry.io/about/press-releases/sentry-launches-seer-agent/
    title: "Sentry press release: Sentry launches Seer Agent (Apr 2026)"
  - id: sentry-series-e
    resource: https://sentry.io/about/press-releases/sentry-raises-90-million-in-series-e-funding-to-expand-and-drive-adoption-of-developer-first-application-monitoring/
    title: "Sentry press release: $90M Series E (2022)"
---

# Summary
Sentry is the main designer of the "fair source" approach. After using the BSL from 2019, it wrote the Functional Source License in Nov 2023. FSL is a non-compete license that converts to Apache-2.0 or MIT after two years.[^tc-fsl][^fsl-site] In August 2024 Sentry launched the "Fair Source" label at fair.io with GitButler, Keygen, PowerSync and CodeCrafters.[^fair-companies][^tc-fairsource] By October 2026 the adopter list had only 13 companies. The biggest addition was Liquibase (Sept 30, 2025), and no new listing has appeared since.[^fair-companies] Sentry argued in March 2026 that Fair Source holds up better than permissive licensing against AI clean-room rewrites, because its protection rests on contract terms (non-compete), not only on copyright.[^sentry-ai-age] Verdict: Sentry is stable, and the movement's growth has stalled.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2023-11-20 | Sentry introduces FSL[^tc-fsl] | OSS | ± |
| (pre) | 2024-08-06 | "Fair Source" launched with Sentry, GitButler, Keygen, PowerSync, CodeCrafters[^fair-companies] | OSS | ± |
| W24 | 2024-09-30 | Typebot joins Fair Source[^fair-companies] | OSS | + |
| W24 | 2025-01 → 2025-07 | Qlty, Pythagora, Ayon, Chartbrew, Tuist, Sourcebot join[^fair-companies] | OSS | + |
| W24 | 2025-09-30 | Liquibase relicenses to FSL and joins Fair Source[^fair-companies][^liquibase-fsl] | OSS | ± |
| W24 | 2025-05-06 | Sentry acquires Emerge Tools (mobile app size/perf tooling)[^sentry-emerge] | Business | + |
| W9 | 2026-01-27 | Seer AI debugging agent extended to local dev and code review, flat pricing[^sentry-seer-jan] | Business | + |
| W6 | 2026-04 | Seer Agent launched (natural-language production investigation)[^sentry-seer-agent] | Business | + |
| W9 | 2026-03-17 | Sentry: "Fair Source software in the AI age" (contract-law defence vs AI rewrites)[^sentry-ai-age] | OSS | ± |
| W3 | 2026-10 | Adopter list unchanged since Sept 2025 (13 companies)[^fair-companies] | OSS | − |

# OSS successes
- FSL is now a standard, reusable license with fixed two-year delayed open-sourcing, so it is easier to assess than one-off licenses.[^fsl-site]
- The code is publicly developed and self-hostable (45k GitHub stars).[^sentry-gh]

# OSS failures / risks
- The OSI does not consider it open source, and Liquibase's switch caused a backlash over misleading "open source" marketing (see [Liquibase](/projects/licensing-forks/liquibase.md)).
- Adoption is small: 13 listed companies, almost all small startups.[^fair-companies]

# Business successes
- Sentry has operated for years under source-available licensing without a meaningful hosted competitor appearing. This is the strongest evidence for the FSL model.[^tc-fairsource]
- Still acquiring: Emerge Tools (May 2025).[^sentry-emerge] AI debugging (Seer) became the main product push in 2026.[^sentry-seer-jan][^sentry-seer-agent]

# Business failures / risks
- No new primary funding disclosure since the $90M Series E in 2022, and no 2025–2026 revenue figure from Sentry itself.[^sentry-series-e]
- Growth now depends on AI products (Seer) whose code and pricing sit outside the FSL core.[^sentry-seer-jan]

# By window
## W3
- No new Fair Source adopters listed; no Sentry licensing changes found.[^fair-companies]
## W6
- Seer Agent launched (Apr 2026); no licensing changes.[^sentry-seer-agent]
## W9
- "Fair Source in the AI age" positioning post (Mar 2026).[^sentry-ai-age]
## W12
- No notable events found.
## W24
- Eight new Fair Source adopters, including Liquibase.[^fair-companies]
- Emerge Tools acquisition (May 2025).[^sentry-emerge]

# Lessons
- Licenses with a time-limited non-compete are acceptable to vendors but have not become a movement. Most companies that want protection use BSL, ELv2 or proprietary terms instead.
- In the AI-rewrite era, licenses based on contract terms may defend a business better than copyleft.

# Related
- [Liquibase](/projects/licensing-forks/liquibase.md)
- [Sentry org](/organizations/sentry.md)
- [Liquibase FSL relicense](/events/2025-09-liquibase-fsl-relicense.md)
- [chardet AI rewrite relicense](/events/2026-03-chardet-ai-rewrite-relicense.md)

[^sentry-gh]: Sentry GitHub — https://github.com/getsentry/sentry
[^fair-companies]: fair.io companies — https://fair.io/companies/
[^fsl-site]: FSL — https://fsl.software/
[^tc-fsl]: TechCrunch (2023) — https://techcrunch.com/2023/11/20/with-functional-source-license-sentry-wants-to-grant-developers-freedom-without-harmful-free-riding/
[^tc-fairsource]: TechCrunch (2024) — https://techcrunch.com/2024/09/22/some-startups-are-going-fair-source-to-avoid-the-pitfalls-of-open-source-licensing/
[^sentry-ai-age]: Sentry blog — https://blog.sentry.io/fair-source-software-in-the-ai-age/
[^sentry-emerge]: Sentry blog — https://blog.sentry.io/emerge-tools-is-now-a-part-of-sentry/
[^sentry-seer-jan]: Business Wire — https://www.businesswire.com/news/home/20260127739891/en/Sentry-Adds-Local-Development-and-Code-Review-Debugging-to-Seer
[^sentry-seer-agent]: Sentry press — https://sentry.io/about/press-releases/sentry-launches-seer-agent/
[^sentry-series-e]: Sentry press — https://sentry.io/about/press-releases/sentry-raises-90-million-in-series-e-funding-to-expand-and-drive-adoption-of-developer-first-application-monitoring/
[^liquibase-fsl]: Liquibase blog — https://www.liquibase.com/blog/liquibase-community-for-the-future-fsl
