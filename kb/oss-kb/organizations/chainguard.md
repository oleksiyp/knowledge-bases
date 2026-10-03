---
type: Organization
title: Chainguard
description: "Supply-chain security company selling minimal hardened container images and rebuilt-from-source libraries; one of the clearest commercial winners of the 2025-2026 supply-chain attack wave."
resource: https://www.chainguard.dev
tags: [supply-chain-security, containers, coss-startup, sigstore]
org_kind: coss-startup
hq: Kirkland, WA, USA
funding: { total_usd: "~$892M (company/SiliconANGLE, Oct 2025)", last_round: "$280M growth financing (General Catalyst Customer Value Fund); prior equity round Series D $356M (Kleiner Perkins, IVP)", last_round_date: 2025-10-23, valuation_usd: "3.5B (set at Series D, 2025-04-23)" }
business_verdict: thriving
projects: [projects/security-sustainability/github-secure-open-source-fund]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cg-keyv
    resource: https://www.chainguard.dev/unchained/the-keyv-and-cacheable-npm-supply-chain-attack-inside-the-mini-shai-hulud-campaign
    title: "Chainguard: The keyv and cacheable npm supply chain attack"
  - id: cg-unchained
    resource: https://www.chainguard.dev/unchained
    title: Chainguard Unchained blog index
  - id: cg-press
    resource: https://www.chainguard.dev/press
    title: Chainguard newsroom
  - id: tc-cg-2022
    resource: https://techcrunch.com/2022/06/02/chainguard-raises-50m-to-guard-supply-chains/
    title: "TechCrunch: Chainguard raises $50M (2022)"
  - id: lf-akrites
    resource: https://www.linuxfoundation.org/press/linux-foundation-and-industry-leaders-launch-akrites-to-defend-critical-open-source-software-against-ai-enabled-cyber-threats
    title: "LF: Akrites launch"
  - id: gh-sosf
    resource: https://github.com/open-source/github-secure-open-source-fund
    title: GitHub Secure Open Source Fund
  - id: docker-dhi-cn
    resource: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
    title: "Docker: Hardened Images for Everyone (Dec 17, 2025)"
  - id: cm-gn-chainguard
    resource: https://siliconangle.com/2025/10/23/chainguard-secures-280m-expand-trusted-open-source-software-platform/
    title: "SiliconANGLE: Chainguard funding round raises $280M for open source expansion (2025-10-23)"
    author: org:siliconangle
  - id: cg-seriesd-pr
    resource: https://www.prnewswire.com/news-releases/chainguard-raises-356-million-in-series-d-funding-to-be-the-safe-source-for-all-open-source-302435220.html
    title: "PR Newswire: Chainguard Raises $356 Million in Series D Funding (2025-04-23)"
    author: org:chainguard
  - id: geekwire-cg-d
    resource: https://www.geekwire.com/2025/cybersecurity-startup-chainguard-lands-356m-now-valued-at-3-5b/
    title: "GeekWire: Chainguard lands $356M at $3.5B valuation, up from $1.1B a year ago (2025-04)"
    author: org:geekwire
  - id: cb-cg-800
    resource: https://cryptobriefing.com/chainguard-raises-800m-open-source-security/
    title: "Crypto Briefing: 'Chainguard raises $800M' (2026-07; a cumulative recap of the 2025 rounds, not a new round)"
---
# Summary
Chainguard was founded by Sigstore co-creators. It went from a $5M seed (2021) and a $50M Series B (2022)[^tc-cg-2022] to one of the best-funded companies in supply-chain security. Its $356M Series D (23 Apr 2025, led by Kleiner Perkins and IVP) set a $3.5B valuation, with ARR of $40M in FY2025 (7x growth) and a stated goal of >$100M ARR by end of FY2026[^cg-seriesd-pr]; a $280M non-dilutive growth financing from General Catalyst's Customer Value Fund followed on 23 Oct 2025, bringing total capital to ~$892M[^cm-gn-chainguard]. It has expanded from hardened images to **Chainguard Libraries** (malware-scanned rebuilds of packages from npm, PyPI and Maven Central, with cooldown periods). Chainguard says Libraries customers were never exposed to the August 2026 keyv/Shai-Hulud wave.[^cg-keyv] Factory 2.0 doubled container build output in six months and passed 1 billion build manifests (Sep 2026).[^cg-unchained] It is a founding member of Akrites[^lf-akrites] and a funder of GitHub's Secure Open Source Fund.[^gh-sosf]

