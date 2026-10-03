---
type: OSS Project
title: Forgejo (and Codeberg)
description: Community hard fork of Gitea (GPL since Aug 2024) that powers the nonprofit forge Codeberg; the main beneficiary of the 2025–26 "leave GitHub" wave driven by Copilot pushes and GitHub's absorption into Microsoft (Zig, Dillo, Gentoo, Fedora).
resource: https://codeberg.org/forgejo/forgejo
tags: [git-forge, gpl-3.0, nonprofit, codeberg, federation, github-alternative]
domain: devtools-languages
license: GPL-3.0-or-later
license_history: ["MIT (Gitea-derived, to 2024-08)", "GPL-3.0-or-later (2024-08-)"]
governance: community
steward: Codeberg e.V. (nonprofit) / Forgejo community
backing_orgs: [organizations/codeberg]
metrics:
  codeberg_repositories: { value: 300000, as_of: 2025-11-30, note: "300,000+ (per Wikipedia citing Codeberg; not re-verified in pass 2)" }
  codeberg_users: { value: 200000, as_of: 2025-11-30, note: "200,000+" }
  codeberg_members: { value: 1208, as_of: 2025-11-30 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-forgejo
    resource: https://en.wikipedia.org/wiki/Forgejo
    title: "Wikipedia: Forgejo"
  - id: wiki-codeberg
    resource: https://en.wikipedia.org/wiki/Codeberg
    title: "Wikipedia: Codeberg (membership/repo statistics)"
  - id: forgejo-releases
    resource: https://codeberg.org/forgejo/forgejo/releases
    title: "Forgejo releases on Codeberg (v12.0.0 2025-07-17 … v16.0.0 2026-07-16; via Codeberg API)"
  - id: zig-codeberg
    resource: https://ziglang.org/news/migrating-from-github-to-codeberg/
    title: "ziglang.org: Migrating from GitHub to Codeberg"
  - id: tc-dohmke
    resource: https://techcrunch.com/2025/08/11/github-ceo-to-step-down/
    title: "TechCrunch: GitHub CEO to step down (2025-08-11)"
  - id: geekwire-coreai
    resource: https://www.geekwire.com/2025/github-will-join-microsofts-coreai-group-with-departure-of-ceo-thomas-dohmke/
    title: "GeekWire: GitHub will join Microsoft's CoreAI group with departure of CEO Thomas Dohmke"
  - id: reg-gentoo
    resource: https://www.theregister.com/2026/02/17/gentoo_moves_to_codeberg_amid/
    title: "The Register: Gentoo dumps GitHub over Copilot nagware (2026-02-17)"
  - id: fedora-forge
    resource: https://communityblog.fedoraproject.org/the-forge-is-our-new-home/
    title: "Fedora Community Blog: The forge is our new home (Fedora Forge on Forgejo ready, 2026-03-24)"
  - id: reg-codeberg-ai
    resource: https://www.theregister.com/ai-and-ml/2026/07/23/codeberg-gives-vibe-coded-projects-the-toss-promotes-human-floss/5277717
    title: "The Register: Codeberg gives vibe-coded projects the toss (2026-07-23)"
---

# Summary
Forgejo completed its hard fork from Gitea in February 2024 and relicensed to GPL-3.0-or-later in August 2024; it ships a major release every quarter (v12 July 2025 → v16 on 2026-07-16), gained ActivityPub federation features with NLnet funding, and became Fedora's forge: "Fedora Forge" was declared ready on 2026-03-24, with pagure.io retired to read-only after Flock 2026.[^wiki-forgejo][^forgejo-releases][^fedora-forge] Codeberg, the nonprofit flagship instance, reported 300,000+ repositories, 200,000+ users and 1,208 members by November 2025 with very small paid staff.[^wiki-codeberg] Growth was turbo-charged by discontent with GitHub: CEO Thomas Dohmke announced his departure on 2025-08-11 as GitHub was folded into Microsoft's CoreAI division, and Zig (2025-11-26), Dillo (Nov 2025) and Gentoo (Feb 2026, citing "continuous attempts to force Copilot usage") moved to Codeberg.[^tc-dohmke][^geekwire-coreai][^zig-codeberg][^reg-gentoo] On 2026-07-22 Codeberg members voted 358–144 to ban projects that "mostly consist of code written by generative AI" (plus cryptocurrency projects), citing copyright, harmful-code risk and soaring hardware costs.[^reg-codeberg-ai] Verdict: growing, values-driven alternative; scale still tiny compared with GitHub.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-17 | Forgejo v12.0 (quarterly major cadence continues: v13 2025-10-16, v14 2026-01-15, v15 2026-04-16, v16 2026-07-16) [^forgejo-releases] | OSS | + |
| W24 | 2025-08-11 | GitHub CEO Dohmke announces exit; GitHub folded into Microsoft CoreAI [^tc-dohmke][^geekwire-coreai] | Governance | + (for alternatives) |
| W12 | 2025-11 | Codeberg: 300k repos, 200k users, 1,208 members [^wiki-codeberg] | OSS | + |
| W12 | 2025-11-26 | Zig moves to Codeberg; Dillo also leaves GitHub [^zig-codeberg][^wiki-codeberg] | OSS | + |
| W9 | 2026-02-17 | Gentoo begins migrating GitHub mirrors to Codeberg citing Copilot pressure [^reg-gentoo] | OSS | + |
| W9 | 2026-03-24 | Fedora Forge (Forgejo) declared ready; pagure.io to be retired [^fedora-forge] | OSS | + |
| W6 | 2026-04-16 | Forgejo v15.0 [^forgejo-releases] | OSS | + |
| W3 | 2026-07-16 | Forgejo v16.0 [^forgejo-releases] | OSS | + |
| W3 | 2026-07-22 | Codeberg members vote 358–144 to ban mostly-AI-generated projects; crypto projects also banned [^reg-codeberg-ai] | Governance | mixed |

# OSS successes
- Credible, federating, copyleft forge with nonprofit hosting; major distro adoption (Fedora as primary forge, Gentoo mirrors).[^fedora-forge][^reg-gentoo]
- Reliable quarterly major releases.[^forgejo-releases]

# OSS failures / risks
- Codeberg runs on a tiny, donation-funded budget; SSD costs rose from ~€700 to ~€3,700 each, and AI-generated projects were straining CI and storage.[^reg-codeberg-ai]
- The anti-AI ToS drew criticism (e.g. Armin Ronacher) and may limit appeal to mainstream projects.[^reg-codeberg-ai]

# Business successes
- n/a (membership-funded nonprofit).

# Business failures / risks
- Gitea Ltd (the commercial entity Forgejo forked away from) remains a competing steward; fragmentation.

# By window
## W3
- Forgejo v16 (2026-07-16); Codeberg anti-vibe-coding/crypto ToS vote (2026-07-22).[^forgejo-releases][^reg-codeberg-ai]
## W6
- Forgejo v15 (2026-04-16); pagure.io migration deadline (June 2026) pushes Fedora projects onto Forgejo.[^forgejo-releases][^fedora-forge]
## W9
- Gentoo migration (Feb 2026); Fedora Forge ready (2026-03-24).[^reg-gentoo][^fedora-forge]
## W12
- Zig and Dillo migrations; Codeberg growth milestones; Forgejo v13.[^zig-codeberg][^wiki-codeberg][^forgejo-releases]
## W24
- GitHub leadership change / CoreAI absorption; Forgejo v12 and federation work.[^tc-dohmke][^forgejo-releases][^wiki-forgejo]

# Lessons
- Platform-level AI pushes (Copilot everywhere) created the first meaningful exodus from GitHub; nonprofit forges benefit when trust, not features, is the differentiator.
- Relicensing a fork to copyleft protects it from the fate (corporate capture) that motivated the fork.
- Donation-funded hosting has real marginal costs; AI-generated "slop" projects push nonprofits toward restrictive hosting policies.

# Related
- [Codeberg](/organizations/codeberg.md)
- [Zig moves to Codeberg](/events/2025-11-zig-moves-to-codeberg.md)
- [Zig](/projects/devtools-languages/zig.md)

[^wiki-forgejo]: Wikipedia: Forgejo — https://en.wikipedia.org/wiki/Forgejo
[^wiki-codeberg]: Wikipedia: Codeberg — https://en.wikipedia.org/wiki/Codeberg
[^forgejo-releases]: Forgejo releases on Codeberg — https://codeberg.org/forgejo/forgejo/releases
[^zig-codeberg]: ziglang.org: Migrating from GitHub to Codeberg — https://ziglang.org/news/migrating-from-github-to-codeberg/
[^tc-dohmke]: TechCrunch: GitHub CEO to step down — https://techcrunch.com/2025/08/11/github-ceo-to-step-down/
[^geekwire-coreai]: GeekWire: GitHub will join Microsoft's CoreAI group — https://www.geekwire.com/2025/github-will-join-microsofts-coreai-group-with-departure-of-ceo-thomas-dohmke/
[^reg-gentoo]: The Register: Gentoo dumps GitHub over Copilot nagware — https://www.theregister.com/2026/02/17/gentoo_moves_to_codeberg_amid/
[^fedora-forge]: Fedora Community Blog: The forge is our new home — https://communityblog.fedoraproject.org/the-forge-is-our-new-home/
[^reg-codeberg-ai]: The Register: Codeberg gives vibe-coded projects the toss — https://www.theregister.com/ai-and-ml/2026/07/23/codeberg-gives-vibe-coded-projects-the-toss-promotes-human-floss/5277717
