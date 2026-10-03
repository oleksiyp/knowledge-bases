---
type: Category Guide
title: "Open-source infrastructure & security grants"
description: "Where open source maintainers and projects can get money (or free services) for maintenance, security and infrastructure work in late 2026 — public funders (Sovereign Tech Agency, NLnet/EU, Prototype Fund), security funds (Alpha-Omega, GitHub SOSF), corporate and dependency-based giving, language-foundation programs, and in-kind credits."
category: oss-infrastructure
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: sta-tech
    resource: https://www.sovereign.tech/tech
    title: "Sovereign Tech Agency: Technologies"
  - id: sta-resilience-relaunch
    resource: https://www.sovereign.tech/news/resilience-relaunch
    title: "Sovereign Tech Resilience relaunch (2026-09-28)"
  - id: nlnet-commons
    resource: https://nlnet.nl/commonsfund/
    title: "NLnet: NGI Zero Commons Fund"
  - id: nlnet-3grants
    resource: https://nlnet.nl/news/2026/20260131-restack.html
    title: "NLnet selected for three Horizon Europe grants"
  - id: nlnet-restack
    resource: https://nlnet.nl/restack/
    title: "NLnet: Restack"
  - id: nlnet-commons-guide
    resource: https://nlnet.nl/commonsfund/guideforapplicants/
    title: "NLnet: Guide for applicants"
  - id: nlnet-call-nov
    resource: https://nlnet.nl/news/2026/20260903-call.html
    title: "NLnet: Apply before November 3rd 2026"
  - id: openssf-12-5m
    resource: https://openssf.org/blog/2026/03/17/leading-tech-coalition-invests-12-5-million-through-openssf-and-alpha-omega-to-strengthen-open-source-security/
    title: "OpenSSF: $12.5M coalition (2026-03-17)"
  - id: ao-apply
    resource: https://alpha-omega.dev/grants/how-to-apply/
    title: "Alpha-Omega: How to apply"
  - id: gh-sosf-50
    resource: https://github.blog/open-source/maintainers/what-50-open-source-projects-taught-us-about-security-in-the-ai-era/
    title: "GitHub Blog: What 50 open source projects taught us (2026-08-13)"
  - id: sta-fund
    resource: https://www.sovereign.tech/programs/fund
    title: "Sovereign Tech Fund"
  - id: otf-wiki
    resource: https://en.wikipedia.org/wiki/Open_Technology_Fund
    title: "Wikipedia: Open Technology Fund"
  - id: moss
    resource: https://www.mozilla.org/en-US/moss/
    title: "Mozilla MOSS"
  - id: psf-2026-round
    resource: https://pyfound.blogspot.com/2026/07/announcing-2026-psf-grants-program.html
    title: "PSF: 2026 Grants Program funding round"
  - id: socket-openjs
    resource: https://socket.dev/blog/openjs-nodejs-security
    title: "Socket: OpenJS Security Stewardship Program"
  - id: floss-tranche2
    resource: https://floss.fund/blog/second-tranche-2025-anniversary/
    title: "FLOSS/fund second tranche"
  - id: sentry-750k-2025
    resource: https://blog.sentry.io/another-year-another-750-000-to-open-source-maintainers
    title: "Sentry: $750,000 to OSS maintainers"
  - id: gpb-label
    resource: https://opensource.googleblog.com/search/label/peer%20bonus
    title: "Google Open Source Blog: peer bonus"
  - id: rf-fellowships
    resource: https://rustfoundation.org/grants/fellowships/
    title: "Rust Foundation Fellowship & Community Grants"
  - id: eclipse-owasp
    resource: https://adtmag.com/articles/2026/07/31/eclipse-foundation-and-owasp-partner-to-help-open-source-projects-prepare-for-eu-cyber-rules.aspx
    title: "ADTmag: Eclipse Foundation and OWASP partner on CRA (2026-07-31)"
  - id: indeed-fund
    resource: https://medium.com/indeed-engineering/the-foss-contributor-fund-at-indeed-f164125c1ca0
    title: "Indeed Engineering: The FOSS Contributor Fund"
