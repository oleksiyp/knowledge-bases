---
type: OSS Project
title: SillyTavern
description: "Community-run AGPL front end for character/role-play chat with any LLM (~34k stars), with no company behind it and steady releases through 1.19 (Sep 2026) — stable, pure-community success."
resource: https://github.com/SillyTavern/SillyTavern
tags: [ai-apps, chat-ui, roleplay, agpl-3.0, community]
domain: ai-apps
license: AGPL-3.0
license_history: ["AGPL-3.0 (fork of TavernAI, 2023-)"]
governance: community
steward: SillyTavern community
backing_orgs: []
metrics:
  github_stars: { value: 34034, as_of: 2026-10-03 }
  github_forks: { value: 6400, as_of: 2026-10-03 }
  latest_release: { value: "1.19.0 (2026-09-14)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: st-gh
    resource: https://github.com/SillyTavern/SillyTavern
    title: SillyTavern GitHub repository (GitHub API, 2026-10-03)
  - id: st-weekly
    resource: https://rpfiend.com/sillytavern-weekly-april-27-2026/
    title: "SillyTavern Weekly News (2026-04-27)"
  - id: st-guide
    resource: https://aituts.com/sillytavern-guide/
    title: "SillyTavern guide 2026"
---

# Summary
SillyTavern, a 2023 fork of TavernAI, is the dominant open front end for character and role-play chat, connecting to local backends and every major API; ~34k stars, ~6.4k forks[^st-gh]. It has no company, no funding and no monetisation, yet ships regular releases (1.17 Mar 2026, 1.18 May 2026, 1.19 Sep 2026)[^st-gh]. Its niche community keeps it current with each new model release[^st-weekly][^st-guide]. Verdict: stable community project; business n/a.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-03-28 | 1.17.0[^st-gh] | OSS | + |
| W6 | 2026-05-03 | 1.18.0[^st-gh] | OSS | + |
| W3 | 2026-09-14 | 1.19.0[^st-gh] | OSS | + |

# OSS successes
- Sustained volunteer development with AGPL keeping forks open[^st-gh].
# OSS failures / risks
- Niche (role-play) audience; content-policy exposure via upstream APIs.
# Business successes
- n/a.
# Business failures / risks
- n/a — no company.

# By window
## W3
- 1.19.0[^st-gh].
## W6
- 1.18.0[^st-gh].
## W9
- 1.17.0[^st-gh].
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Tightly-scoped community apps with passionate users can outlast VC-backed generalists.

# Related
- [TextGen (text-generation-webui)](/projects/ai-apps/textgen.md), [Open WebUI](/projects/ai-apps/open-webui.md)

[^st-gh]: GitHub API, SillyTavern/SillyTavern — https://github.com/SillyTavern/SillyTavern
[^st-weekly]: RPFiend weekly — https://rpfiend.com/sillytavern-weekly-april-27-2026/
[^st-guide]: aituts guide — https://aituts.com/sillytavern-guide/
