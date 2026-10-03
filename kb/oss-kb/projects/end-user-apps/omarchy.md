---
type: OSS Project
title: Omarchy
description: "DHH's opinionated Arch + Hyprland setup turned distro; viral growth (1.2M ISO downloads in year one) and ~$18.5M pledged to its Omacom Foundation by Sept 2026, but dogged by security criticism and political backlash."
resource: https://github.com/basecamp/omarchy
tags: [linux-distro, arch-based, hyprland, mit, foundation, controversial, ai-built]
domain: end-user-apps
license: MIT
license_history: ["MIT (2025-)"]
governance: single-vendor
steward: Omacom Foundation (DHH / 37signals ecosystem)
backing_orgs: []
metrics:
  github_stars: { value: 43857, as_of: 2026-10-03 }
  pledged_usd: { value: "18.5M", as_of: 2026-09-17 }
  iso_downloads_year_one: { value: 1224272, as_of: 2026-09 }
oss_verdict: contested
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: active
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: launch
    resource: https://world.hey.com/dhh/omarchy-is-out-4666dd31
    title: "DHH: Omarchy is out"
  - id: cf
    resource: https://blog.cloudflare.com/supporting-the-future-of-the-open-web/
    title: "Cloudflare: Supporting the future of the open web (sponsoring Ladybird and Omarchy)"
  - id: reg
    resource: https://www.theregister.com/software/2026/09/17/omarchy-gains-185m-in-backing-fresh-converts-and-fierce-critics/5296780
    title: "The Register: Omarchy gains $18.5M in backing, fresh converts and fierce critics"
    author: org:the-register
  - id: dealroom
    resource: https://dealroom.co/news/151562-dhhs-omarchy-linux-draws-18-5m-and-a-backlash/
    title: "Dealroom: DHH's Omarchy Linux draws $18.5M — and a backlash"
  - id: root
    resource: https://0xcc.io/posts/omarchy-root-creds/
    title: "0xcc: Omarchy — any user process can escalate to root"
  - id: insecurity
    resource: https://blog.happyfellow.dev/merchants-of-insecurity/
    title: "Omarchy development practices lead to predictable security issues"
  - id: notdistro
    resource: https://abyss.fish/your_dotfiles_are_not_a_distro
    title: "Omarchy is not a distro (critique)"
  - id: gh
    resource: https://github.com/basecamp/omarchy
    title: Omarchy GitHub repository
---
# Summary
Omarchy is the surprise phenomenon of the Linux desktop wave: released by David Heinemeier Hansson in August 2025[^launch], it reported 1,224,272 ISO downloads in its first year and ~44k GitHub stars[^dealroom][^gh]. Cloudflare sponsored it in Sept 2025[^cf], and by mid-September 2026 its Omacom Foundation claimed ~$18.5M in pledges (including multi-year commitments and AI-lab token credits from Meta Superintelligence Labs, OpenAI, Fireworks and — briefly — Anthropic, which was delisted as a patron on Sept 18) and hired kernel and infrastructure engineers[^reg]. It is also the most contested project in the domain: August 2026 posts documented a root privilege-escalation path and criticized "agent-built" development practices[^root][^insecurity], critics argue it is dotfiles rather than a distro[^notdistro], and DHH's politics drew sharp condemnation (e.g., Matthew Garrett: "fundamentally incompatible with the goals of free software")[^reg]. Verdict: OSS contested, funding growing fast.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-24 | Omarchy released[^launch] | OSS | + |
| W24 | 2025-09-22 | Cloudflare sponsorship[^cf] | Business | + |
| W6 | 2026-05-24 | "Omarchy is not a distro" critique trends[^notdistro] | OSS | − |
| W3 | 2026-08-26/30 | Security critiques; root escalation disclosure[^insecurity][^root] | OSS | − |
| W3 | 2026-08/09 | Omacom Foundation pledges rise $8M → $10M → ~$18.5M; hires incl. kernel dev Krzysztof Wilczyński; Omarchy M (Apple Silicon) announced[^reg] | Business | + |
| W3 | 2026-09-18 | Anthropic delisted from patron status[^reg] | Business | − |

# OSS successes
- Massive adoption funnel for Arch/Hyprland among developers; 1.2M ISO downloads in year one[^dealroom].
# OSS failures / risks
- Security posture questioned (root escalation; "almost exclusively built by agents" claim for the Quattro release)[^reg][^root].
- Polarizing leadership; community splits along political lines[^reg].
# Business successes
- ~$18.5M pledged in weeks; corporate patrons DigitalOcean, OpenRouter, Four Technologies[^reg].
# Business failures / risks
- Pledges and token credits are not cash; patron churn already visible (Anthropic delisting)[^reg].

# By window
## W3
- Funding surge, hires, security critiques, patron churn[^reg][^root].
## W6
- Distro-legitimacy critiques[^notdistro].
## W9
- No notable events found.
## W12
- No notable events found (steady growth).
## W24
- Launch and Cloudflare sponsorship[^launch][^cf].

# Lessons
- Celebrity founders can bootstrap distribution and money far faster than traditional community projects.
- AI-built system software invites security scrutiny; foundations must invest in review.
- Funding announcements that mix pledges and AI credits should be read cautiously.

# Related
- [Omarchy funding event](/events/2026-09-omarchy-omacom-funding.md)
- [Arch Linux](/projects/end-user-apps/arch-linux.md), [CachyOS](/projects/end-user-apps/cachyos.md), [Ladybird](/projects/end-user-apps/ladybird.md)

[^launch]: https://world.hey.com/dhh/omarchy-is-out-4666dd31
[^cf]: https://blog.cloudflare.com/supporting-the-future-of-the-open-web/
[^reg]: https://www.theregister.com/software/2026/09/17/omarchy-gains-185m-in-backing-fresh-converts-and-fierce-critics/5296780
[^dealroom]: https://dealroom.co/news/151562-dhhs-omarchy-linux-draws-18-5m-and-a-backlash/
[^root]: https://0xcc.io/posts/omarchy-root-creds/
[^insecurity]: https://blog.happyfellow.dev/merchants-of-insecurity/
[^notdistro]: https://abyss.fish/your_dotfiles_are_not_a_distro
[^gh]: https://github.com/basecamp/omarchy
