---
type: Domain Review
title: "OSS Security & Sustainability: 2-year review"
description: "Supply-chain attacks, maintainer burnout, funding, foundations, regulation and AI's impact on open source maintainers, Oct 2024 - Oct 2026: worms and CI-trust attacks dominate, AI floods maintainers with findings, and money finally starts flowing — mostly through foundations and from AI labs."
domain: security-sustainability
tags: [supply-chain, npm, pypi, maintainers, funding, cra, cve, ai-slop, foundations, appsec]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: unit42-landscape
    resource: https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/
    title: "Unit 42: The npm Threat Landscape (updated July 15, 2026)"
  - id: gh-npm-plan
    resource: https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/
    title: "GitHub: Our plan for a more secure npm supply chain"
  - id: infoq-npm12
    resource: https://www.infoq.com/news/2026/08/npm-12-released/
    title: "InfoQ: npm 12 released"
  - id: datadog-sh2
    resource: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
    title: "Datadog: Shai-Hulud 2.0"
  - id: tanstack-pm
    resource: https://tanstack.com/blog/npm-supply-chain-compromise-postmortem
    title: "TanStack postmortem"
  - id: sb-keyv
    resource: https://securityboulevard.com/2026/08/mini-shai-hulud-npm-attack-more-than-2200-components-impacted/
    title: "Security Boulevard: keyv wave"
  - id: snyk-litellm
    resource: https://snyk.io/blog/poisoned-security-scanner-backdooring-litellm/
    title: "Snyk: Trivy to LiteLLM"
  - id: huntress-axios
    resource: https://www.huntress.com/blog/supply-chain-compromise-axios-npm-package
    title: "Huntress: axios compromise"
  - id: aikido-chalk
    resource: https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised
    title: "Aikido: chalk/debug compromise"
  - id: record-ext
    resource: https://therecord.media/cisa-extends-cve-program-contract-with-mitre
    title: "The Record: CVE contract extension"
  - id: cso-cve
    resource: https://www.csoonline.com/article/4142600/cve-program-funding-secured-easing-fears-of-repeat-crisis.html
    title: "CSO: CVE funding secured"
  - id: nist-nvd
    resource: https://www.nist.gov/itl/nvd
    title: "NIST NVD updates"
  - id: ec-cra
    resource: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
    title: "European Commission: CRA reporting"
  - id: curl-jan
    resource: https://daniel.haxx.se/blog/2026/01/
    title: "daniel.haxx.se Jan 2026: end of curl bug bounty"
  - id: curl-bliss
    resource: https://daniel.haxx.se/blog/2026/08/03/what-the-bliss-taught-us/
    title: "daniel.haxx.se: What the bliss taught us"
  - id: openjs-cna
    resource: https://openjsf.org/blog/the-openjs-foundation-cna-is-taking-a-coordinated-break
    title: "OpenJS CNA pause"
  - id: openjs-ssp
    resource: https://openjsf.org/blog/openjs-foundation-launches-the-security-stewardshi
    title: "OpenJS Security Stewardship Program"
  - id: anthropic-glasswing
    resource: https://www.anthropic.com/glasswing
    title: "Anthropic: Project Glasswing"
  - id: vulncheck-glasswing
    resource: https://www.vulncheck.com/blog/anthropic-glasswing-receipts
    title: "VulnCheck: The Anthropic Glasswing receipts are starting to trickle in (2026-09-08)"
  - id: lf-12m
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-12.5-million-in-grant-funding-from-leading-organizations-to-advance-open-source-security
    title: "LF: $12.5M security grants"
  - id: lf-akrites
    resource: https://www.linuxfoundation.org/press/linux-foundation-and-industry-leaders-launch-akrites-to-defend-critical-open-source-software-against-ai-enabled-cyber-threats
    title: "LF: Akrites"
  - id: openssf-registries
    resource: https://openssf.org/blog/2026/09/16/were-in-enterprise-commitment-to-sustainable-package-registries/
    title: "OpenSSF: registry sustainability commitment"
  - id: openssf-nhs
    resource: https://openssf.org/blog/2026/09/10/open-by-default-after-ai-the-gds-guidance-and-the-enforcement-question/
    title: "OpenSSF: open by default after AI"
  - id: lwn-libxml2
    resource: https://lwn.net/Articles/1025971/
    title: "LWN: libxml2 security policy"
  - id: k8s-retire
    resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
    title: "Kubernetes: ingress-nginx retirement"
  - id: lwn-bcachefs
    resource: https://lwn.net/Articles/1040120/
    title: "LWN: Bcachefs removed from the mainline kernel (2025-09-30)"
  - id: lwn-rust-end
    resource: https://lwn.net/Articles/1049831/
    title: "LWN: The (successful) end of the kernel Rust experiment (2025-12-10)"
  - id: asahi-torch
    resource: https://asahilinux.org/2025/02/passing-the-torch/
    title: "Asahi Linux: Passing the torch (2025-02-13)"
  - id: psf-nsf
    resource: https://pyfound.blogspot.com/2025/10/NSF-funding-statement.html
    title: "PSF: The PSF has withdrawn a $1.5 million proposal to US government grant program (2025-10-27)"
  - id: hns-anthropic-psf
    resource: https://www.helpnetsecurity.com/2026/01/14/anthropic-python-software-foundation-1-5-million-funding/
    title: "Help Net Security: Anthropic backs PSF security work with $1.5 million (2026-01-14)"
  - id: cleary-wiz
    resource: https://www.clearygottlieb.com/news-and-insights/news-listing/google-completes-32-billion-acquisition-of-wiz
    title: "Cleary Gottlieb: Google completes $32 billion acquisition of Wiz (Mar 2026)"
  - id: techeu-aikido
    resource: https://tech.eu/2026/01/14/60m-series-b-propels-aikido-into-the-global-unicorn-ranks/
    title: "Tech.eu: $60M Series B propels Aikido into the global unicorn ranks (2026-01-14)"
  - id: calcalist-koi
    resource: https://www.calcalistech.com/ctechnews/article/nu6ccmpyw
    title: "Calcalist: Palo Alto Networks completes $400 million acquisition of Koi (Apr 2026)"
  - id: chainguard-d
    resource: https://www.chainguard.dev/unchained/announcing-chainguards-series-d-building-the-safe-source-for-all-open-source
    title: "Chainguard: Announcing Chainguard's Series D ($356M at $3.5B, 2025-04-23)"
  - id: geekwire-chainguard-280
    resource: https://www.geekwire.com/2025/chainguard-lands-280m-to-help-scale-cybersecurity-startups-open-source-software-protections/
    title: "GeekWire: Chainguard lands $280M (General Catalyst CVF, Oct 2025)"
  - id: socket-c
    resource: https://socket.dev/blog/socket-raises-60m-series-c-press-release
    title: "Socket: Socket raises $60M Series C at a $1B valuation (2026-05-20)"
  - id: secweek-semgrep
    resource: https://www.securityweek.com/semgrep-raises-100m-for-ai-powered-code-security-platform/
    title: "SecurityWeek: Semgrep raises $100M (Feb 2025)"
  - id: techeu-snyk
    resource: https://tech.eu/2026/10/01/snyk-laid-off-over-200-employees-revenues-top-300m/
    title: "Tech.eu: Snyk laid off over 200 employees, revenues top $300M (2026-10-01)"
  - id: ffmpeg-x
    resource: https://x.com/FFmpeg/status/1984178359354483058
    title: "FFmpeg on X: trillion-dollar corporations running AI on hobby code (2025-10-31)"
  - id: koi-glassworm
    resource: https://www.koi.ai/incident/live-updates-glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-and-vscode-marketplaces
    title: "Koi Security: GlassWorm first self-propagating worm (Oct 2025)"
  - id: eclipse-managed
    resource: https://newsroom.eclipse.org/news/announcements/eclipse-foundation-launches-open-vsx-managed-registry-0
    title: "Eclipse Foundation: Open VSX Managed Registry launch (2026-04-21)"
  - id: phoronix-libxml2
    resource: https://www.phoronix.com/news/Libxml2-No-Maintainer
    title: "Phoronix: libxml2 maintainer stepping down (2025-09-15)"
  - id: hackaday-libxml2
    resource: https://hackaday.com/2025/12/23/libxml2-narrowly-avoids-becoming-unmaintained/
    title: "Hackaday: Libxml2 narrowly avoids becoming unmaintained (2025-12-23)"
  - id: mychesco-asf
    resource: https://www.mychesco.com/a/news/regional/apache-revenue-jumps-as-ai-security-spending-expands/
    title: "MyChesCo: Apache revenue jumps as AI, security spending expands (Sep 2026; ASF FY2026 financials)"
  - id: sta-resilience
    resource: https://www.sovereign.tech/news/resilience-relaunch
    title: "Sovereign Tech Agency: Resilience relaunch (2026-09-28)"
  - id: gh-sosf-s4
    resource: https://github.blog/open-source/maintainers/what-50-open-source-projects-taught-us-about-security-in-the-ai-era/
    title: "GitHub Blog: Secure Open Source Fund session 4 results (2026-08-13)"
  - id: reg-bcachefs-1386
    resource: https://www.theregister.com/software/2026/06/19/bcachefs-exits-experimental-status-in-new-performance-release/5258801
    title: "The Register: Bcachefs exits experimental status (2026-06-19)"
  - id: asahi-m3
    resource: https://asahilinux.org/2026/09/m2-episode-1/
    title: "Asahi Linux: Asahi Linux on M3 (Sep 2026)"
  - id: tc-snyk-300
    resource: https://techcrunch.com/2024/12/06/snyk-hits-300m-arr-but-isnt-rushing-to-go-public/
    title: "TechCrunch: Snyk $300M ARR"
  - id: tc-endor
    resource: https://techcrunch.com/2025/04/23/endor-labs-which-builds-tools-to-scan-ai-generated-code-for-vulnerabilities-lands-93m/
    title: "TechCrunch: Endor Labs $93M"
  - id: devault
    resource: https://drewdevault.com/blog/Stop-externalizing-your-costs-on-me/
    title: "Drew DeVault on AI scrapers"
  - id: wiki-sta
    resource: https://en.wikipedia.org/wiki/Sovereign_Tech_Agency
    title: "Wikipedia: Sovereign Tech Agency"
  - id: pledge
    resource: https://opensourcepledge.com/
    title: "Open Source Pledge"
  - id: pypi-blog
    resource: https://blog.pypi.org/
    title: PyPI blog
  - id: csa-mini
    resource: https://labs.cloudsecurityalliance.org/research/csa-research-note-mini-shai-hulud-npm-supply-chain-20260516/
    title: "CSA: Mini Shai-Hulud"
