---
type: OSS Project
title: Nx
description: MIT-licensed monorepo build system from Nrwl (Narwhal Technologies) monetized through Nx Cloud; technically thriving (Rust core, Nx 21/22/23, AI self-healing CI) but compromised twice in a year — the August 2025 s1ngularity npm attack and a May 2026 backdoored Nx Console extension that led to the breach of ~3,800 internal GitHub repos — plus a self-hosted-cache licensing flip-flop.
resource: https://github.com/nrwl/nx
tags: [monorepo, build-system, javascript, mit, open-core, vc-backed, supply-chain]
domain: devtools-languages
license: MIT
license_history: ["MIT (2017-)", "first-party remote-cache packages: Powerpack commercial license (2024–2025), later deprecated"]
governance: company-led-open-core
steward: Narwhal Technologies Inc. (Nrwl)
backing_orgs: []
metrics:
  github_stars: { value: 29390, as_of: 2026-10-03 }
  weekly_installs: { value: "~6M", as_of: 2025-08-29, note: "per Nx postmortem" }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: up, W6: down, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:16:50Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nx-gh
    resource: https://github.com/nrwl/nx
    title: nrwl/nx GitHub repository (stars via GitHub API, 2026-10-03)
  - id: nx-pm
    resource: https://nx.dev/blog/s1ngularity-postmortem
    title: "Nx: S1ngularity - What Happened, How We Responded, What We Learned"
    author: org:nrwl
  - id: wiz-s1ng
    resource: https://www.wiz.io/blog/s1ngularitys-aftermath
    title: "Wiz: s1ngularity's aftermath — analysis of Nx supply chain attack"
  - id: nx-releases-policy
    resource: https://nx.dev/docs/reference/releases
    title: Nx Release Schedule and Support Policy
    author: org:nrwl
  - id: nx-22
    resource: https://nx.dev/blog/nx-22-release
    title: "Nx blog: Nx 22 Release — Expanding the build platform"
    author: org:nrwl
  - id: nx-blog
    resource: https://nx.dev/blog
    title: Nx blog index (Nx 23.2, Sept 2026)
    author: org:nrwl
  - id: nx-cache-rfc
    resource: https://github.com/nrwl/nx/discussions/30548
    title: "RFC: Nx Custom Self-Hosted Remote Cache (Discussion #30548)"
  - id: xiong-cache
    resource: https://emilyxiong.medium.com/exploring-of-nx-self-hosted-cache-5bc39bd2ed7f
    title: "Exploring Nx Self-Hosted Cache: From Free to Paid to Free to Deprecated"
  - id: nx-shci
    resource: https://nx.dev/blog/nx-self-healing-ci
    title: "Nx blog: Introducing Self-Healing CI for Nx and Nx Cloud"
    author: org:nrwl
  - id: tc-nx-seed
    resource: https://techcrunch.com/2022/11/17/with-8-6m-in-seed-funding-nx-wants-to-take-monorepos-mainstream/
    title: "TechCrunch: With $8.6M in seed funding, Nx wants to take monorepos mainstream"
    author: org:techcrunch
  - id: thn-gh-breach
    resource: https://thehackernews.com/2026/05/github-internal-repositories-breached.html
    title: "The Hacker News: GitHub internal repositories breached via malicious Nx Console VS Code extension"
---

# Summary
Nx is one of the two dominant JavaScript monorepo tools (with Turborepo), MIT-licensed and monetized through Nx Cloud (remote caching, distributed "Nx Agents", AI "self-healing CI").[^nx-gh][^nx-shci] Engineering is healthy: a six-month major cadence (Nx 21 on 2025-05-05, Nx 22 on 2025-10-22, Nx 23 on 2026-06-16) and a Rust core, with 2026 releases adding task sandboxing and Oxlint/Oxfmt support.[^nx-releases-policy][^nx-blog] But the period's defining event was **s1ngularity** (2025-08-26): attackers abused a GitHub Actions injection to steal an npm token and ship malicious Nx versions for ~4 hours that used local AI CLIs to hunt secrets; Wiz counted 6,700+ private repos made public and 2,300+ secrets exposed.[^nx-pm][^wiz-s1ng] Nine months later, on 2026-05-18, a backdoored Nx Console VS Code extension (18.95.0) was live for 18 minutes — long enough to infect a GitHub employee's machine and let the TeamPCP group exfiltrate ~3,800 internal GitHub repositories.[^thn-gh-breach] It also burned goodwill by moving self-hosted caching behind a paid Powerpack license, then reversing.[^xiong-cache][^nx-cache-rfc] Verdict: OSS contested (healthy engineering, repeated security failures), business stable (last primary-sourced funding is the 2022 $8.6M seed; aggregators report a 2023 Series A, not confirmed).[^tc-nx-seed]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-31 | RFC: free HTTP-API self-hosted cache in Nx 21 after Powerpack backlash [^nx-cache-rfc][^xiong-cache] | License | mixed |
| W24 | 2025-05-05 | Nx 21 (Rust task runner; custom task runners dropped) [^nx-releases-policy] | OSS | + |
| W24 | 2025-08-26 | s1ngularity: malicious nx/@nx packages published via stolen token; AI CLIs weaponized [^nx-pm][^wiz-s1ng] | Security | − |
| W12 | 2025-10-22 | Nx 22: self-healing CI tools, .NET and Maven support [^nx-22][^nx-releases-policy] | OSS | + |
| W6 | 2026-05-18 | Backdoored Nx Console extension (18.95.0) used to breach ~3,800 internal GitHub repos [^thn-gh-breach] | Security | − |
| W6 | 2026-04-24 | Nx 22.7 (shared DB across worktrees) [^nx-blog] | OSS | + |
| W6 | 2026-06-16 | Nx 23 released [^nx-releases-policy] | OSS | + |
| W3 | 2026-09-03 | Nx 23.2: Oxlint, Oxfmt, leaner CLI output [^nx-blog] | OSS | + |