---

# Overview

**The 2026 landscape.** Money for open source *maintenance and security* — as opposed to new features or startups — comes from four kinds of sources:

1. **European public funders** are now the backbone. Germany's Sovereign Tech Agency has commissioned €41.1M of work on 118 technologies since 2022 and accepts applications from anywhere.[^sta-tech] The EU funds small grants through NLnet: the NGI Zero Commons Fund closed after its final call on 1 June 2026,[^nlnet-commons] and the Open Internet Stack "Restack" cascade fund (€5k–€50k grants, first deadline 3 Nov 2026) replaced it.[^nlnet-3grants][^nlnet-restack]
2. **Security coalitions.** In March 2026 Anthropic, AWS, GitHub, Google, Google DeepMind, Microsoft and OpenAI committed $12.5M to Alpha-Omega and OpenSSF. The money is aimed at the flood of AI-generated vulnerability reports landing on maintainers.[^openssf-12-5m] Alpha-Omega now takes open quarterly applications.[^ao-apply] GitHub's Secure Open Source Fund has paid $1.88M to 188 projects.[^gh-sosf-50]
3. **Corporate and dependency-based giving.** FLOSS/fund ($1M a year),[^floss-tranche2] Sentry ($750k for 2025, half of it through thanks.dev),[^sentry-750k-2025] the Open Source Pledge, and employee-voted FOSS funds at Microsoft, Bloomberg and Spotify. Most of these can't be applied to: what matters is being *payable*, through GitHub Sponsors, `funding.yml` or `funding.json`.
4. **Language and ecosystem foundations** pay maintainers as staff or fellows rather than giving grants: the Rust Maintainers Fund, the Django Fellowship, PHP Foundation contracts, the Gem Fellowship, and PSF Developers-in-Residence.

**What changed in 2025–26**
- The EU **Cyber Resilience Act** vulnerability-reporting obligations began on 11 Sept 2026. Sovereign Tech Resilience added a free CRA-compliance service run by EY, plus memory-safety, post-quantum and supply-chain services.[^sta-resilience-relaunch] NLnet launched CodeSupply for supply-chain metadata. The Eclipse Foundation and OWASP have CRA-readiness initiatives, but these are education and tooling, not grants.[^eclipse-owasp]
- **AI-driven vulnerability discovery** is swamping maintainers. The Node.js bug bounty paused in April 2026 when its funding ended, and OpenJS responded with a pooled Security Stewardship Program.[^socket-openjs]
- **Disruption to US public money.** The US government tried to terminate the Open Technology Fund's federal grant in March 2025. OTF is still litigating over appropriated funds.[^otf-wiki] For research software, CZI's EOSS program has ended (see the research-software category).
- **Foundations under strain.** The PSF paused its grants program in 2025 and reopened only a limited $90k events round in 2026.[^psf-2026-round]

# Best options by applicant profile