# Business timeline
| Date | Event |
|---|---|
| 2022-06 | $50M Series B[^tc-cg-2022] |
| 2024-07 | $140M Series C at $1.1B (per GeekWire's Series D report)[^geekwire-cg-d] |
| 2025-04-23 | $356M Series D at $3.5B (Kleiner Perkins, IVP); ARR $40M[^cg-seriesd-pr] |
| 2025-10-23 | $280M growth financing from General Catalyst CVF; ~$892M total raised[^cm-gn-chainguard] |
| 2026-07 | Crypto-news headlines of a "$800M raise" are a cumulative recap, not a new round[^cb-cg-800] |
| 2026-02 | Factory 2.0 coverage in The New Stack[^cg-press] |
| 2026-06-25 | Founding member of Akrites[^lf-akrites] |
| 2026-09 | 1B build manifests; FIPS 140-3 module; Sovereign Artifacts beta[^cg-unchained] |

# Monetization model
Subscriptions for hardened, continuously rebuilt container images and language libraries, plus FIPS and compliance variants. It sells an "upstream you can trust" layer on top of OSS registries.

# Successes
- Every npm/PyPI incident is effectively free marketing for a curated-registry product.[^cg-keyv]

# Failures / risks
- Its product depends on rebuilding other people's OSS. Upstream maintainers may object to the free-rider dynamic.
- ARR beyond the FY2025 figure ($40M) has not been disclosed; whether the >$100M FY2026 target was met is unverified. No new equity round since April 2025 was found as of 2026-10-03.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [OpenSSF](/projects/security-sustainability/openssf.md), [keyv wave](/events/2026-08-keyv-shai-hulud-wave.md)

[^cg-keyv]: Chainguard blog, Aug 2026.
[^cg-unchained]: Chainguard blog index.
[^cg-press]: Chainguard newsroom.
[^tc-cg-2022]: TechCrunch, 2022.
[^lf-akrites]: LF press.
[^gh-sosf]: GitHub.
[^cg-seriesd-pr]: Chainguard press release, 2025-04-23.
[^geekwire-cg-d]: GeekWire, 2025-04.
[^cb-cg-800]: Crypto Briefing, 2026-07.

## Additional notes (cloud-native)
- Competitive pressure: on Dec 17, 2025 Docker made 1,000+ Docker Hardened Images free and Apache-2.0 (with SBOMs and SLSA Build Level 3 provenance), keeping a 7-day critical-CVE SLA, FIPS/STIG images and extended lifecycle support as paid tiers. This directly targets Chainguard's core hardened-image market.[^docker-dhi-cn] See [Event: Docker Hardened Images free](/events/2025-12-docker-hardened-images-free.md) and [Docker Inc](/organizations/docker-inc.md).

[^docker-dhi-cn]: https://www.docker.com/blog/docker-hardened-images-for-every-developer/

## Additional notes (coss-market)

Market context: Chainguard is the best-funded COSS-adjacent security company of the period — $140M Series C at $1.1B (Jul 2024)[^geekwire-cg-d], $356M Series D at $3.5B (Apr 2025)[^cg-seriesd-pr] and $280M growth financing from General Catalyst (Oct 2025)[^cm-gn-chainguard]. Corrected in pass 2: the "$800M raise" (July 2026) reported by crypto-news aggregators is not a new round — Crypto Briefing's article sums the 2025 Series D and growth financing ("more than $800 million"); no 2026 round was found[^cb-cg-800]. See [COSS funding](/projects/coss-market/coss-funding-2024-2026.md).

[^cm-gn-chainguard]: SiliconANGLE, 2025-10-23.