# OSS successes
- Predictable 6-month majors with 18 months of support; broadened beyond JS to .NET/Maven/Gradle.[^nx-releases-policy][^nx-22]
- Fast, transparent postmortem; moved to npm Trusted Publishing (OIDC) and mandatory manual 2FA for publishes.[^nx-pm]

# OSS failures / risks
- Second compromise in May 2026 via the Nx Console editor extension, with GitHub itself as the victim.[^thn-gh-breach]
- s1ngularity: one of the first supply-chain attacks to weaponize developers' AI agents, and a precursor to Shai-Hulud.[^nx-pm][^wiz-s1ng]
- Self-hosted cache went free → paid ($250/seat/year Powerpack) → free-but-licensed → deprecated (CREEP cache-poisoning CVE-2025-36852) within two years, eroding trust.[^xiong-cache]

# Business successes
- Nx Cloud pivoted aggressively to AI ("self-healing CI", agent-oriented features) and marketing claims of cheaper CI than GitHub Actions.[^nx-shci][^nx-blog]

# Business failures / risks
- No new primary-sourced funding since the 2022 $8.6M seed (a 2023 a16z-led Series A is reported by aggregators but not confirmed here); competing with Vercel-owned Turborepo and with GitHub-native CI.[^tc-nx-seed]

# By window
## W3
- Nx 23.2 with Oxlint/Oxfmt; Nx Cloud timeline view; AI generator extraction features.[^nx-blog]
## W6
- Nx Console extension backdoor → GitHub internal-repo breach (2026-05-18/20).[^thn-gh-breach]
- Nx 22.7 and Nx 23 (2026-06-16).[^nx-releases-policy][^nx-blog]
## W9
- No notable events found.
## W12
- Nx 22 with self-healing CI (2025-10-22).[^nx-22]
## W24
- Powerpack cache reversal; Nx 21; s1ngularity attack (2025-08-26).[^nx-cache-rfc][^nx-pm]

# Lessons
- CI workflow files are part of the supply chain: a PR-title injection was enough to publish malware to millions of installs.
- Gating a previously free core capability (remote cache) behind a license triggers lasting backlash even after reversal.

# Related
- [Nx s1ngularity attack](/events/2025-08-nx-s1ngularity-attack.md)
- [GitHub internal repos breach via Nx Console](/events/2026-05-github-internal-repos-breach.md)
- [GitHub](/projects/devtools-languages/github.md)
- [npm registry](/projects/devtools-languages/npm-registry.md)
- [Turborepo](/projects/devtools-languages/turborepo.md)
- [Vite / VoidZero (Oxlint)](/projects/devtools-languages/vite.md)

[^nx-gh]: nrwl/nx GitHub repository
[^nx-pm]: Nx: s1ngularity postmortem
[^wiz-s1ng]: Wiz: s1ngularity's aftermath
[^nx-releases-policy]: Nx Release Schedule and Support Policy
[^nx-22]: Nx blog: Nx 22 Release
[^nx-blog]: Nx blog index
[^nx-cache-rfc]: RFC: Nx Custom Self-Hosted Remote Cache
[^xiong-cache]: Exploring Nx Self-Hosted Cache (Medium)
[^nx-shci]: Nx blog: Introducing Self-Healing CI
[^tc-nx-seed]: TechCrunch: Nx $8.6M seed
[^thn-gh-breach]: The Hacker News: GitHub internal repositories breached via malicious Nx Console extension