---
# Executive summary
- **Supply-chain attacks became industrial.** Credential phishing (chalk/debug, Sep 2025, 2B+ weekly downloads)[^aikido-chalk] gave way to self-replicating worms: Shai-Hulud (Sep 2025), Shai-Hulud 2.0 (796 packages, Nov 2025)[^datadog-sh2], and TeamPCP's "Mini Shai-Hulud" (Apr–Aug 2026), which hit SAP, TanStack, @antv, OpenAI and Mistral and peaked with the keyv wave (2,225 component versions).[^unit42-landscape][^csa-mini][^sb-keyv] North Korean actors hit axios and Mastra.[^huntress-axios]
- **Attackers moved from stolen tokens to stolen CI trust.** `pull_request_target`, cache poisoning and OIDC-token extraction produced malware with *valid provenance* (TanStack, keyv), and a compromised security scanner (Trivy) was the way into LiteLLM.[^tanstack-pm][^snyk-litellm]
- **Platforms finally changed their defaults.** npm revoked classic tokens (Dec 2025) and shipped npm 12 with install scripts off (Jul 2026).[^gh-npm-plan][^infoq-npm12] PyPI rejects uploads to releases older than 14 days.[^pypi-blog]
- **AI changed the maintainer burden twice.** First came AI "slop" reports: curl's confirmed-report rate fell below 5% and its bounty ended in Jan 2026.[^curl-jan] Then came real AI discovery at scale. FFmpeg's "CVE slop" protest against Google's Big Sleep (Oct 2025) was the first flashpoint.[^ffmpeg-x] By 2026-09-08, Anthropic's Glasswing ledger listed 26,153 findings, but only 10.5% had reached maintainers and 0.8% were fixed.[^vulncheck-glasswing] Volunteer CNAs are pausing (curl in July, OpenJS in Sep–Oct 2026).[^curl-bliss][^openjs-cna]
- **Public vulnerability infrastructure wobbled.** The CVE program nearly lapsed (Apr 2025) before being secured (Jan 2026).[^record-ext][^cso-cve] NVD gave up on universal enrichment (Apr 2026).[^nist-nvd]
- **Money flowed, mostly through foundations and from AI labs.** $12.5M in LF grants (Mar 2026)[^lf-12m], $100M in credits plus $4M in donations from Glasswing[^anthropic-glasswing], Akrites (Jun 2026)[^lf-akrites], a pooled fund at OpenJS[^openjs-ssp] and an enterprise registry-funding pledge.[^openssf-registries]
- **Regulation arrived on schedule.** CRA manufacturer reporting went live on 2026-09-11. Steward obligations follow in Dec 2027.[^ec-cra]
- **Security-vendor business boomed and consolidated.** Google–Wiz ($32B, closed 2026-03-11)[^cleary-wiz] and Palo Alto–Koi ($400M, closed April 2026).[^calcalist-koi] Chainguard raised a $356M Series D at $3.5B (Apr 2025) plus $280M of growth financing (Oct 2025).[^chainguard-d][^geekwire-chainguard-280] Semgrep raised $100M (Feb 2025)[^secweek-semgrep], Endor $93M (Apr 2025)[^tc-endor], Aikido a $60M Series B at $1B (Jan 2026)[^techeu-aikido] and Socket a $60M Series C at $1B (May 2026).[^socket-c] The incumbent Snyk ($309M revenue in 2025, net loss of $189M) cut about 203 jobs, roughly 20%, in June 2026.[^techeu-snyk][^tc-snyk-300]