| Profile | Best programs |
|---|---|
| Solo maintainer of a widely used library, anywhere | [NLnet Restack](/programs/oss-infrastructure/nlnet-restack.md), [FLOSS/fund](/programs/oss-infrastructure/floss-fund.md), [GitHub SOSF](/programs/oss-infrastructure/github-secure-open-source-fund.md), [Sovereign Tech Fellowship](/programs/oss-infrastructure/sovereign-tech-fellowship.md) (when open), [HeroDevs Sustainability Fund](/programs/individuals/herodevs-sustainability-fund.md), [GitHub Sponsors](/programs/individuals/github-sponsors.md) + [thanks.dev](/programs/oss-infrastructure/thanks-dev.md) |
| Critical project / foundation needing ≥€50k of maintenance | [Sovereign Tech Fund](/programs/oss-infrastructure/sovereign-tech-fund.md), [Alpha-Omega](/programs/oss-infrastructure/alpha-omega-grants.md), [OTF FOSS Sustainability Fund](/programs/public-interest/otf-foss-sustainability-fund.md) (internet-freedom dependencies) |
| Project needing a security audit, CRA readiness, memory-safety migration | [Sovereign Tech Resilience](/programs/oss-infrastructure/sovereign-tech-resilience.md), [GitHub SOSF](/programs/oss-infrastructure/github-secure-open-source-fund.md), [Alpha-Omega](/programs/oss-infrastructure/alpha-omega-grants.md) |
| Supply-chain / SBOM / package-registry tooling | [NLnet CodeSupply](/programs/oss-infrastructure/nlnet-codesupply.md), [Alpha-Omega](/programs/oss-infrastructure/alpha-omega-grants.md), [Sovereign Tech Resilience](/programs/oss-infrastructure/sovereign-tech-resilience.md) |
| Germany-resident freelancer or small team building new OSS | [Prototype Fund](/programs/oss-infrastructure/prototype-fund.md), [NLnet Restack](/programs/oss-infrastructure/nlnet-restack.md) |
| EU company or consortium | [Horizon Europe Open Internet Stack](/programs/oss-infrastructure/horizon-europe-open-internet-stack.md) |
| Rust / Python / Django / PHP / Ruby / Node.js core maintainer | [Rust Maintainers in Residence](/programs/individuals/rust-maintainers-in-residence.md), [PSF Developers-in-Residence](/programs/individuals/psf-developers-in-residence.md), [Django Fellowship](/programs/individuals/django-fellowship.md), [PHP Foundation](/programs/oss-infrastructure/php-foundation-developer-program.md), [Gem Fellowship](/programs/oss-infrastructure/gem-fellowship.md), [OpenJS Security Stewardship](/programs/oss-infrastructure/openjs-security-stewardship.md) |
| Projects with hosting, CDN or monitoring costs | [Cloudflare Project Alexandria](/programs/oss-infrastructure/cloudflare-project-alexandria.md), [Fastly Fast Forward](/programs/oss-infrastructure/fastly-fast-forward.md), [Datadog OSS](/programs/oss-infrastructure/datadog-oss-program.md); AI tooling: [Claude for Open Source](/programs/ai/anthropic-claude-for-open-source.md), [Codex for Open Source](/programs/ai/openai-codex-for-open-source.md) |
| Newcomers wanting paid OSS work | [Google Summer of Code](/programs/individuals/google-summer-of-code.md), [LFX Mentorship](/programs/individuals/lfx-mentorship.md), [Outreachy](/programs/individuals/outreachy.md) |
| Research / scientific OSS | See research-software programs, e.g. [NSF Pathways to Enable Secure Open-Source Ecosystems](/programs/research-software/nsf-pesose.md); CZI EOSS has ended ([CZI EOSS](/programs/research-software/czi-eoss.md)) |
| Bitcoin / web3 infrastructure | [OpenSats](/funders/opensats.md), [Drips](/programs/web3/drips.md) and the web3 category |

# Comparison

