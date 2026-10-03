---
type: OSS Project
title: Godot Engine
description: MIT-licensed game engine stewarded by the Godot Foundation; four feature releases (4.4–4.7) in 16 months, record-breaking Slay the Spire 2 (Mar 2026) and an $18M Tencent-led round for W4 Games (Sep 2026) cement it as the leading open alternative to Unity/Unreal.
resource: https://github.com/godotengine/godot
tags: [game-engine, mit, foundation-hosted, gamedev]
domain: devtools-languages
license: MIT
license_history: ["MIT (2014-)"]
governance: foundation
steward: Godot Foundation
backing_orgs: []
metrics:
  github_stars: { value: 118083, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: godot-gh
    resource: https://github.com/godotengine/godot
    title: Godot GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-godot
    resource: https://en.wikipedia.org/wiki/Godot_(game_engine)
    title: "Wikipedia: Godot (game engine)"
  - id: godot-releases
    resource: https://github.com/godotengine/godot/releases
    title: "Godot GitHub releases (4.4 2025-03-03; 4.5 2025-09-15; 4.6 2026-01-26; 4.7 2026-06-18; 4.7.2 2026-08-18; via GitHub API)"
  - id: godot-47
    resource: https://godotengine.org/releases/4.7/
    title: "Godot 4.7 release page (HDR output, AreaLight3D, Asset Store; 300+ contributors)"
  - id: gamefromscratch-bf6
    resource: https://gamefromscratch.com/battlefield-6-using-godot-game-engine/
    title: "GameFromScratch: Battlefield 6 Using Godot Game Engine (Portal editor)"
  - id: megacrit-ea
    resource: https://www.megacrit.com/news/2026-02-19-release-date-trailer/
    title: "Mega Crit: Slay the Spire 2 releases in Early Access on March 5, 2026"
  - id: gol-sts2
    resource: https://www.gamingonlinux.com/2026/03/slay-the-spire-2-becomes-the-biggest-roguelike-deck-builder-on-steam-ever/
    title: "GamingOnLinux: Slay the Spire 2 becomes the biggest roguelike deck-builder on Steam ever (March 2026)"
  - id: pcgamer-sts2
    resource: https://www.pcgamer.com/games/card-games/slay-the-spire-2-ditched-unity-for-open-source-engine-godot-after-2-years-of-development/
    title: "PC Gamer: Slay the Spire 2 ditched Unity for open-source engine Godot"
  - id: finsmes-w4
    resource: https://www.finsmes.com/2026/09/w4-games-raises-18m-in-series-b-funding.html
    title: "FinSMEs: W4 Games raises $18M in Series B funding (Tencent lead; 2026-09-22)"
---

# Summary
Godot is a clear OSS success: 118k GitHub stars and a predictable release train — 4.4 (2025-03-03: in-game editing, ubershaders, Jolt physics), 4.5 (2025-09-15), 4.6 (2026-01-26) and 4.7 (2026-06-18: HDR output, AreaLight3D, a new Asset Store; 300+ contributors, 1,600+ PRs).[^godot-gh][^godot-releases][^godot-47] Adoption reached marquee titles: *Battlefield 6* ships a custom Godot build as its Portal map editor, and *Slay the Spire 2* — moved from Unity to Godot after the 2023 runtime-fee fiasco — launched in Early Access on 2026-03-05 and peaked at ~331k concurrent Steam players, by far the biggest Godot release ever.[^gamefromscratch-bf6][^pcgamer-sts2][^megacrit-ea][^gol-sts2] On the business side, W4 Games (the commercial company founded by Godot's creators, offering console ports and enterprise support) raised an $18M Series B led by Tencent on 2026-09-22 ($33M total), with a multi-year partnership to grow Godot in Asia.[^finsmes-w4] Verdict: thriving OSS; commercial ecosystem growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-03 | Godot 4.4 [^godot-releases] | OSS | + |
| W24 | 2025-08 | Battlefield 6 Portal editor revealed to be built on Godot [^gamefromscratch-bf6] | OSS | + |
| W24 | 2025-09-15 | Godot 4.5 [^godot-releases] | OSS | + |
| W9 | 2026-01-26 | Godot 4.6 [^godot-releases] | OSS | + |
| W9 | 2026-03-05 | Slay the Spire 2 (Godot) Early Access; record ~331k concurrent players [^megacrit-ea][^gol-sts2] | OSS | + |
| W6 | 2026-06-18 | Godot 4.7 (HDR, area lights, Asset Store) [^godot-releases][^godot-47] | OSS | + |
| W3 | 2026-08-18 | Godot 4.7.2 maintenance release [^godot-releases] | OSS | = |
| W3 | 2026-09-22 | W4 Games $18M Series B led by Tencent; Asia partnership [^finsmes-w4] | Business | + |

# OSS successes
- Steady ~semiannual feature releases plus maintenance releases; high-profile commercial games.[^godot-releases][^gol-sts2]

# OSS failures / risks
- Console support still relies on third parties (e.g., W4 Games); funding dwarfed by commercial engines.

# Business successes
- Godot Foundation donations reportedly doubled after the 2023 Unity runtime-fee controversy (per Wikipedia; not re-verified in pass 2).[^wiki-godot]
- W4 Games' $18M Series B (Tencent) — the first sizable venture round in the Godot ecosystem in this period.[^finsmes-w4]

# Business failures / risks
- Tencent's lead role in the main commercial Godot company may raise neutrality questions; no public Godot Foundation financials for 2025–26 were found.

# By window
## W3
- 4.7.x maintenance; W4 Games $18M Series B (2026-09-22).[^godot-releases][^finsmes-w4]
## W6
- Godot 4.7 (2026-06-18).[^godot-47]
## W9
- Godot 4.6 (2026-01-26); Slay the Spire 2 Early Access record launch (2026-03-05).[^godot-releases][^gol-sts2]
## W12
- 4.5.1 maintenance (2025-10-15); no major events.[^godot-releases]
## W24
- 4.4 and 4.5; Battlefield 6 Portal on Godot.[^godot-releases][^gamefromscratch-bf6]

# Lessons
- Vendor missteps by proprietary incumbents (Unity 2023) can produce durable, multi-year OSS adoption if the project keeps shipping.
- A hit commercial title is the strongest possible marketing for an OSS engine.

# Related
- [Ladybird](/projects/devtools-languages/ladybird.md) (another donor-funded nonprofit project), [Rust](/projects/devtools-languages/rust.md)

[^godot-gh]: Godot GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/godotengine/godot
[^wiki-godot]: Wikipedia: Godot (game engine) — https://en.wikipedia.org/wiki/Godot_(game_engine)
[^godot-releases]: Godot GitHub releases — https://github.com/godotengine/godot/releases
[^godot-47]: Godot 4.7 release page — https://godotengine.org/releases/4.7/
[^gamefromscratch-bf6]: GameFromScratch: Battlefield 6 Using Godot — https://gamefromscratch.com/battlefield-6-using-godot-game-engine/
[^megacrit-ea]: Mega Crit: Slay the Spire 2 Early Access date — https://www.megacrit.com/news/2026-02-19-release-date-trailer/
[^gol-sts2]: GamingOnLinux: Slay the Spire 2 biggest roguelike deck-builder on Steam — https://www.gamingonlinux.com/2026/03/slay-the-spire-2-becomes-the-biggest-roguelike-deck-builder-on-steam-ever/
[^pcgamer-sts2]: PC Gamer: Slay the Spire 2 ditched Unity for Godot — https://www.pcgamer.com/games/card-games/slay-the-spire-2-ditched-unity-for-open-source-engine-godot-after-2-years-of-development/
[^finsmes-w4]: FinSMEs: W4 Games raises $18M Series B — https://www.finsmes.com/2026/09/w4-games-raises-18m-in-series-b-funding.html
