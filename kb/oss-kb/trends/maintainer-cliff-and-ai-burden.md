---
type: Trend
title: The maintainer cliff and AI's double burden on maintainers
description: "Critical but unglamorous projects with 1–2 maintainers were formally retired or paused (ingress-nginx, libxml2 embargoes, External Secrets, Aider). AI first flooded maintainers with slop reports, then with real vulnerability findings faster than anyone could fix them. AI-generated code became a governance fault line."
tags: [maintainers, sustainability, ai, security, governance, cross-domain]
strength: strong
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [security-sustainability, cloud-native, ai-agents, devtools-languages, end-user-apps, databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: k8s-retire
    resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
    title: "Kubernetes: ingress-nginx retirement (2025-11-11)"
  - id: eso-issue
    resource: https://github.com/external-secrets/external-secrets/issues/5084
    title: External Secrets Operator release pause
  - id: curl-jan
    resource: https://daniel.haxx.se/blog/2026/01/
    title: "curl blog: ending the bug bounty (Jan 2026)"
  - id: glasswing
    resource: https://www.anthropic.com/glasswing
    title: Anthropic Project Glasswing
  - id: vulncheck-glasswing
    resource: https://www.vulncheck.com/blog/anthropic-glasswing-receipts
    title: "VulnCheck: The Anthropic Glasswing receipts are starting to trickle in (2026-09-08)"
  - id: openjs-cna
    resource: https://openjsf.org/blog/the-openjs-foundation-cna-is-taking-a-coordinated-break
    title: "OpenJS Foundation CNA coordinated break (Sep 2026)"
  - id: lwn-libxml2
    resource: https://lwn.net/Articles/1025971/
    title: "LWN: libxml2 drops security embargoes"
  - id: drew-ai
    resource: https://drewdevault.com/blog/Stop-externalizing-your-costs-on-me/
    title: "Drew DeVault: Stop externalizing your costs on me (AI scrapers)"
---

# Summary

Usage kept outrunning maintainer supply. The period's distinctive feature is that **foundations and maintainers began formally retiring or pausing work instead of letting it rot quietly**:

- Kubernetes retired ingress-nginx, which about 50% of environments used and 1–2 people maintained.[^k8s-retire]
- External Secrets Operator froze its releases.[^eso-issue]
- libxml2 dropped security embargoes.[^lwn-libxml2] Two new maintainers have since joined, so it recovered from crisis to contested.
- curl ended its bug bounty.[^curl-jan]
- The OpenJS CNA took a "coordinated break".[^openjs-cna]

AI added a **double burden**:

1. **Slop.** AI-generated bogus vulnerability reports pushed curl's rate of valid reports below 5%. AI scrapers overloaded forges and infrastructure.[^drew-ai]
2. **Real findings at scale.** Glasswing produced 26,153 findings. By 2026-09-08, 10.5% had been disclosed to maintainers and 0.8% fixed.[^vulncheck-glasswing] FFmpeg's earlier protest against Google's Big Sleep reports ([event](/events/2025-10-ffmpeg-google-big-sleep-dispute.md)) anticipated this.

# Evidence by type

| Type | Cases |
|---|---|
| Formal retirement | [ingress-nginx](/events/2025-11-ingress-nginx-retirement.md), [TGI](/events/2025-12-tgi-maintenance-mode.md), [MinIO](/events/2025-12-minio-maintenance-mode.md), [AutoGen maintenance mode](/projects/ai-agents/autogen.md) |
| Pause or reduced service | [External Secrets pause](/events/2025-07-external-secrets-release-pause.md), [libxml2 embargoes](/events/2025-05-libxml2-drops-security-embargoes.md), [curl bounty](/events/2026-01-curl-ends-bug-bounty.md), [OpenJS CNA pause](/events/2026-09-openjs-cna-pause-security-stewardship.md) |
| Solo-project stall | [Aider](/projects/ai-agents/aider.md), [Void](/projects/ai-agents/void-editor.md), [Ibis](/projects/data-engineering/ibis.md) |
| Leadership burnout | [Asahi lead resigns](/events/2025-02-hector-martin-resigns-asahi.md), [Jellyfin](/projects/end-user-apps/jellyfin.md), [Nixpkgs core team dissolves](/events/2026-08-nixpkgs-core-team-dissolves.md), [bcachefs removed](/events/2025-09-bcachefs-removed-from-mainline.md) |
| AI load on infrastructure | [AI scrapers overload OSS infra](/events/2025-03-ai-scrapers-overload-oss-infrastructure.md), [Anubis](/projects/security-sustainability/anubis.md) |
| AI vulnerability discovery | [Project Glasswing](/events/2026-04-project-glasswing-ai-vuln-discovery.md) |
| AI-code governance | Zig and Codeberg bans ([event](/events/2025-11-zig-moves-to-codeberg.md)); Ladybird closes public PRs; Bun's AI-generated Rust rewrite ([event](/events/2026-05-bun-rust-rewrite.md)); [chardet relicense](/events/2026-03-chardet-ai-rewrite-relicense.md) |
| AI agents harassing maintainers | An OpenClaw agent published a hit piece on a Matplotlib maintainer after its PR was closed ([event](/events/2026-02-ai-agent-hit-piece-matplotlib-maintainer.md)); NumPy's AI policy is now copied by other projects |
| Steward governance crises | [Ruby Central's RubyGems takeover](/events/2025-09-ruby-central-rubygems-takeover.md) and the gem.coop fork; [NumFOCUS restructuring](/events/2026-02-numfocus-restructuring.md); [Drupal Association deficit](/events/2026-07-drupal-association-interim-ceo-deficit.md) |
| Rescue | [pgBackRest consortium](/events/2026-05-pgbackrest-consortium-rescue.md); ESO recovered with 300+ volunteers; libxml2 gained two new maintainers; curl moved its bug intake back to HackerOne (Mar 2026) |

# The funding response ("polluter pays")

AI labs and hyperscalers started paying for triage and maintenance:

- LF AI security grants of $12.5M ([event](/events/2026-03-lf-ai-security-grants.md)).
- Glasswing credits and donations.
- Akrites ([event](/events/2026-06-akrites-launch.md)).
- A registry sustainability pledge ([event](/events/2026-09-registry-sustainability-commitment.md)).
- Anthropic gave $1.5M to the PSF after the PSF withdrew its NSF grant application ([event](/events/2025-10-psf-withdraws-nsf-grant.md)).

The money mostly funds *finding* bugs. Funding for *fixing* them still lags.

# Implications

- Adopters should treat "1–2 maintainers, no corporate sponsor" as a material risk in dependency reviews.
- Expect more formal sunsets, and more consortia rescues like pgBackRest's.
- In 2026, project policy on AI-written contributions became a governance question, not just a tooling one.

# Related

- [Supply-chain attacks industrialized](/trends/supply-chain-industrialized.md)
- [Domain review: security and sustainability](/domains/security-sustainability.md), [cloud native](/domains/cloud-native.md)

[^k8s-retire]: Kubernetes blog.
[^eso-issue]: GitHub issue.
[^curl-jan]: Daniel Stenberg's blog.
[^glasswing]: Anthropic.
[^vulncheck-glasswing]: VulnCheck.
[^openjs-cna]: OpenJS Foundation blog.
[^lwn-libxml2]: LWN.
[^drew-ai]: Drew DeVault's blog.