# Scorecard
| Project | OSS verdict | Business verdict | 2y trajectory | One-line why |
|---|---|---|---|---|
| [npm registry](/projects/security-sustainability/npm-registry.md) | contested | n/a | ↓ then ↑ | Ground zero for worms. Biggest default-security overhaul ever (npm 12) |
| [PyPI](/projects/security-sustainability/pypi.md) | stable | n/a | → | LiteLLM hit, but faster response and stricter immutability rules |
| [Open VSX](/projects/security-sustainability/open-vsx.md) | contested | growing | ↑ usage / ↓ trust | Critical for AI IDEs (300M+ downloads/mo), recurring GlassWorm since 2025-10, paid Managed Registry (2026-04) |
| [Trivy](/projects/security-sustainability/trivy.md) | contested | struggling | ↓ | Security scanner turned attack vector (TeamPCP) |
| [CVE Program](/projects/security-sustainability/cve-program.md) | stable | n/a | ↓ then ↑ | Near-lapse in 2025, funding protected in 2026, CNAs overloaded |
| [NVD](/projects/security-sustainability/nvd.md) | declining | n/a | ↓ | Abandoned universal enrichment |
| [EU CRA](/projects/security-sustainability/eu-cyber-resilience-act.md) | stable | n/a | ↑ | Reporting live on 2026-09-11. Steward model protects volunteers |
| [OpenSSF](/projects/security-sustainability/openssf.md) | growing | growing | ↑ | Became the AI-era coordination hub |
| [Alpha-Omega](/projects/security-sustainability/alpha-omega.md) | growing | growing | ↑ | Channel for AI-lab money to maintainers |
| [Sovereign Tech Agency](/projects/security-sustainability/sovereign-tech-agency.md) | thriving | stable | ↑ | Best public-funding model. CRA-focused relaunch |
| [GitHub Secure OSS Fund](/projects/security-sustainability/github-secure-open-source-fund.md) | growing | n/a | ↑ | $10k plus education; 188 projects, $1.88M by Aug 2026 |
| [Open Source Pledge](/projects/security-sustainability/open-source-pledge.md) | growing | n/a | ↑ | $7.4M pledged. No big tech |
| [curl](/projects/security-sustainability/curl.md) | stable | n/a | → | Ended bounty, paused intake, still shipping |
| [libxml2](/projects/security-sustainability/libxml2.md) | contested | n/a | ↓ then → | Dropped embargoes, maintainer quit (2025-09), rescued by new maintainers (2025-12) |
| [XZ Utils](/projects/security-sustainability/xz-utils.md) | stable | n/a | → | Reference case. Backdoored images lingered |
| [ingress-nginx](/projects/security-sustainability/ingress-nginx.md) | dead | n/a | ↓ | Retired for lack of maintainers |
| [bcachefs](/projects/security-sustainability/bcachefs.md) | declining | n/a | ↓ | Expelled from mainline over governance; lives on via DKMS |
| [Rust for Linux](/projects/security-sustainability/rust-for-linux.md) | growing | n/a | ↑ | No longer experimental despite resignations |
| [Anubis](/projects/security-sustainability/anubis.md) | thriving | growing | ↑ | Breakout defense against AI scrapers |
| [Opengrep](/projects/security-sustainability/opengrep.md) | growing | n/a | ↑ | Vendor-consortium fork of Semgrep CE |