| Program | Funder | Who | Size | Status | Next deadline | Effort |
|---|---|---|---|---|---|---|
| [Sovereign Tech Fund](/programs/oss-infrastructure/sovereign-tech-fund.md) | [STA](/funders/sovereign-tech-agency.md) | Critical OSS worldwide | >€50k | Rolling | — | High |
| [Sovereign Tech Fellowship](/programs/oss-infrastructure/sovereign-tech-fellowship.md) | [STA](/funders/sovereign-tech-agency.md) | Maintainers (freelance worldwide; employees in DE) | €64–82k/yr FTE or hourly | Closed between rounds | TBA | Medium |
| [Sovereign Tech Resilience](/programs/oss-infrastructure/sovereign-tech-resilience.md) | [STA](/funders/sovereign-tech-agency.md) | Critical FOSS | In-kind services | Rolling | — | Low |
| [Sovereign Tech Standards](/programs/oss-infrastructure/sovereign-tech-standards.md) | [STA](/funders/sovereign-tech-agency.md) | Maintainers in IETF/W3C/ISO | €4.8–5.2k/month | Pilot closed | TBA | Medium |
| [NLnet Restack](/programs/oss-infrastructure/nlnet-restack.md) | [NLnet](/funders/nlnet.md) / [EC](/funders/european-commission.md) | Anyone, worldwide | €5–50k | Open | 2026-11-03 | Low |
| [NLnet CodeSupply](/programs/oss-infrastructure/nlnet-codesupply.md) | [NLnet](/funders/nlnet.md) | Anyone, worldwide | €5–50k | Open | 2026-11-03 | Low |
| [NGI Zero Commons](/programs/oss-infrastructure/nlnet-ngi-zero-commons.md) | [NLnet](/funders/nlnet.md) | — | €5–50k | Discontinued | — | — |
| [Horizon Europe OIS](/programs/oss-infrastructure/horizon-europe-open-internet-stack.md) | [EC](/funders/european-commission.md) | EU consortia | €7–10.25M | Closed between rounds | TBA (2027 WP) | High |
| [Prototype Fund](/programs/oss-infrastructure/prototype-fund.md) | [OKF DE](/funders/open-knowledge-foundation-deutschland.md) | DE-resident individuals/teams | ≤€47.5k/person, ≤€95k/team | Open | 2026-11-30 | Medium |
| [Alpha-Omega](/programs/oss-infrastructure/alpha-omega-grants.md) | [Linux Foundation](/funders/linux-foundation.md) | Projects, foundations, registries | $50–100k typical | Open (Q4 window) | 2026-10-31 | Medium |
| [GitHub SOSF](/programs/oss-infrastructure/github-secure-open-source-fund.md) | [GitHub](/funders/github.md) | Maintainers in Sponsors regions | $10k | Rolling | Next session TBA | Low |
| [OTF FOSS Sustainability](/programs/public-interest/otf-foss-sustainability-fund.md) | OTF | Internet-freedom dependencies | $7k/mo–$400k | Closed between rounds | TBA | High |
| [FLOSS/fund](/programs/oss-infrastructure/floss-fund.md) | [Zerodha](/funders/zerodha.md) | Any FOSS | $10–100k | Rolling (quarterly) | End of Dec review | Low |
| [OpenJS Security Stewardship](/programs/oss-infrastructure/openjs-security-stewardship.md) | [OpenJS](/funders/openjs-foundation.md) | Node.js maintainers, researchers | n/p | Open (invite) | — | Low |
| [Gem Fellowship](/programs/oss-infrastructure/gem-fellowship.md) | [gem.coop](/funders/gem-coop.md) | Ruby devs | $2.5–25k | Upcoming | 2026-12-31 | Low |
| [PHP Foundation contracts](/programs/oss-infrastructure/php-foundation-developer-program.md) | [PHP Foundation](/funders/php-foundation.md) | php-src devs | n/p | Closed between rounds | ~autumn (TBA) | Medium |
| [PSF Grants](/programs/oss-infrastructure/psf-grants-program.md) | [PSF](/funders/python-software-foundation.md) | Python events (not dev) | ≤$2k | Closed between rounds | TBA | Low |
| [Sentry funding](/programs/oss-infrastructure/sentry-open-source-funding.md) | [Sentry](/funders/sentry.md) | Sentry deps | $750k/yr total | No application | — | Low |
| [Open Source Pledge](/programs/oss-infrastructure/open-source-pledge.md) | [Sentry](/funders/sentry.md) & members | Chosen by members | ≥$2k/dev/yr | No application | — | Low |
| [thanks.dev](/programs/oss-infrastructure/thanks-dev.md) | donors | Dependencies | Varies | Rolling | — | Low |
| [Ecosystem Funds](/programs/oss-infrastructure/ecosystem-funds.md) | [OSC](/funders/open-source-collective.md) | Critical packages | Varies | Monthly | — | Low |
| [Microsoft FOSS Fund](/programs/oss-infrastructure/microsoft-foss-fund.md) | [Microsoft](/funders/microsoft.md) | Nominated | ≤$12.5k/quarter | Nomination | — | Low |
| [Spotify FOSS Fund](/programs/oss-infrastructure/spotify-foss-fund.md) | [Spotify](/funders/spotify.md) | Selected | €15–30k | Nomination | — | Low |
| [Bloomberg FOSS Fund](/programs/oss-infrastructure/bloomberg-foss-fund.md) | [Bloomberg](/funders/bloomberg.md) | Nominated | $10k | Nomination | — | Low |
| [Google Peer Bonus](/programs/oss-infrastructure/google-open-source-peer-bonus.md) | [Google](/funders/google.md) | Nominated people | small | Paused/unverified | — | Low |
| [Cloudflare Alexandria](/programs/oss-infrastructure/cloudflare-project-alexandria.md) | [Cloudflare](/funders/cloudflare.md) | Non-profit OSS | Credits | Rolling | — | Low |
| [Fastly Fast Forward](/programs/oss-infrastructure/fastly-fast-forward.md) | [Fastly](/funders/fastly.md) | OSS | Credits | Rolling | — | Low |
| [Datadog OSS](/programs/oss-infrastructure/datadog-oss-program.md) | [Datadog](/funders/datadog.md) | Mature OSS | Credits | Rolling | — | Low |
| [Tidelift](/programs/oss-infrastructure/tidelift.md) | [Sonar](/funders/sonar-tidelift.md) | Package maintainers | Usage-based | Rolling | — | Low |
| [Mozilla MOSS](/programs/oss-infrastructure/mozilla-moss.md) | [Mozilla](/funders/mozilla-foundation.md) | — | — | Discontinued | — | — |

