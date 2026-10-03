---
type: Idea
title: Package-registry supply-chain security (trusted publishing, provenance, Sigstore)
description: "Defending language package registries (npm, PyPI, crates.io, RubyGems) against hijacked maintainers, malicious packages and compromised CI through OIDC trusted publishing, signed build provenance and token revocation. 2018–2026 verdict: succeeding but losing the race. The defences shipped and became defaults, yet the attacks escalated from single hijacks (event-stream, 2018) to self-propagating worms (Shai-Hulud, 2025)."
area: tooling-and-ecosystem
tags: [supply-chain, npm, pypi, sigstore, slsa, trusted-publishing, provenance, malware, xz]
outcome: succeeding
maturity_2026: adopted
origin_year: 2018
mainstream_year: 2023
languages: [languages/javascript, languages/typescript, languages/python, languages/rust, languages/ruby]
runtimes: [runtimes/nodejs]
related_ideas: [ideas/tooling-and-ecosystem/reproducible-builds-and-nix, ideas/tooling-and-ecosystem/packaging-revolution-python, ideas/memory-safety/memory-safety-policy-push]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: snyk-es
    resource: https://snyk.io/blog/malicious-code-found-in-npm-package-event-stream/
    title: "Snyk: Malicious code found in npm package event-stream"
  - id: colors
    resource: https://www.bleepingcomputer.com/news/security/dev-corrupts-npm-libs-colors-and-faker-breaking-thousands-of-apps/
    title: "BleepingComputer: Dev corrupts NPM libs 'colors' and 'faker'"
  - id: nodeipc
    resource: https://orca.security/resources/blog/cve-2022-23812-protestware-malicious-code-node-ipc-npm-package/
    title: "Orca Security: CVE-2022-23812 protestware in node-ipc"
  - id: pypi-tp
    resource: https://blog.pypi.org/posts/2023-04-20-introducing-trusted-publishers/
    title: "PyPI blog: Introducing 'Trusted Publishers'"
  - id: npm-prov
    resource: https://github.blog/changelog/2023-04-19-npm-provenance-public-beta/
    title: "GitHub Changelog: npm provenance public beta"
  - id: sigstore-npm-ga
    resource: https://blog.sigstore.dev/npm-provenance-ga/
    title: "Sigstore blog: npm's Sigstore-powered provenance goes GA"
  - id: pypi-attest
    resource: https://blog.pypi.org/posts/2024-11-14-pypi-now-supports-digital-attestations/
    title: "PyPI blog: PyPI now supports digital attestations"
  - id: xz-qualys
    resource: https://blog.qualys.com/vulnerabilities-threat-research/2024/03/29/xz-utils-sshd-backdoor
    title: "Qualys: CVE-2024-3094 XZ Utils sshd backdoor"
  - id: ultralytics
    resource: https://www.wiz.io/blog/ultralytics-ai-library-hacked-via-github-for-cryptomining
    title: "Wiz: Ultralytics AI library hacked via GitHub for cryptomining"
  - id: tj-actions
    resource: https://www.wiz.io/blog/github-action-tj-actions-changed-files-supply-chain-attack-cve-2025-30066
    title: "Wiz: GitHub Action tj-actions/changed-files supply chain attack (CVE-2025-30066)"
  - id: cisa-npm
    resource: https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
    title: "CISA: Widespread Supply Chain Compromise Impacting npm Ecosystem (2025-09-23)"
  - id: splunk-npm
    resource: https://www.splunk.com/en_us/blog/security/npm-supply-chain-attack-detection-analysis.html
    title: "Splunk: Defending against npm supply chain attacks"
  - id: npm-tokens
    resource: https://socket.dev/blog/npm-revokes-classic-tokens
    title: "Socket: npm Revokes Classic Tokens"
  - id: openssf-tp
    resource: https://repos.openssf.org/trusted-publishers-for-all-package-repositories.html
    title: "OpenSSF: Trusted Publishers for All Package Repositories"
---