# By window
## W3 (2026-07-03 → 2026-10-03)
**Successes**
- npm 12 shipped with install scripts off by default (2026-07-08).[^infoq-npm12] [event](/events/2026-07-npm-12-install-scripts-off.md)
- PyPI added the 14-day upload cutoff (07-22).[^pypi-blog]
- curl's July intake pause worked.[^curl-bliss]
- OpenJS Security Stewardship Program (09-25)[^openjs-ssp] and the enterprise registry funding commitment (09-16; no dollar amounts).[^openssf-registries]
- GitHub Secure Open Source Fund session 4 results (08-13): 188 projects and $1.88M cumulative.[^gh-sosf-s4]
- Sovereign Tech Agency relaunched Resilience with CRA, PQC and memory-safety services (09-28).[^sta-resilience]
- ASF FY2026 (to April 30): revenue $3.87M (+86%), donations $1.75M including Anthropic's $1.5M, and a return to surplus (reported in September).[^mychesco-asf]
- Asahi Linux shipped M3 support (09-06).[^asahi-m3]
- CRA reporting and the ENISA SRP went live (09-11).[^ec-cra] [event](/events/2026-09-cra-reporting-obligations-start.md)

**Failures**
- keyv/cacheable wave (08-04): 2,225 component versions, valid provenance.[^sb-keyv] [event](/events/2026-08-keyv-shai-hulud-wave.md)
- AsyncAPI "Miasma" variant (07-14).[^unit42-landscape]
- OpenJS CNA paused over AI-report overload (09-17).[^openjs-cna] [event](/events/2026-09-openjs-cna-pause-security-stewardship.md)
- Glasswing remediation lag: of 26,153 findings, 10.5% had been disclosed to maintainers and 0.8% fixed (09-08).[^vulncheck-glasswing]
- Snyk's filings revealed about 203 layoffs (around 20%) in June 2026 and a $189M net loss for 2025 (reported 10-01).[^techeu-snyk]