# Upcoming deadlines

| Deadline | Call |
|---|---|
| 2026-10-31 | [Alpha-Omega Q4 2026 window](/calls/2026-10-31-alpha-omega-q4-2026.md) |
| 2026-11-03 12:00 CET | [NLnet Restack](/calls/2026-11-03-nlnet-restack.md) |
| 2026-11-03 12:00 CET | [NLnet CodeSupply](/calls/2026-11-03-nlnet-codesupply.md) |
| 2026-11-30 | [Prototype Fund cohort 03](/calls/2026-11-30-prototype-fund-cohort-03.md) |
| 2026-12-01 → 12-31 | [Gem Fellowship 2027](/calls/2026-12-31-gem-fellowship-2027.md) |
| End of Dec 2026 | FLOSS/fund quarterly review ([program](/programs/oss-infrastructure/floss-fund.md)) |
| ~Jan 2027 | Next NLnet deadline (two-monthly, odd months; exact date unverified)[^nlnet-call-nov] |
| 2027-01-31 | [Alpha-Omega Q1 2027 window](/calls/2027-01-31-alpha-omega-q1-2027.md) |

Rolling (apply any time): Sovereign Tech Fund, Sovereign Tech Resilience, GitHub SOSF, FLOSS/fund, Cloudflare, Fastly, Datadog.

# Tips

- **NLnet:** budget your proposal as concrete tasks with hours and rates. Reviewers score technical excellence (30%), relevance and impact (40%) and value for money (30%), and look closely at your rates. First proposals are capped at €50k.[^nlnet-commons-guide]
- **NLnet AI rules:** generative-AI rules are being tightened. Check the new policy before submitting work that leans on LLM output.[^nlnet-call-nov]
- **Sovereign Tech Fund:** write to its criteria (prevalence, relevance, vulnerability, public interest), with evidence such as dependents and maintainer counts. Expect about six months from application to contract.[^sta-fund]
- **Alpha-Omega:** submit only in the first month of a quarter and only through the form. Explain the security impact on the wider ecosystem.[^ao-apply]
- **Be payable:** enable GitHub Sponsors and publish `funding.yml` and FLOSS/fund's `funding.json`. Sentry's thanks.dev payouts, ecosystem funds and corporate FOSS funds can only reach projects that have a payout channel.[^sentry-750k-2025][^floss-tranche2]
- **Stack services with cash:** a free STA Resilience audit or CRA assessment works alongside an NLnet grant or a FLOSS/fund grant.[^sta-resilience-relaunch]