# Summary

**Succeeding on defences, losing on attack volume.** Between 2018 and 2026 every major language
registry moved from "anyone with a password can publish anything" toward short-lived OIDC
**trusted publishing** and **signed build provenance**:

- PyPI introduced trusted publishing in April 2023 and digital attestations in November 2024.[^pypi-tp][^pypi-attest]
- npm launched Sigstore-backed provenance in April 2023 and made trusted publishing GA in July 2025.[^npm-prov][^sigstore-npm-ga]
- npm revoked all classic tokens on 2025-12-09.[^npm-tokens]
- OpenSSF published cross-registry guidance.[^openssf-tp]

The attacks escalated faster. They went from a single hijacked package (event-stream, 2018) to
maintainer sabotage (colors/faker, node-ipc, 2022), a multi-year social-engineering backdoor (xz,
2024), CI compromise (ultralytics, tj-actions) and finally a **self-replicating npm worm** (Shai-Hulud, September 2025)
that CISA warned about.[^snyk-es][^colors][^xz-qualys][^tj-actions][^cisa-npm]

# The idea

Language ecosystems rely on thousands of transitive dependencies published by volunteers. The
attack surface: (1) stolen or phished maintainer credentials, (2) handing a package to a stranger,
(3) malicious new packages (typosquats), (4) compromised CI that holds long-lived publish tokens,
(5) a release artefact that differs from its source. The defences: 2FA mandates, **trusted
publishing** (the registry trusts a CI identity via OIDC instead of a stored token), **provenance
attestations** (Sigstore/SLSA statements linking an artefact to a commit and a build), and malware
scanning.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-11 | event-stream handed to a stranger, who adds a wallet-stealing dependency (about 8M downloads)[^snyk-es] | − |
| E2 | 2022-01 | colors.js and faker.js sabotaged by their own maintainer[^colors] | − |
| E2 | 2022-03 | node-ipc protestware wipes files on Russian/Belarusian IPs (CVE-2022-23812)[^nodeipc] | − |
| E3 | 2023-04 | npm provenance (Sigstore) public beta; PyPI trusted publishers launch[^npm-prov][^pypi-tp] | + |
| E3 | 2023-09 | npm provenance GA[^sigstore-npm-ga] | + |
| E3 | 2024-03-29 | xz-utils backdoor found days before reaching stable distros (CVE-2024-3094, CVSS 10)[^xz-qualys] | − |
| E4 | 2024-11 | PyPI attestations (PEP 740) generally available, on by default for trusted publishers[^pypi-attest] | + |
| E4 | 2024-12 | ultralytics PyPI releases poisoned via GitHub Actions script injection[^ultralytics] | − |
| E4 | 2025-03 | tj-actions/changed-files compromise leaks CI secrets of about 23,000 repos[^tj-actions] | − |
| E4 | 2025-07 | npm trusted publishing (OIDC) GA[^npm-tokens] | + |
| E4 | 2025-09 | chalk/debug phishing compromise (2.6B weekly downloads) and Shai-Hulud worm; CISA alert[^splunk-npm][^cisa-npm] | − |
| E4 | 2025-12-09 | npm permanently revokes all classic tokens[^npm-tokens] | + |

# Where it succeeded

- **Trusted publishing spread** across PyPI, npm, RubyGems, crates.io and others, removing
  long-lived tokens from CI.[^openssf-tp]
- **Provenance became default**: PyPI attestations need no maintainer action if the project uses
  the canonical GitHub Action.[^pypi-attest]
- **Fast response**: the chalk/debug compromise was caught and reverted within hours, and xz was
  caught before most stable distributions shipped it.[^xz-qualys][^splunk-npm]

# Where it failed or stalled

- **Provenance does not stop a compromised maintainer or CI.** Shai-Hulud stole tokens and
  republished from the victims' own accounts. ultralytics and tj-actions were compromised
  through the CI pipelines that trusted publishing relies on.[^ultralytics][^tj-actions][^cisa-npm]