## W6 (2026-04-03 → 2026-07-03)
**Successes**
- Project Glasswing donated $2.5M to Alpha-Omega/OpenSSF and $1.5M to the ASF, plus $100M in credits.[^anthropic-glasswing] [event](/events/2026-04-project-glasswing-ai-vuln-discovery.md)
- Akrites shared SIRT launched (06-25).[^lf-akrites] [event](/events/2026-06-akrites-launch.md)
- UK GDS reaffirmed "open by default" against NHS England's closures.[^openssf-nhs]
- Open VSX Managed Registry launched with AWS, Google and Cursor as customers (04-21).[^eclipse-managed]
- Socket raised a $60M Series C at $1B (05-20).[^socket-c]
- bcachefs declared non-experimental out of tree (06-19).[^reg-bcachefs-1386]

**Failures**
- Mini Shai-Hulud: SAP (04-29), TanStack (05-11), @antv (05-19), Red Hat (06-01). OpenAI and Mistral were affected.[^unit42-landscape][^csa-mini] [event](/events/2026-05-tanstack-mini-shai-hulud.md)
- Sapphire Sleet backdoored 140+ Mastra packages (06-17). [event](/events/2026-06-mastra-npm-compromise-sapphire-sleet.md)
- NVD moved to risk-based enrichment (04-15).[^nist-nvd] [event](/events/2026-04-nvd-risk-based-enrichment.md)
- NHS England closed hundreds of repos.[^openssf-nhs] [event](/events/2026-05-nhs-england-closes-repos-ai-fears.md)