# Discontinued or paused programs

- **NLnet NGI Zero Commons Fund**: the final call closed 1 June 2026. Restack and CodeSupply replace it.[^nlnet-commons]
- **Mozilla MOSS:** on indefinite hiatus since Mozilla's 2020 restructuring.[^moss]
- **PSF Grants Program:** paused in Aug 2025. Only a limited event round ran in 2026, and it has never funded development work.[^psf-2026-round]
- **Rust Foundation Fellowship and Community Grants:** the Fellowship is closed and the Community Grants program is being redesigned. The Maintainers Fund now pays Rust Project members.[^rf-fellowships]
- **Google Open Source Peer Bonus:** no public winners since 2024; current status unverified.[^gpb-label]
- **Node.js bug bounty:** paused in April 2026 when external funding ended. It is being rebuilt through OpenJS Security Stewardship.[^socket-openjs]
- **Open Technology Fund:** its federal funding has been disputed since March 2025. Some OTF funds remain open; see the public-interest category.[^otf-wiki]
- **Indeed FOSS Contributor Fund:** started in 2019 with $10k employee-voted donations. No 2025–26 activity could be verified.[^indeed-fund]
- **Sovereign Tech Challenge:** ended in 2023.
- **Eclipse Foundation and Apache Software Foundation:** neither runs an open grant program for outside projects. Both receive Alpha-Omega and STA funding instead.

[^sta-tech]: Sovereign Tech Agency, https://www.sovereign.tech/tech
[^sta-resilience-relaunch]: STA news 2026-09-28, https://www.sovereign.tech/news/resilience-relaunch
[^nlnet-commons]: NLnet, https://nlnet.nl/commonsfund/
[^nlnet-3grants]: NLnet news 2026-01-31, https://nlnet.nl/news/2026/20260131-restack.html
[^nlnet-restack]: NLnet Restack, https://nlnet.nl/restack/
[^nlnet-commons-guide]: NLnet guide, https://nlnet.nl/commonsfund/guideforapplicants/
[^nlnet-call-nov]: NLnet news 2026-09-03, https://nlnet.nl/news/2026/20260903-call.html
[^openssf-12-5m]: OpenSSF blog 2026-03-17, https://openssf.org/blog/2026/03/17/leading-tech-coalition-invests-12-5-million-through-openssf-and-alpha-omega-to-strengthen-open-source-security/
[^ao-apply]: Alpha-Omega, https://alpha-omega.dev/grants/how-to-apply/
[^gh-sosf-50]: GitHub Blog 2026-08-13, https://github.blog/open-source/maintainers/what-50-open-source-projects-taught-us-about-security-in-the-ai-era/
[^sta-fund]: STA, https://www.sovereign.tech/programs/fund
[^otf-wiki]: Wikipedia, https://en.wikipedia.org/wiki/Open_Technology_Fund
[^moss]: Mozilla, https://www.mozilla.org/en-US/moss/
[^psf-2026-round]: PSF News, https://pyfound.blogspot.com/2026/07/announcing-2026-psf-grants-program.html
[^socket-openjs]: Socket, https://socket.dev/blog/openjs-nodejs-security
[^floss-tranche2]: FLOSS/fund, https://floss.fund/blog/second-tranche-2025-anniversary/
[^sentry-750k-2025]: Sentry, https://blog.sentry.io/another-year-another-750-000-to-open-source-maintainers
[^gpb-label]: Google Open Source Blog, https://opensource.googleblog.com/search/label/peer%20bonus
[^rf-fellowships]: Rust Foundation, https://rustfoundation.org/grants/fellowships/
[^eclipse-owasp]: ADTmag 2026-07-31, https://adtmag.com/articles/2026/07/31/eclipse-foundation-and-owasp-partner-to-help-open-source-projects-prepare-for-eu-cyber-rules.aspx
[^indeed-fund]: Indeed Engineering, https://medium.com/indeed-engineering/the-foss-contributor-fund-at-indeed-f164125c1ca0