- **Consumers rarely verify.** Attestations exist, but installers mostly do not enforce them by
  default.
- **Social engineering beats cryptography.** xz's "Jia Tan" spent years earning co-maintainer
  status, and the chalk attack used a phishing domain (npmjs.help).[^xz-qualys][^splunk-npm]
- **npm's install-time scripts** (`postinstall`) remain the worm's propagation vector. pnpm and
  Bun disable them by default for dependencies, but npm still runs them.

# Why

1. **The economics are asymmetric.** One hijacked maintainer reaches billions of weekly
   downloads, and defenders must protect every one of them.
2. **Registries could only fix what they control:** publishing credentials and metadata. They
   cannot fix maintainer burnout (colors/faker), stranger handoffs (event-stream, xz) or CI
   misconfiguration.
3. **Defaults matter more than features.** Adoption jumped only when attestations became
   automatic (PyPI) and when old tokens were forcibly revoked (npm 2025).[^pypi-attest][^npm-tokens]
4. **Policy pressure** (US EO 14028 in 2021, SBOM requirements, the EU CRA) made provenance a
   procurement issue, which funded Sigstore and OpenSSF work.

# Lessons

- Remove long-lived secrets first. Most 2024–2025 incidents started with a stolen token.
- Signed provenance proves where an artefact came from, not that it is benign.
- Ecosystems with install-time code execution need sandboxing or opt-in scripts.

# Related

- [Reproducible builds and Nix](/ideas/tooling-and-ecosystem/reproducible-builds-and-nix.md)
- [Python packaging revolution](/ideas/tooling-and-ecosystem/packaging-revolution-python.md)
- [Memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)
- [xz-utils backdoor](/events/2024-03-xz-utils-backdoor.md)
- [PyPI trusted publishing](/events/2023-04-pypi-trusted-publishing.md)
- [Shai-Hulud npm worm](/events/2025-09-shai-hulud-npm-worm.md)

[^snyk-es]: Snyk on event-stream — https://snyk.io/blog/malicious-code-found-in-npm-package-event-stream/
[^colors]: BleepingComputer on colors/faker — https://www.bleepingcomputer.com/news/security/dev-corrupts-npm-libs-colors-and-faker-breaking-thousands-of-apps/
[^nodeipc]: Orca Security on node-ipc — https://orca.security/resources/blog/cve-2022-23812-protestware-malicious-code-node-ipc-npm-package/
[^pypi-tp]: PyPI, Introducing Trusted Publishers — https://blog.pypi.org/posts/2023-04-20-introducing-trusted-publishers/
[^npm-prov]: npm provenance public beta — https://github.blog/changelog/2023-04-19-npm-provenance-public-beta/
[^sigstore-npm-ga]: npm provenance GA — https://blog.sigstore.dev/npm-provenance-ga/
[^pypi-attest]: PyPI digital attestations — https://blog.pypi.org/posts/2024-11-14-pypi-now-supports-digital-attestations/
[^xz-qualys]: Qualys on CVE-2024-3094 — https://blog.qualys.com/vulnerabilities-threat-research/2024/03/29/xz-utils-sshd-backdoor
[^ultralytics]: Wiz on ultralytics — https://www.wiz.io/blog/ultralytics-ai-library-hacked-via-github-for-cryptomining
[^tj-actions]: Wiz on tj-actions — https://www.wiz.io/blog/github-action-tj-actions-changed-files-supply-chain-attack-cve-2025-30066
[^cisa-npm]: CISA alert 2025-09-23 — https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
[^splunk-npm]: Splunk on npm attacks — https://www.splunk.com/en_us/blog/security/npm-supply-chain-attack-detection-analysis.html
[^npm-tokens]: Socket, npm revokes classic tokens — https://socket.dev/blog/npm-revokes-classic-tokens
[^openssf-tp]: OpenSSF, Trusted Publishers for All — https://repos.openssf.org/trusted-publishers-for-all-package-repositories.html