## W9 (2026-01-03 → 2026-04-03)
**Successes**
- CVE funding secured beyond March 2026.[^cso-cve]
- $12.5M in LF AI-security grants (03-17).[^lf-12m] [event](/events/2026-03-lf-ai-security-grants.md)
- Anthropic committed $1.5M to the PSF (01-14).[^hns-anthropic-psf] Aikido raised a $60M Series B at $1B.[^techeu-aikido] Google closed Wiz (03-11).[^cleary-wiz]

**Failures**
- curl ended its bug bounty (01-31).[^curl-jan] [event](/events/2026-01-curl-ends-bug-bounty.md)
- TeamPCP hit Trivy, Checkmarx and LiteLLM (03-19 to 24).[^snyk-litellm] [event](/events/2026-03-teampcp-trivy-litellm-compromise.md)
- axios was backdoored by DPRK-linked actors (03-31).[^huntress-axios] [event](/events/2026-03-axios-npm-compromise.md)
- ingress-nginx maintenance ended (March).[^k8s-retire]

## W12 (2025-10-03 → 2026-01-03)
**Successes**
- npm classic tokens revoked (12-09). [event](/events/2025-12-npm-classic-tokens-revoked.md)
- Rust declared no longer experimental in the kernel (December).[^lwn-rust-end]
- New libxml2 maintainers stepped in (December).[^hackaday-libxml2]
- Community backfilled the PSF after the NSF grant was declined (10-27).[^psf-nsf] [event](/events/2025-10-psf-withdraws-nsf-grant.md)

**Failures**
- Shai-Hulud 2.0: 796 packages, 25k+ malicious repos, wiper fallback (11-24).[^datadog-sh2] [event](/events/2025-11-shai-hulud-2-npm-worm.md)
- ingress-nginx retirement announced (11-11).[^k8s-retire] [event](/events/2025-11-ingress-nginx-retirement.md)
- GlassWorm on Open VSX (first flagged 10-17).[^koi-glassworm] [event](/events/2025-10-glassworm-open-vsx-worm.md)
- FFmpeg vs Google Big Sleep "CVE slop" dispute (10-31).[^ffmpeg-x] [event](/events/2025-10-ffmpeg-google-big-sleep-dispute.md)

## W24 (2024-10-03 → 2025-10-03)
**Successes**
- GitHub's npm hardening plan (2025-09-22).[^gh-npm-plan]
- EUVD and GCVE launched as hedges for CVE. Opengrep fork. Sovereign Tech Agency grew past 40 funded projects.[^wiki-sta]
- Google–Wiz $32B deal announced (2025-03-18).[^cleary-wiz] Chainguard Series D at $3.5B (04-23).[^chainguard-d] Semgrep $100M Series D (Feb).[^secweek-semgrep] [event](/events/2025-03-google-acquires-wiz.md). Endor raised $93M.[^tc-endor]

**Failures**
- tj-actions/changed-files (March). [event](/events/2025-03-tj-actions-changed-files-compromise.md)
- CVE near-lapse (April). [event](/events/2025-04-cve-mitre-funding-crisis.md)
- libxml2 dropped embargoes (May).[^lwn-libxml2] Hector Martin resigned (02-13).[^asahi-torch] bcachefs removed (09-30).[^lwn-bcachefs] libxml2's maintainer stepped down (09-15).[^phoronix-libxml2]
- AI scrapers overloaded forges (March).[^devault] Nx s1ngularity (August). chalk/debug (09-08).[^aikido-chalk] Shai-Hulud (September).

# Trends
1. **From token theft to CI-trust theft.** Credentials → self-spreading worms → OIDC and provenance abuse. Each defense (classic token revocation, trusted publishing) was answered within months. ([TanStack](/events/2026-05-tanstack-mini-shai-hulud.md), [keyv](/events/2026-08-keyv-shai-hulud-wave.md))
2. **Security tools as attack surface.** Trivy, Checkmarx, and AI coding CLIs used for recon (Nx) and persistence (Claude Code hooks, MCP servers).[^snyk-litellm][^csa-mini]
3. **AI floods the maintainer funnel.** First slop (curl), then real findings faster than anyone can fix them (Glasswing). Pauses and ended bounties are the new coping tools.[^curl-jan][^vulncheck-glasswing][^openjs-cna]
4. **"Polluter pays" funding.** AI labs and hyperscalers now pay for triage (LF $12.5M, Glasswing, Akrites), and vendors pay for bounties (OpenJS SSP).[^lf-12m][^openjs-ssp]
5. **Public infrastructure retreats, the EU steps forward.** NVD shrank and CVE wobbled, while the EU added EUVD, the CRA SRP and the Sovereign Tech Agency model.[^nist-nvd][^ec-cra]
6. **Registries look for revenue.** Open VSX Managed Registry, the enterprise registry pledge, and download growth of 30–50% a year on flat funding.[^openssf-registries]
7. **Maintainer exits and retirements as governance events.** libxml2, ingress-nginx, bcachefs, Asahi. Formal retirement is becoming normal.[^lwn-libxml2][^k8s-retire]
8. **Security vendor consolidation and AI repositioning.** Wiz→Google, Koi→Palo Alto, Aikido and Socket unicorns, Chainguard at $3.5B, Snyk cut 20% of staff.[^cleary-wiz][^calcalist-koi][^techeu-aikido][^socket-c][^chainguard-d][^techeu-snyk]

# Success patterns
- **Changing defaults beats giving advice.** npm 12 and the 14-day release-immutability rule fix whole classes of attack.
- **Cooldown periods and curated mirrors.** Chainguard Libraries customers were not exposed to keyv.
- **Pooled, directed funds** (Alpha-Omega, the STA, the OpenJS SSP) get money to maintainers more reliably than one-off donations.
- **Being open about limits.** curl's pause and the ingress-nginx retirement were honest and handled in an orderly way, and both built trust.
- **Threat research as go-to-market.** Aikido, Socket, Wiz and Koi grew or exited on the strength of fast incident disclosure.

# Failure patterns
- **Single maintainer, critical dependency** (libxml2, xz, keyv account) with no funding and no second admin.
- **Privileged CI with mutable references** (tag-pinned Actions, unpinned scanners, `pull_request_target`).
- **Public goods funded from a single line** (CVE, NVD).
- **Process conflict without mediation** (bcachefs, the Rust-for-Linux resignations).
- **Paying for reports instead of fixes** in the AI era (curl, Node.js bounties ended).

# Open questions / watchlist for next 6 months
- Does npm 12 adoption measurably slow the Shai-Hulud family, or do attackers move fully to source-repo compromise?
- Will Akrites and Glasswing close the gap between findings and fixes (under 1% fixed)? Will more CNAs pause?
- How will CRA manufacturer reporting load upstream maintainers before the Dec 2027 steward obligations?
- Will more public bodies follow NHS England in closing code because of AI fears?
- Will the registry-funding pledge turn into actual dollars, or paid enterprise tiers on PyPI and npm?
- Is there an EU Sovereign Tech Fund in the next EU budget?
- More security-vendor M&A (Snyk, Socket, Endor as targets?) and whether Chainguard IPOs.

[^unit42-landscape]: Unit 42: The npm Threat Landscape (updated July 15, 2026)
[^gh-npm-plan]: GitHub: Our plan for a more secure npm supply chain
[^infoq-npm12]: InfoQ: npm 12 released
[^datadog-sh2]: Datadog: Shai-Hulud 2.0
[^tanstack-pm]: TanStack postmortem
[^sb-keyv]: Security Boulevard: keyv wave
[^snyk-litellm]: Snyk: Trivy to LiteLLM
[^huntress-axios]: Huntress: axios compromise
[^aikido-chalk]: Aikido: chalk/debug compromise
[^record-ext]: The Record: CVE contract extension
[^cso-cve]: CSO: CVE funding secured
[^nist-nvd]: NIST NVD updates
[^ec-cra]: European Commission: CRA reporting
[^curl-jan]: daniel.haxx.se Jan 2026: end of curl bug bounty
[^curl-bliss]: daniel.haxx.se: What the bliss taught us
[^openjs-cna]: OpenJS CNA pause
[^openjs-ssp]: OpenJS Security Stewardship Program
[^anthropic-glasswing]: Anthropic: Project Glasswing
[^vulncheck-glasswing]: VulnCheck, 2026-09-08
[^lf-12m]: LF: $12.5M security grants
[^lf-akrites]: LF: Akrites
[^openssf-registries]: OpenSSF: registry sustainability commitment
[^openssf-nhs]: OpenSSF: open by default after AI
[^lwn-libxml2]: LWN: libxml2 security policy
[^k8s-retire]: Kubernetes: ingress-nginx retirement
[^lwn-bcachefs]: LWN, 2025-09-30
[^lwn-rust-end]: LWN, 2025-12-10
[^asahi-torch]: Asahi Linux blog, 2025-02-13
[^psf-nsf]: PSF News, 2025-10-27
[^hns-anthropic-psf]: Help Net Security, 2026-01-14
[^cleary-wiz]: Cleary Gottlieb, Mar 2026
[^techeu-aikido]: Tech.eu, 2026-01-14
[^calcalist-koi]: Calcalist, Apr 2026
[^chainguard-d]: Chainguard blog, 2025-04-23
[^geekwire-chainguard-280]: GeekWire, Oct 2025
[^socket-c]: Socket blog, 2026-05-20
[^secweek-semgrep]: SecurityWeek, Feb 2025
[^techeu-snyk]: Tech.eu, 2026-10-01
[^ffmpeg-x]: FFmpeg on X, 2025-10-31
[^koi-glassworm]: Koi Security, Oct 2025
[^eclipse-managed]: Eclipse Foundation, 2026-04-21
[^phoronix-libxml2]: Phoronix, 2025-09-15
[^hackaday-libxml2]: Hackaday, 2025-12-23
[^mychesco-asf]: MyChesCo, Sep 2026
[^sta-resilience]: Sovereign Tech Agency, 2026-09-28
[^gh-sosf-s4]: GitHub Blog, 2026-08-13
[^reg-bcachefs-1386]: The Register, 2026-06-19
[^asahi-m3]: Asahi Linux blog, Sep 2026
[^tc-snyk-300]: TechCrunch: Snyk $300M ARR
[^tc-endor]: TechCrunch: Endor Labs $93M
[^devault]: Drew DeVault on AI scrapers
[^wiki-sta]: Wikipedia: Sovereign Tech Agency
[^pledge]: Open Source Pledge
[^pypi-blog]: PyPI blog
[^csa-mini]: CSA: Mini Shai-Hulud
